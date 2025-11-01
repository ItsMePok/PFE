package poke.pfe;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import net.minecraft.data.recipe.RecipeExporter;
import net.minecraft.data.recipe.RecipeGenerator;
import net.minecraft.item.Item;
import net.minecraft.recipe.book.RecipeCategory;
import net.minecraft.registry.RegistryKeys;
import net.minecraft.registry.RegistryWrapper;

import net.fabricmc.fabric.api.datagen.v1.FabricDataOutput;
import net.fabricmc.fabric.api.datagen.v1.provider.FabricRecipeProvider;

public class PFERecipeProvider extends FabricRecipeProvider {
    public PFERecipeProvider(FabricDataOutput output, CompletableFuture<RegistryWrapper.WrapperLookup> registriesFuture) {
        super(output, registriesFuture);
    }

    @Override
    protected RecipeGenerator getRecipeGenerator(RegistryWrapper.WrapperLookup registryLookup, RecipeExporter exporter) {
        return new RecipeGenerator(registryLookup, exporter) {
            @Override
            public void generate() {
                RegistryWrapper.Impl<Item> itemLookup = registries.getOrThrow(RegistryKeys.ITEM);
                offerSmelting(
                        List.of(ModItems.RAW_COBALT, ModBlocks.COBALT_ORE), // Inputs
                        RecipeCategory.MISC, // Category
                        ModItems.COBALT_INGOT, // Output
                        0.1f, // Experience
                        300, // Cooking time
                        "cobalt_ingot" // group
                );
            }
        };
    }

    @Override
    public String getName() {
        return "PFERecipeProvider";
    }
}