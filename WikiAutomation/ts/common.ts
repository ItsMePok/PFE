import { readdirSync, readFileSync } from "node:fs";
import {
	type BPBlockJSON,
	type BPItemJSON,
	type IndexItem,
	type MCIndexFile,
} from "./types.ts";
import {
	LANG_FILE,
	MC_INDEX_FILE,
	NAMESPACE,
	TEXTURE_INDEX,
} from "./consts.ts";
import index from "../index.json" with { type: "json" };
import path from "node:path";

export {
	GetAllFilesInDirectory,
	FindItemByIdentifier,
	GetBlockFile,
	GetCountOfEachItem,
	GetDisplayNameByIdentifier,
	GetImageLink,
	GetItemFile,
	GetMaxLengthOfStringSet,
	GetMinecraftIndex,
	GetWikiPage,
	GetWikiPagePath,
	IsMinecraftIdentifier,
};

function GetAllFilesInDirectory(directory: string) {
	let directories = readdirSync(directory, {
		encoding: "utf8",
		withFileTypes: true,
	});
	let files = [];
	while (directories.length > 0) {
		for (const item of directories) {
			if (item.isFile()) {
				files.push(item);
			} else {
				directories = directories.concat(
					readdirSync(`${item.parentPath}${item.name}/`, {
						encoding: "utf8",
						withFileTypes: true,
					}),
				);
			}
			directories.shift();
		}
	}
	return files;
}

function GetBlockFile(item: IndexItem) {
	return JSON.parse(
		readFileSync(`${item.components.block_file_path}`, { encoding: "utf8" }),
	) as BPBlockJSON;
}

function GetItemFile(item: IndexItem) {
	return JSON.parse(
		readFileSync(`${item.components.item_file_path}`, { encoding: "utf8" }),
	) as BPItemJSON;
}

function GetImageLink(identifier?: string) {
	if (!identifier) return TEXTURE_INDEX["EMPTY"];
	let path = "";
	const PREFIX = identifier?.split(":").at(0);
	if (
		!(
			identifier?.includes(NAMESPACE) ||
			identifier?.includes("minecraft") ||
			identifier == "EMPTY"
		)
	) {
		console.error("NO PREFIX");
	}
	if (PREFIX == "minecraft") {
		const OBJECT: MCIndexFile[string] =
			MC_INDEX_FILE[identifier?.replace("'", "") ?? ""];
		return OBJECT.icon;
	}
	if (identifier?.includes(NAMESPACE)) {
		path = TEXTURE_INDEX[identifier.replace(`${NAMESPACE}:`, "")];
	} else {
		return TEXTURE_INDEX["MISSING"];
	}
	if (path) {
		if (path == "%WM") {
			path = `https://github.com/ItsMePok/PFE/blob/wikiAssets/wikiMain/${path.replace("%WM", identifier.replace(`${NAMESPACE}:`, ""))}.png?raw=true`;
		}
		if (path == "%BR") {
			path = `https://github.com/ItsMePok/PFE/blob/wikiAssets/blockRenders/${path.replace("%BR", GetDisplayNameByIdentifier(identifier)?.replace(/ /g, "") ?? "")}.png?raw=true`;
		}
		if (path.includes("%BR:")) {
			path = `https://github.com/ItsMePok/PFE/blob/wikiAssets/blockRenders/${path.replace("%BR:", "")}.png?raw=true`;
		}
	}

	if (path == "" || undefined) {
		path = TEXTURE_INDEX["MISSING"];
	}

	return path;
}

function FindItemByIdentifier(identifier: string) {
	for (const data of index.index) {
		if (data.identifier == identifier) {
			return data as IndexItem;
		}
		continue;
	}
	return undefined;
}

function GetWikiPage(identifier: string) {
	if (IsMinecraftIdentifier(identifier)) {
		return GetMinecraftIndex(identifier).wiki_page;
	}
	return FindItemByIdentifier(identifier)?.wiki_page;
}

function IsMinecraftIdentifier(identifier: string) {
	return identifier.split(":").at(0) == "minecraft";
}

function GetMinecraftIndex(identifier: string) {
	return MC_INDEX_FILE[identifier];
}

function GetWikiPagePath(identifier1: string, identifier2: string) {
	const FROM_PAGE = GetWikiPage(identifier1) ?? "";
	const TO_PAGE = GetWikiPage(identifier2 ?? "") ?? "";
	if (!TO_PAGE) return "";
	if (IsMinecraftIdentifier(identifier2 ?? "")) {
		return TO_PAGE;
	}
	const FROM_DIR = path.dirname(path.normalize(FROM_PAGE));
	let isPage: string = path.relative(FROM_DIR, path.normalize(TO_PAGE));

	return isPage;
}

function GetDisplayNameByIdentifier(identifier: string) {
	const ITEM = FindItemByIdentifier(identifier);
	if (ITEM?.components.name) return ITEM.components.name;

	if (IsMinecraftIdentifier(identifier)) {
		return GetMinecraftIndex(identifier).name;
	}

	let namePos = LANG_FILE.search(
		`${NAMESPACE}.${identifier.replace(`${NAMESPACE}:`, "")}=`,
	);
	let name = LANG_FILE.substring(namePos)
		.split("\n", 1)
		.at(0)
		?.replace(`${NAMESPACE}.${identifier.replace(`${NAMESPACE}:`, "")}=`, "")
		.replace("\r", "");
	if (name?.includes("pack.name")) return `ERROR (${identifier})`;
	return name;
}

function GetCountOfEachItem(items: any[]) {
	let final: { value: any; count: number }[] = [];
	let currentEntries: any[] = [];
	for (const item of items) {
		if (item === undefined) continue;
		if (currentEntries.includes(item)) {
			final.forEach((data) => {
				if (data.value == item) {
					data.count++;
				}
			});
		} else {
			final.push({ value: item, count: 1 });
			currentEntries.push(item);
		}
	}
	return final;
}

function GetMaxLengthOfStringSet(set: string[]) {
	let max = 1;
	for (const string of set) {
		if (string?.length == 3) return 3;
		if (string?.length == 2) max = 2;
	}
	return max;
}
