import { PlayerPermissionLevel, system, world } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { PFEBossEventConfigName, PFEBossEventUIMainMenu, PFEDefaultBossEventSettings } from "./bossEvents";
import { ArmorEffectDuration, startSetEffects } from "./armorEffects";
export { PFEDisableConfigName, PFEDisableConfigDefault, PFEDisableConfigMainMenu, PFEDisabledOnUseItems, OpenPFEConfig };
function OpenPFEConfig(player) {
    if ((player.playerPermissionLevel == PlayerPermissionLevel.Operator) || player.hasTag(`poke_pfe:config`)) {
        let UI = new ActionFormData();
        UI.button({ translate: `translation.poke_pfe.bossEventConfig` }, `textures/poke/common/spawn_enabled`);
        UI.button({ translate: `translation.poke_pfe.disableConfig` }, `textures/poke/common/blacklist_add`);
        UI.button({ translate: `%poke_pfe.miscOptions` }, `textures/poke/common/more_options`);
        UI.show(player).then(response => {
            let selection = 0;
            if (response.selection == selection) {
                if (world.getDynamicProperty(PFEBossEventConfigName) == undefined) {
                    //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
                    world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
                }
                PFEBossEventUIMainMenu(player);
                return;
            }
            else
                selection++;
            if (response.selection == selection) {
                PFEDisableConfigMainMenu(player);
                return;
            }
            else
                selection++;
            if (response.selection == selection) {
                let UI = new ModalFormData();
                UI.title({ translate: `%poke_pfe.miscOptions` });
                UI.label({ translate: `%poke_pfe.setEffects` });
                UI.divider();
                UI.slider({ translate: `%poke_pfe.effectDuration` }, 1, 30, { valueStep: 1, tooltip: { translate: `%poke_pfe.effectDuration.tooltip` }, defaultValue: Number(world.getDynamicProperty("poke_pfe:setEffectDuration") ?? ArmorEffectDuration) / 20 });
                UI.slider({ translate: `%poke_pfe.applyInterval` }, 1, 10, { valueStep: 1, tooltip: { translate: `%poke_pfe.applyInterval.tooltip` }, defaultValue: Number(world.getDynamicProperty("poke_pfe:setEffectInterval") ?? 1) / 20 });
                UI.show(player).then(response => {
                    if (response.canceled)
                        return;
                    //console.warn(JSON.stringify(response.formValues))
                    world.setDynamicProperty("poke_pfe:setEffectDuration", Number(response.formValues?.at(2) ?? ArmorEffectDuration / 20) * 20);
                    world.setDynamicProperty("poke_pfe:setEffectInterval", (Number(response.formValues?.at(3) ?? 1)) * 20);
                    const intervalId = world.getDynamicProperty("poke_pfe:setEffectIntervalId");
                    //console.warn(intervalId)
                    if (intervalId) {
                        system.runInterval;
                        system.clearRun(intervalId);
                        world.setDynamicProperty("poke_pfe:setEffectIntervalId", startSetEffects());
                    }
                });
                return;
            }
            else
                selection++;
            if ((response.selection == selection) || response.canceled) {
                return;
            }
        });
    }
    else {
        let UI = new ActionFormData();
        UI.title({ translate: `translation.poke_pfe.insufficientPerms` });
        UI.body({ translate: `%translation.poke_pfe.insufficientPerms.desc:§e poke_pfe:config§r\n\n%translation.poke_pfe.insufficientPerms.desc2\n§e/tag @s add poke_pfe:config§r` });
        UI.button({ translate: `translation.poke_pfe:bossEventClose` }, `textures/poke/common/close`);
        UI.show(player).then(response => {
            return;
        });
        return;
    }
}
let PFEDisableConfigName = "poke_pfe:disable_config";
let PFEDisableConfigVersion = 2;
let PFEDisabledOnUseItems = ["poke_pfe:sundial", "poke_pfe:quantum_teleporter", "poke_pfe:kapow_ring"];
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
    "waypoints": true,
    "playerMagnet": true
};
function PFEDisableConfigMainMenu(player) {
    let UI = new ActionFormData();
    let options = JSON.parse(world.getDynamicProperty(PFEDisableConfigName).toString());
    const enabled = `§a\n%translation.poke_pfe.enabled`;
    const disabled = `§c\n%translation.poke_pfe.disabled`;
    UI.button({ translate: `%poke_pfe.quantum_teleporter:${options.quantumTeleporter ? enabled : disabled}` }, `textures/poke/pfe/quantum_teleporter`);
    UI.button({ translate: `%poke_pfe.player_magnet:${options.playerMagnet ? enabled : disabled}` }, `textures/poke/pfe/player_magnet`);
    UI.button({ translate: `%poke_pfe.kapow_ring:${options.kapowRing ? enabled : disabled}` }, `textures/poke/pfe/kapow_ring`);
    UI.button({ translate: `%poke_pfe.nuke_ring:${options.nukeRing ? enabled : disabled}` }, `textures/poke/pfe/nuke_ring`);
    UI.button({ translate: `%poke_pfe.sundial:${options.sundial ? enabled : disabled}` }, `textures/poke/pfe/sundial_1`);
    UI.button({ translate: `%poke_pfe.wither_spawner:${options.witherSpawner ? enabled : disabled}` }, `textures/poke/pfe/wither_spawner`);
    UI.button({ translate: `%poke_pfe.bounty:${options.bounty ? enabled : disabled}` }, `textures/poke/pfe/bounty`);
    UI.button({ translate: `%poke_pfe.waypoint_menu:${options.waypoints ? enabled : disabled}` }, `textures/poke/pfe/waypoint_menu`);
    UI.button({ translate: `%poke_pfe.set_effects:${world.getDynamicProperty(`poke_pfe:disable_armor_effects`) == true ? disabled : enabled}` }, `textures/poke/common/effect_particles`);
    UI.button({ translate: `%translation.poke_pfe.death_armor_radius:${options.deathArmorRadius ? enabled : disabled}` }, `textures/poke/pfe/death_helmet`);
    UI.button({ translate: `%translation.poke_pfe.cactus_armor_radius:${options.cactusArmorRadius ? enabled : disabled}` }, `textures/poke/pfe/cactus_helmet`);
    UI.button({ translate: `translation.poke_pfe:goBack` }, `textures/poke/common/left_arrow`);
    UI.show(player).then(response => {
        let selection = 0;
        let newProperty = options;
        if (response.selection == selection) { // Quantum Teleporter
            if (newProperty.quantumTeleporter) {
                newProperty.quantumTeleporter = false;
                //console.warn(`Disabled Quantum Teleporter`)
            }
            else
                newProperty.quantumTeleporter = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Quantum Teleporter
            if (newProperty.playerMagnet) {
                newProperty.playerMagnet = false;
                //console.warn(`Disabled Quantum Teleporter`)
            }
            else
                newProperty.playerMagnet = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Kapow Ring
            if (newProperty.kapowRing) {
                newProperty.kapowRing = false;
                //console.info(`Disabled Kapow Ring`)
            }
            else
                newProperty.kapowRing = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Nuke Ring
            if (newProperty.nukeRing) {
                newProperty.nukeRing = false;
                //console.info(`Disabled Nuke Ring`)
            }
            else
                newProperty.nukeRing = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Sundial
            if (newProperty.sundial) {
                newProperty.sundial = false;
                //console.info(`Disabled Sundial`)
            }
            else
                newProperty.sundial = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Wither Spawner
            if (newProperty.witherSpawner) {
                newProperty.witherSpawner = false;
                //console.warn(`Disabled Wither Spawner`)
            }
            else
                newProperty.witherSpawner = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Bounty
            if (newProperty.bounty) {
                newProperty.bounty = false;
                //console.warn(`Disabled Bounty`)
            }
            else
                newProperty.bounty = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Waypoint Menu
            if (newProperty.waypoints) {
                newProperty.waypoints = false;
                //console.warn(`Disabled Waypoint Menu`)
            }
            else
                newProperty.waypoints = true;
            newProperty.v = newProperty.v < 2 ? newProperty.v = 2 : newProperty.v;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Armor effects
            world.getDynamicProperty(`poke_pfe:disable_armor_effects`) == false ? world.setDynamicProperty(`poke_pfe:disable_armor_effects`, true) : world.setDynamicProperty(`poke_pfe:disable_armor_effects`, false);
            PFEDisableConfigMainMenu(player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Death Armor's Radius Effects
            if (newProperty.deathArmorRadius) {
                newProperty.deathArmorRadius = false;
                //console.info(`Disabled Death Armor's Radius Effects`)
            }
            else
                newProperty.deathArmorRadius = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(player);
            return;
        }
        else
            selection++;
        if (response.selection == selection) { // Cactus Armor's Radius Effects
            if (newProperty.cactusArmorRadius) {
                newProperty.cactusArmorRadius = false;
                //console.info(`Disabled Cactus Armor's Radius Effects`)
            }
            else
                newProperty.cactusArmorRadius = true;
            world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
            PFEDisableConfigMainMenu(player);
            return;
        }
        else
            selection++;
        if (response.canceled || (response.selection == selection)) {
            return;
        }
    });
}
//# sourceMappingURL=config.js.map