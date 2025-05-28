import { ActionFormData } from "@minecraft/server-ui"
import { PokeGetItemFromInventory, PokeGetObjectById, PokeSaveProperty } from "./commonFunctions"
import { EntityComponentTypes, EquipmentSlot, GameMode, ItemComponentMineBlockEvent, ItemComponentUseEvent, ItemStack, Player, RawMessage } from "@minecraft/server"
export {
  PFEItemUpgradeInfo,
  PokeUpgradeUIConfig,
  PokeUpgradeUI,
  PFEPersistenceCoreDefault,
  PFEFlamingCoreDefault,
  PFECapacityCoreDefault
}
interface PFEItemUpgradeInfo {
  id: string // name of the upgrade
  level: number // current upgrade level
  maxLevel?: number | undefined // max level of upgrade
  upgradeItem?: string
  upgradeItemName?: string
  upgradeAdditive?: boolean;
  icon?: {
    default: string
    cantUpgrade: string
  }
  upgradeName?: string
}
interface PokeUpgradeUIConfig {
  v: number,
  upgrades: PFEItemUpgradeInfo[],
  id: string,
  dynamicProperty: string
}
function PokeUpgradeUI(player: Player, item: ItemStack, config: PokeUpgradeUIConfig, backTo?: any) {
  let UI = new ActionFormData()
  for (let upgrade of config.upgrades) {
    const upgradeCost = (
      (upgrade.maxLevel) ? (upgrade.maxLevel <= upgrade.level) ? Infinity
        : (upgrade.upgradeAdditive) ? (upgrade.level) + 1
          : 1
        : (upgrade.upgradeAdditive) ? (upgrade.level) + 1
          : 1
    )
    UI.button(
      { translate: `%translation.poke.Upgrade ${upgrade.upgradeName ?? upgrade.upgradeItem} [%translation.poke.level:${upgrade.level}]\n%translation.poke.cost: ${upgradeCost} ${upgrade.upgradeItemName ?? item.typeId}` },
      (upgradeCost && PokeGetItemFromInventory(player, undefined, upgrade.upgradeItem)) ? upgrade.icon?.default : upgrade.icon?.cantUpgrade ?? upgrade.icon?.default ?? `textures/poke/common/upgrade`
    )
  }
  UI.title({ translate: `translation.poke:ammoUIUpgradeTitle`, with: [item.nameTag ?? `%poke_pfe.${item.typeId.replace(`poke:`, ``).replace(`poke_pfe:`, ``)}`] })

  UI.show(player).then(response => {
    let selection = 0
    for (let upgrade of config.upgrades) {
      if (response.selection == selection) {
        const HasItem = player.getGameMode() == GameMode.Creative ? true : (Number(PokeGetItemFromInventory(player, undefined, upgrade.upgradeItem)?.length) + 0)
        const upgradeCost = (
          (upgrade.maxLevel) ? (upgrade.maxLevel <= upgrade.level) ? Infinity : (upgrade.upgradeAdditive) ? (upgrade.level) + 1 : 1 : (upgrade.upgradeAdditive) ? (upgrade.level) + 1 : 1
        )
        console.warn(upgradeCost)
        if (HasItem && upgradeCost != Infinity) {
          if (upgrade.id == PFEPersistenceCoreDefault.id) item.keepOnDeath = true;
          let newProperty: PFEItemUpgradeInfo = {
            id: upgrade.id,
            icon: upgrade.icon,
            level: upgrade.level + 1,
            upgradeName: upgrade.upgradeName,
            maxLevel: upgrade.maxLevel,
            upgradeItem: upgrade.upgradeItem,
            upgradeItemName: upgrade.upgradeItemName,
            upgradeAdditive: upgrade.upgradeAdditive
          }
          config.upgrades = config.upgrades.filter((oldUpgrade) => oldUpgrade.id != upgrade.id).concat(newProperty)
          if (player.getGameMode() != GameMode.Creative && upgradeCost != Infinity) {
            player.runCommand(`clear @s ${upgrade.upgradeItem} 0 ${upgradeCost}`)
          }
          PokeSaveProperty(config.dynamicProperty, item, JSON.stringify(config), player, EquipmentSlot.Mainhand)
          return;
        }
      } else selection++; continue
    }
    if (response.canceled || response.selection == selection) {
      backTo;
      return
    }
  })
}


function PokeItemHasUpgrade(item: ItemStack, upgrade: PFEItemUpgradeInfo) {

}


interface PokeVeinMiningInfo {
  id: string,
  v: number
  canBreak: {
    blockTag: string
  },
  maxBreakLimit: number,
  durabilityType: "additive" | "static",
  upgrade: PFEItemUpgradeInfo[]
  allowSilkTouch: boolean
}

class PFEVeinMining {
  onUse(data: ItemComponentUseEvent) {
    if (!data.source.isSneaking) return;
    if (!data.itemStack) return;
    const UpgradeConfig: PokeUpgradeUIConfig = {
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
    }
    PokeUpgradeUI(data.source, data.itemStack, UpgradeConfig)
  }
  onMineBlock(data: ItemComponentMineBlockEvent) {
    let config: PokeVeinMiningInfo = undefined!
    if (!data.minedBlockPermutation.hasTag(config.canBreak.blockTag)) return;
    let dimension = data.block.dimension;
    let location = data.block.location
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
    let max = 0
    while (max < config.maxBreakLimit && toBreak.length > 0) {
      location = toBreak.shift()!;
      let key = `${location.x},${location.y},${location.z}`;
      if (checked.has(key)) {
        //console.warn(`block already checked`)
        continue
      };
      checked.add(key);
      let currentBlock = undefined
      //to prevent the vein miner from randomly stopping if outside of world bounds
      try {
        currentBlock = dimension.getBlock(location);
      } catch (error) {
        continue
      }
      //console.warn(currentBlock?.getTags())
      if (data.minedBlockPermutation.matches(currentBlock!.typeId)) {
        dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} air destroy`);
        max = max + 1
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
          toBreak.push(loc)
        }
      }
    }
  }
}

function PersistenceUpgrade(item: ItemStack, player: Player, upgradeConfig: PokeUpgradeUIConfig) {
  item.keepOnDeath = true
  let persistenceUpgrade = PokeGetObjectById(upgradeConfig.upgrades, `poke_pfe:persistence`)
  upgradeConfig.upgrades.at(persistenceUpgrade!.position)!.level += 1
  item.setDynamicProperty(upgradeConfig.dynamicProperty, JSON.stringify(upgradeConfig))
  player.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, item)
}

const PFEPersistenceCoreDefault: PFEItemUpgradeInfo = {
  id: "pfe:persistence",
  upgradeItem: `poke_pfe:persistence_core`,
  icon: { default: `textures/poke/pfe/persistence_core`, cantUpgrade: `textures/poke/pfe/persistence_core_gs` },
  upgradeName: `%translation.poke_pfe.persistence`,
  upgradeItemName: `%poke_pfe.persistence_core`,
  upgradeAdditive: false,
  level: 0,
  maxLevel: 1
}
const PFEFlamingCoreDefault: PFEItemUpgradeInfo = {
  id: "pfe:flaming",
  upgradeItem: `poke_pfe:flaming_core`,
  icon: { default: `textures/poke/pfe/flaming_core`, cantUpgrade: `textures/poke/pfe/flaming_core_gs` },
  upgradeName: `%translation.poke_pfe.flaming`,
  upgradeItemName: `%poke_pfe.flaming_core`,
  upgradeAdditive: false,
  level: 0,
  maxLevel: 1
}
const PFECapacityCoreDefault: PFEItemUpgradeInfo = {
  id: "pfe:capacity",
  upgradeItem: `poke:capacity_core`,
  icon: { default: `textures/poke/pfe/capacity_core`, cantUpgrade: `textures/poke/pfe/capacity_core_gs` },
  upgradeName: `%translation.poke_pfe.capacity`,
  upgradeItemName: `%poke_pfe.capacity_core`,
  upgradeAdditive: true,
  level: 1,
  maxLevel: undefined
}