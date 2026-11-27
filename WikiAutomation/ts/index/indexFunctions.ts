import { readFileSync, writeFileSync } from "node:fs";
import index from "../../index.json" with { type: "json" };

import {
  FindItemByIdentifier,
  GetAllFilesInDirectory,
  GetDisplayNameByIdentifier,
} from "../common.ts";
import {
  type LootTable,
  type BPBlockJSON,
  type BPItemJSON,
  type BPRecipeFile,
  type IndexFile,
} from "../types.ts";
import { WIKI_SUMMARY_FILE } from "../consts.ts";

export {
  AddBlocksToIndex,
  AddItemsToIndex,
  AddRecipesToIndex,
  AddWikiPageToIndex,
  AddBlockLootTableToIndexItem,
};

function AddBlockLootTableToIndexItem(INDEX: IndexFile) {
  let files = GetAllFilesInDirectory(
    "WikiAutomation/PFE/behavior_packs/pfe/blocks/",
  );

  for (const FILE of files) {
    const BLOCK_FILE: BPBlockJSON = JSON.parse(
      readFileSync(FILE.parentPath + FILE.name, { encoding: "utf8" }),
    );
    const BLOCK_COMPONENTS = BLOCK_FILE["minecraft:block"].components;
    if (!BLOCK_COMPONENTS["minecraft:loot"]) continue;

    let lootTableFiles = GetAllFilesInDirectory(
      "WikiAutomation/PFE/behavior_packs/pfe/loot_tables/",
    );

    for (const LOOT_TABLE_FILE of lootTableFiles) {
      if (
        !(LOOT_TABLE_FILE.parentPath + LOOT_TABLE_FILE.name).includes(
          BLOCK_COMPONENTS["minecraft:loot"],
        )
      )
        continue;

      let blockIndexItem = FindItemByIdentifier(
        BLOCK_FILE["minecraft:block"].description.identifier,
      );
      if (blockIndexItem) {
        blockIndexItem.components.loot_table =
          LOOT_TABLE_FILE.parentPath + LOOT_TABLE_FILE.name;
        let blockPos = INDEX.index.findIndex((data) => {
          data.identifier == blockIndexItem.identifier;
        });
        INDEX.index.with(blockPos, blockIndexItem);
      }

      const LOOT_TABLE: LootTable = JSON.parse(
        readFileSync(LOOT_TABLE_FILE.parentPath + LOOT_TABLE_FILE.name, {
          encoding: "utf8",
        }),
      );

      let tableItems = [];

      for (const POOLS of LOOT_TABLE.pools) {
        let poolWeight = 0;
        for (const ENTRIES of POOLS.entries) {
          poolWeight += ENTRIES.weight ?? 0;
        }
        for (const ENTRIES of POOLS.entries) {
          tableItems.push({ entry: ENTRIES, totalWeight: poolWeight });
        }
      }

      for (const ITEM of tableItems) {
        const INDEX_ITEM = FindItemByIdentifier(ITEM.entry.name);
        if (!INDEX_ITEM) continue;
        let inIndex = false;
        if (INDEX_ITEM.components.in_loot_tables) {
          for (const IN_TABLE of INDEX_ITEM.components.in_loot_tables) {
            if (
              IN_TABLE.origin ==
              BLOCK_FILE["minecraft:block"].description.identifier
            ) {
              inIndex = true;
              continue;
            }
          }
        } else {
          INDEX_ITEM.components.in_loot_tables = [];
        }
        if (!inIndex) {
          let newIndexItem = INDEX_ITEM;
          newIndexItem.components.in_loot_tables?.push({
            origin: BLOCK_FILE["minecraft:block"].description.identifier,
            type: "block",
            path: LOOT_TABLE_FILE.parentPath + LOOT_TABLE_FILE.name,
          });
          let pos = INDEX.index.findIndex((data) => {
            data.identifier == INDEX_ITEM.identifier;
          });
          INDEX.index.with(pos, newIndexItem);
        }
      }
    }

    writeFileSync("WikiAutomation/index.json", JSON.stringify(INDEX));
  }
}

function AddWikiPageToIndex(INDEX: IndexFile) {
  let current = -1;
  for (const item of INDEX.index) {
    current++;
    if (item.wiki_page) continue;
    let name = GetDisplayNameByIdentifier(item.identifier);
    if (!name) continue;
    if (WIKI_SUMMARY_FILE.includes(name)) {
      //EX: * [NAME](PATH)
      //      * [Cobalt Ore](blocks/ores/stone-ores/cobalt-ore.md)
      let startPos = WIKI_SUMMARY_FILE.split(`[${name}]`)
        .at(1)
        ?.split("\r")
        .at(0)
        ?.replace("(", "")
        .replace(")", "");
      INDEX.index[current].wiki_page = `PFEWiki/${startPos}`;
    }
  }
  writeFileSync("WikiAutomation/index.json", JSON.stringify(INDEX));
}

function AddBlocksToIndex(INDEX: IndexFile) {
  let files = GetAllFilesInDirectory(
    "WikiAutomation/PFE/behavior_packs/pfe/blocks/",
  );
  for (const FILE of files) {
    const FILE_PATH = (FILE.parentPath + FILE.name).replace(
      "../",
      "WikiAutomation/",
    );
    const BLOCK_FILE: BPBlockJSON = JSON.parse(
      readFileSync(FILE.parentPath + FILE.name, { encoding: "utf8" }),
    );
    if (BLOCK_FILE["minecraft:block"]) {
      const BLOCK = BLOCK_FILE["minecraft:block"];
      const IDENTIFIER = BLOCK.description.identifier;
      let indexItem = FindItemByIdentifier(IDENTIFIER);
      if (!indexItem) {
        indexItem = {
          run: false,
          identifier: BLOCK.description.identifier,
          wiki_page: undefined,
          components: { type: "block", recipes: [] },
        };
        INDEX.index.push(indexItem);
      }
      indexItem.components.block_file_path = FILE_PATH;
      let pos = INDEX.index.findIndex((data) => {
        data.identifier == IDENTIFIER;
      });
      INDEX.index.with(pos, indexItem);
    }

    writeFileSync("WikiAutomation/index.json", JSON.stringify(INDEX));
  }
}

function AddItemsToIndex(INDEX: IndexFile) {
  let files = GetAllFilesInDirectory(
    "WikiAutomation/PFE/behavior_packs/pfe/items/",
  );
  for (const FILE of files) {
    const FILE_PATH = (FILE.parentPath + FILE.name).replace(
      "../",
      "WikiAutomation/",
    );
    const ITEM_FILE: BPItemJSON = JSON.parse(
      readFileSync(FILE.parentPath + FILE.name, { encoding: "utf8" }),
    );
    if (ITEM_FILE["minecraft:item"]) {
      const ITEM = ITEM_FILE["minecraft:item"];
      const IDENTIFIER = ITEM.description.identifier;
      let indexItem = FindItemByIdentifier(IDENTIFIER);
      if (!indexItem) {
        indexItem = {
          run: false,
          identifier: ITEM.description.identifier,
          wiki_page: undefined,
          components: { type: "item", recipes: [] },
        };
        INDEX.index.push(indexItem);
      }
      indexItem.components.item_file_path = FILE_PATH;
      let pos = INDEX.index.findIndex((data) => {
        data.identifier == IDENTIFIER;
      });
      INDEX.index.with(pos, indexItem);
    }

    writeFileSync("WikiAutomation/index.json", JSON.stringify(INDEX));
  }
}

function AddRecipesToIndex(INDEX: IndexFile) {
  let files = GetAllFilesInDirectory(
    "WikiAutomation/PFE/behavior_packs/pfe/recipes/",
  );
  for (const FILE of files) {
    const FILE_PATH = FILE.parentPath + FILE.name;
    const RECIPE: BPRecipeFile = JSON.parse(
      readFileSync(FILE_PATH, { encoding: "utf8" }),
    );
    if (RECIPE["minecraft:recipe_shaped"]) {
      const SHAPED_RECIPE = RECIPE["minecraft:recipe_shaped"];
      if (SHAPED_RECIPE.tags.includes("crafting_table")) {
        const IDENTIFIER = RECIPE["minecraft:recipe_shaped"].result.item;
        const INDEX_ITEM = FindItemByIdentifier(IDENTIFIER);
        if (INDEX_ITEM) {
          if (
            INDEX_ITEM.components.recipes &&
            INDEX_ITEM.components.recipes.includes(FILE_PATH)
          )
            continue;
          let newIndexItem = INDEX_ITEM;
          newIndexItem.components.recipes?.push(FILE_PATH);
          let pos = INDEX.index.findIndex((data) => {
            data.identifier == IDENTIFIER;
          });
          INDEX.index.with(pos, newIndexItem);
        }
      }
    }

    if (RECIPE["minecraft:recipe_shapeless"]) {
      const SHAPELESS_RECIPE = RECIPE["minecraft:recipe_shapeless"];
      if (SHAPELESS_RECIPE.tags.includes("stonecutter")) {
        const IDENTIFIER = SHAPELESS_RECIPE.result.item;
        const INDEX_ITEM = FindItemByIdentifier(IDENTIFIER);
        if (INDEX_ITEM) {
          if (
            INDEX_ITEM.components.recipes &&
            INDEX_ITEM.components.recipes.includes(FILE_PATH)
          )
            continue;
          let newIndexItem = INDEX_ITEM;
          newIndexItem.components.recipes?.push(FILE_PATH);
          let pos = INDEX.index.findIndex((data) => {
            data.identifier == IDENTIFIER;
          });
          INDEX.index.with(pos, newIndexItem);
        }
      }
    }
    if (RECIPE["minecraft:recipe_furnace"]) {
      const FURNACE_RECIPE = RECIPE["minecraft:recipe_furnace"];
      if (
        FURNACE_RECIPE.tags.includes("furnace") ||
        FURNACE_RECIPE.tags.includes("blast_furnace") ||
        FURNACE_RECIPE.tags.includes("smoker") ||
        FURNACE_RECIPE.tags.includes("campfire") ||
        FURNACE_RECIPE.tags.includes("soul_campfire")
      ) {
        const IDENTIFIER =
          typeof FURNACE_RECIPE.output == "string"
            ? FURNACE_RECIPE.output
            : FURNACE_RECIPE.output.item;
        const INDEX_ITEM = FindItemByIdentifier(IDENTIFIER);
        if (INDEX_ITEM) {
          if (
            INDEX_ITEM.components.recipes &&
            INDEX_ITEM.components.recipes.includes(FILE_PATH)
          )
            continue;
          let newIndexItem = INDEX_ITEM;
          newIndexItem.components.recipes?.push(FILE_PATH);
          let pos = INDEX.index.findIndex((data) => {
            data.identifier == IDENTIFIER;
          });
          INDEX.index.with(pos, newIndexItem);
        }
      }
    }
    writeFileSync("WikiAutomation/index.json", JSON.stringify(INDEX));
  }
}
