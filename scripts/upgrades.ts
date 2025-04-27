import { ActionFormData } from "@minecraft/server-ui"
import { PokeGetItemFromInventory, PokeSaveProperty } from "./commonFunctions"
import { EquipmentSlot, ItemComponentMineBlockEvent, ItemComponentUseEvent, ItemStack, Player, RawMessage } from "@minecraft/server"
export {
  PFEItemUpgradeInfo,
  PokeUpgradeUIConfig,
  PokeUpgradeUI
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
  upgradeName?: RawMessage
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
    const upgradeCost = (upgrade.maxLevel) ? (upgrade.maxLevel > upgrade.level) ? undefined : (upgrade.upgradeAdditive) ? upgrade.level++ : 1 : (upgrade.upgradeAdditive) ? upgrade.level++ : 1
    UI.button({ rawtext: [{ translate: `translation.poke.Upgrade` }, upgrade.upgradeName ?? { text: upgrade.upgradeItem }, { text: `[` }, { translate: `translation.poke.level` }, { text: `:${upgrade.level}]\n` }, { translate: `translation.poke.cost` }, { text: `: ${upgradeCost}` }, { translate: `${upgrade.upgradeItemName ?? item.typeId}` }] }, (upgradeCost && PokeGetItemFromInventory(player, undefined, upgrade.upgradeItem)) ? upgrade.icon?.default : upgrade.icon?.cantUpgrade ?? upgrade.icon?.default ?? `textures/poke/common/upgrade`)
  }
  UI.title({ translate: `translation.poke:ammoUIUpgradeTitle`, with: [item.nameTag ?? `poke_pfe.${item.typeId.replace(`poke:`, ``).replace(`poke_pfe:`, ``)}`] })

  UI.show(player).then(response => {
    let selection = 0
    for (let upgrade of config.upgrades) {
      if (response.selection == selection) {
        const HasItem = PokeGetItemFromInventory(player, undefined, upgrade.upgradeItem)
        if (HasItem) {
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
          PokeSaveProperty(config.dynamicProperty, item, JSON.stringify(config.upgrades.filter((oldUpgrade) => oldUpgrade.id != upgrade.id).concat(newProperty)), player, EquipmentSlot.Mainhand)
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
          upgradeItemName: `UpgradeCore`,
          upgradeName: { translate: `poke_pfe.upgrade_core` },
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