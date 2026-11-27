import { readFileSync } from "node:fs";
import {
	FindItemByIdentifier,
	GetBlockFile,
	GetCountOfEachItem,
	GetDisplayNameByIdentifier,
	GetImageLink,
	GetLootTableFile,
	GetMaxLengthOfStringSet,
	GetWikiPagePath,
} from "../common.ts";

import index from "../../index.json" with { type: "json" };

import { type BPRecipeFile, type IndexItem } from "../types.ts";

export {
	CreateFurnaceRecipe,
	CreateShapedRecipe,
	CreateStonecuttingRecipe,
	GetIdentifierFromShapedPattern,
	MakeObtainingSection,
	CreateBlockDrop,
};

function CreateBlockDrop(file: string, item: IndexItem) {
	if (!item.components.in_loot_tables) return file;

	//Start Tab
	file = `${file}\n{% tab title="Block Drop" %}\n<figure><img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/MiscIcons/BlockBreak.png?raw=true" alt=""><figcaption><p>Obtained by Breaking a Block</p></figcaption></figure>\n`;
	//Add Table:
	//Start Table
	file = `${file}\n<table><thead><tr><th>Block</th><th>Drop Amount</th><th data-type="checkbox">Fortune Works?</th></tr></thead><tbody>`;
	//<th>Chance</th>
	for (const ITEM of item.components.in_loot_tables) {
		const ORIGIN_ITEM = FindItemByIdentifier(ITEM.origin);
		if (!ORIGIN_ITEM) continue;
		const BLOCK_FILE = GetBlockFile(ORIGIN_ITEM);
		let amount: number = 0;
		let minAmount = 0;
		let maxAmount = 0;
		let fortune = false;
		let chance = 0;
		let poolNum = 0;
		//Get Amount of item
		const LOOT_TABLE_FILE = GetLootTableFile(ITEM.path);
		let tableItems = [];
		for (const POOLS of LOOT_TABLE_FILE.pools) {
			let poolWeight = 0;
			for (const ENTRY of POOLS.entries) {
				poolWeight += ENTRY.weight ?? 0;
			}
			for (const ENTRY of POOLS.entries) {
				tableItems.push({
					entry: ENTRY,
					totalWeight: poolWeight,
					rolls: POOLS.rolls,
					poolID: poolNum,
				});
			}
			poolNum++;
		}
		let currentPool = 0;
		for (const ENTRY of tableItems) {
			if (currentPool >= poolNum) break;

			let poolEntries = [];

			for (const POOL_ITEM of tableItems) {
				if (POOL_ITEM.poolID == currentPool) {
					poolEntries.push(POOL_ITEM);
				}
			}

			for (const DATA of poolEntries) {
				if (DATA.entry.weight) {
					if (chance == 0) {
						chance =
							DATA.rolls /
							(DATA.totalWeight == 0 ?
								1
							:	DATA.totalWeight - DATA.entry.weight);
					} else {
						// p(x u y) =( p(x) + p(y) )-( p(x) * p(y) )
						chance =
							chance +
							DATA.rolls /
								(DATA.totalWeight == 0 ?
									1
								:	DATA.totalWeight - DATA.entry.weight) -
							chance *
								(DATA.totalWeight == 0 ?
									1
								:	DATA.totalWeight - DATA.entry.weight);
					}
				}
				if (DATA.entry.functions) {
					for (const func of DATA.entry.functions) {
						if (func.function != "set_count") continue;

						if ((DATA.totalWeight = DATA.rolls)) {
							minAmount += func.count?.min ?? 0;
							maxAmount += func.count?.max ?? 0;
						}
					}
				} else {
					if ((DATA.totalWeight = DATA.rolls)) {
						minAmount += 1;
						maxAmount += 1;
					}
				}
			}
			currentPool++;
		}
		if (BLOCK_FILE["minecraft:block"].components["poke_pfe:fortune"])
			fortune = true;

		file = `${file}<tr><td><img src="${GetImageLink(ITEM.origin)}" alt="" data-size="line"> <a href="${GetWikiPagePath(item.identifier, ITEM.origin)}">${GetDisplayNameByIdentifier(ITEM.origin)}</a></td><td>${minAmount == maxAmount ? minAmount : minAmount + " - " + maxAmount}</td><td>${fortune}</td></tr>`;
		//<td>${chance != 0 ? (chance * 100).toFixed(3) : chance}%</td>
	}
	//End Table:
	file = `${file}</tbody></table>\n`;
	//End Tab
	file = `${file}\n{% endtab %}\n`;
	return file;
}

function CreateStonecuttingRecipe(
	file: string,
	RECIPE: BPRecipeFile,
	item: IndexItem,
) {
	/* ex:
		{% tab title="Stonecutting" %}
		<figure><img src="https://minecraft.wiki/images/Stonecutter_JE2_BE1.gif?bb269" alt=""><figcaption><p>Cut with the<br><a href="https://minecraft.wiki/w/Stonecutter">Stonecutter</a></p></figcaption></figure>
	  
		<table><thead><tr><th>Input</th><th>Output</th><th data-type="number">Amount</th></tr></thead><tbody><tr><td><img src="${IMAGE LINK}" alt="" data-size="line"> <a href="${PATH TO BLOCK}">${INGREDIENT NAME}</a></td><td><img src="${IMAGE OF RESULT BLOCK}" alt="" data-size="line"> ${RESULT ITEM NAME}</td><td>${RESULTING AMOUNT}</td></tr></tbody></table>
		{% endtab %}
		*/
	const SHAPELESS_RECIPE = RECIPE["minecraft:recipe_shapeless"];
	if (!SHAPELESS_RECIPE) return file;
	//Start Tab:
	file = `${file}\n{% tab title="Stonecutting" %}\n<figure><img src="https://minecraft.wiki/images/Stonecutter_JE2_BE1.gif?bb269" alt=""><figcaption><p>Cut with the<br><a href="https://minecraft.wiki/w/Stonecutter">Stonecutter</a></p></figcaption></figure>\n`;

	//Add Recipe Details:

	file = `${file}\n<table><thead><tr><th>Input</th><th>Output</th><th data-type="number">Amount</th></tr></thead><tbody><tr><td><img src="${GetImageLink(SHAPELESS_RECIPE.ingredients.at(0)?.item ?? "MISSING")}" alt="" data-size="line"> <a href="${GetWikiPagePath(item.identifier, SHAPELESS_RECIPE.ingredients.at(0)?.item ?? "")}">${GetDisplayNameByIdentifier(SHAPELESS_RECIPE.ingredients.at(0)?.item ?? "")}</a></td><td><img src="${GetImageLink(SHAPELESS_RECIPE.result.item)}" alt="" data-size="line"> ${GetDisplayNameByIdentifier(item.identifier)}</td><td>${SHAPELESS_RECIPE.result.count ?? 1}</td></tr></tbody></table>\n`;
	//End Tab:
	file = `${file}\n{% endtab %}`;

	return file;
}

function CreateFurnaceRecipe(
	file: string,
	RECIPE_FILE: BPRecipeFile,
	item: IndexItem,
) {
	/* 

<table><thead><tr><th>Input</th><th>Output</th><th data-type="number">Amount</th></tr></thead><tbody><tr><td><img src="${INPUT IMAGE}" alt="${INPUT NAME}." data-size="line"> <a href="${INPUT PAGE}">${INPUT NAME}</a></td><td><img src="${OUTPUT IMAGE}" alt="${OUTPUT NAME}." data-size="line"> ${OUTPUT NAME}</td><td>${AMOUNT}</td></tr></tbody></table>
	*/
	const FURNACE_RECIPE = RECIPE_FILE["minecraft:recipe_furnace"];
	const FURNACE_ICON = `<figure><img src="https://minecraft.wiki/images/Lit_Furnace_(S).gif?40e71" alt="Furnace."><figcaption><p>Smelted in a <a href="https://minecraft.wiki/w/Furnace">Furnace</a></p></figcaption></figure>`;
	const BLAST_FURNACE_ICON = `<figure><img src="https://minecraft.wiki/images/thumb/Lit_Blast_Furnace_JE1.gif/150px-Lit_Blast_Furnace_JE1.gif?dc6a7" alt="Blast Furnace."><figcaption><p>Smelted in a <a href="https://minecraft.wiki/w/Blast_Furnace">Blast Furnace</a></p></figcaption></figure>`;
	const SMOKER_ICON = `<figure><img src="https://minecraft.wiki/images/Lit_Smoker_%28S%29_BE2.gif?251ca" alt="Smoker."><figcaption><p>Smoked in a <a href="https://minecraft.wiki/w/Smoker}">Smoker</a></p></figcaption></figure>`;
	const CAMPFIRE_ICON = `<figure><img src="https://minecraft.wiki/images/Campfire_%28S%29_JE2_BE2.gif?742be" alt="Campfire."><figcaption><p>Cooked on a <a href="https://minecraft.wiki/w/Campfire">Campfire</a></p></figcaption></figure>`;
	const SOUL_CAMPFIRE_ICON = `<figure><img src="https://minecraft.wiki/images/Soul_Campfire_JE1_BE1.gif?bf4a7" alt="Soul Campfire."><figcaption><p>Cooked on a <a href="https://minecraft.wiki/w/Soul_Campfire">Soul Campfire</a></p></figcaption></figure>`;

	let iconCount = 0;
	if (!FURNACE_RECIPE) return file;
	let isFurnace = FURNACE_RECIPE.tags.includes("furnace");
	let isBlastFurnace = FURNACE_RECIPE.tags.includes("blast_furnace");
	let isSmoker = FURNACE_RECIPE.tags.includes("smoker");
	let isCampfire = FURNACE_RECIPE.tags.includes("campfire");
	let isSoulCampfire = FURNACE_RECIPE.tags.includes("soul_campfire");

	//Start Tab:
	file = `${file}\n{% tab title="Smelting" %}\n`;
	//Add Images:
	file = `${file}\n<div>`;
	if (isFurnace) {
		file = `${file}${FURNACE_ICON}`;
		iconCount++;
	}
	if (isBlastFurnace) {
		file = `${file}${iconCount > 0 ? " " : ""}${BLAST_FURNACE_ICON}`;
		iconCount++;
	}
	if (isSmoker) {
		file = `${file}${iconCount > 0 ? " " : ""}${SMOKER_ICON}`;
		iconCount++;
	}
	if (isCampfire) {
		file = `${file}${iconCount > 0 ? " " : ""}${CAMPFIRE_ICON}`;
		iconCount++;
	}
	if (isSoulCampfire) {
		file = `${file}${iconCount > 0 ? " " : ""}${SOUL_CAMPFIRE_ICON}`;
		iconCount++;
	}
	file = `${file}</div>\n`;
	//Add Recipe Details:

	file = `${file}\n<table><thead><tr><th>Input</th><th>Output</th><th data-type="number">Amount</th></tr></thead><tbody><tr><td><img src="${GetImageLink(FURNACE_RECIPE.input)}" alt="${GetDisplayNameByIdentifier(FURNACE_RECIPE.input)}." data-size="line"> <a href="${GetWikiPagePath(typeof FURNACE_RECIPE.output == "string" ? FURNACE_RECIPE.output : FURNACE_RECIPE.output.item, FURNACE_RECIPE.input)}">${GetDisplayNameByIdentifier(FURNACE_RECIPE.input)}</a></td><td><img src="${GetImageLink(typeof FURNACE_RECIPE.output == "string" ? FURNACE_RECIPE.output : FURNACE_RECIPE.output.item)}" alt="${GetDisplayNameByIdentifier(typeof FURNACE_RECIPE.output == "string" ? FURNACE_RECIPE.output : FURNACE_RECIPE.output.item)}." data-size="line"> ${GetDisplayNameByIdentifier(typeof FURNACE_RECIPE.output == "string" ? FURNACE_RECIPE.output : FURNACE_RECIPE.output.item)}</td><td>${typeof FURNACE_RECIPE.output == "string" ? 1 : (FURNACE_RECIPE.output.count ?? 1)}</td></tr></tbody></table>\n`;
	//End Tab:
	file = `${file}\n{% endtab %}\n`;
	/*
file = `${file}\n<table><thead><tr><th>Input</th><th>Output</th><th data-type="number">Amount</th></tr></thead><tbody><tr><td><img src="${GetImageLink(SHAPELESS_RECIPE.ingredients.at(0)?.item ?? "MISSING")}" alt="" data-size="line"> <a href="${GetWikiPagePath(item.identifier, SHAPELESS_RECIPE.ingredients.at(0)?.item ?? "")}">${GetDisplayNameByIdentifier(SHAPELESS_RECIPE.ingredients.at(0)?.item ?? "")}</a></td><td><img src="${GetImageLink(SHAPELESS_RECIPE.result.item)}" alt="" data-size="line"> ${GetDisplayNameByIdentifier(item.identifier)}</td><td>${SHAPELESS_RECIPE.result.count ?? 1}</td></tr></tbody></table>\n`;
*/
	return file;
}

function MakeObtainingSection(file: string, item: IndexItem) {
	if (item.components.recipes.length == 0) return file;
	file = `${file}\n## <img src="https://minecraft.wiki/images/thumb/Crafting_Table_JE4_BE3.png/150px-Crafting_Table_JE4_BE3.png?5767f" alt="" data-size="line"> Obtaining: <a href="#obtaining" id="obtaining"></a>\n\n{% tabs %}\n`;
	for (const recipe of item.components.recipes ?? []) {
		const RECIPE_FILE: BPRecipeFile = JSON.parse(
			readFileSync(`${recipe}`, { encoding: "utf8" }),
		);
		if (RECIPE_FILE["minecraft:recipe_shaped"]) {
			for (const tag of RECIPE_FILE["minecraft:recipe_shaped"].tags) {
				if (tag == "crafting_table") {
					file = CreateShapedRecipe(file, RECIPE_FILE, item);
				}
			}
		}
		if (RECIPE_FILE["minecraft:recipe_shapeless"]) {
			for (const tag of RECIPE_FILE["minecraft:recipe_shapeless"].tags) {
				if (tag == "stonecutter") {
					file = CreateStonecuttingRecipe(file, RECIPE_FILE, item);
				}
			}
		}
		if (RECIPE_FILE["minecraft:recipe_furnace"]) {
			for (const tag of RECIPE_FILE["minecraft:recipe_furnace"].tags) {
				if (tag == "furnace") {
					file = CreateFurnaceRecipe(file, RECIPE_FILE, item);
				}
			}
		}
	}
	if (item.components.in_loot_tables) {
		file = CreateBlockDrop(file, item);
	}
	//End Tabs
	file = `${file}\n{% endtabs %}\n`;
	return file;
}

function CreateShapedRecipe(
	file: string,
	RECIPE: BPRecipeFile,
	ITEM: IndexItem,
) {
	const SHAPED_RECIPE = RECIPE["minecraft:recipe_shaped"];
	if (!SHAPED_RECIPE) return file;
	const RECIPE_PATTERN = SHAPED_RECIPE.pattern;
	const RECIPE_SIZE = {
		length: GetMaxLengthOfStringSet(RECIPE_PATTERN),
		width: RECIPE_PATTERN.length,
	};
	// Start Tab
	file = `${file}\n{% tab title="Crafting" %}\n`;

	// Add Image:
	file = `${file}\n<figure><img src="https://minecraft.wiki/images/thumb/Crafting_Table_JE4_BE3.png/150px-Crafting_Table_JE4_BE3.png?5767f" alt=""><figcaption><p>Crafted in the<br><a href="https://minecraft.wiki/w/Crafting_Table">Crafting Table</a></p></figcaption></figure>\n`;

	//Add Table top
	switch (RECIPE_SIZE.length) {
		case 3: {
			file = `${file}\n||||\n| :-: | :-: | :-: |\n`;
			break;
		}
		case 2: {
			file = `${file}\n|||\n| :-: | :-: |\n`;
			break;
		}
		case 1: {
			file = `${file}\n||\n| :-: |\n`;
			break;
		}
	}
	//Add Table pieces:
	let table: string[] = [];
	let item1 = GetIdentifierFromShapedPattern(
		SHAPED_RECIPE,
		{ x: 1, y: 1 },
		RECIPE_SIZE,
	);
	let item2 = GetIdentifierFromShapedPattern(
		SHAPED_RECIPE,
		{ x: 2, y: 1 },
		RECIPE_SIZE,
	);
	let item3 = GetIdentifierFromShapedPattern(
		SHAPED_RECIPE,
		{ x: 3, y: 1 },
		RECIPE_SIZE,
	);
	let item4 = GetIdentifierFromShapedPattern(
		SHAPED_RECIPE,
		{ x: 1, y: 2 },
		RECIPE_SIZE,
	);
	let item5 = GetIdentifierFromShapedPattern(
		SHAPED_RECIPE,
		{ x: 2, y: 2 },
		RECIPE_SIZE,
	);
	let item6 = GetIdentifierFromShapedPattern(
		SHAPED_RECIPE,
		{ x: 3, y: 2 },
		RECIPE_SIZE,
	);
	let item7 = GetIdentifierFromShapedPattern(
		SHAPED_RECIPE,
		{ x: 1, y: 3 },
		RECIPE_SIZE,
	);
	let item8 = GetIdentifierFromShapedPattern(
		SHAPED_RECIPE,
		{ x: 2, y: 3 },
		RECIPE_SIZE,
	);
	let item9 = GetIdentifierFromShapedPattern(
		SHAPED_RECIPE,
		{ x: 3, y: 3 },
		RECIPE_SIZE,
	);
	switch (RECIPE_SIZE.width) {
		case 3: {
			table = ["|"];
			switch (RECIPE_SIZE.length) {
				case 3: {
					table = table.with(
						0,
						`| ![](${GetImageLink(item9 ?? "EMPTY")}) ${table.at(0)}`,
					);
				}
				case 2: {
					table = table.with(
						0,
						`| ![](${GetImageLink(item8 ?? "EMPTY")}) ${table.at(0)}`,
					);
				}
				case 1: {
					table = table.with(
						0,
						`| ![](${GetImageLink(item7 ?? "EMPTY")}) ${table.at(0)}`,
					);
				}
			}
		}
		case 2: {
			if (table.length == 1) {
				table = ["|\n"].concat(table);
			} else table = ["|"];

			switch (RECIPE_SIZE.length) {
				case 3: {
					table = table.with(
						0,
						`| ![](${GetImageLink(item6 ?? "EMPTY")}) ${table.at(0)}`,
					);
				}
				case 2: {
					table = table.with(
						0,
						`| ![](${GetImageLink(item5 ?? "EMPTY")}) ${table.at(0)}`,
					);
				}
				case 1: {
					table = table.with(
						0,
						`| ![](${GetImageLink(item4 ?? "EMPTY")}) ${table.at(0)}`,
					);
				}
			}
		}
		case 1: {
			if (table.length == 1 || 2) {
				table = ["|\n"].concat(table);
			} else table = ["|"];

			switch (RECIPE_SIZE.length) {
				case 3: {
					table = table.with(
						0,
						`| ![](${GetImageLink(item3 ?? "EMPTY")}) ${table.at(0)}`,
					);
				}
				case 2: {
					table = table.with(
						0,
						`| ![](${GetImageLink(item2 ?? "EMPTY")}) ${table.at(0)}`,
					);
				}
				case 1: {
					table = table.with(
						0,
						`| ![](${GetImageLink(item1 ?? "EMPTY")}) ${table.at(0)}`,
					);
				}
			}
		}
	}
	for (const piece of table) {
		file = `${file}${piece}`;
	}

	// Make Items:
	file = `${file}\n\nItems:\n`;
	const RECIPE_ITEMS = [
		item1,
		item2,
		item3,
		item4,
		item5,
		item6,
		item7,
		item8,
		item9,
	];
	const ITEM_COUNTS = GetCountOfEachItem(RECIPE_ITEMS);
	for (const item of ITEM_COUNTS) {
		file = `${file}\n* ${item.count !== 1 ? `${item.count}x` : ""} <img src="${GetImageLink(item.value)}" alt="" data-size="line"> ${GetWikiPagePath(ITEM.identifier, item.value) !== "" ? "[" + GetDisplayNameByIdentifier(item.value) + "](" + GetWikiPagePath(ITEM.identifier, item.value) + ")" : GetDisplayNameByIdentifier(item.value)}\n`;
	}
	// Make Outputs:

	file = `${file}\nOutputs:\n`;

	file = `${file}\n*${!SHAPED_RECIPE.result.count || SHAPED_RECIPE.result.count > 1 ? " " : ` ${SHAPED_RECIPE.result.count}x`} <img src="${GetImageLink(SHAPED_RECIPE.result.item)}" alt="" data-size="line"> ${GetWikiPagePath(ITEM.identifier, SHAPED_RECIPE.result.item) !== "" ? "[" + GetDisplayNameByIdentifier(SHAPED_RECIPE.result.item) + "](" + GetWikiPagePath(ITEM.identifier, SHAPED_RECIPE.result.item) + ")" : GetDisplayNameByIdentifier(SHAPED_RECIPE.result.item)}\n`;

	// Make Unlock:
	file = `${file}\nRecipe can be unlocked with:\n`;
	for (const item of SHAPED_RECIPE.unlock) {
		if (!item.item) continue;
		file = `${file}\n* <img src="${GetImageLink(item.item)}" alt="" data-size="line"> ${GetWikiPagePath(ITEM.identifier, item.item) !== "" ? "[" + GetDisplayNameByIdentifier(item.item) + "](" + GetWikiPagePath(ITEM.identifier, item.item) + ")" : GetDisplayNameByIdentifier(item.item)}\n`;
	}

	//End Tab:
	file = `${file}\n{% endtab %}\n`;
	return file;
}

function GetIdentifierFromShapedPattern(
	SHAPED_RECIPE: BPRecipeFile["minecraft:recipe_shaped"],
	location: { x: number; y: number },
	RECIPE_SIZE: { length: number; width: number },
) {
	if (!SHAPED_RECIPE) return;
	let keyVal =
		SHAPED_RECIPE.pattern.at(location.y - 1)?.at(location.x - 1) ?? " ";
	if (
		RECIPE_SIZE.length <
		Number(SHAPED_RECIPE.pattern.at(location.y - 1)?.length ?? 0)
	) {
		keyVal = " ";
	}

	if (!keyVal || keyVal == " ") {
		return undefined;
	}
	const KEYS = SHAPED_RECIPE.key;

	return KEYS[keyVal].item;
}
