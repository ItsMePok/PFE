import { system, world, EquipmentSlot, GameMode, EntityComponentTypes, ItemComponentTypes, ItemStack } from "@minecraft/server";
import { MinecraftEnchantmentTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
//Armor effects. I split into 4 because it should reduce the amount of commands running at a time reducing the random lag spikes
system.runInterval(() => {
    world.getDimension("overworld").runCommandAsync("execute as @a run function pfe_armor/effects");
    system.runTimeout(() => {
        world.getDimension("overworld").runCommandAsync("execute as @a run function pfe_armor/effects_2");
        system.runTimeout(() => {
            world.getDimension("overworld").runCommandAsync("execute as @a run function pfe_armor/effects_3");
            system.runTimeout(() => {
                world.getDimension("overworld").runCommandAsync("execute as @a run function pfe_armor/effects_4");
            }, 40);
        }, 80);
    }, 120);
}, 180);
// Boss events
system.runInterval(() => {
    world.getDimension("overworld").runCommandAsync("execute at @r run summon poke:boss_event ~ -65 ~");
}, 108000);
// Tool Durability gotten from https://wiki.bedrock.dev/items/tool-durability.html
function damage_item(item) {
    // Get durability
    if (!item.hasComponent("durability"))
        return item;
    //@ts-ignore
    const durabilityComponent = item.getComponent("durability");
    //@ts-ignore
    const enchantComponent = item.getComponent('minecraft:enchantable');
    let unbreaking = 0;
    // Get unbreaking level
    if (item.hasComponent("enchantments")) {
        let unbreakingEnchant = undefined;
        if (enchantComponent != undefined) {
            unbreakingEnchant = enchantComponent.getEnchantment(MinecraftEnchantmentTypes.Unbreaking);
        }
        if (unbreakingEnchant === undefined) {
            unbreaking = 0;
        }
        else {
            unbreaking = unbreakingEnchant.level;
        }
    }
    // Apply damage
    if (durabilityComponent.damage == durabilityComponent.maxDurability) {
        return;
    }
    durabilityComponent.damage += Number(Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreaking));
    return item;
}
//Makes unbreaking work but breaks the Hold to continue using :/
function damage_item_ub(item) {
    // check if the item does not have a durability component to avoid deleting itself
    if (!item.hasComponent("durability"))
        return item;
    // Get durability
    //@ts-ignore
    const durabilityComponent = item.getComponent("durability");
    var unbreakingL = 0;
    // Get unbreaking level
    if (item.hasComponent(ItemComponentTypes.Enchantable)) {
        //@ts-ignore
        if (item.getComponent(ItemComponentTypes.Enchantable).hasEnchantment("unbreaking")) {
            //@ts-ignore
            unbreakingL = item.getComponent(ItemComponentTypes.Enchantable).getEnchantment("unbreaking").level;
        }
    }
    //console.warn('---')
    //console.warn(unbreakingL +' --- '+ unbreakingL.level)
    //console.warn (durabilityComponent.getDamageChance(unbreakingL))
    //console.warn(Number(Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreakingL)))
    //console.warn('---')
    // Apply damage
    durabilityComponent.damage += Number(Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreakingL));
    if (durabilityComponent.damage == durabilityComponent.maxDurability) {
        return item;
    }
    return item;
}
// Add your item IDs into this array
const my_items = ["poke:cobalt_pickaxe", "poke:onyx_pickaxe", "poke:holy_pickaxe", "poke:hellish_pickaxe", "poke:godly_pickaxe", "poke:demonic_pickaxe", "poke:amethyst_pickaxe", "poke:astral_pickaxe", "poke:death_pickaxe", "poke:emerald_pickaxe", "poke:galaxy_pickaxe", "poke:medic_pickaxe", "poke:nebula_pickaxe", "poke:molten_pickaxe", "poke:radium_pickaxe", "poke:shade_pickaxe", "poke:void_pickaxe", "poke:medic_haxel", "poke:cobalt_crossbow", "poke:astral_crossbow", "poke:godly_crossbow", "poke:demonic_haxel", "poke:holy_battleaxe", "poke:godly_battleaxe", "poke:galaxy_battleaxe", "poke:astral_battleaxe", "poke:amethyst_battleaxe", "poke:netherite_battleaxe", "poke:diamond_battleaxe", "poke:gold_battleaxe", "poke:void_battleaxe", "poke:death_battleaxe", "poke:demonic_battleaxe", "poke:hellish_battleaxe", "poke:emerald_battleaxe", "poke:iron_battleaxe", "poke:onyx_battleaxe", "poke:shade_battleaxe", "poke:cobalt_battleaxe", "poke:stone_battleaxe", "poke:wood_battleaxe", "poke:radium_battleaxe", "poke:hellish_scythe", "poke:ember_scythe", "poke:emerald_scythe", "poke:nebula_battleaxe", "poke:diamond_scythe", "poke:shade_scythe", "poke:nebula_scythe", "poke:godly_scythe", "poke:galactic_scythe", "poke:radium_scythe", "poke:amethyst_scythe", "poke:onyx_scythe", "poke:gold_scythe", "poke:cobalt_scythe", "poke:netherite_scythe", "poke:void_scythe", "poke:holy_scythe", "poke:iron_scythe", "poke:demonic_slasher", "poke:death_scythe", "poke:godly_haxel", "poke:radium_haxel", "poke:cobalt_haxel", "poke:shade_haxel", "poke:wooden_haxel", "poke:stone_haxel", "poke:iron_haxel", "poke:gold_haxel", "poke:emerald_haxel", "poke:diamond_haxel", "poke:netherite_haxel", "poke:hellish_haxel", "poke:holy_haxel", "poke:amethyst_haxel", "poke:haxel", "poke:swift_pickaxe", "poke:snow_shovel", "poke:nebula_hoe", "poke:cobalt_sword", "poke:astral_sword", "poke:onyx_sword", "poke:demonic_sword", "poke:void_sword", "poke:pocket_knife", "poke:amethyst_sword", "poke:circuit_sword", "poke:hellish_blade", "poke:nebula_sword", "poke:galaxy_sword", "poke:godly_sword", "poke:holy_sword", "poke:shade_sword", "poke:radium_sword",];
world.afterEvents.playerBreakBlock.subscribe(data => {
    // If there's no item, skip
    if (!data.itemStackAfterBreak)
        return;
    // If the item is not in our item IDs, skip
    if (!my_items.includes(data.itemStackAfterBreak.typeId))
        return;
    // If player is in creative, skip
    if (world.getPlayers({
        gameMode: GameMode.creative
    }).includes(data.player))
        return;
    const newItem = damage_item_ub(data.itemStackAfterBreak);
    //@ts-ignore
    data.player.getComponent(EntityComponentTypes.Equippable).setEquipment(EquipmentSlot.Mainhand, newItem);
    if (!newItem) {
        data.player.playSound("random.break");
    }
    return;
});
// End of Tool durability 
//Food effects
const pfeFoodList = ["poke:pumpkin_spice", "poke:xp_vial", "poke:golden_chicken", "poke:rotten_chicken", "poke:demonic_potion", "poke:hellish_potion", "poke:nebula_potion", "poke:void_potion", "poke:death_potion", "poke:cobalt_potion", "poke:cobalt_soup", "poke:crimson_sporeshroom_stew", "poke:root_beer", "poke:hellish_soup", "poke:nebula_noodles", "poke:warped_sporeshroom_stew", "poke:milk_bottle", "poke:banished_star_x10", "poke:banished_star_x9"];
world.afterEvents.itemCompleteUse.subscribe(item => {
    if (!pfeFoodList.includes(item.itemStack.typeId))
        return;
    switch (item.itemStack.typeId) {
        case 'poke:xp_vial':
            {
                item.source.runCommandAsync("xp 160 @s");
                return;
            }
            ;
        case 'poke:cobalt_potion': {
            item.source.addEffect('night_vision', 3600);
            item.source.addEffect('regeneration', 2400);
        }
        case 'poke:cobalt_soup':
            {
                item.source.addEffect('night_vision', 2400, { showParticles: false });
                return;
            }
            ;
        case 'poke:root_beer':
            {
                item.source.addEffect('speed', 600, { amplifier: 4, });
                return;
            }
            ;
        case 'poke:pumpkin_spice':
            {
                item.source.addEffect('invisibility', 600);
                item.source.addEffect('speed', 600, { amplifier: 4, });
                return;
            }
            ;
        case 'poke:crimson_sporeshroom_stew':
            {
                item.source.addEffect('fire_resistance', 1200);
                return;
            }
            ;
        case 'poke:warped_sporeshroom_stew':
            {
                item.source.addEffect('fire_resistance', 1200);
                return;
            }
            ;
        case 'poke:hellish_soup':
            {
                item.source.addEffect('fire_resistance', 1200);
                return;
            }
            ;
        case 'poke:nebula_noodles':
            {
                item.source.addEffect('strength', 600, { amplifier: 7, });
                return;
            }
            ;
        case 'poke:milk_bottle':
            {
                item.source.runCommandAsync("effect @s clear");
                return;
            }
            ;
        case 'poke:demonic_potion':
            {
                item.source.runCommandAsync("function pfe_items/demonic_potion");
                return;
            }
            ;
        case 'poke:hellish_potion':
            {
                item.source.runCommandAsync("function pfe_items/hellish_potion");
                return;
            }
            ;
        case 'poke:nebula_potion':
            {
                item.source.runCommandAsync("function pfe_items/nebula_potion");
                return;
            }
            ;
        case 'poke:void_potion':
            {
                item.source.runCommandAsync("function pfe_items/void_potion");
                return;
            }
            ;
        case 'poke:death_potion':
            {
                item.source.runCommandAsync("kill @s");
                return;
            }
            ;
        case 'poke:rotten_chicken':
            {
                item.source.addEffect('nausea', 400);
                return;
            }
            ;
        case 'poke:golden_chicken':
            {
                item.source.addEffect('village_hero', 400, { amplifier: 1, });
                return;
            }
            ;
        case 'poke:banished_star_x10':
            {
                item.source.runCommandAsync("damage @a[r=100] 32767000 entity_attack entity @s");
                return;
            }
            ;
        case 'poke:banished_star_x9':
            {
                item.source.runCommandAsync("damage @s 32767000 entity_attack");
                return;
            }
            ;
    }
    return;
});
// Projectile shooters & Windzooka/Blazooka
const pfeProjItems = ["poke:volt_ring", "poke:nuke_ring", "poke:necromancer_staff", "poke:ring_3", "poke:ring_4", "poke:ring_2", "poke:arrow_ring", "poke:shade_ring"];
world.afterEvents.itemUse.subscribe(data => {
    if (!pfeProjItems.includes(data.itemStack.typeId))
        return;
    const headLocate = data.source.getHeadLocation();
    //@ts-ignore
    const ticks = data.itemStack.getComponent('cooldown').cooldownTicks;
    //@ts-ignore
    if (data.itemStack.getComponent('cooldown').getCooldownTicksRemaining(data.source) != ticks - 1)
        return;
    if (pfeProjItems.includes(data.itemStack.typeId)) { //Projectile shooters. projectile id defined in a tag on the item
        const pTag = data.itemStack.getTags();
        const angle = data.source.getViewDirection();
        const projEntity = data.source.dimension.spawnEntity('' + pTag, headLocate);
        //@ts-ignore
        const projComp = projEntity.getComponent("projectile");
        data.source.playSound('random.bow');
        projComp.owner = data.source;
        projComp.shoot(angle);
    }
    ;
    if (world.getPlayers({
        gameMode: GameMode.creative
    }).includes(data.source))
        return;
    const newItem = damage_item(data.itemStack);
    //@ts-ignore
    data.source.getComponent(EntityComponentTypes.Equippable).setEquipment(EquipmentSlot.Mainhand, newItem);
    if (!newItem) {
        data.source.playSound("random.break");
    }
    return;
});
//Hit Effects 
const hit_effects = ["poke:astral_scythe", "poke:medic_scythe", "poke:demonic_sword", "poke:hellish_sword", "poke:godly_sword", "poke:holy_sword", "poke:radium_sword", "poke:astral_sword", "poke:shade_sword", "poke:nebula_sword", "poke:amethyst_scythe", "poke:holy_scythe", "poke:hellish_scythe", "poke:godly_scythe", "poke:galactic_scythe", "poke:demonic_slasher", "poke:ember_scythe", "poke:death_scythe", "poke:void_scythe", "poke:radium_scythe", "poke:netherite_scythe", "poke:diamond_scythe", "poke:shade_scythe", "poke:onyx_scythe", "poke:iron_scythe", "poke:gold_scythe", "poke:emerald_scythe", "poke:nebula_scythe", "poke:cobalt_scythe", "poke:circuit_sword", "poke:ban_hammer"];
world.afterEvents.entityHitEntity.subscribe(data => {
    if (data.damagingEntity.hasComponent(EntityComponentTypes.Equippable)) {
        //@ts-ignore
        if (data.damagingEntity.getComponent(EntityComponentTypes.Equippable).getEquipment(EquipmentSlot.Mainhand) == undefined)
            return;
        //@ts-ignore
        if (!hit_effects.includes(data.damagingEntity.getComponent(EntityComponentTypes.Equippable).getEquipment(EquipmentSlot.Mainhand).type.id))
            return;
        //@ts-ignore
        const itemId = data.damagingEntity.getComponent(EntityComponentTypes.Equippable).getEquipment(EquipmentSlot.Mainhand).typeId;
        switch (itemId) {
            case 'poke:demonic_sword': {
                data.hitEntity.addEffect('slowness', 100, { amplifier: 3 });
                return;
            }
            case 'poke:hellish_blade': {
                data.hitEntity.addEffect('slowness', 40, { amplifier: 3 });
                return;
            }
            case 'poke:godly_sword': {
                data.damagingEntity.addEffect('strength', 100, { amplifier: 2 });
                return;
            }
            case 'poke:holy_sword': {
                data.damagingEntity.addEffect('strength', 40, { amplifier: 1 });
                return;
            }
            case 'poke:astral_sword': {
                data.damagingEntity.addEffect('strength', 100, { amplifier: 2 });
                return;
            }
            case 'poke:shade_sword': {
                data.hitEntity.addEffect('slowness', 40, { amplifier: 2 });
                data.hitEntity.addEffect('wither', 60, { amplifier: 1 });
                return;
            }
            case 'poke:radium_sword': {
                data.hitEntity.addEffect('slowness', 220, { amplifier: 3 });
                data.hitEntity.addEffect('wither', 240, { amplifier: 4 });
                return;
            }
            case 'poke:amethyst_scythe': {
                data.damagingEntity.addEffect('speed', 100, { amplifier: 4 });
                data.hitEntity.addEffect('blindness', 20);
                return;
            }
            case 'poke:demonic_slasher': {
                data.damagingEntity.addEffect('speed', 100, { amplifier: 7 });
                data.hitEntity.addEffect('wither', 80, { amplifier: 1 });
                return;
            }
            case 'poke:gold_scythe': {
                data.damagingEntity.addEffect('speed', 100, { amplifier: 2 });
                data.damagingEntity.addEffect('haste', 600, { amplifier: 2 });
                return;
            }
            case 'poke:emerald_scythe': {
                data.damagingEntity.addEffect('speed', 100, { amplifier: 2 });
                data.damagingEntity.addEffect('village_hero', 2400, { amplifier: 1 });
                return;
            }
            case 'poke:iron_scythe': {
                data.damagingEntity.addEffect('speed', 100, { amplifier: 2 });
                return;
            }
            case 'poke:onyx_scythe': {
                data.damagingEntity.addEffect('speed', 200, { amplifier: 5 });
                data.damagingEntity.addEffect('jump_boost', 100, { amplifier: 2 });
                data.hitEntity.addEffect('weakness', 120, { amplifier: 2 });
                return;
            }
            case 'poke:godly_scythe': {
                data.damagingEntity.addEffect('speed', 200, { amplifier: 6 });
                data.damagingEntity.addEffect('slow_falling', 2400);
                data.damagingEntity.addEffect('jump_boost', 1200, { amplifier: 3 });
                return;
            }
            case 'poke:hellish_scythe': {
                data.damagingEntity.addEffect('speed', 100, { amplifier: 7 });
                data.damagingEntity.addEffect('fire_resistance', 2400);
                data.hitEntity.addEffect('mining_fatigue', 400, { amplifier: 1 });
                return;
            }
            case 'poke:holy_scythe': {
                data.damagingEntity.addEffect('speed', 200, { amplifier: 6 });
                data.damagingEntity.addEffect('slow_falling', 2400, { amplifier: 1 });
                data.hitEntity.addEffect('darkness', 400);
                return;
            }
            case 'poke:shade_scythe': {
                data.damagingEntity.addEffect('absorption', 600, { amplifier: 1 });
                data.damagingEntity.addEffect('strength', 100, { amplifier: 1 });
                data.hitEntity.addEffect('slowness', 160, { amplifier: 2 });
                return;
            }
            case 'poke:diamond_scythe': {
                data.damagingEntity.addEffect('speed', 160, { amplifier: 3 });
                data.hitEntity.addEffect('weakness', 100, { amplifier: 1 });
                data.hitEntity.addEffect('blindness', 80);
                return;
            }
            case 'poke:netherite_scythe': {
                data.damagingEntity.addEffect('speed', 160, { amplifier: 3 });
                data.hitEntity.addEffect('hunger', 120, { amplifier: 1 });
                data.hitEntity.addEffect('slowness', 80, { amplifier: 2 });
                return;
            }
            case 'poke:radium_scythe': {
                data.damagingEntity.addEffect('speed', 100, { amplifier: 5 });
                data.hitEntity.addEffect('nausea', 80, { amplifier: 1 });
                data.hitEntity.addEffect('fatal_poison', 160, { amplifier: 2 });
                return;
            }
            case 'poke:medic_scythe': {
                data.damagingEntity.addEffect('speed', 100, { amplifier: 6 });
                data.damagingEntity.addEffect('health_boost', 2400, { amplifier: 2 });
                return;
            }
            case 'poke:galactic_scythe': {
                data.damagingEntity.addEffect('speed', 100, { amplifier: 9 });
                data.damagingEntity.addEffect('fire_resistance', 300);
                data.hitEntity.addEffect('wither', 80, { amplifier: 2 });
                data.hitEntity.addEffect('weakness', 80, { amplifier: 2 });
                return;
            }
            case 'poke:astral_scythe': {
                data.damagingEntity.addEffect('speed', 120, { amplifier: 9 });
                data.damagingEntity.addEffect('fire_resistance', 300);
                data.hitEntity.addEffect('wither', 120, { amplifier: 2 });
                data.hitEntity.addEffect('weakness', 120, { amplifier: 3 });
                return;
            }
            case 'poke:ember_scythe': {
                data.damagingEntity.addEffect('speed', 100, { amplifier: 6 });
                data.hitEntity.addEffect('nausea', 80, { amplifier: 1 });
                data.hitEntity.addEffect('blindness', 80);
                return;
            }
            case 'poke:void_scythe': {
                data.damagingEntity.addEffect('speed', 200, { amplifier: 6 });
                data.hitEntity.runCommand('function pfe_items/scythe/void');
                return;
            }
            case 'poke:death_scythe': {
                data.damagingEntity.addEffect('speed', 200, { amplifier: 6 });
                data.hitEntity.runCommand('function pfe_items/scythe/death');
                return;
            }
            case 'poke:nebula_scythe': {
                data.damagingEntity.runCommand('function pfe_items/scythe/nebula');
                data.hitEntity.addEffect('wither', 80, { amplifier: 3 });
                return;
            }
            case 'poke:cobalt_scythe': {
                data.damagingEntity.addEffect('speed', 100, { amplifier: 6 });
                data.hitEntity.addEffect('wither', 40, { amplifier: 1 });
                return;
            }
            case 'poke:nebula_sword': {
                data.damagingEntity.addEffect('strength', 40, { amplifier: 4 });
                data.hitEntity.addEffect('weakness', 20, { amplifier: 2 });
                return;
            }
            case 'poke:ban_hammer': {
                data.damagingEntity.addEffect('strength', 40, { amplifier: 4 });
                data.hitEntity.addEffect('weakness', 20, { amplifier: 2 });
                return;
            }
            case 'poke:circuit_sword': {
                data.damagingEntity.runCommand('function pfe_items/circuit_sword');
                data.hitEntity.addEffect('blindness', 100);
                return;
            }
        }
        return;
    }
});
//Trapdoor block events
class PFETrapdoor {
    onPlayerInteract(data) {
        const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`;
        if (data.block.permutation.hasTag('pfe_trapdoor_open') == true) {
            data.block.setPermutation(data.block.permutation.withState('poke:trapdoor_open', 'no'));
            data.block.dimension.runCommandAsync(`playsound open.iron_trapdoor @a ${blockLocation}`);
            return;
        }
        else {
            data.block.setPermutation(data.block.permutation.withState('poke:trapdoor_open', 'yes'));
            data.block.dimension.runCommandAsync(`playsound close.iron_trapdoor @a ${blockLocation}`);
            return;
        }
    }
}
//Fortune enchant for ores
class PFEFortune {
    onPlayerDestroy(data) {
        var _a, _b, _c, _d;
        //@ts-ignore
        const equippableComponent = (_a = data.player) === null || _a === void 0 ? void 0 : _a.getComponent(EntityComponentTypes.Equippable);
        if (equippableComponent === undefined)
            return;
        if (!((_b = equippableComponent.getEquipment(EquipmentSlot.Mainhand)) === null || _b === void 0 ? void 0 : _b.hasComponent(ItemComponentTypes.Enchantable)))
            return;
        //@ts-ignore
        const enchantableComponent = (_c = equippableComponent.getEquipment(EquipmentSlot.Mainhand)) === null || _c === void 0 ? void 0 : _c.getComponent(ItemComponentTypes.Enchantable);
        if (!enchantableComponent.hasEnchantment(MinecraftEnchantmentTypes.Fortune))
            return;
        let fortuneLevel = enchantableComponent.getEnchantment(MinecraftEnchantmentTypes.Fortune).level;
        let rng = Math.round(Math.random());
        console.warn(rng);
        const blockLocation = `${data.block.x} ${data.block.y} ${data.block.z}`;
        const blockId = data.destroyedBlockPermutation.type.id.substring(5);
        if (((_d = data.player) === null || _d === void 0 ? void 0 : _d.getGameMode()) == GameMode.survival) {
            if (fortuneLevel == 3) {
                data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/blocks/${blockId}"`);
                data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/blocks/${blockId}"`);
                if (rng == 0)
                    return;
                data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/blocks/${blockId}"`);
                return;
            }
            if (fortuneLevel == 2) {
                data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/blocks/${blockId}"`);
                if (rng == 0)
                    return;
                data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/blocks/${blockId}"`);
                return;
            }
            if (fortuneLevel == 1) {
                if (rng == 0)
                    return;
                data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/blocks/${blockId}"`);
                return;
            }
            return;
        }
        return;
    }
}
//Slab combining & Double slab loot
class PFESlabs {
    onPlayerInteract(data) {
        var _a;
        if (data.block.permutation.getState('poke:double') == true)
            return;
        const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`;
        const slabId = data.block.typeId;
        //@ts-ignore
        const equippableComponent = data.player.getComponent(EntityComponentTypes.Equippable);
        const mainhand = equippableComponent.getEquipment(EquipmentSlot.Mainhand);
        if (mainhand != undefined) {
            if (mainhand.typeId == slabId && data.face == 'Up' && data.block.permutation.getState('poke:double') == false) {
                var itemStackAmount = mainhand.amount - 1;
                data.block.setPermutation(data.block.permutation.withState('poke:double', true));
                data.block.dimension.runCommandAsync(`playsound use.stone @a ${blockLocation}`);
                if (((_a = data.player) === null || _a === void 0 ? void 0 : _a.getGameMode()) == 'creative')
                    return;
                if (itemStackAmount <= 0) {
                    equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack('minecraft:air', 1));
                    return;
                }
                equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(slabId, itemStackAmount));
                return;
            }
            else {
                return;
            }
        }
        return;
    }
}
class PFESlabLoot {
    onPlayerDestroy(data) {
        var _a;
        const block_location = data.block.location;
        const gm = (_a = data.player) === null || _a === void 0 ? void 0 : _a.getGameMode();
        const blockId = data.destroyedBlockPermutation.type.id;
        const blockState = data.destroyedBlockPermutation.getState('poke:double');
        if (gm == 'survival') {
            if (blockState == true) {
                data.dimension.spawnItem(new ItemStack(blockId, 1), block_location);
                return;
            }
            return;
        }
        return;
    }
}
class PFEBlockSeat {
    onPlayerInteract(data) {
        var _a;
        const BlockLocation = {
            x: data.block.location.x + 0.5,
            y: data.block.location.y + 0.5,
            z: data.block.location.z + 0.5,
        };
        const slabId = data.block.typeId;
        //@ts-ignore
        const mainhand = data.player.getComponent(EntityComponentTypes.Equippable).getEquipment('Mainhand');
        const options = {
            type: 'poke:seat'
        };
        if ((mainhand === null || mainhand === void 0 ? void 0 : mainhand.typeId) != slabId && !((_a = data.player) === null || _a === void 0 ? void 0 : _a.isSneaking)) {
            if (data.block.permutation.getState('minecraft:vertical_half') == 'bottom' && data.block.permutation.getState('poke:double') == false) {
                if (data.dimension.getEntities(options).length > 0) {
                    return;
                }
                else {
                    //@ts-ignore
                    data.dimension.spawnEntity('poke:seat', BlockLocation).getComponent('minecraft:rideable').addRider(data.player);
                    return;
                }
            }
        }
        return;
    }
}
//Phantomic Conduit's ability
class PFEPhantomicConduit {
    onTick(data) {
        var block_location_x = data.block.x;
        var block_location_y = data.block.y;
        var block_location_z = data.block.z;
        if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
            data.dimension.runCommand('execute positioned ' + block_location_x + ' ' + block_location_y + ' ' + block_location_z + ' as @e[r=50,family=phantom] run damage @s 20');
            return;
        }
        if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 0));
            return;
        }
        return;
    }
}
//Demonic Allay Conduit
class PFEDemonicAConduit {
    onTick(data) {
        const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
        if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
            data.dimension.runCommand('execute positioned ' + block_location + ' as @e[r=50,family=pfe:demonic_allay] run damage @s 20');
            return;
        }
        if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 0));
            return;
        }
        return;
    }
}
//Cobblestone Generator's ability
class PFECobbleGen {
    onTick(data) {
        var _a, _b;
        if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
            if (((_a = data.block.above()) === null || _a === void 0 ? void 0 : _a.typeId) != 'minecraft:air')
                return;
            (_b = data.block.above()) === null || _b === void 0 ? void 0 : _b.setType('minecraft:cobblestone');
            //data.dimension.runCommand('execute positioned '+block_location_x+' '+block_location_y+' '+block_location_z+' if block ~ ~1 ~ air run setblock ~ ~1 ~ cobblestone')
            return;
        }
        if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 0));
            return;
        }
        return;
    }
}
//Cobbler's ability
class PFECobbler {
    onTick(data) {
        const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
        if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
            data.dimension.runCommand(`execute positioned ${block_location} run structure load poke:cobblestone_item ~ ~-1 ~`);
            return;
        }
        if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 0));
            return;
        }
        return;
    }
}
//Block Breaker's ability
class PFEBlockBreaker {
    onTick(data) {
        const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
        if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
            data.dimension.runCommand(`execute positioned ${block_location} unless block ~ ~-1 ~ bedrock run setblock ~ ~-1 ~ air destroy`);
            return;
        }
        if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 0));
            return;
        }
        return;
    }
}
//Dirter's ability
class PFEDirter {
    onTick(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
            if (data.block.typeId == 'poke:dirter_east') {
                if (((_a = data.block.east()) === null || _a === void 0 ? void 0 : _a.typeId) == 'minecraft:cobblestone') {
                    (_b = data.block.east()) === null || _b === void 0 ? void 0 : _b.setType('minecraft:dirt');
                    return;
                }
            }
            if (data.block.typeId == 'poke:dirter_west') {
                if (((_c = data.block.west()) === null || _c === void 0 ? void 0 : _c.typeId) == 'minecraft:cobblestone') {
                    (_d = data.block.west()) === null || _d === void 0 ? void 0 : _d.setType('minecraft:dirt');
                    return;
                }
            }
            if (data.block.typeId == 'poke:dirter_south') {
                if (((_e = data.block.south()) === null || _e === void 0 ? void 0 : _e.typeId) == 'minecraft:cobblestone') {
                    (_f = data.block.south()) === null || _f === void 0 ? void 0 : _f.setType('minecraft:dirt');
                    return;
                }
            }
            if (data.block.typeId == 'poke:dirter_north') {
                if (((_g = data.block.north()) === null || _g === void 0 ? void 0 : _g.typeId) == 'minecraft:cobblestone') {
                    (_h = data.block.north()) === null || _h === void 0 ? void 0 : _h.setType('minecraft:dirt');
                    return;
                }
            }
            if (data.block.typeId == 'poke:dirter_up') {
                if (((_j = data.block.above()) === null || _j === void 0 ? void 0 : _j.typeId) == 'minecraft:cobblestone') {
                    (_k = data.block.above()) === null || _k === void 0 ? void 0 : _k.setType('minecraft:dirt');
                    return;
                }
            }
            if (data.block.typeId == 'poke:dirter_down') {
                if (((_l = data.block.below()) === null || _l === void 0 ? void 0 : _l.typeId) == 'minecraft:cobblestone') {
                    (_m = data.block.below()) === null || _m === void 0 ? void 0 : _m.setType('minecraft:dirt');
                    return;
                }
            }
            if (data.block.typeId == 'poke:dirter') {
                if (((_o = data.block.below()) === null || _o === void 0 ? void 0 : _o.typeId) == 'minecraft:cobblestone') {
                    (_p = data.block.below()) === null || _p === void 0 ? void 0 : _p.setType('minecraft:dirt');
                    return;
                }
            }
            return;
        }
        if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 0));
            return;
        }
        return;
    }
}
//Duster's ability
class PFEDuster {
    onTick(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
            if (data.block.typeId == 'poke:duster_east') {
                if (((_a = data.block.east()) === null || _a === void 0 ? void 0 : _a.typeId) == 'minecraft:dirt') {
                    (_b = data.block.east()) === null || _b === void 0 ? void 0 : _b.setType('minecraft:sand');
                    return;
                }
                if (((_c = data.block.east()) === null || _c === void 0 ? void 0 : _c.typeId) == 'minecraft:cobblestone') {
                    (_d = data.block.east()) === null || _d === void 0 ? void 0 : _d.setType('minecraft:gravel');
                    return;
                }
            }
            if (data.block.typeId == 'poke:duster_west') {
                if (((_e = data.block.west()) === null || _e === void 0 ? void 0 : _e.typeId) == 'minecraft:dirt') {
                    (_f = data.block.west()) === null || _f === void 0 ? void 0 : _f.setType('minecraft:sand');
                    return;
                }
                if (((_g = data.block.west()) === null || _g === void 0 ? void 0 : _g.typeId) == 'minecraft:cobblestone') {
                    (_h = data.block.west()) === null || _h === void 0 ? void 0 : _h.setType('minecraft:gravel');
                    return;
                }
            }
            if (data.block.typeId == 'poke:duster_south') {
                if (((_j = data.block.south()) === null || _j === void 0 ? void 0 : _j.typeId) == 'minecraft:dirt') {
                    (_k = data.block.south()) === null || _k === void 0 ? void 0 : _k.setType('minecraft:sand');
                    return;
                }
                if (((_l = data.block.south()) === null || _l === void 0 ? void 0 : _l.typeId) == 'minecraft:cobblestone') {
                    (_m = data.block.south()) === null || _m === void 0 ? void 0 : _m.setType('minecraft:gravel');
                    return;
                }
            }
            if (data.block.typeId == 'poke:duster_north') {
                if (((_o = data.block.north()) === null || _o === void 0 ? void 0 : _o.typeId) == 'minecraft:dirt') {
                    (_p = data.block.north()) === null || _p === void 0 ? void 0 : _p.setType('minecraft:sand');
                    return;
                }
                if (((_q = data.block.north()) === null || _q === void 0 ? void 0 : _q.typeId) == 'minecraft:cobblestone') {
                    (_r = data.block.north()) === null || _r === void 0 ? void 0 : _r.setType('minecraft:gravel');
                    return;
                }
            }
            if (data.block.typeId == 'poke:duster_up') {
                if (((_s = data.block.above()) === null || _s === void 0 ? void 0 : _s.typeId) == 'minecraft:dirt') {
                    (_t = data.block.above()) === null || _t === void 0 ? void 0 : _t.setType('minecraft:sand');
                    return;
                }
                if (((_u = data.block.above()) === null || _u === void 0 ? void 0 : _u.typeId) == 'minecraft:cobblestone') {
                    (_v = data.block.above()) === null || _v === void 0 ? void 0 : _v.setType('minecraft:gravel');
                    return;
                }
            }
            if (data.block.typeId == 'poke:duster_down') {
                if (((_w = data.block.below()) === null || _w === void 0 ? void 0 : _w.typeId) == 'minecraft:dirt') {
                    (_x = data.block.below()) === null || _x === void 0 ? void 0 : _x.setType('minecraft:sand');
                    return;
                }
                if (((_y = data.block.below()) === null || _y === void 0 ? void 0 : _y.typeId) == 'minecraft:cobblestone') {
                    (_z = data.block.below()) === null || _z === void 0 ? void 0 : _z.setType('minecraft:gravel');
                    return;
                }
            }
            if (data.block.typeId == 'poke:duster') {
                if (((_0 = data.block.below()) === null || _0 === void 0 ? void 0 : _0.typeId) == 'minecraft:dirt') {
                    (_1 = data.block.below()) === null || _1 === void 0 ? void 0 : _1.setType('minecraft:sand');
                    return;
                }
                if (((_2 = data.block.below()) === null || _2 === void 0 ? void 0 : _2.typeId) == 'minecraft:cobblestone') {
                    (_3 = data.block.below()) === null || _3 === void 0 ? void 0 : _3.setType('minecraft:gravel');
                    return;
                }
            }
            return;
        }
        if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 0));
            return;
        }
        return;
    }
}
//Magnet(Block)'s ability
class PFEMagnetBlock {
    onTick(data) {
        const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
        if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
            data.dimension.runCommand(`execute positioned ${block_location} as @e[type=item,r=10] run tp @s ${block_location}`);
            return;
        }
        if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 0));
            return;
        }
        return;
    }
}
//Bulb Light Color 
class PFEBulbs {
    onPlayerInteract(data) {
        const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
        //@ts-ignore
        let light_color = data.block.permutation.getState('pfe:color');
        let sound_pitch = 1 + light_color / 10;
        //resets if at the maximum (15)
        if (data.block.permutation.getState('pfe:color') == 15) {
            //set pfe:color state to default (0)
            data.block.setPermutation(data.block.permutation.withState('pfe:color', 0));
            //play sound
            data.block.dimension.runCommandAsync(`playsound block.copper_bulb.turn_on @a  ${block_location} 1 ${sound_pitch}`);
            return;
        }
        //Adds 1 to the current state of pfe:color
        else {
            //set pfe:color state to current +1
            data.block.setPermutation(data.block.permutation.withState('pfe:color', light_color + 1));
            //play sound
            data.block.dimension.runCommandAsync(`playsound block.copper_bulb.turn_on @a ${block_location} 1 ${sound_pitch}`);
            return;
        }
    }
}
//Calibrate Blocks
class PFECalibrate {
    onPlayerInteract(data) {
        const ValidId = ['poke:duster', 'poke:dirter'];
        const bid = data.block.typeId;
        const blockId = bid.substring(0, bid.lastIndexOf("_"));
        const blockFace = data.face;
        data.dimension.playSound('poke.calibrate', data.block.location);
        if (ValidId.includes(bid)) {
            //Converts old Dirter / Duster into the Calibrated ones
            data.block.setType(bid + '_up');
            return;
        }
        if (blockFace == 'East') {
            data.block.setType(blockId + '_east');
            return;
        }
        if (blockFace == 'West') {
            data.block.setType(blockId + '_west');
            return;
        }
        if (blockFace == 'North') {
            data.block.setType(blockId + '_north');
            return;
        }
        if (blockFace == 'South') {
            data.block.setType(blockId + '_south');
            return;
        }
        if (blockFace == 'Up') {
            data.block.setType(blockId + '_up');
            return;
        }
        if (blockFace == 'Down') {
            data.block.setType(blockId + '_down');
            return;
        }
        return;
    }
}
//Calibrated Block Breakers
class PFECaliBlockBreaker {
    onTick(data) {
        const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
        if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
            if (data.block.typeId == 'poke:block_breaker_east') {
                data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~1 ~ ~ bedrock run setblock ~1 ~ ~ air destroy');
                return;
            }
            if (data.block.typeId == 'poke:block_breaker_west') {
                data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~-1 ~ ~ bedrock run setblock ~-1 ~ ~ air destroy');
                return;
            }
            if (data.block.typeId == 'poke:block_breaker_south') {
                data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~ ~ ~1 bedrock run setblock ~ ~ ~1 air destroy');
                return;
            }
            if (data.block.typeId == 'poke:block_breaker_north') {
                data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~ ~ ~-1 bedrock run setblock ~ ~ ~-1 air destroy');
                return;
            }
            if (data.block.typeId == 'poke:block_breaker_up') {
                data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~ ~1 ~ bedrock run setblock ~ ~1 ~ air destroy');
                return;
            }
            if (data.block.typeId == 'poke:block_breaker_down') {
                data.dimension.runCommand('execute positioned ' + block_location + ' unless block ~ ~-1 ~ bedrock run setblock ~ ~-1 ~ air destroy');
                return;
            }
            return;
        }
        ;
        if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 0));
            return;
        }
        return;
    }
}
//Calibrated Cobble Gens 
class PFECaliCobbleGen {
    onTick(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
            if (data.block.typeId == 'poke:calibrated_cobblestone_generator_east') {
                if (((_a = data.block.east()) === null || _a === void 0 ? void 0 : _a.typeId) != 'minecraft:air')
                    return;
                (_b = data.block.east()) === null || _b === void 0 ? void 0 : _b.setType('minecraft:cobblestone');
                return;
            }
            if (data.block.typeId == 'poke:calibrated_cobblestone_generator_west') {
                if (((_c = data.block.west()) === null || _c === void 0 ? void 0 : _c.typeId) != 'minecraft:air')
                    return;
                (_d = data.block.west()) === null || _d === void 0 ? void 0 : _d.setType('minecraft:cobblestone');
                return;
            }
            if (data.block.typeId == 'poke:calibrated_cobblestone_generator_south') {
                if (((_e = data.block.south()) === null || _e === void 0 ? void 0 : _e.typeId) != 'minecraft:air')
                    return;
                (_f = data.block.south()) === null || _f === void 0 ? void 0 : _f.setType('minecraft:cobblestone');
                return;
            }
            if (data.block.typeId == 'poke:calibrated_cobblestone_generator_north') {
                if (((_g = data.block.north()) === null || _g === void 0 ? void 0 : _g.typeId) != 'minecraft:air')
                    return;
                (_h = data.block.north()) === null || _h === void 0 ? void 0 : _h.setType('minecraft:cobblestone');
                return;
            }
            if (data.block.typeId == 'poke:calibrated_cobblestone_generator_up') {
                if (((_j = data.block.above()) === null || _j === void 0 ? void 0 : _j.typeId) != 'minecraft:air')
                    return;
                (_k = data.block.above()) === null || _k === void 0 ? void 0 : _k.setType('minecraft:cobblestone');
                return;
            }
            if (data.block.typeId == 'poke:calibrated_cobblestone_generator_down') {
                if (((_l = data.block.below()) === null || _l === void 0 ? void 0 : _l.typeId) != 'minecraft:air')
                    return;
                (_m = data.block.below()) === null || _m === void 0 ? void 0 : _m.setType('minecraft:cobblestone');
                return;
            }
            return;
        }
        if (data.block.getRedstonePower() == 0 && data.block.getRedstonePower() !== undefined) {
            data.block.setPermutation(data.block.permutation.withState('pfe:active', 0));
            return;
        }
        return;
    }
}
//Crops
class PFECrop {
    onRandomTick(data) {
        //@ts-ignore
        var growth_state = data.block.permutation.getState('poke:growth_stage');
        var growth_stage = growth_state + 1;
        if (growth_state != undefined || 6) {
            data.block.setPermutation(data.block.permutation.withState('poke:growth_stage', growth_stage));
            return;
        }
        return;
    }
    onPlayerInteract(data) {
        var _a, _b, _c;
        //@ts-ignore
        const equippableComponent = (_a = data.player) === null || _a === void 0 ? void 0 : _a.getComponent(EntityComponentTypes.Equippable);
        const mainhandItem = equippableComponent.getEquipment(EquipmentSlot.Mainhand);
        if (mainhandItem === undefined)
            return;
        const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
        //@ts-ignore
        let growth_state = data.block.permutation.getState('poke:growth_stage');
        let growth_stage = growth_state + Math.round(Math.random() * 3);
        var itemAfterUse = mainhandItem.amount;
        var itemAfterUse1 = itemAfterUse - 1;
        if (growth_stage > 6) {
            growth_stage = 6;
        }
        if (mainhandItem.typeId == MinecraftItemTypes.BoneMeal && growth_state != 6) {
            data.block.setPermutation(data.block.permutation.withState('poke:growth_stage', growth_stage));
            data.dimension.runCommand("playsound item.bone_meal.use @a " + block_location);
            data.dimension.runCommand("particle minecraft:crop_growth_emitter " + block_location);
            if (((_b = data.player) === null || _b === void 0 ? void 0 : _b.getGameMode()) != GameMode.creative) {
                if (itemAfterUse1 == 0) {
                    (_c = data.player) === null || _c === void 0 ? void 0 : _c.runCommand('clear @s bone_meal 0 1');
                    return;
                }
                equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(mainhandItem.typeId, itemAfterUse1));
                return;
            }
            return;
        }
        return;
    }
}
//Lava Sponge
class PFELavaSponge {
    onTick(data) {
        const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
        data.dimension.runCommand('execute positioned ' + block_location + ' run function poke/blocks/lava_sponge');
        return;
    }
}
/**
 * Barometer's Weather detection
 *
 * Issues:
 * - Barometer is broken due to it needing Dimension.getweather() (Currently requires Beta API)
 */
class PFEBarometer {
    onTick(data) {
        var weather = data.block.permutation.getState('pfe:weather');
        if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
            //@ts-ignore
            if (data.dimension.getWeather() == 'Clear' && weather != 0) {
                data.block.setPermutation(data.block.permutation.withState('pfe:weather', 0));
                return;
            }
            //@ts-ignore
            if (data.dimension.getWeather() != 'Thunder' && data.dimension.getWeather() == 'Rain' && weather != 1) {
                data.block.setPermutation(data.block.permutation.withState('pfe:weather', 1));
                return;
            }
            //@ts-ignore
            if (data.dimension.getWeather() == 'Thunder' && weather != 2) {
                data.block.setPermutation(data.block.permutation.withState('pfe:weather', 2));
                return;
            }
            return;
        }
    }
}
//Cassettes
class PFECassette {
    onUse(data) {
        const id = data.itemStack.typeId;
        const trackId = id.substring(id.lastIndexOf("_")).substring(1);
        data.source.playMusic(`poke.record.${trackId}`, { fade: 2.5 });
        data.source.playSound('poke.cassette_activate');
        return;
    }
}
//Windzooka & Blazooka Functions
class PFEWindzooka {
    onUse(data) {
        if (data.itemStack === undefined)
            return;
        //@ts-ignore
        const equippableComponent = data.source.getComponent(EntityComponentTypes.Equippable);
        if (equippableComponent === undefined)
            return;
        const vierDirection = data.source.getViewDirection();
        const location = data.source.location;
        const id = data.itemStack.getTags();
        //@ts-ignore
        const cooldownComp = data.itemStack.getComponent('minecraft:cooldown');
        if (data.itemStack.typeId == "poke:windzooka") {
            data.source.applyKnockback(vierDirection.x, vierDirection.z, -7, -vierDirection.y * 4);
            data.source.playSound('wind_charge.burst');
            data.source.dimension.spawnParticle('minecraft:wind_explosion_emitter', location);
        }
        else {
            data.source.applyKnockback(vierDirection.x, vierDirection.z, 7, -vierDirection.y * -4);
            data.source.playSound('wind_charge.burst');
            data.source.dimension.spawnParticle('minecraft:wind_explosion_emitter', location);
            data.source.dimension.spawnParticle('poke:blazooka_flame', location);
        }
        data.source.runCommand('' + id);
        cooldownComp.startCooldown(data.source);
        const newItem = damage_item(data.itemStack);
        equippableComponent.setEquipment(EquipmentSlot.Mainhand, newItem);
        if (!newItem) {
            data.source.playSound("random.break");
        }
        return;
    }
}
/**
Basic Item Use

Item components:
 - use_modifiers
 - cooldown

 if using durability it requires a max of 100 damage chance)
unbreaking does not work on this due to it breaking hold to continue using
*/
class PFEOnUse {
    onUse(data) {
        if (data.itemStack === undefined)
            return;
        const ItemTags = data.itemStack.getTags().toString();
        let Command = ItemTags.substring(ItemTags.indexOf('pfe:Command:'), ItemTags.indexOf(':pfeCommandEnd')).substring(12); //Command is in the tag of the item without the '/'
        data.source.runCommand('' + Command);
        //@ts-ignore
        const cooldownComp = data.itemStack.getComponent('minecraft:cooldown');
        if (cooldownComp != undefined)
            cooldownComp.startCooldown(data.source);
        //if (data.source.getGameMode() == 'creative') return; // <-- prevented items from being held down to continue using 
        if (!data.itemStack.hasComponent('minecraft:durability')) {
            return;
        }
        const newItem = damage_item(data.itemStack);
        //@ts-ignore
        const equippableComponent = data.source.getComponent(EntityComponentTypes.Equippable);
        equippableComponent.setEquipment(EquipmentSlot.Mainhand, newItem);
        if (!newItem) {
            data.source.playSound("random.break");
        }
        return;
    }
}
//Upgrader
class PFEUpgrader {
    onUseOn(data) {
        //@ts-ignore
        const player = data.source;
        //@ts-ignore
        const equippableComponent = data.source.getComponent(EntityComponentTypes.Equippable);
        const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
        const itemIds = data.itemStack.typeId;
        const itemId = itemIds.substring(5);
        data.source.runCommandAsync(`execute positioned ${block_location} run function pfe_items/upgraders/${itemId}`);
        if (player.getGameMode() == GameMode.creative)
            return;
        const newItem = damage_item(data.itemStack);
        equippableComponent.setEquipment(EquipmentSlot.Mainhand, newItem);
        if (!newItem) {
            player.playSound("random.break");
        }
        return;
    }
}
//Survival Spawn Eggs
class PFESpawnEgg {
    onUseOn(data) {
        //@ts-ignore
        const player = data.source;
        const faceLoc = data.faceLocation;
        const blockFace = data.blockFace;
        var faceLocX = --faceLoc.x;
        var faceLocY = --faceLoc.y;
        var faceLocZ = --faceLoc.z;
        var amount = data.itemStack.amount;
        //@ts-ignore
        const equippableComponent = data.source.getComponent(EntityComponentTypes.Equippable);
        if (blockFace == 'North') {
            var faceLocZ = faceLocZ + 1.5;
        }
        if (blockFace == 'South') {
            var faceLocZ = faceLocZ - 1.5;
        }
        if (blockFace == 'East') {
            var faceLocX = faceLocX - 1.5;
        }
        if (blockFace == 'West') {
            var faceLocX = faceLocX + 1.5;
        }
        if (blockFace == 'Up') {
            var faceLocY = faceLocY - 1.5;
        }
        if (blockFace == 'Down') {
            var faceLocY = faceLocY + 2;
        }
        /**↓This exists because a bug is causing it to be inverted,
         *  so it inverts the position (this also causes it to not be exactly where you interacted
         *  (but slightly offset is better than halfway across the world lol))
         */
        const vec3 = { x: -faceLocX, y: -faceLocY, z: -faceLocZ };
        const mobId = data.itemStack.getTags(); //Mob identifier should be the only tag on the item
        player.dimension.spawnEntity('' + mobId, vec3);
        if (player.getGameMode() == 'creative')
            return;
        if (amount <= 1) {
            equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack('minecraft:air', 1));
            return;
        }
        equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(data.itemStack.typeId, amount - 1));
        return;
    }
}
class PFEBowAim {
    onUse(data) {
        //@ts-ignore
        const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] });
        var cPlayersLength = cPlayers.length;
        for (var i = cPlayersLength; i > 0; i--) {
            data.source.playAnimation('animation.humanoid.bow_and_arrow', { stopExpression: '!q.is_using_item', players: [cPlayers[i - 1].name] });
        }
        return;
    }
}
class PFECrossbowAim {
    onUse(data) {
        const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] });
        var cPlayersLength = cPlayers.length;
        //data.source.playAnimation('third_person_crossbow_equipped',{stopExpression:'!q.is_using_item',controller:'pfe-controller.animation.poke.crossbow2'})//Hand charging for everyone else
        //data.source.playAnimation('waffle',{stopExpression:'!q.is_using_item',controller:'pfe-controller.animation.poke.crossbow2'})
        data.source.playAnimation('animation.player.first_person.crossbow_equipped', { stopExpression: '!q.is_using_item', players: [data.source.name + ''] }); //Hand charging movement
        for (var i = cPlayersLength; i > 0; i--) {
            data.source.playAnimation('third_person_crossbow_equipped', { stopExpression: '!q.is_using_item', players: [cPlayers[i - 1].name] }); //Hand charging for everyone else
        }
        return;
    }
}
//Other Block interact events
class PFEBlockInteract {
    onPlayerInteract(data) {
        var _a, _b;
        switch (data.block.typeId) {
            case 'poke:listener_trophy': {
                (_a = data.player) === null || _a === void 0 ? void 0 : _a.playMusic('record.listen', { fade: 5 });
                return;
            }
            case 'poke:furnace_golem_trophy': {
                (_b = data.player) === null || _b === void 0 ? void 0 : _b.playMusic('poke.record.pigstep', { fade: 5 });
                return;
            }
            case 'poke:cobalt_golem_block':
                {
                    data.dimension.spawnEntity('poke:cobalt_golem', data.block.location);
                    data.block.setType('minecraft:air');
                    return;
                }
                return;
        }
    }
}
//from bedrock add-ons discord. was slightly modified to better fit the item(s) that would be using it
const logList = ["minecraft:acacia_wood", "minecraft:birch_wood", "minecraft:cherry_wood", "minecraft:dark_oak_wood", "minecraft:jungle_wood", "minecraft:mangrove_wood", "minecraft:oak_wood", "minecraft:spruce_wood", "minecraft:acacia_log", "minecraft:birch_log", "minecraft:cherry_log", "minecraft:dark_oak_log", "minecraft:jungle_log", "minecraft:mangrove_log", "minecraft:oak_log", "minecraft:spruce_log"];
world.beforeEvents.playerBreakBlock.subscribe(data => {
    if (data.itemStack == undefined)
        return;
    if (data.itemStack.typeId != 'poke:nebula_logger')
        return;
    var block = data.block;
    var veinMiner = (logList.includes(block.typeId));
    if (veinMiner) {
        let dimension = block.dimension;
        let toBreak = [block.location];
        let checked = new Set();
        while (toBreak.length > 0) {
            let location = toBreak.shift();
            let key = `${location.x},${location.y},${location.z}`;
            if (checked.has(key))
                continue;
            checked.add(key);
            let currentBlock = dimension.getBlock(location);
            if (currentBlock && logList.includes(currentBlock.typeId)) {
                system.run(() => {
                    dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} air destroy`);
                });
                let adjacent = [
                    { x: location.x + 1, y: location.y, z: location.z },
                    { x: location.x - 1, y: location.y, z: location.z },
                    { x: location.x, y: location.y + 1, z: location.z },
                    { x: location.x, y: location.y - 1, z: location.z },
                    { x: location.x, y: location.y, z: location.z + 1 },
                    { x: location.x, y: location.y, z: location.z - 1 },
                    { x: location.x, y: location.y + 1, z: location.z + 1 },
                    { x: location.x, y: location.y + 1, z: location.z - 1 },
                    { x: location.x + 1, y: location.y + 1, z: location.z },
                    { x: location.x - 1, y: location.y + 1, z: location.z },
                    { x: location.x + 1, y: location.y, z: location.z + 1 },
                    { x: location.x + 1, y: location.y, z: location.z - 1 },
                    { x: location.x - 1, y: location.y, z: location.z + 1 },
                    { x: location.x - 1, y: location.y, z: location.z - 1 },
                    { x: location.x + 1, y: location.y + 1, z: location.z + 1 },
                    { x: location.x + 1, y: location.y + 1, z: location.z - 1 },
                    { x: location.x - 1, y: location.y + 1, z: location.z + 1 },
                    { x: location.x - 1, y: location.y + 1, z: location.z - 1 }
                ];
                for (let loc of adjacent) {
                    toBreak.push(loc);
                }
            }
        }
        data.cancel = true;
    }
});
/**
 * Dodge Spell
 */
class PFEDodge {
    onUse(data) {
        if (data.itemStack === undefined)
            return;
        //@ts-ignore
        const cooldownComponent = data.itemStack.getComponent('minecraft:cooldown');
        //@ts-ignore
        const equippableComponent = data.source.getComponent(EntityComponentTypes.Equippable);
        const moveDir = data.source.getVelocity();
        var amount = data.itemStack.amount;
        data.source.dimension.spawnParticle('minecraft:wind_explosion_emitter', data.source.location);
        //console.warn(moveDirX+' || '+moveDirY+' || '+moveDirZ)
        data.source.applyKnockback(moveDir.x, moveDir.z, 5, moveDir.y + 0.5);
        data.source.playSound('wind_charge.burst');
        if (data.source.getGameMode() == GameMode.creative)
            return;
        cooldownComponent.startCooldown(data.source);
        if (amount <= 1) {
            equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack('minecraft:air', 1));
            return;
        }
        equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(data.itemStack.typeId, amount - 1));
        return;
    }
}
class PFE8Ball {
    onPlayerInteract(data) {
        var _a;
        var RNG = Math.floor(Math.random() * 19);
        //console.warn(RNG)
        (_a = data.player) === null || _a === void 0 ? void 0 : _a.runCommand('tellraw @s {\"rawtext\":[{\"translate\":\"translation.poke:8ball' + RNG + '\",\"with\":{\"rawtext\":[{\"text\":\"\"}]}}]}');
        return;
    }
}
//Wall connections
const pfeWallNoC = ["minecraft:piston_arm_collision", "minecraft:sticky_piston_arm_collision", "minecraft:air", "minecraft:water", "minecraft:lava", "minecraft:waterlily", "minecraft:flowing_water", "minecraft:flowing_lava", "minecraft:short_grass", "minecraft:tall_grass", "minecraft:seagrass", "minecraft:kelp", "minecraft:oak_leaves", "minecraft:acacia_leaves", "minecraft:azalea_leaves", "minecraft:azalea_leaves_flowered", "minecraft:birch_leaves", "minecraft:cherry_leaves", "minecraft:dark_oak_leaves", "minecraft:jungle_leaves", "minecraft:mangrove_leaves", "minecraft:spruce_leaves"];
class PFEWall {
    onPlace(data) {
        //console.warn('i exist')
        //console.warn(''+data.block.north().typeId)
        const northB = data.block.north();
        const southB = data.block.south();
        const eastB = data.block.east();
        const westB = data.block.west();
        if (northB === undefined)
            return;
        if (southB === undefined)
            return;
        if (eastB === undefined)
            return;
        if (westB === undefined)
            return;
        //console.warn(northB)
        if (!pfeWallNoC.includes(northB.typeId)) {
            //console.warn('north block exists')
            data.block.setPermutation(data.block.permutation.withState('pfe:wall_n', true));
            if (northB.hasTag('pfe_wall')) {
                northB.setPermutation(northB.permutation.withState('pfe:wall_s', true));
            }
        }
        else {
            data.block.setPermutation(data.block.permutation.withState('pfe:wall_n', false));
        }
        if (!pfeWallNoC.includes(southB.typeId)) {
            //console.warn('south block exists')
            data.block.setPermutation(data.block.permutation.withState('pfe:wall_s', true));
            if (southB.hasTag('pfe_wall')) {
                southB.setPermutation(southB.permutation.withState('pfe:wall_n', true));
            }
        }
        else {
            data.block.setPermutation(data.block.permutation.withState('pfe:wall_s', false));
        }
        if (!pfeWallNoC.includes(eastB.typeId)) {
            //console.warn('east block exists')
            data.block.setPermutation(data.block.permutation.withState('pfe:wall_e', true));
            if (eastB.hasTag('pfe_wall')) {
                eastB.setPermutation(eastB.permutation.withState('pfe:wall_w', true));
            }
        }
        else {
            data.block.setPermutation(data.block.permutation.withState('pfe:wall_e', false));
        }
        if (!pfeWallNoC.includes(westB.typeId)) {
            //console.warn('west block exists')
            data.block.setPermutation(data.block.permutation.withState('pfe:wall_w', true));
            if (westB.hasTag('pfe_wall')) {
                westB.setPermutation(westB.permutation.withState('pfe:wall_e', true));
            }
        }
        else {
            data.block.setPermutation(data.block.permutation.withState('pfe:wall_w', false));
        }
        return;
    }
    onPlayerDestroy(data) {
        const northB = data.block.north();
        const southB = data.block.south();
        const eastB = data.block.east();
        const westB = data.block.west();
        if (northB === undefined)
            return;
        if (southB === undefined)
            return;
        if (eastB === undefined)
            return;
        if (westB === undefined)
            return;
        //console.warn('i exist')
        //console.warn(''+data.block.north().typeId)
        //console.warn(data.block.hasTag('pfe_wall'))
        if (northB.hasTag('pfe_wall')) {
            northB.setPermutation(northB.permutation.withState('pfe:wall_s', false));
        }
        if (southB.hasTag('pfe_wall')) {
            southB.setPermutation(southB.permutation.withState('pfe:wall_n', false));
        }
        if (eastB.hasTag('pfe_wall')) {
            eastB.setPermutation(eastB.permutation.withState('pfe:wall_w', false));
        }
        if (westB.hasTag('pfe_wall')) {
            westB.setPermutation(westB.permutation.withState('pfe:wall_e', false));
        }
        return;
    }
}
//Custom Component Registry (may warn about a spike on world loading because of how many components)
world.beforeEvents.worldInitialize.subscribe(event => {
    event.itemComponentRegistry.registerCustomComponent("poke:cc_dodge", new PFEDodge());
    event.itemComponentRegistry.registerCustomComponent("poke:cc_bowAim", new PFEBowAim());
    event.itemComponentRegistry.registerCustomComponent("poke:cc_crossbowAim", new PFECrossbowAim());
    event.itemComponentRegistry.registerCustomComponent("poke:cc_spawnEgg", new PFESpawnEgg());
    event.itemComponentRegistry.registerCustomComponent("poke:cas", new PFECassette());
    event.itemComponentRegistry.registerCustomComponent("poke:cc_on_use", new PFEOnUse());
    event.itemComponentRegistry.registerCustomComponent("poke:cc_zooka", new PFEWindzooka());
    event.blockComponentRegistry.registerCustomComponent("poke:trapdoor_event", new PFETrapdoor());
    event.blockComponentRegistry.registerCustomComponent("poke:fortune", new PFEFortune());
    event.blockComponentRegistry.registerCustomComponent("poke:slabs", new PFESlabs());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_bulbs", new PFEBulbs());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_phantomic_conduit", new PFEPhantomicConduit());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_da_conduit", new PFEDemonicAConduit());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_cobble_gen", new PFECobbleGen());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_cobbler", new PFECobbler());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_block_breaker", new PFEBlockBreaker());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_dirter", new PFEDirter());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_duster", new PFEDuster());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_magnet_block", new PFEMagnetBlock());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_calibrate", new PFECalibrate());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_CaliBlockBreaker", new PFECaliBlockBreaker());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_CaliCobbleGen", new PFECaliCobbleGen());
    event.blockComponentRegistry.registerCustomComponent("poke:crops", new PFECrop());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_barometer", new PFEBarometer());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_lava_sponge", new PFELavaSponge());
    event.itemComponentRegistry.registerCustomComponent("poke:cc_upgrader", new PFEUpgrader());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_block_seat", new PFEBlockSeat());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_slab_loot", new PFESlabLoot());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_block_interact", new PFEBlockInteract());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_8ball", new PFE8Ball());
    event.blockComponentRegistry.registerCustomComponent("poke:cc_wall", new PFEWall());
    return;
});
//# sourceMappingURL=main.js.map