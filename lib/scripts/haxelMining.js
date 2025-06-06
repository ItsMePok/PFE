import { EntityComponentTypes, EquipmentSlot, ItemComponentTypes, ItemStack, system } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftEnchantmentTypes } from "@minecraft/vanilla-data";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { PokeDamageItemUB, PokeSaveProperty } from "./commonFunctions";
import ComputersCompat from "./addonCompatibility/jigarbov";
const PFEHaxelVersion = 2;
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
class PFEHaxelMining {
    onUse(data) {
        if (!data.itemStack)
            return;
        //@ts-ignore
        let dynamicProperty = data.itemStack.getDynamicProperty('pfe:haxelInfo');
        //console.warn(dynamicProperty)
        if (dynamicProperty == undefined) {
            data.itemStack.setDynamicProperty('pfe:haxelInfo', JSON.stringify(PFEHaxelConfigDefault));
            //@ts-ignore
            data.source.getComponent(EntityComponentTypes.Equippable).setEquipment(EquipmentSlot.Mainhand, data.itemStack);
            dynamicProperty = PFEHaxelConfigDefault;
            //@ts-ignore
        }
        else
            dynamicProperty = JSON.parse(dynamicProperty);
        if (!dynamicProperty.v) { // Identifiers in the blacklist could not work correctly if it had uppercase letters
            if (!(dynamicProperty.blacklist.length < 1)) {
                let newBlacklist = [];
                for (let i = dynamicProperty.blacklist.length - 1; i > -1; i--) {
                    let blacklistedBlock = dynamicProperty.blacklist.at(i);
                    if (!blacklistedBlock)
                        continue;
                    let newBlacklistedBlock = blacklistedBlock.replace(blacklistedBlock, blacklistedBlock.toLowerCase());
                    newBlacklist.concat([newBlacklistedBlock]);
                }
                let newProperty = {
                    "blacklist": newBlacklist,
                    "v": PFEHaxelVersion
                };
                PokeSaveProperty(PFEHaxelInfoProperty, data.itemStack, JSON.stringify(newProperty), data.source, EquipmentSlot.Mainhand);
                dynamicProperty = newProperty;
            }
        }
        const ItemTags = data.itemStack.getTags().toString();
        let ComponentInfo = JSON.parse(ItemTags.substring(ItemTags.indexOf('pfe:HaxelMining:'), ItemTags.indexOf(':pfeHaxelMiningEnd')).substring(16));
        if (data.source.isSneaking) {
            PFEHaxelConfigMenu(data, ComponentInfo);
            return;
        }
        //Blocks that should never be broken by haxels
        let localBlacklist = [];
        localBlacklist = dynamicProperty.blacklist;
        //console.warn(JSON.stringify(localBlacklist))
        let BannedBlocks = [MinecraftBlockTypes.Air, MinecraftBlockTypes.LightBlock0, MinecraftBlockTypes.LightBlock1, MinecraftBlockTypes.LightBlock2, MinecraftBlockTypes.LightBlock3, MinecraftBlockTypes.LightBlock4, MinecraftBlockTypes.LightBlock5, MinecraftBlockTypes.LightBlock6, MinecraftBlockTypes.LightBlock7, MinecraftBlockTypes.LightBlock8, MinecraftBlockTypes.LightBlock9, MinecraftBlockTypes.LightBlock10, MinecraftBlockTypes.LightBlock11, MinecraftBlockTypes.LightBlock12, MinecraftBlockTypes.LightBlock13, MinecraftBlockTypes.LightBlock14, MinecraftBlockTypes.LightBlock15, MinecraftBlockTypes.Barrier, MinecraftBlockTypes.Jigsaw, MinecraftBlockTypes.StructureBlock, MinecraftBlockTypes.CommandBlock, MinecraftBlockTypes.ChainCommandBlock, MinecraftBlockTypes.RepeatingCommandBlock, MinecraftBlockTypes.BorderBlock, MinecraftBlockTypes.Allow, MinecraftBlockTypes.Deny];
        let location = { x: Math.round(data.source.location.x - (ComponentInfo.radius.x / 2)), y: Math.round(data.source.location.y - 0.01), z: Math.round(data.source.location.z - (ComponentInfo.radius.z / 2)) };
        //@ts-ignore
        system.runJob(PFEMine(BannedBlocks.concat(localBlacklist), ComponentInfo, location, data.source, data.source.dimension, data.itemStack.getComponent(ItemComponentTypes.Enchantable).hasEnchantment(MinecraftEnchantmentTypes.SilkTouch), data.itemStack));
        //idk how MolangVariableMap works :/
        /*let Variables = new MolangVariableMap().setVector3('variable.direction',ComponentInfo.radius)
        data.source.dimension.spawnParticle('poke:haxel',data.source.location,Variables!)*/
    }
}
function* PFEMine(BannedBlocks, data, location, player, dim, silkTouch, item) {
    let DurabilityAmount = 0;
    for (let x = location.x; x < location.x + data.radius.x; x++) {
        for (let y = location.y; y < location.y + data.radius.y; y++) {
            for (let z = location.z; z < location.z + data.radius.z; z++) {
                const block = dim.getBlock({ x: x, y: y, z: z });
                if (block) {
                    //console.warn(block.typeId)
                    if (BannedBlocks.includes(block.typeId) || (block.typeId == MinecraftBlockTypes.Bedrock && !data.canBreakBedrock) || (block.isLiquid && !data.canBreakLiquids)) { }
                    else {
                        DurabilityAmount = DurabilityAmount + 1;
                        if (silkTouch) {
                            let blockItemStack = block.getItemStack(1, false);
                            if (block.typeId.includes(`shulker_box`)) {
                                blockItemStack = block.getItemStack(1, true);
                                // let blockLocation = `${block.location.x} ${block.location.y} ${block.location.z}`;
                                //block.dimension.runCommand(`setblock ${blockLocation} air destroy`)
                            } //else {
                            //in case itemStack is missing
                            if (!blockItemStack)
                                blockItemStack = new ItemStack(block.typeId);
                            block.dimension.spawnItem(blockItemStack, player.location);
                            block.setType(MinecraftBlockTypes.Air);
                            // }
                        }
                        else {
                            let blockLocation = `${block.location.x} ${block.location.y} ${block.location.z}`;
                            //cannot be runCommandAsync, can exceed 128
                            //preferably would like to remove/rework if there is a way to do non-silkTouch without runCommand
                            block.dimension.runCommand(`setblock ${blockLocation} air destroy`);
                        }
                    }
                }
                yield;
            }
        }
    }
    if (DurabilityAmount != 0 && silkTouch) {
        player.dimension.playSound("dig.stone", player.location);
    }
    PokeDamageItemUB(item, DurabilityAmount, player, EquipmentSlot.Mainhand);
    ComputersCompat.addStat("haxel_block_breaks", DurabilityAmount);
    if (!silkTouch) {
        //to reduce item lag
        player.runCommand(`tp @e[type=item,r=${Math.max(data.radius.x, data.radius.y) + 1}] @s`);
    }
}
function PFEHaxelConfigMenu(data, ComponentInfo) {
    var _a, _b, _c, _d;
    //@ts-ignore
    let dynamicProperty = (_a = data.itemStack) === null || _a === void 0 ? void 0 : _a.getDynamicProperty('pfe:haxelInfo');
    //@ts-ignore
    dynamicProperty = JSON.parse(dynamicProperty);
    let Ui = new ActionFormData()
        .title({ translate: `translation.poke:haxelConfig.mainMenu.title`, with: { rawtext: [{ translate: (_c = (_b = data.itemStack) === null || _b === void 0 ? void 0 : _b.nameTag) !== null && _c !== void 0 ? _c : `poke_pfe.${(_d = data.itemStack) === null || _d === void 0 ? void 0 : _d.typeId}`.replace(`poke:haxel`, `onyx_haxel`).replace(`poke:`, ``) }] } })
        .button({ translate: `translation.poke:haxelConfig.mainMenu.blacklistAdd` }, `textures/poke/common/blacklist_add`);
    if (dynamicProperty.blacklist.length >= 1) {
        Ui.button({ translate: `translation.poke:haxelConfig.mainMenu.blacklistRemove` }, `textures/poke/common/blacklist_remove`);
    }
    //@ts-ignore
    Ui.show(data.source).then((response => {
        if (response.canceled)
            return;
        //Add Block to Blacklist
        if (response.selection == 0) {
            PFEHaxelConfigBlackListAdd(data, dynamicProperty);
            return;
        }
        //Remove Block from Blacklist
        if (response.selection == 1) {
            PFEHaxelConfigBlackListRemove(data, dynamicProperty);
            return;
        }
    }));
}
function PFEHaxelConfigBlackListAdd(data, dynamicProperty) {
    var _a, _b, _c;
    let Ui = new ModalFormData()
        .title({ translate: `translation.poke:haxelConfig.mainMenu.title`, with: { rawtext: [{ translate: (_b = (_a = data.itemStack) === null || _a === void 0 ? void 0 : _a.nameTag) !== null && _b !== void 0 ? _b : `poke_pfe.${(_c = data.itemStack) === null || _c === void 0 ? void 0 : _c.typeId}`.replace(`poke:haxel`, `onyx_haxel`).replace(`poke:`, ``) }] } })
        .textField({ translate: `translation.poke:haxelConfig.blacklistAdd.textLabel` }, '', '')
        .submitButton({ translate: `translation.poke:haxelConfig.blacklistAdd.submit` });
    //@ts-ignore
    Ui.show(data.source).then((response => {
        var _a;
        if (response.canceled)
            return;
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
function PFEHaxelConfigBlackListRemove(data, dynamicProperty) {
    let Ui = new ActionFormData()
        .title({ translate: `translation.poke:haxelConfig.mainMenu.blacklistRemove` });
    dynamicProperty.blacklist.forEach(block => {
        Ui.button({ translate: `tile.${block.replace(`minecraft:`, ``)}.name` });
    });
    //@ts-ignore
    Ui.show(data.source).then((response => {
        if (response.canceled)
            return;
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
export { PFEHaxelMining };
//# sourceMappingURL=haxelMining.js.map