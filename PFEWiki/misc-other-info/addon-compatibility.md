# Addon Compatibility



### How can you make your addon compatibile with PFE?

* The biggest thing is avoiding modifying vanilla files/features
  * some examples:
    * modifying the crafting table's ui (usually done to make custom crafting tables) can completely break the `minecraft:crafting_table` block component resulting in the [crafters](../blocks/crafters/ "mention") (Spell crafter & Dye Un-mixer)
  * See [vanilla-files-modified.md](vanilla-files-modified.md "mention") and make sure you are not modifying any of the same files&#x20;
