import { BlockVolume, EntityComponentTypes, EquipmentSlot, ItemComponentTypes, ItemStack, system } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftEnchantmentTypes } from "@minecraft/vanilla-data";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { PokeDamageItemUB, PokeSaveProperty } from "./commonFunctions";
import ComputersCompat from "./addonCompatibility/jigarbov";
import { ParsePFEUpgradeComponent, PokeUpgradeUI } from "./upgrades";
const PFEHaxelVersion = 3;
const PFEHaxelInfoProperty = `pfe:haxelInfo`;
const PFEHaxelConfigDefault = {
    "blacklist": [
        MinecraftBlockTypes.Chest,
        MinecraftBlockTypes.Barrel,
        MinecraftBlockTypes.BuddingAmethyst,
        MinecraftBlockTypes.MobSpawner,
        MinecraftBlockTypes.TrialSpawner,
        MinecraftBlockTypes.Vault,
        MinecraftBlockTypes.Bed
    ],
    "v": PFEHaxelVersion
};
class PFEBoxMiningComponent {
    onUse(data, componentInfo) {
        var _a;
        if (!data.itemStack)
            return;
        let dynamicProperty = data.itemStack.getDynamicProperty(PFEHaxelInfoProperty);
        const component = componentInfo.params;
        if (!dynamicProperty) {
            data.itemStack.setDynamicProperty(PFEHaxelInfoProperty, JSON.stringify(PFEHaxelConfigDefault));
            data.source.getComponent(EntityComponentTypes.Equippable).setEquipment(EquipmentSlot.Mainhand, data.itemStack);
            dynamicProperty = PFEHaxelConfigDefault;
        }
        else
            dynamicProperty = JSON.parse(dynamicProperty.toString());
        if (!dynamicProperty.v) {
            dynamicProperty = UpdateHaxelFromV1toV2(data.itemStack, data.source, dynamicProperty);
        }
        if (data.source.isSneaking) {
            PFEHaxelConfigMenu(data, component, dynamicProperty);
            return;
        }
        let localBlacklist = [];
        localBlacklist = dynamicProperty.blacklist;
        let BannedBlocks = [MinecraftBlockTypes.Air, MinecraftBlockTypes.LightBlock0, MinecraftBlockTypes.LightBlock1, MinecraftBlockTypes.LightBlock2, MinecraftBlockTypes.LightBlock3, MinecraftBlockTypes.LightBlock4, MinecraftBlockTypes.LightBlock5, MinecraftBlockTypes.LightBlock6, MinecraftBlockTypes.LightBlock7, MinecraftBlockTypes.LightBlock8, MinecraftBlockTypes.LightBlock9, MinecraftBlockTypes.LightBlock10, MinecraftBlockTypes.LightBlock11, MinecraftBlockTypes.LightBlock12, MinecraftBlockTypes.LightBlock13, MinecraftBlockTypes.LightBlock14, MinecraftBlockTypes.LightBlock15, MinecraftBlockTypes.Barrier, MinecraftBlockTypes.Jigsaw, MinecraftBlockTypes.StructureBlock, MinecraftBlockTypes.CommandBlock, MinecraftBlockTypes.ChainCommandBlock, MinecraftBlockTypes.RepeatingCommandBlock, MinecraftBlockTypes.BorderBlock, MinecraftBlockTypes.Allow, MinecraftBlockTypes.Deny];
        let location = {
            x: Math.round(data.source.location.x - (component.box_size[0] / 2)) + component.offset[0],
            y: Math.round(data.source.location.y - 0.01 + component.offset[1]),
            z: Math.round(data.source.location.z - (component.box_size[2] / 2)) + component.offset[2]
        };
        component.can_break_indestructible ? undefined : BannedBlocks.push(MinecraftBlockTypes.Bedrock);
        component.can_break_liquids ? undefined : BannedBlocks.push(MinecraftBlockTypes.Water, MinecraftBlockTypes.FlowingWater, MinecraftBlockTypes.Water, MinecraftBlockTypes.FlowingWater);
        system.runJob(PFEMine(BannedBlocks.concat(localBlacklist), component, location, data.source, data.source.dimension, (((_a = data.itemStack.getComponent(ItemComponentTypes.Enchantable)) === null || _a === void 0 ? void 0 : _a.hasEnchantment(MinecraftEnchantmentTypes.SilkTouch)) && component.allow_silk_touch !== false) == true, data.itemStack, component.whitelist));
    }
}
function* PFEMine(BannedBlocks, component, location, player, dimension, silkTouch, item, whitelist) {
    var _a, _b;
    let blocksBroken = 0;
    const BoxX = component.box_size[0];
    const BoxY = component.box_size[1];
    const BoxZ = component.box_size[2];
    const endLocation = {
        x: location.x + ((BoxX > 0 ? BoxX - 1 : BoxX == 0 ? 0 : BoxX + 1)),
        y: location.y + ((BoxY > 0 ? BoxY - 1 : BoxY == 0 ? 0 : BoxY + 1)),
        z: location.z + ((BoxZ > 0 ? BoxZ - 1 : BoxZ == 0 ? 0 : BoxZ + 1))
    };
    let validBlocks = dimension.getBlocks(new BlockVolume(location, endLocation), { excludeTypes: BannedBlocks, includeTypes: whitelist }, true);
    for (let blockLocation of validBlocks.getBlockLocationIterator()) {
        const block = dimension.getBlock(blockLocation);
        if (!block)
            continue;
        if (silkTouch) {
            let blockItemStack = (_a = (block.typeId.includes(`shulker_box`) ? block.getItemStack(1, true) : block.getItemStack(1, false))) !== null && _a !== void 0 ? _a : new ItemStack(block.typeId);
            dimension.spawnItem(blockItemStack, player.location);
        }
        else
            player.runCommand(`loot spawn ${player.location.x} ${player.location.y} ${player.location.z} mine ${block.x} ${block.y} ${block.z} ${item.typeId}`);
        blocksBroken += 1;
    }
    dimension.fillBlocks(validBlocks, MinecraftBlockTypes.Air, { ignoreChunkBoundErrors: true });
    if (blocksBroken < 0) {
        dimension.playSound((_b = component.break_sound) !== null && _b !== void 0 ? _b : "dig.stone", player.location);
    }
    PokeDamageItemUB(item, blocksBroken, player, EquipmentSlot.Mainhand);
    ComputersCompat.addStat("haxel_block_breaks", blocksBroken);
}
function PFEHaxelConfigMenu(data, component, dynamicProperty) {
    var _a, _b, _c, _d;
    if (!data.itemStack)
        return;
    let Ui = new ActionFormData()
        .title({ translate: `translation.poke:haxelConfig.mainMenu.title`, with: { rawtext: [{ translate: (_b = (_a = data.itemStack) === null || _a === void 0 ? void 0 : _a.nameTag) !== null && _b !== void 0 ? _b : `poke_pfe.${(_c = data.itemStack) === null || _c === void 0 ? void 0 : _c.typeId}`.replace(`poke:haxel`, `onyx_haxel`).replace(`poke:`, ``) }] } })
        .button({ translate: `translation.poke:haxelConfig.mainMenu.blacklistAdd` }, `textures/poke/common/blacklist_add`);
    if (dynamicProperty.blacklist.length >= 1) {
        Ui.button({ translate: `translation.poke:haxelConfig.mainMenu.blacklistRemove` }, `textures/poke/common/blacklist_remove`);
    }
    const UpgradeableComponent = (_d = data.itemStack.getComponent("poke_pfe:upgradeable")) === null || _d === void 0 ? void 0 : _d.customComponentParameters.params;
    if (UpgradeableComponent === null || UpgradeableComponent === void 0 ? void 0 : UpgradeableComponent.version) {
        Ui.button({ translate: `poke_pfe.upgrade` }, `textures/poke/common/upgrade`);
    }
    Ui.show(data.source).then((response => {
        let selection = 0;
        //Add Block to Blacklist
        if (response.selection == selection) {
            PFEHaxelConfigBlackListAdd(data, component, dynamicProperty);
            return;
        }
        else
            selection++;
        //Remove Block from Blacklist
        if (response.selection == selection) {
            PFEHaxelConfigBlackListRemove(data, component, dynamicProperty);
            return;
        }
        else
            selection++;
        //Upgrade Item
        if (UpgradeableComponent === null || UpgradeableComponent === void 0 ? void 0 : UpgradeableComponent.version) {
            if (response.selection == selection) {
                if (!data.itemStack)
                    return;
                PokeUpgradeUI(data.source, data.itemStack, ParsePFEUpgradeComponent(data.itemStack, data.source, UpgradeableComponent), true, UpgradeableComponent);
                return;
            }
            else
                selection++;
        }
        if (response.canceled || selection == response.selection)
            return;
    }));
}
function PFEHaxelConfigBlackListAdd(data, component, dynamicProperty) {
    var _a, _b, _c;
    let Ui = new ModalFormData()
        .title({ translate: `translation.poke:haxelConfig.mainMenu.title`, with: { rawtext: [{ translate: (_b = (_a = data.itemStack) === null || _a === void 0 ? void 0 : _a.nameTag) !== null && _b !== void 0 ? _b : `poke_pfe.${(_c = data.itemStack) === null || _c === void 0 ? void 0 : _c.typeId}`.replace(`poke:haxel`, `onyx_haxel`).replace(`poke:`, ``) }] } })
        .textField({ translate: `translation.poke:haxelConfig.blacklistAdd.textLabel` }, '', { defaultValue: `` })
        .submitButton({ translate: `translation.poke:haxelConfig.blacklistAdd.submit` });
    Ui.show(data.source).then((response => {
        var _a;
        if (response.canceled) {
            PFEHaxelConfigMenu(data, component, dynamicProperty);
            return;
        }
        ;
        ;
        let block = (_a = response.formValues) === null || _a === void 0 ? void 0 : _a.at(0);
        if (block == '')
            return;
        if (typeof block == "string") {
            if (!block.includes(':')) {
                block = `minecraft:${block}`;
            }
            block = block.toLowerCase(); /* Identifiers must be lowercase (some devices could auto-capitalize the first letter)*/
            //console.warn(block)
            let newProperty = {
                "blacklist": dynamicProperty.blacklist.concat([block]),
                "v": dynamicProperty.v
            };
            if (data.itemStack == undefined)
                return;
            PokeSaveProperty(PFEHaxelInfoProperty, data.itemStack, JSON.stringify(newProperty), data.source, EquipmentSlot.Mainhand);
        }
    }));
}
function PFEHaxelConfigBlackListRemove(data, component, dynamicProperty) {
    let Ui = new ActionFormData()
        .title({ translate: `translation.poke:haxelConfig.mainMenu.blacklistRemove` });
    dynamicProperty.blacklist.forEach(block => {
        Ui.button({ translate: `tile.${block.replace(`minecraft:`, ``)}.name` });
    });
    Ui.show(data.source).then((response => {
        if (response.canceled) {
            PFEHaxelConfigMenu(data, component, dynamicProperty);
            return;
        }
        ;
        for (let i = dynamicProperty.blacklist.length; i >= -1; i--) {
            if (response.selection == i) {
                dynamicProperty.blacklist.splice(i, 1);
                if (data.itemStack == undefined)
                    return;
                PokeSaveProperty(PFEHaxelInfoProperty, data.itemStack, JSON.stringify(dynamicProperty), data.source, EquipmentSlot.Mainhand);
            }
        }
    }));
}
export { PFEBoxMiningComponent };
function UpdateHaxelFromV1toV2(item, player, dynamicProperty) {
    // Identifiers in the blacklist could not work correctly if it had uppercase letters
    let newBlacklist = [];
    for (let blacklistedBlock of dynamicProperty.blacklist) {
        let newBlacklistedBlock = blacklistedBlock.replace(blacklistedBlock, blacklistedBlock.toLowerCase());
        newBlacklist.concat([newBlacklistedBlock]);
    }
    let newProperty = {
        "blacklist": newBlacklist,
        "v": PFEHaxelVersion
    };
    PokeSaveProperty(PFEHaxelInfoProperty, item, JSON.stringify(newProperty), player, EquipmentSlot.Mainhand);
    return newProperty;
}
//# sourceMappingURL=boxMining.js.map