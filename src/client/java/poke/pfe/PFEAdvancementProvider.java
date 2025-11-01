package poke.pfe;

import net.fabricmc.fabric.api.datagen.v1.FabricDataOutput;
import net.fabricmc.fabric.api.datagen.v1.provider.FabricAdvancementProvider;
import net.minecraft.advancement.Advancement;
import net.minecraft.advancement.AdvancementEntry;
import net.minecraft.advancement.AdvancementFrame;
import net.minecraft.advancement.criterion.InventoryChangedCriterion;
import net.minecraft.item.Items;
import net.minecraft.registry.RegistryWrapper;
import net.minecraft.text.Text;
import net.minecraft.util.Identifier;

import java.util.concurrent.CompletableFuture;
import java.util.function.Consumer;

public class PFEAdvancementProvider extends FabricAdvancementProvider {
    protected PFEAdvancementProvider(FabricDataOutput output, CompletableFuture<RegistryWrapper.WrapperLookup> registryLookup) {
        super(output, registryLookup);

    }

    @Override
    public void generateAdvancement(RegistryWrapper.WrapperLookup wrapperLookup, Consumer<AdvancementEntry> consumer) {

        AdvancementEntry welcomeAdvancement = Advancement.Builder.create()
                .display(
                        ModItems.COBALT_INGOT, // The display icon
                        Text.literal("Isn't this a game?"), // The title
                        Text.literal("Acquire Cobalt for the first time"), // The description
                        Identifier.ofVanilla("textures/gui/advancements/backgrounds/adventure.png"), // Background image for the tab in the advancements page, if this is a root advancement (has no parent)
                        AdvancementFrame.TASK, // TASK, CHALLENGE, or GOAL
                        false, // Show the toast when completing it
                        false, // Announce it to chat
                        false // Hide it in the advancement tab until it's achieved
                )
                // Give the advancement an id
                .build(consumer, "poke_pfe:welcome_advancement");
        AdvancementEntry getCobalt = Advancement.Builder.create()
                .display(
                        ModItems.RAW_COBALT, // The display icon
                        Text.literal("Isn't this a game?"), // The title
                        Text.literal("Acquire Cobalt for the first time"), // The description
                        Identifier.ofVanilla("textures/gui/advancements/backgrounds/adventure.png"), // Background image for the tab in the advancements page, if this is a root advancement (has no parent)
                        AdvancementFrame.GOAL, // TASK, CHALLENGE, or GOAL
                        true, // Show the toast when completing it
                        true, // Announce it to chat
                        false // Hide it in the advancement tab until it's achieved
                )
                .parent(welcomeAdvancement)
                // "got_raw_cobalt" is the name referenced by other advancements when they want to have "requirements."
                .criterion("got_raw_cobalt", InventoryChangedCriterion.Conditions.items(ModItems.RAW_COBALT))
                // Give the advancement an id
                .build(consumer, "poke_pfe:get_raw_cobalt");

    }

}

