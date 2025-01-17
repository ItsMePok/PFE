import { Entity, EntityComponentTypes, EntityEquippableComponent, EntityInventoryComponent, EquipmentSlot, GameMode, ItemComponentTypes, ItemDurabilityComponent, ItemStack, Player, RawMessage, Vector3 } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { MinecraftEnchantmentTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

export {
  PokeDamageItemUB,
  PokeDamageItem,
  PokeDecrementStack,
  PokeErrorScreen,
  PokeGetItemFromInventory,
  PokeItemTranslateString,
  PokeGetObjectById,
  PokeSaveProperty
}

// Tool Durability initially from https://wiki.bedrock.dev/items/tool-durability.html
function PokeDamageItem(item:ItemStack) {
  // Get durability
  if (!item.hasComponent(ItemComponentTypes.Durability)) return item;
  //@ts-ignore
  const durabilityComponent:ItemDurabilityComponent = item.getComponent(ItemComponentTypes.Durability)
  let unbreaking:number = 0
  // Apply damage
  if (durabilityComponent.damage == durabilityComponent.maxDurability) {
  }
  durabilityComponent.damage += Number(Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreaking))
  return item
}

/**
 * Durability (w/ unbreaking)
 * 
 * ```item``` will get assigned a dynamic property (```pfe:holdFix```) regardless if it takes durability to ensure the item can be held to continue using
 *
 * ---
 * 
 * ```multiplier``` is how much durability it would take (if unbreaking takes effect it will take no durability regardless of the multiplier)
 * 
 * ---
 * 
 * ```slot``` can be defined to change what slot gets targeted (default: Mainhand)
 * 
 * ---
 * 
 * if ```entity``` is player & in creative it will never take durability
 */
function PokeDamageItemUB(item:ItemStack,multiplier:undefined|number,entity:Entity|Player,slot?:EquipmentSlot){
  // check if the item does not have a durability component to avoid deleting itself
  if (!item.hasComponent(ItemComponentTypes.Durability)){
    PokeSaveProperty(`poke:holdFix`,item,Math.round(Math.random()*100),entity,slot)
    return {tookDurability:false,failed:true,broke:false}
  }
  if (!entity.hasComponent(EntityComponentTypes.Equippable)){
    return {tookDurability:false,failed:true,broke:false}
  }
  // we set a dynamic property to ensure that holding will continue to trigger regardless if unbreaking takes effect
  //@ts-ignore
  let equippableComponent:EntityEquippableComponent = entity.getComponent(EntityComponentTypes.Equippable)

  // Get durability
  //@ts-ignore
  const durabilityComponent:ItemDurabilityComponent = item.getComponent(ItemComponentTypes.Durability)

  var unbreakingL = 0

  if(!slot){
    slot = EquipmentSlot.Mainhand
  }
  if (entity.typeId == MinecraftEntityTypes.Player){
    //@ts-ignore 
    if (entity.getGameMode() == GameMode.creative){
      PokeSaveProperty(`poke:holdFix`,item,Math.round(Math.random()*100),entity,slot)
      return{tookDurability:false,failed:false,broke:false,gmc:true}
    }
  }
  // Get unbreaking level
  if (item.hasComponent(ItemComponentTypes.Enchantable)){
      //@ts-ignore
      if (item.getComponent(ItemComponentTypes.Enchantable)!.hasEnchantment(MinecraftEnchantmentTypes.Unbreaking)){
          //@ts-ignore
          unbreakingL = item.getComponent(ItemComponentTypes.Enchantable)!.getEnchantment(MinecraftEnchantmentTypes.Unbreaking).level
      }
  }

  let damage = Number(Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreakingL))
  
  if (typeof multiplier == "number"){
      damage *= multiplier
  }
  if (durabilityComponent.damage + damage >= durabilityComponent.maxDurability)durabilityComponent.damage = durabilityComponent.maxDurability;
  else durabilityComponent.damage += damage;
  // Apply damage
  if (durabilityComponent.damage >= durabilityComponent.maxDurability) {
    if (equippableComponent.getEquipment(slot)?.typeId == item.typeId){
      equippableComponent.setEquipment(slot,undefined)
      entity.dimension.playSound(`random.break`,entity.location,{pitch:Math.max(Math.max((Math.random()*1.05),0.95))})
    }
    return
  }
  PokeSaveProperty(`poke:holdFix`,item,Math.round(Math.random()*100),entity,slot)
  return
}

/**
 * Decrements the stack by 1
 * 
 * optional: define ```amount``` to add/remove from the itemStack's amount
 * 
 */
function PokeDecrementStack(item:ItemStack,amount?:number) {
    if (item.amount<=1)return undefined
    else {
      if (amount){
        item.amount += amount
        //↓ shouldn't be necessary but just in case
        if (item.amount > item.maxAmount) item.amount = item.maxAmount
      }else item.amount += -1
      return item
    }
}

/**
 * Generic Error Pop-up
 * 
 * If player clicks "Go Back" or closes the ui without selecting option: ```backTo``` will be executed
 * 
 * If player clicks close nothing will happen & the UI closes
 */
function PokeErrorScreen(player:Player,error?:RawMessage,backTo?:any){
  let UI = new ActionFormData()
  if(!error){
    error = {translate:`translation.poke:errorGeneric`}
  }
  UI.title({translate:`translation.poke:errorGeneric`})
  UI.body(error)
  UI.button({translate:`translation.poke:goBack`},`textures/poke/common/left_arrow`)
  UI.button({translate:`translation.poke:bossEventClose`},`textures/poke/common/close`)
  UI.show(player).then((response =>{
    if (response.canceled||response.selection==1){
      backTo
      return
    } 
    if (response.selection==2){
      return
    }
  }))
}

/**
 * Returns an array of items that are in the players inventory
 * 
 * You can define an item identifier to return items of only that type
 * 
 * You can define a slot number to target only that slot
 */
function PokeGetItemFromInventory(entity:Entity,slot?:number,itemId?:string){
  //@ts-ignore
  let inventoryComponent:EntityInventoryComponent = entity.getComponent(EntityComponentTypes.Inventory)
  if (inventoryComponent){
    let returningItems:ItemStack[] = []
    if (slot) {
      let slottedItem= inventoryComponent.container?.getItem(slot)
      if (!slottedItem)return slottedItem
      if (itemId){
        if (slottedItem.typeId == itemId) return [slottedItem];
        else return undefined
      }
      else return [slottedItem]
    }
    for (let i = inventoryComponent.inventorySize-1; i > -1; i--){
      let slottedItem = inventoryComponent.container?.getItem(i)
      if (!slottedItem)continue
      if (!itemId){
        returningItems = returningItems.concat([slottedItem])
        continue
      }else{
        if (slottedItem.typeId == itemId){
          returningItems = returningItems.concat([slottedItem])
          continue
        }
      }
    }
    if (returningItems.length == 0){
      return undefined
    }
    return returningItems
  }
}

/**
 * Returns a translation string
 * 
 * if the item is named it will return that instead
 */
function PokeItemTranslateString(item:ItemStack){
  let name = `item.${item.typeId}`
  if (item.nameTag){
    name = item.nameTag
  }
  return name
}

/**
 * If an object has an ID value; returns that object
 * 
 * ```
 * {
 * 	id: string|number,
 * 	...
 * }
 * ```
 * 
 * returns undefined if unable to find an object with matching id
 */
function PokeGetObjectById(array:any[], id:string|number){
  for (let i = array.length-1; i > -1; i--){
    if (array.at(i).id == id)return {
      value: array.at(i),
      position: i
    }
    
  }
  return undefined
}

/**
 * 
 * returns false if it fails to save the property
 */
function PokeSaveProperty(propertyId:string,item:ItemStack,save:string|boolean|number|Vector3,entity:Entity,slot?:EquipmentSlot){
  //console.warn(`saved as ${save}`)
  item.setDynamicProperty(propertyId,save)
  if(!slot)slot=EquipmentSlot.Mainhand
  //@ts-ignore
  let equippableComponent:EntityEquippableComponent= entity.getComponent(EntityComponentTypes.Equippable)
  if (equippableComponent.getEquipmentSlot(slot).typeId == item.typeId){
    equippableComponent.setEquipment(slot, item);
    return true
  }else{
    return false
  }
}