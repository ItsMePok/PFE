import { EntityComponentTypes, EquipmentSlot, ItemStack } from "@minecraft/server";
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
interface PFECustomQuests {
  value: {
    requiredItem: {
      item: string,
      amount: number
      translationString: string
    },
    reward: {
      tokenAmount: number,
      item?: ItemStack
    }
  }[]
}
const PFECustomMineQuestsPropertyID = `poke_pfe:custom_mine_quests`
const PFECustomFarmQuestsPropertyID = `poke_pfe:custom_farm_quests`
const PFECustomCraftQuestsPropertyID = `poke_pfe:custom_craft_quests`
const PFECustomKillQuestsPropertyID = `poke_pfe:custom_kill_quests`
world.afterEvents.worldLoad.subscribe(data => {
  system.runTimeout(() => {
    const AddedMineQuests: PFECustomQuests = {
      value: [
        { requiredItem: { item: `poke:cut_cobalt`, amount: 7, translationString: `%poke_pfe.cut_cobalt (%poke_pfe.tag)` }, reward: { tokenAmount: 7 } }
      ]
    }
    world.getDimension(`minecraft:overworld`).runCommand(`scriptevent poke_pfe:custom_mine_quests ${JSON.stringify(AddedMineQuests)}`)
  }, 20)
})
*/
export { PFEQuestPropertyID, PFEQuestVersion, PFERollQuest, PFEQuestComponent, PFECustomMineQuestsPropertyID, PFECustomFarmQuestsPropertyID, PFECustomCraftQuestsPropertyID, PFECustomKillQuestsPropertyID };
const PFEQuestVersion = 1;
/* Item Dynamic Property */
const PFEQuestPropertyID = `poke_pfe:quests`;
/* World Dynamic Properties */
const PFECustomMineQuestsPropertyID = `poke_pfe:custom_mine_quests`;
const PFECustomFarmQuestsPropertyID = `poke_pfe:custom_farm_quests`;
const PFECustomCraftQuestsPropertyID = `poke_pfe:custom_craft_quests`;
const PFECustomKillQuestsPropertyID = `poke_pfe:custom_kill_quests`;
function PFERollQuest(item, player, questType) {
    //console.warn(JSON.stringify(questType))
    let AddingQuest = questType.at(Math.round(Math.random() * questType.length)) ?? questType.at(0) ?? { requiredItem: {}, reward: { tokenAmount: 0, item: new ItemStack(MinecraftItemTypes.Dirt, 1) } };
    item.keepOnDeath = true;
    PokeSaveProperty(PFEQuestPropertyID, item, JSON.stringify(AddingQuest), player, undefined);
    QuestInfoUI(item, player);
}
class PFEQuestComponent {
    onUse(data, component) {
        if (!data.itemStack)
            return;
        // console.warn(JSON.stringify(component))
        const componentInfo = component.params;
        //console.warn(JSON.stringify(componentInfo))
        const additionalComponentInfo = data.itemStack.getComponent("poke_pfe:custom_quests_info");
        //console.warn(JSON.stringify(additionalComponentInfo))
        if (!data.itemStack.getDynamicProperty(PFEQuestPropertyID)) {
            let quests = [];
            componentInfo ? quests = quests.concat(componentInfo) : undefined;
            additionalComponentInfo?.custom_quest_dynamic_property ? typeof data.itemStack.getDynamicProperty(additionalComponentInfo.custom_quest_dynamic_property) === "string" ? quests = quests.concat(JSON.parse(data.itemStack.getDynamicProperty(additionalComponentInfo.custom_quest_dynamic_property).toString())) ?? quests : undefined : undefined;
            let upgradedQuests = ConvertQuestV1toV2(quests);
            PFERollQuest(data.itemStack, data.source, upgradedQuests);
        }
        else {
            QuestInfoUI(data.itemStack, data.source);
        }
    }
}
function QuestInfoUI(item, player) {
    if (!item)
        return;
    let UI = new ActionFormData();
    let quest = JSON.parse(item.getDynamicProperty(PFEQuestPropertyID).toString()) ?? console.warn(`Quest not found or failed to parse || poke_pfe:quest`);
    let validRequiredItems = PokeGetItemFromInventory(player, undefined, quest.item) ?? false;
    let totalItems = 0;
    let canComplete = false;
    UI.title({ translate: `translation.poke_pfe.quest_info` });
    UI.body({ translate: `%translation.poke_pfe.items_needed:\n- §c${quest.amount}§rx ${quest.translationString}\n%translation.poke_pfe.quest_reward:\n- §c${quest.tokenAmount}§rx %poke_pfe.copper_token (%poke_pfe.tag)` });
    if (validRequiredItems) {
        for (let item of validRequiredItems) {
            if (!item)
                continue;
            totalItems += item.amount;
            continue;
        }
    }
    if (validRequiredItems && quest.amount <= totalItems) {
        UI.button({ translate: `translation.poke_pfe.completeQuest` }, `textures/poke/common/confirm`);
        canComplete = true;
    }
    else
        UI.button({ translate: `translation.poke_pfe.missing_items` }, `textures/poke/common/chest_question`);
    UI.button({ translate: `translation.poke:bossEventClose` }, 'textures/poke/common/close');
    UI.show(player).then(response => {
        let selection = 0;
        if ((response.selection == selection) && canComplete) {
            player.runCommand(`clear @s ${quest.item} -1 ${quest.amount}`);
            player.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, undefined);
            player.dimension.spawnItem(new ItemStack(`poke:copper_token`, quest.tokenAmount), player.location);
            player.playSound(`poke_pfe.quest.complete`, { pitch: clampNumber(Math.random() + 0.5, 0.85, 1.15), volume: 0.9 });
        }
        else
            selection++;
        if (response.canceled || (response.selection == selection)) {
            return;
        }
    });
}
function ConvertQuestV1toV2(quests) {
    let newQuestList = [];
    for (let quest of quests) {
        if (!quest.requiredItem?.item) {
            newQuestList.push(quest);
            continue;
        }
        ;
        let newQuest = {
            item: quest.requiredItem.item,
            amount: quest.requiredItem.amount,
            translationString: quest.requiredItem.translationString,
            tokenAmount: quest.reward.tokenAmount
        };
        newQuestList.push(newQuest);
    }
    return newQuestList;
}
//# sourceMappingURL=quests.js.map