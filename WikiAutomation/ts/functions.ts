import { LANG_FILE, MC_INDEX_FILE, NAMESPACE, NOTE_SOUND, TEXTURE_INDEX } from "./consts.ts";
import { type MCIndexFile, type BPBlockJSON, type BPRecipeFile, type IndexItem, type BPItemJSON } from "./types.ts";
import index from "../index.json" with {type: 'json'};
import path from "path";
import { readFileSync } from "fs";

export {
    CreateShapedRecipe,
    CreateStonecuttingRecipe,
    FindItemByIdentifier,
    GetCountOfEachItem,
    GetDisplayNameByIdentifier,
    GetIdentifierFromShapedPattern,
    GetImageLink,
    GetMaxLengthOfStringSet,
    GetWikiPagePath,
    MakeIdentifierSection,
    MakeObtainingSection,
    MakeStackSize,
    MakeMapColor,
    GetBlockFile,
    MakeDestroySpeed,
    MakeRarity,
    GetMinecraftIndex,
    GetWikiPage,
    IsMinecraftIdentifier,
    MakeNoteSound


}

function MakeNoteSound(file: string, item: typeof index.index[number]) {
    //## <img src="https://minecraft.wiki/images/Note_Block_JE2_BE2.png?0bf0f" alt="" data-size="line"> Note Sound: <mark style="color:yellow;">Bass Drum</mark>

    if (!item.components.block_file_path) return file;
    const BLOCK_FILE = GetBlockFile(item)
    const NOTE_COMPONENT = BLOCK_FILE["minecraft:block"].components["minecraft:instrument_sound"]
    let sound = NOTE_SOUND["note.bd"]
    if (NOTE_COMPONENT?.up) {
        sound = NOTE_SOUND[NOTE_COMPONENT.up]
    }
    file = `${file}\n## <img src="https://minecraft.wiki/images/Note_Block_JE2_BE2.png?0bf0f" alt="" data-size="line"> Note Sound: <mark style="color:yellow;">${sound}</mark>\n`
    return file;
}

function MakeRarity(file: string, item: typeof index.index[number]) {
    //Default to common if rarity component is non-existent (ex on a block with not block item)
    if (!item.components.item_file_path) {
        file = `${file}\n## <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/MiscIcons/Rarity.png?raw=true" alt="Rarity." data-size="line"> Rarity: <mark style="color:yellow;">Common</mark> <a href="#rarity" id="rarity"></a>\n`;
    } else {
        const ITEM_FILE = GetItemFile(item);
        let rarity = ITEM_FILE["minecraft:item"].components["minecraft:rarity"] ?? "Common";
        rarity = `${rarity.slice(0, 1).toUpperCase()}${rarity.slice(1)}`
        file = `${file}\n## <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/MiscIcons/Rarity.png?raw=true" alt="Rarity." data-size="line"> Rarity: <mark style="color:yellow;">${rarity}</mark> <a href="#rarity" id="rarity"></a>\n`;

    }
    return file;
}

function MakeDestroySpeed(file: string, item: typeof index.index[number]) {
    if (item.components.type != "block") return file;
    const BlockFile = GetBlockFile(item);
    let preferredTool = ""
    let preferredBreakSpeed = 0;
    let normalBreakSpeed = 0;
    /*EX:

* &#x20;Time to break with preferred tool [<mark style="color:$info;">(baseline)</mark>](#user-content-fn-1)[^1]: <mark style="color:yellow;">1 second</mark>
* Time to break by hand: <mark style="color:yellow;">5½ seconds</mark>
    */

    if (BlockFile["minecraft:block"].components["minecraft:destructible_by_mining"] === undefined) return file;

    const MINING_COMPONENT = BlockFile["minecraft:block"].components["minecraft:destructible_by_mining"];
    const PER_ITEM_SPEED = MINING_COMPONENT.item_specific_speeds?.at(0);

    if (PER_ITEM_SPEED) {
        const MINING_TAGS = PER_ITEM_SPEED.item.tags

        preferredBreakSpeed = PER_ITEM_SPEED.destroy_speed;

        if (MINING_TAGS.includes("minecraft:is_pickaxe")) {
            if (preferredTool) {
                preferredTool = `${preferredTool}/Pickaxe`
            }
            preferredTool = "Pickaxe"
        }
        if (MINING_TAGS.includes("minecraft:is_axe")) {
            if (preferredTool) {
                preferredTool = `${preferredTool}/Axe`
            }
            preferredTool = "Axe"
        }
        if (MINING_TAGS.includes("minecraft:is_sword")) {
            if (preferredTool) {
                preferredTool = `${preferredTool}/Sword`
            }
            preferredTool = "Sword"
        }
        if (MINING_TAGS.includes("minecraft:is_shovel")) {
            if (preferredTool) {
                preferredTool = `${preferredTool}/Shovel`
            }
            preferredTool = "Shovel"
        }
        if (MINING_TAGS.includes("minecraft:is_hoe")) {
            if (preferredTool) {
                preferredTool = `${preferredTool}/Hoe`
            }
            preferredTool = "Hoe"
        }
    }

    normalBreakSpeed = MINING_COMPONENT.seconds_to_destroy;

    //Write to file:
    file = `${file}\n## <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/MiscIcons/BlockBreak.png?raw=true" alt="" data-size="line"> Preferred Tool: <mark style="color:yellow;">${preferredTool ? preferredTool : "ERROR"}</mark>\n\n* &#x20;Time to break with preferred tool (baseline): <mark style="color:yellow;">${preferredBreakSpeed}${preferredBreakSpeed <= 0 ? "" : preferredBreakSpeed == 1 ? " second" : " seconds"}</mark>\n* Time to break by hand: <mark style="color:yellow;">${normalBreakSpeed}${normalBreakSpeed <= 0 ? "" : normalBreakSpeed == 1 ? " second" : " seconds"}</mark>\n`;
    return file;
}

function GetBlockFile(item: typeof index.index[number]) {
    return JSON.parse(readFileSync(`${item.components.block_file_path}`, { encoding: "utf8" })) as BPBlockJSON
}
function GetItemFile(item: typeof index.index[number]) {

    return JSON.parse(readFileSync(`${item.components.item_file_path}`, { encoding: "utf8" })) as BPItemJSON
}
function MakeMapColor(file: string, item: typeof index.index[number]) {
    if (item.components.type != "block") return file;
    const BlockFile = GetBlockFile(item);

    //## <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/wikiMain/waypointRed.png?raw=true" alt="" data-size="line"> Map Color: <mark style="color:yellow;">${HEX CODE}</mark> <mark style="color:$info;">(hex)</mark>
    let hex = "#FFFFFF";
    hex = BlockFile["minecraft:block"].components["minecraft:map_color"] ?? hex
    file = `${file}\n## <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/wikiMain/waypointRed.png?raw=true" alt="" data-size="line"> Map Color: <mark style="color:yellow;">${hex}</mark> <mark style="color:$info;">(hex)</mark>\n`;
    return file;
}

function MakeStackSize(file: string, item: typeof index.index[number]) {
    //## <img src="https://minecraft.wiki/images/Light_Gray_Bundle_JE1_BE1.png?b552e" alt="" data-size="line"> Stack Size: <mark style="color:yellow;">${AMOUNT}</mark> <a href="#stack-size" id="stack-size"></a>
    let amount: number | string = 64;
    if (item.components.item_file_path) {
        const ITEM_FILE = GetItemFile(item);

        amount = ITEM_FILE["minecraft:item"].components["minecraft:max_stack_size"] ?? amount
    }
    file = `${file}\n## <img src="https://minecraft.wiki/images/Light_Gray_Bundle_JE1_BE1.png?b552e" alt="" data-size="line"> Stack Size: <mark style="color:yellow;">${amount}</mark> <a href="#stack-size" id="stack-size"></a>\n`;
    return file;
}

function MakeObtainingSection(file: string, item: typeof index.index[number]) {
    file = `${file}\n## <img src="https://minecraft.wiki/images/thumb/Crafting_Table_JE4_BE3.png/150px-Crafting_Table_JE4_BE3.png?5767f" alt="" data-size="line"> Obtaining: <a href="#obtaining" id="obtaining"></a>\n\n{% tabs %}\n`
    for (const recipe of item.components.recipes ?? []) {
        const RECIPE_FILE: BPRecipeFile = JSON.parse(readFileSync(`${recipe}`, { encoding: "utf8" }));
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

    }
    return file;
}

function MakeIdentifierSection(file: string, item: typeof index.index[number]) {
    if (item.components.type == "block") {
        const BLOCK_FILE = GetBlockFile(item);

        file = `${file}\n## <img src="https://minecraft.wiki/images/Name_Tag_JE3_BE2.png?cbdc1&#x26;format=original" alt="" data-size="line"> Identifier: <mark style="color:yellow;">**${BLOCK_FILE["minecraft:block"].description.identifier.replace(/_/g, '\\_')}**</mark> <a href="#identifier" id="identifier"></a>\n`;

    }
    if (item.components.type == "item") {
        const ITEM_FILE = GetItemFile(item);

        file = `${file}\n## <img src="https://minecraft.wiki/images/Name_Tag_JE3_BE2.png?cbdc1&#x26;format=original" alt="" data-size="line"> Identifier: <mark style="color:yellow;">**${ITEM_FILE["minecraft:item"].description.identifier.replace(/_/g, '\\_')}**</mark> <a href="#identifier" id="identifier"></a>\n`;
    }
    return file;
}

function CreateStonecuttingRecipe(file: string, RECIPE: BPRecipeFile, item: IndexItem) {
    /* ex:
    {% tab title="Stonecutting" %}
    <figure><img src="https://minecraft.wiki/images/Stonecutter_JE2_BE1.gif?bb269" alt=""><figcaption><p>Cut with the<br><a href="https://minecraft.wiki/w/Stonecutter">Stonecutter</a></p></figcaption></figure>
    
    <table><thead><tr><th>Input</th><th>Output</th><th data-type="number">Amount</th></tr></thead><tbody><tr><td><img src="${IMAGE LINK}" alt="" data-size="line"> <a href="${PATH TO BLOCK}">${INGREDIENT NAME}</a></td><td><img src="${IMAGE OF RESULT BLOCK}" alt="" data-size="line"> ${RESULT ITEM NAME}</td><td>${RESULTING AMOUNT}</td></tr></tbody></table>
    {% endtab %}
    */
    const SHAPELESS_RECIPE = RECIPE["minecraft:recipe_shapeless"]
    if (!SHAPELESS_RECIPE) return file
    //Start Tab:
    file = `${file}\n{% tab title="Stonecutting" %}\n<figure><img src="https://minecraft.wiki/images/Stonecutter_JE2_BE1.gif?bb269" alt=""><figcaption><p>Cut with the<br><a href="https://minecraft.wiki/w/Stonecutter">Stonecutter</a></p></figcaption></figure>\n`;

    //Add Recipe Details:
    console.log(JSON.stringify(SHAPELESS_RECIPE.ingredients.at(0)?.item))


    file = `${file}\n<table><thead><tr><th>Input</th><th>Output</th><th data-type="number">Amount</th></tr></thead><tbody><tr><td><img src="${GetImageLink(SHAPELESS_RECIPE.ingredients.at(0)?.item ?? "MISSING")}" alt="" data-size="line"> <a href="${GetWikiPagePath(item.identifier, SHAPELESS_RECIPE.ingredients.at(0)?.item ?? "")}">${GetDisplayNameByIdentifier(SHAPELESS_RECIPE.ingredients.at(0)?.item ?? "")}</a></td><td><img src="${GetImageLink(SHAPELESS_RECIPE.result.item)}" alt="" data-size="line"> ${GetDisplayNameByIdentifier(item.identifier)}</td><td>${SHAPELESS_RECIPE.result.count ?? 1}</td></tr></tbody></table>\n`
    //End Tab:
    file = `${file}\n{% endtab %}`

    return file;
}

function GetImageLink(identifier?: string) {
    console.log("\n" + identifier)

    let path = "";
    const PREFIX = identifier?.split(":").at(0);
    if (PREFIX === "minecraft") {
        const OBJECT: MCIndexFile[string] = MC_INDEX_FILE[identifier?.replace("'", "") ?? ""]
        return OBJECT.icon
    }
    if (identifier) path = TEXTURE_INDEX[identifier.replace(`${NAMESPACE}:`, "")];
    else {
        return TEXTURE_INDEX["MISSING"];
    }
    if (path) {
        if (path == "%WM") {
            path = `https://github.com/ItsMePok/PFE/blob/wikiAssets/wikiMain/${path.replace("%WM", identifier.replace(`${NAMESPACE}:`, ""))}.png?raw=true`;
        };
        if (path == "%BR") {
            path = `https://github.com/ItsMePok/PFE/blob/wikiAssets/blockRenders/${path.replace("%BR", GetDisplayNameByIdentifier(identifier)?.replace(/ /g, "") ?? "")}.png?raw=true`;
        };
        if (path.includes("%BR:")) {
            path = `https://github.com/ItsMePok/PFE/blob/wikiAssets/blockRenders/${path.replace("%BR:", '')}.png?raw=true`;
        };
    }

    if (path == "" || undefined) {
        path = TEXTURE_INDEX["MISSING"];
    };

    return path;
}

function FindItemByIdentifier(identifier: string) {
    for (const data of index.index) {
        if (data.identifier == identifier) {
            return data;
        }
        continue;
    };
    return undefined;
};

function GetWikiPage(identifier: string) {
    if (IsMinecraftIdentifier(identifier)) {
        return GetMinecraftIndex(identifier).wiki_page
    }
    return FindItemByIdentifier(identifier)?.wiki_page
}
function IsMinecraftIdentifier(identifier: string) {
    return (identifier.split(":").at(0) == "minecraft")
}

function GetMinecraftIndex(identifier: string) {
    return MC_INDEX_FILE[identifier]
}

function GetWikiPagePath(identifier1: string, identifier2: string) {
    const FROM_PAGE = GetWikiPage(identifier1) ?? ""
    const TO_PAGE = GetWikiPage(identifier2 ?? "") ?? ""
    if (!TO_PAGE) return ""
    if (IsMinecraftIdentifier(identifier2 ?? "")) {
        return TO_PAGE
    }
    const FROM_DIR = path.dirname(path.normalize(FROM_PAGE));
    let isPage: string = path.relative(FROM_DIR, path.normalize(TO_PAGE));

    return isPage;
};

function GetDisplayNameByIdentifier(identifier: string) {
    const ITEM = FindItemByIdentifier(identifier);
    if (ITEM?.components.name) return ITEM.components.name;

    if (IsMinecraftIdentifier(identifier)) {
        return GetMinecraftIndex(identifier).name;
    }

    let namePos = LANG_FILE.search(`${NAMESPACE}.${identifier.replace(`${NAMESPACE}:`, "")}=`);
    let name = LANG_FILE.substring(namePos).split("\n", 1).at(0)?.replace(`${NAMESPACE}.${identifier.replace(`${NAMESPACE}:`, "")}=`, "").replace("\r", "");
    if (name?.includes("pack.name")) return `ERROR (${identifier})`
    console.log([name]);
    return name;

};

function CreateShapedRecipe(file: string, RECIPE: BPRecipeFile, ITEM: IndexItem) {
    const SHAPED_RECIPE = RECIPE["minecraft:recipe_shaped"]
    if (!SHAPED_RECIPE) return file;
    const RECIPE_PATTERN = SHAPED_RECIPE.pattern
    const RECIPE_SIZE = { length: GetMaxLengthOfStringSet(RECIPE_PATTERN), width: RECIPE_PATTERN.length };
    console.log(JSON.stringify(RECIPE_SIZE))
    // Start Tab
    file = `${file}\n{% tab title="Crafting" %}\n`;

    // Add Image:
    file = `${file}\n<figure><img src="https://minecraft.wiki/images/thumb/Crafting_Table_JE4_BE3.png/150px-Crafting_Table_JE4_BE3.png?5767f" alt=""><figcaption><p>Crafted in the<br><a href="https://minecraft.wiki/w/Crafting_Table">Crafting Table</a></p></figcaption></figure>\n`



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
    console.log("Starting Pieces")
    //Add Table pieces:
    let table: string[] = []
    let item1 = GetIdentifierFromShapedPattern(SHAPED_RECIPE, { x: 1, y: 1 }, RECIPE_SIZE);
    let item2 = GetIdentifierFromShapedPattern(SHAPED_RECIPE, { x: 2, y: 1 }, RECIPE_SIZE);
    let item3 = GetIdentifierFromShapedPattern(SHAPED_RECIPE, { x: 3, y: 1 }, RECIPE_SIZE);
    let item4 = GetIdentifierFromShapedPattern(SHAPED_RECIPE, { x: 1, y: 2 }, RECIPE_SIZE);
    let item5 = GetIdentifierFromShapedPattern(SHAPED_RECIPE, { x: 2, y: 2 }, RECIPE_SIZE);
    let item6 = GetIdentifierFromShapedPattern(SHAPED_RECIPE, { x: 3, y: 2 }, RECIPE_SIZE);
    let item7 = GetIdentifierFromShapedPattern(SHAPED_RECIPE, { x: 1, y: 3 }, RECIPE_SIZE);
    let item8 = GetIdentifierFromShapedPattern(SHAPED_RECIPE, { x: 2, y: 3 }, RECIPE_SIZE);
    let item9 = GetIdentifierFromShapedPattern(SHAPED_RECIPE, { x: 3, y: 3 }, RECIPE_SIZE);
    switch (RECIPE_SIZE.width) {
        case 3: {
            table = ["|"]
            switch (RECIPE_SIZE.length) {
                case 3: {
                    table = table.with(0, `| ![](${GetImageLink(item9 ?? "EMPTY")}) ${table.at(0)}`)
                }
                case 2: {
                    table = table.with(0, `| ![](${GetImageLink(item8 ?? "EMPTY")}) ${table.at(0)}`)
                }
                case 1: {
                    table = table.with(0, `| ![](${GetImageLink(item7 ?? "EMPTY")}) ${table.at(0)}`)
                }
            }
        }
        case 2: {
            if (table.length == 1) {
                table = ["|\n"].concat(table)
            } else table = ["|"];

            switch (RECIPE_SIZE.length) {

                case 3: {
                    table = table.with(0, `| ![](${GetImageLink(item6 ?? "EMPTY")}) ${table.at(0)}`)
                }
                case 2: {
                    table = table.with(0, `| ![](${GetImageLink(item5 ?? "EMPTY")}) ${table.at(0)}`)
                }
                case 1: {
                    table = table.with(0, `| ![](${GetImageLink(item4 ?? "EMPTY")}) ${table.at(0)}`)
                }
            }

        }
        case 1: {
            if (table.length == 1 || 2) {
                table = ["|\n"].concat(table)
            } else table = ["|"];

            switch (RECIPE_SIZE.length) {
                case 3: {
                    table = table.with(0, `| ![](${GetImageLink(item3 ?? "EMPTY")}) ${table.at(0)}`)
                }
                case 2: {
                    table = table.with(0, `| ![](${GetImageLink(item2 ?? "EMPTY")}) ${table.at(0)}`)
                }
                case 1: {
                    table = table.with(0, `| ![](${GetImageLink(item1 ?? "EMPTY")}) ${table.at(0)}`)
                }
            }
        }
    }
    for (const piece of table) {
        file = `${file}${piece}`
    }

    // Make Items:
    file = `${file}\n\nItems:\n`
    const RECIPE_ITEMS = [item1, item2, item3, item4, item5, item6, item7, item8, item9]
    const ITEM_COUNTS = GetCountOfEachItem(RECIPE_ITEMS)
    for (const item of ITEM_COUNTS) {
        file = `${file}\n* ${item.count !== 1 ? `${item.count}x` : ""} <img src="${GetImageLink(item.value)}" alt="" data-size="line"> ${GetWikiPagePath(ITEM.identifier, item.value) !== "" ? "[" + GetDisplayNameByIdentifier(item.value) + "](" + GetWikiPagePath(ITEM.identifier, item.value) + ")" : GetDisplayNameByIdentifier(item.value)}\n`
    }
    // Make Outputs:

    file = `${file}\nOutputs:\n`

    file = `${file}\n* ${SHAPED_RECIPE.result.count !== 1 ? `${SHAPED_RECIPE.result.count}x` : ""} <img src="${GetImageLink(SHAPED_RECIPE.result.item)}" alt="" data-size="line"> ${GetWikiPagePath(ITEM.identifier, SHAPED_RECIPE.result.item) !== "" ? "[" + GetDisplayNameByIdentifier(SHAPED_RECIPE.result.item) + "](" + GetWikiPagePath(ITEM.identifier, SHAPED_RECIPE.result.item) + ")" : GetDisplayNameByIdentifier(SHAPED_RECIPE.result.item)}\n`

    // Make Unlock:
    file = `${file}\nRecipe can be unlocked with:\n`
    for (const item of SHAPED_RECIPE.unlock) {
        file = `${file}\n* <img src="${GetImageLink(item.item)}" alt="" data-size="line"> ${GetWikiPagePath(ITEM.identifier, item.item) !== "" ? "[" + GetDisplayNameByIdentifier(item.item) + "](" + GetWikiPagePath(ITEM.identifier, item.item) + ")" : GetDisplayNameByIdentifier(item.item)}\n`
    }


    //End Tab:
    file = `${file}\n{% endtab %}\n`
    return file;

}

function GetMaxLengthOfStringSet(set: string[]) {
    let max = 1
    for (const string of set) {
        if (string?.length == 3) return 3;
        if (string?.length == 2) max = 2;
    }
    return max
}

function GetIdentifierFromShapedPattern(SHAPED_RECIPE: BPRecipeFile["minecraft:recipe_shaped"], location: { x: number, y: number }, RECIPE_SIZE: { length: number, width: number }) {
    if (!SHAPED_RECIPE) return;
    let keyVal = SHAPED_RECIPE.pattern.at(location.y - 1)?.at(location.x - 1) ?? " ";

    if (RECIPE_SIZE.width < Number(SHAPED_RECIPE.pattern.at(location.y - 1)?.length ?? 0)) {
        keyVal = " "
    }


    if (!keyVal || keyVal == " ") {
        return undefined
    }
    const KEYS = SHAPED_RECIPE.key

    return KEYS[keyVal].item
}

function GetCountOfEachItem(items: any[]) {
    let final: { value: any, count: number }[] = []
    let currentEntries: any[] = []
    for (const item of items) {
        if (item === undefined) continue;
        if (currentEntries.includes(item)) {
            final.forEach((data) => {
                if (data.value == item) {
                    data.count++;
                }
            })
        } else {
            final.push({ value: item, count: 1 })
            currentEntries.push(item)
        };
    }
    return final
}