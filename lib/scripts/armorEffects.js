import { clampNumber } from "@minecraft/math";
import { EntityComponentTypes, EquipmentSlot, ItemStack, system, world } from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";
import { PFEDisableConfigDefault, PFEDisableConfigName } from "./disableConfig";
export { CheckEffects, PFECustomArmorEffectDynamicProperty, startSetEffects, ArmorEffectDuration };
const ArmorEffectDuration = 300;
const SensitiveArmorEffectDuration = 500;
const PFECustomArmorEffectDynamicProperty = `poke_pfe:custom_effects`;
const PFESetEffectId = "poke_pfe:set_effects";
function CheckEffects(player, additionalOptions, customParse) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
    const Helmet = (_b = (_a = player.getComponent(EntityComponentTypes.Equippable)) === null || _a === void 0 ? void 0 : _a.getEquipment(EquipmentSlot.Head)) !== null && _b !== void 0 ? _b : undefined;
    const Chestplate = (_d = (_c = player.getComponent(EntityComponentTypes.Equippable)) === null || _c === void 0 ? void 0 : _c.getEquipment(EquipmentSlot.Chest)) !== null && _d !== void 0 ? _d : undefined;
    const Leggings = (_f = (_e = player.getComponent(EntityComponentTypes.Equippable)) === null || _e === void 0 ? void 0 : _e.getEquipment(EquipmentSlot.Legs)) !== null && _f !== void 0 ? _f : undefined;
    const Boots = (_h = (_g = player.getComponent(EntityComponentTypes.Equippable)) === null || _g === void 0 ? void 0 : _g.getEquipment(EquipmentSlot.Feet)) !== null && _h !== void 0 ? _h : undefined;
    const Offhand = (_k = (_j = player.getComponent(EntityComponentTypes.Equippable)) === null || _j === void 0 ? void 0 : _j.getEquipment(EquipmentSlot.Offhand)) !== null && _k !== void 0 ? _k : undefined;
    const Mainhand = (_m = (_l = player.getComponent(EntityComponentTypes.Equippable)) === null || _l === void 0 ? void 0 : _l.getEquipment(EquipmentSlot.Mainhand)) !== null && _m !== void 0 ? _m : undefined;
    const Equipment = [Helmet, Chestplate, Leggings, Boots, Offhand, Mainhand];
    let effects = [];
    let radius_effects = [];
    let commands = [];
    const HelmetComponent = (_o = Helmet === null || Helmet === void 0 ? void 0 : Helmet.getComponent(PFESetEffectId)) === null || _o === void 0 ? void 0 : _o.customComponentParameters.params;
    const ChestplateComponent = (_p = Chestplate === null || Chestplate === void 0 ? void 0 : Chestplate.getComponent(PFESetEffectId)) === null || _p === void 0 ? void 0 : _p.customComponentParameters.params;
    const LeggingsComponent = (_q = Leggings === null || Leggings === void 0 ? void 0 : Leggings.getComponent(PFESetEffectId)) === null || _q === void 0 ? void 0 : _q.customComponentParameters.params;
    const BootsComponent = (_r = Boots === null || Boots === void 0 ? void 0 : Boots.getComponent(PFESetEffectId)) === null || _r === void 0 ? void 0 : _r.customComponentParameters.params;
    const OffhandComponent = (_s = Offhand === null || Offhand === void 0 ? void 0 : Offhand.getComponent(PFESetEffectId)) === null || _s === void 0 ? void 0 : _s.customComponentParameters.params;
    const MainhandComponent = (_t = Mainhand === null || Mainhand === void 0 ? void 0 : Mainhand.getComponent(PFESetEffectId)) === null || _t === void 0 ? void 0 : _t.customComponentParameters.params;
    const EquipmentComponents = [HelmetComponent, ChestplateComponent, LeggingsComponent, BootsComponent, OffhandComponent, MainhandComponent];
    for (let component of EquipmentComponents) {
        if (!component)
            continue;
        for (let effect of component) {
            switch (effect.mode) {
                case "radius_effect": {
                    radius_effects.push(effect);
                    break;
                }
                case "command": {
                    commands.push(effect);
                    break;
                }
                default: {
                    effects.push(effect);
                    break;
                }
            }
        }
    }
    let totalPieces = -1;
    let totalStrength = 0;
    let totalSpeed = 0;
    let totalResistance = 0;
    let totalRegeneration = 0;
    let totalJumpBoost = 0;
    let totalSlowness = 0;
    let totalVillageHero = 0;
    let totalSaturation = 0;
    let totalHaste = 0;
    let totalAbsorption = 0;
    let totalBadOmen = 0;
    let totalBlindness = 0;
    let totalConduitPower = 0;
    let totalDarkness = 0;
    let totalFatalPoison = 0;
    let totalFireResistance = 0;
    let totalHealthBoost = 0;
    let totalHunger = 0;
    let totalInfested = 0;
    let totalInstantDamage = 0;
    let totalInstantHealth = 0;
    let totalInvisibility = 0;
    let totalLevitation = 0;
    let totalMiningFatigue = 0;
    let totalNausea = 0;
    let totalNightVision = 0;
    let totalOozing = 0;
    let totalPoison = 0;
    let totalRaidOmen = 0;
    let totalSlowFalling = 0;
    let totalTrialOmen = 0;
    let totalWaterBreathing = 0;
    let totalWeakness = 0;
    let totalWeaving = 0;
    let totalWindCharged = 0;
    let totalWither = 0;
    let customEffects = JSON.parse(world.getDynamicProperty(PFECustomArmorEffectDynamicProperty).toString());
    if (additionalOptions) {
        const NoveltyTags = player.getTags().filter(tag => tag.includes(`novelty:poke`));
        for (let i = NoveltyTags.length; i > -1; i--) {
            const tag = NoveltyTags.at(i);
            if (!tag)
                continue;
            const item = new ItemStack(tag.substring(8), 1);
            totalPieces += 1;
            switch (true) {
                default:
                    {
                        let passed = false;
                        if (customEffects.length > 0) {
                            for (let customEffect of customEffects) {
                                if (!(customEffect.mode) || customEffect.mode != "tag") {
                                    totalPieces -= 1;
                                    continue;
                                }
                                ; // This is due to this not being able to view the current itemStack only a clone of it
                                if (item.hasTag(customEffect.tag)) {
                                    effects = effects.concat(customEffect.effects);
                                    passed = true;
                                }
                            }
                        }
                        totalPieces -= passed ? 0 : 1;
                        break;
                    }
                    ;
            }
            continue;
        }
    }
    let position = 0;
    if (customEffects.length > 0) {
        for (let item of Equipment) {
            if (!item) {
                position += 1;
                continue;
            }
            totalPieces += 1;
            let passed = false;
            for (let customEffect of customEffects) {
                if ((customEffect.mode == "lore" && JSON.stringify(item.getLore()).includes(customEffect.tag)) || ((!customEffect.mode || customEffect.mode == "tag") && item.hasTag(customEffect.tag))) {
                    effects = effects.concat(customEffect.effects);
                    passed = true;
                }
            }
            passed || EquipmentComponents.at(position) ? totalPieces : totalPieces -= 1;
            position += 1;
        }
    }
    for (let effect of effects) {
        switch (effect.effect) {
            case MinecraftEffectTypes.Absorption: {
                totalAbsorption += 1;
                break;
            }
            case MinecraftEffectTypes.BadOmen: {
                totalBadOmen += 1;
                break;
            }
            case MinecraftEffectTypes.Blindness: {
                totalBlindness += 1;
                break;
            }
            case MinecraftEffectTypes.ConduitPower: {
                totalConduitPower += 1;
                break;
            }
            case MinecraftEffectTypes.Darkness: {
                totalDarkness += 1;
                break;
            }
            case MinecraftEffectTypes.FatalPoison: {
                totalFatalPoison += 1;
                break;
            }
            case MinecraftEffectTypes.FireResistance: {
                totalFireResistance += 1;
                break;
            }
            case MinecraftEffectTypes.Haste: {
                totalHaste += 1;
                break;
            }
            case MinecraftEffectTypes.HealthBoost: {
                totalHealthBoost += 1;
                break;
            }
            case MinecraftEffectTypes.Hunger: {
                totalHunger += 1;
                break;
            }
            case MinecraftEffectTypes.Infested: {
                totalInfested += 1;
                break;
            }
            case MinecraftEffectTypes.InstantDamage: {
                totalInstantDamage += 1;
                break;
            }
            case MinecraftEffectTypes.InstantHealth: {
                totalInstantHealth += 1;
                break;
            }
            case MinecraftEffectTypes.Invisibility: {
                totalInvisibility += 1;
                break;
            }
            case MinecraftEffectTypes.JumpBoost: {
                totalJumpBoost += 1;
                break;
            }
            case MinecraftEffectTypes.Levitation: {
                totalLevitation += 1;
                break;
            }
            case MinecraftEffectTypes.MiningFatigue: {
                totalMiningFatigue += 1;
                break;
            }
            case MinecraftEffectTypes.Nausea: {
                totalNausea += 1;
                break;
            }
            case MinecraftEffectTypes.NightVision: {
                totalNightVision += 1;
                break;
            }
            case MinecraftEffectTypes.Oozing: {
                totalOozing += 1;
                break;
            }
            case MinecraftEffectTypes.Poison: {
                totalPoison += 1;
                break;
            }
            case MinecraftEffectTypes.RaidOmen: {
                totalRaidOmen += 1;
                break;
            }
            case MinecraftEffectTypes.Regeneration: {
                totalRegeneration += 1;
                break;
            }
            case MinecraftEffectTypes.Resistance: {
                totalResistance += 1;
                break;
            }
            case MinecraftEffectTypes.Saturation: {
                totalSaturation += 1;
                break;
            }
            case MinecraftEffectTypes.SlowFalling: {
                totalSlowFalling += 1;
                break;
            }
            case MinecraftEffectTypes.Slowness: {
                totalSlowness += 1;
                break;
            }
            case MinecraftEffectTypes.Speed: {
                totalSpeed += 1;
                break;
            }
            case MinecraftEffectTypes.Strength: {
                totalStrength += 1;
                break;
            }
            case MinecraftEffectTypes.TrialOmen: {
                totalTrialOmen += 1;
                break;
            }
            case MinecraftEffectTypes.VillageHero: {
                totalVillageHero += 1;
                break;
            }
            case MinecraftEffectTypes.WaterBreathing: {
                totalWaterBreathing += 1;
                break;
            }
            case MinecraftEffectTypes.Weakness: {
                totalWeakness += 1;
                break;
            }
            case MinecraftEffectTypes.Weaving: {
                totalWeaving += 1;
                break;
            }
            case MinecraftEffectTypes.WindCharged: {
                totalWindCharged += 1;
                break;
            }
            case MinecraftEffectTypes.Wither: {
                totalWither += 1;
                break;
            }
            default: break;
        }
    }
    for (let effect of effects) {
        let effectDuration = Number((_u = world.getDynamicProperty("poke_pfe:setEffectDuration")) !== null && _u !== void 0 ? _u : ArmorEffectDuration);
        let ActiveEffects = (_v = player.getEffect(effect.effect)) !== null && _v !== void 0 ? _v : false;
        if (!ActiveEffects) {
            player.addEffect(effect.effect, effectDuration, { showParticles: false, amplifier: 0 });
        }
        else {
            let CurrentEffect = 0.;
            switch (effect.effect) {
                case MinecraftEffectTypes.Absorption: {
                    CurrentEffect = totalAbsorption;
                    break;
                }
                case MinecraftEffectTypes.BadOmen: {
                    CurrentEffect = totalBadOmen;
                    break;
                }
                case MinecraftEffectTypes.Blindness: {
                    CurrentEffect = totalBlindness;
                    break;
                }
                case MinecraftEffectTypes.ConduitPower: {
                    CurrentEffect = totalConduitPower;
                    effectDuration = SensitiveArmorEffectDuration;
                    break;
                }
                case MinecraftEffectTypes.Darkness: {
                    CurrentEffect = totalDarkness;
                    break;
                }
                case MinecraftEffectTypes.FatalPoison: {
                    CurrentEffect = totalFatalPoison;
                    break;
                }
                case MinecraftEffectTypes.FireResistance: {
                    CurrentEffect = totalFireResistance;
                    break;
                }
                case MinecraftEffectTypes.Haste: {
                    CurrentEffect = totalHaste;
                    break;
                }
                case MinecraftEffectTypes.HealthBoost: {
                    CurrentEffect = totalHealthBoost;
                    break;
                }
                case MinecraftEffectTypes.Hunger: {
                    CurrentEffect = totalHunger;
                    break;
                }
                case MinecraftEffectTypes.Infested: {
                    CurrentEffect = totalInfested;
                    break;
                }
                case MinecraftEffectTypes.InstantDamage: {
                    CurrentEffect = totalInstantDamage;
                    break;
                }
                case MinecraftEffectTypes.InstantHealth: {
                    CurrentEffect = totalInstantHealth;
                    break;
                }
                case MinecraftEffectTypes.Invisibility: {
                    CurrentEffect = totalInvisibility;
                    break;
                }
                case MinecraftEffectTypes.JumpBoost: {
                    CurrentEffect = totalJumpBoost;
                    break;
                }
                case MinecraftEffectTypes.Levitation: {
                    CurrentEffect = totalLevitation;
                    break;
                }
                case MinecraftEffectTypes.MiningFatigue: {
                    CurrentEffect = totalMiningFatigue;
                    break;
                }
                case MinecraftEffectTypes.Nausea: {
                    CurrentEffect = totalNausea;
                    break;
                }
                case MinecraftEffectTypes.NightVision: {
                    CurrentEffect = totalNightVision;
                    effectDuration = SensitiveArmorEffectDuration;
                    break;
                }
                case MinecraftEffectTypes.Oozing: {
                    CurrentEffect = totalOozing;
                    break;
                }
                case MinecraftEffectTypes.Poison: {
                    CurrentEffect = totalPoison;
                    break;
                }
                case MinecraftEffectTypes.RaidOmen: {
                    CurrentEffect = totalRaidOmen;
                    break;
                }
                case MinecraftEffectTypes.Regeneration: {
                    CurrentEffect = totalRegeneration;
                    break;
                }
                case MinecraftEffectTypes.Resistance: {
                    CurrentEffect = totalResistance;
                    break;
                }
                case MinecraftEffectTypes.Saturation: {
                    CurrentEffect = totalSaturation;
                    break;
                }
                case MinecraftEffectTypes.SlowFalling: {
                    CurrentEffect = totalSlowFalling;
                    break;
                }
                case MinecraftEffectTypes.Slowness: {
                    CurrentEffect = totalSlowness;
                    break;
                }
                case MinecraftEffectTypes.Speed: {
                    CurrentEffect = totalSpeed;
                    break;
                }
                case MinecraftEffectTypes.Strength: {
                    CurrentEffect = totalStrength;
                    break;
                }
                case MinecraftEffectTypes.TrialOmen: {
                    CurrentEffect = totalTrialOmen;
                    break;
                }
                case MinecraftEffectTypes.VillageHero: {
                    CurrentEffect = totalVillageHero;
                    break;
                }
                case MinecraftEffectTypes.WaterBreathing: {
                    CurrentEffect = totalWaterBreathing;
                    break;
                }
                case MinecraftEffectTypes.Weakness: {
                    CurrentEffect = totalWeakness;
                    break;
                }
                case MinecraftEffectTypes.Weaving: {
                    CurrentEffect = totalWeaving;
                    break;
                }
                case MinecraftEffectTypes.WindCharged: {
                    CurrentEffect = totalWindCharged;
                    break;
                }
                case MinecraftEffectTypes.Wither: {
                    CurrentEffect = totalWither;
                    break;
                }
                default: break;
            }
            player.addEffect(effect.effect, effectDuration, {
                showParticles: false,
                amplifier: clampNumber(Math.min((ActiveEffects.amplifier + 1), totalPieces, effect.max_amp, clampNumber(CurrentEffect - 1, 0, 255)), 0, 255)
            });
        }
    }
    let noCommandRepeats = [];
    for (let command of commands) {
        if (command.no_repeat_id) {
            if (noCommandRepeats.includes(command.no_repeat_id))
                continue;
            noCommandRepeats.push(command.no_repeat_id);
        }
        if (command.disable_check) {
            const disabledOptions = (_w = JSON.parse(world.getDynamicProperty(PFEDisableConfigName).toString())) !== null && _w !== void 0 ? _w : PFEDisableConfigDefault;
            switch (command.disable_check) {
                case "cactus_radius": {
                    if (disabledOptions.cactusArmorRadius === false)
                        continue;
                    break;
                }
                case "death_radius": {
                    if (disabledOptions.deathArmorRadius === false)
                        continue;
                    break;
                }
            }
        }
        let bind_to = player;
        switch (command.bind_to) {
            case "player": break;
            case "dimension":
                {
                    bind_to = player.dimension;
                    break;
                }
                ;
        }
        bind_to.runCommand(command.command);
    }
    let compiledRadiusEffects = [];
    let noRadiusEffectRepeats = [];
    for (let radiusEffect of radius_effects) {
        if (radiusEffect.no_repeat_id) {
            if (noRadiusEffectRepeats.includes(radiusEffect.no_repeat_id))
                continue;
            noRadiusEffectRepeats.push(radiusEffect.no_repeat_id);
            const SameNoRepeat = radius_effects.filter(effect => effect.no_repeat_id == radiusEffect.no_repeat_id);
            let compiledEffect = {
                effect: radiusEffect.effect,
                max_radius: radiusEffect.max_radius,
                mode: radiusEffect.mode,
                totalAmp: 0,
                totalRadius: 0,
                amp: radiusEffect.amp,
                duration: radiusEffect.duration,
                effect_self: radiusEffect.effect_self,
                no_repeat_id: radiusEffect.no_repeat_id,
                radius_per_piece: radiusEffect.radius_per_piece,
                selector: radiusEffect.selector,
                version: radiusEffect.version,
                max_amp: radiusEffect.max_amp
            };
            for (let effect of SameNoRepeat) {
                let updatedEffect = compiledEffect;
                updatedEffect.totalAmp = ((_x = updatedEffect.totalAmp) !== null && _x !== void 0 ? _x : 0) + ((_y = effect.amp) !== null && _y !== void 0 ? _y : 0);
                updatedEffect.totalRadius = ((_z = updatedEffect.totalRadius) !== null && _z !== void 0 ? _z : 0) + ((_0 = effect.radius_per_piece) !== null && _0 !== void 0 ? _0 : 0);
                updatedEffect.max_radius = Math.max(effect.max_radius, radiusEffect.max_radius);
                updatedEffect.duration = Math.max((_1 = effect.duration) !== null && _1 !== void 0 ? _1 : 0, (_2 = radiusEffect.duration) !== null && _2 !== void 0 ? _2 : 0);
                compiledEffect = updatedEffect;
                compiledRadiusEffects.push(compiledEffect);
            }
            continue;
        }
        compiledRadiusEffects.push(radiusEffect);
    }
    for (let radiusEffect of compiledRadiusEffects) {
        let effectDuration = Boolean(radiusEffect.duration) ? Number(radiusEffect.duration) : Number((_3 = world.getDynamicProperty("poke_pfe:setEffectDuration")) !== null && _3 !== void 0 ? _3 : ArmorEffectDuration);
        const targets = player.dimension.getPlayers({ location: player.location, maxDistance: clampNumber((_5 = (_4 = radiusEffect.totalRadius) !== null && _4 !== void 0 ? _4 : radiusEffect.radius_per_piece) !== null && _5 !== void 0 ? _5 : radiusEffect.max_radius, 0, radiusEffect.max_radius), excludeNames: radiusEffect.effect_self ? undefined : [player.name] });
        for (let target of targets) {
            target.addEffect(radiusEffect.effect, effectDuration, { showParticles: false, amplifier: clampNumber((_7 = (_6 = radiusEffect.totalAmp) !== null && _6 !== void 0 ? _6 : radiusEffect.amp) !== null && _7 !== void 0 ? _7 : 0, 0, radiusEffect.max_amp) });
        }
    }
}
function startSetEffects() {
    var _a;
    return system.runInterval(() => {
        if (world.getDynamicProperty(`poke_pfe:disable_armor_effects`))
            return;
        const customParse = world.getDynamicProperty(`poke_pfe:custom_effect_parser`) == true ? true : false;
        for (let player of world.getAllPlayers()) {
            if (!player)
                continue;
            CheckEffects(player, JSON.stringify(player.getTags()).includes(`novelty:poke`), customParse);
        }
    }, Number((_a = world.getDynamicProperty("poke_pfe:setEffectInterval")) !== null && _a !== void 0 ? _a : 20));
}
//# sourceMappingURL=armorEffects.js.map