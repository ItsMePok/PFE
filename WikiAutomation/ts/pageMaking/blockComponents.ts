export { MakeDestroySpeed, MakeNoteSound, MakeMapColor };
import index from "../../index.json" with { type: "json" };
import { GetBlockFile } from "../common.ts";
import { NOTE_SOUND } from "../consts.ts";
import { type IndexItem } from "../types.ts";

function MakeNoteSound(file: string, item: IndexItem) {
	//## <img src="https://minecraft.wiki/images/Note_Block_JE2_BE2.png?0bf0f" alt="" data-size="line"> Note Sound: <mark style="color:yellow;">Bass Drum</mark>

	if (!item.components.block_file_path) return file;
	const BLOCK_FILE = GetBlockFile(item);
	const NOTE_COMPONENT =
		BLOCK_FILE["minecraft:block"].components["minecraft:instrument_sound"];
	let sound = NOTE_SOUND["note.bd"];
	if (NOTE_COMPONENT?.up) {
		sound = NOTE_SOUND[NOTE_COMPONENT.up];
	}
	file = `${file}\n## <img src="https://minecraft.wiki/images/Note_Block_JE2_BE2.png?0bf0f" alt="" data-size="line"> Note Sound: <mark style="color:yellow;">${sound}</mark>\n`;
	return file;
}

function MakeDestroySpeed(file: string, item: IndexItem) {
	if (item.components.type != "block") return file;
	const BlockFile = GetBlockFile(item);
	let preferredTool = "";
	let preferredBreakSpeed = 0;
	let normalBreakSpeed = 0;
	/*EX:

* &#x20;Time to break with preferred tool [<mark style="color:$info;">(baseline)</mark>](#user-content-fn-1)[^1]: <mark style="color:yellow;">1 second</mark>
* Time to break by hand: <mark style="color:yellow;">5½ seconds</mark>
    */

	if (
		BlockFile["minecraft:block"].components[
			"minecraft:destructible_by_mining"
		] === undefined
	)
		return file;

	const MINING_COMPONENT =
		BlockFile["minecraft:block"].components["minecraft:destructible_by_mining"];
	const PER_ITEM_SPEED = MINING_COMPONENT.item_specific_speeds?.at(0);

	if (PER_ITEM_SPEED) {
		const MINING_TAGS = PER_ITEM_SPEED.item.tags;

		preferredBreakSpeed = PER_ITEM_SPEED.destroy_speed;

		if (MINING_TAGS.includes("minecraft:is_pickaxe")) {
			if (preferredTool) {
				preferredTool = `${preferredTool}/Pickaxe`;
			}
			preferredTool = "Pickaxe";
		}
		if (MINING_TAGS.includes("minecraft:is_axe")) {
			if (preferredTool) {
				preferredTool = `${preferredTool}/Axe`;
			}
			preferredTool = "Axe";
		}
		if (MINING_TAGS.includes("minecraft:is_sword")) {
			if (preferredTool) {
				preferredTool = `${preferredTool}/Sword`;
			}
			preferredTool = "Sword";
		}
		if (MINING_TAGS.includes("minecraft:is_shovel")) {
			if (preferredTool) {
				preferredTool = `${preferredTool}/Shovel`;
			}
			preferredTool = "Shovel";
		}
		if (MINING_TAGS.includes("minecraft:is_hoe")) {
			if (preferredTool) {
				preferredTool = `${preferredTool}/Hoe`;
			}
			preferredTool = "Hoe";
		}
	}

	normalBreakSpeed = MINING_COMPONENT.seconds_to_destroy;

	//Write to file:
	file = `${file}\n## <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/MiscIcons/BlockBreak.png?raw=true" alt="" data-size="line"> Preferred Tool: <mark style="color:yellow;">${preferredTool ? preferredTool : "ERROR"}</mark>\n\n* &#x20;Time to break with preferred tool (baseline): <mark style="color:yellow;">${preferredBreakSpeed}${preferredBreakSpeed <= 0 ? "" : preferredBreakSpeed == 1 ? " second" : " seconds"}</mark>\n* Time to break by hand: <mark style="color:yellow;">${normalBreakSpeed}${normalBreakSpeed <= 0 ? "" : normalBreakSpeed == 1 ? " second" : " seconds"}</mark>\n`;
	return file;
}

function MakeMapColor(file: string, item: IndexItem) {
	if (item.components.type != "block") return file;
	const BlockFile = GetBlockFile(item);

	//## <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/wikiMain/waypointRed.png?raw=true" alt="" data-size="line"> Map Color: <mark style="color:yellow;">${HEX CODE}</mark> <mark style="color:$info;">(hex)</mark>
	let hex = "#FFFFFF";
	hex = BlockFile["minecraft:block"].components["minecraft:map_color"] ?? hex;
	file = `${file}\n## <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/wikiMain/waypointRed.png?raw=true" alt="" data-size="line"> Map Color: <mark style="color:yellow;">${hex}</mark> <mark style="color:$info;">(hex)</mark>\n`;
	return file;
}
