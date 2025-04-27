import { ItemStack } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { PokeSaveProperty } from "./commonFunctions";
export { PFEQuestPropertyID, PFEQuestVersion, PFEMineQuests, PFEFarmQuests, PFECraftQuests, PFEKillQuests, PFERollQuest };
const PFEQuestVersion = 1;
const PFEQuestPropertyID = `poke_pfe:quests`;
const PFEMineQuests = [
    { requiredItem: { item: MinecraftItemTypes.RawCopper, amount: 4, translationString: `item.raw_copper.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.Coal, amount: 4, translationString: `item.coal.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.RawIron, amount: 4, translationString: `item.raw_iron.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.RawGold, amount: 4, translationString: `item.raw_gold.name` }, reward: { tokenAmount: 3 } },
    { requiredItem: { item: MinecraftItemTypes.Diamond, amount: 2, translationString: `item.diamond.name` }, reward: { tokenAmount: 4 } },
    { requiredItem: { item: MinecraftItemTypes.Stone, amount: 8, translationString: `tile.stone.name` }, reward: { tokenAmount: 1 } },
    { requiredItem: { item: MinecraftItemTypes.CobbledDeepslate, amount: 16, translationString: `tile.cobbled_deepslate.name` }, reward: { tokenAmount: 1 } },
    { requiredItem: { item: MinecraftItemTypes.Cobblestone, amount: 16, translationString: `tile.cobblestone.name` }, reward: { tokenAmount: 1 } },
    { requiredItem: { item: `poke:raw_cobalt`, amount: 8, translationString: `poke_pfe.raw_cobalt (%poke_pfe.tag)` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: `poke:cobbled_limestone`, amount: 8, translationString: `poke_pfe.cobbled_limestone (%poke_pfe.tag)` }, reward: { tokenAmount: 2 } }
];
const PFEKillQuests = [
    { requiredItem: { item: MinecraftItemTypes.RottenFlesh, amount: 4, translationString: `item.rotten_flesh.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.Bone, amount: 4, translationString: `item.bone.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.String, amount: 4, translationString: `item.string.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.Leather, amount: 4, translationString: `item.leather.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.Feather, amount: 4, translationString: `item.feather.name` }, reward: { tokenAmount: 2 } },
    { requiredItem: { item: MinecraftItemTypes.RabbitHide, amount: 4, translationString: `item.rabbit_hide.name` }, reward: { tokenAmount: 4 } },
    { requiredItem: { item: MinecraftItemTypes.RabbitFoot, amount: 1, translationString: `item.rabbit_foot.name` }, reward: { tokenAmount: 12 } },
    { requiredItem: { item: MinecraftItemTypes.BlazeRod, amount: 16, translationString: `item.blaze_rod.name` }, reward: { tokenAmount: 32 } }
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
//# sourceMappingURL=quests.js.map