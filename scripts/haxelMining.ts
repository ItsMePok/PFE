import { Dimension, EntityComponentTypes, EquipmentSlot, GameMode, ItemComponentTypes, ItemComponentUseEvent, ItemStack, MolangVariableMap, Player, system, Vector3 } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftEnchantmentTypes } from "@minecraft/vanilla-data";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { PFEDamageItemUB } from "./main";
interface PFEHaxelConfig{
  "blacklist": string[];
}
const PFEHaxelConfigDefault:PFEHaxelConfig = {
  "blacklist":[
    MinecraftBlockTypes.Chest,
    MinecraftBlockTypes.Barrel,
    MinecraftBlockTypes.BuddingAmethyst,
    MinecraftBlockTypes.MobSpawner,
    MinecraftBlockTypes.TrialSpawner,
    MinecraftBlockTypes.Vault,
    MinecraftBlockTypes.Bed
  ]
}
interface PFEHaxelComponentInfo {
  "radius": Vector3;
  "canBreakBedrock"?: boolean;
  "canBreakLiquids"?: boolean;
}
class PFEHaxelMining{
  onUse(data:ItemComponentUseEvent){
    //@ts-ignore
    let dynamicProperty:PFEHaxelConfig= data.itemStack?.getDynamicProperty('pfe:haxelInfo')
    console.warn(dynamicProperty)
    if(dynamicProperty == undefined){
      data.itemStack?.setDynamicProperty('pfe:haxelInfo',JSON.stringify(PFEHaxelConfigDefault))
      //@ts-ignore
      data.source.getComponent(EntityComponentTypes.Equippable)!.setEquipment(EquipmentSlot.Mainhand, data.itemStack)
      dynamicProperty=PFEHaxelConfigDefault
      //@ts-ignore
    }else dynamicProperty=JSON.parse(dynamicProperty)
    const ItemTags = data.itemStack!.getTags().toString();
    let ComponentInfo:PFEHaxelComponentInfo = JSON.parse(ItemTags.substring(ItemTags.indexOf('pfe:HaxelMining:'),ItemTags.indexOf(':pfeHaxelMiningEnd')).substring(16));
    if(data.source.isSneaking){
      PFEHaxelConfigMenu(data,ComponentInfo)
      return
    }
    //Blocks that should never be broken by haxels
    let localBlacklist:string[] = []
    localBlacklist = dynamicProperty.blacklist!
    let BannedBlocks:string[]=[MinecraftBlockTypes.Air,MinecraftBlockTypes.LightBlock,MinecraftBlockTypes.Barrier,MinecraftBlockTypes.Jigsaw,MinecraftBlockTypes.StructureBlock,MinecraftBlockTypes.CommandBlock,MinecraftBlockTypes.ChainCommandBlock,MinecraftBlockTypes.RepeatingCommandBlock,MinecraftBlockTypes.BorderBlock,MinecraftBlockTypes.Allow,MinecraftBlockTypes.Deny,"minecraft:light_block_0","minecraft:light_block_1","minecraft:light_block_2","minecraft:light_block_3","minecraft:light_block_4","minecraft:light_block_5","minecraft:light_block_6","minecraft:light_block_7","minecraft:light_block_8","minecraft:light_block_9","minecraft:light_block_10","minecraft:light_block_11","minecraft:light_block_13","minecraft:light_block_14","minecraft:light_block_15"]
    let location:Vector3 = {x: Math.round(data.source.location.x-(ComponentInfo.radius.x/2)),y:Math.round(data.source.location.y-0.01),z:Math.round(data.source.location.z-(ComponentInfo.radius.z/2))}
    //@ts-ignore
    system.runJob(PFEMine(BannedBlocks.concat(localBlacklist),ComponentInfo,location,data.source,data.source.dimension,data.itemStack!.getComponent(ItemComponentTypes.Enchantable)!.hasEnchantment(MinecraftEnchantmentTypes.SilkTouch),data.itemStack))
    //idk how MolangVariableMap works :/
    /*let Variables = new MolangVariableMap().setVector3('variable.direction',ComponentInfo.radius)
    data.source.dimension.spawnParticle('poke:haxel',data.source.location,Variables!)*/
    
  }
}

function* PFEMine(BannedBlocks:string[],data:PFEHaxelComponentInfo,location:Vector3,player:Player,dim:Dimension,silkTouch:boolean,item:ItemStack){
  let DurabilityAmount = 0
  for (let x = location.x; x < location.x + data.radius.x; x++) {
    for (let y = location.y; y < location.y + data.radius.y; y++) {
      for (let z = location.z; z < location.z + data.radius.z; z++) {
        const block = dim.getBlock({ x: x, y: y, z: z });
        if (block) {
          //console.warn(block.typeId)
          if(BannedBlocks.includes(block.typeId) || (block.typeId == MinecraftBlockTypes.Bedrock && !data.canBreakBedrock) || (block.isLiquid && !data.canBreakLiquids)){}
          else{
            DurabilityAmount = DurabilityAmount+1
            if (silkTouch){
              let blockItemStack = block.getItemStack(1,false);
              //in case itemStack is missing
              if (!blockItemStack) blockItemStack = new ItemStack(block.typeId);
              block.dimension.spawnItem(blockItemStack,player.location);
              block.setType(MinecraftBlockTypes.Air)
            }else{
              let blockLocation = `${block.location.x} ${block.location.y} ${block.location.z}`;
              //cannot be runCommandAsync, can exceed 128
              //preferably would like to remove/rework if there is a way to do non-silkTouch without runCommand
              block.dimension.runCommand(`setblock ${blockLocation} air destroy`)
            }
          }
        }
        yield;
      }
    }
  }
  if (DurabilityAmount != 0){
    if (item.hasComponent(ItemComponentTypes.Durability) && player.getGameMode() != GameMode.creative) {
      //console.warn(DurabilityAmount)
      let newItem = PFEDamageItemUB(item, DurabilityAmount);
      //@ts-ignore
      player.getComponent(EntityComponentTypes.Equippable)!.setEquipment(EquipmentSlot.Mainhand, newItem)
      if (!newItem) {
          player.playSound("random.break")
      }
    }
    player.dimension.playSound("dig.stone", player.location);
  }
  if (!silkTouch){
    //to reduce item lag
    player.runCommand(`tp @e[type=item,r=${Math.max(data.radius.x,data.radius.y)+1}] @s`)
  }
}

function PFEHaxelConfigMenu(data:ItemComponentUseEvent,ComponentInfo:PFEHaxelComponentInfo){
  //@ts-ignore
  let dynamicProperty:PFEHaxelConfig= data.itemStack?.getDynamicProperty('pfe:haxelInfo')
  //@ts-ignore
  dynamicProperty=JSON.parse(dynamicProperty)
  let Ui = new ActionFormData()
  .title({translate:`translation.poke:haxelConfig.mainMenu.title`,with:{rawtext:[{translate:`item.${data.itemStack?.typeId}`.replace(`§9PFE§r`,``)}]}})
  .button({translate:`translation.poke:haxelConfig.mainMenu.blacklistAdd`},`textures/items/misc/poke_blacklist_add`)
  if (dynamicProperty.blacklist.length >= 1){
    Ui.button({translate:`translation.poke:haxelConfig.mainMenu.blacklistRemove`},`textures/items/misc/poke_blacklist_remove`)
  }
  //@ts-ignore
  Ui.show(data.source).then((response =>{
    if (response.canceled)return;
    //Add Block to Blacklist
    if (response.selection == 0){
      PFEHaxelConfigBlackListAdd(data,ComponentInfo,dynamicProperty)
      return
    }
    //Remove Block from Blacklist
    if (response.selection == 1){
      PFEHaxelConfigBlackListRemove(data,ComponentInfo,dynamicProperty)
      return
    }
  }))
}
function PFEHaxelConfigBlackListAdd(data:ItemComponentUseEvent,ComponentInfo:PFEHaxelComponentInfo,dynamicProperty:PFEHaxelConfig){
let Ui = new ModalFormData()
.title({translate:`translation.poke:haxelConfig.mainMenu.title`,with:{rawtext:[{translate:`item.${data.itemStack?.typeId}`.replace(`§9PFE§r`,``)}]}})
.textField({translate:`translation.poke:haxelConfig.blacklistAdd.textLabel`},'','')
.submitButton({translate:`translation.poke:haxelConfig.blacklistAdd.submit`})
//@ts-ignore
Ui.show(data.source).then((response =>{
  if (response.canceled)return;
  let block = response.formValues?.at(0)
  if (block == '')return;
  if (typeof block == "string"){
    if (!block.includes(':')){
      block = `minecraft:${block}`
    }
    dynamicProperty.blacklist=dynamicProperty.blacklist.concat(block)
    data.itemStack?.setDynamicProperty('pfe:haxelInfo',JSON.stringify(dynamicProperty))
    //@ts-ignore
    data.source.getComponent(EntityComponentTypes.Equippable)!.setEquipment(EquipmentSlot.Mainhand, data.itemStack)
  }
}))
}
function PFEHaxelConfigBlackListRemove(data:ItemComponentUseEvent,ComponentInfo:PFEHaxelComponentInfo,dynamicProperty:PFEHaxelConfig){
  let Ui = new ActionFormData()
  .title({translate:`translation.poke:haxelConfig.mainMenu.blacklistRemove`})
  dynamicProperty.blacklist.forEach(block => {
    Ui.button({translate:`tile.${block.replace(`minecraft:`,``)}.name`})
  });
  //@ts-ignore
  Ui.show(data.source).then((response =>{
    if (response.canceled)return;
    for(let i = dynamicProperty.blacklist.length; i >= -1; i--){
      if (response.selection == i){
        dynamicProperty.blacklist.splice(i,1)
        data.itemStack?.setDynamicProperty('pfe:haxelInfo',JSON.stringify(dynamicProperty))
        //@ts-ignore
        data.source.getComponent(EntityComponentTypes.Equippable)!.setEquipment(EquipmentSlot.Mainhand, data.itemStack)
      }
    }
  }))
}
export {
  PFEHaxelComponentInfo,
  PFEHaxelMining
}