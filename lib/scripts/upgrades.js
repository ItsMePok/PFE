import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { PokeGetItemFromInventory, PokeGetObjectById, PokeSaveProperty } from "./commonFunctions";
import { EntityComponentTypes, EquipmentSlot, GameMode } from "@minecraft/server";
import { clampNumber } from "@minecraft/math";
export { PokeUpgradeUI, PFEUpgrades, PFEUpgradeableComponent, ParsePFEUpgradeComponent, PFEUpgradeableId };
const debug = true;
const PFEUpgradeableId = "poke_pfe:upgradeable";
class PFEUpgrades {
    constructor() {
        this.persistence = PFEPersistenceCoreDefault;
        this.flaming = PFEFlamingCoreDefault;
        this.capacity = PFECapacityCoreDefault;
    }
}
class PFEUpgradeableComponent {
    onUse(data, componentInfo) {
        const component = componentInfo.params;
        if (!data.itemStack)
            return;
        if (component.sneak_interact_opens_ui && data.source.isSneaking) {
            const parsedUpgradeInfo = ParsePFEUpgradeComponent(data.itemStack, data.source, component);
            PokeUpgradeUI(data.source, data.itemStack, parsedUpgradeInfo, true);
        }
    }
}
function ParsePFEUpgradeComponent(item, player, component) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    let upgrades = [];
    const customUpgrades = item.getComponent('poke_pfe:custom_upgrades');
    const PFEUpgrade = new PFEUpgrades();
    const defaultUpgrades = [JSON.parse(JSON.stringify(PFEUpgrade.persistence)), PFEUpgrade.capacity, PFEUpgrade.flaming];
    let allUpgrades = customUpgrades ? defaultUpgrades.concat(customUpgrades) : defaultUpgrades;
    const compressedUpgrades = JSON.parse((_c = (_b = item.getDynamicProperty((_a = component.dynamic_property) !== null && _a !== void 0 ? _a : "pfe:upgrades")) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : JSON.stringify([]));
    //console.warn(JSON.stringify(compressedUpgrades))
    if (component.upgrade_ids) {
        for (let upgrade_id of component === null || component === void 0 ? void 0 : component.upgrade_ids) {
            const validUpgrade = allUpgrades.filter(upgrade => upgrade.id == upgrade_id).at(0);
            const compressedUpgrade = (compressedUpgrades === null || compressedUpgrades === void 0 ? void 0 : compressedUpgrades.upgrades) ? (_e = (_d = compressedUpgrades === null || compressedUpgrades === void 0 ? void 0 : compressedUpgrades.upgrades.filter(compressedUpgrade => compressedUpgrade.id == (validUpgrade === null || validUpgrade === void 0 ? void 0 : validUpgrade.id))) === null || _d === void 0 ? void 0 : _d.at(0)) !== null && _e !== void 0 ? _e : undefined : undefined;
            if (validUpgrade) {
                if (compressedUpgrade)
                    validUpgrade.level += compressedUpgrade.level;
                upgrades.push(validUpgrade);
            }
        }
    }
    if (upgrades.length < 1) {
        const persistenceUpgrade = defaultUpgrades.at(0);
        persistenceUpgrade.level = (compressedUpgrades === null || compressedUpgrades === void 0 ? void 0 : compressedUpgrades.upgrades) ? (_g = (_f = compressedUpgrades.upgrades.filter(compressedUpgrade => (compressedUpgrade === null || compressedUpgrade === void 0 ? void 0 : compressedUpgrade.id) == PFEPersistenceCoreDefault.id).at(0)) === null || _f === void 0 ? void 0 : _f.level) !== null && _g !== void 0 ? _g : 0 : 0;
        upgrades.push(persistenceUpgrade);
    }
    let parsedUpgradeInfo = {
        dynamicProperty: (_h = component.dynamic_property) !== null && _h !== void 0 ? _h : "pfe:upgrades",
        id: "poke_pfe:upgradable_component",
        v: 1,
        upgrades: upgrades,
        compressedUpgrades: (_m = JSON.parse((_l = (_k = item.getDynamicProperty((_j = component.dynamic_property) !== null && _j !== void 0 ? _j : "pfe:upgrades")) === null || _k === void 0 ? void 0 : _k.toString()) !== null && _l !== void 0 ? _l : "[]")) !== null && _m !== void 0 ? _m : undefined
    };
    return parsedUpgradeInfo;
}
function PokeUpgradeUI(player, item, config, compressedSave, component, slot) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    let UI = new ActionFormData();
    //console.warn(JSON.stringify(config))
    for (let upgrade of config.upgrades) {
        const upgradeCost = ((upgrade.maxLevel) ?
            (upgrade.maxLevel <= upgrade.level) ?
                Infinity
                : (upgrade.upgradeAdditive) ?
                    Number(upgrade.level) + 1
                    : 1
            : (upgrade.upgradeAdditive) ?
                Number(upgrade.level) + 1
                : 1);
        const HasItem = player.getGameMode() == GameMode.Creative ? true : Boolean((_a = PokeGetItemFromInventory(player, undefined, upgrade.upgradeItem)) === null || _a === void 0 ? void 0 : _a.length);
        UI.label({ translate: `${upgrade.upgradeName} %poke_pfe.level: ${upgrade.maxLevel == upgrade.maxLevel ? "§c" : "§b"}${clampNumber(upgrade.level, 0, (_b = upgrade.maxLevel) !== null && _b !== void 0 ? _b : Infinity)}§r/§c${upgrade.maxLevel}` });
        UI.button({ translate: `${upgrade.level == upgrade.maxLevel ? "" : "%translation.poke.Upgrade "}${(_c = upgrade.upgradeName) !== null && _c !== void 0 ? _c : upgrade.upgradeItem}\n${upgradeCost == Infinity ? "%poke_pfe.max_level" : `%translation.poke.cost: ${upgradeCost} ${(_d = upgrade.upgradeItemName) !== null && _d !== void 0 ? _d : item.typeId}`}` }, upgrade.level != upgrade.maxLevel && HasItem ? (_e = upgrade.icon) === null || _e === void 0 ? void 0 : _e.default : (_j = (_g = (_f = upgrade.icon) === null || _f === void 0 ? void 0 : _f.cantUpgrade) !== null && _g !== void 0 ? _g : (_h = upgrade.icon) === null || _h === void 0 ? void 0 : _h.default) !== null && _j !== void 0 ? _j : `textures/poke/common/upgrade`);
    }
    if (debug) {
        UI.button({ translate: `Debug` }, `textures/poke/common/debug`);
    }
    UI.button({ translate: `translation.poke:goBack` }, `textures/poke/common/left_arrow`);
    UI.title({ translate: `poke_pfe.upgradeTitle`, with: [(_k = item.nameTag) !== null && _k !== void 0 ? _k : `%poke_pfe.${item.typeId.replace(`poke:`, ``).replace(`poke_pfe:`, ``)}`] });
    UI.show(player).then(response => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        let selection = 0;
        //console.warn("Passed")
        for (let upgrade of config.upgrades) {
            if (response.selection == selection) {
                const HasItem = player.getGameMode() == GameMode.Creative ? true : Boolean((_a = PokeGetItemFromInventory(player, undefined, upgrade.upgradeItem)) === null || _a === void 0 ? void 0 : _a.length);
                const dynamicProperty = item.getDynamicProperty(config.dynamicProperty);
                const currentCompressed = compressedSave ? typeof dynamicProperty == "string" ? JSON.parse(dynamicProperty) : undefined : undefined;
                const upgradeCost = ((upgrade.maxLevel) ?
                    (upgrade.maxLevel <= upgrade.level) ?
                        Infinity
                        : (upgrade.upgradeAdditive) ?
                            Number(upgrade.level) + 1
                            : 1
                    : (upgrade.upgradeAdditive) ?
                        Number(upgrade.level) + 1
                        : 1);
                // console.warn(upgradeCost)
                if (upgradeCost !== Infinity && HasItem && upgrade.level != upgrade.maxLevel) {
                    if (upgrade.id == PFEPersistenceCoreDefault.id)
                        item.keepOnDeath = true;
                    const compressedUpgradeLevel = (_c = Number((_b = currentCompressed === null || currentCompressed === void 0 ? void 0 : currentCompressed.upgrades.filter(compressedUpgrade => compressedUpgrade.id == upgrade.id).at(0)) === null || _b === void 0 ? void 0 : _b.level)) !== null && _c !== void 0 ? _c : Number(upgrade.level);
                    let compressedNewProperty = {
                        upgrades: currentCompressed ? currentCompressed.upgrades.filter(compressedUpgrade => compressedUpgrade.id != upgrade.id).concat([
                            {
                                id: upgrade.id,
                                level: (compressedUpgradeLevel !== null && compressedUpgradeLevel !== void 0 ? compressedUpgradeLevel : 0) + 1
                            }
                        ]) : []
                    };
                    let newProperty = {
                        id: upgrade.id,
                        icon: upgrade.icon,
                        level: Number(upgrade.level) + 1,
                        upgradeName: upgrade.upgradeName,
                        maxLevel: upgrade.maxLevel,
                        upgradeItem: upgrade.upgradeItem,
                        upgradeItemName: upgrade.upgradeItemName,
                        upgradeAdditive: upgrade.upgradeAdditive
                    };
                    config.upgrades = config.upgrades.filter((oldUpgrade) => oldUpgrade.id != upgrade.id).concat(newProperty);
                    if (player.getGameMode() != GameMode.Creative && upgradeCost != Infinity) {
                        player.runCommand(`clear @s ${upgrade.upgradeItem} -1 ${upgradeCost}`);
                    }
                    //console.warn(JSON.stringify(compressedNewProperty))
                    PokeSaveProperty((_d = component === null || component === void 0 ? void 0 : component.dynamic_property) !== null && _d !== void 0 ? _d : config.dynamicProperty, item, JSON.stringify(compressedSave ? compressedNewProperty : config), player, slot !== null && slot !== void 0 ? slot : EquipmentSlot.Mainhand);
                    // backTo
                    return;
                }
                else {
                    console.warn(`Failed to upgrade`);
                    return;
                }
            }
            else
                selection++;
            continue;
        }
        if (debug) {
            if (response.selection == selection) {
                const UI = new ModalFormData();
                UI.label(`${(_e = JSON.stringify(item.getComponent("poke_pfe:upgrades"), undefined, "\n")) !== null && _e !== void 0 ? _e : "undefined"}`);
                UI.divider();
                UI.label(`config\n${(_f = JSON.stringify(config, undefined, "\n")) !== null && _f !== void 0 ? _f : "undefined"}`);
                UI.divider();
                UI.label(`compressedSave\n${(_g = JSON.stringify(compressedSave, undefined, "\n")) !== null && _g !== void 0 ? _g : "undefined"}`);
                UI.divider();
                UI.label(`component\n${(_h = JSON.stringify(component, undefined, "\n")) !== null && _h !== void 0 ? _h : "undefined"}`);
                UI.divider();
                UI.label(`slot\n${(_j = JSON.stringify(slot, undefined, "\n")) !== null && _j !== void 0 ? _j : "undefined"}`);
                UI.divider();
                UI.label(`PFECapacityCoreDefault\n${(_k = JSON.stringify(PFECapacityCoreDefault, undefined, "\n")) !== null && _k !== void 0 ? _k : "undefined"}`);
                UI.divider();
                UI.label(`PFEFlamingCoreDefault\n${(_l = JSON.stringify(PFEFlamingCoreDefault, undefined, "\n")) !== null && _l !== void 0 ? _l : "undefined"}`);
                UI.divider();
                UI.label(`PFEPersistenceCoreDefault\n${(_m = JSON.stringify(PFEPersistenceCoreDefault, undefined, "\n")) !== null && _m !== void 0 ? _m : "undefined"}`);
                UI.show(player);
                return;
            }
            else
                selection++;
        }
        if (response.canceled || response.selection == selection) {
            // backTo;
            return;
        }
        else
            selection++;
    });
}
class PFEVeinMining {
    onUse(data) {
        if (!data.source.isSneaking)
            return;
        if (!data.itemStack)
            return;
        const UpgradeConfig = {
            v: 1,
            dynamicProperty: `poke_pfe:upgrade_info`,
            id: `poke_pfe:upgrade_info`,
            upgrades: [
                {
                    id: `pfe:veinMining`,
                    level: 0,
                    maxLevel: 5,
                    upgradeAdditive: false,
                    upgradeItem: `poke:upgrade_core`,
                    upgradeItemName: `%poke_pfe.upgrade_core`,
                    upgradeName: `%poke_pfe.upgrade_core`,
                    icon: {
                        default: `textures/poke/pfe/upgrade_core`,
                        cantUpgrade: `textures/poke/pfe/close`
                    }
                }
            ]
        };
        PokeUpgradeUI(data.source, data.itemStack, UpgradeConfig);
    }
    onMineBlock(data) {
        let config = undefined;
        if (!data.minedBlockPermutation.hasTag(config.canBreak.blockTag))
            return;
        let dimension = data.block.dimension;
        let location = data.block.location;
        let toBreak = [
            { x: location.x + 1, y: location.y, z: location.z },
            { x: location.x - 1, y: location.y, z: location.z },
            { x: location.x, y: location.y + 1, z: location.z },
            { x: location.x, y: location.y - 1, z: location.z },
            { x: location.x, y: location.y, z: location.z + 1 },
            { x: location.x, y: location.y, z: location.z - 1 },
            { x: location.x, y: location.y + 1, z: location.z + 1 },
            { x: location.x, y: location.y + 1, z: location.z - 1 },
            { x: location.x + 1, y: location.y + 1, z: location.z },
            { x: location.x - 1, y: location.y + 1, z: location.z },
            { x: location.x + 1, y: location.y, z: location.z + 1 },
            { x: location.x + 1, y: location.y, z: location.z - 1 },
            { x: location.x - 1, y: location.y, z: location.z + 1 },
            { x: location.x - 1, y: location.y, z: location.z - 1 },
            { x: location.x + 1, y: location.y + 1, z: location.z + 1 },
            { x: location.x + 1, y: location.y + 1, z: location.z - 1 },
            { x: location.x - 1, y: location.y + 1, z: location.z + 1 },
            { x: location.x - 1, y: location.y + 1, z: location.z - 1 },
            { x: location.x + 1, y: location.y - 1, z: location.z + 1 },
            { x: location.x + 1, y: location.y - 1, z: location.z - 1 },
            { x: location.x - 1, y: location.y - 1, z: location.z + 1 },
            { x: location.x - 1, y: location.y - 1, z: location.z - 1 },
            { x: location.x, y: location.y - 1, z: location.z + 1 },
            { x: location.x, y: location.y - 1, z: location.z - 1 },
            { x: location.x + 1, y: location.y - 1, z: location.z },
            { x: location.x - 1, y: location.y - 1, z: location.z },
        ];
        let checked = new Set();
        //cap is 256 so game world will not crash if used on an excessive amount of blocks
        let max = 0;
        while (max < config.maxBreakLimit && toBreak.length > 0) {
            location = toBreak.shift();
            let key = `${location.x},${location.y},${location.z}`;
            if (checked.has(key)) {
                //console.warn(`block already checked`)
                continue;
            }
            ;
            checked.add(key);
            let currentBlock = undefined;
            //to prevent the vein miner from randomly stopping if outside of world bounds
            try {
                currentBlock = dimension.getBlock(location);
            }
            catch (error) {
                continue;
            }
            //console.warn(currentBlock?.getTags())
            if (data.minedBlockPermutation.matches(currentBlock.typeId)) {
                dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} air destroy`);
                max = max + 1;
                //console.warn(max)
                let adjacent = [
                    { x: location.x + 1, y: location.y, z: location.z },
                    { x: location.x - 1, y: location.y, z: location.z },
                    { x: location.x, y: location.y + 1, z: location.z },
                    { x: location.x, y: location.y - 1, z: location.z },
                    { x: location.x, y: location.y, z: location.z + 1 },
                    { x: location.x, y: location.y, z: location.z - 1 },
                    { x: location.x, y: location.y + 1, z: location.z + 1 },
                    { x: location.x, y: location.y + 1, z: location.z - 1 },
                    { x: location.x + 1, y: location.y + 1, z: location.z },
                    { x: location.x - 1, y: location.y + 1, z: location.z },
                    { x: location.x + 1, y: location.y, z: location.z + 1 },
                    { x: location.x + 1, y: location.y, z: location.z - 1 },
                    { x: location.x - 1, y: location.y, z: location.z + 1 },
                    { x: location.x - 1, y: location.y, z: location.z - 1 },
                    { x: location.x + 1, y: location.y + 1, z: location.z + 1 },
                    { x: location.x + 1, y: location.y + 1, z: location.z - 1 },
                    { x: location.x - 1, y: location.y + 1, z: location.z + 1 },
                    { x: location.x - 1, y: location.y + 1, z: location.z - 1 },
                    { x: location.x + 1, y: location.y - 1, z: location.z + 1 },
                    { x: location.x + 1, y: location.y - 1, z: location.z - 1 },
                    { x: location.x - 1, y: location.y - 1, z: location.z + 1 },
                    { x: location.x - 1, y: location.y - 1, z: location.z - 1 },
                    { x: location.x, y: location.y - 1, z: location.z + 1 },
                    { x: location.x, y: location.y - 1, z: location.z - 1 },
                    { x: location.x + 1, y: location.y - 1, z: location.z },
                    { x: location.x - 1, y: location.y - 1, z: location.z },
                ];
                for (let loc of adjacent) {
                    toBreak.push(loc);
                }
            }
        }
    }
}
function PersistenceUpgrade(item, player, upgradeConfig) {
    var _a;
    item.keepOnDeath = true;
    let persistenceUpgrade = PokeGetObjectById(upgradeConfig.upgrades, `poke_pfe:persistence`);
    upgradeConfig.upgrades.at(persistenceUpgrade.position).level += 1;
    item.setDynamicProperty(upgradeConfig.dynamicProperty, JSON.stringify(upgradeConfig));
    (_a = player.getComponent(EntityComponentTypes.Equippable)) === null || _a === void 0 ? void 0 : _a.setEquipment(EquipmentSlot.Mainhand, item);
}
const PFEPersistenceCoreDefault = {
    id: "pfe:persistence",
    upgradeItem: `poke_pfe:persistence_core`,
    icon: { default: `textures/poke/pfe/persistence_core`, cantUpgrade: `textures/poke/pfe/persistence_core_gs` },
    upgradeName: `%translation.poke_pfe.persistence`,
    upgradeItemName: `%poke_pfe.persistence_core`,
    upgradeAdditive: false,
    level: 0,
    maxLevel: 1
};
const PFEFlamingCoreDefault = {
    id: "pfe:flaming",
    upgradeItem: `poke_pfe:flaming_core`,
    icon: { default: `textures/poke/pfe/flaming_core`, cantUpgrade: `textures/poke/pfe/flaming_core_gs` },
    upgradeName: `%translation.poke_pfe.flaming`,
    upgradeItemName: `%poke_pfe.flaming_core`,
    upgradeAdditive: false,
    level: 0,
    maxLevel: 1
};
const PFECapacityCoreDefault = {
    id: "pfe:capacity",
    upgradeItem: `poke:capacity_core`,
    icon: { default: `textures/poke/pfe/capacity_core`, cantUpgrade: `textures/poke/pfe/capacity_core_gs` },
    upgradeName: `%translation.poke_pfe.capacity`,
    upgradeItemName: `%poke_pfe.capacity_core`,
    upgradeAdditive: true,
    level: 1,
    maxLevel: undefined
};
//# sourceMappingURL=upgrades.js.map