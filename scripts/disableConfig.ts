import { ItemComponentUseEvent, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

export {
  PFEDiableConfigOptions,
  PFEDisableConfigName,
  PFEDisableConfigDefault,
  PFEDisableConfigMainMenu,
  PFEDisabledOnUseItems
}
let PFEDisableConfigName = "poke_pfe:disable_config"
let PFEDisableConfigVersion = 1
interface PFEDiableConfigOptions {
  "v":number
  "quantumTeleporter":boolean
  "deathArmorRadius":boolean
  "cactusArmorRadius":boolean
  "bounty":boolean
  "sundial":boolean
  "witherSpawner":boolean
  "nukeRing":boolean
  "kapowRing":boolean
}
let PFEDisabledOnUseItems = ["poke:sundial","poke:quantum_teleporter","poke:kapow_ring"]
const PFEDisableConfigDefault:PFEDiableConfigOptions = {
  "v":PFEDisableConfigVersion,
  "bounty":true,
  "cactusArmorRadius":true,
  "deathArmorRadius":true,
  "kapowRing":true,
  "nukeRing":true,
  "quantumTeleporter":true,
  "sundial":true,
  "witherSpawner":true
}
function PFEDisableConfigMainMenu (data:ItemComponentUseEvent){
  let player = data.source
  let UI = new ActionFormData()
  let options:PFEDiableConfigOptions = JSON.parse(world.getDynamicProperty(PFEDisableConfigName)!.toString())
  if (options.quantumTeleporter){
    UI.button({rawtext:[{translate:`item.poke_pfe.quantum_teleporter`},{text:":§a\n"},{translate:`translation.poke_pfe.enabled`}]},`textures/poke/pfe/quantum_teleporter`)
  }else{
    UI.button({rawtext:[{translate:`item.poke_pfe.quantum_teleporter`},{text:":§c\n"},{translate:`translation.poke_pfe.disabled`}]},`textures/poke/pfe/quantum_teleporter`)
  }
  /*if (options.deathArmorRadius){
    UI.button({rawtext:[{translate:`translation.poke_pfe.death_aromr_radius`},{text:":§a\n"},{translate:`translation.poke_pfe.enabled`}]},`textures/poke/pfe/death_helmet`)
  }else{
    UI.button({rawtext:[{translate:`translation.poke_pfe.death_aromr_radius`},{text:":§c\n"},{translate:`translation.poke_pfe.disabled`}]},`textures/poke/pfe/death_helmet`)
  }
  if (options.cactusArmorRadius){
    UI.button({rawtext:[{translate:`translation.poke_pfe.cactus_aromr_radius`},{text:":§a\n"},{translate:`translation.poke_pfe.enabled`}]},`textures/poke/pfe/cactus_helmet`)
  }else{
    UI.button({rawtext:[{translate:`translation.poke_pfe.cactus_aromr_radius`},{text:":§c\n"},{translate:`translation.poke_pfe.disabled`}]},`textures/poke/pfe/cactus_helmet`)
  }*/
  if (options.kapowRing){
    UI.button({rawtext:[{translate:`item.poke_pfe.kapow_ring`},{text:":§a\n"},{translate:`translation.poke_pfe.enabled`}]},`textures/poke/pfe/kapow_ring`)
  }else{
    UI.button({rawtext:[{translate:`item.poke_pfe.kapow_ring`},{text:":§c\n"},{translate:`translation.poke_pfe.disabled`}]},`textures/poke/pfe/kapow_ring`)
  }
  if (options.nukeRing){
    UI.button({rawtext:[{translate:`item.poke_pfe.nuke_ring`},{text:":§a\n"},{translate:`translation.poke_pfe.enabled`}]},`textures/poke/pfe/nuke_ring`)
  }else{
    UI.button({rawtext:[{translate:`item.poke_pfe.nuke_ring`},{text:":§c\n"},{translate:`translation.poke_pfe.disabled`}]},`textures/poke/pfe/nuke_ring`)
  }
  if (options.sundial){
    UI.button({rawtext:[{translate:`item.poke_pfe.sundial`},{text:":§a\n"},{translate:`translation.poke_pfe.enabled`}]},`textures/poke/pfe/sundial_1`)
  }else{
    UI.button({rawtext:[{translate:`item.poke_pfe.sundial`},{text:":§c\n"},{translate:`translation.poke_pfe.disabled`}]},`textures/poke/pfe/sundial_1`)
  }
  if (options.witherSpawner){
    UI.button({rawtext:[{translate:`item.poke_pfe.wither_spawner`},{text:":§a\n"},{translate:`translation.poke_pfe.enabled`}]},`textures/poke/pfe/wither_spawner`)
  }else{
    UI.button({rawtext:[{translate:`item.poke_pfe.wither_spawner`},{text:":§c\n"},{translate:`translation.poke_pfe.disabled`}]},`textures/poke/pfe/wither_spawner`)
  }
  if (options.bounty){
    UI.button({rawtext:[{translate:`item.poke_pfe.bounty`},{text:":§a\n"},{translate:`translation.poke_pfe.enabled`}]},`textures/poke/pfe/bounty`)
  }else{
    UI.button({rawtext:[{translate:`item.poke_pfe.bounty`},{text:":§c\n"},{translate:`translation.poke_pfe.disabled`}]},`textures/poke/pfe/bounty`)
  }

  UI.show(player).then(response => {
    let selection = 0
    let newProperty = options
    if (response.selection == selection){// Quantum Teleporter
      if (newProperty.quantumTeleporter){
        newProperty.quantumTeleporter = false
        console.warn(`Disabled Qunantum Teleporter`)
      }else newProperty.quantumTeleporter = true
      world.setDynamicProperty(PFEDisableConfigName,JSON.stringify(newProperty))
      PFEDisableConfigMainMenu(data)
      return
    }else selection++
   /* if (response.selection == selection){// Death Armor's Radius Effects
      if (newProperty.deathArmorRadius){
        newProperty.deathArmorRadius = false
        console.warn(`Disabled Death Armor's Radius Effects`)
      }else newProperty.deathArmorRadius = true
      world.setDynamicProperty(PFEDisableConfigName,JSON.stringify(newProperty))
      PFEDisableConfigMainMenu(data)
      return
    }else selection++
    if (response.selection == selection){// Cactus Armor's Radius Effects
      if (newProperty.cactusArmorRadius){
        newProperty.cactusArmorRadius = false
        console.warn(`Disabled Cactus Armor's Radius Effects`)
      }else newProperty.cactusArmorRadius = true
      world.setDynamicProperty(PFEDisableConfigName,JSON.stringify(newProperty))
      PFEDisableConfigMainMenu(data)
      return
    }else selection++*/
    if (response.selection == selection){// Kapow Ring
      if (newProperty.kapowRing){
        newProperty.kapowRing = false
        console.warn(`Disabled Kapow Ring`)
      }else newProperty.kapowRing = true
      world.setDynamicProperty(PFEDisableConfigName,JSON.stringify(newProperty))
      PFEDisableConfigMainMenu(data)
      return
    }else selection++
    if (response.selection == selection){// Nuke Ring
      if (newProperty.nukeRing){
        newProperty.nukeRing = false
        console.warn(`Disabled Nuke Ring`)
      }else newProperty.nukeRing = true
      world.setDynamicProperty(PFEDisableConfigName,JSON.stringify(newProperty))
      PFEDisableConfigMainMenu(data)
      return
    }else selection++
    if (response.selection == selection){// Sundial
      if (newProperty.sundial){
        newProperty.sundial = false
        console.warn(`Disabled Sundial`)
      }else newProperty.sundial = true
      world.setDynamicProperty(PFEDisableConfigName,JSON.stringify(newProperty))
      PFEDisableConfigMainMenu(data)
      return
    }else selection++
    if (response.selection == selection){// Wither Spawner
      if (newProperty.witherSpawner){
        newProperty.witherSpawner = false
        console.warn(`Disabled Wither Spawner`)
      }else newProperty.witherSpawner = true
      world.setDynamicProperty(PFEDisableConfigName,JSON.stringify(newProperty))
      PFEDisableConfigMainMenu(data)
      return
    }else selection++
    if (response.selection == selection){// Bounty
      if (newProperty.bounty){
        newProperty.bounty = false
        console.warn(`Disabled Bounty`)
      }else newProperty.bounty = true
      world.setDynamicProperty(PFEDisableConfigName,JSON.stringify(newProperty))
      PFEDisableConfigMainMenu(data)
      return
    }else selection++
    if (response.canceled||(response.selection==selection)){return}
  })
}