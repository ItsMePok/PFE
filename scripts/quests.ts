import { CustomComponentParameters, EntityComponentTypes, EquipmentSlot, ItemComponentUseEvent, ItemStack, Player, world } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { PokeGetItemFromInventory, PokeSaveProperty } from "./commonFunctions";
import { ActionFormData } from "@minecraft/server-ui";
import { clampNumber } from "@minecraft/math";


/*
Add-On Creators: You can add quests into PFE's quest system.

Note: the custom quests get re-initialized after the world loads. 
This is to ensure that players will not get quests for. Add-Ons that are no longer in the world

Note x2: Quests that have been rolled not be able to be changed

This is example code. This will add a Mine quest for 7x Cut Cobalt for 7x Copper Tokens:
*/
/*
import { ItemStack, world } from "@minecraft/server"

interface PFEQuestInfo {
  requiredItem: {
    item: string,
    amount: number
    translationString: string
  },
  reward: {
    tokenAmount: number,
    item?: ItemStack
  }
}
interface PFECustomQuests {
    value: PFEQuestInfo[]
}
const PFECustomMineQuestsPropertyID = `poke_pfe:custom_mine_quests`
const PFECustomFarmQuestsPropertyID = `poke_pfe:custom_farm_quests`
const PFECustomCraftQuestsPropertyID = `poke_pfe:custom_craft_quests`
const PFECustomKillQuestsPropertyID = `poke_pfe:custom_kill_quests`

world.afterEvents.worldInitialize.subscribe((data) => {
  const AddedMineQuests:PFECustomQuests = {
    value: [
      { requiredItem: { item: `poke:cut_cobalt`, amount: 7, translationString: `%poke_pfe.cut_cobalt (%poke_pfe.tag)` }, reward: { tokenAmount: 7 } }
    ]
  }
  world.getDimension(`minecraft:overworld`).runCommand(`scriptevent poke_pfe:custom_mine_quests ${JSON.stringify(AddedMineQuests)}`)
})
*/

export {
  PFEQuestPropertyID,
  PFEQuestVersion,
  PFERollQuest,
  PFEv1QuestInfo,
  PFEv2QuestInfo,
  PokePFEQuestComponent,
  PFECustomMineQuestsPropertyID,
  PFECustomFarmQuestsPropertyID,
  PFECustomCraftQuestsPropertyID,
  PFECustomKillQuestsPropertyID
}
const PFEQuestVersion = 1
/* Item Dynamic Property */
const PFEQuestPropertyID = `poke_pfe:quests`
/* World Dynamic Properties */
const PFECustomMineQuestsPropertyID = `poke_pfe:custom_mine_quests`
const PFECustomFarmQuestsPropertyID = `poke_pfe:custom_farm_quests`
const PFECustomCraftQuestsPropertyID = `poke_pfe:custom_craft_quests`
const PFECustomKillQuestsPropertyID = `poke_pfe:custom_kill_quests`
/**/
interface PFEv1QuestInfo {
  requiredItem: {
    item: string,
    amount: number
    translationString: string
  },
  reward: {
    tokenAmount: number,
    item?: ItemStack
  }
}
interface PFEv2QuestInfo {
  item: string,
  amount: number
  translationString: string
  tokenAmount: number
}

function PFERollQuest(item: ItemStack, player: Player, questType: PFEv2QuestInfo[]) {
  console.warn(JSON.stringify(questType))
  let AddingQuest = questType.at(Math.round(Math.random() * questType.length)) ?? questType.at(0) ?? { requiredItem: {}, reward: { tokenAmount: 0, item: new ItemStack(MinecraftItemTypes.Dirt, 1) } }
  item.keepOnDeath = true
  PokeSaveProperty(PFEQuestPropertyID, item, JSON.stringify(AddingQuest), player, undefined)
  QuestInfoUI(item, player)
}
interface PFEQuestAdditionalComponentInfo {
  version: typeof PFEQuestVersion
  custom_quest_dynamic_property?: string
}

class PokePFEQuestComponent {
  onUse(data: ItemComponentUseEvent, component: CustomComponentParameters) {
    if (!data.itemStack) return
    console.warn(JSON.stringify(component))
    const componentInfo = <PFEv2QuestInfo[]>component.params
    console.warn(JSON.stringify(componentInfo))
    const additionalComponentInfo = <PFEQuestAdditionalComponentInfo | undefined>data.itemStack.getComponent("poke_pfe:custom_quests_info")
    if (!data.itemStack.getDynamicProperty(PFEQuestPropertyID)) {
      let quests: PFEv2QuestInfo[] = []
      componentInfo ? quests = quests.concat(componentInfo) : undefined
      additionalComponentInfo?.custom_quest_dynamic_property ? typeof data.itemStack.getDynamicProperty(additionalComponentInfo.custom_quest_dynamic_property) === "string" ? quests = quests.concat(JSON.parse(data.itemStack.getDynamicProperty(additionalComponentInfo.custom_quest_dynamic_property)!.toString())) ?? quests : undefined : undefined
      let upgradedQuests = ConvertQuestV1toV2(quests)
      PFERollQuest(data.itemStack, data.source, upgradedQuests)
    } else {
      QuestInfoUI(data.itemStack, data.source)
    }
  }
}
function QuestInfoUI(item: ItemStack, player: Player) {
  if (!item) return
  let UI = new ActionFormData()
  let quest: PFEv2QuestInfo = JSON.parse(item.getDynamicProperty(PFEQuestPropertyID)!.toString()) ?? console.warn(`Quest not found or failed to parse || poke_pfe:quest`)
  let validRequiredItems = PokeGetItemFromInventory(player, undefined, quest.item) ?? false
  let totalItems = 0
  let canComplete = false
  UI.title({ translate: `translation.poke_pfe.quest_info` })
  UI.body({ translate: `%translation.poke_pfe.items_needed:\n- §c${quest.amount}§rx ${quest.translationString}\n%translation.poke_pfe.quest_reward:\n- §c${quest.tokenAmount}§rx %poke_pfe.copper_token (%poke_pfe.tag)` })
  if (validRequiredItems) {
    for (let item of validRequiredItems) {
      if (!item) continue;
      totalItems += item.amount
      continue;
    }
  }
  if (validRequiredItems && quest.amount <= totalItems) {
    UI.button({ translate: `translation.poke_pfe.completeQuest` }, `textures/poke/common/confirm`)
    canComplete = true
  } else UI.button({ translate: `translation.poke_pfe.missing_items` }, `textures/poke/common/chest_question`)

  UI.button({ translate: `translation.poke:bossEventClose` }, 'textures/poke/common/close')
  UI.show(player).then(response => {
    let selection = 0
    if ((response.selection == selection) && canComplete) {
      player.runCommand(`clear @s ${quest.item} 0 ${quest.amount}`)
      player.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, undefined)
      player.dimension.spawnItem(new ItemStack(`poke:copper_token`, quest.tokenAmount), player.location)
      player.playSound(`poke_pfe.quest.complete`, { pitch: clampNumber(Math.random() + 0.5, 0.85, 1.15), volume: 0.9 })
    } else selection++
    if (response.canceled || (response.selection == selection)) {
      return;
    }
  })
}
function ConvertQuestV1toV2(quests: any[]) {
  let newQuestList: PFEv2QuestInfo[] = []
  for (let quest of quests) {
    if (!quest.requiredItem?.item) { newQuestList.push(quest); continue };
    let newQuest: PFEv2QuestInfo = {
      item: quest.requiredItem.item,
      amount: quest.requiredItem.amount,
      translationString: quest.requiredItem.translationString,
      tokenAmount: quest.reward.tokenAmount
    }
    newQuestList.push(newQuest)
  }
  return newQuestList
}