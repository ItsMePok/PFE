import { EntityComponentTypes, EntityEquippableComponent, EntityProjectileComponent, EquipmentSlot, ItemComponentTypes, ItemComponentUseEvent, ItemCooldownComponent, ItemStack, Player} from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { PokeDamageItemUB, PokeErrorScreen, PokeGetItemFromInventory, PokeGetObjectById, PokeSaveProperty } from "./commonFunctions";
import { MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";

export{
  PFEBoltBowsComponent
}
const PFEAmmoProperty = `poke:ammo`
interface PFEAmmoStorageInfo{
  id:string // Projectile ITEM identifier
  entityId:string // Projectile Entity Id
  amount:number
  max:number|undefined // Maximum amount that can be stored
  upgrades:PFEItemUpgradeInfo[]
}

interface PFEItemUpgradeInfo{
  id:string // name of the upgrade
  level: number // current upgrade level
  maxLevel?: number|undefined // max level of upgrade
}

// Right now we only allow 1 type of arrow to be stored at a time but to future proof it is in an array
const PFEAmmoStorageDefault:PFEAmmoStorageInfo[] = [
  {
    max: 32,
    amount: 16,
    entityId: MinecraftEntityTypes.Arrow,
    id: MinecraftItemTypes.Arrow,
    upgrades:[
      {
        id: "pfe:capacity",
        level: 1,
        maxLevel: undefined
      }
    ]
  }
]

class PFEBoltBowsComponent{
  onUse(data:ItemComponentUseEvent){
    if(data.itemStack==undefined)return;
    if (data.source.isSneaking){
      PFEAmmoManagementMainMenuUI(data.itemStack,data.source)
      return
    }
    else if (typeof data.itemStack.getDynamicProperty(PFEAmmoProperty) != "string"){
      PokeSaveProperty(PFEAmmoProperty,data.itemStack,JSON.stringify(PFEAmmoStorageDefault),data.source)
    }
    let ammoComponent:PFEAmmoStorageInfo = JSON.parse(data.itemStack.getDynamicProperty(PFEAmmoProperty)!.toString()).at(0)
    const cPlayers = data.source.dimension.getPlayers({excludeNames:[''+data.source.name]})
    for (var i = cPlayers.length; i > 0; i--) {
        data.source.playAnimation('animation.poke_pfe.humanoid.boltbow_hold_3p',{blendOutTime:0.5,stopExpression: `!q.is_item_name_any('slot.weapon.mainhand','${data.itemStack.typeId}')`, players:[cPlayers[i-1].name]})
    }
    //@ts-ignore
    const cooldownComponent:ItemCooldownComponent = data.itemStack.getComponent(ItemComponentTypes.Cooldown)
    if (cooldownComponent){
      const ticks:number = cooldownComponent.cooldownTicks
      if (cooldownComponent.getCooldownTicksRemaining(data.source) != ticks -1) return;
    }
    let delay = 1
    //if (data.source.getDynamicProperty(`poke:isUsingItem`)===false){
      if (ammoComponent.amount >= 1){
        data.source.playAnimation(`animation.poke_pfe.boltbow.use`)
        //@ts-ignore
        let equippableComponent:EntityEquippableComponent= data.source.getComponent(EntityComponentTypes.Equippable)
        if ((equippableComponent.getEquipmentSlot(EquipmentSlot.Mainhand).getItem()?.typeId != data.itemStack?.typeId)|| (equippableComponent.getEquipmentSlot(EquipmentSlot.Mainhand).getDynamicProperty(PFEAmmoProperty) != JSON.stringify([ammoComponent])))return
        PokeShoot(data.source,ammoComponent,data.itemStack,delay)
        data.source.setDynamicProperty(`poke:isUsingItem`,true)
        /*system.runTimeout(()=>{
          
        },delay)*/
      }else{
        data.source.dimension.playSound(`poke.boltbow.noAmmo`,data.source.location)
      }
      return
    //}
    return;
    
  }
}

function PokeShoot(player:Player,ammoComponent:PFEAmmoStorageInfo,item:ItemStack|undefined,delay:number){
  if (!item)return;
  ammoComponent.amount = ammoComponent.amount -1
  item.setDynamicProperty(PFEAmmoProperty,JSON.stringify([ammoComponent]))
  const headLocate = player.getHeadLocation();
  const angle = player.getViewDirection();
  const projEntity = player.dimension.spawnEntity(ammoComponent.entityId,{x:headLocate.x+ (angle.x *2),y:headLocate.y-0.25 +(angle.y *2),z:headLocate.z+ (angle.z *2)});
  //@ts-ignore
  const projComp:EntityProjectileComponent = projEntity.getComponent(EntityComponentTypes.Projectile);
  if (ammoComponent.amount > 3){
    player.playSound(`random.bow`);
  }else if (ammoComponent.amount == 3){
    player.playSound(`random.bow`,{pitch:1.05})
  }else if(ammoComponent.amount == 2){
    player.playSound(`random.bow`,{pitch:1.15})
  }else if(ammoComponent.amount == 1){
    player.playSound(`random.bow`,{pitch:1.25})
  }
  projComp.owner = player;projComp.shoot(angle,{uncertainty:0.001});
  if (PokeDamageItemUB(item,undefined,player,EquipmentSlot.Mainhand)?.broke){
    player.runCommand(`give @s ${ammoComponent.id} ${ammoComponent.amount} 0`)
  }

};
/**
 * UI -> Main Menu
 */
function PFEAmmoManagementMainMenuUI(item:ItemStack,player:Player){
  let UI = new ActionFormData()
  UI.title({translate:`translation.poke:ammoUIMainMenuTitle`,with:{rawtext:[{translate:`item.${item.typeId}`.replace(`§9PFE§r`,``)}]}})
  if (typeof item.getDynamicProperty(PFEAmmoProperty) != "string"){
    PokeSaveProperty(PFEAmmoProperty,item,JSON.stringify(PFEAmmoStorageDefault),player)
  }
  let ammoComponent:PFEAmmoStorageInfo = JSON.parse(item.getDynamicProperty(PFEAmmoProperty)!.toString()).at(0)
  UI.button({translate:`translation.poke:ammoUIQuickReload`,with:{rawtext:[{text:`${ammoComponent.amount}`},{text:`${ammoComponent.max}`}]}},`textures/poke/common/ammoQuickReload`)
  UI.button({translate:`translation.poke:ammoUIAddAmmo`},`textures/poke/common/ammoReload`)
  UI.button({translate:`translation.poke:ammoUIUpgrade`},`textures/poke/common/upgrade`)
  UI.button({translate:`translation.poke:bossEventClose`},`textures/poke/common/close`)
  
  UI.show(player).then((response =>{
    let selection = 0
    if (response.selection == selection){// Quick Reload
      PFEQuickReload(ammoComponent,item,player)
      return
    }else selection++
    if (response.selection == selection){// Reload
      PFEAmmoManagementAddAmmoUI(item,player)
      return
    }else selection++
    if (response.selection == selection){// Upgrade
      PFEAmmoUpgrade(player,item)
      return
    }else selection++
    if (response.canceled || selection){ // Close
      return
    }
  }))
}

function PFEAmmoManagementAddAmmoUI(item:ItemStack,player:Player){
  let UI = new ActionFormData()
  let allowedAmmo = [`minecraft:arrow`,`poke:galaxy_arrow`,`poke:holy_arrow`,`poke:hellish_arrow`,`poke:void_arrow`,`poke:volt_arrow`]
  UI.title({translate:`translation.poke:ammoUIMainMenuTitle`})
  let ammoComponent:PFEAmmoStorageInfo = JSON.parse(item.getDynamicProperty(PFEAmmoProperty)!.toString()).at(0)
  let buttonTotal = 0
  let allItems:ItemStack[] = []
  for (let i = allowedAmmo.length-1; i > -1; i--){
    let items = PokeGetItemFromInventory(player,undefined,allowedAmmo.at(i))
    if (!items){
      continue
    }
    //console.warn(`found items: ${items.length}`)
    allItems = allItems.concat(items)
    for (let i = items.length; i > -1; i--){
      let foundItem = items.at(i)
      if (!foundItem)continue;
      if (foundItem.typeId == MinecraftItemTypes.Arrow){
        UI.button({rawtext:[{translate:`item.arrow.name`},{text:` x${foundItem.amount}`}]},PFEArrowIcon(foundItem.typeId))
      }else{
        UI.button({rawtext:[{translate:`item.${foundItem.typeId}`},{text:` x${foundItem.amount}`}]},PFEArrowIcon(foundItem.typeId))
      }
      buttonTotal = buttonTotal+1
    }
  }
  UI.button({translate:`translation.poke:bossEventClose`},`textures/poke/common/close`)
  
  UI.show(player).then((response =>{
    let selection = 0
    if (response.canceled || response.selection == selection+buttonTotal){ // Go Back
      return
    }
    for (buttonTotal-1; buttonTotal > -1; buttonTotal--){
      if (response.selection == selection){
        let selectedItem = allItems.reverse().at(buttonTotal-1)
        //console.warn(`num: ${selectedItem?.amount},\n id: ${selectedItem?.typeId},\n button: ${buttonTotal}`)
        if (!selectedItem){
          PokeErrorScreen(player,undefined,PFEAmmoManagementAddAmmoUI(item,player))
          return
        }
        if(ammoComponent.id != selectedItem.typeId){
          let newProperty:PFEAmmoStorageInfo[]=[{
            amount: selectedItem.amount,
            max: ammoComponent.max,
            entityId: selectedItem.typeId,
            id:selectedItem.typeId,
            upgrades:ammoComponent.upgrades
          }]
          if(!PokeSaveProperty(PFEAmmoProperty,item,JSON.stringify(newProperty),player)){
            PokeErrorScreen(player,undefined,PFEAmmoManagementAddAmmoUI(item,player))
            return
          }
          player.runCommand(`give @s ${ammoComponent.id} ${ammoComponent.amount}`)
          player.runCommand(`clear @s ${selectedItem.typeId} -1 ${selectedItem.amount}`)
        }else{
          if (!ammoComponent.max){
            let newProperty:PFEAmmoStorageInfo[]=[{
              amount: ammoComponent.amount + selectedItem.amount,
              max: ammoComponent.max,
              entityId: ammoComponent.entityId,
              id:ammoComponent.id,
              upgrades:ammoComponent.upgrades
            }]
            if(!PokeSaveProperty(PFEAmmoProperty,item,JSON.stringify(newProperty),player)){
              PokeErrorScreen(player,undefined,PFEAmmoManagementAddAmmoUI(item,player))
              return
            }
            player.runCommand(`clear @s ${selectedItem.typeId} -1 ${selectedItem.amount}`)
            return;
          }
          let maxRemaining = ammoComponent.max - ammoComponent.amount
          let takeAmount = selectedItem.amount
          if (maxRemaining < selectedItem.amount){
            takeAmount = maxRemaining
          }
          let newProperty:PFEAmmoStorageInfo[]=[{
            amount: ammoComponent.amount+takeAmount,
            max: ammoComponent.max,
            entityId: ammoComponent.entityId,
            id:ammoComponent.id,
            upgrades:ammoComponent.upgrades
          }]
          if(!PokeSaveProperty(PFEAmmoProperty,item,JSON.stringify(newProperty),player)){
            PokeErrorScreen(player,undefined,PFEAmmoManagementAddAmmoUI(item,player))
            return
          }
          player.runCommand(`clear @s ${selectedItem.typeId} -1 ${takeAmount}`)
        }
        return
      }else selection++
    }
    
  }))
}

function PFEArrowIcon(itemId:string){
  switch(itemId){
    case MinecraftItemTypes.Arrow:{
      return `textures/items/arrow`
      break
    }
    case `poke:galaxy_arrow`:{
      return `textures/poke/pfe/galaxy_arrow_item`
      break
    }
    case `poke:void_arrow`:{
      return `textures/poke/pfe/void_arrow_item`
      break
    }
    case `poke:hellish_arrow`:{
      return `textures/poke/pfe/hellish_arrow_item`
      break
    }
    case `poke:holy_arrow`:{
      return `textures/poke/pfe/holy_arrow_item`
      break
    }
    case `poke:volt_arrow`:{
      return `textures/poke/pfe/volt_arrow_item`
      break
    }
  }
}



function PFEQuickReload(ammoComponent:PFEAmmoStorageInfo,item:ItemStack,player:Player){
  let reloadingAmmo = PokeGetItemFromInventory(player,undefined,ammoComponent.id)
  if (!reloadingAmmo){
    PokeErrorScreen(player)
    return
  }
  let totalAmount = 0
  for (let i = reloadingAmmo.length -1; i > -1;i--){
    if (!reloadingAmmo.at(i)) continue;
    totalAmount = totalAmount + reloadingAmmo.at(i)!.amount
  }
  if (!ammoComponent.max){
    let newProperty:PFEAmmoStorageInfo[]=[{
      amount: ammoComponent.amount + totalAmount,
      max: ammoComponent.max,
      entityId: ammoComponent.entityId,
      id:ammoComponent.id,
      upgrades:ammoComponent.upgrades
    }]
    if(!PokeSaveProperty(PFEAmmoProperty,item,JSON.stringify(newProperty),player)){
      PokeErrorScreen(player,undefined,PFEAmmoManagementMainMenuUI(item,player))
      return
    }
    player.runCommand(`clear @s ${ammoComponent.id} -1 ${totalAmount}`)
    return;
  }
  let maxRemaining = ammoComponent.max - ammoComponent.amount
  let takeAmount = totalAmount
  if (maxRemaining < takeAmount){
    takeAmount = maxRemaining
  }
  let newProperty:PFEAmmoStorageInfo[]=[{
    amount: ammoComponent.amount+takeAmount,
    max: ammoComponent.max,
    entityId: ammoComponent.entityId,
    id:ammoComponent.id,
    upgrades:ammoComponent.upgrades
  }]
  if(!PokeSaveProperty(PFEAmmoProperty,item,JSON.stringify(newProperty),player)){
    PokeErrorScreen(player,undefined,PFEAmmoManagementMainMenuUI(item,player))
    return
  }
  player.runCommand(`clear @s ${ammoComponent.id} -1 ${takeAmount}`)
  return
}

function PFEAmmoUpgrade(player:Player,item:ItemStack){
  let UI = new ActionFormData()
  let ammoComponent:PFEAmmoStorageInfo = JSON.parse(item.getDynamicProperty(PFEAmmoProperty)!.toString()).at(0)
  UI.title({translate:`translation.poke:ammoUIUpgradeTitle`,with:{rawtext:[{translate:`item.${item.typeId}`}]}})
  let capacityUpgrade = PokeGetObjectById(ammoComponent.upgrades,`pfe:capacity`)
  if (!capacityUpgrade){
    PokeErrorScreen(player,undefined,PFEAmmoManagementMainMenuUI(item,player))
    return
  }
  let canUpgradeCapacity = false
  if (PokeGetItemFromInventory(player,undefined,`poke:capacity_core`)){
    UI.button({translate:`translation.poke:ammoUpgradeCapacity`,with:{rawtext:[{text:`${capacityUpgrade.value.level}`},{text:`${capacityUpgrade.value.level}`},{translate:`item.poke:capacity_core`}]}},`textures/poke/pfe/capacity_core`)
    canUpgradeCapacity = true
  }else{
    UI.button({translate:`translation.poke:ammoUpgradeCapacity`,with:{rawtext:[{text:`${capacityUpgrade.value.level}`},{text:`${capacityUpgrade.value.level}`},{translate:`item.poke:capacity_core`}]}},`textures/poke/pfe/capacity_core_gs`)
  }
  UI.button({translate:`translation.poke:goBack`},`textures/poke/common/left_arrow`)
  UI.show(player).then(response =>{
    let selection = 0
    if (response.selection == selection){//Capacity
      if (!canUpgradeCapacity){
        PokeErrorScreen(player,undefined,PFEAmmoManagementMainMenuUI(item,player))
        return
      }
      let newCapacity:PFEItemUpgradeInfo = {
        id: capacityUpgrade.value.id,
        level: capacityUpgrade.value.level +1,
        maxLevel: capacityUpgrade.value.maxLevel
      }
      let newProperty:PFEAmmoStorageInfo[]=[{
        amount: ammoComponent.amount,
        max: Number(ammoComponent.max) +16,
        entityId: ammoComponent.entityId,
        id:ammoComponent.id,
        upgrades:ammoComponent.upgrades.filter((upgrades) => {upgrades.id != `pfe:capacity`}).concat(newCapacity)
      }]
      if(!PokeSaveProperty(PFEAmmoProperty,item,JSON.stringify(newProperty),player)){
        PokeErrorScreen(player,undefined,PFEAmmoManagementAddAmmoUI(item,player))
        return
      }
      player.runCommand(`clear @s poke:capacity_core -1 ${capacityUpgrade.value.level}`)
      return
    }else selection++
    if (response.canceled || response.selection == selection){
      PFEAmmoManagementMainMenuUI(item,player)
      return
    }
  })
}