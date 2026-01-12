
/**
[X] View Recipes
[X] Store Items
[X] Shapeless Recipe Type
[X] Transform Recipe Type
[] Import Custom Recipes
 */

import { Block, BlockComponentPlayerInteractEvent, BlockPermutation, BlockType, BlockTypes, CustomComponentParameters, Entity, EntityComponentTypes, ItemComponent, ItemComponentTypes, ItemComponentUseEvent, ItemStack, Player, Vector3 } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { pokeAddItemsToPlayerOrDrop, PokeGetItemFromInventory } from "./commonFunctions";
import { clampNumber } from "@minecraft/math";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { ParsePFEUpgradeComponent, PFEUpgradeableComponentInfo, PFEUpgradeableId, PokeUpgradeUI } from "./upgrades";
export {
  RecipeBlockComponent,
  RecipeItemComponent
}
interface RecipeBlockComponentInfo {
  id: string
  can_store_items: boolean | false
  can_show_item_upgrades: boolean | false
  storage_capacity_limit: number | 64
  name: string // Translation string
  debug_mode: boolean | false
  has_transform_recipes: boolean | false
}
interface CustomRecipes {// "poke_pfe:custom_recipes"
  items: string[] // ex: 2:poke_pfe:radium_ingot (amount:identifier) 
  result: string[] // ex: 2:poke_pfe:radium_ingot (amount:identifier) 
  recipe_type: "shapeless" | "transform"
  keep_item_data_from: number // ex: 0 would be the first item in the array note: only 1 item will be applied
}
class RecipeBlockComponent {
  onPlayerInteract(data: BlockComponentPlayerInteractEvent, componentInfo: CustomComponentParameters) {
    const component = <RecipeBlockComponentInfo>componentInfo.params
    if (!component.id) {
      console.warn(`${data.block.typeId} Does not have an ID defined but needs to || poke_pfe:recipe_block Component`)
      return
    }
    if (!data.player) return;
    PFERecipeBlockMainMenu(component, data.player, data.block)
  }
}
class RecipeItemComponent {
  onUse(data: ItemComponentUseEvent, componentInfo: CustomComponentParameters) {
    const component = <RecipeBlockComponentInfo>componentInfo.params
    if (!data.source) return;
    if (!data.itemStack) return;
    const player = <Player>data.source
    if (player.typeId != MinecraftEntityTypes.Player) return;
    if (!component.id) {
      console.warn(`${data.itemStack.typeId} Does not have an ID defined but needs to || poke_pfe:recipe_block Component`)
      return
    }
    PFERecipeBlockMainMenu(component, player, data.itemStack)
  }
}
interface StoredItemsInfo {
  i: string, //Item
  a: number // Amount
}
function PFERecipeBlockMainMenu(component: RecipeBlockComponentInfo, player: Player, block: Block | ItemStack) {
  const UI = new ActionFormData()
  const StoredItemsDynamicPropID = `${component.id}:storedItems`
  const storedItemsProp = <string | undefined>player.getDynamicProperty(StoredItemsDynamicPropID)
  const storedItems: StoredItemsInfo[] = JSON.parse(storedItemsProp ?? "[]") ?? []
  const customRecipeComponent = <CustomRecipes[] | undefined>block.getComponent("poke_pfe:custom_recipes")?.customComponentParameters.params
  UI.title({ translate: component.name })
  if (component.can_store_items) {
    UI.button({ translate: `%poke_pfe.storedItems\n[${storedItems.length}/${component.storage_capacity_limit}]` }, `textures/poke/common/chest_open`)
  }
  if (component.can_show_item_upgrades) {
    UI.button({ translate: `%poke_pfe.upgrade` }, `textures/poke/common/upgrade`)
  }
  if (customRecipeComponent) {
    UI.button({ translate: `%poke_pfe.recipes\n[${customRecipeComponent.length}]` }, `textures/poke/common/upgrade`)
  }
  if (component.debug_mode) {
    UI.button("Debug", "textures/poke/common/debug")
  }
  UI.button({ translate: `translation.poke_pfe:bossEventClose` }, `textures/poke/common/close`)
  UI.show(player).then(response => {
    let selection = 0
    if (component.can_store_items) {
      if (response.selection == selection) {
        ViewStoredItems(component, player, storedItems, block)
        return
      } else selection++
    }
    if (component.can_show_item_upgrades) {
      if (response.selection == selection) {
        ViewUpgradeableItems(component, player, block);
        return
      } else selection++
    }
    if (customRecipeComponent) {
      if (response.selection == selection) {
        ViewAllRecipes(component, player, customRecipeComponent, block, storedItems)
        return
      } else selection++
    }
    if (component.debug_mode) {
      if (response.selection == selection) {
        Debug(component, player, block, storedItems)
        return
      } else selection++
    }
    if (response.canceled || response.selection == selection) return;
  })
}
function ViewUpgradeableItems(component: RecipeBlockComponentInfo, player: Player, block: Block | ItemStack) {
  const UI = new ActionFormData()
  UI.title({ translate: component.name })
  let validItems = <{ item: ItemStack, number: number }[]>[]
  for (const item of <{ item: ItemStack, number: number }[] | undefined>PokeGetItemFromInventory(player, undefined, undefined, true) ?? []) {
    const upgradeableComponent = <PFEUpgradeableComponentInfo | undefined>item.item.getComponent(PFEUpgradeableId)?.customComponentParameters.params
    if (!upgradeableComponent) continue;
    UI.button({ translate: item.item.localizationKey }, getTexturePathByIdentifier(item.item.typeId ?? "undefined"))
    validItems.push(item)
  }
  if (validItems.length == 0) {
    UI.label({ translate: "%poke_pfe.noUpgradeableItems" })
  }
  UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow')
  UI.show(player).then(response => {
    let selection = 0
    for (const item of validItems) {
      if (response.selection == selection) {
        const ItemStack = item.item
        if (!ItemStack) { PFERecipeBlockMainMenu(component, player, block); return };
        const upgradeableComponent = <PFEUpgradeableComponentInfo>ItemStack.getComponent(PFEUpgradeableId)?.customComponentParameters.params

        PokeUpgradeUI(player, ItemStack, ParsePFEUpgradeComponent(ItemStack, player, upgradeableComponent), true, upgradeableComponent, item.number)
        return;
      } else selection++
    }
    if (response.canceled || response.selection == selection) {
      PFERecipeBlockMainMenu(component, player, block)
      return
    }
  })
}
function Debug(component: RecipeBlockComponentInfo, player: Player, block: Block | ItemStack, storedItems: StoredItemsInfo[]) {
  const UI = new ActionFormData()
  UI.title({ translate: component.name })
  UI.button("Reset Stored Items", "textures/poke/common/redo")
  UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow')
  UI.show(player).then(response => {
    let selection = 0
    if (response.selection == selection) {
      player.setDynamicProperty(`${component.id}:storedItems`, undefined)
      PFERecipeBlockMainMenu(component, player, block)
      return;
    } else selection++
    if (response.canceled || response.selection == selection) {
      PFERecipeBlockMainMenu(component, player, block)
      return
    }
  })

}
function ViewAllRecipes(component: RecipeBlockComponentInfo, player: Player, recipes: CustomRecipes[], block: Block | ItemStack, storedItems: StoredItemsInfo[]) {
  const UI = new ActionFormData()
  UI.title({ translate: component.name })
  for (const recipe of recipes) {
    const Result = ParseRecipeItems(recipe.result)
    UI.button({ translate: `${MakeLocalizationKey(Result.at(0)?.item ?? "undefined")}` }, getTexturePathByIdentifier(Result.at(0)?.item ?? "undefined"))
  }
  UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow')
  UI.show(player).then(response => {
    let selection = 0
    for (const recipe of recipes) {
      if (response.selection == selection) {
        ViewRecipeInfo(component, player, recipes, block, recipe, storedItems)
        return;
      } else selection++
    }
    if (response.canceled || response.selection == selection) {
      PFERecipeBlockMainMenu(component, player, block)
      return;
    }
  })
}

function ViewRecipeInfo(component: RecipeBlockComponentInfo, player: Player, recipes: CustomRecipes[], block: Block | ItemStack, recipe: CustomRecipes, storedItems: StoredItemsInfo[]) {
  const UI = new ActionFormData()
  UI.title({ translate: component.name })
  UI.label({ translate: `§7%poke_pfe.crafting:` })
  for (const result of ParseRecipeItems(recipe.result)) {
    UI.label({ translate: `§7- ${result.amount}x %${MakeLocalizationKey(result.item)} (§9${MakeAddonID(result.item)}§r)` })
  }
  UI.divider()
  UI.header({ translate: `%poke_pfe.required_items:` })
  let canCraft = 0
  const requiredItems = ParseRecipeItems(recipe.items)
  type AmountInfo = {
    id: string,
    fromStored: number,
    fromInventory: number
  }
  let amountInfo: AmountInfo[] = []
  for (let item of requiredItems) {
    let itemTotal = 0
    let thisAmountInfo: AmountInfo = {
      id: item.item,
      fromInventory: 0,
      fromStored: 0
    }
    for (const storedItem of storedItems) {
      if (storedItem.i == item.item) {
        itemTotal += storedItem.a
        thisAmountInfo.fromStored = clampNumber(storedItem.a, thisAmountInfo.fromStored, item.amount)
        break
      }
    }
    if (item.amount > itemTotal) {
      const inventoryItems = <ItemStack[] | undefined>PokeGetItemFromInventory(player, undefined, item.item)
      if (inventoryItems) {
        for (const inventoryItem of inventoryItems) {
          itemTotal += inventoryItem.amount
          thisAmountInfo.fromInventory = clampNumber(inventoryItem.amount, thisAmountInfo.fromInventory, Math.max(0, item.amount - thisAmountInfo.fromStored - thisAmountInfo.fromInventory))
        }
      }
    }
    if (item.amount <= itemTotal) canCraft++;
    const color = item.amount <= itemTotal ? "a" : "c"
    UI.label({ translate: `${(typeof recipe.keep_item_data_from === "number" && (requiredItems.at(recipe.keep_item_data_from)?.item == item.item)) ? "§e-§r" : "-"} [§${color}${itemTotal}§r/§${color}${item.amount}§r] (§9${MakeAddonID(item.item)}§r) %${MakeLocalizationKey(item.item)}` })
    amountInfo.push(thisAmountInfo)
  }
  if (canCraft == recipe.items.length) {
    UI.button({ translate: `%poke_pfe.craft` }, 'textures/poke/common/upgrade')
  }
  UI.divider()
  UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow')
  UI.show(player).then(response => {
    let selection = 0
    //console.warn(`canCraft = ${canCraft} ${JSON.stringify(amountInfo)}`)
    if (canCraft == recipe.items.length) {
      if (response.selection == selection) {
        let currentStoredItems = storedItems
        for (const result of ParseRecipeItems(recipe.result)) {
          const maxAmount = new ItemStack(result.item, 1).maxAmount
          for (let i = result.amount; i > -1; i = i - maxAmount) {
            if (i <= 0) {
              break;
            }
            if (recipe.recipe_type !== "transform") {
              pokeAddItemsToPlayerOrDrop(player, new ItemStack(result.item, clampNumber(i, 0, maxAmount)))
            } else {
              let resultedItem: ItemStack = new ItemStack(result.item, clampNumber(i, 0, maxAmount))
              if (typeof recipe.keep_item_data_from === "number") {
                let dataSendingItem = <ItemStack>PokeGetItemFromInventory(player, undefined, requiredItems.at(recipe.keep_item_data_from)?.item)?.at(0)
                if (dataSendingItem) {
                  const enchants = dataSendingItem.getComponent(ItemComponentTypes.Enchantable)?.getEnchantments()
                  if (enchants && resultedItem.hasComponent(ItemComponentTypes.Enchantable)) {
                    resultedItem.getComponent(ItemComponentTypes.Enchantable)?.addEnchantments(enchants)
                  }

                  const durability = dataSendingItem.getComponent(ItemComponentTypes.Durability)?.damage
                  if (durability && resultedItem.hasComponent(ItemComponentTypes.Durability)) {
                    resultedItem.getComponent(ItemComponentTypes.Durability)!.damage = durability
                  }

                  let dynamicProperties: Record<string, (string | boolean | number | Vector3 | undefined)> = {
                  }
                  for (const dynamicProperty of dataSendingItem.getDynamicPropertyIds()) {
                    const value = dataSendingItem.getDynamicProperty(dynamicProperty)
                    if (!value) continue
                    dynamicProperties.dynamicProperty = value
                  }
                  resultedItem.setDynamicProperties(dynamicProperties)


                } else console.warn(`Failed to find item to transfer data from. Looked for ${JSON.stringify(dataSendingItem)} || PFE - RecipeBlockComponent - TransformRecipeType`);
              }
              pokeAddItemsToPlayerOrDrop(player, resultedItem)
            }
          }
        }
        for (const amount of amountInfo) {
          if (amount.fromInventory) {
            player.runCommand(`clear @s ${amount.id.replace("minecraft:", "")} -1 ${amount.fromInventory}`)
          }
          if (amount.fromStored) {
            let newStored: StoredItemsInfo[] = []
            for (const storedItem of currentStoredItems) {
              newStored.push(storedItem.i == amount.id ?
                { i: storedItem.i, a: storedItem.a - amount.fromStored } :
                storedItem
              )
              /*console.warn(JSON.stringify((storedItem.i == amount.id ?
                { i: storedItem.i, a: storedItem.a - amount.fromStored } :
                storedItem
              )))*/
            }
            //console.warn(JSON.stringify(newStored))
            player.setDynamicProperty(`${component.id}:storedItems`, JSON.stringify(newStored))
            currentStoredItems = newStored
          }
        }
        ViewRecipeInfo(component, player, recipes, block, recipe, currentStoredItems)
        return;
      } else selection++
    }
    if (response.canceled || response.selection == selection) {
      ViewAllRecipes(component, player, recipes, block, storedItems)
      return;
    }
  })

}

function ViewStoredItems(component: RecipeBlockComponentInfo, player: Player, storedItems: StoredItemsInfo[], block: Block | ItemStack) {
  const UI = new ActionFormData()
  UI.title({ translate: component.name })
  if (storedItems.length < 64) {
    UI.button({ translate: `%poke_pfe.depositItem` }, `textures/poke/common/deposit`)
  }
  for (const item of storedItems) {
    const itemStack = new ItemStack(item.i)
    const translationString = /*itemStack?.localizationKey ??*/  `${item.a}x (§9${MakeAddonID(item.i)}§r)\n%${MakeLocalizationKey(item.i)}`
    UI.button({ translate: `${translationString}` }, getTexturePathByIdentifier(item.i))
  }
  UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow')
  UI.show(player).then(response => {
    let selection = 0
    if (storedItems.length < 64) {
      if (response.selection == selection) {
        AddItem(component, player, storedItems, block)
        return;
      } else selection++
    }
    for (const item of storedItems) {
      if (response.selection == selection) {
        ViewItem(component, player, item, storedItems, block)
        return;
      } else selection++
    }
    if (response.selection == selection) {
      PFERecipeBlockMainMenu(component, player, block)
      return;
    }
  })
}

function AddItem(component: RecipeBlockComponentInfo, player: Player, storedItems: StoredItemsInfo[], block: Block | ItemStack) {
  const UI = new ActionFormData()
  UI.title({ translate: component.name })
  UI.label({ translate: `%poke_pfe.deposit.warning` })
  const allItems = <ItemStack[] | undefined>PokeGetItemFromInventory(player) ?? []
  for (const item of allItems) {//@ts-ignore
    UI.button({ translate: item.localizationKey }, getTexturePathByIdentifier(item))
  }
  UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow')
  UI.show(player).then(response => {
    let selection = 0
    for (const item of allItems) {
      if (response.selection == selection) {
        player.runCommand(`clear @s ${item.typeId} -1 ${item.amount}`)
        const storedItemsDynamicPropID = `${component.id}:storedItems`
        const storedItemsProp = <string | undefined>player.getDynamicProperty(storedItemsDynamicPropID)
        const storedItems: StoredItemsInfo[] = JSON.parse(storedItemsProp ?? "[]") ?? []
        const existingItem = storedItems.filter(info => info.i == item.typeId)
        let oldItems = storedItems.filter(info => info.i != item.typeId)
        let newItem = existingItem.length > 0 ? {
          i: item.typeId,
          a: item.amount + (existingItem.at(0)?.a ?? 0)
        } : {
          i: item.typeId,
          a: item.amount
        }
        player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(oldItems.concat(newItem)))
        ViewStoredItems(component, player, oldItems.concat(newItem), block)
        return;
      } else selection++
    }
    if (response.selection == selection) {
      ViewStoredItems(component, player, storedItems, block)
      return;
    }
  })
}

function ViewItem(component: RecipeBlockComponentInfo, player: Player, item: StoredItemsInfo, storedItems: StoredItemsInfo[], block: Block | ItemStack) {
  const UI = new ActionFormData()
  UI.title({ translate: component.name })
  const ItemsInInventory = <ItemStack[] | undefined>PokeGetItemFromInventory(player, undefined, item.i)
  let CanDepositAmount: number | undefined = 0
  if (ItemsInInventory) {
    for (const itemStack of ItemsInInventory) {
      CanDepositAmount += itemStack.amount
    }
    UI.button({ translate: `%poke_pfe.deposit` }, 'textures/poke/common/deposit')
  }
  UI.button({ translate: `%poke_pfe.withdraw` }, 'textures/poke/common/withdraw')
  UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow')
  UI.show(player).then(response => {
    let selection = 0
    if (ItemsInInventory) {
      if (response.selection == selection) {
        DepositItem(component, player, item, CanDepositAmount, storedItems, block)
        return;
      } else selection++
    }
    if (response.selection == selection) {
      WithdrawItem(component, player, item, storedItems, block)
      return;
    } else selection++
    if (response.canceled || response.selection == selection) {
      ViewStoredItems(component, player, storedItems, block)
      return;
    }
  })
}

function DepositItem(component: RecipeBlockComponentInfo, player: Player, item: StoredItemsInfo, maxAmount: number, storedItems: StoredItemsInfo[], block: Block | ItemStack) {
  const UI = new ModalFormData()
  UI.title({ translate: component.name })
  UI.label({ translate: `%poke_pfe.deposit.warning` })
  UI.slider({ translate: `%poke_pfe.amount` }, 0, maxAmount, { defaultValue: 0 })
  UI.show(player).then(response => {
    const slider = response.formValues?.at(0)
    if (typeof slider == "number" && slider > 0) {
      player.runCommand(`clear @s ${item.i} -1 ${slider}`)
      const storedItemsDynamicPropID = `${component.id}:storedItems`
      const storedItemsProp = <string | undefined>player.getDynamicProperty(storedItemsDynamicPropID)
      const storedItems: StoredItemsInfo[] = JSON.parse(storedItemsProp ?? "[]") ?? []
      const newItem: StoredItemsInfo = {
        i: item.i,
        a: item.a + slider
      }
      let oldItems = storedItems.filter(info => info.i != item.i)
      player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(oldItems.concat(newItem)))
      ViewStoredItems(component, player, oldItems.concat(newItem), block)
      return;
    }
    if (response.canceled) {
      ViewItem(component, player, item, storedItems, block)
      return;
    }
  })
}

function WithdrawItem(component: RecipeBlockComponentInfo, player: Player, item: StoredItemsInfo, storedItems: StoredItemsInfo[], block: Block | ItemStack) {
  const UI = new ModalFormData()
  UI.title({ translate: component.name })
  UI.slider({ translate: `%poke_pfe.amount` }, 0, item.a, { defaultValue: 0, tooltip: { translate: `%poke_pfe.withdraw.tooltip` } })
  UI.show(player).then(response => {
    const slider = response.formValues?.at(0)
    if (typeof slider == "number" && slider > 0) {
      const storedItemsDynamicPropID = `${component.id}:storedItems`
      const storedItemsProp = <string | undefined>player.getDynamicProperty(storedItemsDynamicPropID)
      const storedItems: StoredItemsInfo[] = JSON.parse(storedItemsProp ?? "[]") ?? []
      const newItem: StoredItemsInfo = {
        i: item.i,
        a: item.a - slider
      }
      let oldItems = storedItems.filter(info => info.i != item.i)
      const itemStack = new ItemStack(item.i)
      const max = itemStack.maxAmount
      if (slider == 1) {
        player.dimension.spawnItem(new ItemStack(item.i), player.location)
      } else for (let i = slider; i > -1; i = i - max) {
        if (i <= 0) {
          //console.warn(`attempted to exceeded withdraw amount || PFE - recipeBlock.ts - WithdrawItem`)
          break;
        }
        pokeAddItemsToPlayerOrDrop(player, new ItemStack(item.i, clampNumber(i, 0, max)))
      }
      player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(newItem.a <= 0 ? oldItems : oldItems.concat(newItem)))
      ViewStoredItems(component, player, newItem.a <= 0 ? oldItems : oldItems.concat(newItem), block)
      return;
    }
    if (response.canceled) {
      ViewItem(component, player, item, storedItems, block)
      return;
    }
  })
}

/*
This will return a texture path based on the identifier

If an icon path is not found it will return "textures/poke/common/question"
*/
function getTexturePathByIdentifier(item: ItemStack | string) {
  if (typeof item == "string") {
    item = new ItemStack(item, 1)
  }
  const IconPathComponent = <string | undefined>item.getComponent("poke_pfe:icon_path")?.customComponentParameters.params
  if (IconPathComponent) return IconPathComponent
  return "textures/poke/common/question"
}
interface ParsedRecipeItem {
  item: string,
  amount: number
}
function ParseRecipeItems(strings: string[]) {
  let returnValue: ParsedRecipeItem[] = []
  for (const string of strings) {
    const newValue: ParsedRecipeItem = {
      item: string.substring(string.indexOf(":") + 1),
      amount: Number(string.substring(0, string.indexOf(":")))
    }
    returnValue.push(newValue)
  }
  return returnValue
}

// Mostly works 
function MakeLocalizationKey(string: string) {
  const prefix = string.includes("poke_pfe:pfe-") ? "item.poke_pfe:" : string.includes("poke_pfe:") || string.includes("poke_pfe:") ? "poke_pfe." : string.includes("_spawn_egg") ? "item.spawn_egg.entity:" : (BlockTypes.get(string)) ? "tile." : "item."
  const identifier = string.includes("poke_pfe:") || string.includes("poke_pfe:") || string.includes("minecraft:") ? string.replace("poke_pfe:", "").replace("poke_pfe:", "").replace("minecraft:", "") : string.includes("_spawn_egg") ? string.replace("_spawn_egg", "") : string
  const suffix = string.includes("minecraft:") || string.includes("poke_pfe:pfe-") ? ".name" : ""
  return `${prefix}${identifier}${suffix}`
}

function MakeAddonID(string: string) {
  const char = string.at(0) ?? ""
  const id = string.includes("poke_pfe:") ? "PFE" : string.includes("poke_pfe:") ? "PFE" : string.substring(0, string.indexOf(":")).replace(char, char.toUpperCase())
  return id
}

function GetAsBlock(item: ItemStack) {
  const blockType = BlockTypes.get(item.typeId)
  if (!blockType) return undefined
  const block = BlockPermutation.resolve(blockType?.id)
}