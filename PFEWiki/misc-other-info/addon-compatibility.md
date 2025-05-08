# Addon Compatibility

### What Addons are have [PFE integration](#user-content-fn-1)[^1]

#### Papercraft Mob Stickers

* When this Add-On is on a world with PFE you can obtain stickers of every mob in PFE

{% hint style="info" %}
Even if this Add-On is not installed you can still get them in creative&#x20;
{% endhint %}

#### Computers Add-On

* When this Add-On is on a world with PFE you can see stats on various things from PFE

{% hint style="info" %}
Even if this Add-On is not installed these stats will be saved in scoreboard
{% endhint %}

#### Novelty API

* When this Add-On is on a world with PFE you can put various items in the Accessories Menu's slots
* Items with equip / set effects in these slots will also provide their effect contributions



### What can be integrated into from PFE

* Giving an amor piece a tag from the PFE armors (ex: `poke_pfe:astral_armor_effects` will grant Astral's set effects when equipped
* scriptevent `poke_pfe:enabled`&#x20;
  * This will send true (as a string) to the scriptevent id provided in the message

{% hint style="info" %}
Example command: `/scriptevent poke_pfe:enabled poke_pfe:receive_test`

This would send true (as a string) to the script event id of `poke_pfe:receive_test`
{% endhint %}

* Quests:

```typescript
/*
Add-On Creators: You can add quests into PFE's quest system.

Note: the custom quests get re-initialized each time the world starts. 
This is to ensure that players will not get quests for Add-Ons that 
are no longer in the world. (Quests can be added at any time after the world loads)

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

### How can you make your addon compatible with PFE?

* The biggest thing is avoiding modifying vanilla files/features
  * some examples:
    * modifying the crafting table's UI (usually done to make custom crafting tables) can completely break the `minecraft:crafting_table` block component resulting in the [crafters](../blocks/crafters/ "mention") (Spell crafter & Dye Un-mixer)
  * See [vanilla-files-modified.md](vanilla-files-modified.md "mention") and make sure you are not modifying any of the same files&#x20;

[^1]: This means that PFE would have additional features when using these Add-ons
