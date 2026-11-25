import { readFileSync, writeFileSync } from "node:fs";
import index from "../../index.json" with { type: "json" };

import {
	FindItemByIdentifier,
	GetAllFilesInDirectory,
	GetDisplayNameByIdentifier,
} from "../common.ts";
import {
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
};

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
