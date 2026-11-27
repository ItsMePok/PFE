import index from "../index.json" with { type: "json" };
import mc_index from "../minecraft_index.json" with { type: "json" };
import { NOTE_SOUND } from "./consts.ts";

export {
  type BPBlockJSON,
  type BPRecipeFile,
  type IndexItem,
  type MCIndexFile,
  type BPItemJSON,
  type NoteSound,
  type IndexFile,
  type LootTable,
};

type LootTable = {
  pools: {
    rolls: number;
    conditions?: {
      condition: string;
      "minecraft:match_tool_filter_any"?: string[];
      "minecraft:match_tool_filter_all"?: string[];
    }[];
    entries: {
      type: "item" | "empty" | "loot_table";
      name: string;
      weight?: number;
      functions?: { function: string; count?: { min: number; max: number } }[];
    }[];
  }[];
};
type MCIndexFile = {
  [key: string]: { icon: string; wiki_page: string; name: string };
};
type IndexFile = {
  default_info: { RP: string; BP: string };
  dev: any[];
  index: IndexItem[];
};
type IndexItem = {
  run: boolean;
  identifier: string;
  wiki_page?: string;
  components: {
    type: string;
    name?: string;
    block_file_path?: string;
    item_file_path?: string;
    additional_typing?: {};
    recipes: string[];
    in_loot_tables?: { type: "block"; origin: string; path: string }[];
    loot_table?: string;
  };
};
type NoteSound = { "note.bd": string; [key: string]: string };

type BPItemJSON = {
  "minecraft:item": {
    description: { identifier: string };
    components: {
      "minecraft:max_stack_size"?: number;
      "minecraft:rarity"?: "common" | "uncommon" | "rare" | "epic";
      "minecraft:damage"?: { value: number };
      "minecraft:wearable"?: { slot: string; protection: number };
    };
  };
};

type BPBlockJSON = {
  "minecraft:block": {
    description: { identifier: string };
    components: {
      "minecraft:map_color"?: string;
      "minecraft:destructible_by_mining"?: {
        seconds_to_destroy: number;
        item_specific_speeds?: {
          item: { tags: string };
          destroy_speed: number; // seconds
        }[];
      };
      "minecraft:instrument_sound"?: { up: (typeof NOTE_SOUND)[string] };
      "minecraft:liquid_detection"?: {
        detection_rules: {
          can_contain_liquid: boolean;
          liquid_type: string;
          on_liquid_touches: "no_reaction" | "blocking" | "broken" | "popped";
        }[];
      };
      "minecraft:loot"?: string;
      "poke_pfe:fortune": {};
    };
  };
};
type BPRecipeFile = {
  format_version: string;
  "minecraft:recipe_shapeless"?: {
    description: { identifier: string };
    tags: string[];
    ingredients: { item: string }[];
    result: { item: string; count?: number };
  };
  "minecraft:recipe_shaped"?: {
    description: {
      identifier: string; //Recipe Identifier
    };
    assume_symmetry: boolean;
    tags: string[];
    group: string;
    unlock: [
      {
        item: string; //Item/Block Identifier
      },
    ];
    pattern: string[];
    key: {
      [key: string]: {
        item: string; //Item/Block Identifier
      };
    };
    result: {
      item: string; //Identifier
      count: number;
    };
  };
  "minecraft:recipe_furnace": {
    description: {
      identifier: string; //identifier
    };
    tags: string[];
    input: string; //Identifier
    output: string | { item: string; count?: number }; //Identifier
  };
};
