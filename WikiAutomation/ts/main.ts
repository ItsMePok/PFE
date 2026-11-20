import path from "path";
import index from "../index.json" with {type: 'json'};

import {writeFileSync, readFileSync} from "fs";

console.log (index.default_info.BP);
/*
FILE STRUCTURE:
---
description: Last updated to match vX.XX.XX
---

TITLE

Main IMAGE

COMPONENTS 

*/
const VERSION = "1.3.05"
const NAMESPACE = "poke_pfe"
const TEXTURE_INDEX = JSON.parse(readFileSync(`${"./WikiAutomation/texture_index.json"}`,{encoding:"utf8"}))

type IndexItem = (typeof index.index)[number]
type BPBlockJSON = {
            "minecraft:block":{
                description: {
                    identifier: string;
                }
            }
        } 
type BPRecipeFile = {
    format_version: string
	"minecraft:recipe_shapeless"?: {
		description: {
			identifier: string
		},
		tags: string[],
		ingredients: {item: string}[],
		result: {
			item: string,
            count?: number
		}
	}
}





for (const item of index.index){
    if (item.run === false)continue;
    const FILE_LOCATION = `${item.wiki_page}`
    let file = ``

    //Make Page Description:
    file = `${file}---\ndescription: Last updated to match v${VERSION}\n---\n`;
    //Make Title:
    file = `${file}\n# ${item.components.name}\n`;

    //Make main image:
        file = `${file}\n<figure><img src="${GetImageLink(item.identifier)}" alt=""><figcaption></figcaption></figure>\n`;

    //Make Identifier:
    if (item.components.type == "block"){
        console.log("Checking block file")
        const BlockFile:BPBlockJSON = JSON.parse(readFileSync(`${item.components.block_file_path}`,{encoding:"utf8"}))
        
        file = `${file}\n## <img src="https://minecraft.wiki/images/Name_Tag_JE3_BE2.png?cbdc1&#x26;format=original" alt="" data-size="line"> Identifier: <mark style="color:yellow;">**${BlockFile["minecraft:block"].description.identifier.replace(/_/g,'\\_')}**</mark> <a href="#identifier" id="identifier"></a>\n`;

        console.log(JSON.stringify(BlockFile["minecraft:block"].description.identifier))
    }

    //Make Rarity:
    //TODO: Add parsing of minecraft:rarity component
    if (!item.components.item_file_path){
        file = `${file}\n## <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/MiscIcons/Rarity.png?raw=true" alt="Rarity." data-size="line"> Rarity: <mark style="color:yellow;">Common</mark> <a href="#rarity" id="rarity"></a>\n`;
    }

    //Make Obtaining:
    file = `${file}\n## <img src="https://minecraft.wiki/images/thumb/Crafting_Table_JE4_BE3.png/150px-Crafting_Table_JE4_BE3.png?5767f" alt="" data-size="line"> Obtaining: <a href="#obtaining" id="obtaining"></a>\n\n{% tabs %}`
    for(const recipe of item.components.recipes ?? []){
        const RECIPE_FILE:BPRecipeFile = JSON.parse(readFileSync(`${recipe}`,{encoding:"utf8"}));
        console.log(JSON.stringify(RECIPE_FILE))
        if (RECIPE_FILE["minecraft:recipe_shapeless"]){
            for(const tag of RECIPE_FILE["minecraft:recipe_shapeless"].tags){
                if (tag == "stonecutter"){
                    file = CreateStonecuttingRecipe(file, RECIPE_FILE, item);
                }
            }
        }

    }
    //End Tabs
    file = `${file}\n{% endtabs %}\n`



    //Add automated disclamier:
    file = `${file}\nThis page was generated automatically (NOT BY AI). there may be some broken links or improperly formated information while I continue to develop this tool\n`
    //Write File:
    writeFileSync(FILE_LOCATION,file, {encoding:"utf8"});
    console.log(FILE_LOCATION)
}

function CreateStonecuttingRecipe(file: string, RECIPE: BPRecipeFile, item: IndexItem){
/* ex:
{% tab title="Stonecutting" %}
<figure><img src="https://minecraft.wiki/images/Stonecutter_JE2_BE1.gif?bb269" alt=""><figcaption><p>Cut with the<br><a href="https://minecraft.wiki/w/Stonecutter">Stonecutter</a></p></figcaption></figure>

<table><thead><tr><th>Input</th><th>Output</th><th data-type="number">Amount</th></tr></thead><tbody><tr><td><img src="${IMAGE LINK}" alt="" data-size="line"> <a href="${PATH TO BLOCK}">${INGREDIENT NAME}</a></td><td><img src="${IMAGE OF RESULT BLOCK}" alt="" data-size="line"> ${RESULT ITEM NAME}</td><td>${RESULTING AMOUNT}</td></tr></tbody></table>
{% endtab %}
*/
//Start Tab:
file = `${file}\n{% tab title="Stonecutting" %}\n<figure><img src="https://minecraft.wiki/images/Stonecutter_JE2_BE1.gif?bb269" alt=""><figcaption><p>Cut with the<br><a href="https://minecraft.wiki/w/Stonecutter">Stonecutter</a></p></figcaption></figure>\n`;

//Add Recipe Details:
console.log(JSON.stringify(RECIPE["minecraft:recipe_shapeless"]?.ingredients.at(0)?.item))
let INGREDIENT_ITEM = FindItemByIdentifier(RECIPE["minecraft:recipe_shapeless"]?.ingredients.at(0)?.item ?? "")

file = `${file}\n<table><thead><tr><th>Input</th><th>Output</th><th data-type="number">Amount</th></tr></thead><tbody><tr><td><img src="${GetImageLink(RECIPE["minecraft:recipe_shapeless"]?.ingredients.at(0)?.item ?? "MISSING" )}" alt="" data-size="line"> <a href="${GetWikiPagePath(item.wiki_page,INGREDIENT_ITEM?.wiki_page ?? "")}">${FindItemByIdentifier(RECIPE["minecraft:recipe_shapeless"]?.ingredients.at(0)?.item ?? "")?.components.name}</a></td><td><img src="${GetImageLink(RECIPE["minecraft:recipe_shapeless"]?.result.item)}" alt="" data-size="line"> ${item.components.name}</td><td>${RECIPE["minecraft:recipe_shapeless"]?.result.count ?? 1}</td></tr></tbody></table>\n`
//End Tab:
file = `${file}\n{% endtab %}`

return file;
}

function GetImageLink(identifier?:string){
    console.log("\n"+identifier)
    let path = "";
    if (identifier)path = TEXTURE_INDEX[identifier.replace(`${NAMESPACE}:`,"")];
    if (path){
        if (path.includes("%BR:")){
            path = `https://github.com/ItsMePok/PFE/blob/wikiAssets/blockRenders/${path.replace("%BR:",'')}.png?raw=true`;
        }
    }
   
    if (path == "" || undefined){
        path = TEXTURE_INDEX["MISSING"]
    }
    
    return path
}

function FindItemByIdentifier(identifier:string){
    for (const data of index.index){
        if (data.identifier == identifier){
            return data
        }
        continue
    }
    return undefined;
}

function GetWikiPagePath(fromPage:string,toPage:string){
    const FROM_DIR = path.dirname(path.normalize(fromPage));

    let isPage:string = path.relative(FROM_DIR,path.normalize(toPage))
    console.log(`The path between:\n- ${fromPage}\n - ${toPage}\n is:\n- ${isPage}`)

    return isPage;
}