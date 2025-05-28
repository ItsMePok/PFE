import { EquipmentSlot } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { PokeErrorScreen, PokeSaveProperty } from "./commonFunctions";
export { WaypointDynamicPropertyID, PFEWaypointDefaultConfig, WaypointUIMainMenu, PFEWaypointVersion };
const PFEWaypointVersion = 1;
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
const WaypointTotal = 5;
const WaypointDynamicPropertyID = `poke_pfe:waypoint_config`;
const PFEWaypointDefaultConfig = {
    v: PFEWaypointVersion,
    localSettings: {},
    waypoints: []
};
function WaypointUIMainMenu(player, item, component) {
    var _a, _b, _c;
    let UI = new ActionFormData();
    let waypointConfig = (_a = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString())) !== null && _a !== void 0 ? _a : PFEWaypointDefaultConfig;
    UI.title({ translate: `translation.poke_pfe.WaypointUITitle` });
    UI.button({ translate: `*%WAYPOINTS [${(_b = waypointConfig.waypoints.length) !== null && _b !== void 0 ? _b : 0}/${(_c = component.max_waypoints) !== null && _c !== void 0 ? _c : WaypointTotal}]` }, `textures/poke/common/waypointRed`);
    UI.button({ translate: `*OPTIONS` }, `textures/poke/common/gear`);
    UI.button({ translate: `*DEBUG` }, `textures/poke/common/debug`);
    UI.button({ translate: `*CLOSE` }, `textures/poke/common/close`);
    UI.show(player).then(response => {
        let selection = 0;
        if (response.selection == selection) {
            WaypointUIViewWaypoints(player, item, component);
            return;
        }
        else
            selection++;
        if (response.selection == selection) {
            // LOCAL OPTIONS & (ADMIN) GLOBAL OPTIONS
            PokeErrorScreen(player, { text: `This is not ready yet` }, WaypointUIMainMenu(player, item, component));
            return;
        }
        else
            selection++;
        if (response.selection == selection) {
            // DEBUG MENU (MAYBE NEEDED)
            PokeErrorScreen(player, { text: `This is not ready yet` }, WaypointUIMainMenu(player, item, component));
            return;
        }
        else
            selection++;
        if (response.canceled || response.selection == selection)
            return;
    });
}
function WaypointUIViewWaypoints(player, item, component) {
    var _a, _b;
    let UI = new ActionFormData();
    let waypointConfig = (_a = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString())) !== null && _a !== void 0 ? _a : PFEWaypointDefaultConfig;
    UI.title({ translate: `translation.poke_pfe.WaypointUITitle` });
    for (let waypoint of waypointConfig.waypoints) {
        UI.button(waypoint.name, waypoint.icon);
    }
    if (waypointConfig.waypoints.length < ((_b = component.max_waypoints) !== null && _b !== void 0 ? _b : WaypointTotal)) {
        UI.button({ translate: `*CREATE WAYPOINT` }, `textures/poke/common/add`);
    }
    UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`);
    UI.show(player).then(response => {
        var _a;
        let selection = 0;
        for (let waypoint of waypointConfig.waypoints) {
            if (response.selection == selection) {
                WaypointUIManageWaypoint(player, item, waypoint, component);
                return;
            }
            else
                selection++;
        }
        if (waypointConfig.waypoints.length < ((_a = component.max_waypoints) !== null && _a !== void 0 ? _a : WaypointTotal)) {
            if (response.selection == selection) {
                // CREATE WAYPOINT
                WaypointUICreateWaypoint(player, item, component);
                return;
            }
            else
                selection++;
        }
        if (response.canceled || response.selection == selection) {
            WaypointUIMainMenu(player, item, component);
            return;
        }
    });
}
function WaypointUIManageWaypoint(player, item, waypoint, component) {
    var _a;
    let UI = new ActionFormData();
    let waypointConfig = (_a = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString())) !== null && _a !== void 0 ? _a : PFEWaypointDefaultConfig;
    UI.title({ translate: `translation.poke_pfe.WaypointUITitle` });
    UI.button({ translate: `*TELEPORT` }, `textures/poke/common/teleport`);
    UI.button({ translate: `*UPDATE LOCATION` }, `textures/poke/common/question`);
    UI.button({ translate: `*RENAME` }, `textures/poke/common/edit`);
    UI.button({ translate: `*CHANGE ICON` }, `textures/poke/common/painting`);
    UI.button({ translate: `*DELETE WAYPOINT` }, `textures/poke/common/trash`);
    UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`);
    UI.show(player).then(response => {
        let selection = 0;
        if (response.selection == selection) {
            // TELEPORT TO WAYPOINT
            waypoint.location ? player.teleport(waypoint.location, { rotation: waypoint.rotation }) : PokeErrorScreen(player, { text: `This waypoint does not have a location set.` }, WaypointUIManageWaypoint(player, item, waypoint, component));
            return;
        }
        else
            selection++;
        if (response.selection == selection) {
            // UPDATE LOCATION
            PokeErrorScreen(player, { text: `This is not ready yet` }, WaypointUIManageWaypoint(player, item, waypoint, component));
            return;
        }
        else
            selection++;
        if (response.selection == selection) {
            // RENAME
            WaypointUIRenameWaypoint(player, item, waypoint, component);
            return;
        }
        else
            selection++;
        if (response.selection == selection) {
            // CHANGE ICON
            WaypointUIChangeWaypointIcon(player, item, waypoint, component);
            return;
        }
        else
            selection++;
        if (response.selection == selection) {
            // DELETE
            WaypointUIDeleteWaypoint(player, item, waypoint, component);
            return;
        }
        else
            selection++;
        if (response.canceled || response.selection == selection) {
            // GO BACK
            WaypointUIViewWaypoints(player, item, component);
            return;
        }
    });
}
function WaypointUIRenameWaypoint(player, item, waypoint, component) {
    var _a;
    let UI = new ModalFormData();
    let waypointConfig = (_a = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString())) !== null && _a !== void 0 ? _a : PFEWaypointDefaultConfig;
    UI.title({ translate: `translation.poke_pfe.WaypointUITitle` });
    UI.textField({ translate: `*NEW NAME` }, waypoint.name, { defaultValue: `` });
    UI.show(player).then(response => {
        var _a, _b, _c;
        if (response.canceled) {
            // GO BACK
            WaypointUIChangeWaypointIcon(player, item, waypoint, component);
            return;
        }
        let newWaypoint = {
            v: PFEWaypointVersion,
            id: waypoint.id,
            icon: waypoint.icon,
            name: (_c = (_b = (_a = response.formValues) === null || _a === void 0 ? void 0 : _a.at(0)) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : waypoint.name,
            location: waypoint.location,
            rotation: waypoint.rotation
        };
        let newProperty = {
            localSettings: waypointConfig.localSettings,
            v: PFEWaypointVersion,
            waypoints: waypointConfig.waypoints.filter(i => i.id != waypoint.id).concat(newWaypoint)
        };
        PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot.Mainhand);
        WaypointUIViewWaypoints(player, item, component);
    });
}
function WaypointUIDeleteWaypoint(player, item, waypoint, component) {
    var _a;
    let UI = new ActionFormData();
    let waypointConfig = (_a = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString())) !== null && _a !== void 0 ? _a : PFEWaypointDefaultConfig;
    UI.title({ translate: `translation.poke_pfe.WaypointUITitle` });
    UI.button({ translate: `*CONFIRM` }, `textures/poke/common/confirm`);
    UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`);
    UI.show(player).then(response => {
        let selection = 0;
        if (response.selection == selection) {
            // CONFIRM DELETION
            let newProperty = {
                localSettings: waypointConfig.localSettings,
                v: PFEWaypointVersion,
                waypoints: waypointConfig.waypoints.filter(i => i.id != waypoint.id)
            };
            PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot.Mainhand);
            return;
        }
        else
            selection++;
        if (response.canceled || response.selection == selection) {
            // GO BACK
            WaypointUIManageWaypoint(player, item, waypoint, component);
            return;
        }
    });
}
function WaypointUICreateWaypoint(player, item, component) {
    var _a;
    let UI = new ModalFormData();
    let waypointConfig = (_a = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString())) !== null && _a !== void 0 ? _a : PFEWaypointDefaultConfig;
    UI.title({ translate: `translation.poke_pfe.WaypointUITitle` });
    UI.textField({ translate: `*NAME` }, '', { defaultValue: `` });
    UI.show(player).then(response => {
        var _a, _b;
        if (response.canceled) {
            // GO BACK
            WaypointUIViewWaypoints(player, item, component);
            return;
        }
        let selection = 0;
        const newName = (_b = (_a = response.formValues) === null || _a === void 0 ? void 0 : _a.at(0)) === null || _b === void 0 ? void 0 : _b.toString();
        let newWaypoint = {
            v: PFEWaypointVersion,
            id: Math.random() * (3 / Math.random()),
            icon: `textures/poke/common/waypointRed`,
            name: newName !== null && newName !== void 0 ? newName : { translate: `%translation.poke_pfe.waypoint ${waypointConfig.waypoints.length + 1}` },
            location: player.location,
            rotation: player.getRotation()
        };
        console.warn(`SAVING: ${JSON.stringify(newWaypoint)}`);
        let newProperty = {
            localSettings: waypointConfig.localSettings,
            v: PFEWaypointVersion,
            waypoints: waypointConfig.waypoints.concat(newWaypoint)
        };
        console.warn(JSON.stringify(newProperty));
        PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot.Mainhand);
        WaypointUIViewWaypoints(player, item, component);
        return;
    });
}
const WaypointIconPresets = [
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
];
function WaypointUIChangeWaypointIcon(player, item, waypoint, component) {
    var _a;
    let UI = new ActionFormData();
    let waypointConfig = (_a = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString())) !== null && _a !== void 0 ? _a : PFEWaypointDefaultConfig;
    UI.title({ translate: `translation.poke_pfe.WaypointUITitle` });
    UI.button({ translate: `*PRESET` }, `textures/poke/common/upcoming_events`);
    UI.button({ translate: `*CUSTOM` }, `textures/poke/common/upgrade`);
    UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`);
    UI.show(player).then(response => {
        let selection = 0;
        if (response.selection == selection) {
            // PRESET
            WaypointUISetIconPreset(player, item, waypoint, component);
            return;
        }
        else
            selection++;
        if (response.selection == selection) {
            // CUSTOM
            WaypointUISetIconCustom(player, item, waypoint, component);
            return;
        }
        else
            selection++;
        if (response.canceled || response.selection == selection) {
            // GO BACK
            WaypointUIManageWaypoint(player, item, waypoint, component);
            return;
        }
    });
}
function WaypointUISetIconPreset(player, item, waypoint, component) {
    var _a;
    let UI = new ActionFormData();
    let waypointConfig = (_a = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString())) !== null && _a !== void 0 ? _a : PFEWaypointDefaultConfig;
    UI.title({ translate: `translation.poke_pfe.WaypointUITitle` });
    for (let icon of WaypointIconPresets) {
        UI.button(icon.name, icon.path);
    }
    UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`);
    UI.show(player).then(response => {
        let selection = 0;
        for (let icon of WaypointIconPresets) {
            if (response.selection == selection) {
                let newWaypoint = {
                    v: PFEWaypointVersion,
                    id: waypoint.id,
                    icon: icon.path,
                    name: waypoint.name,
                    location: waypoint.location,
                    rotation: waypoint.rotation
                };
                let newProperty = {
                    localSettings: waypointConfig.localSettings,
                    v: PFEWaypointVersion,
                    waypoints: waypointConfig.waypoints.filter(i => i.id != waypoint.id).concat(newWaypoint)
                };
                PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot.Mainhand);
                WaypointUIViewWaypoints(player, item, component);
                return;
            }
            else
                selection++;
        }
        if (response.canceled || response.selection == selection) {
            // GO BACK
            WaypointUIManageWaypoint(player, item, waypoint, component);
            return;
        }
    });
}
function WaypointUISetIconCustom(player, item, waypoint, component) {
    var _a;
    let UI = new ModalFormData();
    let waypointConfig = (_a = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString())) !== null && _a !== void 0 ? _a : PFEWaypointDefaultConfig;
    UI.title({ translate: `translation.poke_pfe.WaypointUITitle` });
    UI.textField({ translate: `*TEXTURE PATH` }, `textures/...`, { defaultValue: `` });
    UI.show(player).then(response => {
        var _a, _b, _c;
        if (response.canceled) {
            // GO BACK
            WaypointUIChangeWaypointIcon(player, item, waypoint, component);
            return;
        }
        let newWaypoint = {
            v: PFEWaypointVersion,
            id: waypoint.id,
            icon: (_c = (_b = (_a = response.formValues) === null || _a === void 0 ? void 0 : _a.at(0)) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : 'textures/poke/common/question',
            name: waypoint.name,
            location: waypoint.location,
            rotation: waypoint.rotation
        };
        let newProperty = {
            localSettings: waypointConfig.localSettings,
            v: PFEWaypointVersion,
            waypoints: waypointConfig.waypoints.filter(i => i.id != waypoint.id).concat(newWaypoint)
        };
        PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot.Mainhand);
        WaypointUIViewWaypoints(player, item, component);
    });
}
//# sourceMappingURL=waypoints.js.map