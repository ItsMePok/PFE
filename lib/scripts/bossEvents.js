import { system, world } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
let PFEBossEventConfigName = `pfe:bossEventConfig`;
let PFEBossEventBosses = [
    `poke:zombken`,
    `poke:super_striker`,
    `poke:knightling`,
    `poke:mini_demonic_allay`,
    `poke:necromancer`,
    `poke:snowman`,
    `poke:robo_golem`,
    `poke:dragon`,
    `poke:the_logger`,
    `poke:listener`
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
    "ticks": 108000
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
    new ActionFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` })
        .button({ translate: `translation.poke:bossEventMainMenuEnableBosses`, with: [`${EnabledBosses}`, `${TotalBosses}`] }, 'textures/items/misc/poke_spawn_enabled')
        .button({ translate: `translation.poke:bossEventMainMenuBossChances` }, 'textures/items/misc/poke_spawn_weight')
        .button({ translate: `translation.poke:bossEventSettings` }, 'textures/ui/settings_glyph_color_2x')
        .button({ translate: `translation.poke:bossEventClose` }, 'textures/ui/redX1')
        //@ts-ignore
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
    new ActionFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` })
        .button({ translate: `translation.poke:bossEventManual` }, 'textures/items/boss/poke_boss_event')
        .button({ translate: `translation.poke:bossEventTiming` }, 'textures/items/misc/poke_spawn_time')
        .button({ translate: `translation.poke:bossEventSettingsReset` }, 'textures/ui/refresh_light')
        .button({ translate: `translation.poke:bossEventGoBack` }, 'textures/ui/redX1')
        //@ts-ignore
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
        .title({ translate: `translation.poke:bossEventMainMenuTitle` })
        .toggle({ translate: `entity.poke:zombken.name` }, settings.zombken.e)
        .toggle({ translate: `entity.poke:super_striker.name` }, settings.superStriker.e)
        .toggle({ translate: `entity.poke:knightling.name` }, settings.knightling.e)
        .toggle({ translate: `entity.poke:mini_demonic_allay.name` }, settings.miniDemonicAllay.e)
        .toggle({ translate: `entity.poke:necromancer.name` }, settings.necromancer.e)
        .toggle({ translate: `entity.poke:snowman.name` }, settings.snowman.e)
        .toggle({ translate: `entity.poke:robo_golem.name` }, settings.furnaceGolem.e)
        .toggle({ translate: `entity.poke:dragon.name` }, settings.sparky.e)
        .toggle({ translate: `entity.poke:the_logger.name` }, settings.theLogger.e)
        .toggle({ translate: `entity.poke:listener.name` }, settings.listener.e)
        .submitButton(`translation.poke:BossEventUISubmit`)
        //@ts-ignore
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
        .title({ translate: `translation.poke:bossEventMainMenuTitle` })
        .textField({ translate: `translation.poke:BossEventTimeDesc` }, { translate: `translation.poke:BossEventTimePlaceholder` }, `${settings.ticks}`)
        .submitButton(`translation.poke:BossEventUISubmit`)
        //@ts-ignore
        .show(player).then((ui) => {
        if (!ui.canceled) {
            let newTicks = Number(ui.formValues.at(0));
            if (Number(isNaN(newTicks))) {
                //console.info(`player tried to set a NaN`)
                return;
            }
            else {
                settings.ticks = Number(ui.formValues.at(0));
                world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(settings));
            }
        }
        PFEBossEventUIMainMenu(player);
        return;
    });
}
function PFEBossEventUIBossChances(player) {
    let settings = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName).toString());
    new ModalFormData()
        .title({ translate: `translation.poke:bossEventMainMenuTitle` })
        .slider({ translate: `entity.poke:zombken.name` }, 0, 100, 1, settings.zombken["%"])
        .slider({ translate: `entity.poke:super_striker.name` }, 0, 100, 1, settings.superStriker["%"])
        .slider({ translate: `entity.poke:knightling.name` }, 0, 100, 1, settings.knightling["%"])
        .slider({ translate: `entity.poke:mini_demonic_allay.name` }, 0, 100, 1, settings.miniDemonicAllay["%"])
        .slider({ translate: `entity.poke:necromancer.name` }, 0, 100, 1, settings.necromancer["%"])
        .slider({ translate: `entity.poke:snowman.name` }, 0, 100, 1, settings.snowman["%"])
        .slider({ translate: `entity.poke:robo_golem.name` }, 0, 100, 1, settings.furnaceGolem["%"])
        .slider({ translate: `entity.poke:dragon.name` }, 0, 100, 1, settings.sparky["%"])
        .slider({ translate: `entity.poke:the_logger.name` }, 0, 100, 1, settings.theLogger["%"])
        .slider({ translate: `entity.poke:listener.name` }, 0, 100, 1, settings.listener["%"])
        .submitButton(`translation.poke:BossEventUISubmit`)
        //@ts-ignore
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
    let settings = PFEDefaultBossEventSettings;
    if (typeof world.getDynamicProperty(PFEBossEventConfigName) != "string") {
        return PFEDefaultBossEventSettings.ticks;
    }
    else
        settings = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName).toString());
    return settings.ticks;
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
    randomPlayer === null || randomPlayer === void 0 ? void 0 : randomPlayer.dimension.spawnEntity(selectedBoss, randomPlayer.location).runCommand(`spreadplayers ~ ~ 30 40 @s ~10`);
    //translation.poke:zombken_boss_event_near
    world.sendMessage({ rawtext: [{ translate: `translation.${selectedBoss}_boss_event_near` }, { text: `: ${randomPlayer === null || randomPlayer === void 0 ? void 0 : randomPlayer.name}` }] });
}
// Boss events
system.runInterval(() => {
    PFEStartBossEvent();
}, PFEBossEventTicks());
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
export { PFEBossEventUI, PFEDefaultBossEventSettings, PFEBossEventConfigName, PFEStartBossEvent };
//# sourceMappingURL=bossEvents.js.map