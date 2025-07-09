import { system, world, EquipmentSlot, GameMode, EntityComponentTypes, ItemComponentTypes, ItemStack, Direction, BlockVolume, BlockPermutation, LiquidType } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftEffectTypes, MinecraftEnchantmentTypes, MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { PFEBossEventConfigName, PFEBossEventUIMainMenu, PFEDefaultBossEventSettings, PFEStartBossEvent, startBossEvents } from "./bossEvents";
import { PFEBoxMiningComponent } from "./boxMining";
import { PokeClosestCardinal, PokeDamageItemUB, PokeDecrementStack, PokeSpawnLootTable } from "./commonFunctions";
import { PokeTimeConfigUIMainMenu, PokeTimeGreeting, PokeTimeZoneOffset } from "./time";
import { PFEBoltBowsComponent } from "./boltbow";
import { PFEDisableConfigDefault, PFEDisableConfigMainMenu, PFEDisableConfigName } from "./disableConfig";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { ArmorEffectDuration, PFECustomArmorEffectDynamicProperty, startSetEffects } from "./armorEffects";
import { PFECustomCraftQuestsPropertyID, PFECustomFarmQuestsPropertyID, PFECustomKillQuestsPropertyID, PFECustomMineQuestsPropertyID, PFEQuestComponent } from "./quests";
import ComputersCompat, { initExampleStickers } from "./addonCompatibility/jigarbov";
import { PFEWaypointComponent } from "./waypoints";
import { PFEUpgradeableComponent } from "./upgrades";
import { RecipeBlockComponent } from "./recipeSystems";
const currentVersion = 102960; // PFE Version (ex: 102950 = v1.2.95)
world.afterEvents.playerJoin.subscribe((data => {
    let birthdays = JSON.parse(world.getDynamicProperty(`poke:birthdays`).toString());
    //console.warn(JSON.stringify(birthdays))
    system.runTimeout(() => {
        world.getAllPlayers().forEach((player => {
            //console.warn(`Joined Id ${player.id}, your: ${player.id}`)
            if (player.id == data.playerId) {
                let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player));
                birthdays.forEach((birthday => {
                    var _a;
                    //console.warn(`${birthday.day == currentTime.getDate() && birthday.month == currentTime.getMonth()} Day ${currentTime.getDate()}, Month: ${currentTime.getMonth()}`)
                    if (birthday.day == currentTime.getDate() && birthday.month == currentTime.getMonth()) {
                        let name = { text: birthday.name };
                        if (birthday.style == "dev") {
                            name.translate = `translation.poke:birthdayDev`;
                        }
                        if (birthday.name == player.name) {
                            name.translate = `translation.poke:birthdayOwn`;
                        }
                        else if ((_a = birthday.name) === null || _a === void 0 ? void 0 : _a.endsWith(`s`)) {
                            name.text = `${birthday.name}'`;
                        }
                        else {
                            name.text = `${birthday.name}'s`;
                        }
                        player.sendMessage({ translate: `translation.poke:birthdayAnnounce`, with: { rawtext: [PokeTimeGreeting(currentTime, player, undefined, true), { text: player.name }, name] } });
                    }
                }));
            }
        }));
    }, 600);
}));
function PFEHourTimeDownEvents() {
    let currentTime = new Date(Date.now());
    //Cassette Trader spawning
    //console.warn(`Attempting to spawn cassette trader`)
    let allPlayers = world.getAllPlayers();
    let randomPlayer = allPlayers.at(Math.abs(Math.round(Math.random() * (allPlayers.length - 1))));
    randomPlayer === null || randomPlayer === void 0 ? void 0 : randomPlayer.dimension.spawnEntity('poke:cassette_trader', randomPlayer.location).runCommand(`spreadplayers ~ ~ 30 40 @s ~10`);
}
function PFETimeValidation() {
    let currentTime = new Date(Date.now());
    if (currentTime.getMinutes() == 0) {
        PFEHourTimeDownEvents();
    }
    else {
        system.runTimeout(() => {
            PFETimeValidation();
        }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20);
    }
}
function Post(data, up, down) {
    let Permutation = data.permutation;
    let Post = false;
    let PostCheckNorth = false;
    let PostCheckSouth = false;
    let PostCheckEast = false;
    let PostCheckWest = false;
    const PostState = 'poke:post_bit';
    const NorthState = 'pfe:wall_n';
    const SouthState = 'pfe:wall_s';
    const EastState = 'pfe:wall_e';
    const WestState = 'pfe:wall_w';
    const AboveState = 'poke:connected_above';
    const BelowState = 'poke:connected_below';
    if (data.permutation.getState(PostState) == undefined)
        return;
    if (Permutation.getState(NorthState) == true) {
        PostCheckNorth = true;
    }
    if (Permutation.getState(SouthState) == true) {
        PostCheckSouth = true;
    }
    if (Permutation.getState(EastState) == true) {
        PostCheckEast = true;
    }
    if (Permutation.getState(WestState) == true) {
        PostCheckWest = true;
    }
    if ((PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == false))
        Post = true;
    if ((PostCheckNorth == true && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == false))
        Post = true;
    if ((PostCheckNorth == false && PostCheckSouth == true && PostCheckEast == false && PostCheckWest == false))
        Post = true;
    if ((PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == true && PostCheckWest == false))
        Post = true;
    if ((PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == true))
        Post = true;
    if ((PostCheckNorth && PostCheckEast) || (PostCheckNorth && PostCheckWest) || (PostCheckSouth && PostCheckEast) || (PostCheckSouth && PostCheckWest))
        Post = true;
    if (Post) {
        if (Permutation.getState(PostState) === undefined)
            return;
        UpdatePost(data, true);
    }
    else {
        if (Permutation.getState(PostState) === undefined)
            return;
        UpdatePost(data, false);
    }
}
function UpdatePost(block, value, up) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const PostState = 'poke:post_bit';
    const NorthState = 'pfe:wall_n';
    const SouthState = 'pfe:wall_s';
    const EastState = 'pfe:wall_e';
    const WestState = 'pfe:wall_w';
    const AboveState = 'poke:connected_above';
    const BelowState = 'poke:connected_below';
    if (!value) {
        let Post = false;
        let PostCheckNorth = false;
        let PostCheckSouth = false;
        let PostCheckEast = false;
        let PostCheckWest = false;
        if (block.permutation.getState(NorthState) == true) {
            PostCheckNorth = true;
        }
        if (block.permutation.getState(SouthState) == true) {
            PostCheckSouth = true;
        }
        if (block.permutation.getState(EastState) == true) {
            PostCheckEast = true;
        }
        if (block.permutation.getState(WestState) == true) {
            PostCheckWest = true;
        }
        if ((!PostCheckNorth && !PostCheckSouth && !PostCheckEast && !PostCheckWest))
            Post = true;
        if ((PostCheckNorth && !PostCheckSouth && PostCheckEast == false && !PostCheckWest))
            Post = true;
        if ((!PostCheckNorth && PostCheckSouth && PostCheckEast == false && !PostCheckWest))
            Post = true;
        if ((!PostCheckNorth && !PostCheckSouth && PostCheckEast && !PostCheckWest))
            Post = true;
        if ((!PostCheckNorth && !PostCheckSouth && !PostCheckEast && PostCheckWest))
            Post = true;
        if ((PostCheckNorth && PostCheckEast) || (PostCheckNorth && PostCheckWest) || (PostCheckSouth && PostCheckEast) || (PostCheckSouth && PostCheckWest))
            Post = true;
        if (Post) {
            if (up) {
                if ((_a = block.above()) === null || _a === void 0 ? void 0 : _a.hasTag(`pfe_wall`)) {
                    UpdatePost(block.above(), true, true);
                }
            }
            else if (up === false) {
                if ((_b = block.below()) === null || _b === void 0 ? void 0 : _b.hasTag(`pfe_wall`)) {
                    UpdatePost(block.below(), true, false);
                }
            }
            else {
                if ((_c = block.above()) === null || _c === void 0 ? void 0 : _c.hasTag(`pfe_wall`)) {
                    UpdatePost(block.above(), true, true);
                }
                if ((_d = block.below()) === null || _d === void 0 ? void 0 : _d.hasTag(`pfe_wall`)) {
                    UpdatePost(block.below(), true, false);
                }
            }
            block.setPermutation(block.permutation.withState(PostState, true));
            return;
        }
    }
    if (up) {
        if ((_e = block.above()) === null || _e === void 0 ? void 0 : _e.hasTag(`pfe_wall`)) {
            UpdatePost(block.above(), value, true);
        }
    }
    else if (up === false) {
        if ((_f = block.below()) === null || _f === void 0 ? void 0 : _f.hasTag(`pfe_wall`)) {
            UpdatePost(block.below(), value, false);
        }
    }
    else {
        if ((_g = block.above()) === null || _g === void 0 ? void 0 : _g.hasTag(`pfe_wall`)) {
            UpdatePost(block.above(), value, true);
        }
        if ((_h = block.below()) === null || _h === void 0 ? void 0 : _h.hasTag(`pfe_wall`)) {
            UpdatePost(block.below(), value, false);
        }
    }
    block.setPermutation(block.permutation.withState(PostState, value));
}
//Custom Component Registry & Initial Setup
system.beforeEvents.startup.subscribe(data => {
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:cycle_color", {
        onPlayerInteract(data, component) {
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
            const ColorState = `pfe:color`;
            let light_color = data.block.permutation.getState(ColorState);
            let sound_pitch = 1 + light_color / 10;
            //resets if at the maximum (15)
            if (data.block.permutation.getState(ColorState) == 15) {
                //set pfe:color state to default (0)
                data.block.setPermutation(data.block.permutation.withState(ColorState, 0));
                //play sound
                data.block.dimension.runCommand(`playsound block.copper_bulb.turn_on @a  ${block_location} 1 ${sound_pitch}`);
                ComputersCompat.addStat(`bulb_color_changes`, 1);
                return;
            }
            //Adds 1 to the current state of pfe:color
            else {
                //set pfe:color state to current +1
                data.block.setPermutation(data.block.permutation.withState(ColorState, light_color + 1));
                //play sound
                data.block.dimension.runCommand(`playsound block.copper_bulb.turn_on @a ${block_location} 1 ${sound_pitch}`);
                ComputersCompat.addStat(`bulb_color_changes`, 1);
                return;
            }
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:slab_loot", {
        onPlayerBreak(data, component) {
            var _a;
            const block_location = data.block.location;
            const gm = (_a = data.player) === null || _a === void 0 ? void 0 : _a.getGameMode();
            const blockId = data.brokenBlockPermutation.type.id;
            const DoubleState = 'poke:double';
            const blockState = data.brokenBlockPermutation.getState(DoubleState);
            if (gm == GameMode.Survival) {
                if (blockState == true) {
                    data.dimension.spawnItem(new ItemStack(blockId, 1), block_location);
                    return;
                }
                return;
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:timeConfig", {
        onUse(data, componentInfo) {
            PokeTimeConfigUIMainMenu(data.source);
        }
    });
    data.itemComponentRegistry.registerCustomComponent(`poke-pfe:identifier`, {
        onUseOn(data, componentInfo) {
            if (data.source.typeId == MinecraftEntityTypes.Player) {
                const player = data.source;
                player.sendMessage({ translate: `translation.poke-pfe:identifierMessage`, with: [data.block.typeId] });
            }
        }
    });
    data.itemComponentRegistry.registerCustomComponent(`poke:boltbow`, new PFEBoltBowsComponent());
    data.itemComponentRegistry.registerCustomComponent("poke:boss_event", {
        onUse(data, componentInfo) {
            var _a;
            let options = JSON.parse(world.getDynamicProperty(PFEDisableConfigName).toString());
            if (!options.bounty)
                return;
            if (PFEStartBossEvent() == 0) {
                data.source.sendMessage({ translate: `translation.poke:bossEventNoSpawnError` });
                data.source.playSound(`note.didgeridoo`, { pitch: 0.825 });
                return;
            }
            ;
            if (data.source.getGameMode() == GameMode.Creative)
                return;
            (_a = data.source.getComponent(EntityComponentTypes.Equippable)) === null || _a === void 0 ? void 0 : _a.setEquipment(EquipmentSlot.Mainhand, PokeDecrementStack(data.itemStack));
        }
    });
    data.itemComponentRegistry.registerCustomComponent('poke:veinMiner', {
        onMineBlock(data, component) {
            if (!data.minedBlockPermutation.hasTag('minecraft:is_axe_item_destructible'))
                return;
            let dimension = data.block.dimension;
            let location = data.block.location;
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
            let max = 0;
            while (max < 256 && toBreak.length > 0) {
                location = toBreak.shift();
                let key = `${location.x},${location.y},${location.z}`;
                if (checked.has(key)) {
                    //console.warn(`block already checked`)
                    continue;
                }
                ;
                checked.add(key);
                let currentBlock = undefined;
                //to prevent the vein miner from randomly stopping if outside of world bounds
                try {
                    currentBlock = dimension.getBlock(location);
                }
                catch (error) {
                    continue;
                }
                //console.warn(currentBlock?.getTags())
                if (data.minedBlockPermutation.matches(currentBlock.typeId)) {
                    dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} air destroy`);
                    max = max + 1;
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
                        toBreak.push(loc);
                    }
                }
            }
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:normalMining", {
        onMineBlock(data, component) {
            PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:shootProjectile", {
        onUse(data, component) {
            if (data.itemStack == undefined)
                return;
            if (data.itemStack.typeId == "poke:nuke_ring") {
                let options = JSON.parse(world.getDynamicProperty(PFEDisableConfigName).toString());
                if (!options.nukeRing)
                    return;
            }
            const headLocate = data.source.getHeadLocation();
            //Projectile shooters. projectile id defined in a tag on the item
            const pTag = data.itemStack.getTags();
            const angle = data.source.getViewDirection();
            const projEntity = data.source.dimension.spawnEntity('' + pTag, headLocate);
            const projComp = projEntity.getComponent(EntityComponentTypes.Projectile);
            if (!projComp)
                return;
            data.source.playSound('random.bow');
            projComp.owner = data.source;
            projComp.shoot(angle);
            PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:hitEffects", {
        onHitEntity(data, component) {
            var _a;
            switch ((_a = data.itemStack) === null || _a === void 0 ? void 0 : _a.typeId) {
                case 'poke:demonic_sword': {
                    data.hitEntity.addEffect('slowness', 100, { amplifier: 3 });
                    return;
                }
                case 'poke:hellish_blade': {
                    data.hitEntity.addEffect('slowness', 40, { amplifier: 3 });
                    return;
                }
                case 'poke:godly_sword': {
                    data.attackingEntity.addEffect('strength', 100, { amplifier: 2 });
                    return;
                }
                case 'poke:holy_sword': {
                    data.attackingEntity.addEffect('strength', 40, { amplifier: 1 });
                    return;
                }
                case 'poke:astral_sword': {
                    data.attackingEntity.addEffect('strength', 100, { amplifier: 2 });
                    return;
                }
                case 'poke:shade_sword': {
                    data.hitEntity.addEffect('slowness', 40, { amplifier: 2 });
                    data.hitEntity.addEffect('wither', 60, { amplifier: 1 });
                    return;
                }
                case 'poke:radium_sword': {
                    data.hitEntity.addEffect('slowness', 220, { amplifier: 3 });
                    data.hitEntity.addEffect('wither', 240, { amplifier: 4 });
                    return;
                }
                case 'poke:amethyst_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 4 });
                    data.hitEntity.addEffect('blindness', 20);
                    return;
                }
                case 'poke:demonic_slasher': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 });
                    data.hitEntity.addEffect('wither', 80, { amplifier: 1 });
                    return;
                }
                case 'poke:gold_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
                    data.attackingEntity.addEffect('haste', 600, { amplifier: 2 });
                    return;
                }
                case 'poke:emerald_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
                    data.attackingEntity.addEffect('village_hero', 2400, { amplifier: 1 });
                    return;
                }
                case 'poke:iron_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
                    return;
                }
                case 'poke:onyx_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 5 });
                    data.attackingEntity.addEffect('jump_boost', 100, { amplifier: 2 });
                    data.hitEntity.addEffect('weakness', 120, { amplifier: 2 });
                    return;
                }
                case 'poke:godly_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.attackingEntity.addEffect('slow_falling', 2400);
                    data.attackingEntity.addEffect('jump_boost', 1200, { amplifier: 3 });
                    return;
                }
                case 'poke:hellish_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 });
                    data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 2400);
                    data.hitEntity.addEffect('mining_fatigue', 400, { amplifier: 1 });
                    return;
                }
                case 'poke:holy_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.attackingEntity.addEffect('slow_falling', 2400, { amplifier: 1 });
                    data.hitEntity.addEffect('darkness', 400);
                    return;
                }
                case 'poke:shade_scythe': {
                    data.attackingEntity.addEffect('absorption', 600, { amplifier: 1 });
                    data.attackingEntity.addEffect('strength', 100, { amplifier: 1 });
                    data.hitEntity.addEffect('slowness', 160, { amplifier: 2 });
                    return;
                }
                case 'poke:diamond_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 });
                    data.hitEntity.addEffect('weakness', 100, { amplifier: 1 });
                    data.hitEntity.addEffect('blindness', 80);
                    return;
                }
                case 'poke:netherite_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 });
                    data.hitEntity.addEffect('hunger', 120, { amplifier: 1 });
                    data.hitEntity.addEffect('slowness', 80, { amplifier: 2 });
                    return;
                }
                case 'poke:radium_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 5 });
                    data.hitEntity.addEffect('nausea', 80, { amplifier: 1 });
                    data.hitEntity.addEffect('fatal_poison', 160, { amplifier: 2 });
                    return;
                }
                case 'poke:medic_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
                    data.attackingEntity.addEffect('health_boost', 2400, { amplifier: 2 });
                    return;
                }
                case 'poke:galactic_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 9 });
                    data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300);
                    data.hitEntity.addEffect('wither', 80, { amplifier: 2 });
                    data.hitEntity.addEffect('weakness', 80, { amplifier: 2 });
                    return;
                }
                case 'poke:astral_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 120, { amplifier: 9 });
                    data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300);
                    data.hitEntity.addEffect('wither', 120, { amplifier: 2 });
                    data.hitEntity.addEffect('weakness', 120, { amplifier: 3 });
                    return;
                }
                case 'poke:ember_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
                    data.hitEntity.addEffect('nausea', 80, { amplifier: 1 });
                    data.hitEntity.addEffect('blindness', 80);
                    return;
                }
                case 'poke:void_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.hitEntity.runCommand('function poke/pfe/void_scythe');
                    return;
                }
                case 'poke:death_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.hitEntity.runCommand('function poke/pfe/death_scythe');
                    return;
                }
                case 'poke:nebula_scythe': {
                    data.attackingEntity.runCommand('function poke/pfe/nebula_scythe');
                    data.hitEntity.addEffect('wither', 80, { amplifier: 3 });
                    return;
                }
                case 'poke:cobalt_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
                    data.hitEntity.addEffect('wither', 40, { amplifier: 1 });
                    return;
                }
                case 'poke:nebula_sword': {
                    data.attackingEntity.addEffect('strength', 40, { amplifier: 4 });
                    data.hitEntity.addEffect('weakness', 20, { amplifier: 2 });
                    return;
                }
                case 'poke:ban_hammer': {
                    data.attackingEntity.addEffect('strength', 40, { amplifier: 1 });
                    return;
                }
                case 'poke:circuit_sword': {
                    data.attackingEntity.runCommand('function poke/pfe/circuit_sword');
                    data.hitEntity.addEffect('blindness', 100);
                    return;
                }
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:consumeEffects", {
        onConsume(data, component) {
            switch (data.itemStack.typeId) {
                case 'poke:xp_vial':
                    {
                        data.source.runCommand("xp 160 @s");
                        return;
                    }
                    ;
                case 'poke:cobalt_potion': {
                    data.source.addEffect(MinecraftEffectTypes.NightVision, 3600);
                    data.source.addEffect(MinecraftEffectTypes.Regeneration, 2400);
                }
                case 'poke:cobalt_soup':
                    {
                        data.source.addEffect(MinecraftEffectTypes.NightVision, 2400, { showParticles: false });
                        return;
                    }
                    ;
                case 'poke:root_beer':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4, });
                        return;
                    }
                    ;
                case 'poke:pumpkin_spice':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Invisibility, 600);
                        data.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4, });
                        return;
                    }
                    ;
                case 'poke:crimson_sporeshroom_stew':
                    {
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
                        return;
                    }
                    ;
                case 'poke:warped_sporeshroom_stew':
                    {
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
                        return;
                    }
                    ;
                case 'poke:hellish_soup':
                    {
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
                        return;
                    }
                    ;
                case 'poke:nebula_noodles':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Strength, 600, { amplifier: 7, });
                        return;
                    }
                    ;
                case 'poke:milk_bottle':
                    {
                        data.source.runCommand("effect @s clear");
                        return;
                    }
                    ;
                case 'poke:demonic_potion':
                    {
                        data.source.addEffect(MinecraftEffectTypes.NightVision, 12000);
                        data.source.addEffect(MinecraftEffectTypes.Strength, 6000, { amplifier: 2 });
                        data.source.addEffect(MinecraftEffectTypes.Regeneration, 12000, { amplifier: 1 });
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 12000);
                        return;
                    }
                    ;
                case 'poke:hellish_potion':
                    {
                        data.source.addEffect(MinecraftEffectTypes.NightVision, 12000);
                        data.source.addEffect(MinecraftEffectTypes.Regeneration, 12000);
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 12000);
                        return;
                    }
                    ;
                case 'poke:nebula_potion':
                    {
                        data.source.addEffect(MinecraftEffectTypes.NightVision, 36000);
                        data.source.addEffect(MinecraftEffectTypes.Haste, 24000, { amplifier: 4 });
                        data.source.addEffect(MinecraftEffectTypes.Regeneration, 24000, { amplifier: 2 });
                        data.source.addEffect(MinecraftEffectTypes.Speed, 24000, { amplifier: 4 });
                        data.source.addEffect(MinecraftEffectTypes.VillageHero, 24000, { amplifier: 2 });
                        return;
                    }
                    ;
                case 'poke:void_potion':
                    {
                        data.source.addEffect(MinecraftEffectTypes.NightVision, 36000);
                        data.source.addEffect(MinecraftEffectTypes.Haste, 12000, { amplifier: 2 });
                        data.source.addEffect(MinecraftEffectTypes.Regeneration, 12000, { amplifier: 1 });
                        data.source.addEffect(MinecraftEffectTypes.Speed, 24000, { amplifier: 4 });
                        return;
                    }
                    ;
                case 'poke:death_potion':
                    {
                        data.source.kill();
                        return;
                    }
                    ;
                case 'poke:rotten_chicken':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Nausea, 400);
                        return;
                    }
                    ;
                case 'poke:golden_chicken':
                    {
                        data.source.addEffect(MinecraftEffectTypes.VillageHero, 400, { amplifier: 1, });
                        return;
                    }
                    ;
                case 'poke:banished_star_x10':
                    {
                        data.source.runCommand("damage @a[r=100] 32767000 entity_attack entity @s");
                        return;
                    }
                    ;
                case 'poke:banished_star_x9':
                    {
                        data.source.runCommand("damage @s 32767000 entity_attack");
                        return;
                    }
                    ;
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:config", {
        onUse(data, componentInfo) {
            if ((data.source.getGameMode() == GameMode.Creative) || data.source.hasTag(`poke:config`)) {
                let UI = new ActionFormData();
                UI.button({ translate: `translation.poke_pfe.bossEventConfig` }, `textures/poke/common/spawn_enabled`);
                UI.button({ translate: `translation.poke_pfe.disableConfig` }, `textures/poke/common/blacklist_add`);
                UI.button({ translate: `%poke_pfe.miscOptions` }, `textures/poke/common/more_options`);
                UI.show(data.source).then(response => {
                    var _a, _b;
                    let selection = 0;
                    if (response.selection == selection) {
                        if (world.getDynamicProperty(PFEBossEventConfigName) == undefined) {
                            //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
                            world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
                        }
                        PFEBossEventUIMainMenu(data.source);
                        return;
                    }
                    else
                        selection++;
                    if (response.selection == selection) {
                        PFEDisableConfigMainMenu(data);
                        return;
                    }
                    else
                        selection++;
                    if (response.selection == selection) {
                        let UI = new ModalFormData();
                        UI.title({ translate: `%poke_pfe.miscOptions` });
                        UI.label({ translate: `%poke_pfe.setEffects` });
                        UI.divider();
                        UI.slider({ translate: `%poke_pfe.effectDuration` }, 1, 30, { valueStep: 1, tooltip: { translate: `%poke_pfe.effectDuration.tooltip` }, defaultValue: Number((_a = world.getDynamicProperty("poke_pfe:setEffectDuration")) !== null && _a !== void 0 ? _a : ArmorEffectDuration) / 20 });
                        UI.slider({ translate: `%poke_pfe.applyInterval` }, 1, 10, { valueStep: 1, tooltip: { translate: `%poke_pfe.applyInterval.tooltip` }, defaultValue: Number((_b = world.getDynamicProperty("poke_pfe:setEffectInterval")) !== null && _b !== void 0 ? _b : 1) / 20 });
                        UI.show(data.source).then(response => {
                            var _a, _b, _c, _d;
                            if (response.canceled)
                                return;
                            //console.warn(JSON.stringify(response.formValues))
                            world.setDynamicProperty("poke_pfe:setEffectDuration", Number((_b = (_a = response.formValues) === null || _a === void 0 ? void 0 : _a.at(2)) !== null && _b !== void 0 ? _b : ArmorEffectDuration / 20) * 20);
                            world.setDynamicProperty("poke_pfe:setEffectInterval", (Number((_d = (_c = response.formValues) === null || _c === void 0 ? void 0 : _c.at(3)) !== null && _d !== void 0 ? _d : 1)) * 20);
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
                UI.body({ rawtext: [{ translate: `translation.poke_pfe.insufficientPerms.desc` }, { text: `poke:config\n\n` }, { translate: `translation.poke_pfe.insufficientPerms.desc2` }, { text: `\n/tag @s add poke:config` }] });
                UI.button({ translate: `translation.poke:bossEventClose` }, `textures/poke/common/close`);
                UI.show(data.source).then(response => {
                    return;
                });
                return;
            }
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:cc_dodge", {
        onUse(data, componentInfo) {
            if (data.itemStack === undefined)
                return;
            const cooldownComponent = data.itemStack.getComponent(ItemComponentTypes.Cooldown);
            const equippableComponent = data.source.getComponent(EntityComponentTypes.Equippable);
            const moveDir = data.source.getVelocity();
            var amount = data.itemStack.amount;
            data.source.spawnParticle('minecraft:wind_explosion_emitter', data.source.location);
            //console.warn(moveDirX+' || '+moveDirY+' || '+moveDirZ)
            data.source.applyKnockback({ x: moveDir.x * 5, z: moveDir.z * 5 }, moveDir.y + 0.5);
            //data.source.applyKnockback(moveDir.x, moveDir.z, 5, moveDir.y + 0.5);
            data.source.playSound('component.jump_to_block');
            if (data.source.getGameMode() == GameMode.Creative)
                return;
            cooldownComponent === null || cooldownComponent === void 0 ? void 0 : cooldownComponent.startCooldown(data.source);
            if (amount <= 1) {
                equippableComponent === null || equippableComponent === void 0 ? void 0 : equippableComponent.setEquipment(EquipmentSlot.Mainhand, undefined);
                return;
            }
            equippableComponent === null || equippableComponent === void 0 ? void 0 : equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(data.itemStack.typeId, amount - 1));
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:cc_bowAim", {
        onUse(data, component) {
            const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] });
            var cPlayersLength = cPlayers.length;
            for (var i = cPlayersLength; i > 0; i--) {
                //data.source.playAnimation('animation.humanoid.bow_and_arrow',{stopExpression: '!q.is_using_item', players:[cPlayers[i-1].name]})
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:cc_crossbowAim", {
        onUse(data, component) {
            const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] });
            var cPlayersLength = cPlayers.length;
            //data.source.playAnimation('third_person_crossbow_equipped',{stopExpression:'!q.is_using_item',controller:'pfe-controller.animation.poke_pfe.crossbow2'})//Hand charging for everyone else
            //data.source.playAnimation('waffle',{stopExpression:'!q.is_using_item',controller:'pfe-controller.animation.poke_pfe.crossbow2'})
            data.source.playAnimation('animation.player.first_person.crossbow_equipped', { stopExpression: '!q.is_using_item', players: [data.source] }); //Hand charging movement
            for (var i = cPlayersLength; i > 0; i--) {
                data.source.playAnimation('third_person_crossbow_equipped', { stopExpression: '!q.is_using_item', players: [cPlayers[i - 1]] }); //Hand charging for everyone else
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:trapdoor_event", {
        onPlayerInteract(data, component) {
            const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`;
            const OpenState = 'poke:trapdoor_open';
            if (data.block.permutation.hasTag('pfe_trapdoor_open') == true) {
                data.block.setPermutation(data.block.permutation.withState(OpenState, 'no'));
                data.block.dimension.playSound(`open.iron_trapdoor`, data.block.center());
                return;
            }
            else {
                data.block.setPermutation(data.block.permutation.withState(OpenState, 'yes'));
                data.block.dimension.playSound(`close.iron_trapdoor`, data.block.center());
                return;
            }
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:fortune", {
        onPlayerBreak(data, component) {
            var _a, _b, _c, _d;
            const equippableComponent = (_a = data.player) === null || _a === void 0 ? void 0 : _a.getComponent(EntityComponentTypes.Equippable);
            if (equippableComponent === undefined)
                return;
            if (!((_b = equippableComponent.getEquipment(EquipmentSlot.Mainhand)) === null || _b === void 0 ? void 0 : _b.hasComponent(ItemComponentTypes.Enchantable)))
                return;
            const enchantableComponent = (_c = equippableComponent.getEquipment(EquipmentSlot.Mainhand)) === null || _c === void 0 ? void 0 : _c.getComponent(ItemComponentTypes.Enchantable);
            if (!(enchantableComponent === null || enchantableComponent === void 0 ? void 0 : enchantableComponent.hasEnchantment(MinecraftEnchantmentTypes.Fortune)))
                return;
            let fortuneLevel = enchantableComponent.getEnchantment(MinecraftEnchantmentTypes.Fortune).level;
            let rng = Math.round(Math.random());
            //console.warn(rng)
            const blockLocation = `${data.block.x} ${data.block.y} ${data.block.z}`;
            const blockId = data.brokenBlockPermutation.type.id.substring(5);
            if (((_d = data.player) === null || _d === void 0 ? void 0 : _d.getGameMode()) == GameMode.Survival) {
                if (fortuneLevel >= 3) {
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    if (rng == 0)
                        return;
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    return;
                }
                if (fortuneLevel == 2) {
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    if (rng == 0)
                        return;
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    return;
                }
                if (fortuneLevel == 1) {
                    if (rng == 0)
                        return;
                    data.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    return;
                }
                return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:can_double_slab", {
        onPlayerInteract(data, component) {
            var _a;
            if (!data.player)
                return;
            const DoubleState = 'poke:double';
            if (data.block.permutation.getState(DoubleState) == true)
                return;
            const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`;
            const slabId = data.block.typeId;
            const equippableComponent = data.player.getComponent(EntityComponentTypes.Equippable);
            const mainhand = equippableComponent === null || equippableComponent === void 0 ? void 0 : equippableComponent.getEquipment(EquipmentSlot.Mainhand);
            if (mainhand != undefined) {
                if (mainhand.typeId == slabId && ((data.block.permutation.getState('minecraft:vertical_half') == "bottom" && data.face == Direction.Up) || (data.block.permutation.getState('minecraft:vertical_half') == "top" && data.face == Direction.Down)) && data.block.permutation.getState(DoubleState) == false) {
                    var itemStackAmount = mainhand.amount - 1;
                    data.block.setWaterlogged(false);
                    data.block.setPermutation(data.block.permutation.withState(DoubleState, true));
                    data.block.dimension.playSound(`use.stone`, data.block.center());
                    if (((_a = data.player) === null || _a === void 0 ? void 0 : _a.getGameMode()) == GameMode.Creative)
                        return;
                    if (itemStackAmount <= 0) {
                        equippableComponent === null || equippableComponent === void 0 ? void 0 : equippableComponent.setEquipment(EquipmentSlot.Mainhand, undefined);
                        return;
                    }
                    equippableComponent === null || equippableComponent === void 0 ? void 0 : equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(slabId, itemStackAmount));
                    return;
                }
                else
                    return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_phantomic_conduit", {
        onTick(data, component) {
            const ActiveState = 'pfe:active';
            var block_location_x = data.block.x;
            var block_location_y = data.block.y;
            var block_location_z = data.block.z;
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1));
                data.dimension.runCommand('execute positioned ' + block_location_x + ' ' + block_location_y + ' ' + block_location_z + ' as @e[r=50,family=phantom] run damage @s 20');
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0));
                return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_da_conduit", {
        onTick(data, component) {
            const ActiveState = 'pfe:active';
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1));
                data.dimension.runCommand('execute positioned ' + block_location + ' as @e[r=50,family=pfe:demonic_allay] run damage @s 20');
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0));
                return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_cobbler", {
        onTick(data, component) {
            const ActiveState = 'pfe:active';
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1));
                data.dimension.runCommand(`execute positioned ${block_location} run structure load poke:cobblestone_item ~ ~-1 ~`);
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0));
                return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:magnet_block", {
        onTick(data, component) {
            const ActiveState = 'pfe:active';
            let blockY = (data.block.permutation.getState(`minecraft:vertical_half`) == `top`) ? data.block.center().y - 0.5 : data.block.center().y + 0.5;
            const block_location = `${data.block.x} ${blockY} ${data.block.z}`;
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1));
                data.dimension.runCommand(`execute positioned ${block_location} as @e[type=item,r=10] run tp @s ${block_location}`);
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0));
                return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:crops", {
        onRandomTick(data, component) {
            const GrowthStageState = 'poke:growth_stage';
            var growth_state = data.block.permutation.getState(GrowthStageState);
            var growth_stage = growth_state + 1;
            if (growth_state != undefined || 6) {
                data.block.setPermutation(data.block.permutation.withState(GrowthStageState, growth_stage));
                return;
            }
            return;
        },
        onPlayerInteract(data, component) {
            var _a, _b, _c;
            const equippableComponent = (_a = data.player) === null || _a === void 0 ? void 0 : _a.getComponent(EntityComponentTypes.Equippable);
            const mainhandItem = equippableComponent === null || equippableComponent === void 0 ? void 0 : equippableComponent.getEquipment(EquipmentSlot.Mainhand);
            const GrowthStageState = 'poke:growth_stage';
            if (mainhandItem === undefined)
                return;
            const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
            let growth_state = data.block.permutation.getState(GrowthStageState);
            let growth_stage = growth_state + Math.round(Math.random() * 3);
            var itemAfterUse = mainhandItem.amount;
            var itemAfterUse1 = itemAfterUse - 1;
            if (growth_stage > 6) {
                growth_stage = 6;
            }
            if (mainhandItem.typeId == MinecraftItemTypes.BoneMeal && growth_state != 6) {
                data.block.setPermutation(data.block.permutation.withState(GrowthStageState, growth_stage));
                data.dimension.runCommand("playsound item.bone_meal.use @a " + block_location);
                data.dimension.runCommand("particle minecraft:crop_growth_emitter " + block_location);
                if (((_b = data.player) === null || _b === void 0 ? void 0 : _b.getGameMode()) != GameMode.Creative) {
                    if (itemAfterUse1 == 0) {
                        (_c = data.player) === null || _c === void 0 ? void 0 : _c.runCommand('clear @s bone_meal -1 1');
                        return;
                    }
                    equippableComponent === null || equippableComponent === void 0 ? void 0 : equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(mainhandItem.typeId, itemAfterUse1));
                    return;
                }
                return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:molten_lava_sponge", {
        onRandomTick(data, component) {
            var _a, _b, _c, _d, _e, _f;
            switch (MinecraftBlockTypes.Water || MinecraftBlockTypes.FlowingWater) {
                case (_a = data.block.north()) === null || _a === void 0 ? void 0 : _a.typeId: break;
                case (_b = data.block.south()) === null || _b === void 0 ? void 0 : _b.typeId: break;
                case (_c = data.block.east()) === null || _c === void 0 ? void 0 : _c.typeId: break;
                case (_d = data.block.west()) === null || _d === void 0 ? void 0 : _d.typeId: break;
                case (_e = data.block.below()) === null || _e === void 0 ? void 0 : _e.typeId: break;
                case (_f = data.block.above()) === null || _f === void 0 ? void 0 : _f.typeId: break;
                default: return;
            }
            ;
            data.block.setType(`poke:lava_sponge`);
            data.dimension.playSound(`random.fizz`, data.block.center());
            data.dimension.spawnParticle(`minecraft:cauldron_explosion_emitter`, data.block.center());
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_block_seat", {
        onPlayerInteract(data, component) {
            var _a, _b, _c;
            if (!data.player)
                return;
            const slabId = data.block.typeId;
            const mainhand = (_a = data.player.getComponent(EntityComponentTypes.Equippable)) === null || _a === void 0 ? void 0 : _a.getEquipment(EquipmentSlot.Mainhand);
            const DoubleState = 'poke:double';
            const options = {
                type: 'poke:seat',
                location: data.block.center(),
                maxDistance: 0.24
            };
            if ((mainhand === null || mainhand === void 0 ? void 0 : mainhand.typeId) != slabId && !((_b = data.player) === null || _b === void 0 ? void 0 : _b.isSneaking)) {
                if (data.block.permutation.getState('minecraft:vertical_half') == 'bottom' && data.block.permutation.getState(DoubleState) == false) {
                    if (data.dimension.getEntities(options).length > 0) {
                        return;
                    }
                    else {
                        (_c = data.dimension.spawnEntity('poke:seat', data.block.center()).getComponent('minecraft:rideable')) === null || _c === void 0 ? void 0 : _c.addRider(data.player);
                        ComputersCompat.addStat("slabs_sat_on", 1);
                        return;
                    }
                }
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_block_interact", {
        onPlayerInteract(data, component) {
            var _a, _b;
            switch (data.block.typeId) {
                case 'poke:listener_trophy': {
                    (_a = data.player) === null || _a === void 0 ? void 0 : _a.playMusic('poke_pfe.they_listen', { fade: 5 });
                    return;
                }
                case 'poke:furnace_golem_trophy': {
                    (_b = data.player) === null || _b === void 0 ? void 0 : _b.playMusic('poke.record.pigstep', { fade: 5 });
                    return;
                }
                case 'poke:cobalt_golem_block':
                    {
                        data.dimension.spawnEntity('poke:cobalt_golem', data.block.location);
                        data.block.setType(MinecraftBlockTypes.Air);
                        return;
                    }
                    return;
            }
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_8ball", {
        onPlayerInteract(data, component) {
            var _a;
            var RNG = Math.floor(Math.random() * 19);
            //console.warn(RNG)
            (_a = data.player) === null || _a === void 0 ? void 0 : _a.sendMessage({ rawtext: [{ translate: `translation.poke:8ball${RNG}` }] });
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_wall", {
        onPlace(data, component) {
            const NorthBlock = data.block.north();
            const SouthBlock = data.block.south();
            const EastBlock = data.block.east();
            const WestBlock = data.block.west();
            const AboveBlock = data.block.above();
            const BelowBlock = data.block.below();
            const NorthState = 'pfe:wall_n';
            const SouthState = 'pfe:wall_s';
            const EastState = 'pfe:wall_e';
            const WestState = 'pfe:wall_w';
            const AboveState = 'poke:connected_above';
            const BelowState = 'poke:connected_below';
            if (!NorthBlock || !SouthBlock || !EastBlock || !WestBlock)
                return;
            if (!NorthBlock.isAir && !NorthBlock.isLiquid && !NorthBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
                data.block.setPermutation(data.block.permutation.withState(NorthState, true));
                if (NorthBlock.permutation.getState(SouthState) != undefined) {
                    NorthBlock.setPermutation(NorthBlock.permutation.withState(SouthState, true));
                    Post(NorthBlock, true, true);
                }
            }
            else {
                data.block.setPermutation(data.block.permutation.withState(NorthState, false));
            }
            ;
            if (!SouthBlock.isAir && !SouthBlock.isLiquid && !SouthBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
                data.block.setPermutation(data.block.permutation.withState(SouthState, true));
                if (SouthBlock.permutation.getState(NorthState) != undefined) {
                    SouthBlock.setPermutation(SouthBlock.permutation.withState(NorthState, true));
                    Post(SouthBlock, true, true);
                }
            }
            else {
                data.block.setPermutation(data.block.permutation.withState(SouthState, false));
            }
            ;
            if (!EastBlock.isAir && !EastBlock.isLiquid && !EastBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
                data.block.setPermutation(data.block.permutation.withState(EastState, true));
                if (EastBlock.permutation.getState(WestState) != undefined) {
                    EastBlock.setPermutation(EastBlock.permutation.withState(WestState, true));
                    Post(EastBlock, true, true);
                }
            }
            else {
                data.block.setPermutation(data.block.permutation.withState(EastState, false));
            }
            ;
            if (!WestBlock.isAir && !WestBlock.isLiquid && !WestBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
                data.block.setPermutation(data.block.permutation.withState(WestState, true));
                if (WestBlock.permutation.getState(EastState) != undefined) {
                    WestBlock.setPermutation(WestBlock.permutation.withState(EastState, true));
                    Post(WestBlock, true, true);
                }
            }
            else {
                data.block.setPermutation(data.block.permutation.withState(WestState, false));
            }
            ;
            if (BelowBlock) {
                if (!BelowBlock.isAir && !BelowBlock.isLiquid && !BelowBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
                    data.block.setPermutation(data.block.permutation.withState(BelowState, true));
                    if (BelowBlock.permutation.getState(AboveState) != undefined) {
                        BelowBlock.setPermutation(BelowBlock.permutation.withState(AboveState, true));
                    }
                }
                else {
                    data.block.setPermutation(data.block.permutation.withState(BelowState, false));
                }
                ;
            }
            if (AboveBlock) {
                if (AboveBlock && !AboveBlock.isAir && !AboveBlock.isLiquid && !AboveBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
                    data.block.setPermutation(data.block.permutation.withState(AboveState, true));
                    if (AboveBlock.permutation.getState(BelowState) != undefined) {
                        AboveBlock.setPermutation(AboveBlock.permutation.withState(BelowState, true));
                    }
                }
                else {
                    data.block.setPermutation(data.block.permutation.withState(AboveState, false));
                }
                ;
            }
            Post(data.block, true, true);
            return;
        },
        onPlayerBreak(data, component) {
            const NorthBlock = data.block.north();
            const SouthBlock = data.block.south();
            const EastBlock = data.block.east();
            const WestBlock = data.block.west();
            const AboveBlock = data.block.above();
            const BelowBlock = data.block.below();
            const NorthState = 'pfe:wall_n';
            const SouthState = 'pfe:wall_s';
            const EastState = 'pfe:wall_e';
            const WestState = 'pfe:wall_w';
            const AboveState = 'poke:connected_above';
            const BelowState = 'poke:connected_below';
            if (!NorthBlock || !SouthBlock || !EastBlock || !WestBlock || !AboveBlock || !BelowBlock)
                return;
            if (NorthBlock.permutation.getState(SouthState) != undefined) {
                NorthBlock.setPermutation(NorthBlock.permutation.withState(SouthState, false));
                Post(NorthBlock, true, true);
            }
            if (SouthBlock.permutation.getState(NorthState) != undefined) {
                SouthBlock.setPermutation(SouthBlock.permutation.withState(NorthState, false));
                Post(SouthBlock, true, true);
            }
            if (EastBlock.permutation.getState(WestState) != undefined) {
                EastBlock.setPermutation(EastBlock.permutation.withState(WestState, false));
                Post(EastBlock, true, true);
            }
            if (WestBlock.permutation.getState(EastState) != undefined) {
                WestBlock.setPermutation(WestBlock.permutation.withState(EastState, false));
                Post(WestBlock, true, true);
            }
            if (AboveBlock.permutation.getState(AboveState) != undefined) {
                AboveBlock.setPermutation(AboveBlock.permutation.withState(BelowState, false));
                Post(AboveBlock, true, false);
            }
            if (BelowBlock.permutation.getState(BelowState) != undefined) {
                BelowBlock.setPermutation(BelowBlock.permutation.withState(AboveState, false));
                Post(BelowBlock, false, true);
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:fisher", {
        onRandomTick(data, component) {
            const PFEFisherComponentInfo = {
                baitBlockState: "poke_pfe:bait",
                baitStates: [4, 3, 2, 1, 0]
            };
            if (data.block.isWaterlogged && (data.block.permutation.getState(PFEFisherComponentInfo.baitBlockState) != 0)) {
                data.block.setPermutation(data.block.permutation.withState(PFEFisherComponentInfo.baitBlockState, Math.max(Number(data.block.permutation.getState(PFEFisherComponentInfo.baitBlockState)) - 1, 0)));
                data.block.dimension.playSound(`poke_pfe.fisher.catch`, data.block.center());
                ComputersCompat.addStat("fisher_catches", 1);
            }
        },
        onPlayerInteract(data, component) {
            const PFEFisherComponentInfo = {
                baitBlockState: "poke_pfe:bait",
                baitStates: [4, 3, 2, 1, 0]
            };
            let baitState = data.block.permutation.getState(PFEFisherComponentInfo.baitBlockState);
            let lootTable = "poke/pfe/fisher_block.loot";
            let spawnLocation = data.block.center();
            spawnLocation.y += 1;
            switch (baitState) {
                case 4:
                    {
                        data.block.dimension.playSound(`poke_pfe.fisher.noLoot`, data.block.center());
                        return;
                        break;
                    }
                    ;
                case 3: {
                    PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 1);
                    break;
                }
                case 2: {
                    PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 2);
                    break;
                }
                case 1: {
                    PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 3);
                    break;
                }
                case 0: {
                    PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 4);
                    break;
                }
            }
            data.block.setPermutation(data.block.permutation.withState(PFEFisherComponentInfo.baitBlockState, 4));
        },
        onPlayerBreak(data, component) {
            const PFEFisherComponentInfo = {
                baitBlockState: "poke_pfe:bait",
                baitStates: [4, 3, 2, 1, 0]
            };
            let baitState = data.brokenBlockPermutation.getState(PFEFisherComponentInfo.baitBlockState);
            let lootTable = "poke/pfe/fisher_block.loot";
            let spawnLocation = data.block.center();
            spawnLocation.y += 1;
            switch (baitState) {
                case 4: break;
                case 3: {
                    PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 1);
                    break;
                }
                case 2: {
                    PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 2);
                    break;
                }
                case 1: {
                    PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 3);
                    break;
                }
                case 0: {
                    PokeSpawnLootTable(lootTable, spawnLocation, data.block.dimension, 4);
                    break;
                }
            }
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:elevator", {
        onStepOff(data, component) {
            var _a, _b, _c, _d;
            if (!data.entity)
                return;
            let player = data.entity;
            if (player.typeId == MinecraftEntityTypes.Player) {
                let maxSearch = 64;
                if (player.isJumping) {
                    let viewDirection = player.getViewDirection();
                    //console.warn(`X: ${viewDirection.x}, Y: ${viewDirection.y}, Z: ${viewDirection.z}`)
                    let cardinalDirection = PokeClosestCardinal(viewDirection, "upDown");
                    switch (cardinalDirection.direction) {
                        case Direction.Up: {
                            for (let i = data.block.y + 1; i <= Math.min((data.block.y + maxSearch), data.dimension.heightRange.max); Math.min(i++, data.dimension.heightRange.max)) {
                                //console.warn(`Checking Y= ${i} \nBlock ID = ${data.block.above(i-data.block.y)?.typeId} \nAbove Amount = ${i-data.block.y}\nRedstone Power = ${data.block.above(i-data.block.y)?.getRedstonePower()}\nHas Tag? = ${data.block.above(i-data.block.y)?.hasTag(`poke_pfe:elevator`)}`)
                                if (((_a = data.block.above(i - data.block.y)) === null || _a === void 0 ? void 0 : _a.hasTag(`poke_pfe:elevator`)) && !Boolean((_b = data.block.above(i - data.block.y)) === null || _b === void 0 ? void 0 : _b.getRedstonePower())) {
                                    player.teleport({ x: data.block.center().x, y: i + 1, z: data.block.center().z });
                                    player.playSound(`mob.endermen.portal`, { location: { x: data.block.x, y: i + 1, z: data.block.z } });
                                    return;
                                }
                            }
                            ;
                            break;
                        }
                        case Direction.Down: {
                            for (let i = data.block.y - 1; i >= Math.max((data.block.y - maxSearch), data.dimension.heightRange.min); Math.min(i--, data.dimension.heightRange.min)) {
                                //console.warn(`Checking Y= ${i} \nBlock ID = ${data.block.below(Math.abs(i-data.block.y))?.typeId} \nBelow Amount = ${Math.abs(i-data.block.y)}\nRedstone Power = ${data.block.below(Math.abs(i-data.block.y))?.getRedstonePower()}\nHas Tag? = ${data.block.below(Math.abs(i-data.block.y))?.hasTag(`poke_pfe:elevator`)}`)
                                if (((_c = data.block.below(Math.abs(i - data.block.y))) === null || _c === void 0 ? void 0 : _c.hasTag(`poke_pfe:elevator`)) && !Boolean((_d = data.block.below(Math.abs(i - data.block.y))) === null || _d === void 0 ? void 0 : _d.getRedstonePower())) {
                                    player.teleport({ x: data.block.center().x, y: i + 1, z: data.block.center().z });
                                    player.playSound(`mob.endermen.portal`, { location: { x: data.block.x, y: i + 1, z: data.block.z } });
                                    return;
                                }
                            }
                            ;
                            break;
                        }
                    }
                }
            }
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:omnivator", {
        onStepOff(data, component) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            if (!data.entity)
                return;
            let player = data.entity;
            if (player.typeId == MinecraftEntityTypes.Player) {
                let maxSearch = 64;
                if (player.isJumping) {
                    let viewDirection = player.getViewDirection();
                    //console.warn(`X: ${viewDirection.x}, Y: ${viewDirection.y}, Z: ${viewDirection.z}`)
                    let cardinalDirection = PokeClosestCardinal(viewDirection);
                    switch (cardinalDirection.direction) {
                        case Direction.Up: {
                            for (let i = data.block.y + 1; i <= Math.min((data.block.y + maxSearch), data.dimension.heightRange.max); Math.min(i++, data.dimension.heightRange.max)) {
                                //console.warn(`Checking Y= ${i} \nBlock ID = ${data.block.above(i - data.block.y)?.typeId} \nAbove Amount = ${i - data.block.y}\nRedstone Power = ${data.block.above(i - data.block.y)?.getRedstonePower()}\nHas Tag? = ${data.block.above(i - data.block.y)?.hasTag(`poke_pfe:elevator`)}`)
                                if (((_a = data.block.above(i - data.block.y)) === null || _a === void 0 ? void 0 : _a.hasTag(`poke_pfe:elevator`)) && !Boolean((_b = data.block.above(i - data.block.y)) === null || _b === void 0 ? void 0 : _b.getRedstonePower())) {
                                    player.teleport({ x: data.block.center().x, y: i + 1, z: data.block.center().z });
                                    player.playSound(`mob.endermen.portal`, { location: { x: data.block.x, y: i + 1, z: data.block.z } });
                                    return;
                                }
                            }
                            ;
                            break;
                        }
                        case Direction.Down: {
                            for (let i = data.block.y - 1; i >= Math.max((data.block.y - maxSearch), data.dimension.heightRange.min); Math.min(i--, data.dimension.heightRange.min)) {
                                //console.warn(`Checking Y= ${i} \nBlock ID = ${data.block.below(Math.abs(i - data.block.y))?.typeId} \nBelow Amount = ${Math.abs(i - data.block.y)}\nRedstone Power = ${data.block.below(Math.abs(i - data.block.y))?.getRedstonePower()}\nHas Tag? = ${data.block.below(Math.abs(i - data.block.y))?.hasTag(`poke_pfe:elevator`)}`)
                                if (((_c = data.block.below(Math.abs(i - data.block.y))) === null || _c === void 0 ? void 0 : _c.hasTag(`poke_pfe:elevator`)) && !Boolean((_d = data.block.below(Math.abs(i - data.block.y))) === null || _d === void 0 ? void 0 : _d.getRedstonePower())) {
                                    player.teleport({ x: data.block.center().x, y: i + 1, z: data.block.center().z });
                                    player.playSound(`mob.endermen.portal`, { location: { x: data.block.x, y: i + 1, z: data.block.z } });
                                    return;
                                }
                            }
                            ;
                            break;
                        }
                        case Direction.North: {
                            for (let i = data.block.z - 1; i >= data.block.z - maxSearch; i--) {
                                //console.warn(`Checking Z= ${i} \nBlock ID = ${data.block.north(Math.abs(i - data.block.z))?.typeId} \nNorth Amount = ${Math.abs(i - data.block.z)}\nRedstone Power = ${data.block.north(Math.abs(i - data.block.z))?.getRedstonePower()}\nHas Tag? = ${data.block.north(Math.abs(i - data.block.z))?.hasTag(`poke_pfe:elevator`)}`)
                                if (((_e = data.block.north(Math.abs(i - data.block.z))) === null || _e === void 0 ? void 0 : _e.hasTag(`poke_pfe:elevator`)) && !Boolean((_f = data.block.north(Math.abs(i - data.block.z))) === null || _f === void 0 ? void 0 : _f.getRedstonePower())) {
                                    let newBlock = data.block.north(Math.abs(i - data.block.z));
                                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z });
                                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() });
                                    return;
                                }
                            }
                            ;
                            break;
                        }
                        case Direction.South: {
                            for (let i = data.block.z + 1; i <= data.block.z + maxSearch; i++) {
                                //console.warn(`Checking Z= ${i} \nBlock ID = ${data.block.south(i - data.block.z)?.typeId} \nSouth Amount = ${i - data.block.z}\nRedstone Power = ${data.block.south(i - data.block.z)?.getRedstonePower()}\nHas Tag? = ${data.block.south(i - data.block.z)?.hasTag(`poke_pfe:elevator`)}`)
                                if (((_g = data.block.south(i - data.block.z)) === null || _g === void 0 ? void 0 : _g.hasTag(`poke_pfe:elevator`)) && !Boolean((_h = data.block.south(i - data.block.z)) === null || _h === void 0 ? void 0 : _h.getRedstonePower())) {
                                    let newBlock = data.block.south(i - data.block.z);
                                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z });
                                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() });
                                    return;
                                }
                            }
                            ;
                            break;
                        }
                        case Direction.West: {
                            for (let i = data.block.x - 1; i >= data.block.x - maxSearch; i--) {
                                //console.warn(`Checking X= ${i} \nBlock ID = ${data.block.west(Math.abs(i - data.block.x))?.typeId} \nWest Amount = ${Math.abs(i - data.block.x)}\nRedstone Power = ${data.block.west(Math.abs(i - data.block.x))?.getRedstonePower()}\nHas Tag? = ${data.block.west(Math.abs(i - data.block.x))?.hasTag(`poke_pfe:elevator`)}`)
                                if (((_j = data.block.west(Math.abs(i - data.block.x))) === null || _j === void 0 ? void 0 : _j.hasTag(`poke_pfe:elevator`)) && !Boolean((_k = data.block.west(Math.abs(i - data.block.x))) === null || _k === void 0 ? void 0 : _k.getRedstonePower())) {
                                    let newBlock = data.block.west(Math.abs(i - data.block.x));
                                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z });
                                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() });
                                    return;
                                }
                            }
                            ;
                            break;
                        }
                        case Direction.East: {
                            for (let i = data.block.x + 1; i <= data.block.x + maxSearch; i++) {
                                //console.warn(`Checking X= ${i} \nBlock ID = ${data.block.east(i - data.block.x)?.typeId} \nEast Amount = ${i - data.block.x}\nRedstone Power = ${data.block.east(i - data.block.x)?.getRedstonePower()}\nHas Tag? = ${data.block.east(i - data.block.x)?.hasTag(`poke_pfe:elevator`)}`)
                                if (((_l = data.block.east(i - data.block.x)) === null || _l === void 0 ? void 0 : _l.hasTag(`poke_pfe:elevator`)) && !Boolean((_m = data.block.east(i - data.block.x)) === null || _m === void 0 ? void 0 : _m.getRedstonePower())) {
                                    let newBlock = data.block.east(i - data.block.x);
                                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z });
                                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() });
                                    return;
                                }
                            }
                            ;
                            break;
                        }
                    }
                }
            }
        }
    });
    // Updated Components
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:transform_block", {
        onTick(data, componentInfo) {
            const component = componentInfo.params;
            let block = component.turns_into;
            if (block.includes("{")) {
                const permutationString = block.substring(block.indexOf("{"));
                block = block.substring(0, block.indexOf("{"));
                const permutations = JSON.parse(permutationString);
                data.block.setPermutation(BlockPermutation.resolve(block, permutations));
            }
            else
                data.block.setType(block);
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:place_blocks", {
        onTick(data, componentInfo) {
            const component = componentInfo.params;
            const ActiveState = 'pfe:active';
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                for (const target of component.targets) {
                    function GetBlock() {
                        switch (target) {
                            case Direction.Up: return data.block.above();
                            case Direction.Down: return data.block.below();
                            case Direction.North: return data.block.north();
                            case Direction.South: return data.block.south();
                            case Direction.East: return data.block.east();
                            case Direction.West: return data.block.west();
                            default: return data.block;
                        }
                    }
                    const block = GetBlock();
                    if (typeof component.places == "string") {
                        if (!block || ((!component.can_replace) && (!block || !block.isAir)) || !component.can_replace.includes(block.typeId))
                            continue;
                        if (component.places.includes("{")) {
                            let places_block = component.places;
                            const permutationString = places_block.substring(places_block.indexOf("{"));
                            places_block = places_block.substring(0, places_block.indexOf("{"));
                            const permutations = JSON.parse(permutationString);
                            block.setPermutation(BlockPermutation.resolve(places_block, permutations));
                        }
                        else
                            block.setType(component.places);
                    }
                    else {
                        let parsedBlocks = [];
                        for (const unparsedBlock of component.places) {
                            if (unparsedBlock.includes("::")) {
                                const replaces = unparsedBlock.substring(unparsedBlock.indexOf("::") + 2);
                                const places = unparsedBlock.substring(0, unparsedBlock.indexOf("::"));
                                parsedBlocks.push({ places: places, replaces: replaces });
                                continue;
                            }
                            parsedBlocks.push({ places: unparsedBlock });
                        }
                        for (const parsedBlock of parsedBlocks) {
                            if (block && (parsedBlock.replaces ? parsedBlock.replaces == block.typeId : ((!component.can_replace && block.isAir) || component.can_replace.includes(block.typeId)))) {
                                if (parsedBlock.places.includes("{")) {
                                    let places_block = parsedBlock.places;
                                    const permutationString = places_block.substring(places_block.indexOf("{"));
                                    places_block = places_block.substring(0, places_block.indexOf("{"));
                                    const permutations = JSON.parse(permutationString);
                                    block.setPermutation(BlockPermutation.resolve(places_block, permutations));
                                }
                                else
                                    block.setType(parsedBlock.places);
                            }
                        }
                    }
                }
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1));
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0));
                return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:break_blocks", {
        onTick(data, componentInfo) {
            const component = componentInfo.params;
            const ActiveState = 'pfe:active';
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                for (const target of component.targets) {
                    function GetBlock() {
                        switch (target) {
                            case Direction.Up: return data.block.above();
                            case Direction.Down: return data.block.below();
                            case Direction.North: return data.block.north();
                            case Direction.South: return data.block.south();
                            case Direction.East: return data.block.east();
                            case Direction.West: return data.block.west();
                            default: return data.block;
                        }
                    }
                    const block = GetBlock();
                    if (!block)
                        continue;
                    let BannedBlocks = [
                        MinecraftBlockTypes.Air, MinecraftBlockTypes.LightBlock0, MinecraftBlockTypes.LightBlock1,
                        MinecraftBlockTypes.LightBlock2, MinecraftBlockTypes.LightBlock3, MinecraftBlockTypes.LightBlock4,
                        MinecraftBlockTypes.LightBlock5, MinecraftBlockTypes.LightBlock6, MinecraftBlockTypes.LightBlock7,
                        MinecraftBlockTypes.LightBlock8, MinecraftBlockTypes.LightBlock9, MinecraftBlockTypes.LightBlock10,
                        MinecraftBlockTypes.LightBlock11, MinecraftBlockTypes.LightBlock12, MinecraftBlockTypes.LightBlock13,
                        MinecraftBlockTypes.LightBlock14, MinecraftBlockTypes.LightBlock15, MinecraftBlockTypes.Barrier,
                        MinecraftBlockTypes.Jigsaw, MinecraftBlockTypes.StructureBlock, MinecraftBlockTypes.CommandBlock,
                        MinecraftBlockTypes.ChainCommandBlock, MinecraftBlockTypes.RepeatingCommandBlock, MinecraftBlockTypes.BorderBlock,
                        MinecraftBlockTypes.Allow, MinecraftBlockTypes.Deny, MinecraftBlockTypes.Bedrock, MinecraftBlockTypes.ReinforcedDeepslate
                    ];
                    if (BannedBlocks.includes(block.typeId) || block.isLiquid || block.isAir)
                        continue;
                    const block_location = `${block.x} ${block.y} ${block.z}`;
                    const replacedAs = block.isWaterlogged ? MinecraftBlockTypes.FlowingWater : MinecraftBlockTypes.Air;
                    data.dimension.runCommand(`execute positioned ${block_location} run setblock ~~~ ${replacedAs} destroy`);
                }
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 1));
                return;
            }
            if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState(ActiveState, 0));
                return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:change_state", {
        onPlayerInteract(data, componentInfo) {
            const component = componentInfo.params;
            if ((typeof component.face != "string" && !component.face.includes(data.face)) || (data.block.permutation.getState("minecraft:block_face") == data.face.toLowerCase()))
                return;
            data.block.setPermutation(data.block.permutation.withState("minecraft:block_face", data.face.toLowerCase()));
            if (component.sound) {
                data.dimension.playSound(component.sound.identifier, data.block.location, { pitch: component.sound.pitch, volume: component.sound.volume });
            }
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:transform_blocks", {
        onUseOn(data, componentInfo) {
            const component = componentInfo.params;
            for (const blocks of component.transforms) {
                let toBlock = blocks.substring(blocks.indexOf("::") + 2);
                const fromBlock = blocks.substring(0, blocks.indexOf("::"));
                //console.warn(`From: ${fromBlock}, To: ${toBlock}, Block: ${data.block.typeId}`)
                if (data.block.typeId != fromBlock)
                    continue;
                if (toBlock.includes("{")) {
                    const permutationString = toBlock.substring(toBlock.indexOf("{"));
                    toBlock = toBlock.substring(0, toBlock.indexOf("{"));
                    //console.warn(`To: ${toBlock}, Permutations: ${permutationString}, Block: ${data.block.typeId}`)
                    const permutations = JSON.parse(permutationString);
                    data.block.setPermutation(BlockPermutation.resolve(toBlock, permutations));
                }
                else
                    data.block.setType(toBlock);
                PokeDamageItemUB(data.itemStack, 1, data.source, EquipmentSlot.Mainhand);
                break;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:sponge_block", {
        onPlace(data, componentInfo) {
            var _a, _b, _c, _d, _e, _f;
            const component = componentInfo.params;
            if (!component.mode.includes("place"))
                return;
            for (const blockId of component.check_for_blocks) {
                switch (blockId) {
                    case (_a = data.block.north()) === null || _a === void 0 ? void 0 : _a.typeId: break;
                    case (_b = data.block.south()) === null || _b === void 0 ? void 0 : _b.typeId: break;
                    case (_c = data.block.east()) === null || _c === void 0 ? void 0 : _c.typeId: break;
                    case (_d = data.block.west()) === null || _d === void 0 ? void 0 : _d.typeId: break;
                    case (_e = data.block.below()) === null || _e === void 0 ? void 0 : _e.typeId: break;
                    case (_f = data.block.above()) === null || _f === void 0 ? void 0 : _f.typeId: break;
                    case "all": break;
                    default: continue;
                }
                data.block.setType(component.turns_into);
                if (component.adds_to_stat) {
                    ComputersCompat.addStat(component.adds_to_stat, 1);
                }
                if (component.sound) {
                    data.dimension.playSound(component.sound.identifier, data.block.location, { pitch: component.sound.pitch, volume: component.sound.volume });
                }
                const X = component.sponge_size[0];
                const Y = component.sponge_size[1];
                const Z = component.sponge_size[2];
                const startLocation = {
                    x: Math.round(data.block.location.x - (X / 2)) + component.offset[0],
                    y: Math.round(data.block.location.y - (Y / 2) + component.offset[1]),
                    z: Math.round(data.block.location.z - (Z / 2)) + component.offset[2]
                };
                const endLocation = {
                    x: startLocation.x + ((X > 0 ? X - 1 : X == 0 ? 0 : X + 1)),
                    y: startLocation.y + ((Y > 0 ? Y - 1 : Y == 0 ? 0 : Y + 1)),
                    z: startLocation.z + ((Z > 0 ? Z - 1 : Z == 0 ? 0 : Z + 1))
                };
                data.dimension.fillBlocks(new BlockVolume(startLocation, endLocation), MinecraftBlockTypes.Air, { blockFilter: { includeTypes: component.check_for_blocks == "all" ? undefined : component.check_for_blocks }, ignoreChunkBoundErrors: true });
                break;
            }
            return;
        },
        onTick(data, componentInfo) {
            var _a, _b, _c, _d, _e, _f;
            const component = componentInfo.params;
            if (!component.mode.includes("tick"))
                return;
            for (const blockId of component.check_for_blocks) {
                switch (blockId) {
                    case (_a = data.block.north()) === null || _a === void 0 ? void 0 : _a.typeId: break;
                    case (_b = data.block.south()) === null || _b === void 0 ? void 0 : _b.typeId: break;
                    case (_c = data.block.east()) === null || _c === void 0 ? void 0 : _c.typeId: break;
                    case (_d = data.block.west()) === null || _d === void 0 ? void 0 : _d.typeId: break;
                    case (_e = data.block.below()) === null || _e === void 0 ? void 0 : _e.typeId: break;
                    case (_f = data.block.above()) === null || _f === void 0 ? void 0 : _f.typeId: break;
                    case "all": break;
                    default: continue;
                }
                data.block.setType(component.turns_into);
                if (component.adds_to_stat) {
                    ComputersCompat.addStat(component.adds_to_stat, 1);
                }
                if (component.sound) {
                    data.dimension.playSound(component.sound.identifier, data.block.location, { pitch: component.sound.pitch, volume: component.sound.volume });
                }
                const X = component.sponge_size[0];
                const Y = component.sponge_size[1];
                const Z = component.sponge_size[2];
                const startLocation = {
                    x: Math.round(data.block.location.x - (X / 2)) + component.offset[0],
                    y: Math.round(data.block.location.y - (Y / 2) + component.offset[1]),
                    z: Math.round(data.block.location.z - (Z / 2)) + component.offset[2]
                };
                const endLocation = {
                    x: startLocation.x + ((X > 0 ? X - 1 : X == 0 ? 0 : X + 1)),
                    y: startLocation.y + ((Y > 0 ? Y - 1 : Y == 0 ? 0 : Y + 1)),
                    z: startLocation.z + ((Z > 0 ? Z - 1 : Z == 0 ? 0 : Z + 1))
                };
                data.dimension.fillBlocks(new BlockVolume(startLocation, endLocation), MinecraftBlockTypes.Air, { blockFilter: { includeTypes: component.check_for_blocks == "all" ? undefined : component.check_for_blocks }, ignoreChunkBoundErrors: true });
                break;
            }
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:spawn_entity", {
        onUseOn(data, componentInfo) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            const component = componentInfo.params;
            if (data.itemStack.typeId == "poke:wither_spawner") {
                let options = JSON.parse(world.getDynamicProperty(PFEDisableConfigName).toString());
                if (!options.witherSpawner)
                    return;
            }
            const player = data.source;
            if (player.typeId != MinecraftEntityTypes.Player)
                return;
            let spawnLocation = data.block.center();
            switch (data.blockFace) {
                case Direction.North: {
                    spawnLocation = (_b = (_a = data.block.north()) === null || _a === void 0 ? void 0 : _a.center()) !== null && _b !== void 0 ? _b : { x: spawnLocation.x, y: spawnLocation.y, z: spawnLocation.z - 1 };
                    break;
                }
                case Direction.South: {
                    spawnLocation = (_d = (_c = data.block.south()) === null || _c === void 0 ? void 0 : _c.center()) !== null && _d !== void 0 ? _d : { x: spawnLocation.x, y: spawnLocation.y, z: spawnLocation.z + 1 };
                    break;
                }
                case Direction.East: {
                    spawnLocation = (_f = (_e = data.block.east()) === null || _e === void 0 ? void 0 : _e.center()) !== null && _f !== void 0 ? _f : { x: spawnLocation.x + 1, y: spawnLocation.y, z: spawnLocation.z };
                    break;
                }
                case Direction.West: {
                    spawnLocation = (_h = (_g = data.block.west()) === null || _g === void 0 ? void 0 : _g.center()) !== null && _h !== void 0 ? _h : { x: spawnLocation.x - 1, y: spawnLocation.y, z: spawnLocation.z };
                    break;
                }
                case Direction.Up: {
                    spawnLocation = (_k = (_j = data.block.above()) === null || _j === void 0 ? void 0 : _j.center()) !== null && _k !== void 0 ? _k : { x: spawnLocation.x, y: spawnLocation.y + 1, z: spawnLocation.z };
                    break;
                }
                case Direction.Down: {
                    spawnLocation = (_m = (_l = data.block.below()) === null || _l === void 0 ? void 0 : _l.center()) !== null && _m !== void 0 ? _m : { x: spawnLocation.x, y: spawnLocation.y - 1, z: spawnLocation.z };
                    break;
                }
            }
            const equippableComponent = data.source.getComponent(EntityComponentTypes.Equippable);
            player.dimension.spawnEntity(component.entity, spawnLocation);
            if (player.getGameMode() == GameMode.Creative)
                return;
            if (data.itemStack.amount <= 1) {
                equippableComponent === null || equippableComponent === void 0 ? void 0 : equippableComponent.setEquipment(EquipmentSlot.Mainhand, undefined);
                return;
            }
            equippableComponent === null || equippableComponent === void 0 ? void 0 : equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(data.itemStack.typeId, data.itemStack.amount - 1));
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:launch_user", {
        onUse(data, componentInfo) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (data.itemStack === undefined)
                return;
            const component = componentInfo.params;
            if (component.sneaking_stops_this && data.source.isSneaking)
                return;
            const vierDirection = data.source.getViewDirection();
            const location = data.source.getHeadLocation();
            const cooldownComp = data.itemStack.getComponent(ItemComponentTypes.Cooldown);
            if (component.grant_effect) {
                data.source.addEffect((_a = component.grant_effect) === null || _a === void 0 ? void 0 : _a.effect, (_c = (_b = component.grant_effect) === null || _b === void 0 ? void 0 : _b.duration) !== null && _c !== void 0 ? _c : 60, { amplifier: (_e = (_d = component.grant_effect) === null || _d === void 0 ? void 0 : _d.amp) !== null && _e !== void 0 ? _e : 0, showParticles: (_f = component.grant_effect.particles) !== null && _f !== void 0 ? _f : false });
            }
            data.source.applyKnockback({ x: vierDirection.x * ((_g = component.horizontal_strength) !== null && _g !== void 0 ? _g : 1), z: vierDirection.z * ((_h = component.horizontal_strength) !== null && _h !== void 0 ? _h : 1) }, vierDirection.y * ((_j = component.vertical_strength) !== null && _j !== void 0 ? _j : 1));
            if (component.spawn_particles) {
                for (let particle of component.spawn_particles) {
                    if (!particle)
                        continue;
                    data.source.spawnParticle(particle, location);
                }
            }
            if (component.play_sound) {
                data.source.playSound(component.play_sound.identifier, { pitch: component.play_sound.pitch });
            }
            if (component.trigger_cooldown) {
                cooldownComp === null || cooldownComp === void 0 ? void 0 : cooldownComp.startCooldown(data.source);
            }
            if (component.take_durability) {
                PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:run_command", {
        onUse(data, component) {
            var _a, _b;
            if (!data.itemStack)
                return;
            const componentInfo = component.params;
            if (!(componentInfo.mode == undefined || componentInfo.mode.includes("on_use")))
                return;
            if (componentInfo.can_be_disabled) {
                let options = (_a = JSON.parse(world.getDynamicProperty(PFEDisableConfigName).toString())) !== null && _a !== void 0 ? _a : PFEDisableConfigDefault;
                switch (true) {
                    case (data.itemStack.typeId == "poke:player_magnet" && options.playerMagnet === false)
                        || (data.itemStack.typeId == "poke:quantum_teleporter" && options.quantumTeleporter === false)
                        || (data.itemStack.typeId == "poke:sundial" && options.quantumTeleporter === false)
                        || (data.itemStack.typeId == "poke:kapow_ring" && options.quantumTeleporter === false):
                        {
                            data.source.sendMessage({ translate: `§f[§e!§f] §c%translation.poke_pfe.feature_disabled§r` });
                            return;
                        }
                }
            }
            if (typeof componentInfo.command == "string")
                data.source.runCommand(componentInfo.command);
            else if (componentInfo.command)
                for (const command of componentInfo.command) {
                    data.source.runCommand(command);
                }
            if (componentInfo.trigger_cooldown)
                (_b = data.itemStack.getComponent(ItemComponentTypes.Cooldown)) === null || _b === void 0 ? void 0 : _b.startCooldown(data.source);
            if (componentInfo.take_durability !== false)
                PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            return;
        },
        onUseOn(data, component) {
            var _a, _b;
            if (!data.itemStack)
                return;
            const componentInfo = component.params;
            if (!((_a = componentInfo.mode) === null || _a === void 0 ? void 0 : _a.includes("on_use_on")))
                return;
            const player = data.source;
            if (player.typeId != MinecraftEntityTypes.Player)
                return;
            if (typeof componentInfo.command == "string")
                data.block.dimension.runCommand(`execute at ${data.block.x} ${data.block.y} ${data.block.z} run ${componentInfo.command}`);
            else if (componentInfo.command)
                for (const command of componentInfo.command) {
                    data.block.dimension.runCommand(`execute at ${data.block.x} ${data.block.y} ${data.block.z} run ${command}`);
                }
            if (componentInfo.trigger_cooldown)
                (_b = data.itemStack.getComponent(ItemComponentTypes.Cooldown)) === null || _b === void 0 ? void 0 : _b.startCooldown(player);
            if (componentInfo.take_durability !== false)
                PokeDamageItemUB(data.itemStack, undefined, player, EquipmentSlot.Mainhand);
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:play_music", {
        onUse(data, component) {
            var _a, _b, _c, _d, _e, _f, _g;
            const componentInfo = component.params;
            data.source.playSound((_a = componentInfo.trigger_sound) !== null && _a !== void 0 ? _a : "poke_pfe.cassette_activate");
            if (componentInfo.can_queue != false && data.source.isSneaking) {
                data.source.queueMusic(componentInfo.music, { volume: (_b = componentInfo.music_volume) !== null && _b !== void 0 ? _b : undefined, loop: (_c = componentInfo.loop_music) !== null && _c !== void 0 ? _c : undefined });
                if (componentInfo.display_queue_message != false) {
                    data.source.sendMessage({ translate: (_d = componentInfo.queue_message) !== null && _d !== void 0 ? _d : "%poke_pfe.track_queued" });
                }
                return;
            }
            data.source.playMusic(componentInfo.music, { fade: (_e = componentInfo.music_fade_amount) !== null && _e !== void 0 ? _e : 2.5, volume: (_f = componentInfo.music_volume) !== null && _f !== void 0 ? _f : undefined, loop: (_g = componentInfo.loop_music) !== null && _g !== void 0 ? _g : undefined });
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:recipe_block", new RecipeBlockComponent());
    //data.itemComponentRegistry.registerCustomComponent("poke_pfe:recipe_item", new RecipeItemComponent())
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:upgradeable", new PFEUpgradeableComponent());
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:box_mining", new PFEBoxMiningComponent());
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:quests", new PFEQuestComponent());
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:waypoint_menu", new PFEWaypointComponent());
    // These components exist to allow item.getComponent() to access data from applicable items/blocks
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:custom_recipes", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:icon_path", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:set_effects", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:custom_upgrades", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:custom_quests_info", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:incompatible_addons", {});
    return;
});
world.afterEvents.worldLoad.subscribe((data) => {
    var _a;
    world.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify([]));
    world.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify([]));
    world.setDynamicProperty(PFECustomFarmQuestsPropertyID, JSON.stringify([]));
    world.setDynamicProperty(PFECustomCraftQuestsPropertyID, JSON.stringify([]));
    world.setDynamicProperty(PFECustomKillQuestsPropertyID, JSON.stringify([]));
    world.setDynamicProperty(PFECustomArmorEffectDynamicProperty, JSON.stringify([]));
    system.runTimeout(() => {
        PFETimeValidation();
    }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20);
    if (typeof world.getDynamicProperty(PFEDisableConfigName) != "string") {
        world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(PFEDisableConfigDefault));
    }
    const birthdayProperty = world.getDynamicProperty(`poke:birthdays`);
    if (typeof birthdayProperty != "string")
        world.setDynamicProperty(`poke:birthdays`, `[]`);
    const CustomEventsDynamicProp = world.getDynamicProperty(`poke:customEvents`);
    typeof CustomEventsDynamicProp == "string" ?
        (_a = JSON.parse(CustomEventsDynamicProp)) !== null && _a !== void 0 ? _a : world.setDynamicProperty(`poke:customEvents`, `[]`)
        : world.setDynamicProperty(`poke:customEvents`, `[]`);
    //console.warn(`Custom events were invalid; resetting to default (Ignore if this world was just created) || Poke-Calendar`)
    if (typeof world.getDynamicProperty(PFEBossEventConfigName) == "string") {
        let settings = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName).toString());
        //To prevent errors it will reset the settings to default if a setting was missing/invalid
        if ((typeof settings.ticks != "number") || (typeof settings.furnaceGolem != "object") || (typeof settings.knightling != "object") || (typeof settings.listener != "object") || (typeof settings.zombken != "object") || (typeof settings.miniDemonicAllay != "object") || (typeof settings.necromancer != "object") || (typeof settings.snowman != "object") || (typeof settings.sparky != "object") || (typeof settings.superStriker != "object") || (typeof settings.theLogger != "object")) {
            //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
            world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
        }
        ;
    }
    else {
        //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
        world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
    }
    /* Outgoing Addon Compatibility:*/
    initExampleStickers();
    ComputersCompat.init();
    world.setDynamicProperty("poke_pfe:bossEventIntervalId", startBossEvents());
    world.setDynamicProperty("poke_pfe:setEffectIntervalId", startSetEffects());
    system.sendScriptEvent("poke_pfe:dupe_check", `${currentVersion}`);
    //console.warn(`Within PFE: ${JSON.stringify(new ItemStack("poke_pfe:custom_data_storage", 1).getComponent(`poke_pfe:incompatible_addons`))}`)
});
const DataStorageDynamicPropertyId = "registered_data_storage_items";
/*Incoming Addon Compatibility/Integrations*/
system.afterEvents.scriptEventReceive.subscribe((data) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    switch (data.id) {
        /**
         This will send true (as a string) to the scriptevent defined in the message part

        example command: `scriptevent poke_pfe:enabled poke_pfe:receive_test`

        - in this case it will send true to poke_pfe:receive_test
         */
        case `poke_pfe:enabled`: {
            system.sendScriptEvent(data.message, "true");
            break;
        }
        /*
        This will be used to have PFE use the item provided as a form of data storage

        What this means is you can use that item's components to import data that would normally be sent via /scriptevent
        */
        case `poke_custom:register_data_storage`: {
            const dynamicProperty = world.getDynamicProperty(DataStorageDynamicPropertyId);
            const registeredItems = (_a = JSON.parse(typeof dynamicProperty == "string" ? dynamicProperty : "[]")) !== null && _a !== void 0 ? _a : [];
            world.setDynamicProperty(DataStorageDynamicPropertyId, JSON.stringify(registeredItems.concat(data.message)));
            break;
        }
        /*
        This can be used to add additional presets to the set effects
        */
        case `poke_pfe:add_set_effect_preset`: {
            const currentPresets = (_b = JSON.parse(world.getDynamicProperty(PFECustomArmorEffectDynamicProperty).toString())) !== null && _b !== void 0 ? _b : [];
            let newPresets = (_c = currentPresets.concat(JSON.parse(data.message).value)) !== null && _c !== void 0 ? _c : currentPresets;
            world.setDynamicProperty(PFECustomArmorEffectDynamicProperty, JSON.stringify(newPresets));
            break;
        }
        /*
        Theses can be used to add quests into PFE's quest system
        see `scripts\quests.ts` for more info
        */
        case PFECustomMineQuestsPropertyID: {
            const currentQuests = (_d = JSON.parse(world.getDynamicProperty(PFECustomMineQuestsPropertyID).toString())) !== null && _d !== void 0 ? _d : [];
            let newQuests = (_e = currentQuests.concat(JSON.parse(data.message).value)) !== null && _e !== void 0 ? _e : currentQuests;
            world.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify(newQuests));
            break;
        }
        case PFECustomKillQuestsPropertyID: {
            const currentQuests = (_f = JSON.parse(world.getDynamicProperty(PFECustomKillQuestsPropertyID).toString())) !== null && _f !== void 0 ? _f : [];
            let newQuests = (_g = currentQuests.concat(JSON.parse(data.message).value)) !== null && _g !== void 0 ? _g : currentQuests;
            world.setDynamicProperty(PFECustomKillQuestsPropertyID, JSON.stringify(newQuests));
            break;
        }
        case PFECustomFarmQuestsPropertyID: {
            const currentQuests = (_h = JSON.parse(world.getDynamicProperty(PFECustomFarmQuestsPropertyID).toString())) !== null && _h !== void 0 ? _h : [];
            let newQuests = (_j = currentQuests.concat(JSON.parse(data.message).value)) !== null && _j !== void 0 ? _j : currentQuests;
            world.setDynamicProperty(PFECustomFarmQuestsPropertyID, JSON.stringify(newQuests));
        }
        case PFECustomCraftQuestsPropertyID: {
            const currentQuests = (_k = JSON.parse(world.getDynamicProperty(PFECustomCraftQuestsPropertyID).toString())) !== null && _k !== void 0 ? _k : [];
            let newQuests = (_l = currentQuests.concat(JSON.parse(data.message).value)) !== null && _l !== void 0 ? _l : currentQuests;
            world.setDynamicProperty(PFECustomCraftQuestsPropertyID, JSON.stringify(newQuests));
        }
        case (`poke:test`): {
            let item = (_o = (_m = data.sourceEntity) === null || _m === void 0 ? void 0 : _m.getComponent(EntityComponentTypes.Equippable)) === null || _o === void 0 ? void 0 : _o.getEquipment(EquipmentSlot.Mainhand);
            item === null || item === void 0 ? void 0 : item.setDynamicProperty(`poke:ammo`, JSON.stringify({ v: 2, max: 32, amount: 12, entityId: "poke:galaxy_arrow", id: "poke:galaxy_arrow", upgrades: [{ id: "pfe:capacity", level: 1, maxLevel: undefined }, { id: "pfe:flaming", level: 0, maxLevel: 1 }] }));
            (_q = (_p = data.sourceEntity) === null || _p === void 0 ? void 0 : _p.getComponent(EntityComponentTypes.Equippable)) === null || _q === void 0 ? void 0 : _q.setEquipment(EquipmentSlot.Mainhand, item);
        }
        // This is to check if there are multiple versions of PFE applied to a world at a time
        case ("poke_pfe:dupe_check"): {
            const Version = Number(data.message);
            if (Version < currentVersion) {
                world.sendMessage(`§f[§eWARNING§f] Multiple versions PFE are applied to this world, to avoid any issue: please remove any old versions || §eOld version: §fv${data.message.substring(0, 1)}.${Number(data.message.substring(1, 3))}.${Number(`${data.message}`.substring(3, 5))}${Number(`${data.message}`.substring(5)) != 0 ? `${data.message}`.substring(5) : ""}`);
                console.warn(`Multiple versions PFE found:\n- Old version: ${Version} (v${data.message.substring(0, 1)}.${Number(data.message.substring(1, 3))}.${Number(`${data.message}`.substring(3, 5))}${Number(`${data.message}`.substring(5)) != 0 ? `${data.message}`.substring(5) : ""})\n- Current version: ${currentVersion} (v${`${currentVersion}`.substring(0, 1)}.${Number(`${currentVersion}`.substring(1, 3))}.${Number(`${currentVersion}`.substring(3, 5))}${Number(`${currentVersion}`.substring(5)) != 0 ? `${currentVersion}`.substring(5) : ""})`);
            }
        }
        default: break;
    }
});
//# sourceMappingURL=main.js.map