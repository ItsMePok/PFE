
/**

[] View Recipes
[X] Add Items to the forge
[] Allow import of custom recipes

 */

import { Block, BlockComponentPlayerInteractEvent, CustomComponentParameters, ItemComponentTypes, ItemStack, Player, world } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { PokeGetItemFromInventory } from "./commonFunctions";
import { clampNumber } from "@minecraft/math";
export {
  RecipeBlockComponent
}
interface RecipeBlockComponentInfo {
  id: string
  can_store_items: boolean | false
  storage_capacity_limit: number | 64
  block_name: string // Translation string
}
class RecipeBlockComponent {
  onPlayerInteract(data: BlockComponentPlayerInteractEvent, componentInfo: CustomComponentParameters) {
    const component = <RecipeBlockComponentInfo>componentInfo.params
    if (!component.id) {
      console.warn(`${data.block.typeId} Does not have an ID defined but needs to || poke_pfe:recipe_block Component`)
      return
    }
    if (!data.player) return;
    PFERecipeBlockMainMenu(component, data.player)
  }
}
interface StoredItemsInfo {
  i: string,
  a: number
}
function PFERecipeBlockMainMenu(component: RecipeBlockComponentInfo, player: Player) {
  const UI = new ActionFormData()
  const StoredItemsDynamicPropID = `${component.id}:storedItems`
  const storedItemsProp = <string | undefined>player.getDynamicProperty(StoredItemsDynamicPropID)
  const storedItems: StoredItemsInfo[] = JSON.parse(storedItemsProp ?? "[]") ?? []
  UI.title({ translate: component.block_name })
  if (component.can_store_items) {
    UI.button({ translate: `%poke_pfe.storedItems\n[${storedItems.length}/${component.storage_capacity_limit}]` }, `textures/poke/common/chest_open`)
  }
  UI.button({ translate: `translation.poke:bossEventClose` }, `textures/poke/common/close`)
  UI.show(player).then(response => {
    let selection = 0
    if (component.can_store_items) {
      if (response.selection == selection) {
        ViewStoredItems(component, player, storedItems)
        return
      } else selection++
    }
    if (response.canceled || response.selection == selection) return;
  })
}

function ViewStoredItems(component: RecipeBlockComponentInfo, player: Player, storedItems: StoredItemsInfo[]) {
  const UI = new ActionFormData()
  UI.title({ translate: component.block_name })
  if (storedItems.length < 64) {
    UI.button({ translate: `%poke_pfe.depositItem` }, `textures/poke/common/deposit`)
  }
  for (const item of storedItems) {
    const itemStack = new ItemStack(item.i)
    const translationString = /*itemStack?.localizationKey ??*/ `${item.a}x${item.i.replace(`poke:`, "(§9PFE§r)\n%poke_pfe.").replace("\n%poke_pfe:", "(§9PFE§r)\n%poke_pfe.").replace("minecraft:", "\n%item.")}`
    UI.button({ translate: `${translationString}` }, getTexturePathByIdentifier(item.i))
  }
  UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow')
  UI.show(player).then(response => {
    let selection = 0
    if (storedItems.length < 64) {
      if (response.selection == selection) {
        AddItem(component, player, storedItems)
        return;
      } else selection++
    }
    for (const item of storedItems) {
      if (response.selection == selection) {
        ViewItem(component, player, item, storedItems)
        return;
      } else selection++
    }
    if (response.selection == selection) {
      PFERecipeBlockMainMenu(component, player)
      return;
    }
  })
}

function AddItem(component: RecipeBlockComponentInfo, player: Player, storedItems: StoredItemsInfo[]) {
  const UI = new ActionFormData()
  const allItems = PokeGetItemFromInventory(player) ?? []
  for (const item of allItems) {
    const translationString = /*itemStack?.localizationKey ??*/ item.typeId.includes("poke:") ? `%poke_pfe.${item.typeId.replace(`poke:`, "")}` : item.typeId.includes("poke_pfe:") ? `%poke_pfe.${item.typeId.replace(`poke_pfe:`, "")}` : item.typeId
    UI.button({ translate: translationString }, getTexturePathByIdentifier(item.typeId))
  }
  UI.button({ translate: `translation.poke_pfe.GoBack` }, 'textures/poke/common/left_arrow')
  UI.show(player).then(response => {
    let selection = 0
    for (const item of allItems) {
      if (response.selection == selection) {
        player.runCommand(`clear @s ${item.typeId} 0 ${item.amount}`)
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
        ViewStoredItems(component, player, oldItems.concat(newItem))
        return;
      } else selection++
    }
    if (response.selection == selection) {
      ViewStoredItems(component, player, storedItems)
      return;
    }
  })
}

function ViewItem(component: RecipeBlockComponentInfo, player: Player, item: StoredItemsInfo, storedItems: StoredItemsInfo[]) {
  const UI = new ActionFormData()
  UI.title({ translate: component.block_name })
  const ItemsInInventory = PokeGetItemFromInventory(player, undefined, item.i)
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
        DepositItem(component, player, item, CanDepositAmount, storedItems)
        return;
      } else selection++
    }
    if (response.selection == selection) {
      WithdrawItem(component, player, item, storedItems)
      return;
    } else selection++
    if (response.canceled || response.selection == selection) {
      ViewStoredItems(component, player, storedItems)
      return;
    }
  })
}

function DepositItem(component: RecipeBlockComponentInfo, player: Player, item: StoredItemsInfo, maxAmount: number, storedItems: StoredItemsInfo[]) {
  const UI = new ModalFormData()
  UI.title({ translate: component.block_name })
  UI.slider({ translate: `%poke_pfe.amount` }, 0, maxAmount, { defaultValue: 0 })
  UI.show(player).then(response => {
    const slider = response.formValues?.at(0)
    if (typeof slider == "number" && slider > 0) {
      player.runCommand(`clear @s ${item.i} 0 ${slider}`)
      const storedItemsDynamicPropID = `${component.id}:storedItems`
      const storedItemsProp = <string | undefined>player.getDynamicProperty(storedItemsDynamicPropID)
      const storedItems: StoredItemsInfo[] = JSON.parse(storedItemsProp ?? "[]") ?? []
      const newItem: StoredItemsInfo = {
        i: item.i,
        a: item.a + slider
      }
      let oldItems = storedItems.filter(info => info.i != item.i)
      player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(oldItems.concat(newItem)))
      ViewStoredItems(component, player, oldItems.concat(newItem))
      return;
    }
    if (response.canceled) {
      ViewItem(component, player, item, storedItems)
      return;
    }
  })
}

function WithdrawItem(component: RecipeBlockComponentInfo, player: Player, item: StoredItemsInfo, storedItems: StoredItemsInfo[]) {
  const UI = new ModalFormData()
  UI.title({ translate: component.block_name })
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
          console.warn(`attempted to exceeded withdraw amount || PFE - recipeBlock.ts - WithdrawItem`)
          break;
        }
        const amount = Math.min(Math.max(i, 0), max)
        console.warn(`i = ${i} Amount = ${amount}`)
        player.dimension.spawnItem(new ItemStack(item.i, amount), player.location)
      }
      player.setDynamicProperty(storedItemsDynamicPropID, JSON.stringify(newItem.a <= 0 ? oldItems : oldItems.concat(newItem)))
      ViewStoredItems(component, player, newItem.a <= 0 ? oldItems : oldItems.concat(newItem))
      return;
    }
    if (response.canceled) {
      ViewItem(component, player, item, storedItems)
      return;
    }
  })
}

/*
This will return a texture path based on the identifier

If an icon path is not found it will return "textures/poke/common/question"
*/
function getTexturePathByIdentifier(identifier: string) {
  const IconPathComponent = <string | undefined>new ItemStack(identifier).getComponent("poke_pfe:icon_path")?.customComponentParameters.params
  if (IconPathComponent) return IconPathComponent
  switch (identifier) {
    default: { return "textures/poke/common/question"; break }
  }
}