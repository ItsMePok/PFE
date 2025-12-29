import { world, system } from "@minecraft/server";
export default class ComputersCompat {
    //set your namespace
    static addonNameSpace = "poke_pfe";
    //leave the rest!
    static computersScoreboardID = "jig_computer.addon_stats";
    static addonStatScoreboardID = `${this.addonNameSpace}:${this.computersScoreboardID}`;
    static addonStatObjective;
    /**
     * Initializes the scoreboard's required for Jigs Computers Add-On to have stats for this add-on
     * @static
     */
    static init() {
        if (!world.scoreboard.getObjective(this.addonStatScoreboardID)) {
            world.scoreboard.addObjective(this.addonStatScoreboardID, "dummy");
        }
        this.addonStatObjective = world.scoreboard.getObjective(this.addonStatScoreboardID);
    }
    /**
     * Adds to a statistic tracked by Jigs Computers Add-On.
     *
     * @param statID - The identifier of the statistic to add, defined in {@link StatIDs}.
     * @param amount - The amount to add to the statistic.
     */
    static addStat(statID, amount) {
        this.addonStatObjective?.addScore(`${this.addonNameSpace}:${statID}`, amount);
    }
}
// 2) Replace the examples with the entities that you want to add to pcs and copy/paste it to your main file
// Use the minecraft id as the keys of the object. The contents is an array of objects, if they have conditions, they are evaluated sequentially.
// The default one (no conditions) is used if no condition match
// - (required) itemId - Id of the sticker (item)
// - (optional) specialItemId - Id of the special sticker (item). Harder to obtain!
// - (optional)  conditions - Array If the same Entity could transform on different items depending on a supported component value or property
//                            All the conditions must match
// Conditions can be a component:
//  - component: One of the supported components: minecraft:color, minecraft:variant, minecraft:mark_variant or minecraft:is_sheared
//  - componentValue: a number to match against the value of the component. This value is ignored for `minecraft:is_sheared`
// or a property:
// - property: name of the entity property
// - propertyValue: Value of the property
export const initExampleStickers = () => {
    const entities = {
        'poke_pfe:bone_bear': [{ itemId: 'poke_pfe:bone_bear_sticker' }],
        'poke_pfe:brown_sporefish': [{ itemId: 'poke_pfe:brown_sporefish_sticker' }],
        'poke_pfe:cassette_trader': [{ itemId: 'poke_pfe:cassette_trader_sticker' }],
        'poke_pfe:cobalt_golem': [{ itemId: 'poke_pfe:_sticker' }],
        'poke_pfe:cosmetic_trader': [{ itemId: 'poke_pfe:_sticker' }],
        'poke_pfe:crimson_sporeshroom': [{ itemId: 'poke_pfe:crimson_sporeshroom_sticker' }],
        'poke_pfe:demonic_allay': [{ itemId: 'poke_pfe:demonic_allay_sticker' }],
        'poke_pfe:duck': [{ itemId: 'poke_pfe:duck_sticker' }],
        'poke_pfe:ender_phantom': [{ itemId: 'poke_pfe:ender_phantom_sticker' }],
        'poke_pfe:robo_golem': [{ itemId: 'poke_pfe:furnace_golem_sticker' }],
        'poke_pfe:gilded_allay': [{ itemId: 'poke_pfe:_sticker' }],
        'poke_pfe:grizzly_bear': [{ itemId: 'poke_pfe:grizzly_bear_sticker' }],
        'poke_pfe:knightling': [{ itemId: 'poke_pfe:knightling_sticker' }],
        'poke_pfe:listener': [{ itemId: 'poke_pfe:listener_sticker' }],
        'poke_pfe:logger': [{ itemId: 'poke_pfe:logger_sticker' }],
        'poke_pfe:mini_demonic_allay': [{ itemId: 'poke_pfe:mini_demonic_allay_sticker' }],
        'poke_pfe:money_man': [{ itemId: 'poke_pfe:money_man_sticker' }],
        'poke_pfe:mushroom_buddy': [{ itemId: 'poke_pfe:mushroom_buddy_sticker' }],
        'poke_pfe:nebula_bug': [{ itemId: 'poke_pfe:nebula_bug_sticker' }],
        'poke_pfe:necromancer': [{ itemId: 'poke_pfe:necromancer_sticker' }],
        'poke_pfe:orange_squid': [{ itemId: 'poke_pfe:orange_squid_sticker' }],
        'poke_pfe:pale_ocelot': [{ itemId: 'poke_pfe:pale_ocelot_sticker' }],
        'poke_pfe:pink_squid': [{ itemId: 'poke_pfe:pink_squid_sticker' }],
        'poke_pfe:piranha': [{ itemId: 'poke_pfe:piranha_sticker' }],
        'poke_pfe:quest_trader': [{ itemId: 'poke_pfe:quest_trader_sticker' }],
        'poke_pfe:raccoon': [{ itemId: 'poke_pfe:raccoon_sticker' }],
        'poke_pfe:rat': [{ itemId: 'poke_pfe:rat_sticker' }],
        'poke_pfe:red_panda': [{ itemId: 'poke_pfe:red_panda_sticker' }],
        'poke_pfe:red_sporefish': [{ itemId: 'poke_pfe:red_sporefish_sticker' }],
        'poke_pfe:retro_llama': [{ itemId: 'poke_pfe:retro_llama_sticker' }],
        'poke_pfe:scrapper': [{ itemId: 'poke_pfe:scrapper_sticker' }],
        'poke_pfe:sculk_enderman': [{ itemId: 'poke_pfe:sculk_enderman_sticker' }],
        'poke_pfe:shallow_cod': [{ itemId: 'poke_pfe:shallow_cod_sticker' }],
        'poke_pfe:shopkeeper': [{ itemId: 'poke_pfe:shopkeeper_sticker' }],
        'poke_pfe:shroomfin': [{ itemId: 'poke_pfe:shroomfin_sticker' }],
        'poke_pfe:snowman': [{ itemId: 'poke_pfe:snowman_sticker' }],
        'poke_pfe:soul_blaze': [{ itemId: 'poke_pfe:soul_blaze_sticker' }],
        'poke_pfe:sparky': [{ itemId: 'poke_pfe:sparky_sticker' }],
        'poke_pfe:sporefish': [{ itemId: 'poke_pfe:sporefish_sticker' }],
        'poke_pfe:striker': [{ itemId: 'poke_pfe:striker_sticker' }],
        'poke_pfe:super_striker': [{ itemId: 'poke_pfe:super_striker_sticker' }],
        'poke_pfe:token_trader': [{ itemId: 'poke_pfe:token_trader_sticker' }],
        'poke_pfe:warped_sporecat': [{ itemId: 'poke_pfe:warped_sporecat_sticker' }],
        'poke_pfe:warped_sporeshroom': [{ itemId: 'poke_pfe:warped_sporeshroom_sticker' }],
        'poke_pfe:windswept_bear': [{ itemId: 'poke_pfe:windswept_bear_sticker' }],
        'poke_pfe:woodspike_guardian': [{ itemId: 'poke_pfe:woodspike_guardian_sticker' }],
        'poke_pfe:yak': [{ itemId: 'poke_pfe:_sticker' }],
        'poke_pfe:zombken': [{ itemId: 'poke_pfe:zombken_sticker' }],
        /*'your_namespace:example_complex_mob': [
        {itemId: 'your_namespace:normal_sticker_1',specialItemId: 'your_namespace:rare_sticker_1',conditions: [{component: 'minecraft:variant',componentValue: 0}]},
        {itemId: 'your_namespace:normal_sticker_2',specialItemId: 'your_namespace:rare_sticker_2',conditions: [{component: 'minecraft:variant',componentValue: 1}]}	],*/
    };
    // 3) Data Payload Construction
    const chunkObject = (obj, chunkSize) => {
        const keys = Object.keys(obj);
        const chunks = [];
        for (let i = 0; i < keys.length; i += chunkSize) {
            const chunk = {};
            keys.slice(i, i + chunkSize).forEach(key => {
                chunk[key] = obj[key];
            });
            chunks.push(chunk);
        }
        return chunks;
    };
    // 4) If the payload is too large, reduce number here to smaller chunks of data. only necessary if there are many variants on single entities.
    const entityChunks = chunkObject(entities, 4);
    entityChunks.forEach((entityChunk, index) => {
        const m = {
            id: (Math.random()).toString(16),
            type: 'request',
            endpoint: 'addStickers',
            params: [1, entityChunk], // Use only a chunk of entities
            callback: undefined,
        };
        const delay = 10 + index; // 1 tick additional delay for each chunk
        system.runTimeout(() => void world
            .getDimension("overworld")
            .runCommand(`scriptevent mineapi:jig_pcs ${JSON.stringify(m)}`), delay);
    });
    // Debug: Initialization complete
};
//# sourceMappingURL=jigarbov.js.map