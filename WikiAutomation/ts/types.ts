import index from "../index.json" with {type: 'json'};

type IndexItem = (typeof index.index)[number]
type BPBlockJSON = {
    "minecraft:block": {
        description: {
            identifier: string;
        },
        components: {
            "minecraft:map_color": string;
            "minecraft:destructible_by_mining"?: {
                seconds_to_destroy: number;
                item_specific_speeds?: {
                    item: {
                        tags: string
                    },
                    destroy_speed: number // seconds
                }[]
            }
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
        ingredients: { item: string }[],
        result: {
            item: string,
            count?: number
        }
    }
    "minecraft:recipe_shaped"?: {
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
            [key: string]: {
                "item": string //Item/Block Identifier
            }
        },
        "result": {
            "item": string, //Identifier
            "count": number
        }


    }
}

export {
    type BPBlockJSON,
    type BPRecipeFile,
    type IndexItem
}