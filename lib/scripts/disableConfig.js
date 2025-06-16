import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
export { PFEDisableConfigName, PFEDisableConfigDefault, PFEDisableConfigMainMenu, PFEDisabledOnUseItems };
let PFEDisableConfigName = "poke_pfe:disable_config";
let PFEDisableConfigVersion = 2;
let PFEDisabledOnUseItems = ["poke:sundial", "poke:quantum_teleporter", "poke:kapow_ring"];
const PFEDisableConfigDefault = {
    "v": PFEDisableConfigVersion,
    "bounty": true,
    "cactusArmorRadius": true,
    "deathArmorRadius": true,
    "kapowRing": true,
    "nukeRing": true,
    "quantumTeleporter": true,
    "sundial": true,
    "witherSpawner": true,
    "waypoints": true
};
function PFEDisableConfigMainMenu(data) {
    let UI = new ActionFormData();
    let options = JSON.parse(world.getDynamicProperty(PFEDisableConfigName).toString());
    const enabled = `§a\n%translation.poke_pfe.enabled`;
    const disabled = `§c\n%translation.poke_pfe.disabled`;
    UI.button({ translate: `%poke_pfe.quantum_teleporter:${options.quantumTeleporter ? enabled : disabled}` }, `textures/poke/pfe/quantum_teleporter`);
    UI.button({ translate: `%poke_pfe.kapow_ring:${options.kapowRing ? enabled : disabled}` }, `textures/poke/pfe/kapow_ring`);
    UI.button({ translate: `%poke_pfe.nuke_ring:${options.nukeRing ? enabled : disabled}` }, `textures/poke/pfe/nuke_ring`);
    UI.button({ translate: `%poke_pfe.sundial:${options.sundial ? enabled : disabled}` }, `textures/poke/pfe/sundial_1`);
    UI.button({ translate: `%poke_pfe.wither_spawner:${options.witherSpawner ? enabled : disabled}` }, `textures/poke/pfe/wither_spawner`);
    UI.button({ translate: `%poke_pfe.bounty:${options.bounty ? enabled : disabled}` }, `textures/poke/pfe/bounty`);
    UI.button({ translate: `%translation.poke_pfe.WaypointUITitle:${options.waypoints ? enabled : disabled}` }, `textures/poke/pfe/waypoint_menu`);
    UI.button({ translate: `%poke_pfe.set_effects:${world.getDynamicProperty(`poke_pfe:disable_armor_effects`) == true ? disabled : enabled}` }, `textures/poke/common/effect_particles`);
    UI.button({ translate: `%translation.poke_pfe.death_armor_radius:${options.deathArmorRadius ? enabled : disabled}` }, `textures/poke/pfe/death_helmet`);
    UI.button({ translate: `%translation.poke_pfe.cactus_armor_radius:${options.cactusArmorRadius ? enabled : disabled}` }, `textures/poke/pfe/cactus_helmet`);
    UI.button({ translate: `translation.poke:goBack` }, `textures/poke/common/left_arrow`);
    UI.show(data.source).then(response => {
        let selection = 0;
        let newProperty = options;
        if (response.selection == selection) { // Quantum Teleporter
            if (newProperty.quantumTeleporter) {
                newProperty.quantumTeleporter = false;
                console.warn(`Disabled Quantum Teleporter`);
            }
            else
                newProperty.quantumTeleporter = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(data);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Kapow Ring
            if (newProperty.kapowRing) {
                newProperty.kapowRing = false;
                console.info(`Disabled Kapow Ring`);
            }
            else
                newProperty.kapowRing = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(data);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Nuke Ring
            if (newProperty.nukeRing) {
                newProperty.nukeRing = false;
                console.info(`Disabled Nuke Ring`);
            }
            else
                newProperty.nukeRing = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(data);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Sundial
            if (newProperty.sundial) {
                newProperty.sundial = false;
                console.info(`Disabled Sundial`);
            }
            else
                newProperty.sundial = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(data);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Wither Spawner
            if (newProperty.witherSpawner) {
                newProperty.witherSpawner = false;
                console.warn(`Disabled Wither Spawner`);
            }
            else
                newProperty.witherSpawner = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(data);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Bounty
            if (newProperty.bounty) {
                newProperty.bounty = false;
                console.warn(`Disabled Bounty`);
            }
            else
                newProperty.bounty = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(data);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Waypoint Menu
            if (newProperty.waypoints) {
                newProperty.waypoints = false;
                console.warn(`Disabled Waypoint Menu`);
            }
            else
                newProperty.waypoints = true;
            newProperty.v = newProperty.v < 2 ? newProperty.v = 2 : newProperty.v;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(data);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Armor effects
            world.getDynamicProperty(`poke_pfe:disable_armor_effects`) == false ? world.setDynamicProperty(`poke_pfe:disable_armor_effects`, true) : world.setDynamicProperty(`poke_pfe:disable_armor_effects`, false);
            PFEDisableConfigMainMenu(data);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Death Armor's Radius Effects
            if (newProperty.deathArmorRadius) {
                newProperty.deathArmorRadius = false;
                console.info(`Disabled Death Armor's Radius Effects`);
            }
            else
                newProperty.deathArmorRadius = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(data);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Cactus Armor's Radius Effects
            if (newProperty.cactusArmorRadius) {
                newProperty.cactusArmorRadius = false;
                console.info(`Disabled Cactus Armor's Radius Effects`);
            }
            else
                newProperty.cactusArmorRadius = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(data);
            return;
        }
        else
            selection++;
        if (response.canceled || (response.selection == selection)) {
            return;
        }
    });
}
//# sourceMappingURL=disableConfig.js.map