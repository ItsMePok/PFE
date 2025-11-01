package poke.pfe;

import net.fabricmc.fabric.api.client.datagen.v1.provider.FabricModelProvider;
import net.fabricmc.fabric.api.datagen.v1.FabricDataOutput;
import net.fabricmc.fabric.api.itemgroup.v1.ItemGroupEvents;
import net.minecraft.client.data.BlockStateModelGenerator;
import net.minecraft.client.data.ItemModelGenerator;
import net.minecraft.item.ItemGroups;

public class PFEModelProvider extends FabricModelProvider {
    public PFEModelProvider(FabricDataOutput output) {
        super(output);
    }

    @Override
    public void generateBlockStateModels(BlockStateModelGenerator blockStateModelGenerator) {
        blockStateModelGenerator.registerSimpleCubeAll(ModBlocks.COBALT_ORE);
    }


    @Override
    public void generateItemModels(ItemModelGenerator itemModelGenerator) {
    }

    @Override
    public String getName() {
        return "PFEModelProvider";
    }
}