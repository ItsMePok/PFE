import { EntityComponentTypes, EquipmentSlot, ItemComponentTypes, ItemComponentUseEvent, ItemStack, Player, RawMessage, Vector2, Vector3, world } from "@minecraft/server";
import { ActionFormData, FormCancelationReason, ModalFormData } from "@minecraft/server-ui";
import { PokeErrorScreen, PokeSaveProperty } from "./commonFunctions";
import { PFEDisableConfigName, PFEDisableConfigOptions } from "./disableConfig";

export {
  waypointComponentOptions,
  PokePFEWaypointConfig,
  WaypointDynamicPropertyID,
  PFEWaypointDefaultConfig,
  WaypointUIMainMenu,
  PFEWaypointVersion
}
const PFEWaypointVersion = 1
interface waypointComponentOptions {
  version: number,
  max_waypoints: number,
  debug_mode: false
}
interface PokePFEWaypointConfig {
  v: 1,
  id: number
  location?: Vector3,
  rotation?: Vector2,
  name: RawMessage | string,
  icon: string | "textures/poke/config/waypointRed",

}
interface PokePFEWaypointItemConfig {
  v: 1,
  waypoints: PokePFEWaypointConfig[],
  localSettings: {

  }
}
/**
  > Waypoints [X] 
  -> Create Waypoint [X]
  --- Name [X]

  -> * Waypoint Name * [X]

  --- Teleport [X]
-
  --- Update Location []
-
  --- Rename []
  ---- * Set new name []
-
  --- Change Icon [/]

  ---- Presets []
  ----- * List of predefined textures []

  ---- Custom [X]
  ----- * Path to texture [X]
-
  --- Delete [X]
  -<<? Confirm Deletion [X]
  ---< Go Back [X]
-
  --< Go Back [X]

  -< Go Back [X]

  > Options []

  - Debug []

  X Close [X]

 */
const WaypointTotal = 5
const WaypointDynamicPropertyID = `poke_pfe:waypoint_config`
const PFEWaypointDefaultConfig: PokePFEWaypointItemConfig = {
  v: PFEWaypointVersion,
  localSettings: {},
  waypoints: [

  ]
}
function WaypointUIMainMenu(player: Player, item: ItemStack, component: waypointComponentOptions) {
  let UI = new ActionFormData()
  let waypointConfig: PokePFEWaypointItemConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID)!.toString()) ?? PFEWaypointDefaultConfig
  UI.title({ translate: `translation.poke_pfe.WaypointUITitle` })
  UI.button({ translate: `*%WAYPOINTS [${waypointConfig.waypoints.length ?? 0}/${component.max_waypoints ?? WaypointTotal}]` }, `textures/poke/common/waypointRed`)
  UI.button({ translate: `*OPTIONS` }, `textures/poke/common/gear`)
  UI.button({ translate: `*DEBUG` }, `textures/poke/common/debug`)
  UI.button({ translate: `*CLOSE` }, `textures/poke/common/close`)
  UI.show(player).then(response => {
    let selection = 0
    if (response.selection == selection) {
      WaypointUIViewWaypoints(player, item, component)
      return;
    } else selection++
    if (response.selection == selection) {
      // LOCAL OPTIONS & (ADMIN) GLOBAL OPTIONS
      PokeErrorScreen(player, { text: `This is not ready yet` }, WaypointUIMainMenu(player, item, component))
      return;
    } else selection++
    if (response.selection == selection) {
      // DEBUG MENU (MAYBE NEEDED)
      PokeErrorScreen(player, { text: `This is not ready yet` }, WaypointUIMainMenu(player, item, component))
      return;
    } else selection++
    if (response.canceled || response.selection == selection) return;
  })
}


function WaypointUIViewWaypoints(player: Player, item: ItemStack, component: waypointComponentOptions) {
  let UI = new ActionFormData()
  let waypointConfig: PokePFEWaypointItemConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID)!.toString()) ?? PFEWaypointDefaultConfig
  UI.title({ translate: `translation.poke_pfe.WaypointUITitle` })
  for (let waypoint of waypointConfig.waypoints) {
    UI.button(waypoint.name, waypoint.icon)
  }
  if (waypointConfig.waypoints.length < (component.max_waypoints ?? WaypointTotal)) {
    UI.button({ translate: `*CREATE WAYPOINT` }, `textures/poke/common/add`)
  }
  UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`)
  UI.show(player).then(response => {
    let selection = 0
    for (let waypoint of waypointConfig.waypoints) {
      if (response.selection == selection) {
        WaypointUIManageWaypoint(player, item, waypoint, component)
        return;
      } else selection++
    }
    if (waypointConfig.waypoints.length < (component.max_waypoints ?? WaypointTotal)) {
      if (response.selection == selection) {
        // CREATE WAYPOINT
        WaypointUICreateWaypoint(player, item, component)
        return;
      } else selection++
    }
    if (response.canceled || response.selection == selection) {
      WaypointUIMainMenu(player, item, component)
      return;
    }
  })
}

function WaypointUIManageWaypoint(player: Player, item: ItemStack, waypoint: PokePFEWaypointConfig, component: waypointComponentOptions) {
  let UI = new ActionFormData()
  let waypointConfig: PokePFEWaypointItemConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID)!.toString()) ?? PFEWaypointDefaultConfig
  UI.title({ translate: `translation.poke_pfe.WaypointUITitle` })

  UI.button({ translate: `*TELEPORT` }, `textures/poke/common/teleport`)
  UI.button({ translate: `*UPDATE LOCATION` }, `textures/poke/common/question`)
  UI.button({ translate: `*RENAME` }, `textures/poke/common/edit`)
  UI.button({ translate: `*CHANGE ICON` }, `textures/poke/common/painting`)
  UI.button({ translate: `*DELETE WAYPOINT` }, `textures/poke/common/trash`)
  UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`)
  UI.show(player).then(response => {
    let selection = 0
    if (response.selection == selection) {
      // TELEPORT TO WAYPOINT
      waypoint.location ? player.teleport(waypoint.location, { rotation: waypoint.rotation }) : PokeErrorScreen(player, { text: `This waypoint does not have a location set.` }, WaypointUIManageWaypoint(player, item, waypoint, component))
      return;
    } else selection++
    if (response.selection == selection) {
      // UPDATE LOCATION
      PokeErrorScreen(player, { text: `This is not ready yet` }, WaypointUIManageWaypoint(player, item, waypoint, component))
      return;
    } else selection++
    if (response.selection == selection) {
      // RENAME
      WaypointUIRenameWaypoint(player, item, waypoint, component)
      return;
    } else selection++
    if (response.selection == selection) {
      // CHANGE ICON
      WaypointUIChangeWaypointIcon(player, item, waypoint, component);
      return;
    } else selection++
    if (response.selection == selection) {
      // DELETE
      WaypointUIDeleteWaypoint(player, item, waypoint, component);
      return;
    } else selection++
    if (response.canceled || response.selection == selection) {
      // GO BACK
      WaypointUIViewWaypoints(player, item, component);
      return;
    }
  })
}

function WaypointUIRenameWaypoint(player: Player, item: ItemStack, waypoint: PokePFEWaypointConfig, component: waypointComponentOptions) {
  let UI = new ModalFormData()
  let waypointConfig: PokePFEWaypointItemConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID)!.toString()) ?? PFEWaypointDefaultConfig
  UI.title({ translate: `translation.poke_pfe.WaypointUITitle` })
  UI.textField({ translate: `*NEW NAME` }, waypoint.name, { defaultValue: `` })
  UI.show(player).then(response => {
    if (response.canceled) {
      // GO BACK
      WaypointUIChangeWaypointIcon(player, item, waypoint, component)
      return;
    }

    let newWaypoint: PokePFEWaypointConfig = {
      v: PFEWaypointVersion,
      id: waypoint.id,
      icon: waypoint.icon,
      name: response.formValues?.at(0)?.toString() ?? waypoint.name,
      location: waypoint.location,
      rotation: waypoint.rotation
    }
    let newProperty: PokePFEWaypointItemConfig = {
      localSettings: waypointConfig.localSettings,
      v: PFEWaypointVersion,
      waypoints: waypointConfig.waypoints.filter(i => i.id != waypoint.id).concat(newWaypoint)
    }
    PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot.Mainhand)
    WaypointUIViewWaypoints(player, item, component)
  })
}


function WaypointUIDeleteWaypoint(player: Player, item: ItemStack, waypoint: PokePFEWaypointConfig, component: waypointComponentOptions) {
  let UI = new ActionFormData()
  let waypointConfig: PokePFEWaypointItemConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID)!.toString()) ?? PFEWaypointDefaultConfig
  UI.title({ translate: `translation.poke_pfe.WaypointUITitle` })
  UI.button({ translate: `*CONFIRM` }, `textures/poke/common/confirm`)
  UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`)
  UI.show(player).then(response => {
    let selection = 0
    if (response.selection == selection) {
      // CONFIRM DELETION
      let newProperty: PokePFEWaypointItemConfig = {
        localSettings: waypointConfig.localSettings,
        v: PFEWaypointVersion,
        waypoints: waypointConfig.waypoints.filter(i => i.id != waypoint.id)
      }
      PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot.Mainhand)
      return;
    } else selection++

    if (response.canceled || response.selection == selection) {
      // GO BACK
      WaypointUIManageWaypoint(player, item, waypoint, component)
      return;
    }
  })
}

function WaypointUICreateWaypoint(player: Player, item: ItemStack, component: waypointComponentOptions) {
  let UI = new ModalFormData()
  let waypointConfig: PokePFEWaypointItemConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID)!.toString()) ?? PFEWaypointDefaultConfig
  UI.title({ translate: `translation.poke_pfe.WaypointUITitle` })
  UI.textField({ translate: `*NAME` }, '', { defaultValue: `` })
  UI.show(player).then(response => {
    if (response.canceled) {
      // GO BACK
      WaypointUIViewWaypoints(player, item, component)
      return;
    }
    let selection = 0
    const newName = response.formValues?.at(0)?.toString()
    let newWaypoint: PokePFEWaypointConfig = {
      v: PFEWaypointVersion,
      id: Math.random() * (3 / Math.random()),
      icon: `textures/poke/common/waypointRed`,
      name: newName ?? { translate: `%translation.poke_pfe.waypoint ${waypointConfig.waypoints.length + 1}` },
      location: player.location,
      rotation: player.getRotation()
    }
    console.warn(`SAVING: ${JSON.stringify(newWaypoint)}`)
    let newProperty: PokePFEWaypointItemConfig = {
      localSettings: waypointConfig.localSettings,
      v: PFEWaypointVersion,
      waypoints: waypointConfig.waypoints.concat(newWaypoint)
    }
    console.warn(JSON.stringify(newProperty))
    PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot.Mainhand)
    WaypointUIViewWaypoints(player, item, component)
    return;
  })

}

interface PFEIconInfo {
  path: string,
  name: RawMessage,
}

const WaypointIconPresets: PFEIconInfo[] = [
  {
    path: `textures/poke/common/waypointRed`,
    name: { translate: `%icon.poke_pfe.waypointRed` }
  },
  {
    path: `textures/poke/common/debug`,
    name: { translate: `%icon.poke_pfe.debug` }
  },
  {
    path: `textures/poke/common/april_fools`,
    name: { translate: `%icon.poke_pfe.april_fools` }
  },
  {
    path: `textures/poke/common/birthday_cake`,
    name: { translate: `%icon.poke_pfe.birthday_cake` }
  },
  {
    path: `textures/poke/common/chest_open`,
    name: { translate: `%icon.poke_pfe.chest_open` }
  },
  {
    path: `textures/poke/common/chest_question`,
    name: { translate: `%icon.poke_pfe.chest_question` }
  },
  {
    path: `textures/poke/common/edit`,
    name: { translate: `%icon.poke_pfe.edit` }
  },
  {
    path: `textures/poke/common/event_default`,
    name: { translate: `%icon.poke_pfe.event_default` }
  },
  {
    path: `textures/poke/common/gear`,
    name: { translate: `%icon.poke_pfe.gear` }
  },
  {
    path: `textures/poke/common/gift`,
    name: { translate: `%icon.poke_pfe.gift` }
  },
  {
    path: `textures/poke/common/greeting`,
    name: { translate: `%icon.poke_pfe.greeting` }
  },
  {
    path: `textures/poke/common/halloween`,
    name: { translate: `%icon.poke_pfe.halloween` }
  },
  {
    path: `textures/poke/common/july_4th`,
    name: { translate: `%icon.poke_pfe.july_4th` }
  },
  {
    path: `textures/poke/common/new_year`,
    name: { translate: `%icon.poke_pfe.new_year` }
  },
  {
    path: `textures/poke/common/question`,
    name: { translate: `%icon.poke_pfe.question` }
  },
  {
    path: `textures/poke/common/st_patrick`,
    name: { translate: `%icon.poke_pfe.st_patrick` }
  },
  {
    path: `textures/poke/common/thanksgiving`,
    name: { translate: `%icon.poke_pfe.thanksgiving` }
  },
  {
    path: `textures/poke/common/trash`,
    name: { translate: `%icon.poke_pfe.trash` }
  },
  {
    path: `textures/poke/common/upgrade`,
    name: { translate: `%icon.poke_pfe.upgrade` }
  },
  {
    path: `textures/poke/common/valentine`,
    name: { translate: `%icon.poke_pfe.valentine` }
  },
  {
    path: `textures/poke/common/xmas`,
    name: { translate: `%icon.poke_pfe.xmas` }
  }
]

function WaypointUIChangeWaypointIcon(player: Player, item: ItemStack, waypoint: PokePFEWaypointConfig, component: waypointComponentOptions) {
  let UI = new ActionFormData()
  let waypointConfig: PokePFEWaypointItemConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID)!.toString()) ?? PFEWaypointDefaultConfig
  UI.title({ translate: `translation.poke_pfe.WaypointUITitle` })
  UI.button({ translate: `*PRESET` }, `textures/poke/common/upcoming_events`)
  UI.button({ translate: `*CUSTOM` }, `textures/poke/common/upgrade`)
  UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`)
  UI.show(player).then(response => {
    let selection = 0
    if (response.selection == selection) {
      // PRESET
      WaypointUISetIconPreset(player, item, waypoint, component)
      return;
    } else selection++
    if (response.selection == selection) {
      // CUSTOM
      WaypointUISetIconCustom(player, item, waypoint, component)
      return;
    } else selection++

    if (response.canceled || response.selection == selection) {
      // GO BACK
      WaypointUIManageWaypoint(player, item, waypoint, component)
      return;
    }
  })
}

function WaypointUISetIconPreset(player: Player, item: ItemStack, waypoint: PokePFEWaypointConfig, component: waypointComponentOptions) {
  let UI = new ActionFormData()
  let waypointConfig: PokePFEWaypointItemConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID)!.toString()) ?? PFEWaypointDefaultConfig
  UI.title({ translate: `translation.poke_pfe.WaypointUITitle` })
  for (let icon of WaypointIconPresets) {
    UI.button(icon.name, icon.path)
  }
  UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`)
  UI.show(player).then(response => {
    let selection = 0
    for (let icon of WaypointIconPresets) {
      if (response.selection == selection) {
        let newWaypoint: PokePFEWaypointConfig = {
          v: PFEWaypointVersion,
          id: waypoint.id,
          icon: icon.path,
          name: waypoint.name,
          location: waypoint.location,
          rotation: waypoint.rotation
        }
        let newProperty: PokePFEWaypointItemConfig = {
          localSettings: waypointConfig.localSettings,
          v: PFEWaypointVersion,
          waypoints: waypointConfig.waypoints.filter(i => i.id != waypoint.id).concat(newWaypoint)
        }
        PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot.Mainhand)
        WaypointUIViewWaypoints(player, item, component)
        return;
      } else selection++
    }
    if (response.canceled || response.selection == selection) {
      // GO BACK
      WaypointUIManageWaypoint(player, item, waypoint, component)
      return;
    }
  })
}

function WaypointUISetIconCustom(player: Player, item: ItemStack, waypoint: PokePFEWaypointConfig, component: waypointComponentOptions) {
  let UI = new ModalFormData()
  let waypointConfig: PokePFEWaypointItemConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID)!.toString()) ?? PFEWaypointDefaultConfig
  UI.title({ translate: `translation.poke_pfe.WaypointUITitle` })
  UI.textField({ translate: `*TEXTURE PATH` }, `textures/...`, { defaultValue: `` })
  UI.show(player).then(response => {
    if (response.canceled) {
      // GO BACK
      WaypointUIChangeWaypointIcon(player, item, waypoint, component)
      return;
    }
    let newWaypoint: PokePFEWaypointConfig = {
      v: PFEWaypointVersion,
      id: waypoint.id,
      icon: response.formValues?.at(0)?.toString() ?? 'textures/poke/common/question',
      name: waypoint.name,
      location: waypoint.location,
      rotation: waypoint.rotation
    }
    let newProperty: PokePFEWaypointItemConfig = {
      localSettings: waypointConfig.localSettings,
      v: PFEWaypointVersion,
      waypoints: waypointConfig.waypoints.filter(i => i.id != waypoint.id).concat(newWaypoint)
    }
    PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot.Mainhand)
    WaypointUIViewWaypoints(player, item, component)
  })
}