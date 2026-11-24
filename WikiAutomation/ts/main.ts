import index from "../index.json" with { type: "json" };

import { writeFileSync } from "fs";

import { VERSION } from "./consts.ts";
import { type IndexItem, type IndexFile } from "./types.ts";
import { GetDisplayNameByIdentifier, GetImageLink } from "./common.ts";
import { MakeIdentifierSection } from "./pageMaking/commonComponents.ts";
import { MakeRarity, MakeStackSize } from "./pageMaking/itemComponents.ts";
import {
	MakeDestroySpeed,
	MakeMapColor,
	MakeNoteSound,
} from "./pageMaking/blockComponents.ts";
import { MakeObtainingSection } from "./pageMaking/obtainingFunctions.ts";
import {
	AddBlocksToIndex,
	AddItemsToIndex,
	AddRecipesToIndex,
	AddWikiPageToIndex,
} from "./index/indexFunctions.ts";
/*
AddBlocksToIndex(index as IndexFile);
AddItemsToIndex(index as IndexFile);
AddRecipesToIndex(index as IndexFile);
AddWikiPageToIndex(index as IndexFile);
*/
console.log(index.default_info.BP);
/*
FILE STRUCTURE:
---
description: Last updated to match vX.XX.XX
---

TITLE

Main IMAGE

COMPONENTS 

*/

for (let data of index.index) {
	const item = data as unknown as IndexItem;
	if (item.run === false) continue;
	const FILE_LOCATION = `${item}`;
	let file = ``;

	//Make Page Description:
	file = `${file}---\ndescription: Last updated to match v${VERSION}\n---\n`;

	//Make Title:
	file = `${file}\n# ${GetDisplayNameByIdentifier(item.identifier)}\n`;

	//Make main image:
	file = `${file}\n<figure><img src="${GetImageLink(item.identifier)}" alt=""><figcaption></figcaption></figure>\n`;

	//Make Identifier:
	file = MakeIdentifierSection(file, item);

	//Make Rarity:
	file = MakeRarity(file, item);

	//Make Stack Size:
	file = MakeStackSize(file, item);

	// Make Note Sound:
	file = MakeNoteSound(file, item);

	//Make Map Color:
	file = MakeMapColor(file, item);

	//Make Break Info:
	file = MakeDestroySpeed(file, item);

	//Make Obtaining:
	file = MakeObtainingSection(file, item as IndexItem);

	//End Tabs
	file = `${file}\n{% endtabs %}\n`;

	//Add automated disclaimer:
	file = `${file}\nThis page was generated automatically (NOT BY AI). there may be some broken links or improperly formatted information while I continue to develop this tool\n`;
	//Write File:
	writeFileSync(FILE_LOCATION, file, { encoding: "utf8" });
	console.log(FILE_LOCATION);
}
