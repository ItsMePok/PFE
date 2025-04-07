import { system, world, EquipmentSlot, GameMode, EntityComponentTypes, ItemComponentTypes, ItemStack, ItemEnchantableComponent, Player, EntityProjectileComponent, BlockComponentPlayerInteractEvent, BlockComponentPlayerDestroyEvent, BlockComponentTickEvent, EntityEquippableComponent, BlockComponentRandomTickEvent, ItemComponentUseEvent, ItemCooldownComponent, ItemComponentUseOnEvent, BlockComponentOnPlaceEvent, Direction, RawMessage, EntityQueryOptions, MinecraftDimensionTypes, Block, EffectType, WorldInitializeBeforeEventSignal, HudElement } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftEffectTypes, MinecraftEnchantmentTypes, MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { PFEBossEventConfig, PFEBossEventConfigName, PFEBossEventUIMainMenu, PFEDefaultBossEventSettings, PFEStartBossEvent } from "./bossEvents";
import { PFEHaxelMining } from "./haxelMining";
import { PokeClosestCardinal, PokeDamageItemUB, PokeDecrementStack, PokeSpawnLootTable } from "./commonFunctions";
import { PokeBirthdays, PokeTimeConfigUIMainMenu, PokeTimeGreeting, PokeTimeZoneOffset } from "./time";
import { PFEBoltBowsComponent } from "./boltbow";
import { PFEDiableConfigOptions, PFEDisableConfigDefault, PFEDisableConfigMainMenu, PFEDisableConfigName, PFEDisabledOnUseItems } from "./disableConfig";
import { ActionFormData } from "@minecraft/server-ui";
import { clampNumber } from "@minecraft/math";

const ArmorEffectDuration = 500
const PFEArmorEffectData: PFEArmorEffectInfo = {
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
}
interface PFEEffectArray {
    effect: MinecraftEffectTypes,
    maxAmp: number
}
interface PFEDamageInfo {
    type: "heal" | "damage"
    amountStep: number,
    radiusStep: number,
    maxAmount: number,
    maxRadius: number
}
interface PFEArmorEffectSetData {
    effects: PFEEffectArray[],
    radiusEffect?: PFEDamageInfo,
    tag: string
}
interface PFEArmorEffectInfo {
    amethyst: PFEArmorEffectSetData,
    onyx: PFEArmorEffectSetData,
    void: PFEArmorEffectSetData,
    galaxy: PFEArmorEffectSetData,
    nebula: PFEArmorEffectSetData,
    emberRobe: PFEArmorEffectSetData,
    springyRobe: PFEArmorEffectSetData,
    godly: PFEArmorEffectSetData,
    banished: PFEArmorEffectSetData,
    featherRobe: PFEArmorEffectSetData,
    gluttonyRobe: PFEArmorEffectSetData,
    hastedRobe: PFEArmorEffectSetData,
    heroicRobe: PFEArmorEffectSetData,
    nightVision: PFEArmorEffectSetData,
    holy: PFEArmorEffectSetData,
    hellish: PFEArmorEffectSetData,
    molten: PFEArmorEffectSetData,
    radium: PFEArmorEffectSetData,
    shade: PFEArmorEffectSetData,
    demonic: PFEArmorEffectSetData,
    shadowRobe: PFEArmorEffectSetData,
    swiftRobe: PFEArmorEffectSetData,
    cobaltRobe: PFEArmorEffectSetData,
    astral: PFEArmorEffectSetData,
    medic: PFEArmorEffectSetData,
    cactus: PFEArmorEffectSetData,
    death: PFEArmorEffectSetData,
    speedBoots: PFEArmorEffectSetData
}
function CheckEffects(player: Player, ArmorData: PFEArmorEffectInfo) {
    const Helmet = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Head) ?? false
    const Chestplate = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Chest) ?? false
    const Leggings = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Legs) ?? false
    const Boots = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Feet) ?? false
    const Offhand = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Offhand) ?? false
    let totalPieces = -1
    let effects: PFEEffectArray[] = []
    let totalStrength = 0
    let totalSpeed = 0
    let totalResistance = 0
    let totalRegen = 0
    let totalJumboost = 0
    let totalSlowness = 0
    let totalHealthBoost = 0
    let totalVillageHero = 0
    let totalSaturation = 0
    let totalHaste = 0
    if (Offhand) {
        totalPieces += 1
        switch (false) {
            default: totalPieces -= 1
            case !Offhand.hasTag(ArmorData.nightVision.tag): {
                effects = effects.concat(ArmorData.nightVision.effects)
                break
            }
        }
    }
    if (Helmet) {
        totalPieces += 1
        switch (true) {
            case Helmet.hasTag(ArmorData.amethyst.tag): {
                effects = effects.concat(ArmorData.amethyst.effects)
                totalRegen += 1
                totalHaste += 1
                break
            }
            case Helmet.hasTag(ArmorData.shade.tag): {
                effects = effects.concat(ArmorData.shade.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSlowness += 1
                break
            }
            case Helmet.hasTag(ArmorData.radium.tag): {
                effects = effects.concat(ArmorData.radium.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Helmet.hasTag(ArmorData.banished.tag): {
                effects = effects.concat(ArmorData.banished.effects)
                totalRegen += 1
                totalResistance += 1
                totalSlowness += 1
                totalHaste += 1
                break
            }
            case Helmet.hasTag(ArmorData.onyx.tag): {
                effects = effects.concat(ArmorData.onyx.effects)
                totalRegen += 1
                break
            }
            case Helmet.hasTag(ArmorData.holy.tag): {
                effects = effects.concat(ArmorData.holy.effects)

                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Helmet.hasTag(ArmorData.hellish.tag): {
                effects = effects.concat(ArmorData.hellish.effects)
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Helmet.hasTag(ArmorData.godly.tag): {
                effects = effects.concat(ArmorData.godly.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Helmet.hasTag(ArmorData.demonic.tag): {
                effects = effects.concat(ArmorData.demonic.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Helmet.hasTag(ArmorData.medic.tag): {
                effects = effects.concat(ArmorData.medic.effects)
                totalHealthBoost += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Helmet.hasTag(ArmorData.molten.tag): {
                effects = effects.concat(ArmorData.molten.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Helmet.hasTag(ArmorData.galaxy.tag): {
                effects = effects.concat(ArmorData.galaxy.effects)
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                totalHaste += 1
                break
            }
            case Helmet.hasTag(ArmorData.void.tag): {
                effects = effects.concat(ArmorData.void.effects)
                totalSpeed += 1
                totalResistance += 1
                totalRegen += 1
                break
            }
            case Helmet.hasTag(ArmorData.astral.tag): {
                effects = effects.concat(ArmorData.astral.effects)
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                totalHaste += 1
                totalHealthBoost += 1
                break
            }
            case Helmet.hasTag(ArmorData.death.tag): {
                effects = effects.concat(ArmorData.death.effects)
                totalHealthBoost += 1
                totalResistance += 1
                totalRegen += 1
                break
            }
            case Helmet.hasTag(ArmorData.nebula.tag): {
                effects = effects.concat(ArmorData.nebula.effects)
                totalSpeed += 1
                totalRegen += 1
                totalResistance += 1
                totalHaste += 1
                totalVillageHero += 1
                totalStrength += 1
                totalHealthBoost += 1
                break
            }
            case Helmet.hasTag(ArmorData.cactus.tag): {
                effects = effects.concat(ArmorData.cactus.effects)
                break
            }
            case Helmet.hasTag(ArmorData.emberRobe.tag): {
                effects = effects.concat(ArmorData.emberRobe.effects)
                totalStrength += 1
                break
            }
            case Helmet.hasTag(ArmorData.hastedRobe.tag): {
                effects = effects.concat(ArmorData.hastedRobe.effects)
                totalStrength += 1
                totalHaste += 1
                break
            }
            case Helmet.hasTag(ArmorData.springyRobe.tag): {
                effects = effects.concat(ArmorData.springyRobe.effects)
                totalStrength += 1
                totalJumboost += 1
                break
            }
            case Helmet.hasTag(ArmorData.heroicRobe.tag): {
                effects = effects.concat(ArmorData.heroicRobe.effects)
                totalStrength += 1
                totalVillageHero += 1
                break
            }
            case Helmet.hasTag(ArmorData.cobaltRobe.tag): {
                effects = effects.concat(ArmorData.cobaltRobe.effects)
                totalStrength += 1
                break
            }
            case Helmet.hasTag(ArmorData.swiftRobe.tag): {
                effects = effects.concat(ArmorData.swiftRobe.effects)
                totalStrength += 1
                totalSpeed += 1
                break
            }
            case Helmet.hasTag(ArmorData.gluttonyRobe.tag): {
                effects = effects.concat(ArmorData.gluttonyRobe.effects)
                totalStrength += 1
                totalSaturation += 1
                break
            }
            case Helmet.hasTag(ArmorData.featherRobe.tag): {
                effects = effects.concat(ArmorData.featherRobe.effects)
                totalStrength += 1
                break
            }
            case Helmet.hasTag(ArmorData.shadowRobe.tag): {
                effects = effects.concat(ArmorData.shadowRobe.effects)
                totalStrength += 1
                break
            }
            case Helmet.hasTag(ArmorData.nightVision.tag): {
                effects = effects.concat(ArmorData.nightVision.effects)
                break
            }
            default: totalPieces -= 1;
        }
    }
    if (Chestplate) {
        totalPieces += 1
        switch (true) {
            case Chestplate.hasTag(ArmorData.amethyst.tag): {
                effects = effects.concat(ArmorData.amethyst.effects)
                totalRegen += 1
                totalHaste += 1
                break
            }
            case Chestplate.hasTag(ArmorData.shade.tag): {
                effects = effects.concat(ArmorData.shade.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSlowness += 1
                break
            }
            case Chestplate.hasTag(ArmorData.radium.tag): {
                effects = effects.concat(ArmorData.radium.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Chestplate.hasTag(ArmorData.banished.tag): {
                effects = effects.concat(ArmorData.banished.effects)
                totalRegen += 1
                totalResistance += 1
                totalSlowness += 1
                totalHaste += 1
                break
            }
            case Chestplate.hasTag(ArmorData.onyx.tag): {
                effects = effects.concat(ArmorData.onyx.effects)
                totalRegen += 1
                break
            }
            case Chestplate.hasTag(ArmorData.holy.tag): {
                effects = effects.concat(ArmorData.holy.effects)
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Chestplate.hasTag(ArmorData.hellish.tag): {
                effects = effects.concat(ArmorData.hellish.effects)
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Chestplate.hasTag(ArmorData.godly.tag): {
                effects = effects.concat(ArmorData.godly.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Chestplate.hasTag(ArmorData.demonic.tag): {
                effects = effects.concat(ArmorData.demonic.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Chestplate.hasTag(ArmorData.medic.tag): {
                effects = effects.concat(ArmorData.medic.effects)
                totalHealthBoost += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Chestplate.hasTag(ArmorData.molten.tag): {
                effects = effects.concat(ArmorData.molten.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Chestplate.hasTag(ArmorData.galaxy.tag): {
                effects = effects.concat(ArmorData.galaxy.effects)
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                totalHaste += 1
                break
            }
            case Chestplate.hasTag(ArmorData.void.tag): {
                effects = effects.concat(ArmorData.void.effects)
                totalSpeed += 1
                totalResistance += 1
                totalRegen += 1
                break
            }
            case Chestplate.hasTag(ArmorData.astral.tag): {
                effects = effects.concat(ArmorData.astral.effects)
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                totalHaste += 1
                totalHealthBoost += 1
                break
            }
            case Chestplate.hasTag(ArmorData.death.tag): {
                effects = effects.concat(ArmorData.death.effects)
                totalHealthBoost += 1
                totalResistance += 1
                totalRegen += 1
                break
            }
            case Chestplate.hasTag(ArmorData.nebula.tag): {
                effects = effects.concat(ArmorData.nebula.effects)
                totalSpeed += 1
                totalRegen += 1
                totalResistance += 1
                totalHaste += 1
                totalVillageHero += 1
                totalStrength += 1
                totalHealthBoost += 1
                break
            }
            case Chestplate.hasTag(ArmorData.cactus.tag): {
                effects = effects.concat(ArmorData.cactus.effects)
                break
            }
            case Chestplate.hasTag(ArmorData.emberRobe.tag): {
                effects = effects.concat(ArmorData.emberRobe.effects)
                totalStrength += 1
                break
            }
            case Chestplate.hasTag(ArmorData.hastedRobe.tag): {
                effects = effects.concat(ArmorData.hastedRobe.effects)
                totalStrength += 1
                totalHaste += 1
                break
            }
            case Chestplate.hasTag(ArmorData.springyRobe.tag): {
                effects = effects.concat(ArmorData.springyRobe.effects)
                totalStrength += 1
                totalJumboost += 1
                break
            }
            case Chestplate.hasTag(ArmorData.heroicRobe.tag): {
                effects = effects.concat(ArmorData.heroicRobe.effects)
                totalStrength += 1
                totalVillageHero += 1
                break
            }
            case Chestplate.hasTag(ArmorData.cobaltRobe.tag): {
                effects = effects.concat(ArmorData.cobaltRobe.effects)
                totalStrength += 1
                break
            }
            case Chestplate.hasTag(ArmorData.swiftRobe.tag): {
                effects = effects.concat(ArmorData.swiftRobe.effects)
                totalStrength += 1
                totalSpeed += 1
                break
            }
            case Chestplate.hasTag(ArmorData.gluttonyRobe.tag): {
                effects = effects.concat(ArmorData.gluttonyRobe.effects)
                totalStrength += 1
                totalSaturation += 1
                break
            }
            case Chestplate.hasTag(ArmorData.featherRobe.tag): {
                effects = effects.concat(ArmorData.featherRobe.effects)
                totalStrength += 1
                break
            }
            case Chestplate.hasTag(ArmorData.shadowRobe.tag): {
                effects = effects.concat(ArmorData.shadowRobe.effects)
                totalStrength += 1
                break
            }
            default: totalPieces -= 1;
        }
    }
    if (Leggings) {
        totalPieces += 1
        switch (true) {
            case Leggings.hasTag(ArmorData.amethyst.tag): {
                effects = effects.concat(ArmorData.amethyst.effects)
                totalRegen += 1
                totalHaste += 1
                break
            }
            case Leggings.hasTag(ArmorData.shade.tag): {
                effects = effects.concat(ArmorData.shade.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSlowness += 1
                break
            }
            case Leggings.hasTag(ArmorData.radium.tag): {
                effects = effects.concat(ArmorData.radium.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Leggings.hasTag(ArmorData.banished.tag): {
                effects = effects.concat(ArmorData.banished.effects)
                totalRegen += 1
                totalResistance += 1
                totalSlowness += 1
                totalHaste += 1
                break
            }
            case Leggings.hasTag(ArmorData.onyx.tag): {
                effects = effects.concat(ArmorData.onyx.effects)
                totalRegen += 1
                break
            }
            case Leggings.hasTag(ArmorData.holy.tag): {
                effects = effects.concat(ArmorData.holy.effects)
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Leggings.hasTag(ArmorData.hellish.tag): {
                effects = effects.concat(ArmorData.hellish.effects)
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Leggings.hasTag(ArmorData.godly.tag): {
                effects = effects.concat(ArmorData.godly.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Leggings.hasTag(ArmorData.demonic.tag): {
                effects = effects.concat(ArmorData.demonic.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Leggings.hasTag(ArmorData.medic.tag): {
                effects = effects.concat(ArmorData.medic.effects)
                totalHealthBoost += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Leggings.hasTag(ArmorData.molten.tag): {
                effects = effects.concat(ArmorData.molten.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Leggings.hasTag(ArmorData.galaxy.tag): {
                effects = effects.concat(ArmorData.galaxy.effects)
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                totalHaste += 1
                break
            }
            case Leggings.hasTag(ArmorData.void.tag): {
                effects = effects.concat(ArmorData.void.effects)
                totalSpeed += 1
                totalResistance += 1
                totalRegen += 1
                break
            }
            case Leggings.hasTag(ArmorData.astral.tag): {
                effects = effects.concat(ArmorData.astral.effects)
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                totalHaste += 1
                totalHealthBoost += 1
                break
            }
            case Leggings.hasTag(ArmorData.death.tag): {
                effects = effects.concat(ArmorData.death.effects)
                totalHealthBoost += 1
                totalResistance += 1
                totalRegen += 1
                break
            }
            case Leggings.hasTag(ArmorData.nebula.tag): {
                effects = effects.concat(ArmorData.nebula.effects)
                totalSpeed += 1
                totalRegen += 1
                totalResistance += 1
                totalHaste += 1
                totalVillageHero += 1
                totalStrength += 1
                totalHealthBoost += 1
                break
            }
            case Leggings.hasTag(ArmorData.cactus.tag): {
                effects = effects.concat(ArmorData.cactus.effects)
                break
            }
            default: totalPieces -= 1;
        }
    }
    if (Boots) {
        totalPieces += 1
        switch (true) {
            case Boots.hasTag(ArmorData.amethyst.tag): {
                effects = effects.concat(ArmorData.amethyst.effects)
                totalRegen += 1
                totalHaste += 1
                break
            }
            case Boots.hasTag(ArmorData.shade.tag): {
                effects = effects.concat(ArmorData.shade.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSlowness += 1
                break
            }
            case Boots.hasTag(ArmorData.radium.tag): {
                effects = effects.concat(ArmorData.radium.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Boots.hasTag(ArmorData.banished.tag): {
                effects = effects.concat(ArmorData.banished.effects)
                totalRegen += 1
                totalResistance += 1
                totalSlowness += 1
                totalHaste += 1
                break
            }
            case Boots.hasTag(ArmorData.onyx.tag): {
                effects = effects.concat(ArmorData.onyx.effects)
                totalRegen += 1
                break
            }
            case Boots.hasTag(ArmorData.holy.tag): {
                effects = effects.concat(ArmorData.holy.effects)
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Boots.hasTag(ArmorData.hellish.tag): {
                effects = effects.concat(ArmorData.hellish.effects)
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Boots.hasTag(ArmorData.godly.tag): {
                effects = effects.concat(ArmorData.godly.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Boots.hasTag(ArmorData.demonic.tag): {
                effects = effects.concat(ArmorData.demonic.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Boots.hasTag(ArmorData.medic.tag): {
                effects = effects.concat(ArmorData.medic.effects)
                totalHealthBoost += 1
                totalResistance += 1
                totalSpeed += 1
                break
            }
            case Boots.hasTag(ArmorData.molten.tag): {
                effects = effects.concat(ArmorData.molten.effects)
                totalStrength += 1
                totalRegen += 1
                totalResistance += 1
                break
            }
            case Boots.hasTag(ArmorData.galaxy.tag): {
                effects = effects.concat(ArmorData.galaxy.effects)
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                totalHaste += 1
                break
            }
            case Boots.hasTag(ArmorData.void.tag): {
                effects = effects.concat(ArmorData.void.effects)
                totalSpeed += 1
                totalResistance += 1
                totalRegen += 1
                break
            }
            case Boots.hasTag(ArmorData.astral.tag): {
                effects = effects.concat(ArmorData.astral.effects)
                totalRegen += 1
                totalResistance += 1
                totalSpeed += 1
                totalHaste += 1
                totalHealthBoost += 1
                break
            }
            case Boots.hasTag(ArmorData.death.tag): {
                effects = effects.concat(ArmorData.death.effects)
                totalHealthBoost += 1
                totalResistance += 1
                totalRegen += 1
                break
            }
            case Boots.hasTag(ArmorData.nebula.tag): {
                effects = effects.concat(ArmorData.nebula.effects)
                totalSpeed += 1
                totalRegen += 1
                totalResistance += 1
                totalHaste += 1
                totalVillageHero += 1
                totalStrength += 1
                totalHealthBoost += 1
                break
            }
            case Boots.hasTag(ArmorData.cactus.tag): {
                effects = effects.concat(ArmorData.cactus.effects)
                break
            }
            case Boots.hasTag(ArmorData.speedBoots.tag): {
                effects = effects.concat(ArmorData.speedBoots.effects)
                totalSpeed += 1
                break
            }
            default: totalPieces -= 1;
        }
    }
    for (let effect of effects) {
        let ActiveEffects = player.getEffect(effect.effect) ?? false
        if (!ActiveEffects) {
            player.addEffect(effect.effect, ArmorEffectDuration, { showParticles: false, amplifier: 0 })
        } else {
            let CurrentEffect = 0.
            switch (false) {
                case effect.effect != MinecraftEffectTypes.Strength: { CurrentEffect = totalStrength; break }
                case effect.effect != MinecraftEffectTypes.Speed: { CurrentEffect = totalSpeed; break }
                case effect.effect != MinecraftEffectTypes.Resistance: { CurrentEffect = totalResistance; break }
                case effect.effect != MinecraftEffectTypes.Regeneration: { CurrentEffect = totalRegen; break }
                case effect.effect != MinecraftEffectTypes.JumpBoost: { CurrentEffect = totalJumboost; break }
                case effect.effect != MinecraftEffectTypes.Slowness: { CurrentEffect = totalSlowness; break }
                case effect.effect != MinecraftEffectTypes.HealthBoost: { CurrentEffect = totalHealthBoost; break }
                case effect.effect != MinecraftEffectTypes.VillageHero: { CurrentEffect = totalVillageHero; break }
                case effect.effect != MinecraftEffectTypes.Saturation: { CurrentEffect = totalSaturation; break }
                case effect.effect != MinecraftEffectTypes.Haste: { CurrentEffect = totalHaste; break }
            }
            player.addEffect(effect.effect, ArmorEffectDuration, { showParticles: false, amplifier: Math.min((ActiveEffects.amplifier + 1), totalPieces, effect.maxAmp, clampNumber(CurrentEffect - 1, 0, 255)) })
        }
    }
}

system.runInterval(() => {
    for (let player of world.getAllPlayers()) {
        if (!player) continue;
        CheckEffects(player, PFEArmorEffectData)
    }
}, 20)

world.afterEvents.playerJoin.subscribe((data => {
    let birthdays: PokeBirthdays[] = JSON.parse(world.getDynamicProperty(`poke:birthdays`)!.toString())
    //console.warn(JSON.stringify(birthdays))
    system.runTimeout(() => {
        world.getAllPlayers().forEach((player => {
            //console.warn(`Joined Id ${player.id}, your: ${player.id}`)
            if (player.id == data.playerId) {
                let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player))
                birthdays.forEach((birthday => {
                    //console.warn(`${birthday.day == currentTime.getDate() && birthday.month == currentTime.getMonth()} Day ${currentTime.getDate()}, Month: ${currentTime.getMonth()}`)
                    if (birthday.day == currentTime.getDate() && birthday.month == currentTime.getMonth()) {
                        let name: RawMessage = { text: birthday.name }
                        if (birthday.style == "dev") {
                            name.translate = `translation.poke:birthdayDev`
                        }
                        if (birthday.name == player.name) {
                            name.translate = `translation.poke:birthdayOwn`
                        }
                        else if (birthday.name?.endsWith(`s`)) {
                            name.text = `${birthday.name}'`
                        }
                        else {
                            name.text = `${birthday.name}'s`
                        }
                        player.sendMessage({ translate: `translation.poke:birthdayAnnounce`, with: { rawtext: [PokeTimeGreeting(currentTime, player, undefined, true), { text: player.name }, name] } })
                    }
                }))
            }
        }))
    }, 600)
}))
function PFEHourTimeDownEvents() {
    let currentTime = new Date(Date.now())
    //Cassette Trader spawning
    //console.warn(`Attempting to spawn cassette trader`)
    let allPlayers = world.getAllPlayers()
    let randomPlayer = allPlayers.at(Math.abs(Math.round(Math.random() * (allPlayers.length - 1))))
    randomPlayer?.dimension.spawnEntity('poke:cassette_trader', randomPlayer.location).runCommand(`spreadplayers ~ ~ 30 40 @s ~10`)
}
function PFETimeValidation() {
    let currentTime = new Date(Date.now())
    if (currentTime.getMinutes() == 0) {
        PFEHourTimeDownEvents()
    } else {
        system.runTimeout(() => {
            PFETimeValidation()
        }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20)
    }
}

function Post(data: Block, up?: boolean, down?: boolean) {
    let Permutation = data.permutation
    let Post = false
    let PostCheckNorth = false
    let PostCheckSouth = false
    let PostCheckEast = false
    let PostCheckWest = false
    if (data.permutation.getState('poke:post_bit') == undefined) return;

    if (Permutation.getState('pfe:wall_n') == true) {
        PostCheckNorth = true
    }
    if (Permutation.getState('pfe:wall_s') == true) {
        PostCheckSouth = true
    }
    if (Permutation.getState('pfe:wall_e') == true) {
        PostCheckEast = true
    }
    if (Permutation.getState('pfe:wall_w') == true) {
        PostCheckWest = true
    }
    if ((PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == false)) Post = true;
    if ((PostCheckNorth == true && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == false)) Post = true;
    if ((PostCheckNorth == false && PostCheckSouth == true && PostCheckEast == false && PostCheckWest == false)) Post = true;
    if ((PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == true && PostCheckWest == false)) Post = true;
    if ((PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == true)) Post = true;
    if ((PostCheckNorth && PostCheckEast) || (PostCheckNorth && PostCheckWest) || (PostCheckSouth && PostCheckEast) || (PostCheckSouth && PostCheckWest)) Post = true;

    if (Post) {
        if (Permutation.getState('poke:post_bit') === undefined) return;
        UpdatePost(data, true)
    } else {
        if (Permutation.getState('poke:post_bit') === undefined) return;
        UpdatePost(data, false)
    }
}
function UpdatePost(block: Block, value: boolean, up?: boolean) {
    if (!value) {
        let Post = false
        let PostCheckNorth = false
        let PostCheckSouth = false
        let PostCheckEast = false
        let PostCheckWest = false
        if (block.permutation.getState('pfe:wall_n') == true) {
            PostCheckNorth = true
        }
        if (block.permutation.getState('pfe:wall_s') == true) {
            PostCheckSouth = true
        }
        if (block.permutation.getState('pfe:wall_e') == true) {
            PostCheckEast = true
        }
        if (block.permutation.getState('pfe:wall_w') == true) {
            PostCheckWest = true
        }
        if ((!PostCheckNorth && !PostCheckSouth && !PostCheckEast && !PostCheckWest)) Post = true;
        if ((PostCheckNorth && !PostCheckSouth && PostCheckEast == false && !PostCheckWest)) Post = true;
        if ((!PostCheckNorth && PostCheckSouth && PostCheckEast == false && !PostCheckWest)) Post = true;
        if ((!PostCheckNorth && !PostCheckSouth && PostCheckEast && !PostCheckWest)) Post = true;
        if ((!PostCheckNorth && !PostCheckSouth && !PostCheckEast && PostCheckWest)) Post = true;
        if ((PostCheckNorth && PostCheckEast) || (PostCheckNorth && PostCheckWest) || (PostCheckSouth && PostCheckEast) || (PostCheckSouth && PostCheckWest)) Post = true;
        if (Post) {
            if (up) {
                if (block.above()?.hasTag(`pfe_wall`)) {
                    UpdatePost(block.above()!, true, true)
                }
            } else if (up === false) {
                if (block.below()?.hasTag(`pfe_wall`)) {
                    UpdatePost(block.below()!, true, false)
                }
            } else {
                if (block.above()?.hasTag(`pfe_wall`)) {
                    UpdatePost(block.above()!, true, true)
                }
                if (block.below()?.hasTag(`pfe_wall`)) {
                    UpdatePost(block.below()!, true, false)
                }
            }
            block.setPermutation(block.permutation.withState('poke:post_bit', true))
            return;
        }
    }
    if (up) {
        if (block.above()?.hasTag(`pfe_wall`)) {
            UpdatePost(block.above()!, value, true)
        }
    } else if (up === false) {
        if (block.below()?.hasTag(`pfe_wall`)) {
            UpdatePost(block.below()!, value, false)
        }
    } else {
        if (block.above()?.hasTag(`pfe_wall`)) {
            UpdatePost(block.above()!, value, true)
        }
        if (block.below()?.hasTag(`pfe_wall`)) {
            UpdatePost(block.below()!, value, false)
        }
    }
    block.setPermutation(block.permutation.withState('poke:post_bit', value))
}

//Custom Component Registry & Inital Setup
world.beforeEvents.worldInitialize.subscribe(data => {
    system.runTimeout(() => {
        PFETimeValidation()
    }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20)

    if (typeof world.getDynamicProperty(PFEDisableConfigName) != "string") {
        world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(PFEDisableConfigDefault))
    }

    let birthdayProperty = world.getDynamicProperty(`poke:birthdays`)
    if (typeof birthdayProperty != "string") world.setDynamicProperty(`poke:birthdays`, `[]`)
    if (typeof world.getDynamicProperty(`poke:customEvents`) != "string") {
        world.setDynamicProperty(`poke:customEvents`, '[]')
        console.warn(`Custom events were invalid; resetting to default (Ignore if this world was just created) || Poke-Calendar`)
    } else {
        try {
            JSON.parse(world.getDynamicProperty(`poke:customEvents`)?.toString()!)
        }
        catch {
            console.warn(`Custom events were invalid; resetting to default || Poke-Calendar`)
            world.setDynamicProperty(`poke:customEvents`, '[]')
        }
    }
    data.itemComponentRegistry.registerCustomComponent(
        "poke:timeConfig", {
        onUse(data) {
            PokeTimeConfigUIMainMenu(data.source)
        }
    }
    )
    if (typeof world.getDynamicProperty(PFEBossEventConfigName) == "string") {
        //@ts-ignore
        let settings: PFEBossEventConfig = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName))
        //To prevent errors it will reset the settings to default if a setting was missing/invalid
        if ((typeof settings.ticks != "number") || (typeof settings.furnaceGolem != "object") || (typeof settings.knightling != "object") || (typeof settings.listener != "object") || (typeof settings.zombken != "object") || (typeof settings.miniDemonicAllay != "object") || (typeof settings.necromancer != "object") || (typeof settings.snowman != "object") || (typeof settings.sparky != "object") || (typeof settings.superStriker != "object") || (typeof settings.theLogger != "object")) {
            //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
            world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
        };
    } else {
        //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
        world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings))
    }
    //Item Components
    data.itemComponentRegistry.registerCustomComponent(
        `poke-pfe:identifier`, {
        onUseOn(data) {
            if (data.source.typeId == MinecraftEntityTypes.Player) {
                //console.warn(`sent`)
                //@ts-ignore
                data.source.sendMessage({ translate: `translation.poke-pfe:identifierMessage`, with: [data.block.typeId] })
            }
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        `poke:boltbow`, new PFEBoltBowsComponent()
    )
    data.itemComponentRegistry.registerCustomComponent(
        "poke:boss_event", {
        onUse(data) {
            let options: PFEDiableConfigOptions = JSON.parse(world.getDynamicProperty(PFEDisableConfigName)!.toString())
            if (!options.bounty) return;
            if (PFEStartBossEvent() == 0) {
                data.source.sendMessage({ translate: `translation.poke:bossEventNoSpawnError` })
                data.source.playSound(`note.didgeridoo`, { pitch: 0.825 })
                return
            };
            if (data.source.getGameMode() == GameMode.creative) return;
            //@ts-ignore
            data.source.getComponent(EntityComponentTypes.Equippable).setEquipment(EquipmentSlot.Mainhand, PokeDecrementStack(data.itemStack!))
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        'poke:veinMiner', {
        onMineBlock(data) {
            if (!data.minedBlockPermutation.hasTag('minecraft:is_axe_item_destructible')) return;
            let dimension = data.block.dimension;
            let location = data.block.location
            let toBreak = [
                { x: location.x + 1, y: location.y, z: location.z },
                { x: location.x - 1, y: location.y, z: location.z },
                { x: location.x, y: location.y + 1, z: location.z },
                { x: location.x, y: location.y - 1, z: location.z },
                { x: location.x, y: location.y, z: location.z + 1 },
                { x: location.x, y: location.y, z: location.z - 1 },
                { x: location.x, y: location.y + 1, z: location.z + 1 },
                { x: location.x, y: location.y + 1, z: location.z - 1 },
                { x: location.x + 1, y: location.y + 1, z: location.z },
                { x: location.x - 1, y: location.y + 1, z: location.z },
                { x: location.x + 1, y: location.y, z: location.z + 1 },
                { x: location.x + 1, y: location.y, z: location.z - 1 },
                { x: location.x - 1, y: location.y, z: location.z + 1 },
                { x: location.x - 1, y: location.y, z: location.z - 1 },
                { x: location.x + 1, y: location.y + 1, z: location.z + 1 },
                { x: location.x + 1, y: location.y + 1, z: location.z - 1 },
                { x: location.x - 1, y: location.y + 1, z: location.z + 1 },
                { x: location.x - 1, y: location.y + 1, z: location.z - 1 },
                { x: location.x + 1, y: location.y - 1, z: location.z + 1 },
                { x: location.x + 1, y: location.y - 1, z: location.z - 1 },
                { x: location.x - 1, y: location.y - 1, z: location.z + 1 },
                { x: location.x - 1, y: location.y - 1, z: location.z - 1 },
                { x: location.x, y: location.y - 1, z: location.z + 1 },
                { x: location.x, y: location.y - 1, z: location.z - 1 },
                { x: location.x + 1, y: location.y - 1, z: location.z },
                { x: location.x - 1, y: location.y - 1, z: location.z },
            ];
            let checked = new Set();
            //cap is 256 so game world will not crash if used on an excessive amount of blocks
            let max = 0
            while (max < 256 && toBreak.length > 0) {
                location = toBreak.shift()!;
                let key = `${location.x},${location.y},${location.z}`;
                if (checked.has(key)) {
                    //console.warn(`block already checked`)
                    continue
                };
                checked.add(key);
                let currentBlock = undefined
                //to prevent the vein miner from randomly stopping if outside of world bounds
                try {
                    currentBlock = dimension.getBlock(location);
                } catch (error) {
                    continue
                }
                //console.warn(currentBlock?.getTags())
                if (data.minedBlockPermutation.matches(currentBlock!.typeId)) {
                    dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} air destroy`);
                    max = max + 1
                    //console.warn(max)
                    let adjacent = [
                        { x: location.x + 1, y: location.y, z: location.z },
                        { x: location.x - 1, y: location.y, z: location.z },
                        { x: location.x, y: location.y + 1, z: location.z },
                        { x: location.x, y: location.y - 1, z: location.z },
                        { x: location.x, y: location.y, z: location.z + 1 },
                        { x: location.x, y: location.y, z: location.z - 1 },
                        { x: location.x, y: location.y + 1, z: location.z + 1 },
                        { x: location.x, y: location.y + 1, z: location.z - 1 },
                        { x: location.x + 1, y: location.y + 1, z: location.z },
                        { x: location.x - 1, y: location.y + 1, z: location.z },
                        { x: location.x + 1, y: location.y, z: location.z + 1 },
                        { x: location.x + 1, y: location.y, z: location.z - 1 },
                        { x: location.x - 1, y: location.y, z: location.z + 1 },
                        { x: location.x - 1, y: location.y, z: location.z - 1 },
                        { x: location.x + 1, y: location.y + 1, z: location.z + 1 },
                        { x: location.x + 1, y: location.y + 1, z: location.z - 1 },
                        { x: location.x - 1, y: location.y + 1, z: location.z + 1 },
                        { x: location.x - 1, y: location.y + 1, z: location.z - 1 },
                        { x: location.x + 1, y: location.y - 1, z: location.z + 1 },
                        { x: location.x + 1, y: location.y - 1, z: location.z - 1 },
                        { x: location.x - 1, y: location.y - 1, z: location.z + 1 },
                        { x: location.x - 1, y: location.y - 1, z: location.z - 1 },
                        { x: location.x, y: location.y - 1, z: location.z + 1 },
                        { x: location.x, y: location.y - 1, z: location.z - 1 },
                        { x: location.x + 1, y: location.y - 1, z: location.z },
                        { x: location.x - 1, y: location.y - 1, z: location.z },
                    ];
                    for (let loc of adjacent) {
                        toBreak.push(loc)
                    }
                }
            }
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        "poke:normalMining", {
        onMineBlock(data) {
            PokeDamageItemUB(data.itemStack!, undefined, data.source, EquipmentSlot.Mainhand)
            return;
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        "poke:shootProjectile", {
        onUse(data: ItemComponentUseEvent) {
            if (data.itemStack == undefined) return;
            if (data.itemStack.typeId == "poke:nuke_ring") {
                let options: PFEDiableConfigOptions = JSON.parse(world.getDynamicProperty(PFEDisableConfigName)!.toString())
                if (!options.nukeRing) return;
            }
            const headLocate = data.source.getHeadLocation();
            //Projectile shooters. projectile id defined in a tag on the item
            const pTag = data.itemStack.getTags();
            const angle = data.source.getViewDirection();
            const projEntity = data.source.dimension.spawnEntity('' + pTag, headLocate);
            //@ts-ignore
            const projComp: EntityProjectileComponent = projEntity.getComponent("projectile");
            data.source.playSound('random.bow')
            projComp.owner = data.source;
            projComp.shoot(angle);
            PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand)
            return;
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        "poke:hitEffects", {
        onHitEntity(data) {
            switch (data.itemStack?.typeId) {
                case 'poke:demonic_sword': { data.hitEntity.addEffect('slowness', 100, { amplifier: 3 }); return; }
                case 'poke:hellish_blade': { data.hitEntity.addEffect('slowness', 40, { amplifier: 3 }); return; }
                case 'poke:godly_sword': { data.attackingEntity.addEffect('strength', 100, { amplifier: 2 }); return; }
                case 'poke:holy_sword': { data.attackingEntity.addEffect('strength', 40, { amplifier: 1 }); return; }
                case 'poke:astral_sword': { data.attackingEntity.addEffect('strength', 100, { amplifier: 2 }); return; }
                case 'poke:shade_sword': { data.hitEntity.addEffect('slowness', 40, { amplifier: 2 }); data.hitEntity.addEffect('wither', 60, { amplifier: 1 }); return; }
                case 'poke:radium_sword': { data.hitEntity.addEffect('slowness', 220, { amplifier: 3 }); data.hitEntity.addEffect('wither', 240, { amplifier: 4 }); return; }
                case 'poke:amethyst_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 4 }); data.hitEntity.addEffect('blindness', 20); return; }
                case 'poke:demonic_slasher': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 }); data.hitEntity.addEffect('wither', 80, { amplifier: 1 }); return; }
                case 'poke:gold_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 }); data.attackingEntity.addEffect('haste', 600, { amplifier: 2 }); return; }
                case 'poke:emerald_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 }); data.attackingEntity.addEffect('village_hero', 2400, { amplifier: 1 }); return; }
                case 'poke:iron_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 }); return; }
                case 'poke:onyx_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 5 }); data.attackingEntity.addEffect('jump_boost', 100, { amplifier: 2 }); data.hitEntity.addEffect('weakness', 120, { amplifier: 2 }); return; }
                case 'poke:godly_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 }); data.attackingEntity.addEffect('slow_falling', 2400); data.attackingEntity.addEffect('jump_boost', 1200, { amplifier: 3 }); return; }
                case 'poke:hellish_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 }); data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 2400); data.hitEntity.addEffect('mining_fatigue', 400, { amplifier: 1 }); return; }
                case 'poke:holy_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 }); data.attackingEntity.addEffect('slow_falling', 2400, { amplifier: 1 }); data.hitEntity.addEffect('darkness', 400); return; }
                case 'poke:shade_scythe': { data.attackingEntity.addEffect('absorption', 600, { amplifier: 1 }); data.attackingEntity.addEffect('strength', 100, { amplifier: 1 }); data.hitEntity.addEffect('slowness', 160, { amplifier: 2 }); return; }
                case 'poke:diamond_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 }); data.hitEntity.addEffect('weakness', 100, { amplifier: 1 }); data.hitEntity.addEffect('blindness', 80); return; }
                case 'poke:netherite_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 }); data.hitEntity.addEffect('hunger', 120, { amplifier: 1 }); data.hitEntity.addEffect('slowness', 80, { amplifier: 2 }); return; }
                case 'poke:radium_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 5 }); data.hitEntity.addEffect('nausea', 80, { amplifier: 1 }); data.hitEntity.addEffect('fatal_poison', 160, { amplifier: 2 }); return; }
                case 'poke:medic_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 }); data.attackingEntity.addEffect('health_boost', 2400, { amplifier: 2 }); return; }
                case 'poke:galactic_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 9 }); data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300); data.hitEntity.addEffect('wither', 80, { amplifier: 2 }); data.hitEntity.addEffect('weakness', 80, { amplifier: 2 }); return; }
                case 'poke:astral_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 120, { amplifier: 9 }); data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300); data.hitEntity.addEffect('wither', 120, { amplifier: 2 }); data.hitEntity.addEffect('weakness', 120, { amplifier: 3 }); return; }
                case 'poke:ember_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 }); data.hitEntity.addEffect('nausea', 80, { amplifier: 1 }); data.hitEntity.addEffect('blindness', 80); return; }
                case 'poke:void_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 }); data.hitEntity.runCommand('function poke/pfe/void_scythe'); return; }
                case 'poke:death_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 }); data.hitEntity.runCommand('function poke/pfe/death_scythe'); return; }
                case 'poke:nebula_scythe': { data.attackingEntity.runCommand('function poke/pfe/nebula_scythe'); data.hitEntity.addEffect('wither', 80, { amplifier: 3 }); return; }
                case 'poke:cobalt_scythe': { data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 }); data.hitEntity.addEffect('wither', 40, { amplifier: 1 }); return; }
                case 'poke:nebula_sword': { data.attackingEntity.addEffect('strength', 40, { amplifier: 4 }); data.hitEntity.addEffect('weakness', 20, { amplifier: 2 }); return; }
                case 'poke:ban_hammer': { data.attackingEntity.addEffect('strength', 40, { amplifier: 1 }); return; }
                case 'poke:circuit_sword': { data.attackingEntity.runCommand('function poke/pfe/circuit_sword'); data.hitEntity.addEffect('blindness', 100); return; }
            }
            return;
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        "poke:consumeEffects", {
        onConsume(data) {
            switch (data.itemStack.typeId) {
                case 'poke:xp_vial': { data.source.runCommandAsync("xp 160 @s"); return };
                case 'poke:cobalt_potion': { data.source.addEffect(MinecraftEffectTypes.NightVision, 3600); data.source.addEffect(MinecraftEffectTypes.Regeneration, 2400) }
                case 'poke:cobalt_soup': { data.source.addEffect(MinecraftEffectTypes.NightVision, 2400, { showParticles: false }); return };
                case 'poke:root_beer': { data.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4, }); return };
                case 'poke:pumpkin_spice': { data.source.addEffect(MinecraftEffectTypes.Invisibility, 600); data.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4, }); return };
                case 'poke:crimson_sporeshroom_stew': { data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200); return };
                case 'poke:warped_sporeshroom_stew': { data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200); return };
                case 'poke:hellish_soup': { data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200); return };
                case 'poke:nebula_noodles': { data.source.addEffect(MinecraftEffectTypes.Strength, 600, { amplifier: 7, }); return };
                case 'poke:milk_bottle': { data.source.runCommandAsync("effect @s clear"); return };
                case 'poke:demonic_potion': { data.source.runCommandAsync("function poke/pfe/demonic_potion"); return };
                case 'poke:hellish_potion': { data.source.runCommandAsync("function poke/pfe/hellish_potion"); return };
                case 'poke:nebula_potion': { data.source.runCommandAsync("function poke/pfe/nebula_potion"); return };
                case 'poke:void_potion': { data.source.runCommandAsync("function poke/pfe/void_potion"); return };
                case 'poke:death_potion': { data.source.kill(); return };
                case 'poke:rotten_chicken': { data.source.addEffect(MinecraftEffectTypes.Nausea, 400); return };
                case 'poke:golden_chicken': { data.source.addEffect(MinecraftEffectTypes.VillageHero, 400, { amplifier: 1, }); return };
                case 'poke:banished_star_x10': { data.source.runCommandAsync("damage @a[r=100] 32767000 entity_attack entity @s"); return };
                case 'poke:banished_star_x9': { data.source.runCommandAsync("damage @s 32767000 entity_attack"); return };
            }
            return;
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        "poke_pfe:config", {
        onUse(data) {
            if ((data.source.getGameMode() == GameMode.creative) || data.source.hasTag(`poke:config`)) {
                let UI = new ActionFormData()
                UI.button({ translate: `translation.poke_pfe.bossEventConfig` }, `textures/poke/common/spawn_enabled`)
                UI.button({ translate: `translation.poke_pfe.disableConfig` }, `textures/poke/common/blacklist_add`)
                UI.show(data.source).then(response => {
                    let selection = 0
                    if (response.selection == selection) {
                        if (world.getDynamicProperty(PFEBossEventConfigName) == undefined) {
                            //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
                            world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings))
                        }
                        PFEBossEventUIMainMenu(data.source)
                        return
                    } else selection++
                    if (response.selection == selection) {
                        PFEDisableConfigMainMenu(data)
                    } else selection++
                    if ((response.selection == selection) || response.canceled) {
                        return
                    }
                })
            } else {
                let UI = new ActionFormData()
                UI.title({ translate: `translation.poke_pfe.insufficientPerms` })
                UI.body({ rawtext: [{ translate: `translation.poke_pfe.insufficientPerms.desc` }, { text: `poke:config\n\n` }, { translate: `translation.poke_pfe.insufficientPerms.desc2` }, { text: `\n/tag @s add poke:config` }] })
                UI.button({ translate: `translation.poke:bossEventClose` }, `textures/poke/common/close`)
                UI.show(data.source).then(responce => {
                    return
                })
                return
            }
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        "poke:haxelMining", new PFEHaxelMining()
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke:cc_dodge", {
        onUse(data: ItemComponentUseEvent) {
            if (data.itemStack === undefined) return;
            //@ts-ignore
            const cooldownComponent: ItemCooldownComponent = data.itemStack.getComponent('minecraft:cooldown')
            //@ts-ignore
            const equippableComponent: EntityEquippableComponent = data.source.getComponent(EntityComponentTypes.Equippable)
            const moveDir = data.source.getVelocity()
            var amount = data.itemStack.amount
            data.source.spawnParticle('minecraft:wind_explosion_emitter', data.source.location)
            //console.warn(moveDirX+' || '+moveDirY+' || '+moveDirZ)
            data.source.applyKnockback(moveDir.x, moveDir.z, 5, moveDir.y + 0.5);
            data.source.playSound('component.jump_to_block');
            if (data.source.getGameMode() == GameMode.creative) return;
            cooldownComponent.startCooldown(data.source)
            if (amount <= 1) {
                equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack('minecraft:air', 1))
                return;
            }
            equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(data.itemStack.typeId, amount - 1))
            return
        }
    }
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke:cc_bowAim", {
        onUse(data: ItemComponentUseEvent) {
            //@ts-ignore
            const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] })
            var cPlayersLength = cPlayers.length;
            for (var i = cPlayersLength; i > 0; i--) {
                //data.source.playAnimation('animation.humanoid.bow_and_arrow',{stopExpression: '!q.is_using_item', players:[cPlayers[i-1].name]})
            }
            return;
        }
    }
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke:cc_crossbowAim", {
        onUse(data: ItemComponentUseEvent) {
            const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] })
            var cPlayersLength = cPlayers.length;
            //data.source.playAnimation('third_person_crossbow_equipped',{stopExpression:'!q.is_using_item',controller:'pfe-controller.animation.poke_pfe.crossbow2'})//Hand charging for everyone else
            //data.source.playAnimation('waffle',{stopExpression:'!q.is_using_item',controller:'pfe-controller.animation.poke_pfe.crossbow2'})
            data.source.playAnimation('animation.player.first_person.crossbow_equipped', { stopExpression: '!q.is_using_item', players: [data.source.name + ''] }) //Hand charging movement
            for (var i = cPlayersLength; i > 0; i--) {
                data.source.playAnimation('third_person_crossbow_equipped', { stopExpression: '!q.is_using_item', players: [cPlayers[i - 1].name] })//Hand charging for everyone else
            }
            return;
        }
    }
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke:cc_spawnEgg", {
        onUseOn(data: ItemComponentUseOnEvent) {
            if (data.itemStack.typeId == "poke:wither_spawner") {
                let options: PFEDiableConfigOptions = JSON.parse(world.getDynamicProperty(PFEDisableConfigName)!.toString())
                if (!options.witherSpawner) return;
            }
            //@ts-ignore
            const player: Player = data.source
            const faceLoc = data.faceLocation
            const blockFace = data.blockFace
            let faceLocX = --faceLoc.x
            let faceLocY = --faceLoc.y
            let faceLocZ = --faceLoc.z
            var amount = data.itemStack.amount
            //@ts-ignore
            const equippableComponent: EntityEquippableComponent = data.source.getComponent(EntityComponentTypes.Equippable)
            switch (blockFace) {
                case Direction.North: { faceLocZ += 1.5; break }
                case Direction.South: { faceLocZ += -1.5; break }
                case Direction.East: { faceLocX += -1.5; break }
                case Direction.West: { faceLocX += 1.5; break }
                case Direction.Up: { faceLocY += -1.5; break }
                case Direction.Down: { faceLocY += 2; break }
            }
            /**↓This exists because a bug is causing it to be inverted,
             *  so it inverts the position (this also causes it to not be exactly where you interacted
             *  (but slightly offset is better than halfway across the world lol))
             */
            const vec3 = { x: -faceLocX, y: -faceLocY, z: -faceLocZ };

            const mobId = data.itemStack.getTags()//Mob identifier should be the only tag on the item
            player.dimension.spawnEntity('' + mobId, vec3)
            if (player.getGameMode() == 'creative') return;
            if (amount <= 1) {
                equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack('minecraft:air', 1))
                return;
            }
            equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(data.itemStack.typeId, amount - 1))
            return
        }
    }
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke:cas", {
        onUse(data: ItemComponentUseEvent) {
            const id = data.itemStack!.typeId
            const trackId = id.substring(id.lastIndexOf("_")).substring(1)
            if (data.source.isSneaking) {
                data.source.queueMusic(`poke.record.${trackId}`)
                data.source.playSound('poke.cassette_activate')
                data.source.sendMessage({ translate: `translation.poke:trackQueued` })
                return;
            } else {
                data.source.playMusic(`poke.record.${trackId}`, { fade: 2.5 })
                data.source.playSound('poke.cassette_activate')
            }
            return;
        }
    }
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke:cc_on_use", {
        onUse(data: ItemComponentUseEvent) {
            if (data.itemStack === undefined) return;
            if (PFEDisabledOnUseItems.includes(data.itemStack.typeId)) {
                let options: PFEDiableConfigOptions = JSON.parse(world.getDynamicProperty(PFEDisableConfigName)!.toString())
                switch (true) {
                    case data.itemStack.typeId == "poke:quantum_teleporter" && !options.quantumTeleporter: return;
                    case data.itemStack.typeId == "poke:sundial" && !options.sundial: return;
                    case data.itemStack.typeId == "poke:kapow_ring" && !options.kapowRing: return;
                }
            }
            const ItemTags = data.itemStack!.getTags().toString();
            let Command = ItemTags.substring(ItemTags.indexOf('pfe:Command:'), ItemTags.indexOf(':pfeCommandEnd')).substring(12);//Command is in the tag of the item without the '/'
            data.source.runCommand(`${Command}`)
            //@ts-ignore
            const cooldownComp: ItemCooldownComponent = data.itemStack.getComponent('minecraft:cooldown')
            if (cooldownComp != undefined) cooldownComp.startCooldown(data.source);
            if (data.itemStack.isStackable) {
                return
            }
            PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand)
            return;
        }
    }
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke:cc_zooka", {
        onUse(data: ItemComponentUseEvent) {
            if (data.itemStack === undefined) return;
            const vierDirection = data.source.getViewDirection();
            const location = data.source.getHeadLocation();
            const id = data.itemStack.getTags()
            //@ts-ignore
            const cooldownComp: ItemCooldownComponent = data.itemStack.getComponent('minecraft:cooldown')
            if (data.itemStack.typeId == "poke:windzooka") {
                data.source.applyKnockback(vierDirection.x, vierDirection.z, -7, -vierDirection.y * 4);
                data.source.playSound('wind_charge.burst');
                data.source.spawnParticle('minecraft:wind_explosion_emitter', location)
            } else {
                if (vierDirection.y > 0.99) data.source.applyKnockback(vierDirection.x, vierDirection.z, 7, -vierDirection.y * -4);
                else data.source.applyKnockback(vierDirection.x, vierDirection.z, 7, -vierDirection.y * -4);
                data.source.playSound('wind_charge.burst');
                data.source.spawnParticle('minecraft:wind_explosion_emitter', location);
                data.source.spawnParticle('poke:blazooka_flame', location)
            }
            data.source.runCommand('' + id)
            cooldownComp.startCooldown(data.source)
            PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand)
            return;
        }
    }
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke-pfe:upgrader", {
        onUseOn(data: ItemComponentUseOnEvent) {
            interface PFEUpgraderComponentInfo {
                canUpgrade: string[]
            }
            /*
            \"\",

            poke-pfe:UpgraderInfo:{\"canUpgrade\":[\"poke:carved_melon\",\"poke:gilded_carved_melon\",\"minecraft:pumpkin\",\"minecraft:melon_block\",\"poke:gilded_melon\",\"minecraft:brown_mushroom_block",\"minecraft:red_mushroom_block\"]}:poke-pfe:UpgraderInfoEnd
            */
            let tagData = data.itemStack.getTags().toString()
            let componentInfo: PFEUpgraderComponentInfo = JSON.parse(tagData.substring(tagData.indexOf(`poke-pfe:UpgraderInfo:`), tagData.lastIndexOf(`:poke-pfe:UpgraderInfoEnd`)).substring(22))
            console.warn(JSON.stringify(componentInfo))
            let multi = 1
            if (componentInfo.canUpgrade.includes(data.block.typeId)) {
                const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
                const itemIds = data.itemStack.typeId
                const itemId = itemIds.substring(5)
                data.source.runCommandAsync(`execute positioned ${block_location} run function poke/pfe/${itemId}`)
            } else {
                multi = 0
            }
            PokeDamageItemUB(data.itemStack, multi, data.source, EquipmentSlot.Mainhand)
            return;
        }
    }
    );
    //Block Components
    data.blockComponentRegistry.registerCustomComponent(
        "poke:trapdoor_event", {
        onPlayerInteract(data: BlockComponentPlayerInteractEvent) {
            const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`
            if (data.block.permutation.hasTag('pfe_trapdoor_open') == true) {
                data.block.setPermutation(data.block.permutation.withState('poke:trapdoor_open', 'no'))
                data.block.dimension.playSound(`open.iron_trapdoor`, data.block.center())
                return;
            }
            else {
                data.block.setPermutation(data.block.permutation.withState('poke:trapdoor_open', 'yes'))
                data.block.dimension.playSound(`close.iron_trapdoor`, data.block.center())
                return;
            }
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:fortune", {
        onPlayerDestroy(data: BlockComponentPlayerDestroyEvent) {
            //@ts-ignore
            const equippableComponent: EntityEquippableComponent = data.player?.getComponent(EntityComponentTypes.Equippable)
            if (equippableComponent === undefined) return;
            if (!equippableComponent.getEquipment(EquipmentSlot.Mainhand)?.hasComponent(ItemComponentTypes.Enchantable)) return;
            //@ts-ignore
            const enchantableComponent: ItemEnchantableComponent = equippableComponent.getEquipment(EquipmentSlot.Mainhand)?.getComponent(ItemComponentTypes.Enchantable)
            if (!enchantableComponent.hasEnchantment(MinecraftEnchantmentTypes.Fortune)) return;
            let fortuneLevel = enchantableComponent.getEnchantment(MinecraftEnchantmentTypes.Fortune)!.level
            let rng = Math.round(Math.random())
            //console.warn(rng)
            const blockLocation = `${data.block.x} ${data.block.y} ${data.block.z}`
            const blockId = data.destroyedBlockPermutation.type.id.substring(5)
            if (data.player?.getGameMode() == GameMode.survival) {
                if (fortuneLevel == 3) {
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    if (rng == 0) return;
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    return;
                }
                if (fortuneLevel == 2) {
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    if (rng == 0) return;
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    return;
                }
                if (fortuneLevel == 1) {
                    if (rng == 0) return;
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    return;
                }
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:slabs", {
        onPlayerInteract(data: BlockComponentPlayerInteractEvent) {
            if (data.block.permutation.getState('poke:double') == true) return;
            const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`
            const slabId = data.block.typeId
            //@ts-ignore
            const equippableComponent: EntityEquippableComponent = data.player!.getComponent(EntityComponentTypes.Equippable)
            const mainhand: ItemStack | undefined = equippableComponent.getEquipment(EquipmentSlot.Mainhand)
            if (mainhand != undefined) {
                if (mainhand.typeId == slabId && ((data.block.permutation.getState('minecraft:vertical_half') == "bottom" && data.face == Direction.Up) || (data.block.permutation.getState('minecraft:vertical_half') == "top" && data.face == Direction.Down)) && data.block.permutation.getState('poke:double') == false) {
                    var itemStackAmount = mainhand.amount - 1
                    data.block.setPermutation(data.block.permutation.withState('poke:double', true))
                    data.block.dimension.playSound(`use.stone`, data.block.center())
                    if (data.player?.getGameMode() == 'creative') return;
                    if (itemStackAmount <= 0) {
                        equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack('minecraft:air', 1))
                        return;
                    }
                    equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(slabId, itemStackAmount))
                    return;
                }
                else return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_bulbs", {
        onPlayerInteract(data: BlockComponentPlayerInteractEvent) {
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            //@ts-ignore
            let light_color: number = data.block.permutation.getState('pfe:color')
            let sound_pitch = 1 + light_color / 10
            //resets if at the maximum (15)
            if (data.block.permutation.getState('pfe:color') == 15) {
                //set pfe:color state to default (0)
                data.block.setPermutation(data.block.permutation.withState('pfe:color', 0))
                //play sound
                data.block.dimension.runCommandAsync(`playsound block.copper_bulb.turn_on @a  ${block_location} 1 ${sound_pitch}`)
                return;
            }
            //Adds 1 to the current state of pfe:color
            else {
                //set pfe:color state to current +1
                data.block.setPermutation(
                    data.block.permutation.withState('pfe:color', light_color + 1))
                //play sound
                data.block.dimension.runCommandAsync(`playsound block.copper_bulb.turn_on @a ${block_location} 1 ${sound_pitch}`)
                return;
            }
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_phantomic_conduit", {
        onTick(data: BlockComponentTickEvent) {
            var block_location_x = data.block.x
            var block_location_y = data.block.y
            var block_location_z = data.block.z
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1))
                data.dimension.runCommand('execute positioned ' + block_location_x + ' ' + block_location_y + ' ' + block_location_z + ' as @e[r=50,family=phantom] run damage @s 20')
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_da_conduit", {
        onTick(data: BlockComponentTickEvent) {
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1))
                data.dimension.runCommand('execute positioned ' + block_location + ' as @e[r=50,family=pfe:demonic_allay] run damage @s 20')
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_cobble_gen", {
        onTick(data: BlockComponentTickEvent) {
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1))
                if (data.block.above()?.typeId != 'minecraft:air') return;
                data.block.above()?.setType('minecraft:cobblestone')
                //data.dimension.runCommand('execute positioned '+block_location_x+' '+block_location_y+' '+block_location_z+' if block ~ ~1 ~ air run setblock ~ ~1 ~ cobblestone')
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_cobbler", {
        onTick(data: BlockComponentTickEvent) {
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1))
                data.dimension.runCommand(`execute positioned ${block_location} run structure load poke:cobblestone_item ~ ~-1 ~`)
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_block_breaker", {
        onTick(data: BlockComponentTickEvent) {
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1))
                data.dimension.runCommand(`execute positioned ${block_location} unless block ~ ~-1 ~ bedrock run setblock ~ ~-1 ~ air destroy`)
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_dirter", {
        onTick(data: BlockComponentTickEvent) {
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1))
                switch (data.block.typeId) {
                    case 'poke:dirter_east': {
                        if (data.block.east()?.typeId == 'minecraft:cobblestone') {
                            data.block.east()?.setType('minecraft:dirt')
                            break;
                        }
                    }
                    case 'poke:dirter_west': {
                        if (data.block.west()?.typeId == 'minecraft:cobblestone') {
                            data.block.west()?.setType('minecraft:dirt')
                            break;
                        }
                    }
                    case 'poke:dirter_south': {
                        if (data.block.south()?.typeId == 'minecraft:cobblestone') {
                            data.block.south()?.setType('minecraft:dirt')
                            break;
                        }
                    }
                    case 'poke:dirter_north': {
                        if (data.block.north()?.typeId == 'minecraft:cobblestone') {
                            data.block.north()?.setType('minecraft:dirt')
                            break;
                        }
                    }
                    case 'poke:dirter_up': {
                        if (data.block.above()?.typeId == 'minecraft:cobblestone') {
                            data.block.above()?.setType('minecraft:dirt')
                            break;
                        }
                    }
                    case 'poke:dirter_down': {
                        if (data.block.below()?.typeId == 'minecraft:cobblestone') {
                            data.block.below()?.setType('minecraft:dirt')
                            break;
                        }
                    }
                    case 'poke:dirter': {
                        if (data.block.below()?.typeId == 'minecraft:cobblestone') {
                            data.block.below()?.setType('minecraft:dirt')
                            return;
                        }
                    }
                }
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_duster", {
        onTick(data: BlockComponentTickEvent) {
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1))
                switch (data.block.typeId) {
                    case 'poke:duster_east': {
                        if (data.block.east()?.typeId == 'minecraft:dirt') {
                            data.block.east()?.setType('minecraft:sand')
                            break;
                        }
                        if (data.block.east()?.typeId == 'minecraft:cobblestone') {
                            data.block.east()?.setType('minecraft:gravel')
                            break;
                        }
                    }
                    case 'poke:duster_west': {
                        if (data.block.west()?.typeId == 'minecraft:dirt') {
                            data.block.west()?.setType('minecraft:sand')
                            break;
                        }
                        if (data.block.west()?.typeId == 'minecraft:cobblestone') {
                            data.block.west()?.setType('minecraft:gravel')
                            break;
                        }
                    }
                    case 'poke:duster_south': {
                        if (data.block.south()?.typeId == 'minecraft:dirt') {
                            data.block.south()?.setType('minecraft:sand')
                            break;
                        }
                        if (data.block.south()?.typeId == 'minecraft:cobblestone') {
                            data.block.south()?.setType('minecraft:gravel')
                            break;
                        }
                    }
                    case 'poke:duster_north': {
                        if (data.block.north()?.typeId == 'minecraft:dirt') {
                            data.block.north()?.setType('minecraft:sand')
                            break;
                        }
                        if (data.block.north()?.typeId == 'minecraft:cobblestone') {
                            data.block.north()?.setType('minecraft:gravel')
                            break;
                        }
                    }
                    case 'poke:duster_up': {
                        if (data.block.above()?.typeId == 'minecraft:dirt') {
                            data.block.above()?.setType('minecraft:sand')
                            break;
                        }
                        if (data.block.above()?.typeId == 'minecraft:cobblestone') {
                            data.block.above()?.setType('minecraft:gravel')
                            break;
                        }
                    }
                    case 'poke:duster_down': {
                        if (data.block.below()?.typeId == 'minecraft:dirt') {
                            data.block.below()?.setType('minecraft:sand')
                            break;
                        }
                        if (data.block.below()?.typeId == 'minecraft:cobblestone') {
                            data.block.below()?.setType('minecraft:gravel')
                            break;
                        }
                    }
                    case 'poke:duster': {
                        if (data.block.below()?.typeId == 'minecraft:dirt') {
                            data.block.below()?.setType('minecraft:sand')
                            break;
                        }
                        if (data.block.below()?.typeId == 'minecraft:cobblestone') {
                            data.block.below()?.setType('minecraft:gravel')
                            break;
                        }
                    }
                }
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke_pfe:magnet_block", {
        onTick(data: BlockComponentTickEvent) {
            let blockY = (data.block.permutation.getState(`minecraft:vertical_half`) == `top`) ? data.block.center().y - 0.5 : data.block.center().y + 0.5
            const block_location = `${data.block.x} ${blockY} ${data.block.z}`
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1))
                data.dimension.runCommand(`execute positioned ${block_location} as @e[type=item,r=10] run tp @s ${block_location}`)
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_calibrate", {
        onPlayerInteract(data: BlockComponentPlayerInteractEvent) {
            const OldId = ['poke:duster', 'poke:dirter']
            const bId = data.block.typeId
            const newBlock = `${bId.substring(0, bId.lastIndexOf("_"))}_${data.face.toLowerCase()}`
            if (newBlock == bId) return;
            if (OldId.includes(bId)) {
                //Converts old Dirter / Duster into the Calibrated ones
                data.block.setType(bId + '_up')
                return;
            }
            data.block.setType(newBlock)
            data.dimension.playSound('poke.calibrate', data.block.center())
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_CaliBlockBreaker", {
        onTick(data: BlockComponentTickEvent) {
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1))
                if (data.block.typeId == 'poke:block_breaker_east') {
                    data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~1 ~ ~ bedrock run setblock ~1 ~ ~ air destroy')
                    return;
                }
                if (data.block.typeId == 'poke:block_breaker_west') {
                    data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~-1 ~ ~ bedrock run setblock ~-1 ~ ~ air destroy')
                    return;
                }
                if (data.block.typeId == 'poke:block_breaker_south') {
                    data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~ ~ ~1 bedrock run setblock ~ ~ ~1 air destroy')
                    return;
                }
                if (data.block.typeId == 'poke:block_breaker_north') {
                    data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~ ~ ~-1 bedrock run setblock ~ ~ ~-1 air destroy')
                    return;
                }
                if (data.block.typeId == 'poke:block_breaker_up') {
                    data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~ ~1 ~ bedrock run setblock ~ ~1 ~ air destroy')
                    return;
                }
                if (data.block.typeId == 'poke:block_breaker_down') {
                    data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~ ~-1 ~ bedrock run setblock ~ ~-1 ~ air destroy')
                    return;
                }
                return;
            };
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_CaliCobbleGen", {
        onTick(data: BlockComponentTickEvent) {
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1))
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_east') {
                    if (data.block.east()?.typeId != 'minecraft:air') return;
                    data.block.east()?.setType('minecraft:cobblestone')
                    return;
                }
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_west') {
                    if (data.block.west()?.typeId != 'minecraft:air') return;
                    data.block.west()?.setType('minecraft:cobblestone')
                    return;
                }
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_south') {
                    if (data.block.south()?.typeId != 'minecraft:air') return;
                    data.block.south()?.setType('minecraft:cobblestone')
                    return;
                }
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_north') {
                    if (data.block.north()?.typeId != 'minecraft:air') return;
                    data.block.north()?.setType('minecraft:cobblestone')
                    return;
                }
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_up') {
                    if (data.block.above()?.typeId != 'minecraft:air') return;
                    data.block.above()?.setType('minecraft:cobblestone')
                    return;
                }
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_down') {
                    if (data.block.below()?.typeId != 'minecraft:air') return;
                    data.block.below()?.setType('minecraft:cobblestone')
                    return;
                }
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:crops", {
        onRandomTick(data: BlockComponentRandomTickEvent) {
            //@ts-ignore
            var growth_state: number = data.block.permutation.getState('poke:growth_stage')
            var growth_stage = growth_state + 1
            if (growth_state != undefined || 6) {
                data.block.setPermutation(data.block.permutation.withState('poke:growth_stage', growth_stage))
                return;
            }
            return;
        },
        onPlayerInteract(data: BlockComponentPlayerInteractEvent) {
            //@ts-ignore
            const equippableComponent: EntityEquippableComponent = data.player?.getComponent(EntityComponentTypes.Equippable)
            const mainhandItem = equippableComponent.getEquipment(EquipmentSlot.Mainhand)
            if (mainhandItem === undefined) return;
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            //@ts-ignore
            let growth_state: number = data.block.permutation.getState('poke:growth_stage')
            let growth_stage: number = growth_state + Math.round(Math.random() * 3)
            var itemAfterUse = mainhandItem.amount
            var itemAfterUse1 = itemAfterUse - 1
            if (growth_stage > 6) {
                growth_stage = 6
            }
            if (mainhandItem.typeId == MinecraftItemTypes.BoneMeal && growth_state != 6) {
                data.block.setPermutation(data.block.permutation.withState('poke:growth_stage', growth_stage))
                data.dimension.runCommand("playsound item.bone_meal.use @a " + block_location)
                data.dimension.runCommand("particle minecraft:crop_growth_emitter " + block_location)
                if (data.player?.getGameMode() != GameMode.creative) {
                    if (itemAfterUse1 == 0) {
                        data.player?.runCommand('clear @s bone_meal 0 1')
                        return;
                    }
                    equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(mainhandItem.typeId, itemAfterUse1))
                    return;
                }
                return
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_barometer", {
        onTick(data: BlockComponentTickEvent) {
            var weather = data.block.permutation.getState('pfe:weather')
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                //@ts-ignore
                if (data.dimension.getWeather() == 'Clear' && weather != 0) {
                    data.block.setPermutation(data.block.permutation.withState('pfe:weather', 0))
                    return;
                }
                //@ts-ignore
                if (data.dimension.getWeather() != 'Thunder' && data.dimension.getWeather() == 'Rain' && weather != 1) {
                    data.block.setPermutation(data.block.permutation.withState('pfe:weather', 1))
                    return;
                }
                //@ts-ignore
                if (data.dimension.getWeather() == 'Thunder' && weather != 2) {
                    data.block.setPermutation(data.block.permutation.withState('pfe:weather', 2))
                    return;
                }
                return;
            }
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_lava_sponge", {
        onPlace(data) {
            switch (MinecraftBlockTypes.Lava || MinecraftBlockTypes.FlowingLava) {
                case data.block.north()?.typeId: break;
                case data.block.south()?.typeId: break;
                case data.block.east()?.typeId: break;
                case data.block.west()?.typeId: break;
                case data.block.below()?.typeId: break;
                case data.block.above()?.typeId: break;
                default: return
            }
            data.dimension.runCommand(`execute positioned ${data.block.x} ${data.block.y} ${data.block.z} run function poke/pfe/lava_sponge_to_molten`)
            return;
        },
        onTick(data: BlockComponentTickEvent) {
            switch (MinecraftBlockTypes.Lava || MinecraftBlockTypes.FlowingLava) {
                case data.block.north()?.typeId: break;
                case data.block.south()?.typeId: break;
                case data.block.east()?.typeId: break;
                case data.block.west()?.typeId: break;
                case data.block.below()?.typeId: break;
                case data.block.above()?.typeId: break;
                default: return;
            }
            data.dimension.runCommand(`execute positioned ${data.block.x} ${data.block.y} ${data.block.z} run function poke/pfe/lava_sponge_to_molten`)
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke_pfe:molten_lava_sponge", {
        onRandomTick(data) {
            switch (MinecraftBlockTypes.Water || MinecraftBlockTypes.FlowingWater) {
                case data.block.north()?.typeId: break;
                case data.block.south()?.typeId: break;
                case data.block.east()?.typeId: break;
                case data.block.west()?.typeId: break;
                case data.block.below()?.typeId: break;
                case data.block.above()?.typeId: break;
                default: return
            };
            data.block.setType(`poke:lava_sponge`);
            data.dimension.playSound(`random.fizz`, data.block.center());
            data.dimension.spawnParticle(`minecraft:cauldron_explosion_emitter`, data.block.center());
            return
        }
    }
    )
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_block_seat", {
        onPlayerInteract(data: BlockComponentPlayerInteractEvent) {
            const slabId = data.block.typeId
            //@ts-ignore
            const mainhand: ItemStack | undefined = data.player.getComponent(EntityComponentTypes.Equippable).getEquipment('Mainhand')
            const options: EntityQueryOptions = {
                type: 'poke:seat',
                location: data.block.center(),
                maxDistance: 0.24
            };
            if (mainhand?.typeId != slabId && !data.player?.isSneaking) {
                if (data.block.permutation.getState('minecraft:vertical_half') == 'bottom' && data.block.permutation.getState('poke:double') == false) {
                    if (data.dimension.getEntities(options).length > 0) {
                        return;
                    }
                    else {
                        //@ts-ignore
                        data.dimension.spawnEntity('poke:seat', data.block.center()).getComponent('minecraft:rideable').addRider(data.player)
                        return;
                    }
                }
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_slab_loot", {
        onPlayerDestroy(data: BlockComponentPlayerDestroyEvent) {
            const block_location = data.block.location
            const gm = data.player?.getGameMode()
            const blockId = data.destroyedBlockPermutation.type.id
            const blockState = data.destroyedBlockPermutation.getState('poke:double')
            if (gm == 'survival') {
                if (blockState == true) {
                    data.dimension.spawnItem
                        (new ItemStack(blockId, 1), block_location)
                    return;
                }
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_block_interact", {
        onPlayerInteract(data: BlockComponentPlayerInteractEvent) {
            switch (data.block.typeId) {
                case 'poke:listener_trophy': { data.player?.playMusic('record.listen', { fade: 5 }); return; }
                case 'poke:furnace_golem_trophy': { data.player?.playMusic('poke.record.pigstep', { fade: 5 }); return; }
                case 'poke:cobalt_golem_block': { data.dimension.spawnEntity('poke:cobalt_golem', data.block.location); data.block.setType('minecraft:air'); return; }
                    return;
            }
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_8ball", {
        onPlayerInteract(data: BlockComponentPlayerInteractEvent) {
            var RNG = Math.floor(Math.random() * 19)
            //console.warn(RNG)
            data.player?.sendMessage({ rawtext: [{ translate: `translation.poke:8ball${RNG}` }] })
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_wall", {
        onPlace(data: BlockComponentOnPlaceEvent) {
            const NorthBlock = data.block.north()
            const SouthBlock = data.block.south()
            const EastBlock = data.block.east()
            const WestBlock = data.block.west()
            const AboveBlock = data.block.above()
            const BelowBlock = data.block.below()
            if (!NorthBlock || !SouthBlock || !EastBlock || !WestBlock) return;
            if (!NorthBlock.isAir && !NorthBlock.isLiquid) {
                data.block.setPermutation(data.block.permutation.withState('pfe:wall_n', true));
                if (NorthBlock.permutation.getState('pfe:wall_s') != undefined) {
                    NorthBlock.setPermutation(NorthBlock.permutation.withState('pfe:wall_s', true))
                    Post(NorthBlock, true, true)
                }
            } else { data.block.setPermutation(data.block.permutation.withState('pfe:wall_n', false)) };
            if (!SouthBlock.isAir && !SouthBlock.isLiquid) {
                data.block.setPermutation(data.block.permutation.withState('pfe:wall_s', true));
                if (SouthBlock.permutation.getState('pfe:wall_n') != undefined) {
                    SouthBlock.setPermutation(SouthBlock.permutation.withState('pfe:wall_n', true))
                    Post(SouthBlock, true, true)
                }
            } else { data.block.setPermutation(data.block.permutation.withState('pfe:wall_s', false)) };
            if (!EastBlock.isAir && !EastBlock.isLiquid) {
                data.block.setPermutation(data.block.permutation.withState('pfe:wall_e', true));
                if (EastBlock.permutation.getState('pfe:wall_w') != undefined) {
                    EastBlock.setPermutation(EastBlock.permutation.withState('pfe:wall_w', true))
                    Post(EastBlock, true, true)
                }
            } else { data.block.setPermutation(data.block.permutation.withState('pfe:wall_e', false)) };

            if (!WestBlock.isAir && !WestBlock.isLiquid) {
                data.block.setPermutation(data.block.permutation.withState('pfe:wall_w', true));
                if (WestBlock.permutation.getState('pfe:wall_e') != undefined) {
                    WestBlock.setPermutation(WestBlock.permutation.withState('pfe:wall_e', true))
                    Post(WestBlock, true, true)
                }
            } else { data.block.setPermutation(data.block.permutation.withState('pfe:wall_w', false)) };
            if (BelowBlock) {
                if (!BelowBlock.isAir && !BelowBlock.isLiquid) {
                    data.block.setPermutation(data.block.permutation.withState('poke:connected_below', true));
                    if (BelowBlock.permutation.getState('poke:connected_above') != undefined) {
                        BelowBlock.setPermutation(BelowBlock.permutation.withState('poke:connected_above', true))
                    }
                } else { data.block.setPermutation(data.block.permutation.withState('poke:connected_below', false)) };
            }
            if (AboveBlock) {
                if (AboveBlock && !AboveBlock.isAir && !AboveBlock.isLiquid) {
                    data.block.setPermutation(data.block.permutation.withState('poke:connected_above', true));
                    if (AboveBlock.permutation.getState('poke:connected_below') != undefined) {
                        AboveBlock.setPermutation(AboveBlock.permutation.withState('poke:connected_below', true))
                    }
                } else { data.block.setPermutation(data.block.permutation.withState('poke:connected_above', false)) };
            }
            Post(data.block, true, true)
            return;
        },
        onPlayerDestroy(data: BlockComponentPlayerDestroyEvent) {
            const NorthBlock = data.block.north()
            const SouthBlock = data.block.south()
            const EastBlock = data.block.east()
            const WestBlock = data.block.west()
            const AboveBlock = data.block.above()
            const BelowBlock = data.block.below()
            if (!NorthBlock || !SouthBlock || !EastBlock || !WestBlock || !AboveBlock || !BelowBlock) return;
            if (NorthBlock.permutation.getState('pfe:wall_s') != undefined) {
                NorthBlock.setPermutation(NorthBlock.permutation.withState('pfe:wall_s', false))
                Post(NorthBlock, true, true)
            }
            if (SouthBlock.permutation.getState('pfe:wall_n') != undefined) {
                SouthBlock.setPermutation(SouthBlock.permutation.withState('pfe:wall_n', false))
                Post(SouthBlock, true, true)
            }
            if (EastBlock.permutation.getState('pfe:wall_w') != undefined) {
                EastBlock.setPermutation(EastBlock.permutation.withState('pfe:wall_w', false))
                Post(EastBlock, true, true)
            }
            if (WestBlock.permutation.getState('pfe:wall_e') != undefined) {
                WestBlock.setPermutation(WestBlock.permutation.withState('pfe:wall_e', false))
                Post(WestBlock, true, true)
            }
            if (AboveBlock.permutation.getState('poke:connected_above') != undefined) {
                AboveBlock.setPermutation(AboveBlock.permutation.withState('poke:connected_below', false))
                Post(AboveBlock, true, false)
            }
            if (BelowBlock.permutation.getState('poke:connected_below') != undefined) {
                BelowBlock.setPermutation(BelowBlock.permutation.withState('poke:connected_above', false))
                Post(BelowBlock, false, true)
            }
            return;
        }
    }
    );
    const PFEFisherComponentInfo = {
        baitBlockState: "poke_pfe:bait",
        baitStates: [4, 3, 2, 1, 0]
    }
    data.blockComponentRegistry.registerCustomComponent(
        "poke_pfe:fisher", {

        onRandomTick(data) {
            if (data.block.isWaterlogged && (data.block.permutation.getState(PFEFisherComponentInfo.baitBlockState) != 0)) {
                data.block.setPermutation(data.block.permutation.withState(PFEFisherComponentInfo.baitBlockState, Math.max(Number(data.block.permutation.getState(PFEFisherComponentInfo.baitBlockState)) - 1, 0)))
                data.block.dimension.playSound(`poke_pfe.fisher.catch`, data.block.center())
            }
        },
        onPlayerInteract(data) {
            let baitState = data.block.permutation.getState(PFEFisherComponentInfo.baitBlockState)
            let lootTable = "poke/pfe/fisher_block.loot"
            let spawnLocation = data.block.center()
            spawnLocation.y += 1
            switch (baitState) {
                case 4: {
                    data.block.dimension.playSound(`poke_pfe.fisher.noLoot`, data.block.center())
                    return; break;
                };
                case 3: { PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 1); break; }
                case 2: { PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 2); break; }
                case 1: { PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 3); break; }
                case 0: { PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 4); break; }
            }
            data.block.setPermutation(data.block.permutation.withState(PFEFisherComponentInfo.baitBlockState, 4))
        },
        onPlayerDestroy(data) {
            let baitState = data.destroyedBlockPermutation.getState(PFEFisherComponentInfo.baitBlockState)
            let lootTable = "poke/pfe/fisher_block.loot"
            let spawnLocation = data.block.center()
            spawnLocation.y += 1
            switch (baitState) {
                case 4: break;
                case 3: { PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 1); break; }
                case 2: { PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 2); break; }
                case 1: { PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 3); break; }
                case 0: { PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 4); break; }
            }
        }
    }
    )
    data.blockComponentRegistry.registerCustomComponent(
        "poke_pfe:elevator", {
        onStepOff(data) {
            if (!data.entity) return;
            //@ts-ignore
            let player: Player = data.entity
            if (player.typeId == MinecraftEntityTypes.Player) {
                let maxSearch = 64
                if (player.isJumping) {
                    let viewDirection = player.getViewDirection()
                    //console.warn(`X: ${viewDirection.x}, Y: ${viewDirection.y}, Z: ${viewDirection.z}`)
                    let cardinalDirecion = PokeClosestCardinal(viewDirection, "upDown")
                    switch (cardinalDirecion.direction) {
                        case Direction.Up: {
                            for (let i = data.block.y + 1; i <= Math.min((data.block.y + maxSearch), data.dimension.heightRange.max); Math.min(i++, data.dimension.heightRange.max)) {
                                //console.warn(`Checking Y= ${i} \nBlock ID = ${data.block.above(i-data.block.y)?.typeId} \nAbove Amount = ${i-data.block.y}\nRedstone Power = ${data.block.above(i-data.block.y)?.getRedstonePower()}\nHas Tag? = ${data.block.above(i-data.block.y)?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.above(i - data.block.y)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.above(i - data.block.y)?.getRedstonePower())) {
                                    //console.warn(`TELEPORTING`)
                                    player.teleport({ x: data.block.center().x, y: i + 1, z: data.block.center().z })
                                    player.playSound(`mob.endermen.portal`, { location: { x: data.block.x, y: i + 1, z: data.block.z } })
                                    return
                                }
                            };
                            break
                        }
                        case Direction.Down: {
                            for (let i = data.block.y - 1; i >= Math.max((data.block.y - maxSearch), data.dimension.heightRange.min); Math.min(i--, data.dimension.heightRange.min)) {
                                //console.warn(`Checking Y= ${i} \nBlock ID = ${data.block.below(Math.abs(i-data.block.y))?.typeId} \nBelow Amount = ${Math.abs(i-data.block.y)}\nRedstone Power = ${data.block.below(Math.abs(i-data.block.y))?.getRedstonePower()}\nHas Tag? = ${data.block.below(Math.abs(i-data.block.y))?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.below(Math.abs(i - data.block.y))?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.below(Math.abs(i - data.block.y))?.getRedstonePower())) {
                                    //console.warn(`TELEPORTING`)
                                    player.teleport({ x: data.block.center().x, y: i + 1, z: data.block.center().z })
                                    player.playSound(`mob.endermen.portal`, { location: { x: data.block.x, y: i + 1, z: data.block.z } })
                                    return
                                }
                            };
                            break
                        }
                    }
                }
            }
        }
    }
    )
    data.blockComponentRegistry.registerCustomComponent(
        "poke_pfe:omnivator", {
        onStepOff(data) {
            if (!data.entity) return;
            //@ts-ignore
            let player: Player = data.entity
            if (player.typeId == MinecraftEntityTypes.Player) {
                let maxSearch = 64
                if (player.isJumping) {
                    let viewDirection = player.getViewDirection()
                    console.warn(`X: ${viewDirection.x}, Y: ${viewDirection.y}, Z: ${viewDirection.z}`)
                    let cardinalDirecion = PokeClosestCardinal(viewDirection)
                    switch (cardinalDirecion.direction) {
                        case Direction.Up: {
                            for (let i = data.block.y + 1; i <= Math.min((data.block.y + maxSearch), data.dimension.heightRange.max); Math.min(i++, data.dimension.heightRange.max)) {
                                console.warn(`Checking Y= ${i} \nBlock ID = ${data.block.above(i - data.block.y)?.typeId} \nAbove Amount = ${i - data.block.y}\nRedstone Power = ${data.block.above(i - data.block.y)?.getRedstonePower()}\nHas Tag? = ${data.block.above(i - data.block.y)?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.above(i - data.block.y)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.above(i - data.block.y)?.getRedstonePower())) {
                                    console.warn(`TELEPORTING`)
                                    player.teleport({ x: data.block.center().x, y: i + 1, z: data.block.center().z })
                                    player.playSound(`mob.endermen.portal`, { location: { x: data.block.x, y: i + 1, z: data.block.z } })
                                    return
                                }
                            };
                            break
                        }
                        case Direction.Down: {
                            for (let i = data.block.y - 1; i >= Math.max((data.block.y - maxSearch), data.dimension.heightRange.min); Math.min(i--, data.dimension.heightRange.min)) {
                                console.warn(`Checking Y= ${i} \nBlock ID = ${data.block.below(Math.abs(i - data.block.y))?.typeId} \nBelow Amount = ${Math.abs(i - data.block.y)}\nRedstone Power = ${data.block.below(Math.abs(i - data.block.y))?.getRedstonePower()}\nHas Tag? = ${data.block.below(Math.abs(i - data.block.y))?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.below(Math.abs(i - data.block.y))?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.below(Math.abs(i - data.block.y))?.getRedstonePower())) {
                                    console.warn(`TELEPORTING`)
                                    player.teleport({ x: data.block.center().x, y: i + 1, z: data.block.center().z })
                                    player.playSound(`mob.endermen.portal`, { location: { x: data.block.x, y: i + 1, z: data.block.z } })
                                    return
                                }
                            };
                            break
                        }
                        case Direction.North: {
                            for (let i = data.block.z - 1; i >= data.block.z - maxSearch; i--) {
                                console.warn(`Checking Z= ${i} \nBlock ID = ${data.block.north(Math.abs(i - data.block.z))?.typeId} \nNorth Amount = ${Math.abs(i - data.block.z)}\nRedstone Power = ${data.block.north(Math.abs(i - data.block.z))?.getRedstonePower()}\nHas Tag? = ${data.block.north(Math.abs(i - data.block.z))?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.north(Math.abs(i - data.block.z))?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.north(Math.abs(i - data.block.z))?.getRedstonePower())) {
                                    console.warn(`TELEPORTING`)
                                    let newBlock = data.block.north(Math.abs(i - data.block.z))!
                                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z })
                                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() })
                                    return
                                }
                            };
                            break
                        }
                        case Direction.South: {
                            for (let i = data.block.z + 1; i <= data.block.z + maxSearch; i++) {
                                console.warn(`Checking Z= ${i} \nBlock ID = ${data.block.south(i - data.block.z)?.typeId} \nSouth Amount = ${i - data.block.z}\nRedstone Power = ${data.block.south(i - data.block.z)?.getRedstonePower()}\nHas Tag? = ${data.block.south(i - data.block.z)?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.south(i - data.block.z)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.south(i - data.block.z)?.getRedstonePower())) {
                                    console.warn(`TELEPORTING`)
                                    let newBlock = data.block.south(i - data.block.z)!
                                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z })
                                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() })
                                    return
                                }
                            };
                            break
                        }
                        case Direction.West: {
                            for (let i = data.block.x - 1; i >= data.block.x - maxSearch; i--) {
                                console.warn(`Checking X= ${i} \nBlock ID = ${data.block.west(Math.abs(i - data.block.x))?.typeId} \nWest Amount = ${Math.abs(i - data.block.x)}\nRedstone Power = ${data.block.west(Math.abs(i - data.block.x))?.getRedstonePower()}\nHas Tag? = ${data.block.west(Math.abs(i - data.block.x))?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.west(Math.abs(i - data.block.x))?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.west(Math.abs(i - data.block.x))?.getRedstonePower())) {
                                    console.warn(`TELEPORTING`)
                                    let newBlock = data.block.west(Math.abs(i - data.block.x))!
                                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z })
                                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() })
                                    return
                                }
                            };
                            break
                        }
                        case Direction.East: {
                            for (let i = data.block.x + 1; i <= data.block.x + maxSearch; i++) {
                                console.warn(`Checking X= ${i} \nBlock ID = ${data.block.east(i - data.block.x)?.typeId} \nEast Amount = ${i - data.block.x}\nRedstone Power = ${data.block.east(i - data.block.x)?.getRedstonePower()}\nHas Tag? = ${data.block.east(i - data.block.x)?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.east(i - data.block.x)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.east(i - data.block.x)?.getRedstonePower())) {
                                    console.warn(`TELEPORTING`)
                                    let newBlock = data.block.east(i - data.block.x)!
                                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z })
                                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() })
                                    return
                                }
                            };
                            break
                        }
                    }
                }
            }
        }
    }
    )
    return;
})