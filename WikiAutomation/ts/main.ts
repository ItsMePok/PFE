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
const LANG_FILE_ID = "en_US"
const LANG_FILE_PATH = `./WikiAutomation/PFE/resource_packs/pfe/texts/${LANG_FILE_ID}.lang`
const LANG_FILE = readFileSync(`${LANG_FILE_PATH}`,{encoding:"utf8"})
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
    "minecraft:recipe_shaped"?:{
        "description": {
            "identifier": string//Recipe Identifier
        },
        "assume_symmetry": boolean,
        "tags": string[],
        "group": string,
        "unlock": [
            {
                "item": string //Item/Block Identifier
            }
         ],
        "pattern": string[],
    "key": {
        [key:string]: {
            "item": string //Item/Block Identifier
        }
    },
    "result": {
      "item": string, //Identifier
      "count": number
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
    file = `${file}\n# ${GetDisplayNameByIdentifier(item.identifier)}\n`;

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
    file = `${file}\n## <img src="https://minecraft.wiki/images/thumb/Crafting_Table_JE4_BE3.png/150px-Crafting_Table_JE4_BE3.png?5767f" alt="" data-size="line"> Obtaining: <a href="#obtaining" id="obtaining"></a>\n\n{% tabs %}\n`
    for(const recipe of item.components.recipes ?? []){
        const RECIPE_FILE:BPRecipeFile = JSON.parse(readFileSync(`${recipe}`,{encoding:"utf8"}));
        //console.log(JSON.stringify(RECIPE_FILE))
        if (RECIPE_FILE["minecraft:recipe_shaped"]){
            for(const tag of RECIPE_FILE["minecraft:recipe_shaped"].tags){
                if (tag == "crafting_table"){
                    file = CreateShapedRecipe(file, RECIPE_FILE, item);
                }
            }
        }
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

file = `${file}\n<table><thead><tr><th>Input</th><th>Output</th><th data-type="number">Amount</th></tr></thead><tbody><tr><td><img src="${GetImageLink(RECIPE["minecraft:recipe_shapeless"]?.ingredients.at(0)?.item ?? "MISSING" )}" alt="" data-size="line"> <a href="${GetWikiPagePath(item.wiki_page,INGREDIENT_ITEM?.wiki_page)}">${GetDisplayNameByIdentifier(RECIPE["minecraft:recipe_shapeless"]?.ingredients.at(0)?.item ?? "")}</a></td><td><img src="${GetImageLink(RECIPE["minecraft:recipe_shapeless"]?.result.item)}" alt="" data-size="line"> ${GetDisplayNameByIdentifier(item.identifier)}</td><td>${RECIPE["minecraft:recipe_shapeless"]?.result.count ?? 1}</td></tr></tbody></table>\n`
//End Tab:
file = `${file}\n{% endtab %}`

return file;
}

function GetImageLink(identifier?:string){
    console.log("\n"+identifier)
    
    let path = "";
    if (identifier)path = TEXTURE_INDEX[identifier.replace(`${NAMESPACE}:`,"")];
    else{
        return TEXTURE_INDEX["MISSING"]
    }
    if (path){
        if (path == "%WM"){
            path = `https://github.com/ItsMePok/PFE/blob/wikiAssets/wikiMain/${path.replace("%WM",identifier.replace(`${NAMESPACE}:`,""))}.png?raw=true`;
        }
        if (path == "%BR"){
            path = `https://github.com/ItsMePok/PFE/blob/wikiAssets/blockRenders/${path.replace("%BR",GetDisplayNameByIdentifier(identifier)?.replace(/ /g,"") ?? "")}.png?raw=true`;
        }
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

function GetWikiPagePath(fromPage:string,toPage?:string){
    const FROM_DIR = path.dirname(path.normalize(fromPage));
    if (!toPage)return "";
    let isPage:string = path.relative(FROM_DIR,path.normalize(toPage))
    console.log(`The path between:\n- ${fromPage}\n - ${toPage}\n is:\n- ${isPage}`)

    return isPage;
}

function GetDisplayNameByIdentifier(identifier:string){
    const ITEM = FindItemByIdentifier(identifier);
    if (ITEM?.components.name)return ITEM.components.name;
    let namePos = LANG_FILE.search(`${NAMESPACE}.${identifier.replace(`${NAMESPACE}:`,"")}`)
    let name = LANG_FILE.substring(namePos).split("\n",1).at(0)?.replace(`${NAMESPACE}.${identifier.replace(`${NAMESPACE}:`,"")}=`,"").replace("\r","")
    console.log([name])
    return name;
}

function CreateShapedRecipe(file:string, RECIPE: BPRecipeFile, ITEM: IndexItem){
    const SHAPED_RECIPE = RECIPE["minecraft:recipe_shaped"]
    if (!SHAPED_RECIPE)return file;
    const RECIPE_PATTERN = SHAPED_RECIPE.pattern
    const RECIPE_SIZE = {length:GetMaxLengthOfStringSet(RECIPE_PATTERN),width:RECIPE_PATTERN.length};
console.log(JSON.stringify(RECIPE_SIZE))
    // Start Tab
    file = `${file}\n{% tab title="Crafting" %}\n`;

    // Add Image:
    file = `${file}\n<figure><img src="https://minecraft.wiki/images/thumb/Crafting_Table_JE4_BE3.png/150px-Crafting_Table_JE4_BE3.png?5767f" alt=""><figcaption><p>Crafted in the<br><a href="https://minecraft.wiki/w/Crafting_Table">Crafting Table</a></p></figcaption></figure>\n`

   
 
    //Add Table top
    switch(RECIPE_SIZE.length){ 
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
    let table:string[] = []
    let item1 = GetIdentifierFromShapedPattern(RECIPE,{x:1,y:1});
    let item2 = GetIdentifierFromShapedPattern(RECIPE,{x:2,y:1});
    let item3 = GetIdentifierFromShapedPattern(RECIPE,{x:3,y:1});
    let item4 = GetIdentifierFromShapedPattern(RECIPE,{x:1,y:2});
    let item5 = GetIdentifierFromShapedPattern(RECIPE,{x:2,y:2});
    let item6 = GetIdentifierFromShapedPattern(RECIPE,{x:3,y:2});
    let item7 = GetIdentifierFromShapedPattern(RECIPE,{x:1,y:3});
    let item8 = GetIdentifierFromShapedPattern(RECIPE,{x:2,y:3});
    let item9 = GetIdentifierFromShapedPattern(RECIPE,{x:3,y:3});
    switch(RECIPE_SIZE.width){
        case 3: {
            table = ["|"]
            switch (RECIPE_SIZE.length){
                case 3: {
                    table = [`${table.at(0)} ![](${GetImageLink(item9)}) |`]
                }
                case 2: {
                    table = [`${table.at(0)} ![](${GetImageLink(item8)}) |`]
                }
                case 1: {
                    table = [`${table.at(0)} ![](${GetImageLink(item7)}) |`]
                }
            }
        }
        case 2: {
            if (table.length == 1){
                table = ["\n|"].concat(table)
            }else table = ["|"];

            switch (RECIPE_SIZE.length){
            
               case 3: {
                   table = table.with(0, `${table.at(0)} ![](${GetImageLink(item6)}) |`)
               }
               case 2: {
                   table = table.with(0, `${table.at(0)} ![](${GetImageLink(item5)}) |`)
               }
               case 1: {
                   table = table.with(0, `${table.at(0)} ![](${GetImageLink(item4)}) |`)
               }
            }

        }
        case 1: {
            if (table.length == 1 || 2){
                table = ["\n|"].concat(table)
            }else table = ["|"];

            switch (RECIPE_SIZE.length){
               case 3: {
                   table = table.with(0, `${table.at(0)} ![](${GetImageLink(item3)}) |`)
               }
               case 2: {
                   table = table.with(0, `${table.at(0)} ![](${GetImageLink(item2)}) |`)
               }
               case 1: {
                   table = table.with(0, `${table.at(0)} ![](${GetImageLink(item1)}) |`)
               }
            }
        }
    }
    for (const piece of table.reverse()){
        file = `${file}${piece}`
    }  

    // Make Items:
    file = `${file}\n\nItems:\n`
    const RECIPE_ITEMS = [item1,item2,item3,item4,item5,item6,item7,item8,item9]
    const ITEM_COUNTS = GetCountOfEachItem(RECIPE_ITEMS)
    for (const item of ITEM_COUNTS){
        file = `${file}\n* ${item.count !== 1 ? `${item.count}x`: ""} <img src="${GetImageLink(item.value)}" alt="" data-size="line"> ${GetWikiPagePath(ITEM.wiki_page,FindItemByIdentifier(item.value)?.wiki_page) !== "" ? "["+ GetDisplayNameByIdentifier(item.value)+"]("+GetWikiPagePath(ITEM.wiki_page,FindItemByIdentifier(item.value)?.wiki_page)+")": GetDisplayNameByIdentifier(item.value)}\n`
    }
    // Make Outputs:

    file = `${file}\nOutputs:\n`

    file = `${file}\n* ${SHAPED_RECIPE.result.count !== 1 ? `${SHAPED_RECIPE.result.count}x`: ""} <img src="${GetImageLink(SHAPED_RECIPE.result.item)}" alt="" data-size="line"> ${GetWikiPagePath(ITEM.wiki_page,FindItemByIdentifier(SHAPED_RECIPE.result.item)?.wiki_page) !== "" ? "["+ GetDisplayNameByIdentifier(SHAPED_RECIPE.result.item)+"]("+GetWikiPagePath(ITEM.wiki_page,FindItemByIdentifier(SHAPED_RECIPE.result.item)?.wiki_page)+")": GetDisplayNameByIdentifier(SHAPED_RECIPE.result.item)}\n`
    
    // Make Unlock:
    file = `${file}\nRecipe can be unlocked with:\n`
    for (const item of SHAPED_RECIPE.unlock){
        file = `${file}\n* <img src="${GetImageLink(item.item)}" alt="" data-size="line"> ${GetWikiPagePath(ITEM.wiki_page,FindItemByIdentifier(item.item)?.wiki_page) !== "" ? "["+ GetDisplayNameByIdentifier(item.item)+"]("+GetWikiPagePath(ITEM.wiki_page,FindItemByIdentifier(item.item)?.wiki_page)+")": GetDisplayNameByIdentifier(item.item)}\n`
    }


    //End Tab:
    file = `${file}\n{% endtab %}\n`
    return file;


    /*EX:


* <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/blockRenders/Limestone.png?raw=true" alt="" data-size="line"> [Limestone](../misc/limestone.md)
{% endtab %}
    */
}

function GetMaxLengthOfStringSet(set:string[]){
    let max = 1
    for (const string of set){
        if (string?.length == 3) return 3;
        if (string?.length == 2) max = 2;
    }
    return max
}

function GetIdentifierFromShapedPattern(RECIPE:BPRecipeFile, location: {x:number,y:number}){
    if (!RECIPE["minecraft:recipe_shaped"])return;
    let keyVal = RECIPE["minecraft:recipe_shaped"].pattern.at(location.x-1)?.at(location.y-1);

    if (!keyVal || keyVal == " "){
        return undefined
    }
    const KEYS = RECIPE["minecraft:recipe_shaped"].key
    return KEYS[keyVal].item
}

function GetCountOfEachItem(items:any[]){
    let final: {value:any,count:number}[] = []
    let currentEntries:any[] = []
    for (const item of items){
        if (item === undefined)continue;
        if (currentEntries.includes(item)){
            final.forEach((data)=>{
                if (data.value == item){
                    data.count++;
                }
            })
        }else{
              final.push({value:item,count:1}) 
              currentEntries.push(item) 
        };
    }
    return final
}