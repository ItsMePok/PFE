import { system, world, EquipmentSlot, GameMode, EntityComponentTypes, ItemComponentTypes, ItemStack, Player, Direction, RawMessage, EntityQueryOptions, Block, ItemType, InputButton, ButtonState } from "@minecraft/server";
import { BlockStateSuperset, MinecraftBlockTypes, MinecraftDimensionTypes, MinecraftEffectTypes, MinecraftEnchantmentTypes, MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { PFEBossEventConfig, PFEBossEventConfigName, PFEBossEventTicks, PFEBossEventUIMainMenu, PFEDefaultBossEventSettings, PFEStartBossEvent, startBossEvents } from "./bossEvents";
import { PFEBoxMiningComponent } from "./boxMining";
import { PokeClosestCardinal, PokeDamageItemUB, PokeDecrementStack, PokeSpawnLootTable } from "./commonFunctions";
import { PokeBirthdays, PokeTimeConfigUIMainMenu, PokeTimeGreeting, PokeTimeZoneOffset } from "./time";
import { PFEBoltBowsComponent } from "./boltbow";
import { PFEDisableConfigOptions, PFEDisableConfigDefault, PFEDisableConfigMainMenu, PFEDisableConfigName } from "./disableConfig";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { ArmorEffectDuration, PFECustomArmorEffectDynamicProperty, PFECustomEffectInfo, startSetEffects } from "./armorEffects";
import { PFECustomCraftQuestsPropertyID, PFECustomFarmQuestsPropertyID, PFECustomKillQuestsPropertyID, PFECustomMineQuestsPropertyID, PFEQuestComponent } from "./quests";
import ComputersCompat, { initExampleStickers } from "./addonCompatibility/jigarbov";
import { PFEWaypointComponent } from "./waypoints";
import { PFEUpgradeableComponent } from "./upgrades";
const currentVersion = 102950 // PFE Version (ex: 102950 = v1.2.95)


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
    const PostState = <keyof BlockStateSuperset>'poke:post_bit'
    const NorthState = <keyof BlockStateSuperset>'pfe:wall_n'
    const SouthState = <keyof BlockStateSuperset>'pfe:wall_s'
    const EastState = <keyof BlockStateSuperset>'pfe:wall_e'
    const WestState = <keyof BlockStateSuperset>'pfe:wall_w'
    const AboveState = <keyof BlockStateSuperset>'poke:connected_above'
    const BelowState = <keyof BlockStateSuperset>'poke:connected_below'
    if (data.permutation.getState(PostState) == undefined) return;

    if (Permutation.getState(NorthState) == true) {
        PostCheckNorth = true
    }
    if (Permutation.getState(SouthState) == true) {
        PostCheckSouth = true
    }
    if (Permutation.getState(EastState) == true) {
        PostCheckEast = true
    }
    if (Permutation.getState(WestState) == true) {
        PostCheckWest = true
    }
    if ((PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == false)) Post = true;
    if ((PostCheckNorth == true && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == false)) Post = true;
    if ((PostCheckNorth == false && PostCheckSouth == true && PostCheckEast == false && PostCheckWest == false)) Post = true;
    if ((PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == true && PostCheckWest == false)) Post = true;
    if ((PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == true)) Post = true;
    if ((PostCheckNorth && PostCheckEast) || (PostCheckNorth && PostCheckWest) || (PostCheckSouth && PostCheckEast) || (PostCheckSouth && PostCheckWest)) Post = true;

    if (Post) {
        if (Permutation.getState(PostState) === undefined) return;
        UpdatePost(data, true)
    } else {
        if (Permutation.getState(PostState) === undefined) return;
        UpdatePost(data, false)
    }
}
function UpdatePost(block: Block, value: boolean, up?: boolean) {
    const PostState = <keyof BlockStateSuperset>'poke:post_bit'
    const NorthState = <keyof BlockStateSuperset>'pfe:wall_n'
    const SouthState = <keyof BlockStateSuperset>'pfe:wall_s'
    const EastState = <keyof BlockStateSuperset>'pfe:wall_e'
    const WestState = <keyof BlockStateSuperset>'pfe:wall_w'
    const AboveState = <keyof BlockStateSuperset>'poke:connected_above'
    const BelowState = <keyof BlockStateSuperset>'poke:connected_below'
    if (!value) {
        let Post = false
        let PostCheckNorth = false
        let PostCheckSouth = false
        let PostCheckEast = false
        let PostCheckWest = false
        if (block.permutation.getState(NorthState) == true) {
            PostCheckNorth = true
        }
        if (block.permutation.getState(SouthState) == true) {
            PostCheckSouth = true
        }
        if (block.permutation.getState(EastState) == true) {
            PostCheckEast = true
        }
        if (block.permutation.getState(WestState) == true) {
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
            block.setPermutation(block.permutation.withState(PostState, true))
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
    block.setPermutation(block.permutation.withState(PostState, value))
}

//Custom Component Registry & Initial Setup
system.beforeEvents.startup.subscribe(data => {
    data.blockComponentRegistry.registerCustomComponent(
        "poke_pfe:cycle_color", {
        onPlayerInteract(data, component) {
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            const ColorState = <keyof BlockStateSuperset>`pfe:color`
            let light_color = <number>data.block.permutation.getState(ColorState)
            let sound_pitch = 1 + light_color / 10
            //resets if at the maximum (15)
            if (data.block.permutation.getState(ColorState) == 15) {
                //set pfe:color state to default (0)
                data.block.setPermutation(data.block.permutation.withState(ColorState, 0))
                //play sound
                data.block.dimension.runCommand(`playsound block.copper_bulb.turn_on @a  ${block_location} 1 ${sound_pitch}`)
                ComputersCompat.addStat(`bulb_color_changes`, 1);
                return;
            }
            //Adds 1 to the current state of pfe:color
            else {
                //set pfe:color state to current +1
                data.block.setPermutation(
                    data.block.permutation.withState(ColorState, light_color + 1))
                //play sound
                data.block.dimension.runCommand(`playsound block.copper_bulb.turn_on @a ${block_location} 1 ${sound_pitch}`)
                ComputersCompat.addStat(`bulb_color_changes`, 1);
                return;
            }
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke_pfe:slab_loot", {
        onPlayerBreak(data, component) {
            const block_location = data.block.location
            const gm = data.player?.getGameMode()
            const blockId = data.brokenBlockPermutation.type.id
            const DoubleState = <keyof BlockStateSuperset>'poke:double'
            const blockState = data.brokenBlockPermutation.getState(DoubleState)
            if (gm == GameMode.Survival) {
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
    data.itemComponentRegistry.registerCustomComponent(
        "poke:timeConfig", {
        onUse(data, componentInfo) {
            PokeTimeConfigUIMainMenu(data.source)
        }
    }
    )

    data.itemComponentRegistry.registerCustomComponent(
        `poke-pfe:identifier`, {
        onUseOn(data, componentInfo) {
            if (data.source.typeId == MinecraftEntityTypes.Player) {
                const player = <Player>data.source
                player.sendMessage({ translate: `translation.poke-pfe:identifierMessage`, with: [data.block.typeId] })
            }
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        `poke:boltbow`, new PFEBoltBowsComponent()
    )
    data.itemComponentRegistry.registerCustomComponent(
        "poke:boss_event", {
        onUse(data, componentInfo) {
            let options: PFEDisableConfigOptions = JSON.parse(world.getDynamicProperty(PFEDisableConfigName)!.toString())
            if (!options.bounty) return;
            if (PFEStartBossEvent() == 0) {
                data.source.sendMessage({ translate: `translation.poke:bossEventNoSpawnError` })
                data.source.playSound(`note.didgeridoo`, { pitch: 0.825 })
                return
            };
            if (data.source.getGameMode() == GameMode.Creative) return;

            data.source.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, PokeDecrementStack(data.itemStack!))
        }
    }
    )

    data.itemComponentRegistry.registerCustomComponent(
        'poke:veinMiner', {
        onMineBlock(data, component) {
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
        onMineBlock(data, component) {
            PokeDamageItemUB(data.itemStack!, undefined, data.source, EquipmentSlot.Mainhand)
            return;
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        "poke:shootProjectile", {
        onUse(data, component) {
            if (data.itemStack == undefined) return;
            if (data.itemStack.typeId == "poke:nuke_ring") {
                let options: PFEDisableConfigOptions = JSON.parse(world.getDynamicProperty(PFEDisableConfigName)!.toString())
                if (!options.nukeRing) return;
            }
            const headLocate = data.source.getHeadLocation();
            //Projectile shooters. projectile id defined in a tag on the item
            const pTag = data.itemStack.getTags();
            const angle = data.source.getViewDirection();
            const projEntity = data.source.dimension.spawnEntity('' + pTag, headLocate);
            const projComp = projEntity.getComponent(EntityComponentTypes.Projectile);
            if (!projComp) return;
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
        onHitEntity(data, component) {
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
        onConsume(data, component) {
            switch (data.itemStack.typeId) {
                case 'poke:xp_vial': { data.source.runCommand("xp 160 @s"); return };
                case 'poke:cobalt_potion': { data.source.addEffect(MinecraftEffectTypes.NightVision, 3600); data.source.addEffect(MinecraftEffectTypes.Regeneration, 2400) }
                case 'poke:cobalt_soup': { data.source.addEffect(MinecraftEffectTypes.NightVision, 2400, { showParticles: false }); return };
                case 'poke:root_beer': { data.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4, }); return };
                case 'poke:pumpkin_spice': { data.source.addEffect(MinecraftEffectTypes.Invisibility, 600); data.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4, }); return };
                case 'poke:crimson_sporeshroom_stew': { data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200); return };
                case 'poke:warped_sporeshroom_stew': { data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200); return };
                case 'poke:hellish_soup': { data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200); return };
                case 'poke:nebula_noodles': { data.source.addEffect(MinecraftEffectTypes.Strength, 600, { amplifier: 7, }); return };
                case 'poke:milk_bottle': { data.source.runCommand("effect @s clear"); return };
                case 'poke:demonic_potion': { data.source.runCommand("function poke/pfe/demonic_potion"); return };
                case 'poke:hellish_potion': { data.source.runCommand("function poke/pfe/hellish_potion"); return };
                case 'poke:nebula_potion': { data.source.runCommand("function poke/pfe/nebula_potion"); return };
                case 'poke:void_potion': { data.source.runCommand("function poke/pfe/void_potion"); return };
                case 'poke:death_potion': { data.source.kill(); return };
                case 'poke:rotten_chicken': { data.source.addEffect(MinecraftEffectTypes.Nausea, 400); return };
                case 'poke:golden_chicken': { data.source.addEffect(MinecraftEffectTypes.VillageHero, 400, { amplifier: 1, }); return };
                case 'poke:banished_star_x10': { data.source.runCommand("damage @a[r=100] 32767000 entity_attack entity @s"); return };
                case 'poke:banished_star_x9': { data.source.runCommand("damage @s 32767000 entity_attack"); return };
            }
            return;
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        "poke_pfe:config", {
        onUse(data, componentInfo) {
            if ((data.source.getGameMode() == GameMode.Creative) || data.source.hasTag(`poke:config`)) {
                let UI = new ActionFormData()
                UI.button({ translate: `translation.poke_pfe.bossEventConfig` }, `textures/poke/common/spawn_enabled`)
                UI.button({ translate: `translation.poke_pfe.disableConfig` }, `textures/poke/common/blacklist_add`)
                UI.button({ translate: `%poke_pfe.miscOptions` }, `textures/poke/common/more_options`)
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
                        return;
                    } else selection++
                    if (response.selection == selection) {
                        let UI = new ModalFormData()
                        UI.title({ translate: `%poke_pfe.miscOptions` })
                        UI.label({ translate: `%poke_pfe.setEffects` })
                        UI.divider()
                        UI.slider({ translate: `%poke_pfe.effectDuration` }, 1, 30, { valueStep: 1, tooltip: { translate: `%poke_pfe.effectDuration.tooltip` }, defaultValue: Number(world.getDynamicProperty("poke_pfe:setEffectDuration") ?? ArmorEffectDuration) / 20 })
                        UI.slider({ translate: `%poke_pfe.applyInterval` }, 1, 10, { valueStep: 1, tooltip: { translate: `%poke_pfe.applyInterval.tooltip` }, defaultValue: Number(world.getDynamicProperty("poke_pfe:setEffectInterval") ?? 1) / 20 })
                        UI.show(data.source).then(response => {
                            if (response.canceled) return;
                            console.warn(JSON.stringify(response.formValues))
                            world.setDynamicProperty("poke_pfe:setEffectDuration", Number(response.formValues?.at(2) ?? ArmorEffectDuration / 20) * 20)
                            world.setDynamicProperty("poke_pfe:setEffectInterval", (Number(response.formValues?.at(3) ?? 1)) * 20)
                            const intervalId = <number | undefined>world.getDynamicProperty("poke_pfe:setEffectIntervalId")
                            console.warn(intervalId)
                            if (intervalId) {
                                system.runInterval
                                system.clearRun(intervalId)
                                world.setDynamicProperty("poke_pfe:setEffectIntervalId", startSetEffects())
                            }

                        })
                        return;
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
                UI.show(data.source).then(response => {
                    return
                })
                return
            }
        }
    }
    )
    data.itemComponentRegistry.registerCustomComponent(
        "poke:cc_dodge", {
        onUse(data, componentInfo) {
            if (data.itemStack === undefined) return;
            const cooldownComponent = data.itemStack.getComponent(ItemComponentTypes.Cooldown)
            const equippableComponent = data.source.getComponent(EntityComponentTypes.Equippable)
            const moveDir = data.source.getVelocity()
            var amount = data.itemStack.amount
            data.source.spawnParticle('minecraft:wind_explosion_emitter', data.source.location)
            //console.warn(moveDirX+' || '+moveDirY+' || '+moveDirZ)
            data.source.applyKnockback({ x: moveDir.x * 5, z: moveDir.z * 5 }, moveDir.y + 0.5);
            //data.source.applyKnockback(moveDir.x, moveDir.z, 5, moveDir.y + 0.5);
            data.source.playSound('component.jump_to_block');
            if (data.source.getGameMode() == GameMode.Creative) return;
            cooldownComponent?.startCooldown(data.source)
            if (amount <= 1) {
                equippableComponent?.setEquipment(EquipmentSlot.Mainhand, undefined)
                return;
            }
            equippableComponent?.setEquipment(EquipmentSlot.Mainhand, new ItemStack(data.itemStack.typeId, amount - 1))
            return
        }
    }
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke:cc_bowAim", {
        onUse(data, component) {

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
        onUse(data, component) {
            const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] })
            var cPlayersLength = cPlayers.length;
            //data.source.playAnimation('third_person_crossbow_equipped',{stopExpression:'!q.is_using_item',controller:'pfe-controller.animation.poke_pfe.crossbow2'})//Hand charging for everyone else
            //data.source.playAnimation('waffle',{stopExpression:'!q.is_using_item',controller:'pfe-controller.animation.poke_pfe.crossbow2'})
            data.source.playAnimation('animation.player.first_person.crossbow_equipped', { stopExpression: '!q.is_using_item', players: [data.source] }) //Hand charging movement
            for (var i = cPlayersLength; i > 0; i--) {
                data.source.playAnimation('third_person_crossbow_equipped', { stopExpression: '!q.is_using_item', players: [cPlayers[i - 1]] })//Hand charging for everyone else
            }
            return;
        }
    }
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke_pfe:spawn_entity", {
        onUseOn(data, componentInfo) {
            type spawnEntityComponentInfo = {
                entity: string,
            }
            const component = <spawnEntityComponentInfo>componentInfo.params
            if (data.itemStack.typeId == "poke:wither_spawner") {
                let options: PFEDisableConfigOptions = JSON.parse(world.getDynamicProperty(PFEDisableConfigName)!.toString())
                if (!options.witherSpawner) return;
            }

            const player = <Player>data.source
            if (player.typeId != MinecraftEntityTypes.Player) return;
            console.warn(`Face Location: ${JSON.stringify(data.faceLocation)}`)
            const blockFace = data.blockFace
            let faceLocX = data.faceLocation.x
            let faceLocY = data.faceLocation.y
            let faceLocZ = data.faceLocation.z
            var amount = data.itemStack.amount

            const equippableComponent = data.source.getComponent(EntityComponentTypes.Equippable)
            const vec3 = {
                x:
                    data.block.x +
                    (data.block.x == Math.abs(data.block.x) ? -faceLocX : faceLocX),
                y:
                    (blockFace == Direction.Up ? 1 : 0) +
                    data.block.y +
                    (data.block.y == Math.abs(data.block.y) ? -faceLocY : faceLocY),
                z:
                    data.block.z +
                    (data.block.z == Math.abs(data.block.z) ? -faceLocZ : faceLocZ)
            };
            player.dimension.spawnEntity(component.entity, vec3)
            if (player.getGameMode() == GameMode.Creative) return;
            if (amount <= 1) {
                equippableComponent?.setEquipment(EquipmentSlot.Mainhand, undefined)
                return;
            }
            equippableComponent?.setEquipment(EquipmentSlot.Mainhand, new ItemStack(data.itemStack.typeId, amount - 1))
            return
        }
    }
    );



    data.itemComponentRegistry.registerCustomComponent(
        "poke-pfe:upgrader", {
        onUseOn(data, component) {
            interface PFEUpgraderComponentInfo {
                canUpgrade: string[]
            }
            /*
            \"\",

            poke-pfe:UpgraderInfo:{\"canUpgrade\":[\"poke:carved_melon\",\"poke:gilded_carved_melon\",\"minecraft:pumpkin\",\"minecraft:melon_block\",\"poke:gilded_melon\",\"minecraft:brown_mushroom_block",\"minecraft:red_mushroom_block\"]}:poke-pfe:UpgraderInfoEnd
            */
            let tagData = data.itemStack.getTags().toString()
            let componentInfo: PFEUpgraderComponentInfo = JSON.parse(tagData.substring(tagData.indexOf(`poke-pfe:UpgraderInfo:`), tagData.lastIndexOf(`:poke-pfe:UpgraderInfoEnd`)).substring(22))
            //console.warn(JSON.stringify(componentInfo))
            let multi = 1
            if (componentInfo.canUpgrade.includes(data.block.typeId)) {
                const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
                const itemIds = data.itemStack.typeId
                const itemId = itemIds.substring(5)
                data.source.runCommand(`execute positioned ${block_location} run function poke/pfe/${itemId}`)
            } else {
                multi = 0
            }
            PokeDamageItemUB(data.itemStack, multi, data.source, EquipmentSlot.Mainhand)
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:trapdoor_event", {
        onPlayerInteract(data, component) {
            const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`
            const OpenState = <keyof BlockStateSuperset>'poke:trapdoor_open'
            if (data.block.permutation.hasTag('pfe_trapdoor_open') == true) {
                data.block.setPermutation(data.block.permutation.withState(OpenState, 'no'))
                data.block.dimension.playSound(`open.iron_trapdoor`, data.block.center())
                return;
            }
            else {
                data.block.setPermutation(data.block.permutation.withState(OpenState, 'yes'))
                data.block.dimension.playSound(`close.iron_trapdoor`, data.block.center())
                return;
            }
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:fortune", {
        onPlayerBreak(data, component) {
            const equippableComponent = data.player?.getComponent(EntityComponentTypes.Equippable)
            if (equippableComponent === undefined) return;
            if (!equippableComponent.getEquipment(EquipmentSlot.Mainhand)?.hasComponent(ItemComponentTypes.Enchantable)) return;
            const enchantableComponent = equippableComponent.getEquipment(EquipmentSlot.Mainhand)?.getComponent(ItemComponentTypes.Enchantable)
            if (!enchantableComponent?.hasEnchantment(MinecraftEnchantmentTypes.Fortune)) return;
            let fortuneLevel = enchantableComponent.getEnchantment(MinecraftEnchantmentTypes.Fortune)!.level
            let rng = Math.round(Math.random())
            //console.warn(rng)
            const blockLocation = `${data.block.x} ${data.block.y} ${data.block.z}`
            const blockId = data.brokenBlockPermutation.type.id.substring(5)
            if (data.player?.getGameMode() == GameMode.Survival) {
                if (fortuneLevel >= 3) {
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    if (rng == 0) return;
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    return;
                }
                if (fortuneLevel == 2) {
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    if (rng == 0) return;
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    return;
                }
                if (fortuneLevel == 1) {
                    if (rng == 0) return;
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`)
                    return;
                }
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke_pfe:can_double_slab", {
        onPlayerInteract(data, component) {
            if (!data.player) return;
            const DoubleState = <keyof BlockStateSuperset>'poke:double'
            if (data.block.permutation.getState(DoubleState) == true) return;
            const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`
            const slabId = data.block.typeId
            const equippableComponent = data.player.getComponent(EntityComponentTypes.Equippable)
            const mainhand: ItemStack | undefined = equippableComponent?.getEquipment(EquipmentSlot.Mainhand)
            if (mainhand != undefined) {
                if (mainhand.typeId == slabId && ((data.block.permutation.getState('minecraft:vertical_half') == "bottom" && data.face == Direction.Up) || (data.block.permutation.getState('minecraft:vertical_half') == "top" && data.face == Direction.Down)) && data.block.permutation.getState(DoubleState) == false) {
                    var itemStackAmount = mainhand.amount - 1
                    data.block.setPermutation(data.block.permutation.withState(DoubleState, true))
                    data.block.dimension.playSound(`use.stone`, data.block.center())
                    if (data.player?.getGameMode() == GameMode.Creative) return;
                    if (itemStackAmount <= 0) {
                        equippableComponent?.setEquipment(EquipmentSlot.Mainhand, undefined)
                        return;
                    }
                    equippableComponent?.setEquipment(EquipmentSlot.Mainhand, new ItemStack(slabId, itemStackAmount))
                    return;
                }
                else return;
            }
            return;
        }
    }
    );

    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_phantomic_conduit", {
        onTick(data, component) {
            const ActiveState = <keyof BlockStateSuperset>'pfe:active'
            var block_location_x = data.block.x
            var block_location_y = data.block.y
            var block_location_z = data.block.z
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1))
                data.dimension.runCommand('execute positioned ' + block_location_x + ' ' + block_location_y + ' ' + block_location_z + ' as @e[r=50,family=phantom] run damage @s 20')
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_da_conduit", {
        onTick(data, component) {
            const ActiveState = <keyof BlockStateSuperset>'pfe:active'
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1))
                data.dimension.runCommand('execute positioned ' + block_location + ' as @e[r=50,family=pfe:demonic_allay] run damage @s 20')
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_cobble_gen", {
        onTick(data, component) {
            const ActiveState = <keyof BlockStateSuperset>'pfe:active'
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1))
                if (data.block.above()?.typeId != MinecraftBlockTypes.Air) return;
                data.block.above()?.setType('minecraft:cobblestone')
                //data.dimension.runCommand('execute positioned '+block_location_x+' '+block_location_y+' '+block_location_z+' if block ~ ~1 ~ air run setblock ~ ~1 ~ cobblestone')
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_cobbler", {
        onTick(data, component) {
            const ActiveState = <keyof BlockStateSuperset>'pfe:active'
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1))
                data.dimension.runCommand(`execute positioned ${block_location} run structure load poke:cobblestone_item ~ ~-1 ~`)
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_block_breaker", {
        onTick(data, component) {
            const ActiveState = <keyof BlockStateSuperset>'pfe:active'
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1))
                data.dimension.runCommand(`execute positioned ${block_location} unless block ~ ~-1 ~ bedrock run setblock ~ ~-1 ~ air destroy`)
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_dirter", {
        onTick(data, component) {
            const ActiveState = <keyof BlockStateSuperset>'pfe:active'
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1))
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
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_duster", {
        onTick(data, component) {
            const ActiveState = <keyof BlockStateSuperset>'pfe:active'
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1))
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
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke_pfe:magnet_block", {
        onTick(data, component) {
            const ActiveState = <keyof BlockStateSuperset>'pfe:active'
            let blockY = (data.block.permutation.getState(`minecraft:vertical_half`) == `top`) ? data.block.center().y - 0.5 : data.block.center().y + 0.5
            const block_location = `${data.block.x} ${blockY} ${data.block.z}`
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1))
                data.dimension.runCommand(`execute positioned ${block_location} as @e[type=item,r=10] run tp @s ${block_location}`)
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_calibrate", {
        onPlayerInteract(data, component) {
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
            data.dimension.playSound('poke_pfe.calibrate', data.block.center())
            ComputersCompat.addStat(`blocks_calibrated`, 1)
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_CaliBlockBreaker", {
        onTick(data, component) {
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            const ActiveState = <keyof BlockStateSuperset>'pfe:active'
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1))
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
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_CaliCobbleGen", {
        onTick(data, component) {
            const ActiveState = <keyof BlockStateSuperset>'pfe:active'
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1))
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_east') {
                    if (data.block.east()?.typeId != MinecraftBlockTypes.Air) return;
                    data.block.east()?.setType('minecraft:cobblestone')
                    return;
                }
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_west') {
                    if (data.block.west()?.typeId != MinecraftBlockTypes.Air) return;
                    data.block.west()?.setType('minecraft:cobblestone')
                    return;
                }
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_south') {
                    if (data.block.south()?.typeId != MinecraftBlockTypes.Air) return;
                    data.block.south()?.setType('minecraft:cobblestone')
                    return;
                }
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_north') {
                    if (data.block.north()?.typeId != MinecraftBlockTypes.Air) return;
                    data.block.north()?.setType('minecraft:cobblestone')
                    return;
                }
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_up') {
                    if (data.block.above()?.typeId != MinecraftBlockTypes.Air) return;
                    data.block.above()?.setType('minecraft:cobblestone')
                    return;
                }
                if (data.block.typeId == 'poke:calibrated_cobblestone_generator_down') {
                    if (data.block.below()?.typeId != MinecraftBlockTypes.Air) return;
                    data.block.below()?.setType('minecraft:cobblestone')
                    return;
                }
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0))
                return;
            }
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:crops", {
        onRandomTick(data, component) {
            const GrowthStageState = <keyof BlockStateSuperset>'poke:growth_stage'
            var growth_state = <number>data.block.permutation.getState(GrowthStageState)
            var growth_stage = growth_state + 1
            if (growth_state != undefined || 6) {
                data.block.setPermutation(data.block.permutation.withState(GrowthStageState, growth_stage))
                return;
            }
            return;
        },
        onPlayerInteract(data, component) {

            const equippableComponent = data.player?.getComponent(EntityComponentTypes.Equippable)
            const mainhandItem = equippableComponent?.getEquipment(EquipmentSlot.Mainhand)
            const GrowthStageState = <keyof BlockStateSuperset>'poke:growth_stage'
            if (mainhandItem === undefined) return;
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`
            let growth_state = <number>data.block.permutation.getState(GrowthStageState)
            let growth_stage: number = growth_state + Math.round(Math.random() * 3)
            var itemAfterUse = mainhandItem.amount
            var itemAfterUse1 = itemAfterUse - 1
            if (growth_stage > 6) {
                growth_stage = 6
            }
            if (mainhandItem.typeId == MinecraftItemTypes.BoneMeal && growth_state != 6) {
                data.block.setPermutation(data.block.permutation.withState(GrowthStageState, growth_stage))
                data.dimension.runCommand("playsound item.bone_meal.use @a " + block_location)
                data.dimension.runCommand("particle minecraft:crop_growth_emitter " + block_location)
                if (data.player?.getGameMode() != GameMode.Creative) {
                    if (itemAfterUse1 == 0) {
                        data.player?.runCommand('clear @s bone_meal 0 1')
                        return;
                    }
                    equippableComponent?.setEquipment(EquipmentSlot.Mainhand, new ItemStack(mainhandItem.typeId, itemAfterUse1))
                    return;
                }
                return
            }
            return;
        }
    }
    );

    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_lava_sponge", {
        onPlace(data, component) {
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
            ComputersCompat.addStat("lava_sponged", 1)
            return;
        },
        onTick(data, component) {
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
            ComputersCompat.addStat("lava_sponged", 1)
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke_pfe:molten_lava_sponge", {
        onRandomTick(data, component) {
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
        onPlayerInteract(data, component) {
            if (!data.player) return
            const slabId = data.block.typeId
            const mainhand = data.player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Mainhand)
            const DoubleState = <keyof BlockStateSuperset>'poke:double'
            const options: EntityQueryOptions = {
                type: 'poke:seat',
                location: data.block.center(),
                maxDistance: 0.24
            };
            if (mainhand?.typeId != slabId && !data.player?.isSneaking) {
                if (data.block.permutation.getState('minecraft:vertical_half') == 'bottom' && data.block.permutation.getState(DoubleState) == false) {
                    if (data.dimension.getEntities(options).length > 0) {
                        return;
                    }
                    else {
                        data.dimension.spawnEntity('poke:seat', data.block.center()).getComponent('minecraft:rideable')?.addRider(data.player)
                        ComputersCompat.addStat("slabs_sat_on", 1)
                        return;
                    }
                }
            }
            return;
        }
    }
    );

    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_block_interact", {
        onPlayerInteract(data, component) {
            switch (data.block.typeId) {
                case 'poke:listener_trophy': { data.player?.playMusic('poke_pfe.they_listen', { fade: 5 }); return; }
                case 'poke:furnace_golem_trophy': { data.player?.playMusic('poke.record.pigstep', { fade: 5 }); return; }
                case 'poke:cobalt_golem_block': { data.dimension.spawnEntity('poke:cobalt_golem', data.block.location); data.block.setType(MinecraftBlockTypes.Air); return; }
                    return;
            }
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_8ball", {
        onPlayerInteract(data, component) {
            var RNG = Math.floor(Math.random() * 19)
            //console.warn(RNG)
            data.player?.sendMessage({ rawtext: [{ translate: `translation.poke:8ball${RNG}` }] })
            return;
        }
    }
    );
    data.blockComponentRegistry.registerCustomComponent(
        "poke:cc_wall", {
        onPlace(data, component) {
            const NorthBlock = data.block.north()
            const SouthBlock = data.block.south()
            const EastBlock = data.block.east()
            const WestBlock = data.block.west()
            const AboveBlock = data.block.above()
            const BelowBlock = data.block.below()
            const NorthState = <keyof BlockStateSuperset>'pfe:wall_n'
            const SouthState = <keyof BlockStateSuperset>'pfe:wall_s'
            const EastState = <keyof BlockStateSuperset>'pfe:wall_e'
            const WestState = <keyof BlockStateSuperset>'pfe:wall_w'
            const AboveState = <keyof BlockStateSuperset>'poke:connected_above'
            const BelowState = <keyof BlockStateSuperset>'poke:connected_below'
            if (!NorthBlock || !SouthBlock || !EastBlock || !WestBlock) return;
            if (!NorthBlock.isAir && !NorthBlock.isLiquid) {
                data.block.setPermutation(data.block.permutation.withState(NorthState, true));
                if (NorthBlock.permutation.getState(SouthState) != undefined) {
                    NorthBlock.setPermutation(NorthBlock.permutation.withState(SouthState, true))
                    Post(NorthBlock, true, true)
                }
            } else { data.block.setPermutation(data.block.permutation.withState(NorthState, false)) };
            if (!SouthBlock.isAir && !SouthBlock.isLiquid) {
                data.block.setPermutation(data.block.permutation.withState(SouthState, true));
                if (SouthBlock.permutation.getState(NorthState) != undefined) {
                    SouthBlock.setPermutation(SouthBlock.permutation.withState(NorthState, true))
                    Post(SouthBlock, true, true)
                }
            } else { data.block.setPermutation(data.block.permutation.withState(SouthState, false)) };
            if (!EastBlock.isAir && !EastBlock.isLiquid) {
                data.block.setPermutation(data.block.permutation.withState(EastState, true));
                if (EastBlock.permutation.getState(WestState) != undefined) {
                    EastBlock.setPermutation(EastBlock.permutation.withState(WestState, true))
                    Post(EastBlock, true, true)
                }
            } else { data.block.setPermutation(data.block.permutation.withState(EastState, false)) };

            if (!WestBlock.isAir && !WestBlock.isLiquid) {
                data.block.setPermutation(data.block.permutation.withState(WestState, true));
                if (WestBlock.permutation.getState(EastState) != undefined) {
                    WestBlock.setPermutation(WestBlock.permutation.withState(EastState, true))
                    Post(WestBlock, true, true)
                }
            } else { data.block.setPermutation(data.block.permutation.withState(WestState, false)) };
            if (BelowBlock) {
                if (!BelowBlock.isAir && !BelowBlock.isLiquid) {
                    data.block.setPermutation(data.block.permutation.withState(BelowState, true));
                    if (BelowBlock.permutation.getState(AboveState) != undefined) {
                        BelowBlock.setPermutation(BelowBlock.permutation.withState(AboveState, true))
                    }
                } else { data.block.setPermutation(data.block.permutation.withState(BelowState, false)) };
            }
            if (AboveBlock) {
                if (AboveBlock && !AboveBlock.isAir && !AboveBlock.isLiquid) {
                    data.block.setPermutation(data.block.permutation.withState(AboveState, true));
                    if (AboveBlock.permutation.getState(BelowState) != undefined) {
                        AboveBlock.setPermutation(AboveBlock.permutation.withState(BelowState, true))
                    }
                } else { data.block.setPermutation(data.block.permutation.withState(AboveState, false)) };
            }
            Post(data.block, true, true)
            return;
        },
        onPlayerBreak(data, component) {
            const NorthBlock = data.block.north()
            const SouthBlock = data.block.south()
            const EastBlock = data.block.east()
            const WestBlock = data.block.west()
            const AboveBlock = data.block.above()
            const BelowBlock = data.block.below()
            const NorthState = <keyof BlockStateSuperset>'pfe:wall_n'
            const SouthState = <keyof BlockStateSuperset>'pfe:wall_s'
            const EastState = <keyof BlockStateSuperset>'pfe:wall_e'
            const WestState = <keyof BlockStateSuperset>'pfe:wall_w'
            const AboveState = <keyof BlockStateSuperset>'poke:connected_above'
            const BelowState = <keyof BlockStateSuperset>'poke:connected_below'
            if (!NorthBlock || !SouthBlock || !EastBlock || !WestBlock || !AboveBlock || !BelowBlock) return;
            if (NorthBlock.permutation.getState(SouthState) != undefined) {
                NorthBlock.setPermutation(NorthBlock.permutation.withState(SouthState, false))
                Post(NorthBlock, true, true)
            }
            if (SouthBlock.permutation.getState(NorthState) != undefined) {
                SouthBlock.setPermutation(SouthBlock.permutation.withState(NorthState, false))
                Post(SouthBlock, true, true)
            }
            if (EastBlock.permutation.getState(WestState) != undefined) {
                EastBlock.setPermutation(EastBlock.permutation.withState(WestState, false))
                Post(EastBlock, true, true)
            }
            if (WestBlock.permutation.getState(EastState) != undefined) {
                WestBlock.setPermutation(WestBlock.permutation.withState(EastState, false))
                Post(WestBlock, true, true)
            }
            if (AboveBlock.permutation.getState(AboveState) != undefined) {
                AboveBlock.setPermutation(AboveBlock.permutation.withState(BelowState, false))
                Post(AboveBlock, true, false)
            }
            if (BelowBlock.permutation.getState(BelowState) != undefined) {
                BelowBlock.setPermutation(BelowBlock.permutation.withState(AboveState, false))
                Post(BelowBlock, false, true)
            }
            return;
        }
    }
    );

    data.blockComponentRegistry.registerCustomComponent(
        "poke_pfe:fisher", {
        onRandomTick(data, component) {
            const PFEFisherComponentInfo = {
                baitBlockState: <keyof BlockStateSuperset>"poke_pfe:bait",
                baitStates: [4, 3, 2, 1, 0]
            }
            if (data.block.isWaterlogged && (data.block.permutation.getState(PFEFisherComponentInfo.baitBlockState) != 0)) {
                data.block.setPermutation(data.block.permutation.withState(PFEFisherComponentInfo.baitBlockState, Math.max(Number(data.block.permutation.getState(PFEFisherComponentInfo.baitBlockState)) - 1, 0)))
                data.block.dimension.playSound(`poke_pfe.fisher.catch`, data.block.center())
                ComputersCompat.addStat("fisher_catches", 1)
            }
        },
        onPlayerInteract(data, component) {
            const PFEFisherComponentInfo = {
                baitBlockState: <keyof BlockStateSuperset>"poke_pfe:bait",
                baitStates: [4, 3, 2, 1, 0]
            }
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
        onPlayerBreak(data, component) {
            const PFEFisherComponentInfo = {
                baitBlockState: <keyof BlockStateSuperset>"poke_pfe:bait",
                baitStates: [4, 3, 2, 1, 0]
            }
            let baitState = data.brokenBlockPermutation.getState(PFEFisherComponentInfo.baitBlockState)
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
        onStepOff(data, component) {
            if (!data.entity) return;
            let player = <Player>data.entity
            if (player.typeId == MinecraftEntityTypes.Player) {
                let maxSearch = 64
                if (player.isJumping) {
                    let viewDirection = player.getViewDirection()
                    //console.warn(`X: ${viewDirection.x}, Y: ${viewDirection.y}, Z: ${viewDirection.z}`)
                    let cardinalDirection = PokeClosestCardinal(viewDirection, "upDown")
                    switch (cardinalDirection.direction) {
                        case Direction.Up: {
                            for (let i = data.block.y + 1; i <= Math.min((data.block.y + maxSearch), data.dimension.heightRange.max); Math.min(i++, data.dimension.heightRange.max)) {
                                //console.warn(`Checking Y= ${i} \nBlock ID = ${data.block.above(i-data.block.y)?.typeId} \nAbove Amount = ${i-data.block.y}\nRedstone Power = ${data.block.above(i-data.block.y)?.getRedstonePower()}\nHas Tag? = ${data.block.above(i-data.block.y)?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.above(i - data.block.y)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.above(i - data.block.y)?.getRedstonePower())) {

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
        onStepOff(data, component) {
            if (!data.entity) return;
            let player = <Player>data.entity
            if (player.typeId == MinecraftEntityTypes.Player) {
                let maxSearch = 64
                if (player.isJumping) {
                    let viewDirection = player.getViewDirection()
                    //console.warn(`X: ${viewDirection.x}, Y: ${viewDirection.y}, Z: ${viewDirection.z}`)
                    let cardinalDirection = PokeClosestCardinal(viewDirection)
                    switch (cardinalDirection.direction) {
                        case Direction.Up: {
                            for (let i = data.block.y + 1; i <= Math.min((data.block.y + maxSearch), data.dimension.heightRange.max); Math.min(i++, data.dimension.heightRange.max)) {
                                //console.warn(`Checking Y= ${i} \nBlock ID = ${data.block.above(i - data.block.y)?.typeId} \nAbove Amount = ${i - data.block.y}\nRedstone Power = ${data.block.above(i - data.block.y)?.getRedstonePower()}\nHas Tag? = ${data.block.above(i - data.block.y)?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.above(i - data.block.y)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.above(i - data.block.y)?.getRedstonePower())) {
                                    player.teleport({ x: data.block.center().x, y: i + 1, z: data.block.center().z })
                                    player.playSound(`mob.endermen.portal`, { location: { x: data.block.x, y: i + 1, z: data.block.z } })
                                    return
                                }
                            };
                            break
                        }
                        case Direction.Down: {
                            for (let i = data.block.y - 1; i >= Math.max((data.block.y - maxSearch), data.dimension.heightRange.min); Math.min(i--, data.dimension.heightRange.min)) {
                                //console.warn(`Checking Y= ${i} \nBlock ID = ${data.block.below(Math.abs(i - data.block.y))?.typeId} \nBelow Amount = ${Math.abs(i - data.block.y)}\nRedstone Power = ${data.block.below(Math.abs(i - data.block.y))?.getRedstonePower()}\nHas Tag? = ${data.block.below(Math.abs(i - data.block.y))?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.below(Math.abs(i - data.block.y))?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.below(Math.abs(i - data.block.y))?.getRedstonePower())) {
                                    player.teleport({ x: data.block.center().x, y: i + 1, z: data.block.center().z })
                                    player.playSound(`mob.endermen.portal`, { location: { x: data.block.x, y: i + 1, z: data.block.z } })
                                    return
                                }
                            };
                            break
                        }
                        case Direction.North: {
                            for (let i = data.block.z - 1; i >= data.block.z - maxSearch; i--) {
                                //console.warn(`Checking Z= ${i} \nBlock ID = ${data.block.north(Math.abs(i - data.block.z))?.typeId} \nNorth Amount = ${Math.abs(i - data.block.z)}\nRedstone Power = ${data.block.north(Math.abs(i - data.block.z))?.getRedstonePower()}\nHas Tag? = ${data.block.north(Math.abs(i - data.block.z))?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.north(Math.abs(i - data.block.z))?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.north(Math.abs(i - data.block.z))?.getRedstonePower())) {
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
                                //console.warn(`Checking Z= ${i} \nBlock ID = ${data.block.south(i - data.block.z)?.typeId} \nSouth Amount = ${i - data.block.z}\nRedstone Power = ${data.block.south(i - data.block.z)?.getRedstonePower()}\nHas Tag? = ${data.block.south(i - data.block.z)?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.south(i - data.block.z)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.south(i - data.block.z)?.getRedstonePower())) {
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
                                //console.warn(`Checking X= ${i} \nBlock ID = ${data.block.west(Math.abs(i - data.block.x))?.typeId} \nWest Amount = ${Math.abs(i - data.block.x)}\nRedstone Power = ${data.block.west(Math.abs(i - data.block.x))?.getRedstonePower()}\nHas Tag? = ${data.block.west(Math.abs(i - data.block.x))?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.west(Math.abs(i - data.block.x))?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.west(Math.abs(i - data.block.x))?.getRedstonePower())) {
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
                                //console.warn(`Checking X= ${i} \nBlock ID = ${data.block.east(i - data.block.x)?.typeId} \nEast Amount = ${i - data.block.x}\nRedstone Power = ${data.block.east(i - data.block.x)?.getRedstonePower()}\nHas Tag? = ${data.block.east(i - data.block.x)?.hasTag(`poke_pfe:elevator`)}`)
                                if (data.block.east(i - data.block.x)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.east(i - data.block.x)?.getRedstonePower())) {
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

    // Updated Components
    data.itemComponentRegistry.registerCustomComponent(
        "poke_pfe:launch_user", {
        onUse(data, componentInfo) {
            if (data.itemStack === undefined) return;
            type LaunchUserComponent = {
                sneaking_stops_this?: boolean,
                grant_effect?: {
                    effect: string,
                    duration?: number
                    amp?: number,
                    particles?: true
                },
                vertical_strength?: number
                horizontal_strength?: number,
                take_durability?: boolean
                trigger_cooldown?: boolean
                spawn_particles?: string[]
                play_sound?: {
                    identifier: string,
                    pitch?: number
                }
            }
            const component = <LaunchUserComponent>componentInfo.params
            if (component.sneaking_stops_this && data.source.isSneaking) return;
            const vierDirection = data.source.getViewDirection();
            const location = data.source.getHeadLocation();
            const cooldownComp = data.itemStack.getComponent(ItemComponentTypes.Cooldown)
            if (component.grant_effect) {
                data.source.addEffect(component.grant_effect?.effect, component.grant_effect?.duration ?? 60, { amplifier: component.grant_effect?.amp ?? 0, showParticles: component.grant_effect.particles ?? false })
            }
            data.source.applyKnockback({ x: vierDirection.x * (component.horizontal_strength ?? 1), z: vierDirection.z * (component.horizontal_strength ?? 1) }, vierDirection.y * (component.vertical_strength ?? 1));
            if (component.spawn_particles) {
                for (let particle of component.spawn_particles) {
                    if (!particle) continue
                    data.source.spawnParticle(particle, location);
                }
            }
            if (component.play_sound) {
                data.source.playSound(component.play_sound.identifier, { pitch: component.play_sound.pitch });
            }
            if (component.trigger_cooldown) {
                cooldownComp?.startCooldown(data.source)
            }
            if (component.take_durability) {
                PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand)
            }
            return;
        }
    }
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke_pfe:run_command", {
        onUse(data, component) {
            if (!data.itemStack) return;
            type runCommandComponentInfo = {
                version?: number,
                can_be_disabled?: boolean,
                command?: string,
                trigger_cooldown?: boolean,
                take_durability?: boolean
            }
            const componentInfo = <runCommandComponentInfo>component.params
            if (componentInfo.can_be_disabled) {
                let options: PFEDisableConfigOptions = JSON.parse(world.getDynamicProperty(PFEDisableConfigName)!.toString()) ?? PFEDisableConfigDefault
                switch (true) {
                    case data.itemStack.typeId == "poke:quantum_teleporter" && options.quantumTeleporter === false: return;
                    case data.itemStack.typeId == "poke:sundial" && options.quantumTeleporter === false: return;
                    case data.itemStack.typeId == "poke:kapow_ring" && options.quantumTeleporter === false: return;
                    default: break;
                }
            }
            componentInfo.command ? data.source.runCommand(componentInfo.command) : undefined
            if (componentInfo.trigger_cooldown) data.itemStack.getComponent(ItemComponentTypes.Cooldown)?.startCooldown(data.source);
            if (componentInfo.take_durability !== false) PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            return;
        }
    }
    );
    data.itemComponentRegistry.registerCustomComponent(
        "poke_pfe:play_music", {
        onUse(data, component) {
            type ComponentInfo = {
                music: string,
                music_volume: number | undefined,
                loop_music: boolean | undefined
                music_fade_amount: number | 2.5,
                trigger_sound: string | "poke_pfe.cassette_activate",
                can_queue: boolean | true,
                display_queue_message: boolean | true,
                queue_message: string | "%poke_pfe.track_queued"
            }
            const componentInfo = <ComponentInfo>component.params
            data.source.playSound(componentInfo.trigger_sound ?? "poke_pfe.cassette_activate")
            if (componentInfo.can_queue != false && data.source.isSneaking) {
                data.source.queueMusic(componentInfo.music, { volume: componentInfo.music_volume ?? undefined, loop: componentInfo.loop_music ?? undefined })
                if (componentInfo.display_queue_message != false) {
                    data.source.sendMessage({ translate: componentInfo.queue_message ?? "%poke_pfe.track_queued" })
                }
                return;
            }
            data.source.playMusic(componentInfo.music, { fade: componentInfo.music_fade_amount ?? 2.5, volume: componentInfo.music_volume ?? undefined, loop: componentInfo.loop_music ?? undefined })
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:upgradeable", new PFEUpgradeableComponent());
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:box_mining", new PFEBoxMiningComponent());
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:quests", new PFEQuestComponent());
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:waypoint_menu", new PFEWaypointComponent());
    // These components exist to allow item.getComponent() to access data from applicable items/blocks
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:set_effects", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:custom_upgrades", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:custom_quests_info", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:incompatible_addons", {});
    return;
})
world.afterEvents.worldLoad.subscribe((data) => {
    world.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify([]))
    world.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify([]))
    world.setDynamicProperty(PFECustomFarmQuestsPropertyID, JSON.stringify([]))
    world.setDynamicProperty(PFECustomCraftQuestsPropertyID, JSON.stringify([]))
    world.setDynamicProperty(PFECustomKillQuestsPropertyID, JSON.stringify([]))
    world.setDynamicProperty(PFECustomArmorEffectDynamicProperty, JSON.stringify([]))
    system.runTimeout(() => {
        PFETimeValidation()
    }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20)

    if (typeof world.getDynamicProperty(PFEDisableConfigName) != "string") {
        world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(PFEDisableConfigDefault))
    }
    const birthdayProperty = world.getDynamicProperty(`poke:birthdays`)
    if (typeof birthdayProperty != "string") world.setDynamicProperty(`poke:birthdays`, `[]`);
    const CustomEventsDynamicProp = world.getDynamicProperty(`poke:customEvents`)
    typeof CustomEventsDynamicProp == "string" ?
        JSON.parse(CustomEventsDynamicProp) ?? world.setDynamicProperty(`poke:customEvents`, `[]`)
        : world.setDynamicProperty(`poke:customEvents`, `[]`)
    //console.warn(`Custom events were invalid; resetting to default (Ignore if this world was just created) || Poke-Calendar`)
    if (typeof world.getDynamicProperty(PFEBossEventConfigName) == "string") {
        let settings: PFEBossEventConfig = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName)!.toString())
        //To prevent errors it will reset the settings to default if a setting was missing/invalid
        if ((typeof settings.ticks != "number") || (typeof settings.furnaceGolem != "object") || (typeof settings.knightling != "object") || (typeof settings.listener != "object") || (typeof settings.zombken != "object") || (typeof settings.miniDemonicAllay != "object") || (typeof settings.necromancer != "object") || (typeof settings.snowman != "object") || (typeof settings.sparky != "object") || (typeof settings.superStriker != "object") || (typeof settings.theLogger != "object")) {
            //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
            world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
        };
    } else {
        //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
        world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings))
    }
    /* Outgoing Addon Compatibility:*/
    initExampleStickers()
    ComputersCompat.init()
    world.setDynamicProperty("poke_pfe:bossEventIntervalId", startBossEvents())
    world.setDynamicProperty("poke_pfe:setEffectIntervalId", startSetEffects())
    system.sendScriptEvent("poke_pfe:dupe_check", `${currentVersion}`)
    console.warn(`Within PFE: ${JSON.stringify(new ItemStack("poke_pfe:custom_data_storage", 1).getComponent(`poke_pfe:incompatible_addons`))}`)
})
const DataStorageDynamicPropertyId = "registered_data_storage_items"
/*Incoming Addon Compatibility/Integrations*/
system.afterEvents.scriptEventReceive.subscribe((data) => {
    switch (data.id) {
        /**
         This will send true (as a string) to the scriptevent defined in the message part 

        example command: `scriptevent poke_pfe:enabled poke_pfe:receive_test`

        - in this case it will send true to poke_pfe:receive_test
         */
        case `poke_pfe:enabled`: {
            world.getDimension(MinecraftDimensionTypes.Overworld).runCommand(`scriptevent ${data.message} true`)
            break;
        }
        /*
        This will be used to have PFE use the item provided as a form of data storage

        What this means is you can use that item's components to import data that would normally be sent via /scriptevent
        */
        case `poke_custom:register_data_storage`: {
            const dynamicProperty = world.getDynamicProperty(DataStorageDynamicPropertyId)
            const registeredItems: string[] = JSON.parse(typeof dynamicProperty == "string" ? dynamicProperty : "[]") ?? []
            world.setDynamicProperty(DataStorageDynamicPropertyId, JSON.stringify(registeredItems.concat(data.message)))
            break;
        }
        /*
        This can be used to add additional presets to the set effects
        */
        case `poke_pfe:add_set_effect_preset`: {
            const currentPresets: PFECustomEffectInfo[] = JSON.parse(world.getDynamicProperty(PFECustomArmorEffectDynamicProperty)!.toString()) ?? []
            let newPresets = currentPresets.concat(JSON.parse(data.message).value) ?? currentPresets
            world.setDynamicProperty(PFECustomArmorEffectDynamicProperty, JSON.stringify(newPresets))
            break;
        }
        /*
        Theses can be used to add quests into PFE's quest system
        see `scripts\quests.ts` for more info 
        */
        case PFECustomMineQuestsPropertyID: {
            const currentQuests: any[] = JSON.parse(world.getDynamicProperty(PFECustomMineQuestsPropertyID)!.toString()) ?? []
            let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests
            world.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify(newQuests))
            break;
        }
        case PFECustomKillQuestsPropertyID: {
            const currentQuests: any[] = JSON.parse(world.getDynamicProperty(PFECustomKillQuestsPropertyID)!.toString()) ?? []
            let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests
            world.setDynamicProperty(PFECustomKillQuestsPropertyID, JSON.stringify(newQuests))
            break;
        }
        case PFECustomFarmQuestsPropertyID: {
            const currentQuests: any[] = JSON.parse(world.getDynamicProperty(PFECustomFarmQuestsPropertyID)!.toString()) ?? []
            let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests
            world.setDynamicProperty(PFECustomFarmQuestsPropertyID, JSON.stringify(newQuests))
        }
        case PFECustomCraftQuestsPropertyID: {
            const currentQuests: any[] = JSON.parse(world.getDynamicProperty(PFECustomCraftQuestsPropertyID)!.toString()) ?? []
            let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests
            world.setDynamicProperty(PFECustomCraftQuestsPropertyID, JSON.stringify(newQuests))
        }
        case (`poke:test`): {
            let item = data.sourceEntity?.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Mainhand)
            item?.setDynamicProperty(`poke:ammo`, JSON.stringify({ v: 2, max: 32, amount: 12, entityId: "poke:galaxy_arrow", id: "poke:galaxy_arrow", upgrades: [{ id: "pfe:capacity", level: 1, maxLevel: undefined }, { id: "pfe:flaming", level: 0, maxLevel: 1 }] }))
            data.sourceEntity?.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, item)
        }
        // This is to check if there are multiple versions of PFE applied to a world at a time
        case ("poke_pfe:dupe_check"): {
            const Version = Number(data.message)
            if (Version < currentVersion) {
                world.sendMessage(`§f[§eWARNING§f] Multiple versions PFE are applied to this world, to avoid any issue: please remove any old versions || §eOld version: §fv${data.message.substring(0, 1)}.${Number(data.message.substring(1, 3))}.${Number(`${data.message}`.substring(3, 5))}${Number(`${data.message}`.substring(5)) != 0 ? `${data.message}`.substring(5) : ""}`)
                console.warn(`Multiple versions PFE found:\n- Old version: ${Version} (v${data.message.substring(0, 1)}.${Number(data.message.substring(1, 3))}.${Number(`${data.message}`.substring(3, 5))}${Number(`${data.message}`.substring(5)) != 0 ? `${data.message}`.substring(5) : ""})\n- Current version: ${currentVersion} (v${`${currentVersion}`.substring(0, 1)}.${Number(`${currentVersion}`.substring(1, 3))}.${Number(`${currentVersion}`.substring(3, 5))}${Number(`${currentVersion}`.substring(5)) != 0 ? `${currentVersion}`.substring(5) : ""})`)
            }
        }
        default: break;
    }
})
