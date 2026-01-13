// scripts/main.ts
import { system as system9, world as world11, EquipmentSlot as EquipmentSlot10, EntityComponentTypes as EntityComponentTypes11, ItemComponentTypes as ItemComponentTypes7, CommandPermissionLevel, CustomCommandParamType, CustomCommandStatus, ItemLockMode as ItemLockMode2 } from "@minecraft/server";

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
  MinecraftBiomeTypes2["PaleGarden"] = "minecraft:pale_garden";
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
  MinecraftBlockTypes2["AcaciaShelf"] = "minecraft:acacia_shelf";
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
  MinecraftBlockTypes2["AndesiteDoubleSlab"] = "minecraft:andesite_double_slab";
  MinecraftBlockTypes2["AndesiteSlab"] = "minecraft:andesite_slab";
  MinecraftBlockTypes2["AndesiteStairs"] = "minecraft:andesite_stairs";
  MinecraftBlockTypes2["AndesiteWall"] = "minecraft:andesite_wall";
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
  MinecraftBlockTypes2["BambooShelf"] = "minecraft:bamboo_shelf";
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
  MinecraftBlockTypes2["BirchShelf"] = "minecraft:birch_shelf";
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
  MinecraftBlockTypes2["BrainCoralWallFan"] = "minecraft:brain_coral_wall_fan";
  MinecraftBlockTypes2["BrewingStand"] = "minecraft:brewing_stand";
  MinecraftBlockTypes2["BrickBlock"] = "minecraft:brick_block";
  MinecraftBlockTypes2["BrickDoubleSlab"] = "minecraft:brick_double_slab";
  MinecraftBlockTypes2["BrickSlab"] = "minecraft:brick_slab";
  MinecraftBlockTypes2["BrickStairs"] = "minecraft:brick_stairs";
  MinecraftBlockTypes2["BrickWall"] = "minecraft:brick_wall";
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
  MinecraftBlockTypes2["BubbleCoralWallFan"] = "minecraft:bubble_coral_wall_fan";
  MinecraftBlockTypes2["BuddingAmethyst"] = "minecraft:budding_amethyst";
  MinecraftBlockTypes2["Bush"] = "minecraft:bush";
  MinecraftBlockTypes2["Cactus"] = "minecraft:cactus";
  MinecraftBlockTypes2["CactusFlower"] = "minecraft:cactus_flower";
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
  MinecraftBlockTypes2["ChainCommandBlock"] = "minecraft:chain_command_block";
  MinecraftBlockTypes2["ChemicalHeat"] = "minecraft:chemical_heat";
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
  MinecraftBlockTypes2["CherryShelf"] = "minecraft:cherry_shelf";
  MinecraftBlockTypes2["CherrySlab"] = "minecraft:cherry_slab";
  MinecraftBlockTypes2["CherryStairs"] = "minecraft:cherry_stairs";
  MinecraftBlockTypes2["CherryStandingSign"] = "minecraft:cherry_standing_sign";
  MinecraftBlockTypes2["CherryTrapdoor"] = "minecraft:cherry_trapdoor";
  MinecraftBlockTypes2["CherryWallSign"] = "minecraft:cherry_wall_sign";
  MinecraftBlockTypes2["CherryWood"] = "minecraft:cherry_wood";
  MinecraftBlockTypes2["Chest"] = "minecraft:chest";
  MinecraftBlockTypes2["ChippedAnvil"] = "minecraft:chipped_anvil";
  MinecraftBlockTypes2["ChiseledBookshelf"] = "minecraft:chiseled_bookshelf";
  MinecraftBlockTypes2["ChiseledCopper"] = "minecraft:chiseled_copper";
  MinecraftBlockTypes2["ChiseledDeepslate"] = "minecraft:chiseled_deepslate";
  MinecraftBlockTypes2["ChiseledNetherBricks"] = "minecraft:chiseled_nether_bricks";
  MinecraftBlockTypes2["ChiseledPolishedBlackstone"] = "minecraft:chiseled_polished_blackstone";
  MinecraftBlockTypes2["ChiseledQuartzBlock"] = "minecraft:chiseled_quartz_block";
  MinecraftBlockTypes2["ChiseledRedSandstone"] = "minecraft:chiseled_red_sandstone";
  MinecraftBlockTypes2["ChiseledResinBricks"] = "minecraft:chiseled_resin_bricks";
  MinecraftBlockTypes2["ChiseledSandstone"] = "minecraft:chiseled_sandstone";
  MinecraftBlockTypes2["ChiseledStoneBricks"] = "minecraft:chiseled_stone_bricks";
  MinecraftBlockTypes2["ChiseledTuff"] = "minecraft:chiseled_tuff";
  MinecraftBlockTypes2["ChiseledTuffBricks"] = "minecraft:chiseled_tuff_bricks";
  MinecraftBlockTypes2["ChorusFlower"] = "minecraft:chorus_flower";
  MinecraftBlockTypes2["ChorusPlant"] = "minecraft:chorus_plant";
  MinecraftBlockTypes2["Clay"] = "minecraft:clay";
  MinecraftBlockTypes2["ClosedEyeblossom"] = "minecraft:closed_eyeblossom";
  MinecraftBlockTypes2["CoalBlock"] = "minecraft:coal_block";
  MinecraftBlockTypes2["CoalOre"] = "minecraft:coal_ore";
  MinecraftBlockTypes2["CoarseDirt"] = "minecraft:coarse_dirt";
  MinecraftBlockTypes2["CobbledDeepslate"] = "minecraft:cobbled_deepslate";
  MinecraftBlockTypes2["CobbledDeepslateDoubleSlab"] = "minecraft:cobbled_deepslate_double_slab";
  MinecraftBlockTypes2["CobbledDeepslateSlab"] = "minecraft:cobbled_deepslate_slab";
  MinecraftBlockTypes2["CobbledDeepslateStairs"] = "minecraft:cobbled_deepslate_stairs";
  MinecraftBlockTypes2["CobbledDeepslateWall"] = "minecraft:cobbled_deepslate_wall";
  MinecraftBlockTypes2["Cobblestone"] = "minecraft:cobblestone";
  MinecraftBlockTypes2["CobblestoneDoubleSlab"] = "minecraft:cobblestone_double_slab";
  MinecraftBlockTypes2["CobblestoneSlab"] = "minecraft:cobblestone_slab";
  MinecraftBlockTypes2["CobblestoneWall"] = "minecraft:cobblestone_wall";
  MinecraftBlockTypes2["Cocoa"] = "minecraft:cocoa";
  MinecraftBlockTypes2["ColoredTorchBlue"] = "minecraft:colored_torch_blue";
  MinecraftBlockTypes2["ColoredTorchGreen"] = "minecraft:colored_torch_green";
  MinecraftBlockTypes2["ColoredTorchPurple"] = "minecraft:colored_torch_purple";
  MinecraftBlockTypes2["ColoredTorchRed"] = "minecraft:colored_torch_red";
  MinecraftBlockTypes2["CommandBlock"] = "minecraft:command_block";
  MinecraftBlockTypes2["Composter"] = "minecraft:composter";
  MinecraftBlockTypes2["CompoundCreator"] = "minecraft:compound_creator";
  MinecraftBlockTypes2["Conduit"] = "minecraft:conduit";
  MinecraftBlockTypes2["CopperBars"] = "minecraft:copper_bars";
  MinecraftBlockTypes2["CopperBlock"] = "minecraft:copper_block";
  MinecraftBlockTypes2["CopperBulb"] = "minecraft:copper_bulb";
  MinecraftBlockTypes2["CopperChain"] = "minecraft:copper_chain";
  MinecraftBlockTypes2["CopperChest"] = "minecraft:copper_chest";
  MinecraftBlockTypes2["CopperDoor"] = "minecraft:copper_door";
  MinecraftBlockTypes2["CopperGolemStatue"] = "minecraft:copper_golem_statue";
  MinecraftBlockTypes2["CopperGrate"] = "minecraft:copper_grate";
  MinecraftBlockTypes2["CopperLantern"] = "minecraft:copper_lantern";
  MinecraftBlockTypes2["CopperOre"] = "minecraft:copper_ore";
  MinecraftBlockTypes2["CopperTorch"] = "minecraft:copper_torch";
  MinecraftBlockTypes2["CopperTrapdoor"] = "minecraft:copper_trapdoor";
  MinecraftBlockTypes2["Cornflower"] = "minecraft:cornflower";
  MinecraftBlockTypes2["CrackedDeepslateBricks"] = "minecraft:cracked_deepslate_bricks";
  MinecraftBlockTypes2["CrackedDeepslateTiles"] = "minecraft:cracked_deepslate_tiles";
  MinecraftBlockTypes2["CrackedNetherBricks"] = "minecraft:cracked_nether_bricks";
  MinecraftBlockTypes2["CrackedPolishedBlackstoneBricks"] = "minecraft:cracked_polished_blackstone_bricks";
  MinecraftBlockTypes2["CrackedStoneBricks"] = "minecraft:cracked_stone_bricks";
  MinecraftBlockTypes2["Crafter"] = "minecraft:crafter";
  MinecraftBlockTypes2["CraftingTable"] = "minecraft:crafting_table";
  MinecraftBlockTypes2["CreakingHeart"] = "minecraft:creaking_heart";
  MinecraftBlockTypes2["CreeperHead"] = "minecraft:creeper_head";
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
  MinecraftBlockTypes2["CrimsonShelf"] = "minecraft:crimson_shelf";
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
  MinecraftBlockTypes2["CutRedSandstone"] = "minecraft:cut_red_sandstone";
  MinecraftBlockTypes2["CutRedSandstoneDoubleSlab"] = "minecraft:cut_red_sandstone_double_slab";
  MinecraftBlockTypes2["CutRedSandstoneSlab"] = "minecraft:cut_red_sandstone_slab";
  MinecraftBlockTypes2["CutSandstone"] = "minecraft:cut_sandstone";
  MinecraftBlockTypes2["CutSandstoneDoubleSlab"] = "minecraft:cut_sandstone_double_slab";
  MinecraftBlockTypes2["CutSandstoneSlab"] = "minecraft:cut_sandstone_slab";
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
  MinecraftBlockTypes2["DamagedAnvil"] = "minecraft:damaged_anvil";
  MinecraftBlockTypes2["Dandelion"] = "minecraft:dandelion";
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
  MinecraftBlockTypes2["DarkOakShelf"] = "minecraft:dark_oak_shelf";
  MinecraftBlockTypes2["DarkOakSlab"] = "minecraft:dark_oak_slab";
  MinecraftBlockTypes2["DarkOakStairs"] = "minecraft:dark_oak_stairs";
  MinecraftBlockTypes2["DarkOakTrapdoor"] = "minecraft:dark_oak_trapdoor";
  MinecraftBlockTypes2["DarkOakWood"] = "minecraft:dark_oak_wood";
  MinecraftBlockTypes2["DarkPrismarine"] = "minecraft:dark_prismarine";
  MinecraftBlockTypes2["DarkPrismarineDoubleSlab"] = "minecraft:dark_prismarine_double_slab";
  MinecraftBlockTypes2["DarkPrismarineSlab"] = "minecraft:dark_prismarine_slab";
  MinecraftBlockTypes2["DarkPrismarineStairs"] = "minecraft:dark_prismarine_stairs";
  MinecraftBlockTypes2["DarkoakStandingSign"] = "minecraft:darkoak_standing_sign";
  MinecraftBlockTypes2["DarkoakWallSign"] = "minecraft:darkoak_wall_sign";
  MinecraftBlockTypes2["DaylightDetector"] = "minecraft:daylight_detector";
  MinecraftBlockTypes2["DaylightDetectorInverted"] = "minecraft:daylight_detector_inverted";
  MinecraftBlockTypes2["DeadBrainCoral"] = "minecraft:dead_brain_coral";
  MinecraftBlockTypes2["DeadBrainCoralBlock"] = "minecraft:dead_brain_coral_block";
  MinecraftBlockTypes2["DeadBrainCoralFan"] = "minecraft:dead_brain_coral_fan";
  MinecraftBlockTypes2["DeadBrainCoralWallFan"] = "minecraft:dead_brain_coral_wall_fan";
  MinecraftBlockTypes2["DeadBubbleCoral"] = "minecraft:dead_bubble_coral";
  MinecraftBlockTypes2["DeadBubbleCoralBlock"] = "minecraft:dead_bubble_coral_block";
  MinecraftBlockTypes2["DeadBubbleCoralFan"] = "minecraft:dead_bubble_coral_fan";
  MinecraftBlockTypes2["DeadBubbleCoralWallFan"] = "minecraft:dead_bubble_coral_wall_fan";
  MinecraftBlockTypes2["DeadFireCoral"] = "minecraft:dead_fire_coral";
  MinecraftBlockTypes2["DeadFireCoralBlock"] = "minecraft:dead_fire_coral_block";
  MinecraftBlockTypes2["DeadFireCoralFan"] = "minecraft:dead_fire_coral_fan";
  MinecraftBlockTypes2["DeadFireCoralWallFan"] = "minecraft:dead_fire_coral_wall_fan";
  MinecraftBlockTypes2["DeadHornCoral"] = "minecraft:dead_horn_coral";
  MinecraftBlockTypes2["DeadHornCoralBlock"] = "minecraft:dead_horn_coral_block";
  MinecraftBlockTypes2["DeadHornCoralFan"] = "minecraft:dead_horn_coral_fan";
  MinecraftBlockTypes2["DeadHornCoralWallFan"] = "minecraft:dead_horn_coral_wall_fan";
  MinecraftBlockTypes2["DeadTubeCoral"] = "minecraft:dead_tube_coral";
  MinecraftBlockTypes2["DeadTubeCoralBlock"] = "minecraft:dead_tube_coral_block";
  MinecraftBlockTypes2["DeadTubeCoralFan"] = "minecraft:dead_tube_coral_fan";
  MinecraftBlockTypes2["DeadTubeCoralWallFan"] = "minecraft:dead_tube_coral_wall_fan";
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
  MinecraftBlockTypes2["DioriteDoubleSlab"] = "minecraft:diorite_double_slab";
  MinecraftBlockTypes2["DioriteSlab"] = "minecraft:diorite_slab";
  MinecraftBlockTypes2["DioriteStairs"] = "minecraft:diorite_stairs";
  MinecraftBlockTypes2["DioriteWall"] = "minecraft:diorite_wall";
  MinecraftBlockTypes2["Dirt"] = "minecraft:dirt";
  MinecraftBlockTypes2["DirtWithRoots"] = "minecraft:dirt_with_roots";
  MinecraftBlockTypes2["Dispenser"] = "minecraft:dispenser";
  MinecraftBlockTypes2["DoubleCutCopperSlab"] = "minecraft:double_cut_copper_slab";
  MinecraftBlockTypes2["DragonEgg"] = "minecraft:dragon_egg";
  MinecraftBlockTypes2["DragonHead"] = "minecraft:dragon_head";
  MinecraftBlockTypes2["DriedGhast"] = "minecraft:dried_ghast";
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
  MinecraftBlockTypes2["ElementConstructor"] = "minecraft:element_constructor";
  MinecraftBlockTypes2["EmeraldBlock"] = "minecraft:emerald_block";
  MinecraftBlockTypes2["EmeraldOre"] = "minecraft:emerald_ore";
  MinecraftBlockTypes2["EnchantingTable"] = "minecraft:enchanting_table";
  MinecraftBlockTypes2["EndBrickStairs"] = "minecraft:end_brick_stairs";
  MinecraftBlockTypes2["EndBricks"] = "minecraft:end_bricks";
  MinecraftBlockTypes2["EndPortal"] = "minecraft:end_portal";
  MinecraftBlockTypes2["EndPortalFrame"] = "minecraft:end_portal_frame";
  MinecraftBlockTypes2["EndRod"] = "minecraft:end_rod";
  MinecraftBlockTypes2["EndStone"] = "minecraft:end_stone";
  MinecraftBlockTypes2["EndStoneBrickDoubleSlab"] = "minecraft:end_stone_brick_double_slab";
  MinecraftBlockTypes2["EndStoneBrickSlab"] = "minecraft:end_stone_brick_slab";
  MinecraftBlockTypes2["EndStoneBrickWall"] = "minecraft:end_stone_brick_wall";
  MinecraftBlockTypes2["EnderChest"] = "minecraft:ender_chest";
  MinecraftBlockTypes2["ExposedChiseledCopper"] = "minecraft:exposed_chiseled_copper";
  MinecraftBlockTypes2["ExposedCopper"] = "minecraft:exposed_copper";
  MinecraftBlockTypes2["ExposedCopperBars"] = "minecraft:exposed_copper_bars";
  MinecraftBlockTypes2["ExposedCopperBulb"] = "minecraft:exposed_copper_bulb";
  MinecraftBlockTypes2["ExposedCopperChain"] = "minecraft:exposed_copper_chain";
  MinecraftBlockTypes2["ExposedCopperChest"] = "minecraft:exposed_copper_chest";
  MinecraftBlockTypes2["ExposedCopperDoor"] = "minecraft:exposed_copper_door";
  MinecraftBlockTypes2["ExposedCopperGolemStatue"] = "minecraft:exposed_copper_golem_statue";
  MinecraftBlockTypes2["ExposedCopperGrate"] = "minecraft:exposed_copper_grate";
  MinecraftBlockTypes2["ExposedCopperLantern"] = "minecraft:exposed_copper_lantern";
  MinecraftBlockTypes2["ExposedCopperTrapdoor"] = "minecraft:exposed_copper_trapdoor";
  MinecraftBlockTypes2["ExposedCutCopper"] = "minecraft:exposed_cut_copper";
  MinecraftBlockTypes2["ExposedCutCopperSlab"] = "minecraft:exposed_cut_copper_slab";
  MinecraftBlockTypes2["ExposedCutCopperStairs"] = "minecraft:exposed_cut_copper_stairs";
  MinecraftBlockTypes2["ExposedDoubleCutCopperSlab"] = "minecraft:exposed_double_cut_copper_slab";
  MinecraftBlockTypes2["ExposedLightningRod"] = "minecraft:exposed_lightning_rod";
  MinecraftBlockTypes2["Farmland"] = "minecraft:farmland";
  MinecraftBlockTypes2["FenceGate"] = "minecraft:fence_gate";
  MinecraftBlockTypes2["Fern"] = "minecraft:fern";
  MinecraftBlockTypes2["Fire"] = "minecraft:fire";
  MinecraftBlockTypes2["FireCoral"] = "minecraft:fire_coral";
  MinecraftBlockTypes2["FireCoralBlock"] = "minecraft:fire_coral_block";
  MinecraftBlockTypes2["FireCoralFan"] = "minecraft:fire_coral_fan";
  MinecraftBlockTypes2["FireCoralWallFan"] = "minecraft:fire_coral_wall_fan";
  MinecraftBlockTypes2["FireflyBush"] = "minecraft:firefly_bush";
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
  MinecraftBlockTypes2["Glowstone"] = "minecraft:glowstone";
  MinecraftBlockTypes2["GoldBlock"] = "minecraft:gold_block";
  MinecraftBlockTypes2["GoldOre"] = "minecraft:gold_ore";
  MinecraftBlockTypes2["GoldenRail"] = "minecraft:golden_rail";
  MinecraftBlockTypes2["Granite"] = "minecraft:granite";
  MinecraftBlockTypes2["GraniteDoubleSlab"] = "minecraft:granite_double_slab";
  MinecraftBlockTypes2["GraniteSlab"] = "minecraft:granite_slab";
  MinecraftBlockTypes2["GraniteStairs"] = "minecraft:granite_stairs";
  MinecraftBlockTypes2["GraniteWall"] = "minecraft:granite_wall";
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
  MinecraftBlockTypes2["HornCoralWallFan"] = "minecraft:horn_coral_wall_fan";
  MinecraftBlockTypes2["Ice"] = "minecraft:ice";
  MinecraftBlockTypes2["InfestedChiseledStoneBricks"] = "minecraft:infested_chiseled_stone_bricks";
  MinecraftBlockTypes2["InfestedCobblestone"] = "minecraft:infested_cobblestone";
  MinecraftBlockTypes2["InfestedCrackedStoneBricks"] = "minecraft:infested_cracked_stone_bricks";
  MinecraftBlockTypes2["InfestedDeepslate"] = "minecraft:infested_deepslate";
  MinecraftBlockTypes2["InfestedMossyStoneBricks"] = "minecraft:infested_mossy_stone_bricks";
  MinecraftBlockTypes2["InfestedStone"] = "minecraft:infested_stone";
  MinecraftBlockTypes2["InfestedStoneBricks"] = "minecraft:infested_stone_bricks";
  MinecraftBlockTypes2["IronBars"] = "minecraft:iron_bars";
  MinecraftBlockTypes2["IronBlock"] = "minecraft:iron_block";
  MinecraftBlockTypes2["IronChain"] = "minecraft:iron_chain";
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
  MinecraftBlockTypes2["JungleShelf"] = "minecraft:jungle_shelf";
  MinecraftBlockTypes2["JungleSlab"] = "minecraft:jungle_slab";
  MinecraftBlockTypes2["JungleStairs"] = "minecraft:jungle_stairs";
  MinecraftBlockTypes2["JungleStandingSign"] = "minecraft:jungle_standing_sign";
  MinecraftBlockTypes2["JungleTrapdoor"] = "minecraft:jungle_trapdoor";
  MinecraftBlockTypes2["JungleWallSign"] = "minecraft:jungle_wall_sign";
  MinecraftBlockTypes2["JungleWood"] = "minecraft:jungle_wood";
  MinecraftBlockTypes2["Kelp"] = "minecraft:kelp";
  MinecraftBlockTypes2["LabTable"] = "minecraft:lab_table";
  MinecraftBlockTypes2["Ladder"] = "minecraft:ladder";
  MinecraftBlockTypes2["Lantern"] = "minecraft:lantern";
  MinecraftBlockTypes2["LapisBlock"] = "minecraft:lapis_block";
  MinecraftBlockTypes2["LapisOre"] = "minecraft:lapis_ore";
  MinecraftBlockTypes2["LargeAmethystBud"] = "minecraft:large_amethyst_bud";
  MinecraftBlockTypes2["LargeFern"] = "minecraft:large_fern";
  MinecraftBlockTypes2["Lava"] = "minecraft:lava";
  MinecraftBlockTypes2["LeafLitter"] = "minecraft:leaf_litter";
  MinecraftBlockTypes2["Lectern"] = "minecraft:lectern";
  MinecraftBlockTypes2["Lever"] = "minecraft:lever";
  MinecraftBlockTypes2["LightBlock0"] = "minecraft:light_block_0";
  MinecraftBlockTypes2["LightBlock1"] = "minecraft:light_block_1";
  MinecraftBlockTypes2["LightBlock10"] = "minecraft:light_block_10";
  MinecraftBlockTypes2["LightBlock11"] = "minecraft:light_block_11";
  MinecraftBlockTypes2["LightBlock12"] = "minecraft:light_block_12";
  MinecraftBlockTypes2["LightBlock13"] = "minecraft:light_block_13";
  MinecraftBlockTypes2["LightBlock14"] = "minecraft:light_block_14";
  MinecraftBlockTypes2["LightBlock15"] = "minecraft:light_block_15";
  MinecraftBlockTypes2["LightBlock2"] = "minecraft:light_block_2";
  MinecraftBlockTypes2["LightBlock3"] = "minecraft:light_block_3";
  MinecraftBlockTypes2["LightBlock4"] = "minecraft:light_block_4";
  MinecraftBlockTypes2["LightBlock5"] = "minecraft:light_block_5";
  MinecraftBlockTypes2["LightBlock6"] = "minecraft:light_block_6";
  MinecraftBlockTypes2["LightBlock7"] = "minecraft:light_block_7";
  MinecraftBlockTypes2["LightBlock8"] = "minecraft:light_block_8";
  MinecraftBlockTypes2["LightBlock9"] = "minecraft:light_block_9";
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
  MinecraftBlockTypes2["MangroveShelf"] = "minecraft:mangrove_shelf";
  MinecraftBlockTypes2["MangroveSlab"] = "minecraft:mangrove_slab";
  MinecraftBlockTypes2["MangroveStairs"] = "minecraft:mangrove_stairs";
  MinecraftBlockTypes2["MangroveStandingSign"] = "minecraft:mangrove_standing_sign";
  MinecraftBlockTypes2["MangroveTrapdoor"] = "minecraft:mangrove_trapdoor";
  MinecraftBlockTypes2["MangroveWallSign"] = "minecraft:mangrove_wall_sign";
  MinecraftBlockTypes2["MangroveWood"] = "minecraft:mangrove_wood";
  MinecraftBlockTypes2["MaterialReducer"] = "minecraft:material_reducer";
  MinecraftBlockTypes2["MediumAmethystBud"] = "minecraft:medium_amethyst_bud";
  MinecraftBlockTypes2["MelonBlock"] = "minecraft:melon_block";
  MinecraftBlockTypes2["MelonStem"] = "minecraft:melon_stem";
  MinecraftBlockTypes2["MobSpawner"] = "minecraft:mob_spawner";
  MinecraftBlockTypes2["MossBlock"] = "minecraft:moss_block";
  MinecraftBlockTypes2["MossCarpet"] = "minecraft:moss_carpet";
  MinecraftBlockTypes2["MossyCobblestone"] = "minecraft:mossy_cobblestone";
  MinecraftBlockTypes2["MossyCobblestoneDoubleSlab"] = "minecraft:mossy_cobblestone_double_slab";
  MinecraftBlockTypes2["MossyCobblestoneSlab"] = "minecraft:mossy_cobblestone_slab";
  MinecraftBlockTypes2["MossyCobblestoneStairs"] = "minecraft:mossy_cobblestone_stairs";
  MinecraftBlockTypes2["MossyCobblestoneWall"] = "minecraft:mossy_cobblestone_wall";
  MinecraftBlockTypes2["MossyStoneBrickDoubleSlab"] = "minecraft:mossy_stone_brick_double_slab";
  MinecraftBlockTypes2["MossyStoneBrickSlab"] = "minecraft:mossy_stone_brick_slab";
  MinecraftBlockTypes2["MossyStoneBrickStairs"] = "minecraft:mossy_stone_brick_stairs";
  MinecraftBlockTypes2["MossyStoneBrickWall"] = "minecraft:mossy_stone_brick_wall";
  MinecraftBlockTypes2["MossyStoneBricks"] = "minecraft:mossy_stone_bricks";
  MinecraftBlockTypes2["Mud"] = "minecraft:mud";
  MinecraftBlockTypes2["MudBrickDoubleSlab"] = "minecraft:mud_brick_double_slab";
  MinecraftBlockTypes2["MudBrickSlab"] = "minecraft:mud_brick_slab";
  MinecraftBlockTypes2["MudBrickStairs"] = "minecraft:mud_brick_stairs";
  MinecraftBlockTypes2["MudBrickWall"] = "minecraft:mud_brick_wall";
  MinecraftBlockTypes2["MudBricks"] = "minecraft:mud_bricks";
  MinecraftBlockTypes2["MuddyMangroveRoots"] = "minecraft:muddy_mangrove_roots";
  MinecraftBlockTypes2["MushroomStem"] = "minecraft:mushroom_stem";
  MinecraftBlockTypes2["Mycelium"] = "minecraft:mycelium";
  MinecraftBlockTypes2["NetherBrick"] = "minecraft:nether_brick";
  MinecraftBlockTypes2["NetherBrickDoubleSlab"] = "minecraft:nether_brick_double_slab";
  MinecraftBlockTypes2["NetherBrickFence"] = "minecraft:nether_brick_fence";
  MinecraftBlockTypes2["NetherBrickSlab"] = "minecraft:nether_brick_slab";
  MinecraftBlockTypes2["NetherBrickStairs"] = "minecraft:nether_brick_stairs";
  MinecraftBlockTypes2["NetherBrickWall"] = "minecraft:nether_brick_wall";
  MinecraftBlockTypes2["NetherGoldOre"] = "minecraft:nether_gold_ore";
  MinecraftBlockTypes2["NetherSprouts"] = "minecraft:nether_sprouts";
  MinecraftBlockTypes2["NetherWart"] = "minecraft:nether_wart";
  MinecraftBlockTypes2["NetherWartBlock"] = "minecraft:nether_wart_block";
  MinecraftBlockTypes2["NetheriteBlock"] = "minecraft:netherite_block";
  MinecraftBlockTypes2["Netherrack"] = "minecraft:netherrack";
  MinecraftBlockTypes2["NormalStoneDoubleSlab"] = "minecraft:normal_stone_double_slab";
  MinecraftBlockTypes2["NormalStoneSlab"] = "minecraft:normal_stone_slab";
  MinecraftBlockTypes2["NormalStoneStairs"] = "minecraft:normal_stone_stairs";
  MinecraftBlockTypes2["Noteblock"] = "minecraft:noteblock";
  MinecraftBlockTypes2["OakDoubleSlab"] = "minecraft:oak_double_slab";
  MinecraftBlockTypes2["OakFence"] = "minecraft:oak_fence";
  MinecraftBlockTypes2["OakHangingSign"] = "minecraft:oak_hanging_sign";
  MinecraftBlockTypes2["OakLeaves"] = "minecraft:oak_leaves";
  MinecraftBlockTypes2["OakLog"] = "minecraft:oak_log";
  MinecraftBlockTypes2["OakPlanks"] = "minecraft:oak_planks";
  MinecraftBlockTypes2["OakSapling"] = "minecraft:oak_sapling";
  MinecraftBlockTypes2["OakShelf"] = "minecraft:oak_shelf";
  MinecraftBlockTypes2["OakSlab"] = "minecraft:oak_slab";
  MinecraftBlockTypes2["OakStairs"] = "minecraft:oak_stairs";
  MinecraftBlockTypes2["OakWood"] = "minecraft:oak_wood";
  MinecraftBlockTypes2["Observer"] = "minecraft:observer";
  MinecraftBlockTypes2["Obsidian"] = "minecraft:obsidian";
  MinecraftBlockTypes2["OchreFroglight"] = "minecraft:ochre_froglight";
  MinecraftBlockTypes2["OpenEyeblossom"] = "minecraft:open_eyeblossom";
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
  MinecraftBlockTypes2["OxidizedCopperBars"] = "minecraft:oxidized_copper_bars";
  MinecraftBlockTypes2["OxidizedCopperBulb"] = "minecraft:oxidized_copper_bulb";
  MinecraftBlockTypes2["OxidizedCopperChain"] = "minecraft:oxidized_copper_chain";
  MinecraftBlockTypes2["OxidizedCopperChest"] = "minecraft:oxidized_copper_chest";
  MinecraftBlockTypes2["OxidizedCopperDoor"] = "minecraft:oxidized_copper_door";
  MinecraftBlockTypes2["OxidizedCopperGolemStatue"] = "minecraft:oxidized_copper_golem_statue";
  MinecraftBlockTypes2["OxidizedCopperGrate"] = "minecraft:oxidized_copper_grate";
  MinecraftBlockTypes2["OxidizedCopperLantern"] = "minecraft:oxidized_copper_lantern";
  MinecraftBlockTypes2["OxidizedCopperTrapdoor"] = "minecraft:oxidized_copper_trapdoor";
  MinecraftBlockTypes2["OxidizedCutCopper"] = "minecraft:oxidized_cut_copper";
  MinecraftBlockTypes2["OxidizedCutCopperSlab"] = "minecraft:oxidized_cut_copper_slab";
  MinecraftBlockTypes2["OxidizedCutCopperStairs"] = "minecraft:oxidized_cut_copper_stairs";
  MinecraftBlockTypes2["OxidizedDoubleCutCopperSlab"] = "minecraft:oxidized_double_cut_copper_slab";
  MinecraftBlockTypes2["OxidizedLightningRod"] = "minecraft:oxidized_lightning_rod";
  MinecraftBlockTypes2["PackedIce"] = "minecraft:packed_ice";
  MinecraftBlockTypes2["PackedMud"] = "minecraft:packed_mud";
  MinecraftBlockTypes2["PaleHangingMoss"] = "minecraft:pale_hanging_moss";
  MinecraftBlockTypes2["PaleMossBlock"] = "minecraft:pale_moss_block";
  MinecraftBlockTypes2["PaleMossCarpet"] = "minecraft:pale_moss_carpet";
  MinecraftBlockTypes2["PaleOakButton"] = "minecraft:pale_oak_button";
  MinecraftBlockTypes2["PaleOakDoor"] = "minecraft:pale_oak_door";
  MinecraftBlockTypes2["PaleOakDoubleSlab"] = "minecraft:pale_oak_double_slab";
  MinecraftBlockTypes2["PaleOakFence"] = "minecraft:pale_oak_fence";
  MinecraftBlockTypes2["PaleOakFenceGate"] = "minecraft:pale_oak_fence_gate";
  MinecraftBlockTypes2["PaleOakHangingSign"] = "minecraft:pale_oak_hanging_sign";
  MinecraftBlockTypes2["PaleOakLeaves"] = "minecraft:pale_oak_leaves";
  MinecraftBlockTypes2["PaleOakLog"] = "minecraft:pale_oak_log";
  MinecraftBlockTypes2["PaleOakPlanks"] = "minecraft:pale_oak_planks";
  MinecraftBlockTypes2["PaleOakPressurePlate"] = "minecraft:pale_oak_pressure_plate";
  MinecraftBlockTypes2["PaleOakSapling"] = "minecraft:pale_oak_sapling";
  MinecraftBlockTypes2["PaleOakShelf"] = "minecraft:pale_oak_shelf";
  MinecraftBlockTypes2["PaleOakSlab"] = "minecraft:pale_oak_slab";
  MinecraftBlockTypes2["PaleOakStairs"] = "minecraft:pale_oak_stairs";
  MinecraftBlockTypes2["PaleOakStandingSign"] = "minecraft:pale_oak_standing_sign";
  MinecraftBlockTypes2["PaleOakTrapdoor"] = "minecraft:pale_oak_trapdoor";
  MinecraftBlockTypes2["PaleOakWallSign"] = "minecraft:pale_oak_wall_sign";
  MinecraftBlockTypes2["PaleOakWood"] = "minecraft:pale_oak_wood";
  MinecraftBlockTypes2["PearlescentFroglight"] = "minecraft:pearlescent_froglight";
  MinecraftBlockTypes2["Peony"] = "minecraft:peony";
  MinecraftBlockTypes2["PetrifiedOakDoubleSlab"] = "minecraft:petrified_oak_double_slab";
  MinecraftBlockTypes2["PetrifiedOakSlab"] = "minecraft:petrified_oak_slab";
  MinecraftBlockTypes2["PiglinHead"] = "minecraft:piglin_head";
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
  MinecraftBlockTypes2["PlayerHead"] = "minecraft:player_head";
  MinecraftBlockTypes2["Podzol"] = "minecraft:podzol";
  MinecraftBlockTypes2["PointedDripstone"] = "minecraft:pointed_dripstone";
  MinecraftBlockTypes2["PolishedAndesite"] = "minecraft:polished_andesite";
  MinecraftBlockTypes2["PolishedAndesiteDoubleSlab"] = "minecraft:polished_andesite_double_slab";
  MinecraftBlockTypes2["PolishedAndesiteSlab"] = "minecraft:polished_andesite_slab";
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
  MinecraftBlockTypes2["PolishedDioriteDoubleSlab"] = "minecraft:polished_diorite_double_slab";
  MinecraftBlockTypes2["PolishedDioriteSlab"] = "minecraft:polished_diorite_slab";
  MinecraftBlockTypes2["PolishedDioriteStairs"] = "minecraft:polished_diorite_stairs";
  MinecraftBlockTypes2["PolishedGranite"] = "minecraft:polished_granite";
  MinecraftBlockTypes2["PolishedGraniteDoubleSlab"] = "minecraft:polished_granite_double_slab";
  MinecraftBlockTypes2["PolishedGraniteSlab"] = "minecraft:polished_granite_slab";
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
  MinecraftBlockTypes2["PrismarineBrickDoubleSlab"] = "minecraft:prismarine_brick_double_slab";
  MinecraftBlockTypes2["PrismarineBrickSlab"] = "minecraft:prismarine_brick_slab";
  MinecraftBlockTypes2["PrismarineBricks"] = "minecraft:prismarine_bricks";
  MinecraftBlockTypes2["PrismarineBricksStairs"] = "minecraft:prismarine_bricks_stairs";
  MinecraftBlockTypes2["PrismarineDoubleSlab"] = "minecraft:prismarine_double_slab";
  MinecraftBlockTypes2["PrismarineSlab"] = "minecraft:prismarine_slab";
  MinecraftBlockTypes2["PrismarineStairs"] = "minecraft:prismarine_stairs";
  MinecraftBlockTypes2["PrismarineWall"] = "minecraft:prismarine_wall";
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
  MinecraftBlockTypes2["PurpurDoubleSlab"] = "minecraft:purpur_double_slab";
  MinecraftBlockTypes2["PurpurPillar"] = "minecraft:purpur_pillar";
  MinecraftBlockTypes2["PurpurSlab"] = "minecraft:purpur_slab";
  MinecraftBlockTypes2["PurpurStairs"] = "minecraft:purpur_stairs";
  MinecraftBlockTypes2["QuartzBlock"] = "minecraft:quartz_block";
  MinecraftBlockTypes2["QuartzBricks"] = "minecraft:quartz_bricks";
  MinecraftBlockTypes2["QuartzDoubleSlab"] = "minecraft:quartz_double_slab";
  MinecraftBlockTypes2["QuartzOre"] = "minecraft:quartz_ore";
  MinecraftBlockTypes2["QuartzPillar"] = "minecraft:quartz_pillar";
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
  MinecraftBlockTypes2["RedNetherBrickDoubleSlab"] = "minecraft:red_nether_brick_double_slab";
  MinecraftBlockTypes2["RedNetherBrickSlab"] = "minecraft:red_nether_brick_slab";
  MinecraftBlockTypes2["RedNetherBrickStairs"] = "minecraft:red_nether_brick_stairs";
  MinecraftBlockTypes2["RedNetherBrickWall"] = "minecraft:red_nether_brick_wall";
  MinecraftBlockTypes2["RedSand"] = "minecraft:red_sand";
  MinecraftBlockTypes2["RedSandstone"] = "minecraft:red_sandstone";
  MinecraftBlockTypes2["RedSandstoneDoubleSlab"] = "minecraft:red_sandstone_double_slab";
  MinecraftBlockTypes2["RedSandstoneSlab"] = "minecraft:red_sandstone_slab";
  MinecraftBlockTypes2["RedSandstoneStairs"] = "minecraft:red_sandstone_stairs";
  MinecraftBlockTypes2["RedSandstoneWall"] = "minecraft:red_sandstone_wall";
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
  MinecraftBlockTypes2["ResinBlock"] = "minecraft:resin_block";
  MinecraftBlockTypes2["ResinBrickDoubleSlab"] = "minecraft:resin_brick_double_slab";
  MinecraftBlockTypes2["ResinBrickSlab"] = "minecraft:resin_brick_slab";
  MinecraftBlockTypes2["ResinBrickStairs"] = "minecraft:resin_brick_stairs";
  MinecraftBlockTypes2["ResinBrickWall"] = "minecraft:resin_brick_wall";
  MinecraftBlockTypes2["ResinBricks"] = "minecraft:resin_bricks";
  MinecraftBlockTypes2["ResinClump"] = "minecraft:resin_clump";
  MinecraftBlockTypes2["RespawnAnchor"] = "minecraft:respawn_anchor";
  MinecraftBlockTypes2["RoseBush"] = "minecraft:rose_bush";
  MinecraftBlockTypes2["Sand"] = "minecraft:sand";
  MinecraftBlockTypes2["Sandstone"] = "minecraft:sandstone";
  MinecraftBlockTypes2["SandstoneDoubleSlab"] = "minecraft:sandstone_double_slab";
  MinecraftBlockTypes2["SandstoneSlab"] = "minecraft:sandstone_slab";
  MinecraftBlockTypes2["SandstoneStairs"] = "minecraft:sandstone_stairs";
  MinecraftBlockTypes2["SandstoneWall"] = "minecraft:sandstone_wall";
  MinecraftBlockTypes2["Scaffolding"] = "minecraft:scaffolding";
  MinecraftBlockTypes2["Sculk"] = "minecraft:sculk";
  MinecraftBlockTypes2["SculkCatalyst"] = "minecraft:sculk_catalyst";
  MinecraftBlockTypes2["SculkSensor"] = "minecraft:sculk_sensor";
  MinecraftBlockTypes2["SculkShrieker"] = "minecraft:sculk_shrieker";
  MinecraftBlockTypes2["SculkVein"] = "minecraft:sculk_vein";
  MinecraftBlockTypes2["SeaLantern"] = "minecraft:sea_lantern";
  MinecraftBlockTypes2["SeaPickle"] = "minecraft:sea_pickle";
  MinecraftBlockTypes2["Seagrass"] = "minecraft:seagrass";
  MinecraftBlockTypes2["ShortDryGrass"] = "minecraft:short_dry_grass";
  MinecraftBlockTypes2["ShortGrass"] = "minecraft:short_grass";
  MinecraftBlockTypes2["Shroomlight"] = "minecraft:shroomlight";
  MinecraftBlockTypes2["SilverGlazedTerracotta"] = "minecraft:silver_glazed_terracotta";
  MinecraftBlockTypes2["SkeletonSkull"] = "minecraft:skeleton_skull";
  MinecraftBlockTypes2["Slime"] = "minecraft:slime";
  MinecraftBlockTypes2["SmallAmethystBud"] = "minecraft:small_amethyst_bud";
  MinecraftBlockTypes2["SmallDripleafBlock"] = "minecraft:small_dripleaf_block";
  MinecraftBlockTypes2["SmithingTable"] = "minecraft:smithing_table";
  MinecraftBlockTypes2["Smoker"] = "minecraft:smoker";
  MinecraftBlockTypes2["SmoothBasalt"] = "minecraft:smooth_basalt";
  MinecraftBlockTypes2["SmoothQuartz"] = "minecraft:smooth_quartz";
  MinecraftBlockTypes2["SmoothQuartzDoubleSlab"] = "minecraft:smooth_quartz_double_slab";
  MinecraftBlockTypes2["SmoothQuartzSlab"] = "minecraft:smooth_quartz_slab";
  MinecraftBlockTypes2["SmoothQuartzStairs"] = "minecraft:smooth_quartz_stairs";
  MinecraftBlockTypes2["SmoothRedSandstone"] = "minecraft:smooth_red_sandstone";
  MinecraftBlockTypes2["SmoothRedSandstoneDoubleSlab"] = "minecraft:smooth_red_sandstone_double_slab";
  MinecraftBlockTypes2["SmoothRedSandstoneSlab"] = "minecraft:smooth_red_sandstone_slab";
  MinecraftBlockTypes2["SmoothRedSandstoneStairs"] = "minecraft:smooth_red_sandstone_stairs";
  MinecraftBlockTypes2["SmoothSandstone"] = "minecraft:smooth_sandstone";
  MinecraftBlockTypes2["SmoothSandstoneDoubleSlab"] = "minecraft:smooth_sandstone_double_slab";
  MinecraftBlockTypes2["SmoothSandstoneSlab"] = "minecraft:smooth_sandstone_slab";
  MinecraftBlockTypes2["SmoothSandstoneStairs"] = "minecraft:smooth_sandstone_stairs";
  MinecraftBlockTypes2["SmoothStone"] = "minecraft:smooth_stone";
  MinecraftBlockTypes2["SmoothStoneDoubleSlab"] = "minecraft:smooth_stone_double_slab";
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
  MinecraftBlockTypes2["SpruceShelf"] = "minecraft:spruce_shelf";
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
  MinecraftBlockTypes2["StoneBrickDoubleSlab"] = "minecraft:stone_brick_double_slab";
  MinecraftBlockTypes2["StoneBrickSlab"] = "minecraft:stone_brick_slab";
  MinecraftBlockTypes2["StoneBrickStairs"] = "minecraft:stone_brick_stairs";
  MinecraftBlockTypes2["StoneBrickWall"] = "minecraft:stone_brick_wall";
  MinecraftBlockTypes2["StoneBricks"] = "minecraft:stone_bricks";
  MinecraftBlockTypes2["StoneButton"] = "minecraft:stone_button";
  MinecraftBlockTypes2["StonePressurePlate"] = "minecraft:stone_pressure_plate";
  MinecraftBlockTypes2["StoneStairs"] = "minecraft:stone_stairs";
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
  MinecraftBlockTypes2["StrippedPaleOakLog"] = "minecraft:stripped_pale_oak_log";
  MinecraftBlockTypes2["StrippedPaleOakWood"] = "minecraft:stripped_pale_oak_wood";
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
  MinecraftBlockTypes2["TallDryGrass"] = "minecraft:tall_dry_grass";
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
  MinecraftBlockTypes2["TubeCoralWallFan"] = "minecraft:tube_coral_wall_fan";
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
  MinecraftBlockTypes2["UnderwaterTnt"] = "minecraft:underwater_tnt";
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
  MinecraftBlockTypes2["WarpedShelf"] = "minecraft:warped_shelf";
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
  MinecraftBlockTypes2["WaxedCopperBars"] = "minecraft:waxed_copper_bars";
  MinecraftBlockTypes2["WaxedCopperBulb"] = "minecraft:waxed_copper_bulb";
  MinecraftBlockTypes2["WaxedCopperChain"] = "minecraft:waxed_copper_chain";
  MinecraftBlockTypes2["WaxedCopperChest"] = "minecraft:waxed_copper_chest";
  MinecraftBlockTypes2["WaxedCopperDoor"] = "minecraft:waxed_copper_door";
  MinecraftBlockTypes2["WaxedCopperGolemStatue"] = "minecraft:waxed_copper_golem_statue";
  MinecraftBlockTypes2["WaxedCopperGrate"] = "minecraft:waxed_copper_grate";
  MinecraftBlockTypes2["WaxedCopperLantern"] = "minecraft:waxed_copper_lantern";
  MinecraftBlockTypes2["WaxedCopperTrapdoor"] = "minecraft:waxed_copper_trapdoor";
  MinecraftBlockTypes2["WaxedCutCopper"] = "minecraft:waxed_cut_copper";
  MinecraftBlockTypes2["WaxedCutCopperSlab"] = "minecraft:waxed_cut_copper_slab";
  MinecraftBlockTypes2["WaxedCutCopperStairs"] = "minecraft:waxed_cut_copper_stairs";
  MinecraftBlockTypes2["WaxedDoubleCutCopperSlab"] = "minecraft:waxed_double_cut_copper_slab";
  MinecraftBlockTypes2["WaxedExposedChiseledCopper"] = "minecraft:waxed_exposed_chiseled_copper";
  MinecraftBlockTypes2["WaxedExposedCopper"] = "minecraft:waxed_exposed_copper";
  MinecraftBlockTypes2["WaxedExposedCopperBars"] = "minecraft:waxed_exposed_copper_bars";
  MinecraftBlockTypes2["WaxedExposedCopperBulb"] = "minecraft:waxed_exposed_copper_bulb";
  MinecraftBlockTypes2["WaxedExposedCopperChain"] = "minecraft:waxed_exposed_copper_chain";
  MinecraftBlockTypes2["WaxedExposedCopperChest"] = "minecraft:waxed_exposed_copper_chest";
  MinecraftBlockTypes2["WaxedExposedCopperDoor"] = "minecraft:waxed_exposed_copper_door";
  MinecraftBlockTypes2["WaxedExposedCopperGolemStatue"] = "minecraft:waxed_exposed_copper_golem_statue";
  MinecraftBlockTypes2["WaxedExposedCopperGrate"] = "minecraft:waxed_exposed_copper_grate";
  MinecraftBlockTypes2["WaxedExposedCopperLantern"] = "minecraft:waxed_exposed_copper_lantern";
  MinecraftBlockTypes2["WaxedExposedCopperTrapdoor"] = "minecraft:waxed_exposed_copper_trapdoor";
  MinecraftBlockTypes2["WaxedExposedCutCopper"] = "minecraft:waxed_exposed_cut_copper";
  MinecraftBlockTypes2["WaxedExposedCutCopperSlab"] = "minecraft:waxed_exposed_cut_copper_slab";
  MinecraftBlockTypes2["WaxedExposedCutCopperStairs"] = "minecraft:waxed_exposed_cut_copper_stairs";
  MinecraftBlockTypes2["WaxedExposedDoubleCutCopperSlab"] = "minecraft:waxed_exposed_double_cut_copper_slab";
  MinecraftBlockTypes2["WaxedExposedLightningRod"] = "minecraft:waxed_exposed_lightning_rod";
  MinecraftBlockTypes2["WaxedLightningRod"] = "minecraft:waxed_lightning_rod";
  MinecraftBlockTypes2["WaxedOxidizedChiseledCopper"] = "minecraft:waxed_oxidized_chiseled_copper";
  MinecraftBlockTypes2["WaxedOxidizedCopper"] = "minecraft:waxed_oxidized_copper";
  MinecraftBlockTypes2["WaxedOxidizedCopperBars"] = "minecraft:waxed_oxidized_copper_bars";
  MinecraftBlockTypes2["WaxedOxidizedCopperBulb"] = "minecraft:waxed_oxidized_copper_bulb";
  MinecraftBlockTypes2["WaxedOxidizedCopperChain"] = "minecraft:waxed_oxidized_copper_chain";
  MinecraftBlockTypes2["WaxedOxidizedCopperChest"] = "minecraft:waxed_oxidized_copper_chest";
  MinecraftBlockTypes2["WaxedOxidizedCopperDoor"] = "minecraft:waxed_oxidized_copper_door";
  MinecraftBlockTypes2["WaxedOxidizedCopperGolemStatue"] = "minecraft:waxed_oxidized_copper_golem_statue";
  MinecraftBlockTypes2["WaxedOxidizedCopperGrate"] = "minecraft:waxed_oxidized_copper_grate";
  MinecraftBlockTypes2["WaxedOxidizedCopperLantern"] = "minecraft:waxed_oxidized_copper_lantern";
  MinecraftBlockTypes2["WaxedOxidizedCopperTrapdoor"] = "minecraft:waxed_oxidized_copper_trapdoor";
  MinecraftBlockTypes2["WaxedOxidizedCutCopper"] = "minecraft:waxed_oxidized_cut_copper";
  MinecraftBlockTypes2["WaxedOxidizedCutCopperSlab"] = "minecraft:waxed_oxidized_cut_copper_slab";
  MinecraftBlockTypes2["WaxedOxidizedCutCopperStairs"] = "minecraft:waxed_oxidized_cut_copper_stairs";
  MinecraftBlockTypes2["WaxedOxidizedDoubleCutCopperSlab"] = "minecraft:waxed_oxidized_double_cut_copper_slab";
  MinecraftBlockTypes2["WaxedOxidizedLightningRod"] = "minecraft:waxed_oxidized_lightning_rod";
  MinecraftBlockTypes2["WaxedWeatheredChiseledCopper"] = "minecraft:waxed_weathered_chiseled_copper";
  MinecraftBlockTypes2["WaxedWeatheredCopper"] = "minecraft:waxed_weathered_copper";
  MinecraftBlockTypes2["WaxedWeatheredCopperBars"] = "minecraft:waxed_weathered_copper_bars";
  MinecraftBlockTypes2["WaxedWeatheredCopperBulb"] = "minecraft:waxed_weathered_copper_bulb";
  MinecraftBlockTypes2["WaxedWeatheredCopperChain"] = "minecraft:waxed_weathered_copper_chain";
  MinecraftBlockTypes2["WaxedWeatheredCopperChest"] = "minecraft:waxed_weathered_copper_chest";
  MinecraftBlockTypes2["WaxedWeatheredCopperDoor"] = "minecraft:waxed_weathered_copper_door";
  MinecraftBlockTypes2["WaxedWeatheredCopperGolemStatue"] = "minecraft:waxed_weathered_copper_golem_statue";
  MinecraftBlockTypes2["WaxedWeatheredCopperGrate"] = "minecraft:waxed_weathered_copper_grate";
  MinecraftBlockTypes2["WaxedWeatheredCopperLantern"] = "minecraft:waxed_weathered_copper_lantern";
  MinecraftBlockTypes2["WaxedWeatheredCopperTrapdoor"] = "minecraft:waxed_weathered_copper_trapdoor";
  MinecraftBlockTypes2["WaxedWeatheredCutCopper"] = "minecraft:waxed_weathered_cut_copper";
  MinecraftBlockTypes2["WaxedWeatheredCutCopperSlab"] = "minecraft:waxed_weathered_cut_copper_slab";
  MinecraftBlockTypes2["WaxedWeatheredCutCopperStairs"] = "minecraft:waxed_weathered_cut_copper_stairs";
  MinecraftBlockTypes2["WaxedWeatheredDoubleCutCopperSlab"] = "minecraft:waxed_weathered_double_cut_copper_slab";
  MinecraftBlockTypes2["WaxedWeatheredLightningRod"] = "minecraft:waxed_weathered_lightning_rod";
  MinecraftBlockTypes2["WeatheredChiseledCopper"] = "minecraft:weathered_chiseled_copper";
  MinecraftBlockTypes2["WeatheredCopper"] = "minecraft:weathered_copper";
  MinecraftBlockTypes2["WeatheredCopperBars"] = "minecraft:weathered_copper_bars";
  MinecraftBlockTypes2["WeatheredCopperBulb"] = "minecraft:weathered_copper_bulb";
  MinecraftBlockTypes2["WeatheredCopperChain"] = "minecraft:weathered_copper_chain";
  MinecraftBlockTypes2["WeatheredCopperChest"] = "minecraft:weathered_copper_chest";
  MinecraftBlockTypes2["WeatheredCopperDoor"] = "minecraft:weathered_copper_door";
  MinecraftBlockTypes2["WeatheredCopperGolemStatue"] = "minecraft:weathered_copper_golem_statue";
  MinecraftBlockTypes2["WeatheredCopperGrate"] = "minecraft:weathered_copper_grate";
  MinecraftBlockTypes2["WeatheredCopperLantern"] = "minecraft:weathered_copper_lantern";
  MinecraftBlockTypes2["WeatheredCopperTrapdoor"] = "minecraft:weathered_copper_trapdoor";
  MinecraftBlockTypes2["WeatheredCutCopper"] = "minecraft:weathered_cut_copper";
  MinecraftBlockTypes2["WeatheredCutCopperSlab"] = "minecraft:weathered_cut_copper_slab";
  MinecraftBlockTypes2["WeatheredCutCopperStairs"] = "minecraft:weathered_cut_copper_stairs";
  MinecraftBlockTypes2["WeatheredDoubleCutCopperSlab"] = "minecraft:weathered_double_cut_copper_slab";
  MinecraftBlockTypes2["WeatheredLightningRod"] = "minecraft:weathered_lightning_rod";
  MinecraftBlockTypes2["Web"] = "minecraft:web";
  MinecraftBlockTypes2["WeepingVines"] = "minecraft:weeping_vines";
  MinecraftBlockTypes2["WetSponge"] = "minecraft:wet_sponge";
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
  MinecraftBlockTypes2["Wildflowers"] = "minecraft:wildflowers";
  MinecraftBlockTypes2["WitherRose"] = "minecraft:wither_rose";
  MinecraftBlockTypes2["WitherSkeletonSkull"] = "minecraft:wither_skeleton_skull";
  MinecraftBlockTypes2["WoodenButton"] = "minecraft:wooden_button";
  MinecraftBlockTypes2["WoodenDoor"] = "minecraft:wooden_door";
  MinecraftBlockTypes2["WoodenPressurePlate"] = "minecraft:wooden_pressure_plate";
  MinecraftBlockTypes2["YellowCandle"] = "minecraft:yellow_candle";
  MinecraftBlockTypes2["YellowCandleCake"] = "minecraft:yellow_candle_cake";
  MinecraftBlockTypes2["YellowCarpet"] = "minecraft:yellow_carpet";
  MinecraftBlockTypes2["YellowConcrete"] = "minecraft:yellow_concrete";
  MinecraftBlockTypes2["YellowConcretePowder"] = "minecraft:yellow_concrete_powder";
  MinecraftBlockTypes2["YellowGlazedTerracotta"] = "minecraft:yellow_glazed_terracotta";
  MinecraftBlockTypes2["YellowShulkerBox"] = "minecraft:yellow_shulker_box";
  MinecraftBlockTypes2["YellowStainedGlass"] = "minecraft:yellow_stained_glass";
  MinecraftBlockTypes2["YellowStainedGlassPane"] = "minecraft:yellow_stained_glass_pane";
  MinecraftBlockTypes2["YellowTerracotta"] = "minecraft:yellow_terracotta";
  MinecraftBlockTypes2["YellowWool"] = "minecraft:yellow_wool";
  MinecraftBlockTypes2["ZombieHead"] = "minecraft:zombie_head";
  return MinecraftBlockTypes2;
})(MinecraftBlockTypes || {});
var MinecraftCameraPresetsTypes = ((MinecraftCameraPresetsTypes2) => {
  MinecraftCameraPresetsTypes2["ControlSchemeCamera"] = "minecraft:control_scheme_camera";
  MinecraftCameraPresetsTypes2["FirstPerson"] = "minecraft:first_person";
  MinecraftCameraPresetsTypes2["FixedBoom"] = "minecraft:fixed_boom";
  MinecraftCameraPresetsTypes2["FollowOrbit"] = "minecraft:follow_orbit";
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
  MinecraftCooldownCategoryTypes2["Spear"] = "minecraft:spear";
  MinecraftCooldownCategoryTypes2["WindCharge"] = "minecraft:wind_charge";
  return MinecraftCooldownCategoryTypes2;
})(MinecraftCooldownCategoryTypes || {});
var MinecraftDimensionTypes = ((MinecraftDimensionTypes22) => {
  MinecraftDimensionTypes22["Nether"] = "minecraft:nether";
  MinecraftDimensionTypes22["Overworld"] = "minecraft:overworld";
  MinecraftDimensionTypes22["TheEnd"] = "minecraft:the_end";
  return MinecraftDimensionTypes22;
})(MinecraftDimensionTypes || {});
var MinecraftEffectTypes = ((MinecraftEffectTypes2) => {
  MinecraftEffectTypes2["Absorption"] = "minecraft:absorption";
  MinecraftEffectTypes2["BadOmen"] = "minecraft:bad_omen";
  MinecraftEffectTypes2["Blindness"] = "minecraft:blindness";
  MinecraftEffectTypes2["BreathOfTheNautilus"] = "minecraft:breath_of_the_nautilus";
  MinecraftEffectTypes2["ConduitPower"] = "minecraft:conduit_power";
  MinecraftEffectTypes2["Darkness"] = "minecraft:darkness";
  MinecraftEffectTypes2["FatalPoison"] = "minecraft:fatal_poison";
  MinecraftEffectTypes2["FireResistance"] = "minecraft:fire_resistance";
  MinecraftEffectTypes2["Haste"] = "minecraft:haste";
  MinecraftEffectTypes2["HealthBoost"] = "minecraft:health_boost";
  MinecraftEffectTypes2["Hunger"] = "minecraft:hunger";
  MinecraftEffectTypes2["Infested"] = "minecraft:infested";
  MinecraftEffectTypes2["InstantDamage"] = "minecraft:instant_damage";
  MinecraftEffectTypes2["InstantHealth"] = "minecraft:instant_health";
  MinecraftEffectTypes2["Invisibility"] = "minecraft:invisibility";
  MinecraftEffectTypes2["JumpBoost"] = "minecraft:jump_boost";
  MinecraftEffectTypes2["Levitation"] = "minecraft:levitation";
  MinecraftEffectTypes2["MiningFatigue"] = "minecraft:mining_fatigue";
  MinecraftEffectTypes2["Nausea"] = "minecraft:nausea";
  MinecraftEffectTypes2["NightVision"] = "minecraft:night_vision";
  MinecraftEffectTypes2["Oozing"] = "minecraft:oozing";
  MinecraftEffectTypes2["Poison"] = "minecraft:poison";
  MinecraftEffectTypes2["RaidOmen"] = "minecraft:raid_omen";
  MinecraftEffectTypes2["Regeneration"] = "minecraft:regeneration";
  MinecraftEffectTypes2["Resistance"] = "minecraft:resistance";
  MinecraftEffectTypes2["Saturation"] = "minecraft:saturation";
  MinecraftEffectTypes2["SlowFalling"] = "minecraft:slow_falling";
  MinecraftEffectTypes2["Slowness"] = "minecraft:slowness";
  MinecraftEffectTypes2["Speed"] = "minecraft:speed";
  MinecraftEffectTypes2["Strength"] = "minecraft:strength";
  MinecraftEffectTypes2["TrialOmen"] = "minecraft:trial_omen";
  MinecraftEffectTypes2["VillageHero"] = "minecraft:village_hero";
  MinecraftEffectTypes2["WaterBreathing"] = "minecraft:water_breathing";
  MinecraftEffectTypes2["Weakness"] = "minecraft:weakness";
  MinecraftEffectTypes2["Weaving"] = "minecraft:weaving";
  MinecraftEffectTypes2["WindCharged"] = "minecraft:wind_charged";
  MinecraftEffectTypes2["Wither"] = "minecraft:wither";
  return MinecraftEffectTypes2;
})(MinecraftEffectTypes || {});
var MinecraftEnchantmentTypes = ((MinecraftEnchantmentTypes2) => {
  MinecraftEnchantmentTypes2["AquaAffinity"] = "minecraft:aqua_affinity";
  MinecraftEnchantmentTypes2["BaneOfArthropods"] = "minecraft:bane_of_arthropods";
  MinecraftEnchantmentTypes2["Binding"] = "minecraft:binding";
  MinecraftEnchantmentTypes2["BlastProtection"] = "minecraft:blast_protection";
  MinecraftEnchantmentTypes2["BowInfinity"] = "minecraft:infinity";
  MinecraftEnchantmentTypes2["Breach"] = "minecraft:breach";
  MinecraftEnchantmentTypes2["Channeling"] = "minecraft:channeling";
  MinecraftEnchantmentTypes2["Density"] = "minecraft:density";
  MinecraftEnchantmentTypes2["DepthStrider"] = "minecraft:depth_strider";
  MinecraftEnchantmentTypes2["Efficiency"] = "minecraft:efficiency";
  MinecraftEnchantmentTypes2["FeatherFalling"] = "minecraft:feather_falling";
  MinecraftEnchantmentTypes2["FireAspect"] = "minecraft:fire_aspect";
  MinecraftEnchantmentTypes2["FireProtection"] = "minecraft:fire_protection";
  MinecraftEnchantmentTypes2["Flame"] = "minecraft:flame";
  MinecraftEnchantmentTypes2["Fortune"] = "minecraft:fortune";
  MinecraftEnchantmentTypes2["FrostWalker"] = "minecraft:frost_walker";
  MinecraftEnchantmentTypes2["Impaling"] = "minecraft:impaling";
  MinecraftEnchantmentTypes2["Knockback"] = "minecraft:knockback";
  MinecraftEnchantmentTypes2["Looting"] = "minecraft:looting";
  MinecraftEnchantmentTypes2["Loyalty"] = "minecraft:loyalty";
  MinecraftEnchantmentTypes2["LuckOfTheSea"] = "minecraft:luck_of_the_sea";
  MinecraftEnchantmentTypes2["Lunge"] = "minecraft:lunge";
  MinecraftEnchantmentTypes2["Lure"] = "minecraft:lure";
  MinecraftEnchantmentTypes2["Mending"] = "minecraft:mending";
  MinecraftEnchantmentTypes2["Multishot"] = "minecraft:multishot";
  MinecraftEnchantmentTypes2["Piercing"] = "minecraft:piercing";
  MinecraftEnchantmentTypes2["Power"] = "minecraft:power";
  MinecraftEnchantmentTypes2["ProjectileProtection"] = "minecraft:projectile_protection";
  MinecraftEnchantmentTypes2["Protection"] = "minecraft:protection";
  MinecraftEnchantmentTypes2["Punch"] = "minecraft:punch";
  MinecraftEnchantmentTypes2["QuickCharge"] = "minecraft:quick_charge";
  MinecraftEnchantmentTypes2["Respiration"] = "minecraft:respiration";
  MinecraftEnchantmentTypes2["Riptide"] = "minecraft:riptide";
  MinecraftEnchantmentTypes2["Sharpness"] = "minecraft:sharpness";
  MinecraftEnchantmentTypes2["SilkTouch"] = "minecraft:silk_touch";
  MinecraftEnchantmentTypes2["Smite"] = "minecraft:smite";
  MinecraftEnchantmentTypes2["SoulSpeed"] = "minecraft:soul_speed";
  MinecraftEnchantmentTypes2["SwiftSneak"] = "minecraft:swift_sneak";
  MinecraftEnchantmentTypes2["Thorns"] = "minecraft:thorns";
  MinecraftEnchantmentTypes2["Unbreaking"] = "minecraft:unbreaking";
  MinecraftEnchantmentTypes2["Vanishing"] = "minecraft:vanishing";
  MinecraftEnchantmentTypes2["WindBurst"] = "minecraft:wind_burst";
  return MinecraftEnchantmentTypes2;
})(MinecraftEnchantmentTypes || {});
var MinecraftEntityTypes = ((MinecraftEntityTypes2) => {
  MinecraftEntityTypes2["Agent"] = "minecraft:agent";
  MinecraftEntityTypes2["Allay"] = "minecraft:allay";
  MinecraftEntityTypes2["AreaEffectCloud"] = "minecraft:area_effect_cloud";
  MinecraftEntityTypes2["Armadillo"] = "minecraft:armadillo";
  MinecraftEntityTypes2["ArmorStand"] = "minecraft:armor_stand";
  MinecraftEntityTypes2["Arrow"] = "minecraft:arrow";
  MinecraftEntityTypes2["Axolotl"] = "minecraft:axolotl";
  MinecraftEntityTypes2["Bat"] = "minecraft:bat";
  MinecraftEntityTypes2["Bee"] = "minecraft:bee";
  MinecraftEntityTypes2["Blaze"] = "minecraft:blaze";
  MinecraftEntityTypes2["Boat"] = "minecraft:boat";
  MinecraftEntityTypes2["Bogged"] = "minecraft:bogged";
  MinecraftEntityTypes2["Breeze"] = "minecraft:breeze";
  MinecraftEntityTypes2["BreezeWindChargeProjectile"] = "minecraft:breeze_wind_charge_projectile";
  MinecraftEntityTypes2["Camel"] = "minecraft:camel";
  MinecraftEntityTypes2["CamelHusk"] = "minecraft:camel_husk";
  MinecraftEntityTypes2["Cat"] = "minecraft:cat";
  MinecraftEntityTypes2["CaveSpider"] = "minecraft:cave_spider";
  MinecraftEntityTypes2["ChestBoat"] = "minecraft:chest_boat";
  MinecraftEntityTypes2["ChestMinecart"] = "minecraft:chest_minecart";
  MinecraftEntityTypes2["Chicken"] = "minecraft:chicken";
  MinecraftEntityTypes2["Cod"] = "minecraft:cod";
  MinecraftEntityTypes2["CommandBlockMinecart"] = "minecraft:command_block_minecart";
  MinecraftEntityTypes2["CopperGolem"] = "minecraft:copper_golem";
  MinecraftEntityTypes2["Cow"] = "minecraft:cow";
  MinecraftEntityTypes2["Creaking"] = "minecraft:creaking";
  MinecraftEntityTypes2["Creeper"] = "minecraft:creeper";
  MinecraftEntityTypes2["Dolphin"] = "minecraft:dolphin";
  MinecraftEntityTypes2["Donkey"] = "minecraft:donkey";
  MinecraftEntityTypes2["DragonFireball"] = "minecraft:dragon_fireball";
  MinecraftEntityTypes2["Drowned"] = "minecraft:drowned";
  MinecraftEntityTypes2["Egg"] = "minecraft:egg";
  MinecraftEntityTypes2["ElderGuardian"] = "minecraft:elder_guardian";
  MinecraftEntityTypes2["EnderCrystal"] = "minecraft:ender_crystal";
  MinecraftEntityTypes2["EnderDragon"] = "minecraft:ender_dragon";
  MinecraftEntityTypes2["EnderPearl"] = "minecraft:ender_pearl";
  MinecraftEntityTypes2["Enderman"] = "minecraft:enderman";
  MinecraftEntityTypes2["Endermite"] = "minecraft:endermite";
  MinecraftEntityTypes2["EvocationIllager"] = "minecraft:evocation_illager";
  MinecraftEntityTypes2["EyeOfEnderSignal"] = "minecraft:eye_of_ender_signal";
  MinecraftEntityTypes2["Fireball"] = "minecraft:fireball";
  MinecraftEntityTypes2["FireworksRocket"] = "minecraft:fireworks_rocket";
  MinecraftEntityTypes2["FishingHook"] = "minecraft:fishing_hook";
  MinecraftEntityTypes2["Fox"] = "minecraft:fox";
  MinecraftEntityTypes2["Frog"] = "minecraft:frog";
  MinecraftEntityTypes2["Ghast"] = "minecraft:ghast";
  MinecraftEntityTypes2["GlowSquid"] = "minecraft:glow_squid";
  MinecraftEntityTypes2["Goat"] = "minecraft:goat";
  MinecraftEntityTypes2["Guardian"] = "minecraft:guardian";
  MinecraftEntityTypes2["HappyGhast"] = "minecraft:happy_ghast";
  MinecraftEntityTypes2["Hoglin"] = "minecraft:hoglin";
  MinecraftEntityTypes2["HopperMinecart"] = "minecraft:hopper_minecart";
  MinecraftEntityTypes2["Horse"] = "minecraft:horse";
  MinecraftEntityTypes2["Husk"] = "minecraft:husk";
  MinecraftEntityTypes2["IronGolem"] = "minecraft:iron_golem";
  MinecraftEntityTypes2["LightningBolt"] = "minecraft:lightning_bolt";
  MinecraftEntityTypes2["LingeringPotion"] = "minecraft:lingering_potion";
  MinecraftEntityTypes2["Llama"] = "minecraft:llama";
  MinecraftEntityTypes2["LlamaSpit"] = "minecraft:llama_spit";
  MinecraftEntityTypes2["MagmaCube"] = "minecraft:magma_cube";
  MinecraftEntityTypes2["Minecart"] = "minecraft:minecart";
  MinecraftEntityTypes2["Mooshroom"] = "minecraft:mooshroom";
  MinecraftEntityTypes2["Mule"] = "minecraft:mule";
  MinecraftEntityTypes2["Nautilus"] = "minecraft:nautilus";
  MinecraftEntityTypes2["Npc"] = "minecraft:npc";
  MinecraftEntityTypes2["Ocelot"] = "minecraft:ocelot";
  MinecraftEntityTypes2["OminousItemSpawner"] = "minecraft:ominous_item_spawner";
  MinecraftEntityTypes2["Panda"] = "minecraft:panda";
  MinecraftEntityTypes2["Parched"] = "minecraft:parched";
  MinecraftEntityTypes2["Parrot"] = "minecraft:parrot";
  MinecraftEntityTypes2["Phantom"] = "minecraft:phantom";
  MinecraftEntityTypes2["Pig"] = "minecraft:pig";
  MinecraftEntityTypes2["Piglin"] = "minecraft:piglin";
  MinecraftEntityTypes2["PiglinBrute"] = "minecraft:piglin_brute";
  MinecraftEntityTypes2["Pillager"] = "minecraft:pillager";
  MinecraftEntityTypes2["Player"] = "minecraft:player";
  MinecraftEntityTypes2["PolarBear"] = "minecraft:polar_bear";
  MinecraftEntityTypes2["Pufferfish"] = "minecraft:pufferfish";
  MinecraftEntityTypes2["Rabbit"] = "minecraft:rabbit";
  MinecraftEntityTypes2["Ravager"] = "minecraft:ravager";
  MinecraftEntityTypes2["Salmon"] = "minecraft:salmon";
  MinecraftEntityTypes2["Sheep"] = "minecraft:sheep";
  MinecraftEntityTypes2["Shulker"] = "minecraft:shulker";
  MinecraftEntityTypes2["ShulkerBullet"] = "minecraft:shulker_bullet";
  MinecraftEntityTypes2["Silverfish"] = "minecraft:silverfish";
  MinecraftEntityTypes2["Skeleton"] = "minecraft:skeleton";
  MinecraftEntityTypes2["SkeletonHorse"] = "minecraft:skeleton_horse";
  MinecraftEntityTypes2["Slime"] = "minecraft:slime";
  MinecraftEntityTypes2["SmallFireball"] = "minecraft:small_fireball";
  MinecraftEntityTypes2["Sniffer"] = "minecraft:sniffer";
  MinecraftEntityTypes2["SnowGolem"] = "minecraft:snow_golem";
  MinecraftEntityTypes2["Snowball"] = "minecraft:snowball";
  MinecraftEntityTypes2["Spider"] = "minecraft:spider";
  MinecraftEntityTypes2["SplashPotion"] = "minecraft:splash_potion";
  MinecraftEntityTypes2["Squid"] = "minecraft:squid";
  MinecraftEntityTypes2["Stray"] = "minecraft:stray";
  MinecraftEntityTypes2["Strider"] = "minecraft:strider";
  MinecraftEntityTypes2["Tadpole"] = "minecraft:tadpole";
  MinecraftEntityTypes2["ThrownTrident"] = "minecraft:thrown_trident";
  MinecraftEntityTypes2["Tnt"] = "minecraft:tnt";
  MinecraftEntityTypes2["TntMinecart"] = "minecraft:tnt_minecart";
  MinecraftEntityTypes2["TraderLlama"] = "minecraft:trader_llama";
  MinecraftEntityTypes2["TripodCamera"] = "minecraft:tripod_camera";
  MinecraftEntityTypes2["Tropicalfish"] = "minecraft:tropicalfish";
  MinecraftEntityTypes2["Turtle"] = "minecraft:turtle";
  MinecraftEntityTypes2["Vex"] = "minecraft:vex";
  MinecraftEntityTypes2["Villager"] = "minecraft:villager";
  MinecraftEntityTypes2["VillagerV2"] = "minecraft:villager_v2";
  MinecraftEntityTypes2["Vindicator"] = "minecraft:vindicator";
  MinecraftEntityTypes2["WanderingTrader"] = "minecraft:wandering_trader";
  MinecraftEntityTypes2["Warden"] = "minecraft:warden";
  MinecraftEntityTypes2["WindChargeProjectile"] = "minecraft:wind_charge_projectile";
  MinecraftEntityTypes2["Witch"] = "minecraft:witch";
  MinecraftEntityTypes2["Wither"] = "minecraft:wither";
  MinecraftEntityTypes2["WitherSkeleton"] = "minecraft:wither_skeleton";
  MinecraftEntityTypes2["WitherSkull"] = "minecraft:wither_skull";
  MinecraftEntityTypes2["WitherSkullDangerous"] = "minecraft:wither_skull_dangerous";
  MinecraftEntityTypes2["Wolf"] = "minecraft:wolf";
  MinecraftEntityTypes2["XpBottle"] = "minecraft:xp_bottle";
  MinecraftEntityTypes2["XpOrb"] = "minecraft:xp_orb";
  MinecraftEntityTypes2["Zoglin"] = "minecraft:zoglin";
  MinecraftEntityTypes2["Zombie"] = "minecraft:zombie";
  MinecraftEntityTypes2["ZombieHorse"] = "minecraft:zombie_horse";
  MinecraftEntityTypes2["ZombieNautilus"] = "minecraft:zombie_nautilus";
  MinecraftEntityTypes2["ZombiePigman"] = "minecraft:zombie_pigman";
  MinecraftEntityTypes2["ZombieVillager"] = "minecraft:zombie_villager";
  MinecraftEntityTypes2["ZombieVillagerV2"] = "minecraft:zombie_villager_v2";
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
  MinecraftItemTypes2["AcaciaShelf"] = "minecraft:acacia_shelf";
  MinecraftItemTypes2["AcaciaSign"] = "minecraft:acacia_sign";
  MinecraftItemTypes2["AcaciaSlab"] = "minecraft:acacia_slab";
  MinecraftItemTypes2["AcaciaStairs"] = "minecraft:acacia_stairs";
  MinecraftItemTypes2["AcaciaTrapdoor"] = "minecraft:acacia_trapdoor";
  MinecraftItemTypes2["AcaciaWood"] = "minecraft:acacia_wood";
  MinecraftItemTypes2["ActivatorRail"] = "minecraft:activator_rail";
  MinecraftItemTypes2["AllaySpawnEgg"] = "minecraft:allay_spawn_egg";
  MinecraftItemTypes2["Allium"] = "minecraft:allium";
  MinecraftItemTypes2["Allow"] = "minecraft:allow";
  MinecraftItemTypes2["AmethystBlock"] = "minecraft:amethyst_block";
  MinecraftItemTypes2["AmethystCluster"] = "minecraft:amethyst_cluster";
  MinecraftItemTypes2["AmethystShard"] = "minecraft:amethyst_shard";
  MinecraftItemTypes2["AncientDebris"] = "minecraft:ancient_debris";
  MinecraftItemTypes2["Andesite"] = "minecraft:andesite";
  MinecraftItemTypes2["AndesiteSlab"] = "minecraft:andesite_slab";
  MinecraftItemTypes2["AndesiteStairs"] = "minecraft:andesite_stairs";
  MinecraftItemTypes2["AndesiteWall"] = "minecraft:andesite_wall";
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
  MinecraftItemTypes2["BambooShelf"] = "minecraft:bamboo_shelf";
  MinecraftItemTypes2["BambooSign"] = "minecraft:bamboo_sign";
  MinecraftItemTypes2["BambooSlab"] = "minecraft:bamboo_slab";
  MinecraftItemTypes2["BambooStairs"] = "minecraft:bamboo_stairs";
  MinecraftItemTypes2["BambooTrapdoor"] = "minecraft:bamboo_trapdoor";
  MinecraftItemTypes2["Banner"] = "minecraft:banner";
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
  MinecraftItemTypes2["BirchShelf"] = "minecraft:birch_shelf";
  MinecraftItemTypes2["BirchSign"] = "minecraft:birch_sign";
  MinecraftItemTypes2["BirchSlab"] = "minecraft:birch_slab";
  MinecraftItemTypes2["BirchStairs"] = "minecraft:birch_stairs";
  MinecraftItemTypes2["BirchTrapdoor"] = "minecraft:birch_trapdoor";
  MinecraftItemTypes2["BirchWood"] = "minecraft:birch_wood";
  MinecraftItemTypes2["BlackBundle"] = "minecraft:black_bundle";
  MinecraftItemTypes2["BlackCandle"] = "minecraft:black_candle";
  MinecraftItemTypes2["BlackCarpet"] = "minecraft:black_carpet";
  MinecraftItemTypes2["BlackConcrete"] = "minecraft:black_concrete";
  MinecraftItemTypes2["BlackConcretePowder"] = "minecraft:black_concrete_powder";
  MinecraftItemTypes2["BlackDye"] = "minecraft:black_dye";
  MinecraftItemTypes2["BlackGlazedTerracotta"] = "minecraft:black_glazed_terracotta";
  MinecraftItemTypes2["BlackHarness"] = "minecraft:black_harness";
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
  MinecraftItemTypes2["BlueBundle"] = "minecraft:blue_bundle";
  MinecraftItemTypes2["BlueCandle"] = "minecraft:blue_candle";
  MinecraftItemTypes2["BlueCarpet"] = "minecraft:blue_carpet";
  MinecraftItemTypes2["BlueConcrete"] = "minecraft:blue_concrete";
  MinecraftItemTypes2["BlueConcretePowder"] = "minecraft:blue_concrete_powder";
  MinecraftItemTypes2["BlueDye"] = "minecraft:blue_dye";
  MinecraftItemTypes2["BlueEgg"] = "minecraft:blue_egg";
  MinecraftItemTypes2["BlueGlazedTerracotta"] = "minecraft:blue_glazed_terracotta";
  MinecraftItemTypes2["BlueHarness"] = "minecraft:blue_harness";
  MinecraftItemTypes2["BlueIce"] = "minecraft:blue_ice";
  MinecraftItemTypes2["BlueOrchid"] = "minecraft:blue_orchid";
  MinecraftItemTypes2["BlueShulkerBox"] = "minecraft:blue_shulker_box";
  MinecraftItemTypes2["BlueStainedGlass"] = "minecraft:blue_stained_glass";
  MinecraftItemTypes2["BlueStainedGlassPane"] = "minecraft:blue_stained_glass_pane";
  MinecraftItemTypes2["BlueTerracotta"] = "minecraft:blue_terracotta";
  MinecraftItemTypes2["BlueWool"] = "minecraft:blue_wool";
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
  MinecraftItemTypes2["BrickWall"] = "minecraft:brick_wall";
  MinecraftItemTypes2["BrownBundle"] = "minecraft:brown_bundle";
  MinecraftItemTypes2["BrownCandle"] = "minecraft:brown_candle";
  MinecraftItemTypes2["BrownCarpet"] = "minecraft:brown_carpet";
  MinecraftItemTypes2["BrownConcrete"] = "minecraft:brown_concrete";
  MinecraftItemTypes2["BrownConcretePowder"] = "minecraft:brown_concrete_powder";
  MinecraftItemTypes2["BrownDye"] = "minecraft:brown_dye";
  MinecraftItemTypes2["BrownEgg"] = "minecraft:brown_egg";
  MinecraftItemTypes2["BrownGlazedTerracotta"] = "minecraft:brown_glazed_terracotta";
  MinecraftItemTypes2["BrownHarness"] = "minecraft:brown_harness";
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
  MinecraftItemTypes2["Bundle"] = "minecraft:bundle";
  MinecraftItemTypes2["BurnPotterySherd"] = "minecraft:burn_pottery_sherd";
  MinecraftItemTypes2["Bush"] = "minecraft:bush";
  MinecraftItemTypes2["Cactus"] = "minecraft:cactus";
  MinecraftItemTypes2["CactusFlower"] = "minecraft:cactus_flower";
  MinecraftItemTypes2["Cake"] = "minecraft:cake";
  MinecraftItemTypes2["Calcite"] = "minecraft:calcite";
  MinecraftItemTypes2["CalibratedSculkSensor"] = "minecraft:calibrated_sculk_sensor";
  MinecraftItemTypes2["CamelHuskSpawnEgg"] = "minecraft:camel_husk_spawn_egg";
  MinecraftItemTypes2["CamelSpawnEgg"] = "minecraft:camel_spawn_egg";
  MinecraftItemTypes2["Campfire"] = "minecraft:campfire";
  MinecraftItemTypes2["Candle"] = "minecraft:candle";
  MinecraftItemTypes2["Carrot"] = "minecraft:carrot";
  MinecraftItemTypes2["CarrotOnAStick"] = "minecraft:carrot_on_a_stick";
  MinecraftItemTypes2["CartographyTable"] = "minecraft:cartography_table";
  MinecraftItemTypes2["CarvedPumpkin"] = "minecraft:carved_pumpkin";
  MinecraftItemTypes2["CatSpawnEgg"] = "minecraft:cat_spawn_egg";
  MinecraftItemTypes2["Cauldron"] = "minecraft:cauldron";
  MinecraftItemTypes2["CaveSpiderSpawnEgg"] = "minecraft:cave_spider_spawn_egg";
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
  MinecraftItemTypes2["CherryShelf"] = "minecraft:cherry_shelf";
  MinecraftItemTypes2["CherrySign"] = "minecraft:cherry_sign";
  MinecraftItemTypes2["CherrySlab"] = "minecraft:cherry_slab";
  MinecraftItemTypes2["CherryStairs"] = "minecraft:cherry_stairs";
  MinecraftItemTypes2["CherryTrapdoor"] = "minecraft:cherry_trapdoor";
  MinecraftItemTypes2["CherryWood"] = "minecraft:cherry_wood";
  MinecraftItemTypes2["Chest"] = "minecraft:chest";
  MinecraftItemTypes2["ChestMinecart"] = "minecraft:chest_minecart";
  MinecraftItemTypes2["Chicken"] = "minecraft:chicken";
  MinecraftItemTypes2["ChickenSpawnEgg"] = "minecraft:chicken_spawn_egg";
  MinecraftItemTypes2["ChippedAnvil"] = "minecraft:chipped_anvil";
  MinecraftItemTypes2["ChiseledBookshelf"] = "minecraft:chiseled_bookshelf";
  MinecraftItemTypes2["ChiseledCopper"] = "minecraft:chiseled_copper";
  MinecraftItemTypes2["ChiseledDeepslate"] = "minecraft:chiseled_deepslate";
  MinecraftItemTypes2["ChiseledNetherBricks"] = "minecraft:chiseled_nether_bricks";
  MinecraftItemTypes2["ChiseledPolishedBlackstone"] = "minecraft:chiseled_polished_blackstone";
  MinecraftItemTypes2["ChiseledQuartzBlock"] = "minecraft:chiseled_quartz_block";
  MinecraftItemTypes2["ChiseledRedSandstone"] = "minecraft:chiseled_red_sandstone";
  MinecraftItemTypes2["ChiseledResinBricks"] = "minecraft:chiseled_resin_bricks";
  MinecraftItemTypes2["ChiseledSandstone"] = "minecraft:chiseled_sandstone";
  MinecraftItemTypes2["ChiseledStoneBricks"] = "minecraft:chiseled_stone_bricks";
  MinecraftItemTypes2["ChiseledTuff"] = "minecraft:chiseled_tuff";
  MinecraftItemTypes2["ChiseledTuffBricks"] = "minecraft:chiseled_tuff_bricks";
  MinecraftItemTypes2["ChorusFlower"] = "minecraft:chorus_flower";
  MinecraftItemTypes2["ChorusFruit"] = "minecraft:chorus_fruit";
  MinecraftItemTypes2["ChorusPlant"] = "minecraft:chorus_plant";
  MinecraftItemTypes2["Clay"] = "minecraft:clay";
  MinecraftItemTypes2["ClayBall"] = "minecraft:clay_ball";
  MinecraftItemTypes2["Clock"] = "minecraft:clock";
  MinecraftItemTypes2["ClosedEyeblossom"] = "minecraft:closed_eyeblossom";
  MinecraftItemTypes2["Coal"] = "minecraft:coal";
  MinecraftItemTypes2["CoalBlock"] = "minecraft:coal_block";
  MinecraftItemTypes2["CoalOre"] = "minecraft:coal_ore";
  MinecraftItemTypes2["CoarseDirt"] = "minecraft:coarse_dirt";
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
  MinecraftItemTypes2["Conduit"] = "minecraft:conduit";
  MinecraftItemTypes2["CookedBeef"] = "minecraft:cooked_beef";
  MinecraftItemTypes2["CookedChicken"] = "minecraft:cooked_chicken";
  MinecraftItemTypes2["CookedCod"] = "minecraft:cooked_cod";
  MinecraftItemTypes2["CookedMutton"] = "minecraft:cooked_mutton";
  MinecraftItemTypes2["CookedPorkchop"] = "minecraft:cooked_porkchop";
  MinecraftItemTypes2["CookedRabbit"] = "minecraft:cooked_rabbit";
  MinecraftItemTypes2["CookedSalmon"] = "minecraft:cooked_salmon";
  MinecraftItemTypes2["Cookie"] = "minecraft:cookie";
  MinecraftItemTypes2["CopperAxe"] = "minecraft:copper_axe";
  MinecraftItemTypes2["CopperBars"] = "minecraft:copper_bars";
  MinecraftItemTypes2["CopperBlock"] = "minecraft:copper_block";
  MinecraftItemTypes2["CopperBoots"] = "minecraft:copper_boots";
  MinecraftItemTypes2["CopperBulb"] = "minecraft:copper_bulb";
  MinecraftItemTypes2["CopperChain"] = "minecraft:copper_chain";
  MinecraftItemTypes2["CopperChest"] = "minecraft:copper_chest";
  MinecraftItemTypes2["CopperChestplate"] = "minecraft:copper_chestplate";
  MinecraftItemTypes2["CopperDoor"] = "minecraft:copper_door";
  MinecraftItemTypes2["CopperGolemSpawnEgg"] = "minecraft:copper_golem_spawn_egg";
  MinecraftItemTypes2["CopperGolemStatue"] = "minecraft:copper_golem_statue";
  MinecraftItemTypes2["CopperGrate"] = "minecraft:copper_grate";
  MinecraftItemTypes2["CopperHelmet"] = "minecraft:copper_helmet";
  MinecraftItemTypes2["CopperHoe"] = "minecraft:copper_hoe";
  MinecraftItemTypes2["CopperHorseArmor"] = "minecraft:copper_horse_armor";
  MinecraftItemTypes2["CopperIngot"] = "minecraft:copper_ingot";
  MinecraftItemTypes2["CopperLantern"] = "minecraft:copper_lantern";
  MinecraftItemTypes2["CopperLeggings"] = "minecraft:copper_leggings";
  MinecraftItemTypes2["CopperNautilusArmor"] = "minecraft:copper_nautilus_armor";
  MinecraftItemTypes2["CopperNugget"] = "minecraft:copper_nugget";
  MinecraftItemTypes2["CopperOre"] = "minecraft:copper_ore";
  MinecraftItemTypes2["CopperPickaxe"] = "minecraft:copper_pickaxe";
  MinecraftItemTypes2["CopperShovel"] = "minecraft:copper_shovel";
  MinecraftItemTypes2["CopperSpear"] = "minecraft:copper_spear";
  MinecraftItemTypes2["CopperSword"] = "minecraft:copper_sword";
  MinecraftItemTypes2["CopperTorch"] = "minecraft:copper_torch";
  MinecraftItemTypes2["CopperTrapdoor"] = "minecraft:copper_trapdoor";
  MinecraftItemTypes2["Cornflower"] = "minecraft:cornflower";
  MinecraftItemTypes2["CowSpawnEgg"] = "minecraft:cow_spawn_egg";
  MinecraftItemTypes2["CrackedDeepslateBricks"] = "minecraft:cracked_deepslate_bricks";
  MinecraftItemTypes2["CrackedDeepslateTiles"] = "minecraft:cracked_deepslate_tiles";
  MinecraftItemTypes2["CrackedNetherBricks"] = "minecraft:cracked_nether_bricks";
  MinecraftItemTypes2["CrackedPolishedBlackstoneBricks"] = "minecraft:cracked_polished_blackstone_bricks";
  MinecraftItemTypes2["CrackedStoneBricks"] = "minecraft:cracked_stone_bricks";
  MinecraftItemTypes2["Crafter"] = "minecraft:crafter";
  MinecraftItemTypes2["CraftingTable"] = "minecraft:crafting_table";
  MinecraftItemTypes2["CreakingHeart"] = "minecraft:creaking_heart";
  MinecraftItemTypes2["CreakingSpawnEgg"] = "minecraft:creaking_spawn_egg";
  MinecraftItemTypes2["CreeperBannerPattern"] = "minecraft:creeper_banner_pattern";
  MinecraftItemTypes2["CreeperHead"] = "minecraft:creeper_head";
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
  MinecraftItemTypes2["CrimsonShelf"] = "minecraft:crimson_shelf";
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
  MinecraftItemTypes2["CutRedSandstone"] = "minecraft:cut_red_sandstone";
  MinecraftItemTypes2["CutRedSandstoneSlab"] = "minecraft:cut_red_sandstone_slab";
  MinecraftItemTypes2["CutSandstone"] = "minecraft:cut_sandstone";
  MinecraftItemTypes2["CutSandstoneSlab"] = "minecraft:cut_sandstone_slab";
  MinecraftItemTypes2["CyanBundle"] = "minecraft:cyan_bundle";
  MinecraftItemTypes2["CyanCandle"] = "minecraft:cyan_candle";
  MinecraftItemTypes2["CyanCarpet"] = "minecraft:cyan_carpet";
  MinecraftItemTypes2["CyanConcrete"] = "minecraft:cyan_concrete";
  MinecraftItemTypes2["CyanConcretePowder"] = "minecraft:cyan_concrete_powder";
  MinecraftItemTypes2["CyanDye"] = "minecraft:cyan_dye";
  MinecraftItemTypes2["CyanGlazedTerracotta"] = "minecraft:cyan_glazed_terracotta";
  MinecraftItemTypes2["CyanHarness"] = "minecraft:cyan_harness";
  MinecraftItemTypes2["CyanShulkerBox"] = "minecraft:cyan_shulker_box";
  MinecraftItemTypes2["CyanStainedGlass"] = "minecraft:cyan_stained_glass";
  MinecraftItemTypes2["CyanStainedGlassPane"] = "minecraft:cyan_stained_glass_pane";
  MinecraftItemTypes2["CyanTerracotta"] = "minecraft:cyan_terracotta";
  MinecraftItemTypes2["CyanWool"] = "minecraft:cyan_wool";
  MinecraftItemTypes2["DamagedAnvil"] = "minecraft:damaged_anvil";
  MinecraftItemTypes2["Dandelion"] = "minecraft:dandelion";
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
  MinecraftItemTypes2["DarkOakShelf"] = "minecraft:dark_oak_shelf";
  MinecraftItemTypes2["DarkOakSign"] = "minecraft:dark_oak_sign";
  MinecraftItemTypes2["DarkOakSlab"] = "minecraft:dark_oak_slab";
  MinecraftItemTypes2["DarkOakStairs"] = "minecraft:dark_oak_stairs";
  MinecraftItemTypes2["DarkOakTrapdoor"] = "minecraft:dark_oak_trapdoor";
  MinecraftItemTypes2["DarkOakWood"] = "minecraft:dark_oak_wood";
  MinecraftItemTypes2["DarkPrismarine"] = "minecraft:dark_prismarine";
  MinecraftItemTypes2["DarkPrismarineSlab"] = "minecraft:dark_prismarine_slab";
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
  MinecraftItemTypes2["DiamondNautilusArmor"] = "minecraft:diamond_nautilus_armor";
  MinecraftItemTypes2["DiamondOre"] = "minecraft:diamond_ore";
  MinecraftItemTypes2["DiamondPickaxe"] = "minecraft:diamond_pickaxe";
  MinecraftItemTypes2["DiamondShovel"] = "minecraft:diamond_shovel";
  MinecraftItemTypes2["DiamondSpear"] = "minecraft:diamond_spear";
  MinecraftItemTypes2["DiamondSword"] = "minecraft:diamond_sword";
  MinecraftItemTypes2["Diorite"] = "minecraft:diorite";
  MinecraftItemTypes2["DioriteSlab"] = "minecraft:diorite_slab";
  MinecraftItemTypes2["DioriteStairs"] = "minecraft:diorite_stairs";
  MinecraftItemTypes2["DioriteWall"] = "minecraft:diorite_wall";
  MinecraftItemTypes2["Dirt"] = "minecraft:dirt";
  MinecraftItemTypes2["DirtWithRoots"] = "minecraft:dirt_with_roots";
  MinecraftItemTypes2["DiscFragment5"] = "minecraft:disc_fragment_5";
  MinecraftItemTypes2["Dispenser"] = "minecraft:dispenser";
  MinecraftItemTypes2["DolphinSpawnEgg"] = "minecraft:dolphin_spawn_egg";
  MinecraftItemTypes2["DonkeySpawnEgg"] = "minecraft:donkey_spawn_egg";
  MinecraftItemTypes2["DragonBreath"] = "minecraft:dragon_breath";
  MinecraftItemTypes2["DragonEgg"] = "minecraft:dragon_egg";
  MinecraftItemTypes2["DragonHead"] = "minecraft:dragon_head";
  MinecraftItemTypes2["DriedGhast"] = "minecraft:dried_ghast";
  MinecraftItemTypes2["DriedKelp"] = "minecraft:dried_kelp";
  MinecraftItemTypes2["DriedKelpBlock"] = "minecraft:dried_kelp_block";
  MinecraftItemTypes2["DripstoneBlock"] = "minecraft:dripstone_block";
  MinecraftItemTypes2["Dropper"] = "minecraft:dropper";
  MinecraftItemTypes2["DrownedSpawnEgg"] = "minecraft:drowned_spawn_egg";
  MinecraftItemTypes2["DuneArmorTrimSmithingTemplate"] = "minecraft:dune_armor_trim_smithing_template";
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
  MinecraftItemTypes2["EndStoneBrickSlab"] = "minecraft:end_stone_brick_slab";
  MinecraftItemTypes2["EndStoneBrickWall"] = "minecraft:end_stone_brick_wall";
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
  MinecraftItemTypes2["ExposedCopperBars"] = "minecraft:exposed_copper_bars";
  MinecraftItemTypes2["ExposedCopperBulb"] = "minecraft:exposed_copper_bulb";
  MinecraftItemTypes2["ExposedCopperChain"] = "minecraft:exposed_copper_chain";
  MinecraftItemTypes2["ExposedCopperChest"] = "minecraft:exposed_copper_chest";
  MinecraftItemTypes2["ExposedCopperDoor"] = "minecraft:exposed_copper_door";
  MinecraftItemTypes2["ExposedCopperGolemStatue"] = "minecraft:exposed_copper_golem_statue";
  MinecraftItemTypes2["ExposedCopperGrate"] = "minecraft:exposed_copper_grate";
  MinecraftItemTypes2["ExposedCopperLantern"] = "minecraft:exposed_copper_lantern";
  MinecraftItemTypes2["ExposedCopperTrapdoor"] = "minecraft:exposed_copper_trapdoor";
  MinecraftItemTypes2["ExposedCutCopper"] = "minecraft:exposed_cut_copper";
  MinecraftItemTypes2["ExposedCutCopperSlab"] = "minecraft:exposed_cut_copper_slab";
  MinecraftItemTypes2["ExposedCutCopperStairs"] = "minecraft:exposed_cut_copper_stairs";
  MinecraftItemTypes2["ExposedLightningRod"] = "minecraft:exposed_lightning_rod";
  MinecraftItemTypes2["EyeArmorTrimSmithingTemplate"] = "minecraft:eye_armor_trim_smithing_template";
  MinecraftItemTypes2["Farmland"] = "minecraft:farmland";
  MinecraftItemTypes2["Feather"] = "minecraft:feather";
  MinecraftItemTypes2["FenceGate"] = "minecraft:fence_gate";
  MinecraftItemTypes2["FermentedSpiderEye"] = "minecraft:fermented_spider_eye";
  MinecraftItemTypes2["Fern"] = "minecraft:fern";
  MinecraftItemTypes2["FieldMasonedBannerPattern"] = "minecraft:field_masoned_banner_pattern";
  MinecraftItemTypes2["FilledMap"] = "minecraft:filled_map";
  MinecraftItemTypes2["FireCharge"] = "minecraft:fire_charge";
  MinecraftItemTypes2["FireCoral"] = "minecraft:fire_coral";
  MinecraftItemTypes2["FireCoralBlock"] = "minecraft:fire_coral_block";
  MinecraftItemTypes2["FireCoralFan"] = "minecraft:fire_coral_fan";
  MinecraftItemTypes2["FireflyBush"] = "minecraft:firefly_bush";
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
  MinecraftItemTypes2["GoldenNautilusArmor"] = "minecraft:golden_nautilus_armor";
  MinecraftItemTypes2["GoldenPickaxe"] = "minecraft:golden_pickaxe";
  MinecraftItemTypes2["GoldenRail"] = "minecraft:golden_rail";
  MinecraftItemTypes2["GoldenShovel"] = "minecraft:golden_shovel";
  MinecraftItemTypes2["GoldenSpear"] = "minecraft:golden_spear";
  MinecraftItemTypes2["GoldenSword"] = "minecraft:golden_sword";
  MinecraftItemTypes2["Granite"] = "minecraft:granite";
  MinecraftItemTypes2["GraniteSlab"] = "minecraft:granite_slab";
  MinecraftItemTypes2["GraniteStairs"] = "minecraft:granite_stairs";
  MinecraftItemTypes2["GraniteWall"] = "minecraft:granite_wall";
  MinecraftItemTypes2["GrassBlock"] = "minecraft:grass_block";
  MinecraftItemTypes2["GrassPath"] = "minecraft:grass_path";
  MinecraftItemTypes2["Gravel"] = "minecraft:gravel";
  MinecraftItemTypes2["GrayBundle"] = "minecraft:gray_bundle";
  MinecraftItemTypes2["GrayCandle"] = "minecraft:gray_candle";
  MinecraftItemTypes2["GrayCarpet"] = "minecraft:gray_carpet";
  MinecraftItemTypes2["GrayConcrete"] = "minecraft:gray_concrete";
  MinecraftItemTypes2["GrayConcretePowder"] = "minecraft:gray_concrete_powder";
  MinecraftItemTypes2["GrayDye"] = "minecraft:gray_dye";
  MinecraftItemTypes2["GrayGlazedTerracotta"] = "minecraft:gray_glazed_terracotta";
  MinecraftItemTypes2["GrayHarness"] = "minecraft:gray_harness";
  MinecraftItemTypes2["GrayShulkerBox"] = "minecraft:gray_shulker_box";
  MinecraftItemTypes2["GrayStainedGlass"] = "minecraft:gray_stained_glass";
  MinecraftItemTypes2["GrayStainedGlassPane"] = "minecraft:gray_stained_glass_pane";
  MinecraftItemTypes2["GrayTerracotta"] = "minecraft:gray_terracotta";
  MinecraftItemTypes2["GrayWool"] = "minecraft:gray_wool";
  MinecraftItemTypes2["GreenBundle"] = "minecraft:green_bundle";
  MinecraftItemTypes2["GreenCandle"] = "minecraft:green_candle";
  MinecraftItemTypes2["GreenCarpet"] = "minecraft:green_carpet";
  MinecraftItemTypes2["GreenConcrete"] = "minecraft:green_concrete";
  MinecraftItemTypes2["GreenConcretePowder"] = "minecraft:green_concrete_powder";
  MinecraftItemTypes2["GreenDye"] = "minecraft:green_dye";
  MinecraftItemTypes2["GreenGlazedTerracotta"] = "minecraft:green_glazed_terracotta";
  MinecraftItemTypes2["GreenHarness"] = "minecraft:green_harness";
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
  MinecraftItemTypes2["HappyGhastSpawnEgg"] = "minecraft:happy_ghast_spawn_egg";
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
  MinecraftItemTypes2["InfestedChiseledStoneBricks"] = "minecraft:infested_chiseled_stone_bricks";
  MinecraftItemTypes2["InfestedCobblestone"] = "minecraft:infested_cobblestone";
  MinecraftItemTypes2["InfestedCrackedStoneBricks"] = "minecraft:infested_cracked_stone_bricks";
  MinecraftItemTypes2["InfestedDeepslate"] = "minecraft:infested_deepslate";
  MinecraftItemTypes2["InfestedMossyStoneBricks"] = "minecraft:infested_mossy_stone_bricks";
  MinecraftItemTypes2["InfestedStone"] = "minecraft:infested_stone";
  MinecraftItemTypes2["InfestedStoneBricks"] = "minecraft:infested_stone_bricks";
  MinecraftItemTypes2["InkSac"] = "minecraft:ink_sac";
  MinecraftItemTypes2["IronAxe"] = "minecraft:iron_axe";
  MinecraftItemTypes2["IronBars"] = "minecraft:iron_bars";
  MinecraftItemTypes2["IronBlock"] = "minecraft:iron_block";
  MinecraftItemTypes2["IronBoots"] = "minecraft:iron_boots";
  MinecraftItemTypes2["IronChain"] = "minecraft:iron_chain";
  MinecraftItemTypes2["IronChestplate"] = "minecraft:iron_chestplate";
  MinecraftItemTypes2["IronDoor"] = "minecraft:iron_door";
  MinecraftItemTypes2["IronGolemSpawnEgg"] = "minecraft:iron_golem_spawn_egg";
  MinecraftItemTypes2["IronHelmet"] = "minecraft:iron_helmet";
  MinecraftItemTypes2["IronHoe"] = "minecraft:iron_hoe";
  MinecraftItemTypes2["IronHorseArmor"] = "minecraft:iron_horse_armor";
  MinecraftItemTypes2["IronIngot"] = "minecraft:iron_ingot";
  MinecraftItemTypes2["IronLeggings"] = "minecraft:iron_leggings";
  MinecraftItemTypes2["IronNautilusArmor"] = "minecraft:iron_nautilus_armor";
  MinecraftItemTypes2["IronNugget"] = "minecraft:iron_nugget";
  MinecraftItemTypes2["IronOre"] = "minecraft:iron_ore";
  MinecraftItemTypes2["IronPickaxe"] = "minecraft:iron_pickaxe";
  MinecraftItemTypes2["IronShovel"] = "minecraft:iron_shovel";
  MinecraftItemTypes2["IronSpear"] = "minecraft:iron_spear";
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
  MinecraftItemTypes2["JungleShelf"] = "minecraft:jungle_shelf";
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
  MinecraftItemTypes2["LeafLitter"] = "minecraft:leaf_litter";
  MinecraftItemTypes2["Leather"] = "minecraft:leather";
  MinecraftItemTypes2["LeatherBoots"] = "minecraft:leather_boots";
  MinecraftItemTypes2["LeatherChestplate"] = "minecraft:leather_chestplate";
  MinecraftItemTypes2["LeatherHelmet"] = "minecraft:leather_helmet";
  MinecraftItemTypes2["LeatherHorseArmor"] = "minecraft:leather_horse_armor";
  MinecraftItemTypes2["LeatherLeggings"] = "minecraft:leather_leggings";
  MinecraftItemTypes2["Lectern"] = "minecraft:lectern";
  MinecraftItemTypes2["Lever"] = "minecraft:lever";
  MinecraftItemTypes2["LightBlock0"] = "minecraft:light_block_0";
  MinecraftItemTypes2["LightBlock1"] = "minecraft:light_block_1";
  MinecraftItemTypes2["LightBlock10"] = "minecraft:light_block_10";
  MinecraftItemTypes2["LightBlock11"] = "minecraft:light_block_11";
  MinecraftItemTypes2["LightBlock12"] = "minecraft:light_block_12";
  MinecraftItemTypes2["LightBlock13"] = "minecraft:light_block_13";
  MinecraftItemTypes2["LightBlock14"] = "minecraft:light_block_14";
  MinecraftItemTypes2["LightBlock15"] = "minecraft:light_block_15";
  MinecraftItemTypes2["LightBlock2"] = "minecraft:light_block_2";
  MinecraftItemTypes2["LightBlock3"] = "minecraft:light_block_3";
  MinecraftItemTypes2["LightBlock4"] = "minecraft:light_block_4";
  MinecraftItemTypes2["LightBlock5"] = "minecraft:light_block_5";
  MinecraftItemTypes2["LightBlock6"] = "minecraft:light_block_6";
  MinecraftItemTypes2["LightBlock7"] = "minecraft:light_block_7";
  MinecraftItemTypes2["LightBlock8"] = "minecraft:light_block_8";
  MinecraftItemTypes2["LightBlock9"] = "minecraft:light_block_9";
  MinecraftItemTypes2["LightBlueBundle"] = "minecraft:light_blue_bundle";
  MinecraftItemTypes2["LightBlueCandle"] = "minecraft:light_blue_candle";
  MinecraftItemTypes2["LightBlueCarpet"] = "minecraft:light_blue_carpet";
  MinecraftItemTypes2["LightBlueConcrete"] = "minecraft:light_blue_concrete";
  MinecraftItemTypes2["LightBlueConcretePowder"] = "minecraft:light_blue_concrete_powder";
  MinecraftItemTypes2["LightBlueDye"] = "minecraft:light_blue_dye";
  MinecraftItemTypes2["LightBlueGlazedTerracotta"] = "minecraft:light_blue_glazed_terracotta";
  MinecraftItemTypes2["LightBlueHarness"] = "minecraft:light_blue_harness";
  MinecraftItemTypes2["LightBlueShulkerBox"] = "minecraft:light_blue_shulker_box";
  MinecraftItemTypes2["LightBlueStainedGlass"] = "minecraft:light_blue_stained_glass";
  MinecraftItemTypes2["LightBlueStainedGlassPane"] = "minecraft:light_blue_stained_glass_pane";
  MinecraftItemTypes2["LightBlueTerracotta"] = "minecraft:light_blue_terracotta";
  MinecraftItemTypes2["LightBlueWool"] = "minecraft:light_blue_wool";
  MinecraftItemTypes2["LightGrayBundle"] = "minecraft:light_gray_bundle";
  MinecraftItemTypes2["LightGrayCandle"] = "minecraft:light_gray_candle";
  MinecraftItemTypes2["LightGrayCarpet"] = "minecraft:light_gray_carpet";
  MinecraftItemTypes2["LightGrayConcrete"] = "minecraft:light_gray_concrete";
  MinecraftItemTypes2["LightGrayConcretePowder"] = "minecraft:light_gray_concrete_powder";
  MinecraftItemTypes2["LightGrayDye"] = "minecraft:light_gray_dye";
  MinecraftItemTypes2["LightGrayHarness"] = "minecraft:light_gray_harness";
  MinecraftItemTypes2["LightGrayShulkerBox"] = "minecraft:light_gray_shulker_box";
  MinecraftItemTypes2["LightGrayStainedGlass"] = "minecraft:light_gray_stained_glass";
  MinecraftItemTypes2["LightGrayStainedGlassPane"] = "minecraft:light_gray_stained_glass_pane";
  MinecraftItemTypes2["LightGrayTerracotta"] = "minecraft:light_gray_terracotta";
  MinecraftItemTypes2["LightGrayWool"] = "minecraft:light_gray_wool";
  MinecraftItemTypes2["LightWeightedPressurePlate"] = "minecraft:light_weighted_pressure_plate";
  MinecraftItemTypes2["LightningRod"] = "minecraft:lightning_rod";
  MinecraftItemTypes2["Lilac"] = "minecraft:lilac";
  MinecraftItemTypes2["LilyOfTheValley"] = "minecraft:lily_of_the_valley";
  MinecraftItemTypes2["LimeBundle"] = "minecraft:lime_bundle";
  MinecraftItemTypes2["LimeCandle"] = "minecraft:lime_candle";
  MinecraftItemTypes2["LimeCarpet"] = "minecraft:lime_carpet";
  MinecraftItemTypes2["LimeConcrete"] = "minecraft:lime_concrete";
  MinecraftItemTypes2["LimeConcretePowder"] = "minecraft:lime_concrete_powder";
  MinecraftItemTypes2["LimeDye"] = "minecraft:lime_dye";
  MinecraftItemTypes2["LimeGlazedTerracotta"] = "minecraft:lime_glazed_terracotta";
  MinecraftItemTypes2["LimeHarness"] = "minecraft:lime_harness";
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
  MinecraftItemTypes2["Loom"] = "minecraft:loom";
  MinecraftItemTypes2["Mace"] = "minecraft:mace";
  MinecraftItemTypes2["MagentaBundle"] = "minecraft:magenta_bundle";
  MinecraftItemTypes2["MagentaCandle"] = "minecraft:magenta_candle";
  MinecraftItemTypes2["MagentaCarpet"] = "minecraft:magenta_carpet";
  MinecraftItemTypes2["MagentaConcrete"] = "minecraft:magenta_concrete";
  MinecraftItemTypes2["MagentaConcretePowder"] = "minecraft:magenta_concrete_powder";
  MinecraftItemTypes2["MagentaDye"] = "minecraft:magenta_dye";
  MinecraftItemTypes2["MagentaGlazedTerracotta"] = "minecraft:magenta_glazed_terracotta";
  MinecraftItemTypes2["MagentaHarness"] = "minecraft:magenta_harness";
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
  MinecraftItemTypes2["MangroveShelf"] = "minecraft:mangrove_shelf";
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
  MinecraftItemTypes2["MooshroomSpawnEgg"] = "minecraft:mooshroom_spawn_egg";
  MinecraftItemTypes2["MossBlock"] = "minecraft:moss_block";
  MinecraftItemTypes2["MossCarpet"] = "minecraft:moss_carpet";
  MinecraftItemTypes2["MossyCobblestone"] = "minecraft:mossy_cobblestone";
  MinecraftItemTypes2["MossyCobblestoneSlab"] = "minecraft:mossy_cobblestone_slab";
  MinecraftItemTypes2["MossyCobblestoneStairs"] = "minecraft:mossy_cobblestone_stairs";
  MinecraftItemTypes2["MossyCobblestoneWall"] = "minecraft:mossy_cobblestone_wall";
  MinecraftItemTypes2["MossyStoneBrickSlab"] = "minecraft:mossy_stone_brick_slab";
  MinecraftItemTypes2["MossyStoneBrickStairs"] = "minecraft:mossy_stone_brick_stairs";
  MinecraftItemTypes2["MossyStoneBrickWall"] = "minecraft:mossy_stone_brick_wall";
  MinecraftItemTypes2["MossyStoneBricks"] = "minecraft:mossy_stone_bricks";
  MinecraftItemTypes2["MournerPotterySherd"] = "minecraft:mourner_pottery_sherd";
  MinecraftItemTypes2["Mud"] = "minecraft:mud";
  MinecraftItemTypes2["MudBrickSlab"] = "minecraft:mud_brick_slab";
  MinecraftItemTypes2["MudBrickStairs"] = "minecraft:mud_brick_stairs";
  MinecraftItemTypes2["MudBrickWall"] = "minecraft:mud_brick_wall";
  MinecraftItemTypes2["MudBricks"] = "minecraft:mud_bricks";
  MinecraftItemTypes2["MuddyMangroveRoots"] = "minecraft:muddy_mangrove_roots";
  MinecraftItemTypes2["MuleSpawnEgg"] = "minecraft:mule_spawn_egg";
  MinecraftItemTypes2["MushroomStem"] = "minecraft:mushroom_stem";
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
  MinecraftItemTypes2["MusicDiscLavaChicken"] = "minecraft:music_disc_lava_chicken";
  MinecraftItemTypes2["MusicDiscMall"] = "minecraft:music_disc_mall";
  MinecraftItemTypes2["MusicDiscMellohi"] = "minecraft:music_disc_mellohi";
  MinecraftItemTypes2["MusicDiscOtherside"] = "minecraft:music_disc_otherside";
  MinecraftItemTypes2["MusicDiscPigstep"] = "minecraft:music_disc_pigstep";
  MinecraftItemTypes2["MusicDiscPrecipice"] = "minecraft:music_disc_precipice";
  MinecraftItemTypes2["MusicDiscRelic"] = "minecraft:music_disc_relic";
  MinecraftItemTypes2["MusicDiscStal"] = "minecraft:music_disc_stal";
  MinecraftItemTypes2["MusicDiscStrad"] = "minecraft:music_disc_strad";
  MinecraftItemTypes2["MusicDiscTears"] = "minecraft:music_disc_tears";
  MinecraftItemTypes2["MusicDiscWait"] = "minecraft:music_disc_wait";
  MinecraftItemTypes2["MusicDiscWard"] = "minecraft:music_disc_ward";
  MinecraftItemTypes2["Mutton"] = "minecraft:mutton";
  MinecraftItemTypes2["Mycelium"] = "minecraft:mycelium";
  MinecraftItemTypes2["NameTag"] = "minecraft:name_tag";
  MinecraftItemTypes2["NautilusShell"] = "minecraft:nautilus_shell";
  MinecraftItemTypes2["NautilusSpawnEgg"] = "minecraft:nautilus_spawn_egg";
  MinecraftItemTypes2["NetherBrick"] = "minecraft:nether_brick";
  MinecraftItemTypes2["NetherBrickFence"] = "minecraft:nether_brick_fence";
  MinecraftItemTypes2["NetherBrickSlab"] = "minecraft:nether_brick_slab";
  MinecraftItemTypes2["NetherBrickStairs"] = "minecraft:nether_brick_stairs";
  MinecraftItemTypes2["NetherBrickWall"] = "minecraft:nether_brick_wall";
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
  MinecraftItemTypes2["NetheriteHorseArmor"] = "minecraft:netherite_horse_armor";
  MinecraftItemTypes2["NetheriteIngot"] = "minecraft:netherite_ingot";
  MinecraftItemTypes2["NetheriteLeggings"] = "minecraft:netherite_leggings";
  MinecraftItemTypes2["NetheriteNautilusArmor"] = "minecraft:netherite_nautilus_armor";
  MinecraftItemTypes2["NetheritePickaxe"] = "minecraft:netherite_pickaxe";
  MinecraftItemTypes2["NetheriteScrap"] = "minecraft:netherite_scrap";
  MinecraftItemTypes2["NetheriteShovel"] = "minecraft:netherite_shovel";
  MinecraftItemTypes2["NetheriteSpear"] = "minecraft:netherite_spear";
  MinecraftItemTypes2["NetheriteSword"] = "minecraft:netherite_sword";
  MinecraftItemTypes2["NetheriteUpgradeSmithingTemplate"] = "minecraft:netherite_upgrade_smithing_template";
  MinecraftItemTypes2["Netherrack"] = "minecraft:netherrack";
  MinecraftItemTypes2["NormalStoneSlab"] = "minecraft:normal_stone_slab";
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
  MinecraftItemTypes2["OakShelf"] = "minecraft:oak_shelf";
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
  MinecraftItemTypes2["OpenEyeblossom"] = "minecraft:open_eyeblossom";
  MinecraftItemTypes2["OrangeBundle"] = "minecraft:orange_bundle";
  MinecraftItemTypes2["OrangeCandle"] = "minecraft:orange_candle";
  MinecraftItemTypes2["OrangeCarpet"] = "minecraft:orange_carpet";
  MinecraftItemTypes2["OrangeConcrete"] = "minecraft:orange_concrete";
  MinecraftItemTypes2["OrangeConcretePowder"] = "minecraft:orange_concrete_powder";
  MinecraftItemTypes2["OrangeDye"] = "minecraft:orange_dye";
  MinecraftItemTypes2["OrangeGlazedTerracotta"] = "minecraft:orange_glazed_terracotta";
  MinecraftItemTypes2["OrangeHarness"] = "minecraft:orange_harness";
  MinecraftItemTypes2["OrangeShulkerBox"] = "minecraft:orange_shulker_box";
  MinecraftItemTypes2["OrangeStainedGlass"] = "minecraft:orange_stained_glass";
  MinecraftItemTypes2["OrangeStainedGlassPane"] = "minecraft:orange_stained_glass_pane";
  MinecraftItemTypes2["OrangeTerracotta"] = "minecraft:orange_terracotta";
  MinecraftItemTypes2["OrangeTulip"] = "minecraft:orange_tulip";
  MinecraftItemTypes2["OrangeWool"] = "minecraft:orange_wool";
  MinecraftItemTypes2["OxeyeDaisy"] = "minecraft:oxeye_daisy";
  MinecraftItemTypes2["OxidizedChiseledCopper"] = "minecraft:oxidized_chiseled_copper";
  MinecraftItemTypes2["OxidizedCopper"] = "minecraft:oxidized_copper";
  MinecraftItemTypes2["OxidizedCopperBars"] = "minecraft:oxidized_copper_bars";
  MinecraftItemTypes2["OxidizedCopperBulb"] = "minecraft:oxidized_copper_bulb";
  MinecraftItemTypes2["OxidizedCopperChain"] = "minecraft:oxidized_copper_chain";
  MinecraftItemTypes2["OxidizedCopperChest"] = "minecraft:oxidized_copper_chest";
  MinecraftItemTypes2["OxidizedCopperDoor"] = "minecraft:oxidized_copper_door";
  MinecraftItemTypes2["OxidizedCopperGolemStatue"] = "minecraft:oxidized_copper_golem_statue";
  MinecraftItemTypes2["OxidizedCopperGrate"] = "minecraft:oxidized_copper_grate";
  MinecraftItemTypes2["OxidizedCopperLantern"] = "minecraft:oxidized_copper_lantern";
  MinecraftItemTypes2["OxidizedCopperTrapdoor"] = "minecraft:oxidized_copper_trapdoor";
  MinecraftItemTypes2["OxidizedCutCopper"] = "minecraft:oxidized_cut_copper";
  MinecraftItemTypes2["OxidizedCutCopperSlab"] = "minecraft:oxidized_cut_copper_slab";
  MinecraftItemTypes2["OxidizedCutCopperStairs"] = "minecraft:oxidized_cut_copper_stairs";
  MinecraftItemTypes2["OxidizedLightningRod"] = "minecraft:oxidized_lightning_rod";
  MinecraftItemTypes2["PackedIce"] = "minecraft:packed_ice";
  MinecraftItemTypes2["PackedMud"] = "minecraft:packed_mud";
  MinecraftItemTypes2["Painting"] = "minecraft:painting";
  MinecraftItemTypes2["PaleHangingMoss"] = "minecraft:pale_hanging_moss";
  MinecraftItemTypes2["PaleMossBlock"] = "minecraft:pale_moss_block";
  MinecraftItemTypes2["PaleMossCarpet"] = "minecraft:pale_moss_carpet";
  MinecraftItemTypes2["PaleOakBoat"] = "minecraft:pale_oak_boat";
  MinecraftItemTypes2["PaleOakButton"] = "minecraft:pale_oak_button";
  MinecraftItemTypes2["PaleOakChestBoat"] = "minecraft:pale_oak_chest_boat";
  MinecraftItemTypes2["PaleOakDoor"] = "minecraft:pale_oak_door";
  MinecraftItemTypes2["PaleOakFence"] = "minecraft:pale_oak_fence";
  MinecraftItemTypes2["PaleOakFenceGate"] = "minecraft:pale_oak_fence_gate";
  MinecraftItemTypes2["PaleOakHangingSign"] = "minecraft:pale_oak_hanging_sign";
  MinecraftItemTypes2["PaleOakLeaves"] = "minecraft:pale_oak_leaves";
  MinecraftItemTypes2["PaleOakLog"] = "minecraft:pale_oak_log";
  MinecraftItemTypes2["PaleOakPlanks"] = "minecraft:pale_oak_planks";
  MinecraftItemTypes2["PaleOakPressurePlate"] = "minecraft:pale_oak_pressure_plate";
  MinecraftItemTypes2["PaleOakSapling"] = "minecraft:pale_oak_sapling";
  MinecraftItemTypes2["PaleOakShelf"] = "minecraft:pale_oak_shelf";
  MinecraftItemTypes2["PaleOakSign"] = "minecraft:pale_oak_sign";
  MinecraftItemTypes2["PaleOakSlab"] = "minecraft:pale_oak_slab";
  MinecraftItemTypes2["PaleOakStairs"] = "minecraft:pale_oak_stairs";
  MinecraftItemTypes2["PaleOakTrapdoor"] = "minecraft:pale_oak_trapdoor";
  MinecraftItemTypes2["PaleOakWood"] = "minecraft:pale_oak_wood";
  MinecraftItemTypes2["PandaSpawnEgg"] = "minecraft:panda_spawn_egg";
  MinecraftItemTypes2["Paper"] = "minecraft:paper";
  MinecraftItemTypes2["ParchedSpawnEgg"] = "minecraft:parched_spawn_egg";
  MinecraftItemTypes2["ParrotSpawnEgg"] = "minecraft:parrot_spawn_egg";
  MinecraftItemTypes2["PearlescentFroglight"] = "minecraft:pearlescent_froglight";
  MinecraftItemTypes2["Peony"] = "minecraft:peony";
  MinecraftItemTypes2["PetrifiedOakSlab"] = "minecraft:petrified_oak_slab";
  MinecraftItemTypes2["PhantomMembrane"] = "minecraft:phantom_membrane";
  MinecraftItemTypes2["PhantomSpawnEgg"] = "minecraft:phantom_spawn_egg";
  MinecraftItemTypes2["PigSpawnEgg"] = "minecraft:pig_spawn_egg";
  MinecraftItemTypes2["PiglinBannerPattern"] = "minecraft:piglin_banner_pattern";
  MinecraftItemTypes2["PiglinBruteSpawnEgg"] = "minecraft:piglin_brute_spawn_egg";
  MinecraftItemTypes2["PiglinHead"] = "minecraft:piglin_head";
  MinecraftItemTypes2["PiglinSpawnEgg"] = "minecraft:piglin_spawn_egg";
  MinecraftItemTypes2["PillagerSpawnEgg"] = "minecraft:pillager_spawn_egg";
  MinecraftItemTypes2["PinkBundle"] = "minecraft:pink_bundle";
  MinecraftItemTypes2["PinkCandle"] = "minecraft:pink_candle";
  MinecraftItemTypes2["PinkCarpet"] = "minecraft:pink_carpet";
  MinecraftItemTypes2["PinkConcrete"] = "minecraft:pink_concrete";
  MinecraftItemTypes2["PinkConcretePowder"] = "minecraft:pink_concrete_powder";
  MinecraftItemTypes2["PinkDye"] = "minecraft:pink_dye";
  MinecraftItemTypes2["PinkGlazedTerracotta"] = "minecraft:pink_glazed_terracotta";
  MinecraftItemTypes2["PinkHarness"] = "minecraft:pink_harness";
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
  MinecraftItemTypes2["PlayerHead"] = "minecraft:player_head";
  MinecraftItemTypes2["PlentyPotterySherd"] = "minecraft:plenty_pottery_sherd";
  MinecraftItemTypes2["Podzol"] = "minecraft:podzol";
  MinecraftItemTypes2["PointedDripstone"] = "minecraft:pointed_dripstone";
  MinecraftItemTypes2["PoisonousPotato"] = "minecraft:poisonous_potato";
  MinecraftItemTypes2["PolarBearSpawnEgg"] = "minecraft:polar_bear_spawn_egg";
  MinecraftItemTypes2["PolishedAndesite"] = "minecraft:polished_andesite";
  MinecraftItemTypes2["PolishedAndesiteSlab"] = "minecraft:polished_andesite_slab";
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
  MinecraftItemTypes2["PolishedDioriteSlab"] = "minecraft:polished_diorite_slab";
  MinecraftItemTypes2["PolishedDioriteStairs"] = "minecraft:polished_diorite_stairs";
  MinecraftItemTypes2["PolishedGranite"] = "minecraft:polished_granite";
  MinecraftItemTypes2["PolishedGraniteSlab"] = "minecraft:polished_granite_slab";
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
  MinecraftItemTypes2["PrismarineBrickSlab"] = "minecraft:prismarine_brick_slab";
  MinecraftItemTypes2["PrismarineBricks"] = "minecraft:prismarine_bricks";
  MinecraftItemTypes2["PrismarineBricksStairs"] = "minecraft:prismarine_bricks_stairs";
  MinecraftItemTypes2["PrismarineCrystals"] = "minecraft:prismarine_crystals";
  MinecraftItemTypes2["PrismarineShard"] = "minecraft:prismarine_shard";
  MinecraftItemTypes2["PrismarineSlab"] = "minecraft:prismarine_slab";
  MinecraftItemTypes2["PrismarineStairs"] = "minecraft:prismarine_stairs";
  MinecraftItemTypes2["PrismarineWall"] = "minecraft:prismarine_wall";
  MinecraftItemTypes2["PrizePotterySherd"] = "minecraft:prize_pottery_sherd";
  MinecraftItemTypes2["Pufferfish"] = "minecraft:pufferfish";
  MinecraftItemTypes2["PufferfishBucket"] = "minecraft:pufferfish_bucket";
  MinecraftItemTypes2["PufferfishSpawnEgg"] = "minecraft:pufferfish_spawn_egg";
  MinecraftItemTypes2["Pumpkin"] = "minecraft:pumpkin";
  MinecraftItemTypes2["PumpkinPie"] = "minecraft:pumpkin_pie";
  MinecraftItemTypes2["PumpkinSeeds"] = "minecraft:pumpkin_seeds";
  MinecraftItemTypes2["PurpleBundle"] = "minecraft:purple_bundle";
  MinecraftItemTypes2["PurpleCandle"] = "minecraft:purple_candle";
  MinecraftItemTypes2["PurpleCarpet"] = "minecraft:purple_carpet";
  MinecraftItemTypes2["PurpleConcrete"] = "minecraft:purple_concrete";
  MinecraftItemTypes2["PurpleConcretePowder"] = "minecraft:purple_concrete_powder";
  MinecraftItemTypes2["PurpleDye"] = "minecraft:purple_dye";
  MinecraftItemTypes2["PurpleGlazedTerracotta"] = "minecraft:purple_glazed_terracotta";
  MinecraftItemTypes2["PurpleHarness"] = "minecraft:purple_harness";
  MinecraftItemTypes2["PurpleShulkerBox"] = "minecraft:purple_shulker_box";
  MinecraftItemTypes2["PurpleStainedGlass"] = "minecraft:purple_stained_glass";
  MinecraftItemTypes2["PurpleStainedGlassPane"] = "minecraft:purple_stained_glass_pane";
  MinecraftItemTypes2["PurpleTerracotta"] = "minecraft:purple_terracotta";
  MinecraftItemTypes2["PurpleWool"] = "minecraft:purple_wool";
  MinecraftItemTypes2["PurpurBlock"] = "minecraft:purpur_block";
  MinecraftItemTypes2["PurpurPillar"] = "minecraft:purpur_pillar";
  MinecraftItemTypes2["PurpurSlab"] = "minecraft:purpur_slab";
  MinecraftItemTypes2["PurpurStairs"] = "minecraft:purpur_stairs";
  MinecraftItemTypes2["Quartz"] = "minecraft:quartz";
  MinecraftItemTypes2["QuartzBlock"] = "minecraft:quartz_block";
  MinecraftItemTypes2["QuartzBricks"] = "minecraft:quartz_bricks";
  MinecraftItemTypes2["QuartzOre"] = "minecraft:quartz_ore";
  MinecraftItemTypes2["QuartzPillar"] = "minecraft:quartz_pillar";
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
  MinecraftItemTypes2["RedBundle"] = "minecraft:red_bundle";
  MinecraftItemTypes2["RedCandle"] = "minecraft:red_candle";
  MinecraftItemTypes2["RedCarpet"] = "minecraft:red_carpet";
  MinecraftItemTypes2["RedConcrete"] = "minecraft:red_concrete";
  MinecraftItemTypes2["RedConcretePowder"] = "minecraft:red_concrete_powder";
  MinecraftItemTypes2["RedDye"] = "minecraft:red_dye";
  MinecraftItemTypes2["RedGlazedTerracotta"] = "minecraft:red_glazed_terracotta";
  MinecraftItemTypes2["RedHarness"] = "minecraft:red_harness";
  MinecraftItemTypes2["RedMushroom"] = "minecraft:red_mushroom";
  MinecraftItemTypes2["RedMushroomBlock"] = "minecraft:red_mushroom_block";
  MinecraftItemTypes2["RedNetherBrick"] = "minecraft:red_nether_brick";
  MinecraftItemTypes2["RedNetherBrickSlab"] = "minecraft:red_nether_brick_slab";
  MinecraftItemTypes2["RedNetherBrickStairs"] = "minecraft:red_nether_brick_stairs";
  MinecraftItemTypes2["RedNetherBrickWall"] = "minecraft:red_nether_brick_wall";
  MinecraftItemTypes2["RedSand"] = "minecraft:red_sand";
  MinecraftItemTypes2["RedSandstone"] = "minecraft:red_sandstone";
  MinecraftItemTypes2["RedSandstoneSlab"] = "minecraft:red_sandstone_slab";
  MinecraftItemTypes2["RedSandstoneStairs"] = "minecraft:red_sandstone_stairs";
  MinecraftItemTypes2["RedSandstoneWall"] = "minecraft:red_sandstone_wall";
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
  MinecraftItemTypes2["ResinBlock"] = "minecraft:resin_block";
  MinecraftItemTypes2["ResinBrick"] = "minecraft:resin_brick";
  MinecraftItemTypes2["ResinBrickSlab"] = "minecraft:resin_brick_slab";
  MinecraftItemTypes2["ResinBrickStairs"] = "minecraft:resin_brick_stairs";
  MinecraftItemTypes2["ResinBrickWall"] = "minecraft:resin_brick_wall";
  MinecraftItemTypes2["ResinBricks"] = "minecraft:resin_bricks";
  MinecraftItemTypes2["ResinClump"] = "minecraft:resin_clump";
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
  MinecraftItemTypes2["SandstoneWall"] = "minecraft:sandstone_wall";
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
  MinecraftItemTypes2["ShortDryGrass"] = "minecraft:short_dry_grass";
  MinecraftItemTypes2["ShortGrass"] = "minecraft:short_grass";
  MinecraftItemTypes2["Shroomlight"] = "minecraft:shroomlight";
  MinecraftItemTypes2["ShulkerShell"] = "minecraft:shulker_shell";
  MinecraftItemTypes2["ShulkerSpawnEgg"] = "minecraft:shulker_spawn_egg";
  MinecraftItemTypes2["SilenceArmorTrimSmithingTemplate"] = "minecraft:silence_armor_trim_smithing_template";
  MinecraftItemTypes2["SilverGlazedTerracotta"] = "minecraft:silver_glazed_terracotta";
  MinecraftItemTypes2["SilverfishSpawnEgg"] = "minecraft:silverfish_spawn_egg";
  MinecraftItemTypes2["SkeletonHorseSpawnEgg"] = "minecraft:skeleton_horse_spawn_egg";
  MinecraftItemTypes2["SkeletonSkull"] = "minecraft:skeleton_skull";
  MinecraftItemTypes2["SkeletonSpawnEgg"] = "minecraft:skeleton_spawn_egg";
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
  MinecraftItemTypes2["SmoothQuartz"] = "minecraft:smooth_quartz";
  MinecraftItemTypes2["SmoothQuartzSlab"] = "minecraft:smooth_quartz_slab";
  MinecraftItemTypes2["SmoothQuartzStairs"] = "minecraft:smooth_quartz_stairs";
  MinecraftItemTypes2["SmoothRedSandstone"] = "minecraft:smooth_red_sandstone";
  MinecraftItemTypes2["SmoothRedSandstoneSlab"] = "minecraft:smooth_red_sandstone_slab";
  MinecraftItemTypes2["SmoothRedSandstoneStairs"] = "minecraft:smooth_red_sandstone_stairs";
  MinecraftItemTypes2["SmoothSandstone"] = "minecraft:smooth_sandstone";
  MinecraftItemTypes2["SmoothSandstoneSlab"] = "minecraft:smooth_sandstone_slab";
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
  MinecraftItemTypes2["SpruceShelf"] = "minecraft:spruce_shelf";
  MinecraftItemTypes2["SpruceSign"] = "minecraft:spruce_sign";
  MinecraftItemTypes2["SpruceSlab"] = "minecraft:spruce_slab";
  MinecraftItemTypes2["SpruceStairs"] = "minecraft:spruce_stairs";
  MinecraftItemTypes2["SpruceTrapdoor"] = "minecraft:spruce_trapdoor";
  MinecraftItemTypes2["SpruceWood"] = "minecraft:spruce_wood";
  MinecraftItemTypes2["Spyglass"] = "minecraft:spyglass";
  MinecraftItemTypes2["SquidSpawnEgg"] = "minecraft:squid_spawn_egg";
  MinecraftItemTypes2["Stick"] = "minecraft:stick";
  MinecraftItemTypes2["StickyPiston"] = "minecraft:sticky_piston";
  MinecraftItemTypes2["Stone"] = "minecraft:stone";
  MinecraftItemTypes2["StoneAxe"] = "minecraft:stone_axe";
  MinecraftItemTypes2["StoneBrickSlab"] = "minecraft:stone_brick_slab";
  MinecraftItemTypes2["StoneBrickStairs"] = "minecraft:stone_brick_stairs";
  MinecraftItemTypes2["StoneBrickWall"] = "minecraft:stone_brick_wall";
  MinecraftItemTypes2["StoneBricks"] = "minecraft:stone_bricks";
  MinecraftItemTypes2["StoneButton"] = "minecraft:stone_button";
  MinecraftItemTypes2["StoneHoe"] = "minecraft:stone_hoe";
  MinecraftItemTypes2["StonePickaxe"] = "minecraft:stone_pickaxe";
  MinecraftItemTypes2["StonePressurePlate"] = "minecraft:stone_pressure_plate";
  MinecraftItemTypes2["StoneShovel"] = "minecraft:stone_shovel";
  MinecraftItemTypes2["StoneSpear"] = "minecraft:stone_spear";
  MinecraftItemTypes2["StoneStairs"] = "minecraft:stone_stairs";
  MinecraftItemTypes2["StoneSword"] = "minecraft:stone_sword";
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
  MinecraftItemTypes2["StrippedPaleOakLog"] = "minecraft:stripped_pale_oak_log";
  MinecraftItemTypes2["StrippedPaleOakWood"] = "minecraft:stripped_pale_oak_wood";
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
  MinecraftItemTypes2["TallDryGrass"] = "minecraft:tall_dry_grass";
  MinecraftItemTypes2["TallGrass"] = "minecraft:tall_grass";
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
  MinecraftItemTypes2["WarpedShelf"] = "minecraft:warped_shelf";
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
  MinecraftItemTypes2["WaxedCopperBars"] = "minecraft:waxed_copper_bars";
  MinecraftItemTypes2["WaxedCopperBulb"] = "minecraft:waxed_copper_bulb";
  MinecraftItemTypes2["WaxedCopperChain"] = "minecraft:waxed_copper_chain";
  MinecraftItemTypes2["WaxedCopperChest"] = "minecraft:waxed_copper_chest";
  MinecraftItemTypes2["WaxedCopperDoor"] = "minecraft:waxed_copper_door";
  MinecraftItemTypes2["WaxedCopperGolemStatue"] = "minecraft:waxed_copper_golem_statue";
  MinecraftItemTypes2["WaxedCopperGrate"] = "minecraft:waxed_copper_grate";
  MinecraftItemTypes2["WaxedCopperLantern"] = "minecraft:waxed_copper_lantern";
  MinecraftItemTypes2["WaxedCopperTrapdoor"] = "minecraft:waxed_copper_trapdoor";
  MinecraftItemTypes2["WaxedCutCopper"] = "minecraft:waxed_cut_copper";
  MinecraftItemTypes2["WaxedCutCopperSlab"] = "minecraft:waxed_cut_copper_slab";
  MinecraftItemTypes2["WaxedCutCopperStairs"] = "minecraft:waxed_cut_copper_stairs";
  MinecraftItemTypes2["WaxedExposedChiseledCopper"] = "minecraft:waxed_exposed_chiseled_copper";
  MinecraftItemTypes2["WaxedExposedCopper"] = "minecraft:waxed_exposed_copper";
  MinecraftItemTypes2["WaxedExposedCopperBars"] = "minecraft:waxed_exposed_copper_bars";
  MinecraftItemTypes2["WaxedExposedCopperBulb"] = "minecraft:waxed_exposed_copper_bulb";
  MinecraftItemTypes2["WaxedExposedCopperChain"] = "minecraft:waxed_exposed_copper_chain";
  MinecraftItemTypes2["WaxedExposedCopperChest"] = "minecraft:waxed_exposed_copper_chest";
  MinecraftItemTypes2["WaxedExposedCopperDoor"] = "minecraft:waxed_exposed_copper_door";
  MinecraftItemTypes2["WaxedExposedCopperGolemStatue"] = "minecraft:waxed_exposed_copper_golem_statue";
  MinecraftItemTypes2["WaxedExposedCopperGrate"] = "minecraft:waxed_exposed_copper_grate";
  MinecraftItemTypes2["WaxedExposedCopperLantern"] = "minecraft:waxed_exposed_copper_lantern";
  MinecraftItemTypes2["WaxedExposedCopperTrapdoor"] = "minecraft:waxed_exposed_copper_trapdoor";
  MinecraftItemTypes2["WaxedExposedCutCopper"] = "minecraft:waxed_exposed_cut_copper";
  MinecraftItemTypes2["WaxedExposedCutCopperSlab"] = "minecraft:waxed_exposed_cut_copper_slab";
  MinecraftItemTypes2["WaxedExposedCutCopperStairs"] = "minecraft:waxed_exposed_cut_copper_stairs";
  MinecraftItemTypes2["WaxedExposedLightningRod"] = "minecraft:waxed_exposed_lightning_rod";
  MinecraftItemTypes2["WaxedLightningRod"] = "minecraft:waxed_lightning_rod";
  MinecraftItemTypes2["WaxedOxidizedChiseledCopper"] = "minecraft:waxed_oxidized_chiseled_copper";
  MinecraftItemTypes2["WaxedOxidizedCopper"] = "minecraft:waxed_oxidized_copper";
  MinecraftItemTypes2["WaxedOxidizedCopperBars"] = "minecraft:waxed_oxidized_copper_bars";
  MinecraftItemTypes2["WaxedOxidizedCopperBulb"] = "minecraft:waxed_oxidized_copper_bulb";
  MinecraftItemTypes2["WaxedOxidizedCopperChain"] = "minecraft:waxed_oxidized_copper_chain";
  MinecraftItemTypes2["WaxedOxidizedCopperChest"] = "minecraft:waxed_oxidized_copper_chest";
  MinecraftItemTypes2["WaxedOxidizedCopperDoor"] = "minecraft:waxed_oxidized_copper_door";
  MinecraftItemTypes2["WaxedOxidizedCopperGolemStatue"] = "minecraft:waxed_oxidized_copper_golem_statue";
  MinecraftItemTypes2["WaxedOxidizedCopperGrate"] = "minecraft:waxed_oxidized_copper_grate";
  MinecraftItemTypes2["WaxedOxidizedCopperLantern"] = "minecraft:waxed_oxidized_copper_lantern";
  MinecraftItemTypes2["WaxedOxidizedCopperTrapdoor"] = "minecraft:waxed_oxidized_copper_trapdoor";
  MinecraftItemTypes2["WaxedOxidizedCutCopper"] = "minecraft:waxed_oxidized_cut_copper";
  MinecraftItemTypes2["WaxedOxidizedCutCopperSlab"] = "minecraft:waxed_oxidized_cut_copper_slab";
  MinecraftItemTypes2["WaxedOxidizedCutCopperStairs"] = "minecraft:waxed_oxidized_cut_copper_stairs";
  MinecraftItemTypes2["WaxedOxidizedLightningRod"] = "minecraft:waxed_oxidized_lightning_rod";
  MinecraftItemTypes2["WaxedWeatheredChiseledCopper"] = "minecraft:waxed_weathered_chiseled_copper";
  MinecraftItemTypes2["WaxedWeatheredCopper"] = "minecraft:waxed_weathered_copper";
  MinecraftItemTypes2["WaxedWeatheredCopperBars"] = "minecraft:waxed_weathered_copper_bars";
  MinecraftItemTypes2["WaxedWeatheredCopperBulb"] = "minecraft:waxed_weathered_copper_bulb";
  MinecraftItemTypes2["WaxedWeatheredCopperChain"] = "minecraft:waxed_weathered_copper_chain";
  MinecraftItemTypes2["WaxedWeatheredCopperChest"] = "minecraft:waxed_weathered_copper_chest";
  MinecraftItemTypes2["WaxedWeatheredCopperDoor"] = "minecraft:waxed_weathered_copper_door";
  MinecraftItemTypes2["WaxedWeatheredCopperGolemStatue"] = "minecraft:waxed_weathered_copper_golem_statue";
  MinecraftItemTypes2["WaxedWeatheredCopperGrate"] = "minecraft:waxed_weathered_copper_grate";
  MinecraftItemTypes2["WaxedWeatheredCopperLantern"] = "minecraft:waxed_weathered_copper_lantern";
  MinecraftItemTypes2["WaxedWeatheredCopperTrapdoor"] = "minecraft:waxed_weathered_copper_trapdoor";
  MinecraftItemTypes2["WaxedWeatheredCutCopper"] = "minecraft:waxed_weathered_cut_copper";
  MinecraftItemTypes2["WaxedWeatheredCutCopperSlab"] = "minecraft:waxed_weathered_cut_copper_slab";
  MinecraftItemTypes2["WaxedWeatheredCutCopperStairs"] = "minecraft:waxed_weathered_cut_copper_stairs";
  MinecraftItemTypes2["WaxedWeatheredLightningRod"] = "minecraft:waxed_weathered_lightning_rod";
  MinecraftItemTypes2["WayfinderArmorTrimSmithingTemplate"] = "minecraft:wayfinder_armor_trim_smithing_template";
  MinecraftItemTypes2["WeatheredChiseledCopper"] = "minecraft:weathered_chiseled_copper";
  MinecraftItemTypes2["WeatheredCopper"] = "minecraft:weathered_copper";
  MinecraftItemTypes2["WeatheredCopperBars"] = "minecraft:weathered_copper_bars";
  MinecraftItemTypes2["WeatheredCopperBulb"] = "minecraft:weathered_copper_bulb";
  MinecraftItemTypes2["WeatheredCopperChain"] = "minecraft:weathered_copper_chain";
  MinecraftItemTypes2["WeatheredCopperChest"] = "minecraft:weathered_copper_chest";
  MinecraftItemTypes2["WeatheredCopperDoor"] = "minecraft:weathered_copper_door";
  MinecraftItemTypes2["WeatheredCopperGolemStatue"] = "minecraft:weathered_copper_golem_statue";
  MinecraftItemTypes2["WeatheredCopperGrate"] = "minecraft:weathered_copper_grate";
  MinecraftItemTypes2["WeatheredCopperLantern"] = "minecraft:weathered_copper_lantern";
  MinecraftItemTypes2["WeatheredCopperTrapdoor"] = "minecraft:weathered_copper_trapdoor";
  MinecraftItemTypes2["WeatheredCutCopper"] = "minecraft:weathered_cut_copper";
  MinecraftItemTypes2["WeatheredCutCopperSlab"] = "minecraft:weathered_cut_copper_slab";
  MinecraftItemTypes2["WeatheredCutCopperStairs"] = "minecraft:weathered_cut_copper_stairs";
  MinecraftItemTypes2["WeatheredLightningRod"] = "minecraft:weathered_lightning_rod";
  MinecraftItemTypes2["Web"] = "minecraft:web";
  MinecraftItemTypes2["WeepingVines"] = "minecraft:weeping_vines";
  MinecraftItemTypes2["WetSponge"] = "minecraft:wet_sponge";
  MinecraftItemTypes2["Wheat"] = "minecraft:wheat";
  MinecraftItemTypes2["WheatSeeds"] = "minecraft:wheat_seeds";
  MinecraftItemTypes2["WhiteBundle"] = "minecraft:white_bundle";
  MinecraftItemTypes2["WhiteCandle"] = "minecraft:white_candle";
  MinecraftItemTypes2["WhiteCarpet"] = "minecraft:white_carpet";
  MinecraftItemTypes2["WhiteConcrete"] = "minecraft:white_concrete";
  MinecraftItemTypes2["WhiteConcretePowder"] = "minecraft:white_concrete_powder";
  MinecraftItemTypes2["WhiteDye"] = "minecraft:white_dye";
  MinecraftItemTypes2["WhiteGlazedTerracotta"] = "minecraft:white_glazed_terracotta";
  MinecraftItemTypes2["WhiteHarness"] = "minecraft:white_harness";
  MinecraftItemTypes2["WhiteShulkerBox"] = "minecraft:white_shulker_box";
  MinecraftItemTypes2["WhiteStainedGlass"] = "minecraft:white_stained_glass";
  MinecraftItemTypes2["WhiteStainedGlassPane"] = "minecraft:white_stained_glass_pane";
  MinecraftItemTypes2["WhiteTerracotta"] = "minecraft:white_terracotta";
  MinecraftItemTypes2["WhiteTulip"] = "minecraft:white_tulip";
  MinecraftItemTypes2["WhiteWool"] = "minecraft:white_wool";
  MinecraftItemTypes2["WildArmorTrimSmithingTemplate"] = "minecraft:wild_armor_trim_smithing_template";
  MinecraftItemTypes2["Wildflowers"] = "minecraft:wildflowers";
  MinecraftItemTypes2["WindCharge"] = "minecraft:wind_charge";
  MinecraftItemTypes2["WitchSpawnEgg"] = "minecraft:witch_spawn_egg";
  MinecraftItemTypes2["WitherRose"] = "minecraft:wither_rose";
  MinecraftItemTypes2["WitherSkeletonSkull"] = "minecraft:wither_skeleton_skull";
  MinecraftItemTypes2["WitherSkeletonSpawnEgg"] = "minecraft:wither_skeleton_spawn_egg";
  MinecraftItemTypes2["WitherSpawnEgg"] = "minecraft:wither_spawn_egg";
  MinecraftItemTypes2["WolfArmor"] = "minecraft:wolf_armor";
  MinecraftItemTypes2["WolfSpawnEgg"] = "minecraft:wolf_spawn_egg";
  MinecraftItemTypes2["WoodenAxe"] = "minecraft:wooden_axe";
  MinecraftItemTypes2["WoodenButton"] = "minecraft:wooden_button";
  MinecraftItemTypes2["WoodenDoor"] = "minecraft:wooden_door";
  MinecraftItemTypes2["WoodenHoe"] = "minecraft:wooden_hoe";
  MinecraftItemTypes2["WoodenPickaxe"] = "minecraft:wooden_pickaxe";
  MinecraftItemTypes2["WoodenPressurePlate"] = "minecraft:wooden_pressure_plate";
  MinecraftItemTypes2["WoodenShovel"] = "minecraft:wooden_shovel";
  MinecraftItemTypes2["WoodenSpear"] = "minecraft:wooden_spear";
  MinecraftItemTypes2["WoodenSword"] = "minecraft:wooden_sword";
  MinecraftItemTypes2["WritableBook"] = "minecraft:writable_book";
  MinecraftItemTypes2["YellowBundle"] = "minecraft:yellow_bundle";
  MinecraftItemTypes2["YellowCandle"] = "minecraft:yellow_candle";
  MinecraftItemTypes2["YellowCarpet"] = "minecraft:yellow_carpet";
  MinecraftItemTypes2["YellowConcrete"] = "minecraft:yellow_concrete";
  MinecraftItemTypes2["YellowConcretePowder"] = "minecraft:yellow_concrete_powder";
  MinecraftItemTypes2["YellowDye"] = "minecraft:yellow_dye";
  MinecraftItemTypes2["YellowGlazedTerracotta"] = "minecraft:yellow_glazed_terracotta";
  MinecraftItemTypes2["YellowHarness"] = "minecraft:yellow_harness";
  MinecraftItemTypes2["YellowShulkerBox"] = "minecraft:yellow_shulker_box";
  MinecraftItemTypes2["YellowStainedGlass"] = "minecraft:yellow_stained_glass";
  MinecraftItemTypes2["YellowStainedGlassPane"] = "minecraft:yellow_stained_glass_pane";
  MinecraftItemTypes2["YellowTerracotta"] = "minecraft:yellow_terracotta";
  MinecraftItemTypes2["YellowWool"] = "minecraft:yellow_wool";
  MinecraftItemTypes2["ZoglinSpawnEgg"] = "minecraft:zoglin_spawn_egg";
  MinecraftItemTypes2["ZombieHead"] = "minecraft:zombie_head";
  MinecraftItemTypes2["ZombieHorseSpawnEgg"] = "minecraft:zombie_horse_spawn_egg";
  MinecraftItemTypes2["ZombieNautilusSpawnEgg"] = "minecraft:zombie_nautilus_spawn_egg";
  MinecraftItemTypes2["ZombiePigmanSpawnEgg"] = "minecraft:zombie_pigman_spawn_egg";
  MinecraftItemTypes2["ZombieSpawnEgg"] = "minecraft:zombie_spawn_egg";
  MinecraftItemTypes2["ZombieVillagerSpawnEgg"] = "minecraft:zombie_villager_spawn_egg";
  return MinecraftItemTypes2;
})(MinecraftItemTypes || {});
var MinecraftPotionDeliveryTypes = ((MinecraftPotionDeliveryTypes2) => {
  MinecraftPotionDeliveryTypes2["Consume"] = "Consume";
  MinecraftPotionDeliveryTypes2["ThrownLingering"] = "ThrownLingering";
  MinecraftPotionDeliveryTypes2["ThrownSplash"] = "ThrownSplash";
  return MinecraftPotionDeliveryTypes2;
})(MinecraftPotionDeliveryTypes || {});
var MinecraftPotionEffectTypes = ((MinecraftPotionEffectTypes2) => {
  MinecraftPotionEffectTypes2["Awkward"] = "minecraft:awkward";
  MinecraftPotionEffectTypes2["FireResistance"] = "minecraft:fire_resistance";
  MinecraftPotionEffectTypes2["Harming"] = "minecraft:harming";
  MinecraftPotionEffectTypes2["Healing"] = "minecraft:healing";
  MinecraftPotionEffectTypes2["Infested"] = "minecraft:infested";
  MinecraftPotionEffectTypes2["Invisibility"] = "minecraft:invisibility";
  MinecraftPotionEffectTypes2["Leaping"] = "minecraft:leaping";
  MinecraftPotionEffectTypes2["LongFireResistance"] = "minecraft:long_fire_resistance";
  MinecraftPotionEffectTypes2["LongInvisibility"] = "minecraft:long_invisibility";
  MinecraftPotionEffectTypes2["LongLeaping"] = "minecraft:long_leaping";
  MinecraftPotionEffectTypes2["LongMundane"] = "minecraft:long_mundane";
  MinecraftPotionEffectTypes2["LongNightvision"] = "minecraft:long_nightvision";
  MinecraftPotionEffectTypes2["LongPoison"] = "minecraft:long_poison";
  MinecraftPotionEffectTypes2["LongRegeneration"] = "minecraft:long_regeneration";
  MinecraftPotionEffectTypes2["LongSlowFalling"] = "minecraft:long_slow_falling";
  MinecraftPotionEffectTypes2["LongSlowness"] = "minecraft:long_slowness";
  MinecraftPotionEffectTypes2["LongStrength"] = "minecraft:long_strength";
  MinecraftPotionEffectTypes2["LongSwiftness"] = "minecraft:long_swiftness";
  MinecraftPotionEffectTypes2["LongTurtleMaster"] = "minecraft:long_turtle_master";
  MinecraftPotionEffectTypes2["LongWaterBreathing"] = "minecraft:long_water_breathing";
  MinecraftPotionEffectTypes2["LongWeakness"] = "minecraft:long_weakness";
  MinecraftPotionEffectTypes2["Mundane"] = "minecraft:mundane";
  MinecraftPotionEffectTypes2["Nightvision"] = "minecraft:nightvision";
  MinecraftPotionEffectTypes2["Oozing"] = "minecraft:oozing";
  MinecraftPotionEffectTypes2["Poison"] = "minecraft:poison";
  MinecraftPotionEffectTypes2["Regeneration"] = "minecraft:regeneration";
  MinecraftPotionEffectTypes2["SlowFalling"] = "minecraft:slow_falling";
  MinecraftPotionEffectTypes2["Slowness"] = "minecraft:slowness";
  MinecraftPotionEffectTypes2["Strength"] = "minecraft:strength";
  MinecraftPotionEffectTypes2["StrongHarming"] = "minecraft:strong_harming";
  MinecraftPotionEffectTypes2["StrongHealing"] = "minecraft:strong_healing";
  MinecraftPotionEffectTypes2["StrongLeaping"] = "minecraft:strong_leaping";
  MinecraftPotionEffectTypes2["StrongPoison"] = "minecraft:strong_poison";
  MinecraftPotionEffectTypes2["StrongRegeneration"] = "minecraft:strong_regeneration";
  MinecraftPotionEffectTypes2["StrongSlowness"] = "minecraft:strong_slowness";
  MinecraftPotionEffectTypes2["StrongStrength"] = "minecraft:strong_strength";
  MinecraftPotionEffectTypes2["StrongSwiftness"] = "minecraft:strong_swiftness";
  MinecraftPotionEffectTypes2["StrongTurtleMaster"] = "minecraft:strong_turtle_master";
  MinecraftPotionEffectTypes2["Swiftness"] = "minecraft:swiftness";
  MinecraftPotionEffectTypes2["Thick"] = "minecraft:thick";
  MinecraftPotionEffectTypes2["TurtleMaster"] = "minecraft:turtle_master";
  MinecraftPotionEffectTypes2["Water"] = "minecraft:water";
  MinecraftPotionEffectTypes2["WaterBreathing"] = "minecraft:water_breathing";
  MinecraftPotionEffectTypes2["Weakness"] = "minecraft:weakness";
  MinecraftPotionEffectTypes2["Weaving"] = "minecraft:weaving";
  MinecraftPotionEffectTypes2["WindCharged"] = "minecraft:wind_charged";
  MinecraftPotionEffectTypes2["Wither"] = "minecraft:wither";
  return MinecraftPotionEffectTypes2;
})(MinecraftPotionEffectTypes || {});

// scripts/bossEvents.ts
import { system as system2, world as world2 } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

// scripts/addonCompatibility/jigarbov.ts
import { world, system } from "@minecraft/server";
var ComputersCompat = class {
  //set your namespace
  static addonNameSpace = "poke_pfe";
  //leave the rest!
  static computersScoreboardID = "jig_computer.addon_stats";
  static addonStatScoreboardID = `${this.addonNameSpace}:${this.computersScoreboardID}`;
  static addonStatObjective;
  /**
   * Initializes the scoreboard's required for Jigs Computers Add-On to have stats for this add-on
   * @static
   */
  static init() {
    if (!world.scoreboard.getObjective(this.addonStatScoreboardID)) {
      world.scoreboard.addObjective(this.addonStatScoreboardID, "dummy");
    }
    this.addonStatObjective = world.scoreboard.getObjective(this.addonStatScoreboardID);
  }
  /**
   * Adds to a statistic tracked by Jigs Computers Add-On.
   *
   * @param statID - The identifier of the statistic to add, defined in {@link StatIDs}.
   * @param amount - The amount to add to the statistic.
   */
  static addStat(statID, amount) {
    this.addonStatObjective?.addScore(`${this.addonNameSpace}:${statID}`, amount);
  }
};
var initExampleStickers = () => {
  const entities = {
    "poke_pfe:bone_bear": [{ itemId: "poke_pfe:bone_bear_sticker" }],
    "poke_pfe:brown_sporefish": [{ itemId: "poke_pfe:brown_sporefish_sticker" }],
    "poke_pfe:cassette_trader": [{ itemId: "poke_pfe:cassette_trader_sticker" }],
    "poke_pfe:cobalt_golem": [{ itemId: "poke_pfe:_sticker" }],
    "poke_pfe:cosmetic_trader": [{ itemId: "poke_pfe:_sticker" }],
    "poke_pfe:crimson_sporeshroom": [{ itemId: "poke_pfe:crimson_sporeshroom_sticker" }],
    "poke_pfe:demonic_allay": [{ itemId: "poke_pfe:demonic_allay_sticker" }],
    "poke_pfe:duck": [{ itemId: "poke_pfe:duck_sticker" }],
    "poke_pfe:ender_phantom": [{ itemId: "poke_pfe:ender_phantom_sticker" }],
    "poke_pfe:robo_golem": [{ itemId: "poke_pfe:furnace_golem_sticker" }],
    "poke_pfe:gilded_allay": [{ itemId: "poke_pfe:_sticker" }],
    "poke_pfe:grizzly_bear": [{ itemId: "poke_pfe:grizzly_bear_sticker" }],
    "poke_pfe:knightling": [{ itemId: "poke_pfe:knightling_sticker" }],
    "poke_pfe:listener": [{ itemId: "poke_pfe:listener_sticker" }],
    "poke_pfe:logger": [{ itemId: "poke_pfe:logger_sticker" }],
    "poke_pfe:mini_demonic_allay": [{ itemId: "poke_pfe:mini_demonic_allay_sticker" }],
    "poke_pfe:money_man": [{ itemId: "poke_pfe:money_man_sticker" }],
    "poke_pfe:mushroom_buddy": [{ itemId: "poke_pfe:mushroom_buddy_sticker" }],
    "poke_pfe:nebula_bug": [{ itemId: "poke_pfe:nebula_bug_sticker" }],
    "poke_pfe:necromancer": [{ itemId: "poke_pfe:necromancer_sticker" }],
    "poke_pfe:orange_squid": [{ itemId: "poke_pfe:orange_squid_sticker" }],
    "poke_pfe:pale_ocelot": [{ itemId: "poke_pfe:pale_ocelot_sticker" }],
    "poke_pfe:pink_squid": [{ itemId: "poke_pfe:pink_squid_sticker" }],
    "poke_pfe:piranha": [{ itemId: "poke_pfe:piranha_sticker" }],
    "poke_pfe:quest_trader": [{ itemId: "poke_pfe:quest_trader_sticker" }],
    "poke_pfe:raccoon": [{ itemId: "poke_pfe:raccoon_sticker" }],
    "poke_pfe:rat": [{ itemId: "poke_pfe:rat_sticker" }],
    "poke_pfe:red_panda": [{ itemId: "poke_pfe:red_panda_sticker" }],
    "poke_pfe:red_sporefish": [{ itemId: "poke_pfe:red_sporefish_sticker" }],
    "poke_pfe:retro_llama": [{ itemId: "poke_pfe:retro_llama_sticker" }],
    "poke_pfe:scrapper": [{ itemId: "poke_pfe:scrapper_sticker" }],
    "poke_pfe:sculk_enderman": [{ itemId: "poke_pfe:sculk_enderman_sticker" }],
    "poke_pfe:shallow_cod": [{ itemId: "poke_pfe:shallow_cod_sticker" }],
    "poke_pfe:shopkeeper": [{ itemId: "poke_pfe:shopkeeper_sticker" }],
    "poke_pfe:shroomfin": [{ itemId: "poke_pfe:shroomfin_sticker" }],
    "poke_pfe:snowman": [{ itemId: "poke_pfe:snowman_sticker" }],
    "poke_pfe:soul_blaze": [{ itemId: "poke_pfe:soul_blaze_sticker" }],
    "poke_pfe:sparky": [{ itemId: "poke_pfe:sparky_sticker" }],
    "poke_pfe:sporefish": [{ itemId: "poke_pfe:sporefish_sticker" }],
    "poke_pfe:striker": [{ itemId: "poke_pfe:striker_sticker" }],
    "poke_pfe:super_striker": [{ itemId: "poke_pfe:super_striker_sticker" }],
    "poke_pfe:token_trader": [{ itemId: "poke_pfe:token_trader_sticker" }],
    "poke_pfe:warped_sporecat": [{ itemId: "poke_pfe:warped_sporecat_sticker" }],
    "poke_pfe:warped_sporeshroom": [{ itemId: "poke_pfe:warped_sporeshroom_sticker" }],
    "poke_pfe:windswept_bear": [{ itemId: "poke_pfe:windswept_bear_sticker" }],
    "poke_pfe:woodspike_guardian": [{ itemId: "poke_pfe:woodspike_guardian_sticker" }],
    "poke_pfe:yak": [{ itemId: "poke_pfe:_sticker" }],
    "poke_pfe:zombken": [{ itemId: "poke_pfe:zombken_sticker" }]
    /*'your_namespace:example_complex_mob': [
    {itemId: 'your_namespace:normal_sticker_1',specialItemId: 'your_namespace:rare_sticker_1',conditions: [{component: 'minecraft:variant',componentValue: 0}]},
    {itemId: 'your_namespace:normal_sticker_2',specialItemId: 'your_namespace:rare_sticker_2',conditions: [{component: 'minecraft:variant',componentValue: 1}]}	],*/
  };
  const chunkObject = (obj, chunkSize) => {
    const keys = Object.keys(obj);
    const chunks = [];
    for (let i = 0; i < keys.length; i += chunkSize) {
      const chunk = {};
      keys.slice(i, i + chunkSize).forEach((key) => {
        chunk[key] = obj[key];
      });
      chunks.push(chunk);
    }
    return chunks;
  };
  const entityChunks = chunkObject(entities, 4);
  entityChunks.forEach((entityChunk, index) => {
    const m = {
      id: Math.random().toString(16),
      type: "request",
      endpoint: "addStickers",
      params: [1, entityChunk],
      // Use only a chunk of entities
      callback: void 0
    };
    const delay = 10 + index;
    system.runTimeout(
      () => void world.getDimension("overworld").runCommand(`scriptevent mineapi:jig_pcs ${JSON.stringify(m)}`),
      delay
    );
  });
};

// scripts/bossEvents.ts
var PFEBossEventConfigName = `pfe:bossEventConfig`;
var PFEBossEventBosses = [
  `poke_pfe:zombken`,
  `poke_pfe:super_striker`,
  `poke_pfe:knightling`,
  `poke_pfe:mini_demonic_allay`,
  `poke_pfe:necromancer`,
  `poke_pfe:snowman`,
  `poke_pfe:robo_golem`,
  `poke_pfe:sparky`,
  `poke_pfe:the_logger`,
  `poke_pfe:listener`
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
  "ticks": 108e3,
  "seconds": 0,
  "minutes": 90,
  "hours": 0
};
function PFEBossEventUIMainMenu(player) {
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  let EnabledBosses = 0;
  if (settings.zombken.e) EnabledBosses++;
  if (settings.superStriker.e) EnabledBosses++;
  if (settings.knightling.e) EnabledBosses++;
  if (settings.miniDemonicAllay.e) EnabledBosses++;
  if (settings.necromancer.e) EnabledBosses++;
  if (settings.snowman.e) EnabledBosses++;
  if (settings.furnaceGolem.e) EnabledBosses++;
  if (settings.sparky.e) EnabledBosses++;
  if (settings.theLogger.e) EnabledBosses++;
  if (settings.listener.e) EnabledBosses++;
  new ActionFormData().title({ translate: `translation.poke_pfe:bossEventMainMenuTitle` }).button({ translate: `translation.poke_pfe:bossEventMainMenuEnableBosses`, with: [`${EnabledBosses}`, `${TotalBosses}`] }, "textures/poke/common/spawn_enabled").button({ translate: `translation.poke_pfe:bossEventMainMenuBossChances` }, "textures/poke/common/spawn_weight").button({ translate: `translation.poke_pfe:bossEventSettings` }, "textures/poke/common/more_options").button({ translate: `translation.poke_pfe:bossEventClose` }, "textures/poke/common/close").show(player).then((ui) => {
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
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  new ActionFormData().title({ translate: `translation.poke_pfe:bossEventMainMenuTitle` }).button({ translate: `translation.poke_pfe:bossEventManual` }, "textures/poke/pfe/bounty").button({ translate: `translation.poke_pfe:bossEventTiming` }, "textures/poke/common/spawn_time").button({ translate: `translation.poke_pfe:bossEventSettingsReset` }, "textures/ui/refresh_light").button({ translate: `translation.poke_pfe.GoBack` }, "textures/poke/common/left_arrow").show(player).then((ui) => {
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
      world2.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
      return;
    }
    ;
  });
}
function PFEBossEventUIEnabledBosses(player) {
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  new ModalFormData().title({ translate: `translation.poke_pfe:bossEventMainMenuTitle` }).toggle({ translate: `entity.poke_pfe:zombken.name` }, { defaultValue: settings.zombken.e }).toggle({ translate: `entity.poke_pfe:super_striker.name` }, { defaultValue: settings.superStriker.e }).toggle({ translate: `entity.poke_pfe:knightling.name` }, { defaultValue: settings.knightling.e }).toggle({ translate: `entity.poke_pfe:mini_demonic_allay.name` }, { defaultValue: settings.miniDemonicAllay.e }).toggle({ translate: `entity.poke_pfe:necromancer.name` }, { defaultValue: settings.necromancer.e }).toggle({ translate: `entity.poke_pfe:snowman.name` }, { defaultValue: settings.snowman.e }).toggle({ translate: `entity.poke_pfe:robo_golem.name` }, { defaultValue: settings.furnaceGolem.e }).toggle({ translate: `entity.poke_pfe:dragon.name` }, { defaultValue: settings.sparky.e }).toggle({ translate: `entity.poke_pfe:the_logger.name` }, { defaultValue: settings.theLogger.e }).toggle({ translate: `entity.poke_pfe:listener.name` }, { defaultValue: settings.listener.e }).submitButton(`translation.poke_pfe:BossEventUISubmit`).show(player).then((ui) => {
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
      world2.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(settings));
    }
    PFEBossEventUIMainMenu(player);
    return;
  });
}
function PFEBossEventTiming(player) {
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  new ModalFormData().title({ translate: `translation.poke_pfe:bossEventMainMenuTitle` }).dropdown({ translate: `%poke_pfe.mode:` }, [
    { translate: `%poke_pfe.gameTicks` }
    /*, { translate: `%poke_pfe.realTime` }*/
  ], { tooltip: { translate: `%poke_pfe.timeMode.tooltip` } }).slider({ translate: `%poke_pfe.minutes` }, 0, 720, { defaultValue: settings.ticks / 1200, valueStep: 5, tooltip: { translate: `%poke_pfe.BossEventTime.tooltip` } }).submitButton(`translation.poke_pfe:BossEventUISubmit`).show(player).then((ui) => {
    if (!ui.canceled) {
      let newTicks = Number(ui.formValues.at(1));
      if (Number(isNaN(newTicks))) {
        return;
      } else {
        settings.ticks = newTicks * 1200;
        world2.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(settings));
        typeof world2.getDynamicProperty("poke_pfe:bossEventIntervalId") != "number" ? void 0 : system2.clearRun(world2.getDynamicProperty("poke_pfe:bossEventIntervalId"));
        world2.setDynamicProperty("poke_pfe:bossEventIntervalId", startBossEvents());
      }
    }
    PFEBossEventUIMainMenu(player);
    return;
  });
}
function PFEBossEventUIBossChances(player) {
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  new ModalFormData().title({ translate: `translation.poke_pfe:bossEventMainMenuTitle` }).slider({ translate: `entity.poke_pfe:zombken.name` }, 0, 100, { valueStep: 1, defaultValue: settings.zombken["%"] }).slider({ translate: `entity.poke_pfe:super_striker.name` }, 0, 100, { valueStep: 1, defaultValue: settings.superStriker["%"] }).slider({ translate: `entity.poke_pfe:knightling.name` }, 0, 100, { valueStep: 1, defaultValue: settings.knightling["%"] }).slider({ translate: `entity.poke_pfe:mini_demonic_allay.name` }, 0, 100, { valueStep: 1, defaultValue: settings.miniDemonicAllay["%"] }).slider({ translate: `entity.poke_pfe:necromancer.name` }, 0, 100, { valueStep: 1, defaultValue: settings.necromancer["%"] }).slider({ translate: `entity.poke_pfe:snowman.name` }, 0, 100, { valueStep: 1, defaultValue: settings.snowman["%"] }).slider({ translate: `entity.poke_pfe:robo_golem.name` }, 0, 100, { valueStep: 1, defaultValue: settings.furnaceGolem["%"] }).slider({ translate: `entity.poke_pfe:dragon.name` }, 0, 100, { valueStep: 1, defaultValue: settings.sparky["%"] }).slider({ translate: `entity.poke_pfe:the_logger.name` }, 0, 100, { valueStep: 1, defaultValue: settings.theLogger["%"] }).slider({ translate: `entity.poke_pfe:listener.name` }, 0, 100, { valueStep: 1, defaultValue: settings.listener["%"] }).submitButton(`translation.poke_pfe:BossEventUISubmit`).show(player).then((ui) => {
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
      world2.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(settings));
    }
    PFEBossEventUIMainMenu(player);
    return;
  });
}
function PFEBossEventTicks() {
  const settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName) ?? JSON.stringify(PFEDefaultBossEventSettings));
  return settings.ticks;
}
function startBossEvents() {
  return system2.runInterval(() => {
    PFEStartBossEvent();
  }, PFEBossEventTicks());
}
function PFEStartBossEvent() {
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  let allPlayers = world2.getAllPlayers();
  let randomPlayer = allPlayers.at(Math.abs(Math.round(Math.random() * (allPlayers.length - 1))));
  if (!settings.zombken.e) settings.zombken["%"] = 0;
  if (!settings.superStriker.e) settings.superStriker["%"] = 0;
  if (!settings.knightling.e) settings.knightling["%"] = 0;
  if (!settings.miniDemonicAllay.e) settings.miniDemonicAllay["%"] = 0;
  if (!settings.necromancer.e) settings.necromancer["%"] = 0;
  if (!settings.snowman.e) settings.snowman["%"] = 0;
  if (!settings.furnaceGolem.e) settings.furnaceGolem["%"] = 0;
  if (!settings.sparky.e) settings.sparky["%"] = 0;
  if (!settings.theLogger.e) settings.theLogger["%"] = 0;
  if (!settings.listener.e) settings.listener["%"] = 0;
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
  if (zombkenWeight + superStrikerWeight + knightlingWeight + miniDemonicAllayWeight + necromancerWeight + snowmanWeight + furnaceGolemWeight + sparkyWeight + theLoggerWeight + listenerWeight == 0) return 0;
  const weightedRandom = (array, weights2) => {
    const totalWeight = weights2.reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;
    return array.find((_, i) => (random -= weights2[i]) <= 0);
  };
  let selectedBoss = weightedRandom(PFEBossEventBosses, weights);
  randomPlayer?.dimension.spawnEntity(selectedBoss, randomPlayer.location).runCommand(`spreadplayers ~ ~ 30 40 @s ~10`);
  world2.sendMessage({ rawtext: [{ translate: `translation.${selectedBoss}_boss_event_near` }, { text: `: ${randomPlayer?.name}` }] });
  ComputersCompat.addStat(`boss_events_triggered`, 1);
}

// scripts/time.ts
import { PlayerPermissionLevel, system as system3, world as world4 } from "@minecraft/server";
import { ActionFormData as ActionFormData3, ModalFormData as ModalFormData2 } from "@minecraft/server-ui";

// scripts/commonFunctions.ts
import { Direction, EntityComponentTypes, EquipmentSlot, GameMode, ItemComponentTypes, ItemLockMode, ItemStack, world as world3 } from "@minecraft/server";
import { ActionFormData as ActionFormData2 } from "@minecraft/server-ui";
function PokeDamageItemUB(item, multiplier, entity, slot, preventBreaking) {
  let durabilityComponent = item.getComponent(ItemComponentTypes.Durability);
  const equippableComponent = entity.getComponent(EntityComponentTypes.Equippable);
  if (!durabilityComponent) {
    item.isStackable ? void 0 : PokeSaveProperty(`poke_pfe:holdFix`, item, Math.round(Math.random() * 100), entity, slot);
    return { tookDurability: false, failed: true, broke: false };
  }
  if (preventBreaking && durabilityComponent?.maxDurability == durabilityComponent.damage + 1) {
    return { tookDurability: false, failed: true, broke: false, prevented: true };
  }
  if (!equippableComponent) return { tookDurability: false, failed: true, broke: false };
  const enchantableComponent = item.getComponent(ItemComponentTypes.Enchantable);
  var unbreakingL = enchantableComponent?.getEnchantment(MinecraftEnchantmentTypes.Unbreaking)?.level ?? 0;
  if (!slot) {
    slot = EquipmentSlot.Mainhand;
  }
  if (entity.typeId == MinecraftEntityTypes.Player) {
    const player = entity;
    if (player.getGameMode() == GameMode.Creative) {
      item.isStackable ? void 0 : PokeSaveProperty(`poke_pfe:holdFix`, item, Math.round(Math.random() * 100), entity, slot);
      return { tookDurability: false, failed: false, broke: false, gmc: true };
    }
  }
  let damage = Number(Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreakingL)) * (multiplier ?? 1);
  if (durabilityComponent.damage + damage >= durabilityComponent.maxDurability) durabilityComponent.damage = durabilityComponent.maxDurability;
  else durabilityComponent.damage += damage;
  if (durabilityComponent.damage >= durabilityComponent.maxDurability) {
    if (equippableComponent.getEquipment(slot)?.typeId == item.typeId) {
      equippableComponent.setEquipment(slot, void 0);
      entity.dimension.playSound(`random.break`, entity.location, { pitch: Math.max(Math.max(Math.random() * 1.05, 0.95)) });
      return;
    }
  }
  item.isStackable ? void 0 : PokeSaveProperty(`poke_pfe:holdFix`, item, Math.round(Math.random() * 100), entity, slot);
}
function PokeDecrementStack(item, amount) {
  if (item.amount <= 1) return void 0;
  else {
    if (amount) {
      item.amount += amount;
      if (item.amount > item.maxAmount) item.amount = item.maxAmount;
    } else item.amount += -1;
    return item;
  }
}
function PokeErrorScreen(player, error, backTo) {
  let UI = new ActionFormData2();
  if (!error) {
    error = { translate: `translation.poke_pfe:errorGeneric` };
  }
  UI.title({ translate: `translation.poke_pfe:errorGeneric` });
  UI.body(error);
  UI.button({ translate: `translation.poke_pfe:goBack` }, `textures/poke/common/left_arrow`);
  UI.button({ translate: `translation.poke_pfe:bossEventClose` }, `textures/poke/common/close`);
  UI.show(player).then(((response) => {
    if (response.canceled || response.selection == 1) {
      backTo;
      return;
    }
    if (response.selection == 2) {
      return;
    }
  }));
}
function PokeGetItemFromInventory(entity, slot, itemId, returnSlots) {
  let inventoryComponent = entity.getComponent(EntityComponentTypes.Inventory);
  if (inventoryComponent) {
    let returningItems = [];
    if (slot) {
      let slottedItem = inventoryComponent.container?.getItem(slot);
      if (!slottedItem || slottedItem.lockMode != ItemLockMode.none) return void 0;
      if (itemId) {
        if (slottedItem.typeId == itemId) return returnSlots ? [{ item: slottedItem, number: slot }] : [slottedItem];
        else return void 0;
      } else return returnSlots ? [{ item: slottedItem, number: slot }] : [slottedItem];
    }
    for (let i = inventoryComponent.inventorySize - 1; i > -1; i--) {
      let slottedItem = inventoryComponent.container?.getItem(i);
      if (!slottedItem || slottedItem.lockMode != ItemLockMode.none) continue;
      if (!itemId || slottedItem.typeId == itemId) {
        returningItems = returningItems.concat(returnSlots ? [{ item: slottedItem, number: i }] : [slottedItem]);
        continue;
      }
    }
    if (returningItems.length == 0) {
      return void 0;
    }
    return returningItems;
  }
}
function PokeGetObjectById(array, id) {
  for (let i = array.length - 1; i > -1; i--) {
    if (array.at(i).id == id) return {
      value: array.at(i),
      position: i
    };
  }
  return void 0;
}
function PokeSaveProperty(propertyId, item, save, entity, slot) {
  item.setDynamicProperty(propertyId, save);
  let equippableComponent = entity.getComponent(EntityComponentTypes.Equippable);
  if (typeof slot == "number") {
    const slottedItem = entity.getComponent(EntityComponentTypes.Inventory)?.container.getSlot(slot);
    slottedItem?.setItem(item);
  } else {
    if (!slot) slot = EquipmentSlot.Mainhand;
    if (equippableComponent?.getEquipmentSlot(slot).typeId == item.typeId) {
      equippableComponent.setEquipment(slot, item);
      return true;
    } else {
      return false;
    }
  }
}
function PokeSpawnLootTable(lootTable, position, dimension, amount) {
  if (amount) {
    for (let i = amount - 1; i > -1; i--) {
      dimension.runCommand(`loot spawn ${position.x} ${position.y} ${position.z} loot "${lootTable}"`);
    }
    return;
  } else dimension.runCommand(`loot spawn ${position.x} ${position.y} ${position.z} loot "${lootTable}"`);
}
function PokeClosestCardinal(vector, directions) {
  let returnProperty = {
    direction: Direction.Up,
    vector
  };
  if (directions == "upDown") {
    if (vector.y >= 0) {
      returnProperty.direction = Direction.Up, returnProperty.vector = { x: 0, y: 1, z: 0 };
    } else if (vector.y < 0) {
      returnProperty.direction = Direction.Down, returnProperty.vector = { x: 0, y: -1, z: 0 };
    }
    return returnProperty;
  } else
    switch (true) {
      case vector.y < -0.7: {
        returnProperty.direction = Direction.Down, returnProperty.vector = { x: 0, y: -1, z: 0 };
        break;
      }
      case vector.y > 0.7: {
        returnProperty.direction = Direction.Up, returnProperty.vector = { x: 0, y: 1, z: 0 };
        break;
      }
      case vector.x > 0.7: {
        returnProperty.direction = Direction.East, returnProperty.vector = { x: 1, y: 0, z: 0 };
        break;
      }
      case vector.x < -0.7: {
        returnProperty.direction = Direction.West, returnProperty.vector = { x: -1, y: 0, z: 0 };
        break;
      }
      case vector.z > 0.7: {
        returnProperty.direction = Direction.South, returnProperty.vector = { x: 0, y: 0, z: 1 };
        break;
      }
      case vector.z < -0.7: {
        returnProperty.direction = Direction.North, returnProperty.vector = { x: 0, y: 0, z: -1 };
        break;
      }
    }
  return returnProperty;
}
function pokeAddItemsToPlayerOrDrop(player, item) {
  const Inventory = player.getComponent(EntityComponentTypes.Inventory);
  if (Inventory && Inventory.container.emptySlotsCount != 0) {
    Inventory.container.addItem(item);
  } else {
    player.dimension.spawnItem(item, player.location);
  }
}
function pokeAddItemsToContainerOrDrop(Container2, item, dimension, location) {
  if (Container2) {
    const EmptySlot = Container2.firstEmptySlot();
    if (typeof EmptySlot == "number") {
      Container2.addItem(item);
      return;
    }
    const ExistingItemSlot = Container2.findLast(item);
    if (typeof ExistingItemSlot == "number") {
      const ExistingItem = Container2.getSlot(ExistingItemSlot);
      if (ExistingItem) {
        if (ExistingItem?.amount == ExistingItem?.maxAmount) {
          return;
        } else {
          Container2.addItem(item);
          return;
        }
      }
    }
  }
  dimension.spawnItem(item, location);
}

// scripts/time.ts
var PokeCalendarVersion = 1;
var PokeCustomEventId = `poke_pfe:customEvents`;
function PFEHourTimeDownEvents() {
  let currentTime = new Date(Date.now());
  let allPlayers = world4.getAllPlayers();
  let randomPlayer = allPlayers.at(Math.abs(Math.round(Math.random() * (allPlayers.length - 1))));
  randomPlayer?.dimension.spawnEntity("poke_pfe:cassette_trader", randomPlayer.location).runCommand(`spreadplayers ~ ~ 30 40 @s ~10`);
}
function PFETimeValidation() {
  let currentTime = new Date(Date.now());
  if (currentTime.getMinutes() == 0) {
    PFEHourTimeDownEvents();
  } else {
    system3.runTimeout(() => {
      PFETimeValidation();
    }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20);
  }
}
var PFEDefaultHolidays = [
  {
    name: { text: `New Years Day` },
    id: "poke_pfe:NewYear",
    dates: [{ month: 0, days: [1] }],
    repeat: true,
    gift: `give @s poke_pfe:present 8`,
    icon: "textures/poke/common/new_year",
    greeting: { translate: `translation.poke_pfe:timeNewYearGreet` },
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  /*{
    name:{text:`Martin Luther King Jr. Day`},
    id:"poke_pfe:MLKJr",
    dates:[{month:0,days:[15,16,17,18,19,20,21],weekday:1}],//Monday between Jan 15 - 21
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/mlk",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  {
    name: { text: `Valentine's Day` },
    id: "poke_pfe:ValentinesDay",
    dates: [{ month: 1, days: [14] }],
    repeat: true,
    gift: `give @s poke_pfe:present 8`,
    icon: "textures/poke/common/valentine",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `St. Patrick's Day` },
    id: "poke_pfe:StPatrickDay",
    dates: [{ month: 2, days: [17] }],
    repeat: true,
    gift: `give @s poke_pfe:present 8`,
    icon: "textures/poke/common/st_patrick",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `April Fools` },
    id: "poke_pfe:AprilFools",
    dates: [{ month: 3, days: [1] }],
    repeat: true,
    gift: `give @s poke_pfe:splash_death_potion`,
    icon: "textures/poke/common/april_fools",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  /*{
    name:{text:`Cinco de Mayo`},
    id:"poke_pfe:CincoDeMayo",
    dates:[{month:4,days:[5]}],
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/cinco_de_mayo",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  /*{
    name:{text:`Memorial Day`},
    id:"poke_pfe:MemorialDay",
    dates:[{month:4,days:[25,26,27,28,29,30,31],weekday:1}],
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/cinco_de_mayo",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  /*{
    name:{text:`Juneteenth`},
    id:"poke_pfe:Juneteenth",
    dates:[{month:5,days:[19]}],
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/juneteenth",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  {
    name: { text: `Independence Day` },
    id: "poke_pfe:IndependenceDay",
    dates: [{ month: 6, days: [4] }],
    repeat: true,
    gift: `structure load poke_pfe:4JulyGift ~~~`,
    icon: "textures/poke/common/july_4th",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  /*{
    name:{text:`Labor Day`},
    id:"poke_pfe:LaborDay",
    dates:[{month:8,days:[1,2,3,4,5,6,7],weekday:1}],//First Monday of September
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/labor_day",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  {
    name: { text: `Halloween` },
    id: "poke_pfe:Halloween",
    dates: [{ month: 9, days: [31] }],
    repeat: true,
    gift: `give @s poke_pfe:charred_poppy 16`,
    icon: "textures/poke/common/halloween",
    greeting: { translate: `translation.poke_pfe:timeHalloweenGreet` },
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `Thanksgiving` },
    id: "poke_pfe:thanksgiving",
    dates: [{ month: 10, days: [23, 24, 25, 26, 27, 28], weekday: 4 }],
    //This will only trigger on Thursday even though other days are listed
    repeat: true,
    gift: `give @s poke_pfe:present 8`,
    icon: "textures/poke/common/thanksgiving",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `Easter` },
    id: "just:Easter",
    dates: [{ month: 11, days: [24, 25] }],
    repeat: true,
    gift: `give @s poke_pfe:present 16`,
    icon: "textures/poke/common/xmas",
    greeting: { translate: `translation.poke_pfe:timeHolidayGreet` },
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  }
];
function PokeTimeCheck(event, player, claimCheck) {
  if (event == null || event.dates == void 0) {
    PokeErrorScreen(player, void 0, world4.setDynamicProperty(PokeCustomEventId, JSON.stringify([])));
    return;
  }
  let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player));
  if (event.fixedTime === true) currentTime = new Date(Date.now());
  for (let i = event.dates.length; i > -1; i--) {
    let date = event.dates.at(i);
    if (!date) continue;
    if (!date.days?.includes(currentTime.getUTCDate())) continue;
    if (!(date.month == currentTime.getUTCMonth())) continue;
    if (date.weekday) {
      if (date.weekday == currentTime.getDay()) continue;
    }
    if (date.timeStart) {
      if (!(date.timeStart.hour <= currentTime.getUTCHours() && (date.timeStart.minute == void 0 || date.timeStart.minute <= currentTime.getUTCMinutes()))) continue;
    }
    if (date.timeEnd) {
      if (!(date.timeEnd.hour >= currentTime.getUTCHours() && (date.timeEnd.minute == void 0 || date.timeEnd.minute >= currentTime.getUTCMinutes()))) continue;
    }
    if (event.repeat === false && !date.years?.includes(currentTime.getUTCFullYear())) continue;
    if (claimCheck) {
      if (!event.gift) continue;
      if (player.hasTag(`poke_pfe:${currentTime.getFullYear()}E-${event.id}`)) continue;
    }
    return true;
  }
  return false;
}
function PokeTimeDebug(player) {
  let UI = new ActionFormData3();
  UI.button(`Delete Custom Events`);
  UI.button(`Create 10 Events`);
  UI.button(`Reset Birthday`);
  UI.button(`Add 10 Fake Birthdays`);
  UI.show(player).then(((response) => {
    if (response.canceled) {
      PokeTimeConfigUIMainMenu(player);
      return;
    }
    let selection = 0;
    if (response.selection == selection) {
      world4.setDynamicProperty(PokeCustomEventId, JSON.stringify([]));
      return;
    } else selection++;
    if (response.selection == selection) {
      let newEvents = [
        { id: `custom:1`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 1` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:2`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 2` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:3`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 3` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:4`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 4` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:5`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 5` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:6`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 6` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:7`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 7` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:8`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 8` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:9`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 9` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:10`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 10` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion }
      ];
      let customEvents = world4.getDynamicProperty(PokeCustomEventId);
      if (typeof customEvents != "string") {
        world4.setDynamicProperty(PokeCustomEventId, JSON.stringify(newEvents));
        return;
      }
      customEvents = JSON.parse(customEvents).concat(newEvents);
      world4.setDynamicProperty(PokeCustomEventId, JSON.stringify(customEvents));
      return;
    } else selection++;
    if (response.selection == selection) {
      player.setDynamicProperty(`poke_pfe:birthday`, JSON.stringify({ day: 1, month: 0, id: player.id, announce: false, name: player.name, style: "normal", year: void 0 }));
      return;
    } else selection++;
    if (response.selection == selection) {
      let time = new Date(Date.now());
      let newBirthdays = [
        { id: `10`, day: time.getDate(), announce: true, month: time.getMonth(), style: "normal", name: `Custom 1` },
        { id: `2`, day: time.getDate(), announce: true, month: time.getMonth(), style: "dev", name: `Custom 2` },
        { id: `3`, day: time.getDate(), announce: false, month: time.getMonth(), style: "normal", name: `Custom 3` },
        { id: `4`, day: time.getDate(), announce: false, month: time.getMonth(), style: "dev", name: `Custom 4` },
        { id: `5`, day: time.getDate() + 1, announce: true, month: time.getMonth(), style: "normal", name: `Custom 5` },
        { id: `6`, day: time.getDate() + 1, announce: true, month: time.getMonth(), style: "dev", name: `Custom 6` },
        { id: `7`, day: time.getDate() + 1, announce: false, month: time.getMonth(), style: "normal", name: `Custom 7` },
        { id: `8`, day: time.getDate() + 1, announce: false, month: time.getMonth(), style: "dev", name: `Custom 8` },
        { id: `9`, day: time.getDate() - 1, announce: true, month: time.getMonth(), style: "normal", name: `Custom 9` },
        { id: `10`, day: time.getDate() - 1, announce: true, month: time.getMonth(), style: "dev", name: `Custom 10` }
      ];
      let birthdays = world4.getDynamicProperty(PokeCustomEventId);
      if (typeof birthdays != "string") {
        world4.setDynamicProperty(PokeCustomEventId, JSON.stringify(newBirthdays));
        return;
      }
      birthdays = JSON.parse(birthdays).concat(newBirthdays);
      world4.setDynamicProperty(`poke_pfe:birthdays`, JSON.stringify(birthdays));
      return;
    } else selection++;
  }));
}
function PokeTimeConfigUIMainMenu(player) {
  let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player));
  let UI = new ActionFormData3();
  UI.body(
    {
      translate: `translation.poke_pfe:timeUiMainMenuBody`,
      with: {
        rawtext: [
          PokeTimeGreeting(currentTime, player),
          { text: player.name },
          { text: `${currentTime.toDateString()}, ${currentTime.toLocaleTimeString()}` }
        ]
      }
    }
  );
  if (player.hasTag(`debug`)) {
    UI.button(`Debug Menu`);
  }
  if (!player.getDynamicProperty(`poke_pfe:timezone`)) {
    UI.button({ translate: `translation.poke_pfe:timeSetTimezone` }, PokeTimeIcon(currentTime));
  }
  if (!player.getDynamicProperty(`poke_pfe:birthday`)) {
    UI.button({ translate: `translation.poke_pfe:timeSetBirthday` }, `textures/poke/common/birthday_cake`);
  }
  UI.button({ translate: `translation.poke_pfe:timeUpcomingEvents` }, `textures/poke/common/upcoming_events`);
  UI.button({ translate: `translation.poke_pfe:additionalOptions` }, `textures/poke/common/more_options`);
  let events = PokeTimeGetAllEvents();
  let gifts = [];
  for (let i = events.length - 1; i > -1; i--) {
    let event = events.at(i);
    if (!event) continue;
    if (PokeTimeCheck(event, player, true)) {
      UI.button({ translate: `translation.poke_pfe:claimGift`, with: { rawtext: [event.name] } }, `textures/poke/common/gift`);
      gifts = gifts.concat(event);
    }
  }
  UI.show(player).then(((response) => {
    if (response.canceled) {
      return;
    }
    let selection = 0;
    if (player.hasTag(`debug`)) {
      if (response.selection == selection) {
        PokeTimeDebug(player);
        return;
      } else selection++;
    }
    if (!player.getDynamicProperty(`poke_pfe:timezone`)) {
      if (response.selection == selection) {
        PokeSetTimeZone(player);
        return;
      } else selection++;
    }
    if (!player.getDynamicProperty(`poke_pfe:birthday`)) {
      if (response.selection == selection) {
        PokeSetBirthday(player);
        return;
      } else selection++;
    }
    if (response.selection == selection) {
      PokeTimeUpcomingEventList(player, 0);
      return;
    } else selection++;
    if (response.selection == selection) {
      PokeTimeAdditionalOptions(player);
      return;
    } else selection++;
    for (let i = gifts.length - 1; i > -1; i--) {
      if (response.selection == selection) {
        let claimingGift = gifts.reverse().at(i)?.gift;
        if (!claimingGift) {
        }
        player.runCommand(`${claimingGift}`);
        player.addTag(`poke_pfe:${currentTime.getFullYear()}E-${gifts.at(i)?.id}`);
        return;
      } else selection++;
    }
  }));
}
function PokeSetBirthday(player) {
  let UI = new ModalFormData2();
  let currentBirthday = { day: 1, month: 0, id: player.id, announce: false, name: player.name, style: "normal", year: void 0 };
  if (player.getDynamicProperty(`poke_pfe:birthday`)) {
    UI.title({ translate: `translation.poke_pfe:timeChangeBirthday` });
    currentBirthday = JSON.parse(player.getDynamicProperty(`poke_pfe:birthday`).toString());
  } else {
    UI.title({ translate: `translation.poke_pfe:timeSetBirthday` });
  }
  UI.dropdown({ translate: `translation.poke_pfe:setBirthdayDay` }, [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`, `30`, `31`], { defaultValueIndex: currentBirthday.day - 1 });
  UI.dropdown({ translate: `translation.poke_pfe:setBirthdayMonth` }, [{ translate: `translation.poke_pfe:setBirthdayJan` }, { translate: `translation.poke_pfe:setBirthdayFeb` }, { translate: `translation.poke_pfe:setBirthdayMar` }, { translate: `translation.poke_pfe:setBirthdayApr` }, { translate: `translation.poke_pfe:setBirthdayMay` }, { translate: `translation.poke_pfe:setBirthdayJun` }, { translate: `translation.poke_pfe:setBirthdayJul` }, { translate: `translation.poke_pfe:setBirthdayAug` }, { translate: `translation.poke_pfe:setBirthdaySep` }, { translate: `translation.poke_pfe:setBirthdayOct` }, { translate: `translation.poke_pfe:setBirthdayNov` }, { translate: `translation.poke_pfe:setBirthdayDec` }], { defaultValueIndex: currentBirthday.month });
  UI.toggle({ translate: `translation.poke_pfe:setBirthdayGlobalMessage` }, { defaultValue: currentBirthday.announce });
  UI.show(player).then(((response) => {
    if (response.canceled) {
      if (player.getDynamicProperty(`poke_pfe:birthday`)) {
        PokeTimeAdditionalOptions(player);
      } else {
        PokeTimeConfigUIMainMenu(player);
      }
      return;
    }
    let newBirthday = {
      day: Number(response.formValues?.at(0)) + 1,
      month: Number(response.formValues?.at(1)),
      announce: Boolean(response.formValues?.at(2)),
      name: player.name,
      style: "normal",
      year: void 0,
      id: player.id
    };
    if (response.formValues?.at(2)) {
      let birthdays = JSON.parse(world4.getDynamicProperty(`poke_pfe:birthdays`).toString());
      for (let i = birthdays.length - 1; i > -1; i--) {
        let birthday = birthdays.at(i);
        if (birthday && (birthday.id == player.id || !birthday.id && birthday.name == player.name)) {
          birthday.day = Number(response.formValues?.at(0)) + 1;
          birthday.month = Number(response.formValues?.at(1));
          birthday.announce = Boolean(response.formValues?.at(2));
        }
        continue;
      }
      world4.setDynamicProperty(`poke_pfe:birthdays`, JSON.stringify(birthdays));
      player.setDynamicProperty(`poke_pfe:birthday`, JSON.stringify(newBirthday));
    } else {
      let birthdays = JSON.parse(world4.getDynamicProperty(`poke_pfe:birthdays`).toString());
      let replaceBirthday = PokeGetObjectById(birthdays, player.id);
      if (replaceBirthday) {
        birthdays = birthdays.slice(replaceBirthday.position, replaceBirthday.position);
        world4.setDynamicProperty(`poke_pfe:birthdays`, JSON.stringify(birthdays));
      }
      player.setDynamicProperty(`poke_pfe:birthday`, JSON.stringify(newBirthday));
    }
  }));
}
function PokeTimeIcon(currentTime) {
  switch (currentTime.getHours()) {
    case 0: {
      return `textures/poke/common/12am`;
      break;
    }
    case 1: {
      return `textures/poke/common/1am`;
      break;
    }
    case 2: {
      return `textures/poke/common/2am`;
      break;
    }
    case 3: {
      return `textures/poke/common/3am`;
      break;
    }
    case 4: {
      return `textures/poke/common/4am`;
      break;
    }
    case 5: {
      return `textures/poke/common/5am`;
      break;
    }
    case 6: {
      return `textures/poke/common/6am`;
      break;
    }
    case 7: {
      return `textures/poke/common/7am`;
      break;
    }
    case 8: {
      return `textures/poke/common/8am`;
      break;
    }
    case 9: {
      return `textures/poke/common/9am`;
      break;
    }
    case 10: {
      return `textures/poke/common/10am`;
      break;
    }
    case 11: {
      return `textures/poke/common/11am`;
      break;
    }
    case 12: {
      return `textures/poke/common/12pm`;
      break;
    }
    case 13: {
      return `textures/poke/common/1pm`;
      break;
    }
    case 14: {
      return `textures/poke/common/2pm`;
      break;
    }
    case 15: {
      return `textures/poke/common/3pm`;
      break;
    }
    case 16: {
      return `textures/poke/common/4pm`;
      break;
    }
    case 17: {
      return `textures/poke/common/5pm`;
      break;
    }
    case 18: {
      return `textures/poke/common/6pm`;
      break;
    }
    case 19: {
      return `textures/poke/common/7pm`;
      break;
    }
    case 20: {
      return `textures/poke/common/8pm`;
      break;
    }
    case 21: {
      return `textures/poke/common/9pm`;
      break;
    }
    case 22: {
      return `textures/poke/common/10pm`;
      break;
    }
    case 23: {
      return `textures/poke/common/11pm`;
      break;
    }
  }
}
function PokeTimeZoneOffset(player) {
  let timezone = void 0;
  if (player?.getDynamicProperty(`poke_pfe:timezone`)) {
    timezone = Number(player.getDynamicProperty(`poke_pfe:timezone`));
    return timezone;
  }
  return 0;
}
function PokeSetTimeZone(player) {
  let Ui = new ActionFormData3();
  let Timezones = [
    {
      "name": "\xA7uUTC \xA7a+\xA7u14:00\xA7r:\nLINT",
      "offset": 504e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u13:45\xA7r:\nCHADT",
      "offset": 495e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u13:00\xA7r:\nNZDT/PHOT/TKT/TOT",
      "offset": 468e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u12:45\xA7r:\nCHAST",
      "offset": 459e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u12:00\xA7r:\nANAT/FJT/GILT/MAGT/MHT/NZST/PETT/TVT/WAKT",
      "offset": 432e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u11:00\xA7r:\nAEDT/BST/KOST/LHST/MIST/NCT/NFT/PONT/SKAT/SBT/SRET/VUT",
      "offset": 396e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u10:00\xA7r:\nACDT/LHST",
      "offset": 378e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u10:00\xA7r:\nAEST/CHST/CHUT/DDUT/PGT/VLAT",
      "offset": 36e6
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u09:30\xA7r:\nACST",
      "offset": 342e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u09:00\xA7r:\nCHOST/JST/KST/PWT/TLT/ULAST/WIT/YAKT",
      "offset": 324e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u08:45\xA7r:\nACWST",
      "offset": 315e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u08:00\xA7r:\nAWST/BNT/CHOT/CST/HKT/HOVST/IRKT/MYT/PHT/SGT/TST/ULAT/WITA/WST/ACT",
      "offset": 288e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u07:00\xA7r:\nTHA/WIB/CXT/DAVT/HOVT/ICT/KRAT/NOVT",
      "offset": 252e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u06:30\xA7r:\nCCT/MMT",
      "offset": 234e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u06:00\xA7r:\nBIOT/BST/BTT/IOT/KGT/OMST/VOST/ALMT",
      "offset": 216e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u05:45\xA7r:\nNPT",
      "offset": 207e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u05:30\xA7r:\nIST/SLST",
      "offset": 198e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u05:00\xA7r:\nAQTT/HMT/MAWT/MVT/ORAT/PKT/TFT/TJT/TMT/UZT/YEKT",
      "offset": 18e6
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u04:30\xA7r:\nAFT/IRDT",
      "offset": 162e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u04:00\xA7r:\nAMT/AZT/GET/GST/MUT/RET/SAMT/SCT",
      "offset": 144e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u03:30\xA7r:\nIRST",
      "offset": 126e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u03:00\xA7r:\nAST/EAT/EEST/FET/IDT/MSK/SYOT/TRT/VOLT",
      "offset": 108e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u02:00\xA7r:\nEET/CAT/SAST/CEST/HAEC/IST/KALT/MEST/WAST",
      "offset": 72e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u01:00\xA7r:\nCET/BST/DFT/IST/MET/WAT",
      "offset": 36e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u00:00\xA7r:\nGMT/UTC/AZOST/EGST/WET",
      "offset": 0
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u01:00\xA7r:\nAZOT/CVT/EGT",
      "offset": -36e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u02:00\xA7r:\nBRST/FNT/GST/PMDT/UYST/WGST",
      "offset": -72e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u02:30\xA7r:\nNDT",
      "offset": -9e6
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u03:00\xA7r:\nADT/AMST/ART/BRT/CLST/FKST/GFT/PMST/PYST/ROTT/SRT/UYT",
      "offset": -108e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u03:30\xA7r:\nNST",
      "offset": -126e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u04:00\xA7r:\nAMT/AST/EDT/BOT/CDT/COST/ECT/FKT/GYT/PYT/VET",
      "offset": -144e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u05:00\xA7r:\nEST/CDT/ACT/COT/CST/EASST/ECT/PET",
      "offset": -18e6
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u06:00\xA7r:\nCST/MDT/EAST/GALT",
      "offset": -216e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u07:00\xA7r:\nMST/PDT",
      "offset": -252e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u08:00\xA7r:\nPST/AKDT/CIST",
      "offset": -288e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u09:00\xA7r:\nAKST/GAMT/GIT/HDT",
      "offset": -324e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u09:30\xA7r:\nMART/MIT",
      "offset": -342e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u10:00\xA7r:\nHST/SDT/TAHT",
      "offset": -36e6
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u11:00\xA7r:\nNUT/SST",
      "offset": -396e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u12:00\xA7r:\nBIT/IDLW",
      "offset": -432e5
    }
  ];
  Timezones.forEach((timezone) => {
    Ui.button(timezone.name, PokeTimeIcon(new Date(Date.now() + timezone.offset)));
  });
  Ui.show(player).then(((response) => {
    if (response.canceled) {
      return;
    }
    player.setDynamicProperty(`poke_pfe:timezone`, Timezones.at(Number(response.selection)).offset);
  }));
}
function PokeTimeGreeting(date, player, event, generic) {
  if (!generic) {
    if (event) {
      if (!event.greeting || typeof event.greeting == "string") {
      } else return event.greeting;
    } else {
      let activeEventGreetings = [];
      let allEvents = PokeTimeGetAllEvents();
      for (let i = allEvents.length - 1; i > -1; i--) {
        let event2 = allEvents.at(i);
        if (!event2) continue;
        if (PokeTimeCheck(event2, player, false)) {
          if (typeof event2.greeting != "string") {
            activeEventGreetings = activeEventGreetings.concat(event2.greeting ?? []);
          }
        }
      }
      if (activeEventGreetings.length > 0) {
        let returnGreeting = activeEventGreetings.at(Math.max(Math.round(Math.random() * activeEventGreetings.length) - 1, 0));
        if (returnGreeting) return returnGreeting;
      }
    }
  }
  let hour = date.getHours();
  let morningGreeting = { translate: `translation.poke_pfe:timeMorningGreet` };
  let noonGreeting = { translate: `translation.poke_pfe:timeNoonGreet` };
  let nightGreeting = { translate: `translation.poke_pfe:timeNightGreet` };
  switch (hour) {
    case 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11: {
      return morningGreeting;
      break;
    }
    case 12 | 13 | 14 | 15 | 16: {
      return noonGreeting;
      break;
    }
    case 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24: {
      return nightGreeting;
      break;
    }
  }
  return morningGreeting;
}
function PokeTimeEventInfoMenu(event, player) {
  let timeLeft = ``;
  let UI = new ActionFormData3();
  let giftString = { translate: `translation.poke_pfe:timeEventGift` };
  if (!event.gift) {
    giftString = { text: `` };
  }
  UI.body(
    { rawtext: [{ translate: `translation.poke_pfe:timeEventName` }, event.name, { text: `

` }, { translate: `translation.poke_pfe:timeEventDates` }].concat(PokeTimeDateString(event).concat([{ text: `
` }, giftString])) }
  );
  if (!event.nonModifiable && (player.playerPermissionLevel == PlayerPermissionLevel.Operator || player.hasTag(`poke-event_manager`))) {
    UI.button({ translate: `translation.poke_pfe:timeEditEvent` }, `textures/poke/common/edit`);
  }
  UI.button({ translate: `translation.poke_pfe:goBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then(((response) => {
    let selection = 0;
    if (!event.nonModifiable && (player.playerPermissionLevel == PlayerPermissionLevel.Operator || player.hasTag(`poke-event_manager`))) {
      if (response.selection == selection) {
        PokeEventOptions(player, event);
        return;
      } else selection++;
    }
    if (response.canceled || response.selection == selection) {
      PokeTimeUpcomingEventList(player, 0);
      return;
    }
  }));
}
function PokeTimeUpcomingEventList(player, page) {
  let UI = new ActionFormData3();
  let events = PokeTimeGetAllEvents();
  let maxPerPage = 10;
  let startPage = page * maxPerPage;
  let buttonCount = 0;
  let totalEvents = events.length;
  for (let i = startPage + maxPerPage - 1; i > startPage - 1; i--) {
    if (buttonCount + 1 > maxPerPage || i < startPage) {
      break;
    }
    if (events.at(i)) {
      let event = events.at(i);
      UI.button(event.name, event?.icon);
      buttonCount += 1;
    } else {
      continue;
    }
  }
  let nextPage = false;
  if (totalEvents > startPage + maxPerPage) {
    UI.button({ translate: `translation.poke_pfe:timeNextPage` }, `textures/poke/common/right_arrow`);
    nextPage = true;
  }
  let prevPage = false;
  if (page > 0) {
    UI.button({ translate: `translation.poke_pfe:timePrevPage` }, `textures/poke/common/left_arrow`);
    prevPage = true;
  } else UI.button({ translate: "translation.poke_pfe:goBack" }, `textures/poke/common/left_arrow`);
  UI.show(player).then(((response) => {
    let selection = 0;
    for (let i = buttonCount - 1; i > -1; i--) {
      if (events.at(i)) {
        if (response.selection == selection) {
          PokeTimeEventInfoMenu(events.at(i + startPage), player);
          return;
        } else selection++;
      }
    }
    if (nextPage) {
      if (response.selection == selection) {
        PokeTimeUpcomingEventList(player, page + 1);
        return;
      } else selection++;
    }
    if (prevPage) {
      if (response.selection == selection) {
        PokeTimeUpcomingEventList(player, page - 1);
        return;
      } else selection++;
    }
    if (response.canceled || response.selection == selection) {
      PokeTimeConfigUIMainMenu(player);
      return;
    }
  }));
}
function PokeTimeAdditionalOptions(player) {
  let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player));
  let UI = new ActionFormData3();
  if (player.getDynamicProperty(`poke_pfe:timezone`)) {
    UI.button({ translate: `translation.poke_pfe:timeChangeTimezone` }, PokeTimeIcon(currentTime));
  }
  if (player.getDynamicProperty(`poke_pfe:birthday`)) {
    UI.button({ translate: `translation.poke_pfe:timeChangeBirthday` }, `textures/poke/common/birthday_cake`);
  }
  if (player.playerPermissionLevel == PlayerPermissionLevel.Operator || player.hasTag(`poke-event_manager`)) {
    UI.button({ translate: `translation.poke_pfe:timeCreateEvent` }, `textures/poke/common/create_event`);
  }
  UI.button({ translate: "translation.poke_pfe:goBack" }, `textures/poke/common/left_arrow`);
  UI.show(player).then(((response) => {
    let selection = 0;
    if (player.getDynamicProperty(`poke_pfe:timezone`)) {
      if (response.selection == selection) {
        PokeSetTimeZone(player);
        return;
      } else selection++;
    }
    if (player.getDynamicProperty(`poke_pfe:birthday`)) {
      if (response.selection == selection) {
        PokeSetBirthday(player);
        return;
      } else selection++;
    }
    if (player.playerPermissionLevel == PlayerPermissionLevel.Operator || player.hasTag(`poke-event_manager`)) {
      if (response.selection == selection) {
        PokeTimeCreateEvent(player);
        return;
      } else selection++;
    }
    if (response.canceled || response.selection == selection) {
      PokeTimeConfigUIMainMenu(player);
      return;
    }
  }));
}
function PokeTimeGetAllEvents() {
  return PFEDefaultHolidays.concat(JSON.parse(world4.getDynamicProperty(PokeCustomEventId).toString()));
}
function PokeTimeDateString(event, player) {
  let returnString = [];
  let monthStrings = [
    { translate: `translation.poke_pfe:setBirthdayJan` },
    { translate: `translation.poke_pfe:setBirthdayFeb` },
    { translate: `translation.poke_pfe:setBirthdayMar` },
    { translate: `translation.poke_pfe:setBirthdayApr` },
    { translate: `translation.poke_pfe:setBirthdayMay` },
    { translate: `translation.poke_pfe:setBirthdayJun` },
    { translate: `translation.poke_pfe:setBirthdayJul` },
    { translate: `translation.poke_pfe:setBirthdayAug` },
    { translate: `translation.poke_pfe:setBirthdaySep` },
    { translate: `translation.poke_pfe:setBirthdayOct` },
    { translate: `translation.poke_pfe:setBirthdayNov` },
    { translate: `translation.poke_pfe:setBirthdayDec` }
  ];
  for (let i = event.dates.length - 1; i > -1; i--) {
    let date = event.dates.at(i);
    returnString = returnString.concat([{ text: ` - ` }, monthStrings.at(date.month), { text: ` ${JSON.stringify(date?.days).replace(`[`, ``).replace(`]`, ``).replace(/,/g, ", ")}` }, { text: `
` }]);
  }
  return returnString;
}
function PokeTimeCreateEvent(player, event) {
  let UI = new ModalFormData2();
  let eventName = ``;
  let providedEvent = false;
  if (!event) {
    event = {
      id: ``,
      name: { text: `` },
      dates: [{ month: 0, days: [1] }],
      repeat: true,
      icon: `textures/poke/common/event_default`,
      fixedTime: false,
      gift: void 0,
      greeting: "generic",
      v: PokeCalendarVersion
    };
    UI.title({ translate: `translation.poke_pfe:timeCreateEventTitle` });
  } else {
    providedEvent = true;
    UI.title({ translate: `translation.poke_pfe:timeEditEventTitle` });
    if (event.name.text) {
      eventName = event.name.text;
    } else {
      eventName = `%${event.name.translate}`;
    }
  }
  UI.textField({ translate: `translation.poke_pfe:timeEventId`, with: [``] }, ``, { defaultValue: event.id });
  UI.textField({ translate: `translation.poke_pfe:timeEventName`, with: [``] }, ``, { defaultValue: eventName });
  UI.dropdown({ translate: `translation.poke_pfe:setBirthdayDay` }, [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`, `30`, `31`], { defaultValueIndex: Number(event.dates.at(0)?.days?.at(0)) - 1 });
  UI.dropdown({ translate: `translation.poke_pfe:setBirthdayMonth` }, [{ translate: `translation.poke_pfe:setBirthdayJan` }, { translate: `translation.poke_pfe:setBirthdayFeb` }, { translate: `translation.poke_pfe:setBirthdayMar` }, { translate: `translation.poke_pfe:setBirthdayApr` }, { translate: `translation.poke_pfe:setBirthdayMay` }, { translate: `translation.poke_pfe:setBirthdayJun` }, { translate: `translation.poke_pfe:setBirthdayJul` }, { translate: `translation.poke_pfe:setBirthdayAug` }, { translate: `translation.poke_pfe:setBirthdaySep` }, { translate: `translation.poke_pfe:setBirthdayOct` }, { translate: `translation.poke_pfe:setBirthdayNov` }, { translate: `translation.poke_pfe:setBirthdayDec` }], { defaultValueIndex: event.dates.at(0)?.month });
  UI.toggle({ translate: `translation.poke_pfe:timeLoopEvent` }, { defaultValue: event.repeat });
  UI.show(player).then(((response) => {
    if (response.canceled && event.id == ``) {
      PokeTimeAdditionalOptions(player);
      return;
    } else if (response.canceled) {
      PokeTimeEventInfoMenu(event, player);
      return;
    } else {
      if (!providedEvent) {
        let id = response.formValues?.at(0)?.toString().replace(`custom:`, "").replace(" ", "");
        let name = { text: response.formValues?.at(1)?.toString() };
        if (response.formValues?.at(0)?.toString().startsWith(`%`)) {
          name = { translate: response.formValues.at(1)?.toString().substring(1) };
        }
        let newEventList = world4.getDynamicProperty(PokeCustomEventId);
        let replaceEvent = void 0;
        if (typeof newEventList == "string") {
          newEventList = JSON.parse(newEventList) ?? [];
          replaceEvent = PokeGetObjectById(newEventList, `custom:${id}`);
        } else {
          newEventList = [{ id: `placeholder`, dates: [{ month: 0, days: [0] }], greeting: "generic", name: { text: `placeholder` }, icon: void 0, v: PokeCalendarVersion }];
        }
        if (!newEventList || typeof newEventList == "string") {
          return;
        }
        if (world4.getDynamicProperty(PokeCustomEventId) != void 0 || world4.getDynamicProperty(PokeCustomEventId) != `[]`) {
        }
        let event2 = replaceEvent?.value;
        if (replaceEvent) {
          let newEvent = {
            id: event2.id,
            name,
            dates: event2.dates,
            fixedTime: event2.fixedTime,
            gift: event2.gift,
            icon: event2.icon,
            repeat: event2.repeat,
            greeting: event2.greeting,
            v: PokeCalendarVersion
          };
          let otherEvents = newEventList.splice(replaceEvent.value, 1, newEvent);
          newEventList = otherEvents;
        } else {
          event2 = {
            id: `custom:${id}`,
            name,
            dates: [{
              days: [Number(response.formValues?.at(2)?.valueOf()) + 1],
              month: Number(response.formValues?.at(3)?.valueOf())
            }],
            gift: void 0,
            icon: `textures/poke/common/event_default`,
            repeat: Boolean(response.formValues?.at(4)),
            greeting: "generic",
            fixedTime: false,
            v: PokeCalendarVersion
          };
          newEventList = newEventList.concat([event2]);
        }
        if (newEventList?.at(0))
          world4.setDynamicProperty(PokeCustomEventId, JSON.stringify(newEventList));
      } else {
        let id = response.formValues?.at(0)?.toString().replace(`custom:`, "").replace(" ", "");
        if (!id) {
          id = event.id;
        } else {
          id = `custom:${id}`;
        }
        let name = { text: response.formValues?.at(1)?.toString() };
        if (response.formValues?.at(0)?.toString().startsWith(`%`)) {
          name = { translate: response.formValues.at(1)?.toString().substring(1) };
        }
        let newEvent = {
          id,
          name,
          dates: event.dates,
          fixedTime: event.fixedTime,
          gift: event.gift,
          icon: event.icon,
          repeat: event.repeat,
          greeting: event.greeting,
          v: PokeCalendarVersion
        };
        let customEvents = world4.getDynamicProperty(PokeCustomEventId)?.toString().replace(JSON.stringify(event), JSON.stringify(newEvent));
        world4.setDynamicProperty(PokeCustomEventId, customEvents);
      }
      PokeEventOptions(player, event);
      return;
    }
  }));
}
function PokeEventOptions(player, event) {
  let UI = new ActionFormData3();
  UI.title({ translate: `translation.poke_pfe:timeEventOptionsTitle` });
  if (event.gift) {
    UI.button({ translate: `translation.poke_pfe:timeEditEventGift` }, "textures/poke/common/edit_gift");
  } else {
    UI.button({ translate: `translation.poke_pfe:timeAddEventGift` }, "textures/poke/common/add_gift");
  }
  if (event.greeting) {
    UI.button({ translate: `translation.poke_pfe:timeEditGreeting` }, "textures/poke/common/edit_greeting");
  } else {
    UI.button({ translate: `translation.poke_pfe:timeAddGreeting` }, "textures/poke/common/add_greeting");
  }
  UI.button({ translate: `translation.poke_pfe:timeEventOptionsEditTime` }, `textures/poke/common/edit`);
  UI.button({ translate: `translation.poke_pfe:timeDeleteEvent` }, `textures/poke/common/trash`);
  UI.button({ translate: `translation.poke_pfe:goBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then(((response) => {
    let selection = 0;
    if (response.selection == selection) {
      PokeTimeEditGift(player, event);
      return;
    } else selection++;
    if (response.selection == selection) {
      PokeTimeEditGreeting(player, event);
      return;
    } else selection++;
    if (response.selection == selection) {
      PokeTimeCreateEvent(player, event);
      return;
    } else selection++;
    if (response.selection == selection) {
      PokeTimeDeleteEvent(player, event);
      return;
    } else selection++;
    if (response.canceled || response.selection == selection) {
      PokeTimeUpcomingEventList(player, 0);
      return;
    }
  }));
}
function PokeTimeEditGift(player, event) {
  let UI = new ModalFormData2();
  UI.title({ translate: `translation.poke_pfe:timeEditGiftTitle` });
  let currentGift = event.gift;
  if (!currentGift) currentGift = ``;
  UI.textField({ translate: `translation.poke_pfe:timeEditGiftTextFieldLabel` }, ``, { defaultValue: currentGift });
  UI.show(player).then(((response) => {
    if (response.canceled) {
      PokeEventOptions(player, event);
      return;
    }
    let textField = response.formValues?.at(0);
    let newGift = textField;
    if (!textField || textField == `/` || textField == ` ` || textField == `` || typeof newGift != "string") {
      newGift = void 0;
    }
    if (newGift?.startsWith(`/`)) {
      newGift = newGift.substring(1);
    }
    let newEvent = {
      id: event.id,
      name: event.name,
      dates: event.dates,
      fixedTime: event.fixedTime,
      gift: newGift,
      icon: event.icon,
      repeat: event.repeat,
      greeting: event.greeting,
      nonModifiable: event.nonModifiable,
      v: PokeCalendarVersion
    };
    let customEvents = world4.getDynamicProperty(PokeCustomEventId)?.toString().replace(JSON.stringify(event), JSON.stringify(newEvent));
    world4.setDynamicProperty(PokeCustomEventId, customEvents);
    PokeEventOptions(player, newEvent);
  }));
}
function PokeTimeEditGreeting(player, event) {
  let UI = new ModalFormData2();
  UI.title({ translate: `translation.poke_pfe:timeEditGreetingTitle` });
  let greeting = `generic`;
  if (typeof event.greeting != "string" && typeof event.greeting != "undefined") {
    if (event.greeting.text) {
      greeting = event.greeting.text;
    } else {
      greeting = `%${event.greeting.translate}`;
    }
  }
  UI.textField({ translate: `translation.poke_pfe:timeEditGreetingTextFieldLabel` }, ``, { defaultValue: greeting });
  UI.show(player).then(((response) => {
    if (response.canceled) {
      PokeEventOptions(player, event);
      return;
    }
    let newGreeting = response.formValues?.at(0);
    if (typeof newGreeting != "string" || newGreeting == "" || newGreeting == " " || newGreeting == "generic") {
      newGreeting = "generic";
    } else if (newGreeting.startsWith(`%`)) {
      newGreeting = { translate: newGreeting.replace(`%`, ``) };
    } else {
      newGreeting = { text: newGreeting };
    }
    let newEvent = {
      id: event.id,
      name: event.name,
      dates: event.dates,
      fixedTime: event.fixedTime,
      gift: event.gift,
      icon: event.icon,
      repeat: event.repeat,
      // String will only be "generic" otherwise its RawMessage
      greeting: newGreeting,
      nonModifiable: event.nonModifiable,
      v: PokeCalendarVersion
    };
    let customEvents = world4.getDynamicProperty(PokeCustomEventId)?.toString().replace(JSON.stringify(event), JSON.stringify(newEvent));
    world4.setDynamicProperty(PokeCustomEventId, customEvents);
    PokeEventOptions(player, newEvent);
    return;
  }));
}
function PokeTimeDeleteEvent(player, event) {
  let UI = new ModalFormData2();
  UI.title({ translate: `translation.poke_pfe:timeDeleteEventTitle`, with: [event.id] });
  UI.textField({ translate: `translation.poke_pfe:timeDeleteEventConfirmField` }, ``);
  UI.show(player).then(((response) => {
    if (response.canceled) {
      PokeEventOptions(player, event);
      return;
    } else {
      if (response.formValues?.at(0)?.toString().toLowerCase() != event.id.toLowerCase()) {
        PokeErrorScreen(player, { translate: `translation.poke_pfe:timeErrorIncorrectDeleteId` }, PokeEventOptions(player, event));
        return;
      }
      let customEvents = JSON.parse(world4.getDynamicProperty(PokeCustomEventId).toString() ?? "[]");
      let replacedEvent = PokeGetObjectById(customEvents, event.id);
      if (!replacedEvent) {
        return;
      }
      let newEvents = JSON.stringify(customEvents);
      newEvents = newEvents.replace(JSON.stringify(replacedEvent.value), ``).replace(`,,`, `,`).replace(`,]`, `]`).replace(`[,`, `[`);
      world4.setDynamicProperty(PokeCustomEventId, newEvents);
    }
  }));
}

// scripts/config.ts
import { PlayerPermissionLevel as PlayerPermissionLevel2, system as system5, world as world6 } from "@minecraft/server";
import { ActionFormData as ActionFormData4, ModalFormData as ModalFormData3 } from "@minecraft/server-ui";

// node_modules/@minecraft/math/lib/general/clamp.js
function clampNumber(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

// node_modules/@minecraft/math/lib/vector3/coreHelpers.js
var Vector3Utils = class _Vector3Utils {
  /**
   * equals
   *
   * Check the equality of two vectors
   */
  static equals(v1, v2) {
    return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
  }
  /**
   * add
   *
   * Add two vectors to produce a new vector
   */
  static add(v1, v2) {
    return { x: v1.x + (v2.x ?? 0), y: v1.y + (v2.y ?? 0), z: v1.z + (v2.z ?? 0) };
  }
  /**
   * subtract
   *
   * Subtract two vectors to produce a new vector (v1-v2)
   */
  static subtract(v1, v2) {
    return { x: v1.x - (v2.x ?? 0), y: v1.y - (v2.y ?? 0), z: v1.z - (v2.z ?? 0) };
  }
  /** scale
   *
   * Multiple all entries in a vector by a single scalar value producing a new vector
   */
  static scale(v1, scale) {
    return { x: v1.x * scale, y: v1.y * scale, z: v1.z * scale };
  }
  /**
   * dot
   *
   * Calculate the dot product of two vectors
   */
  static dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }
  /**
   * cross
   *
   * Calculate the cross product of two vectors. Returns a new vector.
   */
  static cross(a, b) {
    return { x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x };
  }
  /**
   * magnitude
   *
   * The magnitude of a vector
   */
  static magnitude(v) {
    return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
  }
  /**
   * distance
   *
   * Calculate the distance between two vectors
   */
  static distance(a, b) {
    return _Vector3Utils.magnitude(_Vector3Utils.subtract(a, b));
  }
  /**
   * normalize
   *
   * Takes a vector 3 and normalizes it to a unit vector
   */
  static normalize(v) {
    const mag = _Vector3Utils.magnitude(v);
    return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
  }
  /**
   * floor
   *
   * Floor the components of a vector to produce a new vector
   */
  static floor(v) {
    return { x: Math.floor(v.x), y: Math.floor(v.y), z: Math.floor(v.z) };
  }
  /**
   * toString
   *
   * Create a string representation of a vector3
   */
  static toString(v, options) {
    const decimals = options?.decimals ?? 2;
    const str = [v.x.toFixed(decimals), v.y.toFixed(decimals), v.z.toFixed(decimals)];
    return str.join(options?.delimiter ?? ", ");
  }
  /**
   * fromString
   *
   * Gets a Vector3 from the string representation produced by {@link Vector3Utils.toString}. If any numeric value is not a number
   * or the format is invalid, undefined is returned.
   * @param str - The string to parse
   * @param delimiter - The delimiter used to separate the components. Defaults to the same as the default for {@link Vector3Utils.toString}
   */
  static fromString(str, delimiter = ",") {
    const parts = str.split(delimiter);
    if (parts.length !== 3) {
      return void 0;
    }
    const output = parts.map((part) => parseFloat(part));
    if (output.some((part) => isNaN(part))) {
      return void 0;
    }
    return { x: output[0], y: output[1], z: output[2] };
  }
  /**
   * clamp
   *
   * Clamps the components of a vector to limits to produce a new vector
   */
  static clamp(v, limits) {
    return {
      x: clampNumber(v.x, limits?.min?.x ?? Number.MIN_SAFE_INTEGER, limits?.max?.x ?? Number.MAX_SAFE_INTEGER),
      y: clampNumber(v.y, limits?.min?.y ?? Number.MIN_SAFE_INTEGER, limits?.max?.y ?? Number.MAX_SAFE_INTEGER),
      z: clampNumber(v.z, limits?.min?.z ?? Number.MIN_SAFE_INTEGER, limits?.max?.z ?? Number.MAX_SAFE_INTEGER)
    };
  }
  /**
   * lerp
   *
   * Constructs a new vector using linear interpolation on each component from two vectors.
   */
  static lerp(a, b, t) {
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: a.z + (b.z - a.z) * t };
  }
  /**
   * slerp
   *
   * Constructs a new vector using spherical linear interpolation on each component from two vectors.
   */
  static slerp(a, b, t) {
    const theta = Math.acos(_Vector3Utils.dot(a, b));
    const sinTheta = Math.sin(theta);
    const ta = Math.sin((1 - t) * theta) / sinTheta;
    const tb = Math.sin(t * theta) / sinTheta;
    return _Vector3Utils.add(_Vector3Utils.scale(a, ta), _Vector3Utils.scale(b, tb));
  }
  /**
   * multiply
   *
   * Element-wise multiplication of two vectors together.
   * Not to be confused with {@link Vector3Utils.dot} product or {@link Vector3Utils.cross} product
   */
  static multiply(a, b) {
    return { x: a.x * b.x, y: a.y * b.y, z: a.z * b.z };
  }
  /**
   * rotateX
   *
   * Rotates the vector around the x axis counterclockwise (left hand rule)
   * @param a - Angle in radians
   */
  static rotateX(v, a) {
    const cos = Math.cos(a);
    const sin = Math.sin(a);
    return { x: v.x, y: v.y * cos - v.z * sin, z: v.z * cos + v.y * sin };
  }
  /**
   * rotateY
   *
   * Rotates the vector around the y axis counterclockwise (left hand rule)
   * @param a - Angle in radians
   */
  static rotateY(v, a) {
    const cos = Math.cos(a);
    const sin = Math.sin(a);
    return { x: v.x * cos + v.z * sin, y: v.y, z: v.z * cos - v.x * sin };
  }
  /**
   * rotateZ
   *
   * Rotates the vector around the z axis counterclockwise (left hand rule)
   * @param a - Angle in radians
   */
  static rotateZ(v, a) {
    const cos = Math.cos(a);
    const sin = Math.sin(a);
    return { x: v.x * cos - v.y * sin, y: v.y * cos + v.x * sin, z: v.z };
  }
};

// scripts/armorEffects.ts
import { EntityComponentTypes as EntityComponentTypes2, EquipmentSlot as EquipmentSlot2, ItemStack as ItemStack2, system as system4, world as world5 } from "@minecraft/server";
var ArmorEffectDuration = 300;
var SensitiveArmorEffectDuration = 500;
var PFECustomArmorEffectDynamicProperty = `poke_pfe:custom_effects`;
var PFESetEffectId = "poke_pfe:set_effects";
function CheckEffects(player, additionalOptions, customParse) {
  const Helmet = player.getComponent(EntityComponentTypes2.Equippable)?.getEquipment(EquipmentSlot2.Head) ?? void 0;
  const Chestplate = player.getComponent(EntityComponentTypes2.Equippable)?.getEquipment(EquipmentSlot2.Chest) ?? void 0;
  const Leggings = player.getComponent(EntityComponentTypes2.Equippable)?.getEquipment(EquipmentSlot2.Legs) ?? void 0;
  const Boots = player.getComponent(EntityComponentTypes2.Equippable)?.getEquipment(EquipmentSlot2.Feet) ?? void 0;
  const Offhand = player.getComponent(EntityComponentTypes2.Equippable)?.getEquipment(EquipmentSlot2.Offhand) ?? void 0;
  const Mainhand = player.getComponent(EntityComponentTypes2.Equippable)?.getEquipment(EquipmentSlot2.Mainhand) ?? void 0;
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
    if (!component) continue;
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
  let customEffects = JSON.parse(world5.getDynamicProperty(PFECustomArmorEffectDynamicProperty).toString());
  if (additionalOptions) {
    const NoveltyTags = player.getTags().filter((tag) => tag.includes(`novelty:poke`));
    for (let i = NoveltyTags.length; i > -1; i--) {
      const tag = NoveltyTags.at(i);
      if (!tag) continue;
      const item = new ItemStack2(tag.substring(8), 1);
      totalPieces += 1;
      switch (true) {
        default:
          {
            let passed = false;
            if (customEffects.length > 0) {
              for (let customEffect of customEffects) {
                if (!customEffect.mode || customEffect.mode != "tag") {
                  totalPieces -= 1;
                  continue;
                }
                ;
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
        if (customEffect.mode == "lore" && JSON.stringify(item.getLore()).includes(customEffect.tag) || (!customEffect.mode || customEffect.mode == "tag") && item.hasTag(customEffect.tag)) {
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
      default:
        break;
    }
  }
  for (let effect of effects) {
    let effectDuration = Number(world5.getDynamicProperty("poke_pfe:setEffectDuration") ?? ArmorEffectDuration);
    let ActiveEffects = player.getEffect(effect.effect) ?? false;
    if (!ActiveEffects) {
      player.addEffect(effect.effect, effectDuration, { showParticles: false, amplifier: 0 });
    } else {
      let CurrentEffect = 0;
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
        default:
          break;
      }
      player.addEffect(
        effect.effect,
        effectDuration,
        {
          showParticles: false,
          amplifier: clampNumber(Math.min(ActiveEffects.amplifier + 1, totalPieces, effect.max_amp, clampNumber(CurrentEffect - 1, 0, 255)), 0, 255)
        }
      );
    }
  }
  let noCommandRepeats = [];
  for (let command of commands) {
    if (command.no_repeat_id) {
      if (noCommandRepeats.includes(command.no_repeat_id)) continue;
      noCommandRepeats.push(command.no_repeat_id);
    }
    if (command.disable_check) {
      const disabledOptions = JSON.parse(world5.getDynamicProperty(PFEDisableConfigName).toString()) ?? PFEDisableConfigDefault;
      switch (command.disable_check) {
        case "cactus_radius": {
          if (disabledOptions.cactusArmorRadius === false) continue;
          break;
        }
        case "death_radius": {
          if (disabledOptions.deathArmorRadius === false) continue;
          break;
        }
      }
    }
    let bind_to = player;
    switch (command.bind_to) {
      case "player":
        break;
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
      if (noRadiusEffectRepeats.includes(radiusEffect.no_repeat_id)) continue;
      noRadiusEffectRepeats.push(radiusEffect.no_repeat_id);
      const SameNoRepeat = radius_effects.filter((effect) => effect.no_repeat_id == radiusEffect.no_repeat_id);
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
    let effectDuration = Boolean(radiusEffect.duration) ? Number(radiusEffect.duration) : Number(world5.getDynamicProperty("poke_pfe:setEffectDuration") ?? ArmorEffectDuration);
    const targets = player.dimension.getPlayers({ location: player.location, maxDistance: clampNumber(radiusEffect.totalRadius ?? radiusEffect.radius_per_piece ?? radiusEffect.max_radius, 0, radiusEffect.max_radius), excludeNames: radiusEffect.effect_self ? void 0 : [player.name] });
    for (let target of targets) {
      target.addEffect(radiusEffect.effect, effectDuration, { showParticles: false, amplifier: clampNumber(radiusEffect.totalAmp ?? radiusEffect.amp ?? 0, 0, radiusEffect.max_amp) });
    }
  }
}
function startSetEffects() {
  return system4.runInterval(() => {
    if (world5.getDynamicProperty(`poke_pfe:disable_armor_effects`)) return;
    const customParse = world5.getDynamicProperty(`poke_pfe:custom_effect_parser`) == true ? true : false;
    for (let player of world5.getAllPlayers()) {
      if (!player) continue;
      CheckEffects(player, JSON.stringify(player.getTags()).includes(`novelty:poke`), customParse);
    }
  }, Number(world5.getDynamicProperty("poke_pfe:setEffectInterval") ?? 20));
}

// scripts/config.ts
function OpenPFEConfig(player) {
  if (player.playerPermissionLevel == PlayerPermissionLevel2.Operator || player.hasTag(`poke_pfe:config`)) {
    let UI = new ActionFormData4();
    UI.button({ translate: `translation.poke_pfe.bossEventConfig` }, `textures/poke/common/spawn_enabled`);
    UI.button({ translate: `translation.poke_pfe.disableConfig` }, `textures/poke/common/blacklist_add`);
    UI.button({ translate: `%poke_pfe.miscOptions` }, `textures/poke/common/more_options`);
    UI.show(player).then((response) => {
      let selection = 0;
      if (response.selection == selection) {
        if (world6.getDynamicProperty(PFEBossEventConfigName) == void 0) {
          world6.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
        }
        PFEBossEventUIMainMenu(player);
        return;
      } else selection++;
      if (response.selection == selection) {
        PFEDisableConfigMainMenu(player);
        return;
      } else selection++;
      if (response.selection == selection) {
        let UI2 = new ModalFormData3();
        UI2.title({ translate: `%poke_pfe.miscOptions` });
        UI2.label({ translate: `%poke_pfe.setEffects` });
        UI2.divider();
        UI2.slider({ translate: `%poke_pfe.effectDuration` }, 1, 30, { valueStep: 1, tooltip: { translate: `%poke_pfe.effectDuration.tooltip` }, defaultValue: Number(world6.getDynamicProperty("poke_pfe:setEffectDuration") ?? ArmorEffectDuration) / 20 });
        UI2.slider({ translate: `%poke_pfe.applyInterval` }, 1, 10, { valueStep: 1, tooltip: { translate: `%poke_pfe.applyInterval.tooltip` }, defaultValue: Number(world6.getDynamicProperty("poke_pfe:setEffectInterval") ?? 1) / 20 });
        UI2.show(player).then((response2) => {
          if (response2.canceled) return;
          world6.setDynamicProperty("poke_pfe:setEffectDuration", Number(response2.formValues?.at(2) ?? ArmorEffectDuration / 20) * 20);
          world6.setDynamicProperty("poke_pfe:setEffectInterval", Number(response2.formValues?.at(3) ?? 1) * 20);
          const intervalId = world6.getDynamicProperty("poke_pfe:setEffectIntervalId");
          if (intervalId) {
            system5.runInterval;
            system5.clearRun(intervalId);
            world6.setDynamicProperty("poke_pfe:setEffectIntervalId", startSetEffects());
          }
        });
        return;
      } else selection++;
      if (response.selection == selection || response.canceled) {
        return;
      }
    });
  } else {
    let UI = new ActionFormData4();
    UI.title({ translate: `translation.poke_pfe.insufficientPerms` });
    UI.body({ translate: `%translation.poke_pfe.insufficientPerms.desc:\xA7e poke_pfe:config\xA7r

%translation.poke_pfe.insufficientPerms.desc2
\xA7e/tag @s add poke_pfe:config\xA7r` });
    UI.button({ translate: `translation.poke_pfe:bossEventClose` }, `textures/poke/common/close`);
    UI.show(player).then((response) => {
      return;
    });
    return;
  }
}
var PFEDisableConfigName = "poke_pfe:disable_config";
var PFEDisableConfigVersion = 2;
var PFEDisableConfigDefault = {
  "v": PFEDisableConfigVersion,
  "bounty": true,
  "cactusArmorRadius": true,
  "deathArmorRadius": true,
  "kapowRing": true,
  "nukeRing": true,
  "quantumTeleporter": true,
  "sundial": true,
  "witherSpawner": true,
  "waypoints": true,
  "playerMagnet": true
};
function PFEDisableConfigMainMenu(player) {
  let UI = new ActionFormData4();
  let options = JSON.parse(world6.getDynamicProperty(PFEDisableConfigName).toString());
  const enabled = `\xA7a
%translation.poke_pfe.enabled`;
  const disabled = `\xA7c
%translation.poke_pfe.disabled`;
  UI.button({ translate: `%poke_pfe.quantum_teleporter:${options.quantumTeleporter ? enabled : disabled}` }, `textures/poke/pfe/quantum_teleporter`);
  UI.button({ translate: `%poke_pfe.player_magnet:${options.playerMagnet ? enabled : disabled}` }, `textures/poke/pfe/player_magnet`);
  UI.button({ translate: `%poke_pfe.kapow_ring:${options.kapowRing ? enabled : disabled}` }, `textures/poke/pfe/kapow_ring`);
  UI.button({ translate: `%poke_pfe.nuke_ring:${options.nukeRing ? enabled : disabled}` }, `textures/poke/pfe/nuke_ring`);
  UI.button({ translate: `%poke_pfe.sundial:${options.sundial ? enabled : disabled}` }, `textures/poke/pfe/sundial_1`);
  UI.button({ translate: `%poke_pfe.wither_spawner:${options.witherSpawner ? enabled : disabled}` }, `textures/poke/pfe/wither_spawner`);
  UI.button({ translate: `%poke_pfe.bounty:${options.bounty ? enabled : disabled}` }, `textures/poke/pfe/bounty`);
  UI.button({ translate: `%poke_pfe.waypoint_menu:${options.waypoints ? enabled : disabled}` }, `textures/poke/pfe/waypoint_menu`);
  UI.button({ translate: `%poke_pfe.set_effects:${world6.getDynamicProperty(`poke_pfe:disable_armor_effects`) == true ? disabled : enabled}` }, `textures/poke/common/effect_particles`);
  UI.button({ translate: `%translation.poke_pfe.death_armor_radius:${options.deathArmorRadius ? enabled : disabled}` }, `textures/poke/pfe/death_helmet`);
  UI.button({ translate: `%translation.poke_pfe.cactus_armor_radius:${options.cactusArmorRadius ? enabled : disabled}` }, `textures/poke/pfe/cactus_helmet`);
  UI.button({ translate: `translation.poke_pfe:goBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    let newProperty = options;
    if (response.selection == selection) {
      if (newProperty.quantumTeleporter) {
        newProperty.quantumTeleporter = false;
      } else newProperty.quantumTeleporter = true;
      world6.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(player);
      return;
    } else selection++;
    if (response.selection == selection) {
      if (newProperty.playerMagnet) {
        newProperty.playerMagnet = false;
      } else newProperty.playerMagnet = true;
      world6.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(player);
      return;
    } else selection++;
    if (response.selection == selection) {
      if (newProperty.kapowRing) {
        newProperty.kapowRing = false;
      } else newProperty.kapowRing = true;
      world6.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(player);
      return;
    } else selection++;
    if (response.selection == selection) {
      if (newProperty.nukeRing) {
        newProperty.nukeRing = false;
      } else newProperty.nukeRing = true;
      world6.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(player);
      return;
    } else selection++;
    if (response.selection == selection) {
      if (newProperty.sundial) {
        newProperty.sundial = false;
      } else newProperty.sundial = true;
      world6.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(player);
      return;
    } else selection++;
    if (response.selection == selection) {
      if (newProperty.witherSpawner) {
        newProperty.witherSpawner = false;
      } else newProperty.witherSpawner = true;
      world6.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(player);
      return;
    } else selection++;
    if (response.selection == selection) {
      if (newProperty.bounty) {
        newProperty.bounty = false;
      } else newProperty.bounty = true;
      world6.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(player);
      return;
    } else selection++;
    if (response.selection == selection) {
      if (newProperty.waypoints) {
        newProperty.waypoints = false;
      } else newProperty.waypoints = true;
      newProperty.v = newProperty.v < 2 ? newProperty.v = 2 : newProperty.v;
      world6.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(player);
      return;
    } else selection++;
    if (response.selection == selection) {
      world6.getDynamicProperty(`poke_pfe:disable_armor_effects`) == false ? world6.setDynamicProperty(`poke_pfe:disable_armor_effects`, true) : world6.setDynamicProperty(`poke_pfe:disable_armor_effects`, false);
      PFEDisableConfigMainMenu(player);
      return;
    } else selection++;
    if (response.selection == selection) {
      if (newProperty.deathArmorRadius) {
        newProperty.deathArmorRadius = false;
      } else newProperty.deathArmorRadius = true;
      world6.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(player);
      return;
    } else selection++;
    if (response.selection == selection) {
      if (newProperty.cactusArmorRadius) {
        newProperty.cactusArmorRadius = false;
      } else newProperty.cactusArmorRadius = true;
      world6.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(player);
      return;
    } else selection++;
    if (response.canceled || response.selection == selection) {
      return;
    }
  });
}

// scripts/quests.ts
import { EntityComponentTypes as EntityComponentTypes3, EquipmentSlot as EquipmentSlot3, ItemStack as ItemStack3 } from "@minecraft/server";
import { ActionFormData as ActionFormData5 } from "@minecraft/server-ui";
var PFEQuestPropertyID = `poke_pfe:quests`;
var PFECustomMineQuestsPropertyID = `poke_pfe:custom_mine_quests`;
var PFECustomFarmQuestsPropertyID = `poke_pfe:custom_farm_quests`;
var PFECustomCraftQuestsPropertyID = `poke_pfe:custom_craft_quests`;
var PFECustomKillQuestsPropertyID = `poke_pfe:custom_kill_quests`;
function PFERollQuest(item, player, questType) {
  let AddingQuest = questType.at(Math.round(Math.random() * questType.length)) ?? questType.at(0) ?? { requiredItem: {}, reward: { tokenAmount: 0, item: new ItemStack3(MinecraftItemTypes.Dirt, 1) } };
  item.keepOnDeath = true;
  PokeSaveProperty(PFEQuestPropertyID, item, JSON.stringify(AddingQuest), player, void 0);
  QuestInfoUI(item, player);
}
var PFEQuestComponent = class {
  onUse(data, component) {
    if (!data.itemStack) return;
    const componentInfo = component.params;
    const additionalComponentInfo = data.itemStack.getComponent("poke_pfe:custom_quests_info");
    if (!data.itemStack.getDynamicProperty(PFEQuestPropertyID)) {
      let quests = [];
      componentInfo ? quests = quests.concat(componentInfo) : void 0;
      additionalComponentInfo?.custom_quest_dynamic_property ? typeof data.itemStack.getDynamicProperty(additionalComponentInfo.custom_quest_dynamic_property) === "string" ? quests = quests.concat(JSON.parse(data.itemStack.getDynamicProperty(additionalComponentInfo.custom_quest_dynamic_property).toString())) ?? quests : void 0 : void 0;
      let upgradedQuests = ConvertQuestV1toV2(quests);
      PFERollQuest(data.itemStack, data.source, upgradedQuests);
    } else {
      QuestInfoUI(data.itemStack, data.source);
    }
  }
};
function QuestInfoUI(item, player) {
  if (!item) return;
  let UI = new ActionFormData5();
  let quest = JSON.parse(item.getDynamicProperty(PFEQuestPropertyID).toString()) ?? console.warn(`Quest not found or failed to parse || poke_pfe:quest`);
  let validRequiredItems = PokeGetItemFromInventory(player, void 0, quest.item) ?? false;
  let totalItems = 0;
  let canComplete = false;
  UI.title({ translate: `translation.poke_pfe.quest_info` });
  UI.body({ translate: `%translation.poke_pfe.items_needed:
- \xA7c${quest.amount}\xA7rx ${quest.translationString}
%translation.poke_pfe.quest_reward:
- \xA7c${quest.tokenAmount}\xA7rx %poke_pfe.copper_token (%poke_pfe.tag)` });
  if (validRequiredItems) {
    for (let item2 of validRequiredItems) {
      if (!item2) continue;
      totalItems += item2.amount;
      continue;
    }
  }
  if (validRequiredItems && quest.amount <= totalItems) {
    UI.button({ translate: `translation.poke_pfe.completeQuest` }, `textures/poke/common/confirm`);
    canComplete = true;
  } else UI.button({ translate: `translation.poke_pfe.missing_items` }, `textures/poke/common/chest_question`);
  UI.button({ translate: `translation.poke_pfe:bossEventClose` }, "textures/poke/common/close");
  UI.show(player).then((response) => {
    let selection = 0;
    if (response.selection == selection && canComplete) {
      player.runCommand(`clear @s ${quest.item} -1 ${quest.amount}`);
      player.getComponent(EntityComponentTypes3.Equippable)?.setEquipment(EquipmentSlot3.Mainhand, void 0);
      player.dimension.spawnItem(new ItemStack3(`poke_pfe:copper_token`, quest.tokenAmount), player.location);
      player.playSound(`poke_pfe.quest.complete`, { pitch: clampNumber(Math.random() + 0.5, 0.85, 1.15), volume: 0.9 });
    } else selection++;
    if (response.canceled || response.selection == selection) {
      return;
    }
  });
}
function ConvertQuestV1toV2(quests) {
  let newQuestList = [];
  for (let quest of quests) {
    if (!quest.requiredItem?.item) {
      newQuestList.push(quest);
      continue;
    }
    ;
    let newQuest = {
      item: quest.requiredItem.item,
      amount: quest.requiredItem.amount,
      translationString: quest.requiredItem.translationString,
      tokenAmount: quest.reward.tokenAmount
    };
    newQuestList.push(newQuest);
  }
  return newQuestList;
}

// scripts/custom_components/item_custom_components.ts
import { BlockPermutation, Direction as Direction2, EntityComponentTypes as EntityComponentTypes8, EquipmentSlot as EquipmentSlot8, GameMode as GameMode4, ItemComponentTypes as ItemComponentTypes4, ItemStack as ItemStack8, system as system8, world as world10 } from "@minecraft/server";

// scripts/boltbow.ts
import { EntityComponentTypes as EntityComponentTypes5, EquipmentSlot as EquipmentSlot5, GameMode as GameMode3, ItemComponentTypes as ItemComponentTypes2, ItemStack as ItemStack5 } from "@minecraft/server";
import { ActionFormData as ActionFormData7 } from "@minecraft/server-ui";

// scripts/upgrades.ts
import { ActionFormData as ActionFormData6, ModalFormData as ModalFormData4 } from "@minecraft/server-ui";
import { EntityComponentTypes as EntityComponentTypes4, EquipmentSlot as EquipmentSlot4, GameMode as GameMode2 } from "@minecraft/server";
var debug = true;
var PFEUpgradeableId = "poke_pfe:upgradeable";
var PFEUpgrades = class {
  persistence = PFEPersistenceCoreDefault;
  flaming = PFEFlamingCoreDefault;
  capacity = PFECapacityCoreDefault;
};
var PFEUpgradeableComponent = class {
  onUse(data, componentInfo) {
    const component = componentInfo.params;
    if (!data.itemStack) return;
    if (component.sneak_interact_opens_ui && data.source.isSneaking) {
      const parsedUpgradeInfo = ParsePFEUpgradeComponent(data.itemStack, data.source, component);
      PokeUpgradeUI(data.source, data.itemStack, parsedUpgradeInfo, true);
    }
  }
};
function ParsePFEUpgradeComponent(item, player, component) {
  let upgrades = [];
  const customUpgrades = item.getComponent("poke_pfe:custom_upgrades");
  const PFEUpgrade = new PFEUpgrades();
  const defaultUpgrades = [JSON.parse(JSON.stringify(PFEUpgrade.persistence)), PFEUpgrade.capacity, PFEUpgrade.flaming];
  let allUpgrades = customUpgrades ? defaultUpgrades.concat(customUpgrades) : defaultUpgrades;
  const compressedUpgrades = JSON.parse(item.getDynamicProperty(component.dynamic_property ?? "poke_pfe:upgrades")?.toString() ?? JSON.stringify([]));
  if (component.upgrade_ids) {
    for (let upgrade_id of component?.upgrade_ids) {
      const validUpgrade = allUpgrades.filter((upgrade) => upgrade.id == upgrade_id).at(0);
      const compressedUpgrade = compressedUpgrades?.upgrades ? compressedUpgrades?.upgrades.filter((compressedUpgrade2) => compressedUpgrade2.id == validUpgrade?.id)?.at(0) ?? void 0 : void 0;
      if (validUpgrade) {
        if (compressedUpgrade) validUpgrade.level += compressedUpgrade.level;
        upgrades.push(validUpgrade);
      }
    }
  }
  if (upgrades.length < 1) {
    const persistenceUpgrade = defaultUpgrades.at(0);
    persistenceUpgrade.level = compressedUpgrades?.upgrades ? compressedUpgrades.upgrades.filter((compressedUpgrade) => compressedUpgrade?.id == PFEPersistenceCoreDefault.id).at(0)?.level ?? 0 : 0;
    upgrades.push(persistenceUpgrade);
  }
  let parsedUpgradeInfo = {
    dynamicProperty: component.dynamic_property ?? "poke_pfe:upgrades",
    id: "poke_pfe:upgradable_component",
    v: 1,
    upgrades,
    compressedUpgrades: JSON.parse(item.getDynamicProperty(component.dynamic_property ?? "poke_pfe:upgrades")?.toString() ?? "[]") ?? void 0
  };
  return parsedUpgradeInfo;
}
function PokeUpgradeUI(player, item, config, compressedSave, component, slot) {
  let UI = new ActionFormData6();
  for (let upgrade of config.upgrades) {
    const upgradeCost = upgrade.maxLevel ? upgrade.maxLevel <= upgrade.level ? Infinity : upgrade.upgradeAdditive ? Number(upgrade.level) + 1 : 1 : upgrade.upgradeAdditive ? Number(upgrade.level) + 1 : 1;
    const HasItem = player.getGameMode() == GameMode2.Creative ? true : Boolean(PokeGetItemFromInventory(player, void 0, upgrade.upgradeItem)?.length);
    UI.label({ translate: `${upgrade.upgradeName} %poke_pfe.level: ${upgrade.maxLevel == upgrade.maxLevel ? "\xA7c" : "\xA7b"}${clampNumber(upgrade.level, 0, upgrade.maxLevel ?? Infinity)}\xA7r/\xA7c${upgrade.maxLevel}` });
    UI.button(
      { translate: `${upgrade.level == upgrade.maxLevel ? "" : "%translation.poke_pfeUpgrade "}${upgrade.upgradeName ?? upgrade.upgradeItem}
${upgradeCost == Infinity ? "%poke_pfe.max_level" : `%translation.poke_pfecost: ${upgradeCost} ${upgrade.upgradeItemName ?? item.typeId}`}` },
      upgrade.level != upgrade.maxLevel && HasItem ? upgrade.icon?.default : upgrade.icon?.cantUpgrade ?? upgrade.icon?.default ?? `textures/poke/common/upgrade`
    );
  }
  if (debug) {
    UI.button({ translate: `Debug` }, `textures/poke/common/debug`);
  }
  UI.button({ translate: `translation.poke_pfe:goBack` }, `textures/poke/common/left_arrow`);
  UI.title({ translate: `poke_pfe.upgradeTitle`, with: [item.nameTag ?? `%poke_pfe.${item.typeId.replace(`poke_pfe:`, ``).replace(`poke_pfe:`, ``)}`] });
  UI.show(player).then((response) => {
    let selection = 0;
    for (let upgrade of config.upgrades) {
      if (response.selection == selection) {
        const HasItem = player.getGameMode() == GameMode2.Creative ? true : Boolean(PokeGetItemFromInventory(player, void 0, upgrade.upgradeItem)?.length);
        const dynamicProperty = item.getDynamicProperty(config.dynamicProperty);
        const currentCompressed = compressedSave ? typeof dynamicProperty == "string" ? JSON.parse(dynamicProperty) : void 0 : void 0;
        const upgradeCost = upgrade.maxLevel ? upgrade.maxLevel <= upgrade.level ? Infinity : upgrade.upgradeAdditive ? Number(upgrade.level) + 1 : 1 : upgrade.upgradeAdditive ? Number(upgrade.level) + 1 : 1;
        if (upgradeCost !== Infinity && HasItem && upgrade.level != upgrade.maxLevel) {
          if (upgrade.id == PFEPersistenceCoreDefault.id) item.keepOnDeath = true;
          const compressedUpgradeLevel = Number(currentCompressed?.upgrades.filter((compressedUpgrade) => compressedUpgrade.id == upgrade.id).at(0)?.level) ?? Number(upgrade.level);
          let compressedNewProperty = {
            upgrades: currentCompressed ? currentCompressed.upgrades.filter((compressedUpgrade) => compressedUpgrade.id != upgrade.id).concat(
              [
                {
                  id: upgrade.id,
                  level: (compressedUpgradeLevel ?? 0) + 1
                }
              ]
            ) : []
          };
          let newProperty = {
            id: upgrade.id,
            icon: upgrade.icon,
            level: Number(upgrade.level) + 1,
            upgradeName: upgrade.upgradeName,
            maxLevel: upgrade.maxLevel,
            upgradeItem: upgrade.upgradeItem,
            upgradeItemName: upgrade.upgradeItemName,
            upgradeAdditive: upgrade.upgradeAdditive
          };
          config.upgrades = config.upgrades.filter((oldUpgrade) => oldUpgrade.id != upgrade.id).concat(newProperty);
          if (player.getGameMode() != GameMode2.Creative && upgradeCost != Infinity) {
            player.runCommand(`clear @s ${upgrade.upgradeItem} -1 ${upgradeCost}`);
          }
          PokeSaveProperty(component?.dynamic_property ?? config.dynamicProperty, item, JSON.stringify(compressedSave ? compressedNewProperty : config), player, slot ?? EquipmentSlot4.Mainhand);
          return;
        } else {
          console.warn(`Failed to upgrade`);
          return;
        }
      } else selection++;
      continue;
    }
    if (debug) {
      if (response.selection == selection) {
        const UI2 = new ModalFormData4();
        UI2.label(`${JSON.stringify(item.getComponent("poke_pfe:upgrades"), void 0, "\n") ?? "undefined"}`);
        UI2.divider();
        UI2.label(`config
${JSON.stringify(config, void 0, "\n") ?? "undefined"}`);
        UI2.divider();
        UI2.label(`compressedSave
${JSON.stringify(compressedSave, void 0, "\n") ?? "undefined"}`);
        UI2.divider();
        UI2.label(`component
${JSON.stringify(component, void 0, "\n") ?? "undefined"}`);
        UI2.divider();
        UI2.label(`slot
${JSON.stringify(slot, void 0, "\n") ?? "undefined"}`);
        UI2.divider();
        UI2.label(`PFECapacityCoreDefault
${JSON.stringify(PFECapacityCoreDefault, void 0, "\n") ?? "undefined"}`);
        UI2.divider();
        UI2.label(`PFEFlamingCoreDefault
${JSON.stringify(PFEFlamingCoreDefault, void 0, "\n") ?? "undefined"}`);
        UI2.divider();
        UI2.label(`PFEPersistenceCoreDefault
${JSON.stringify(PFEPersistenceCoreDefault, void 0, "\n") ?? "undefined"}`);
        UI2.show(player);
        return;
      } else selection++;
    }
    if (response.canceled || response.selection == selection) {
      return;
    } else selection++;
  });
}
var PFEPersistenceCoreDefault = {
  id: "poke_pfe:persistence",
  upgradeItem: `poke_pfe:persistence_core`,
  icon: { default: `textures/poke/pfe/persistence_core`, cantUpgrade: `textures/poke/pfe/persistence_core_gs` },
  upgradeName: `%translation.poke_pfe.persistence`,
  upgradeItemName: `%poke_pfe.persistence_core`,
  upgradeAdditive: false,
  level: 0,
  maxLevel: 1
};
var PFEFlamingCoreDefault = {
  id: "poke_pfe:flaming",
  upgradeItem: `poke_pfe:flaming_core`,
  icon: { default: `textures/poke/pfe/flaming_core`, cantUpgrade: `textures/poke/pfe/flaming_core_gs` },
  upgradeName: `%translation.poke_pfe.flaming`,
  upgradeItemName: `%poke_pfe.flaming_core`,
  upgradeAdditive: false,
  level: 0,
  maxLevel: 1
};
var PFECapacityCoreDefault = {
  id: "poke_pfe:capacity",
  upgradeItem: `poke_pfe:capacity_core`,
  icon: { default: `textures/poke/pfe/capacity_core`, cantUpgrade: `textures/poke/pfe/capacity_core_gs` },
  upgradeName: `%translation.poke_pfe.capacity`,
  upgradeItemName: `%poke_pfe.capacity_core`,
  upgradeAdditive: true,
  level: 1,
  maxLevel: void 0
};

// scripts/boltbow.ts
var CapacityUpgradeDefault = new PFEUpgrades().capacity;
var FlamingUpgradeDefault = new PFEUpgrades().flaming;
var PersistenceUpgradeDefault = new PFEUpgrades().persistence;
var PFEBoltBowDynamicPropertyID = `poke_pfe:boltbow`;
var PFEBoltBowVersion = 3;
var PFEBoltBowDefault = {
  v: PFEBoltBowVersion,
  id: "poke_pfe:boltbow",
  dynamicProperty: PFEBoltBowDynamicPropertyID,
  projectile: {
    max: 32,
    amount: 16,
    entityId: MinecraftEntityTypes.Arrow,
    id: MinecraftItemTypes.Arrow
  },
  upgrades: [
    CapacityUpgradeDefault,
    FlamingUpgradeDefault,
    PersistenceUpgradeDefault
  ]
};
var PFEBoltBowsComponent = class {
  onUse(data) {
    if (!data.itemStack) return;
    if (data.source.isSneaking) {
      PFEAmmoManagementMainMenuUI(data.itemStack, data.source);
      return;
    }
    let ammoComponent = PFEBoltBowDefault;
    if (typeof data.itemStack.getDynamicProperty(PFEBoltBowDynamicPropertyID) != "string") {
      PokeSaveProperty(PFEBoltBowDynamicPropertyID, data.itemStack, JSON.stringify(PFEBoltBowDefault), data.source);
    } else ammoComponent = JSON.parse(data.itemStack.getDynamicProperty(PFEBoltBowDynamicPropertyID).toString());
    if (typeof data.itemStack.getDynamicProperty(`poke_pfe:ammo`) == "string") {
      UpdateBoltbowV2toV3(data.source, data.itemStack);
    }
    if (!ammoComponent.v || ammoComponent.v <= 2) {
      let newProperty = [];
      for (let upgrade of ammoComponent.upgrades) {
        let upgradeDefault = upgrade.id == FlamingUpgradeDefault.id ? FlamingUpgradeDefault : upgrade.id == CapacityUpgradeDefault.id ? CapacityUpgradeDefault : upgrade.id == PersistenceUpgradeDefault.id ? PersistenceUpgradeDefault : void 0;
        newProperty.concat([{
          id: upgrade.id,
          level: upgrade.level + 1,
          maxLevel: upgrade.maxLevel,
          icon: upgrade.icon ?? upgradeDefault?.icon,
          upgradeAdditive: upgrade.upgradeAdditive ?? upgradeDefault?.upgradeAdditive,
          upgradeItem: upgrade.upgradeItem ?? upgradeDefault?.upgradeItem,
          upgradeItemName: upgrade.upgradeItemName ?? upgradeDefault?.upgradeItemName,
          upgradeName: upgrade.upgradeName ?? upgradeDefault?.upgradeName
        }]);
      }
      if (!(ammoComponent.upgrades.filter((upgrade) => upgrade.id == PersistenceUpgradeDefault.id).length == 1)) newProperty.concat([PersistenceUpgradeDefault]);
      ammoComponent.upgrades = newProperty;
      PokeSaveProperty(PFEBoltBowDynamicPropertyID, data.itemStack, JSON.stringify(ammoComponent), data.source);
    }
    const cPlayers = data.source.dimension.getPlayers({ excludeNames: ["" + data.source.name] });
    for (var i = cPlayers.length; i > 0; i--) {
      data.source.playAnimation("animation.poke_pfe.humanoid.boltbow_hold_3p", { blendOutTime: 0.5, stopExpression: `!q.is_item_name_any('slot.weapon.mainhand','${data.itemStack.typeId}')`, players: [cPlayers[i - 1]] });
    }
    const cooldownComponent = data.itemStack.getComponent(ItemComponentTypes2.Cooldown);
    if (cooldownComponent) {
      const ticks = cooldownComponent.cooldownTicks;
      if (cooldownComponent.getCooldownTicksRemaining(data.source) != ticks - 1) return;
    }
    let delay = 1;
    if (ammoComponent.projectile.amount >= 1) {
      data.source.playAnimation(`animation.poke_pfe.boltbow.use`);
      let equippableComponent = data.source.getComponent(EntityComponentTypes5.Equippable);
      if (!equippableComponent) return;
      if (equippableComponent.getEquipmentSlot(EquipmentSlot5.Mainhand).getItem()?.typeId != data.itemStack?.typeId || equippableComponent.getEquipmentSlot(EquipmentSlot5.Mainhand).getDynamicProperty(PFEBoltBowDynamicPropertyID) != JSON.stringify(ammoComponent)) return;
      PokeShoot(data.source, ammoComponent, data.itemStack, delay);
    } else {
      data.source.dimension.playSound(`poke_pfe.boltbow.noAmmo`, data.source.location);
    }
    return;
  }
};
function PokeShoot(player, ammoComponent, item, delay) {
  if (player.getGameMode() != GameMode3.Creative) {
    ammoComponent.projectile.amount = ammoComponent.projectile.amount - 1;
  }
  item.setDynamicProperty(PFEBoltBowDynamicPropertyID, JSON.stringify(ammoComponent));
  const headLocate = player.getHeadLocation();
  const angle = player.getViewDirection();
  const projEntity = player.dimension.spawnEntity(ammoComponent.projectile.entityId, { x: headLocate.x + angle.x * 2, y: headLocate.y - 0.25 + angle.y * 2, z: headLocate.z + angle.z * 2 });
  const projComp = projEntity.getComponent(EntityComponentTypes5.Projectile);
  if (!projComp) return;
  player.playSound(`random.bow`, { pitch: ammoComponent.projectile.amount > 3 ? void 0 : ammoComponent.projectile.amount == 3 ? 1.05 : ammoComponent.projectile.amount == 2 ? 1.15 : ammoComponent.projectile.amount == 1 ? 1.25 : void 0 });
  projComp.catchFireOnHurt = PokeGetObjectById(ammoComponent.upgrades, `pfe:flaming`)?.value.level > 0;
  projComp.owner = player;
  projComp.shoot(Vector3Utils.scale(angle, 5.2), { uncertainty: void 0 });
  if (PokeDamageItemUB(item, void 0, player, EquipmentSlot5.Mainhand)?.broke) {
    pokeAddItemsToPlayerOrDrop(player, new ItemStack5(ammoComponent.projectile.id, ammoComponent.projectile.amount));
  }
}
function PFEAmmoManagementMainMenuUI(item, player) {
  let UI = new ActionFormData7();
  UI.title({ translate: `translation.poke_pfe:ammoUIMainMenuTitle`, with: { rawtext: [{ translate: `poke_pfe.${item.typeId.substring(5)}` }] } });
  if (typeof item.getDynamicProperty(PFEBoltBowDynamicPropertyID) != "string") {
    PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(PFEBoltBowDefault), player);
  }
  let boltBowComponent = JSON.parse(item.getDynamicProperty(PFEBoltBowDynamicPropertyID).toString());
  UI.button({ translate: `%poke_pfe.quick_reload [${boltBowComponent.projectile.amount}/${16 + (boltBowComponent.upgrades.filter((upgrade) => upgrade.id == CapacityUpgradeDefault.id).at(0)?.level ?? 1) * 16}]` }, `textures/poke/common/ammoQuickReload`);
  UI.button({ translate: `translation.poke_pfe:ammoUIAddAmmo` }, `textures/poke/common/ammoReload`);
  UI.button({ translate: `poke_pfe.upgrade` }, `textures/poke/common/upgrade`);
  UI.button({ translate: `translation.poke_pfe:bossEventClose` }, `textures/poke/common/close`);
  UI.show(player).then(((response) => {
    let selection = 0;
    if (response.selection == selection) {
      PFEQuickReload(boltBowComponent, item, player);
      return;
    } else selection++;
    if (response.selection == selection) {
      PFEAmmoManagementAddAmmoUI(item, player);
      return;
    } else selection++;
    if (response.selection == selection) {
      PokeUpgradeUI(player, item, boltBowComponent, false, item.getComponent(PFEUpgradeableId)?.customComponentParameters.params ?? void 0);
      return;
    } else selection++;
    if (response.canceled || selection) {
      return;
    }
  }));
}
function PFEAmmoManagementAddAmmoUI(item, player) {
  let UI = new ActionFormData7();
  let allowedAmmo = [`minecraft:arrow`, `poke_pfe:galaxy_arrow`, `poke_pfe:holy_arrow`, `poke_pfe:hellish_arrow`, `poke_pfe:void_arrow`, `poke_pfe:volt_arrow`];
  UI.title({ translate: `translation.poke_pfe:ammoUIMainMenuTitle` });
  let ammoComponent = JSON.parse(item.getDynamicProperty(PFEBoltBowDynamicPropertyID).toString());
  let buttonTotal = 0;
  let allItems = [];
  for (let i = allowedAmmo.length - 1; i > -1; i--) {
    let items = PokeGetItemFromInventory(player, void 0, allowedAmmo.at(i));
    if (!items) {
      continue;
    }
    allItems = allItems.concat(items);
    for (let i2 = items.length; i2 > -1; i2--) {
      let foundItem = items.at(i2);
      if (!foundItem) continue;
      if (foundItem.typeId == MinecraftItemTypes.Arrow) {
        UI.button({ rawtext: [{ translate: `item.arrow.name` }, { text: ` x${foundItem.amount}` }] }, PFEArrowIcon(foundItem.typeId));
      } else {
        UI.button({ rawtext: [{ translate: `item.${foundItem.typeId}` }, { text: ` x${foundItem.amount}` }] }, PFEArrowIcon(foundItem.typeId));
      }
      buttonTotal = buttonTotal + 1;
    }
  }
  UI.button({ translate: `translation.poke_pfe:bossEventClose` }, `textures/poke/common/close`);
  UI.show(player).then(((response) => {
    let selection = 0;
    if (response.canceled || response.selection == selection + buttonTotal) {
      return;
    }
    for (buttonTotal - 1; buttonTotal > -1; buttonTotal--) {
      if (response.selection == selection) {
        let selectedItem = allItems.reverse().at(buttonTotal - 1);
        if (!selectedItem) {
          PokeErrorScreen(player, void 0, PFEAmmoManagementAddAmmoUI(item, player));
          return;
        }
        if (ammoComponent.projectile.id != selectedItem.typeId) {
          let newProperty = {
            v: PFEBoltBowVersion,
            dynamicProperty: ammoComponent.dynamicProperty,
            projectile: {
              amount: clampNumber(selectedItem.amount, 0, ammoComponent.projectile?.max ?? 16),
              max: ammoComponent.projectile.max,
              id: selectedItem.typeId,
              entityId: selectedItem.typeId
            },
            id: ammoComponent.id,
            upgrades: ammoComponent.upgrades
          };
          if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
            PokeErrorScreen(player, { text: `Unable to save new ammo type` }, PFEAmmoManagementAddAmmoUI(item, player));
            return;
          }
          pokeAddItemsToPlayerOrDrop(player, new ItemStack5(ammoComponent.projectile.id, ammoComponent.projectile.amount));
          player.runCommand(`clear @s ${selectedItem.typeId} -1 ${clampNumber(selectedItem.amount, 0, ammoComponent.projectile?.max ?? 16)}`);
        } else {
          if (!ammoComponent.projectile.max) {
            let newProperty2 = {
              v: PFEBoltBowVersion,
              dynamicProperty: ammoComponent.dynamicProperty,
              projectile: {
                amount: ammoComponent.projectile.amount + selectedItem.amount,
                max: ammoComponent.projectile.max,
                id: ammoComponent.projectile.id,
                entityId: ammoComponent.projectile.entityId
              },
              id: ammoComponent.id,
              upgrades: ammoComponent.upgrades
            };
            if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty2), player)) {
              PokeErrorScreen(player, { text: `Unable to save new ammo amount` }, PFEAmmoManagementAddAmmoUI(item, player));
              return;
            }
            player.runCommand(`clear @s ${selectedItem.typeId} -1 ${selectedItem.amount}`);
            return;
          }
          let maxRemaining = ammoComponent.projectile.max - ammoComponent.projectile.amount;
          console.warn(maxRemaining);
          let takeAmount = selectedItem.amount;
          if (maxRemaining < selectedItem.amount) {
            takeAmount = maxRemaining;
          }
          let newProperty = {
            v: PFEBoltBowVersion,
            dynamicProperty: ammoComponent.dynamicProperty,
            projectile: {
              amount: ammoComponent.projectile.amount + takeAmount,
              max: ammoComponent.projectile.max,
              id: ammoComponent.projectile.id,
              entityId: ammoComponent.projectile.entityId
            },
            id: ammoComponent.id,
            upgrades: ammoComponent.upgrades
          };
          if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
            PokeErrorScreen(player, { text: `Unable to save new ammo amount` }, PFEAmmoManagementAddAmmoUI(item, player));
            return;
          }
          player.runCommand(`clear @s ${selectedItem.typeId} -1 ${takeAmount}`);
        }
        return;
      } else selection++;
    }
  }));
}
function PFEArrowIcon(itemId) {
  const item = new ItemStack5(itemId, 1);
  const iconPathComponent = item.getComponent("poke_pfe:icon_path")?.customComponentParameters.params;
  if (iconPathComponent) {
    return iconPathComponent;
  }
  switch (itemId) {
    case MinecraftItemTypes.Arrow: {
      return `textures/items/arrow`;
      break;
    }
    case `poke_pfe:galaxy_arrow`: {
      return `textures/poke/pfe/galaxy_arrow_item`;
      break;
    }
    case `poke_pfe:void_arrow`: {
      return `textures/poke/pfe/void_arrow_item`;
      break;
    }
    case `poke_pfe:hellish_arrow`: {
      return `textures/poke/pfe/hellish_arrow_item`;
      break;
    }
    case `poke_pfe:holy_arrow`: {
      return `textures/poke/pfe/holy_arrow_item`;
      break;
    }
    case `poke_pfe:volt_arrow`: {
      return `textures/poke/pfe/volt_arrow_item`;
      break;
    }
    default:
      return `textures/poke/common/question`;
  }
}
function PFEQuickReload(ammoComponent, item, player) {
  let reloadingAmmo = PokeGetItemFromInventory(player, void 0, ammoComponent.projectile.id);
  if (!reloadingAmmo) {
    PokeErrorScreen(player, { text: `Failed to reload ammo` });
    return;
  }
  let totalAmount = 0;
  for (let i = reloadingAmmo.length - 1; i > -1; i--) {
    if (!reloadingAmmo.at(i)) continue;
    totalAmount = totalAmount + reloadingAmmo.at(i).amount;
  }
  if (!ammoComponent.projectile.max) {
    let newProperty2 = {
      v: PFEBoltBowVersion,
      dynamicProperty: ammoComponent.dynamicProperty,
      projectile: {
        amount: ammoComponent.projectile.amount + totalAmount,
        max: ammoComponent.projectile.max,
        id: ammoComponent.projectile.id,
        entityId: ammoComponent.projectile.entityId
      },
      id: ammoComponent.id,
      upgrades: ammoComponent.upgrades
    };
    if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty2), player)) {
      PokeErrorScreen(player, void 0, PFEAmmoManagementMainMenuUI(item, player));
      return;
    }
    player.runCommand(`clear @s ${ammoComponent.projectile.id} -1 ${totalAmount}`);
    return;
  }
  let maxRemaining = ammoComponent.projectile.max ?? Infinity - ammoComponent.projectile.amount;
  let takeAmount = totalAmount;
  if (maxRemaining < takeAmount) {
    takeAmount = maxRemaining;
  }
  let newProperty = {
    v: PFEBoltBowVersion,
    dynamicProperty: ammoComponent.dynamicProperty,
    projectile: {
      amount: ammoComponent.projectile.amount + takeAmount,
      max: ammoComponent.projectile.max,
      id: ammoComponent.projectile.id,
      entityId: ammoComponent.projectile.entityId
    },
    id: ammoComponent.id,
    upgrades: ammoComponent.upgrades
  };
  if (!PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(newProperty), player)) {
    PokeErrorScreen(player, void 0, PFEAmmoManagementMainMenuUI(item, player));
    return;
  }
  player.runCommand(`clear @s ${ammoComponent.projectile.id} -1 ${takeAmount}`);
  return;
}
function UpdateBoltbowV2toV3(player, item) {
  const unparsedOldInfo = item.getDynamicProperty(`poke_pfe:ammo`);
  const oldInfo = unparsedOldInfo ? JSON.parse(unparsedOldInfo) ?? void 0 : void 0;
  const unparsedNewInfo = item.getDynamicProperty(PFEBoltBowDynamicPropertyID);
  let newInfo = unparsedNewInfo ? JSON.parse(unparsedNewInfo) ?? PFEBoltBowDefault : PFEBoltBowDefault;
  let updatedUpgrades = [];
  if (oldInfo) {
    PokeGetObjectById(newInfo.upgrades, CapacityUpgradeDefault.id);
    const CapacityLevel = PokeGetObjectById(oldInfo.upgrades, "poke_pfe:capacity")?.value.level;
    const FlamingLevel = PokeGetObjectById(oldInfo.upgrades, "poke_pfe:flaming")?.value.level;
    for (let upgrade of newInfo.upgrades) {
      if (upgrade.id == CapacityUpgradeDefault.id) {
        upgrade.level = CapacityLevel;
        continue;
      }
      if (upgrade.id == FlamingUpgradeDefault.id) upgrade.level = FlamingLevel;
      updatedUpgrades.push(upgrade);
    }
  }
  let savingInfo = {
    v: 3,
    dynamicProperty: newInfo.dynamicProperty,
    id: "poke_pfe:boltbow",
    projectile: {
      id: oldInfo?.id ?? newInfo.projectile.id,
      amount: oldInfo?.amount ?? newInfo.projectile.amount,
      entityId: oldInfo?.entityId ?? newInfo.projectile.entityId,
      max: oldInfo?.max
    },
    upgrades: updatedUpgrades
  };
  const validUpgradeIds = [
    CapacityUpgradeDefault.id,
    FlamingUpgradeDefault.id,
    PersistenceUpgradeDefault.id
  ];
  savingInfo.upgrades = newInfo.upgrades;
  PokeSaveProperty(PFEBoltBowDynamicPropertyID, item, JSON.stringify(savingInfo), player);
  item.setDynamicProperty("poke_pfe:ammo", void 0);
}

// scripts/waypoints.ts
import { EntityComponentTypes as EntityComponentTypes6, EquipmentSlot as EquipmentSlot6, world as world8 } from "@minecraft/server";
import { ActionFormData as ActionFormData8, ModalFormData as ModalFormData5 } from "@minecraft/server-ui";
var PFEWaypointVersion = 2;
var PFEWaypointComponent = class {
  onUse(data, component) {
    const componentInfo = component.params;
    if (!data.itemStack) return;
    let options = JSON.parse(world8.getDynamicProperty(PFEDisableConfigName).toString());
    if (options.waypoints === false) {
      data.source.sendMessage({ translate: `\xA7c%translation.poke_pfe.feature_disabled` });
      return;
    }
    const WaypointConfig = data.itemStack.getDynamicProperty(WaypointDynamicPropertyID) ? JSON.parse(data.itemStack.getDynamicProperty(WaypointDynamicPropertyID).toString()) : PFEWaypointDefaultConfig;
    data.itemStack.setDynamicProperty(WaypointDynamicPropertyID, JSON.stringify(WaypointConfig));
    data.source.getComponent(EntityComponentTypes6.Equippable)?.setEquipment(EquipmentSlot6.Mainhand, data.itemStack);
    WaypointUIMainMenu(data.source, data.itemStack, componentInfo);
  }
};
var WaypointTotal = 5;
var WaypointDynamicPropertyID = `poke_pfe:waypoint_config`;
var PFEWaypointDefaultConfig = {
  v: PFEWaypointVersion,
  localSettings: {},
  waypoints: []
};
function WaypointUIMainMenu(player, itemStack, component, reParseItem) {
  let item = itemStack;
  if (reParseItem) {
    item = player.getComponent(EntityComponentTypes6.Equippable)?.getEquipment(EquipmentSlot6.Mainhand) ?? item;
  }
  let UI = new ActionFormData8();
  let waypointConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString()) ?? PFEWaypointDefaultConfig;
  UI.title({ translate: `poke_pfe.waypoint_menu` });
  UI.button({ translate: `%poke_pfe.waypoints [${waypointConfig.waypoints.length ?? 0}/${component.max_waypoints ?? WaypointTotal}]` }, `textures/poke/common/waypointRed`);
  UI.button({ translate: `%poke_pfe.options` }, `textures/poke/common/gear`);
  const UpgradeableComponent = item.getComponent("poke_pfe:upgradeable")?.customComponentParameters.params;
  if (UpgradeableComponent?.version) {
    UI.button({ translate: `poke_pfe.upgrade` }, `textures/poke/common/upgrade`);
  }
  component.debug_mode ? UI.button({ translate: `%poke_pfe.debug` }, `textures/poke/common/debug`) : void 0;
  UI.button({ translate: `%translation.poke_pfe:bossEventClose` }, `textures/poke/common/close`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (response.selection == selection) {
      WaypointUIViewWaypoints(player, item, component);
      return;
    } else selection++;
    if (response.selection == selection) {
      WaypointUIOptions(player, item, component, waypointConfig);
      return;
    } else selection++;
    if (UpgradeableComponent?.version) {
      if (response.selection == selection) {
        PokeUpgradeUI(player, item, ParsePFEUpgradeComponent(item, player, UpgradeableComponent), true, UpgradeableComponent);
        return;
      } else selection++;
    }
    if (component.debug_mode) {
      if (response.selection == selection) {
        PokeErrorScreen(player, { text: `This is not ready yet` }, WaypointUIMainMenu(player, item, component));
        return;
      } else selection++;
    }
    if (response.canceled || response.selection == selection) return;
  });
}
function WaypointUIOptions(player, item, component, waypointConfig) {
  let UI = new ActionFormData8();
  UI.title({ translate: `%poke_pfe.waypoint_menu` });
  waypointConfig.localSettings.locked ? UI.button({ translate: `%poke_pfe.unlockWaypoints
%poke_pfe.lockedBy: ${waypointConfig.localSettings.locker?.name}` }, "textures/poke/common/locked") : UI.button({ translate: `%poke_pfe.lockWaypoints` }, "textures/poke/common/unlocked");
  UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (response.selection == selection) {
      let newOptions = {
        v: PFEWaypointVersion,
        localSettings: {
          locked: waypointConfig.localSettings.locked ? false : true,
          locker: {
            id: waypointConfig.localSettings.locked ? void 0 : player.id,
            name: waypointConfig.localSettings.locked ? void 0 : player.name
          }
        },
        waypoints: waypointConfig.waypoints
      };
      PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newOptions), player, EquipmentSlot6.Mainhand);
    }
    if (response.canceled || response.selection == selection) {
      WaypointUIMainMenu(player, item, component);
      return;
    }
  });
}
function WaypointUIViewWaypoints(player, item, component) {
  let UI = new ActionFormData8();
  let waypointConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString()) ?? PFEWaypointDefaultConfig;
  UI.title({ translate: `%poke_pfe.waypoint_menu` });
  for (let waypoint of waypointConfig.waypoints) {
    UI.button(waypoint.name, waypoint.icon);
  }
  if (waypointConfig.waypoints.length < (component.max_waypoints ?? WaypointTotal)) {
    UI.button({ translate: `%poke_pfe.create_waypoint` }, `textures/poke/common/add`);
  }
  UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    for (let waypoint of waypointConfig.waypoints) {
      if (response.selection == selection) {
        WaypointUIManageWaypoint(player, item, waypoint, component);
        return;
      } else selection++;
    }
    if (waypointConfig.waypoints.length < (component.max_waypoints ?? WaypointTotal)) {
      if (response.selection == selection) {
        WaypointUICreateWaypoint(player, item, component);
        return;
      } else selection++;
    }
    if (response.canceled || response.selection == selection) {
      WaypointUIMainMenu(player, item, component);
      return;
    }
  });
}
function WaypointUIManageWaypoint(player, item, waypoint, component) {
  let UI = new ActionFormData8();
  let waypointConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString()) ?? PFEWaypointDefaultConfig;
  UI.title({ translate: `poke_pfe.waypoint_menu` });
  UI.button({ translate: `%poke_pfe.teleport` }, `textures/poke/common/teleport`);
  UI.button({ translate: `poke_pfe.update_location` }, `textures/poke/common/question`);
  UI.button({ translate: `%poke_pfe.rename` }, `textures/poke/common/edit`);
  UI.button({ translate: `%poke_pfe.change_icon` }, `textures/poke/common/painting`);
  UI.button({ translate: `%poke_pfe.delete_waypoint` }, `textures/poke/common/trash`);
  UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (response.selection == selection) {
      if (waypointConfig.localSettings.locked && waypointConfig.localSettings.locker?.id != player.id) {
        PokeErrorScreen(player, { text: `This waypoint was locked by ${waypointConfig.localSettings.locker?.name ?? "someone"}, this need to be unlocked by the locker in options to teleport to this waypoint again` }, WaypointUIManageWaypoint(player, item, waypoint, component));
        return;
      }
      waypoint.location ? player.teleport(waypoint.location, { rotation: waypoint.rotation }) : PokeErrorScreen(player, { text: `This waypoint does not have a location set.` }, WaypointUIManageWaypoint(player, item, waypoint, component));
      return;
    } else selection++;
    if (response.selection == selection) {
      PokeErrorScreen(player, { text: `This is not ready yet` }, WaypointUIManageWaypoint(player, item, waypoint, component));
      return;
    } else selection++;
    if (response.selection == selection) {
      WaypointUIRenameWaypoint(player, item, waypoint, component);
      return;
    } else selection++;
    if (response.selection == selection) {
      WaypointUIChangeWaypointIcon(player, item, waypoint, component);
      return;
    } else selection++;
    if (response.selection == selection) {
      WaypointUIDeleteWaypoint(player, item, waypoint, component);
      return;
    } else selection++;
    if (response.canceled || response.selection == selection) {
      WaypointUIViewWaypoints(player, item, component);
      return;
    }
  });
}
function WaypointUIRenameWaypoint(player, item, waypoint, component) {
  let UI = new ModalFormData5();
  let waypointConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString()) ?? PFEWaypointDefaultConfig;
  UI.title({ translate: `poke_pfe.waypoint_menu` });
  UI.textField({ translate: `%poke_pfe.new_name` }, waypoint.name, { defaultValue: `` });
  UI.show(player).then((response) => {
    if (response.canceled) {
      WaypointUIChangeWaypointIcon(player, item, waypoint, component);
      return;
    }
    let newWaypoint = {
      v: PFEWaypointVersion,
      id: waypoint.id,
      icon: waypoint.icon,
      name: response.formValues?.at(0)?.toString() ?? waypoint.name,
      location: waypoint.location,
      rotation: waypoint.rotation
    };
    let newProperty = {
      localSettings: waypointConfig.localSettings,
      v: PFEWaypointVersion,
      waypoints: waypointConfig.waypoints.filter((i) => i.id != waypoint.id).concat(newWaypoint)
    };
    PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot6.Mainhand);
    WaypointUIViewWaypoints(player, item, component);
  });
}
function WaypointUIDeleteWaypoint(player, item, waypoint, component) {
  let UI = new ActionFormData8();
  let waypointConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString()) ?? PFEWaypointDefaultConfig;
  UI.title({ translate: `poke_pfe.waypoint_menu` });
  UI.button({ translate: `%poke_pfe.confirm` }, `textures/poke/common/confirm`);
  UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (response.selection == selection) {
      let newProperty = {
        localSettings: waypointConfig.localSettings,
        v: PFEWaypointVersion,
        waypoints: waypointConfig.waypoints.filter((i) => i.id != waypoint.id)
      };
      PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot6.Mainhand);
      return;
    } else selection++;
    if (response.canceled || response.selection == selection) {
      WaypointUIManageWaypoint(player, item, waypoint, component);
      return;
    }
  });
}
function WaypointUICreateWaypoint(player, item, component) {
  let UI = new ModalFormData5();
  let waypointConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString()) ?? PFEWaypointDefaultConfig;
  UI.title({ translate: `%poke_pfe.waypoint_menu` });
  UI.textField({ translate: `%poke_pfe.name` }, "", { defaultValue: `` });
  UI.show(player).then((response) => {
    if (response.canceled) {
      WaypointUIViewWaypoints(player, item, component);
      return;
    }
    let selection = 0;
    const newName = response.formValues?.at(0)?.toString();
    let newWaypoint = {
      v: PFEWaypointVersion,
      id: Math.random() * (3 / Math.random()),
      icon: `textures/poke/common/waypointRed`,
      name: newName ?? { translate: `%translation.poke_pfe.waypoint ${waypointConfig.waypoints.length + 1}` },
      location: player.location,
      rotation: player.getRotation()
    };
    let newProperty = {
      localSettings: waypointConfig.localSettings,
      v: PFEWaypointVersion,
      waypoints: waypointConfig.waypoints.concat(newWaypoint)
    };
    PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot6.Mainhand);
    WaypointUIViewWaypoints(player, item, component);
    return;
  });
}
var WaypointIconPresets = [
  {
    path: `textures/poke/common/waypointRed`,
    name: { translate: `%icon.poke_pfe.waypointRed` }
  },
  {
    path: `textures/poke/common/debug`,
    name: { translate: `%icon.poke_pfe.debug` }
  },
  {
    path: `textures/poke/common/april_fools`,
    name: { translate: `%icon.poke_pfe.april_fools` }
  },
  {
    path: `textures/poke/common/birthday_cake`,
    name: { translate: `%icon.poke_pfe.birthday_cake` }
  },
  {
    path: `textures/poke/common/chest_open`,
    name: { translate: `%icon.poke_pfe.chest_open` }
  },
  {
    path: `textures/poke/common/chest_question`,
    name: { translate: `%icon.poke_pfe.chest_question` }
  },
  {
    path: `textures/poke/common/edit`,
    name: { translate: `%icon.poke_pfe.edit` }
  },
  {
    path: `textures/poke/common/event_default`,
    name: { translate: `%icon.poke_pfe.event_default` }
  },
  {
    path: `textures/poke/common/gear`,
    name: { translate: `%icon.poke_pfe.gear` }
  },
  {
    path: `textures/poke/common/gift`,
    name: { translate: `%icon.poke_pfe.gift` }
  },
  {
    path: `textures/poke/common/greeting`,
    name: { translate: `%icon.poke_pfe.greeting` }
  },
  {
    path: `textures/poke/common/halloween`,
    name: { translate: `%icon.poke_pfe.halloween` }
  },
  {
    path: `textures/poke/common/july_4th`,
    name: { translate: `%icon.poke_pfe.july_4th` }
  },
  {
    path: `textures/poke/common/new_year`,
    name: { translate: `%icon.poke_pfe.new_year` }
  },
  {
    path: `textures/poke/common/question`,
    name: { translate: `%icon.poke_pfe.question` }
  },
  {
    path: `textures/poke/common/st_patrick`,
    name: { translate: `%icon.poke_pfe.st_patrick` }
  },
  {
    path: `textures/poke/common/thanksgiving`,
    name: { translate: `%icon.poke_pfe.thanksgiving` }
  },
  {
    path: `textures/poke/common/trash`,
    name: { translate: `%icon.poke_pfe.trash` }
  },
  {
    path: `textures/poke/common/upgrade`,
    name: { translate: `%icon.poke_pfe.upgrade` }
  },
  {
    path: `textures/poke/common/valentine`,
    name: { translate: `%icon.poke_pfe.valentine` }
  },
  {
    path: `textures/poke/common/xmas`,
    name: { translate: `%icon.poke_pfe.xmas` }
  }
];
function WaypointUIChangeWaypointIcon(player, item, waypoint, component) {
  let UI = new ActionFormData8();
  let waypointConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString()) ?? PFEWaypointDefaultConfig;
  UI.title({ translate: `poke_pfe.waypoint_menu` });
  UI.button({ translate: `%poke_pfe.preset` }, `textures/poke/common/upcoming_events`);
  UI.button({ translate: `%poke_pfe.custom` }, `textures/poke/common/upgrade`);
  UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (response.selection == selection) {
      WaypointUISetIconPreset(player, item, waypoint, component);
      return;
    } else selection++;
    if (response.selection == selection) {
      WaypointUISetIconCustom(player, item, waypoint, component);
      return;
    } else selection++;
    if (response.canceled || response.selection == selection) {
      WaypointUIManageWaypoint(player, item, waypoint, component);
      return;
    }
  });
}
function WaypointUISetIconPreset(player, item, waypoint, component) {
  let UI = new ActionFormData8();
  let waypointConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString()) ?? PFEWaypointDefaultConfig;
  UI.title({ translate: `%poke_pfe.waypoint_menu` });
  for (let icon of WaypointIconPresets) {
    UI.button(icon.name, icon.path);
  }
  UI.button({ translate: `%translation.poke_pfe.GoBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    for (let icon of WaypointIconPresets) {
      if (response.selection == selection) {
        let newWaypoint = {
          v: PFEWaypointVersion,
          id: waypoint.id,
          icon: icon.path,
          name: waypoint.name,
          location: waypoint.location,
          rotation: waypoint.rotation
        };
        let newProperty = {
          localSettings: waypointConfig.localSettings,
          v: PFEWaypointVersion,
          waypoints: waypointConfig.waypoints.filter((i) => i.id != waypoint.id).concat(newWaypoint)
        };
        PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot6.Mainhand);
        WaypointUIViewWaypoints(player, item, component);
        return;
      } else selection++;
    }
    if (response.canceled || response.selection == selection) {
      WaypointUIManageWaypoint(player, item, waypoint, component);
      return;
    }
  });
}
function WaypointUISetIconCustom(player, item, waypoint, component) {
  let UI = new ModalFormData5();
  let waypointConfig = JSON.parse(item.getDynamicProperty(WaypointDynamicPropertyID).toString()) ?? PFEWaypointDefaultConfig;
  UI.title({ translate: `poke_pfe.waypoint_menu` });
  UI.textField({ translate: `%poke_pfe.texture_path` }, `textures/...`, { defaultValue: `` });
  UI.show(player).then((response) => {
    if (response.canceled) {
      WaypointUIChangeWaypointIcon(player, item, waypoint, component);
      return;
    }
    let newWaypoint = {
      v: PFEWaypointVersion,
      id: waypoint.id,
      icon: response.formValues?.at(0)?.toString() ?? "textures/poke/common/question",
      name: waypoint.name,
      location: waypoint.location,
      rotation: waypoint.rotation
    };
    let newProperty = {
      localSettings: waypointConfig.localSettings,
      v: PFEWaypointVersion,
      waypoints: waypointConfig.waypoints.filter((i) => i.id != waypoint.id).concat(newWaypoint)
    };
    PokeSaveProperty(WaypointDynamicPropertyID, item, JSON.stringify(newProperty), player, EquipmentSlot6.Mainhand);
    WaypointUIViewWaypoints(player, item, component);
  });
}

// scripts/boxMining.ts
import { BlockVolume, EntityComponentTypes as EntityComponentTypes7, EquipmentSlot as EquipmentSlot7, ItemComponentTypes as ItemComponentTypes3, ItemStack as ItemStack7, system as system7 } from "@minecraft/server";
import { ActionFormData as ActionFormData9, ModalFormData as ModalFormData6 } from "@minecraft/server-ui";
var PFEHaxelVersion = 3;
var PFEHaxelInfoProperty = `pfe:haxelInfo`;
var PFEHaxelConfigDefault = {
  "blacklist": [
    MinecraftBlockTypes.Chest,
    MinecraftBlockTypes.Barrel,
    MinecraftBlockTypes.BuddingAmethyst,
    MinecraftBlockTypes.MobSpawner,
    MinecraftBlockTypes.TrialSpawner,
    MinecraftBlockTypes.Vault,
    MinecraftBlockTypes.Bed
  ],
  "v": PFEHaxelVersion
};
var PFEBoxMiningComponent = class {
  onUse(data, componentInfo) {
    if (!data.itemStack) return;
    let dynamicProperty = data.itemStack.getDynamicProperty(PFEHaxelInfoProperty);
    const component = componentInfo.params;
    if (!dynamicProperty) {
      data.itemStack.setDynamicProperty(PFEHaxelInfoProperty, JSON.stringify(PFEHaxelConfigDefault));
      data.source.getComponent(EntityComponentTypes7.Equippable).setEquipment(EquipmentSlot7.Mainhand, data.itemStack);
      dynamicProperty = PFEHaxelConfigDefault;
    } else dynamicProperty = JSON.parse(dynamicProperty.toString());
    if (!dynamicProperty.v) {
      dynamicProperty = UpdateHaxelFromV1toV2(data.itemStack, data.source, dynamicProperty);
    }
    if (data.source.isSneaking) {
      PFEHaxelConfigMenu(data, component, dynamicProperty);
      return;
    }
    let localBlacklist = [];
    localBlacklist = dynamicProperty.blacklist;
    let BannedBlocks = [MinecraftBlockTypes.Air, MinecraftBlockTypes.LightBlock0, MinecraftBlockTypes.LightBlock1, MinecraftBlockTypes.LightBlock2, MinecraftBlockTypes.LightBlock3, MinecraftBlockTypes.LightBlock4, MinecraftBlockTypes.LightBlock5, MinecraftBlockTypes.LightBlock6, MinecraftBlockTypes.LightBlock7, MinecraftBlockTypes.LightBlock8, MinecraftBlockTypes.LightBlock9, MinecraftBlockTypes.LightBlock10, MinecraftBlockTypes.LightBlock11, MinecraftBlockTypes.LightBlock12, MinecraftBlockTypes.LightBlock13, MinecraftBlockTypes.LightBlock14, MinecraftBlockTypes.LightBlock15, MinecraftBlockTypes.Barrier, MinecraftBlockTypes.Jigsaw, MinecraftBlockTypes.StructureBlock, MinecraftBlockTypes.CommandBlock, MinecraftBlockTypes.ChainCommandBlock, MinecraftBlockTypes.RepeatingCommandBlock, MinecraftBlockTypes.BorderBlock, MinecraftBlockTypes.Allow, MinecraftBlockTypes.Deny];
    let location = {
      x: Math.round(data.source.location.x - component.box_size[0] / 2) + component.offset[0],
      y: Math.round(data.source.location.y - 0.01 + component.offset[1]),
      z: Math.round(data.source.location.z - component.box_size[2] / 2) + component.offset[2]
    };
    component.can_break_indestructible ? void 0 : BannedBlocks.push(MinecraftBlockTypes.Bedrock);
    component.can_break_liquids ? void 0 : BannedBlocks.push(MinecraftBlockTypes.Water, MinecraftBlockTypes.FlowingWater, MinecraftBlockTypes.Water, MinecraftBlockTypes.FlowingWater);
    system7.runJob(PFEMine(BannedBlocks.concat(localBlacklist), component, location, data.source, data.source.dimension, (data.itemStack.getComponent(ItemComponentTypes3.Enchantable)?.hasEnchantment(MinecraftEnchantmentTypes.SilkTouch) && component.allow_silk_touch !== false) == true, data.itemStack, component.whitelist));
  }
};
function* PFEMine(BannedBlocks, component, location, player, dimension, silkTouch, item, whitelist) {
  let blocksBroken = 0;
  const BoxX = component.box_size[0];
  const BoxY = component.box_size[1];
  const BoxZ = component.box_size[2];
  const endLocation = {
    x: location.x + (BoxX > 0 ? BoxX - 1 : BoxX == 0 ? 0 : BoxX + 1),
    y: location.y + (BoxY > 0 ? BoxY - 1 : BoxY == 0 ? 0 : BoxY + 1),
    z: location.z + (BoxZ > 0 ? BoxZ - 1 : BoxZ == 0 ? 0 : BoxZ + 1)
  };
  let validBlocks = dimension.getBlocks(new BlockVolume(location, endLocation), { excludeTypes: BannedBlocks, includeTypes: whitelist }, true);
  for (let blockLocation of validBlocks.getBlockLocationIterator()) {
    const block = dimension.getBlock(blockLocation);
    if (!block) continue;
    if (silkTouch) {
      let blockItemStack = (block.typeId.includes(`shulker_box`) ? block.getItemStack(1, true) : block.getItemStack(1, false)) ?? new ItemStack7(block.typeId);
      dimension.spawnItem(blockItemStack, player.location);
    } else player.runCommand(`loot spawn ${player.location.x} ${player.location.y} ${player.location.z} mine ${block.x} ${block.y} ${block.z} ${item.typeId}`);
    blocksBroken += 1;
  }
  dimension.fillBlocks(validBlocks, MinecraftBlockTypes.Air, { ignoreChunkBoundErrors: true });
  if (blocksBroken < 0) {
    dimension.playSound(component.break_sound ?? "dig.stone", player.location);
  }
  PokeDamageItemUB(item, blocksBroken, player, EquipmentSlot7.Mainhand);
  ComputersCompat.addStat("haxel_block_breaks", blocksBroken);
}
function PFEHaxelConfigMenu(data, component, dynamicProperty) {
  if (!data.itemStack) return;
  let Ui = new ActionFormData9().title({ translate: `translation.poke_pfe:onyx_haxelConfig.mainMenu.title`, with: { rawtext: [{ translate: data.itemStack?.nameTag ?? `poke_pfe.${data.itemStack?.typeId}`.replace(`poke_pfe:onyx_haxel`, `onyx_haxel`).replace(`poke_pfe:`, ``) }] } }).button({ translate: `translation.poke_pfe:onyx_haxelConfig.mainMenu.blacklistAdd` }, `textures/poke/common/blacklist_add`);
  if (dynamicProperty.blacklist.length >= 1) {
    Ui.button({ translate: `translation.poke_pfe:onyx_haxelConfig.mainMenu.blacklistRemove` }, `textures/poke/common/blacklist_remove`);
  }
  const UpgradeableComponent = data.itemStack.getComponent("poke_pfe:upgradeable")?.customComponentParameters.params;
  if (UpgradeableComponent?.version) {
    Ui.button({ translate: `poke_pfe.upgrade` }, `textures/poke/common/upgrade`);
  }
  Ui.show(data.source).then(((response) => {
    let selection = 0;
    if (response.selection == selection) {
      PFEHaxelConfigBlackListAdd(data, component, dynamicProperty);
      return;
    } else selection++;
    if (response.selection == selection) {
      PFEHaxelConfigBlackListRemove(data, component, dynamicProperty);
      return;
    } else selection++;
    if (UpgradeableComponent?.version) {
      if (response.selection == selection) {
        if (!data.itemStack) return;
        PokeUpgradeUI(data.source, data.itemStack, ParsePFEUpgradeComponent(data.itemStack, data.source, UpgradeableComponent), true, UpgradeableComponent);
        return;
      } else selection++;
    }
    if (response.canceled || selection == response.selection) return;
  }));
}
function PFEHaxelConfigBlackListAdd(data, component, dynamicProperty) {
  let Ui = new ModalFormData6().title({ translate: `translation.poke_pfe:onyx_haxelConfig.mainMenu.title`, with: { rawtext: [{ translate: data.itemStack?.nameTag ?? `poke_pfe.${data.itemStack?.typeId}`.replace(`poke_pfe:onyx_haxel`, `onyx_haxel`).replace(`poke_pfe:`, ``) }] } }).textField({ translate: `translation.poke_pfe:onyx_haxelConfig.blacklistAdd.textLabel` }, "", { defaultValue: `` }).submitButton({ translate: `translation.poke_pfe:onyx_haxelConfig.blacklistAdd.submit` });
  Ui.show(data.source).then(((response) => {
    if (response.canceled) {
      PFEHaxelConfigMenu(data, component, dynamicProperty);
      return;
    }
    ;
    ;
    let block = response.formValues?.at(0);
    if (block == "") return;
    if (typeof block == "string") {
      if (!block.includes(":")) {
        block = `minecraft:${block}`;
      }
      block = block.toLowerCase();
      let newProperty = {
        "blacklist": dynamicProperty.blacklist.concat([block]),
        "v": dynamicProperty.v
      };
      if (data.itemStack == void 0) return;
      PokeSaveProperty(PFEHaxelInfoProperty, data.itemStack, JSON.stringify(newProperty), data.source, EquipmentSlot7.Mainhand);
    }
  }));
}
function PFEHaxelConfigBlackListRemove(data, component, dynamicProperty) {
  let Ui = new ActionFormData9().title({ translate: `translation.poke_pfe:onyx_haxelConfig.mainMenu.blacklistRemove` });
  dynamicProperty.blacklist.forEach((block) => {
    Ui.button({ translate: `tile.${block.replace(`minecraft:`, ``)}.name` });
  });
  Ui.show(data.source).then(((response) => {
    if (response.canceled) {
      PFEHaxelConfigMenu(data, component, dynamicProperty);
      return;
    }
    ;
    for (let i = dynamicProperty.blacklist.length; i >= -1; i--) {
      if (response.selection == i) {
        dynamicProperty.blacklist.splice(i, 1);
        if (data.itemStack == void 0) return;
        PokeSaveProperty(PFEHaxelInfoProperty, data.itemStack, JSON.stringify(dynamicProperty), data.source, EquipmentSlot7.Mainhand);
      }
    }
  }));
}
function UpdateHaxelFromV1toV2(item, player, dynamicProperty) {
  let newBlacklist = [];
  for (let blacklistedBlock of dynamicProperty.blacklist) {
    let newBlacklistedBlock = blacklistedBlock.replace(blacklistedBlock, blacklistedBlock.toLowerCase());
    newBlacklist.concat([newBlacklistedBlock]);
  }
  let newProperty = {
    "blacklist": newBlacklist,
    "v": PFEHaxelVersion
  };
  PokeSaveProperty(PFEHaxelInfoProperty, item, JSON.stringify(newProperty), player, EquipmentSlot7.Mainhand);
  return newProperty;
}

// scripts/custom_components/item_custom_components.ts
function RegisterItemComponents(data) {
  data.itemComponentRegistry.registerCustomComponent("poke_pfe:upgradeable", new PFEUpgradeableComponent());
  data.itemComponentRegistry.registerCustomComponent("poke_pfe:box_mining", new PFEBoxMiningComponent());
  data.itemComponentRegistry.registerCustomComponent("poke_pfe:quests", new PFEQuestComponent());
  data.itemComponentRegistry.registerCustomComponent("poke_pfe:waypoint_menu", new PFEWaypointComponent());
  data.itemComponentRegistry.registerCustomComponent("poke_pfe:icon_path", {});
  data.itemComponentRegistry.registerCustomComponent("poke_pfe:set_effects", {});
  data.itemComponentRegistry.registerCustomComponent("poke_pfe:custom_upgrades", {});
  data.itemComponentRegistry.registerCustomComponent("poke_pfe:custom_quests_info", {});
  data.itemComponentRegistry.registerCustomComponent("poke_pfe:incompatible_addons", {});
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:timeConfig",
    {
      onUse(data2, componentInfo) {
        PokeTimeConfigUIMainMenu(data2.source);
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    `poke_pfe:identifier`,
    {
      onUseOn(data2, componentInfo) {
        if (data2.source.typeId == MinecraftEntityTypes.Player) {
          const player = data2.source;
          player.sendMessage({ translate: `translation.poke_pfe:identifierMessage`, with: [data2.block.typeId] });
        }
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    `poke_pfe:boltbow`,
    new PFEBoltBowsComponent()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:boss_event",
    {
      onUse(data2, componentInfo) {
        let options = JSON.parse(world10.getDynamicProperty(PFEDisableConfigName).toString());
        if (!options.bounty) return;
        if (PFEStartBossEvent() == 0) {
          data2.source.sendMessage({ translate: `translation.poke_pfe:bossEventNoSpawnError` });
          data2.source.playSound(`note.didgeridoo`, { pitch: 0.825 });
          return;
        }
        ;
        if (data2.source.getGameMode() == GameMode4.Creative) return;
        data2.source.getComponent(EntityComponentTypes8.Equippable)?.setEquipment(EquipmentSlot8.Mainhand, PokeDecrementStack(data2.itemStack));
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:veinMiner",
    {
      onMineBlock(data2, component) {
        if (!data2.minedBlockPermutation.hasTag("minecraft:is_axe_item_destructible")) return;
        let dimension = data2.block.dimension;
        let location = data2.block.location;
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
          { x: location.x - 1, y: location.y - 1, z: location.z }
        ];
        let checked = /* @__PURE__ */ new Set();
        let max = 0;
        while (max < 256 && toBreak.length > 0) {
          location = toBreak.shift();
          let key = `${location.x},${location.y},${location.z}`;
          if (checked.has(key)) {
            continue;
          }
          ;
          checked.add(key);
          let currentBlock = void 0;
          try {
            currentBlock = dimension.getBlock(location);
          } catch (error) {
            continue;
          }
          if (data2.minedBlockPermutation.matches(currentBlock.typeId)) {
            dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} air destroy`);
            max = max + 1;
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
              { x: location.x - 1, y: location.y - 1, z: location.z }
            ];
            for (let loc of adjacent) {
              toBreak.push(loc);
            }
          }
        }
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:normalMining",
    {
      onMineBlock(data2, component) {
        PokeDamageItemUB(data2.itemStack, void 0, data2.source, EquipmentSlot8.Mainhand);
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:shootProjectile",
    {
      onUse(data2, component) {
        if (data2.itemStack == void 0) return;
        if (data2.itemStack.typeId == "poke_pfe:nuke_ring") {
          let options = JSON.parse(world10.getDynamicProperty(PFEDisableConfigName).toString());
          if (!options.nukeRing) return;
        }
        const headLocate = data2.source.getHeadLocation();
        const pTag = data2.itemStack.getTags();
        const angle = data2.source.getViewDirection();
        const projEntity = data2.source.dimension.spawnEntity("" + pTag, headLocate);
        const projComp = projEntity.getComponent(EntityComponentTypes8.Projectile);
        if (!projComp) return;
        data2.source.playSound("random.bow");
        projComp.owner = data2.source;
        projComp.shoot(angle);
        PokeDamageItemUB(data2.itemStack, void 0, data2.source, EquipmentSlot8.Mainhand);
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:hitEffects",
    {
      onHitEntity(data2, component) {
        switch (data2.itemStack?.typeId) {
          case "poke_pfe:demonic_sword": {
            data2.hitEntity.addEffect("slowness", 100, { amplifier: 3 });
            return;
          }
          case "poke_pfe:hellish_sword": {
            data2.hitEntity.addEffect("slowness", 40, { amplifier: 3 });
            return;
          }
          case "poke_pfe:godly_sword": {
            data2.attackingEntity.addEffect("strength", 100, { amplifier: 2 });
            return;
          }
          case "poke_pfe:holy_sword": {
            data2.attackingEntity.addEffect("strength", 40, { amplifier: 1 });
            return;
          }
          case "poke_pfe:astral_sword": {
            data2.attackingEntity.addEffect("strength", 100, { amplifier: 2 });
            return;
          }
          case "poke_pfe:shade_sword": {
            data2.hitEntity.addEffect("slowness", 40, { amplifier: 2 });
            data2.hitEntity.addEffect("wither", 60, { amplifier: 1 });
            return;
          }
          case "poke_pfe:radium_sword": {
            data2.hitEntity.addEffect("slowness", 220, { amplifier: 3 });
            data2.hitEntity.addEffect("wither", 240, { amplifier: 4 });
            return;
          }
          case "poke_pfe:creedite_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 4 });
            data2.hitEntity.addEffect("blindness", 20);
            return;
          }
          case "poke_pfe:demonic_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 });
            data2.hitEntity.addEffect("wither", 80, { amplifier: 1 });
            return;
          }
          case "poke_pfe:golden_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
            data2.attackingEntity.addEffect("haste", 600, { amplifier: 2 });
            return;
          }
          case "poke_pfe:emerald_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
            data2.attackingEntity.addEffect("village_hero", 2400, { amplifier: 1 });
            return;
          }
          case "poke_pfe:iron_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
            return;
          }
          case "poke_pfe:onyx_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 5 });
            data2.attackingEntity.addEffect("jump_boost", 100, { amplifier: 2 });
            data2.hitEntity.addEffect("weakness", 120, { amplifier: 2 });
            return;
          }
          case "poke_pfe:godly_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
            data2.attackingEntity.addEffect("slow_falling", 2400);
            data2.attackingEntity.addEffect("jump_boost", 1200, { amplifier: 3 });
            return;
          }
          case "poke_pfe:hellish_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 });
            data2.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 2400);
            data2.hitEntity.addEffect("mining_fatigue", 400, { amplifier: 1 });
            return;
          }
          case "poke_pfe:holy_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
            data2.attackingEntity.addEffect("slow_falling", 2400, { amplifier: 1 });
            data2.hitEntity.addEffect("darkness", 400);
            return;
          }
          case "poke_pfe:shade_scythe": {
            data2.attackingEntity.addEffect("absorption", 600, { amplifier: 1 });
            data2.attackingEntity.addEffect("strength", 100, { amplifier: 1 });
            data2.hitEntity.addEffect("slowness", 160, { amplifier: 2 });
            return;
          }
          case "poke_pfe:diamond_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 });
            data2.hitEntity.addEffect("weakness", 100, { amplifier: 1 });
            data2.hitEntity.addEffect("blindness", 80);
            return;
          }
          case "poke_pfe:netherite_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 });
            data2.hitEntity.addEffect("hunger", 120, { amplifier: 1 });
            data2.hitEntity.addEffect("slowness", 80, { amplifier: 2 });
            return;
          }
          case "poke_pfe:radium_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 5 });
            data2.hitEntity.addEffect("nausea", 80, { amplifier: 1 });
            data2.hitEntity.addEffect("fatal_poison", 160, { amplifier: 2 });
            return;
          }
          case "poke_pfe:medic_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
            data2.attackingEntity.addEffect("health_boost", 2400, { amplifier: 2 });
            return;
          }
          case "poke_pfe:galaxy_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 9 });
            data2.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300);
            data2.hitEntity.addEffect("wither", 80, { amplifier: 2 });
            data2.hitEntity.addEffect("weakness", 80, { amplifier: 2 });
            return;
          }
          case "poke_pfe:astral_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 120, { amplifier: 9 });
            data2.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300);
            data2.hitEntity.addEffect("wither", 120, { amplifier: 2 });
            data2.hitEntity.addEffect("weakness", 120, { amplifier: 3 });
            return;
          }
          case "poke_pfe:ember_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
            data2.hitEntity.addEffect("nausea", 80, { amplifier: 1 });
            data2.hitEntity.addEffect("blindness", 80);
            return;
          }
          case "poke_pfe:void_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
            data2.hitEntity.addEffect(MinecraftEffectTypes.Wither, 200, { amplifier: 2 });
            data2.hitEntity.addEffect(MinecraftEffectTypes.Darkness, 200, { amplifier: 0 });
            data2.hitEntity.addEffect(MinecraftEffectTypes.Hunger, 300, { amplifier: 3 });
            ;
            return;
          }
          case "poke_pfe:death_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
            data2.hitEntity.addEffect(MinecraftEffectTypes.Wither, 300, { amplifier: 3 });
            data2.hitEntity.addEffect(MinecraftEffectTypes.Darkness, 200, { amplifier: 0 });
            data2.hitEntity.addEffect(MinecraftEffectTypes.Hunger, 300, { amplifier: 4 });
            return;
          }
          case "poke_pfe:nebula_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 9 });
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Saturation, 1e3, { amplifier: 9 });
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Resistance, 100, { amplifier: 3 });
            data2.hitEntity.addEffect("wither", 80, { amplifier: 3 });
            return;
          }
          case "poke_pfe:cobalt_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
            data2.hitEntity.addEffect("wither", 40, { amplifier: 1 });
            return;
          }
          case "poke_pfe:nebula_sword": {
            data2.attackingEntity.addEffect("strength", 40, { amplifier: 4 });
            data2.hitEntity.addEffect("weakness", 20, { amplifier: 2 });
            return;
          }
          case "poke_pfe:ban_hammer": {
            data2.attackingEntity.addEffect("strength", 40, { amplifier: 1 });
            return;
          }
          case "poke_pfe:circuit_sword": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 20, { amplifier: 0 });
            data2.attackingEntity.runCommand("execute as @e[rm=0.1,r=7,type=!lightning_bolt] at @s run summon lightning_bolt ~~~");
            data2.hitEntity.addEffect("blindness", 100);
            return;
          }
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:consumeEffects",
    {
      onConsume(data2, component) {
        switch (data2.itemStack.typeId) {
          case "poke_pfe:xp_vial":
            {
              data2.source.runCommand("xp 160 @s");
              return;
            }
            ;
          case "poke_pfe:cobalt_potion": {
            data2.source.addEffect(MinecraftEffectTypes.NightVision, 3600);
            data2.source.addEffect(MinecraftEffectTypes.Regeneration, 2400);
          }
          case "poke_pfe:cobalt_soup":
            {
              data2.source.addEffect(MinecraftEffectTypes.NightVision, 2400, { showParticles: false });
              return;
            }
            ;
          case "poke_pfe:root_beer":
            {
              data2.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4 });
              return;
            }
            ;
          case "poke_pfe:pumpkin_spice":
            {
              data2.source.addEffect(MinecraftEffectTypes.Invisibility, 600);
              data2.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4 });
              return;
            }
            ;
          case "poke_pfe:crimson_sporeshroom_stew":
            {
              data2.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
              return;
            }
            ;
          case "poke_pfe:warped_sporeshroom_stew":
            {
              data2.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
              return;
            }
            ;
          case "poke_pfe:hellish_soup":
            {
              data2.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
              return;
            }
            ;
          case "poke_pfe:nebula_noodles":
            {
              data2.source.addEffect(MinecraftEffectTypes.Strength, 600, { amplifier: 7 });
              return;
            }
            ;
          case "poke_pfe:milk_bottle":
            {
              data2.source.runCommand("effect @s clear");
              return;
            }
            ;
          case "poke_pfe:demonic_potion":
            {
              data2.source.addEffect(MinecraftEffectTypes.NightVision, 12e3);
              data2.source.addEffect(MinecraftEffectTypes.Strength, 6e3, { amplifier: 2 });
              data2.source.addEffect(MinecraftEffectTypes.Regeneration, 12e3, { amplifier: 1 });
              data2.source.addEffect(MinecraftEffectTypes.FireResistance, 12e3);
              return;
            }
            ;
          case "poke_pfe:hellish_potion":
            {
              data2.source.addEffect(MinecraftEffectTypes.NightVision, 12e3);
              data2.source.addEffect(MinecraftEffectTypes.Regeneration, 12e3);
              data2.source.addEffect(MinecraftEffectTypes.FireResistance, 12e3);
              return;
            }
            ;
          case "poke_pfe:nebula_potion":
            {
              data2.source.addEffect(MinecraftEffectTypes.NightVision, 36e3);
              data2.source.addEffect(MinecraftEffectTypes.Haste, 24e3, { amplifier: 4 });
              data2.source.addEffect(MinecraftEffectTypes.Regeneration, 24e3, { amplifier: 2 });
              data2.source.addEffect(MinecraftEffectTypes.Speed, 24e3, { amplifier: 4 });
              data2.source.addEffect(MinecraftEffectTypes.VillageHero, 24e3, { amplifier: 2 });
              return;
            }
            ;
          case "poke_pfe:void_potion":
            {
              data2.source.addEffect(MinecraftEffectTypes.NightVision, 36e3);
              data2.source.addEffect(MinecraftEffectTypes.Haste, 12e3, { amplifier: 2 });
              data2.source.addEffect(MinecraftEffectTypes.Regeneration, 12e3, { amplifier: 1 });
              data2.source.addEffect(MinecraftEffectTypes.Speed, 24e3, { amplifier: 4 });
              return;
            }
            ;
          case "poke_pfe:death_potion":
            {
              data2.source.kill();
              return;
            }
            ;
          case "poke_pfe:rotten_chicken":
            {
              data2.source.addEffect(MinecraftEffectTypes.Nausea, 400);
              return;
            }
            ;
          case "poke_pfe:golden_chicken":
            {
              data2.source.addEffect(MinecraftEffectTypes.VillageHero, 400, { amplifier: 1 });
              return;
            }
            ;
          case "poke_pfe:banished_star_x10":
            {
              data2.source.runCommand("damage @a[r=100] 32767000 entity_attack entity @s");
              return;
            }
            ;
          case "poke_pfe:banished_star_x9":
            {
              data2.source.runCommand("damage @s 32767000 entity_attack");
              return;
            }
            ;
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:config",
    {
      onUse(data2, componentInfo) {
        OpenPFEConfig(data2.source);
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:cc_dodge",
    {
      onUse(data2, componentInfo) {
        if (data2.itemStack === void 0) return;
        const cooldownComponent = data2.itemStack.getComponent(ItemComponentTypes4.Cooldown);
        const equippableComponent = data2.source.getComponent(EntityComponentTypes8.Equippable);
        const moveDir = data2.source.getVelocity();
        var amount = data2.itemStack.amount;
        data2.source.spawnParticle("minecraft:wind_explosion_emitter", data2.source.location);
        data2.source.applyKnockback({ x: moveDir.x * 5, z: moveDir.z * 5 }, moveDir.y + 0.5);
        data2.source.playSound("component.jump_to_block");
        if (data2.source.getGameMode() == GameMode4.Creative) return;
        cooldownComponent?.startCooldown(data2.source);
        if (amount <= 1) {
          equippableComponent?.setEquipment(EquipmentSlot8.Mainhand, void 0);
          return;
        }
        equippableComponent?.setEquipment(EquipmentSlot8.Mainhand, new ItemStack8(data2.itemStack.typeId, amount - 1));
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:cc_bowAim",
    {
      onUse(data2, component) {
        const cPlayers = data2.source.dimension.getPlayers({ excludeNames: ["" + data2.source.name] });
        var cPlayersLength = cPlayers.length;
        for (var i = cPlayersLength; i > 0; i--) {
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:cc_crossbowAim",
    {
      onUse(data2, component) {
        const cPlayers = data2.source.dimension.getPlayers({ excludeNames: ["" + data2.source.name] });
        var cPlayersLength = cPlayers.length;
        data2.source.playAnimation("animation.player.first_person.crossbow_equipped", { stopExpression: "!q.is_using_item", players: [data2.source] });
        for (var i = cPlayersLength; i > 0; i--) {
          data2.source.playAnimation("third_person_crossbow_equipped", { stopExpression: "!q.is_using_item", players: [cPlayers[i - 1]] });
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:teleport",
    {
      onUse(data2, componentInfo) {
        if (!data2.itemStack) return;
        const component = componentInfo.params;
        const location = component.location == "location_when_used" ? data2.source.location : void 0;
        const dimension = component.dimension ? world10.getDimension(component.dimension) : data2.source.dimension;
        component.dimension;
        if (component.delay) {
          system8.runTimeout(() => {
            data2.source.teleport(location ?? data2.source.location, { dimension });
            if (component.sound) {
              dimension.playSound(component.sound.identifier, data2.source.location, { pitch: component.sound.pitch, volume: component.sound.volume });
            }
          }, component.delay);
          const cooldownComponent = data2.itemStack.getComponent(ItemComponentTypes4.Cooldown);
          if (cooldownComponent?.cooldownCategory) {
            data2.source.startItemCooldown(cooldownComponent.cooldownCategory, component.delay + 5);
          }
        } else {
          data2.source.teleport(location ?? data2.source.location, { dimension });
        }
        if (data2.source.getGameMode() != GameMode4.Creative) {
          if (component.decrement_stack) {
            data2.source.getComponent(EntityComponentTypes8.Equippable)?.setEquipment(EquipmentSlot8.Mainhand, PokeDecrementStack(data2.itemStack));
            return;
          }
          if (component.take_durability) {
            PokeDamageItemUB(data2.itemStack, 1, data2.source, EquipmentSlot8.Mainhand, false);
            return;
          }
        }
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:transform_blocks",
    {
      onUseOn(data2, componentInfo) {
        const component = componentInfo.params;
        for (const blocks of component.transforms) {
          let toBlock = blocks.substring(blocks.indexOf("::") + 2);
          const fromBlock = blocks.substring(0, blocks.indexOf("::"));
          if (data2.block.typeId != fromBlock) continue;
          if (toBlock.includes("{")) {
            const permutationString = toBlock.substring(toBlock.indexOf("{"));
            toBlock = toBlock.substring(0, toBlock.indexOf("{"));
            const permutations = JSON.parse(permutationString);
            data2.block.setPermutation(BlockPermutation.resolve(toBlock, permutations));
          } else data2.block.setType(toBlock);
          PokeDamageItemUB(data2.itemStack, 1, data2.source, EquipmentSlot8.Mainhand);
          break;
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:spawn_entity",
    {
      onUseOn(data2, componentInfo) {
        const component = componentInfo.params;
        if (data2.itemStack.typeId == "poke_pfe:wither_spawner") {
          let options = JSON.parse(world10.getDynamicProperty(PFEDisableConfigName).toString());
          if (!options.witherSpawner) return;
        }
        const player = data2.source;
        if (player.typeId != MinecraftEntityTypes.Player) return;
        let spawnLocation = data2.block.center();
        switch (data2.blockFace) {
          case Direction2.North: {
            spawnLocation = data2.block.north()?.center() ?? { x: spawnLocation.x, y: spawnLocation.y, z: spawnLocation.z - 1 };
            break;
          }
          case Direction2.South: {
            spawnLocation = data2.block.south()?.center() ?? { x: spawnLocation.x, y: spawnLocation.y, z: spawnLocation.z + 1 };
            break;
          }
          case Direction2.East: {
            spawnLocation = data2.block.east()?.center() ?? { x: spawnLocation.x + 1, y: spawnLocation.y, z: spawnLocation.z };
            break;
          }
          case Direction2.West: {
            spawnLocation = data2.block.west()?.center() ?? { x: spawnLocation.x - 1, y: spawnLocation.y, z: spawnLocation.z };
            break;
          }
          case Direction2.Up: {
            spawnLocation = data2.block.above()?.center() ?? { x: spawnLocation.x, y: spawnLocation.y + 1, z: spawnLocation.z };
            break;
          }
          case Direction2.Down: {
            spawnLocation = data2.block.below()?.center() ?? { x: spawnLocation.x, y: spawnLocation.y - 1, z: spawnLocation.z };
            break;
          }
        }
        const equippableComponent = data2.source.getComponent(EntityComponentTypes8.Equippable);
        player.dimension.spawnEntity(component.entity, spawnLocation);
        if (player.getGameMode() == GameMode4.Creative) return;
        if (data2.itemStack.amount <= 1) {
          equippableComponent?.setEquipment(EquipmentSlot8.Mainhand, void 0);
          return;
        }
        equippableComponent?.setEquipment(EquipmentSlot8.Mainhand, new ItemStack8(data2.itemStack.typeId, data2.itemStack.amount - 1));
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:launch_user",
    {
      onUse(data2, componentInfo) {
        if (data2.itemStack === void 0) return;
        const component = componentInfo.params;
        if (component.sneaking_stops_this && data2.source.isSneaking) return;
        const vierDirection = data2.source.getViewDirection();
        const location = data2.source.getHeadLocation();
        const cooldownComp = data2.itemStack.getComponent(ItemComponentTypes4.Cooldown);
        if (component.grant_effect) {
          data2.source.addEffect(component.grant_effect?.effect, component.grant_effect?.duration ?? 60, { amplifier: component.grant_effect?.amp ?? 0, showParticles: component.grant_effect.particles ?? false });
        }
        data2.source.applyKnockback({ x: vierDirection.x * (component.horizontal_strength ?? 1), z: vierDirection.z * (component.horizontal_strength ?? 1) }, vierDirection.y * (component.vertical_strength ?? 1));
        if (component.spawn_particles) {
          for (let particle of component.spawn_particles) {
            if (!particle) continue;
            data2.source.spawnParticle(particle, location);
          }
        }
        if (component.play_sound) {
          data2.source.playSound(component.play_sound.identifier, { pitch: component.play_sound.pitch });
        }
        if (component.trigger_cooldown) {
          cooldownComp?.startCooldown(data2.source);
        }
        if (component.take_durability) {
          PokeDamageItemUB(data2.itemStack, void 0, data2.source, EquipmentSlot8.Mainhand);
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:run_command",
    {
      onUse(data2, component) {
        if (!data2.itemStack) return;
        const componentInfo = component.params;
        if (!(componentInfo.mode == void 0 || componentInfo.mode.includes("on_use"))) return;
        if (componentInfo.can_be_disabled) {
          let options = JSON.parse(world10.getDynamicProperty(PFEDisableConfigName).toString()) ?? PFEDisableConfigDefault;
          switch (true) {
            case (data2.itemStack.typeId == "poke_pfe:player_magnet" && options.playerMagnet === false || data2.itemStack.typeId == "poke_pfe:quantum_teleporter" && options.quantumTeleporter === false || data2.itemStack.typeId == "poke_pfe:sundial" && options.sundial === false || data2.itemStack.typeId == "poke_pfe:kapow_ring" && options.kapowRing === false): {
              data2.source.sendMessage({ translate: `\xA7f[\xA7e!\xA7f] \xA7c%translation.poke_pfe.feature_disabled\xA7r` });
              return;
            }
          }
        }
        if (typeof componentInfo.command == "string") data2.source.runCommand(componentInfo.command);
        else if (componentInfo.command)
          for (const command of componentInfo.command) {
            data2.source.runCommand(command);
          }
        if (componentInfo.trigger_cooldown) data2.itemStack.getComponent(ItemComponentTypes4.Cooldown)?.startCooldown(data2.source);
        if (componentInfo.take_durability !== false) PokeDamageItemUB(data2.itemStack, void 0, data2.source, EquipmentSlot8.Mainhand);
        return;
      },
      onUseOn(data2, component) {
        if (!data2.itemStack) return;
        const componentInfo = component.params;
        if (!componentInfo.mode?.includes("on_use_on")) return;
        const player = data2.source;
        if (player.typeId != MinecraftEntityTypes.Player) return;
        if (typeof componentInfo.command == "string") data2.block.dimension.runCommand(`execute positioned ${data2.block.x} ${data2.block.y} ${data2.block.z} run ${componentInfo.command}`);
        else if (componentInfo.command)
          for (const command of componentInfo.command) {
            data2.source.runCommand(`execute positioned ${data2.block.x} ${data2.block.y} ${data2.block.z} run ${command}`);
          }
        if (componentInfo.trigger_cooldown) data2.itemStack.getComponent(ItemComponentTypes4.Cooldown)?.startCooldown(player);
        if (componentInfo.take_durability !== false) PokeDamageItemUB(data2.itemStack, void 0, player, EquipmentSlot8.Mainhand);
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:play_music",
    {
      onUse(data2, component) {
        const componentInfo = component.params;
        data2.source.playSound(componentInfo.trigger_sound ?? "poke_pfe.cassette_activate");
        if (componentInfo.can_queue != false && data2.source.isSneaking) {
          data2.source.queueMusic(componentInfo.music, { volume: componentInfo.music_volume ?? void 0, loop: componentInfo.loop_music ?? void 0 });
          if (componentInfo.display_queue_message != false) {
            data2.source.sendMessage({ translate: componentInfo.queue_message ?? "%poke_pfe.track_queued" });
          }
          return;
        }
        data2.source.playMusic(componentInfo.music, { fade: componentInfo.music_fade_amount ?? 2.5, volume: componentInfo.music_volume ?? void 0, loop: componentInfo.loop_music ?? void 0 });
      }
    }
  );
}

// scripts/custom_components/block_custom_components.ts
import { BlockComponentTypes, BlockPermutation as BlockPermutation3, BlockVolume as BlockVolume2, Direction as Direction3, EntityComponentTypes as EntityComponentTypes10, EquipmentSlot as EquipmentSlot9, GameMode as GameMode5, ItemComponentTypes as ItemComponentTypes6, ItemStack as ItemStack10, LiquidType } from "@minecraft/server";

// scripts/recipeSystems.ts
import { BlockPermutation as BlockPermutation2, BlockTypes, ItemComponentTypes as ItemComponentTypes5, ItemStack as ItemStack9 } from "@minecraft/server";
import { ActionFormData as ActionFormData10, ModalFormData as ModalFormData7 } from "@minecraft/server-ui";
var RecipeBlockComponent = class {
  onPlayerInteract(data, componentInfo) {
    const component = componentInfo.params;
    if (!component.id) {
      console.warn(`${data.block.typeId} Does not have an ID defined but needs to || poke_pfe:recipe_block Component`);
      return;
    }
    if (!data.player) return;
    PFERecipeBlockMainMenu(component, data.player, data.block);
  }
};
function PFERecipeBlockMainMenu(component, player, block) {
  const UI = new ActionFormData10();
  const StoredItemsDynamicPropID = `${component.id}:storedItems`;
  const storedItemsProp = player.getDynamicProperty(StoredItemsDynamicPropID);
  const storedItems = JSON.parse(storedItemsProp ?? "[]") ?? [];
  const customRecipeComponent = block.getComponent("poke_pfe:custom_recipes")?.customComponentParameters.params;
  UI.title({ translate: component.name });
  if (component.can_store_items) {
    UI.button({ translate: `%poke_pfe.storedItems
[${storedItems.length}/${component.storage_capacity_limit}]` }, `textures/poke/common/chest_open`);
  }
  if (component.can_show_item_upgrades) {
    UI.button({ translate: `%poke_pfe.upgrade` }, `textures/poke/common/upgrade`);
  }
  if (customRecipeComponent) {
    UI.button({ translate: `%poke_pfe.recipes
[${customRecipeComponent.length}]` }, `textures/poke/common/upgrade`);
  }
  if (component.debug_mode) {
    UI.button("Debug", "textures/poke/common/debug");
  }
  UI.button({ translate: `translation.poke_pfe:bossEventClose` }, `textures/poke/common/close`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (component.can_store_items) {
      if (response.selection == selection) {
        ViewStoredItems(component, player, storedItems, block);
        return;
      } else selection++;
    }
    if (component.can_show_item_upgrades) {
      if (response.selection == selection) {
        ViewUpgradeableItems(component, player, block);
        return;
      } else selection++;
    }
    if (customRecipeComponent) {
      if (response.selection == selection) {
        ViewAllRecipes(component, player, customRecipeComponent, block, storedItems);
        return;
      } else selection++;
    }
    if (component.debug_mode) {
      if (response.selection == selection) {
        Debug(component, player, block, storedItems);
        return;
      } else selection++;
    }
    if (response.canceled || response.selection == selection) return;
  });
}
function ViewUpgradeableItems(component, player, block) {
  const UI = new ActionFormData10();
  UI.title({ translate: component.name });
  let validItems = [];
  for (const item of PokeGetItemFromInventory(player, void 0, void 0, true) ?? []) {
    const upgradeableComponent = item.item.getComponent(PFEUpgradeableId)?.customComponentParameters.params;
    if (!upgradeableComponent) continue;
    UI.button({ translate: item.item.localizationKey }, getTexturePathByIdentifier(item.item.typeId ?? "undefined"));
    validItems.push(item);
  }
  if (validItems.length == 0) {
    UI.label({ translate: "%poke_pfe.noUpgradeableItems" });
  }
  UI.button({ translate: `translation.poke_pfe.GoBack` }, "textures/poke/common/left_arrow");
  UI.show(player).then((response) => {
    let selection = 0;
    for (const item of validItems) {
      if (response.selection == selection) {
        const ItemStack12 = item.item;
        if (!ItemStack12) {
          PFERecipeBlockMainMenu(component, player, block);
          return;
        }
        ;
        const upgradeableComponent = ItemStack12.getComponent(PFEUpgradeableId)?.customComponentParameters.params;
        PokeUpgradeUI(player, ItemStack12, ParsePFEUpgradeComponent(ItemStack12, player, upgradeableComponent), true, upgradeableComponent, item.number);
        return;
      } else selection++;
    }
    if (response.canceled || response.selection == selection) {
      PFERecipeBlockMainMenu(component, player, block);
      return;
    }
  });
}
function Debug(component, player, block, storedItems) {
  const UI = new ActionFormData10();
  UI.title({ translate: component.name });
  UI.button("Reset Stored Items", "textures/poke/common/redo");
  UI.button({ translate: `translation.poke_pfe.GoBack` }, "textures/poke/common/left_arrow");
  UI.show(player).then((response) => {
    let selection = 0;
    if (response.selection == selection) {
      player.setDynamicProperty(`${component.id}:storedItems`, void 0);
      PFERecipeBlockMainMenu(component, player, block);
      return;
    } else selection++;
    if (response.canceled || response.selection == selection) {
      PFERecipeBlockMainMenu(component, player, block);
      return;
    }
  });
}
function ViewAllRecipes(component, player, recipes, block, storedItems) {
  const UI = new ActionFormData10();
  UI.title({ translate: component.name });
  for (const recipe of recipes) {
    const Result = ParseRecipeItems(recipe.result);
    UI.button({ translate: `${MakeLocalizationKey(Result.at(0)?.item ?? "undefined")}` }, getTexturePathByIdentifier(Result.at(0)?.item ?? "undefined"));
  }
  UI.button({ translate: `translation.poke_pfe.GoBack` }, "textures/poke/common/left_arrow");
  UI.show(player).then((response) => {
    let selection = 0;
    for (const recipe of recipes) {
      if (response.selection == selection) {
        ViewRecipeInfo(component, player, recipes, block, recipe, storedItems);
        return;
      } else selection++;
    }
    if (response.canceled || response.selection == selection) {
      PFERecipeBlockMainMenu(component, player, block);
      return;
    }
  });
}
function ViewRecipeInfo(component, player, recipes, block, recipe, storedItems) {
  const UI = new ActionFormData10();
  UI.title({ translate: component.name });
  UI.label({ translate: `\xA77%poke_pfe.crafting:` });
  for (const result of ParseRecipeItems(recipe.result)) {
    UI.label({ translate: `\xA77- ${result.amount}x %${MakeLocalizationKey(result.item)} (\xA79${MakeAddonID(result.item)}\xA7r)` });
  }
  UI.divider();
  UI.header({ translate: `%poke_pfe.required_items:` });
  let canCraft = 0;
  const requiredItems = ParseRecipeItems(recipe.items);
  let amountInfo = [];
  for (let item of requiredItems) {
    let itemTotal = 0;
    let thisAmountInfo = {
      id: item.item,
      fromInventory: 0,
      fromStored: 0
    };
    for (const storedItem of storedItems) {
      if (storedItem.i == item.item) {
        itemTotal += storedItem.a;
        thisAmountInfo.fromStored = clampNumber(storedItem.a, thisAmountInfo.fromStored, item.amount);
        break;
      }
    }
    if (item.amount > itemTotal) {
      const inventoryItems = PokeGetItemFromInventory(player, void 0, item.item);
      if (inventoryItems) {
        for (const inventoryItem of inventoryItems) {
          itemTotal += inventoryItem.amount;
          thisAmountInfo.fromInventory = clampNumber(inventoryItem.amount, thisAmountInfo.fromInventory, Math.max(0, item.amount - thisAmountInfo.fromStored - thisAmountInfo.fromInventory));
        }
      }
    }
    if (item.amount <= itemTotal) canCraft++;
    const color = item.amount <= itemTotal ? "a" : "c";
    UI.label({ translate: `${typeof recipe.keep_item_data_from === "number" && requiredItems.at(recipe.keep_item_data_from)?.item == item.item ? "\xA7e-\xA7r" : "-"} [\xA7${color}${itemTotal}\xA7r/\xA7${color}${item.amount}\xA7r] (\xA79${MakeAddonID(item.item)}\xA7r) %${MakeLocalizationKey(item.item)}` });
    amountInfo.push(thisAmountInfo);
  }
  if (canCraft == recipe.items.length) {
    UI.button({ translate: `%poke_pfe.craft` }, "textures/poke/common/upgrade");
  }
  UI.divider();
  UI.button({ translate: `translation.poke_pfe.GoBack` }, "textures/poke/common/left_arrow");
  UI.show(player).then((response) => {
    let selection = 0;
    if (canCraft == recipe.items.length) {
      if (response.selection == selection) {
        let currentStoredItems = storedItems;
        for (const result of ParseRecipeItems(recipe.result)) {
          const maxAmount = new ItemStack9(result.item, 1).maxAmount;
          for (let i = result.amount; i > -1; i = i - maxAmount) {
            if (i <= 0) {
              break;
            }
            if (recipe.recipe_type !== "transform") {
              pokeAddItemsToPlayerOrDrop(player, new ItemStack9(result.item, clampNumber(i, 0, maxAmount)));
            } else {
              let resultedItem = new ItemStack9(result.item, clampNumber(i, 0, maxAmount));
              if (typeof recipe.keep_item_data_from === "number") {
                let dataSendingItem = PokeGetItemFromInventory(player, void 0, requiredItems.at(recipe.keep_item_data_from)?.item)?.at(0);
                if (dataSendingItem) {
                  const enchants = dataSendingItem.getComponent(ItemComponentTypes5.Enchantable)?.getEnchantments();
                  if (enchants && resultedItem.hasComponent(ItemComponentTypes5.Enchantable)) {
                    resultedItem.getComponent(ItemComponentTypes5.Enchantable)?.addEnchantments(enchants);
                  }
                  const durability = dataSendingItem.getComponent(ItemComponentTypes5.Durability)?.damage;
                  if (durability && resultedItem.hasComponent(ItemComponentTypes5.Durability)) {
                    resultedItem.getComponent(ItemComponentTypes5.Durability).damage = durability;
                  }
                  let dynamicProperties = {};
                  for (const dynamicProperty of dataSendingItem.getDynamicPropertyIds()) {
                    const value = dataSendingItem.getDynamicProperty(dynamicProperty);
                    if (!value) continue;
                    dynamicProperties.dynamicProperty = value;
                  }
                  resultedItem.setDynamicProperties(dynamicProperties);
                } else console.warn(`Failed to find item to transfer data from. Looked for ${JSON.stringify(dataSendingItem)} || PFE - RecipeBlockComponent - TransformRecipeType`);
              }
              pokeAddItemsToPlayerOrDrop(player, resultedItem);
            }
          }
        }
        for (const amount of amountInfo) {
          if (amount.fromInventory) {
            player.runCommand(`clear @s ${amount.id.replace("minecraft:", "")} -1 ${amount.fromInventory}`);
          }
          if (amount.fromStored) {
            let newStored = [];
            for (const storedItem of currentStoredItems) {
              newStored.push(
                storedItem.i == amount.id ? { i: storedItem.i, a: storedItem.a - amount.fromStored } : storedItem
              );
            }
            player.setDynamicProperty(`${component.id}:storedItems`, JSON.stringify(newStored));
            currentStoredItems = newStored;
          }
        }
        ViewRecipeInfo(component, player, recipes, block, recipe, currentStoredItems);
        return;
      } else selection++;
    }
    if (response.canceled || response.selection == selection) {
      ViewAllRecipes(component, player, recipes, block, storedItems);
      return;
    }
  });
}
function ViewStoredItems(component, player, storedItems, block) {
  const UI = new ActionFormData10();
  UI.title({ translate: component.name });
  if (storedItems.length < 64) {
    UI.button({ translate: `%poke_pfe.depositItem` }, `textures/poke/common/deposit`);
  }
  for (const item of storedItems) {
    const itemStack = new ItemStack9(item.i);
    const translationString = (
      /*itemStack?.localizationKey ??*/
      `${item.a}x (\xA79${MakeAddonID(item.i)}\xA7r)
%${MakeLocalizationKey(item.i)}`
    );
    UI.button({ translate: `${translationString}` }, getTexturePathByIdentifier(item.i));
  }
  UI.button({ translate: `translation.poke_pfe.GoBack` }, "textures/poke/common/left_arrow");
  UI.show(player).then((response) => {
    let selection = 0;
    if (storedItems.length < 64) {
      if (response.selection == selection) {
        AddItem(component, player, storedItems, block);
        return;
      } else selection++;
    }
    for (const item of storedItems) {
      if (response.selection == selection) {
        ViewItem(component, player, item, storedItems, block);
        return;
      } else selection++;
    }
    if (response.selection == selection) {
      PFERecipeBlockMainMenu(component, player, block);
      return;
    }
  });
}
function AddItem(component, player, storedItems, block) {
  const UI = new ActionFormData10();
  UI.title({ translate: component.name });
  UI.label({ translate: `%poke_pfe.deposit.warning` });
  const allItems = PokeGetItemFromInventory(player) ?? [];
  for (const item of allItems) {
    UI.button({ translate: item.localizationKey }, getTexturePathByIdentifier(item));
  }
  UI.button({ translate: `translation.poke_pfe.GoBack` }, "textures/poke/common/left_arrow");
  UI.show(player).then((response) => {
    let selection = 0;
    for (const item of allItems) {
      if (response.selection == selection) {
        player.runCommand(`clear @s ${item.typeId} -1 ${item.amount}`);
        const storedItemsDynamicPropID = `${component.id}:storedItems`;
        const storedItemsProp = player.getDynamicProperty(storedItemsDynamicPropID);
        const storedItems2 = JSON.parse(storedItemsProp ?? "[]") ?? [];
        const existingItem = storedItems2.filter((info) => info.i == item.typeId);
        let oldItems = storedItems2.filter((info) => info.i != item.typeId);
        let newItem = existingItem.length > 0 ? {
          i: item.typeId,
          a: item.amount + (existingItem.at(0)?.a ?? 0)
        } : {
          i: item.typeId,
          a: item.amount
        };
        player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(oldItems.concat(newItem)));
        ViewStoredItems(component, player, oldItems.concat(newItem), block);
        return;
      } else selection++;
    }
    if (response.selection == selection) {
      ViewStoredItems(component, player, storedItems, block);
      return;
    }
  });
}
function ViewItem(component, player, item, storedItems, block) {
  const UI = new ActionFormData10();
  UI.title({ translate: component.name });
  const ItemsInInventory = PokeGetItemFromInventory(player, void 0, item.i);
  let CanDepositAmount = 0;
  if (ItemsInInventory) {
    for (const itemStack of ItemsInInventory) {
      CanDepositAmount += itemStack.amount;
    }
    UI.button({ translate: `%poke_pfe.deposit` }, "textures/poke/common/deposit");
  }
  UI.button({ translate: `%poke_pfe.withdraw` }, "textures/poke/common/withdraw");
  UI.button({ translate: `translation.poke_pfe.GoBack` }, "textures/poke/common/left_arrow");
  UI.show(player).then((response) => {
    let selection = 0;
    if (ItemsInInventory) {
      if (response.selection == selection) {
        DepositItem(component, player, item, CanDepositAmount, storedItems, block);
        return;
      } else selection++;
    }
    if (response.selection == selection) {
      WithdrawItem(component, player, item, storedItems, block);
      return;
    } else selection++;
    if (response.canceled || response.selection == selection) {
      ViewStoredItems(component, player, storedItems, block);
      return;
    }
  });
}
function DepositItem(component, player, item, maxAmount, storedItems, block) {
  const UI = new ModalFormData7();
  UI.title({ translate: component.name });
  UI.label({ translate: `%poke_pfe.deposit.warning` });
  UI.slider({ translate: `%poke_pfe.amount` }, 0, maxAmount, { defaultValue: 0 });
  UI.show(player).then((response) => {
    const slider = response.formValues?.at(0);
    if (typeof slider == "number" && slider > 0) {
      player.runCommand(`clear @s ${item.i} -1 ${slider}`);
      const storedItemsDynamicPropID = `${component.id}:storedItems`;
      const storedItemsProp = player.getDynamicProperty(storedItemsDynamicPropID);
      const storedItems2 = JSON.parse(storedItemsProp ?? "[]") ?? [];
      const newItem = {
        i: item.i,
        a: item.a + slider
      };
      let oldItems = storedItems2.filter((info) => info.i != item.i);
      player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(oldItems.concat(newItem)));
      ViewStoredItems(component, player, oldItems.concat(newItem), block);
      return;
    }
    if (response.canceled) {
      ViewItem(component, player, item, storedItems, block);
      return;
    }
  });
}
function WithdrawItem(component, player, item, storedItems, block) {
  const UI = new ModalFormData7();
  UI.title({ translate: component.name });
  UI.slider({ translate: `%poke_pfe.amount` }, 0, item.a, { defaultValue: 0, tooltip: { translate: `%poke_pfe.withdraw.tooltip` } });
  UI.show(player).then((response) => {
    const slider = response.formValues?.at(0);
    if (typeof slider == "number" && slider > 0) {
      const storedItemsDynamicPropID = `${component.id}:storedItems`;
      const storedItemsProp = player.getDynamicProperty(storedItemsDynamicPropID);
      const storedItems2 = JSON.parse(storedItemsProp ?? "[]") ?? [];
      const newItem = {
        i: item.i,
        a: item.a - slider
      };
      let oldItems = storedItems2.filter((info) => info.i != item.i);
      const itemStack = new ItemStack9(item.i);
      const max = itemStack.maxAmount;
      if (slider == 1) {
        player.dimension.spawnItem(new ItemStack9(item.i), player.location);
      } else for (let i = slider; i > -1; i = i - max) {
        if (i <= 0) {
          break;
        }
        pokeAddItemsToPlayerOrDrop(player, new ItemStack9(item.i, clampNumber(i, 0, max)));
      }
      player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(newItem.a <= 0 ? oldItems : oldItems.concat(newItem)));
      ViewStoredItems(component, player, newItem.a <= 0 ? oldItems : oldItems.concat(newItem), block);
      return;
    }
    if (response.canceled) {
      ViewItem(component, player, item, storedItems, block);
      return;
    }
  });
}
function getTexturePathByIdentifier(item) {
  if (typeof item == "string") {
    item = new ItemStack9(item, 1);
  }
  const IconPathComponent = item.getComponent("poke_pfe:icon_path")?.customComponentParameters.params;
  if (IconPathComponent) return IconPathComponent;
  return "textures/poke/common/question";
}
function ParseRecipeItems(strings) {
  let returnValue = [];
  for (const string of strings) {
    const newValue = {
      item: string.substring(string.indexOf(":") + 1),
      amount: Number(string.substring(0, string.indexOf(":")))
    };
    returnValue.push(newValue);
  }
  return returnValue;
}
function MakeLocalizationKey(string) {
  const prefix = string.includes("poke_pfe:pfe-") ? "item.poke_pfe:" : string.includes("poke_pfe:") || string.includes("poke_pfe:") ? "poke_pfe." : string.includes("_spawn_egg") ? "item.spawn_egg.entity:" : BlockTypes.get(string) ? "tile." : "item.";
  const identifier = string.includes("poke_pfe:") || string.includes("poke_pfe:") || string.includes("minecraft:") ? string.replace("poke_pfe:", "").replace("poke_pfe:", "").replace("minecraft:", "") : string.includes("_spawn_egg") ? string.replace("_spawn_egg", "") : string;
  const suffix = string.includes("minecraft:") || string.includes("poke_pfe:pfe-") ? ".name" : "";
  return `${prefix}${identifier}${suffix}`;
}
function MakeAddonID(string) {
  const char = string.at(0) ?? "";
  const id = string.includes("poke_pfe:") ? "PFE" : string.includes("poke_pfe:") ? "PFE" : string.substring(0, string.indexOf(":")).replace(char, char.toUpperCase());
  return id;
}

// scripts/custom_components/block_custom_components.ts
function RegisterBlockComponents(data) {
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:cycle_color",
    {
      onPlayerInteract(data2, component) {
        const block_location = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
        const ColorState = `pfe:color`;
        let light_color = data2.block.permutation.getState(ColorState);
        let sound_pitch = 1 + light_color / 10;
        if (data2.block.permutation.getState(ColorState) == 15) {
          data2.block.setPermutation(data2.block.permutation.withState(ColorState, 0));
          data2.block.dimension.runCommand(`playsound block.copper_bulb.turn_on @a  ${block_location} 1 ${sound_pitch}`);
          ComputersCompat.addStat(`bulb_color_changes`, 1);
          return;
        } else {
          data2.block.setPermutation(
            data2.block.permutation.withState(ColorState, light_color + 1)
          );
          data2.block.dimension.runCommand(`playsound block.copper_bulb.turn_on @a ${block_location} 1 ${sound_pitch}`);
          ComputersCompat.addStat(`bulb_color_changes`, 1);
          return;
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:slab_loot",
    {
      onPlayerBreak(data2, component) {
        const block_location = data2.block.location;
        const gm = data2.player?.getGameMode();
        const blockId = data2.brokenBlockPermutation.type.id;
        const DoubleState = "poke_pfe:double";
        const blockState = data2.brokenBlockPermutation.getState(DoubleState);
        if (gm == GameMode5.Survival) {
          if (blockState == true) {
            data2.dimension.spawnItem(new ItemStack10(blockId, 1), block_location);
            return;
          }
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:trapdoor_event",
    {
      onPlayerInteract(data2, component) {
        const blockLocation = `${data2.block.location.x} ${data2.block.location.y} ${data2.block.location.z}`;
        const OpenState = "poke_pfe:trapdoor_open";
        if (data2.block.permutation.hasTag("pfe_trapdoor_open") == true) {
          data2.block.setPermutation(data2.block.permutation.withState(OpenState, "no"));
          data2.block.dimension.playSound(`open.iron_trapdoor`, data2.block.center());
          return;
        } else {
          data2.block.setPermutation(data2.block.permutation.withState(OpenState, "yes"));
          data2.block.dimension.playSound(`close.iron_trapdoor`, data2.block.center());
          return;
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:fortune",
    {
      onPlayerBreak(data2, component) {
        const equippableComponent = data2.player?.getComponent(EntityComponentTypes10.Equippable);
        if (equippableComponent === void 0) return;
        if (!equippableComponent.getEquipment(EquipmentSlot9.Mainhand)?.hasComponent(ItemComponentTypes6.Enchantable)) return;
        const enchantableComponent = equippableComponent.getEquipment(EquipmentSlot9.Mainhand)?.getComponent(ItemComponentTypes6.Enchantable);
        if (!enchantableComponent?.hasEnchantment(MinecraftEnchantmentTypes.Fortune)) return;
        let fortuneLevel = enchantableComponent.getEnchantment(MinecraftEnchantmentTypes.Fortune).level;
        let rng = Math.round(Math.random());
        const blockLocation = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
        const blockId = data2.brokenBlockPermutation.type.id.substring(5);
        if (data2.player?.getGameMode() == GameMode5.Survival) {
          if (fortuneLevel >= 3) {
            data2.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            data2.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            if (rng == 0) return;
            data2.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            return;
          }
          if (fortuneLevel == 2) {
            data2.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            if (rng == 0) return;
            data2.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            return;
          }
          if (fortuneLevel == 1) {
            if (rng == 0) return;
            data2.block.dimension.runCommand(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            return;
          }
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:can_double_slab",
    {
      onPlayerInteract(data2, component) {
        if (!data2.player) return;
        const DoubleState = "poke_pfe:double";
        if (data2.block.permutation.getState(DoubleState) == true) return;
        const blockLocation = `${data2.block.location.x} ${data2.block.location.y} ${data2.block.location.z}`;
        const slabId = data2.block.typeId;
        const equippableComponent = data2.player.getComponent(EntityComponentTypes10.Equippable);
        const mainhand = equippableComponent?.getEquipment(EquipmentSlot9.Mainhand);
        if (mainhand != void 0) {
          if (mainhand.typeId == slabId && (data2.block.permutation.getState("minecraft:vertical_half") == "bottom" && data2.face == Direction3.Up || data2.block.permutation.getState("minecraft:vertical_half") == "top" && data2.face == Direction3.Down) && data2.block.permutation.getState(DoubleState) == false) {
            var itemStackAmount = mainhand.amount - 1;
            data2.block.setWaterlogged(false);
            data2.block.setPermutation(data2.block.permutation.withState(DoubleState, true));
            data2.block.dimension.playSound(`use.stone`, data2.block.center());
            if (data2.player?.getGameMode() == GameMode5.Creative) return;
            if (itemStackAmount <= 0) {
              equippableComponent?.setEquipment(EquipmentSlot9.Mainhand, void 0);
              return;
            }
            equippableComponent?.setEquipment(EquipmentSlot9.Mainhand, new ItemStack10(slabId, itemStackAmount));
            return;
          } else return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:cc_phantomic_conduit",
    {
      onTick(data2, component) {
        const ActiveState = "poke_pfe:active";
        var block_location_x = data2.block.x;
        var block_location_y = data2.block.y;
        var block_location_z = data2.block.z;
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 1));
          data2.dimension.runCommand("execute positioned " + block_location_x + " " + block_location_y + " " + block_location_z + " as @e[r=50,family=phantom] run damage @s 20");
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:cc_da_conduit",
    {
      onTick(data2, component) {
        const ActiveState = "poke_pfe:active";
        const block_location = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 1));
          data2.dimension.runCommand("execute positioned " + block_location + " as @e[r=50,family=pfe:demonic_allay] run damage @s 20");
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:spawn_item",
    {
      onTick(data2, componentInfo) {
        const component = componentInfo.params;
        if (component.needs_state) {
          if (!data2.block.permutation.getState(component.needs_state.name) == component.needs_state.value) return;
        }
        const spawningItem = new ItemStack10(component.item.identifier, component.item.amount ?? 1);
        const spawnLocation = Vector3Utils.add(data2.block.center(), component.spawn_item_at);
        const spawnAtBlock = data2.dimension.getBlock(spawnLocation);
        if (!spawnAtBlock) return;
        pokeAddItemsToContainerOrDrop(
          component.allow_deposit_to_container ? spawnAtBlock.getComponent(BlockComponentTypes.Inventory)?.container : void 0,
          spawningItem,
          data2.block.dimension,
          spawnLocation
        );
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:redstone_state",
    {
      onTick(data2, component) {
        const ActiveState = "poke_pfe:active";
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 1));
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:magnet_block",
    {
      onTick(data2, component) {
        const ActiveState = "poke_pfe:active";
        let blockY = data2.block.permutation.getState(`minecraft:vertical_half`) == `top` ? data2.block.center().y - 0.5 : data2.block.center().y + 0.5;
        const block_location = `${data2.block.x} ${blockY} ${data2.block.z}`;
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 1));
          data2.dimension.runCommand(`execute positioned ${block_location} as @e[type=item,r=10] run tp @s ${block_location}`);
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:crops",
    {
      onRandomTick(data2, component) {
        const GrowthStageState = "poke_pfe:growth_stage";
        var growth_state = data2.block.permutation.getState(GrowthStageState);
        var growth_stage = growth_state + 1;
        if (growth_state != void 0 || 6) {
          data2.block.setPermutation(data2.block.permutation.withState(GrowthStageState, growth_stage));
          return;
        }
        return;
      },
      onPlayerInteract(data2, component) {
        const equippableComponent = data2.player?.getComponent(EntityComponentTypes10.Equippable);
        const mainhandItem = equippableComponent?.getEquipment(EquipmentSlot9.Mainhand);
        const GrowthStageState = "poke_pfe:growth_stage";
        if (mainhandItem === void 0) return;
        const block_location = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
        let growth_state = data2.block.permutation.getState(GrowthStageState);
        let growth_stage = growth_state + Math.round(Math.random() * 3);
        var itemAfterUse = mainhandItem.amount;
        var itemAfterUse1 = itemAfterUse - 1;
        if (growth_stage > 6) {
          growth_stage = 6;
        }
        if (mainhandItem.typeId == MinecraftItemTypes.BoneMeal && growth_state != 6) {
          data2.block.setPermutation(data2.block.permutation.withState(GrowthStageState, growth_stage));
          data2.dimension.runCommand("playsound item.bone_meal.use @a " + block_location);
          data2.dimension.runCommand("particle minecraft:crop_growth_emitter " + block_location);
          if (data2.player?.getGameMode() != GameMode5.Creative) {
            if (itemAfterUse1 == 0) {
              data2.player?.runCommand("clear @s bone_meal -1 1");
              return;
            }
            equippableComponent?.setEquipment(EquipmentSlot9.Mainhand, new ItemStack10(mainhandItem.typeId, itemAfterUse1));
            return;
          }
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:molten_lava_sponge",
    {
      onRandomTick(data2, component) {
        switch (MinecraftBlockTypes.Water || MinecraftBlockTypes.FlowingWater) {
          case data2.block.north()?.typeId:
            break;
          case data2.block.south()?.typeId:
            break;
          case data2.block.east()?.typeId:
            break;
          case data2.block.west()?.typeId:
            break;
          case data2.block.below()?.typeId:
            break;
          case data2.block.above()?.typeId:
            break;
          default:
            return;
        }
        ;
        data2.block.setType(`poke_pfe:lava_sponge`);
        data2.dimension.playSound(`random.fizz`, data2.block.center());
        data2.dimension.spawnParticle(`minecraft:cauldron_explosion_emitter`, data2.block.center());
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:cc_block_seat",
    {
      onPlayerInteract(data2, component) {
        if (!data2.player) return;
        const slabId = data2.block.typeId;
        const mainhand = data2.player.getComponent(EntityComponentTypes10.Equippable)?.getEquipment(EquipmentSlot9.Mainhand);
        const DoubleState = "poke_pfe:double";
        const options = {
          type: "poke_pfe:seat",
          location: data2.block.center(),
          maxDistance: 0.24
        };
        if (mainhand?.typeId != slabId && !data2.player?.isSneaking) {
          if (data2.block.permutation.getState("minecraft:vertical_half") == "bottom" && data2.block.permutation.getState(DoubleState) == false) {
            if (data2.dimension.getEntities(options).length > 0) {
              return;
            } else {
              data2.dimension.spawnEntity("poke_pfe:seat", data2.block.center()).getComponent("minecraft:rideable")?.addRider(data2.player);
              ComputersCompat.addStat("slabs_sat_on", 1);
              return;
            }
          }
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:cc_block_interact",
    {
      onPlayerInteract(data2, component) {
        switch (data2.block.typeId) {
          case "poke_pfe:listener_trophy": {
            data2.player?.playMusic("poke_pfe.they_listen", { fade: 5 });
            return;
          }
          case "poke_pfe:furnace_golem_trophy": {
            data2.player?.playMusic("poke_pfe.record.pigstep", { fade: 5 });
            return;
          }
          case "poke_pfe:charged_cobalt_block":
            {
              data2.dimension.spawnEntity("poke_pfe:cobalt_golem", data2.block.location);
              data2.block.setType(MinecraftBlockTypes.Air);
              return;
            }
            return;
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:cc_8ball",
    {
      onPlayerInteract(data2, component) {
        var RNG = Math.floor(Math.random() * 19);
        data2.player?.sendMessage({ rawtext: [{ translate: `translation.poke_pfe:8ball${RNG}` }] });
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:cc_wall",
    {
      onPlace(data2, component) {
        const NorthBlock = data2.block.north();
        const SouthBlock = data2.block.south();
        const EastBlock = data2.block.east();
        const WestBlock = data2.block.west();
        const AboveBlock = data2.block.above();
        const BelowBlock = data2.block.below();
        const NorthState = "poke_pfe:wall_n";
        const SouthState = "poke_pfe:wall_s";
        const EastState = "poke_pfe:wall_e";
        const WestState = "poke_pfe:wall_w";
        const AboveState = "poke_pfe:connected_above";
        const BelowState = "poke_pfe:connected_below";
        if (!NorthBlock || !SouthBlock || !EastBlock || !WestBlock) return;
        if (!NorthBlock.isAir && !NorthBlock.isLiquid && !NorthBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
          data2.block.setPermutation(data2.block.permutation.withState(NorthState, true));
          if (NorthBlock.permutation.getState(SouthState) != void 0) {
            NorthBlock.setPermutation(NorthBlock.permutation.withState(SouthState, true));
            Post(NorthBlock, true, true);
          }
        } else {
          data2.block.setPermutation(data2.block.permutation.withState(NorthState, false));
        }
        ;
        if (!SouthBlock.isAir && !SouthBlock.isLiquid && !SouthBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
          data2.block.setPermutation(data2.block.permutation.withState(SouthState, true));
          if (SouthBlock.permutation.getState(NorthState) != void 0) {
            SouthBlock.setPermutation(SouthBlock.permutation.withState(NorthState, true));
            Post(SouthBlock, true, true);
          }
        } else {
          data2.block.setPermutation(data2.block.permutation.withState(SouthState, false));
        }
        ;
        if (!EastBlock.isAir && !EastBlock.isLiquid && !EastBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
          data2.block.setPermutation(data2.block.permutation.withState(EastState, true));
          if (EastBlock.permutation.getState(WestState) != void 0) {
            EastBlock.setPermutation(EastBlock.permutation.withState(WestState, true));
            Post(EastBlock, true, true);
          }
        } else {
          data2.block.setPermutation(data2.block.permutation.withState(EastState, false));
        }
        ;
        if (!WestBlock.isAir && !WestBlock.isLiquid && !WestBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
          data2.block.setPermutation(data2.block.permutation.withState(WestState, true));
          if (WestBlock.permutation.getState(EastState) != void 0) {
            WestBlock.setPermutation(WestBlock.permutation.withState(EastState, true));
            Post(WestBlock, true, true);
          }
        } else {
          data2.block.setPermutation(data2.block.permutation.withState(WestState, false));
        }
        ;
        if (BelowBlock) {
          if (!BelowBlock.isAir && !BelowBlock.isLiquid && !BelowBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
            data2.block.setPermutation(data2.block.permutation.withState(BelowState, true));
            if (BelowBlock.permutation.getState(AboveState) != void 0) {
              BelowBlock.setPermutation(BelowBlock.permutation.withState(AboveState, true));
            }
          } else {
            data2.block.setPermutation(data2.block.permutation.withState(BelowState, false));
          }
          ;
        }
        if (AboveBlock) {
          if (AboveBlock && !AboveBlock.isAir && !AboveBlock.isLiquid && !AboveBlock.canBeDestroyedByLiquidSpread(LiquidType.Water)) {
            data2.block.setPermutation(data2.block.permutation.withState(AboveState, true));
            if (AboveBlock.permutation.getState(BelowState) != void 0) {
              AboveBlock.setPermutation(AboveBlock.permutation.withState(BelowState, true));
            }
          } else {
            data2.block.setPermutation(data2.block.permutation.withState(AboveState, false));
          }
          ;
        }
        Post(data2.block, true, true);
        return;
      },
      onPlayerBreak(data2, component) {
        const NorthBlock = data2.block.north();
        const SouthBlock = data2.block.south();
        const EastBlock = data2.block.east();
        const WestBlock = data2.block.west();
        const AboveBlock = data2.block.above();
        const BelowBlock = data2.block.below();
        const NorthState = "poke_pfe:wall_n";
        const SouthState = "poke_pfe:wall_s";
        const EastState = "poke_pfe:wall_e";
        const WestState = "poke_pfe:wall_w";
        const AboveState = "poke_pfe:connected_above";
        const BelowState = "poke_pfe:connected_below";
        if (!NorthBlock || !SouthBlock || !EastBlock || !WestBlock || !AboveBlock || !BelowBlock) return;
        if (NorthBlock.permutation.getState(SouthState) != void 0) {
          NorthBlock.setPermutation(NorthBlock.permutation.withState(SouthState, false));
          Post(NorthBlock, true, true);
        }
        if (SouthBlock.permutation.getState(NorthState) != void 0) {
          SouthBlock.setPermutation(SouthBlock.permutation.withState(NorthState, false));
          Post(SouthBlock, true, true);
        }
        if (EastBlock.permutation.getState(WestState) != void 0) {
          EastBlock.setPermutation(EastBlock.permutation.withState(WestState, false));
          Post(EastBlock, true, true);
        }
        if (WestBlock.permutation.getState(EastState) != void 0) {
          WestBlock.setPermutation(WestBlock.permutation.withState(EastState, false));
          Post(WestBlock, true, true);
        }
        if (AboveBlock.permutation.getState(AboveState) != void 0) {
          AboveBlock.setPermutation(AboveBlock.permutation.withState(BelowState, false));
          Post(AboveBlock, true, false);
        }
        if (BelowBlock.permutation.getState(BelowState) != void 0) {
          BelowBlock.setPermutation(BelowBlock.permutation.withState(AboveState, false));
          Post(BelowBlock, false, true);
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:fisher",
    {
      onRandomTick(data2, component) {
        const PFEFisherComponentInfo = {
          baitBlockState: "poke_pfe:bait",
          baitStates: [4, 3, 2, 1, 0]
        };
        if (data2.block.isWaterlogged && data2.block.permutation.getState(PFEFisherComponentInfo.baitBlockState) != 0) {
          data2.block.setPermutation(data2.block.permutation.withState(PFEFisherComponentInfo.baitBlockState, Math.max(Number(data2.block.permutation.getState(PFEFisherComponentInfo.baitBlockState)) - 1, 0)));
          data2.block.dimension.playSound(`poke_pfe.fisher.catch`, data2.block.center());
          ComputersCompat.addStat("fisher_catches", 1);
        }
      },
      onPlayerInteract(data2, component) {
        const PFEFisherComponentInfo = {
          baitBlockState: "poke_pfe:bait",
          baitStates: [4, 3, 2, 1, 0]
        };
        let baitState = data2.block.permutation.getState(PFEFisherComponentInfo.baitBlockState);
        let lootTable = "poke/pfe/fisher_block.loot";
        let spawnLocation = data2.block.center();
        spawnLocation.y += 1;
        switch (baitState) {
          case 4:
            {
              data2.block.dimension.playSound(`poke_pfe.fisher.noLoot`, data2.block.center());
              return;
              break;
            }
            ;
          case 3: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 1);
            break;
          }
          case 2: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 2);
            break;
          }
          case 1: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 3);
            break;
          }
          case 0: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 4);
            break;
          }
        }
        data2.block.setPermutation(data2.block.permutation.withState(PFEFisherComponentInfo.baitBlockState, 4));
      },
      onPlayerBreak(data2, component) {
        const PFEFisherComponentInfo = {
          baitBlockState: "poke_pfe:bait",
          baitStates: [4, 3, 2, 1, 0]
        };
        let baitState = data2.brokenBlockPermutation.getState(PFEFisherComponentInfo.baitBlockState);
        let lootTable = "poke/pfe/fisher_block.loot";
        let spawnLocation = data2.block.center();
        spawnLocation.y += 1;
        switch (baitState) {
          case 4:
            break;
          case 3: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 1);
            break;
          }
          case 2: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 2);
            break;
          }
          case 1: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 3);
            break;
          }
          case 0: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 4);
            break;
          }
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:elevator",
    {
      onStepOff(data2, component) {
        if (!data2.entity) return;
        let player = data2.entity;
        if (player.typeId == MinecraftEntityTypes.Player) {
          let maxSearch = 64;
          if (player.isJumping) {
            let viewDirection = player.getViewDirection();
            let cardinalDirection = PokeClosestCardinal(viewDirection, "upDown");
            switch (cardinalDirection.direction) {
              case Direction3.Up: {
                for (let i = data2.block.y + 1; i <= Math.min(data2.block.y + maxSearch, data2.dimension.heightRange.max); Math.min(i++, data2.dimension.heightRange.max)) {
                  if (data2.block.above(i - data2.block.y)?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.above(i - data2.block.y)?.getRedstonePower())) {
                    player.teleport({ x: data2.block.center().x, y: i + 1, z: data2.block.center().z });
                    player.playSound(`mob.endermen.portal`, { location: { x: data2.block.x, y: i + 1, z: data2.block.z } });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction3.Down: {
                for (let i = data2.block.y - 1; i >= Math.max(data2.block.y - maxSearch, data2.dimension.heightRange.min); Math.min(i--, data2.dimension.heightRange.min)) {
                  if (data2.block.below(Math.abs(i - data2.block.y))?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.below(Math.abs(i - data2.block.y))?.getRedstonePower())) {
                    player.teleport({ x: data2.block.center().x, y: i + 1, z: data2.block.center().z });
                    player.playSound(`mob.endermen.portal`, { location: { x: data2.block.x, y: i + 1, z: data2.block.z } });
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
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:omnivator",
    {
      onStepOff(data2, component) {
        if (!data2.entity) return;
        let player = data2.entity;
        if (player.typeId == MinecraftEntityTypes.Player) {
          let maxSearch = 64;
          if (player.isJumping) {
            let viewDirection = player.getViewDirection();
            let cardinalDirection = PokeClosestCardinal(viewDirection);
            switch (cardinalDirection.direction) {
              case Direction3.Up: {
                for (let i = data2.block.y + 1; i <= Math.min(data2.block.y + maxSearch, data2.dimension.heightRange.max); Math.min(i++, data2.dimension.heightRange.max)) {
                  if (data2.block.above(i - data2.block.y)?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.above(i - data2.block.y)?.getRedstonePower())) {
                    player.teleport({ x: data2.block.center().x, y: i + 1, z: data2.block.center().z });
                    player.playSound(`mob.endermen.portal`, { location: { x: data2.block.x, y: i + 1, z: data2.block.z } });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction3.Down: {
                for (let i = data2.block.y - 1; i >= Math.max(data2.block.y - maxSearch, data2.dimension.heightRange.min); Math.min(i--, data2.dimension.heightRange.min)) {
                  if (data2.block.below(Math.abs(i - data2.block.y))?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.below(Math.abs(i - data2.block.y))?.getRedstonePower())) {
                    player.teleport({ x: data2.block.center().x, y: i + 1, z: data2.block.center().z });
                    player.playSound(`mob.endermen.portal`, { location: { x: data2.block.x, y: i + 1, z: data2.block.z } });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction3.North: {
                for (let i = data2.block.z - 1; i >= data2.block.z - maxSearch; i--) {
                  if (data2.block.north(Math.abs(i - data2.block.z))?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.north(Math.abs(i - data2.block.z))?.getRedstonePower())) {
                    let newBlock = data2.block.north(Math.abs(i - data2.block.z));
                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z });
                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction3.South: {
                for (let i = data2.block.z + 1; i <= data2.block.z + maxSearch; i++) {
                  if (data2.block.south(i - data2.block.z)?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.south(i - data2.block.z)?.getRedstonePower())) {
                    let newBlock = data2.block.south(i - data2.block.z);
                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z });
                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction3.West: {
                for (let i = data2.block.x - 1; i >= data2.block.x - maxSearch; i--) {
                  if (data2.block.west(Math.abs(i - data2.block.x))?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.west(Math.abs(i - data2.block.x))?.getRedstonePower())) {
                    let newBlock = data2.block.west(Math.abs(i - data2.block.x));
                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z });
                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction3.East: {
                for (let i = data2.block.x + 1; i <= data2.block.x + maxSearch; i++) {
                  if (data2.block.east(i - data2.block.x)?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.east(i - data2.block.x)?.getRedstonePower())) {
                    let newBlock = data2.block.east(i - data2.block.x);
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
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:transform_block",
    {
      onTick(data2, componentInfo) {
        const component = componentInfo.params;
        let block = component.turns_into;
        if (block.includes("{")) {
          const permutationString = block.substring(block.indexOf("{"));
          block = block.substring(0, block.indexOf("{"));
          const permutations = JSON.parse(permutationString);
          data2.block.setPermutation(BlockPermutation3.resolve(block, permutations));
        } else data2.block.setType(block);
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:place_blocks",
    {
      onTick(data2, componentInfo) {
        const component = componentInfo.params;
        const ActiveState = "poke_pfe:active";
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          for (const target of component.targets) {
            let GetBlock2 = function() {
              switch (target) {
                case Direction3.Up:
                  return data2.block.above();
                case Direction3.Down:
                  return data2.block.below();
                case Direction3.North:
                  return data2.block.north();
                case Direction3.South:
                  return data2.block.south();
                case Direction3.East:
                  return data2.block.east();
                case Direction3.West:
                  return data2.block.west();
                default:
                  return data2.block;
              }
            };
            var GetBlock = GetBlock2;
            const block = GetBlock2();
            if (typeof component.places == "string") {
              if (!block || (component.can_replace ? !component.can_replace.includes(block.typeId) : !block.isAir)) {
                continue;
              }
              ;
              if (component.places.includes("{")) {
                let places_block = component.places;
                const permutationString = places_block.substring(places_block.indexOf("{"));
                places_block = places_block.substring(0, places_block.indexOf("{"));
                const permutations = JSON.parse(permutationString);
                block.setPermutation(BlockPermutation3.resolve(places_block, permutations));
              } else block.setType(component.places);
            } else {
              let parsedBlocks = [];
              for (const unparsedBlock of component.places) {
                if (unparsedBlock.includes("::")) {
                  const replaces = unparsedBlock.substring(unparsedBlock.indexOf("::") + 2);
                  const places = unparsedBlock.substring(0, unparsedBlock.indexOf("::"));
                  parsedBlocks.push({ places, replaces });
                  continue;
                }
                parsedBlocks.push({ places: unparsedBlock });
              }
              for (const parsedBlock of parsedBlocks) {
                if (block && (parsedBlock.replaces ? parsedBlock.replaces == block.typeId : component.can_replace ? component.can_replace?.includes(block.typeId) : block.isAir)) {
                  if (parsedBlock.places.includes("{")) {
                    let places_block = parsedBlock.places;
                    const permutationString = places_block.substring(places_block.indexOf("{"));
                    places_block = places_block.substring(0, places_block.indexOf("{"));
                    const permutations = JSON.parse(permutationString);
                    block.setPermutation(BlockPermutation3.resolve(places_block, permutations));
                  } else block.setType(parsedBlock.places);
                }
              }
            }
          }
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 1));
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:break_blocks",
    {
      onTick(data2, componentInfo) {
        const component = componentInfo.params;
        const ActiveState = "poke_pfe:active";
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          for (const target of component.targets) {
            let GetBlock2 = function() {
              switch (target) {
                case Direction3.Up:
                  return data2.block.above();
                case Direction3.Down:
                  return data2.block.below();
                case Direction3.North:
                  return data2.block.north();
                case Direction3.South:
                  return data2.block.south();
                case Direction3.East:
                  return data2.block.east();
                case Direction3.West:
                  return data2.block.west();
                default:
                  return data2.block;
              }
            };
            var GetBlock = GetBlock2;
            const block = GetBlock2();
            if (!block) continue;
            let BannedBlocks = [
              MinecraftBlockTypes.Air,
              MinecraftBlockTypes.LightBlock0,
              MinecraftBlockTypes.LightBlock1,
              MinecraftBlockTypes.LightBlock2,
              MinecraftBlockTypes.LightBlock3,
              MinecraftBlockTypes.LightBlock4,
              MinecraftBlockTypes.LightBlock5,
              MinecraftBlockTypes.LightBlock6,
              MinecraftBlockTypes.LightBlock7,
              MinecraftBlockTypes.LightBlock8,
              MinecraftBlockTypes.LightBlock9,
              MinecraftBlockTypes.LightBlock10,
              MinecraftBlockTypes.LightBlock11,
              MinecraftBlockTypes.LightBlock12,
              MinecraftBlockTypes.LightBlock13,
              MinecraftBlockTypes.LightBlock14,
              MinecraftBlockTypes.LightBlock15,
              MinecraftBlockTypes.Barrier,
              MinecraftBlockTypes.Jigsaw,
              MinecraftBlockTypes.StructureBlock,
              MinecraftBlockTypes.CommandBlock,
              MinecraftBlockTypes.ChainCommandBlock,
              MinecraftBlockTypes.RepeatingCommandBlock,
              MinecraftBlockTypes.BorderBlock,
              MinecraftBlockTypes.Allow,
              MinecraftBlockTypes.Deny,
              MinecraftBlockTypes.Bedrock,
              MinecraftBlockTypes.ReinforcedDeepslate
            ];
            if (BannedBlocks.includes(block.typeId) || block.isLiquid || block.isAir) continue;
            const block_location = `${block.x} ${block.y} ${block.z}`;
            const replacedAs = block.isWaterlogged ? MinecraftBlockTypes.FlowingWater : MinecraftBlockTypes.Air;
            data2.dimension.runCommand(`execute positioned ${block_location} run setblock ~~~ ${replacedAs} destroy`);
          }
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 1));
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState(ActiveState, 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:change_state",
    {
      onPlayerInteract(data2, componentInfo) {
        const component = componentInfo.params;
        if (typeof component.face != "string" && !component.face.includes(data2.face) || data2.block.permutation.getState("minecraft:block_face") == data2.face.toLowerCase()) return;
        data2.block.setPermutation(data2.block.permutation.withState("minecraft:block_face", data2.face.toLowerCase()));
        if (component.sound) {
          data2.dimension.playSound(component.sound.identifier, data2.block.location, { pitch: component.sound.pitch, volume: component.sound.volume });
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:sponge_block",
    {
      onPlace(data2, componentInfo) {
        const component = componentInfo.params;
        if (!component.mode.includes("place")) return;
        for (const blockId of component.check_for_blocks) {
          switch (blockId) {
            case data2.block.north()?.typeId:
              break;
            case data2.block.south()?.typeId:
              break;
            case data2.block.east()?.typeId:
              break;
            case data2.block.west()?.typeId:
              break;
            case data2.block.below()?.typeId:
              break;
            case data2.block.above()?.typeId:
              break;
            case "all":
              break;
            default:
              continue;
          }
          data2.block.setType(component.turns_into);
          if (component.adds_to_stat) {
            ComputersCompat.addStat(component.adds_to_stat, 1);
          }
          if (component.sound) {
            data2.dimension.playSound(component.sound.identifier, data2.block.location, { pitch: component.sound.pitch, volume: component.sound.volume });
          }
          const X = component.sponge_size[0];
          const Y = component.sponge_size[1];
          const Z = component.sponge_size[2];
          const startLocation = {
            x: Math.round(data2.block.location.x - X / 2) + component.offset[0],
            y: Math.round(data2.block.location.y - Y / 2 + component.offset[1]),
            z: Math.round(data2.block.location.z - Z / 2) + component.offset[2]
          };
          const endLocation = {
            x: startLocation.x + (X > 0 ? X - 1 : X == 0 ? 0 : X + 1),
            y: startLocation.y + (Y > 0 ? Y - 1 : Y == 0 ? 0 : Y + 1),
            z: startLocation.z + (Z > 0 ? Z - 1 : Z == 0 ? 0 : Z + 1)
          };
          data2.dimension.fillBlocks(new BlockVolume2(startLocation, endLocation), MinecraftBlockTypes.Air, { blockFilter: { includeTypes: component.check_for_blocks == "all" ? void 0 : component.check_for_blocks }, ignoreChunkBoundErrors: true });
          break;
        }
        return;
      },
      onTick(data2, componentInfo) {
        const component = componentInfo.params;
        if (!component.mode.includes("tick")) return;
        for (const blockId of component.check_for_blocks) {
          switch (blockId) {
            case data2.block.north()?.typeId:
              break;
            case data2.block.south()?.typeId:
              break;
            case data2.block.east()?.typeId:
              break;
            case data2.block.west()?.typeId:
              break;
            case data2.block.below()?.typeId:
              break;
            case data2.block.above()?.typeId:
              break;
            case "all":
              break;
            default:
              continue;
          }
          data2.block.setType(component.turns_into);
          if (component.adds_to_stat) {
            ComputersCompat.addStat(component.adds_to_stat, 1);
          }
          if (component.sound) {
            data2.dimension.playSound(component.sound.identifier, data2.block.location, { pitch: component.sound.pitch, volume: component.sound.volume });
          }
          const X = component.sponge_size[0];
          const Y = component.sponge_size[1];
          const Z = component.sponge_size[2];
          const startLocation = {
            x: Math.round(data2.block.location.x - X / 2) + component.offset[0],
            y: Math.round(data2.block.location.y - Y / 2 + component.offset[1]),
            z: Math.round(data2.block.location.z - Z / 2) + component.offset[2]
          };
          const endLocation = {
            x: startLocation.x + (X > 0 ? X - 1 : X == 0 ? 0 : X + 1),
            y: startLocation.y + (Y > 0 ? Y - 1 : Y == 0 ? 0 : Y + 1),
            z: startLocation.z + (Z > 0 ? Z - 1 : Z == 0 ? 0 : Z + 1)
          };
          data2.dimension.fillBlocks(new BlockVolume2(startLocation, endLocation), MinecraftBlockTypes.Air, { blockFilter: { includeTypes: component.check_for_blocks == "all" ? void 0 : component.check_for_blocks }, ignoreChunkBoundErrors: true });
          break;
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent("poke_pfe:recipe_block", new RecipeBlockComponent());
  data.blockComponentRegistry.registerCustomComponent("poke_pfe:custom_recipes", {});
}
function Post(data, up, down) {
  let Permutation = data.permutation;
  let Post2 = false;
  let PostCheckNorth = false;
  let PostCheckSouth = false;
  let PostCheckEast = false;
  let PostCheckWest = false;
  const PostState = "poke_pfe:post_bit";
  const NorthState = "poke_pfe:wall_n";
  const SouthState = "poke_pfe:wall_s";
  const EastState = "poke_pfe:wall_e";
  const WestState = "poke_pfe:wall_w";
  const AboveState = "poke_pfe:connected_above";
  const BelowState = "poke_pfe:connected_below";
  if (data.permutation.getState(PostState) == void 0) return;
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
  if (PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == false) Post2 = true;
  if (PostCheckNorth == true && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == false) Post2 = true;
  if (PostCheckNorth == false && PostCheckSouth == true && PostCheckEast == false && PostCheckWest == false) Post2 = true;
  if (PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == true && PostCheckWest == false) Post2 = true;
  if (PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == true) Post2 = true;
  if (PostCheckNorth && PostCheckEast || PostCheckNorth && PostCheckWest || PostCheckSouth && PostCheckEast || PostCheckSouth && PostCheckWest) Post2 = true;
  if (Post2) {
    if (Permutation.getState(PostState) === void 0) return;
    UpdatePost(data, true);
  } else {
    if (Permutation.getState(PostState) === void 0) return;
    UpdatePost(data, false);
  }
}
function UpdatePost(block, value, up) {
  const PostState = "poke_pfe:post_bit";
  const NorthState = "poke_pfe:wall_n";
  const SouthState = "poke_pfe:wall_s";
  const EastState = "poke_pfe:wall_e";
  const WestState = "poke_pfe:wall_w";
  const AboveState = "poke_pfe:connected_above";
  const BelowState = "poke_pfe:connected_below";
  if (!value) {
    let Post2 = false;
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
    if (!PostCheckNorth && !PostCheckSouth && !PostCheckEast && !PostCheckWest) Post2 = true;
    if (PostCheckNorth && !PostCheckSouth && PostCheckEast == false && !PostCheckWest) Post2 = true;
    if (!PostCheckNorth && PostCheckSouth && PostCheckEast == false && !PostCheckWest) Post2 = true;
    if (!PostCheckNorth && !PostCheckSouth && PostCheckEast && !PostCheckWest) Post2 = true;
    if (!PostCheckNorth && !PostCheckSouth && !PostCheckEast && PostCheckWest) Post2 = true;
    if (PostCheckNorth && PostCheckEast || PostCheckNorth && PostCheckWest || PostCheckSouth && PostCheckEast || PostCheckSouth && PostCheckWest) Post2 = true;
    if (Post2) {
      if (up) {
        if (block.above()?.hasTag(`pfe_wall`)) {
          UpdatePost(block.above(), true, true);
        }
      } else if (up === false) {
        if (block.below()?.hasTag(`pfe_wall`)) {
          UpdatePost(block.below(), true, false);
        }
      } else {
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
  } else if (up === false) {
    if (block.below()?.hasTag(`pfe_wall`)) {
      UpdatePost(block.below(), value, false);
    }
  } else {
    if (block.above()?.hasTag(`pfe_wall`)) {
      UpdatePost(block.above(), value, true);
    }
    if (block.below()?.hasTag(`pfe_wall`)) {
      UpdatePost(block.below(), value, false);
    }
  }
  block.setPermutation(block.permutation.withState(PostState, value));
}

// scripts/main.ts
var currentVersion = 103002;
world11.afterEvents.playerJoin.subscribe(((data) => {
  let birthdays = JSON.parse(world11.getDynamicProperty(`poke_pfe:birthdays`).toString());
  system9.runTimeout(() => {
    world11.getAllPlayers().forEach(((player) => {
      if (player.id == data.playerId) {
        let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player));
        birthdays.forEach(((birthday) => {
          if (birthday.day == currentTime.getDate() && birthday.month == currentTime.getMonth()) {
            let name = { text: birthday.name };
            if (birthday.style == "dev") {
              name.translate = `translation.poke_pfe:birthdayDev`;
            }
            if (birthday.name == player.name) {
              name.translate = `translation.poke_pfe:birthdayOwn`;
            } else if (birthday.name?.endsWith(`s`)) {
              name.text = `${birthday.name}'`;
            } else {
              name.text = `${birthday.name}'s`;
            }
            player.sendMessage({ translate: `translation.poke_pfe:birthdayAnnounce`, with: { rawtext: [PokeTimeGreeting(currentTime, player, void 0, true), { text: player.name }, name] } });
          }
        }));
      }
    }));
  }, 600);
}));
system9.beforeEvents.startup.subscribe((data) => {
  RegisterItemComponents(data);
  RegisterBlockComponents(data);
  data.customCommandRegistry.registerCommand(
    {
      name: "poke_pfe:config",
      description: "Opens PFE's config menu",
      permissionLevel: CommandPermissionLevel.Admin,
      optionalParameters: [{ type: CustomCommandParamType.PlayerSelector, name: "openAs" }]
    },
    ConfigCustomCommand
  );
  data.customCommandRegistry.registerCommand(
    {
      name: "poke_pfe:swap_hat",
      description: "Swaps your helmet for whatever you are holding. some items can lose data if being swapped to the Helmet slot that are not valid helmet items",
      permissionLevel: CommandPermissionLevel.Admin,
      optionalParameters: [{ type: CustomCommandParamType.PlayerSelector, name: "swapAs" }]
    },
    SwapHatCommand
  );
  return;
});
world11.afterEvents.worldLoad.subscribe((data) => {
  world11.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify([]));
  world11.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify([]));
  world11.setDynamicProperty(PFECustomFarmQuestsPropertyID, JSON.stringify([]));
  world11.setDynamicProperty(PFECustomCraftQuestsPropertyID, JSON.stringify([]));
  world11.setDynamicProperty(PFECustomKillQuestsPropertyID, JSON.stringify([]));
  world11.setDynamicProperty(PFECustomArmorEffectDynamicProperty, JSON.stringify([]));
  system9.runTimeout(() => {
    PFETimeValidation();
  }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20);
  if (typeof world11.getDynamicProperty(PFEDisableConfigName) != "string") {
    world11.setDynamicProperty(PFEDisableConfigName, JSON.stringify(PFEDisableConfigDefault));
  }
  const birthdayProperty = world11.getDynamicProperty(`poke_pfe:birthdays`);
  if (typeof birthdayProperty != "string") world11.setDynamicProperty(`poke_pfe:birthdays`, `[]`);
  const CustomEventsDynamicProp = world11.getDynamicProperty(`poke_pfe:customEvents`);
  typeof CustomEventsDynamicProp == "string" ? JSON.parse(CustomEventsDynamicProp) ?? world11.setDynamicProperty(`poke_pfe:customEvents`, `[]`) : world11.setDynamicProperty(`poke_pfe:customEvents`, `[]`);
  if (typeof world11.getDynamicProperty(PFEBossEventConfigName) == "string") {
    let settings = JSON.parse(world11.getDynamicProperty(PFEBossEventConfigName).toString());
    if (typeof settings.ticks != "number" || typeof settings.furnaceGolem != "object" || typeof settings.knightling != "object" || typeof settings.listener != "object" || typeof settings.zombken != "object" || typeof settings.miniDemonicAllay != "object" || typeof settings.necromancer != "object" || typeof settings.snowman != "object" || typeof settings.sparky != "object" || typeof settings.superStriker != "object" || typeof settings.theLogger != "object") {
      world11.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
    }
    ;
  } else {
    world11.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
  }
  initExampleStickers();
  ComputersCompat.init();
  world11.setDynamicProperty("poke_pfe:bossEventIntervalId", startBossEvents());
  world11.setDynamicProperty("poke_pfe:setEffectIntervalId", startSetEffects());
  system9.sendScriptEvent("poke_pfe:dupe_check", `${currentVersion}`);
});
var DataStorageDynamicPropertyId = "registered_data_storage_items";
system9.afterEvents.scriptEventReceive.subscribe((data) => {
  switch (data.id) {
    /**
             This will send true (as a string) to the scriptevent defined in the message part 
    
            example command: `scriptevent poke_pfe:enabled poke_pfe:receive_test`
    
            - in this case it will send true to poke_pfe:receive_test
             */
    case `poke_pfe:enabled`: {
      system9.sendScriptEvent(data.message, "true");
      break;
    }
    /*
            This will be used to have PFE use the item provided as a form of data storage
    
            What this means is you can use that item's components to import data that would normally be sent via /scriptevent
            */
    case `poke_custom:register_data_storage`: {
      const dynamicProperty = world11.getDynamicProperty(DataStorageDynamicPropertyId);
      const registeredItems = JSON.parse(typeof dynamicProperty == "string" ? dynamicProperty : "[]") ?? [];
      world11.setDynamicProperty(DataStorageDynamicPropertyId, JSON.stringify(registeredItems.concat(data.message)));
      break;
    }
    /*
    This can be used to add additional presets to the set effects
    */
    case `poke_pfe:add_set_effect_preset`: {
      const currentPresets = JSON.parse(world11.getDynamicProperty(PFECustomArmorEffectDynamicProperty).toString()) ?? [];
      let newPresets = currentPresets.concat(JSON.parse(data.message).value) ?? currentPresets;
      world11.setDynamicProperty(PFECustomArmorEffectDynamicProperty, JSON.stringify(newPresets));
      break;
    }
    /*
    Theses can be used to add quests into PFE's quest system
    see `scripts\quests.ts` for more info 
    */
    case PFECustomMineQuestsPropertyID: {
      const currentQuests = JSON.parse(world11.getDynamicProperty(PFECustomMineQuestsPropertyID).toString()) ?? [];
      let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests;
      world11.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify(newQuests));
      break;
    }
    case PFECustomKillQuestsPropertyID: {
      const currentQuests = JSON.parse(world11.getDynamicProperty(PFECustomKillQuestsPropertyID).toString()) ?? [];
      let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests;
      world11.setDynamicProperty(PFECustomKillQuestsPropertyID, JSON.stringify(newQuests));
      break;
    }
    case PFECustomFarmQuestsPropertyID: {
      const currentQuests = JSON.parse(world11.getDynamicProperty(PFECustomFarmQuestsPropertyID).toString()) ?? [];
      let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests;
      world11.setDynamicProperty(PFECustomFarmQuestsPropertyID, JSON.stringify(newQuests));
    }
    case PFECustomCraftQuestsPropertyID: {
      const currentQuests = JSON.parse(world11.getDynamicProperty(PFECustomCraftQuestsPropertyID).toString()) ?? [];
      let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests;
      world11.setDynamicProperty(PFECustomCraftQuestsPropertyID, JSON.stringify(newQuests));
    }
    /*case (`poke_pfe:test`): {
        let item = data.sourceEntity?.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Mainhand)
        item?.setDynamicProperty(`poke_pfe:ammo`, JSON.stringify({ v: 2, max: 32, amount: 12, entityId: "poke_pfe:galaxy_arrow", id: "poke_pfe:galaxy_arrow", upgrades: [{ id: "poke_pfe:capacity", level: 1, maxLevel: undefined }, { id: "poke_pfe:flaming", level: 0, maxLevel: 1 }] }))
        data.sourceEntity?.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, item)
    }*/
    // This is to check if there are multiple versions of PFE applied to a world at a time
    case "poke_pfe:dupe_check": {
      const Version = Number(data.message);
      if (Version < currentVersion) {
        world11.sendMessage(`\xA7f[\xA7eWARNING\xA7f] Multiple versions PFE are applied to this world, to avoid any issue: please remove any old versions || \xA7eOld version: \xA7fv${data.message.substring(0, 1)}.${Number(data.message.substring(1, 3))}.${Number(`${data.message}`.substring(3, 5))}${Number(`${data.message}`.substring(5)) != 0 ? `${data.message}`.substring(5) : ""}`);
      }
      break;
    }
    // Sends the version number of PFE to the script event id provided in the message
    // PFE Version (ex: 102950 = v1.2.95 || ex2: 112359 = v1.12.359)
    case `poke_pfe:get_version`: {
      system9.sendScriptEvent(data.message, currentVersion.toString());
      break;
    }
    default:
      break;
  }
});
function ConfigCustomCommand(origin, openAs) {
  system9.run(() => {
    const players = openAs ? openAs : [origin.sourceEntity];
    for (const player of players) {
      OpenPFEConfig(player);
    }
  });
  return {
    status: CustomCommandStatus.Success,
    message: "Opened PFE's config menu for the player's provided"
  };
}
function SwapHatCommand(origin, swapAs) {
  let status = {
    status: CustomCommandStatus.Success,
    message: ""
  };
  system9.run(() => {
    const players = swapAs ? swapAs : [origin.sourceEntity];
    for (const player of players) {
      const equippableComponent = player.getComponent(EntityComponentTypes11.Equippable);
      if (!equippableComponent) {
        status = {
          status: CustomCommandStatus.Failure,
          message: "Player cannot equip items"
        };
        console.warn("Player cannot equip items");
        return;
      }
      const mainHand = equippableComponent?.getEquipment(EquipmentSlot10.Mainhand);
      if (mainHand?.lockMode == ItemLockMode2.slot) {
        status = {
          status: CustomCommandStatus.Failure,
          message: "Held Item cannot be locked"
        };
        console.warn("Held Item cannot be locked");
        return;
      }
      const helmet = equippableComponent?.getEquipment(EquipmentSlot10.Head);
      if (helmet?.lockMode == ItemLockMode2.slot) {
        status = {
          status: CustomCommandStatus.Failure,
          message: "Helmet cannot be locked"
        };
        console.warn("Helmet cannot be locked");
        return;
      }
      if (helmet) {
        const helmetEnchantments = helmet.getComponent(ItemComponentTypes7.Enchantable);
        if (helmetEnchantments?.hasEnchantment(MinecraftEnchantmentTypes.Binding)) {
          status = {
            status: CustomCommandStatus.Failure,
            message: "Helmet cannot have %enchantment.curse.binding"
          };
          console.warn("Helmet cannot have %enchantment.curse.binding");
          return;
        }
      }
      let oldHelmetItem = helmet?.clone();
      let oldMainHandItem = mainHand?.clone();
      console.warn(helmet?.typeId);
      console.warn(mainHand?.typeId);
      equippableComponent.setEquipment(EquipmentSlot10.Head, oldMainHandItem);
      if (oldMainHandItem) {
        if (!equippableComponent?.getEquipment(EquipmentSlot10.Head)?.matches(oldMainHandItem.typeId)) {
          player.runCommand(`replaceitem entity @s slot.armor.head 0 ${oldMainHandItem.typeId} ${oldMainHandItem.amount}`);
        }
      }
      equippableComponent.setEquipment(EquipmentSlot10.Mainhand, oldHelmetItem);
      status = {
        status: CustomCommandStatus.Success,
        message: "Swapped Helmet with Held Item"
      };
      console.warn("Swapped Helmet with Held Item");
      return;
    }
  });
  return status;
}

//# sourceMappingURL=../debug/main.js.map
