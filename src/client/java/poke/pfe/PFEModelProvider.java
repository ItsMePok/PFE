package poke.pfe;

import net.fabricmc.fabric.api.client.datagen.v1.provider.FabricModelProvider;
import net.fabricmc.fabric.api.datagen.v1.FabricDataOutput;
import net.fabricmc.fabric.api.itemgroup.v1.ItemGroupEvents;
import net.minecraft.client.data.BlockStateModelGenerator;
import net.minecraft.client.data.ItemModelGenerator;
import net.minecraft.client.data.Models;
import net.minecraft.item.ItemGroups;

public class PFEModelProvider extends FabricModelProvider {
    public PFEModelProvider(FabricDataOutput output) {
        super(output);
    }

    @Override
    public void generateBlockStateModels(BlockStateModelGenerator blockStateModelGenerator) {
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.COBALT_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEEPSLATE_COBALT_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NETHER_COBALT_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.END_COBALT_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.COBALT_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RAW_COBALT_BLOCK);

        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.SHADE_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEEPSLATE_SHADE_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NETHER_SHADE_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.END_SHADE_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.SHADE_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RAW_SHADE_BLOCK);

        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.ONYX_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEEPSLATE_ONYX_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NETHER_ONYX_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.END_ONYX_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.ONYX_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RAW_ONYX_BLOCK);

        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.HOLY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEEPSLATE_HOLY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NETHER_HOLY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.END_HOLY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.HOLY_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RAW_HOLY_BLOCK);

        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.HELLISH_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEEPSLATE_HELLISH_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NETHER_HELLISH_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.END_HELLISH_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.HELLISH_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RAW_HELLISH_BLOCK);

        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.GODLY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEEPSLATE_GODLY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NETHER_GODLY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.END_GODLY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.GODLY_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RAW_GODLY_BLOCK);

        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEMONIC_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEEPSLATE_DEMONIC_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NETHER_DEMONIC_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.END_DEMONIC_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEMONIC_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RAW_DEMONIC_BLOCK);

        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.GALAXY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEEPSLATE_GALAXY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NETHER_GALAXY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.END_GALAXY_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.GALAXY_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RAW_GALAXY_BLOCK);

        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.VOID_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEEPSLATE_VOID_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NETHER_VOID_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.END_VOID_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.VOID_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RAW_VOID_BLOCK);

        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.ASTRAL_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEEPSLATE_ASTRAL_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NETHER_ASTRAL_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.END_ASTRAL_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.ASTRAL_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RAW_ASTRAL_BLOCK);

        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NEBULA_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEEPSLATE_NEBULA_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NETHER_NEBULA_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.END_NEBULA_ORE);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.NEBULA_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RAW_NEBULA_BLOCK);

        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.MOLTEN_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.MEDIC_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.RADIUM_BLOCK);
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.DEATH_BLOCK);
    }


    @Override
    public void generateItemModels(ItemModelGenerator itemModelGenerator) {
        itemModelGenerator.register(ModItems.RAW_HOLY, Models.GENERATED);
        itemModelGenerator.register(ModItems.HOLY_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.HOLY_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.RAW_ONYX, Models.GENERATED);
        itemModelGenerator.register(ModItems.ONYX_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.ONYX_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.RAW_COBALT, Models.GENERATED);
        itemModelGenerator.register(ModItems.COBALT_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.COBALT_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.RAW_SHADE, Models.GENERATED);
        itemModelGenerator.register(ModItems.SHADE_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.SHADE_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.RAW_HELLISH, Models.GENERATED);
        itemModelGenerator.register(ModItems.HELLISH_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.HELLISH_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.RAW_GALAXY, Models.GENERATED);
        itemModelGenerator.register(ModItems.GALAXY_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.GALAXY_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.RAW_GODLY, Models.GENERATED);
        itemModelGenerator.register(ModItems.GODLY_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.GODLY_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.RAW_DEMONIC, Models.GENERATED);
        itemModelGenerator.register(ModItems.DEMONIC_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.DEMONIC_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.RAW_VOID, Models.GENERATED);
        itemModelGenerator.register(ModItems.VOID_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.VOID_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.RAW_ASTRAL, Models.GENERATED);
        itemModelGenerator.register(ModItems.ASTRAL_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.ASTRAL_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.RAW_NEBULA, Models.GENERATED);
        itemModelGenerator.register(ModItems.NEBULA_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.NEBULA_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.MOLTEN_SLIMEBALL, Models.GENERATED);

        itemModelGenerator.register(ModItems.MEDIC_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.MEDIC_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.RADIUM_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.RADIUM_NUGGET, Models.GENERATED);

        itemModelGenerator.register(ModItems.DEATH_INGOT, Models.GENERATED);
        itemModelGenerator.register(ModItems.DEATH_NUGGET, Models.GENERATED);
    }

    @Override
    public String getName() {
        return "PFEModelProvider";
    }
}