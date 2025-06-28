/**
[X] View Recipes
[X] Store Items
[X] Shapeless Recipe Type
[] Upgrade Recipe Type
[] Import Custom Recipes
 */
import { BlockTypes, ItemStack } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { pokeAddItemsToPlayerOrDrop, PokeGetItemFromInventory } from "./commonFunctions";
import { clampNumber } from "@minecraft/math";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
export { RecipeBlockComponent, RecipeItemComponent };
class RecipeBlockComponent {
    onPlayerInteract(data, componentInfo) {
        const component = componentInfo.params;
        if (!component.id) {
            console.warn(`${data.block.typeId} Does not have an ID defined but needs to || poke_pfe:recipe_block Component`);
            return;
        }
        if (!data.player)
            return;
        PFERecipeBlockMainMenu(component, data.player, data.block);
    }
}
class RecipeItemComponent {
    onUse(data, componentInfo) {
        const component = componentInfo.params;
        if (!data.source)
            return;
        if (!data.itemStack)
            return;
        const player = data.source;
        if (player.typeId != MinecraftEntityTypes.Player)
            return;
        if (!component.id) {
            console.warn(`${data.itemStack.typeId} Does not have an ID defined but needs to || poke_pfe:recipe_block Component`);
            return;
        }
        PFERecipeBlockMainMenu(component, player, data.itemStack);
    }
}
function PFERecipeBlockMainMenu(component, player, block) {
    var _a, _b;
    const UI = new ActionFormData();
    const StoredItemsDynamicPropID = `${component.id}:storedItems`;
    const storedItemsProp = player.getDynamicProperty(StoredItemsDynamicPropID);
    const storedItems = (_a = JSON.parse(storedItemsProp !== null && storedItemsProp !== void 0 ? storedItemsProp : "[]")) !== null && _a !== void 0 ? _a : [];
    const customRecipeComponent = (_b = block.getComponent("poke_pfe:custom_recipes")) === null || _b === void 0 ? void 0 : _b.customComponentParameters.params;
    UI.title({ translate: component.name });
    if (component.can_store_items) {
        UI.button({ translate: `%poke_pfe.storedItems\n[${storedItems.length}/${component.storage_capacity_limit}]` }, `textures/poke/common/chest_open`);
    }
    if (customRecipeComponent) {
        UI.button({ translate: `%poke_pfe.recipes\n[${customRecipeComponent.length}]` }, `textures/poke/common/upgrade`);
    }
    if (component.debug_mode) {
        UI.button("Debug", "textures/poke/common/debug");
    }
    UI.button({ translate: `translation.poke:bossEventClose` }, `textures/poke/common/close`);
    UI.show(player).then(response => {
        let selection = 0;
        if (component.can_store_items) {
            if (response.selection == selection) {
                ViewStoredItems(component, player, storedItems, block);
                return;
            }
            else
                selection++;
        }
        if (customRecipeComponent) {
            if (response.selection == selection) {
                ViewAllRecipes(component, player, customRecipeComponent, block, storedItems);
                return;
            }
            else
                selection++;
        }
        if (component.debug_mode) {
            if (response.selection == selection) {
                Debug(component, player, block, storedItems);
                return;
            }
            else
                selection++;
        }
        if (response.canceled || response.selection == selection)
            return;
    });
}
function Debug(component, player, block, storedItems) {
    const UI = new ActionFormData();
    UI.title({ translate: component.name });
    UI.button("Reset Stored Items", "textures/poke/common/redo");
    UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow');
    UI.show(player).then(response => {
        let selection = 0;
        if (response.selection == selection) {
            player.setDynamicProperty(`${component.id}:storedItems`, undefined);
            PFERecipeBlockMainMenu(component, player, block);
            return;
        }
        else
            selection++;
        if (response.canceled || response.selection == selection) {
            PFERecipeBlockMainMenu(component, player, block);
            return;
        }
    });
}
function ViewAllRecipes(component, player, recipes, block, storedItems) {
    var _a, _b, _c, _d;
    const UI = new ActionFormData();
    UI.title({ translate: component.name });
    for (const recipe of recipes) {
        const Result = ParseRecipeItems(recipe.result);
        UI.button({ translate: `${MakeLocalizationKey((_b = (_a = Result.at(0)) === null || _a === void 0 ? void 0 : _a.item) !== null && _b !== void 0 ? _b : "undefined")}` }, getTexturePathByIdentifier((_d = (_c = Result.at(0)) === null || _c === void 0 ? void 0 : _c.item) !== null && _d !== void 0 ? _d : "undefined"));
    }
    UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow');
    UI.show(player).then(response => {
        let selection = 0;
        for (const recipe of recipes) {
            if (response.selection == selection) {
                ViewRecipeInfo(component, player, recipes, block, recipe, storedItems);
                return;
            }
            else
                selection++;
        }
        if (response.canceled || response.selection == selection) {
            PFERecipeBlockMainMenu(component, player, block);
            return;
        }
    });
}
function ViewRecipeInfo(component, player, recipes, block, recipe, storedItems) {
    const UI = new ActionFormData();
    UI.title({ translate: component.name });
    UI.label({ translate: `§7%poke_pfe.crafting:` });
    for (const result of ParseRecipeItems(recipe.result)) {
        UI.label({ translate: `§7- ${result.amount}x %${MakeLocalizationKey(result.item)} (§9${MakeAddonID(result.item)}§r)` });
    }
    UI.divider();
    UI.header({ translate: `%poke_pfe.required_items:` });
    let canCraft = 0;
    const requiredItems = ParseRecipeItems(recipe.items);
    let amountInfo = [];
    for (let item of requiredItems) {
        let itemTotal = 0;
        let thisAmountInfo = {
            id: item.item,
            fromInventory: 0,
            fromStored: 0
        };
        for (const storedItem of storedItems) {
            if (storedItem.i == item.item) {
                itemTotal += storedItem.a;
                thisAmountInfo.fromStored = clampNumber(storedItem.a, thisAmountInfo.fromStored, item.amount);
                break;
            }
        }
        if (item.amount > itemTotal) {
            const inventoryItems = PokeGetItemFromInventory(player, undefined, item.item);
            if (inventoryItems) {
                for (const inventoryItem of inventoryItems) {
                    itemTotal += inventoryItem.amount;
                    thisAmountInfo.fromInventory = clampNumber(inventoryItem.amount, thisAmountInfo.fromInventory, Math.max(0, item.amount - thisAmountInfo.fromStored - thisAmountInfo.fromInventory));
                }
            }
        }
        if (item.amount <= itemTotal)
            canCraft++;
        const color = item.amount <= itemTotal ? "a" : "c";
        UI.label({ translate: `- [§${color}${itemTotal}§r/§${color}${item.amount}§r] (§9${MakeAddonID(item.item)}§r) %${MakeLocalizationKey(item.item)}` });
        amountInfo.push(thisAmountInfo);
    }
    if (canCraft == recipe.items.length) {
        UI.button({ translate: `%poke_pfe.craft` }, 'textures/poke/common/upgrade');
    }
    UI.divider();
    UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow');
    UI.show(player).then(response => {
        let selection = 0;
        //console.warn(`canCraft = ${canCraft} ${JSON.stringify(amountInfo)}`)
        if (canCraft == recipe.items.length) {
            if (response.selection == selection) {
                let currentStoredItems = storedItems;
                for (const amount of amountInfo) {
                    if (amount.fromInventory) {
                        player.runCommand(`clear @s ${amount.id} -1 ${amount.fromInventory}`);
                    }
                    if (amount.fromStored) {
                        let newStored = [];
                        for (const storedItem of currentStoredItems) {
                            newStored.push(storedItem.i == amount.id ?
                                { i: storedItem.i, a: storedItem.a - amount.fromStored } :
                                storedItem);
                            /*console.warn(JSON.stringify((storedItem.i == amount.id ?
                              { i: storedItem.i, a: storedItem.a - amount.fromStored } :
                              storedItem
                            )))*/
                        }
                        //console.warn(JSON.stringify(newStored))
                        player.setDynamicProperty(`${component.id}:storedItems`, JSON.stringify(newStored));
                        currentStoredItems = newStored;
                    }
                }
                for (const result of ParseRecipeItems(recipe.result)) {
                    const maxAmount = new ItemStack(result.item, 1).maxAmount;
                    for (let i = result.amount; i > -1; i = i - maxAmount) {
                        if (i <= 0) {
                            break;
                        }
                        pokeAddItemsToPlayerOrDrop(player, new ItemStack(result.item, clampNumber(i, 0, maxAmount)));
                    }
                }
                ViewRecipeInfo(component, player, recipes, block, recipe, currentStoredItems);
                return;
            }
            else
                selection++;
        }
        if (response.canceled || response.selection == selection) {
            ViewAllRecipes(component, player, recipes, block, storedItems);
            return;
        }
    });
}
function ViewStoredItems(component, player, storedItems, block) {
    const UI = new ActionFormData();
    UI.title({ translate: component.name });
    if (storedItems.length < 64) {
        UI.button({ translate: `%poke_pfe.depositItem` }, `textures/poke/common/deposit`);
    }
    for (const item of storedItems) {
        const itemStack = new ItemStack(item.i);
        const translationString = /*itemStack?.localizationKey ??*/ `${item.a}x (§9${MakeAddonID(item.i)}§r)\n%${MakeLocalizationKey(item.i)}`;
        UI.button({ translate: `${translationString}` }, getTexturePathByIdentifier(item.i));
    }
    UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow');
    UI.show(player).then(response => {
        let selection = 0;
        if (storedItems.length < 64) {
            if (response.selection == selection) {
                AddItem(component, player, storedItems, block);
                return;
            }
            else
                selection++;
        }
        for (const item of storedItems) {
            if (response.selection == selection) {
                ViewItem(component, player, item, storedItems, block);
                return;
            }
            else
                selection++;
        }
        if (response.selection == selection) {
            PFERecipeBlockMainMenu(component, player, block);
            return;
        }
    });
}
function AddItem(component, player, storedItems, block) {
    var _a;
    const UI = new ActionFormData();
    UI.title({ translate: component.name });
    UI.label({ translate: `%poke_pfe.deposit.warning` });
    const allItems = (_a = PokeGetItemFromInventory(player)) !== null && _a !== void 0 ? _a : [];
    for (const item of allItems) {
        UI.button({ translate: MakeLocalizationKey(item.typeId) }, getTexturePathByIdentifier(item.typeId));
    }
    UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow');
    UI.show(player).then(response => {
        var _a, _b, _c;
        let selection = 0;
        for (const item of allItems) {
            if (response.selection == selection) {
                player.runCommand(`clear @s ${item.typeId} -1 ${item.amount}`);
                const storedItemsDynamicPropID = `${component.id}:storedItems`;
                const storedItemsProp = player.getDynamicProperty(storedItemsDynamicPropID);
                const storedItems = (_a = JSON.parse(storedItemsProp !== null && storedItemsProp !== void 0 ? storedItemsProp : "[]")) !== null && _a !== void 0 ? _a : [];
                const existingItem = storedItems.filter(info => info.i == item.typeId);
                let oldItems = storedItems.filter(info => info.i != item.typeId);
                let newItem = existingItem.length > 0 ? {
                    i: item.typeId,
                    a: item.amount + ((_c = (_b = existingItem.at(0)) === null || _b === void 0 ? void 0 : _b.a) !== null && _c !== void 0 ? _c : 0)
                } : {
                    i: item.typeId,
                    a: item.amount
                };
                player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(oldItems.concat(newItem)));
                ViewStoredItems(component, player, oldItems.concat(newItem), block);
                return;
            }
            else
                selection++;
        }
        if (response.selection == selection) {
            ViewStoredItems(component, player, storedItems, block);
            return;
        }
    });
}
function ViewItem(component, player, item, storedItems, block) {
    const UI = new ActionFormData();
    UI.title({ translate: component.name });
    const ItemsInInventory = PokeGetItemFromInventory(player, undefined, item.i);
    let CanDepositAmount = 0;
    if (ItemsInInventory) {
        for (const itemStack of ItemsInInventory) {
            CanDepositAmount += itemStack.amount;
        }
        UI.button({ translate: `%poke_pfe.deposit` }, 'textures/poke/common/deposit');
    }
    UI.button({ translate: `%poke_pfe.withdraw` }, 'textures/poke/common/withdraw');
    UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow');
    UI.show(player).then(response => {
        let selection = 0;
        if (ItemsInInventory) {
            if (response.selection == selection) {
                DepositItem(component, player, item, CanDepositAmount, storedItems, block);
                return;
            }
            else
                selection++;
        }
        if (response.selection == selection) {
            WithdrawItem(component, player, item, storedItems, block);
            return;
        }
        else
            selection++;
        if (response.canceled || response.selection == selection) {
            ViewStoredItems(component, player, storedItems, block);
            return;
        }
    });
}
function DepositItem(component, player, item, maxAmount, storedItems, block) {
    const UI = new ModalFormData();
    UI.title({ translate: component.name });
    UI.label({ translate: `%poke_pfe.deposit.warning` });
    UI.slider({ translate: `%poke_pfe.amount` }, 0, maxAmount, { defaultValue: 0 });
    UI.show(player).then(response => {
        var _a, _b;
        const slider = (_a = response.formValues) === null || _a === void 0 ? void 0 : _a.at(0);
        if (typeof slider == "number" && slider > 0) {
            player.runCommand(`clear @s ${item.i} -1 ${slider}`);
            const storedItemsDynamicPropID = `${component.id}:storedItems`;
            const storedItemsProp = player.getDynamicProperty(storedItemsDynamicPropID);
            const storedItems = (_b = JSON.parse(storedItemsProp !== null && storedItemsProp !== void 0 ? storedItemsProp : "[]")) !== null && _b !== void 0 ? _b : [];
            const newItem = {
                i: item.i,
                a: item.a + slider
            };
            let oldItems = storedItems.filter(info => info.i != item.i);
            player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(oldItems.concat(newItem)));
            ViewStoredItems(component, player, oldItems.concat(newItem), block);
            return;
        }
        if (response.canceled) {
            ViewItem(component, player, item, storedItems, block);
            return;
        }
    });
}
function WithdrawItem(component, player, item, storedItems, block) {
    const UI = new ModalFormData();
    UI.title({ translate: component.name });
    UI.slider({ translate: `%poke_pfe.amount` }, 0, item.a, { defaultValue: 0, tooltip: { translate: `%poke_pfe.withdraw.tooltip` } });
    UI.show(player).then(response => {
        var _a, _b;
        const slider = (_a = response.formValues) === null || _a === void 0 ? void 0 : _a.at(0);
        if (typeof slider == "number" && slider > 0) {
            const storedItemsDynamicPropID = `${component.id}:storedItems`;
            const storedItemsProp = player.getDynamicProperty(storedItemsDynamicPropID);
            const storedItems = (_b = JSON.parse(storedItemsProp !== null && storedItemsProp !== void 0 ? storedItemsProp : "[]")) !== null && _b !== void 0 ? _b : [];
            const newItem = {
                i: item.i,
                a: item.a - slider
            };
            let oldItems = storedItems.filter(info => info.i != item.i);
            const itemStack = new ItemStack(item.i);
            const max = itemStack.maxAmount;
            if (slider == 1) {
                player.dimension.spawnItem(new ItemStack(item.i), player.location);
            }
            else
                for (let i = slider; i > -1; i = i - max) {
                    if (i <= 0) {
                        //console.warn(`attempted to exceeded withdraw amount || PFE - recipeBlock.ts - WithdrawItem`)
                        break;
                    }
                    pokeAddItemsToPlayerOrDrop(player, new ItemStack(item.i, clampNumber(i, 0, max)));
                }
            player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(newItem.a <= 0 ? oldItems : oldItems.concat(newItem)));
            ViewStoredItems(component, player, newItem.a <= 0 ? oldItems : oldItems.concat(newItem), block);
            return;
        }
        if (response.canceled) {
            ViewItem(component, player, item, storedItems, block);
            return;
        }
    });
}
/*
This will return a texture path based on the identifier

If an icon path is not found it will return "textures/poke/common/question"
*/
function getTexturePathByIdentifier(identifier) {
    var _a;
    const IconPathComponent = (_a = new ItemStack(identifier).getComponent("poke_pfe:icon_path")) === null || _a === void 0 ? void 0 : _a.customComponentParameters.params;
    if (IconPathComponent)
        return IconPathComponent;
    switch (identifier) {
        default: {
            return "textures/poke/common/question";
            break;
        }
    }
}
function ParseRecipeItems(strings) {
    let returnValue = [];
    for (const string of strings) {
        const newValue = {
            item: string.substring(string.indexOf(":") + 1),
            amount: Number(string.substring(0, string.indexOf(":")))
        };
        returnValue.push(newValue);
    }
    return returnValue;
}
// Mostly works 
function MakeLocalizationKey(string) {
    const prefix = string.includes("poke:pfe-") ? "item.poke:" : string.includes("poke:") || string.includes("poke_pfe:") ? "poke_pfe." : string.includes("_spawn_egg") ? "item.spawn_egg.entity:" : (BlockTypes.get(string)) ? "tile." : "item.";
    const identifier = string.includes("poke:") || string.includes("poke_pfe:") || string.includes("minecraft:") ? string.replace("poke:", "").replace("poke_pfe:", "").replace("minecraft:", "") : string.includes("_spawn_egg") ? string.replace("_spawn_egg", "") : string;
    const suffix = string.includes("minecraft:") || string.includes("poke:pfe-") ? ".name" : "";
    return `${prefix}${identifier}${suffix}`;
}
function MakeAddonID(string) {
    var _a;
    const char = (_a = string.at(0)) !== null && _a !== void 0 ? _a : "";
    const id = string.includes("poke:") ? "PFE" : string.includes("poke_pfe:") ? "PFE" : string.substring(0, string.indexOf(":")).replace(char, char.toUpperCase());
    return id;
}
//# sourceMappingURL=recipeSystems.js.map