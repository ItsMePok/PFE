import { BlockComponentTypes, BlockPermutation, BlockVolume, Direction, EntityComponentTypes, EquipmentSlot, GameMode, ItemComponentTypes, ItemStack, LiquidType } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftEnchantmentTypes, MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import ComputersCompat from "../addonCompatibility/jigarbov";
import { pokeAddItemsToContainerOrDrop, PokeClosestCardinal, PokeSpawnLootTable } from "../commonFunctions";
import { RecipeBlockComponent } from "../recipeSystems";
import { Vector3Utils } from "@minecraft/math";
export { RegisterBlockComponents };
function RegisterBlockComponents(data) {
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
            const block_location = data.block.location;
            const gm = data.player?.getGameMode();
            const blockId = data.brokenBlockPermutation.type.id;
            const DoubleState = 'poke_pfe:double';
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
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:trapdoor_event", {
        onPlayerInteract(data, component) {
            const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`;
            const OpenState = 'poke_pfe:trapdoor_open';
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
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:fortune", {
        onPlayerBreak(data, component) {
            const equippableComponent = data.player?.getComponent(EntityComponentTypes.Equippable);
            if (equippableComponent === undefined)
                return;
            if (!equippableComponent.getEquipment(EquipmentSlot.Mainhand)?.hasComponent(ItemComponentTypes.Enchantable))
                return;
            const enchantableComponent = equippableComponent.getEquipment(EquipmentSlot.Mainhand)?.getComponent(ItemComponentTypes.Enchantable);
            if (!enchantableComponent?.hasEnchantment(MinecraftEnchantmentTypes.Fortune))
                return;
            let fortuneLevel = enchantableComponent.getEnchantment(MinecraftEnchantmentTypes.Fortune).level;
            let rng = Math.round(Math.random());
            //console.warn(rng)
            const blockLocation = `${data.block.x} ${data.block.y} ${data.block.z}`;
            const blockId = data.brokenBlockPermutation.type.id.substring(5);
            if (data.player?.getGameMode() == GameMode.Survival) {
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
            if (!data.player)
                return;
            const DoubleState = 'poke_pfe:double';
            if (data.block.permutation.getState(DoubleState) == true)
                return;
            const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`;
            const slabId = data.block.typeId;
            const equippableComponent = data.player.getComponent(EntityComponentTypes.Equippable);
            const mainhand = equippableComponent?.getEquipment(EquipmentSlot.Mainhand);
            if (mainhand != undefined) {
                if (mainhand.typeId == slabId && ((data.block.permutation.getState('minecraft:vertical_half') == "bottom" && data.face == Direction.Up) || (data.block.permutation.getState('minecraft:vertical_half') == "top" && data.face == Direction.Down)) && data.block.permutation.getState(DoubleState) == false) {
                    var itemStackAmount = mainhand.amount - 1;
                    data.block.setWaterlogged(false);
                    data.block.setPermutation(data.block.permutation.withState(DoubleState, true));
                    data.block.dimension.playSound(`use.stone`, data.block.center());
                    if (data.player?.getGameMode() == GameMode.Creative)
                        return;
                    if (itemStackAmount <= 0) {
                        equippableComponent?.setEquipment(EquipmentSlot.Mainhand, undefined);
                        return;
                    }
                    equippableComponent?.setEquipment(EquipmentSlot.Mainhand, new ItemStack(slabId, itemStackAmount));
                    return;
                }
                else
                    return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:cc_phantomic_conduit", {
        onTick(data, component) {
            const ActiveState = 'poke_pfe:active';
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
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:cc_da_conduit", {
        onTick(data, component) {
            const ActiveState = 'poke_pfe:active';
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
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:spawn_item", {
        onTick(data, componentInfo) {
            const component = componentInfo.params;
            if (component.needs_state) {
                if (!data.block.permutation.getState(component.needs_state.name) == component.needs_state.value)
                    return;
            }
            const spawningItem = new ItemStack(component.item.identifier, component.item.amount ?? 1);
            const spawnLocation = Vector3Utils.add(data.block.center(), component.spawn_item_at);
            const spawnAtBlock = data.dimension.getBlock(spawnLocation);
            if (!spawnAtBlock)
                return;
            pokeAddItemsToContainerOrDrop((component.allow_deposit_to_container ? spawnAtBlock.getComponent(BlockComponentTypes.Inventory)?.container : undefined), spawningItem, data.block.dimension, spawnLocation);
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:redstone_state", {
        onTick(data, component) {
            const ActiveState = 'poke_pfe:active';
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
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
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:magnet_block", {
        onTick(data, component) {
            const ActiveState = 'poke_pfe:active';
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
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:crops", {
        onRandomTick(data, component) {
            const GrowthStageState = 'poke_pfe:growth_stage';
            var growth_state = data.block.permutation.getState(GrowthStageState);
            var growth_stage = growth_state + 1;
            if (growth_state != undefined || 6) {
                data.block.setPermutation(data.block.permutation.withState(GrowthStageState, growth_stage));
                return;
            }
            return;
        },
        onPlayerInteract(data, component) {
            const equippableComponent = data.player?.getComponent(EntityComponentTypes.Equippable);
            const mainhandItem = equippableComponent?.getEquipment(EquipmentSlot.Mainhand);
            const GrowthStageState = 'poke_pfe:growth_stage';
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
                if (data.player?.getGameMode() != GameMode.Creative) {
                    if (itemAfterUse1 == 0) {
                        data.player?.runCommand('clear @s bone_meal -1 1');
                        return;
                    }
                    equippableComponent?.setEquipment(EquipmentSlot.Mainhand, new ItemStack(mainhandItem.typeId, itemAfterUse1));
                    return;
                }
                return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:molten_lava_sponge", {
        onRandomTick(data, component) {
            switch (MinecraftBlockTypes.Water || MinecraftBlockTypes.FlowingWater) {
                case data.block.north()?.typeId: break;
                case data.block.south()?.typeId: break;
                case data.block.east()?.typeId: break;
                case data.block.west()?.typeId: break;
                case data.block.below()?.typeId: break;
                case data.block.above()?.typeId: break;
                default: return;
            }
            ;
            data.block.setType(`poke_pfe:lava_sponge`);
            data.dimension.playSound(`random.fizz`, data.block.center());
            data.dimension.spawnParticle(`minecraft:cauldron_explosion_emitter`, data.block.center());
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:cc_block_seat", {
        onPlayerInteract(data, component) {
            if (!data.player)
                return;
            const slabId = data.block.typeId;
            const mainhand = data.player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Mainhand);
            const DoubleState = 'poke_pfe:double';
            const options = {
                type: 'poke_pfe:seat',
                location: data.block.center(),
                maxDistance: 0.24
            };
            if (mainhand?.typeId != slabId && !data.player?.isSneaking) {
                if (data.block.permutation.getState('minecraft:vertical_half') == 'bottom' && data.block.permutation.getState(DoubleState) == false) {
                    if (data.dimension.getEntities(options).length > 0) {
                        return;
                    }
                    else {
                        data.dimension.spawnEntity('poke_pfe:seat', data.block.center()).getComponent('minecraft:rideable')?.addRider(data.player);
                        ComputersCompat.addStat("slabs_sat_on", 1);
                        return;
                    }
                }
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:cc_block_interact", {
        onPlayerInteract(data, component) {
            switch (data.block.typeId) {
                case 'poke_pfe:listener_trophy': {
                    data.player?.playMusic('poke_pfe.they_listen', { fade: 5 });
                    return;
                }
                case 'poke_pfe:furnace_golem_trophy': {
                    data.player?.playMusic('poke_pfe.record.pigstep', { fade: 5 });
                    return;
                }
                case 'poke_pfe:charged_cobalt_block':
                    {
                        data.dimension.spawnEntity('poke_pfe:cobalt_golem', data.block.location);
                        data.block.setType(MinecraftBlockTypes.Air);
                        return;
                    }
                    return;
            }
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:cc_8ball", {
        onPlayerInteract(data, component) {
            var RNG = Math.floor(Math.random() * 19);
            //console.warn(RNG)
            data.player?.sendMessage({ rawtext: [{ translate: `translation.poke_pfe:8ball${RNG}` }] });
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:cc_wall", {
        onPlace(data, component) {
            const NorthBlock = data.block.north();
            const SouthBlock = data.block.south();
            const EastBlock = data.block.east();
            const WestBlock = data.block.west();
            const AboveBlock = data.block.above();
            const BelowBlock = data.block.below();
            const NorthState = 'poke_pfe:wall_n';
            const SouthState = 'poke_pfe:wall_s';
            const EastState = 'poke_pfe:wall_e';
            const WestState = 'poke_pfe:wall_w';
            const AboveState = 'poke_pfe:connected_above';
            const BelowState = 'poke_pfe:connected_below';
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
            const NorthState = 'poke_pfe:wall_n';
            const SouthState = 'poke_pfe:wall_s';
            const EastState = 'poke_pfe:wall_e';
            const WestState = 'poke_pfe:wall_w';
            const AboveState = 'poke_pfe:connected_above';
            const BelowState = 'poke_pfe:connected_below';
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
                                if (data.block.above(i - data.block.y)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.above(i - data.block.y)?.getRedstonePower())) {
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
                                if (data.block.below(Math.abs(i - data.block.y))?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.below(Math.abs(i - data.block.y))?.getRedstonePower())) {
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
                                if (data.block.above(i - data.block.y)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.above(i - data.block.y)?.getRedstonePower())) {
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
                                if (data.block.below(Math.abs(i - data.block.y))?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.below(Math.abs(i - data.block.y))?.getRedstonePower())) {
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
                                if (data.block.north(Math.abs(i - data.block.z))?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.north(Math.abs(i - data.block.z))?.getRedstonePower())) {
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
                                if (data.block.south(i - data.block.z)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.south(i - data.block.z)?.getRedstonePower())) {
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
                                if (data.block.west(Math.abs(i - data.block.x))?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.west(Math.abs(i - data.block.x))?.getRedstonePower())) {
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
                                if (data.block.east(i - data.block.x)?.hasTag(`poke_pfe:elevator`) && !Boolean(data.block.east(i - data.block.x)?.getRedstonePower())) {
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
            const ActiveState = 'poke_pfe:active';
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
                        if (!block || (component.can_replace ? !(component.can_replace.includes(block.typeId)) : !(block.isAir))) {
                            //console.warn("did not meet conditions to place")
                            continue;
                        }
                        ;
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
                            if (block && (parsedBlock.replaces ? parsedBlock.replaces == block.typeId : (component.can_replace ? (component.can_replace?.includes(block.typeId)) : block.isAir))) {
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
            const ActiveState = 'poke_pfe:active';
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
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:sponge_block", {
        onPlace(data, componentInfo) {
            const component = componentInfo.params;
            if (!component.mode.includes("place"))
                return;
            for (const blockId of component.check_for_blocks) {
                switch (blockId) {
                    case data.block.north()?.typeId: break;
                    case data.block.south()?.typeId: break;
                    case data.block.east()?.typeId: break;
                    case data.block.west()?.typeId: break;
                    case data.block.below()?.typeId: break;
                    case data.block.above()?.typeId: break;
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
            const component = componentInfo.params;
            if (!component.mode.includes("tick"))
                return;
            for (const blockId of component.check_for_blocks) {
                switch (blockId) {
                    case data.block.north()?.typeId: break;
                    case data.block.south()?.typeId: break;
                    case data.block.east()?.typeId: break;
                    case data.block.west()?.typeId: break;
                    case data.block.below()?.typeId: break;
                    case data.block.above()?.typeId: break;
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
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:recipe_block", new RecipeBlockComponent());
    data.blockComponentRegistry.registerCustomComponent("poke_pfe:custom_recipes", {});
}
function Post(data, up, down) {
    let Permutation = data.permutation;
    let Post = false;
    let PostCheckNorth = false;
    let PostCheckSouth = false;
    let PostCheckEast = false;
    let PostCheckWest = false;
    const PostState = 'poke_pfe:post_bit';
    const NorthState = 'poke_pfe:wall_n';
    const SouthState = 'poke_pfe:wall_s';
    const EastState = 'poke_pfe:wall_e';
    const WestState = 'poke_pfe:wall_w';
    const AboveState = 'poke_pfe:connected_above';
    const BelowState = 'poke_pfe:connected_below';
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
    const PostState = 'poke_pfe:post_bit';
    const NorthState = 'poke_pfe:wall_n';
    const SouthState = 'poke_pfe:wall_s';
    const EastState = 'poke_pfe:wall_e';
    const WestState = 'poke_pfe:wall_w';
    const AboveState = 'poke_pfe:connected_above';
    const BelowState = 'poke_pfe:connected_below';
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
                if (block.above()?.hasTag(`pfe_wall`)) {
                    UpdatePost(block.above(), true, true);
                }
            }
            else if (up === false) {
                if (block.below()?.hasTag(`pfe_wall`)) {
                    UpdatePost(block.below(), true, false);
                }
            }
            else {
                if (block.above()?.hasTag(`pfe_wall`)) {
                    UpdatePost(block.above(), true, true);
                }
                if (block.below()?.hasTag(`pfe_wall`)) {
                    UpdatePost(block.below(), true, false);
                }
            }
            block.setPermutation(block.permutation.withState(PostState, true));
            return;
        }
    }
    if (up) {
        if (block.above()?.hasTag(`pfe_wall`)) {
            UpdatePost(block.above(), value, true);
        }
    }
    else if (up === false) {
        if (block.below()?.hasTag(`pfe_wall`)) {
            UpdatePost(block.below(), value, false);
        }
    }
    else {
        if (block.above()?.hasTag(`pfe_wall`)) {
            UpdatePost(block.above(), value, true);
        }
        if (block.below()?.hasTag(`pfe_wall`)) {
            UpdatePost(block.below(), value, false);
        }
    }
    block.setPermutation(block.permutation.withState(PostState, value));
}
//# sourceMappingURL=block_custom_components.js.map