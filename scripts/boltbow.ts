import { EntityComponentTypes, EntityEquippableComponent, EntityProjectileComponent, EquipmentSlot, GameMode, ItemComponentTypes, ItemComponentUseEvent, ItemCooldownComponent, ItemStack, Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { PokeDamageItemUB, PokeErrorScreen, PokeGetItemFromInventory, PokeGetObjectById, PokeSaveProperty } from "./commonFunctions";
import { MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { PFECapacityCoreDefault, PFEFlamingCoreDefault, PFEItemUpgradeInfo, PFEPersistenceCoreDefault, PokeUpgradeUI, PokeUpgradeUIConfig } from "./upgrades";

export {
  PFEBoltBowsComponent
}
const PFEBoltBowDynamicPropertyID = `poke_pfe:boltbow`
const PFEBoltBowVersion = 3
interface PFEBoltBowInfo {
  dynamicProperty: typeof PFEBoltBowDynamicPropertyID,
  id: `poke_pfe:boltbow`,
  projectile: {
    id: string // Projectile ITEM identifier
    entityId: string // Projectile Entity Id
    amount: number,
    max: number | undefined // Maximum amount that can be stored
  },
  upgrades: PFEItemUpgradeInfo[]
  v: typeof PFEBoltBowVersion
}

const PFEBoltBowDefault: PFEBoltBowInfo = {
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
    PFECapacityCoreDefault,
    PFEFlamingCoreDefault,
    PFEPersistenceCoreDefault
  ]
}


class PFEBoltBowsComponent {
  onUse(data: ItemComponentUseEvent) {
    if (!data.itemStack) return;
    if (data.source.isSneaking) {
      PFEAmmoManagementMainMenuUI(data.itemStack, data.source)
      return;
    }
    console.warn(`Dyn: ${data.itemStack.getDynamicProperty(PFEBoltBowDynamicPropertyID)}`)
    let ammoComponent: PFEBoltBowInfo = PFEBoltBowDefault
    if (typeof data.itemStack.getDynamicProperty(PFEBoltBowDynamicPropertyID) != "string") {
      PokeSaveProperty(PFEBoltBowDynamicPropertyID, data.itemStack, JSON.stringify(PFEBoltBowDefault), data.source)
    } else ammoComponent = JSON.parse(data.itemStack.getDynamicProperty(PFEBoltBowDynamicPropertyID)!.toString())
    if (!ammoComponent.v || ammoComponent.v <= 2) {
      let newProperty: PFEItemUpgradeInfo[] = []
      for (let upgrade of ammoComponent.upgrades) {
        let upgradeDefault = upgrade.id == PFEFlamingCoreDefault.id ? PFEFlamingCoreDefault : upgrade.id == PFECapacityCoreDefault.id ? PFECapacityCoreDefault : upgrade.id == PFEPersistenceCoreDefault.id ? PFEPersistenceCoreDefault : undefined
        newProperty.concat([{
          id: upgrade.id,
          level: upgrade.level + 1,
          maxLevel: upgrade.maxLevel,
          icon: upgrade.icon ?? upgradeDefault?.icon,
          upgradeAdditive: upgrade.upgradeAdditive ?? upgradeDefault?.upgradeAdditive,
          upgradeItem: upgrade.upgradeItem ?? upgradeDefault?.upgradeItem,
          upgradeItemName: upgrade.upgradeItemName ?? upgradeDefault?.upgradeItemName,
          upgradeName: upgrade.upgradeName ?? upgradeDefault?.upgradeName
        }])
      }
      if (!(ammoComponent.upgrades.filter(upgrade => upgrade.id == PFEPersistenceCoreDefault.id).length == 1)) newProperty.concat([PFEPersistenceCoreDefault])
      ammoComponent.upgrades = newProperty
      PokeSaveProperty(PFEBoltBowDynamicPropertyID, data.itemStack, JSON.stringify(ammoComponent), data.source)
    }
    const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] })
    for (var i = cPlayers.length; i > 0; i--) {
      data.source.playAnimation('animation.poke_pfe.humanoid.boltbow_hold_3p', { blendOutTime: 0.5, stopExpression: `!q.is_item_name_any('slot.weapon.mainhand','${data.itemStack.typeId}')`, players: [cPlayers[i - 1].name] })
    }
    const cooldownComponent: ItemCooldownComponent | undefined = data.itemStack.getComponent(ItemComponentTypes.Cooldown)
    if (cooldownComponent) {
      const ticks: number = cooldownComponent.cooldownTicks
      if (cooldownComponent.getCooldownTicksRemaining(data.source) != ticks - 1) return;
    }
    let delay = 1
    if (ammoComponent.projectile.amount >= 1) {
      data.source.playAnimation(`animation.poke_pfe.boltbow.use`)
      let equippableComponent: EntityEquippableComponent | undefined = data.source.getComponent(EntityComponentTypes.Equippable)
      if (!equippableComponent) return;
      if ((equippableComponent.getEquipmentSlot(EquipmentSlot.Mainhand).getItem()?.typeId != data.itemStack?.typeId) || (equippableComponent.getEquipmentSlot(EquipmentSlot.Mainhand).getDynamicProperty(PFEBoltBowDynamicPropertyID) != JSON.stringify(ammoComponent))) return
      PokeShoot(data.source, ammoComponent, data.itemStack, delay)
      data.source.setDynamicProperty(`poke:isUsingItem`, true)
      /*system.runTimeout(()=>{
        
      },delay)*/
    } else {
      data.source.dimension.playSound(`poke.boltbow.noAmmo`, data.source.location)
    }
    return;

  }
}

function PokeShoot(player: Player, ammoComponent: PFEBoltBowInfo, item: ItemStack, delay: number) {
  if (player.getGameMode() != GameMode.creative) {
    ammoComponent.projectile.amount = ammoComponent.projectile.amount - 1
  }
  item.setDynamicProperty(PFEBoltBowDynamicPropertyID, JSON.stringify(ammoComponent))
  const headLocate = player.getHeadLocation();
  const angle = player.getViewDirection();
  const projEntity = player.dimension.spawnEntity(ammoComponent.projectile.entityId, { x: headLocate.x + (angle.x * 2), y: headLocate.y - 0.25 + (angle.y * 2), z: headLocate.z + (angle.z * 2) });
  const projComp: EntityProjectileComponent | undefined = projEntity.getComponent(EntityComponentTypes.Projectile);
  if (!projComp) return;
  player.playSound(`random.bow`, { pitch: (ammoComponent.projectile.amount > 3 ? undefined : (ammoComponent.projectile.amount == 3) ? 1.05 : (ammoComponent.projectile.amount == 2) ? 1.15 : (ammoComponent.projectile.amount == 1) ? 1.25 : undefined) })
  projComp.catchFireOnHurt = (PokeGetObjectById(ammoComponent.upgrades, `pfe:flaming`)?.value.level > 0)
  projComp.owner = player;
  projComp.shoot(angle, { uncertainty: 0.001, });
  if (PokeDamageItemUB(item, undefined, player, EquipmentSlot.Mainhand)?.broke) {
    player.runCommand(`give @s ${ammoComponent.projectile.id} ${ammoComponent.projectile.amount} 0`)
  }

};
/**
 * UI -> Main Menu
 */
function PFEAmmoManagementMainMenuUI(item: ItemStack, player: Player) {
  let UI = new ActionFormData()
  UI.title({ translate: `translation.poke:ammoUIMainMenuTitle`, with: { rawtext: [{ translate: `poke_pfe.${item.typeId.substring(5)}` }] } })
  if (typeof item.getDynamicProperty(PFEBoltBowDynamicPropertyID) != "string") {
    PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(PFEBoltBowDefault), player)
  }
  let boltBowComponent: PFEBoltBowInfo = JSON.parse(item.getDynamicProperty(PFEBoltBowDynamicPropertyID)!.toString())
  UI.button({ translate: `translation.poke:ammoUIQuickReload`, with: { rawtext: [{ text: `${boltBowComponent.projectile.amount}` }, { text: `${(boltBowComponent.upgrades.filter(upgrade => upgrade.id == PFECapacityCoreDefault.id).at(0)?.level ?? 1) * 16}` }] } }, `textures/poke/common/ammoQuickReload`)
  UI.button({ translate: `translation.poke:ammoUIAddAmmo` }, `textures/poke/common/ammoReload`)
  UI.button({ translate: `translation.poke:ammoUIUpgrade` }, `textures/poke/common/upgrade`)
  UI.button({ translate: `translation.poke:bossEventClose` }, `textures/poke/common/close`)

  UI.show(player).then((response => {
    let selection = 0
    if (response.selection == selection) {// Quick Reload
      PFEQuickReload(boltBowComponent, item, player)
      return
    } else selection++
    if (response.selection == selection) {// Reload
      PFEAmmoManagementAddAmmoUI(item, player)
      return
    } else selection++
    if (response.selection == selection) {// Upgrade
      PokeUpgradeUI(player, item, boltBowComponent, PFEAmmoManagementMainMenuUI(item, player))
      //PFEAmmoUpgrade(player, item)
      return
    } else selection++
    if (response.canceled || selection) { // Close
      return
    }
  }))
}

function PFEAmmoManagementAddAmmoUI(item: ItemStack, player: Player) {
  let UI = new ActionFormData()
  let allowedAmmo = [`minecraft:arrow`, `poke:galaxy_arrow`, `poke:holy_arrow`, `poke:hellish_arrow`, `poke:void_arrow`, `poke:volt_arrow`]
  UI.title({ translate: `translation.poke:ammoUIMainMenuTitle` })
  let ammoComponent: PFEBoltBowInfo = JSON.parse(item.getDynamicProperty(PFEBoltBowDynamicPropertyID)!.toString())
  let buttonTotal = 0
  let allItems: ItemStack[] = []
  for (let i = allowedAmmo.length - 1; i > -1; i--) {
    let items = PokeGetItemFromInventory(player, undefined, allowedAmmo.at(i))
    if (!items) {
      continue
    }
    //console.warn(`found items: ${items.length}`)
    allItems = allItems.concat(items)
    for (let i = items.length; i > -1; i--) {
      let foundItem = items.at(i)
      if (!foundItem) continue;
      if (foundItem.typeId == MinecraftItemTypes.Arrow) {
        UI.button({ rawtext: [{ translate: `item.arrow.name` }, { text: ` x${foundItem.amount}` }] }, PFEArrowIcon(foundItem.typeId))
      } else {
        UI.button({ rawtext: [{ translate: `item.${foundItem.typeId}` }, { text: ` x${foundItem.amount}` }] }, PFEArrowIcon(foundItem.typeId))
      }
      buttonTotal = buttonTotal + 1
    }
  }
  UI.button({ translate: `translation.poke:bossEventClose` }, `textures/poke/common/close`)

  UI.show(player).then((response => {
    let selection = 0
    if (response.canceled || response.selection == selection + buttonTotal) { // Go Back
      return
    }
    for (buttonTotal - 1; buttonTotal > -1; buttonTotal--) {
      if (response.selection == selection) {
        let selectedItem = allItems.reverse().at(buttonTotal - 1)
        //console.warn(`num: ${selectedItem?.amount},\n id: ${selectedItem?.typeId},\n button: ${buttonTotal}`)
        if (!selectedItem) {
          PokeErrorScreen(player, undefined, PFEAmmoManagementAddAmmoUI(item, player))
          return
        }
        if (ammoComponent.projectile.id != selectedItem.typeId) {
          let newProperty: PFEBoltBowInfo = {
            v: PFEBoltBowVersion,
            dynamicProperty: ammoComponent.dynamicProperty,
            projectile: {
              amount: selectedItem.amount,
              max: ammoComponent.projectile.max,
              id: selectedItem.typeId,
              entityId: selectedItem.typeId,
            },
            id: ammoComponent.id,
            upgrades: ammoComponent.upgrades
          }
          if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
            PokeErrorScreen(player, { text: `Unable to save new ammo type` }, PFEAmmoManagementAddAmmoUI(item, player))
            return
          }
          player.runCommand(`give @s ${ammoComponent.projectile.id} ${ammoComponent.projectile.amount}`)
          player.runCommand(`clear @s ${selectedItem.typeId} -1 ${selectedItem.amount}`)
        } else {
          if (!ammoComponent.projectile.max) {
            let newProperty: PFEBoltBowInfo = {
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
            }
            if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
              PokeErrorScreen(player, { text: `Unable to save new ammo amount` }, PFEAmmoManagementAddAmmoUI(item, player))
              return
            }
            player.runCommand(`clear @s ${selectedItem.typeId} -1 ${selectedItem.amount}`)
            return;
          }
          let maxRemaining = ammoComponent.projectile.max - ammoComponent.projectile.amount
          let takeAmount = selectedItem.amount
          if (maxRemaining < selectedItem.amount) {
            takeAmount = maxRemaining
          }
          let newProperty: PFEBoltBowInfo = {
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
          }
          if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
            PokeErrorScreen(player, { text: `Unable to save new ammo amount` }, PFEAmmoManagementAddAmmoUI(item, player))
            return
          }
          player.runCommand(`clear @s ${selectedItem.typeId} -1 ${takeAmount}`)
        }
        return
      } else selection++
    }

  }))
}

function PFEArrowIcon(itemId: string) {
  switch (itemId) {
    case MinecraftItemTypes.Arrow: {
      return `textures/items/arrow`
      break
    }
    case `poke:galaxy_arrow`: {
      return `textures/poke/pfe/galaxy_arrow_item`
      break
    }
    case `poke:void_arrow`: {
      return `textures/poke/pfe/void_arrow_item`
      break
    }
    case `poke:hellish_arrow`: {
      return `textures/poke/pfe/hellish_arrow_item`
      break
    }
    case `poke:holy_arrow`: {
      return `textures/poke/pfe/holy_arrow_item`
      break
    }
    case `poke:volt_arrow`: {
      return `textures/poke/pfe/volt_arrow_item`
      break
    }
  }
}



function PFEQuickReload(ammoComponent: PFEBoltBowInfo, item: ItemStack, player: Player) {
  let reloadingAmmo = PokeGetItemFromInventory(player, undefined, ammoComponent.projectile.id)
  if (!reloadingAmmo) {
    PokeErrorScreen(player, { text: `Failed to reload ammo` })
    return
  }
  let totalAmount = 0
  for (let i = reloadingAmmo.length - 1; i > -1; i--) {
    if (!reloadingAmmo.at(i)) continue;
    totalAmount = totalAmount + reloadingAmmo.at(i)!.amount
  }
  if (!ammoComponent.projectile.max) {
    let newProperty: PFEBoltBowInfo = {
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
    }
    if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
      PokeErrorScreen(player, undefined, PFEAmmoManagementMainMenuUI(item, player))
      return
    }
    player.runCommand(`clear @s ${ammoComponent.projectile.id} -1 ${totalAmount}`)
    return;
  }
  let maxRemaining = ammoComponent.projectile.max ?? Infinity - ammoComponent.projectile.amount
  let takeAmount = totalAmount
  if (maxRemaining < takeAmount) {
    takeAmount = maxRemaining
  }
  let newProperty: PFEBoltBowInfo = {
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
  }
  if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
    PokeErrorScreen(player, undefined, PFEAmmoManagementMainMenuUI(item, player))
    return
  }
  player.runCommand(`clear @s ${ammoComponent.projectile.id} -1 ${takeAmount}`)
  return
}
/*
function PFEAmmoUpgrade(player: Player, item: ItemStack) {
  let UI = new ActionFormData()
  let ammoComponent: PFEBoltBowInfo = JSON.parse(item.getDynamicProperty(PFEBoltBowDynamicPropertyID)!.toString()).at(0)
  UI.title({ translate: `translation.poke:ammoUIUpgradeTitle`, with: { rawtext: [{ translate: `poke_pfe.${item.typeId.substring(5)}` }] } })
  let capacityUpgrade = PokeGetObjectById(ammoComponent.upgrades, `pfe:capacity`)
  let flamingUpgrade = PokeGetObjectById(ammoComponent.upgrades, `pfe:flaming`)
  console.warn(JSON.stringify(ammoComponent))
  if (!capacityUpgrade) {
    PokeErrorScreen(player, { text: `Cannot find upgrade data for the Capacity Upgrade` }, PFEAmmoManagementMainMenuUI(item, player))
    return
  }
  if (!flamingUpgrade) {
    let newProperty: PFEBoltBowInfo = [{
      v: PFEBoltBowVersion,
      amount: ammoComponent.amount,
      max: ammoComponent.max,
      entityId: ammoComponent.entityId,
      id: ammoComponent.id,
      upgrades: ammoComponent.upgrades.concat([PokeGetObjectById(PFEBoltBowDefault.at(0)!.upgrades, `pfe:flaming`)?.value])
    }]
    console.warn(JSON.stringify(newProperty))
    PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)
    ammoComponent = newProperty.at(0)!
    flamingUpgrade = PokeGetObjectById(PFEBoltBowDefault.at(0)!.upgrades, `pfe:flaming`)
    if (!flamingUpgrade) {
      PokeErrorScreen(player, { text: `Cannot find upgrade data for the Flaming Upgrade` }, PFEAmmoManagementMainMenuUI(item, player))
      return
    }
  }
  let canUpgradeCapacity = false
  if (player.getGameMode() == GameMode.creative || PokeGetItemFromInventory(player, undefined, `poke:capacity_core`)) {
    UI.button({ translate: `translation.poke:ammoUpgrade`, with: { rawtext: [{ translate: `translation.poke_pfe.capacity` }, { text: `${capacityUpgrade.value.level}` }, { text: `${capacityUpgrade.value.level}` }, { translate: `item.poke:capacity_core` }] } }, `textures/poke/pfe/capacity_core`)
    canUpgradeCapacity = true
  } else {
    UI.button({ translate: `translation.poke:ammoUpgrade`, with: { rawtext: [{ translate: `translation.poke_pfe.capacity` }, { text: `${capacityUpgrade.value.level}` }, { text: `${capacityUpgrade.value.level}` }, { translate: `item.poke:capacity_core` }] } }, `textures/poke/pfe/capacity_core_gs`)
  }
  let canUpgradeFlaming = false
  if ((player.getGameMode() == GameMode.creative || (PokeGetItemFromInventory(player, undefined, `poke_pfe:flaming_core`))) && (flamingUpgrade.value.level < 1)) {
    UI.button({ translate: `translation.poke:ammoUpgrade`, with: { rawtext: [{ translate: `translation.poke_pfe.flaming` }, { text: `${flamingUpgrade.value.level}` }, { text: `${flamingUpgrade.value.level}` }, { translate: `poke_pfe.flaming_core` }] } }, `textures/poke/pfe/flaming_core`)
    canUpgradeFlaming = true
  } else {
    UI.button({ translate: `translation.poke:ammoUpgrade`, with: { rawtext: [{ translate: `translation.poke_pfe.flaming` }, { text: `${flamingUpgrade.value.level}` }, { text: `${flamingUpgrade.value.level}` }, { translate: `poke_pfe.flaming_core` }] } }, `textures/poke/pfe/flaming_core_gs`)
  }
  UI.button({ translate: `translation.poke:goBack` }, `textures/poke/common/left_arrow`)
  UI.show(player).then(response => {
    let selection = 0
    if (response.selection == selection) {//Capacity
      if (!canUpgradeCapacity) {
        PokeErrorScreen(player, { text: `Unable to upgrade Capacity` }, PFEAmmoManagementMainMenuUI(item, player))
        return
      }
      let newCapacity: PFEItemUpgradeInfo = {
        id: capacityUpgrade.value.id,
        level: capacityUpgrade.value.level + 1,
        maxLevel: capacityUpgrade.value.maxLevel,
        icon: capacityUpgrade.value.icon,
        upgradeAdditive: capacityUpgrade.value.upgradeAdditive,
        upgradeItem: capacityUpgrade.value.upgradeItem,
        upgradeItemName: capacityUpgrade.value.upgradeItemName,
        upgradeName: capacityUpgrade.value.upgradeName
      }
      let newProperty: PFEBoltBowInfo = [{
        v: PFEBoltBowVersion,
        amount: ammoComponent.amount,
        max: Number(ammoComponent.max) + 16,
        entityId: ammoComponent.entityId,
        id: ammoComponent.id,
        upgrades: ammoComponent.upgrades.filter((upgrade) => upgrade.id != `pfe:capacity`).concat(newCapacity)
      }]
      if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
        PokeErrorScreen(player, { text: `Unable to save capacity upgrade` }, PFEAmmoManagementAddAmmoUI(item, player))
        return
      }
      player.runCommand(`clear @s poke:capacity_core -1 ${capacityUpgrade.value.level}`)
      return
    } else selection++;
    if (response.selection == selection) {//Flaming
      if (!canUpgradeFlaming) {
        PokeErrorScreen(player, { text: `Unable to upgrade flaming` }, PFEAmmoManagementMainMenuUI(item, player))
        return
      }
      let newFlaming: PFEItemUpgradeInfo = {
        id: flamingUpgrade.value.id,
        level: flamingUpgrade.value.level + 1,
        maxLevel: flamingUpgrade.value.maxLevel,
        icon: flamingUpgrade.value.icon,
        upgradeAdditive: flamingUpgrade.value.upgradeAdditive,
        upgradeItem: flamingUpgrade.value.upgradeItem,
        upgradeItemName: flamingUpgrade.value.upgradeItemName,
        upgradeName: flamingUpgrade.value.upgradeName
      }
      console.warn(JSON.stringify(ammoComponent.upgrades.filter((upgrade) => upgrade.id != `pfe:flaming`)))
      let newProperty: PFEBoltBowInfo = [{
        v: PFEBoltBowVersion,
        amount: ammoComponent.amount,
        max: ammoComponent.max,
        entityId: ammoComponent.entityId,
        id: ammoComponent.id,
        upgrades: ammoComponent.upgrades.filter((upgrade) => upgrade.id != `pfe:flaming`).concat(newFlaming)
      }]
      console.warn(JSON.stringify(newProperty))
      if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
        PokeErrorScreen(player, { text: `Unable to save flaming upgrade` }, PFEAmmoManagementAddAmmoUI(item, player))
        return
      }
      player.runCommand(`clear @s poke_pfe:flaming_core -1 1`)
      return
    } else selection++;
    if (response.canceled || response.selection == selection) {
      PFEAmmoManagementMainMenuUI(item, player)
      return
    }
  })
}*/