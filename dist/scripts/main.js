// scripts/main.ts
import { system as system3, world as world2, EquipmentSlot as EquipmentSlot2, GameMode as GameMode2, EntityComponentTypes as EntityComponentTypes2, ItemComponentTypes as ItemComponentTypes2, ItemStack as ItemStack2, Direction } from "@minecraft/server";

// node_modules/@minecraft/vanilla-data/lib/index.js
var MinecraftBiomeTypes = ((MinecraftBiomeTypes2) => {
  MinecraftBiomeTypes2["BambooJungle"] = "minecraft:bamboo_jungle";
  MinecraftBiomeTypes2["BambooJungleHills"] = "minecraft:bamboo_jungle_hills";
  MinecraftBiomeTypes2["BasaltDeltas"] = "minecraft:basalt_deltas";
  MinecraftBiomeTypes2["Beach"] = "minecraft:beach";
  MinecraftBiomeTypes2["BirchForest"] = "minecraft:birch_forest";
  MinecraftBiomeTypes2["BirchForestHills"] = "minecraft:birch_forest_hills";
  MinecraftBiomeTypes2["BirchForestHillsMutated"] = "minecraft:birch_forest_hills_mutated";
  MinecraftBiomeTypes2["BirchForestMutated"] = "minecraft:birch_forest_mutated";
  MinecraftBiomeTypes2["CherryGrove"] = "minecraft:cherry_grove";
  MinecraftBiomeTypes2["ColdBeach"] = "minecraft:cold_beach";
  MinecraftBiomeTypes2["ColdOcean"] = "minecraft:cold_ocean";
  MinecraftBiomeTypes2["ColdTaiga"] = "minecraft:cold_taiga";
  MinecraftBiomeTypes2["ColdTaigaHills"] = "minecraft:cold_taiga_hills";
  MinecraftBiomeTypes2["ColdTaigaMutated"] = "minecraft:cold_taiga_mutated";
  MinecraftBiomeTypes2["CrimsonForest"] = "minecraft:crimson_forest";
  MinecraftBiomeTypes2["DeepColdOcean"] = "minecraft:deep_cold_ocean";
  MinecraftBiomeTypes2["DeepDark"] = "minecraft:deep_dark";
  MinecraftBiomeTypes2["DeepFrozenOcean"] = "minecraft:deep_frozen_ocean";
  MinecraftBiomeTypes2["DeepLukewarmOcean"] = "minecraft:deep_lukewarm_ocean";
  MinecraftBiomeTypes2["DeepOcean"] = "minecraft:deep_ocean";
  MinecraftBiomeTypes2["DeepWarmOcean"] = "minecraft:deep_warm_ocean";
  MinecraftBiomeTypes2["Desert"] = "minecraft:desert";
  MinecraftBiomeTypes2["DesertHills"] = "minecraft:desert_hills";
  MinecraftBiomeTypes2["DesertMutated"] = "minecraft:desert_mutated";
  MinecraftBiomeTypes2["DripstoneCaves"] = "minecraft:dripstone_caves";
  MinecraftBiomeTypes2["ExtremeHills"] = "minecraft:extreme_hills";
  MinecraftBiomeTypes2["ExtremeHillsEdge"] = "minecraft:extreme_hills_edge";
  MinecraftBiomeTypes2["ExtremeHillsMutated"] = "minecraft:extreme_hills_mutated";
  MinecraftBiomeTypes2["ExtremeHillsPlusTrees"] = "minecraft:extreme_hills_plus_trees";
  MinecraftBiomeTypes2["ExtremeHillsPlusTreesMutated"] = "minecraft:extreme_hills_plus_trees_mutated";
  MinecraftBiomeTypes2["FlowerForest"] = "minecraft:flower_forest";
  MinecraftBiomeTypes2["Forest"] = "minecraft:forest";
  MinecraftBiomeTypes2["ForestHills"] = "minecraft:forest_hills";
  MinecraftBiomeTypes2["FrozenOcean"] = "minecraft:frozen_ocean";
  MinecraftBiomeTypes2["FrozenPeaks"] = "minecraft:frozen_peaks";
  MinecraftBiomeTypes2["FrozenRiver"] = "minecraft:frozen_river";
  MinecraftBiomeTypes2["Grove"] = "minecraft:grove";
  MinecraftBiomeTypes2["Hell"] = "minecraft:hell";
  MinecraftBiomeTypes2["IceMountains"] = "minecraft:ice_mountains";
  MinecraftBiomeTypes2["IcePlains"] = "minecraft:ice_plains";
  MinecraftBiomeTypes2["IcePlainsSpikes"] = "minecraft:ice_plains_spikes";
  MinecraftBiomeTypes2["JaggedPeaks"] = "minecraft:jagged_peaks";
  MinecraftBiomeTypes2["Jungle"] = "minecraft:jungle";
  MinecraftBiomeTypes2["JungleEdge"] = "minecraft:jungle_edge";
  MinecraftBiomeTypes2["JungleEdgeMutated"] = "minecraft:jungle_edge_mutated";
  MinecraftBiomeTypes2["JungleHills"] = "minecraft:jungle_hills";
  MinecraftBiomeTypes2["JungleMutated"] = "minecraft:jungle_mutated";
  MinecraftBiomeTypes2["LegacyFrozenOcean"] = "minecraft:legacy_frozen_ocean";
  MinecraftBiomeTypes2["LukewarmOcean"] = "minecraft:lukewarm_ocean";
  MinecraftBiomeTypes2["LushCaves"] = "minecraft:lush_caves";
  MinecraftBiomeTypes2["MangroveSwamp"] = "minecraft:mangrove_swamp";
  MinecraftBiomeTypes2["Meadow"] = "minecraft:meadow";
  MinecraftBiomeTypes2["MegaTaiga"] = "minecraft:mega_taiga";
  MinecraftBiomeTypes2["MegaTaigaHills"] = "minecraft:mega_taiga_hills";
  MinecraftBiomeTypes2["Mesa"] = "minecraft:mesa";
  MinecraftBiomeTypes2["MesaBryce"] = "minecraft:mesa_bryce";
  MinecraftBiomeTypes2["MesaPlateau"] = "minecraft:mesa_plateau";
  MinecraftBiomeTypes2["MesaPlateauMutated"] = "minecraft:mesa_plateau_mutated";
  MinecraftBiomeTypes2["MesaPlateauStone"] = "minecraft:mesa_plateau_stone";
  MinecraftBiomeTypes2["MesaPlateauStoneMutated"] = "minecraft:mesa_plateau_stone_mutated";
  MinecraftBiomeTypes2["MushroomIsland"] = "minecraft:mushroom_island";
  MinecraftBiomeTypes2["MushroomIslandShore"] = "minecraft:mushroom_island_shore";
  MinecraftBiomeTypes2["Ocean"] = "minecraft:ocean";
  MinecraftBiomeTypes2["Plains"] = "minecraft:plains";
  MinecraftBiomeTypes2["RedwoodTaigaHillsMutated"] = "minecraft:redwood_taiga_hills_mutated";
  MinecraftBiomeTypes2["RedwoodTaigaMutated"] = "minecraft:redwood_taiga_mutated";
  MinecraftBiomeTypes2["River"] = "minecraft:river";
  MinecraftBiomeTypes2["RoofedForest"] = "minecraft:roofed_forest";
  MinecraftBiomeTypes2["RoofedForestMutated"] = "minecraft:roofed_forest_mutated";
  MinecraftBiomeTypes2["Savanna"] = "minecraft:savanna";
  MinecraftBiomeTypes2["SavannaMutated"] = "minecraft:savanna_mutated";
  MinecraftBiomeTypes2["SavannaPlateau"] = "minecraft:savanna_plateau";
  MinecraftBiomeTypes2["SavannaPlateauMutated"] = "minecraft:savanna_plateau_mutated";
  MinecraftBiomeTypes2["SnowySlopes"] = "minecraft:snowy_slopes";
  MinecraftBiomeTypes2["SoulsandValley"] = "minecraft:soulsand_valley";
  MinecraftBiomeTypes2["StoneBeach"] = "minecraft:stone_beach";
  MinecraftBiomeTypes2["StonyPeaks"] = "minecraft:stony_peaks";
  MinecraftBiomeTypes2["SunflowerPlains"] = "minecraft:sunflower_plains";
  MinecraftBiomeTypes2["Swampland"] = "minecraft:swampland";
  MinecraftBiomeTypes2["SwamplandMutated"] = "minecraft:swampland_mutated";
  MinecraftBiomeTypes2["Taiga"] = "minecraft:taiga";
  MinecraftBiomeTypes2["TaigaHills"] = "minecraft:taiga_hills";
  MinecraftBiomeTypes2["TaigaMutated"] = "minecraft:taiga_mutated";
  MinecraftBiomeTypes2["TheEnd"] = "minecraft:the_end";
  MinecraftBiomeTypes2["WarmOcean"] = "minecraft:warm_ocean";
  MinecraftBiomeTypes2["WarpedForest"] = "minecraft:warped_forest";
  return MinecraftBiomeTypes2;
})(MinecraftBiomeTypes || {});
var MinecraftBlockTypes = ((MinecraftBlockTypes2) => {
  MinecraftBlockTypes2["AcaciaButton"] = "minecraft:acacia_button";
  MinecraftBlockTypes2["AcaciaDoor"] = "minecraft:acacia_door";
  MinecraftBlockTypes2["AcaciaDoubleSlab"] = "minecraft:acacia_double_slab";
  MinecraftBlockTypes2["AcaciaFence"] = "minecraft:acacia_fence";
  MinecraftBlockTypes2["AcaciaFenceGate"] = "minecraft:acacia_fence_gate";
  MinecraftBlockTypes2["AcaciaHangingSign"] = "minecraft:acacia_hanging_sign";
  MinecraftBlockTypes2["AcaciaLeaves"] = "minecraft:acacia_leaves";
  MinecraftBlockTypes2["AcaciaLog"] = "minecraft:acacia_log";
  MinecraftBlockTypes2["AcaciaPlanks"] = "minecraft:acacia_planks";
  MinecraftBlockTypes2["AcaciaPressurePlate"] = "minecraft:acacia_pressure_plate";
  MinecraftBlockTypes2["AcaciaSapling"] = "minecraft:acacia_sapling";
  MinecraftBlockTypes2["AcaciaSlab"] = "minecraft:acacia_slab";
  MinecraftBlockTypes2["AcaciaStairs"] = "minecraft:acacia_stairs";
  MinecraftBlockTypes2["AcaciaStandingSign"] = "minecraft:acacia_standing_sign";
  MinecraftBlockTypes2["AcaciaTrapdoor"] = "minecraft:acacia_trapdoor";
  MinecraftBlockTypes2["AcaciaWallSign"] = "minecraft:acacia_wall_sign";
  MinecraftBlockTypes2["AcaciaWood"] = "minecraft:acacia_wood";
  MinecraftBlockTypes2["ActivatorRail"] = "minecraft:activator_rail";
  MinecraftBlockTypes2["Air"] = "minecraft:air";
  MinecraftBlockTypes2["Allium"] = "minecraft:allium";
  MinecraftBlockTypes2["Allow"] = "minecraft:allow";
  MinecraftBlockTypes2["AmethystBlock"] = "minecraft:amethyst_block";
  MinecraftBlockTypes2["AmethystCluster"] = "minecraft:amethyst_cluster";
  MinecraftBlockTypes2["AncientDebris"] = "minecraft:ancient_debris";
  MinecraftBlockTypes2["Andesite"] = "minecraft:andesite";
  MinecraftBlockTypes2["AndesiteStairs"] = "minecraft:andesite_stairs";
  MinecraftBlockTypes2["Anvil"] = "minecraft:anvil";
  MinecraftBlockTypes2["Azalea"] = "minecraft:azalea";
  MinecraftBlockTypes2["AzaleaLeaves"] = "minecraft:azalea_leaves";
  MinecraftBlockTypes2["AzaleaLeavesFlowered"] = "minecraft:azalea_leaves_flowered";
  MinecraftBlockTypes2["AzureBluet"] = "minecraft:azure_bluet";
  MinecraftBlockTypes2["Bamboo"] = "minecraft:bamboo";
  MinecraftBlockTypes2["BambooBlock"] = "minecraft:bamboo_block";
  MinecraftBlockTypes2["BambooButton"] = "minecraft:bamboo_button";
  MinecraftBlockTypes2["BambooDoor"] = "minecraft:bamboo_door";
  MinecraftBlockTypes2["BambooDoubleSlab"] = "minecraft:bamboo_double_slab";
  MinecraftBlockTypes2["BambooFence"] = "minecraft:bamboo_fence";
  MinecraftBlockTypes2["BambooFenceGate"] = "minecraft:bamboo_fence_gate";
  MinecraftBlockTypes2["BambooHangingSign"] = "minecraft:bamboo_hanging_sign";
  MinecraftBlockTypes2["BambooMosaic"] = "minecraft:bamboo_mosaic";
  MinecraftBlockTypes2["BambooMosaicDoubleSlab"] = "minecraft:bamboo_mosaic_double_slab";
  MinecraftBlockTypes2["BambooMosaicSlab"] = "minecraft:bamboo_mosaic_slab";
  MinecraftBlockTypes2["BambooMosaicStairs"] = "minecraft:bamboo_mosaic_stairs";
  MinecraftBlockTypes2["BambooPlanks"] = "minecraft:bamboo_planks";
  MinecraftBlockTypes2["BambooPressurePlate"] = "minecraft:bamboo_pressure_plate";
  MinecraftBlockTypes2["BambooSapling"] = "minecraft:bamboo_sapling";
  MinecraftBlockTypes2["BambooSlab"] = "minecraft:bamboo_slab";
  MinecraftBlockTypes2["BambooStairs"] = "minecraft:bamboo_stairs";
  MinecraftBlockTypes2["BambooStandingSign"] = "minecraft:bamboo_standing_sign";
  MinecraftBlockTypes2["BambooTrapdoor"] = "minecraft:bamboo_trapdoor";
  MinecraftBlockTypes2["BambooWallSign"] = "minecraft:bamboo_wall_sign";
  MinecraftBlockTypes2["Barrel"] = "minecraft:barrel";
  MinecraftBlockTypes2["Barrier"] = "minecraft:barrier";
  MinecraftBlockTypes2["Basalt"] = "minecraft:basalt";
  MinecraftBlockTypes2["Beacon"] = "minecraft:beacon";
  MinecraftBlockTypes2["Bed"] = "minecraft:bed";
  MinecraftBlockTypes2["Bedrock"] = "minecraft:bedrock";
  MinecraftBlockTypes2["BeeNest"] = "minecraft:bee_nest";
  MinecraftBlockTypes2["Beehive"] = "minecraft:beehive";
  MinecraftBlockTypes2["Beetroot"] = "minecraft:beetroot";
  MinecraftBlockTypes2["Bell"] = "minecraft:bell";
  MinecraftBlockTypes2["BigDripleaf"] = "minecraft:big_dripleaf";
  MinecraftBlockTypes2["BirchButton"] = "minecraft:birch_button";
  MinecraftBlockTypes2["BirchDoor"] = "minecraft:birch_door";
  MinecraftBlockTypes2["BirchDoubleSlab"] = "minecraft:birch_double_slab";
  MinecraftBlockTypes2["BirchFence"] = "minecraft:birch_fence";
  MinecraftBlockTypes2["BirchFenceGate"] = "minecraft:birch_fence_gate";
  MinecraftBlockTypes2["BirchHangingSign"] = "minecraft:birch_hanging_sign";
  MinecraftBlockTypes2["BirchLeaves"] = "minecraft:birch_leaves";
  MinecraftBlockTypes2["BirchLog"] = "minecraft:birch_log";
  MinecraftBlockTypes2["BirchPlanks"] = "minecraft:birch_planks";
  MinecraftBlockTypes2["BirchPressurePlate"] = "minecraft:birch_pressure_plate";
  MinecraftBlockTypes2["BirchSapling"] = "minecraft:birch_sapling";
  MinecraftBlockTypes2["BirchSlab"] = "minecraft:birch_slab";
  MinecraftBlockTypes2["BirchStairs"] = "minecraft:birch_stairs";
  MinecraftBlockTypes2["BirchStandingSign"] = "minecraft:birch_standing_sign";
  MinecraftBlockTypes2["BirchTrapdoor"] = "minecraft:birch_trapdoor";
  MinecraftBlockTypes2["BirchWallSign"] = "minecraft:birch_wall_sign";
  MinecraftBlockTypes2["BirchWood"] = "minecraft:birch_wood";
  MinecraftBlockTypes2["BlackCandle"] = "minecraft:black_candle";
  MinecraftBlockTypes2["BlackCandleCake"] = "minecraft:black_candle_cake";
  MinecraftBlockTypes2["BlackCarpet"] = "minecraft:black_carpet";
  MinecraftBlockTypes2["BlackConcrete"] = "minecraft:black_concrete";
  MinecraftBlockTypes2["BlackConcretePowder"] = "minecraft:black_concrete_powder";
  MinecraftBlockTypes2["BlackGlazedTerracotta"] = "minecraft:black_glazed_terracotta";
  MinecraftBlockTypes2["BlackShulkerBox"] = "minecraft:black_shulker_box";
  MinecraftBlockTypes2["BlackStainedGlass"] = "minecraft:black_stained_glass";
  MinecraftBlockTypes2["BlackStainedGlassPane"] = "minecraft:black_stained_glass_pane";
  MinecraftBlockTypes2["BlackTerracotta"] = "minecraft:black_terracotta";
  MinecraftBlockTypes2["BlackWool"] = "minecraft:black_wool";
  MinecraftBlockTypes2["Blackstone"] = "minecraft:blackstone";
  MinecraftBlockTypes2["BlackstoneDoubleSlab"] = "minecraft:blackstone_double_slab";
  MinecraftBlockTypes2["BlackstoneSlab"] = "minecraft:blackstone_slab";
  MinecraftBlockTypes2["BlackstoneStairs"] = "minecraft:blackstone_stairs";
  MinecraftBlockTypes2["BlackstoneWall"] = "minecraft:blackstone_wall";
  MinecraftBlockTypes2["BlastFurnace"] = "minecraft:blast_furnace";
  MinecraftBlockTypes2["BlueCandle"] = "minecraft:blue_candle";
  MinecraftBlockTypes2["BlueCandleCake"] = "minecraft:blue_candle_cake";
  MinecraftBlockTypes2["BlueCarpet"] = "minecraft:blue_carpet";
  MinecraftBlockTypes2["BlueConcrete"] = "minecraft:blue_concrete";
  MinecraftBlockTypes2["BlueConcretePowder"] = "minecraft:blue_concrete_powder";
  MinecraftBlockTypes2["BlueGlazedTerracotta"] = "minecraft:blue_glazed_terracotta";
  MinecraftBlockTypes2["BlueIce"] = "minecraft:blue_ice";
  MinecraftBlockTypes2["BlueOrchid"] = "minecraft:blue_orchid";
  MinecraftBlockTypes2["BlueShulkerBox"] = "minecraft:blue_shulker_box";
  MinecraftBlockTypes2["BlueStainedGlass"] = "minecraft:blue_stained_glass";
  MinecraftBlockTypes2["BlueStainedGlassPane"] = "minecraft:blue_stained_glass_pane";
  MinecraftBlockTypes2["BlueTerracotta"] = "minecraft:blue_terracotta";
  MinecraftBlockTypes2["BlueWool"] = "minecraft:blue_wool";
  MinecraftBlockTypes2["BoneBlock"] = "minecraft:bone_block";
  MinecraftBlockTypes2["Bookshelf"] = "minecraft:bookshelf";
  MinecraftBlockTypes2["BorderBlock"] = "minecraft:border_block";
  MinecraftBlockTypes2["BrainCoral"] = "minecraft:brain_coral";
  MinecraftBlockTypes2["BrainCoralBlock"] = "minecraft:brain_coral_block";
  MinecraftBlockTypes2["BrainCoralFan"] = "minecraft:brain_coral_fan";
  MinecraftBlockTypes2["BrewingStand"] = "minecraft:brewing_stand";
  MinecraftBlockTypes2["BrickBlock"] = "minecraft:brick_block";
  MinecraftBlockTypes2["BrickSlab"] = "minecraft:brick_slab";
  MinecraftBlockTypes2["BrickStairs"] = "minecraft:brick_stairs";
  MinecraftBlockTypes2["BrownCandle"] = "minecraft:brown_candle";
  MinecraftBlockTypes2["BrownCandleCake"] = "minecraft:brown_candle_cake";
  MinecraftBlockTypes2["BrownCarpet"] = "minecraft:brown_carpet";
  MinecraftBlockTypes2["BrownConcrete"] = "minecraft:brown_concrete";
  MinecraftBlockTypes2["BrownConcretePowder"] = "minecraft:brown_concrete_powder";
  MinecraftBlockTypes2["BrownGlazedTerracotta"] = "minecraft:brown_glazed_terracotta";
  MinecraftBlockTypes2["BrownMushroom"] = "minecraft:brown_mushroom";
  MinecraftBlockTypes2["BrownMushroomBlock"] = "minecraft:brown_mushroom_block";
  MinecraftBlockTypes2["BrownShulkerBox"] = "minecraft:brown_shulker_box";
  MinecraftBlockTypes2["BrownStainedGlass"] = "minecraft:brown_stained_glass";
  MinecraftBlockTypes2["BrownStainedGlassPane"] = "minecraft:brown_stained_glass_pane";
  MinecraftBlockTypes2["BrownTerracotta"] = "minecraft:brown_terracotta";
  MinecraftBlockTypes2["BrownWool"] = "minecraft:brown_wool";
  MinecraftBlockTypes2["BubbleColumn"] = "minecraft:bubble_column";
  MinecraftBlockTypes2["BubbleCoral"] = "minecraft:bubble_coral";
  MinecraftBlockTypes2["BubbleCoralBlock"] = "minecraft:bubble_coral_block";
  MinecraftBlockTypes2["BubbleCoralFan"] = "minecraft:bubble_coral_fan";
  MinecraftBlockTypes2["BuddingAmethyst"] = "minecraft:budding_amethyst";
  MinecraftBlockTypes2["Cactus"] = "minecraft:cactus";
  MinecraftBlockTypes2["Cake"] = "minecraft:cake";
  MinecraftBlockTypes2["Calcite"] = "minecraft:calcite";
  MinecraftBlockTypes2["CalibratedSculkSensor"] = "minecraft:calibrated_sculk_sensor";
  MinecraftBlockTypes2["Camera"] = "minecraft:camera";
  MinecraftBlockTypes2["Campfire"] = "minecraft:campfire";
  MinecraftBlockTypes2["Candle"] = "minecraft:candle";
  MinecraftBlockTypes2["CandleCake"] = "minecraft:candle_cake";
  MinecraftBlockTypes2["Carrots"] = "minecraft:carrots";
  MinecraftBlockTypes2["CartographyTable"] = "minecraft:cartography_table";
  MinecraftBlockTypes2["CarvedPumpkin"] = "minecraft:carved_pumpkin";
  MinecraftBlockTypes2["Cauldron"] = "minecraft:cauldron";
  MinecraftBlockTypes2["CaveVines"] = "minecraft:cave_vines";
  MinecraftBlockTypes2["CaveVinesBodyWithBerries"] = "minecraft:cave_vines_body_with_berries";
  MinecraftBlockTypes2["CaveVinesHeadWithBerries"] = "minecraft:cave_vines_head_with_berries";
  MinecraftBlockTypes2["Chain"] = "minecraft:chain";
  MinecraftBlockTypes2["ChainCommandBlock"] = "minecraft:chain_command_block";
  MinecraftBlockTypes2["ChemicalHeat"] = "minecraft:chemical_heat";
  MinecraftBlockTypes2["ChemistryTable"] = "minecraft:chemistry_table";
  MinecraftBlockTypes2["CherryButton"] = "minecraft:cherry_button";
  MinecraftBlockTypes2["CherryDoor"] = "minecraft:cherry_door";
  MinecraftBlockTypes2["CherryDoubleSlab"] = "minecraft:cherry_double_slab";
  MinecraftBlockTypes2["CherryFence"] = "minecraft:cherry_fence";
  MinecraftBlockTypes2["CherryFenceGate"] = "minecraft:cherry_fence_gate";
  MinecraftBlockTypes2["CherryHangingSign"] = "minecraft:cherry_hanging_sign";
  MinecraftBlockTypes2["CherryLeaves"] = "minecraft:cherry_leaves";
  MinecraftBlockTypes2["CherryLog"] = "minecraft:cherry_log";
  MinecraftBlockTypes2["CherryPlanks"] = "minecraft:cherry_planks";
  MinecraftBlockTypes2["CherryPressurePlate"] = "minecraft:cherry_pressure_plate";
  MinecraftBlockTypes2["CherrySapling"] = "minecraft:cherry_sapling";
  MinecraftBlockTypes2["CherrySlab"] = "minecraft:cherry_slab";
  MinecraftBlockTypes2["CherryStairs"] = "minecraft:cherry_stairs";
  MinecraftBlockTypes2["CherryStandingSign"] = "minecraft:cherry_standing_sign";
  MinecraftBlockTypes2["CherryTrapdoor"] = "minecraft:cherry_trapdoor";
  MinecraftBlockTypes2["CherryWallSign"] = "minecraft:cherry_wall_sign";
  MinecraftBlockTypes2["CherryWood"] = "minecraft:cherry_wood";
  MinecraftBlockTypes2["Chest"] = "minecraft:chest";
  MinecraftBlockTypes2["ChiseledBookshelf"] = "minecraft:chiseled_bookshelf";
  MinecraftBlockTypes2["ChiseledCopper"] = "minecraft:chiseled_copper";
  MinecraftBlockTypes2["ChiseledDeepslate"] = "minecraft:chiseled_deepslate";
  MinecraftBlockTypes2["ChiseledNetherBricks"] = "minecraft:chiseled_nether_bricks";
  MinecraftBlockTypes2["ChiseledPolishedBlackstone"] = "minecraft:chiseled_polished_blackstone";
  MinecraftBlockTypes2["ChiseledTuff"] = "minecraft:chiseled_tuff";
  MinecraftBlockTypes2["ChiseledTuffBricks"] = "minecraft:chiseled_tuff_bricks";
  MinecraftBlockTypes2["ChorusFlower"] = "minecraft:chorus_flower";
  MinecraftBlockTypes2["ChorusPlant"] = "minecraft:chorus_plant";
  MinecraftBlockTypes2["Clay"] = "minecraft:clay";
  MinecraftBlockTypes2["ClientRequestPlaceholderBlock"] = "minecraft:client_request_placeholder_block";
  MinecraftBlockTypes2["CoalBlock"] = "minecraft:coal_block";
  MinecraftBlockTypes2["CoalOre"] = "minecraft:coal_ore";
  MinecraftBlockTypes2["CobbledDeepslate"] = "minecraft:cobbled_deepslate";
  MinecraftBlockTypes2["CobbledDeepslateDoubleSlab"] = "minecraft:cobbled_deepslate_double_slab";
  MinecraftBlockTypes2["CobbledDeepslateSlab"] = "minecraft:cobbled_deepslate_slab";
  MinecraftBlockTypes2["CobbledDeepslateStairs"] = "minecraft:cobbled_deepslate_stairs";
  MinecraftBlockTypes2["CobbledDeepslateWall"] = "minecraft:cobbled_deepslate_wall";
  MinecraftBlockTypes2["Cobblestone"] = "minecraft:cobblestone";
  MinecraftBlockTypes2["CobblestoneSlab"] = "minecraft:cobblestone_slab";
  MinecraftBlockTypes2["CobblestoneWall"] = "minecraft:cobblestone_wall";
  MinecraftBlockTypes2["Cocoa"] = "minecraft:cocoa";
  MinecraftBlockTypes2["ColoredTorchBp"] = "minecraft:colored_torch_bp";
  MinecraftBlockTypes2["ColoredTorchRg"] = "minecraft:colored_torch_rg";
  MinecraftBlockTypes2["CommandBlock"] = "minecraft:command_block";
  MinecraftBlockTypes2["Composter"] = "minecraft:composter";
  MinecraftBlockTypes2["Conduit"] = "minecraft:conduit";
  MinecraftBlockTypes2["CopperBlock"] = "minecraft:copper_block";
  MinecraftBlockTypes2["CopperBulb"] = "minecraft:copper_bulb";
  MinecraftBlockTypes2["CopperDoor"] = "minecraft:copper_door";
  MinecraftBlockTypes2["CopperGrate"] = "minecraft:copper_grate";
  MinecraftBlockTypes2["CopperOre"] = "minecraft:copper_ore";
  MinecraftBlockTypes2["CopperTrapdoor"] = "minecraft:copper_trapdoor";
  MinecraftBlockTypes2["CoralFanHang"] = "minecraft:coral_fan_hang";
  MinecraftBlockTypes2["CoralFanHang2"] = "minecraft:coral_fan_hang2";
  MinecraftBlockTypes2["CoralFanHang3"] = "minecraft:coral_fan_hang3";
  MinecraftBlockTypes2["Cornflower"] = "minecraft:cornflower";
  MinecraftBlockTypes2["CrackedDeepslateBricks"] = "minecraft:cracked_deepslate_bricks";
  MinecraftBlockTypes2["CrackedDeepslateTiles"] = "minecraft:cracked_deepslate_tiles";
  MinecraftBlockTypes2["CrackedNetherBricks"] = "minecraft:cracked_nether_bricks";
  MinecraftBlockTypes2["CrackedPolishedBlackstoneBricks"] = "minecraft:cracked_polished_blackstone_bricks";
  MinecraftBlockTypes2["Crafter"] = "minecraft:crafter";
  MinecraftBlockTypes2["CraftingTable"] = "minecraft:crafting_table";
  MinecraftBlockTypes2["CrimsonButton"] = "minecraft:crimson_button";
  MinecraftBlockTypes2["CrimsonDoor"] = "minecraft:crimson_door";
  MinecraftBlockTypes2["CrimsonDoubleSlab"] = "minecraft:crimson_double_slab";
  MinecraftBlockTypes2["CrimsonFence"] = "minecraft:crimson_fence";
  MinecraftBlockTypes2["CrimsonFenceGate"] = "minecraft:crimson_fence_gate";
  MinecraftBlockTypes2["CrimsonFungus"] = "minecraft:crimson_fungus";
  MinecraftBlockTypes2["CrimsonHangingSign"] = "minecraft:crimson_hanging_sign";
  MinecraftBlockTypes2["CrimsonHyphae"] = "minecraft:crimson_hyphae";
  MinecraftBlockTypes2["CrimsonNylium"] = "minecraft:crimson_nylium";
  MinecraftBlockTypes2["CrimsonPlanks"] = "minecraft:crimson_planks";
  MinecraftBlockTypes2["CrimsonPressurePlate"] = "minecraft:crimson_pressure_plate";
  MinecraftBlockTypes2["CrimsonRoots"] = "minecraft:crimson_roots";
  MinecraftBlockTypes2["CrimsonSlab"] = "minecraft:crimson_slab";
  MinecraftBlockTypes2["CrimsonStairs"] = "minecraft:crimson_stairs";
  MinecraftBlockTypes2["CrimsonStandingSign"] = "minecraft:crimson_standing_sign";
  MinecraftBlockTypes2["CrimsonStem"] = "minecraft:crimson_stem";
  MinecraftBlockTypes2["CrimsonTrapdoor"] = "minecraft:crimson_trapdoor";
  MinecraftBlockTypes2["CrimsonWallSign"] = "minecraft:crimson_wall_sign";
  MinecraftBlockTypes2["CryingObsidian"] = "minecraft:crying_obsidian";
  MinecraftBlockTypes2["CutCopper"] = "minecraft:cut_copper";
  MinecraftBlockTypes2["CutCopperSlab"] = "minecraft:cut_copper_slab";
  MinecraftBlockTypes2["CutCopperStairs"] = "minecraft:cut_copper_stairs";
  MinecraftBlockTypes2["CyanCandle"] = "minecraft:cyan_candle";
  MinecraftBlockTypes2["CyanCandleCake"] = "minecraft:cyan_candle_cake";
  MinecraftBlockTypes2["CyanCarpet"] = "minecraft:cyan_carpet";
  MinecraftBlockTypes2["CyanConcrete"] = "minecraft:cyan_concrete";
  MinecraftBlockTypes2["CyanConcretePowder"] = "minecraft:cyan_concrete_powder";
  MinecraftBlockTypes2["CyanGlazedTerracotta"] = "minecraft:cyan_glazed_terracotta";
  MinecraftBlockTypes2["CyanShulkerBox"] = "minecraft:cyan_shulker_box";
  MinecraftBlockTypes2["CyanStainedGlass"] = "minecraft:cyan_stained_glass";
  MinecraftBlockTypes2["CyanStainedGlassPane"] = "minecraft:cyan_stained_glass_pane";
  MinecraftBlockTypes2["CyanTerracotta"] = "minecraft:cyan_terracotta";
  MinecraftBlockTypes2["CyanWool"] = "minecraft:cyan_wool";
  MinecraftBlockTypes2["DarkOakButton"] = "minecraft:dark_oak_button";
  MinecraftBlockTypes2["DarkOakDoor"] = "minecraft:dark_oak_door";
  MinecraftBlockTypes2["DarkOakDoubleSlab"] = "minecraft:dark_oak_double_slab";
  MinecraftBlockTypes2["DarkOakFence"] = "minecraft:dark_oak_fence";
  MinecraftBlockTypes2["DarkOakFenceGate"] = "minecraft:dark_oak_fence_gate";
  MinecraftBlockTypes2["DarkOakHangingSign"] = "minecraft:dark_oak_hanging_sign";
  MinecraftBlockTypes2["DarkOakLeaves"] = "minecraft:dark_oak_leaves";
  MinecraftBlockTypes2["DarkOakLog"] = "minecraft:dark_oak_log";
  MinecraftBlockTypes2["DarkOakPlanks"] = "minecraft:dark_oak_planks";
  MinecraftBlockTypes2["DarkOakPressurePlate"] = "minecraft:dark_oak_pressure_plate";
  MinecraftBlockTypes2["DarkOakSapling"] = "minecraft:dark_oak_sapling";
  MinecraftBlockTypes2["DarkOakSlab"] = "minecraft:dark_oak_slab";
  MinecraftBlockTypes2["DarkOakStairs"] = "minecraft:dark_oak_stairs";
  MinecraftBlockTypes2["DarkOakTrapdoor"] = "minecraft:dark_oak_trapdoor";
  MinecraftBlockTypes2["DarkOakWood"] = "minecraft:dark_oak_wood";
  MinecraftBlockTypes2["DarkPrismarineStairs"] = "minecraft:dark_prismarine_stairs";
  MinecraftBlockTypes2["DarkoakStandingSign"] = "minecraft:darkoak_standing_sign";
  MinecraftBlockTypes2["DarkoakWallSign"] = "minecraft:darkoak_wall_sign";
  MinecraftBlockTypes2["DaylightDetector"] = "minecraft:daylight_detector";
  MinecraftBlockTypes2["DaylightDetectorInverted"] = "minecraft:daylight_detector_inverted";
  MinecraftBlockTypes2["DeadBrainCoral"] = "minecraft:dead_brain_coral";
  MinecraftBlockTypes2["DeadBrainCoralBlock"] = "minecraft:dead_brain_coral_block";
  MinecraftBlockTypes2["DeadBrainCoralFan"] = "minecraft:dead_brain_coral_fan";
  MinecraftBlockTypes2["DeadBubbleCoral"] = "minecraft:dead_bubble_coral";
  MinecraftBlockTypes2["DeadBubbleCoralBlock"] = "minecraft:dead_bubble_coral_block";
  MinecraftBlockTypes2["DeadBubbleCoralFan"] = "minecraft:dead_bubble_coral_fan";
  MinecraftBlockTypes2["DeadFireCoral"] = "minecraft:dead_fire_coral";
  MinecraftBlockTypes2["DeadFireCoralBlock"] = "minecraft:dead_fire_coral_block";
  MinecraftBlockTypes2["DeadFireCoralFan"] = "minecraft:dead_fire_coral_fan";
  MinecraftBlockTypes2["DeadHornCoral"] = "minecraft:dead_horn_coral";
  MinecraftBlockTypes2["DeadHornCoralBlock"] = "minecraft:dead_horn_coral_block";
  MinecraftBlockTypes2["DeadHornCoralFan"] = "minecraft:dead_horn_coral_fan";
  MinecraftBlockTypes2["DeadTubeCoral"] = "minecraft:dead_tube_coral";
  MinecraftBlockTypes2["DeadTubeCoralBlock"] = "minecraft:dead_tube_coral_block";
  MinecraftBlockTypes2["DeadTubeCoralFan"] = "minecraft:dead_tube_coral_fan";
  MinecraftBlockTypes2["Deadbush"] = "minecraft:deadbush";
  MinecraftBlockTypes2["DecoratedPot"] = "minecraft:decorated_pot";
  MinecraftBlockTypes2["Deepslate"] = "minecraft:deepslate";
  MinecraftBlockTypes2["DeepslateBrickDoubleSlab"] = "minecraft:deepslate_brick_double_slab";
  MinecraftBlockTypes2["DeepslateBrickSlab"] = "minecraft:deepslate_brick_slab";
  MinecraftBlockTypes2["DeepslateBrickStairs"] = "minecraft:deepslate_brick_stairs";
  MinecraftBlockTypes2["DeepslateBrickWall"] = "minecraft:deepslate_brick_wall";
  MinecraftBlockTypes2["DeepslateBricks"] = "minecraft:deepslate_bricks";
  MinecraftBlockTypes2["DeepslateCoalOre"] = "minecraft:deepslate_coal_ore";
  MinecraftBlockTypes2["DeepslateCopperOre"] = "minecraft:deepslate_copper_ore";
  MinecraftBlockTypes2["DeepslateDiamondOre"] = "minecraft:deepslate_diamond_ore";
  MinecraftBlockTypes2["DeepslateEmeraldOre"] = "minecraft:deepslate_emerald_ore";
  MinecraftBlockTypes2["DeepslateGoldOre"] = "minecraft:deepslate_gold_ore";
  MinecraftBlockTypes2["DeepslateIronOre"] = "minecraft:deepslate_iron_ore";
  MinecraftBlockTypes2["DeepslateLapisOre"] = "minecraft:deepslate_lapis_ore";
  MinecraftBlockTypes2["DeepslateRedstoneOre"] = "minecraft:deepslate_redstone_ore";
  MinecraftBlockTypes2["DeepslateTileDoubleSlab"] = "minecraft:deepslate_tile_double_slab";
  MinecraftBlockTypes2["DeepslateTileSlab"] = "minecraft:deepslate_tile_slab";
  MinecraftBlockTypes2["DeepslateTileStairs"] = "minecraft:deepslate_tile_stairs";
  MinecraftBlockTypes2["DeepslateTileWall"] = "minecraft:deepslate_tile_wall";
  MinecraftBlockTypes2["DeepslateTiles"] = "minecraft:deepslate_tiles";
  MinecraftBlockTypes2["Deny"] = "minecraft:deny";
  MinecraftBlockTypes2["DetectorRail"] = "minecraft:detector_rail";
  MinecraftBlockTypes2["DiamondBlock"] = "minecraft:diamond_block";
  MinecraftBlockTypes2["DiamondOre"] = "minecraft:diamond_ore";
  MinecraftBlockTypes2["Diorite"] = "minecraft:diorite";
  MinecraftBlockTypes2["DioriteStairs"] = "minecraft:diorite_stairs";
  MinecraftBlockTypes2["Dirt"] = "minecraft:dirt";
  MinecraftBlockTypes2["DirtWithRoots"] = "minecraft:dirt_with_roots";
  MinecraftBlockTypes2["Dispenser"] = "minecraft:dispenser";
  MinecraftBlockTypes2["DoubleCutCopperSlab"] = "minecraft:double_cut_copper_slab";
  MinecraftBlockTypes2["DoubleStoneBlockSlab"] = "minecraft:double_stone_block_slab";
  MinecraftBlockTypes2["DoubleStoneBlockSlab2"] = "minecraft:double_stone_block_slab2";
  MinecraftBlockTypes2["DoubleStoneBlockSlab3"] = "minecraft:double_stone_block_slab3";
  MinecraftBlockTypes2["DoubleStoneBlockSlab4"] = "minecraft:double_stone_block_slab4";
  MinecraftBlockTypes2["DragonEgg"] = "minecraft:dragon_egg";
  MinecraftBlockTypes2["DriedKelpBlock"] = "minecraft:dried_kelp_block";
  MinecraftBlockTypes2["DripstoneBlock"] = "minecraft:dripstone_block";
  MinecraftBlockTypes2["Dropper"] = "minecraft:dropper";
  MinecraftBlockTypes2["Element0"] = "minecraft:element_0";
  MinecraftBlockTypes2["Element1"] = "minecraft:element_1";
  MinecraftBlockTypes2["Element10"] = "minecraft:element_10";
  MinecraftBlockTypes2["Element100"] = "minecraft:element_100";
  MinecraftBlockTypes2["Element101"] = "minecraft:element_101";
  MinecraftBlockTypes2["Element102"] = "minecraft:element_102";
  MinecraftBlockTypes2["Element103"] = "minecraft:element_103";
  MinecraftBlockTypes2["Element104"] = "minecraft:element_104";
  MinecraftBlockTypes2["Element105"] = "minecraft:element_105";
  MinecraftBlockTypes2["Element106"] = "minecraft:element_106";
  MinecraftBlockTypes2["Element107"] = "minecraft:element_107";
  MinecraftBlockTypes2["Element108"] = "minecraft:element_108";
  MinecraftBlockTypes2["Element109"] = "minecraft:element_109";
  MinecraftBlockTypes2["Element11"] = "minecraft:element_11";
  MinecraftBlockTypes2["Element110"] = "minecraft:element_110";
  MinecraftBlockTypes2["Element111"] = "minecraft:element_111";
  MinecraftBlockTypes2["Element112"] = "minecraft:element_112";
  MinecraftBlockTypes2["Element113"] = "minecraft:element_113";
  MinecraftBlockTypes2["Element114"] = "minecraft:element_114";
  MinecraftBlockTypes2["Element115"] = "minecraft:element_115";
  MinecraftBlockTypes2["Element116"] = "minecraft:element_116";
  MinecraftBlockTypes2["Element117"] = "minecraft:element_117";
  MinecraftBlockTypes2["Element118"] = "minecraft:element_118";
  MinecraftBlockTypes2["Element12"] = "minecraft:element_12";
  MinecraftBlockTypes2["Element13"] = "minecraft:element_13";
  MinecraftBlockTypes2["Element14"] = "minecraft:element_14";
  MinecraftBlockTypes2["Element15"] = "minecraft:element_15";
  MinecraftBlockTypes2["Element16"] = "minecraft:element_16";
  MinecraftBlockTypes2["Element17"] = "minecraft:element_17";
  MinecraftBlockTypes2["Element18"] = "minecraft:element_18";
  MinecraftBlockTypes2["Element19"] = "minecraft:element_19";
  MinecraftBlockTypes2["Element2"] = "minecraft:element_2";
  MinecraftBlockTypes2["Element20"] = "minecraft:element_20";
  MinecraftBlockTypes2["Element21"] = "minecraft:element_21";
  MinecraftBlockTypes2["Element22"] = "minecraft:element_22";
  MinecraftBlockTypes2["Element23"] = "minecraft:element_23";
  MinecraftBlockTypes2["Element24"] = "minecraft:element_24";
  MinecraftBlockTypes2["Element25"] = "minecraft:element_25";
  MinecraftBlockTypes2["Element26"] = "minecraft:element_26";
  MinecraftBlockTypes2["Element27"] = "minecraft:element_27";
  MinecraftBlockTypes2["Element28"] = "minecraft:element_28";
  MinecraftBlockTypes2["Element29"] = "minecraft:element_29";
  MinecraftBlockTypes2["Element3"] = "minecraft:element_3";
  MinecraftBlockTypes2["Element30"] = "minecraft:element_30";
  MinecraftBlockTypes2["Element31"] = "minecraft:element_31";
  MinecraftBlockTypes2["Element32"] = "minecraft:element_32";
  MinecraftBlockTypes2["Element33"] = "minecraft:element_33";
  MinecraftBlockTypes2["Element34"] = "minecraft:element_34";
  MinecraftBlockTypes2["Element35"] = "minecraft:element_35";
  MinecraftBlockTypes2["Element36"] = "minecraft:element_36";
  MinecraftBlockTypes2["Element37"] = "minecraft:element_37";
  MinecraftBlockTypes2["Element38"] = "minecraft:element_38";
  MinecraftBlockTypes2["Element39"] = "minecraft:element_39";
  MinecraftBlockTypes2["Element4"] = "minecraft:element_4";
  MinecraftBlockTypes2["Element40"] = "minecraft:element_40";
  MinecraftBlockTypes2["Element41"] = "minecraft:element_41";
  MinecraftBlockTypes2["Element42"] = "minecraft:element_42";
  MinecraftBlockTypes2["Element43"] = "minecraft:element_43";
  MinecraftBlockTypes2["Element44"] = "minecraft:element_44";
  MinecraftBlockTypes2["Element45"] = "minecraft:element_45";
  MinecraftBlockTypes2["Element46"] = "minecraft:element_46";
  MinecraftBlockTypes2["Element47"] = "minecraft:element_47";
  MinecraftBlockTypes2["Element48"] = "minecraft:element_48";
  MinecraftBlockTypes2["Element49"] = "minecraft:element_49";
  MinecraftBlockTypes2["Element5"] = "minecraft:element_5";
  MinecraftBlockTypes2["Element50"] = "minecraft:element_50";
  MinecraftBlockTypes2["Element51"] = "minecraft:element_51";
  MinecraftBlockTypes2["Element52"] = "minecraft:element_52";
  MinecraftBlockTypes2["Element53"] = "minecraft:element_53";
  MinecraftBlockTypes2["Element54"] = "minecraft:element_54";
  MinecraftBlockTypes2["Element55"] = "minecraft:element_55";
  MinecraftBlockTypes2["Element56"] = "minecraft:element_56";
  MinecraftBlockTypes2["Element57"] = "minecraft:element_57";
  MinecraftBlockTypes2["Element58"] = "minecraft:element_58";
  MinecraftBlockTypes2["Element59"] = "minecraft:element_59";
  MinecraftBlockTypes2["Element6"] = "minecraft:element_6";
  MinecraftBlockTypes2["Element60"] = "minecraft:element_60";
  MinecraftBlockTypes2["Element61"] = "minecraft:element_61";
  MinecraftBlockTypes2["Element62"] = "minecraft:element_62";
  MinecraftBlockTypes2["Element63"] = "minecraft:element_63";
  MinecraftBlockTypes2["Element64"] = "minecraft:element_64";
  MinecraftBlockTypes2["Element65"] = "minecraft:element_65";
  MinecraftBlockTypes2["Element66"] = "minecraft:element_66";
  MinecraftBlockTypes2["Element67"] = "minecraft:element_67";
  MinecraftBlockTypes2["Element68"] = "minecraft:element_68";
  MinecraftBlockTypes2["Element69"] = "minecraft:element_69";
  MinecraftBlockTypes2["Element7"] = "minecraft:element_7";
  MinecraftBlockTypes2["Element70"] = "minecraft:element_70";
  MinecraftBlockTypes2["Element71"] = "minecraft:element_71";
  MinecraftBlockTypes2["Element72"] = "minecraft:element_72";
  MinecraftBlockTypes2["Element73"] = "minecraft:element_73";
  MinecraftBlockTypes2["Element74"] = "minecraft:element_74";
  MinecraftBlockTypes2["Element75"] = "minecraft:element_75";
  MinecraftBlockTypes2["Element76"] = "minecraft:element_76";
  MinecraftBlockTypes2["Element77"] = "minecraft:element_77";
  MinecraftBlockTypes2["Element78"] = "minecraft:element_78";
  MinecraftBlockTypes2["Element79"] = "minecraft:element_79";
  MinecraftBlockTypes2["Element8"] = "minecraft:element_8";
  MinecraftBlockTypes2["Element80"] = "minecraft:element_80";
  MinecraftBlockTypes2["Element81"] = "minecraft:element_81";
  MinecraftBlockTypes2["Element82"] = "minecraft:element_82";
  MinecraftBlockTypes2["Element83"] = "minecraft:element_83";
  MinecraftBlockTypes2["Element84"] = "minecraft:element_84";
  MinecraftBlockTypes2["Element85"] = "minecraft:element_85";
  MinecraftBlockTypes2["Element86"] = "minecraft:element_86";
  MinecraftBlockTypes2["Element87"] = "minecraft:element_87";
  MinecraftBlockTypes2["Element88"] = "minecraft:element_88";
  MinecraftBlockTypes2["Element89"] = "minecraft:element_89";
  MinecraftBlockTypes2["Element9"] = "minecraft:element_9";
  MinecraftBlockTypes2["Element90"] = "minecraft:element_90";
  MinecraftBlockTypes2["Element91"] = "minecraft:element_91";
  MinecraftBlockTypes2["Element92"] = "minecraft:element_92";
  MinecraftBlockTypes2["Element93"] = "minecraft:element_93";
  MinecraftBlockTypes2["Element94"] = "minecraft:element_94";
  MinecraftBlockTypes2["Element95"] = "minecraft:element_95";
  MinecraftBlockTypes2["Element96"] = "minecraft:element_96";
  MinecraftBlockTypes2["Element97"] = "minecraft:element_97";
  MinecraftBlockTypes2["Element98"] = "minecraft:element_98";
  MinecraftBlockTypes2["Element99"] = "minecraft:element_99";
  MinecraftBlockTypes2["EmeraldBlock"] = "minecraft:emerald_block";
  MinecraftBlockTypes2["EmeraldOre"] = "minecraft:emerald_ore";
  MinecraftBlockTypes2["EnchantingTable"] = "minecraft:enchanting_table";
  MinecraftBlockTypes2["EndBrickStairs"] = "minecraft:end_brick_stairs";
  MinecraftBlockTypes2["EndBricks"] = "minecraft:end_bricks";
  MinecraftBlockTypes2["EndGateway"] = "minecraft:end_gateway";
  MinecraftBlockTypes2["EndPortal"] = "minecraft:end_portal";
  MinecraftBlockTypes2["EndPortalFrame"] = "minecraft:end_portal_frame";
  MinecraftBlockTypes2["EndRod"] = "minecraft:end_rod";
  MinecraftBlockTypes2["EndStone"] = "minecraft:end_stone";
  MinecraftBlockTypes2["EnderChest"] = "minecraft:ender_chest";
  MinecraftBlockTypes2["ExposedChiseledCopper"] = "minecraft:exposed_chiseled_copper";
  MinecraftBlockTypes2["ExposedCopper"] = "minecraft:exposed_copper";
  MinecraftBlockTypes2["ExposedCopperBulb"] = "minecraft:exposed_copper_bulb";
  MinecraftBlockTypes2["ExposedCopperDoor"] = "minecraft:exposed_copper_door";
  MinecraftBlockTypes2["ExposedCopperGrate"] = "minecraft:exposed_copper_grate";
  MinecraftBlockTypes2["ExposedCopperTrapdoor"] = "minecraft:exposed_copper_trapdoor";
  MinecraftBlockTypes2["ExposedCutCopper"] = "minecraft:exposed_cut_copper";
  MinecraftBlockTypes2["ExposedCutCopperSlab"] = "minecraft:exposed_cut_copper_slab";
  MinecraftBlockTypes2["ExposedCutCopperStairs"] = "minecraft:exposed_cut_copper_stairs";
  MinecraftBlockTypes2["ExposedDoubleCutCopperSlab"] = "minecraft:exposed_double_cut_copper_slab";
  MinecraftBlockTypes2["Farmland"] = "minecraft:farmland";
  MinecraftBlockTypes2["FenceGate"] = "minecraft:fence_gate";
  MinecraftBlockTypes2["Fern"] = "minecraft:fern";
  MinecraftBlockTypes2["Fire"] = "minecraft:fire";
  MinecraftBlockTypes2["FireCoral"] = "minecraft:fire_coral";
  MinecraftBlockTypes2["FireCoralBlock"] = "minecraft:fire_coral_block";
  MinecraftBlockTypes2["FireCoralFan"] = "minecraft:fire_coral_fan";
  MinecraftBlockTypes2["FletchingTable"] = "minecraft:fletching_table";
  MinecraftBlockTypes2["FlowerPot"] = "minecraft:flower_pot";
  MinecraftBlockTypes2["FloweringAzalea"] = "minecraft:flowering_azalea";
  MinecraftBlockTypes2["FlowingLava"] = "minecraft:flowing_lava";
  MinecraftBlockTypes2["FlowingWater"] = "minecraft:flowing_water";
  MinecraftBlockTypes2["Frame"] = "minecraft:frame";
  MinecraftBlockTypes2["FrogSpawn"] = "minecraft:frog_spawn";
  MinecraftBlockTypes2["FrostedIce"] = "minecraft:frosted_ice";
  MinecraftBlockTypes2["Furnace"] = "minecraft:furnace";
  MinecraftBlockTypes2["GildedBlackstone"] = "minecraft:gilded_blackstone";
  MinecraftBlockTypes2["Glass"] = "minecraft:glass";
  MinecraftBlockTypes2["GlassPane"] = "minecraft:glass_pane";
  MinecraftBlockTypes2["GlowFrame"] = "minecraft:glow_frame";
  MinecraftBlockTypes2["GlowLichen"] = "minecraft:glow_lichen";
  MinecraftBlockTypes2["Glowingobsidian"] = "minecraft:glowingobsidian";
  MinecraftBlockTypes2["Glowstone"] = "minecraft:glowstone";
  MinecraftBlockTypes2["GoldBlock"] = "minecraft:gold_block";
  MinecraftBlockTypes2["GoldOre"] = "minecraft:gold_ore";
  MinecraftBlockTypes2["GoldenRail"] = "minecraft:golden_rail";
  MinecraftBlockTypes2["Granite"] = "minecraft:granite";
  MinecraftBlockTypes2["GraniteStairs"] = "minecraft:granite_stairs";
  MinecraftBlockTypes2["GrassBlock"] = "minecraft:grass_block";
  MinecraftBlockTypes2["GrassPath"] = "minecraft:grass_path";
  MinecraftBlockTypes2["Gravel"] = "minecraft:gravel";
  MinecraftBlockTypes2["GrayCandle"] = "minecraft:gray_candle";
  MinecraftBlockTypes2["GrayCandleCake"] = "minecraft:gray_candle_cake";
  MinecraftBlockTypes2["GrayCarpet"] = "minecraft:gray_carpet";
  MinecraftBlockTypes2["GrayConcrete"] = "minecraft:gray_concrete";
  MinecraftBlockTypes2["GrayConcretePowder"] = "minecraft:gray_concrete_powder";
  MinecraftBlockTypes2["GrayGlazedTerracotta"] = "minecraft:gray_glazed_terracotta";
  MinecraftBlockTypes2["GrayShulkerBox"] = "minecraft:gray_shulker_box";
  MinecraftBlockTypes2["GrayStainedGlass"] = "minecraft:gray_stained_glass";
  MinecraftBlockTypes2["GrayStainedGlassPane"] = "minecraft:gray_stained_glass_pane";
  MinecraftBlockTypes2["GrayTerracotta"] = "minecraft:gray_terracotta";
  MinecraftBlockTypes2["GrayWool"] = "minecraft:gray_wool";
  MinecraftBlockTypes2["GreenCandle"] = "minecraft:green_candle";
  MinecraftBlockTypes2["GreenCandleCake"] = "minecraft:green_candle_cake";
  MinecraftBlockTypes2["GreenCarpet"] = "minecraft:green_carpet";
  MinecraftBlockTypes2["GreenConcrete"] = "minecraft:green_concrete";
  MinecraftBlockTypes2["GreenConcretePowder"] = "minecraft:green_concrete_powder";
  MinecraftBlockTypes2["GreenGlazedTerracotta"] = "minecraft:green_glazed_terracotta";
  MinecraftBlockTypes2["GreenShulkerBox"] = "minecraft:green_shulker_box";
  MinecraftBlockTypes2["GreenStainedGlass"] = "minecraft:green_stained_glass";
  MinecraftBlockTypes2["GreenStainedGlassPane"] = "minecraft:green_stained_glass_pane";
  MinecraftBlockTypes2["GreenTerracotta"] = "minecraft:green_terracotta";
  MinecraftBlockTypes2["GreenWool"] = "minecraft:green_wool";
  MinecraftBlockTypes2["Grindstone"] = "minecraft:grindstone";
  MinecraftBlockTypes2["HangingRoots"] = "minecraft:hanging_roots";
  MinecraftBlockTypes2["HardBlackStainedGlass"] = "minecraft:hard_black_stained_glass";
  MinecraftBlockTypes2["HardBlackStainedGlassPane"] = "minecraft:hard_black_stained_glass_pane";
  MinecraftBlockTypes2["HardBlueStainedGlass"] = "minecraft:hard_blue_stained_glass";
  MinecraftBlockTypes2["HardBlueStainedGlassPane"] = "minecraft:hard_blue_stained_glass_pane";
  MinecraftBlockTypes2["HardBrownStainedGlass"] = "minecraft:hard_brown_stained_glass";
  MinecraftBlockTypes2["HardBrownStainedGlassPane"] = "minecraft:hard_brown_stained_glass_pane";
  MinecraftBlockTypes2["HardCyanStainedGlass"] = "minecraft:hard_cyan_stained_glass";
  MinecraftBlockTypes2["HardCyanStainedGlassPane"] = "minecraft:hard_cyan_stained_glass_pane";
  MinecraftBlockTypes2["HardGlass"] = "minecraft:hard_glass";
  MinecraftBlockTypes2["HardGlassPane"] = "minecraft:hard_glass_pane";
  MinecraftBlockTypes2["HardGrayStainedGlass"] = "minecraft:hard_gray_stained_glass";
  MinecraftBlockTypes2["HardGrayStainedGlassPane"] = "minecraft:hard_gray_stained_glass_pane";
  MinecraftBlockTypes2["HardGreenStainedGlass"] = "minecraft:hard_green_stained_glass";
  MinecraftBlockTypes2["HardGreenStainedGlassPane"] = "minecraft:hard_green_stained_glass_pane";
  MinecraftBlockTypes2["HardLightBlueStainedGlass"] = "minecraft:hard_light_blue_stained_glass";
  MinecraftBlockTypes2["HardLightBlueStainedGlassPane"] = "minecraft:hard_light_blue_stained_glass_pane";
  MinecraftBlockTypes2["HardLightGrayStainedGlass"] = "minecraft:hard_light_gray_stained_glass";
  MinecraftBlockTypes2["HardLightGrayStainedGlassPane"] = "minecraft:hard_light_gray_stained_glass_pane";
  MinecraftBlockTypes2["HardLimeStainedGlass"] = "minecraft:hard_lime_stained_glass";
  MinecraftBlockTypes2["HardLimeStainedGlassPane"] = "minecraft:hard_lime_stained_glass_pane";
  MinecraftBlockTypes2["HardMagentaStainedGlass"] = "minecraft:hard_magenta_stained_glass";
  MinecraftBlockTypes2["HardMagentaStainedGlassPane"] = "minecraft:hard_magenta_stained_glass_pane";
  MinecraftBlockTypes2["HardOrangeStainedGlass"] = "minecraft:hard_orange_stained_glass";
  MinecraftBlockTypes2["HardOrangeStainedGlassPane"] = "minecraft:hard_orange_stained_glass_pane";
  MinecraftBlockTypes2["HardPinkStainedGlass"] = "minecraft:hard_pink_stained_glass";
  MinecraftBlockTypes2["HardPinkStainedGlassPane"] = "minecraft:hard_pink_stained_glass_pane";
  MinecraftBlockTypes2["HardPurpleStainedGlass"] = "minecraft:hard_purple_stained_glass";
  MinecraftBlockTypes2["HardPurpleStainedGlassPane"] = "minecraft:hard_purple_stained_glass_pane";
  MinecraftBlockTypes2["HardRedStainedGlass"] = "minecraft:hard_red_stained_glass";
  MinecraftBlockTypes2["HardRedStainedGlassPane"] = "minecraft:hard_red_stained_glass_pane";
  MinecraftBlockTypes2["HardWhiteStainedGlass"] = "minecraft:hard_white_stained_glass";
  MinecraftBlockTypes2["HardWhiteStainedGlassPane"] = "minecraft:hard_white_stained_glass_pane";
  MinecraftBlockTypes2["HardYellowStainedGlass"] = "minecraft:hard_yellow_stained_glass";
  MinecraftBlockTypes2["HardYellowStainedGlassPane"] = "minecraft:hard_yellow_stained_glass_pane";
  MinecraftBlockTypes2["HardenedClay"] = "minecraft:hardened_clay";
  MinecraftBlockTypes2["HayBlock"] = "minecraft:hay_block";
  MinecraftBlockTypes2["HeavyCore"] = "minecraft:heavy_core";
  MinecraftBlockTypes2["HeavyWeightedPressurePlate"] = "minecraft:heavy_weighted_pressure_plate";
  MinecraftBlockTypes2["HoneyBlock"] = "minecraft:honey_block";
  MinecraftBlockTypes2["HoneycombBlock"] = "minecraft:honeycomb_block";
  MinecraftBlockTypes2["Hopper"] = "minecraft:hopper";
  MinecraftBlockTypes2["HornCoral"] = "minecraft:horn_coral";
  MinecraftBlockTypes2["HornCoralBlock"] = "minecraft:horn_coral_block";
  MinecraftBlockTypes2["HornCoralFan"] = "minecraft:horn_coral_fan";
  MinecraftBlockTypes2["Ice"] = "minecraft:ice";
  MinecraftBlockTypes2["InfestedDeepslate"] = "minecraft:infested_deepslate";
  MinecraftBlockTypes2["InfoUpdate"] = "minecraft:info_update";
  MinecraftBlockTypes2["InfoUpdate2"] = "minecraft:info_update2";
  MinecraftBlockTypes2["InvisibleBedrock"] = "minecraft:invisible_bedrock";
  MinecraftBlockTypes2["IronBars"] = "minecraft:iron_bars";
  MinecraftBlockTypes2["IronBlock"] = "minecraft:iron_block";
  MinecraftBlockTypes2["IronDoor"] = "minecraft:iron_door";
  MinecraftBlockTypes2["IronOre"] = "minecraft:iron_ore";
  MinecraftBlockTypes2["IronTrapdoor"] = "minecraft:iron_trapdoor";
  MinecraftBlockTypes2["Jigsaw"] = "minecraft:jigsaw";
  MinecraftBlockTypes2["Jukebox"] = "minecraft:jukebox";
  MinecraftBlockTypes2["JungleButton"] = "minecraft:jungle_button";
  MinecraftBlockTypes2["JungleDoor"] = "minecraft:jungle_door";
  MinecraftBlockTypes2["JungleDoubleSlab"] = "minecraft:jungle_double_slab";
  MinecraftBlockTypes2["JungleFence"] = "minecraft:jungle_fence";
  MinecraftBlockTypes2["JungleFenceGate"] = "minecraft:jungle_fence_gate";
  MinecraftBlockTypes2["JungleHangingSign"] = "minecraft:jungle_hanging_sign";
  MinecraftBlockTypes2["JungleLeaves"] = "minecraft:jungle_leaves";
  MinecraftBlockTypes2["JungleLog"] = "minecraft:jungle_log";
  MinecraftBlockTypes2["JunglePlanks"] = "minecraft:jungle_planks";
  MinecraftBlockTypes2["JunglePressurePlate"] = "minecraft:jungle_pressure_plate";
  MinecraftBlockTypes2["JungleSapling"] = "minecraft:jungle_sapling";
  MinecraftBlockTypes2["JungleSlab"] = "minecraft:jungle_slab";
  MinecraftBlockTypes2["JungleStairs"] = "minecraft:jungle_stairs";
  MinecraftBlockTypes2["JungleStandingSign"] = "minecraft:jungle_standing_sign";
  MinecraftBlockTypes2["JungleTrapdoor"] = "minecraft:jungle_trapdoor";
  MinecraftBlockTypes2["JungleWallSign"] = "minecraft:jungle_wall_sign";
  MinecraftBlockTypes2["JungleWood"] = "minecraft:jungle_wood";
  MinecraftBlockTypes2["Kelp"] = "minecraft:kelp";
  MinecraftBlockTypes2["Ladder"] = "minecraft:ladder";
  MinecraftBlockTypes2["Lantern"] = "minecraft:lantern";
  MinecraftBlockTypes2["LapisBlock"] = "minecraft:lapis_block";
  MinecraftBlockTypes2["LapisOre"] = "minecraft:lapis_ore";
  MinecraftBlockTypes2["LargeAmethystBud"] = "minecraft:large_amethyst_bud";
  MinecraftBlockTypes2["LargeFern"] = "minecraft:large_fern";
  MinecraftBlockTypes2["Lava"] = "minecraft:lava";
  MinecraftBlockTypes2["Lectern"] = "minecraft:lectern";
  MinecraftBlockTypes2["Lever"] = "minecraft:lever";
  MinecraftBlockTypes2["LightBlock"] = "minecraft:light_block";
  MinecraftBlockTypes2["LightBlueCandle"] = "minecraft:light_blue_candle";
  MinecraftBlockTypes2["LightBlueCandleCake"] = "minecraft:light_blue_candle_cake";
  MinecraftBlockTypes2["LightBlueCarpet"] = "minecraft:light_blue_carpet";
  MinecraftBlockTypes2["LightBlueConcrete"] = "minecraft:light_blue_concrete";
  MinecraftBlockTypes2["LightBlueConcretePowder"] = "minecraft:light_blue_concrete_powder";
  MinecraftBlockTypes2["LightBlueGlazedTerracotta"] = "minecraft:light_blue_glazed_terracotta";
  MinecraftBlockTypes2["LightBlueShulkerBox"] = "minecraft:light_blue_shulker_box";
  MinecraftBlockTypes2["LightBlueStainedGlass"] = "minecraft:light_blue_stained_glass";
  MinecraftBlockTypes2["LightBlueStainedGlassPane"] = "minecraft:light_blue_stained_glass_pane";
  MinecraftBlockTypes2["LightBlueTerracotta"] = "minecraft:light_blue_terracotta";
  MinecraftBlockTypes2["LightBlueWool"] = "minecraft:light_blue_wool";
  MinecraftBlockTypes2["LightGrayCandle"] = "minecraft:light_gray_candle";
  MinecraftBlockTypes2["LightGrayCandleCake"] = "minecraft:light_gray_candle_cake";
  MinecraftBlockTypes2["LightGrayCarpet"] = "minecraft:light_gray_carpet";
  MinecraftBlockTypes2["LightGrayConcrete"] = "minecraft:light_gray_concrete";
  MinecraftBlockTypes2["LightGrayConcretePowder"] = "minecraft:light_gray_concrete_powder";
  MinecraftBlockTypes2["LightGrayShulkerBox"] = "minecraft:light_gray_shulker_box";
  MinecraftBlockTypes2["LightGrayStainedGlass"] = "minecraft:light_gray_stained_glass";
  MinecraftBlockTypes2["LightGrayStainedGlassPane"] = "minecraft:light_gray_stained_glass_pane";
  MinecraftBlockTypes2["LightGrayTerracotta"] = "minecraft:light_gray_terracotta";
  MinecraftBlockTypes2["LightGrayWool"] = "minecraft:light_gray_wool";
  MinecraftBlockTypes2["LightWeightedPressurePlate"] = "minecraft:light_weighted_pressure_plate";
  MinecraftBlockTypes2["LightningRod"] = "minecraft:lightning_rod";
  MinecraftBlockTypes2["Lilac"] = "minecraft:lilac";
  MinecraftBlockTypes2["LilyOfTheValley"] = "minecraft:lily_of_the_valley";
  MinecraftBlockTypes2["LimeCandle"] = "minecraft:lime_candle";
  MinecraftBlockTypes2["LimeCandleCake"] = "minecraft:lime_candle_cake";
  MinecraftBlockTypes2["LimeCarpet"] = "minecraft:lime_carpet";
  MinecraftBlockTypes2["LimeConcrete"] = "minecraft:lime_concrete";
  MinecraftBlockTypes2["LimeConcretePowder"] = "minecraft:lime_concrete_powder";
  MinecraftBlockTypes2["LimeGlazedTerracotta"] = "minecraft:lime_glazed_terracotta";
  MinecraftBlockTypes2["LimeShulkerBox"] = "minecraft:lime_shulker_box";
  MinecraftBlockTypes2["LimeStainedGlass"] = "minecraft:lime_stained_glass";
  MinecraftBlockTypes2["LimeStainedGlassPane"] = "minecraft:lime_stained_glass_pane";
  MinecraftBlockTypes2["LimeTerracotta"] = "minecraft:lime_terracotta";
  MinecraftBlockTypes2["LimeWool"] = "minecraft:lime_wool";
  MinecraftBlockTypes2["LitBlastFurnace"] = "minecraft:lit_blast_furnace";
  MinecraftBlockTypes2["LitDeepslateRedstoneOre"] = "minecraft:lit_deepslate_redstone_ore";
  MinecraftBlockTypes2["LitFurnace"] = "minecraft:lit_furnace";
  MinecraftBlockTypes2["LitPumpkin"] = "minecraft:lit_pumpkin";
  MinecraftBlockTypes2["LitRedstoneLamp"] = "minecraft:lit_redstone_lamp";
  MinecraftBlockTypes2["LitRedstoneOre"] = "minecraft:lit_redstone_ore";
  MinecraftBlockTypes2["LitSmoker"] = "minecraft:lit_smoker";
  MinecraftBlockTypes2["Lodestone"] = "minecraft:lodestone";
  MinecraftBlockTypes2["Loom"] = "minecraft:loom";
  MinecraftBlockTypes2["MagentaCandle"] = "minecraft:magenta_candle";
  MinecraftBlockTypes2["MagentaCandleCake"] = "minecraft:magenta_candle_cake";
  MinecraftBlockTypes2["MagentaCarpet"] = "minecraft:magenta_carpet";
  MinecraftBlockTypes2["MagentaConcrete"] = "minecraft:magenta_concrete";
  MinecraftBlockTypes2["MagentaConcretePowder"] = "minecraft:magenta_concrete_powder";
  MinecraftBlockTypes2["MagentaGlazedTerracotta"] = "minecraft:magenta_glazed_terracotta";
  MinecraftBlockTypes2["MagentaShulkerBox"] = "minecraft:magenta_shulker_box";
  MinecraftBlockTypes2["MagentaStainedGlass"] = "minecraft:magenta_stained_glass";
  MinecraftBlockTypes2["MagentaStainedGlassPane"] = "minecraft:magenta_stained_glass_pane";
  MinecraftBlockTypes2["MagentaTerracotta"] = "minecraft:magenta_terracotta";
  MinecraftBlockTypes2["MagentaWool"] = "minecraft:magenta_wool";
  MinecraftBlockTypes2["Magma"] = "minecraft:magma";
  MinecraftBlockTypes2["MangroveButton"] = "minecraft:mangrove_button";
  MinecraftBlockTypes2["MangroveDoor"] = "minecraft:mangrove_door";
  MinecraftBlockTypes2["MangroveDoubleSlab"] = "minecraft:mangrove_double_slab";
  MinecraftBlockTypes2["MangroveFence"] = "minecraft:mangrove_fence";
  MinecraftBlockTypes2["MangroveFenceGate"] = "minecraft:mangrove_fence_gate";
  MinecraftBlockTypes2["MangroveHangingSign"] = "minecraft:mangrove_hanging_sign";
  MinecraftBlockTypes2["MangroveLeaves"] = "minecraft:mangrove_leaves";
  MinecraftBlockTypes2["MangroveLog"] = "minecraft:mangrove_log";
  MinecraftBlockTypes2["MangrovePlanks"] = "minecraft:mangrove_planks";
  MinecraftBlockTypes2["MangrovePressurePlate"] = "minecraft:mangrove_pressure_plate";
  MinecraftBlockTypes2["MangrovePropagule"] = "minecraft:mangrove_propagule";
  MinecraftBlockTypes2["MangroveRoots"] = "minecraft:mangrove_roots";
  MinecraftBlockTypes2["MangroveSlab"] = "minecraft:mangrove_slab";
  MinecraftBlockTypes2["MangroveStairs"] = "minecraft:mangrove_stairs";
  MinecraftBlockTypes2["MangroveStandingSign"] = "minecraft:mangrove_standing_sign";
  MinecraftBlockTypes2["MangroveTrapdoor"] = "minecraft:mangrove_trapdoor";
  MinecraftBlockTypes2["MangroveWallSign"] = "minecraft:mangrove_wall_sign";
  MinecraftBlockTypes2["MangroveWood"] = "minecraft:mangrove_wood";
  MinecraftBlockTypes2["MediumAmethystBud"] = "minecraft:medium_amethyst_bud";
  MinecraftBlockTypes2["MelonBlock"] = "minecraft:melon_block";
  MinecraftBlockTypes2["MelonStem"] = "minecraft:melon_stem";
  MinecraftBlockTypes2["MobSpawner"] = "minecraft:mob_spawner";
  MinecraftBlockTypes2["MonsterEgg"] = "minecraft:monster_egg";
  MinecraftBlockTypes2["MossBlock"] = "minecraft:moss_block";
  MinecraftBlockTypes2["MossCarpet"] = "minecraft:moss_carpet";
  MinecraftBlockTypes2["MossyCobblestone"] = "minecraft:mossy_cobblestone";
  MinecraftBlockTypes2["MossyCobblestoneStairs"] = "minecraft:mossy_cobblestone_stairs";
  MinecraftBlockTypes2["MossyStoneBrickStairs"] = "minecraft:mossy_stone_brick_stairs";
  MinecraftBlockTypes2["MovingBlock"] = "minecraft:moving_block";
  MinecraftBlockTypes2["Mud"] = "minecraft:mud";
  MinecraftBlockTypes2["MudBrickDoubleSlab"] = "minecraft:mud_brick_double_slab";
  MinecraftBlockTypes2["MudBrickSlab"] = "minecraft:mud_brick_slab";
  MinecraftBlockTypes2["MudBrickStairs"] = "minecraft:mud_brick_stairs";
  MinecraftBlockTypes2["MudBrickWall"] = "minecraft:mud_brick_wall";
  MinecraftBlockTypes2["MudBricks"] = "minecraft:mud_bricks";
  MinecraftBlockTypes2["MuddyMangroveRoots"] = "minecraft:muddy_mangrove_roots";
  MinecraftBlockTypes2["Mycelium"] = "minecraft:mycelium";
  MinecraftBlockTypes2["NetherBrick"] = "minecraft:nether_brick";
  MinecraftBlockTypes2["NetherBrickFence"] = "minecraft:nether_brick_fence";
  MinecraftBlockTypes2["NetherBrickSlab"] = "minecraft:nether_brick_slab";
  MinecraftBlockTypes2["NetherBrickStairs"] = "minecraft:nether_brick_stairs";
  MinecraftBlockTypes2["NetherGoldOre"] = "minecraft:nether_gold_ore";
  MinecraftBlockTypes2["NetherSprouts"] = "minecraft:nether_sprouts";
  MinecraftBlockTypes2["NetherWart"] = "minecraft:nether_wart";
  MinecraftBlockTypes2["NetherWartBlock"] = "minecraft:nether_wart_block";
  MinecraftBlockTypes2["NetheriteBlock"] = "minecraft:netherite_block";
  MinecraftBlockTypes2["Netherrack"] = "minecraft:netherrack";
  MinecraftBlockTypes2["Netherreactor"] = "minecraft:netherreactor";
  MinecraftBlockTypes2["NormalStoneStairs"] = "minecraft:normal_stone_stairs";
  MinecraftBlockTypes2["Noteblock"] = "minecraft:noteblock";
  MinecraftBlockTypes2["OakDoubleSlab"] = "minecraft:oak_double_slab";
  MinecraftBlockTypes2["OakFence"] = "minecraft:oak_fence";
  MinecraftBlockTypes2["OakHangingSign"] = "minecraft:oak_hanging_sign";
  MinecraftBlockTypes2["OakLeaves"] = "minecraft:oak_leaves";
  MinecraftBlockTypes2["OakLog"] = "minecraft:oak_log";
  MinecraftBlockTypes2["OakPlanks"] = "minecraft:oak_planks";
  MinecraftBlockTypes2["OakSapling"] = "minecraft:oak_sapling";
  MinecraftBlockTypes2["OakSlab"] = "minecraft:oak_slab";
  MinecraftBlockTypes2["OakStairs"] = "minecraft:oak_stairs";
  MinecraftBlockTypes2["OakWood"] = "minecraft:oak_wood";
  MinecraftBlockTypes2["Observer"] = "minecraft:observer";
  MinecraftBlockTypes2["Obsidian"] = "minecraft:obsidian";
  MinecraftBlockTypes2["OchreFroglight"] = "minecraft:ochre_froglight";
  MinecraftBlockTypes2["OrangeCandle"] = "minecraft:orange_candle";
  MinecraftBlockTypes2["OrangeCandleCake"] = "minecraft:orange_candle_cake";
  MinecraftBlockTypes2["OrangeCarpet"] = "minecraft:orange_carpet";
  MinecraftBlockTypes2["OrangeConcrete"] = "minecraft:orange_concrete";
  MinecraftBlockTypes2["OrangeConcretePowder"] = "minecraft:orange_concrete_powder";
  MinecraftBlockTypes2["OrangeGlazedTerracotta"] = "minecraft:orange_glazed_terracotta";
  MinecraftBlockTypes2["OrangeShulkerBox"] = "minecraft:orange_shulker_box";
  MinecraftBlockTypes2["OrangeStainedGlass"] = "minecraft:orange_stained_glass";
  MinecraftBlockTypes2["OrangeStainedGlassPane"] = "minecraft:orange_stained_glass_pane";
  MinecraftBlockTypes2["OrangeTerracotta"] = "minecraft:orange_terracotta";
  MinecraftBlockTypes2["OrangeTulip"] = "minecraft:orange_tulip";
  MinecraftBlockTypes2["OrangeWool"] = "minecraft:orange_wool";
  MinecraftBlockTypes2["OxeyeDaisy"] = "minecraft:oxeye_daisy";
  MinecraftBlockTypes2["OxidizedChiseledCopper"] = "minecraft:oxidized_chiseled_copper";
  MinecraftBlockTypes2["OxidizedCopper"] = "minecraft:oxidized_copper";
  MinecraftBlockTypes2["OxidizedCopperBulb"] = "minecraft:oxidized_copper_bulb";
  MinecraftBlockTypes2["OxidizedCopperDoor"] = "minecraft:oxidized_copper_door";
  MinecraftBlockTypes2["OxidizedCopperGrate"] = "minecraft:oxidized_copper_grate";
  MinecraftBlockTypes2["OxidizedCopperTrapdoor"] = "minecraft:oxidized_copper_trapdoor";
  MinecraftBlockTypes2["OxidizedCutCopper"] = "minecraft:oxidized_cut_copper";
  MinecraftBlockTypes2["OxidizedCutCopperSlab"] = "minecraft:oxidized_cut_copper_slab";
  MinecraftBlockTypes2["OxidizedCutCopperStairs"] = "minecraft:oxidized_cut_copper_stairs";
  MinecraftBlockTypes2["OxidizedDoubleCutCopperSlab"] = "minecraft:oxidized_double_cut_copper_slab";
  MinecraftBlockTypes2["PackedIce"] = "minecraft:packed_ice";
  MinecraftBlockTypes2["PackedMud"] = "minecraft:packed_mud";
  MinecraftBlockTypes2["PearlescentFroglight"] = "minecraft:pearlescent_froglight";
  MinecraftBlockTypes2["Peony"] = "minecraft:peony";
  MinecraftBlockTypes2["PetrifiedOakSlab"] = "minecraft:petrified_oak_slab";
  MinecraftBlockTypes2["PinkCandle"] = "minecraft:pink_candle";
  MinecraftBlockTypes2["PinkCandleCake"] = "minecraft:pink_candle_cake";
  MinecraftBlockTypes2["PinkCarpet"] = "minecraft:pink_carpet";
  MinecraftBlockTypes2["PinkConcrete"] = "minecraft:pink_concrete";
  MinecraftBlockTypes2["PinkConcretePowder"] = "minecraft:pink_concrete_powder";
  MinecraftBlockTypes2["PinkGlazedTerracotta"] = "minecraft:pink_glazed_terracotta";
  MinecraftBlockTypes2["PinkPetals"] = "minecraft:pink_petals";
  MinecraftBlockTypes2["PinkShulkerBox"] = "minecraft:pink_shulker_box";
  MinecraftBlockTypes2["PinkStainedGlass"] = "minecraft:pink_stained_glass";
  MinecraftBlockTypes2["PinkStainedGlassPane"] = "minecraft:pink_stained_glass_pane";
  MinecraftBlockTypes2["PinkTerracotta"] = "minecraft:pink_terracotta";
  MinecraftBlockTypes2["PinkTulip"] = "minecraft:pink_tulip";
  MinecraftBlockTypes2["PinkWool"] = "minecraft:pink_wool";
  MinecraftBlockTypes2["Piston"] = "minecraft:piston";
  MinecraftBlockTypes2["PistonArmCollision"] = "minecraft:piston_arm_collision";
  MinecraftBlockTypes2["PitcherCrop"] = "minecraft:pitcher_crop";
  MinecraftBlockTypes2["PitcherPlant"] = "minecraft:pitcher_plant";
  MinecraftBlockTypes2["Podzol"] = "minecraft:podzol";
  MinecraftBlockTypes2["PointedDripstone"] = "minecraft:pointed_dripstone";
  MinecraftBlockTypes2["PolishedAndesite"] = "minecraft:polished_andesite";
  MinecraftBlockTypes2["PolishedAndesiteStairs"] = "minecraft:polished_andesite_stairs";
  MinecraftBlockTypes2["PolishedBasalt"] = "minecraft:polished_basalt";
  MinecraftBlockTypes2["PolishedBlackstone"] = "minecraft:polished_blackstone";
  MinecraftBlockTypes2["PolishedBlackstoneBrickDoubleSlab"] = "minecraft:polished_blackstone_brick_double_slab";
  MinecraftBlockTypes2["PolishedBlackstoneBrickSlab"] = "minecraft:polished_blackstone_brick_slab";
  MinecraftBlockTypes2["PolishedBlackstoneBrickStairs"] = "minecraft:polished_blackstone_brick_stairs";
  MinecraftBlockTypes2["PolishedBlackstoneBrickWall"] = "minecraft:polished_blackstone_brick_wall";
  MinecraftBlockTypes2["PolishedBlackstoneBricks"] = "minecraft:polished_blackstone_bricks";
  MinecraftBlockTypes2["PolishedBlackstoneButton"] = "minecraft:polished_blackstone_button";
  MinecraftBlockTypes2["PolishedBlackstoneDoubleSlab"] = "minecraft:polished_blackstone_double_slab";
  MinecraftBlockTypes2["PolishedBlackstonePressurePlate"] = "minecraft:polished_blackstone_pressure_plate";
  MinecraftBlockTypes2["PolishedBlackstoneSlab"] = "minecraft:polished_blackstone_slab";
  MinecraftBlockTypes2["PolishedBlackstoneStairs"] = "minecraft:polished_blackstone_stairs";
  MinecraftBlockTypes2["PolishedBlackstoneWall"] = "minecraft:polished_blackstone_wall";
  MinecraftBlockTypes2["PolishedDeepslate"] = "minecraft:polished_deepslate";
  MinecraftBlockTypes2["PolishedDeepslateDoubleSlab"] = "minecraft:polished_deepslate_double_slab";
  MinecraftBlockTypes2["PolishedDeepslateSlab"] = "minecraft:polished_deepslate_slab";
  MinecraftBlockTypes2["PolishedDeepslateStairs"] = "minecraft:polished_deepslate_stairs";
  MinecraftBlockTypes2["PolishedDeepslateWall"] = "minecraft:polished_deepslate_wall";
  MinecraftBlockTypes2["PolishedDiorite"] = "minecraft:polished_diorite";
  MinecraftBlockTypes2["PolishedDioriteStairs"] = "minecraft:polished_diorite_stairs";
  MinecraftBlockTypes2["PolishedGranite"] = "minecraft:polished_granite";
  MinecraftBlockTypes2["PolishedGraniteStairs"] = "minecraft:polished_granite_stairs";
  MinecraftBlockTypes2["PolishedTuff"] = "minecraft:polished_tuff";
  MinecraftBlockTypes2["PolishedTuffDoubleSlab"] = "minecraft:polished_tuff_double_slab";
  MinecraftBlockTypes2["PolishedTuffSlab"] = "minecraft:polished_tuff_slab";
  MinecraftBlockTypes2["PolishedTuffStairs"] = "minecraft:polished_tuff_stairs";
  MinecraftBlockTypes2["PolishedTuffWall"] = "minecraft:polished_tuff_wall";
  MinecraftBlockTypes2["Poppy"] = "minecraft:poppy";
  MinecraftBlockTypes2["Portal"] = "minecraft:portal";
  MinecraftBlockTypes2["Potatoes"] = "minecraft:potatoes";
  MinecraftBlockTypes2["PowderSnow"] = "minecraft:powder_snow";
  MinecraftBlockTypes2["PoweredComparator"] = "minecraft:powered_comparator";
  MinecraftBlockTypes2["PoweredRepeater"] = "minecraft:powered_repeater";
  MinecraftBlockTypes2["Prismarine"] = "minecraft:prismarine";
  MinecraftBlockTypes2["PrismarineBricksStairs"] = "minecraft:prismarine_bricks_stairs";
  MinecraftBlockTypes2["PrismarineStairs"] = "minecraft:prismarine_stairs";
  MinecraftBlockTypes2["Pumpkin"] = "minecraft:pumpkin";
  MinecraftBlockTypes2["PumpkinStem"] = "minecraft:pumpkin_stem";
  MinecraftBlockTypes2["PurpleCandle"] = "minecraft:purple_candle";
  MinecraftBlockTypes2["PurpleCandleCake"] = "minecraft:purple_candle_cake";
  MinecraftBlockTypes2["PurpleCarpet"] = "minecraft:purple_carpet";
  MinecraftBlockTypes2["PurpleConcrete"] = "minecraft:purple_concrete";
  MinecraftBlockTypes2["PurpleConcretePowder"] = "minecraft:purple_concrete_powder";
  MinecraftBlockTypes2["PurpleGlazedTerracotta"] = "minecraft:purple_glazed_terracotta";
  MinecraftBlockTypes2["PurpleShulkerBox"] = "minecraft:purple_shulker_box";
  MinecraftBlockTypes2["PurpleStainedGlass"] = "minecraft:purple_stained_glass";
  MinecraftBlockTypes2["PurpleStainedGlassPane"] = "minecraft:purple_stained_glass_pane";
  MinecraftBlockTypes2["PurpleTerracotta"] = "minecraft:purple_terracotta";
  MinecraftBlockTypes2["PurpleWool"] = "minecraft:purple_wool";
  MinecraftBlockTypes2["PurpurBlock"] = "minecraft:purpur_block";
  MinecraftBlockTypes2["PurpurStairs"] = "minecraft:purpur_stairs";
  MinecraftBlockTypes2["QuartzBlock"] = "minecraft:quartz_block";
  MinecraftBlockTypes2["QuartzBricks"] = "minecraft:quartz_bricks";
  MinecraftBlockTypes2["QuartzOre"] = "minecraft:quartz_ore";
  MinecraftBlockTypes2["QuartzSlab"] = "minecraft:quartz_slab";
  MinecraftBlockTypes2["QuartzStairs"] = "minecraft:quartz_stairs";
  MinecraftBlockTypes2["Rail"] = "minecraft:rail";
  MinecraftBlockTypes2["RawCopperBlock"] = "minecraft:raw_copper_block";
  MinecraftBlockTypes2["RawGoldBlock"] = "minecraft:raw_gold_block";
  MinecraftBlockTypes2["RawIronBlock"] = "minecraft:raw_iron_block";
  MinecraftBlockTypes2["RedCandle"] = "minecraft:red_candle";
  MinecraftBlockTypes2["RedCandleCake"] = "minecraft:red_candle_cake";
  MinecraftBlockTypes2["RedCarpet"] = "minecraft:red_carpet";
  MinecraftBlockTypes2["RedConcrete"] = "minecraft:red_concrete";
  MinecraftBlockTypes2["RedConcretePowder"] = "minecraft:red_concrete_powder";
  MinecraftBlockTypes2["RedGlazedTerracotta"] = "minecraft:red_glazed_terracotta";
  MinecraftBlockTypes2["RedMushroom"] = "minecraft:red_mushroom";
  MinecraftBlockTypes2["RedMushroomBlock"] = "minecraft:red_mushroom_block";
  MinecraftBlockTypes2["RedNetherBrick"] = "minecraft:red_nether_brick";
  MinecraftBlockTypes2["RedNetherBrickStairs"] = "minecraft:red_nether_brick_stairs";
  MinecraftBlockTypes2["RedSandstone"] = "minecraft:red_sandstone";
  MinecraftBlockTypes2["RedSandstoneStairs"] = "minecraft:red_sandstone_stairs";
  MinecraftBlockTypes2["RedShulkerBox"] = "minecraft:red_shulker_box";
  MinecraftBlockTypes2["RedStainedGlass"] = "minecraft:red_stained_glass";
  MinecraftBlockTypes2["RedStainedGlassPane"] = "minecraft:red_stained_glass_pane";
  MinecraftBlockTypes2["RedTerracotta"] = "minecraft:red_terracotta";
  MinecraftBlockTypes2["RedTulip"] = "minecraft:red_tulip";
  MinecraftBlockTypes2["RedWool"] = "minecraft:red_wool";
  MinecraftBlockTypes2["RedstoneBlock"] = "minecraft:redstone_block";
  MinecraftBlockTypes2["RedstoneLamp"] = "minecraft:redstone_lamp";
  MinecraftBlockTypes2["RedstoneOre"] = "minecraft:redstone_ore";
  MinecraftBlockTypes2["RedstoneTorch"] = "minecraft:redstone_torch";
  MinecraftBlockTypes2["RedstoneWire"] = "minecraft:redstone_wire";
  MinecraftBlockTypes2["Reeds"] = "minecraft:reeds";
  MinecraftBlockTypes2["ReinforcedDeepslate"] = "minecraft:reinforced_deepslate";
  MinecraftBlockTypes2["RepeatingCommandBlock"] = "minecraft:repeating_command_block";
  MinecraftBlockTypes2["Reserved6"] = "minecraft:reserved6";
  MinecraftBlockTypes2["RespawnAnchor"] = "minecraft:respawn_anchor";
  MinecraftBlockTypes2["RoseBush"] = "minecraft:rose_bush";
  MinecraftBlockTypes2["Sand"] = "minecraft:sand";
  MinecraftBlockTypes2["Sandstone"] = "minecraft:sandstone";
  MinecraftBlockTypes2["SandstoneSlab"] = "minecraft:sandstone_slab";
  MinecraftBlockTypes2["SandstoneStairs"] = "minecraft:sandstone_stairs";
  MinecraftBlockTypes2["Scaffolding"] = "minecraft:scaffolding";
  MinecraftBlockTypes2["Sculk"] = "minecraft:sculk";
  MinecraftBlockTypes2["SculkCatalyst"] = "minecraft:sculk_catalyst";
  MinecraftBlockTypes2["SculkSensor"] = "minecraft:sculk_sensor";
  MinecraftBlockTypes2["SculkShrieker"] = "minecraft:sculk_shrieker";
  MinecraftBlockTypes2["SculkVein"] = "minecraft:sculk_vein";
  MinecraftBlockTypes2["SeaLantern"] = "minecraft:sea_lantern";
  MinecraftBlockTypes2["SeaPickle"] = "minecraft:sea_pickle";
  MinecraftBlockTypes2["Seagrass"] = "minecraft:seagrass";
  MinecraftBlockTypes2["ShortGrass"] = "minecraft:short_grass";
  MinecraftBlockTypes2["Shroomlight"] = "minecraft:shroomlight";
  MinecraftBlockTypes2["SilverGlazedTerracotta"] = "minecraft:silver_glazed_terracotta";
  MinecraftBlockTypes2["Skull"] = "minecraft:skull";
  MinecraftBlockTypes2["Slime"] = "minecraft:slime";
  MinecraftBlockTypes2["SmallAmethystBud"] = "minecraft:small_amethyst_bud";
  MinecraftBlockTypes2["SmallDripleafBlock"] = "minecraft:small_dripleaf_block";
  MinecraftBlockTypes2["SmithingTable"] = "minecraft:smithing_table";
  MinecraftBlockTypes2["Smoker"] = "minecraft:smoker";
  MinecraftBlockTypes2["SmoothBasalt"] = "minecraft:smooth_basalt";
  MinecraftBlockTypes2["SmoothQuartzStairs"] = "minecraft:smooth_quartz_stairs";
  MinecraftBlockTypes2["SmoothRedSandstoneStairs"] = "minecraft:smooth_red_sandstone_stairs";
  MinecraftBlockTypes2["SmoothSandstoneStairs"] = "minecraft:smooth_sandstone_stairs";
  MinecraftBlockTypes2["SmoothStone"] = "minecraft:smooth_stone";
  MinecraftBlockTypes2["SmoothStoneSlab"] = "minecraft:smooth_stone_slab";
  MinecraftBlockTypes2["SnifferEgg"] = "minecraft:sniffer_egg";
  MinecraftBlockTypes2["Snow"] = "minecraft:snow";
  MinecraftBlockTypes2["SnowLayer"] = "minecraft:snow_layer";
  MinecraftBlockTypes2["SoulCampfire"] = "minecraft:soul_campfire";
  MinecraftBlockTypes2["SoulFire"] = "minecraft:soul_fire";
  MinecraftBlockTypes2["SoulLantern"] = "minecraft:soul_lantern";
  MinecraftBlockTypes2["SoulSand"] = "minecraft:soul_sand";
  MinecraftBlockTypes2["SoulSoil"] = "minecraft:soul_soil";
  MinecraftBlockTypes2["SoulTorch"] = "minecraft:soul_torch";
  MinecraftBlockTypes2["Sponge"] = "minecraft:sponge";
  MinecraftBlockTypes2["SporeBlossom"] = "minecraft:spore_blossom";
  MinecraftBlockTypes2["SpruceButton"] = "minecraft:spruce_button";
  MinecraftBlockTypes2["SpruceDoor"] = "minecraft:spruce_door";
  MinecraftBlockTypes2["SpruceDoubleSlab"] = "minecraft:spruce_double_slab";
  MinecraftBlockTypes2["SpruceFence"] = "minecraft:spruce_fence";
  MinecraftBlockTypes2["SpruceFenceGate"] = "minecraft:spruce_fence_gate";
  MinecraftBlockTypes2["SpruceHangingSign"] = "minecraft:spruce_hanging_sign";
  MinecraftBlockTypes2["SpruceLeaves"] = "minecraft:spruce_leaves";
  MinecraftBlockTypes2["SpruceLog"] = "minecraft:spruce_log";
  MinecraftBlockTypes2["SprucePlanks"] = "minecraft:spruce_planks";
  MinecraftBlockTypes2["SprucePressurePlate"] = "minecraft:spruce_pressure_plate";
  MinecraftBlockTypes2["SpruceSapling"] = "minecraft:spruce_sapling";
  MinecraftBlockTypes2["SpruceSlab"] = "minecraft:spruce_slab";
  MinecraftBlockTypes2["SpruceStairs"] = "minecraft:spruce_stairs";
  MinecraftBlockTypes2["SpruceStandingSign"] = "minecraft:spruce_standing_sign";
  MinecraftBlockTypes2["SpruceTrapdoor"] = "minecraft:spruce_trapdoor";
  MinecraftBlockTypes2["SpruceWallSign"] = "minecraft:spruce_wall_sign";
  MinecraftBlockTypes2["SpruceWood"] = "minecraft:spruce_wood";
  MinecraftBlockTypes2["StandingBanner"] = "minecraft:standing_banner";
  MinecraftBlockTypes2["StandingSign"] = "minecraft:standing_sign";
  MinecraftBlockTypes2["StickyPiston"] = "minecraft:sticky_piston";
  MinecraftBlockTypes2["StickyPistonArmCollision"] = "minecraft:sticky_piston_arm_collision";
  MinecraftBlockTypes2["Stone"] = "minecraft:stone";
  MinecraftBlockTypes2["StoneBlockSlab2"] = "minecraft:stone_block_slab2";
  MinecraftBlockTypes2["StoneBlockSlab3"] = "minecraft:stone_block_slab3";
  MinecraftBlockTypes2["StoneBlockSlab4"] = "minecraft:stone_block_slab4";
  MinecraftBlockTypes2["StoneBrickSlab"] = "minecraft:stone_brick_slab";
  MinecraftBlockTypes2["StoneBrickStairs"] = "minecraft:stone_brick_stairs";
  MinecraftBlockTypes2["StoneButton"] = "minecraft:stone_button";
  MinecraftBlockTypes2["StonePressurePlate"] = "minecraft:stone_pressure_plate";
  MinecraftBlockTypes2["StoneStairs"] = "minecraft:stone_stairs";
  MinecraftBlockTypes2["Stonebrick"] = "minecraft:stonebrick";
  MinecraftBlockTypes2["Stonecutter"] = "minecraft:stonecutter";
  MinecraftBlockTypes2["StonecutterBlock"] = "minecraft:stonecutter_block";
  MinecraftBlockTypes2["StrippedAcaciaLog"] = "minecraft:stripped_acacia_log";
  MinecraftBlockTypes2["StrippedAcaciaWood"] = "minecraft:stripped_acacia_wood";
  MinecraftBlockTypes2["StrippedBambooBlock"] = "minecraft:stripped_bamboo_block";
  MinecraftBlockTypes2["StrippedBirchLog"] = "minecraft:stripped_birch_log";
  MinecraftBlockTypes2["StrippedBirchWood"] = "minecraft:stripped_birch_wood";
  MinecraftBlockTypes2["StrippedCherryLog"] = "minecraft:stripped_cherry_log";
  MinecraftBlockTypes2["StrippedCherryWood"] = "minecraft:stripped_cherry_wood";
  MinecraftBlockTypes2["StrippedCrimsonHyphae"] = "minecraft:stripped_crimson_hyphae";
  MinecraftBlockTypes2["StrippedCrimsonStem"] = "minecraft:stripped_crimson_stem";
  MinecraftBlockTypes2["StrippedDarkOakLog"] = "minecraft:stripped_dark_oak_log";
  MinecraftBlockTypes2["StrippedDarkOakWood"] = "minecraft:stripped_dark_oak_wood";
  MinecraftBlockTypes2["StrippedJungleLog"] = "minecraft:stripped_jungle_log";
  MinecraftBlockTypes2["StrippedJungleWood"] = "minecraft:stripped_jungle_wood";
  MinecraftBlockTypes2["StrippedMangroveLog"] = "minecraft:stripped_mangrove_log";
  MinecraftBlockTypes2["StrippedMangroveWood"] = "minecraft:stripped_mangrove_wood";
  MinecraftBlockTypes2["StrippedOakLog"] = "minecraft:stripped_oak_log";
  MinecraftBlockTypes2["StrippedOakWood"] = "minecraft:stripped_oak_wood";
  MinecraftBlockTypes2["StrippedSpruceLog"] = "minecraft:stripped_spruce_log";
  MinecraftBlockTypes2["StrippedSpruceWood"] = "minecraft:stripped_spruce_wood";
  MinecraftBlockTypes2["StrippedWarpedHyphae"] = "minecraft:stripped_warped_hyphae";
  MinecraftBlockTypes2["StrippedWarpedStem"] = "minecraft:stripped_warped_stem";
  MinecraftBlockTypes2["StructureBlock"] = "minecraft:structure_block";
  MinecraftBlockTypes2["StructureVoid"] = "minecraft:structure_void";
  MinecraftBlockTypes2["Sunflower"] = "minecraft:sunflower";
  MinecraftBlockTypes2["SuspiciousGravel"] = "minecraft:suspicious_gravel";
  MinecraftBlockTypes2["SuspiciousSand"] = "minecraft:suspicious_sand";
  MinecraftBlockTypes2["SweetBerryBush"] = "minecraft:sweet_berry_bush";
  MinecraftBlockTypes2["TallGrass"] = "minecraft:tall_grass";
  MinecraftBlockTypes2["Target"] = "minecraft:target";
  MinecraftBlockTypes2["TintedGlass"] = "minecraft:tinted_glass";
  MinecraftBlockTypes2["Tnt"] = "minecraft:tnt";
  MinecraftBlockTypes2["Torch"] = "minecraft:torch";
  MinecraftBlockTypes2["Torchflower"] = "minecraft:torchflower";
  MinecraftBlockTypes2["TorchflowerCrop"] = "minecraft:torchflower_crop";
  MinecraftBlockTypes2["Trapdoor"] = "minecraft:trapdoor";
  MinecraftBlockTypes2["TrappedChest"] = "minecraft:trapped_chest";
  MinecraftBlockTypes2["TrialSpawner"] = "minecraft:trial_spawner";
  MinecraftBlockTypes2["TripWire"] = "minecraft:trip_wire";
  MinecraftBlockTypes2["TripwireHook"] = "minecraft:tripwire_hook";
  MinecraftBlockTypes2["TubeCoral"] = "minecraft:tube_coral";
  MinecraftBlockTypes2["TubeCoralBlock"] = "minecraft:tube_coral_block";
  MinecraftBlockTypes2["TubeCoralFan"] = "minecraft:tube_coral_fan";
  MinecraftBlockTypes2["Tuff"] = "minecraft:tuff";
  MinecraftBlockTypes2["TuffBrickDoubleSlab"] = "minecraft:tuff_brick_double_slab";
  MinecraftBlockTypes2["TuffBrickSlab"] = "minecraft:tuff_brick_slab";
  MinecraftBlockTypes2["TuffBrickStairs"] = "minecraft:tuff_brick_stairs";
  MinecraftBlockTypes2["TuffBrickWall"] = "minecraft:tuff_brick_wall";
  MinecraftBlockTypes2["TuffBricks"] = "minecraft:tuff_bricks";
  MinecraftBlockTypes2["TuffDoubleSlab"] = "minecraft:tuff_double_slab";
  MinecraftBlockTypes2["TuffSlab"] = "minecraft:tuff_slab";
  MinecraftBlockTypes2["TuffStairs"] = "minecraft:tuff_stairs";
  MinecraftBlockTypes2["TuffWall"] = "minecraft:tuff_wall";
  MinecraftBlockTypes2["TurtleEgg"] = "minecraft:turtle_egg";
  MinecraftBlockTypes2["TwistingVines"] = "minecraft:twisting_vines";
  MinecraftBlockTypes2["UnderwaterTorch"] = "minecraft:underwater_torch";
  MinecraftBlockTypes2["UndyedShulkerBox"] = "minecraft:undyed_shulker_box";
  MinecraftBlockTypes2["Unknown"] = "minecraft:unknown";
  MinecraftBlockTypes2["UnlitRedstoneTorch"] = "minecraft:unlit_redstone_torch";
  MinecraftBlockTypes2["UnpoweredComparator"] = "minecraft:unpowered_comparator";
  MinecraftBlockTypes2["UnpoweredRepeater"] = "minecraft:unpowered_repeater";
  MinecraftBlockTypes2["Vault"] = "minecraft:vault";
  MinecraftBlockTypes2["VerdantFroglight"] = "minecraft:verdant_froglight";
  MinecraftBlockTypes2["Vine"] = "minecraft:vine";
  MinecraftBlockTypes2["WallBanner"] = "minecraft:wall_banner";
  MinecraftBlockTypes2["WallSign"] = "minecraft:wall_sign";
  MinecraftBlockTypes2["WarpedButton"] = "minecraft:warped_button";
  MinecraftBlockTypes2["WarpedDoor"] = "minecraft:warped_door";
  MinecraftBlockTypes2["WarpedDoubleSlab"] = "minecraft:warped_double_slab";
  MinecraftBlockTypes2["WarpedFence"] = "minecraft:warped_fence";
  MinecraftBlockTypes2["WarpedFenceGate"] = "minecraft:warped_fence_gate";
  MinecraftBlockTypes2["WarpedFungus"] = "minecraft:warped_fungus";
  MinecraftBlockTypes2["WarpedHangingSign"] = "minecraft:warped_hanging_sign";
  MinecraftBlockTypes2["WarpedHyphae"] = "minecraft:warped_hyphae";
  MinecraftBlockTypes2["WarpedNylium"] = "minecraft:warped_nylium";
  MinecraftBlockTypes2["WarpedPlanks"] = "minecraft:warped_planks";
  MinecraftBlockTypes2["WarpedPressurePlate"] = "minecraft:warped_pressure_plate";
  MinecraftBlockTypes2["WarpedRoots"] = "minecraft:warped_roots";
  MinecraftBlockTypes2["WarpedSlab"] = "minecraft:warped_slab";
  MinecraftBlockTypes2["WarpedStairs"] = "minecraft:warped_stairs";
  MinecraftBlockTypes2["WarpedStandingSign"] = "minecraft:warped_standing_sign";
  MinecraftBlockTypes2["WarpedStem"] = "minecraft:warped_stem";
  MinecraftBlockTypes2["WarpedTrapdoor"] = "minecraft:warped_trapdoor";
  MinecraftBlockTypes2["WarpedWallSign"] = "minecraft:warped_wall_sign";
  MinecraftBlockTypes2["WarpedWartBlock"] = "minecraft:warped_wart_block";
  MinecraftBlockTypes2["Water"] = "minecraft:water";
  MinecraftBlockTypes2["Waterlily"] = "minecraft:waterlily";
  MinecraftBlockTypes2["WaxedChiseledCopper"] = "minecraft:waxed_chiseled_copper";
  MinecraftBlockTypes2["WaxedCopper"] = "minecraft:waxed_copper";
  MinecraftBlockTypes2["WaxedCopperBulb"] = "minecraft:waxed_copper_bulb";
  MinecraftBlockTypes2["WaxedCopperDoor"] = "minecraft:waxed_copper_door";
  MinecraftBlockTypes2["WaxedCopperGrate"] = "minecraft:waxed_copper_grate";
  MinecraftBlockTypes2["WaxedCopperTrapdoor"] = "minecraft:waxed_copper_trapdoor";
  MinecraftBlockTypes2["WaxedCutCopper"] = "minecraft:waxed_cut_copper";
  MinecraftBlockTypes2["WaxedCutCopperSlab"] = "minecraft:waxed_cut_copper_slab";
  MinecraftBlockTypes2["WaxedCutCopperStairs"] = "minecraft:waxed_cut_copper_stairs";
  MinecraftBlockTypes2["WaxedDoubleCutCopperSlab"] = "minecraft:waxed_double_cut_copper_slab";
  MinecraftBlockTypes2["WaxedExposedChiseledCopper"] = "minecraft:waxed_exposed_chiseled_copper";
  MinecraftBlockTypes2["WaxedExposedCopper"] = "minecraft:waxed_exposed_copper";
  MinecraftBlockTypes2["WaxedExposedCopperBulb"] = "minecraft:waxed_exposed_copper_bulb";
  MinecraftBlockTypes2["WaxedExposedCopperDoor"] = "minecraft:waxed_exposed_copper_door";
  MinecraftBlockTypes2["WaxedExposedCopperGrate"] = "minecraft:waxed_exposed_copper_grate";
  MinecraftBlockTypes2["WaxedExposedCopperTrapdoor"] = "minecraft:waxed_exposed_copper_trapdoor";
  MinecraftBlockTypes2["WaxedExposedCutCopper"] = "minecraft:waxed_exposed_cut_copper";
  MinecraftBlockTypes2["WaxedExposedCutCopperSlab"] = "minecraft:waxed_exposed_cut_copper_slab";
  MinecraftBlockTypes2["WaxedExposedCutCopperStairs"] = "minecraft:waxed_exposed_cut_copper_stairs";
  MinecraftBlockTypes2["WaxedExposedDoubleCutCopperSlab"] = "minecraft:waxed_exposed_double_cut_copper_slab";
  MinecraftBlockTypes2["WaxedOxidizedChiseledCopper"] = "minecraft:waxed_oxidized_chiseled_copper";
  MinecraftBlockTypes2["WaxedOxidizedCopper"] = "minecraft:waxed_oxidized_copper";
  MinecraftBlockTypes2["WaxedOxidizedCopperBulb"] = "minecraft:waxed_oxidized_copper_bulb";
  MinecraftBlockTypes2["WaxedOxidizedCopperDoor"] = "minecraft:waxed_oxidized_copper_door";
  MinecraftBlockTypes2["WaxedOxidizedCopperGrate"] = "minecraft:waxed_oxidized_copper_grate";
  MinecraftBlockTypes2["WaxedOxidizedCopperTrapdoor"] = "minecraft:waxed_oxidized_copper_trapdoor";
  MinecraftBlockTypes2["WaxedOxidizedCutCopper"] = "minecraft:waxed_oxidized_cut_copper";
  MinecraftBlockTypes2["WaxedOxidizedCutCopperSlab"] = "minecraft:waxed_oxidized_cut_copper_slab";
  MinecraftBlockTypes2["WaxedOxidizedCutCopperStairs"] = "minecraft:waxed_oxidized_cut_copper_stairs";
  MinecraftBlockTypes2["WaxedOxidizedDoubleCutCopperSlab"] = "minecraft:waxed_oxidized_double_cut_copper_slab";
  MinecraftBlockTypes2["WaxedWeatheredChiseledCopper"] = "minecraft:waxed_weathered_chiseled_copper";
  MinecraftBlockTypes2["WaxedWeatheredCopper"] = "minecraft:waxed_weathered_copper";
  MinecraftBlockTypes2["WaxedWeatheredCopperBulb"] = "minecraft:waxed_weathered_copper_bulb";
  MinecraftBlockTypes2["WaxedWeatheredCopperDoor"] = "minecraft:waxed_weathered_copper_door";
  MinecraftBlockTypes2["WaxedWeatheredCopperGrate"] = "minecraft:waxed_weathered_copper_grate";
  MinecraftBlockTypes2["WaxedWeatheredCopperTrapdoor"] = "minecraft:waxed_weathered_copper_trapdoor";
  MinecraftBlockTypes2["WaxedWeatheredCutCopper"] = "minecraft:waxed_weathered_cut_copper";
  MinecraftBlockTypes2["WaxedWeatheredCutCopperSlab"] = "minecraft:waxed_weathered_cut_copper_slab";
  MinecraftBlockTypes2["WaxedWeatheredCutCopperStairs"] = "minecraft:waxed_weathered_cut_copper_stairs";
  MinecraftBlockTypes2["WaxedWeatheredDoubleCutCopperSlab"] = "minecraft:waxed_weathered_double_cut_copper_slab";
  MinecraftBlockTypes2["WeatheredChiseledCopper"] = "minecraft:weathered_chiseled_copper";
  MinecraftBlockTypes2["WeatheredCopper"] = "minecraft:weathered_copper";
  MinecraftBlockTypes2["WeatheredCopperBulb"] = "minecraft:weathered_copper_bulb";
  MinecraftBlockTypes2["WeatheredCopperDoor"] = "minecraft:weathered_copper_door";
  MinecraftBlockTypes2["WeatheredCopperGrate"] = "minecraft:weathered_copper_grate";
  MinecraftBlockTypes2["WeatheredCopperTrapdoor"] = "minecraft:weathered_copper_trapdoor";
  MinecraftBlockTypes2["WeatheredCutCopper"] = "minecraft:weathered_cut_copper";
  MinecraftBlockTypes2["WeatheredCutCopperSlab"] = "minecraft:weathered_cut_copper_slab";
  MinecraftBlockTypes2["WeatheredCutCopperStairs"] = "minecraft:weathered_cut_copper_stairs";
  MinecraftBlockTypes2["WeatheredDoubleCutCopperSlab"] = "minecraft:weathered_double_cut_copper_slab";
  MinecraftBlockTypes2["Web"] = "minecraft:web";
  MinecraftBlockTypes2["WeepingVines"] = "minecraft:weeping_vines";
  MinecraftBlockTypes2["Wheat"] = "minecraft:wheat";
  MinecraftBlockTypes2["WhiteCandle"] = "minecraft:white_candle";
  MinecraftBlockTypes2["WhiteCandleCake"] = "minecraft:white_candle_cake";
  MinecraftBlockTypes2["WhiteCarpet"] = "minecraft:white_carpet";
  MinecraftBlockTypes2["WhiteConcrete"] = "minecraft:white_concrete";
  MinecraftBlockTypes2["WhiteConcretePowder"] = "minecraft:white_concrete_powder";
  MinecraftBlockTypes2["WhiteGlazedTerracotta"] = "minecraft:white_glazed_terracotta";
  MinecraftBlockTypes2["WhiteShulkerBox"] = "minecraft:white_shulker_box";
  MinecraftBlockTypes2["WhiteStainedGlass"] = "minecraft:white_stained_glass";
  MinecraftBlockTypes2["WhiteStainedGlassPane"] = "minecraft:white_stained_glass_pane";
  MinecraftBlockTypes2["WhiteTerracotta"] = "minecraft:white_terracotta";
  MinecraftBlockTypes2["WhiteTulip"] = "minecraft:white_tulip";
  MinecraftBlockTypes2["WhiteWool"] = "minecraft:white_wool";
  MinecraftBlockTypes2["WitherRose"] = "minecraft:wither_rose";
  MinecraftBlockTypes2["WoodenButton"] = "minecraft:wooden_button";
  MinecraftBlockTypes2["WoodenDoor"] = "minecraft:wooden_door";
  MinecraftBlockTypes2["WoodenPressurePlate"] = "minecraft:wooden_pressure_plate";
  MinecraftBlockTypes2["YellowCandle"] = "minecraft:yellow_candle";
  MinecraftBlockTypes2["YellowCandleCake"] = "minecraft:yellow_candle_cake";
  MinecraftBlockTypes2["YellowCarpet"] = "minecraft:yellow_carpet";
  MinecraftBlockTypes2["YellowConcrete"] = "minecraft:yellow_concrete";
  MinecraftBlockTypes2["YellowConcretePowder"] = "minecraft:yellow_concrete_powder";
  MinecraftBlockTypes2["YellowFlower"] = "minecraft:yellow_flower";
  MinecraftBlockTypes2["YellowGlazedTerracotta"] = "minecraft:yellow_glazed_terracotta";
  MinecraftBlockTypes2["YellowShulkerBox"] = "minecraft:yellow_shulker_box";
  MinecraftBlockTypes2["YellowStainedGlass"] = "minecraft:yellow_stained_glass";
  MinecraftBlockTypes2["YellowStainedGlassPane"] = "minecraft:yellow_stained_glass_pane";
  MinecraftBlockTypes2["YellowTerracotta"] = "minecraft:yellow_terracotta";
  MinecraftBlockTypes2["YellowWool"] = "minecraft:yellow_wool";
  return MinecraftBlockTypes2;
})(MinecraftBlockTypes || {});
var MinecraftCameraPresetsTypes = ((MinecraftCameraPresetsTypes2) => {
  MinecraftCameraPresetsTypes2["FirstPerson"] = "minecraft:first_person";
  MinecraftCameraPresetsTypes2["Free"] = "minecraft:free";
  MinecraftCameraPresetsTypes2["ThirdPerson"] = "minecraft:third_person";
  MinecraftCameraPresetsTypes2["ThirdPersonFront"] = "minecraft:third_person_front";
  return MinecraftCameraPresetsTypes2;
})(MinecraftCameraPresetsTypes || {});
var MinecraftCooldownCategoryTypes = ((MinecraftCooldownCategoryTypes2) => {
  MinecraftCooldownCategoryTypes2["Chorusfruit"] = "minecraft:chorusfruit";
  MinecraftCooldownCategoryTypes2["EnderPearl"] = "minecraft:ender_pearl";
  MinecraftCooldownCategoryTypes2["GoatHorn"] = "minecraft:goat_horn";
  MinecraftCooldownCategoryTypes2["Shield"] = "minecraft:shield";
  MinecraftCooldownCategoryTypes2["WindCharge"] = "minecraft:wind_charge";
  return MinecraftCooldownCategoryTypes2;
})(MinecraftCooldownCategoryTypes || {});
var MinecraftDimensionTypes = ((MinecraftDimensionTypes2) => {
  MinecraftDimensionTypes2["Nether"] = "minecraft:nether";
  MinecraftDimensionTypes2["Overworld"] = "minecraft:overworld";
  MinecraftDimensionTypes2["TheEnd"] = "minecraft:the_end";
  return MinecraftDimensionTypes2;
})(MinecraftDimensionTypes || {});
var MinecraftEffectTypes = ((MinecraftEffectTypes2) => {
  MinecraftEffectTypes2["Absorption"] = "absorption";
  MinecraftEffectTypes2["BadOmen"] = "bad_omen";
  MinecraftEffectTypes2["Blindness"] = "blindness";
  MinecraftEffectTypes2["ConduitPower"] = "conduit_power";
  MinecraftEffectTypes2["Darkness"] = "darkness";
  MinecraftEffectTypes2["Empty"] = "empty";
  MinecraftEffectTypes2["FatalPoison"] = "fatal_poison";
  MinecraftEffectTypes2["FireResistance"] = "fire_resistance";
  MinecraftEffectTypes2["Haste"] = "haste";
  MinecraftEffectTypes2["HealthBoost"] = "health_boost";
  MinecraftEffectTypes2["Hunger"] = "hunger";
  MinecraftEffectTypes2["Infested"] = "infested";
  MinecraftEffectTypes2["InstantDamage"] = "instant_damage";
  MinecraftEffectTypes2["InstantHealth"] = "instant_health";
  MinecraftEffectTypes2["Invisibility"] = "invisibility";
  MinecraftEffectTypes2["JumpBoost"] = "jump_boost";
  MinecraftEffectTypes2["Levitation"] = "levitation";
  MinecraftEffectTypes2["MiningFatigue"] = "mining_fatigue";
  MinecraftEffectTypes2["Nausea"] = "nausea";
  MinecraftEffectTypes2["NightVision"] = "night_vision";
  MinecraftEffectTypes2["Oozing"] = "oozing";
  MinecraftEffectTypes2["Poison"] = "poison";
  MinecraftEffectTypes2["RaidOmen"] = "raid_omen";
  MinecraftEffectTypes2["Regeneration"] = "regeneration";
  MinecraftEffectTypes2["Resistance"] = "resistance";
  MinecraftEffectTypes2["Saturation"] = "saturation";
  MinecraftEffectTypes2["SlowFalling"] = "slow_falling";
  MinecraftEffectTypes2["Slowness"] = "slowness";
  MinecraftEffectTypes2["Speed"] = "speed";
  MinecraftEffectTypes2["Strength"] = "strength";
  MinecraftEffectTypes2["TrialOmen"] = "trial_omen";
  MinecraftEffectTypes2["VillageHero"] = "village_hero";
  MinecraftEffectTypes2["WaterBreathing"] = "water_breathing";
  MinecraftEffectTypes2["Weakness"] = "weakness";
  MinecraftEffectTypes2["Weaving"] = "weaving";
  MinecraftEffectTypes2["WindCharged"] = "wind_charged";
  MinecraftEffectTypes2["Wither"] = "wither";
  return MinecraftEffectTypes2;
})(MinecraftEffectTypes || {});
var MinecraftEnchantmentTypes = ((MinecraftEnchantmentTypes2) => {
  MinecraftEnchantmentTypes2["AquaAffinity"] = "aqua_affinity";
  MinecraftEnchantmentTypes2["BaneOfArthropods"] = "bane_of_arthropods";
  MinecraftEnchantmentTypes2["Binding"] = "binding";
  MinecraftEnchantmentTypes2["BlastProtection"] = "blast_protection";
  MinecraftEnchantmentTypes2["Breach"] = "breach";
  MinecraftEnchantmentTypes2["Channeling"] = "channeling";
  MinecraftEnchantmentTypes2["Density"] = "density";
  MinecraftEnchantmentTypes2["DepthStrider"] = "depth_strider";
  MinecraftEnchantmentTypes2["Efficiency"] = "efficiency";
  MinecraftEnchantmentTypes2["FeatherFalling"] = "feather_falling";
  MinecraftEnchantmentTypes2["FireAspect"] = "fire_aspect";
  MinecraftEnchantmentTypes2["FireProtection"] = "fire_protection";
  MinecraftEnchantmentTypes2["Flame"] = "flame";
  MinecraftEnchantmentTypes2["Fortune"] = "fortune";
  MinecraftEnchantmentTypes2["FrostWalker"] = "frost_walker";
  MinecraftEnchantmentTypes2["Impaling"] = "impaling";
  MinecraftEnchantmentTypes2["Infinity"] = "infinity";
  MinecraftEnchantmentTypes2["Knockback"] = "knockback";
  MinecraftEnchantmentTypes2["Looting"] = "looting";
  MinecraftEnchantmentTypes2["Loyalty"] = "loyalty";
  MinecraftEnchantmentTypes2["LuckOfTheSea"] = "luck_of_the_sea";
  MinecraftEnchantmentTypes2["Lure"] = "lure";
  MinecraftEnchantmentTypes2["Mending"] = "mending";
  MinecraftEnchantmentTypes2["Multishot"] = "multishot";
  MinecraftEnchantmentTypes2["Piercing"] = "piercing";
  MinecraftEnchantmentTypes2["Power"] = "power";
  MinecraftEnchantmentTypes2["ProjectileProtection"] = "projectile_protection";
  MinecraftEnchantmentTypes2["Protection"] = "protection";
  MinecraftEnchantmentTypes2["Punch"] = "punch";
  MinecraftEnchantmentTypes2["QuickCharge"] = "quick_charge";
  MinecraftEnchantmentTypes2["Respiration"] = "respiration";
  MinecraftEnchantmentTypes2["Riptide"] = "riptide";
  MinecraftEnchantmentTypes2["Sharpness"] = "sharpness";
  MinecraftEnchantmentTypes2["SilkTouch"] = "silk_touch";
  MinecraftEnchantmentTypes2["Smite"] = "smite";
  MinecraftEnchantmentTypes2["SoulSpeed"] = "soul_speed";
  MinecraftEnchantmentTypes2["SwiftSneak"] = "swift_sneak";
  MinecraftEnchantmentTypes2["Thorns"] = "thorns";
  MinecraftEnchantmentTypes2["Unbreaking"] = "unbreaking";
  MinecraftEnchantmentTypes2["Vanishing"] = "vanishing";
  MinecraftEnchantmentTypes2["WindBurst"] = "wind_burst";
  return MinecraftEnchantmentTypes2;
})(MinecraftEnchantmentTypes || {});
var MinecraftEntityTypes = ((MinecraftEntityTypes2) => {
  MinecraftEntityTypes2["Agent"] = "agent";
  MinecraftEntityTypes2["Allay"] = "allay";
  MinecraftEntityTypes2["AreaEffectCloud"] = "area_effect_cloud";
  MinecraftEntityTypes2["Armadillo"] = "armadillo";
  MinecraftEntityTypes2["ArmorStand"] = "armor_stand";
  MinecraftEntityTypes2["Arrow"] = "arrow";
  MinecraftEntityTypes2["Axolotl"] = "axolotl";
  MinecraftEntityTypes2["Bat"] = "bat";
  MinecraftEntityTypes2["Bee"] = "bee";
  MinecraftEntityTypes2["Blaze"] = "blaze";
  MinecraftEntityTypes2["Boat"] = "boat";
  MinecraftEntityTypes2["Bogged"] = "bogged";
  MinecraftEntityTypes2["Breeze"] = "breeze";
  MinecraftEntityTypes2["BreezeWindChargeProjectile"] = "breeze_wind_charge_projectile";
  MinecraftEntityTypes2["Camel"] = "camel";
  MinecraftEntityTypes2["Cat"] = "cat";
  MinecraftEntityTypes2["CaveSpider"] = "cave_spider";
  MinecraftEntityTypes2["ChestBoat"] = "chest_boat";
  MinecraftEntityTypes2["ChestMinecart"] = "chest_minecart";
  MinecraftEntityTypes2["Chicken"] = "chicken";
  MinecraftEntityTypes2["Cod"] = "cod";
  MinecraftEntityTypes2["CommandBlockMinecart"] = "command_block_minecart";
  MinecraftEntityTypes2["Cow"] = "cow";
  MinecraftEntityTypes2["Creeper"] = "creeper";
  MinecraftEntityTypes2["Dolphin"] = "dolphin";
  MinecraftEntityTypes2["Donkey"] = "donkey";
  MinecraftEntityTypes2["DragonFireball"] = "dragon_fireball";
  MinecraftEntityTypes2["Drowned"] = "drowned";
  MinecraftEntityTypes2["Egg"] = "egg";
  MinecraftEntityTypes2["ElderGuardian"] = "elder_guardian";
  MinecraftEntityTypes2["EnderCrystal"] = "ender_crystal";
  MinecraftEntityTypes2["EnderDragon"] = "ender_dragon";
  MinecraftEntityTypes2["EnderPearl"] = "ender_pearl";
  MinecraftEntityTypes2["Enderman"] = "enderman";
  MinecraftEntityTypes2["Endermite"] = "endermite";
  MinecraftEntityTypes2["EvocationIllager"] = "evocation_illager";
  MinecraftEntityTypes2["EyeOfEnderSignal"] = "eye_of_ender_signal";
  MinecraftEntityTypes2["Fireball"] = "fireball";
  MinecraftEntityTypes2["FireworksRocket"] = "fireworks_rocket";
  MinecraftEntityTypes2["FishingHook"] = "fishing_hook";
  MinecraftEntityTypes2["Fox"] = "fox";
  MinecraftEntityTypes2["Frog"] = "frog";
  MinecraftEntityTypes2["Ghast"] = "ghast";
  MinecraftEntityTypes2["GlowSquid"] = "glow_squid";
  MinecraftEntityTypes2["Goat"] = "goat";
  MinecraftEntityTypes2["Guardian"] = "guardian";
  MinecraftEntityTypes2["Hoglin"] = "hoglin";
  MinecraftEntityTypes2["HopperMinecart"] = "hopper_minecart";
  MinecraftEntityTypes2["Horse"] = "horse";
  MinecraftEntityTypes2["Husk"] = "husk";
  MinecraftEntityTypes2["IronGolem"] = "iron_golem";
  MinecraftEntityTypes2["LightningBolt"] = "lightning_bolt";
  MinecraftEntityTypes2["LingeringPotion"] = "lingering_potion";
  MinecraftEntityTypes2["Llama"] = "llama";
  MinecraftEntityTypes2["LlamaSpit"] = "llama_spit";
  MinecraftEntityTypes2["MagmaCube"] = "magma_cube";
  MinecraftEntityTypes2["Minecart"] = "minecart";
  MinecraftEntityTypes2["Mooshroom"] = "mooshroom";
  MinecraftEntityTypes2["Mule"] = "mule";
  MinecraftEntityTypes2["Npc"] = "npc";
  MinecraftEntityTypes2["Ocelot"] = "ocelot";
  MinecraftEntityTypes2["OminousItemSpawner"] = "ominous_item_spawner";
  MinecraftEntityTypes2["Panda"] = "panda";
  MinecraftEntityTypes2["Parrot"] = "parrot";
  MinecraftEntityTypes2["Phantom"] = "phantom";
  MinecraftEntityTypes2["Pig"] = "pig";
  MinecraftEntityTypes2["Piglin"] = "piglin";
  MinecraftEntityTypes2["PiglinBrute"] = "piglin_brute";
  MinecraftEntityTypes2["Pillager"] = "pillager";
  MinecraftEntityTypes2["Player"] = "player";
  MinecraftEntityTypes2["PolarBear"] = "polar_bear";
  MinecraftEntityTypes2["Pufferfish"] = "pufferfish";
  MinecraftEntityTypes2["Rabbit"] = "rabbit";
  MinecraftEntityTypes2["Ravager"] = "ravager";
  MinecraftEntityTypes2["Salmon"] = "salmon";
  MinecraftEntityTypes2["Sheep"] = "sheep";
  MinecraftEntityTypes2["Shulker"] = "shulker";
  MinecraftEntityTypes2["ShulkerBullet"] = "shulker_bullet";
  MinecraftEntityTypes2["Silverfish"] = "silverfish";
  MinecraftEntityTypes2["Skeleton"] = "skeleton";
  MinecraftEntityTypes2["SkeletonHorse"] = "skeleton_horse";
  MinecraftEntityTypes2["Slime"] = "slime";
  MinecraftEntityTypes2["SmallFireball"] = "small_fireball";
  MinecraftEntityTypes2["Sniffer"] = "sniffer";
  MinecraftEntityTypes2["SnowGolem"] = "snow_golem";
  MinecraftEntityTypes2["Snowball"] = "snowball";
  MinecraftEntityTypes2["Spider"] = "spider";
  MinecraftEntityTypes2["SplashPotion"] = "splash_potion";
  MinecraftEntityTypes2["Squid"] = "squid";
  MinecraftEntityTypes2["Stray"] = "stray";
  MinecraftEntityTypes2["Strider"] = "strider";
  MinecraftEntityTypes2["Tadpole"] = "tadpole";
  MinecraftEntityTypes2["ThrownTrident"] = "thrown_trident";
  MinecraftEntityTypes2["Tnt"] = "tnt";
  MinecraftEntityTypes2["TntMinecart"] = "tnt_minecart";
  MinecraftEntityTypes2["TraderLlama"] = "trader_llama";
  MinecraftEntityTypes2["TripodCamera"] = "tripod_camera";
  MinecraftEntityTypes2["Tropicalfish"] = "tropicalfish";
  MinecraftEntityTypes2["Turtle"] = "turtle";
  MinecraftEntityTypes2["Vex"] = "vex";
  MinecraftEntityTypes2["Villager"] = "villager";
  MinecraftEntityTypes2["VillagerV2"] = "villager_v2";
  MinecraftEntityTypes2["Vindicator"] = "vindicator";
  MinecraftEntityTypes2["WanderingTrader"] = "wandering_trader";
  MinecraftEntityTypes2["Warden"] = "warden";
  MinecraftEntityTypes2["WindChargeProjectile"] = "wind_charge_projectile";
  MinecraftEntityTypes2["Witch"] = "witch";
  MinecraftEntityTypes2["Wither"] = "wither";
  MinecraftEntityTypes2["WitherSkeleton"] = "wither_skeleton";
  MinecraftEntityTypes2["WitherSkull"] = "wither_skull";
  MinecraftEntityTypes2["WitherSkullDangerous"] = "wither_skull_dangerous";
  MinecraftEntityTypes2["Wolf"] = "wolf";
  MinecraftEntityTypes2["XpBottle"] = "xp_bottle";
  MinecraftEntityTypes2["XpOrb"] = "xp_orb";
  MinecraftEntityTypes2["Zoglin"] = "zoglin";
  MinecraftEntityTypes2["Zombie"] = "zombie";
  MinecraftEntityTypes2["ZombieHorse"] = "zombie_horse";
  MinecraftEntityTypes2["ZombiePigman"] = "zombie_pigman";
  MinecraftEntityTypes2["ZombieVillager"] = "zombie_villager";
  MinecraftEntityTypes2["ZombieVillagerV2"] = "zombie_villager_v2";
  return MinecraftEntityTypes2;
})(MinecraftEntityTypes || {});
var MinecraftFeatureTypes = ((MinecraftFeatureTypes2) => {
  MinecraftFeatureTypes2["AncientCity"] = "minecraft:ancient_city";
  MinecraftFeatureTypes2["BastionRemnant"] = "minecraft:bastion_remnant";
  MinecraftFeatureTypes2["BuriedTreasure"] = "minecraft:buried_treasure";
  MinecraftFeatureTypes2["EndCity"] = "minecraft:end_city";
  MinecraftFeatureTypes2["Fortress"] = "minecraft:fortress";
  MinecraftFeatureTypes2["Mansion"] = "minecraft:mansion";
  MinecraftFeatureTypes2["Mineshaft"] = "minecraft:mineshaft";
  MinecraftFeatureTypes2["Monument"] = "minecraft:monument";
  MinecraftFeatureTypes2["PillagerOutpost"] = "minecraft:pillager_outpost";
  MinecraftFeatureTypes2["RuinedPortal"] = "minecraft:ruined_portal";
  MinecraftFeatureTypes2["Ruins"] = "minecraft:ruins";
  MinecraftFeatureTypes2["Shipwreck"] = "minecraft:shipwreck";
  MinecraftFeatureTypes2["Stronghold"] = "minecraft:stronghold";
  MinecraftFeatureTypes2["Temple"] = "minecraft:temple";
  MinecraftFeatureTypes2["TrailRuins"] = "minecraft:trail_ruins";
  MinecraftFeatureTypes2["TrialChambers"] = "minecraft:trial_chambers";
  MinecraftFeatureTypes2["Village"] = "minecraft:village";
  return MinecraftFeatureTypes2;
})(MinecraftFeatureTypes || {});
var MinecraftItemTypes = ((MinecraftItemTypes2) => {
  MinecraftItemTypes2["AcaciaBoat"] = "minecraft:acacia_boat";
  MinecraftItemTypes2["AcaciaButton"] = "minecraft:acacia_button";
  MinecraftItemTypes2["AcaciaChestBoat"] = "minecraft:acacia_chest_boat";
  MinecraftItemTypes2["AcaciaDoor"] = "minecraft:acacia_door";
  MinecraftItemTypes2["AcaciaFence"] = "minecraft:acacia_fence";
  MinecraftItemTypes2["AcaciaFenceGate"] = "minecraft:acacia_fence_gate";
  MinecraftItemTypes2["AcaciaHangingSign"] = "minecraft:acacia_hanging_sign";
  MinecraftItemTypes2["AcaciaLeaves"] = "minecraft:acacia_leaves";
  MinecraftItemTypes2["AcaciaLog"] = "minecraft:acacia_log";
  MinecraftItemTypes2["AcaciaPlanks"] = "minecraft:acacia_planks";
  MinecraftItemTypes2["AcaciaPressurePlate"] = "minecraft:acacia_pressure_plate";
  MinecraftItemTypes2["AcaciaSapling"] = "minecraft:acacia_sapling";
  MinecraftItemTypes2["AcaciaSign"] = "minecraft:acacia_sign";
  MinecraftItemTypes2["AcaciaSlab"] = "minecraft:acacia_slab";
  MinecraftItemTypes2["AcaciaStairs"] = "minecraft:acacia_stairs";
  MinecraftItemTypes2["AcaciaTrapdoor"] = "minecraft:acacia_trapdoor";
  MinecraftItemTypes2["AcaciaWood"] = "minecraft:acacia_wood";
  MinecraftItemTypes2["ActivatorRail"] = "minecraft:activator_rail";
  MinecraftItemTypes2["Air"] = "minecraft:air";
  MinecraftItemTypes2["AllaySpawnEgg"] = "minecraft:allay_spawn_egg";
  MinecraftItemTypes2["Allium"] = "minecraft:allium";
  MinecraftItemTypes2["Allow"] = "minecraft:allow";
  MinecraftItemTypes2["AmethystBlock"] = "minecraft:amethyst_block";
  MinecraftItemTypes2["AmethystCluster"] = "minecraft:amethyst_cluster";
  MinecraftItemTypes2["AmethystShard"] = "minecraft:amethyst_shard";
  MinecraftItemTypes2["AncientDebris"] = "minecraft:ancient_debris";
  MinecraftItemTypes2["Andesite"] = "minecraft:andesite";
  MinecraftItemTypes2["AndesiteStairs"] = "minecraft:andesite_stairs";
  MinecraftItemTypes2["AnglerPotterySherd"] = "minecraft:angler_pottery_sherd";
  MinecraftItemTypes2["Anvil"] = "minecraft:anvil";
  MinecraftItemTypes2["Apple"] = "minecraft:apple";
  MinecraftItemTypes2["ArcherPotterySherd"] = "minecraft:archer_pottery_sherd";
  MinecraftItemTypes2["ArmadilloScute"] = "minecraft:armadillo_scute";
  MinecraftItemTypes2["ArmadilloSpawnEgg"] = "minecraft:armadillo_spawn_egg";
  MinecraftItemTypes2["ArmorStand"] = "minecraft:armor_stand";
  MinecraftItemTypes2["ArmsUpPotterySherd"] = "minecraft:arms_up_pottery_sherd";
  MinecraftItemTypes2["Arrow"] = "minecraft:arrow";
  MinecraftItemTypes2["AxolotlBucket"] = "minecraft:axolotl_bucket";
  MinecraftItemTypes2["AxolotlSpawnEgg"] = "minecraft:axolotl_spawn_egg";
  MinecraftItemTypes2["Azalea"] = "minecraft:azalea";
  MinecraftItemTypes2["AzaleaLeaves"] = "minecraft:azalea_leaves";
  MinecraftItemTypes2["AzaleaLeavesFlowered"] = "minecraft:azalea_leaves_flowered";
  MinecraftItemTypes2["AzureBluet"] = "minecraft:azure_bluet";
  MinecraftItemTypes2["BakedPotato"] = "minecraft:baked_potato";
  MinecraftItemTypes2["Bamboo"] = "minecraft:bamboo";
  MinecraftItemTypes2["BambooBlock"] = "minecraft:bamboo_block";
  MinecraftItemTypes2["BambooButton"] = "minecraft:bamboo_button";
  MinecraftItemTypes2["BambooChestRaft"] = "minecraft:bamboo_chest_raft";
  MinecraftItemTypes2["BambooDoor"] = "minecraft:bamboo_door";
  MinecraftItemTypes2["BambooFence"] = "minecraft:bamboo_fence";
  MinecraftItemTypes2["BambooFenceGate"] = "minecraft:bamboo_fence_gate";
  MinecraftItemTypes2["BambooHangingSign"] = "minecraft:bamboo_hanging_sign";
  MinecraftItemTypes2["BambooMosaic"] = "minecraft:bamboo_mosaic";
  MinecraftItemTypes2["BambooMosaicSlab"] = "minecraft:bamboo_mosaic_slab";
  MinecraftItemTypes2["BambooMosaicStairs"] = "minecraft:bamboo_mosaic_stairs";
  MinecraftItemTypes2["BambooPlanks"] = "minecraft:bamboo_planks";
  MinecraftItemTypes2["BambooPressurePlate"] = "minecraft:bamboo_pressure_plate";
  MinecraftItemTypes2["BambooRaft"] = "minecraft:bamboo_raft";
  MinecraftItemTypes2["BambooSign"] = "minecraft:bamboo_sign";
  MinecraftItemTypes2["BambooSlab"] = "minecraft:bamboo_slab";
  MinecraftItemTypes2["BambooStairs"] = "minecraft:bamboo_stairs";
  MinecraftItemTypes2["BambooTrapdoor"] = "minecraft:bamboo_trapdoor";
  MinecraftItemTypes2["Banner"] = "minecraft:banner";
  MinecraftItemTypes2["BannerPattern"] = "minecraft:banner_pattern";
  MinecraftItemTypes2["Barrel"] = "minecraft:barrel";
  MinecraftItemTypes2["Barrier"] = "minecraft:barrier";
  MinecraftItemTypes2["Basalt"] = "minecraft:basalt";
  MinecraftItemTypes2["BatSpawnEgg"] = "minecraft:bat_spawn_egg";
  MinecraftItemTypes2["Beacon"] = "minecraft:beacon";
  MinecraftItemTypes2["Bed"] = "minecraft:bed";
  MinecraftItemTypes2["Bedrock"] = "minecraft:bedrock";
  MinecraftItemTypes2["BeeNest"] = "minecraft:bee_nest";
  MinecraftItemTypes2["BeeSpawnEgg"] = "minecraft:bee_spawn_egg";
  MinecraftItemTypes2["Beef"] = "minecraft:beef";
  MinecraftItemTypes2["Beehive"] = "minecraft:beehive";
  MinecraftItemTypes2["Beetroot"] = "minecraft:beetroot";
  MinecraftItemTypes2["BeetrootSeeds"] = "minecraft:beetroot_seeds";
  MinecraftItemTypes2["BeetrootSoup"] = "minecraft:beetroot_soup";
  MinecraftItemTypes2["Bell"] = "minecraft:bell";
  MinecraftItemTypes2["BigDripleaf"] = "minecraft:big_dripleaf";
  MinecraftItemTypes2["BirchBoat"] = "minecraft:birch_boat";
  MinecraftItemTypes2["BirchButton"] = "minecraft:birch_button";
  MinecraftItemTypes2["BirchChestBoat"] = "minecraft:birch_chest_boat";
  MinecraftItemTypes2["BirchDoor"] = "minecraft:birch_door";
  MinecraftItemTypes2["BirchFence"] = "minecraft:birch_fence";
  MinecraftItemTypes2["BirchFenceGate"] = "minecraft:birch_fence_gate";
  MinecraftItemTypes2["BirchHangingSign"] = "minecraft:birch_hanging_sign";
  MinecraftItemTypes2["BirchLeaves"] = "minecraft:birch_leaves";
  MinecraftItemTypes2["BirchLog"] = "minecraft:birch_log";
  MinecraftItemTypes2["BirchPlanks"] = "minecraft:birch_planks";
  MinecraftItemTypes2["BirchPressurePlate"] = "minecraft:birch_pressure_plate";
  MinecraftItemTypes2["BirchSapling"] = "minecraft:birch_sapling";
  MinecraftItemTypes2["BirchSign"] = "minecraft:birch_sign";
  MinecraftItemTypes2["BirchSlab"] = "minecraft:birch_slab";
  MinecraftItemTypes2["BirchStairs"] = "minecraft:birch_stairs";
  MinecraftItemTypes2["BirchTrapdoor"] = "minecraft:birch_trapdoor";
  MinecraftItemTypes2["BirchWood"] = "minecraft:birch_wood";
  MinecraftItemTypes2["BlackCandle"] = "minecraft:black_candle";
  MinecraftItemTypes2["BlackCarpet"] = "minecraft:black_carpet";
  MinecraftItemTypes2["BlackConcrete"] = "minecraft:black_concrete";
  MinecraftItemTypes2["BlackConcretePowder"] = "minecraft:black_concrete_powder";
  MinecraftItemTypes2["BlackDye"] = "minecraft:black_dye";
  MinecraftItemTypes2["BlackGlazedTerracotta"] = "minecraft:black_glazed_terracotta";
  MinecraftItemTypes2["BlackShulkerBox"] = "minecraft:black_shulker_box";
  MinecraftItemTypes2["BlackStainedGlass"] = "minecraft:black_stained_glass";
  MinecraftItemTypes2["BlackStainedGlassPane"] = "minecraft:black_stained_glass_pane";
  MinecraftItemTypes2["BlackTerracotta"] = "minecraft:black_terracotta";
  MinecraftItemTypes2["BlackWool"] = "minecraft:black_wool";
  MinecraftItemTypes2["Blackstone"] = "minecraft:blackstone";
  MinecraftItemTypes2["BlackstoneSlab"] = "minecraft:blackstone_slab";
  MinecraftItemTypes2["BlackstoneStairs"] = "minecraft:blackstone_stairs";
  MinecraftItemTypes2["BlackstoneWall"] = "minecraft:blackstone_wall";
  MinecraftItemTypes2["BladePotterySherd"] = "minecraft:blade_pottery_sherd";
  MinecraftItemTypes2["BlastFurnace"] = "minecraft:blast_furnace";
  MinecraftItemTypes2["BlazePowder"] = "minecraft:blaze_powder";
  MinecraftItemTypes2["BlazeRod"] = "minecraft:blaze_rod";
  MinecraftItemTypes2["BlazeSpawnEgg"] = "minecraft:blaze_spawn_egg";
  MinecraftItemTypes2["BlueCandle"] = "minecraft:blue_candle";
  MinecraftItemTypes2["BlueCarpet"] = "minecraft:blue_carpet";
  MinecraftItemTypes2["BlueConcrete"] = "minecraft:blue_concrete";
  MinecraftItemTypes2["BlueConcretePowder"] = "minecraft:blue_concrete_powder";
  MinecraftItemTypes2["BlueDye"] = "minecraft:blue_dye";
  MinecraftItemTypes2["BlueGlazedTerracotta"] = "minecraft:blue_glazed_terracotta";
  MinecraftItemTypes2["BlueIce"] = "minecraft:blue_ice";
  MinecraftItemTypes2["BlueOrchid"] = "minecraft:blue_orchid";
  MinecraftItemTypes2["BlueShulkerBox"] = "minecraft:blue_shulker_box";
  MinecraftItemTypes2["BlueStainedGlass"] = "minecraft:blue_stained_glass";
  MinecraftItemTypes2["BlueStainedGlassPane"] = "minecraft:blue_stained_glass_pane";
  MinecraftItemTypes2["BlueTerracotta"] = "minecraft:blue_terracotta";
  MinecraftItemTypes2["BlueWool"] = "minecraft:blue_wool";
  MinecraftItemTypes2["Boat"] = "minecraft:boat";
  MinecraftItemTypes2["BoggedSpawnEgg"] = "minecraft:bogged_spawn_egg";
  MinecraftItemTypes2["BoltArmorTrimSmithingTemplate"] = "minecraft:bolt_armor_trim_smithing_template";
  MinecraftItemTypes2["Bone"] = "minecraft:bone";
  MinecraftItemTypes2["BoneBlock"] = "minecraft:bone_block";
  MinecraftItemTypes2["BoneMeal"] = "minecraft:bone_meal";
  MinecraftItemTypes2["Book"] = "minecraft:book";
  MinecraftItemTypes2["Bookshelf"] = "minecraft:bookshelf";
  MinecraftItemTypes2["BorderBlock"] = "minecraft:border_block";
  MinecraftItemTypes2["BordureIndentedBannerPattern"] = "minecraft:bordure_indented_banner_pattern";
  MinecraftItemTypes2["Bow"] = "minecraft:bow";
  MinecraftItemTypes2["Bowl"] = "minecraft:bowl";
  MinecraftItemTypes2["BrainCoral"] = "minecraft:brain_coral";
  MinecraftItemTypes2["BrainCoralBlock"] = "minecraft:brain_coral_block";
  MinecraftItemTypes2["BrainCoralFan"] = "minecraft:brain_coral_fan";
  MinecraftItemTypes2["Bread"] = "minecraft:bread";
  MinecraftItemTypes2["BreezeRod"] = "minecraft:breeze_rod";
  MinecraftItemTypes2["BreezeSpawnEgg"] = "minecraft:breeze_spawn_egg";
  MinecraftItemTypes2["BrewerPotterySherd"] = "minecraft:brewer_pottery_sherd";
  MinecraftItemTypes2["BrewingStand"] = "minecraft:brewing_stand";
  MinecraftItemTypes2["Brick"] = "minecraft:brick";
  MinecraftItemTypes2["BrickBlock"] = "minecraft:brick_block";
  MinecraftItemTypes2["BrickSlab"] = "minecraft:brick_slab";
  MinecraftItemTypes2["BrickStairs"] = "minecraft:brick_stairs";
  MinecraftItemTypes2["BrownCandle"] = "minecraft:brown_candle";
  MinecraftItemTypes2["BrownCarpet"] = "minecraft:brown_carpet";
  MinecraftItemTypes2["BrownConcrete"] = "minecraft:brown_concrete";
  MinecraftItemTypes2["BrownConcretePowder"] = "minecraft:brown_concrete_powder";
  MinecraftItemTypes2["BrownDye"] = "minecraft:brown_dye";
  MinecraftItemTypes2["BrownGlazedTerracotta"] = "minecraft:brown_glazed_terracotta";
  MinecraftItemTypes2["BrownMushroom"] = "minecraft:brown_mushroom";
  MinecraftItemTypes2["BrownMushroomBlock"] = "minecraft:brown_mushroom_block";
  MinecraftItemTypes2["BrownShulkerBox"] = "minecraft:brown_shulker_box";
  MinecraftItemTypes2["BrownStainedGlass"] = "minecraft:brown_stained_glass";
  MinecraftItemTypes2["BrownStainedGlassPane"] = "minecraft:brown_stained_glass_pane";
  MinecraftItemTypes2["BrownTerracotta"] = "minecraft:brown_terracotta";
  MinecraftItemTypes2["BrownWool"] = "minecraft:brown_wool";
  MinecraftItemTypes2["Brush"] = "minecraft:brush";
  MinecraftItemTypes2["BubbleCoral"] = "minecraft:bubble_coral";
  MinecraftItemTypes2["BubbleCoralBlock"] = "minecraft:bubble_coral_block";
  MinecraftItemTypes2["BubbleCoralFan"] = "minecraft:bubble_coral_fan";
  MinecraftItemTypes2["Bucket"] = "minecraft:bucket";
  MinecraftItemTypes2["BuddingAmethyst"] = "minecraft:budding_amethyst";
  MinecraftItemTypes2["BurnPotterySherd"] = "minecraft:burn_pottery_sherd";
  MinecraftItemTypes2["Cactus"] = "minecraft:cactus";
  MinecraftItemTypes2["Cake"] = "minecraft:cake";
  MinecraftItemTypes2["Calcite"] = "minecraft:calcite";
  MinecraftItemTypes2["CalibratedSculkSensor"] = "minecraft:calibrated_sculk_sensor";
  MinecraftItemTypes2["CamelSpawnEgg"] = "minecraft:camel_spawn_egg";
  MinecraftItemTypes2["Campfire"] = "minecraft:campfire";
  MinecraftItemTypes2["Candle"] = "minecraft:candle";
  MinecraftItemTypes2["Carpet"] = "minecraft:carpet";
  MinecraftItemTypes2["Carrot"] = "minecraft:carrot";
  MinecraftItemTypes2["CarrotOnAStick"] = "minecraft:carrot_on_a_stick";
  MinecraftItemTypes2["CartographyTable"] = "minecraft:cartography_table";
  MinecraftItemTypes2["CarvedPumpkin"] = "minecraft:carved_pumpkin";
  MinecraftItemTypes2["CatSpawnEgg"] = "minecraft:cat_spawn_egg";
  MinecraftItemTypes2["Cauldron"] = "minecraft:cauldron";
  MinecraftItemTypes2["CaveSpiderSpawnEgg"] = "minecraft:cave_spider_spawn_egg";
  MinecraftItemTypes2["Chain"] = "minecraft:chain";
  MinecraftItemTypes2["ChainCommandBlock"] = "minecraft:chain_command_block";
  MinecraftItemTypes2["ChainmailBoots"] = "minecraft:chainmail_boots";
  MinecraftItemTypes2["ChainmailChestplate"] = "minecraft:chainmail_chestplate";
  MinecraftItemTypes2["ChainmailHelmet"] = "minecraft:chainmail_helmet";
  MinecraftItemTypes2["ChainmailLeggings"] = "minecraft:chainmail_leggings";
  MinecraftItemTypes2["Charcoal"] = "minecraft:charcoal";
  MinecraftItemTypes2["CherryBoat"] = "minecraft:cherry_boat";
  MinecraftItemTypes2["CherryButton"] = "minecraft:cherry_button";
  MinecraftItemTypes2["CherryChestBoat"] = "minecraft:cherry_chest_boat";
  MinecraftItemTypes2["CherryDoor"] = "minecraft:cherry_door";
  MinecraftItemTypes2["CherryFence"] = "minecraft:cherry_fence";
  MinecraftItemTypes2["CherryFenceGate"] = "minecraft:cherry_fence_gate";
  MinecraftItemTypes2["CherryHangingSign"] = "minecraft:cherry_hanging_sign";
  MinecraftItemTypes2["CherryLeaves"] = "minecraft:cherry_leaves";
  MinecraftItemTypes2["CherryLog"] = "minecraft:cherry_log";
  MinecraftItemTypes2["CherryPlanks"] = "minecraft:cherry_planks";
  MinecraftItemTypes2["CherryPressurePlate"] = "minecraft:cherry_pressure_plate";
  MinecraftItemTypes2["CherrySapling"] = "minecraft:cherry_sapling";
  MinecraftItemTypes2["CherrySign"] = "minecraft:cherry_sign";
  MinecraftItemTypes2["CherrySlab"] = "minecraft:cherry_slab";
  MinecraftItemTypes2["CherryStairs"] = "minecraft:cherry_stairs";
  MinecraftItemTypes2["CherryTrapdoor"] = "minecraft:cherry_trapdoor";
  MinecraftItemTypes2["CherryWood"] = "minecraft:cherry_wood";
  MinecraftItemTypes2["Chest"] = "minecraft:chest";
  MinecraftItemTypes2["ChestBoat"] = "minecraft:chest_boat";
  MinecraftItemTypes2["ChestMinecart"] = "minecraft:chest_minecart";
  MinecraftItemTypes2["Chicken"] = "minecraft:chicken";
  MinecraftItemTypes2["ChickenSpawnEgg"] = "minecraft:chicken_spawn_egg";
  MinecraftItemTypes2["ChiseledBookshelf"] = "minecraft:chiseled_bookshelf";
  MinecraftItemTypes2["ChiseledCopper"] = "minecraft:chiseled_copper";
  MinecraftItemTypes2["ChiseledDeepslate"] = "minecraft:chiseled_deepslate";
  MinecraftItemTypes2["ChiseledNetherBricks"] = "minecraft:chiseled_nether_bricks";
  MinecraftItemTypes2["ChiseledPolishedBlackstone"] = "minecraft:chiseled_polished_blackstone";
  MinecraftItemTypes2["ChiseledTuff"] = "minecraft:chiseled_tuff";
  MinecraftItemTypes2["ChiseledTuffBricks"] = "minecraft:chiseled_tuff_bricks";
  MinecraftItemTypes2["ChorusFlower"] = "minecraft:chorus_flower";
  MinecraftItemTypes2["ChorusFruit"] = "minecraft:chorus_fruit";
  MinecraftItemTypes2["ChorusPlant"] = "minecraft:chorus_plant";
  MinecraftItemTypes2["Clay"] = "minecraft:clay";
  MinecraftItemTypes2["ClayBall"] = "minecraft:clay_ball";
  MinecraftItemTypes2["Clock"] = "minecraft:clock";
  MinecraftItemTypes2["Coal"] = "minecraft:coal";
  MinecraftItemTypes2["CoalBlock"] = "minecraft:coal_block";
  MinecraftItemTypes2["CoalOre"] = "minecraft:coal_ore";
  MinecraftItemTypes2["CoastArmorTrimSmithingTemplate"] = "minecraft:coast_armor_trim_smithing_template";
  MinecraftItemTypes2["CobbledDeepslate"] = "minecraft:cobbled_deepslate";
  MinecraftItemTypes2["CobbledDeepslateSlab"] = "minecraft:cobbled_deepslate_slab";
  MinecraftItemTypes2["CobbledDeepslateStairs"] = "minecraft:cobbled_deepslate_stairs";
  MinecraftItemTypes2["CobbledDeepslateWall"] = "minecraft:cobbled_deepslate_wall";
  MinecraftItemTypes2["Cobblestone"] = "minecraft:cobblestone";
  MinecraftItemTypes2["CobblestoneSlab"] = "minecraft:cobblestone_slab";
  MinecraftItemTypes2["CobblestoneWall"] = "minecraft:cobblestone_wall";
  MinecraftItemTypes2["CocoaBeans"] = "minecraft:cocoa_beans";
  MinecraftItemTypes2["Cod"] = "minecraft:cod";
  MinecraftItemTypes2["CodBucket"] = "minecraft:cod_bucket";
  MinecraftItemTypes2["CodSpawnEgg"] = "minecraft:cod_spawn_egg";
  MinecraftItemTypes2["CommandBlock"] = "minecraft:command_block";
  MinecraftItemTypes2["CommandBlockMinecart"] = "minecraft:command_block_minecart";
  MinecraftItemTypes2["Comparator"] = "minecraft:comparator";
  MinecraftItemTypes2["Compass"] = "minecraft:compass";
  MinecraftItemTypes2["Composter"] = "minecraft:composter";
  MinecraftItemTypes2["Concrete"] = "minecraft:concrete";
  MinecraftItemTypes2["ConcretePowder"] = "minecraft:concrete_powder";
  MinecraftItemTypes2["Conduit"] = "minecraft:conduit";
  MinecraftItemTypes2["CookedBeef"] = "minecraft:cooked_beef";
  MinecraftItemTypes2["CookedChicken"] = "minecraft:cooked_chicken";
  MinecraftItemTypes2["CookedCod"] = "minecraft:cooked_cod";
  MinecraftItemTypes2["CookedMutton"] = "minecraft:cooked_mutton";
  MinecraftItemTypes2["CookedPorkchop"] = "minecraft:cooked_porkchop";
  MinecraftItemTypes2["CookedRabbit"] = "minecraft:cooked_rabbit";
  MinecraftItemTypes2["CookedSalmon"] = "minecraft:cooked_salmon";
  MinecraftItemTypes2["Cookie"] = "minecraft:cookie";
  MinecraftItemTypes2["CopperBlock"] = "minecraft:copper_block";
  MinecraftItemTypes2["CopperBulb"] = "minecraft:copper_bulb";
  MinecraftItemTypes2["CopperDoor"] = "minecraft:copper_door";
  MinecraftItemTypes2["CopperGrate"] = "minecraft:copper_grate";
  MinecraftItemTypes2["CopperIngot"] = "minecraft:copper_ingot";
  MinecraftItemTypes2["CopperOre"] = "minecraft:copper_ore";
  MinecraftItemTypes2["CopperTrapdoor"] = "minecraft:copper_trapdoor";
  MinecraftItemTypes2["Coral"] = "minecraft:coral";
  MinecraftItemTypes2["CoralBlock"] = "minecraft:coral_block";
  MinecraftItemTypes2["CoralFan"] = "minecraft:coral_fan";
  MinecraftItemTypes2["CoralFanDead"] = "minecraft:coral_fan_dead";
  MinecraftItemTypes2["Cornflower"] = "minecraft:cornflower";
  MinecraftItemTypes2["CowSpawnEgg"] = "minecraft:cow_spawn_egg";
  MinecraftItemTypes2["CrackedDeepslateBricks"] = "minecraft:cracked_deepslate_bricks";
  MinecraftItemTypes2["CrackedDeepslateTiles"] = "minecraft:cracked_deepslate_tiles";
  MinecraftItemTypes2["CrackedNetherBricks"] = "minecraft:cracked_nether_bricks";
  MinecraftItemTypes2["CrackedPolishedBlackstoneBricks"] = "minecraft:cracked_polished_blackstone_bricks";
  MinecraftItemTypes2["Crafter"] = "minecraft:crafter";
  MinecraftItemTypes2["CraftingTable"] = "minecraft:crafting_table";
  MinecraftItemTypes2["CreeperBannerPattern"] = "minecraft:creeper_banner_pattern";
  MinecraftItemTypes2["CreeperSpawnEgg"] = "minecraft:creeper_spawn_egg";
  MinecraftItemTypes2["CrimsonButton"] = "minecraft:crimson_button";
  MinecraftItemTypes2["CrimsonDoor"] = "minecraft:crimson_door";
  MinecraftItemTypes2["CrimsonFence"] = "minecraft:crimson_fence";
  MinecraftItemTypes2["CrimsonFenceGate"] = "minecraft:crimson_fence_gate";
  MinecraftItemTypes2["CrimsonFungus"] = "minecraft:crimson_fungus";
  MinecraftItemTypes2["CrimsonHangingSign"] = "minecraft:crimson_hanging_sign";
  MinecraftItemTypes2["CrimsonHyphae"] = "minecraft:crimson_hyphae";
  MinecraftItemTypes2["CrimsonNylium"] = "minecraft:crimson_nylium";
  MinecraftItemTypes2["CrimsonPlanks"] = "minecraft:crimson_planks";
  MinecraftItemTypes2["CrimsonPressurePlate"] = "minecraft:crimson_pressure_plate";
  MinecraftItemTypes2["CrimsonRoots"] = "minecraft:crimson_roots";
  MinecraftItemTypes2["CrimsonSign"] = "minecraft:crimson_sign";
  MinecraftItemTypes2["CrimsonSlab"] = "minecraft:crimson_slab";
  MinecraftItemTypes2["CrimsonStairs"] = "minecraft:crimson_stairs";
  MinecraftItemTypes2["CrimsonStem"] = "minecraft:crimson_stem";
  MinecraftItemTypes2["CrimsonTrapdoor"] = "minecraft:crimson_trapdoor";
  MinecraftItemTypes2["Crossbow"] = "minecraft:crossbow";
  MinecraftItemTypes2["CryingObsidian"] = "minecraft:crying_obsidian";
  MinecraftItemTypes2["CutCopper"] = "minecraft:cut_copper";
  MinecraftItemTypes2["CutCopperSlab"] = "minecraft:cut_copper_slab";
  MinecraftItemTypes2["CutCopperStairs"] = "minecraft:cut_copper_stairs";
  MinecraftItemTypes2["CyanCandle"] = "minecraft:cyan_candle";
  MinecraftItemTypes2["CyanCarpet"] = "minecraft:cyan_carpet";
  MinecraftItemTypes2["CyanConcrete"] = "minecraft:cyan_concrete";
  MinecraftItemTypes2["CyanConcretePowder"] = "minecraft:cyan_concrete_powder";
  MinecraftItemTypes2["CyanDye"] = "minecraft:cyan_dye";
  MinecraftItemTypes2["CyanGlazedTerracotta"] = "minecraft:cyan_glazed_terracotta";
  MinecraftItemTypes2["CyanShulkerBox"] = "minecraft:cyan_shulker_box";
  MinecraftItemTypes2["CyanStainedGlass"] = "minecraft:cyan_stained_glass";
  MinecraftItemTypes2["CyanStainedGlassPane"] = "minecraft:cyan_stained_glass_pane";
  MinecraftItemTypes2["CyanTerracotta"] = "minecraft:cyan_terracotta";
  MinecraftItemTypes2["CyanWool"] = "minecraft:cyan_wool";
  MinecraftItemTypes2["DangerPotterySherd"] = "minecraft:danger_pottery_sherd";
  MinecraftItemTypes2["DarkOakBoat"] = "minecraft:dark_oak_boat";
  MinecraftItemTypes2["DarkOakButton"] = "minecraft:dark_oak_button";
  MinecraftItemTypes2["DarkOakChestBoat"] = "minecraft:dark_oak_chest_boat";
  MinecraftItemTypes2["DarkOakDoor"] = "minecraft:dark_oak_door";
  MinecraftItemTypes2["DarkOakFence"] = "minecraft:dark_oak_fence";
  MinecraftItemTypes2["DarkOakFenceGate"] = "minecraft:dark_oak_fence_gate";
  MinecraftItemTypes2["DarkOakHangingSign"] = "minecraft:dark_oak_hanging_sign";
  MinecraftItemTypes2["DarkOakLeaves"] = "minecraft:dark_oak_leaves";
  MinecraftItemTypes2["DarkOakLog"] = "minecraft:dark_oak_log";
  MinecraftItemTypes2["DarkOakPlanks"] = "minecraft:dark_oak_planks";
  MinecraftItemTypes2["DarkOakPressurePlate"] = "minecraft:dark_oak_pressure_plate";
  MinecraftItemTypes2["DarkOakSapling"] = "minecraft:dark_oak_sapling";
  MinecraftItemTypes2["DarkOakSign"] = "minecraft:dark_oak_sign";
  MinecraftItemTypes2["DarkOakSlab"] = "minecraft:dark_oak_slab";
  MinecraftItemTypes2["DarkOakStairs"] = "minecraft:dark_oak_stairs";
  MinecraftItemTypes2["DarkOakTrapdoor"] = "minecraft:dark_oak_trapdoor";
  MinecraftItemTypes2["DarkOakWood"] = "minecraft:dark_oak_wood";
  MinecraftItemTypes2["DarkPrismarineStairs"] = "minecraft:dark_prismarine_stairs";
  MinecraftItemTypes2["DaylightDetector"] = "minecraft:daylight_detector";
  MinecraftItemTypes2["DeadBrainCoral"] = "minecraft:dead_brain_coral";
  MinecraftItemTypes2["DeadBrainCoralBlock"] = "minecraft:dead_brain_coral_block";
  MinecraftItemTypes2["DeadBrainCoralFan"] = "minecraft:dead_brain_coral_fan";
  MinecraftItemTypes2["DeadBubbleCoral"] = "minecraft:dead_bubble_coral";
  MinecraftItemTypes2["DeadBubbleCoralBlock"] = "minecraft:dead_bubble_coral_block";
  MinecraftItemTypes2["DeadBubbleCoralFan"] = "minecraft:dead_bubble_coral_fan";
  MinecraftItemTypes2["DeadFireCoral"] = "minecraft:dead_fire_coral";
  MinecraftItemTypes2["DeadFireCoralBlock"] = "minecraft:dead_fire_coral_block";
  MinecraftItemTypes2["DeadFireCoralFan"] = "minecraft:dead_fire_coral_fan";
  MinecraftItemTypes2["DeadHornCoral"] = "minecraft:dead_horn_coral";
  MinecraftItemTypes2["DeadHornCoralBlock"] = "minecraft:dead_horn_coral_block";
  MinecraftItemTypes2["DeadHornCoralFan"] = "minecraft:dead_horn_coral_fan";
  MinecraftItemTypes2["DeadTubeCoral"] = "minecraft:dead_tube_coral";
  MinecraftItemTypes2["DeadTubeCoralBlock"] = "minecraft:dead_tube_coral_block";
  MinecraftItemTypes2["DeadTubeCoralFan"] = "minecraft:dead_tube_coral_fan";
  MinecraftItemTypes2["Deadbush"] = "minecraft:deadbush";
  MinecraftItemTypes2["DecoratedPot"] = "minecraft:decorated_pot";
  MinecraftItemTypes2["Deepslate"] = "minecraft:deepslate";
  MinecraftItemTypes2["DeepslateBrickSlab"] = "minecraft:deepslate_brick_slab";
  MinecraftItemTypes2["DeepslateBrickStairs"] = "minecraft:deepslate_brick_stairs";
  MinecraftItemTypes2["DeepslateBrickWall"] = "minecraft:deepslate_brick_wall";
  MinecraftItemTypes2["DeepslateBricks"] = "minecraft:deepslate_bricks";
  MinecraftItemTypes2["DeepslateCoalOre"] = "minecraft:deepslate_coal_ore";
  MinecraftItemTypes2["DeepslateCopperOre"] = "minecraft:deepslate_copper_ore";
  MinecraftItemTypes2["DeepslateDiamondOre"] = "minecraft:deepslate_diamond_ore";
  MinecraftItemTypes2["DeepslateEmeraldOre"] = "minecraft:deepslate_emerald_ore";
  MinecraftItemTypes2["DeepslateGoldOre"] = "minecraft:deepslate_gold_ore";
  MinecraftItemTypes2["DeepslateIronOre"] = "minecraft:deepslate_iron_ore";
  MinecraftItemTypes2["DeepslateLapisOre"] = "minecraft:deepslate_lapis_ore";
  MinecraftItemTypes2["DeepslateRedstoneOre"] = "minecraft:deepslate_redstone_ore";
  MinecraftItemTypes2["DeepslateTileSlab"] = "minecraft:deepslate_tile_slab";
  MinecraftItemTypes2["DeepslateTileStairs"] = "minecraft:deepslate_tile_stairs";
  MinecraftItemTypes2["DeepslateTileWall"] = "minecraft:deepslate_tile_wall";
  MinecraftItemTypes2["DeepslateTiles"] = "minecraft:deepslate_tiles";
  MinecraftItemTypes2["Deny"] = "minecraft:deny";
  MinecraftItemTypes2["DetectorRail"] = "minecraft:detector_rail";
  MinecraftItemTypes2["Diamond"] = "minecraft:diamond";
  MinecraftItemTypes2["DiamondAxe"] = "minecraft:diamond_axe";
  MinecraftItemTypes2["DiamondBlock"] = "minecraft:diamond_block";
  MinecraftItemTypes2["DiamondBoots"] = "minecraft:diamond_boots";
  MinecraftItemTypes2["DiamondChestplate"] = "minecraft:diamond_chestplate";
  MinecraftItemTypes2["DiamondHelmet"] = "minecraft:diamond_helmet";
  MinecraftItemTypes2["DiamondHoe"] = "minecraft:diamond_hoe";
  MinecraftItemTypes2["DiamondHorseArmor"] = "minecraft:diamond_horse_armor";
  MinecraftItemTypes2["DiamondLeggings"] = "minecraft:diamond_leggings";
  MinecraftItemTypes2["DiamondOre"] = "minecraft:diamond_ore";
  MinecraftItemTypes2["DiamondPickaxe"] = "minecraft:diamond_pickaxe";
  MinecraftItemTypes2["DiamondShovel"] = "minecraft:diamond_shovel";
  MinecraftItemTypes2["DiamondSword"] = "minecraft:diamond_sword";
  MinecraftItemTypes2["Diorite"] = "minecraft:diorite";
  MinecraftItemTypes2["DioriteStairs"] = "minecraft:diorite_stairs";
  MinecraftItemTypes2["Dirt"] = "minecraft:dirt";
  MinecraftItemTypes2["DirtWithRoots"] = "minecraft:dirt_with_roots";
  MinecraftItemTypes2["DiscFragment5"] = "minecraft:disc_fragment_5";
  MinecraftItemTypes2["Dispenser"] = "minecraft:dispenser";
  MinecraftItemTypes2["DolphinSpawnEgg"] = "minecraft:dolphin_spawn_egg";
  MinecraftItemTypes2["DonkeySpawnEgg"] = "minecraft:donkey_spawn_egg";
  MinecraftItemTypes2["DoublePlant"] = "minecraft:double_plant";
  MinecraftItemTypes2["DragonBreath"] = "minecraft:dragon_breath";
  MinecraftItemTypes2["DragonEgg"] = "minecraft:dragon_egg";
  MinecraftItemTypes2["DriedKelp"] = "minecraft:dried_kelp";
  MinecraftItemTypes2["DriedKelpBlock"] = "minecraft:dried_kelp_block";
  MinecraftItemTypes2["DripstoneBlock"] = "minecraft:dripstone_block";
  MinecraftItemTypes2["Dropper"] = "minecraft:dropper";
  MinecraftItemTypes2["DrownedSpawnEgg"] = "minecraft:drowned_spawn_egg";
  MinecraftItemTypes2["DuneArmorTrimSmithingTemplate"] = "minecraft:dune_armor_trim_smithing_template";
  MinecraftItemTypes2["Dye"] = "minecraft:dye";
  MinecraftItemTypes2["EchoShard"] = "minecraft:echo_shard";
  MinecraftItemTypes2["Egg"] = "minecraft:egg";
  MinecraftItemTypes2["ElderGuardianSpawnEgg"] = "minecraft:elder_guardian_spawn_egg";
  MinecraftItemTypes2["Elytra"] = "minecraft:elytra";
  MinecraftItemTypes2["Emerald"] = "minecraft:emerald";
  MinecraftItemTypes2["EmeraldBlock"] = "minecraft:emerald_block";
  MinecraftItemTypes2["EmeraldOre"] = "minecraft:emerald_ore";
  MinecraftItemTypes2["EmptyMap"] = "minecraft:empty_map";
  MinecraftItemTypes2["EnchantedBook"] = "minecraft:enchanted_book";
  MinecraftItemTypes2["EnchantedGoldenApple"] = "minecraft:enchanted_golden_apple";
  MinecraftItemTypes2["EnchantingTable"] = "minecraft:enchanting_table";
  MinecraftItemTypes2["EndBrickStairs"] = "minecraft:end_brick_stairs";
  MinecraftItemTypes2["EndBricks"] = "minecraft:end_bricks";
  MinecraftItemTypes2["EndCrystal"] = "minecraft:end_crystal";
  MinecraftItemTypes2["EndPortalFrame"] = "minecraft:end_portal_frame";
  MinecraftItemTypes2["EndRod"] = "minecraft:end_rod";
  MinecraftItemTypes2["EndStone"] = "minecraft:end_stone";
  MinecraftItemTypes2["EnderChest"] = "minecraft:ender_chest";
  MinecraftItemTypes2["EnderDragonSpawnEgg"] = "minecraft:ender_dragon_spawn_egg";
  MinecraftItemTypes2["EnderEye"] = "minecraft:ender_eye";
  MinecraftItemTypes2["EnderPearl"] = "minecraft:ender_pearl";
  MinecraftItemTypes2["EndermanSpawnEgg"] = "minecraft:enderman_spawn_egg";
  MinecraftItemTypes2["EndermiteSpawnEgg"] = "minecraft:endermite_spawn_egg";
  MinecraftItemTypes2["EvokerSpawnEgg"] = "minecraft:evoker_spawn_egg";
  MinecraftItemTypes2["ExperienceBottle"] = "minecraft:experience_bottle";
  MinecraftItemTypes2["ExplorerPotterySherd"] = "minecraft:explorer_pottery_sherd";
  MinecraftItemTypes2["ExposedChiseledCopper"] = "minecraft:exposed_chiseled_copper";
  MinecraftItemTypes2["ExposedCopper"] = "minecraft:exposed_copper";
  MinecraftItemTypes2["ExposedCopperBulb"] = "minecraft:exposed_copper_bulb";
  MinecraftItemTypes2["ExposedCopperDoor"] = "minecraft:exposed_copper_door";
  MinecraftItemTypes2["ExposedCopperGrate"] = "minecraft:exposed_copper_grate";
  MinecraftItemTypes2["ExposedCopperTrapdoor"] = "minecraft:exposed_copper_trapdoor";
  MinecraftItemTypes2["ExposedCutCopper"] = "minecraft:exposed_cut_copper";
  MinecraftItemTypes2["ExposedCutCopperSlab"] = "minecraft:exposed_cut_copper_slab";
  MinecraftItemTypes2["ExposedCutCopperStairs"] = "minecraft:exposed_cut_copper_stairs";
  MinecraftItemTypes2["EyeArmorTrimSmithingTemplate"] = "minecraft:eye_armor_trim_smithing_template";
  MinecraftItemTypes2["Farmland"] = "minecraft:farmland";
  MinecraftItemTypes2["Feather"] = "minecraft:feather";
  MinecraftItemTypes2["Fence"] = "minecraft:fence";
  MinecraftItemTypes2["FenceGate"] = "minecraft:fence_gate";
  MinecraftItemTypes2["FermentedSpiderEye"] = "minecraft:fermented_spider_eye";
  MinecraftItemTypes2["Fern"] = "minecraft:fern";
  MinecraftItemTypes2["FieldMasonedBannerPattern"] = "minecraft:field_masoned_banner_pattern";
  MinecraftItemTypes2["FilledMap"] = "minecraft:filled_map";
  MinecraftItemTypes2["FireCharge"] = "minecraft:fire_charge";
  MinecraftItemTypes2["FireCoral"] = "minecraft:fire_coral";
  MinecraftItemTypes2["FireCoralBlock"] = "minecraft:fire_coral_block";
  MinecraftItemTypes2["FireCoralFan"] = "minecraft:fire_coral_fan";
  MinecraftItemTypes2["FireworkRocket"] = "minecraft:firework_rocket";
  MinecraftItemTypes2["FireworkStar"] = "minecraft:firework_star";
  MinecraftItemTypes2["FishingRod"] = "minecraft:fishing_rod";
  MinecraftItemTypes2["FletchingTable"] = "minecraft:fletching_table";
  MinecraftItemTypes2["Flint"] = "minecraft:flint";
  MinecraftItemTypes2["FlintAndSteel"] = "minecraft:flint_and_steel";
  MinecraftItemTypes2["FlowArmorTrimSmithingTemplate"] = "minecraft:flow_armor_trim_smithing_template";
  MinecraftItemTypes2["FlowBannerPattern"] = "minecraft:flow_banner_pattern";
  MinecraftItemTypes2["FlowPotterySherd"] = "minecraft:flow_pottery_sherd";
  MinecraftItemTypes2["FlowerBannerPattern"] = "minecraft:flower_banner_pattern";
  MinecraftItemTypes2["FlowerPot"] = "minecraft:flower_pot";
  MinecraftItemTypes2["FloweringAzalea"] = "minecraft:flowering_azalea";
  MinecraftItemTypes2["FoxSpawnEgg"] = "minecraft:fox_spawn_egg";
  MinecraftItemTypes2["Frame"] = "minecraft:frame";
  MinecraftItemTypes2["FriendPotterySherd"] = "minecraft:friend_pottery_sherd";
  MinecraftItemTypes2["FrogSpawn"] = "minecraft:frog_spawn";
  MinecraftItemTypes2["FrogSpawnEgg"] = "minecraft:frog_spawn_egg";
  MinecraftItemTypes2["FrostedIce"] = "minecraft:frosted_ice";
  MinecraftItemTypes2["Furnace"] = "minecraft:furnace";
  MinecraftItemTypes2["GhastSpawnEgg"] = "minecraft:ghast_spawn_egg";
  MinecraftItemTypes2["GhastTear"] = "minecraft:ghast_tear";
  MinecraftItemTypes2["GildedBlackstone"] = "minecraft:gilded_blackstone";
  MinecraftItemTypes2["Glass"] = "minecraft:glass";
  MinecraftItemTypes2["GlassBottle"] = "minecraft:glass_bottle";
  MinecraftItemTypes2["GlassPane"] = "minecraft:glass_pane";
  MinecraftItemTypes2["GlisteringMelonSlice"] = "minecraft:glistering_melon_slice";
  MinecraftItemTypes2["GlobeBannerPattern"] = "minecraft:globe_banner_pattern";
  MinecraftItemTypes2["GlowBerries"] = "minecraft:glow_berries";
  MinecraftItemTypes2["GlowFrame"] = "minecraft:glow_frame";
  MinecraftItemTypes2["GlowInkSac"] = "minecraft:glow_ink_sac";
  MinecraftItemTypes2["GlowLichen"] = "minecraft:glow_lichen";
  MinecraftItemTypes2["GlowSquidSpawnEgg"] = "minecraft:glow_squid_spawn_egg";
  MinecraftItemTypes2["Glowstone"] = "minecraft:glowstone";
  MinecraftItemTypes2["GlowstoneDust"] = "minecraft:glowstone_dust";
  MinecraftItemTypes2["GoatHorn"] = "minecraft:goat_horn";
  MinecraftItemTypes2["GoatSpawnEgg"] = "minecraft:goat_spawn_egg";
  MinecraftItemTypes2["GoldBlock"] = "minecraft:gold_block";
  MinecraftItemTypes2["GoldIngot"] = "minecraft:gold_ingot";
  MinecraftItemTypes2["GoldNugget"] = "minecraft:gold_nugget";
  MinecraftItemTypes2["GoldOre"] = "minecraft:gold_ore";
  MinecraftItemTypes2["GoldenApple"] = "minecraft:golden_apple";
  MinecraftItemTypes2["GoldenAxe"] = "minecraft:golden_axe";
  MinecraftItemTypes2["GoldenBoots"] = "minecraft:golden_boots";
  MinecraftItemTypes2["GoldenCarrot"] = "minecraft:golden_carrot";
  MinecraftItemTypes2["GoldenChestplate"] = "minecraft:golden_chestplate";
  MinecraftItemTypes2["GoldenHelmet"] = "minecraft:golden_helmet";
  MinecraftItemTypes2["GoldenHoe"] = "minecraft:golden_hoe";
  MinecraftItemTypes2["GoldenHorseArmor"] = "minecraft:golden_horse_armor";
  MinecraftItemTypes2["GoldenLeggings"] = "minecraft:golden_leggings";
  MinecraftItemTypes2["GoldenPickaxe"] = "minecraft:golden_pickaxe";
  MinecraftItemTypes2["GoldenRail"] = "minecraft:golden_rail";
  MinecraftItemTypes2["GoldenShovel"] = "minecraft:golden_shovel";
  MinecraftItemTypes2["GoldenSword"] = "minecraft:golden_sword";
  MinecraftItemTypes2["Granite"] = "minecraft:granite";
  MinecraftItemTypes2["GraniteStairs"] = "minecraft:granite_stairs";
  MinecraftItemTypes2["GrassBlock"] = "minecraft:grass_block";
  MinecraftItemTypes2["GrassPath"] = "minecraft:grass_path";
  MinecraftItemTypes2["Gravel"] = "minecraft:gravel";
  MinecraftItemTypes2["GrayCandle"] = "minecraft:gray_candle";
  MinecraftItemTypes2["GrayCarpet"] = "minecraft:gray_carpet";
  MinecraftItemTypes2["GrayConcrete"] = "minecraft:gray_concrete";
  MinecraftItemTypes2["GrayConcretePowder"] = "minecraft:gray_concrete_powder";
  MinecraftItemTypes2["GrayDye"] = "minecraft:gray_dye";
  MinecraftItemTypes2["GrayGlazedTerracotta"] = "minecraft:gray_glazed_terracotta";
  MinecraftItemTypes2["GrayShulkerBox"] = "minecraft:gray_shulker_box";
  MinecraftItemTypes2["GrayStainedGlass"] = "minecraft:gray_stained_glass";
  MinecraftItemTypes2["GrayStainedGlassPane"] = "minecraft:gray_stained_glass_pane";
  MinecraftItemTypes2["GrayTerracotta"] = "minecraft:gray_terracotta";
  MinecraftItemTypes2["GrayWool"] = "minecraft:gray_wool";
  MinecraftItemTypes2["GreenCandle"] = "minecraft:green_candle";
  MinecraftItemTypes2["GreenCarpet"] = "minecraft:green_carpet";
  MinecraftItemTypes2["GreenConcrete"] = "minecraft:green_concrete";
  MinecraftItemTypes2["GreenConcretePowder"] = "minecraft:green_concrete_powder";
  MinecraftItemTypes2["GreenDye"] = "minecraft:green_dye";
  MinecraftItemTypes2["GreenGlazedTerracotta"] = "minecraft:green_glazed_terracotta";
  MinecraftItemTypes2["GreenShulkerBox"] = "minecraft:green_shulker_box";
  MinecraftItemTypes2["GreenStainedGlass"] = "minecraft:green_stained_glass";
  MinecraftItemTypes2["GreenStainedGlassPane"] = "minecraft:green_stained_glass_pane";
  MinecraftItemTypes2["GreenTerracotta"] = "minecraft:green_terracotta";
  MinecraftItemTypes2["GreenWool"] = "minecraft:green_wool";
  MinecraftItemTypes2["Grindstone"] = "minecraft:grindstone";
  MinecraftItemTypes2["GuardianSpawnEgg"] = "minecraft:guardian_spawn_egg";
  MinecraftItemTypes2["Gunpowder"] = "minecraft:gunpowder";
  MinecraftItemTypes2["GusterBannerPattern"] = "minecraft:guster_banner_pattern";
  MinecraftItemTypes2["GusterPotterySherd"] = "minecraft:guster_pottery_sherd";
  MinecraftItemTypes2["HangingRoots"] = "minecraft:hanging_roots";
  MinecraftItemTypes2["HardStainedGlass"] = "minecraft:hard_stained_glass";
  MinecraftItemTypes2["HardStainedGlassPane"] = "minecraft:hard_stained_glass_pane";
  MinecraftItemTypes2["HardenedClay"] = "minecraft:hardened_clay";
  MinecraftItemTypes2["HayBlock"] = "minecraft:hay_block";
  MinecraftItemTypes2["HeartOfTheSea"] = "minecraft:heart_of_the_sea";
  MinecraftItemTypes2["HeartPotterySherd"] = "minecraft:heart_pottery_sherd";
  MinecraftItemTypes2["HeartbreakPotterySherd"] = "minecraft:heartbreak_pottery_sherd";
  MinecraftItemTypes2["HeavyCore"] = "minecraft:heavy_core";
  MinecraftItemTypes2["HeavyWeightedPressurePlate"] = "minecraft:heavy_weighted_pressure_plate";
  MinecraftItemTypes2["HoglinSpawnEgg"] = "minecraft:hoglin_spawn_egg";
  MinecraftItemTypes2["HoneyBlock"] = "minecraft:honey_block";
  MinecraftItemTypes2["HoneyBottle"] = "minecraft:honey_bottle";
  MinecraftItemTypes2["Honeycomb"] = "minecraft:honeycomb";
  MinecraftItemTypes2["HoneycombBlock"] = "minecraft:honeycomb_block";
  MinecraftItemTypes2["Hopper"] = "minecraft:hopper";
  MinecraftItemTypes2["HopperMinecart"] = "minecraft:hopper_minecart";
  MinecraftItemTypes2["HornCoral"] = "minecraft:horn_coral";
  MinecraftItemTypes2["HornCoralBlock"] = "minecraft:horn_coral_block";
  MinecraftItemTypes2["HornCoralFan"] = "minecraft:horn_coral_fan";
  MinecraftItemTypes2["HorseSpawnEgg"] = "minecraft:horse_spawn_egg";
  MinecraftItemTypes2["HostArmorTrimSmithingTemplate"] = "minecraft:host_armor_trim_smithing_template";
  MinecraftItemTypes2["HowlPotterySherd"] = "minecraft:howl_pottery_sherd";
  MinecraftItemTypes2["HuskSpawnEgg"] = "minecraft:husk_spawn_egg";
  MinecraftItemTypes2["Ice"] = "minecraft:ice";
  MinecraftItemTypes2["InfestedDeepslate"] = "minecraft:infested_deepslate";
  MinecraftItemTypes2["InkSac"] = "minecraft:ink_sac";
  MinecraftItemTypes2["IronAxe"] = "minecraft:iron_axe";
  MinecraftItemTypes2["IronBars"] = "minecraft:iron_bars";
  MinecraftItemTypes2["IronBlock"] = "minecraft:iron_block";
  MinecraftItemTypes2["IronBoots"] = "minecraft:iron_boots";
  MinecraftItemTypes2["IronChestplate"] = "minecraft:iron_chestplate";
  MinecraftItemTypes2["IronDoor"] = "minecraft:iron_door";
  MinecraftItemTypes2["IronGolemSpawnEgg"] = "minecraft:iron_golem_spawn_egg";
  MinecraftItemTypes2["IronHelmet"] = "minecraft:iron_helmet";
  MinecraftItemTypes2["IronHoe"] = "minecraft:iron_hoe";
  MinecraftItemTypes2["IronHorseArmor"] = "minecraft:iron_horse_armor";
  MinecraftItemTypes2["IronIngot"] = "minecraft:iron_ingot";
  MinecraftItemTypes2["IronLeggings"] = "minecraft:iron_leggings";
  MinecraftItemTypes2["IronNugget"] = "minecraft:iron_nugget";
  MinecraftItemTypes2["IronOre"] = "minecraft:iron_ore";
  MinecraftItemTypes2["IronPickaxe"] = "minecraft:iron_pickaxe";
  MinecraftItemTypes2["IronShovel"] = "minecraft:iron_shovel";
  MinecraftItemTypes2["IronSword"] = "minecraft:iron_sword";
  MinecraftItemTypes2["IronTrapdoor"] = "minecraft:iron_trapdoor";
  MinecraftItemTypes2["Jigsaw"] = "minecraft:jigsaw";
  MinecraftItemTypes2["Jukebox"] = "minecraft:jukebox";
  MinecraftItemTypes2["JungleBoat"] = "minecraft:jungle_boat";
  MinecraftItemTypes2["JungleButton"] = "minecraft:jungle_button";
  MinecraftItemTypes2["JungleChestBoat"] = "minecraft:jungle_chest_boat";
  MinecraftItemTypes2["JungleDoor"] = "minecraft:jungle_door";
  MinecraftItemTypes2["JungleFence"] = "minecraft:jungle_fence";
  MinecraftItemTypes2["JungleFenceGate"] = "minecraft:jungle_fence_gate";
  MinecraftItemTypes2["JungleHangingSign"] = "minecraft:jungle_hanging_sign";
  MinecraftItemTypes2["JungleLeaves"] = "minecraft:jungle_leaves";
  MinecraftItemTypes2["JungleLog"] = "minecraft:jungle_log";
  MinecraftItemTypes2["JunglePlanks"] = "minecraft:jungle_planks";
  MinecraftItemTypes2["JunglePressurePlate"] = "minecraft:jungle_pressure_plate";
  MinecraftItemTypes2["JungleSapling"] = "minecraft:jungle_sapling";
  MinecraftItemTypes2["JungleSign"] = "minecraft:jungle_sign";
  MinecraftItemTypes2["JungleSlab"] = "minecraft:jungle_slab";
  MinecraftItemTypes2["JungleStairs"] = "minecraft:jungle_stairs";
  MinecraftItemTypes2["JungleTrapdoor"] = "minecraft:jungle_trapdoor";
  MinecraftItemTypes2["JungleWood"] = "minecraft:jungle_wood";
  MinecraftItemTypes2["Kelp"] = "minecraft:kelp";
  MinecraftItemTypes2["Ladder"] = "minecraft:ladder";
  MinecraftItemTypes2["Lantern"] = "minecraft:lantern";
  MinecraftItemTypes2["LapisBlock"] = "minecraft:lapis_block";
  MinecraftItemTypes2["LapisLazuli"] = "minecraft:lapis_lazuli";
  MinecraftItemTypes2["LapisOre"] = "minecraft:lapis_ore";
  MinecraftItemTypes2["LargeAmethystBud"] = "minecraft:large_amethyst_bud";
  MinecraftItemTypes2["LargeFern"] = "minecraft:large_fern";
  MinecraftItemTypes2["LavaBucket"] = "minecraft:lava_bucket";
  MinecraftItemTypes2["Lead"] = "minecraft:lead";
  MinecraftItemTypes2["Leather"] = "minecraft:leather";
  MinecraftItemTypes2["LeatherBoots"] = "minecraft:leather_boots";
  MinecraftItemTypes2["LeatherChestplate"] = "minecraft:leather_chestplate";
  MinecraftItemTypes2["LeatherHelmet"] = "minecraft:leather_helmet";
  MinecraftItemTypes2["LeatherHorseArmor"] = "minecraft:leather_horse_armor";
  MinecraftItemTypes2["LeatherLeggings"] = "minecraft:leather_leggings";
  MinecraftItemTypes2["Leaves"] = "minecraft:leaves";
  MinecraftItemTypes2["Leaves2"] = "minecraft:leaves2";
  MinecraftItemTypes2["Lectern"] = "minecraft:lectern";
  MinecraftItemTypes2["Lever"] = "minecraft:lever";
  MinecraftItemTypes2["LightBlock"] = "minecraft:light_block";
  MinecraftItemTypes2["LightBlueCandle"] = "minecraft:light_blue_candle";
  MinecraftItemTypes2["LightBlueCarpet"] = "minecraft:light_blue_carpet";
  MinecraftItemTypes2["LightBlueConcrete"] = "minecraft:light_blue_concrete";
  MinecraftItemTypes2["LightBlueConcretePowder"] = "minecraft:light_blue_concrete_powder";
  MinecraftItemTypes2["LightBlueDye"] = "minecraft:light_blue_dye";
  MinecraftItemTypes2["LightBlueGlazedTerracotta"] = "minecraft:light_blue_glazed_terracotta";
  MinecraftItemTypes2["LightBlueShulkerBox"] = "minecraft:light_blue_shulker_box";
  MinecraftItemTypes2["LightBlueStainedGlass"] = "minecraft:light_blue_stained_glass";
  MinecraftItemTypes2["LightBlueStainedGlassPane"] = "minecraft:light_blue_stained_glass_pane";
  MinecraftItemTypes2["LightBlueTerracotta"] = "minecraft:light_blue_terracotta";
  MinecraftItemTypes2["LightBlueWool"] = "minecraft:light_blue_wool";
  MinecraftItemTypes2["LightGrayCandle"] = "minecraft:light_gray_candle";
  MinecraftItemTypes2["LightGrayCarpet"] = "minecraft:light_gray_carpet";
  MinecraftItemTypes2["LightGrayConcrete"] = "minecraft:light_gray_concrete";
  MinecraftItemTypes2["LightGrayConcretePowder"] = "minecraft:light_gray_concrete_powder";
  MinecraftItemTypes2["LightGrayDye"] = "minecraft:light_gray_dye";
  MinecraftItemTypes2["LightGrayShulkerBox"] = "minecraft:light_gray_shulker_box";
  MinecraftItemTypes2["LightGrayStainedGlass"] = "minecraft:light_gray_stained_glass";
  MinecraftItemTypes2["LightGrayStainedGlassPane"] = "minecraft:light_gray_stained_glass_pane";
  MinecraftItemTypes2["LightGrayTerracotta"] = "minecraft:light_gray_terracotta";
  MinecraftItemTypes2["LightGrayWool"] = "minecraft:light_gray_wool";
  MinecraftItemTypes2["LightWeightedPressurePlate"] = "minecraft:light_weighted_pressure_plate";
  MinecraftItemTypes2["LightningRod"] = "minecraft:lightning_rod";
  MinecraftItemTypes2["Lilac"] = "minecraft:lilac";
  MinecraftItemTypes2["LilyOfTheValley"] = "minecraft:lily_of_the_valley";
  MinecraftItemTypes2["LimeCandle"] = "minecraft:lime_candle";
  MinecraftItemTypes2["LimeCarpet"] = "minecraft:lime_carpet";
  MinecraftItemTypes2["LimeConcrete"] = "minecraft:lime_concrete";
  MinecraftItemTypes2["LimeConcretePowder"] = "minecraft:lime_concrete_powder";
  MinecraftItemTypes2["LimeDye"] = "minecraft:lime_dye";
  MinecraftItemTypes2["LimeGlazedTerracotta"] = "minecraft:lime_glazed_terracotta";
  MinecraftItemTypes2["LimeShulkerBox"] = "minecraft:lime_shulker_box";
  MinecraftItemTypes2["LimeStainedGlass"] = "minecraft:lime_stained_glass";
  MinecraftItemTypes2["LimeStainedGlassPane"] = "minecraft:lime_stained_glass_pane";
  MinecraftItemTypes2["LimeTerracotta"] = "minecraft:lime_terracotta";
  MinecraftItemTypes2["LimeWool"] = "minecraft:lime_wool";
  MinecraftItemTypes2["LingeringPotion"] = "minecraft:lingering_potion";
  MinecraftItemTypes2["LitPumpkin"] = "minecraft:lit_pumpkin";
  MinecraftItemTypes2["LlamaSpawnEgg"] = "minecraft:llama_spawn_egg";
  MinecraftItemTypes2["Lodestone"] = "minecraft:lodestone";
  MinecraftItemTypes2["LodestoneCompass"] = "minecraft:lodestone_compass";
  MinecraftItemTypes2["Log"] = "minecraft:log";
  MinecraftItemTypes2["Log2"] = "minecraft:log2";
  MinecraftItemTypes2["Loom"] = "minecraft:loom";
  MinecraftItemTypes2["Mace"] = "minecraft:mace";
  MinecraftItemTypes2["MagentaCandle"] = "minecraft:magenta_candle";
  MinecraftItemTypes2["MagentaCarpet"] = "minecraft:magenta_carpet";
  MinecraftItemTypes2["MagentaConcrete"] = "minecraft:magenta_concrete";
  MinecraftItemTypes2["MagentaConcretePowder"] = "minecraft:magenta_concrete_powder";
  MinecraftItemTypes2["MagentaDye"] = "minecraft:magenta_dye";
  MinecraftItemTypes2["MagentaGlazedTerracotta"] = "minecraft:magenta_glazed_terracotta";
  MinecraftItemTypes2["MagentaShulkerBox"] = "minecraft:magenta_shulker_box";
  MinecraftItemTypes2["MagentaStainedGlass"] = "minecraft:magenta_stained_glass";
  MinecraftItemTypes2["MagentaStainedGlassPane"] = "minecraft:magenta_stained_glass_pane";
  MinecraftItemTypes2["MagentaTerracotta"] = "minecraft:magenta_terracotta";
  MinecraftItemTypes2["MagentaWool"] = "minecraft:magenta_wool";
  MinecraftItemTypes2["Magma"] = "minecraft:magma";
  MinecraftItemTypes2["MagmaCream"] = "minecraft:magma_cream";
  MinecraftItemTypes2["MagmaCubeSpawnEgg"] = "minecraft:magma_cube_spawn_egg";
  MinecraftItemTypes2["MangroveBoat"] = "minecraft:mangrove_boat";
  MinecraftItemTypes2["MangroveButton"] = "minecraft:mangrove_button";
  MinecraftItemTypes2["MangroveChestBoat"] = "minecraft:mangrove_chest_boat";
  MinecraftItemTypes2["MangroveDoor"] = "minecraft:mangrove_door";
  MinecraftItemTypes2["MangroveFence"] = "minecraft:mangrove_fence";
  MinecraftItemTypes2["MangroveFenceGate"] = "minecraft:mangrove_fence_gate";
  MinecraftItemTypes2["MangroveHangingSign"] = "minecraft:mangrove_hanging_sign";
  MinecraftItemTypes2["MangroveLeaves"] = "minecraft:mangrove_leaves";
  MinecraftItemTypes2["MangroveLog"] = "minecraft:mangrove_log";
  MinecraftItemTypes2["MangrovePlanks"] = "minecraft:mangrove_planks";
  MinecraftItemTypes2["MangrovePressurePlate"] = "minecraft:mangrove_pressure_plate";
  MinecraftItemTypes2["MangrovePropagule"] = "minecraft:mangrove_propagule";
  MinecraftItemTypes2["MangroveRoots"] = "minecraft:mangrove_roots";
  MinecraftItemTypes2["MangroveSign"] = "minecraft:mangrove_sign";
  MinecraftItemTypes2["MangroveSlab"] = "minecraft:mangrove_slab";
  MinecraftItemTypes2["MangroveStairs"] = "minecraft:mangrove_stairs";
  MinecraftItemTypes2["MangroveTrapdoor"] = "minecraft:mangrove_trapdoor";
  MinecraftItemTypes2["MangroveWood"] = "minecraft:mangrove_wood";
  MinecraftItemTypes2["MediumAmethystBud"] = "minecraft:medium_amethyst_bud";
  MinecraftItemTypes2["MelonBlock"] = "minecraft:melon_block";
  MinecraftItemTypes2["MelonSeeds"] = "minecraft:melon_seeds";
  MinecraftItemTypes2["MelonSlice"] = "minecraft:melon_slice";
  MinecraftItemTypes2["MilkBucket"] = "minecraft:milk_bucket";
  MinecraftItemTypes2["Minecart"] = "minecraft:minecart";
  MinecraftItemTypes2["MinerPotterySherd"] = "minecraft:miner_pottery_sherd";
  MinecraftItemTypes2["MobSpawner"] = "minecraft:mob_spawner";
  MinecraftItemTypes2["MojangBannerPattern"] = "minecraft:mojang_banner_pattern";
  MinecraftItemTypes2["MonsterEgg"] = "minecraft:monster_egg";
  MinecraftItemTypes2["MooshroomSpawnEgg"] = "minecraft:mooshroom_spawn_egg";
  MinecraftItemTypes2["MossBlock"] = "minecraft:moss_block";
  MinecraftItemTypes2["MossCarpet"] = "minecraft:moss_carpet";
  MinecraftItemTypes2["MossyCobblestone"] = "minecraft:mossy_cobblestone";
  MinecraftItemTypes2["MossyCobblestoneStairs"] = "minecraft:mossy_cobblestone_stairs";
  MinecraftItemTypes2["MossyStoneBrickStairs"] = "minecraft:mossy_stone_brick_stairs";
  MinecraftItemTypes2["MournerPotterySherd"] = "minecraft:mourner_pottery_sherd";
  MinecraftItemTypes2["Mud"] = "minecraft:mud";
  MinecraftItemTypes2["MudBrickSlab"] = "minecraft:mud_brick_slab";
  MinecraftItemTypes2["MudBrickStairs"] = "minecraft:mud_brick_stairs";
  MinecraftItemTypes2["MudBrickWall"] = "minecraft:mud_brick_wall";
  MinecraftItemTypes2["MudBricks"] = "minecraft:mud_bricks";
  MinecraftItemTypes2["MuddyMangroveRoots"] = "minecraft:muddy_mangrove_roots";
  MinecraftItemTypes2["MuleSpawnEgg"] = "minecraft:mule_spawn_egg";
  MinecraftItemTypes2["MushroomStew"] = "minecraft:mushroom_stew";
  MinecraftItemTypes2["MusicDisc11"] = "minecraft:music_disc_11";
  MinecraftItemTypes2["MusicDisc13"] = "minecraft:music_disc_13";
  MinecraftItemTypes2["MusicDisc5"] = "minecraft:music_disc_5";
  MinecraftItemTypes2["MusicDiscBlocks"] = "minecraft:music_disc_blocks";
  MinecraftItemTypes2["MusicDiscCat"] = "minecraft:music_disc_cat";
  MinecraftItemTypes2["MusicDiscChirp"] = "minecraft:music_disc_chirp";
  MinecraftItemTypes2["MusicDiscCreator"] = "minecraft:music_disc_creator";
  MinecraftItemTypes2["MusicDiscCreatorMusicBox"] = "minecraft:music_disc_creator_music_box";
  MinecraftItemTypes2["MusicDiscFar"] = "minecraft:music_disc_far";
  MinecraftItemTypes2["MusicDiscMall"] = "minecraft:music_disc_mall";
  MinecraftItemTypes2["MusicDiscMellohi"] = "minecraft:music_disc_mellohi";
  MinecraftItemTypes2["MusicDiscOtherside"] = "minecraft:music_disc_otherside";
  MinecraftItemTypes2["MusicDiscPigstep"] = "minecraft:music_disc_pigstep";
  MinecraftItemTypes2["MusicDiscPrecipice"] = "minecraft:music_disc_precipice";
  MinecraftItemTypes2["MusicDiscRelic"] = "minecraft:music_disc_relic";
  MinecraftItemTypes2["MusicDiscStal"] = "minecraft:music_disc_stal";
  MinecraftItemTypes2["MusicDiscStrad"] = "minecraft:music_disc_strad";
  MinecraftItemTypes2["MusicDiscWait"] = "minecraft:music_disc_wait";
  MinecraftItemTypes2["MusicDiscWard"] = "minecraft:music_disc_ward";
  MinecraftItemTypes2["Mutton"] = "minecraft:mutton";
  MinecraftItemTypes2["Mycelium"] = "minecraft:mycelium";
  MinecraftItemTypes2["NameTag"] = "minecraft:name_tag";
  MinecraftItemTypes2["NautilusShell"] = "minecraft:nautilus_shell";
  MinecraftItemTypes2["NetherBrick"] = "minecraft:nether_brick";
  MinecraftItemTypes2["NetherBrickFence"] = "minecraft:nether_brick_fence";
  MinecraftItemTypes2["NetherBrickSlab"] = "minecraft:nether_brick_slab";
  MinecraftItemTypes2["NetherBrickStairs"] = "minecraft:nether_brick_stairs";
  MinecraftItemTypes2["NetherGoldOre"] = "minecraft:nether_gold_ore";
  MinecraftItemTypes2["NetherSprouts"] = "minecraft:nether_sprouts";
  MinecraftItemTypes2["NetherStar"] = "minecraft:nether_star";
  MinecraftItemTypes2["NetherWart"] = "minecraft:nether_wart";
  MinecraftItemTypes2["NetherWartBlock"] = "minecraft:nether_wart_block";
  MinecraftItemTypes2["Netherbrick"] = "minecraft:netherbrick";
  MinecraftItemTypes2["NetheriteAxe"] = "minecraft:netherite_axe";
  MinecraftItemTypes2["NetheriteBlock"] = "minecraft:netherite_block";
  MinecraftItemTypes2["NetheriteBoots"] = "minecraft:netherite_boots";
  MinecraftItemTypes2["NetheriteChestplate"] = "minecraft:netherite_chestplate";
  MinecraftItemTypes2["NetheriteHelmet"] = "minecraft:netherite_helmet";
  MinecraftItemTypes2["NetheriteHoe"] = "minecraft:netherite_hoe";
  MinecraftItemTypes2["NetheriteIngot"] = "minecraft:netherite_ingot";
  MinecraftItemTypes2["NetheriteLeggings"] = "minecraft:netherite_leggings";
  MinecraftItemTypes2["NetheritePickaxe"] = "minecraft:netherite_pickaxe";
  MinecraftItemTypes2["NetheriteScrap"] = "minecraft:netherite_scrap";
  MinecraftItemTypes2["NetheriteShovel"] = "minecraft:netherite_shovel";
  MinecraftItemTypes2["NetheriteSword"] = "minecraft:netherite_sword";
  MinecraftItemTypes2["NetheriteUpgradeSmithingTemplate"] = "minecraft:netherite_upgrade_smithing_template";
  MinecraftItemTypes2["Netherrack"] = "minecraft:netherrack";
  MinecraftItemTypes2["NormalStoneStairs"] = "minecraft:normal_stone_stairs";
  MinecraftItemTypes2["Noteblock"] = "minecraft:noteblock";
  MinecraftItemTypes2["OakBoat"] = "minecraft:oak_boat";
  MinecraftItemTypes2["OakChestBoat"] = "minecraft:oak_chest_boat";
  MinecraftItemTypes2["OakFence"] = "minecraft:oak_fence";
  MinecraftItemTypes2["OakHangingSign"] = "minecraft:oak_hanging_sign";
  MinecraftItemTypes2["OakLeaves"] = "minecraft:oak_leaves";
  MinecraftItemTypes2["OakLog"] = "minecraft:oak_log";
  MinecraftItemTypes2["OakPlanks"] = "minecraft:oak_planks";
  MinecraftItemTypes2["OakSapling"] = "minecraft:oak_sapling";
  MinecraftItemTypes2["OakSign"] = "minecraft:oak_sign";
  MinecraftItemTypes2["OakSlab"] = "minecraft:oak_slab";
  MinecraftItemTypes2["OakStairs"] = "minecraft:oak_stairs";
  MinecraftItemTypes2["OakWood"] = "minecraft:oak_wood";
  MinecraftItemTypes2["Observer"] = "minecraft:observer";
  MinecraftItemTypes2["Obsidian"] = "minecraft:obsidian";
  MinecraftItemTypes2["OcelotSpawnEgg"] = "minecraft:ocelot_spawn_egg";
  MinecraftItemTypes2["OchreFroglight"] = "minecraft:ochre_froglight";
  MinecraftItemTypes2["OminousBottle"] = "minecraft:ominous_bottle";
  MinecraftItemTypes2["OminousTrialKey"] = "minecraft:ominous_trial_key";
  MinecraftItemTypes2["OrangeCandle"] = "minecraft:orange_candle";
  MinecraftItemTypes2["OrangeCarpet"] = "minecraft:orange_carpet";
  MinecraftItemTypes2["OrangeConcrete"] = "minecraft:orange_concrete";
  MinecraftItemTypes2["OrangeConcretePowder"] = "minecraft:orange_concrete_powder";
  MinecraftItemTypes2["OrangeDye"] = "minecraft:orange_dye";
  MinecraftItemTypes2["OrangeGlazedTerracotta"] = "minecraft:orange_glazed_terracotta";
  MinecraftItemTypes2["OrangeShulkerBox"] = "minecraft:orange_shulker_box";
  MinecraftItemTypes2["OrangeStainedGlass"] = "minecraft:orange_stained_glass";
  MinecraftItemTypes2["OrangeStainedGlassPane"] = "minecraft:orange_stained_glass_pane";
  MinecraftItemTypes2["OrangeTerracotta"] = "minecraft:orange_terracotta";
  MinecraftItemTypes2["OrangeTulip"] = "minecraft:orange_tulip";
  MinecraftItemTypes2["OrangeWool"] = "minecraft:orange_wool";
  MinecraftItemTypes2["OxeyeDaisy"] = "minecraft:oxeye_daisy";
  MinecraftItemTypes2["OxidizedChiseledCopper"] = "minecraft:oxidized_chiseled_copper";
  MinecraftItemTypes2["OxidizedCopper"] = "minecraft:oxidized_copper";
  MinecraftItemTypes2["OxidizedCopperBulb"] = "minecraft:oxidized_copper_bulb";
  MinecraftItemTypes2["OxidizedCopperDoor"] = "minecraft:oxidized_copper_door";
  MinecraftItemTypes2["OxidizedCopperGrate"] = "minecraft:oxidized_copper_grate";
  MinecraftItemTypes2["OxidizedCopperTrapdoor"] = "minecraft:oxidized_copper_trapdoor";
  MinecraftItemTypes2["OxidizedCutCopper"] = "minecraft:oxidized_cut_copper";
  MinecraftItemTypes2["OxidizedCutCopperSlab"] = "minecraft:oxidized_cut_copper_slab";
  MinecraftItemTypes2["OxidizedCutCopperStairs"] = "minecraft:oxidized_cut_copper_stairs";
  MinecraftItemTypes2["PackedIce"] = "minecraft:packed_ice";
  MinecraftItemTypes2["PackedMud"] = "minecraft:packed_mud";
  MinecraftItemTypes2["Painting"] = "minecraft:painting";
  MinecraftItemTypes2["PandaSpawnEgg"] = "minecraft:panda_spawn_egg";
  MinecraftItemTypes2["Paper"] = "minecraft:paper";
  MinecraftItemTypes2["ParrotSpawnEgg"] = "minecraft:parrot_spawn_egg";
  MinecraftItemTypes2["PearlescentFroglight"] = "minecraft:pearlescent_froglight";
  MinecraftItemTypes2["Peony"] = "minecraft:peony";
  MinecraftItemTypes2["PetrifiedOakSlab"] = "minecraft:petrified_oak_slab";
  MinecraftItemTypes2["PhantomMembrane"] = "minecraft:phantom_membrane";
  MinecraftItemTypes2["PhantomSpawnEgg"] = "minecraft:phantom_spawn_egg";
  MinecraftItemTypes2["PigSpawnEgg"] = "minecraft:pig_spawn_egg";
  MinecraftItemTypes2["PiglinBannerPattern"] = "minecraft:piglin_banner_pattern";
  MinecraftItemTypes2["PiglinBruteSpawnEgg"] = "minecraft:piglin_brute_spawn_egg";
  MinecraftItemTypes2["PiglinSpawnEgg"] = "minecraft:piglin_spawn_egg";
  MinecraftItemTypes2["PillagerSpawnEgg"] = "minecraft:pillager_spawn_egg";
  MinecraftItemTypes2["PinkCandle"] = "minecraft:pink_candle";
  MinecraftItemTypes2["PinkCarpet"] = "minecraft:pink_carpet";
  MinecraftItemTypes2["PinkConcrete"] = "minecraft:pink_concrete";
  MinecraftItemTypes2["PinkConcretePowder"] = "minecraft:pink_concrete_powder";
  MinecraftItemTypes2["PinkDye"] = "minecraft:pink_dye";
  MinecraftItemTypes2["PinkGlazedTerracotta"] = "minecraft:pink_glazed_terracotta";
  MinecraftItemTypes2["PinkPetals"] = "minecraft:pink_petals";
  MinecraftItemTypes2["PinkShulkerBox"] = "minecraft:pink_shulker_box";
  MinecraftItemTypes2["PinkStainedGlass"] = "minecraft:pink_stained_glass";
  MinecraftItemTypes2["PinkStainedGlassPane"] = "minecraft:pink_stained_glass_pane";
  MinecraftItemTypes2["PinkTerracotta"] = "minecraft:pink_terracotta";
  MinecraftItemTypes2["PinkTulip"] = "minecraft:pink_tulip";
  MinecraftItemTypes2["PinkWool"] = "minecraft:pink_wool";
  MinecraftItemTypes2["Piston"] = "minecraft:piston";
  MinecraftItemTypes2["PitcherPlant"] = "minecraft:pitcher_plant";
  MinecraftItemTypes2["PitcherPod"] = "minecraft:pitcher_pod";
  MinecraftItemTypes2["Planks"] = "minecraft:planks";
  MinecraftItemTypes2["PlentyPotterySherd"] = "minecraft:plenty_pottery_sherd";
  MinecraftItemTypes2["Podzol"] = "minecraft:podzol";
  MinecraftItemTypes2["PointedDripstone"] = "minecraft:pointed_dripstone";
  MinecraftItemTypes2["PoisonousPotato"] = "minecraft:poisonous_potato";
  MinecraftItemTypes2["PolarBearSpawnEgg"] = "minecraft:polar_bear_spawn_egg";
  MinecraftItemTypes2["PolishedAndesite"] = "minecraft:polished_andesite";
  MinecraftItemTypes2["PolishedAndesiteStairs"] = "minecraft:polished_andesite_stairs";
  MinecraftItemTypes2["PolishedBasalt"] = "minecraft:polished_basalt";
  MinecraftItemTypes2["PolishedBlackstone"] = "minecraft:polished_blackstone";
  MinecraftItemTypes2["PolishedBlackstoneBrickSlab"] = "minecraft:polished_blackstone_brick_slab";
  MinecraftItemTypes2["PolishedBlackstoneBrickStairs"] = "minecraft:polished_blackstone_brick_stairs";
  MinecraftItemTypes2["PolishedBlackstoneBrickWall"] = "minecraft:polished_blackstone_brick_wall";
  MinecraftItemTypes2["PolishedBlackstoneBricks"] = "minecraft:polished_blackstone_bricks";
  MinecraftItemTypes2["PolishedBlackstoneButton"] = "minecraft:polished_blackstone_button";
  MinecraftItemTypes2["PolishedBlackstonePressurePlate"] = "minecraft:polished_blackstone_pressure_plate";
  MinecraftItemTypes2["PolishedBlackstoneSlab"] = "minecraft:polished_blackstone_slab";
  MinecraftItemTypes2["PolishedBlackstoneStairs"] = "minecraft:polished_blackstone_stairs";
  MinecraftItemTypes2["PolishedBlackstoneWall"] = "minecraft:polished_blackstone_wall";
  MinecraftItemTypes2["PolishedDeepslate"] = "minecraft:polished_deepslate";
  MinecraftItemTypes2["PolishedDeepslateSlab"] = "minecraft:polished_deepslate_slab";
  MinecraftItemTypes2["PolishedDeepslateStairs"] = "minecraft:polished_deepslate_stairs";
  MinecraftItemTypes2["PolishedDeepslateWall"] = "minecraft:polished_deepslate_wall";
  MinecraftItemTypes2["PolishedDiorite"] = "minecraft:polished_diorite";
  MinecraftItemTypes2["PolishedDioriteStairs"] = "minecraft:polished_diorite_stairs";
  MinecraftItemTypes2["PolishedGranite"] = "minecraft:polished_granite";
  MinecraftItemTypes2["PolishedGraniteStairs"] = "minecraft:polished_granite_stairs";
  MinecraftItemTypes2["PolishedTuff"] = "minecraft:polished_tuff";
  MinecraftItemTypes2["PolishedTuffSlab"] = "minecraft:polished_tuff_slab";
  MinecraftItemTypes2["PolishedTuffStairs"] = "minecraft:polished_tuff_stairs";
  MinecraftItemTypes2["PolishedTuffWall"] = "minecraft:polished_tuff_wall";
  MinecraftItemTypes2["PoppedChorusFruit"] = "minecraft:popped_chorus_fruit";
  MinecraftItemTypes2["Poppy"] = "minecraft:poppy";
  MinecraftItemTypes2["Porkchop"] = "minecraft:porkchop";
  MinecraftItemTypes2["Potato"] = "minecraft:potato";
  MinecraftItemTypes2["Potion"] = "minecraft:potion";
  MinecraftItemTypes2["PowderSnowBucket"] = "minecraft:powder_snow_bucket";
  MinecraftItemTypes2["Prismarine"] = "minecraft:prismarine";
  MinecraftItemTypes2["PrismarineBricksStairs"] = "minecraft:prismarine_bricks_stairs";
  MinecraftItemTypes2["PrismarineCrystals"] = "minecraft:prismarine_crystals";
  MinecraftItemTypes2["PrismarineShard"] = "minecraft:prismarine_shard";
  MinecraftItemTypes2["PrismarineStairs"] = "minecraft:prismarine_stairs";
  MinecraftItemTypes2["PrizePotterySherd"] = "minecraft:prize_pottery_sherd";
  MinecraftItemTypes2["Pufferfish"] = "minecraft:pufferfish";
  MinecraftItemTypes2["PufferfishBucket"] = "minecraft:pufferfish_bucket";
  MinecraftItemTypes2["PufferfishSpawnEgg"] = "minecraft:pufferfish_spawn_egg";
  MinecraftItemTypes2["Pumpkin"] = "minecraft:pumpkin";
  MinecraftItemTypes2["PumpkinPie"] = "minecraft:pumpkin_pie";
  MinecraftItemTypes2["PumpkinSeeds"] = "minecraft:pumpkin_seeds";
  MinecraftItemTypes2["PurpleCandle"] = "minecraft:purple_candle";
  MinecraftItemTypes2["PurpleCarpet"] = "minecraft:purple_carpet";
  MinecraftItemTypes2["PurpleConcrete"] = "minecraft:purple_concrete";
  MinecraftItemTypes2["PurpleConcretePowder"] = "minecraft:purple_concrete_powder";
  MinecraftItemTypes2["PurpleDye"] = "minecraft:purple_dye";
  MinecraftItemTypes2["PurpleGlazedTerracotta"] = "minecraft:purple_glazed_terracotta";
  MinecraftItemTypes2["PurpleShulkerBox"] = "minecraft:purple_shulker_box";
  MinecraftItemTypes2["PurpleStainedGlass"] = "minecraft:purple_stained_glass";
  MinecraftItemTypes2["PurpleStainedGlassPane"] = "minecraft:purple_stained_glass_pane";
  MinecraftItemTypes2["PurpleTerracotta"] = "minecraft:purple_terracotta";
  MinecraftItemTypes2["PurpleWool"] = "minecraft:purple_wool";
  MinecraftItemTypes2["PurpurBlock"] = "minecraft:purpur_block";
  MinecraftItemTypes2["PurpurStairs"] = "minecraft:purpur_stairs";
  MinecraftItemTypes2["Quartz"] = "minecraft:quartz";
  MinecraftItemTypes2["QuartzBlock"] = "minecraft:quartz_block";
  MinecraftItemTypes2["QuartzBricks"] = "minecraft:quartz_bricks";
  MinecraftItemTypes2["QuartzOre"] = "minecraft:quartz_ore";
  MinecraftItemTypes2["QuartzSlab"] = "minecraft:quartz_slab";
  MinecraftItemTypes2["QuartzStairs"] = "minecraft:quartz_stairs";
  MinecraftItemTypes2["Rabbit"] = "minecraft:rabbit";
  MinecraftItemTypes2["RabbitFoot"] = "minecraft:rabbit_foot";
  MinecraftItemTypes2["RabbitHide"] = "minecraft:rabbit_hide";
  MinecraftItemTypes2["RabbitSpawnEgg"] = "minecraft:rabbit_spawn_egg";
  MinecraftItemTypes2["RabbitStew"] = "minecraft:rabbit_stew";
  MinecraftItemTypes2["Rail"] = "minecraft:rail";
  MinecraftItemTypes2["RaiserArmorTrimSmithingTemplate"] = "minecraft:raiser_armor_trim_smithing_template";
  MinecraftItemTypes2["RavagerSpawnEgg"] = "minecraft:ravager_spawn_egg";
  MinecraftItemTypes2["RawCopper"] = "minecraft:raw_copper";
  MinecraftItemTypes2["RawCopperBlock"] = "minecraft:raw_copper_block";
  MinecraftItemTypes2["RawGold"] = "minecraft:raw_gold";
  MinecraftItemTypes2["RawGoldBlock"] = "minecraft:raw_gold_block";
  MinecraftItemTypes2["RawIron"] = "minecraft:raw_iron";
  MinecraftItemTypes2["RawIronBlock"] = "minecraft:raw_iron_block";
  MinecraftItemTypes2["RecoveryCompass"] = "minecraft:recovery_compass";
  MinecraftItemTypes2["RedCandle"] = "minecraft:red_candle";
  MinecraftItemTypes2["RedCarpet"] = "minecraft:red_carpet";
  MinecraftItemTypes2["RedConcrete"] = "minecraft:red_concrete";
  MinecraftItemTypes2["RedConcretePowder"] = "minecraft:red_concrete_powder";
  MinecraftItemTypes2["RedDye"] = "minecraft:red_dye";
  MinecraftItemTypes2["RedFlower"] = "minecraft:red_flower";
  MinecraftItemTypes2["RedGlazedTerracotta"] = "minecraft:red_glazed_terracotta";
  MinecraftItemTypes2["RedMushroom"] = "minecraft:red_mushroom";
  MinecraftItemTypes2["RedMushroomBlock"] = "minecraft:red_mushroom_block";
  MinecraftItemTypes2["RedNetherBrick"] = "minecraft:red_nether_brick";
  MinecraftItemTypes2["RedNetherBrickStairs"] = "minecraft:red_nether_brick_stairs";
  MinecraftItemTypes2["RedSandstone"] = "minecraft:red_sandstone";
  MinecraftItemTypes2["RedSandstoneStairs"] = "minecraft:red_sandstone_stairs";
  MinecraftItemTypes2["RedShulkerBox"] = "minecraft:red_shulker_box";
  MinecraftItemTypes2["RedStainedGlass"] = "minecraft:red_stained_glass";
  MinecraftItemTypes2["RedStainedGlassPane"] = "minecraft:red_stained_glass_pane";
  MinecraftItemTypes2["RedTerracotta"] = "minecraft:red_terracotta";
  MinecraftItemTypes2["RedTulip"] = "minecraft:red_tulip";
  MinecraftItemTypes2["RedWool"] = "minecraft:red_wool";
  MinecraftItemTypes2["Redstone"] = "minecraft:redstone";
  MinecraftItemTypes2["RedstoneBlock"] = "minecraft:redstone_block";
  MinecraftItemTypes2["RedstoneLamp"] = "minecraft:redstone_lamp";
  MinecraftItemTypes2["RedstoneOre"] = "minecraft:redstone_ore";
  MinecraftItemTypes2["RedstoneTorch"] = "minecraft:redstone_torch";
  MinecraftItemTypes2["ReinforcedDeepslate"] = "minecraft:reinforced_deepslate";
  MinecraftItemTypes2["Repeater"] = "minecraft:repeater";
  MinecraftItemTypes2["RepeatingCommandBlock"] = "minecraft:repeating_command_block";
  MinecraftItemTypes2["RespawnAnchor"] = "minecraft:respawn_anchor";
  MinecraftItemTypes2["RibArmorTrimSmithingTemplate"] = "minecraft:rib_armor_trim_smithing_template";
  MinecraftItemTypes2["RoseBush"] = "minecraft:rose_bush";
  MinecraftItemTypes2["RottenFlesh"] = "minecraft:rotten_flesh";
  MinecraftItemTypes2["Saddle"] = "minecraft:saddle";
  MinecraftItemTypes2["Salmon"] = "minecraft:salmon";
  MinecraftItemTypes2["SalmonBucket"] = "minecraft:salmon_bucket";
  MinecraftItemTypes2["SalmonSpawnEgg"] = "minecraft:salmon_spawn_egg";
  MinecraftItemTypes2["Sand"] = "minecraft:sand";
  MinecraftItemTypes2["Sandstone"] = "minecraft:sandstone";
  MinecraftItemTypes2["SandstoneSlab"] = "minecraft:sandstone_slab";
  MinecraftItemTypes2["SandstoneStairs"] = "minecraft:sandstone_stairs";
  MinecraftItemTypes2["Sapling"] = "minecraft:sapling";
  MinecraftItemTypes2["Scaffolding"] = "minecraft:scaffolding";
  MinecraftItemTypes2["ScrapePotterySherd"] = "minecraft:scrape_pottery_sherd";
  MinecraftItemTypes2["Sculk"] = "minecraft:sculk";
  MinecraftItemTypes2["SculkCatalyst"] = "minecraft:sculk_catalyst";
  MinecraftItemTypes2["SculkSensor"] = "minecraft:sculk_sensor";
  MinecraftItemTypes2["SculkShrieker"] = "minecraft:sculk_shrieker";
  MinecraftItemTypes2["SculkVein"] = "minecraft:sculk_vein";
  MinecraftItemTypes2["SeaLantern"] = "minecraft:sea_lantern";
  MinecraftItemTypes2["SeaPickle"] = "minecraft:sea_pickle";
  MinecraftItemTypes2["Seagrass"] = "minecraft:seagrass";
  MinecraftItemTypes2["SentryArmorTrimSmithingTemplate"] = "minecraft:sentry_armor_trim_smithing_template";
  MinecraftItemTypes2["ShaperArmorTrimSmithingTemplate"] = "minecraft:shaper_armor_trim_smithing_template";
  MinecraftItemTypes2["SheafPotterySherd"] = "minecraft:sheaf_pottery_sherd";
  MinecraftItemTypes2["Shears"] = "minecraft:shears";
  MinecraftItemTypes2["SheepSpawnEgg"] = "minecraft:sheep_spawn_egg";
  MinecraftItemTypes2["ShelterPotterySherd"] = "minecraft:shelter_pottery_sherd";
  MinecraftItemTypes2["Shield"] = "minecraft:shield";
  MinecraftItemTypes2["ShortGrass"] = "minecraft:short_grass";
  MinecraftItemTypes2["Shroomlight"] = "minecraft:shroomlight";
  MinecraftItemTypes2["ShulkerBox"] = "minecraft:shulker_box";
  MinecraftItemTypes2["ShulkerShell"] = "minecraft:shulker_shell";
  MinecraftItemTypes2["ShulkerSpawnEgg"] = "minecraft:shulker_spawn_egg";
  MinecraftItemTypes2["SilenceArmorTrimSmithingTemplate"] = "minecraft:silence_armor_trim_smithing_template";
  MinecraftItemTypes2["SilverGlazedTerracotta"] = "minecraft:silver_glazed_terracotta";
  MinecraftItemTypes2["SilverfishSpawnEgg"] = "minecraft:silverfish_spawn_egg";
  MinecraftItemTypes2["SkeletonHorseSpawnEgg"] = "minecraft:skeleton_horse_spawn_egg";
  MinecraftItemTypes2["SkeletonSpawnEgg"] = "minecraft:skeleton_spawn_egg";
  MinecraftItemTypes2["Skull"] = "minecraft:skull";
  MinecraftItemTypes2["SkullBannerPattern"] = "minecraft:skull_banner_pattern";
  MinecraftItemTypes2["SkullPotterySherd"] = "minecraft:skull_pottery_sherd";
  MinecraftItemTypes2["Slime"] = "minecraft:slime";
  MinecraftItemTypes2["SlimeBall"] = "minecraft:slime_ball";
  MinecraftItemTypes2["SlimeSpawnEgg"] = "minecraft:slime_spawn_egg";
  MinecraftItemTypes2["SmallAmethystBud"] = "minecraft:small_amethyst_bud";
  MinecraftItemTypes2["SmallDripleafBlock"] = "minecraft:small_dripleaf_block";
  MinecraftItemTypes2["SmithingTable"] = "minecraft:smithing_table";
  MinecraftItemTypes2["Smoker"] = "minecraft:smoker";
  MinecraftItemTypes2["SmoothBasalt"] = "minecraft:smooth_basalt";
  MinecraftItemTypes2["SmoothQuartzStairs"] = "minecraft:smooth_quartz_stairs";
  MinecraftItemTypes2["SmoothRedSandstoneStairs"] = "minecraft:smooth_red_sandstone_stairs";
  MinecraftItemTypes2["SmoothSandstoneStairs"] = "minecraft:smooth_sandstone_stairs";
  MinecraftItemTypes2["SmoothStone"] = "minecraft:smooth_stone";
  MinecraftItemTypes2["SmoothStoneSlab"] = "minecraft:smooth_stone_slab";
  MinecraftItemTypes2["SnifferEgg"] = "minecraft:sniffer_egg";
  MinecraftItemTypes2["SnifferSpawnEgg"] = "minecraft:sniffer_spawn_egg";
  MinecraftItemTypes2["SnortPotterySherd"] = "minecraft:snort_pottery_sherd";
  MinecraftItemTypes2["SnoutArmorTrimSmithingTemplate"] = "minecraft:snout_armor_trim_smithing_template";
  MinecraftItemTypes2["Snow"] = "minecraft:snow";
  MinecraftItemTypes2["SnowGolemSpawnEgg"] = "minecraft:snow_golem_spawn_egg";
  MinecraftItemTypes2["SnowLayer"] = "minecraft:snow_layer";
  MinecraftItemTypes2["Snowball"] = "minecraft:snowball";
  MinecraftItemTypes2["SoulCampfire"] = "minecraft:soul_campfire";
  MinecraftItemTypes2["SoulLantern"] = "minecraft:soul_lantern";
  MinecraftItemTypes2["SoulSand"] = "minecraft:soul_sand";
  MinecraftItemTypes2["SoulSoil"] = "minecraft:soul_soil";
  MinecraftItemTypes2["SoulTorch"] = "minecraft:soul_torch";
  MinecraftItemTypes2["SpawnEgg"] = "minecraft:spawn_egg";
  MinecraftItemTypes2["SpiderEye"] = "minecraft:spider_eye";
  MinecraftItemTypes2["SpiderSpawnEgg"] = "minecraft:spider_spawn_egg";
  MinecraftItemTypes2["SpireArmorTrimSmithingTemplate"] = "minecraft:spire_armor_trim_smithing_template";
  MinecraftItemTypes2["SplashPotion"] = "minecraft:splash_potion";
  MinecraftItemTypes2["Sponge"] = "minecraft:sponge";
  MinecraftItemTypes2["SporeBlossom"] = "minecraft:spore_blossom";
  MinecraftItemTypes2["SpruceBoat"] = "minecraft:spruce_boat";
  MinecraftItemTypes2["SpruceButton"] = "minecraft:spruce_button";
  MinecraftItemTypes2["SpruceChestBoat"] = "minecraft:spruce_chest_boat";
  MinecraftItemTypes2["SpruceDoor"] = "minecraft:spruce_door";
  MinecraftItemTypes2["SpruceFence"] = "minecraft:spruce_fence";
  MinecraftItemTypes2["SpruceFenceGate"] = "minecraft:spruce_fence_gate";
  MinecraftItemTypes2["SpruceHangingSign"] = "minecraft:spruce_hanging_sign";
  MinecraftItemTypes2["SpruceLeaves"] = "minecraft:spruce_leaves";
  MinecraftItemTypes2["SpruceLog"] = "minecraft:spruce_log";
  MinecraftItemTypes2["SprucePlanks"] = "minecraft:spruce_planks";
  MinecraftItemTypes2["SprucePressurePlate"] = "minecraft:spruce_pressure_plate";
  MinecraftItemTypes2["SpruceSapling"] = "minecraft:spruce_sapling";
  MinecraftItemTypes2["SpruceSign"] = "minecraft:spruce_sign";
  MinecraftItemTypes2["SpruceSlab"] = "minecraft:spruce_slab";
  MinecraftItemTypes2["SpruceStairs"] = "minecraft:spruce_stairs";
  MinecraftItemTypes2["SpruceTrapdoor"] = "minecraft:spruce_trapdoor";
  MinecraftItemTypes2["SpruceWood"] = "minecraft:spruce_wood";
  MinecraftItemTypes2["Spyglass"] = "minecraft:spyglass";
  MinecraftItemTypes2["SquidSpawnEgg"] = "minecraft:squid_spawn_egg";
  MinecraftItemTypes2["StainedGlass"] = "minecraft:stained_glass";
  MinecraftItemTypes2["StainedGlassPane"] = "minecraft:stained_glass_pane";
  MinecraftItemTypes2["StainedHardenedClay"] = "minecraft:stained_hardened_clay";
  MinecraftItemTypes2["Stick"] = "minecraft:stick";
  MinecraftItemTypes2["StickyPiston"] = "minecraft:sticky_piston";
  MinecraftItemTypes2["Stone"] = "minecraft:stone";
  MinecraftItemTypes2["StoneAxe"] = "minecraft:stone_axe";
  MinecraftItemTypes2["StoneBlockSlab"] = "minecraft:stone_block_slab";
  MinecraftItemTypes2["StoneBlockSlab2"] = "minecraft:stone_block_slab2";
  MinecraftItemTypes2["StoneBlockSlab3"] = "minecraft:stone_block_slab3";
  MinecraftItemTypes2["StoneBlockSlab4"] = "minecraft:stone_block_slab4";
  MinecraftItemTypes2["StoneBrickSlab"] = "minecraft:stone_brick_slab";
  MinecraftItemTypes2["StoneBrickStairs"] = "minecraft:stone_brick_stairs";
  MinecraftItemTypes2["StoneButton"] = "minecraft:stone_button";
  MinecraftItemTypes2["StoneHoe"] = "minecraft:stone_hoe";
  MinecraftItemTypes2["StonePickaxe"] = "minecraft:stone_pickaxe";
  MinecraftItemTypes2["StonePressurePlate"] = "minecraft:stone_pressure_plate";
  MinecraftItemTypes2["StoneShovel"] = "minecraft:stone_shovel";
  MinecraftItemTypes2["StoneStairs"] = "minecraft:stone_stairs";
  MinecraftItemTypes2["StoneSword"] = "minecraft:stone_sword";
  MinecraftItemTypes2["Stonebrick"] = "minecraft:stonebrick";
  MinecraftItemTypes2["StonecutterBlock"] = "minecraft:stonecutter_block";
  MinecraftItemTypes2["StraySpawnEgg"] = "minecraft:stray_spawn_egg";
  MinecraftItemTypes2["StriderSpawnEgg"] = "minecraft:strider_spawn_egg";
  MinecraftItemTypes2["String"] = "minecraft:string";
  MinecraftItemTypes2["StrippedAcaciaLog"] = "minecraft:stripped_acacia_log";
  MinecraftItemTypes2["StrippedAcaciaWood"] = "minecraft:stripped_acacia_wood";
  MinecraftItemTypes2["StrippedBambooBlock"] = "minecraft:stripped_bamboo_block";
  MinecraftItemTypes2["StrippedBirchLog"] = "minecraft:stripped_birch_log";
  MinecraftItemTypes2["StrippedBirchWood"] = "minecraft:stripped_birch_wood";
  MinecraftItemTypes2["StrippedCherryLog"] = "minecraft:stripped_cherry_log";
  MinecraftItemTypes2["StrippedCherryWood"] = "minecraft:stripped_cherry_wood";
  MinecraftItemTypes2["StrippedCrimsonHyphae"] = "minecraft:stripped_crimson_hyphae";
  MinecraftItemTypes2["StrippedCrimsonStem"] = "minecraft:stripped_crimson_stem";
  MinecraftItemTypes2["StrippedDarkOakLog"] = "minecraft:stripped_dark_oak_log";
  MinecraftItemTypes2["StrippedDarkOakWood"] = "minecraft:stripped_dark_oak_wood";
  MinecraftItemTypes2["StrippedJungleLog"] = "minecraft:stripped_jungle_log";
  MinecraftItemTypes2["StrippedJungleWood"] = "minecraft:stripped_jungle_wood";
  MinecraftItemTypes2["StrippedMangroveLog"] = "minecraft:stripped_mangrove_log";
  MinecraftItemTypes2["StrippedMangroveWood"] = "minecraft:stripped_mangrove_wood";
  MinecraftItemTypes2["StrippedOakLog"] = "minecraft:stripped_oak_log";
  MinecraftItemTypes2["StrippedOakWood"] = "minecraft:stripped_oak_wood";
  MinecraftItemTypes2["StrippedSpruceLog"] = "minecraft:stripped_spruce_log";
  MinecraftItemTypes2["StrippedSpruceWood"] = "minecraft:stripped_spruce_wood";
  MinecraftItemTypes2["StrippedWarpedHyphae"] = "minecraft:stripped_warped_hyphae";
  MinecraftItemTypes2["StrippedWarpedStem"] = "minecraft:stripped_warped_stem";
  MinecraftItemTypes2["StructureBlock"] = "minecraft:structure_block";
  MinecraftItemTypes2["StructureVoid"] = "minecraft:structure_void";
  MinecraftItemTypes2["Sugar"] = "minecraft:sugar";
  MinecraftItemTypes2["SugarCane"] = "minecraft:sugar_cane";
  MinecraftItemTypes2["Sunflower"] = "minecraft:sunflower";
  MinecraftItemTypes2["SuspiciousGravel"] = "minecraft:suspicious_gravel";
  MinecraftItemTypes2["SuspiciousSand"] = "minecraft:suspicious_sand";
  MinecraftItemTypes2["SuspiciousStew"] = "minecraft:suspicious_stew";
  MinecraftItemTypes2["SweetBerries"] = "minecraft:sweet_berries";
  MinecraftItemTypes2["TadpoleBucket"] = "minecraft:tadpole_bucket";
  MinecraftItemTypes2["TadpoleSpawnEgg"] = "minecraft:tadpole_spawn_egg";
  MinecraftItemTypes2["TallGrass"] = "minecraft:tall_grass";
  MinecraftItemTypes2["Tallgrass"] = "minecraft:tallgrass";
  MinecraftItemTypes2["Target"] = "minecraft:target";
  MinecraftItemTypes2["TideArmorTrimSmithingTemplate"] = "minecraft:tide_armor_trim_smithing_template";
  MinecraftItemTypes2["TintedGlass"] = "minecraft:tinted_glass";
  MinecraftItemTypes2["Tnt"] = "minecraft:tnt";
  MinecraftItemTypes2["TntMinecart"] = "minecraft:tnt_minecart";
  MinecraftItemTypes2["Torch"] = "minecraft:torch";
  MinecraftItemTypes2["Torchflower"] = "minecraft:torchflower";
  MinecraftItemTypes2["TorchflowerSeeds"] = "minecraft:torchflower_seeds";
  MinecraftItemTypes2["TotemOfUndying"] = "minecraft:totem_of_undying";
  MinecraftItemTypes2["TraderLlamaSpawnEgg"] = "minecraft:trader_llama_spawn_egg";
  MinecraftItemTypes2["Trapdoor"] = "minecraft:trapdoor";
  MinecraftItemTypes2["TrappedChest"] = "minecraft:trapped_chest";
  MinecraftItemTypes2["TrialKey"] = "minecraft:trial_key";
  MinecraftItemTypes2["TrialSpawner"] = "minecraft:trial_spawner";
  MinecraftItemTypes2["Trident"] = "minecraft:trident";
  MinecraftItemTypes2["TripwireHook"] = "minecraft:tripwire_hook";
  MinecraftItemTypes2["TropicalFish"] = "minecraft:tropical_fish";
  MinecraftItemTypes2["TropicalFishBucket"] = "minecraft:tropical_fish_bucket";
  MinecraftItemTypes2["TropicalFishSpawnEgg"] = "minecraft:tropical_fish_spawn_egg";
  MinecraftItemTypes2["TubeCoral"] = "minecraft:tube_coral";
  MinecraftItemTypes2["TubeCoralBlock"] = "minecraft:tube_coral_block";
  MinecraftItemTypes2["TubeCoralFan"] = "minecraft:tube_coral_fan";
  MinecraftItemTypes2["Tuff"] = "minecraft:tuff";
  MinecraftItemTypes2["TuffBrickSlab"] = "minecraft:tuff_brick_slab";
  MinecraftItemTypes2["TuffBrickStairs"] = "minecraft:tuff_brick_stairs";
  MinecraftItemTypes2["TuffBrickWall"] = "minecraft:tuff_brick_wall";
  MinecraftItemTypes2["TuffBricks"] = "minecraft:tuff_bricks";
  MinecraftItemTypes2["TuffSlab"] = "minecraft:tuff_slab";
  MinecraftItemTypes2["TuffStairs"] = "minecraft:tuff_stairs";
  MinecraftItemTypes2["TuffWall"] = "minecraft:tuff_wall";
  MinecraftItemTypes2["TurtleEgg"] = "minecraft:turtle_egg";
  MinecraftItemTypes2["TurtleHelmet"] = "minecraft:turtle_helmet";
  MinecraftItemTypes2["TurtleScute"] = "minecraft:turtle_scute";
  MinecraftItemTypes2["TurtleSpawnEgg"] = "minecraft:turtle_spawn_egg";
  MinecraftItemTypes2["TwistingVines"] = "minecraft:twisting_vines";
  MinecraftItemTypes2["UndyedShulkerBox"] = "minecraft:undyed_shulker_box";
  MinecraftItemTypes2["Vault"] = "minecraft:vault";
  MinecraftItemTypes2["VerdantFroglight"] = "minecraft:verdant_froglight";
  MinecraftItemTypes2["VexArmorTrimSmithingTemplate"] = "minecraft:vex_armor_trim_smithing_template";
  MinecraftItemTypes2["VexSpawnEgg"] = "minecraft:vex_spawn_egg";
  MinecraftItemTypes2["VillagerSpawnEgg"] = "minecraft:villager_spawn_egg";
  MinecraftItemTypes2["VindicatorSpawnEgg"] = "minecraft:vindicator_spawn_egg";
  MinecraftItemTypes2["Vine"] = "minecraft:vine";
  MinecraftItemTypes2["WanderingTraderSpawnEgg"] = "minecraft:wandering_trader_spawn_egg";
  MinecraftItemTypes2["WardArmorTrimSmithingTemplate"] = "minecraft:ward_armor_trim_smithing_template";
  MinecraftItemTypes2["WardenSpawnEgg"] = "minecraft:warden_spawn_egg";
  MinecraftItemTypes2["WarpedButton"] = "minecraft:warped_button";
  MinecraftItemTypes2["WarpedDoor"] = "minecraft:warped_door";
  MinecraftItemTypes2["WarpedFence"] = "minecraft:warped_fence";
  MinecraftItemTypes2["WarpedFenceGate"] = "minecraft:warped_fence_gate";
  MinecraftItemTypes2["WarpedFungus"] = "minecraft:warped_fungus";
  MinecraftItemTypes2["WarpedFungusOnAStick"] = "minecraft:warped_fungus_on_a_stick";
  MinecraftItemTypes2["WarpedHangingSign"] = "minecraft:warped_hanging_sign";
  MinecraftItemTypes2["WarpedHyphae"] = "minecraft:warped_hyphae";
  MinecraftItemTypes2["WarpedNylium"] = "minecraft:warped_nylium";
  MinecraftItemTypes2["WarpedPlanks"] = "minecraft:warped_planks";
  MinecraftItemTypes2["WarpedPressurePlate"] = "minecraft:warped_pressure_plate";
  MinecraftItemTypes2["WarpedRoots"] = "minecraft:warped_roots";
  MinecraftItemTypes2["WarpedSign"] = "minecraft:warped_sign";
  MinecraftItemTypes2["WarpedSlab"] = "minecraft:warped_slab";
  MinecraftItemTypes2["WarpedStairs"] = "minecraft:warped_stairs";
  MinecraftItemTypes2["WarpedStem"] = "minecraft:warped_stem";
  MinecraftItemTypes2["WarpedTrapdoor"] = "minecraft:warped_trapdoor";
  MinecraftItemTypes2["WarpedWartBlock"] = "minecraft:warped_wart_block";
  MinecraftItemTypes2["WaterBucket"] = "minecraft:water_bucket";
  MinecraftItemTypes2["Waterlily"] = "minecraft:waterlily";
  MinecraftItemTypes2["WaxedChiseledCopper"] = "minecraft:waxed_chiseled_copper";
  MinecraftItemTypes2["WaxedCopper"] = "minecraft:waxed_copper";
  MinecraftItemTypes2["WaxedCopperBulb"] = "minecraft:waxed_copper_bulb";
  MinecraftItemTypes2["WaxedCopperDoor"] = "minecraft:waxed_copper_door";
  MinecraftItemTypes2["WaxedCopperGrate"] = "minecraft:waxed_copper_grate";
  MinecraftItemTypes2["WaxedCopperTrapdoor"] = "minecraft:waxed_copper_trapdoor";
  MinecraftItemTypes2["WaxedCutCopper"] = "minecraft:waxed_cut_copper";
  MinecraftItemTypes2["WaxedCutCopperSlab"] = "minecraft:waxed_cut_copper_slab";
  MinecraftItemTypes2["WaxedCutCopperStairs"] = "minecraft:waxed_cut_copper_stairs";
  MinecraftItemTypes2["WaxedExposedChiseledCopper"] = "minecraft:waxed_exposed_chiseled_copper";
  MinecraftItemTypes2["WaxedExposedCopper"] = "minecraft:waxed_exposed_copper";
  MinecraftItemTypes2["WaxedExposedCopperBulb"] = "minecraft:waxed_exposed_copper_bulb";
  MinecraftItemTypes2["WaxedExposedCopperDoor"] = "minecraft:waxed_exposed_copper_door";
  MinecraftItemTypes2["WaxedExposedCopperGrate"] = "minecraft:waxed_exposed_copper_grate";
  MinecraftItemTypes2["WaxedExposedCopperTrapdoor"] = "minecraft:waxed_exposed_copper_trapdoor";
  MinecraftItemTypes2["WaxedExposedCutCopper"] = "minecraft:waxed_exposed_cut_copper";
  MinecraftItemTypes2["WaxedExposedCutCopperSlab"] = "minecraft:waxed_exposed_cut_copper_slab";
  MinecraftItemTypes2["WaxedExposedCutCopperStairs"] = "minecraft:waxed_exposed_cut_copper_stairs";
  MinecraftItemTypes2["WaxedOxidizedChiseledCopper"] = "minecraft:waxed_oxidized_chiseled_copper";
  MinecraftItemTypes2["WaxedOxidizedCopper"] = "minecraft:waxed_oxidized_copper";
  MinecraftItemTypes2["WaxedOxidizedCopperBulb"] = "minecraft:waxed_oxidized_copper_bulb";
  MinecraftItemTypes2["WaxedOxidizedCopperDoor"] = "minecraft:waxed_oxidized_copper_door";
  MinecraftItemTypes2["WaxedOxidizedCopperGrate"] = "minecraft:waxed_oxidized_copper_grate";
  MinecraftItemTypes2["WaxedOxidizedCopperTrapdoor"] = "minecraft:waxed_oxidized_copper_trapdoor";
  MinecraftItemTypes2["WaxedOxidizedCutCopper"] = "minecraft:waxed_oxidized_cut_copper";
  MinecraftItemTypes2["WaxedOxidizedCutCopperSlab"] = "minecraft:waxed_oxidized_cut_copper_slab";
  MinecraftItemTypes2["WaxedOxidizedCutCopperStairs"] = "minecraft:waxed_oxidized_cut_copper_stairs";
  MinecraftItemTypes2["WaxedWeatheredChiseledCopper"] = "minecraft:waxed_weathered_chiseled_copper";
  MinecraftItemTypes2["WaxedWeatheredCopper"] = "minecraft:waxed_weathered_copper";
  MinecraftItemTypes2["WaxedWeatheredCopperBulb"] = "minecraft:waxed_weathered_copper_bulb";
  MinecraftItemTypes2["WaxedWeatheredCopperDoor"] = "minecraft:waxed_weathered_copper_door";
  MinecraftItemTypes2["WaxedWeatheredCopperGrate"] = "minecraft:waxed_weathered_copper_grate";
  MinecraftItemTypes2["WaxedWeatheredCopperTrapdoor"] = "minecraft:waxed_weathered_copper_trapdoor";
  MinecraftItemTypes2["WaxedWeatheredCutCopper"] = "minecraft:waxed_weathered_cut_copper";
  MinecraftItemTypes2["WaxedWeatheredCutCopperSlab"] = "minecraft:waxed_weathered_cut_copper_slab";
  MinecraftItemTypes2["WaxedWeatheredCutCopperStairs"] = "minecraft:waxed_weathered_cut_copper_stairs";
  MinecraftItemTypes2["WayfinderArmorTrimSmithingTemplate"] = "minecraft:wayfinder_armor_trim_smithing_template";
  MinecraftItemTypes2["WeatheredChiseledCopper"] = "minecraft:weathered_chiseled_copper";
  MinecraftItemTypes2["WeatheredCopper"] = "minecraft:weathered_copper";
  MinecraftItemTypes2["WeatheredCopperBulb"] = "minecraft:weathered_copper_bulb";
  MinecraftItemTypes2["WeatheredCopperDoor"] = "minecraft:weathered_copper_door";
  MinecraftItemTypes2["WeatheredCopperGrate"] = "minecraft:weathered_copper_grate";
  MinecraftItemTypes2["WeatheredCopperTrapdoor"] = "minecraft:weathered_copper_trapdoor";
  MinecraftItemTypes2["WeatheredCutCopper"] = "minecraft:weathered_cut_copper";
  MinecraftItemTypes2["WeatheredCutCopperSlab"] = "minecraft:weathered_cut_copper_slab";
  MinecraftItemTypes2["WeatheredCutCopperStairs"] = "minecraft:weathered_cut_copper_stairs";
  MinecraftItemTypes2["Web"] = "minecraft:web";
  MinecraftItemTypes2["WeepingVines"] = "minecraft:weeping_vines";
  MinecraftItemTypes2["Wheat"] = "minecraft:wheat";
  MinecraftItemTypes2["WheatSeeds"] = "minecraft:wheat_seeds";
  MinecraftItemTypes2["WhiteCandle"] = "minecraft:white_candle";
  MinecraftItemTypes2["WhiteCarpet"] = "minecraft:white_carpet";
  MinecraftItemTypes2["WhiteConcrete"] = "minecraft:white_concrete";
  MinecraftItemTypes2["WhiteConcretePowder"] = "minecraft:white_concrete_powder";
  MinecraftItemTypes2["WhiteDye"] = "minecraft:white_dye";
  MinecraftItemTypes2["WhiteGlazedTerracotta"] = "minecraft:white_glazed_terracotta";
  MinecraftItemTypes2["WhiteShulkerBox"] = "minecraft:white_shulker_box";
  MinecraftItemTypes2["WhiteStainedGlass"] = "minecraft:white_stained_glass";
  MinecraftItemTypes2["WhiteStainedGlassPane"] = "minecraft:white_stained_glass_pane";
  MinecraftItemTypes2["WhiteTerracotta"] = "minecraft:white_terracotta";
  MinecraftItemTypes2["WhiteTulip"] = "minecraft:white_tulip";
  MinecraftItemTypes2["WhiteWool"] = "minecraft:white_wool";
  MinecraftItemTypes2["WildArmorTrimSmithingTemplate"] = "minecraft:wild_armor_trim_smithing_template";
  MinecraftItemTypes2["WindCharge"] = "minecraft:wind_charge";
  MinecraftItemTypes2["WitchSpawnEgg"] = "minecraft:witch_spawn_egg";
  MinecraftItemTypes2["WitherRose"] = "minecraft:wither_rose";
  MinecraftItemTypes2["WitherSkeletonSpawnEgg"] = "minecraft:wither_skeleton_spawn_egg";
  MinecraftItemTypes2["WitherSpawnEgg"] = "minecraft:wither_spawn_egg";
  MinecraftItemTypes2["WolfArmor"] = "minecraft:wolf_armor";
  MinecraftItemTypes2["WolfSpawnEgg"] = "minecraft:wolf_spawn_egg";
  MinecraftItemTypes2["Wood"] = "minecraft:wood";
  MinecraftItemTypes2["WoodenAxe"] = "minecraft:wooden_axe";
  MinecraftItemTypes2["WoodenButton"] = "minecraft:wooden_button";
  MinecraftItemTypes2["WoodenDoor"] = "minecraft:wooden_door";
  MinecraftItemTypes2["WoodenHoe"] = "minecraft:wooden_hoe";
  MinecraftItemTypes2["WoodenPickaxe"] = "minecraft:wooden_pickaxe";
  MinecraftItemTypes2["WoodenPressurePlate"] = "minecraft:wooden_pressure_plate";
  MinecraftItemTypes2["WoodenShovel"] = "minecraft:wooden_shovel";
  MinecraftItemTypes2["WoodenSlab"] = "minecraft:wooden_slab";
  MinecraftItemTypes2["WoodenSword"] = "minecraft:wooden_sword";
  MinecraftItemTypes2["Wool"] = "minecraft:wool";
  MinecraftItemTypes2["WritableBook"] = "minecraft:writable_book";
  MinecraftItemTypes2["YellowCandle"] = "minecraft:yellow_candle";
  MinecraftItemTypes2["YellowCarpet"] = "minecraft:yellow_carpet";
  MinecraftItemTypes2["YellowConcrete"] = "minecraft:yellow_concrete";
  MinecraftItemTypes2["YellowConcretePowder"] = "minecraft:yellow_concrete_powder";
  MinecraftItemTypes2["YellowDye"] = "minecraft:yellow_dye";
  MinecraftItemTypes2["YellowFlower"] = "minecraft:yellow_flower";
  MinecraftItemTypes2["YellowGlazedTerracotta"] = "minecraft:yellow_glazed_terracotta";
  MinecraftItemTypes2["YellowShulkerBox"] = "minecraft:yellow_shulker_box";
  MinecraftItemTypes2["YellowStainedGlass"] = "minecraft:yellow_stained_glass";
  MinecraftItemTypes2["YellowStainedGlassPane"] = "minecraft:yellow_stained_glass_pane";
  MinecraftItemTypes2["YellowTerracotta"] = "minecraft:yellow_terracotta";
  MinecraftItemTypes2["YellowWool"] = "minecraft:yellow_wool";
  MinecraftItemTypes2["ZoglinSpawnEgg"] = "minecraft:zoglin_spawn_egg";
  MinecraftItemTypes2["ZombieHorseSpawnEgg"] = "minecraft:zombie_horse_spawn_egg";
  MinecraftItemTypes2["ZombiePigmanSpawnEgg"] = "minecraft:zombie_pigman_spawn_egg";
  MinecraftItemTypes2["ZombieSpawnEgg"] = "minecraft:zombie_spawn_egg";
  MinecraftItemTypes2["ZombieVillagerSpawnEgg"] = "minecraft:zombie_villager_spawn_egg";
  return MinecraftItemTypes2;
})(MinecraftItemTypes || {});

// scripts/bossEvents.ts
import { system, world } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
var PFEBossEventConfigName = `pfe:bossEventConfig`;
var PFEBossEventBosses = [
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
var TotalBosses = PFEBossEventBosses.length;
var PFEDefaultBossEventSettings = {
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
  "ticks": 108e3
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
  new ActionFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` }).button({ translate: `translation.poke:bossEventMainMenuEnableBosses`, with: [`${EnabledBosses}`, `${TotalBosses}`] }, "textures/items/misc/poke_spawn_enabled").button({ translate: `translation.poke:bossEventMainMenuBossChances` }, "textures/items/misc/poke_spawn_weight").button({ translate: `translation.poke:bossEventSettings` }, "textures/ui/settings_glyph_color_2x").button({ translate: `translation.poke:bossEventClose` }, "textures/ui/redX1").show(player).then((ui) => {
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
  new ActionFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` }).button({ translate: `translation.poke:bossEventManual` }, "textures/items/boss/poke_boss_event").button({ translate: `translation.poke:bossEventTiming` }, "textures/items/misc/poke_spawn_time").button({ translate: `translation.poke:bossEventSettingsReset` }, "textures/ui/refresh_light").button({ translate: `translation.poke:bossEventGoBack` }, "textures/ui/redX1").show(player).then((ui) => {
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
  new ModalFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` }).toggle({ translate: `entity.poke:zombken.name` }, settings.zombken.e).toggle({ translate: `entity.poke:super_striker.name` }, settings.superStriker.e).toggle({ translate: `entity.poke:knightling.name` }, settings.knightling.e).toggle({ translate: `entity.poke:mini_demonic_allay.name` }, settings.miniDemonicAllay.e).toggle({ translate: `entity.poke:necromancer.name` }, settings.necromancer.e).toggle({ translate: `entity.poke:snowman.name` }, settings.snowman.e).toggle({ translate: `entity.poke:robo_golem.name` }, settings.furnaceGolem.e).toggle({ translate: `entity.poke:dragon.name` }, settings.sparky.e).toggle({ translate: `entity.poke:the_logger.name` }, settings.theLogger.e).toggle({ translate: `entity.poke:listener.name` }, settings.listener.e).submitButton(`translation.poke:BossEventUISubmit`).show(player).then((ui) => {
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
  new ModalFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` }).textField({ translate: `translation.poke:BossEventTimeDesc` }, { translate: `translation.poke:BossEventTimePlaceholder` }, `${settings.ticks}`).submitButton(`translation.poke:BossEventUISubmit`).show(player).then((ui) => {
    if (!ui.canceled) {
      let newTicks = Number(ui.formValues.at(0));
      if (Number(isNaN(newTicks))) {
        return;
      } else {
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
  new ModalFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` }).slider({ translate: `entity.poke:zombken.name` }, 0, 100, 1, settings.zombken["%"]).slider({ translate: `entity.poke:super_striker.name` }, 0, 100, 1, settings.superStriker["%"]).slider({ translate: `entity.poke:knightling.name` }, 0, 100, 1, settings.knightling["%"]).slider({ translate: `entity.poke:mini_demonic_allay.name` }, 0, 100, 1, settings.miniDemonicAllay["%"]).slider({ translate: `entity.poke:necromancer.name` }, 0, 100, 1, settings.necromancer["%"]).slider({ translate: `entity.poke:snowman.name` }, 0, 100, 1, settings.snowman["%"]).slider({ translate: `entity.poke:robo_golem.name` }, 0, 100, 1, settings.furnaceGolem["%"]).slider({ translate: `entity.poke:dragon.name` }, 0, 100, 1, settings.sparky["%"]).slider({ translate: `entity.poke:the_logger.name` }, 0, 100, 1, settings.theLogger["%"]).slider({ translate: `entity.poke:listener.name` }, 0, 100, 1, settings.listener["%"]).submitButton(`translation.poke:BossEventUISubmit`).show(player).then((ui) => {
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
  } else
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
  const weightedRandom = (array, weights2) => {
    const totalWeight = weights2.reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;
    return array.find((_, i) => (random -= weights2[i]) <= 0);
  };
  let selectedBoss = weightedRandom(PFEBossEventBosses, weights);
  randomPlayer?.dimension.spawnEntity(selectedBoss, randomPlayer.location).runCommand(`spreadplayers ~ ~ 30 40 @s ~10`);
  world.sendMessage({ rawtext: [{ translate: `translation.${selectedBoss}_boss_event_near` }, { text: `: ${randomPlayer?.name}` }] });
}
system.runInterval(() => {
  PFEStartBossEvent();
}, PFEBossEventTicks());
var PFEBossEventUI = class {
  onUse(data) {
    if (world.getDynamicProperty(PFEBossEventConfigName) == void 0) {
      world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
    }
    PFEBossEventUIMainMenu(data.source);
    return;
  }
};

// scripts/haxelMining.ts
import { EntityComponentTypes, EquipmentSlot, GameMode, ItemComponentTypes, ItemStack, system as system2 } from "@minecraft/server";
var PFEHaxelMining = class {
  onUse(data) {
    const ItemTags = data.itemStack.getTags().toString();
    let ComponentInfo = JSON.parse(ItemTags.substring(ItemTags.indexOf("pfe:HaxelMining:"), ItemTags.indexOf(":pfeHaxelMiningEnd")).substring(16));
    let location = { x: Math.round(data.source.location.x - ComponentInfo.radius.x / 2), y: Math.round(data.source.location.y - 0.01), z: Math.round(data.source.location.z - ComponentInfo.radius.z / 2) };
    system2.runJob(PFEMine(ComponentInfo, location, data.source, data.source.dimension, data.itemStack.getComponent(ItemComponentTypes.Enchantable).hasEnchantment(MinecraftEnchantmentTypes.SilkTouch), data.itemStack));
  }
};
var BannedBlocks = [MinecraftBlockTypes.Air, MinecraftBlockTypes.LightBlock, MinecraftBlockTypes.Barrier, MinecraftBlockTypes.Jigsaw, MinecraftBlockTypes.StructureBlock, MinecraftBlockTypes.CommandBlock, MinecraftBlockTypes.ChainCommandBlock, MinecraftBlockTypes.RepeatingCommandBlock, MinecraftBlockTypes.BorderBlock, MinecraftBlockTypes.Allow, MinecraftBlockTypes.Deny, "minecraft:light_block_0", "minecraft:light_block_1", "minecraft:light_block_2", "minecraft:light_block_3", "minecraft:light_block_4", "minecraft:light_block_5", "minecraft:light_block_6", "minecraft:light_block_7", "minecraft:light_block_8", "minecraft:light_block_9", "minecraft:light_block_10", "minecraft:light_block_11", "minecraft:light_block_13", "minecraft:light_block_14", "minecraft:light_block_15"];
function* PFEMine(data, location, player, dim, silkTouch, item) {
  let DurabilityAmount = 0;
  for (let x = location.x; x < location.x + data.radius.x; x++) {
    for (let y = location.y; y < location.y + data.radius.y; y++) {
      for (let z = location.z; z < location.z + data.radius.z; z++) {
        const block = dim.getBlock({ x, y, z });
        if (block) {
          if (BannedBlocks.includes(block.typeId) || block.typeId == MinecraftBlockTypes.Bedrock && !data.canBreakBedrock || block.isLiquid && !data.canBreakLiquids) {
          } else {
            DurabilityAmount = DurabilityAmount + 1;
            if (silkTouch) {
              let blockItemStack = block.getItemStack(1, false);
              if (!blockItemStack)
                blockItemStack = new ItemStack(block.typeId);
              block.dimension.spawnItem(blockItemStack, player.location);
              block.setType(MinecraftBlockTypes.Air);
            } else {
              let blockLocation = `${block.location.x} ${block.location.y} ${block.location.z}`;
              block.dimension.runCommand(`setblock ${blockLocation} air destroy`);
            }
          }
        }
        yield;
      }
    }
  }
  if (DurabilityAmount != 0) {
    if (item.hasComponent(ItemComponentTypes.Durability) && player.getGameMode() != GameMode.creative) {
      let newItem = damage_item_ub(item, DurabilityAmount);
      player.getComponent(EntityComponentTypes.Equippable).setEquipment(EquipmentSlot.Mainhand, newItem);
      if (!newItem) {
        player.playSound("random.break");
      }
    }
    player.dimension.playSound("dig.stone", player.location);
  }
  if (!silkTouch) {
    player.runCommand(`tp @e[type=item,r=${data.radius.x}] @s`);
  }
}

// scripts/main.ts
system3.runInterval(() => {
  world2.getDimension("overworld").runCommandAsync("execute as @a run function poke/pfe/effects");
  system3.runTimeout(() => {
    world2.getDimension("overworld").runCommandAsync("execute as @a run function poke/pfe/effects_2");
    system3.runTimeout(() => {
      world2.getDimension("overworld").runCommandAsync("execute as @a run function poke/pfe/effects_3");
      system3.runTimeout(() => {
        world2.getDimension("overworld").runCommandAsync("execute as @a run function poke/pfe/effects_4");
      }, 40);
    }, 80);
  }, 120);
}, 180);
function PFEDecrementStack(item) {
  if (item.amount <= 1)
    return void 0;
  else {
    item.amount = item.amount - 1;
    return item;
  }
}
function damage_item(item) {
  if (!item.hasComponent(ItemComponentTypes2.Durability))
    return item;
  const durabilityComponent = item.getComponent(ItemComponentTypes2.Durability);
  const enchantComponent = item.getComponent("minecraft:enchantable");
  let unbreaking = 0;
  if (item.hasComponent("enchantments")) {
    let unbreakingEnchant = void 0;
    if (enchantComponent != void 0) {
      unbreakingEnchant = enchantComponent.getEnchantment(MinecraftEnchantmentTypes.Unbreaking);
    }
    if (unbreakingEnchant === void 0) {
      unbreaking = 0;
    } else {
      unbreaking = unbreakingEnchant.level;
    }
  }
  if (durabilityComponent.damage == durabilityComponent.maxDurability) {
    return;
  }
  durabilityComponent.damage += Number(Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreaking));
  return item;
}
function damage_item_ub(item, multiplier) {
  if (!item.hasComponent(ItemComponentTypes2.Durability))
    return item;
  const durabilityComponent = item.getComponent(ItemComponentTypes2.Durability);
  var unbreakingL = 0;
  if (item.hasComponent(ItemComponentTypes2.Enchantable)) {
    if (item.getComponent(ItemComponentTypes2.Enchantable).hasEnchantment("unbreaking")) {
      unbreakingL = item.getComponent(ItemComponentTypes2.Enchantable).getEnchantment("unbreaking").level;
    }
  }
  let damage = Number(Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreakingL));
  if (typeof multiplier == "number") {
    damage = damage * multiplier;
  }
  if (durabilityComponent.damage + damage == durabilityComponent.maxDurability)
    return void 0;
  durabilityComponent.damage += damage;
  if (durabilityComponent.damage == durabilityComponent.maxDurability) {
    return item;
  }
  return item;
}
var pfeFoodList = ["poke:pumpkin_spice", "poke:xp_vial", "poke:golden_chicken", "poke:rotten_chicken", "poke:demonic_potion", "poke:hellish_potion", "poke:nebula_potion", "poke:void_potion", "poke:death_potion", "poke:cobalt_potion", "poke:cobalt_soup", "poke:crimson_sporeshroom_stew", "poke:root_beer", "poke:hellish_soup", "poke:nebula_noodles", "poke:warped_sporeshroom_stew", "poke:milk_bottle", "poke:banished_star_x10", "poke:banished_star_x9"];
world2.afterEvents.itemCompleteUse.subscribe((item) => {
  if (!pfeFoodList.includes(item.itemStack.typeId))
    return;
  switch (item.itemStack.typeId) {
    case "poke:xp_vial":
      {
        item.source.runCommandAsync("xp 160 @s");
        return;
      }
      ;
    case "poke:cobalt_potion": {
      item.source.addEffect("night_vision", 3600);
      item.source.addEffect("regeneration", 2400);
    }
    case "poke:cobalt_soup":
      {
        item.source.addEffect("night_vision", 2400, { showParticles: false });
        return;
      }
      ;
    case "poke:root_beer":
      {
        item.source.addEffect("speed", 600, { amplifier: 4 });
        return;
      }
      ;
    case "poke:pumpkin_spice":
      {
        item.source.addEffect("invisibility", 600);
        item.source.addEffect("speed", 600, { amplifier: 4 });
        return;
      }
      ;
    case "poke:crimson_sporeshroom_stew":
      {
        item.source.addEffect("fire_resistance", 1200);
        return;
      }
      ;
    case "poke:warped_sporeshroom_stew":
      {
        item.source.addEffect("fire_resistance", 1200);
        return;
      }
      ;
    case "poke:hellish_soup":
      {
        item.source.addEffect("fire_resistance", 1200);
        return;
      }
      ;
    case "poke:nebula_noodles":
      {
        item.source.addEffect("strength", 600, { amplifier: 7 });
        return;
      }
      ;
    case "poke:milk_bottle":
      {
        item.source.runCommandAsync("effect @s clear");
        return;
      }
      ;
    case "poke:demonic_potion":
      {
        item.source.runCommandAsync("function poke/pfe/demonic_potion");
        return;
      }
      ;
    case "poke:hellish_potion":
      {
        item.source.runCommandAsync("function poke/pfe/hellish_potion");
        return;
      }
      ;
    case "poke:nebula_potion":
      {
        item.source.runCommandAsync("function poke/pfe/nebula_potion");
        return;
      }
      ;
    case "poke:void_potion":
      {
        item.source.runCommandAsync("function poke/pfe/void_potion");
        return;
      }
      ;
    case "poke:death_potion":
      {
        item.source.runCommandAsync("kill @s");
        return;
      }
      ;
    case "poke:rotten_chicken":
      {
        item.source.addEffect("nausea", 400);
        return;
      }
      ;
    case "poke:golden_chicken":
      {
        item.source.addEffect("village_hero", 400, { amplifier: 1 });
        return;
      }
      ;
    case "poke:banished_star_x10":
      {
        item.source.runCommandAsync("damage @a[r=100] 32767000 entity_attack entity @s");
        return;
      }
      ;
    case "poke:banished_star_x9":
      {
        item.source.runCommandAsync("damage @s 32767000 entity_attack");
        return;
      }
      ;
  }
  return;
});
var pfeProjItems = ["poke:volt_ring", "poke:nuke_ring", "poke:necromancer_staff", "poke:ring_3", "poke:ring_4", "poke:ring_2", "poke:arrow_ring", "poke:shade_ring"];
world2.afterEvents.itemUse.subscribe((data) => {
  if (!pfeProjItems.includes(data.itemStack.typeId))
    return;
  const headLocate = data.source.getHeadLocation();
  const ticks = data.itemStack.getComponent("cooldown").cooldownTicks;
  if (data.itemStack.getComponent("cooldown").getCooldownTicksRemaining(data.source) != ticks - 1)
    return;
  if (pfeProjItems.includes(data.itemStack.typeId)) {
    const pTag = data.itemStack.getTags();
    const angle = data.source.getViewDirection();
    const projEntity = data.source.dimension.spawnEntity("" + pTag, headLocate);
    const projComp = projEntity.getComponent("projectile");
    data.source.playSound("random.bow");
    projComp.owner = data.source;
    projComp.shoot(angle);
  }
  ;
  if (world2.getPlayers({
    gameMode: GameMode2.creative
  }).includes(data.source))
    return;
  const newItem = damage_item(data.itemStack);
  data.source.getComponent(EntityComponentTypes2.Equippable).setEquipment(EquipmentSlot2.Mainhand, newItem);
  if (!newItem) {
    data.source.playSound("random.break");
  }
  return;
});
var hit_effects = ["poke:astral_scythe", "poke:medic_scythe", "poke:demonic_sword", "poke:hellish_sword", "poke:godly_sword", "poke:holy_sword", "poke:radium_sword", "poke:astral_sword", "poke:shade_sword", "poke:nebula_sword", "poke:amethyst_scythe", "poke:holy_scythe", "poke:hellish_scythe", "poke:godly_scythe", "poke:galactic_scythe", "poke:demonic_slasher", "poke:ember_scythe", "poke:death_scythe", "poke:void_scythe", "poke:radium_scythe", "poke:netherite_scythe", "poke:diamond_scythe", "poke:shade_scythe", "poke:onyx_scythe", "poke:iron_scythe", "poke:gold_scythe", "poke:emerald_scythe", "poke:nebula_scythe", "poke:cobalt_scythe", "poke:circuit_sword", "poke:ban_hammer"];
world2.afterEvents.entityHitEntity.subscribe((data) => {
  if (data.damagingEntity.hasComponent(EntityComponentTypes2.Equippable)) {
    if (data.damagingEntity.getComponent(EntityComponentTypes2.Equippable).getEquipment(EquipmentSlot2.Mainhand) == void 0)
      return;
    if (!hit_effects.includes(data.damagingEntity.getComponent(EntityComponentTypes2.Equippable).getEquipment(EquipmentSlot2.Mainhand).type.id))
      return;
    const itemId = data.damagingEntity.getComponent(EntityComponentTypes2.Equippable).getEquipment(EquipmentSlot2.Mainhand).typeId;
    switch (itemId) {
      case "poke:demonic_sword": {
        data.hitEntity.addEffect("slowness", 100, { amplifier: 3 });
        return;
      }
      case "poke:hellish_blade": {
        data.hitEntity.addEffect("slowness", 40, { amplifier: 3 });
        return;
      }
      case "poke:godly_sword": {
        data.damagingEntity.addEffect("strength", 100, { amplifier: 2 });
        return;
      }
      case "poke:holy_sword": {
        data.damagingEntity.addEffect("strength", 40, { amplifier: 1 });
        return;
      }
      case "poke:astral_sword": {
        data.damagingEntity.addEffect("strength", 100, { amplifier: 2 });
        return;
      }
      case "poke:shade_sword": {
        data.hitEntity.addEffect("slowness", 40, { amplifier: 2 });
        data.hitEntity.addEffect("wither", 60, { amplifier: 1 });
        return;
      }
      case "poke:radium_sword": {
        data.hitEntity.addEffect("slowness", 220, { amplifier: 3 });
        data.hitEntity.addEffect("wither", 240, { amplifier: 4 });
        return;
      }
      case "poke:amethyst_scythe": {
        data.damagingEntity.addEffect("speed", 100, { amplifier: 4 });
        data.hitEntity.addEffect("blindness", 20);
        return;
      }
      case "poke:demonic_slasher": {
        data.damagingEntity.addEffect("speed", 100, { amplifier: 7 });
        data.hitEntity.addEffect("wither", 80, { amplifier: 1 });
        return;
      }
      case "poke:gold_scythe": {
        data.damagingEntity.addEffect("speed", 100, { amplifier: 2 });
        data.damagingEntity.addEffect("haste", 600, { amplifier: 2 });
        return;
      }
      case "poke:emerald_scythe": {
        data.damagingEntity.addEffect("speed", 100, { amplifier: 2 });
        data.damagingEntity.addEffect("village_hero", 2400, { amplifier: 1 });
        return;
      }
      case "poke:iron_scythe": {
        data.damagingEntity.addEffect("speed", 100, { amplifier: 2 });
        return;
      }
      case "poke:onyx_scythe": {
        data.damagingEntity.addEffect("speed", 200, { amplifier: 5 });
        data.damagingEntity.addEffect("jump_boost", 100, { amplifier: 2 });
        data.hitEntity.addEffect("weakness", 120, { amplifier: 2 });
        return;
      }
      case "poke:godly_scythe": {
        data.damagingEntity.addEffect("speed", 200, { amplifier: 6 });
        data.damagingEntity.addEffect("slow_falling", 2400);
        data.damagingEntity.addEffect("jump_boost", 1200, { amplifier: 3 });
        return;
      }
      case "poke:hellish_scythe": {
        data.damagingEntity.addEffect("speed", 100, { amplifier: 7 });
        data.damagingEntity.addEffect("fire_resistance", 2400);
        data.hitEntity.addEffect("mining_fatigue", 400, { amplifier: 1 });
        return;
      }
      case "poke:holy_scythe": {
        data.damagingEntity.addEffect("speed", 200, { amplifier: 6 });
        data.damagingEntity.addEffect("slow_falling", 2400, { amplifier: 1 });
        data.hitEntity.addEffect("darkness", 400);
        return;
      }
      case "poke:shade_scythe": {
        data.damagingEntity.addEffect("absorption", 600, { amplifier: 1 });
        data.damagingEntity.addEffect("strength", 100, { amplifier: 1 });
        data.hitEntity.addEffect("slowness", 160, { amplifier: 2 });
        return;
      }
      case "poke:diamond_scythe": {
        data.damagingEntity.addEffect("speed", 160, { amplifier: 3 });
        data.hitEntity.addEffect("weakness", 100, { amplifier: 1 });
        data.hitEntity.addEffect("blindness", 80);
        return;
      }
      case "poke:netherite_scythe": {
        data.damagingEntity.addEffect("speed", 160, { amplifier: 3 });
        data.hitEntity.addEffect("hunger", 120, { amplifier: 1 });
        data.hitEntity.addEffect("slowness", 80, { amplifier: 2 });
        return;
      }
      case "poke:radium_scythe": {
        data.damagingEntity.addEffect("speed", 100, { amplifier: 5 });
        data.hitEntity.addEffect("nausea", 80, { amplifier: 1 });
        data.hitEntity.addEffect("fatal_poison", 160, { amplifier: 2 });
        return;
      }
      case "poke:medic_scythe": {
        data.damagingEntity.addEffect("speed", 100, { amplifier: 6 });
        data.damagingEntity.addEffect("health_boost", 2400, { amplifier: 2 });
        return;
      }
      case "poke:galactic_scythe": {
        data.damagingEntity.addEffect("speed", 100, { amplifier: 9 });
        data.damagingEntity.addEffect("fire_resistance", 300);
        data.hitEntity.addEffect("wither", 80, { amplifier: 2 });
        data.hitEntity.addEffect("weakness", 80, { amplifier: 2 });
        return;
      }
      case "poke:astral_scythe": {
        data.damagingEntity.addEffect("speed", 120, { amplifier: 9 });
        data.damagingEntity.addEffect("fire_resistance", 300);
        data.hitEntity.addEffect("wither", 120, { amplifier: 2 });
        data.hitEntity.addEffect("weakness", 120, { amplifier: 3 });
        return;
      }
      case "poke:ember_scythe": {
        data.damagingEntity.addEffect("speed", 100, { amplifier: 6 });
        data.hitEntity.addEffect("nausea", 80, { amplifier: 1 });
        data.hitEntity.addEffect("blindness", 80);
        return;
      }
      case "poke:void_scythe": {
        data.damagingEntity.addEffect("speed", 200, { amplifier: 6 });
        data.hitEntity.runCommand("function poke/pfe/void_scythe");
        return;
      }
      case "poke:death_scythe": {
        data.damagingEntity.addEffect("speed", 200, { amplifier: 6 });
        data.hitEntity.runCommand("function poke/pfe/death_scythe");
        return;
      }
      case "poke:nebula_scythe": {
        data.damagingEntity.runCommand("function poke/pfe/nebula_scythe");
        data.hitEntity.addEffect("wither", 80, { amplifier: 3 });
        return;
      }
      case "poke:cobalt_scythe": {
        data.damagingEntity.addEffect("speed", 100, { amplifier: 6 });
        data.hitEntity.addEffect("wither", 40, { amplifier: 1 });
        return;
      }
      case "poke:nebula_sword": {
        data.damagingEntity.addEffect("strength", 40, { amplifier: 4 });
        data.hitEntity.addEffect("weakness", 20, { amplifier: 2 });
        return;
      }
      case "poke:ban_hammer": {
        data.damagingEntity.addEffect("strength", 40, { amplifier: 4 });
        data.hitEntity.addEffect("weakness", 20, { amplifier: 2 });
        return;
      }
      case "poke:circuit_sword": {
        data.damagingEntity.runCommand("function poke/pfe/circuit_sword");
        data.hitEntity.addEffect("blindness", 100);
        return;
      }
    }
    return;
  }
});
var PFETrapdoor = class {
  onPlayerInteract(data) {
    const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`;
    if (data.block.permutation.hasTag("pfe_trapdoor_open") == true) {
      data.block.setPermutation(data.block.permutation.withState("poke:trapdoor_open", "no"));
      data.block.dimension.runCommandAsync(`playsound open.iron_trapdoor @a ${blockLocation}`);
      return;
    } else {
      data.block.setPermutation(data.block.permutation.withState("poke:trapdoor_open", "yes"));
      data.block.dimension.runCommandAsync(`playsound close.iron_trapdoor @a ${blockLocation}`);
      return;
    }
  }
};
var PFEFortune = class {
  onPlayerDestroy(data) {
    const equippableComponent = data.player?.getComponent(EntityComponentTypes2.Equippable);
    if (equippableComponent === void 0)
      return;
    if (!equippableComponent.getEquipment(EquipmentSlot2.Mainhand)?.hasComponent(ItemComponentTypes2.Enchantable))
      return;
    const enchantableComponent = equippableComponent.getEquipment(EquipmentSlot2.Mainhand)?.getComponent(ItemComponentTypes2.Enchantable);
    if (!enchantableComponent.hasEnchantment(MinecraftEnchantmentTypes.Fortune))
      return;
    let fortuneLevel = enchantableComponent.getEnchantment(MinecraftEnchantmentTypes.Fortune).level;
    let rng = Math.round(Math.random());
    const blockLocation = `${data.block.x} ${data.block.y} ${data.block.z}`;
    const blockId = data.destroyedBlockPermutation.type.id.substring(5);
    if (data.player?.getGameMode() == GameMode2.survival) {
      if (fortuneLevel == 3) {
        data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}"`);
        data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}"`);
        if (rng == 0)
          return;
        data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}"`);
        return;
      }
      if (fortuneLevel == 2) {
        data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}"`);
        if (rng == 0)
          return;
        data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}"`);
        return;
      }
      if (fortuneLevel == 1) {
        if (rng == 0)
          return;
        data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}"`);
        return;
      }
      return;
    }
    return;
  }
};
var PFESlabs = class {
  onPlayerInteract(data) {
    if (data.block.permutation.getState("poke:double") == true)
      return;
    const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`;
    const slabId = data.block.typeId;
    const equippableComponent = data.player.getComponent(EntityComponentTypes2.Equippable);
    const mainhand = equippableComponent.getEquipment(EquipmentSlot2.Mainhand);
    if (mainhand != void 0) {
      if (mainhand.typeId == slabId && (data.block.permutation.getState("minecraft:vertical_half") == "bottom" && data.face == Direction.Up || data.block.permutation.getState("minecraft:vertical_half") == "top" && data.face == Direction.Down) && data.block.permutation.getState("poke:double") == false) {
        var itemStackAmount = mainhand.amount - 1;
        data.block.setPermutation(data.block.permutation.withState("poke:double", true));
        data.block.dimension.runCommandAsync(`playsound use.stone @a ${blockLocation}`);
        if (data.player?.getGameMode() == "creative")
          return;
        if (itemStackAmount <= 0) {
          equippableComponent.setEquipment(EquipmentSlot2.Mainhand, new ItemStack2("minecraft:air", 1));
          return;
        }
        equippableComponent.setEquipment(EquipmentSlot2.Mainhand, new ItemStack2(slabId, itemStackAmount));
        return;
      } else
        return;
    }
    return;
  }
};
var PFESlabLoot = class {
  onPlayerDestroy(data) {
    const block_location = data.block.location;
    const gm = data.player?.getGameMode();
    const blockId = data.destroyedBlockPermutation.type.id;
    const blockState = data.destroyedBlockPermutation.getState("poke:double");
    if (gm == "survival") {
      if (blockState == true) {
        data.dimension.spawnItem(new ItemStack2(blockId, 1), block_location);
        return;
      }
      return;
    }
    return;
  }
};
var PFEBlockSeat = class {
  onPlayerInteract(data) {
    const BlockLocation = {
      x: data.block.location.x + 0.5,
      y: data.block.location.y + 0.5,
      z: data.block.location.z + 0.5
    };
    const slabId = data.block.typeId;
    const mainhand = data.player.getComponent(EntityComponentTypes2.Equippable).getEquipment("Mainhand");
    const options = {
      type: "poke:seat"
    };
    if (mainhand?.typeId != slabId && !data.player?.isSneaking) {
      if (data.block.permutation.getState("minecraft:vertical_half") == "bottom" && data.block.permutation.getState("poke:double") == false) {
        if (data.dimension.getEntities(options).length > 0) {
          return;
        } else {
          data.dimension.spawnEntity("poke:seat", BlockLocation).getComponent("minecraft:rideable").addRider(data.player);
          return;
        }
      }
    }
    return;
  }
};
var PFEPhantomicConduit = class {
  onTick(data) {
    var block_location_x = data.block.x;
    var block_location_y = data.block.y;
    var block_location_z = data.block.z;
    if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 1));
      data.dimension.runCommand("execute positioned " + block_location_x + " " + block_location_y + " " + block_location_z + " as @e[r=50,family=phantom] run damage @s 20");
      return;
    }
    if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 0));
      return;
    }
    return;
  }
};
var PFEDemonicAConduit = class {
  onTick(data) {
    const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
    if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 1));
      data.dimension.runCommand("execute positioned " + block_location + " as @e[r=50,family=pfe:demonic_allay] run damage @s 20");
      return;
    }
    if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 0));
      return;
    }
    return;
  }
};
var PFECobbleGen = class {
  onTick(data) {
    if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 1));
      if (data.block.above()?.typeId != "minecraft:air")
        return;
      data.block.above()?.setType("minecraft:cobblestone");
      return;
    }
    if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 0));
      return;
    }
    return;
  }
};
var PFECobbler = class {
  onTick(data) {
    const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
    if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 1));
      data.dimension.runCommand(`execute positioned ${block_location} run structure load poke:cobblestone_item ~ ~-1 ~`);
      return;
    }
    if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 0));
      return;
    }
    return;
  }
};
var PFEBlockBreaker = class {
  onTick(data) {
    const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
    if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 1));
      data.dimension.runCommand(`execute positioned ${block_location} unless block ~ ~-1 ~ bedrock run setblock ~ ~-1 ~ air destroy`);
      return;
    }
    if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 0));
      return;
    }
    return;
  }
};
var PFEDirter = class {
  onTick(data) {
    if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 1));
      switch (data.block.typeId) {
        case "poke:dirter_east": {
          if (data.block.east()?.typeId == "minecraft:cobblestone") {
            data.block.east()?.setType("minecraft:dirt");
            break;
          }
        }
        case "poke:dirter_west": {
          if (data.block.west()?.typeId == "minecraft:cobblestone") {
            data.block.west()?.setType("minecraft:dirt");
            break;
          }
        }
        case "poke:dirter_south": {
          if (data.block.south()?.typeId == "minecraft:cobblestone") {
            data.block.south()?.setType("minecraft:dirt");
            break;
          }
        }
        case "poke:dirter_north": {
          if (data.block.north()?.typeId == "minecraft:cobblestone") {
            data.block.north()?.setType("minecraft:dirt");
            break;
          }
        }
        case "poke:dirter_up": {
          if (data.block.above()?.typeId == "minecraft:cobblestone") {
            data.block.above()?.setType("minecraft:dirt");
            break;
          }
        }
        case "poke:dirter_down": {
          if (data.block.below()?.typeId == "minecraft:cobblestone") {
            data.block.below()?.setType("minecraft:dirt");
            break;
          }
        }
        case "poke:dirter": {
          if (data.block.below()?.typeId == "minecraft:cobblestone") {
            data.block.below()?.setType("minecraft:dirt");
            return;
          }
        }
      }
      return;
    }
    if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 0));
      return;
    }
    return;
  }
};
var PFEDuster = class {
  onTick(data) {
    if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 1));
      switch (data.block.typeId) {
        case "poke:duster_east": {
          if (data.block.east()?.typeId == "minecraft:dirt") {
            data.block.east()?.setType("minecraft:sand");
            break;
          }
          if (data.block.east()?.typeId == "minecraft:cobblestone") {
            data.block.east()?.setType("minecraft:gravel");
            break;
          }
        }
        case "poke:duster_west": {
          if (data.block.west()?.typeId == "minecraft:dirt") {
            data.block.west()?.setType("minecraft:sand");
            break;
          }
          if (data.block.west()?.typeId == "minecraft:cobblestone") {
            data.block.west()?.setType("minecraft:gravel");
            break;
          }
        }
        case "poke:duster_south": {
          if (data.block.south()?.typeId == "minecraft:dirt") {
            data.block.south()?.setType("minecraft:sand");
            break;
          }
          if (data.block.south()?.typeId == "minecraft:cobblestone") {
            data.block.south()?.setType("minecraft:gravel");
            break;
          }
        }
        case "poke:duster_north": {
          if (data.block.north()?.typeId == "minecraft:dirt") {
            data.block.north()?.setType("minecraft:sand");
            break;
          }
          if (data.block.north()?.typeId == "minecraft:cobblestone") {
            data.block.north()?.setType("minecraft:gravel");
            break;
          }
        }
        case "poke:duster_up": {
          if (data.block.above()?.typeId == "minecraft:dirt") {
            data.block.above()?.setType("minecraft:sand");
            break;
          }
          if (data.block.above()?.typeId == "minecraft:cobblestone") {
            data.block.above()?.setType("minecraft:gravel");
            break;
          }
        }
        case "poke:duster_down": {
          if (data.block.below()?.typeId == "minecraft:dirt") {
            data.block.below()?.setType("minecraft:sand");
            break;
          }
          if (data.block.below()?.typeId == "minecraft:cobblestone") {
            data.block.below()?.setType("minecraft:gravel");
            break;
          }
        }
        case "poke:duster": {
          if (data.block.below()?.typeId == "minecraft:dirt") {
            data.block.below()?.setType("minecraft:sand");
            break;
          }
          if (data.block.below()?.typeId == "minecraft:cobblestone") {
            data.block.below()?.setType("minecraft:gravel");
            break;
          }
        }
      }
      return;
    }
    if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 0));
      return;
    }
    return;
  }
};
var PFEMagnetBlock = class {
  onTick(data) {
    const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
    if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 1));
      data.dimension.runCommand(`execute positioned ${block_location} as @e[type=item,r=10] run tp @s ${block_location}`);
      return;
    }
    if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 0));
      return;
    }
    return;
  }
};
var PFEBulbs = class {
  onPlayerInteract(data) {
    const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
    let light_color = data.block.permutation.getState("pfe:color");
    let sound_pitch = 1 + light_color / 10;
    if (data.block.permutation.getState("pfe:color") == 15) {
      data.block.setPermutation(data.block.permutation.withState("pfe:color", 0));
      data.block.dimension.runCommandAsync(`playsound block.copper_bulb.turn_on @a  ${block_location} 1 ${sound_pitch}`);
      return;
    } else {
      data.block.setPermutation(
        data.block.permutation.withState("pfe:color", light_color + 1)
      );
      data.block.dimension.runCommandAsync(`playsound block.copper_bulb.turn_on @a ${block_location} 1 ${sound_pitch}`);
      return;
    }
  }
};
var PFECalibrate = class {
  onPlayerInteract(data) {
    const OldId = ["poke:duster", "poke:dirter"];
    const bId = data.block.typeId;
    const newBlock = `${bId.substring(0, bId.lastIndexOf("_"))}_${data.face.toLowerCase()}`;
    if (newBlock == bId)
      return;
    if (OldId.includes(bId)) {
      data.block.setType(bId + "_up");
      return;
    }
    data.block.setType(newBlock);
    data.dimension.playSound("poke.calibrate", data.block.center());
    return;
  }
};
var PFECaliBlockBreaker = class {
  onTick(data) {
    const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
    if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 1));
      if (data.block.typeId == "poke:block_breaker_east") {
        data.dimension.runCommand("execute positioned " + block_location + " unless block ~1 ~ ~ bedrock run setblock ~1 ~ ~ air destroy");
        return;
      }
      if (data.block.typeId == "poke:block_breaker_west") {
        data.dimension.runCommand("execute positioned " + block_location + " unless block ~-1 ~ ~ bedrock run setblock ~-1 ~ ~ air destroy");
        return;
      }
      if (data.block.typeId == "poke:block_breaker_south") {
        data.dimension.runCommand("execute positioned " + block_location + " unless block ~ ~ ~1 bedrock run setblock ~ ~ ~1 air destroy");
        return;
      }
      if (data.block.typeId == "poke:block_breaker_north") {
        data.dimension.runCommand("execute positioned " + block_location + " unless block ~ ~ ~-1 bedrock run setblock ~ ~ ~-1 air destroy");
        return;
      }
      if (data.block.typeId == "poke:block_breaker_up") {
        data.dimension.runCommand("execute positioned " + block_location + " unless block ~ ~1 ~ bedrock run setblock ~ ~1 ~ air destroy");
        return;
      }
      if (data.block.typeId == "poke:block_breaker_down") {
        data.dimension.runCommand("execute positioned " + block_location + " unless block ~ ~-1 ~ bedrock run setblock ~ ~-1 ~ air destroy");
        return;
      }
      return;
    }
    ;
    if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 0));
      return;
    }
    return;
  }
};
var PFECaliCobbleGen = class {
  onTick(data) {
    if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 1));
      if (data.block.typeId == "poke:calibrated_cobblestone_generator_east") {
        if (data.block.east()?.typeId != "minecraft:air")
          return;
        data.block.east()?.setType("minecraft:cobblestone");
        return;
      }
      if (data.block.typeId == "poke:calibrated_cobblestone_generator_west") {
        if (data.block.west()?.typeId != "minecraft:air")
          return;
        data.block.west()?.setType("minecraft:cobblestone");
        return;
      }
      if (data.block.typeId == "poke:calibrated_cobblestone_generator_south") {
        if (data.block.south()?.typeId != "minecraft:air")
          return;
        data.block.south()?.setType("minecraft:cobblestone");
        return;
      }
      if (data.block.typeId == "poke:calibrated_cobblestone_generator_north") {
        if (data.block.north()?.typeId != "minecraft:air")
          return;
        data.block.north()?.setType("minecraft:cobblestone");
        return;
      }
      if (data.block.typeId == "poke:calibrated_cobblestone_generator_up") {
        if (data.block.above()?.typeId != "minecraft:air")
          return;
        data.block.above()?.setType("minecraft:cobblestone");
        return;
      }
      if (data.block.typeId == "poke:calibrated_cobblestone_generator_down") {
        if (data.block.below()?.typeId != "minecraft:air")
          return;
        data.block.below()?.setType("minecraft:cobblestone");
        return;
      }
      return;
    }
    if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== void 0) {
      data.block.setPermutation(data.block.permutation.withState("pfe:active", 0));
      return;
    }
    return;
  }
};
var PFECrop = class {
  onRandomTick(data) {
    var growth_state = data.block.permutation.getState("poke:growth_stage");
    var growth_stage = growth_state + 1;
    if (growth_state != void 0 || 6) {
      data.block.setPermutation(data.block.permutation.withState("poke:growth_stage", growth_stage));
      return;
    }
    return;
  }
  onPlayerInteract(data) {
    const equippableComponent = data.player?.getComponent(EntityComponentTypes2.Equippable);
    const mainhandItem = equippableComponent.getEquipment(EquipmentSlot2.Mainhand);
    if (mainhandItem === void 0)
      return;
    const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
    let growth_state = data.block.permutation.getState("poke:growth_stage");
    let growth_stage = growth_state + Math.round(Math.random() * 3);
    var itemAfterUse = mainhandItem.amount;
    var itemAfterUse1 = itemAfterUse - 1;
    if (growth_stage > 6) {
      growth_stage = 6;
    }
    if (mainhandItem.typeId == MinecraftItemTypes.BoneMeal && growth_state != 6) {
      data.block.setPermutation(data.block.permutation.withState("poke:growth_stage", growth_stage));
      data.dimension.runCommand("playsound item.bone_meal.use @a " + block_location);
      data.dimension.runCommand("particle minecraft:crop_growth_emitter " + block_location);
      if (data.player?.getGameMode() != GameMode2.creative) {
        if (itemAfterUse1 == 0) {
          data.player?.runCommand("clear @s bone_meal 0 1");
          return;
        }
        equippableComponent.setEquipment(EquipmentSlot2.Mainhand, new ItemStack2(mainhandItem.typeId, itemAfterUse1));
        return;
      }
      return;
    }
    return;
  }
};
var PFELavaSponge = class {
  onTick(data) {
    const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
    data.dimension.runCommand("execute positioned " + block_location + " run function poke/pfe/lava_sponge");
    return;
  }
};
var PFEBarometer = class {
  onTick(data) {
    var weather = data.block.permutation.getState("pfe:weather");
    if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== void 0) {
      if (data.dimension.getWeather() == "Clear" && weather != 0) {
        data.block.setPermutation(data.block.permutation.withState("pfe:weather", 0));
        return;
      }
      if (data.dimension.getWeather() != "Thunder" && data.dimension.getWeather() == "Rain" && weather != 1) {
        data.block.setPermutation(data.block.permutation.withState("pfe:weather", 1));
        return;
      }
      if (data.dimension.getWeather() == "Thunder" && weather != 2) {
        data.block.setPermutation(data.block.permutation.withState("pfe:weather", 2));
        return;
      }
      return;
    }
  }
};
var PFECassette = class {
  onUse(data) {
    const id = data.itemStack.typeId;
    const trackId = id.substring(id.lastIndexOf("_")).substring(1);
    if (data.source.isSneaking) {
      data.source.queueMusic(`poke.record.${trackId}`);
      data.source.playSound("poke.cassette_activate");
      data.source.sendMessage({ translate: `translation.poke:trackQueued` });
      return;
    } else {
      data.source.playMusic(`poke.record.${trackId}`, { fade: 2.5 });
      data.source.playSound("poke.cassette_activate");
    }
    return;
  }
};
var PFEWindzooka = class {
  onUse(data) {
    if (data.itemStack === void 0)
      return;
    const equippableComponent = data.source.getComponent(EntityComponentTypes2.Equippable);
    if (equippableComponent === void 0)
      return;
    const vierDirection = data.source.getViewDirection();
    const location = data.source.getHeadLocation();
    const id = data.itemStack.getTags();
    const cooldownComp = data.itemStack.getComponent("minecraft:cooldown");
    if (data.itemStack.typeId == "poke:windzooka") {
      data.source.applyKnockback(vierDirection.x, vierDirection.z, -7, -vierDirection.y * 4);
      data.source.playSound("wind_charge.burst");
      data.source.dimension.spawnParticle("minecraft:wind_explosion_emitter", location);
    } else {
      data.source.applyKnockback(vierDirection.x, vierDirection.z, 7, -vierDirection.y * -4);
      data.source.playSound("wind_charge.burst");
      data.source.dimension.spawnParticle("minecraft:wind_explosion_emitter", location);
      data.source.dimension.spawnParticle("poke:blazooka_flame", location);
    }
    data.source.runCommand("" + id);
    cooldownComp.startCooldown(data.source);
    const newItem = damage_item(data.itemStack);
    equippableComponent.setEquipment(EquipmentSlot2.Mainhand, newItem);
    if (!newItem) {
      data.source.playSound("random.break");
    }
    return;
  }
};
var PFEOnUse = class {
  onUse(data) {
    if (data.itemStack === void 0)
      return;
    const ItemTags = data.itemStack.getTags().toString();
    let Command = ItemTags.substring(ItemTags.indexOf("pfe:Command:"), ItemTags.indexOf(":pfeCommandEnd")).substring(12);
    data.source.runCommand("" + Command);
    const cooldownComp = data.itemStack.getComponent("minecraft:cooldown");
    if (cooldownComp != void 0)
      cooldownComp.startCooldown(data.source);
    if (!data.itemStack.hasComponent("minecraft:durability")) {
      return;
    }
    const newItem = damage_item(data.itemStack);
    const equippableComponent = data.source.getComponent(EntityComponentTypes2.Equippable);
    equippableComponent.setEquipment(EquipmentSlot2.Mainhand, newItem);
    if (!newItem) {
      data.source.playSound("random.break");
    }
    return;
  }
};
var PFEUpgrader = class {
  onUseOn(data) {
    const player = data.source;
    const equippableComponent = data.source.getComponent(EntityComponentTypes2.Equippable);
    const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
    const itemIds = data.itemStack.typeId;
    const itemId = itemIds.substring(5);
    data.source.runCommandAsync(`execute positioned ${block_location} run function poke/pfe/${itemId}`);
    if (player.getGameMode() == GameMode2.creative)
      return;
    const newItem = damage_item(data.itemStack);
    equippableComponent.setEquipment(EquipmentSlot2.Mainhand, newItem);
    if (!newItem) {
      player.playSound("random.break");
    }
    return;
  }
};
var PFESpawnEgg = class {
  onUseOn(data) {
    const player = data.source;
    const faceLoc = data.faceLocation;
    const blockFace = data.blockFace;
    var faceLocX = --faceLoc.x;
    var faceLocY = --faceLoc.y;
    var faceLocZ = --faceLoc.z;
    var amount = data.itemStack.amount;
    const equippableComponent = data.source.getComponent(EntityComponentTypes2.Equippable);
    if (blockFace == "North") {
      var faceLocZ = faceLocZ + 1.5;
    }
    if (blockFace == "South") {
      var faceLocZ = faceLocZ - 1.5;
    }
    if (blockFace == "East") {
      var faceLocX = faceLocX - 1.5;
    }
    if (blockFace == "West") {
      var faceLocX = faceLocX + 1.5;
    }
    if (blockFace == "Up") {
      var faceLocY = faceLocY - 1.5;
    }
    if (blockFace == "Down") {
      var faceLocY = faceLocY + 2;
    }
    const vec3 = { x: -faceLocX, y: -faceLocY, z: -faceLocZ };
    const mobId = data.itemStack.getTags();
    player.dimension.spawnEntity("" + mobId, vec3);
    if (player.getGameMode() == "creative")
      return;
    if (amount <= 1) {
      equippableComponent.setEquipment(EquipmentSlot2.Mainhand, new ItemStack2("minecraft:air", 1));
      return;
    }
    equippableComponent.setEquipment(EquipmentSlot2.Mainhand, new ItemStack2(data.itemStack.typeId, amount - 1));
    return;
  }
};
var PFEBowAim = class {
  onUse(data) {
    const cPlayers = data.source.dimension.getPlayers({ excludeNames: ["" + data.source.name] });
    var cPlayersLength = cPlayers.length;
    for (var i = cPlayersLength; i > 0; i--) {
      data.source.playAnimation("animation.humanoid.bow_and_arrow", { stopExpression: "!q.is_using_item", players: [cPlayers[i - 1].name] });
    }
    return;
  }
};
var PFECrossbowAim = class {
  onUse(data) {
    const cPlayers = data.source.dimension.getPlayers({ excludeNames: ["" + data.source.name] });
    var cPlayersLength = cPlayers.length;
    data.source.playAnimation("animation.player.first_person.crossbow_equipped", { stopExpression: "!q.is_using_item", players: [data.source.name + ""] });
    for (var i = cPlayersLength; i > 0; i--) {
      data.source.playAnimation("third_person_crossbow_equipped", { stopExpression: "!q.is_using_item", players: [cPlayers[i - 1].name] });
    }
    return;
  }
};
var PFEBlockInteract = class {
  onPlayerInteract(data) {
    switch (data.block.typeId) {
      case "poke:listener_trophy": {
        data.player?.playMusic("record.listen", { fade: 5 });
        return;
      }
      case "poke:furnace_golem_trophy": {
        data.player?.playMusic("poke.record.pigstep", { fade: 5 });
        return;
      }
      case "poke:cobalt_golem_block":
        {
          data.dimension.spawnEntity("poke:cobalt_golem", data.block.location);
          data.block.setType("minecraft:air");
          return;
        }
        return;
    }
  }
};
var logList = ["minecraft:acacia_wood", "minecraft:birch_wood", "minecraft:cherry_wood", "minecraft:dark_oak_wood", "minecraft:jungle_wood", "minecraft:mangrove_wood", "minecraft:oak_wood", "minecraft:spruce_wood", "minecraft:acacia_log", "minecraft:birch_log", "minecraft:cherry_log", "minecraft:dark_oak_log", "minecraft:jungle_log", "minecraft:mangrove_log", "minecraft:oak_log", "minecraft:spruce_log"];
world2.beforeEvents.playerBreakBlock.subscribe((data) => {
  if (data.itemStack == void 0)
    return;
  if (data.itemStack.typeId != "poke:nebula_logger")
    return;
  var block = data.block;
  var veinMiner = logList.includes(block.typeId);
  if (veinMiner) {
    let dimension = block.dimension;
    let toBreak = [block.location];
    let checked = /* @__PURE__ */ new Set();
    while (toBreak.length > 0) {
      let location = toBreak.shift();
      let key = `${location.x},${location.y},${location.z}`;
      if (checked.has(key))
        continue;
      checked.add(key);
      let currentBlock = dimension.getBlock(location);
      if (currentBlock && logList.includes(currentBlock.typeId)) {
        system3.run(() => {
          dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} air destroy`);
        });
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
          { x: location.x - 1, y: location.y + 1, z: location.z - 1 }
        ];
        for (let loc of adjacent) {
          toBreak.push(loc);
        }
      }
    }
    data.cancel = true;
  }
});
var PFEDodge = class {
  onUse(data) {
    if (data.itemStack === void 0)
      return;
    const cooldownComponent = data.itemStack.getComponent("minecraft:cooldown");
    const equippableComponent = data.source.getComponent(EntityComponentTypes2.Equippable);
    const moveDir = data.source.getVelocity();
    var amount = data.itemStack.amount;
    data.source.dimension.spawnParticle("minecraft:wind_explosion_emitter", data.source.location);
    data.source.applyKnockback(moveDir.x, moveDir.z, 5, moveDir.y + 0.5);
    data.source.playSound("wind_charge.burst");
    if (data.source.getGameMode() == GameMode2.creative)
      return;
    cooldownComponent.startCooldown(data.source);
    if (amount <= 1) {
      equippableComponent.setEquipment(EquipmentSlot2.Mainhand, new ItemStack2("minecraft:air", 1));
      return;
    }
    equippableComponent.setEquipment(EquipmentSlot2.Mainhand, new ItemStack2(data.itemStack.typeId, amount - 1));
    return;
  }
};
var PFE8Ball = class {
  onPlayerInteract(data) {
    var RNG = Math.floor(Math.random() * 19);
    data.player?.runCommand('tellraw @s {"rawtext":[{"translate":"translation.poke:8ball' + RNG + '","with":{"rawtext":[{"text":""}]}}]}');
    return;
  }
};
var pfeWallNoC = ["minecraft:piston_arm_collision", "minecraft:sticky_piston_arm_collision", "minecraft:air", "minecraft:water", "minecraft:lava", "minecraft:waterlily", "minecraft:flowing_water", "minecraft:flowing_lava", "minecraft:short_grass", "minecraft:tall_grass", "minecraft:seagrass", "minecraft:kelp", "minecraft:oak_leaves", "minecraft:acacia_leaves", "minecraft:azalea_leaves", "minecraft:azalea_leaves_flowered", "minecraft:birch_leaves", "minecraft:cherry_leaves", "minecraft:dark_oak_leaves", "minecraft:jungle_leaves", "minecraft:mangrove_leaves", "minecraft:spruce_leaves"];
var PFEWall = class {
  onPlace(data) {
    const northB = data.block.north();
    const southB = data.block.south();
    const eastB = data.block.east();
    const westB = data.block.west();
    if (northB === void 0)
      return;
    if (southB === void 0)
      return;
    if (eastB === void 0)
      return;
    if (westB === void 0)
      return;
    if (!pfeWallNoC.includes(northB.typeId)) {
      data.block.setPermutation(data.block.permutation.withState("pfe:wall_n", true));
      if (northB.hasTag("pfe_wall")) {
        northB.setPermutation(northB.permutation.withState("pfe:wall_s", true));
      }
    } else {
      data.block.setPermutation(data.block.permutation.withState("pfe:wall_n", false));
    }
    if (!pfeWallNoC.includes(southB.typeId)) {
      data.block.setPermutation(data.block.permutation.withState("pfe:wall_s", true));
      if (southB.hasTag("pfe_wall")) {
        southB.setPermutation(southB.permutation.withState("pfe:wall_n", true));
      }
    } else {
      data.block.setPermutation(data.block.permutation.withState("pfe:wall_s", false));
    }
    if (!pfeWallNoC.includes(eastB.typeId)) {
      data.block.setPermutation(data.block.permutation.withState("pfe:wall_e", true));
      if (eastB.hasTag("pfe_wall")) {
        eastB.setPermutation(eastB.permutation.withState("pfe:wall_w", true));
      }
    } else {
      data.block.setPermutation(data.block.permutation.withState("pfe:wall_e", false));
    }
    if (!pfeWallNoC.includes(westB.typeId)) {
      data.block.setPermutation(data.block.permutation.withState("pfe:wall_w", true));
      if (westB.hasTag("pfe_wall")) {
        westB.setPermutation(westB.permutation.withState("pfe:wall_e", true));
      }
    } else {
      data.block.setPermutation(data.block.permutation.withState("pfe:wall_w", false));
    }
    return;
  }
  onPlayerDestroy(data) {
    const northB = data.block.north();
    const southB = data.block.south();
    const eastB = data.block.east();
    const westB = data.block.west();
    if (northB === void 0)
      return;
    if (southB === void 0)
      return;
    if (eastB === void 0)
      return;
    if (westB === void 0)
      return;
    if (northB.hasTag("pfe_wall")) {
      northB.setPermutation(northB.permutation.withState("pfe:wall_s", false));
    }
    if (southB.hasTag("pfe_wall")) {
      southB.setPermutation(southB.permutation.withState("pfe:wall_n", false));
    }
    if (eastB.hasTag("pfe_wall")) {
      eastB.setPermutation(eastB.permutation.withState("pfe:wall_w", false));
    }
    if (westB.hasTag("pfe_wall")) {
      westB.setPermutation(westB.permutation.withState("pfe:wall_e", false));
    }
    return;
  }
};
system3.runInterval(
  () => {
    let allPlayers = world2.getAllPlayers();
    let randomPlayer = allPlayers.at(Math.abs(Math.round(Math.random() * (allPlayers.length - 1))));
    randomPlayer?.dimension.spawnEntity("poke:cassette_trader", randomPlayer.location).runCommand(`spreadplayers ~ ~ 30 40 @s ~10`);
  },
  216e3
  /*3hrs*/
);
world2.beforeEvents.worldInitialize.subscribe((data) => {
  if (typeof world2.getDynamicProperty(PFEBossEventConfigName) == "string") {
    let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName));
    if (typeof settings.ticks != "number" || typeof settings.furnaceGolem != "object" || typeof settings.knightling != "object" || typeof settings.listener != "object" || typeof settings.zombken != "object" || typeof settings.miniDemonicAllay != "object" || typeof settings.necromancer != "object" || typeof settings.snowman != "object" || typeof settings.sparky != "object" || typeof settings.superStriker != "object" || typeof settings.theLogger != "object") {
      world2.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
    }
    ;
  } else {
    world2.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
  }
  data.itemComponentRegistry.registerCustomComponent(
    "poke:boss_event_config",
    new PFEBossEventUI()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:boss_event",
    { onUse(data2) {
      if (PFEStartBossEvent() == 0) {
        data2.source.sendMessage({ translate: `translation.poke:bossEventNoSpawnError` });
        data2.source.playSound(`note.didgeridoo`, { pitch: 0.825 });
        return;
      }
      ;
      if (data2.source.getGameMode() == GameMode2.creative)
        return;
      data2.source.getComponent(EntityComponentTypes2.Equippable).setEquipment(EquipmentSlot2.Mainhand, PFEDecrementStack(data2.itemStack));
    } }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:normalMining",
    {
      onMineBlock(data2) {
        if (data2.source.typeId != "minecraft:player")
          return;
        if (data2.source.getGameMode() == GameMode2.creative)
          return;
        const newItem = damage_item_ub(data2.itemStack, void 0);
        data2.source.getComponent(EntityComponentTypes2.Equippable).setEquipment(EquipmentSlot2.Mainhand, newItem);
        if (!newItem) {
          data2.source.playSound("random.break");
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:haxelMining",
    new PFEHaxelMining()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_dodge",
    new PFEDodge()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_bowAim",
    new PFEBowAim()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_crossbowAim",
    new PFECrossbowAim()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_spawnEgg",
    new PFESpawnEgg()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cas",
    new PFECassette()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_on_use",
    new PFEOnUse()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_zooka",
    new PFEWindzooka()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_upgrader",
    new PFEUpgrader()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:trapdoor_event",
    new PFETrapdoor()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:fortune",
    new PFEFortune()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:slabs",
    new PFESlabs()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_bulbs",
    new PFEBulbs()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_phantomic_conduit",
    new PFEPhantomicConduit()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_da_conduit",
    new PFEDemonicAConduit()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_cobble_gen",
    new PFECobbleGen()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_cobbler",
    new PFECobbler()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_block_breaker",
    new PFEBlockBreaker()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_dirter",
    new PFEDirter()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_duster",
    new PFEDuster()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_magnet_block",
    new PFEMagnetBlock()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_calibrate",
    new PFECalibrate()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_CaliBlockBreaker",
    new PFECaliBlockBreaker()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_CaliCobbleGen",
    new PFECaliCobbleGen()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:crops",
    new PFECrop()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_barometer",
    new PFEBarometer()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_lava_sponge",
    new PFELavaSponge()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_block_seat",
    new PFEBlockSeat()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_slab_loot",
    new PFESlabLoot()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_block_interact",
    new PFEBlockInteract()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_8ball",
    new PFE8Ball()
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_wall",
    new PFEWall()
  );
  return;
});
export {
  damage_item_ub
};

//# sourceMappingURL=../debug/main.js.map
