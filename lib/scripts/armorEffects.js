import { clampNumber } from "@minecraft/math";
import { EntityComponentTypes, EquipmentSlot, ItemStack, world } from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";
export { CheckEffects, PFEArmorEffectData, PFECustomArmorEffectDynamicProperty };
const ArmorEffectDuration = 500;
const PFECustomArmorEffectDynamicProperty = `poke_pfe:custom_effects`;
const PFEArmorEffectData = {
    hellish: {
        effects: [
            {
                effect: MinecraftEffectTypes.FireResistance,
                maxAmp: 0
            },
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 1
            }
        ],
        tag: `poke_pfe:hellish_armor_effects`
    },
    amethyst: {
        effects: [
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Haste,
                maxAmp: 1
            }
        ],
        tag: `poke_pfe:amethyst_armor_effects`
    },
    astral: {
        effects: [
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.Speed,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.WaterBreathing,
                maxAmp: 0
            },
            {
                effect: MinecraftEffectTypes.Haste,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.HealthBoost,
                maxAmp: 2
            }
        ],
        tag: `poke_pfe:astral_armor_effects`
    },
    banished: {
        effects: [
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.Slowness,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Haste,
                maxAmp: 3
            }
        ],
        tag: `poke_pfe:banished_armor_effects`
    },
    cactus: {
        effects: [],
        radiusEffect: {
            type: "damage",
            amountStep: 1,
            maxAmount: 4,
            maxRadius: 4,
            radiusStep: 1
        },
        tag: `poke_pfe:cactus_armor_effects`
    },
    cobaltRobe: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.ConduitPower,
                maxAmp: 0
            }
        ],
        tag: `poke_pfe:cobalt_robe_effects`
    },
    death: {
        effects: [
            {
                effect: MinecraftEffectTypes.HealthBoost,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.FireResistance,
                maxAmp: 0
            }
        ],
        radiusEffect: {
            type: "damage",
            maxRadius: 10,
            maxAmount: 15,
            amountStep: 4,
            radiusStep: 3
        },
        tag: `poke_pfe:death_armor_effects`
    },
    demonic: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.FireResistance,
                maxAmp: 0
            }
        ],
        tag: `poke_pfe:demonic_armor_effects`
    },
    emberRobe: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.FireResistance,
                maxAmp: 0
            }
        ],
        tag: `poke_pfe:ember_robe_effects`
    },
    featherRobe: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.SlowFalling,
                maxAmp: 0
            }
        ],
        tag: `poke_pfe:feather_robe_effects`
    },
    galaxy: {
        effects: [
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Speed,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Haste,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.HealthBoost,
                maxAmp: 0
            }
        ],
        tag: `poke_pfe:galaxy_armor_effects`
    },
    gluttonyRobe: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Saturation,
                maxAmp: 1
            }
        ],
        tag: `poke_pfe:gluttony_robe_effects`
    },
    godly: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Speed,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.SlowFalling,
                maxAmp: 0
            }
        ],
        tag: `poke_pfe:godly_armor_effects`
    },
    hastedRobe: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Haste,
                maxAmp: 1
            }
        ],
        tag: `poke_pfe:hasted_robe_effects`
    },
    heroicRobe: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.VillageHero,
                maxAmp: 1
            }
        ],
        tag: `poke_pfe:heroic_robe_effects`
    },
    holy: {
        effects: [
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Speed,
                maxAmp: 1
            }
        ],
        tag: `poke_pfe:holy_armor_effects`
    },
    medic: {
        effects: [
            {
                effect: MinecraftEffectTypes.HealthBoost,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Speed,
                maxAmp: 1
            }
        ],
        radiusEffect: {
            type: "heal",
            maxAmount: 5,
            maxRadius: 10,
            amountStep: 2,
            radiusStep: 3
        },
        tag: `poke_pfe:medic_armor_effects`
    },
    molten: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.FireResistance,
                maxAmp: 0
            }
        ],
        tag: `poke_pfe:molten_armor_effects`
    },
    nebula: {
        effects: [
            {
                effect: MinecraftEffectTypes.Speed,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.Haste,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.VillageHero,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.FireResistance,
                maxAmp: 0
            },
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.WaterBreathing,
                maxAmp: 0
            },
            {
                effect: MinecraftEffectTypes.HealthBoost,
                maxAmp: 3
            }
        ],
        tag: `poke_pfe:nebula_armor_effects`
    },
    nightVision: {
        effects: [
            {
                effect: MinecraftEffectTypes.NightVision,
                maxAmp: 0
            }
        ],
        tag: `poke_pfe:night_vision_effects`
    },
    onyx: {
        effects: [
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 0
            },
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 1
            }
        ],
        tag: `poke_pfe:onyx_armor_effects`
    },
    radium: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 3
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Speed,
                maxAmp: 2
            }
        ],
        tag: `poke_pfe:radium_armor_effects`
    },
    shade: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 2
            },
            {
                effect: MinecraftEffectTypes.Slowness,
                maxAmp: 2
            }
        ],
        tag: `poke_pfe:shade_armor_effects`
    },
    shadowRobe: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 2 // Could get here with help from other sets
            },
            {
                effect: MinecraftEffectTypes.NightVision,
                maxAmp: 0
            }
        ],
        tag: `poke_pfe:shadow_robe_effects`
    },
    speedBoots: {
        effects: [
            {
                effect: MinecraftEffectTypes.Speed,
                maxAmp: 3 // Could get here with help from other sets
            }
        ],
        tag: `poke_pfe:speed_boots_effects`
    },
    springyRobe: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.JumpBoost,
                maxAmp: 1
            }
        ],
        tag: `poke_pfe:springy_robe_effects`
    },
    swiftRobe: {
        effects: [
            {
                effect: MinecraftEffectTypes.Strength,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Speed,
                maxAmp: 3 // Could get here with help from other sets
            }
        ],
        tag: `poke_pfe:swift_robe_effects`
    },
    void: {
        effects: [
            {
                effect: MinecraftEffectTypes.Speed,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Resistance,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.Regeneration,
                maxAmp: 1
            },
            {
                effect: MinecraftEffectTypes.FireResistance,
                maxAmp: 0
            }
        ],
        tag: `poke_pfe:void_armor_effects`
    }
};
function CheckEffects(player, ArmorData, additionalOptions, customParse) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const Helmet = (_b = (_a = player.getComponent(EntityComponentTypes.Equippable)) === null || _a === void 0 ? void 0 : _a.getEquipment(EquipmentSlot.Head)) !== null && _b !== void 0 ? _b : false;
    const Chestplate = (_d = (_c = player.getComponent(EntityComponentTypes.Equippable)) === null || _c === void 0 ? void 0 : _c.getEquipment(EquipmentSlot.Chest)) !== null && _d !== void 0 ? _d : false;
    const Leggings = (_f = (_e = player.getComponent(EntityComponentTypes.Equippable)) === null || _e === void 0 ? void 0 : _e.getEquipment(EquipmentSlot.Legs)) !== null && _f !== void 0 ? _f : false;
    const Boots = (_h = (_g = player.getComponent(EntityComponentTypes.Equippable)) === null || _g === void 0 ? void 0 : _g.getEquipment(EquipmentSlot.Feet)) !== null && _h !== void 0 ? _h : false;
    const Offhand = (_k = (_j = player.getComponent(EntityComponentTypes.Equippable)) === null || _j === void 0 ? void 0 : _j.getEquipment(EquipmentSlot.Offhand)) !== null && _k !== void 0 ? _k : false;
    let totalPieces = -1;
    let effects = [];
    let totalStrength = 0;
    let totalSpeed = 0;
    let totalResistance = 0;
    let totalRegeneration = 0;
    let totalJumpBoost = 0;
    let totalSlowness = 0;
    let totalHealthBoost = 0;
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
    let HealthBoost = 0;
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
    let radiusEffects = false;
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
                case item.hasTag(ArmorData.amethyst.tag): {
                    effects = effects.concat(ArmorData.amethyst.effects);
                    totalRegeneration += 1;
                    totalHaste += 1;
                    break;
                }
                case item.hasTag(ArmorData.shade.tag): {
                    effects = effects.concat(ArmorData.shade.effects);
                    totalStrength += 1;
                    totalRegeneration += 1;
                    totalResistance += 1;
                    totalSlowness += 1;
                    break;
                }
                case item.hasTag(ArmorData.radium.tag): {
                    effects = effects.concat(ArmorData.radium.effects);
                    totalStrength += 1;
                    totalRegeneration += 1;
                    totalResistance += 1;
                    totalSpeed += 1;
                    break;
                }
                case item.hasTag(ArmorData.banished.tag): {
                    effects = effects.concat(ArmorData.banished.effects);
                    totalRegeneration += 1;
                    totalResistance += 1;
                    totalSlowness += 1;
                    totalHaste += 1;
                    break;
                }
                case item.hasTag(ArmorData.onyx.tag): {
                    effects = effects.concat(ArmorData.onyx.effects);
                    totalRegeneration += 1;
                    break;
                }
                case item.hasTag(ArmorData.holy.tag): {
                    effects = effects.concat(ArmorData.holy.effects);
                    totalRegeneration += 1;
                    totalResistance += 1;
                    totalSpeed += 1;
                    break;
                }
                case item.hasTag(ArmorData.hellish.tag): {
                    effects = effects.concat(ArmorData.hellish.effects);
                    totalRegeneration += 1;
                    totalResistance += 1;
                    break;
                }
                case item.hasTag(ArmorData.godly.tag): {
                    effects = effects.concat(ArmorData.godly.effects);
                    totalStrength += 1;
                    totalRegeneration += 1;
                    totalResistance += 1;
                    totalSpeed += 1;
                    break;
                }
                case item.hasTag(ArmorData.demonic.tag): {
                    effects = effects.concat(ArmorData.demonic.effects);
                    totalStrength += 1;
                    totalRegeneration += 1;
                    totalResistance += 1;
                    break;
                }
                case item.hasTag(ArmorData.medic.tag): {
                    effects = effects.concat(ArmorData.medic.effects);
                    totalHealthBoost += 1;
                    totalResistance += 1;
                    totalSpeed += 1;
                    break;
                }
                case item.hasTag(ArmorData.molten.tag): {
                    effects = effects.concat(ArmorData.molten.effects);
                    totalStrength += 1;
                    totalRegeneration += 1;
                    totalResistance += 1;
                    break;
                }
                case item.hasTag(ArmorData.galaxy.tag): {
                    effects = effects.concat(ArmorData.galaxy.effects);
                    totalRegeneration += 1;
                    totalResistance += 1;
                    totalSpeed += 1;
                    totalHaste += 1;
                    break;
                }
                case item.hasTag(ArmorData.void.tag): {
                    effects = effects.concat(ArmorData.void.effects);
                    totalSpeed += 1;
                    totalResistance += 1;
                    totalRegeneration += 1;
                    break;
                }
                case item.hasTag(ArmorData.astral.tag): {
                    effects = effects.concat(ArmorData.astral.effects);
                    totalRegeneration += 1;
                    totalResistance += 1;
                    totalSpeed += 1;
                    totalHaste += 1;
                    totalHealthBoost += 1;
                    break;
                }
                case item.hasTag(ArmorData.death.tag): {
                    effects = effects.concat(ArmorData.death.effects);
                    totalHealthBoost += 1;
                    totalResistance += 1;
                    totalRegeneration += 1;
                    break;
                }
                case item.hasTag(ArmorData.nebula.tag): {
                    effects = effects.concat(ArmorData.nebula.effects);
                    totalSpeed += 1;
                    totalRegeneration += 1;
                    totalResistance += 1;
                    totalHaste += 1;
                    totalVillageHero += 1;
                    totalStrength += 1;
                    totalHealthBoost += 1;
                    break;
                }
                case item.hasTag(ArmorData.cactus.tag): {
                    effects = effects.concat(ArmorData.cactus.effects);
                    break;
                }
                case item.hasTag(ArmorData.emberRobe.tag): {
                    effects = effects.concat(ArmorData.emberRobe.effects);
                    totalStrength += 1;
                    break;
                }
                case item.hasTag(ArmorData.hastedRobe.tag): {
                    effects = effects.concat(ArmorData.hastedRobe.effects);
                    totalStrength += 1;
                    totalHaste += 1;
                    break;
                }
                case item.hasTag(ArmorData.springyRobe.tag): {
                    effects = effects.concat(ArmorData.springyRobe.effects);
                    totalStrength += 1;
                    totalJumpBoost += 1;
                    break;
                }
                case item.hasTag(ArmorData.heroicRobe.tag): {
                    effects = effects.concat(ArmorData.heroicRobe.effects);
                    totalStrength += 1;
                    totalVillageHero += 1;
                    break;
                }
                case item.hasTag(ArmorData.cobaltRobe.tag): {
                    effects = effects.concat(ArmorData.cobaltRobe.effects);
                    totalStrength += 1;
                    break;
                }
                case item.hasTag(ArmorData.swiftRobe.tag): {
                    effects = effects.concat(ArmorData.swiftRobe.effects);
                    totalStrength += 1;
                    totalSpeed += 1;
                    break;
                }
                case item.hasTag(ArmorData.gluttonyRobe.tag): {
                    effects = effects.concat(ArmorData.gluttonyRobe.effects);
                    totalStrength += 1;
                    totalSaturation += 1;
                    break;
                }
                case item.hasTag(ArmorData.featherRobe.tag): {
                    effects = effects.concat(ArmorData.featherRobe.effects);
                    totalStrength += 1;
                    break;
                }
                case item.hasTag(ArmorData.shadowRobe.tag): {
                    effects = effects.concat(ArmorData.shadowRobe.effects);
                    totalStrength += 1;
                    break;
                }
                case item.hasTag(ArmorData.nightVision.tag): {
                    effects = effects.concat(ArmorData.nightVision.effects);
                    break;
                }
                case item.hasTag(ArmorData.speedBoots.tag): {
                    effects = effects.concat(ArmorData.speedBoots.effects);
                    totalSpeed += 1;
                    break;
                }
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
                                    for (let effect of customEffect.effects) {
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
                                                HealthBoost += 1;
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
                                }
                            }
                        }
                        passed ? totalPieces : totalPieces -= 1;
                        break;
                    }
                    ;
            }
            continue;
        }
    }
    if (Offhand) {
        totalPieces += 1;
        switch (true) {
            case Offhand.hasTag(ArmorData.nightVision.tag): {
                effects = effects.concat(ArmorData.nightVision.effects);
                break;
            }
            default: {
                let passed = false;
                if (customEffects.length > 0) {
                    for (let customEffect of customEffects) {
                        if ((customEffect.mode == "lore" && JSON.stringify(Offhand.getLore()).includes(customEffect.tag)) || ((!customEffect.mode || customEffect.mode == "tag") && Offhand.hasTag(customEffect.tag))) {
                            effects = effects.concat(customEffect.effects);
                            passed = true;
                            for (let effect of customEffect.effects) {
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
                                        HealthBoost += 1;
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
                        }
                    }
                }
                passed ? totalPieces : totalPieces -= 1;
                break;
            }
        }
    }
    if (Helmet) {
        totalPieces += 1;
        switch (true) {
            case Helmet.hasTag(ArmorData.amethyst.tag): {
                effects = effects.concat(ArmorData.amethyst.effects);
                totalRegeneration += 1;
                totalHaste += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.shade.tag): {
                effects = effects.concat(ArmorData.shade.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSlowness += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.radium.tag): {
                effects = effects.concat(ArmorData.radium.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.banished.tag): {
                effects = effects.concat(ArmorData.banished.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSlowness += 1;
                totalHaste += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.onyx.tag): {
                effects = effects.concat(ArmorData.onyx.effects);
                totalRegeneration += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.holy.tag): {
                effects = effects.concat(ArmorData.holy.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.hellish.tag): {
                effects = effects.concat(ArmorData.hellish.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.godly.tag): {
                effects = effects.concat(ArmorData.godly.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.demonic.tag): {
                effects = effects.concat(ArmorData.demonic.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.medic.tag): {
                effects = effects.concat(ArmorData.medic.effects);
                totalHealthBoost += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.molten.tag): {
                effects = effects.concat(ArmorData.molten.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.galaxy.tag): {
                effects = effects.concat(ArmorData.galaxy.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                totalHaste += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.void.tag): {
                effects = effects.concat(ArmorData.void.effects);
                totalSpeed += 1;
                totalResistance += 1;
                totalRegeneration += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.astral.tag): {
                effects = effects.concat(ArmorData.astral.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                totalHaste += 1;
                totalHealthBoost += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.death.tag): {
                effects = effects.concat(ArmorData.death.effects);
                totalHealthBoost += 1;
                totalResistance += 1;
                totalRegeneration += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.nebula.tag): {
                effects = effects.concat(ArmorData.nebula.effects);
                totalSpeed += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalHaste += 1;
                totalVillageHero += 1;
                totalStrength += 1;
                totalHealthBoost += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.cactus.tag): {
                effects = effects.concat(ArmorData.cactus.effects);
                break;
            }
            case Helmet.hasTag(ArmorData.emberRobe.tag): {
                effects = effects.concat(ArmorData.emberRobe.effects);
                totalStrength += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.hastedRobe.tag): {
                effects = effects.concat(ArmorData.hastedRobe.effects);
                totalStrength += 1;
                totalHaste += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.springyRobe.tag): {
                effects = effects.concat(ArmorData.springyRobe.effects);
                totalStrength += 1;
                totalJumpBoost += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.heroicRobe.tag): {
                effects = effects.concat(ArmorData.heroicRobe.effects);
                totalStrength += 1;
                totalVillageHero += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.cobaltRobe.tag): {
                effects = effects.concat(ArmorData.cobaltRobe.effects);
                totalStrength += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.swiftRobe.tag): {
                effects = effects.concat(ArmorData.swiftRobe.effects);
                totalStrength += 1;
                totalSpeed += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.gluttonyRobe.tag): {
                effects = effects.concat(ArmorData.gluttonyRobe.effects);
                totalStrength += 1;
                totalSaturation += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.featherRobe.tag): {
                effects = effects.concat(ArmorData.featherRobe.effects);
                totalStrength += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.shadowRobe.tag): {
                effects = effects.concat(ArmorData.shadowRobe.effects);
                totalStrength += 1;
                break;
            }
            case Helmet.hasTag(ArmorData.nightVision.tag): {
                effects = effects.concat(ArmorData.nightVision.effects);
                break;
            }
            default: {
                let passed = false;
                if (customEffects.length > 0) {
                    for (let customEffect of customEffects) {
                        if ((customEffect.mode == "lore" && JSON.stringify(Helmet.getLore()).includes(customEffect.tag)) || ((!customEffect.mode || customEffect.mode == "tag") && Helmet.hasTag(customEffect.tag))) {
                            effects = effects.concat(customEffect.effects);
                            passed = true;
                            for (let effect of customEffect.effects) {
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
                                        HealthBoost += 1;
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
                        }
                    }
                }
                passed ? totalPieces : totalPieces -= 1;
                break;
            }
        }
    }
    if (Chestplate) {
        totalPieces += 1;
        switch (true) {
            case Chestplate.hasTag(ArmorData.amethyst.tag): {
                effects = effects.concat(ArmorData.amethyst.effects);
                totalRegeneration += 1;
                totalHaste += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.shade.tag): {
                effects = effects.concat(ArmorData.shade.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSlowness += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.radium.tag): {
                effects = effects.concat(ArmorData.radium.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.banished.tag): {
                effects = effects.concat(ArmorData.banished.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSlowness += 1;
                totalHaste += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.onyx.tag): {
                effects = effects.concat(ArmorData.onyx.effects);
                totalRegeneration += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.holy.tag): {
                effects = effects.concat(ArmorData.holy.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.hellish.tag): {
                effects = effects.concat(ArmorData.hellish.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.godly.tag): {
                effects = effects.concat(ArmorData.godly.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.demonic.tag): {
                effects = effects.concat(ArmorData.demonic.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.medic.tag): {
                effects = effects.concat(ArmorData.medic.effects);
                totalHealthBoost += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.molten.tag): {
                effects = effects.concat(ArmorData.molten.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.galaxy.tag): {
                effects = effects.concat(ArmorData.galaxy.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                totalHaste += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.void.tag): {
                effects = effects.concat(ArmorData.void.effects);
                totalSpeed += 1;
                totalResistance += 1;
                totalRegeneration += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.astral.tag): {
                effects = effects.concat(ArmorData.astral.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                totalHaste += 1;
                totalHealthBoost += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.death.tag): {
                effects = effects.concat(ArmorData.death.effects);
                totalHealthBoost += 1;
                totalResistance += 1;
                totalRegeneration += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.nebula.tag): {
                effects = effects.concat(ArmorData.nebula.effects);
                totalSpeed += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalHaste += 1;
                totalVillageHero += 1;
                totalStrength += 1;
                totalHealthBoost += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.cactus.tag): {
                effects = effects.concat(ArmorData.cactus.effects);
                break;
            }
            case Chestplate.hasTag(ArmorData.emberRobe.tag): {
                effects = effects.concat(ArmorData.emberRobe.effects);
                totalStrength += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.hastedRobe.tag): {
                effects = effects.concat(ArmorData.hastedRobe.effects);
                totalStrength += 1;
                totalHaste += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.springyRobe.tag): {
                effects = effects.concat(ArmorData.springyRobe.effects);
                totalStrength += 1;
                totalJumpBoost += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.heroicRobe.tag): {
                effects = effects.concat(ArmorData.heroicRobe.effects);
                totalStrength += 1;
                totalVillageHero += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.cobaltRobe.tag): {
                effects = effects.concat(ArmorData.cobaltRobe.effects);
                totalStrength += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.swiftRobe.tag): {
                effects = effects.concat(ArmorData.swiftRobe.effects);
                totalStrength += 1;
                totalSpeed += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.gluttonyRobe.tag): {
                effects = effects.concat(ArmorData.gluttonyRobe.effects);
                totalStrength += 1;
                totalSaturation += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.featherRobe.tag): {
                effects = effects.concat(ArmorData.featherRobe.effects);
                totalStrength += 1;
                break;
            }
            case Chestplate.hasTag(ArmorData.shadowRobe.tag): {
                effects = effects.concat(ArmorData.shadowRobe.effects);
                totalStrength += 1;
                break;
            }
            default: {
                let passed = false;
                if (customEffects.length > 0) {
                    for (let customEffect of customEffects) {
                        if ((customEffect.mode == "lore" && JSON.stringify(Chestplate.getLore()).includes(customEffect.tag)) || ((!customEffect.mode || customEffect.mode == "tag") && Chestplate.hasTag(customEffect.tag))) {
                            effects = effects.concat(customEffect.effects);
                            passed = true;
                            for (let effect of customEffect.effects) {
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
                                        HealthBoost += 1;
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
                        }
                    }
                }
                passed ? totalPieces : totalPieces -= 1;
                break;
            }
        }
    }
    if (Leggings) {
        totalPieces += 1;
        switch (true) {
            case Leggings.hasTag(ArmorData.amethyst.tag): {
                effects = effects.concat(ArmorData.amethyst.effects);
                totalRegeneration += 1;
                totalHaste += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.shade.tag): {
                effects = effects.concat(ArmorData.shade.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSlowness += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.radium.tag): {
                effects = effects.concat(ArmorData.radium.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.banished.tag): {
                effects = effects.concat(ArmorData.banished.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSlowness += 1;
                totalHaste += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.onyx.tag): {
                effects = effects.concat(ArmorData.onyx.effects);
                totalRegeneration += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.holy.tag): {
                effects = effects.concat(ArmorData.holy.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.hellish.tag): {
                effects = effects.concat(ArmorData.hellish.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.godly.tag): {
                effects = effects.concat(ArmorData.godly.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.demonic.tag): {
                effects = effects.concat(ArmorData.demonic.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.medic.tag): {
                effects = effects.concat(ArmorData.medic.effects);
                totalHealthBoost += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.molten.tag): {
                effects = effects.concat(ArmorData.molten.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.galaxy.tag): {
                effects = effects.concat(ArmorData.galaxy.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                totalHaste += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.void.tag): {
                effects = effects.concat(ArmorData.void.effects);
                totalSpeed += 1;
                totalResistance += 1;
                totalRegeneration += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.astral.tag): {
                effects = effects.concat(ArmorData.astral.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                totalHaste += 1;
                totalHealthBoost += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.death.tag): {
                effects = effects.concat(ArmorData.death.effects);
                totalHealthBoost += 1;
                totalResistance += 1;
                totalRegeneration += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.nebula.tag): {
                effects = effects.concat(ArmorData.nebula.effects);
                totalSpeed += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalHaste += 1;
                totalVillageHero += 1;
                totalStrength += 1;
                totalHealthBoost += 1;
                break;
            }
            case Leggings.hasTag(ArmorData.cactus.tag): {
                effects = effects.concat(ArmorData.cactus.effects);
                break;
            }
            default: {
                let passed = false;
                if (customEffects.length > 0) {
                    for (let customEffect of customEffects) {
                        if ((customEffect.mode == "lore" && JSON.stringify(Leggings.getLore()).includes(customEffect.tag)) || ((!customEffect.mode || customEffect.mode == "tag") && Leggings.hasTag(customEffect.tag))) {
                            effects = effects.concat(customEffect.effects);
                            passed = true;
                            for (let effect of customEffect.effects) {
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
                                        HealthBoost += 1;
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
                        }
                    }
                }
                passed ? totalPieces : totalPieces -= 1;
                break;
            }
        }
    }
    if (Boots) {
        totalPieces += 1;
        switch (true) {
            case Boots.hasTag(ArmorData.amethyst.tag): {
                effects = effects.concat(ArmorData.amethyst.effects);
                totalRegeneration += 1;
                totalHaste += 1;
                break;
            }
            case Boots.hasTag(ArmorData.shade.tag): {
                effects = effects.concat(ArmorData.shade.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSlowness += 1;
                break;
            }
            case Boots.hasTag(ArmorData.radium.tag): {
                effects = effects.concat(ArmorData.radium.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Boots.hasTag(ArmorData.banished.tag): {
                effects = effects.concat(ArmorData.banished.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSlowness += 1;
                totalHaste += 1;
                break;
            }
            case Boots.hasTag(ArmorData.onyx.tag): {
                effects = effects.concat(ArmorData.onyx.effects);
                totalRegeneration += 1;
                break;
            }
            case Boots.hasTag(ArmorData.holy.tag): {
                effects = effects.concat(ArmorData.holy.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Boots.hasTag(ArmorData.hellish.tag): {
                effects = effects.concat(ArmorData.hellish.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Boots.hasTag(ArmorData.godly.tag): {
                effects = effects.concat(ArmorData.godly.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Boots.hasTag(ArmorData.demonic.tag): {
                effects = effects.concat(ArmorData.demonic.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Boots.hasTag(ArmorData.medic.tag): {
                effects = effects.concat(ArmorData.medic.effects);
                totalHealthBoost += 1;
                totalResistance += 1;
                totalSpeed += 1;
                break;
            }
            case Boots.hasTag(ArmorData.molten.tag): {
                effects = effects.concat(ArmorData.molten.effects);
                totalStrength += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                break;
            }
            case Boots.hasTag(ArmorData.galaxy.tag): {
                effects = effects.concat(ArmorData.galaxy.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                totalHaste += 1;
                break;
            }
            case Boots.hasTag(ArmorData.void.tag): {
                effects = effects.concat(ArmorData.void.effects);
                totalSpeed += 1;
                totalResistance += 1;
                totalRegeneration += 1;
                break;
            }
            case Boots.hasTag(ArmorData.astral.tag): {
                effects = effects.concat(ArmorData.astral.effects);
                totalRegeneration += 1;
                totalResistance += 1;
                totalSpeed += 1;
                totalHaste += 1;
                totalHealthBoost += 1;
                break;
            }
            case Boots.hasTag(ArmorData.death.tag): {
                effects = effects.concat(ArmorData.death.effects);
                totalHealthBoost += 1;
                totalResistance += 1;
                totalRegeneration += 1;
                break;
            }
            case Boots.hasTag(ArmorData.nebula.tag): {
                effects = effects.concat(ArmorData.nebula.effects);
                totalSpeed += 1;
                totalRegeneration += 1;
                totalResistance += 1;
                totalHaste += 1;
                totalVillageHero += 1;
                totalStrength += 1;
                totalHealthBoost += 1;
                break;
            }
            case Boots.hasTag(ArmorData.cactus.tag): {
                effects = effects.concat(ArmorData.cactus.effects);
                break;
            }
            case Boots.hasTag(ArmorData.speedBoots.tag): {
                effects = effects.concat(ArmorData.speedBoots.effects);
                totalSpeed += 1;
                break;
            }
            default: {
                let passed = false;
                if (customEffects.length > 0) {
                    for (let customEffect of customEffects) {
                        if ((customEffect.mode == "lore" && JSON.stringify(Boots.getLore()).includes(customEffect.tag)) || ((!customEffect.mode || customEffect.mode == "tag") && Boots.hasTag(customEffect.tag))) {
                            effects = effects.concat(customEffect.effects);
                            passed = true;
                            for (let effect of customEffect.effects) {
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
                                        HealthBoost += 1;
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
                        }
                    }
                }
                passed ? totalPieces : totalPieces -= 1;
                break;
            }
        }
    }
    for (let effect of effects) {
        let ActiveEffects = (_l = player.getEffect(effect.effect)) !== null && _l !== void 0 ? _l : false;
        if (!ActiveEffects) {
            player.addEffect(effect.effect, ArmorEffectDuration, { showParticles: false, amplifier: 0 });
        }
        else {
            let CurrentEffect = 0.;
            switch (false) {
                case effect.effect != MinecraftEffectTypes.Strength: {
                    CurrentEffect = totalStrength;
                    break;
                }
                case effect.effect != MinecraftEffectTypes.Speed: {
                    CurrentEffect = totalSpeed;
                    break;
                }
                case effect.effect != MinecraftEffectTypes.Resistance: {
                    CurrentEffect = totalResistance;
                    break;
                }
                case effect.effect != MinecraftEffectTypes.Regeneration: {
                    CurrentEffect = totalRegeneration;
                    break;
                }
                case effect.effect != MinecraftEffectTypes.JumpBoost: {
                    CurrentEffect = totalJumpBoost;
                    break;
                }
                case effect.effect != MinecraftEffectTypes.Slowness: {
                    CurrentEffect = totalSlowness;
                    break;
                }
                case effect.effect != MinecraftEffectTypes.HealthBoost: {
                    CurrentEffect = totalHealthBoost;
                    break;
                }
                case effect.effect != MinecraftEffectTypes.VillageHero: {
                    CurrentEffect = totalVillageHero;
                    break;
                }
                case effect.effect != MinecraftEffectTypes.Saturation: {
                    CurrentEffect = totalSaturation;
                    break;
                }
                case effect.effect != MinecraftEffectTypes.Haste: {
                    CurrentEffect = totalHaste;
                    break;
                }
            }
            player.addEffect(effect.effect, ArmorEffectDuration, { showParticles: false, amplifier: Math.min((ActiveEffects.amplifier + 1), totalPieces, effect.maxAmp, clampNumber(CurrentEffect - 1, 0, 255)) });
        }
    }
}
//# sourceMappingURL=armorEffects.js.map