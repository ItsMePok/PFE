package poke.pfe;

import net.fabricmc.fabric.api.itemgroup.v1.ItemGroupEvents;
import net.minecraft.item.Item;
import net.minecraft.item.ItemGroups;
import net.minecraft.item.ToolMaterial;
import net.minecraft.item.equipment.trim.ArmorTrimAssets;
import net.minecraft.item.equipment.trim.ArmorTrimMaterial;
import net.minecraft.item.equipment.trim.ArmorTrimMaterials;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.registry.RegistryKey;
import net.minecraft.registry.RegistryKeys;
import net.minecraft.registry.tag.BlockTags;
import net.minecraft.registry.tag.TagKey;
import net.minecraft.text.Text;
import net.minecraft.util.Identifier;

import java.util.function.Function;

import static net.minecraft.item.Items.register;

public class ModItems {
    public static Item register(String name, Function<Item.Settings, Item> itemFactory, Item.Settings settings) {
        // Create the item key.
        RegistryKey<Item> itemKey = RegistryKey.of(RegistryKeys.ITEM, Identifier.of(PFE.MOD_ID, name));

        // Create the item instance.
        Item item = itemFactory.apply(settings.registryKey(itemKey));

        // Register the item.
        Registry.register(Registries.ITEM, itemKey, item);

        return item;
    }
    public static final TagKey<Item> REPAIRS_COBALT_MATERIAL = TagKey.of(RegistryKeys.ITEM, Identifier.of(PFE.MOD_ID, "repairs_cobalt_material"));

    public static final ToolMaterial COBALT_TOOL_MATERIAL = new ToolMaterial(
            BlockTags.INCORRECT_FOR_IRON_TOOL,
            200,
            5.0F,
            1.5F,
            12,
            REPAIRS_COBALT_MATERIAL

    );

    public static final Item RAW_COBALT = register("raw_cobalt", Item::new, new Item.Settings(
    ));
    public static final Item COBALT_INGOT = register("cobalt_ingot", Item::new, new Item.Settings());
    public static final Item COBALT_PICKAXE = register("cobalt_pickaxe", Item::new, new Item.Settings()
            .pickaxe(COBALT_TOOL_MATERIAL,4f,1.2f)
            .enchantable(12)
    );
    public static void initialize() {
        // Get the event for modifying entries in the ingredients group.
// And register an event handler that adds our suspicious item to the ingredients group.
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_COBALT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.COBALT_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.TOOLS)
                .register((itemGroup) -> itemGroup.add(ModItems.COBALT_PICKAXE));
    }
}
