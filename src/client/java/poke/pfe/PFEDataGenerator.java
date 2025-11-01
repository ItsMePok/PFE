package poke.pfe;

import net.fabricmc.fabric.api.client.datagen.v1.provider.FabricModelProvider;
import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;
import net.minecraft.data.DataProvider;

import java.rmi.registry.Registry;

public class PFEDataGenerator implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator ) {
        FabricDataGenerator.Pack pack = fabricDataGenerator.createPack(
        );
        pack.addProvider(PFEModelProvider::new);
        pack.addProvider(PFERecipeProvider::new);
        pack.addProvider(PFEAdvancementProvider::new);
        pack.addProvider(PFEBlockLootTableProvider::new);
        pack.addProvider(PFEChestLootTableProvider::new);
        pack.addProvider(PFEItemTagProvider::new);
	}

}
