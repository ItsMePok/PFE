import { ActionFormData } from "@minecraft/server-ui";
import { PokeGetItemFromInventory, PokeGetObjectById, PokeSaveProperty } from "./commonFunctions";
import { EntityComponentTypes, EquipmentSlot, GameMode } from "@minecraft/server";
export { PokeUpgradeUI, PFEUpgrades, PFEUpgradeableComponent, ParsePFEUpgradeComponent, PFEUpgradeableId };
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
            PokeUpgradeUI(data.source, data.itemStack, parsedUpgradeInfo, undefined, true);
        }
    }
}
function ParsePFEUpgradeComponent(item, player, component) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    let upgrades = [];
    const customUpgrades = item.getComponent('poke_pfe:custom_upgrades');
    const PFEUpgrade = new PFEUpgrades();
    const defaultUpgrades = [PFEUpgrade.persistence, PFEUpgrade.capacity, PFEUpgrade.flaming];
    let allUpgrades = customUpgrades ? defaultUpgrades.concat(customUpgrades) : defaultUpgrades;
    const compressedUpgrades = JSON.parse((_c = (_b = item.getDynamicProperty((_a = component.dynamic_property) !== null && _a !== void 0 ? _a : "pfe:upgrades")) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : JSON.stringify([]));
    console.warn(JSON.stringify(compressedUpgrades));
    if (component.upgrade_ids) {
        for (let upgrade_id of component === null || component === void 0 ? void 0 : component.upgrade_ids) {
            const validUpgrade = (_d = PokeGetObjectById(allUpgrades, upgrade_id)) === null || _d === void 0 ? void 0 : _d.value;
            const compressedUpgrade = (compressedUpgrades === null || compressedUpgrades === void 0 ? void 0 : compressedUpgrades.upgrades) ? (_f = (_e = compressedUpgrades === null || compressedUpgrades === void 0 ? void 0 : compressedUpgrades.upgrades.filter(compressedUpgrade => compressedUpgrade.id == (validUpgrade === null || validUpgrade === void 0 ? void 0 : validUpgrade.id))) === null || _e === void 0 ? void 0 : _e.at(0)) !== null && _f !== void 0 ? _f : undefined : undefined;
            if (validUpgrade) {
                if (compressedUpgrade)
                    validUpgrade.level += compressedUpgrade.level;
                upgrades.push(validUpgrade);
            }
        }
    }
    if (upgrades.length < 1) {
        let persistenceUpgrade = PFEPersistenceCoreDefault;
        persistenceUpgrade.level += (compressedUpgrades === null || compressedUpgrades === void 0 ? void 0 : compressedUpgrades.upgrades) ? (_h = (_g = compressedUpgrades.upgrades.filter(compressedUpgrade => (compressedUpgrade === null || compressedUpgrade === void 0 ? void 0 : compressedUpgrade.id) == PFEPersistenceCoreDefault.id).at(0)) === null || _g === void 0 ? void 0 : _g.level) !== null && _h !== void 0 ? _h : 0 : 0;
        upgrades.push(persistenceUpgrade);
    }
    let parsedUpgradeInfo = {
        dynamicProperty: (_j = component.dynamic_property) !== null && _j !== void 0 ? _j : "pfe:upgrades",
        id: "poke_pfe:upgradable_component",
        v: 1,
        upgrades: upgrades,
        compressedUpgrades: (_o = JSON.parse((_m = (_l = item.getDynamicProperty((_k = component.dynamic_property) !== null && _k !== void 0 ? _k : "pfe:upgrades")) === null || _l === void 0 ? void 0 : _l.toString()) !== null && _m !== void 0 ? _m : "[]")) !== null && _o !== void 0 ? _o : undefined
    };
    return parsedUpgradeInfo;
}
function PokeUpgradeUI(player, item, config, backTo, compressedSave, component) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    let UI = new ActionFormData();
    console.warn(JSON.stringify(config));
    UI.button({ translate: `translation.poke:goBack` }, `textures/poke/common/left_arrow`);
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
        UI.button({ translate: `%translation.poke.Upgrade ${(_a = upgrade.upgradeName) !== null && _a !== void 0 ? _a : upgrade.upgradeItem} [%translation.poke.level:${upgrade.level}]\n%translation.poke.cost: ${upgradeCost} ${(_b = upgrade.upgradeItemName) !== null && _b !== void 0 ? _b : item.typeId}` }, player.getGameMode() == GameMode.Creative || (upgradeCost && PokeGetItemFromInventory(player, undefined, upgrade.upgradeItem)) ? (_c = upgrade.icon) === null || _c === void 0 ? void 0 : _c.default : (_g = (_e = (_d = upgrade.icon) === null || _d === void 0 ? void 0 : _d.cantUpgrade) !== null && _e !== void 0 ? _e : (_f = upgrade.icon) === null || _f === void 0 ? void 0 : _f.default) !== null && _g !== void 0 ? _g : `textures/poke/common/upgrade`);
    }
    UI.title({ translate: `translation.poke:ammoUIUpgradeTitle`, with: [(_h = item.nameTag) !== null && _h !== void 0 ? _h : `%poke_pfe.${item.typeId.replace(`poke:`, ``).replace(`poke_pfe:`, ``)}`] });
    UI.show(player).then(response => {
        var _a, _b, _c, _d, _e;
        let selection = 0;
        if (response.canceled || response.selection == selection) {
            backTo;
            return;
        }
        else
            selection++;
        for (let upgrade of config.upgrades) {
            if (response.selection == selection) {
                const HasItem = player.getGameMode() == GameMode.Creative ? true : (_b = (_a = PokeGetItemFromInventory(player, undefined, upgrade.upgradeItem)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
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
                console.warn(upgradeCost);
                if (HasItem && upgradeCost != Infinity) {
                    if (upgrade.id == PFEPersistenceCoreDefault.id)
                        item.keepOnDeath = true;
                    const thisCompressedUpgrade = currentCompressed ? (_c = PokeGetObjectById(currentCompressed === null || currentCompressed === void 0 ? void 0 : currentCompressed.upgrades, upgrade.id)) === null || _c === void 0 ? void 0 : _c.value : undefined;
                    let compressedNewProperty = {
                        upgrades: currentCompressed ? currentCompressed.upgrades.filter(compressedUpgrade => compressedUpgrade.id != upgrade.id).concat([
                            {
                                id: upgrade.id,
                                level: ((_d = thisCompressedUpgrade === null || thisCompressedUpgrade === void 0 ? void 0 : thisCompressedUpgrade.level) !== null && _d !== void 0 ? _d : upgrade.level) + upgradeCost === Infinity ? 0 : 1
                            }
                        ]) : []
                    };
                    let newProperty = {
                        id: upgrade.id,
                        icon: upgrade.icon,
                        level: upgrade.level + 1,
                        upgradeName: upgrade.upgradeName,
                        maxLevel: upgrade.maxLevel,
                        upgradeItem: upgrade.upgradeItem,
                        upgradeItemName: upgrade.upgradeItemName,
                        upgradeAdditive: upgrade.upgradeAdditive
                    };
                    config.upgrades = config.upgrades.filter((oldUpgrade) => oldUpgrade.id != upgrade.id).concat(newProperty);
                    if (player.getGameMode() != GameMode.Creative && upgradeCost != Infinity) {
                        player.runCommand(`clear @s ${upgrade.upgradeItem} 0 ${upgradeCost}`);
                    }
                    PokeSaveProperty((_e = component === null || component === void 0 ? void 0 : component.dynamic_property) !== null && _e !== void 0 ? _e : config.dynamicProperty, item, JSON.stringify(compressedSave ? compressedNewProperty : config), player, EquipmentSlot.Mainhand);
                    return;
                }
            }
            else
                selection++;
            continue;
        }
    });
}
function PokeItemHasUpgrade(item, upgrade) {
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