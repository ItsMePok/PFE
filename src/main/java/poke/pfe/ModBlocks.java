package poke.pfe;

import net.fabricmc.fabric.api.itemgroup.v1.ItemGroupEvents;
import net.minecraft.block.AbstractBlock;
import net.minecraft.block.Block;
import net.minecraft.item.BlockItem;
import net.minecraft.item.Item;
import net.minecraft.item.ItemGroups;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.registry.RegistryKey;
import net.minecraft.registry.RegistryKeys;
import net.minecraft.sound.BlockSoundGroup;
import net.minecraft.util.Identifier;

import java.util.function.Function;

public class ModBlocks {
    private static Block register(String name, Function<AbstractBlock.Settings, Block> blockFactory, AbstractBlock.Settings settings, boolean shouldRegisterItem) {
        // Create a registry key for the block
        RegistryKey<Block> blockKey = keyOfBlock(name);
        // Create the block instance
        Block block = blockFactory.apply(settings.registryKey(blockKey));

        // Sometimes, you may not want to register an item for the block.
        // Eg: if it's a technical block like `minecraft:moving_piston` or `minecraft:end_gateway`
        if (shouldRegisterItem) {
            // Items need to be registered with a different type of registry key, but the ID
            // can be the same.
            RegistryKey<Item> itemKey = keyOfItem(name);

            BlockItem blockItem = new BlockItem(block, new Item.Settings().registryKey(itemKey).useBlockPrefixedTranslationKey());
            Registry.register(Registries.ITEM, itemKey, blockItem);
        }

        return Registry.register(Registries.BLOCK, blockKey, block);
    }

    private static RegistryKey<Block> keyOfBlock(String name) {
        return RegistryKey.of(RegistryKeys.BLOCK, Identifier.of(PFE.MOD_ID, name));
    }

    private static RegistryKey<Item> keyOfItem(String name) {
        return RegistryKey.of(RegistryKeys.ITEM, Identifier.of(PFE.MOD_ID, name));
    }
    public static final Block COBALT_ORE = register(
            "cobalt_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEEPSLATE_COBALT_ORE = register(
            "deepslate_cobalt_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block NETHER_COBALT_ORE = register(
            "nether_cobalt_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block END_COBALT_ORE = register(
            "end_cobalt_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block COBALT_BLOCK = register(
            "cobalt_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );
    public static final Block RAW_COBALT_BLOCK = register(
            "raw_cobalt_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );

    public static final Block SHADE_ORE = register(
            "shade_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEEPSLATE_SHADE_ORE = register(
            "deepslate_shade_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.DEEPSLATE),
            true
    );
    public static final Block NETHER_SHADE_ORE = register(
            "nether_shade_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.NETHER_ORE),
            true
    );
    public static final Block END_SHADE_ORE = register(
            "end_shade_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block SHADE_BLOCK = register(
            "shade_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );
    public static final Block RAW_SHADE_BLOCK = register(
            "raw_shade_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );

    public static final Block ONYX_ORE = register(
            "onyx_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEEPSLATE_ONYX_ORE = register(
            "deepslate_onyx_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.DEEPSLATE),
            true
    );
    public static final Block NETHER_ONYX_ORE = register(
            "nether_onyx_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.NETHER_ORE),
            true
    );
    public static final Block END_ONYX_ORE = register(
            "end_onyx_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block ONYX_BLOCK = register(
            "onyx_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );
    public static final Block RAW_ONYX_BLOCK = register(
            "raw_onyx_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );

    public static final Block HOLY_ORE = register(
            "holy_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEEPSLATE_HOLY_ORE = register(
            "deepslate_holy_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.DEEPSLATE),
            true
    );
    public static final Block NETHER_HOLY_ORE = register(
            "nether_holy_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.NETHER_ORE),
            true
    );
    public static final Block END_HOLY_ORE = register(
            "end_holy_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block HOLY_BLOCK = register(
            "holy_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );
    public static final Block RAW_HOLY_BLOCK = register(
            "raw_holy_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );

    public static final Block HELLISH_ORE = register(
            "hellish_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEEPSLATE_HELLISH_ORE = register(
            "deepslate_hellish_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.DEEPSLATE),
            true
    );
    public static final Block NETHER_HELLISH_ORE = register(
            "nether_hellish_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.NETHER_ORE),
            true
    );
    public static final Block END_HELLISH_ORE = register(
            "end_hellish_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block HELLISH_BLOCK = register(
            "hellish_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );
    public static final Block RAW_HELLISH_BLOCK = register(
            "raw_hellish_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );

    public static final Block GODLY_ORE = register(
            "godly_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEEPSLATE_GODLY_ORE = register(
            "deepslate_godly_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.DEEPSLATE),
            true
    );
    public static final Block NETHER_GODLY_ORE = register(
            "nether_godly_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.NETHER_ORE),
            true
    );
    public static final Block END_GODLY_ORE = register(
            "end_godly_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block GODLY_BLOCK = register(
            "godly_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );
    public static final Block RAW_GODLY_BLOCK = register(
            "raw_godly_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );

    public static final Block DEMONIC_ORE = register(
            "demonic_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEEPSLATE_DEMONIC_ORE = register(
            "deepslate_demonic_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.DEEPSLATE),
            true
    );
    public static final Block NETHER_DEMONIC_ORE = register(
            "nether_demonic_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.NETHER_ORE),
            true
    );
    public static final Block END_DEMONIC_ORE = register(
            "end_demonic_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEMONIC_BLOCK = register(
            "demonic_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );
    public static final Block RAW_DEMONIC_BLOCK = register(
            "raw_demonic_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );

    public static final Block GALAXY_ORE = register(
            "galaxy_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEEPSLATE_GALAXY_ORE = register(
            "deepslate_galaxy_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.DEEPSLATE),
            true
    );
    public static final Block NETHER_GALAXY_ORE = register(
            "nether_galaxy_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.NETHER_ORE),
            true
    );
    public static final Block END_GALAXY_ORE = register(
            "end_galaxy_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block GALAXY_BLOCK = register(
            "galaxy_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );
    public static final Block RAW_GALAXY_BLOCK = register(
            "raw_galaxy_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );

    public static final Block VOID_ORE = register(
            "void_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEEPSLATE_VOID_ORE = register(
            "deepslate_void_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.DEEPSLATE),
            true
    );
    public static final Block NETHER_VOID_ORE = register(
            "nether_void_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.NETHER_ORE),
            true
    );
    public static final Block END_VOID_ORE = register(
            "end_void_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block VOID_BLOCK = register(
            "void_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );
    public static final Block RAW_VOID_BLOCK = register(
            "raw_void_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );

    public static final Block ASTRAL_ORE = register(
            "astral_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEEPSLATE_ASTRAL_ORE = register(
            "deepslate_astral_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.DEEPSLATE),
            true
    );
    public static final Block NETHER_ASTRAL_ORE = register(
            "nether_astral_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.NETHER_ORE),
            true
    );
    public static final Block END_ASTRAL_ORE = register(
            "end_astral_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block ASTRAL_BLOCK = register(
            "astral_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );
    public static final Block RAW_ASTRAL_BLOCK = register(
            "raw_astral_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );

    public static final Block NEBULA_ORE = register(
            "nebula_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block DEEPSLATE_NEBULA_ORE = register(
            "deepslate_nebula_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.DEEPSLATE),
            true
    );
    public static final Block NETHER_NEBULA_ORE = register(
            "nether_nebula_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.NETHER_ORE),
            true
    );
    public static final Block END_NEBULA_ORE = register(
            "end_nebula_ore",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );
    public static final Block NEBULA_BLOCK = register(
            "nebula_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );
    public static final Block RAW_NEBULA_BLOCK = register(
            "raw_nebula_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE),
            true
    );

    public static final Block MOLTEN_BLOCK = register(
            "molten_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );

    public static final Block MEDIC_BLOCK = register(
            "medic_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );

    public static final Block RADIUM_BLOCK = register(
            "radium_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );

    public static final Block DEATH_BLOCK = register(
            "death_block",
            Block::new,
            AbstractBlock.Settings.create().sounds(BlockSoundGroup.METAL),
            true
    );

    public static void initialize() {
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.NATURAL).register((itemGroup) -> {
            itemGroup.add(ModBlocks.COBALT_ORE.asItem());
            itemGroup.add(ModBlocks.DEEPSLATE_COBALT_ORE.asItem());
            itemGroup.add(ModBlocks.NETHER_COBALT_ORE.asItem());
            itemGroup.add(ModBlocks.END_COBALT_ORE.asItem());
            itemGroup.add(ModBlocks.COBALT_BLOCK.asItem());
            itemGroup.add(ModBlocks.RAW_COBALT_BLOCK.asItem());

            itemGroup.add(ModBlocks.SHADE_ORE.asItem());
            itemGroup.add(ModBlocks.DEEPSLATE_SHADE_ORE.asItem());
            itemGroup.add(ModBlocks.NETHER_SHADE_ORE.asItem());
            itemGroup.add(ModBlocks.END_SHADE_ORE.asItem());
            itemGroup.add(ModBlocks.SHADE_BLOCK.asItem());
            itemGroup.add(ModBlocks.RAW_SHADE_BLOCK.asItem());

            itemGroup.add(ModBlocks.ONYX_ORE.asItem());
            itemGroup.add(ModBlocks.DEEPSLATE_ONYX_ORE.asItem());
            itemGroup.add(ModBlocks.NETHER_ONYX_ORE.asItem());
            itemGroup.add(ModBlocks.END_ONYX_ORE.asItem());
            itemGroup.add(ModBlocks.ONYX_BLOCK.asItem());
            itemGroup.add(ModBlocks.RAW_ONYX_BLOCK.asItem());

            itemGroup.add(ModBlocks.HOLY_ORE.asItem());
            itemGroup.add(ModBlocks.DEEPSLATE_HOLY_ORE.asItem());
            itemGroup.add(ModBlocks.NETHER_HOLY_ORE.asItem());
            itemGroup.add(ModBlocks.END_HOLY_ORE.asItem());
            itemGroup.add(ModBlocks.HOLY_BLOCK.asItem());
            itemGroup.add(ModBlocks.RAW_HOLY_BLOCK.asItem());

            itemGroup.add(ModBlocks.HELLISH_ORE.asItem());
            itemGroup.add(ModBlocks.DEEPSLATE_HELLISH_ORE.asItem());
            itemGroup.add(ModBlocks.NETHER_HELLISH_ORE.asItem());
            itemGroup.add(ModBlocks.END_HELLISH_ORE.asItem());
            itemGroup.add(ModBlocks.HELLISH_BLOCK.asItem());
            itemGroup.add(ModBlocks.RAW_HELLISH_BLOCK.asItem());

            itemGroup.add(ModBlocks.GODLY_ORE.asItem());
            itemGroup.add(ModBlocks.DEEPSLATE_GODLY_ORE.asItem());
            itemGroup.add(ModBlocks.NETHER_GODLY_ORE.asItem());
            itemGroup.add(ModBlocks.END_GODLY_ORE.asItem());
            itemGroup.add(ModBlocks.GODLY_BLOCK.asItem());
            itemGroup.add(ModBlocks.RAW_GODLY_BLOCK.asItem());

            itemGroup.add(ModBlocks.DEMONIC_ORE.asItem());
            itemGroup.add(ModBlocks.DEEPSLATE_DEMONIC_ORE.asItem());
            itemGroup.add(ModBlocks.NETHER_DEMONIC_ORE.asItem());
            itemGroup.add(ModBlocks.END_DEMONIC_ORE.asItem());
            itemGroup.add(ModBlocks.DEMONIC_BLOCK.asItem());
            itemGroup.add(ModBlocks.RAW_DEMONIC_BLOCK.asItem());

            itemGroup.add(ModBlocks.GALAXY_ORE.asItem());
            itemGroup.add(ModBlocks.DEEPSLATE_GALAXY_ORE.asItem());
            itemGroup.add(ModBlocks.NETHER_GALAXY_ORE.asItem());
            itemGroup.add(ModBlocks.END_GALAXY_ORE.asItem());
            itemGroup.add(ModBlocks.GALAXY_BLOCK.asItem());
            itemGroup.add(ModBlocks.RAW_GALAXY_BLOCK.asItem());

            itemGroup.add(ModBlocks.VOID_ORE.asItem());
            itemGroup.add(ModBlocks.DEEPSLATE_VOID_ORE.asItem());
            itemGroup.add(ModBlocks.NETHER_VOID_ORE.asItem());
            itemGroup.add(ModBlocks.END_VOID_ORE.asItem());
            itemGroup.add(ModBlocks.VOID_BLOCK.asItem());
            itemGroup.add(ModBlocks.RAW_VOID_BLOCK.asItem());

            itemGroup.add(ModBlocks.ASTRAL_ORE.asItem());
            itemGroup.add(ModBlocks.DEEPSLATE_ASTRAL_ORE.asItem());
            itemGroup.add(ModBlocks.NETHER_ASTRAL_ORE.asItem());
            itemGroup.add(ModBlocks.END_ASTRAL_ORE.asItem());
            itemGroup.add(ModBlocks.ASTRAL_BLOCK.asItem());
            itemGroup.add(ModBlocks.RAW_ASTRAL_BLOCK.asItem());

            itemGroup.add(ModBlocks.NEBULA_ORE.asItem());
            itemGroup.add(ModBlocks.DEEPSLATE_NEBULA_ORE.asItem());
            itemGroup.add(ModBlocks.NETHER_NEBULA_ORE.asItem());
            itemGroup.add(ModBlocks.END_NEBULA_ORE.asItem());
            itemGroup.add(ModBlocks.NEBULA_BLOCK.asItem());
            itemGroup.add(ModBlocks.RAW_NEBULA_BLOCK.asItem());

            itemGroup.add(ModBlocks.MOLTEN_BLOCK.asItem());
            itemGroup.add(ModBlocks.MEDIC_BLOCK.asItem());
            itemGroup.add(ModBlocks.RADIUM_BLOCK.asItem());
            itemGroup.add(ModBlocks.DEATH_BLOCK.asItem());
        });

    }

}