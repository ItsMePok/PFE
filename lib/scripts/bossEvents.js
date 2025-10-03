import { system, world } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import ComputersCompat from "./addonCompatibility/jigarbov";
let PFEBossEventConfigName = `pfe:bossEventConfig`;
let PFEBossEventBosses = [
    `poke_pfe:zombken`,
    `poke_pfe:super_striker`,
    `poke_pfe:knightling`,
    `poke_pfe:mini_demonic_allay`,
    `poke_pfe:necromancer`,
    `poke_pfe:snowman`,
    `poke_pfe:robo_golem`,
    `poke_pfe:dragon`,
    `poke_pfe:the_logger`,
    `poke_pfe:listener`
];
let TotalBosses = PFEBossEventBosses.length;
let PFEDefaultBossEventSettings = {
    "zombken": { "e": true, "%": 75 },
    "superStriker": { "e": true, "%": 75 },
    "knightling": { "e": true, "%": 5 },
    "miniDemonicAllay": { "e": true, "%": 5 },
    "necromancer": { "e": true, "%": 1 },
    "snowman": { "e": true, "%": 5 },
    "furnaceGolem": { "e": false, "%": 0 },
    "sparky": { "e": false, "%": 0 },
    "theLogger": { "e": false, "%": 0 },
    "listener": { "e": false, "%": 0 },
    "ticks": 108000,
    "seconds": 0,
    "minutes": 90,
    "hours": 0
};
function PFEBossEventUIMainMenu(player) {
    let settings = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName).toString());
    let EnabledBosses = 0;
    if (settings.zombken.e)
        EnabledBosses++;
    if (settings.superStriker.e)
        EnabledBosses++;
    if (settings.knightling.e)
        EnabledBosses++;
    if (settings.miniDemonicAllay.e)
        EnabledBosses++;
    if (settings.necromancer.e)
        EnabledBosses++;
    if (settings.snowman.e)
        EnabledBosses++;
    if (settings.furnaceGolem.e)
        EnabledBosses++;
    if (settings.sparky.e)
        EnabledBosses++;
    if (settings.theLogger.e)
        EnabledBosses++;
    if (settings.listener.e)
        EnabledBosses++;
    new ActionFormData().title({ translate: `translation.poke_pfe:bossEventMainMenuTitle` })
        .button({ translate: `translation.poke_pfe:bossEventMainMenuEnableBosses`, with: [`${EnabledBosses}`, `${TotalBosses}`] }, 'textures/poke/common/spawn_enabled')
        .button({ translate: `translation.poke_pfe:bossEventMainMenuBossChances` }, 'textures/poke/common/spawn_weight')
        .button({ translate: `translation.poke_pfe:bossEventSettings` }, 'textures/poke/common/more_options')
        .button({ translate: `translation.poke_pfe:bossEventClose` }, 'textures/poke/common/close')
        .show(player).then((ui) => {
        if (ui.canceled || ui.selection == 3) {
            return;
        }
        ;
        if (ui.selection == 0) {
            PFEBossEventUIEnabledBosses(player);
            return;
        }
        ;
        if (ui.selection == 1) {
            PFEBossEventUIBossChances(player);
            return;
        }
        ;
        if (ui.selection == 2) {
            PFEBossEventUISettings(player);
            return;
        }
        ;
    });
}
function PFEBossEventUISettings(player) {
    let settings = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName).toString());
    new ActionFormData().title({ translate: `translation.poke_pfe:bossEventMainMenuTitle` })
        .button({ translate: `translation.poke_pfe:bossEventManual` }, 'textures/poke/pfe/bounty')
        .button({ translate: `translation.poke_pfe:bossEventTiming` }, 'textures/poke/common/spawn_time')
        .button({ translate: `translation.poke_pfe:bossEventSettingsReset` }, 'textures/ui/refresh_light')
        .button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow')
        .show(player).then((ui) => {
        if (ui.canceled || ui.selection == 3) {
            PFEBossEventUIMainMenu(player);
            return;
        }
        ;
        if (ui.selection == 0) {
            PFEStartBossEvent();
        }
        if (ui.selection == 1) {
            PFEBossEventTiming(player);
            return;
        }
        ;
        if (ui.selection == 2) {
            world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
            return;
        }
        ;
    });
}
function PFEBossEventUIEnabledBosses(player) {
    let settings = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName).toString());
    new ModalFormData()
        .title({ translate: `translation.poke_pfe:bossEventMainMenuTitle` })
        .toggle({ translate: `entity.poke_pfe:zombken.name` }, { defaultValue: settings.zombken.e })
        .toggle({ translate: `entity.poke_pfe:super_striker.name` }, { defaultValue: settings.superStriker.e })
        .toggle({ translate: `entity.poke_pfe:knightling.name` }, { defaultValue: settings.knightling.e })
        .toggle({ translate: `entity.poke_pfe:mini_demonic_allay.name` }, { defaultValue: settings.miniDemonicAllay.e })
        .toggle({ translate: `entity.poke_pfe:necromancer.name` }, { defaultValue: settings.necromancer.e })
        .toggle({ translate: `entity.poke_pfe:snowman.name` }, { defaultValue: settings.snowman.e })
        .toggle({ translate: `entity.poke_pfe:robo_golem.name` }, { defaultValue: settings.furnaceGolem.e })
        .toggle({ translate: `entity.poke_pfe:dragon.name` }, { defaultValue: settings.sparky.e })
        .toggle({ translate: `entity.poke_pfe:the_logger.name` }, { defaultValue: settings.theLogger.e })
        .toggle({ translate: `entity.poke_pfe:listener.name` }, { defaultValue: settings.listener.e })
        .submitButton(`translation.poke_pfe:BossEventUISubmit`)
        .show(player).then((ui) => {
        if (!ui.canceled) {
            settings.zombken.e = Boolean(ui.formValues.at(0));
            settings.superStriker.e = Boolean(ui.formValues.at(1));
            settings.knightling.e = Boolean(ui.formValues.at(2));
            settings.miniDemonicAllay.e = Boolean(ui.formValues.at(3));
            settings.necromancer.e = Boolean(ui.formValues.at(4));
            settings.snowman.e = Boolean(ui.formValues.at(5));
            settings.furnaceGolem.e = Boolean(ui.formValues.at(6));
            settings.sparky.e = Boolean(ui.formValues.at(7));
            settings.theLogger.e = Boolean(ui.formValues.at(8));
            settings.listener.e = Boolean(ui.formValues.at(9));
            world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(settings));
        }
        PFEBossEventUIMainMenu(player);
        return;
    });
}
function PFEBossEventTiming(player) {
    let settings = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName).toString());
    new ModalFormData()
        .title({ translate: `translation.poke_pfe:bossEventMainMenuTitle` })
        .dropdown({ translate: `%poke_pfe.mode:` }, [{ translate: `%poke_pfe.gameTicks` } /*, { translate: `%poke_pfe.realTime` }*/], { tooltip: { translate: `%poke_pfe.timeMode.tooltip` } })
        .slider({ translate: `%poke_pfe.minutes` }, 0, 720, { defaultValue: settings.ticks / 1200, valueStep: 5, tooltip: { translate: `%poke_pfe.BossEventTime.tooltip` } })
        .submitButton(`translation.poke_pfe:BossEventUISubmit`)
        .show(player).then((ui) => {
        //console.info(JSON.stringify(ui.formValues))
        if (!ui.canceled) {
            let newTicks = Number(ui.formValues.at(1));
            if (Number(isNaN(newTicks))) {
                return;
            }
            else {
                settings.ticks = newTicks * 1200;
                world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(settings));
                typeof world.getDynamicProperty("poke_pfe:bossEventIntervalId") != "number" ? undefined : system.clearRun(world.getDynamicProperty("poke_pfe:bossEventIntervalId"));
                world.setDynamicProperty("poke_pfe:bossEventIntervalId", startBossEvents());
            }
        }
        PFEBossEventUIMainMenu(player);
        return;
    });
}
function PFEBossEventUIBossChances(player) {
    let settings = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName).toString());
    new ModalFormData()
        .title({ translate: `translation.poke_pfe:bossEventMainMenuTitle` })
        .slider({ translate: `entity.poke_pfe:zombken.name` }, 0, 100, { valueStep: 1, defaultValue: settings.zombken["%"] })
        .slider({ translate: `entity.poke_pfe:super_striker.name` }, 0, 100, { valueStep: 1, defaultValue: settings.superStriker["%"] })
        .slider({ translate: `entity.poke_pfe:knightling.name` }, 0, 100, { valueStep: 1, defaultValue: settings.knightling["%"] })
        .slider({ translate: `entity.poke_pfe:mini_demonic_allay.name` }, 0, 100, { valueStep: 1, defaultValue: settings.miniDemonicAllay["%"] })
        .slider({ translate: `entity.poke_pfe:necromancer.name` }, 0, 100, { valueStep: 1, defaultValue: settings.necromancer["%"] })
        .slider({ translate: `entity.poke_pfe:snowman.name` }, 0, 100, { valueStep: 1, defaultValue: settings.snowman["%"] })
        .slider({ translate: `entity.poke_pfe:robo_golem.name` }, 0, 100, { valueStep: 1, defaultValue: settings.furnaceGolem["%"] })
        .slider({ translate: `entity.poke_pfe:dragon.name` }, 0, 100, { valueStep: 1, defaultValue: settings.sparky["%"] })
        .slider({ translate: `entity.poke_pfe:the_logger.name` }, 0, 100, { valueStep: 1, defaultValue: settings.theLogger["%"] })
        .slider({ translate: `entity.poke_pfe:listener.name` }, 0, 100, { valueStep: 1, defaultValue: settings.listener["%"] })
        .submitButton(`translation.poke_pfe:BossEventUISubmit`)
        .show(player).then((ui) => {
        if (!ui.canceled) {
            settings.zombken["%"] = Number(ui.formValues.at(0));
            settings.superStriker["%"] = Number(ui.formValues.at(1));
            settings.knightling["%"] = Number(ui.formValues.at(2));
            settings.miniDemonicAllay["%"] = Number(ui.formValues.at(3));
            settings.necromancer["%"] = Number(ui.formValues.at(4));
            settings.snowman["%"] = Number(ui.formValues.at(5));
            settings.furnaceGolem["%"] = Number(ui.formValues.at(6));
            settings.sparky["%"] = Number(ui.formValues.at(7));
            settings.theLogger["%"] = Number(ui.formValues.at(8));
            settings.listener["%"] = Number(ui.formValues.at(9));
            world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(settings));
        }
        PFEBossEventUIMainMenu(player);
        return;
    });
}
function PFEBossEventTicks() {
    const settings = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName) ?? JSON.stringify(PFEDefaultBossEventSettings));
    return settings.ticks;
}
function startBossEvents() {
    return system.runInterval(() => {
        PFEStartBossEvent();
    }, PFEBossEventTicks());
}
function PFEStartBossEvent() {
    let settings = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName).toString());
    let allPlayers = world.getAllPlayers();
    let randomPlayer = allPlayers.at(Math.abs(Math.round(Math.random() * (allPlayers.length - 1))));
    if (!settings.zombken.e)
        settings.zombken["%"] = 0;
    if (!settings.superStriker.e)
        settings.superStriker["%"] = 0;
    if (!settings.knightling.e)
        settings.knightling["%"] = 0;
    if (!settings.miniDemonicAllay.e)
        settings.miniDemonicAllay["%"] = 0;
    if (!settings.necromancer.e)
        settings.necromancer["%"] = 0;
    if (!settings.snowman.e)
        settings.snowman["%"] = 0;
    if (!settings.furnaceGolem.e)
        settings.furnaceGolem["%"] = 0;
    if (!settings.sparky.e)
        settings.sparky["%"] = 0;
    if (!settings.theLogger.e)
        settings.theLogger["%"] = 0;
    if (!settings.listener.e)
        settings.listener["%"] = 0;
    let zombkenWeight = settings.zombken["%"];
    let superStrikerWeight = settings.superStriker["%"];
    let knightlingWeight = settings.knightling["%"];
    let miniDemonicAllayWeight = settings.miniDemonicAllay["%"];
    let necromancerWeight = settings.necromancer["%"];
    let snowmanWeight = settings.snowman["%"];
    let furnaceGolemWeight = settings.furnaceGolem["%"];
    let sparkyWeight = settings.sparky["%"];
    let theLoggerWeight = settings.theLogger["%"];
    let listenerWeight = settings.listener["%"];
    let weights = [zombkenWeight, superStrikerWeight, knightlingWeight, miniDemonicAllayWeight, necromancerWeight, snowmanWeight, furnaceGolemWeight, sparkyWeight, theLoggerWeight, listenerWeight];
    if (zombkenWeight + superStrikerWeight + knightlingWeight + miniDemonicAllayWeight + necromancerWeight + snowmanWeight + furnaceGolemWeight + sparkyWeight + theLoggerWeight + listenerWeight == 0)
        return 0;
    /*Random thing copied from stack overflow*/
    const weightedRandom = (array, weights) => {
        const totalWeight = weights.reduce((a, b) => a + b, 0);
        let random = Math.random() * totalWeight;
        return array.find((_, i) => (random -= weights[i]) <= 0);
    };
    //
    let selectedBoss = weightedRandom(PFEBossEventBosses, weights);
    randomPlayer?.dimension.spawnEntity(selectedBoss, randomPlayer.location).runCommand(`spreadplayers ~ ~ 30 40 @s ~10`);
    //translation.poke_pfe:zombken_boss_event_near
    world.sendMessage({ rawtext: [{ translate: `translation.${selectedBoss}_boss_event_near` }, { text: `: ${randomPlayer?.name}` }] });
    ComputersCompat.addStat(`boss_events_triggered`, 1);
}
class PFEBossEventUI {
    onUse(data) {
        if (world.getDynamicProperty(PFEBossEventConfigName) == undefined) {
            //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
            world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
        }
        PFEBossEventUIMainMenu(data.source);
        return;
    }
}
export { PFEBossEventUI, PFEDefaultBossEventSettings, PFEBossEventConfigName, PFEStartBossEvent, PFEBossEventUIMainMenu, PFEBossEventTicks, startBossEvents };
//# sourceMappingURL=bossEvents.js.map