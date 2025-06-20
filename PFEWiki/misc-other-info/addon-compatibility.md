# Addon Compatibility

## What Addons are have [PFE integration](#user-content-fn-1)[^1]

### [Papercraft Mob Stickers](https://www.minecraft.net/en-us/marketplace/pdp/jigarbov-productions/papercraft-mob-stickers-add--on/2c1b0abb-c954-459c-831c-8ad3d8e4f7e0)

* When this Add-On is on a world with PFE you can obtain stickers of every mob in PFE

{% hint style="info" %}
Even if this Add-On is not installed you can still get them in creative&#x20;
{% endhint %}

### [Computers Add-On](https://www.minecraft.net/en-us/marketplace/pdp/jigarbov-productions/computers-add--on/fd6e3c20-5a7e-4f95-ad16-cd2486d13ae5)

* When this Add-On is on a world with PFE you can see stats on various things from PFE

{% hint style="info" %}
Even if this Add-On is not installed these stats will be saved in scoreboard
{% endhint %}

### [Novelty API](https://www.curseforge.com/minecraft-bedrock/addons/novelty)

* When this Add-On is on a world with PFE you can put various items in the Accessories Menu's slots
* Items with equip / set effects in these slots will also provide their effect contributions

### [Just Cosmetics](https://www.curseforge.com/minecraft-bedrock/addons/just-cosmetics)

* When this Add-On is on a world with PFE:
  * [The Listener](../mobs/bosses/the-listener.md) will drop the PFE Listener Hoodie
  * You can craft the Poke's Fantasy Expansion Merch

## What can be integrated into from PFE

{% hint style="danger" %}
As of PFE v1.2.95:

integrations via scriptevent must be sent after `world.afterEvents.worldLoad` would trigger

This is due to a change made in script v2.0.0
{% endhint %}

* scriptevent `poke_pfe:enabled`&#x20;
  * This will send true (as a string) to the scriptevent id provided in the message

{% hint style="info" %}
Example command: `/scriptevent poke_pfe:enabled poke_pfe:receive_test`

This would send true (as a string) to the script event id of `poke_pfe:receive_test`
{% endhint %}

### Armor Effects

```typescript
/*
Add-On Creators: You can add set effect presets into PFE's set effect system.

Note: the custom preset get re-initialized after the world loads. 
This is to ensure that players will not get set effects form Add-Ons that 
are no longer to the world. 

The soonest presets should be sent/added is a few seconds after the world loads
(This is to ensure it will not get caught in the re-initialization)

Presets can be added at anytime after the soonest possible & will still take effect


This is example code for adding 2 custom presets: 1 will check for item tags
while the other looks for a value within the item's lore
*/
import { world } from "@minecraft/server"
/*
Interface for effect options
effect: the effect identifer
maxAmp: this will decide what the highest effect amplifier/level this item can give (the highest max of equipped items will be used) 
*/
interface PFEEffectOptions {
  effect: MinecraftEffectTypes | string,
  max_amp: number
}
/*
Interface for adding custom set effect presets, 
Mode: (defaults to tag) lore will make `tag` check the lore of an item to see if it contains a certain value (it can be anywhere in it, just need to exist)
*/
interface PFECustomEffectInfo {
  mode?: "tag" | "lore"
  effects: PFEEffectArray[],
  tag: string,
}
/*
This is what you would send via script event
*/
interface PFEUnparsedCustomEffectInfo {
  value: PFECustomEffectInfo[]
}
world.afterEvents.worldInitialize.subscribe((data) => {
  const Presets: PFEUnparsedCustomEffectInfo = {
    value: [
      { mode: "tag", effects: [{ effect: "minecraft:night_vision", max_amp: 1 }], tag: "poke_pfe:night_vision" },
      { mode: "lore", effects: [{ effect: "minecraft:regeneration", max_amp: 3 }, { effect: "minecraft:fatal_poison", max_amp: 4 }], tag: "poke_pfe:custom_preset" }
    ]
  }
  world.getDimension(`minecraft:overworld`).runCommand(`scriptevent poke_pfe:add_set_effect_preset ${JSON.stringify(Presets)}`)
})
```

## Quests:

```typescript
/*
Add-On Creators: You can add quests into PFE's quest system.

Note: the custom quests get re-initialized after the world loads. 
This is to ensure that players will not get quests for Add-Ons that 
are no longer in the world. (Quests should be added a few seconds after the world loads)

Note x2: Quests that have been rolled not be able to be changed

This is example code. This will add a Mine quest for 7x Cut Cobalt for 7x Copper Tokens:
*/
import { ItemStack, world } from "@minecraft/server"
interface PFECustomQuests {
  value: [{
    requiredItem: {
      item: string,
      amount: number
      translationString: string
    },
    reward: {
      tokenAmount: number,
      item?: ItemStack tead (MAY NOT WORK IN CUSTOM QUESTS)
    }
  }]
}
interface PFEQuestInfo {
  requiredItem: {
    item: string, // the identifier of the required item
    amount: number // amount of the item the player needs in order to complete this quest
    translationString: string // this follows the same syntax as the minecraft:display_name component
  },
  reward: {
    tokenAmount: number, // number of Copper Tokens the player receives
    item?: ItemStack // optional: an itemStack that the player would receive ins
  }
}
interface PFECustomQuests {
    value: PFEQuestInfo[]
}
const PFECustomMineQuestsPropertyID = `poke_pfe:custom_mine_quests`
const PFECustomFarmQuestsPropertyID = `poke_pfe:custom_farm_quests`
const PFECustomCraftQuestsPropertyID = `poke_pfe:custom_craft_quests`
const PFECustomKillQuestsPropertyID = `poke_pfe:custom_kill_quests`

world.afterEvents.worldInitialize.subscribe((data) => {
  const AddedMineQuests:PFECustomQuests = {
    value: [
      { requiredItem: { item: `poke:cut_cobalt`, amount: 7, translationString: `%poke_pfe.cut_cobalt (%poke_pfe.tag)` }, reward: { tokenAmount: 7 } }
    ]
  }
  world.getDimension(`minecraft:overworld`).runCommand(`scriptevent poke_pfe:custom_mine_quests ${JSON.stringify(AddedMineQuests)}`)
})
```

## How can you make your addon compatible with PFE?

* The biggest thing is avoiding modifying vanilla files/features
  * some examples:
    * modifying the crafting table's UI (usually done to make custom crafting table UIs) can completely break the `minecraft:crafting_table` block component resulting in the [crafters](../blocks/crafters/ "mention") ([Spell crafter](../blocks/crafters/spell-crafter.md) & [Dye Un-mixer](../blocks/crafters/dye-unmixer.md))
  * See [vanilla-files-modified.md](vanilla-files-modified.md "mention") and make sure you are not modifying any of the same files&#x20;

[^1]: This means that PFE would have additional features when using these Add-ons
