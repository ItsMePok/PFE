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
    const Helmet = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Head) ?? undefined;
    const Chestplate = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Chest) ?? undefined;
    const Leggings = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Legs) ?? undefined;
    const Boots = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Feet) ?? undefined;
    const Offhand = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Offhand) ?? undefined;
    const Mainhand = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Mainhand) ?? undefined;
    const Equipment = [Helmet, Chestplate, Leggings, Boots, Offhand, Mainhand];
    let effects = [];
    let radius_effects = [];
    let commands = [];
    const HelmetComponent = Helmet?.getComponent(PFESetEffectId)?.customComponentParameters.params;
    const ChestplateComponent = Chestplate?.getComponent(PFESetEffectId)?.customComponentParameters.params;
    const LeggingsComponent = Leggings?.getComponent(PFESetEffectId)?.customComponentParameters.params;
    const BootsComponent = Boots?.getComponent(PFESetEffectId)?.customComponentParameters.params;
    const OffhandComponent = Offhand?.getComponent(PFESetEffectId)?.customComponentParameters.params;
    const MainhandComponent = Mainhand?.getComponent(PFESetEffectId)?.customComponentParameters.params;
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
        let effectDuration = Number(world.getDynamicProperty("poke_pfe:setEffectDuration") ?? ArmorEffectDuration);
        let ActiveEffects = player.getEffect(effect.effect) ?? false;
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
            const disabledOptions = JSON.parse(world.getDynamicProperty(PFEDisableConfigName).toString()) ?? PFEDisableConfigDefault;
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
                updatedEffect.totalAmp = (updatedEffect.totalAmp ?? 0) + (effect.amp ?? 0);
                updatedEffect.totalRadius = (updatedEffect.totalRadius ?? 0) + (effect.radius_per_piece ?? 0);
                updatedEffect.max_radius = Math.max(effect.max_radius, radiusEffect.max_radius);
                updatedEffect.duration = Math.max(effect.duration ?? 0, radiusEffect.duration ?? 0);
                compiledEffect = updatedEffect;
                compiledRadiusEffects.push(compiledEffect);
            }
            continue;
        }
        compiledRadiusEffects.push(radiusEffect);
    }
    for (let radiusEffect of compiledRadiusEffects) {
        let effectDuration = Boolean(radiusEffect.duration) ? Number(radiusEffect.duration) : Number(world.getDynamicProperty("poke_pfe:setEffectDuration") ?? ArmorEffectDuration);
        const targets = player.dimension.getPlayers({ location: player.location, maxDistance: clampNumber(radiusEffect.totalRadius ?? radiusEffect.radius_per_piece ?? radiusEffect.max_radius, 0, radiusEffect.max_radius), excludeNames: radiusEffect.effect_self ? undefined : [player.name] });
        for (let target of targets) {
            target.addEffect(radiusEffect.effect, effectDuration, { showParticles: false, amplifier: clampNumber(radiusEffect.totalAmp ?? radiusEffect.amp ?? 0, 0, radiusEffect.max_amp) });
        }
    }
}
function startSetEffects() {
    return system.runInterval(() => {
        if (world.getDynamicProperty(`poke_pfe:disable_armor_effects`))
            return;
        const customParse = world.getDynamicProperty(`poke_pfe:custom_effect_parser`) == true ? true : false;
        for (let player of world.getAllPlayers()) {
            if (!player)
                continue;
            CheckEffects(player, JSON.stringify(player.getTags()).includes(`novelty:poke`), customParse);
        }
    }, Number(world.getDynamicProperty("poke_pfe:setEffectInterval") ?? 20));
}
//# sourceMappingURL=armorEffects.js.map