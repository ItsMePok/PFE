import { EntityComponentTypes, EquipmentSlot, GameMode, ItemComponentTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { pokeAddItemsToPlayerOrDrop, PokeDamageItemUB, PokeErrorScreen, PokeGetItemFromInventory, PokeGetObjectById, PokeSaveProperty } from "./commonFunctions";
import { MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { PFEUpgradeableId, PFEUpgrades, PokeUpgradeUI } from "./upgrades";
import { clampNumber, Vector3Utils } from "@minecraft/math";
export { PFEBoltBowsComponent };
const CapacityUpgradeDefault = new PFEUpgrades().capacity;
const FlamingUpgradeDefault = new PFEUpgrades().flaming;
const PersistenceUpgradeDefault = new PFEUpgrades().persistence;
const PFEBoltBowDynamicPropertyID = `poke_pfe:boltbow`;
const PFEBoltBowVersion = 3;
const PFEBoltBowDefault = {
    v: PFEBoltBowVersion,
    id: "poke_pfe:boltbow",
    dynamicProperty: PFEBoltBowDynamicPropertyID,
    projectile: {
        max: 32,
        amount: 16,
        entityId: MinecraftEntityTypes.Arrow,
        id: MinecraftItemTypes.Arrow,
    },
    upgrades: [
        CapacityUpgradeDefault,
        FlamingUpgradeDefault,
        PersistenceUpgradeDefault
    ]
};
class PFEBoltBowsComponent {
    onUse(data) {
        if (!data.itemStack)
            return;
        if (data.source.isSneaking) {
            PFEAmmoManagementMainMenuUI(data.itemStack, data.source);
            return;
        }
        //console.warn(`Dyn: ${data.itemStack.getDynamicProperty(PFEBoltBowDynamicPropertyID)}`)
        let ammoComponent = PFEBoltBowDefault;
        if (typeof data.itemStack.getDynamicProperty(PFEBoltBowDynamicPropertyID) != "string") {
            PokeSaveProperty(PFEBoltBowDynamicPropertyID, data.itemStack, JSON.stringify(PFEBoltBowDefault), data.source);
        }
        else
            ammoComponent = JSON.parse(data.itemStack.getDynamicProperty(PFEBoltBowDynamicPropertyID).toString());
        if (typeof data.itemStack.getDynamicProperty(`poke_pfe:ammo`) == "string") {
            UpdateBoltbowV2toV3(data.source, data.itemStack);
        }
        if (!ammoComponent.v || ammoComponent.v <= 2) {
            let newProperty = [];
            for (let upgrade of ammoComponent.upgrades) {
                let upgradeDefault = upgrade.id == FlamingUpgradeDefault.id ? FlamingUpgradeDefault : upgrade.id == CapacityUpgradeDefault.id ? CapacityUpgradeDefault : upgrade.id == PersistenceUpgradeDefault.id ? PersistenceUpgradeDefault : undefined;
                newProperty.concat([{
                        id: upgrade.id,
                        level: upgrade.level + 1,
                        maxLevel: upgrade.maxLevel,
                        icon: upgrade.icon ?? upgradeDefault?.icon,
                        upgradeAdditive: upgrade.upgradeAdditive ?? upgradeDefault?.upgradeAdditive,
                        upgradeItem: upgrade.upgradeItem ?? upgradeDefault?.upgradeItem,
                        upgradeItemName: upgrade.upgradeItemName ?? upgradeDefault?.upgradeItemName,
                        upgradeName: upgrade.upgradeName ?? upgradeDefault?.upgradeName
                    }]);
            }
            if (!(ammoComponent.upgrades.filter(upgrade => upgrade.id == PersistenceUpgradeDefault.id).length == 1))
                newProperty.concat([PersistenceUpgradeDefault]);
            ammoComponent.upgrades = newProperty;
            PokeSaveProperty(PFEBoltBowDynamicPropertyID, data.itemStack, JSON.stringify(ammoComponent), data.source);
        }
        const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] });
        for (var i = cPlayers.length; i > 0; i--) {
            data.source.playAnimation('animation.poke_pfe.humanoid.boltbow_hold_3p', { blendOutTime: 0.5, stopExpression: `!q.is_item_name_any('slot.weapon.mainhand','${data.itemStack.typeId}')`, players: [cPlayers[i - 1]] });
        }
        const cooldownComponent = data.itemStack.getComponent(ItemComponentTypes.Cooldown);
        if (cooldownComponent) {
            const ticks = cooldownComponent.cooldownTicks;
            if (cooldownComponent.getCooldownTicksRemaining(data.source) != ticks - 1)
                return;
        }
        let delay = 1;
        if (ammoComponent.projectile.amount >= 1) {
            data.source.playAnimation(`animation.poke_pfe.boltbow.use`);
            let equippableComponent = data.source.getComponent(EntityComponentTypes.Equippable);
            if (!equippableComponent)
                return;
            if ((equippableComponent.getEquipmentSlot(EquipmentSlot.Mainhand).getItem()?.typeId != data.itemStack?.typeId) || (equippableComponent.getEquipmentSlot(EquipmentSlot.Mainhand).getDynamicProperty(PFEBoltBowDynamicPropertyID) != JSON.stringify(ammoComponent)))
                return;
            PokeShoot(data.source, ammoComponent, data.itemStack, delay);
        }
        else {
            data.source.dimension.playSound(`poke_pfe.boltbow.noAmmo`, data.source.location);
        }
        return;
    }
}
function PokeShoot(player, ammoComponent, item, delay) {
    if (player.getGameMode() != GameMode.Creative) {
        ammoComponent.projectile.amount = ammoComponent.projectile.amount - 1;
    }
    item.setDynamicProperty(PFEBoltBowDynamicPropertyID, JSON.stringify(ammoComponent));
    const headLocate = player.getHeadLocation();
    const angle = player.getViewDirection();
    const projEntity = player.dimension.spawnEntity(ammoComponent.projectile.entityId, { x: headLocate.x + (angle.x * 2), y: headLocate.y - 0.25 + (angle.y * 2), z: headLocate.z + (angle.z * 2) });
    const projComp = projEntity.getComponent(EntityComponentTypes.Projectile);
    if (!projComp)
        return;
    player.playSound(`random.bow`, { pitch: (ammoComponent.projectile.amount > 3 ? undefined : (ammoComponent.projectile.amount == 3) ? 1.05 : (ammoComponent.projectile.amount == 2) ? 1.15 : (ammoComponent.projectile.amount == 1) ? 1.25 : undefined) });
    projComp.catchFireOnHurt = (PokeGetObjectById(ammoComponent.upgrades, `pfe:flaming`)?.value.level > 0);
    projComp.owner = player;
    projComp.shoot(Vector3Utils.scale(angle, 5.2), { uncertainty: undefined });
    if (PokeDamageItemUB(item, undefined, player, EquipmentSlot.Mainhand)?.broke) {
        pokeAddItemsToPlayerOrDrop(player, new ItemStack(ammoComponent.projectile.id, ammoComponent.projectile.amount));
    }
}
;
/**
 * UI -> Main Menu
 */
function PFEAmmoManagementMainMenuUI(item, player) {
    let UI = new ActionFormData();
    UI.title({ translate: `translation.poke_pfe:ammoUIMainMenuTitle`, with: { rawtext: [{ translate: `poke_pfe.${item.typeId.substring(5)}` }] } });
    if (typeof item.getDynamicProperty(PFEBoltBowDynamicPropertyID) != "string") {
        PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(PFEBoltBowDefault), player);
    }
    let boltBowComponent = JSON.parse(item.getDynamicProperty(PFEBoltBowDynamicPropertyID).toString());
    UI.button({ translate: `%poke_pfe.quick_reload [${boltBowComponent.projectile.amount}/${16 + ((boltBowComponent.upgrades.filter(upgrade => upgrade.id == CapacityUpgradeDefault.id).at(0)?.level ?? 1) * 16)}]` }, `textures/poke/common/ammoQuickReload`);
    UI.button({ translate: `translation.poke_pfe:ammoUIAddAmmo` }, `textures/poke/common/ammoReload`);
    UI.button({ translate: `poke_pfe.upgrade` }, `textures/poke/common/upgrade`);
    UI.button({ translate: `translation.poke_pfe:bossEventClose` }, `textures/poke/common/close`);
    UI.show(player).then((response => {
        let selection = 0;
        if (response.selection == selection) { // Quick Reload
            PFEQuickReload(boltBowComponent, item, player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Reload
            PFEAmmoManagementAddAmmoUI(item, player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Upgrade
            PokeUpgradeUI(player, item, boltBowComponent, false, item.getComponent(PFEUpgradeableId)?.customComponentParameters.params ?? undefined);
            return;
        }
        else
            selection++;
        if (response.canceled || selection) { // Close
            return;
        }
    }));
}
function PFEAmmoManagementAddAmmoUI(item, player) {
    let UI = new ActionFormData();
    let allowedAmmo = [`minecraft:arrow`, `poke_pfe:galaxy_arrow`, `poke_pfe:holy_arrow`, `poke_pfe:hellish_arrow`, `poke_pfe:void_arrow`, `poke_pfe:volt_arrow`];
    UI.title({ translate: `translation.poke_pfe:ammoUIMainMenuTitle` });
    let ammoComponent = JSON.parse(item.getDynamicProperty(PFEBoltBowDynamicPropertyID).toString());
    let buttonTotal = 0;
    let allItems = [];
    for (let i = allowedAmmo.length - 1; i > -1; i--) {
        let items = PokeGetItemFromInventory(player, undefined, allowedAmmo.at(i));
        if (!items) {
            continue;
        }
        //console.warn(`found items: ${items.length}`)
        allItems = allItems.concat(items);
        for (let i = items.length; i > -1; i--) {
            let foundItem = items.at(i);
            if (!foundItem)
                continue;
            if (foundItem.typeId == MinecraftItemTypes.Arrow) {
                UI.button({ rawtext: [{ translate: `item.arrow.name` }, { text: ` x${foundItem.amount}` }] }, PFEArrowIcon(foundItem.typeId));
            }
            else {
                UI.button({ rawtext: [{ translate: `item.${foundItem.typeId}` }, { text: ` x${foundItem.amount}` }] }, PFEArrowIcon(foundItem.typeId));
            }
            buttonTotal = buttonTotal + 1;
        }
    }
    UI.button({ translate: `translation.poke_pfe:bossEventClose` }, `textures/poke/common/close`);
    UI.show(player).then((response => {
        let selection = 0;
        if (response.canceled || response.selection == selection + buttonTotal) { // Go Back
            return;
        }
        for (buttonTotal - 1; buttonTotal > -1; buttonTotal--) {
            if (response.selection == selection) {
                let selectedItem = allItems.reverse().at(buttonTotal - 1);
                //console.warn(`num: ${selectedItem?.amount},\n id: ${selectedItem?.typeId},\n button: ${buttonTotal}`)
                if (!selectedItem) {
                    PokeErrorScreen(player, undefined, PFEAmmoManagementAddAmmoUI(item, player));
                    return;
                }
                if (ammoComponent.projectile.id != selectedItem.typeId) {
                    let newProperty = {
                        v: PFEBoltBowVersion,
                        dynamicProperty: ammoComponent.dynamicProperty,
                        projectile: {
                            amount: clampNumber(selectedItem.amount, 0, ammoComponent.projectile?.max ?? 16),
                            max: ammoComponent.projectile.max,
                            id: selectedItem.typeId,
                            entityId: selectedItem.typeId,
                        },
                        id: ammoComponent.id,
                        upgrades: ammoComponent.upgrades
                    };
                    if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
                        PokeErrorScreen(player, { text: `Unable to save new ammo type` }, PFEAmmoManagementAddAmmoUI(item, player));
                        return;
                    }
                    pokeAddItemsToPlayerOrDrop(player, new ItemStack(ammoComponent.projectile.id, ammoComponent.projectile.amount));
                    player.runCommand(`clear @s ${selectedItem.typeId} -1 ${clampNumber(selectedItem.amount, 0, ammoComponent.projectile?.max ?? 16)}`);
                }
                else {
                    if (!ammoComponent.projectile.max) {
                        let newProperty = {
                            v: PFEBoltBowVersion,
                            dynamicProperty: ammoComponent.dynamicProperty,
                            projectile: {
                                amount: ammoComponent.projectile.amount + selectedItem.amount,
                                max: ammoComponent.projectile.max,
                                id: ammoComponent.projectile.id,
                                entityId: ammoComponent.projectile.entityId
                            },
                            id: ammoComponent.id,
                            upgrades: ammoComponent.upgrades
                        };
                        if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
                            PokeErrorScreen(player, { text: `Unable to save new ammo amount` }, PFEAmmoManagementAddAmmoUI(item, player));
                            return;
                        }
                        player.runCommand(`clear @s ${selectedItem.typeId} -1 ${selectedItem.amount}`);
                        return;
                    }
                    let maxRemaining = ammoComponent.projectile.max - ammoComponent.projectile.amount;
                    console.warn(maxRemaining);
                    let takeAmount = selectedItem.amount;
                    if (maxRemaining < selectedItem.amount) {
                        takeAmount = maxRemaining;
                    }
                    let newProperty = {
                        v: PFEBoltBowVersion,
                        dynamicProperty: ammoComponent.dynamicProperty,
                        projectile: {
                            amount: ammoComponent.projectile.amount + takeAmount,
                            max: ammoComponent.projectile.max,
                            id: ammoComponent.projectile.id,
                            entityId: ammoComponent.projectile.entityId
                        },
                        id: ammoComponent.id,
                        upgrades: ammoComponent.upgrades
                    };
                    if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
                        PokeErrorScreen(player, { text: `Unable to save new ammo amount` }, PFEAmmoManagementAddAmmoUI(item, player));
                        return;
                    }
                    player.runCommand(`clear @s ${selectedItem.typeId} -1 ${takeAmount}`);
                }
                return;
            }
            else
                selection++;
        }
    }));
}
function PFEArrowIcon(itemId) {
    const item = new ItemStack(itemId, 1);
    const iconPathComponent = item.getComponent("poke_pfe:icon_path")?.customComponentParameters.params;
    if (iconPathComponent) {
        return iconPathComponent;
    }
    switch (itemId) {
        case MinecraftItemTypes.Arrow: {
            return `textures/items/arrow`;
            break;
        }
        case `poke_pfe:galaxy_arrow`: {
            return `textures/poke/pfe/galaxy_arrow_item`;
            break;
        }
        case `poke_pfe:void_arrow`: {
            return `textures/poke/pfe/void_arrow_item`;
            break;
        }
        case `poke_pfe:hellish_arrow`: {
            return `textures/poke/pfe/hellish_arrow_item`;
            break;
        }
        case `poke_pfe:holy_arrow`: {
            return `textures/poke/pfe/holy_arrow_item`;
            break;
        }
        case `poke_pfe:volt_arrow`: {
            return `textures/poke/pfe/volt_arrow_item`;
            break;
        }
        default: return `textures/poke/common/question`;
    }
}
function PFEQuickReload(ammoComponent, item, player) {
    let reloadingAmmo = PokeGetItemFromInventory(player, undefined, ammoComponent.projectile.id);
    if (!reloadingAmmo) {
        PokeErrorScreen(player, { text: `Failed to reload ammo` });
        return;
    }
    let totalAmount = 0;
    for (let i = reloadingAmmo.length - 1; i > -1; i--) {
        if (!reloadingAmmo.at(i))
            continue;
        totalAmount = totalAmount + reloadingAmmo.at(i).amount;
    }
    if (!ammoComponent.projectile.max) {
        let newProperty = {
            v: PFEBoltBowVersion,
            dynamicProperty: ammoComponent.dynamicProperty,
            projectile: {
                amount: ammoComponent.projectile.amount + totalAmount,
                max: ammoComponent.projectile.max,
                id: ammoComponent.projectile.id,
                entityId: ammoComponent.projectile.entityId
            },
            id: ammoComponent.id,
            upgrades: ammoComponent.upgrades
        };
        if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
            PokeErrorScreen(player, undefined, PFEAmmoManagementMainMenuUI(item, player));
            return;
        }
        player.runCommand(`clear @s ${ammoComponent.projectile.id} -1 ${totalAmount}`);
        return;
    }
    let maxRemaining = ammoComponent.projectile.max ?? Infinity - ammoComponent.projectile.amount;
    let takeAmount = totalAmount;
    if (maxRemaining < takeAmount) {
        takeAmount = maxRemaining;
    }
    let newProperty = {
        v: PFEBoltBowVersion,
        dynamicProperty: ammoComponent.dynamicProperty,
        projectile: {
            amount: ammoComponent.projectile.amount + takeAmount,
            max: ammoComponent.projectile.max,
            id: ammoComponent.projectile.id,
            entityId: ammoComponent.projectile.entityId
        },
        id: ammoComponent.id,
        upgrades: ammoComponent.upgrades
    };
    if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
        PokeErrorScreen(player, undefined, PFEAmmoManagementMainMenuUI(item, player));
        return;
    }
    player.runCommand(`clear @s ${ammoComponent.projectile.id} -1 ${takeAmount}`);
    return;
}
function UpdateBoltbowV2toV3(player, item) {
    const unparsedOldInfo = item.getDynamicProperty(`poke_pfe:ammo`);
    const oldInfo = unparsedOldInfo ? JSON.parse(unparsedOldInfo) ?? undefined : undefined;
    const unparsedNewInfo = item.getDynamicProperty(PFEBoltBowDynamicPropertyID);
    let newInfo = unparsedNewInfo ? JSON.parse(unparsedNewInfo) ?? PFEBoltBowDefault : PFEBoltBowDefault;
    let updatedUpgrades = [];
    if (oldInfo) {
        PokeGetObjectById(newInfo.upgrades, CapacityUpgradeDefault.id);
        const CapacityLevel = PokeGetObjectById(oldInfo.upgrades, "poke_pfe:capacity")?.value.level;
        const FlamingLevel = PokeGetObjectById(oldInfo.upgrades, "poke_pfe:flaming")?.value.level;
        for (let upgrade of newInfo.upgrades) {
            if (upgrade.id == CapacityUpgradeDefault.id) {
                upgrade.level = CapacityLevel;
                continue;
            }
            if (upgrade.id == FlamingUpgradeDefault.id)
                upgrade.level = FlamingLevel;
            updatedUpgrades.push(upgrade);
        }
    }
    let savingInfo = {
        v: 3,
        dynamicProperty: newInfo.dynamicProperty,
        id: 'poke_pfe:boltbow',
        projectile: {
            id: oldInfo?.id ?? newInfo.projectile.id,
            amount: oldInfo?.amount ?? newInfo.projectile.amount,
            entityId: oldInfo?.entityId ?? newInfo.projectile.entityId,
            max: oldInfo?.max
        },
        upgrades: updatedUpgrades
    };
    const validUpgradeIds = [
        CapacityUpgradeDefault.id,
        FlamingUpgradeDefault.id,
        PersistenceUpgradeDefault.id
    ];
    savingInfo.upgrades = newInfo.upgrades;
    PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(savingInfo), player);
    item.setDynamicProperty("poke_pfe:ammo", undefined);
}
//# sourceMappingURL=boltbow.js.map