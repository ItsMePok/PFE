import { ActionFormData, MessageFormData, ModalFormData } from "@minecraft/server-ui"
import { PokeGetItemFromInventory, PokeGetObjectById, PokeSaveProperty } from "./commonFunctions"
import { CustomComponentParameters, EntityComponentTypes, EquipmentSlot, GameMode, ItemComponentMineBlockEvent, ItemComponentUseEvent, ItemStack, Player, RawMessage } from "@minecraft/server"
import { clampNumber } from "@minecraft/math"
export {
  PFEItemUpgradeInfo,
  PokeUpgradeUIConfig,
  PokeUpgradeUI,
  PFEUpgrades,
  PFEUpgradeableComponentInfo,
  PFEUpgradeableComponent,
  ParsePFEUpgradeComponent,
  PFEUpgradeableId
}
const debug = true
const PFEUpgradeableId = "poke_pfe:upgradeable"
class PFEUpgrades {
  persistence = PFEPersistenceCoreDefault
  flaming = PFEFlamingCoreDefault
  capacity = PFECapacityCoreDefault
}
type PFEUpgradeableComponentInfo = {
  version: number | 1
  upgrade_ids?: string[] | ["poke_pfe:persistence"] | "custom",
  dynamic_property?: string | "poke_pfe:upgrades",
  sneak_interact_opens_ui?: boolean | false
}
class PFEUpgradeableComponent {
  onUse(data: ItemComponentUseEvent, componentInfo: CustomComponentParameters) {
    const component = <PFEUpgradeableComponentInfo>componentInfo.params
    if (!data.itemStack) return
    if (component.sneak_interact_opens_ui && data.source.isSneaking) {
      const parsedUpgradeInfo = ParsePFEUpgradeComponent(data.itemStack, data.source, component)
      PokeUpgradeUI(data.source, data.itemStack, parsedUpgradeInfo, true)
    }
  }
}
function ParsePFEUpgradeComponent(item: ItemStack, player: Player, component: PFEUpgradeableComponentInfo) {
  let upgrades: PFEItemUpgradeInfo[] = []
  const customUpgrades = <PFEItemUpgradeInfo[] | undefined>item.getComponent('poke_pfe:custom_upgrades')
  const PFEUpgrade = new PFEUpgrades()
  const defaultUpgrades = [JSON.parse(JSON.stringify(PFEUpgrade.persistence)), PFEUpgrade.capacity, PFEUpgrade.flaming]
  let allUpgrades = customUpgrades ? defaultUpgrades.concat(customUpgrades) : defaultUpgrades
  const compressedUpgrades = <PokeUpgradeUIConfig | undefined>JSON.parse(item.getDynamicProperty(component.dynamic_property ?? "poke_pfe:upgrades")?.toString() ?? JSON.stringify([]))
  //console.warn(JSON.stringify(compressedUpgrades))
  if (component.upgrade_ids) {
    for (let upgrade_id of component?.upgrade_ids) {
      const validUpgrade: PFEItemUpgradeInfo | undefined = allUpgrades.filter(upgrade => upgrade.id == upgrade_id).at(0)
      const compressedUpgrade = compressedUpgrades?.upgrades ? compressedUpgrades?.upgrades.filter(compressedUpgrade => compressedUpgrade.id == validUpgrade?.id)?.at(0) ?? undefined : undefined
      if (validUpgrade) {
        if (compressedUpgrade) validUpgrade.level += compressedUpgrade.level
        upgrades.push(validUpgrade)
      }
    }
  }
  if (upgrades.length < 1) {
    const persistenceUpgrade = defaultUpgrades.at(0)
    persistenceUpgrade.level = compressedUpgrades?.upgrades ? compressedUpgrades.upgrades.filter(compressedUpgrade => compressedUpgrade?.id == PFEPersistenceCoreDefault.id).at(0)?.level ?? 0 : 0
    upgrades.push(persistenceUpgrade)
  }
  let parsedUpgradeInfo: PokeUpgradeUIConfig = {
    dynamicProperty: component.dynamic_property ?? "poke_pfe:upgrades",
    id: "poke_pfe:upgradable_component",
    v: 1,
    upgrades: upgrades,
    compressedUpgrades: JSON.parse(item.getDynamicProperty(component.dynamic_property ?? "poke_pfe:upgrades")?.toString() ?? "[]") ?? undefined
  }
  return parsedUpgradeInfo
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
  dynamicProperty: string,
  compressedUpgrades?: compressedPFEUpgradeInfo[]
}
type compressedPFEUpgradeInfo = {
  id: string,
  level: number
}
type compressedPFEItemUpgradeInfo = {
  upgrades: compressedPFEUpgradeInfo[]
}
function PokeUpgradeUI(player: Player, item: ItemStack, config: PokeUpgradeUIConfig, compressedSave?: boolean, component?: PFEUpgradeableComponentInfo, slot?: number) {
  let UI = new ActionFormData()
  //console.warn(JSON.stringify(config))

  for (let upgrade of config.upgrades) {
    const upgradeCost = (
      (upgrade.maxLevel) ?
        (upgrade.maxLevel <= upgrade.level) ?
          Infinity
          : (upgrade.upgradeAdditive) ?
            Number(upgrade.level) + 1
            : 1
        : (upgrade.upgradeAdditive) ?
          Number(upgrade.level) + 1
          : 1
    )
    const HasItem = player.getGameMode() == GameMode.Creative ? true : Boolean(PokeGetItemFromInventory(player, undefined, upgrade.upgradeItem)?.length)
    UI.label({ translate: `${upgrade.upgradeName} %poke_pfe.level: ${upgrade.maxLevel == upgrade.maxLevel ? "§c" : "§b"}${clampNumber(upgrade.level, 0, upgrade.maxLevel ?? Infinity)}§r/§c${upgrade.maxLevel}` })
    UI.button(
      { translate: `${upgrade.level == upgrade.maxLevel ? "" : "%translation.poke_pfeUpgrade "}${upgrade.upgradeName ?? upgrade.upgradeItem}\n${upgradeCost == Infinity ? "%poke_pfe.max_level" : `%translation.poke_pfecost: ${upgradeCost} ${upgrade.upgradeItemName ?? item.typeId}`}` },
      upgrade.level != upgrade.maxLevel && HasItem ? upgrade.icon?.default : upgrade.icon?.cantUpgrade ?? upgrade.icon?.default ?? `textures/poke/common/upgrade`
    )
  }
  if (debug) {
    UI.button({ translate: `Debug` }, `textures/poke/common/debug`)
  }
  UI.button({ translate: `translation.poke_pfe:goBack` }, `textures/poke/common/left_arrow`)
  UI.title({ translate: `poke_pfe.upgradeTitle`, with: [item.nameTag ?? `%poke_pfe.${item.typeId.replace(`poke_pfe:`, ``).replace(`poke_pfe:`, ``)}`] })

  UI.show(player).then(response => {
    let selection = 0

    //console.warn("Passed")
    for (let upgrade of config.upgrades) {
      if (response.selection == selection) {
        const HasItem = player.getGameMode() == GameMode.Creative ? true : Boolean(PokeGetItemFromInventory(player, undefined, upgrade.upgradeItem)?.length)
        const dynamicProperty = item.getDynamicProperty(config.dynamicProperty)
        const currentCompressed = compressedSave ? typeof dynamicProperty == "string" ? <compressedPFEItemUpgradeInfo>JSON.parse(dynamicProperty) : undefined : undefined
        const upgradeCost = (
          (upgrade.maxLevel) ?
            (upgrade.maxLevel <= upgrade.level) ?
              Infinity
              : (upgrade.upgradeAdditive) ?
                Number(upgrade.level) + 1
                : 1
            : (upgrade.upgradeAdditive) ?
              Number(upgrade.level) + 1
              : 1
        )
        // console.warn(upgradeCost)
        if (upgradeCost !== Infinity && HasItem && upgrade.level != upgrade.maxLevel) {
          if (upgrade.id == PFEPersistenceCoreDefault.id) item.keepOnDeath = true;
          const compressedUpgradeLevel = Number(currentCompressed?.upgrades.filter(compressedUpgrade => compressedUpgrade.id == upgrade.id).at(0)?.level) ?? Number(upgrade.level)
          let compressedNewProperty: compressedPFEItemUpgradeInfo = {
            upgrades: currentCompressed ? currentCompressed.upgrades.filter(compressedUpgrade => compressedUpgrade.id != upgrade.id).concat([
              {
                id: upgrade.id,
                level: (compressedUpgradeLevel ?? 0) + 1
              }]
            ) : []
          }
          let newProperty: PFEItemUpgradeInfo = {
            id: upgrade.id,
            icon: upgrade.icon,
            level: Number(upgrade.level) + 1,
            upgradeName: upgrade.upgradeName,
            maxLevel: upgrade.maxLevel,
            upgradeItem: upgrade.upgradeItem,
            upgradeItemName: upgrade.upgradeItemName,
            upgradeAdditive: upgrade.upgradeAdditive
          }
          config.upgrades = config.upgrades.filter((oldUpgrade) => oldUpgrade.id != upgrade.id).concat(newProperty)
          if (player.getGameMode() != GameMode.Creative && upgradeCost != Infinity) {
            player.runCommand(`clear @s ${upgrade.upgradeItem} -1 ${upgradeCost}`)
          }
          //console.warn(JSON.stringify(compressedNewProperty))
          PokeSaveProperty(component?.dynamic_property ?? config.dynamicProperty, item, JSON.stringify(compressedSave ? compressedNewProperty : config), player, slot ?? EquipmentSlot.Mainhand)
          // backTo
          return;
        } else { console.warn(`Failed to upgrade`); return }
      } else selection++; continue
    }
    if (debug) {
      if (response.selection == selection) {
        const UI = new ModalFormData()
        UI.label(`${JSON.stringify(item.getComponent("poke_pfe:upgrades"), undefined, "\n") ?? "undefined"}`)
        UI.divider()
        UI.label(`config\n${JSON.stringify(config, undefined, "\n") ?? "undefined"}`)
        UI.divider()
        UI.label(`compressedSave\n${JSON.stringify(compressedSave, undefined, "\n") ?? "undefined"}`)
        UI.divider()
        UI.label(`component\n${JSON.stringify(component, undefined, "\n") ?? "undefined"}`)
        UI.divider()
        UI.label(`slot\n${JSON.stringify(slot, undefined, "\n") ?? "undefined"}`)
        UI.divider()
        UI.label(`PFECapacityCoreDefault\n${JSON.stringify(PFECapacityCoreDefault, undefined, "\n") ?? "undefined"}`)
        UI.divider()
        UI.label(`PFEFlamingCoreDefault\n${JSON.stringify(PFEFlamingCoreDefault, undefined, "\n") ?? "undefined"}`)
        UI.divider()
        UI.label(`PFEPersistenceCoreDefault\n${JSON.stringify(PFEPersistenceCoreDefault, undefined, "\n") ?? "undefined"}`)
        UI.show(player)
        return
      } else selection++
    }
    if (response.canceled || response.selection == selection) {
      // backTo;
      return
    } else selection++
  })
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
          upgradeItem: `poke_pfe:upgrade_core`,
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
  id: "poke_pfe:persistence",
  upgradeItem: `poke_pfe:persistence_core`,
  icon: { default: `textures/poke/pfe/persistence_core`, cantUpgrade: `textures/poke/pfe/persistence_core_gs` },
  upgradeName: `%translation.poke_pfe.persistence`,
  upgradeItemName: `%poke_pfe.persistence_core`,
  upgradeAdditive: false,
  level: 0,
  maxLevel: 1
}
const PFEFlamingCoreDefault: PFEItemUpgradeInfo = {
  id: "poke_pfe:flaming",
  upgradeItem: `poke_pfe:flaming_core`,
  icon: { default: `textures/poke/pfe/flaming_core`, cantUpgrade: `textures/poke/pfe/flaming_core_gs` },
  upgradeName: `%translation.poke_pfe.flaming`,
  upgradeItemName: `%poke_pfe.flaming_core`,
  upgradeAdditive: false,
  level: 0,
  maxLevel: 1
}
const PFECapacityCoreDefault: PFEItemUpgradeInfo = {
  id: "poke_pfe:capacity",
  upgradeItem: `poke_pfe:capacity_core`,
  icon: { default: `textures/poke/pfe/capacity_core`, cantUpgrade: `textures/poke/pfe/capacity_core_gs` },
  upgradeName: `%translation.poke_pfe.capacity`,
  upgradeItemName: `%poke_pfe.capacity_core`,
  upgradeAdditive: true,
  level: 1,
  maxLevel: undefined
}