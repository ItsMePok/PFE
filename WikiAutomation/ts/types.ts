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
