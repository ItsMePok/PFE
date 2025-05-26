import { EntityComponentTypes, EquipmentSlot, ItemStack, world } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { PokeGetItemFromInventory, PokeSaveProperty } from "./commonFunctions";
import { ActionFormData } from "@minecraft/server-ui";
import { clampNumber } from "@minecraft/math";
/*
Add-On Creators: You can add quests into PFE's quest system.

Note: the custom quests get re-initialized each time the world starts. This is to ensure that players will not get quests for Add-Ons that are no longer in the world

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
export { PFEQuestPropertyID, PFEQuestVersion, PFEMineQuests, PFEFarmQuests, PFECraftQuests, PFEKillQuests, PFERollQuest, PokePFEQuestComponent, PFECustomMineQuestsPropertyID, PFECustomFarmQuestsPropertyID, PFECustomCraftQuestsPropertyID, PFECustomKillQuestsPropertyID };
const PFEQuestVersion = 1;
/* Item Dynamic Property */
const PFEQuestPropertyID = `poke_pfe:quests`;
/* World Dynamic Properties */
const PFECustomMineQuestsPropertyID = `poke_pfe:custom_mine_quests`;
const PFECustomFarmQuestsPropertyID = `poke_pfe:custom_farm_quests`;
const PFECustomCraftQuestsPropertyID = `poke_pfe:custom_craft_quests`;
const PFECustomKillQuestsPropertyID = `poke_pfe:custom_kill_quests`;
const PFEMineQuests = [
    { requiredItem: { item: MinecraftItemTypes.RawCopper, amount: 4, translationString: `item.raw_copper.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.Coal, amount: 4, translationString: `item.coal.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.RawIron, amount: 4, translationString: `item.raw_iron.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.RawGold, amount: 4, translationString: `item.raw_gold.name` }, reward: { tokenAmount: 3 } },
    { requiredItem: { item: MinecraftItemTypes.Diamond, amount: 2, translationString: `item.diamond.name` }, reward: { tokenAmount: 8 } },
    { requiredItem: { item: MinecraftItemTypes.Stone, amount: 8, translationString: `tile.stone.stone.name` }, reward: { tokenAmount: 1 } },
    { requiredItem: { item: MinecraftItemTypes.CobbledDeepslate, amount: 16, translationString: `tile.cobbled_deepslate.name` }, reward: { tokenAmount: 1 } },
    { requiredItem: { item: MinecraftItemTypes.Cobblestone, amount: 16, translationString: `tile.cobblestone.name` }, reward: { tokenAmount: 1 } },
    { requiredItem: { item: `poke:raw_cobalt`, amount: 8, translationString: `%poke_pfe.raw_cobalt (%poke_pfe.tag)` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: `poke:raw_shade`, amount: 8, translationString: `%poke_pfe.raw_shade (%poke_pfe.tag)` }, reward: { tokenAmount: 4 } },
    { requiredItem: { item: `poke:raw_onyx`, amount: 4, translationString: `%poke_pfe.raw_onyx (%poke_pfe.tag)` }, reward: { tokenAmount: 5 } },
    { requiredItem: { item: `poke:raw_demonic`, amount: 4, translationString: `%poke_pfe.raw_demonic (%poke_pfe.tag)` }, reward: { tokenAmount: 5 } },
    { requiredItem: { item: `poke:raw_hellish`, amount: 6, translationString: `%poke_pfe.raw_hellish (%poke_pfe.tag)` }, reward: { tokenAmount: 4 } },
    { requiredItem: { item: `poke:cobbled_limestone`, amount: 8, translationString: `%poke_pfe.cobbled_limestone (%poke_pfe.tag)` }, reward: { tokenAmount: 2 } }
];
const PFEKillQuests = [
    { requiredItem: { item: MinecraftItemTypes.RottenFlesh, amount: 4, translationString: `item.rotten_flesh.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.Bone, amount: 4, translationString: `item.bone.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.String, amount: 4, translationString: `item.string.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.Leather, amount: 4, translationString: `item.leather.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.Feather, amount: 4, translationString: `item.feather.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.RabbitHide, amount: 4, translationString: `item.rabbit_hide.name` }, reward: { tokenAmount: 4 } },
    { requiredItem: { item: MinecraftItemTypes.RabbitFoot, amount: 1, translationString: `item.rabbit_foot.name` }, reward: { tokenAmount: 12 } },
    { requiredItem: { item: MinecraftItemTypes.BlazeRod, amount: 16, translationString: `item.blaze_rod.name` }, reward: { tokenAmount: 32 } },
    { requiredItem: { item: `poke:rotten_chicken`, amount: 8, translationString: `%poke_pfe.rotten_chicken (%poke_pfe.tag)` }, reward: { tokenAmount: 8 } }
];
const PFECraftQuests = [
    { requiredItem: { item: MinecraftItemTypes.Compass, amount: 1, translationString: `item.compass.name` }, reward: { tokenAmount: 6 } },
    { requiredItem: { item: MinecraftItemTypes.Clock, amount: 1, translationString: `item.clock.name` }, reward: { tokenAmount: 6 } },
    { requiredItem: { item: MinecraftItemTypes.TurtleHelmet, amount: 1, translationString: `item.turtle_helmet.name` }, reward: { tokenAmount: 64 } },
    { requiredItem: { item: MinecraftItemTypes.WolfArmor, amount: 1, translationString: `item.wolf_armor.name` }, reward: { tokenAmount: 12 } },
    { requiredItem: { item: MinecraftItemTypes.Spyglass, amount: 1, translationString: `item.spyglass.name` }, reward: { tokenAmount: 4 } },
    { requiredItem: { item: MinecraftItemTypes.DaylightDetector, amount: 1, translationString: `tile.daylight_detector.name` }, reward: { tokenAmount: 6 } },
    { requiredItem: { item: MinecraftItemTypes.EnderEye, amount: 2, translationString: `item.ender_eye.name` }, reward: { tokenAmount: 8 } },
];
const PFEFarmQuests = [
    { requiredItem: { item: MinecraftItemTypes.Wheat, amount: 4, translationString: `item.wheat.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.Carrot, amount: 4, translationString: `item.carrot.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.Potato, amount: 4, translationString: `item.potato.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.Beetroot, amount: 4, translationString: `item.beetroot.name` }, reward: { tokenAmount: 3 } },
    { requiredItem: { item: MinecraftItemTypes.BeetrootSoup, amount: 1, translationString: `item.beetroot_soup.name` }, reward: { tokenAmount: 5 } },
    { requiredItem: { item: MinecraftItemTypes.MelonSlice, amount: 8, translationString: `item.melon.name` }, reward: { tokenAmount: 4 } },
    { requiredItem: { item: MinecraftItemTypes.Pumpkin, amount: 4, translationString: `tile.pumpkin.name` }, reward: { tokenAmount: 3 } },
    { requiredItem: { item: MinecraftItemTypes.Torchflower, amount: 1, translationString: `tile.torchflower.name` }, reward: { tokenAmount: 6 } },
    { requiredItem: { item: MinecraftItemTypes.PitcherPlant, amount: 1, translationString: `tile.pitcher_plant.name` }, reward: { tokenAmount: 6 } },
];
function PFERollQuest(item, player, questType) {
    var _a, _b;
    let AddingQuest = (_b = (_a = questType.at(Math.round(Math.random() * questType.length))) !== null && _a !== void 0 ? _a : questType.at(0)) !== null && _b !== void 0 ? _b : { requiredItem: new ItemStack(MinecraftItemTypes.Dirt, 1), reward: { tokenAmount: 0, item: new ItemStack(MinecraftItemTypes.Dirt, 1) } };
    item.keepOnDeath = true;
    PokeSaveProperty(PFEQuestPropertyID, item, JSON.stringify(AddingQuest), player, undefined);
}
class PokePFEQuestComponent {
    onUse(data) {
        var _a, _b, _c, _d, _e, _f;
        if (!data.itemStack)
            return;
        if (!data.itemStack.getDynamicProperty(PFEQuestPropertyID)) {
            let questType = [];
            switch (data.itemStack.typeId) {
                case `poke:mine_quest`: {
                    questType = (world.getDynamicProperty(PFECustomMineQuestsPropertyID)) ? (_a = PFEMineQuests.concat(JSON.parse(world.getDynamicProperty(PFECustomMineQuestsPropertyID).toString()))) !== null && _a !== void 0 ? _a : PFEMineQuests : PFEMineQuests;
                    break;
                }
                case `poke:kill_quest`: {
                    questType = (world.getDynamicProperty(PFECustomKillQuestsPropertyID)) ? (_b = PFEKillQuests.concat(JSON.parse(world.getDynamicProperty(PFECustomKillQuestsPropertyID).toString()))) !== null && _b !== void 0 ? _b : PFEKillQuests : PFEKillQuests;
                    break;
                }
                case `poke:farm_quest`: {
                    questType = (world.getDynamicProperty(PFECustomFarmQuestsPropertyID)) ? (_c = PFEFarmQuests.concat(JSON.parse(world.getDynamicProperty(PFECustomFarmQuestsPropertyID).toString()))) !== null && _c !== void 0 ? _c : PFEFarmQuests : PFEFarmQuests;
                    break;
                }
                case `poke:craft_quest`: {
                    questType = (world.getDynamicProperty(PFECustomCraftQuestsPropertyID)) ? (_d = PFECraftQuests.concat(JSON.parse(world.getDynamicProperty(PFECustomCraftQuestsPropertyID).toString()))) !== null && _d !== void 0 ? _d : PFECraftQuests : PFECraftQuests;
                    break;
                }
                default: { }
            }
            PFERollQuest(data.itemStack, data.source, questType);
        }
        else {
            let UI = new ActionFormData();
            let quest = (_e = JSON.parse(data.itemStack.getDynamicProperty(PFEQuestPropertyID).toString())) !== null && _e !== void 0 ? _e : console.warn(`Quest not found or failed to parse || poke_pfe:quest`);
            let validRequiredItems = (_f = PokeGetItemFromInventory(data.source, undefined, quest.requiredItem.item)) !== null && _f !== void 0 ? _f : false;
            let totalItems = 0;
            let canComplete = false;
            UI.title({ translate: `translation.poke_pfe.quest_info` });
            UI.body({
                rawtext: [
                    { translate: `%translation.poke_pfe.items_needed:\n- §c${quest.requiredItem.amount}§rx ` },
                    { translate: quest.requiredItem.translationString },
                    { translate: `\n%translation.poke_pfe.quest_reward:\n- §c${quest.reward.tokenAmount}§rx %poke_pfe.copper_token (%poke_pfe.tag)` }
                ]
            });
            if (validRequiredItems) {
                for (let item of validRequiredItems) {
                    if (!item)
                        continue;
                    totalItems += item.amount;
                    continue;
                }
            }
            if (validRequiredItems && quest.requiredItem.amount <= totalItems) {
                UI.button({ translate: `translation.poke_pfe.completeQuest` }, `textures/poke/common/confirm`);
                canComplete = true;
            }
            else
                UI.button({ translate: `translation.poke_pfe.missing_items` }, `textures/poke/common/chest_question`);
            UI.button({ translate: `translation.poke:bossEventClose` }, 'textures/poke/common/close');
            UI.show(data.source).then(response => {
                var _a;
                let selection = 0;
                if ((response.selection == selection) && canComplete) {
                    if (quest.reward.item) {
                        data.source.dimension.spawnItem(quest.reward.item, data.source.location);
                    }
                    data.source.runCommand(`clear @s ${quest.requiredItem.item} 0 ${quest.requiredItem.amount}`);
                    (_a = data.source.getComponent(EntityComponentTypes.Equippable)) === null || _a === void 0 ? void 0 : _a.setEquipment(EquipmentSlot.Mainhand, undefined);
                    data.source.dimension.spawnItem(new ItemStack(`poke:copper_token`, quest.reward.tokenAmount), data.source.location);
                    data.source.playSound(`poke_pfe.quest.complete`, { pitch: clampNumber(Math.random() + 0.5, 0.85, 1.15), volume: 0.9 });
                }
                else
                    selection++;
                if (response.canceled || (response.selection == selection)) {
                    return;
                }
            });
        }
    }
}
//# sourceMappingURL=quests.js.map