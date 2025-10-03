import { BlockPermutation, Direction, EntityComponentTypes, EquipmentSlot, GameMode, ItemComponentTypes, ItemStack, system, world } from "@minecraft/server";
import { PokeTimeConfigUIMainMenu } from "../time";
import { MinecraftEffectTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { PFEBoltBowsComponent } from "../boltbow";
import { OpenPFEConfig, PFEDisableConfigDefault, PFEDisableConfigName } from "../config";
import { PokeDamageItemUB, PokeDecrementStack } from "../commonFunctions";
import { PFEStartBossEvent } from "../bossEvents";
import { PFEWaypointComponent } from "../waypoints";
import { PFEBoxMiningComponent } from "../boxMining";
import { PFEQuestComponent } from "../quests";
import { PFEUpgradeableComponent } from "../upgrades";
export { RegisterItemComponents };
function RegisterItemComponents(data) {
    //data.itemComponentRegistry.registerCustomComponent("poke_pfe:recipe_item", new RecipeItemComponent())
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:upgradeable", new PFEUpgradeableComponent());
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:box_mining", new PFEBoxMiningComponent());
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:quests", new PFEQuestComponent());
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:waypoint_menu", new PFEWaypointComponent());
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:icon_path", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:set_effects", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:custom_upgrades", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:custom_quests_info", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:incompatible_addons", {});
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:timeConfig", {
        onUse(data, componentInfo) {
            PokeTimeConfigUIMainMenu(data.source);
        }
    });
    data.itemComponentRegistry.registerCustomComponent(`poke_pfe:identifier`, {
        onUseOn(data, componentInfo) {
            if (data.source.typeId == MinecraftEntityTypes.Player) {
                const player = data.source;
                player.sendMessage({ translate: `translation.poke_pfe:identifierMessage`, with: [data.block.typeId] });
            }
        }
    });
    data.itemComponentRegistry.registerCustomComponent(`poke_pfe:boltbow`, new PFEBoltBowsComponent());
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:boss_event", {
        onUse(data, componentInfo) {
            let options = JSON.parse(world.getDynamicProperty(PFEDisableConfigName).toString());
            if (!options.bounty)
                return;
            if (PFEStartBossEvent() == 0) {
                data.source.sendMessage({ translate: `translation.poke_pfe:bossEventNoSpawnError` });
                data.source.playSound(`note.didgeridoo`, { pitch: 0.825 });
                return;
            }
            ;
            if (data.source.getGameMode() == GameMode.Creative)
                return;
            data.source.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, PokeDecrementStack(data.itemStack));
        }
    });
    data.itemComponentRegistry.registerCustomComponent('poke_pfe:veinMiner', {
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
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:normalMining", {
        onMineBlock(data, component) {
            PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:shootProjectile", {
        onUse(data, component) {
            if (data.itemStack == undefined)
                return;
            if (data.itemStack.typeId == "poke_pfe:nuke_ring") {
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
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:hitEffects", {
        onHitEntity(data, component) {
            switch (data.itemStack?.typeId) {
                case 'poke_pfe:demonic_sword': {
                    data.hitEntity.addEffect('slowness', 100, { amplifier: 3 });
                    return;
                }
                case 'poke_pfe:hellish_blade': {
                    data.hitEntity.addEffect('slowness', 40, { amplifier: 3 });
                    return;
                }
                case 'poke_pfe:godly_sword': {
                    data.attackingEntity.addEffect('strength', 100, { amplifier: 2 });
                    return;
                }
                case 'poke_pfe:holy_sword': {
                    data.attackingEntity.addEffect('strength', 40, { amplifier: 1 });
                    return;
                }
                case 'poke_pfe:astral_sword': {
                    data.attackingEntity.addEffect('strength', 100, { amplifier: 2 });
                    return;
                }
                case 'poke_pfe:shade_sword': {
                    data.hitEntity.addEffect('slowness', 40, { amplifier: 2 });
                    data.hitEntity.addEffect('wither', 60, { amplifier: 1 });
                    return;
                }
                case 'poke_pfe:radium_sword': {
                    data.hitEntity.addEffect('slowness', 220, { amplifier: 3 });
                    data.hitEntity.addEffect('wither', 240, { amplifier: 4 });
                    return;
                }
                case 'poke_pfe:amethyst_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 4 });
                    data.hitEntity.addEffect('blindness', 20);
                    return;
                }
                case 'poke_pfe:demonic_slasher': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 });
                    data.hitEntity.addEffect('wither', 80, { amplifier: 1 });
                    return;
                }
                case 'poke_pfe:gold_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
                    data.attackingEntity.addEffect('haste', 600, { amplifier: 2 });
                    return;
                }
                case 'poke_pfe:emerald_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
                    data.attackingEntity.addEffect('village_hero', 2400, { amplifier: 1 });
                    return;
                }
                case 'poke_pfe:iron_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
                    return;
                }
                case 'poke_pfe:onyx_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 5 });
                    data.attackingEntity.addEffect('jump_boost', 100, { amplifier: 2 });
                    data.hitEntity.addEffect('weakness', 120, { amplifier: 2 });
                    return;
                }
                case 'poke_pfe:godly_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.attackingEntity.addEffect('slow_falling', 2400);
                    data.attackingEntity.addEffect('jump_boost', 1200, { amplifier: 3 });
                    return;
                }
                case 'poke_pfe:hellish_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 });
                    data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 2400);
                    data.hitEntity.addEffect('mining_fatigue', 400, { amplifier: 1 });
                    return;
                }
                case 'poke_pfe:holy_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.attackingEntity.addEffect('slow_falling', 2400, { amplifier: 1 });
                    data.hitEntity.addEffect('darkness', 400);
                    return;
                }
                case 'poke_pfe:shade_scythe': {
                    data.attackingEntity.addEffect('absorption', 600, { amplifier: 1 });
                    data.attackingEntity.addEffect('strength', 100, { amplifier: 1 });
                    data.hitEntity.addEffect('slowness', 160, { amplifier: 2 });
                    return;
                }
                case 'poke_pfe:diamond_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 });
                    data.hitEntity.addEffect('weakness', 100, { amplifier: 1 });
                    data.hitEntity.addEffect('blindness', 80);
                    return;
                }
                case 'poke_pfe:netherite_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 });
                    data.hitEntity.addEffect('hunger', 120, { amplifier: 1 });
                    data.hitEntity.addEffect('slowness', 80, { amplifier: 2 });
                    return;
                }
                case 'poke_pfe:radium_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 5 });
                    data.hitEntity.addEffect('nausea', 80, { amplifier: 1 });
                    data.hitEntity.addEffect('fatal_poison', 160, { amplifier: 2 });
                    return;
                }
                case 'poke_pfe:medic_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
                    data.attackingEntity.addEffect('health_boost', 2400, { amplifier: 2 });
                    return;
                }
                case 'poke_pfe:galactic_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 9 });
                    data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300);
                    data.hitEntity.addEffect('wither', 80, { amplifier: 2 });
                    data.hitEntity.addEffect('weakness', 80, { amplifier: 2 });
                    return;
                }
                case 'poke_pfe:astral_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 120, { amplifier: 9 });
                    data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300);
                    data.hitEntity.addEffect('wither', 120, { amplifier: 2 });
                    data.hitEntity.addEffect('weakness', 120, { amplifier: 3 });
                    return;
                }
                case 'poke_pfe:ember_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
                    data.hitEntity.addEffect('nausea', 80, { amplifier: 1 });
                    data.hitEntity.addEffect('blindness', 80);
                    return;
                }
                case 'poke_pfe:void_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.hitEntity.runCommand('function poke/pfe/void_scythe');
                    return;
                }
                case 'poke_pfe:death_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.hitEntity.runCommand('function poke/pfe/death_scythe');
                    return;
                }
                case 'poke_pfe:nebula_scythe': {
                    data.attackingEntity.runCommand('function poke/pfe/nebula_scythe');
                    data.hitEntity.addEffect('wither', 80, { amplifier: 3 });
                    return;
                }
                case 'poke_pfe:cobalt_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
                    data.hitEntity.addEffect('wither', 40, { amplifier: 1 });
                    return;
                }
                case 'poke_pfe:nebula_sword': {
                    data.attackingEntity.addEffect('strength', 40, { amplifier: 4 });
                    data.hitEntity.addEffect('weakness', 20, { amplifier: 2 });
                    return;
                }
                case 'poke_pfe:ban_hammer': {
                    data.attackingEntity.addEffect('strength', 40, { amplifier: 1 });
                    return;
                }
                case 'poke_pfe:circuit_sword': {
                    data.attackingEntity.runCommand('function poke/pfe/circuit_sword');
                    data.hitEntity.addEffect('blindness', 100);
                    return;
                }
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:consumeEffects", {
        onConsume(data, component) {
            switch (data.itemStack.typeId) {
                case 'poke_pfe:xp_vial':
                    {
                        data.source.runCommand("xp 160 @s");
                        return;
                    }
                    ;
                case 'poke_pfe:cobalt_potion': {
                    data.source.addEffect(MinecraftEffectTypes.NightVision, 3600);
                    data.source.addEffect(MinecraftEffectTypes.Regeneration, 2400);
                }
                case 'poke_pfe:cobalt_soup':
                    {
                        data.source.addEffect(MinecraftEffectTypes.NightVision, 2400, { showParticles: false });
                        return;
                    }
                    ;
                case 'poke_pfe:root_beer':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4, });
                        return;
                    }
                    ;
                case 'poke_pfe:pumpkin_spice':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Invisibility, 600);
                        data.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4, });
                        return;
                    }
                    ;
                case 'poke_pfe:crimson_sporeshroom_stew':
                    {
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
                        return;
                    }
                    ;
                case 'poke_pfe:warped_sporeshroom_stew':
                    {
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
                        return;
                    }
                    ;
                case 'poke_pfe:hellish_soup':
                    {
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
                        return;
                    }
                    ;
                case 'poke_pfe:nebula_noodles':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Strength, 600, { amplifier: 7, });
                        return;
                    }
                    ;
                case 'poke_pfe:milk_bottle':
                    {
                        data.source.runCommand("effect @s clear");
                        return;
                    }
                    ;
                case 'poke_pfe:demonic_potion':
                    {
                        data.source.addEffect(MinecraftEffectTypes.NightVision, 12000);
                        data.source.addEffect(MinecraftEffectTypes.Strength, 6000, { amplifier: 2 });
                        data.source.addEffect(MinecraftEffectTypes.Regeneration, 12000, { amplifier: 1 });
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 12000);
                        return;
                    }
                    ;
                case 'poke_pfe:hellish_potion':
                    {
                        data.source.addEffect(MinecraftEffectTypes.NightVision, 12000);
                        data.source.addEffect(MinecraftEffectTypes.Regeneration, 12000);
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 12000);
                        return;
                    }
                    ;
                case 'poke_pfe:nebula_potion':
                    {
                        data.source.addEffect(MinecraftEffectTypes.NightVision, 36000);
                        data.source.addEffect(MinecraftEffectTypes.Haste, 24000, { amplifier: 4 });
                        data.source.addEffect(MinecraftEffectTypes.Regeneration, 24000, { amplifier: 2 });
                        data.source.addEffect(MinecraftEffectTypes.Speed, 24000, { amplifier: 4 });
                        data.source.addEffect(MinecraftEffectTypes.VillageHero, 24000, { amplifier: 2 });
                        return;
                    }
                    ;
                case 'poke_pfe:void_potion':
                    {
                        data.source.addEffect(MinecraftEffectTypes.NightVision, 36000);
                        data.source.addEffect(MinecraftEffectTypes.Haste, 12000, { amplifier: 2 });
                        data.source.addEffect(MinecraftEffectTypes.Regeneration, 12000, { amplifier: 1 });
                        data.source.addEffect(MinecraftEffectTypes.Speed, 24000, { amplifier: 4 });
                        return;
                    }
                    ;
                case 'poke_pfe:death_potion':
                    {
                        data.source.kill();
                        return;
                    }
                    ;
                case 'poke_pfe:rotten_chicken':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Nausea, 400);
                        return;
                    }
                    ;
                case 'poke_pfe:golden_chicken':
                    {
                        data.source.addEffect(MinecraftEffectTypes.VillageHero, 400, { amplifier: 1, });
                        return;
                    }
                    ;
                case 'poke_pfe:banished_star_x10':
                    {
                        data.source.runCommand("damage @a[r=100] 32767000 entity_attack entity @s");
                        return;
                    }
                    ;
                case 'poke_pfe:banished_star_x9':
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
            OpenPFEConfig(data.source);
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:cc_dodge", {
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
            cooldownComponent?.startCooldown(data.source);
            if (amount <= 1) {
                equippableComponent?.setEquipment(EquipmentSlot.Mainhand, undefined);
                return;
            }
            equippableComponent?.setEquipment(EquipmentSlot.Mainhand, new ItemStack(data.itemStack.typeId, amount - 1));
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:cc_bowAim", {
        onUse(data, component) {
            const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] });
            var cPlayersLength = cPlayers.length;
            for (var i = cPlayersLength; i > 0; i--) {
                //data.source.playAnimation('animation.humanoid.bow_and_arrow',{stopExpression: '!q.is_using_item', players:[cPlayers[i-1].name]})
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:cc_crossbowAim", {
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
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:teleport", {
        onUse(data, componentInfo) {
            if (!data.itemStack)
                return;
            const component = componentInfo.params;
            const location = component.location == "location_when_used" ? data.source.location : undefined;
            const dimension = component.dimension ? world.getDimension(component.dimension) : data.source.dimension;
            component.dimension;
            if (component.delay) {
                system.runTimeout(() => {
                    data.source.teleport(location ?? data.source.location, { dimension: dimension });
                    if (component.sound) {
                        dimension.playSound(component.sound.identifier, data.source.location, { pitch: component.sound.pitch, volume: component.sound.volume });
                    }
                }, component.delay);
                const cooldownComponent = data.itemStack.getComponent(ItemComponentTypes.Cooldown);
                if (cooldownComponent?.cooldownCategory) {
                    data.source.startItemCooldown(cooldownComponent.cooldownCategory, component.delay + 5);
                }
            }
            else {
                data.source.teleport(location ?? data.source.location, { dimension: dimension });
            }
            if (data.source.getGameMode() != GameMode.Creative) {
                if (component.decrement_stack) {
                    data.source.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, PokeDecrementStack(data.itemStack));
                    return;
                }
                if (component.take_durability) {
                    PokeDamageItemUB(data.itemStack, 1, data.source, EquipmentSlot.Mainhand, false);
                    return;
                }
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
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:spawn_entity", {
        onUseOn(data, componentInfo) {
            const component = componentInfo.params;
            if (data.itemStack.typeId == "poke_pfe:wither_spawner") {
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
                    spawnLocation = data.block.north()?.center() ?? { x: spawnLocation.x, y: spawnLocation.y, z: spawnLocation.z - 1 };
                    break;
                }
                case Direction.South: {
                    spawnLocation = data.block.south()?.center() ?? { x: spawnLocation.x, y: spawnLocation.y, z: spawnLocation.z + 1 };
                    break;
                }
                case Direction.East: {
                    spawnLocation = data.block.east()?.center() ?? { x: spawnLocation.x + 1, y: spawnLocation.y, z: spawnLocation.z };
                    break;
                }
                case Direction.West: {
                    spawnLocation = data.block.west()?.center() ?? { x: spawnLocation.x - 1, y: spawnLocation.y, z: spawnLocation.z };
                    break;
                }
                case Direction.Up: {
                    spawnLocation = data.block.above()?.center() ?? { x: spawnLocation.x, y: spawnLocation.y + 1, z: spawnLocation.z };
                    break;
                }
                case Direction.Down: {
                    spawnLocation = data.block.below()?.center() ?? { x: spawnLocation.x, y: spawnLocation.y - 1, z: spawnLocation.z };
                    break;
                }
            }
            const equippableComponent = data.source.getComponent(EntityComponentTypes.Equippable);
            player.dimension.spawnEntity(component.entity, spawnLocation);
            if (player.getGameMode() == GameMode.Creative)
                return;
            if (data.itemStack.amount <= 1) {
                equippableComponent?.setEquipment(EquipmentSlot.Mainhand, undefined);
                return;
            }
            equippableComponent?.setEquipment(EquipmentSlot.Mainhand, new ItemStack(data.itemStack.typeId, data.itemStack.amount - 1));
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:launch_user", {
        onUse(data, componentInfo) {
            if (data.itemStack === undefined)
                return;
            const component = componentInfo.params;
            if (component.sneaking_stops_this && data.source.isSneaking)
                return;
            const vierDirection = data.source.getViewDirection();
            const location = data.source.getHeadLocation();
            const cooldownComp = data.itemStack.getComponent(ItemComponentTypes.Cooldown);
            if (component.grant_effect) {
                data.source.addEffect(component.grant_effect?.effect, component.grant_effect?.duration ?? 60, { amplifier: component.grant_effect?.amp ?? 0, showParticles: component.grant_effect.particles ?? false });
            }
            data.source.applyKnockback({ x: vierDirection.x * (component.horizontal_strength ?? 1), z: vierDirection.z * (component.horizontal_strength ?? 1) }, vierDirection.y * (component.vertical_strength ?? 1));
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
                cooldownComp?.startCooldown(data.source);
            }
            if (component.take_durability) {
                PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:run_command", {
        onUse(data, component) {
            if (!data.itemStack)
                return;
            const componentInfo = component.params;
            if (!(componentInfo.mode == undefined || componentInfo.mode.includes("on_use")))
                return;
            if (componentInfo.can_be_disabled) {
                let options = JSON.parse(world.getDynamicProperty(PFEDisableConfigName).toString()) ?? PFEDisableConfigDefault;
                switch (true) {
                    case (data.itemStack.typeId == "poke_pfe:player_magnet" && options.playerMagnet === false)
                        || (data.itemStack.typeId == "poke_pfe:quantum_teleporter" && options.quantumTeleporter === false)
                        || (data.itemStack.typeId == "poke_pfe:sundial" && options.sundial === false)
                        || (data.itemStack.typeId == "poke_pfe:kapow_ring" && options.kapowRing === false):
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
                data.itemStack.getComponent(ItemComponentTypes.Cooldown)?.startCooldown(data.source);
            if (componentInfo.take_durability !== false)
                PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            return;
        },
        onUseOn(data, component) {
            if (!data.itemStack)
                return;
            const componentInfo = component.params;
            if (!componentInfo.mode?.includes("on_use_on"))
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
                data.itemStack.getComponent(ItemComponentTypes.Cooldown)?.startCooldown(player);
            if (componentInfo.take_durability !== false)
                PokeDamageItemUB(data.itemStack, undefined, player, EquipmentSlot.Mainhand);
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke_pfe:play_music", {
        onUse(data, component) {
            const componentInfo = component.params;
            data.source.playSound(componentInfo.trigger_sound ?? "poke_pfe.cassette_activate");
            if (componentInfo.can_queue != false && data.source.isSneaking) {
                data.source.queueMusic(componentInfo.music, { volume: componentInfo.music_volume ?? undefined, loop: componentInfo.loop_music ?? undefined });
                if (componentInfo.display_queue_message != false) {
                    data.source.sendMessage({ translate: componentInfo.queue_message ?? "%poke_pfe.track_queued" });
                }
                return;
            }
            data.source.playMusic(componentInfo.music, { fade: componentInfo.music_fade_amount ?? 2.5, volume: componentInfo.music_volume ?? undefined, loop: componentInfo.loop_music ?? undefined });
        }
    });
}
//# sourceMappingURL=item_custom_components.js.map