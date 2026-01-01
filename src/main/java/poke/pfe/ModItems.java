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

    public static final Item RAW_COBALT = register("raw_cobalt", Item::new, new Item.Settings());
    public static final Item COBALT_INGOT = register("cobalt_ingot", Item::new, new Item.Settings());
    public static final Item COBALT_NUGGET = register("cobalt_nugget", Item::new, new Item.Settings());

    public static final Item RAW_SHADE = register("raw_shade", Item::new, new Item.Settings());
    public static final Item SHADE_INGOT = register("shade_ingot", Item::new, new Item.Settings());
    public static final Item SHADE_NUGGET = register("shade_nugget", Item::new, new Item.Settings());

    public static final Item RAW_ONYX = register("raw_onyx", Item::new, new Item.Settings());
    public static final Item ONYX_INGOT = register("onyx_ingot", Item::new, new Item.Settings());
    public static final Item ONYX_NUGGET = register("onyx_nugget", Item::new, new Item.Settings());

    public static final Item RAW_HOLY = register("raw_holy", Item::new, new Item.Settings());
    public static final Item HOLY_INGOT = register("holy_ingot", Item::new, new Item.Settings());
    public static final Item HOLY_NUGGET = register("holy_nugget", Item::new, new Item.Settings());

    public static final Item RAW_HELLISH = register("raw_hellish", Item::new, new Item.Settings());
    public static final Item HELLISH_INGOT = register("hellish_ingot", Item::new, new Item.Settings());
    public static final Item HELLISH_NUGGET = register("hellish_nugget", Item::new, new Item.Settings());

    public static final Item RAW_GODLY = register("raw_godly", Item::new, new Item.Settings());
    public static final Item GODLY_INGOT = register("godly_ingot", Item::new, new Item.Settings());
    public static final Item GODLY_NUGGET = register("godly_nugget", Item::new, new Item.Settings());

    public static final Item RAW_DEMONIC = register("raw_demonic", Item::new, new Item.Settings());
    public static final Item DEMONIC_INGOT = register("demonic_ingot", Item::new, new Item.Settings());
    public static final Item DEMONIC_NUGGET = register("demonic_nugget", Item::new, new Item.Settings());

    public static final Item RAW_VOID = register("raw_void", Item::new, new Item.Settings());
    public static final Item VOID_INGOT = register("void_ingot", Item::new, new Item.Settings());
    public static final Item VOID_NUGGET = register("void_nugget", Item::new, new Item.Settings());

    public static final Item RAW_GALAXY = register("raw_galaxy", Item::new, new Item.Settings());
    public static final Item GALAXY_INGOT = register("galaxy_ingot", Item::new, new Item.Settings());
    public static final Item GALAXY_NUGGET = register("galaxy_nugget", Item::new, new Item.Settings());

    public static final Item RAW_ASTRAL = register("raw_astral", Item::new, new Item.Settings());
    public static final Item ASTRAL_INGOT = register("astral_ingot", Item::new, new Item.Settings());
    public static final Item ASTRAL_NUGGET = register("astral_nugget", Item::new, new Item.Settings());

    public static final Item RAW_NEBULA = register("raw_nebula", Item::new, new Item.Settings());
    public static final Item NEBULA_INGOT = register("nebula_ingot", Item::new, new Item.Settings());
    public static final Item NEBULA_NUGGET = register("nebula_nugget", Item::new, new Item.Settings());

    public static final Item MOLTEN_SLIMEBALL = register("molten_slimeball", Item::new, new Item.Settings());

    public static final Item MEDIC_INGOT = register("medic_ingot", Item::new, new Item.Settings());
    public static final Item MEDIC_NUGGET = register("medic_nugget", Item::new, new Item.Settings());

    public static final Item RADIUM_INGOT = register("radium_ingot", Item::new, new Item.Settings());
    public static final Item RADIUM_NUGGET = register("radium_nugget", Item::new, new Item.Settings());

    public static final Item DEATH_INGOT = register("death_ingot", Item::new, new Item.Settings());
    public static final Item DEATH_NUGGET = register("death_nugget", Item::new, new Item.Settings());

    public static void initialize() {
        // Get the event for modifying entries in the ingredients group.
// And register an event handler that adds our suspicious item to the ingredients group.
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_COBALT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.COBALT_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.COBALT_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_SHADE));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.SHADE_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.SHADE_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_ONYX));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.ONYX_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.ONYX_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_HOLY));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.HOLY_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.HOLY_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_HELLISH));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.HELLISH_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.HELLISH_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_GODLY));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.GODLY_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.GODLY_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_DEMONIC));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.DEMONIC_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.DEMONIC_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_GALAXY));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.GALAXY_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.GALAXY_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_VOID));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.VOID_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.VOID_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_ASTRAL));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.ASTRAL_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.ASTRAL_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RAW_NEBULA));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.NEBULA_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.NEBULA_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.MOLTEN_SLIMEBALL));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.MEDIC_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.MEDIC_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RADIUM_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.RADIUM_NUGGET));

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.DEATH_INGOT));
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)
                .register((itemGroup) -> itemGroup.add(ModItems.DEATH_NUGGET));
    }
}
