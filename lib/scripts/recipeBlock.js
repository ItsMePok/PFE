/**

[] View Recipes
[] Add Items to the forge
[] Capacity Upgrade
[] Allow import of custom recipes

 */
import { ItemStack } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { PokeGetItemFromInventory } from "./commonFunctions";
export { RecipeBlockComponent };
class RecipeBlockComponent {
    onPlayerInteract(data, componentInfo) {
        const component = componentInfo.params;
        if (!component.id) {
            console.warn(`${data.block.typeId} Does not have an ID defined but needs to || poke_pfe:recipe_block Component`);
            return;
        }
        if (!data.player)
            return;
        PFERecipeBlockMainMenu(component, data.player);
    }
}
function PFERecipeBlockMainMenu(component, player) {
    var _a;
    const UI = new ActionFormData();
    const StoredItemsDynamicPropID = `${component.id}:storedItems`;
    const storedItemsProp = player.getDynamicProperty(StoredItemsDynamicPropID);
    const storedItems = (_a = JSON.parse(storedItemsProp !== null && storedItemsProp !== void 0 ? storedItemsProp : "[]")) !== null && _a !== void 0 ? _a : [];
    UI.title({ translate: component.block_name });
    if (component.can_store_items) {
        UI.button({ translate: `%poke_pfe.storedItems\n[${storedItems.length}/${component.storage_capacity_limit}]` }, `textures/poke/common/chest_open`);
    }
    UI.button({ translate: `translation.poke:bossEventClose` }, `textures/poke/common/close`);
    UI.show(player).then(response => {
        let selection = 0;
        if (component.can_store_items) {
            if (response.selection == selection) {
                ViewStoredItems(component, player, storedItems);
                return;
            }
            else
                selection++;
        }
        if (response.canceled || response.selection == selection)
            return;
    });
}
function ViewStoredItems(component, player, storedItems) {
    const UI = new ActionFormData();
    UI.title({ translate: component.block_name });
    if (storedItems.length < 64) {
        UI.button({ translate: `%poke_pfe.depositItem` }, `textures/poke/common/deposit`);
    }
    for (const item of storedItems) {
        const itemStack = new ItemStack(item.i);
        const translationString = /*itemStack?.localizationKey ??*/ `${item.a}x${item.i.replace(`poke:`, "(§9PFE§r)\n%poke_pfe.").replace("\n%poke_pfe:", "(§9PFE§r)\n%poke_pfe.").replace("minecraft:", "\n%item.")}`;
        UI.button({ translate: `${translationString}` }, getTexturePathByIdentifier(item.i));
    }
    UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow');
    UI.show(player).then(response => {
        let selection = 0;
        if (storedItems.length < 64) {
            if (response.selection == selection) {
                AddItem(component, player, storedItems);
                return;
            }
            else
                selection++;
        }
        for (const item of storedItems) {
            if (response.selection == selection) {
                ViewItem(component, player, item, storedItems);
                return;
            }
            else
                selection++;
        }
        if (response.selection == selection) {
            PFERecipeBlockMainMenu(component, player);
            return;
        }
    });
}
function AddItem(component, player, storedItems) {
    var _a;
    const UI = new ActionFormData();
    const allItems = (_a = PokeGetItemFromInventory(player)) !== null && _a !== void 0 ? _a : [];
    for (const item of allItems) {
        const translationString = /*itemStack?.localizationKey ??*/ item.typeId.includes("poke:") ? `%poke_pfe.${item.typeId.replace(`poke:`, "")}` : item.typeId.includes("poke_pfe:") ? `%poke_pfe.${item.typeId.replace(`poke_pfe:`, "")}` : item.typeId;
        UI.button({ translate: translationString }, getTexturePathByIdentifier(item.typeId));
    }
    UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow');
    UI.show(player).then(response => {
        var _a, _b, _c;
        let selection = 0;
        for (const item of allItems) {
            if (response.selection == selection) {
                player.runCommand(`clear @s ${item.typeId} 0 ${item.amount}`);
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
                ViewStoredItems(component, player, oldItems.concat(newItem));
                return;
            }
            else
                selection++;
        }
        if (response.selection == selection) {
            ViewStoredItems(component, player, storedItems);
            return;
        }
    });
}
function ViewItem(component, player, item, storedItems) {
    const UI = new ActionFormData();
    UI.title({ translate: component.block_name });
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
                DepositItem(component, player, item, CanDepositAmount, storedItems);
                return;
            }
            else
                selection++;
        }
        if (response.selection == selection) {
            WithdrawItem(component, player, item, storedItems);
            return;
        }
        else
            selection++;
        if (response.canceled || response.selection == selection) {
            ViewStoredItems(component, player, storedItems);
            return;
        }
    });
}
function DepositItem(component, player, item, maxAmount, storedItems) {
    const UI = new ModalFormData();
    UI.title({ translate: component.block_name });
    UI.slider({ translate: `%poke_pfe.amount` }, 0, maxAmount, { defaultValue: 0 });
    UI.show(player).then(response => {
        var _a, _b;
        const slider = (_a = response.formValues) === null || _a === void 0 ? void 0 : _a.at(0);
        if (typeof slider == "number" && slider > 0) {
            player.runCommand(`clear @s ${item.i} 0 ${slider}`);
            const storedItemsDynamicPropID = `${component.id}:storedItems`;
            const storedItemsProp = player.getDynamicProperty(storedItemsDynamicPropID);
            const storedItems = (_b = JSON.parse(storedItemsProp !== null && storedItemsProp !== void 0 ? storedItemsProp : "[]")) !== null && _b !== void 0 ? _b : [];
            const newItem = {
                i: item.i,
                a: item.a + slider
            };
            let oldItems = storedItems.filter(info => info.i != item.i);
            player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(oldItems.concat(newItem)));
            ViewStoredItems(component, player, oldItems.concat(newItem));
            return;
        }
        if (response.canceled) {
            ViewItem(component, player, item, storedItems);
            return;
        }
    });
}
function WithdrawItem(component, player, item, storedItems) {
    const UI = new ModalFormData();
    UI.title({ translate: component.block_name });
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
                        console.warn(`attempted to exceeded withdraw amount || PFE - recipeBlock.ts - WithdrawItem`);
                        break;
                    }
                    const amount = Math.min(Math.max(i, 0), max);
                    console.warn(`i = ${i} Amount = ${amount}`);
                    player.dimension.spawnItem(new ItemStack(item.i, amount), player.location);
                }
            player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(newItem.a <= 0 ? oldItems : oldItems.concat(newItem)));
            ViewStoredItems(component, player, newItem.a <= 0 ? oldItems : oldItems.concat(newItem));
            return;
        }
        if (response.canceled) {
            ViewItem(component, player, item, storedItems);
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
//# sourceMappingURL=recipeBlock.js.map