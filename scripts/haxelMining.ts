import { Dimension, EntityComponentTypes, EquipmentSlot, GameMode, ItemComponentTypes, ItemComponentUseEvent, ItemStack, MolangVariableMap, Player, system, Vector3 } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftEnchantmentTypes } from "@minecraft/vanilla-data";
import { damage_item_ub } from "./main";

interface PFEHaxelComponentInfo {
  "radius": Vector3;
  "canBreakBedrock"?: boolean;
  "canBreakLiquids"?: boolean;
}
class PFEHaxelMining{
  onUse(data:ItemComponentUseEvent){
    const ItemTags = data.itemStack!.getTags().toString();
    let ComponentInfo:PFEHaxelComponentInfo = JSON.parse(ItemTags.substring(ItemTags.indexOf('pfe:HaxelMining:'),ItemTags.indexOf(':pfeHaxelMiningEnd')).substring(16));
    let location:Vector3 = {x: Math.round(data.source.location.x-(ComponentInfo.radius.x/2)),y:Math.round(data.source.location.y-0.01),z:Math.round(data.source.location.z-(ComponentInfo.radius.z/2))}
    //@ts-ignore
    system.runJob(PFEMine(ComponentInfo,location,data.source,data.source.dimension,data.itemStack!.getComponent(ItemComponentTypes.Enchantable)!.hasEnchantment(MinecraftEnchantmentTypes.SilkTouch),data.itemStack))
    //idk how MolangVariableMap works :/
    /*let Variables = new MolangVariableMap().setVector3('variable.direction',ComponentInfo.radius)
    data.source.dimension.spawnParticle('poke:haxel',data.source.location,Variables!)*/
  }
}

//Blocks that should never be broken by haxels
let BannedBlocks:string[]=[ MinecraftBlockTypes.Air,MinecraftBlockTypes.LightBlock,MinecraftBlockTypes.Barrier,MinecraftBlockTypes.Jigsaw,MinecraftBlockTypes.StructureBlock,MinecraftBlockTypes.CommandBlock,MinecraftBlockTypes.ChainCommandBlock,MinecraftBlockTypes.RepeatingCommandBlock,MinecraftBlockTypes.BorderBlock,MinecraftBlockTypes.Allow,MinecraftBlockTypes.Deny,"minecraft:light_block_0","minecraft:light_block_1","minecraft:light_block_2","minecraft:light_block_3","minecraft:light_block_4","minecraft:light_block_5","minecraft:light_block_6","minecraft:light_block_7","minecraft:light_block_8","minecraft:light_block_9","minecraft:light_block_10","minecraft:light_block_11","minecraft:light_block_13","minecraft:light_block_14","minecraft:light_block_15"]
function* PFEMine(data:PFEHaxelComponentInfo,location:Vector3,player:Player,dim:Dimension,silkTouch:boolean,item:ItemStack){
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
      let newItem = damage_item_ub(item, DurabilityAmount);
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
    player.runCommand(`tp @e[type=item,r=${data.radius.x}] @s`)
  }
}
export {
  PFEHaxelComponentInfo,
  PFEHaxelMining
}