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
* The world dynamic property `poke_pfe:existed`  could be used to see if PFE has existed on a world
  *   This is a Boolean that will always be set to true





### How can you make your addon compatible with PFE?

* The biggest thing is avoiding modifying vanilla files/features
  * some examples:
    * modifying the crafting table's UI (usually done to make custom crafting tables) can completely break the `minecraft:crafting_table` block component resulting in the [crafters](../blocks/crafters/ "mention") (Spell crafter & Dye Un-mixer)
  * See [vanilla-files-modified.md](vanilla-files-modified.md "mention") and make sure you are not modifying any of the same files&#x20;

[^1]: This means that PFE would have additional features when using these Add-ons
