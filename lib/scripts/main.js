import { system, world, EquipmentSlot, GameMode, EntityComponentTypes, ItemComponentTypes, ItemStack, Direction, MinecraftDimensionTypes } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftEffectTypes, MinecraftEnchantmentTypes, MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { PFEBossEventConfigName, PFEBossEventUI, PFEDefaultBossEventSettings, PFEStartBossEvent } from "./bossEvents";
import { PFEHaxelMining } from "./haxelMining";
import { PokeDamageItemUB, PokeDecrementStack } from "./commonFunctions";
import { PokeTimeConfigUIMainMenu, PokeTimeGreeting, PokeTimeZoneOffset } from "./time";
import { PFEBoltBowsComponent } from "./boltbow";
//Armor effects. I split into 4 because it should reduce the amount of commands running at a time reducing the random lag spikes
system.runInterval(() => {
    world.getDimension(MinecraftDimensionTypes.overworld).runCommandAsync("execute as @a run function poke/pfe/effects");
    system.runTimeout(() => {
        world.getDimension(MinecraftDimensionTypes.overworld).runCommandAsync("execute as @a run function poke/pfe/effects_2");
        system.runTimeout(() => {
            world.getDimension(MinecraftDimensionTypes.overworld).runCommandAsync("execute as @a run function poke/pfe/effects_3");
            system.runTimeout(() => {
                world.getDimension(MinecraftDimensionTypes.overworld).runCommandAsync("execute as @a run function poke/pfe/effects_4");
            }, 40);
        }, 80);
    }, 120);
}, 180);
/*system.runInterval(() => {
    world.getAllPlayers().forEach((data =>{
        //@ts-ignore
        let EquippableComponent:EntityEquippableComponent = data.getComponent(EntityComponentTypes.Equippable)
        let EquipmentCount = 0
        const Armor = [EquippableComponent.getEquipment(EquipmentSlot.Head),EquippableComponent.getEquipment(EquipmentSlot.Chest),EquippableComponent.getEquipment(EquipmentSlot.Legs),EquippableComponent.getEquipment(EquipmentSlot.Feet)]
        Armor.forEach((item =>{
            if (item == undefined)return;
            if (item.hasTag('pfe:SingleArmor')){
                const ItemTags = item!.getTags().toString();
                let ComponentInfo:PFEArmorEffectInfo[] = JSON.parse(ItemTags.substring(ItemTags.indexOf('pfe:ArmorEffect:'),ItemTags.indexOf(':pfeArmorEffectEnd')).substring(16));
                ComponentInfo.forEach((effect =>{
                    data.addEffect(effect.id,600,{amplifier:effect.amp,showParticles:false})
                }))
            }
        }))system.runInterval(() => {
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
*/
/*world.afterEvents.itemStopUse.subscribe(data=>{
    data.source.setDynamicProperty(`poke:isUsingItem`,false)
    console.warn(`set use to false`)
})*/
world.afterEvents.playerJoin.subscribe((data => {
    let birthdays = JSON.parse(world.getDynamicProperty(`poke:birthdays`).toString());
    //console.warn(JSON.stringify(birthdays))
    system.runTimeout(() => {
        world.getAllPlayers().forEach((player => {
            //console.warn(`Joined Id ${player.id}, your: ${player.id}`)
            if (player.id == data.playerId) {
                let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player));
                birthdays.forEach((birthday => {
                    var _a;
                    //console.warn(`${birthday.day == currentTime.getDate() && birthday.month == currentTime.getMonth()} Day ${currentTime.getDate()}, Month: ${currentTime.getMonth()}`)
                    if (birthday.day == currentTime.getDate() && birthday.month == currentTime.getMonth()) {
                        let name = { text: birthday.name };
                        if (birthday.style == "dev") {
                            name.translate = `translation.poke:birthdayDev`;
                        }
                        if (birthday.name == player.name) {
                            name.translate = `translation.poke:birthdayOwn`;
                        }
                        else if ((_a = birthday.name) === null || _a === void 0 ? void 0 : _a.endsWith(`s`)) {
                            name.text = `${birthday.name}'`;
                        }
                        else {
                            name.text = `${birthday.name}'s`;
                        }
                        player.sendMessage({ translate: `translation.poke:birthdayAnnounce`, with: { rawtext: [PokeTimeGreeting(currentTime, player, undefined, true), { text: player.name }, name] } });
                    }
                }));
            }
        }));
    }, 600);
}));
function PFEHourTimeDownEvents() {
    let currentTime = new Date(Date.now());
    //Cassette Trader spawning
    //console.warn(`Attempting to spawn cassette trader`)
    let allPlayers = world.getAllPlayers();
    let randomPlayer = allPlayers.at(Math.abs(Math.round(Math.random() * (allPlayers.length - 1))));
    randomPlayer === null || randomPlayer === void 0 ? void 0 : randomPlayer.dimension.spawnEntity('poke:cassette_trader', randomPlayer.location).runCommand(`spreadplayers ~ ~ 30 40 @s ~10`);
}
function PFETimeValidation() {
    let currentTime = new Date(Date.now());
    if (currentTime.getMinutes() == 0) {
        PFEHourTimeDownEvents();
    }
    else {
        system.runTimeout(() => {
            PFETimeValidation();
        }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20);
    }
}
//Custom Component Registry
world.beforeEvents.worldInitialize.subscribe(data => {
    var _a;
    system.runTimeout(() => {
        PFETimeValidation();
    }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20);
    let birthdayProperty = world.getDynamicProperty(`poke:birthdays`);
    if (typeof birthdayProperty != "string")
        world.setDynamicProperty(`poke:birthdays`, `[]`);
    if (typeof world.getDynamicProperty(`poke:customEvents`) != "string") {
        world.setDynamicProperty(`poke:customEvents`, '[]');
        console.warn(`Custom events were invalid; resetting to default (Ignore if this world was just created) || Poke-Calendar`);
    }
    else {
        try {
            JSON.parse((_a = world.getDynamicProperty(`poke:customEvents`)) === null || _a === void 0 ? void 0 : _a.toString());
        }
        catch (_b) {
            console.warn(`Custom events were invalid; resetting to default || Poke-Calendar`);
            world.setDynamicProperty(`poke:customEvents`, '[]');
        }
    }
    data.itemComponentRegistry.registerCustomComponent("poke:timeConfig", {
        onUse(data) {
            PokeTimeConfigUIMainMenu(data.source);
        }
    });
    if (typeof world.getDynamicProperty(PFEBossEventConfigName) == "string") {
        //@ts-ignore
        let settings = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName));
        //To prevent errors it will reset the settings to default if a setting was missing/invalid
        if ((typeof settings.ticks != "number") || (typeof settings.furnaceGolem != "object") || (typeof settings.knightling != "object") || (typeof settings.listener != "object") || (typeof settings.zombken != "object") || (typeof settings.miniDemonicAllay != "object") || (typeof settings.necromancer != "object") || (typeof settings.snowman != "object") || (typeof settings.sparky != "object") || (typeof settings.superStriker != "object") || (typeof settings.theLogger != "object")) {
            //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
            world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
        }
        ;
    }
    else {
        //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
        world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
    }
    data.itemComponentRegistry.registerCustomComponent("poke:boss_event_config", new PFEBossEventUI());
    //Item Components
    data.itemComponentRegistry.registerCustomComponent(`poke-pfe:identifier`, {
        onUseOn(data) {
            if (data.source.typeId == MinecraftEntityTypes.Player) {
                //console.warn(`sent`)
                //@ts-ignore
                data.source.sendMessage({ translate: `translation.poke-pfe:identifierMessage`, with: [data.block.typeId] });
            }
        }
    });
    data.itemComponentRegistry.registerCustomComponent(`poke:boltbow`, new PFEBoltBowsComponent());
    data.itemComponentRegistry.registerCustomComponent("poke:boss_event", { onUse(data) {
            if (PFEStartBossEvent() == 0) {
                data.source.sendMessage({ translate: `translation.poke:bossEventNoSpawnError` });
                data.source.playSound(`note.didgeridoo`, { pitch: 0.825 });
                return;
            }
            ;
            if (data.source.getGameMode() == GameMode.creative)
                return;
            //@ts-ignore
            data.source.getComponent(EntityComponentTypes.Equippable).setEquipment(EquipmentSlot.Mainhand, PokeDecrementStack(data.itemStack));
        } });
    data.itemComponentRegistry.registerCustomComponent('poke:veinMiner', {
        onMineBlock(data) {
            if (!data.minedBlockPermutation.hasTag('minecraft:is_axe_item_destructible'))
                return;
            let dimension = data.block.dimension;
            let location = data.block.location;
            let toBreak = [
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
                { x: location.x - 1, y: location.y + 1, z: location.z - 1 },
                { x: location.x + 1, y: location.y - 1, z: location.z + 1 },
                { x: location.x + 1, y: location.y - 1, z: location.z - 1 },
                { x: location.x - 1, y: location.y - 1, z: location.z + 1 },
                { x: location.x - 1, y: location.y - 1, z: location.z - 1 },
                { x: location.x, y: location.y - 1, z: location.z + 1 },
                { x: location.x, y: location.y - 1, z: location.z - 1 },
                { x: location.x + 1, y: location.y - 1, z: location.z },
                { x: location.x - 1, y: location.y - 1, z: location.z },
            ];
            let checked = new Set();
            //cap is 256 so game world will not crash if used on an excessive amount of blocks
            let max = 0;
            while (max < 256 && toBreak.length > 0) {
                location = toBreak.shift();
                let key = `${location.x},${location.y},${location.z}`;
                if (checked.has(key)) {
                    //console.warn(`block already checked`)
                    continue;
                }
                ;
                checked.add(key);
                let currentBlock = undefined;
                //to prevent the vein miner from randomly stopping if outside of world bounds
                try {
                    currentBlock = dimension.getBlock(location);
                }
                catch (error) {
                    continue;
                }
                //console.warn(currentBlock?.getTags())
                if (data.minedBlockPermutation.matches(currentBlock.typeId)) {
                    dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} air destroy`);
                    max = max + 1;
                    //console.warn(max)
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
                        { x: location.x - 1, y: location.y + 1, z: location.z - 1 },
                        { x: location.x + 1, y: location.y - 1, z: location.z + 1 },
                        { x: location.x + 1, y: location.y - 1, z: location.z - 1 },
                        { x: location.x - 1, y: location.y - 1, z: location.z + 1 },
                        { x: location.x - 1, y: location.y - 1, z: location.z - 1 },
                        { x: location.x, y: location.y - 1, z: location.z + 1 },
                        { x: location.x, y: location.y - 1, z: location.z - 1 },
                        { x: location.x + 1, y: location.y - 1, z: location.z },
                        { x: location.x - 1, y: location.y - 1, z: location.z },
                    ];
                    for (let loc of adjacent) {
                        toBreak.push(loc);
                    }
                }
            }
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:normalMining", {
        onMineBlock(data) {
            PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:shootProjectile", {
        onUse(data) {
            if (data.itemStack == undefined)
                return;
            const headLocate = data.source.getHeadLocation();
            //@ts-ignore
            const ticks = data.itemStack.getComponent('cooldown').cooldownTicks;
            //@ts-ignore
            if (data.itemStack.getComponent('cooldown').getCooldownTicksRemaining(data.source) != ticks - 1)
                return;
            //Projectile shooters. projectile id defined in a tag on the item
            const pTag = data.itemStack.getTags();
            const angle = data.source.getViewDirection();
            const projEntity = data.source.dimension.spawnEntity('' + pTag, headLocate);
            //@ts-ignore
            const projComp = projEntity.getComponent("projectile");
            data.source.playSound('random.bow');
            projComp.owner = data.source;
            projComp.shoot(angle);
            PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:hitEffects", {
        onHitEntity(data) {
            var _a;
            switch ((_a = data.itemStack) === null || _a === void 0 ? void 0 : _a.typeId) {
                case 'poke:demonic_sword': {
                    data.hitEntity.addEffect('slowness', 100, { amplifier: 3 });
                    return;
                }
                case 'poke:hellish_blade': {
                    data.hitEntity.addEffect('slowness', 40, { amplifier: 3 });
                    return;
                }
                case 'poke:godly_sword': {
                    data.attackingEntity.addEffect('strength', 100, { amplifier: 2 });
                    return;
                }
                case 'poke:holy_sword': {
                    data.attackingEntity.addEffect('strength', 40, { amplifier: 1 });
                    return;
                }
                case 'poke:astral_sword': {
                    data.attackingEntity.addEffect('strength', 100, { amplifier: 2 });
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
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 4 });
                    data.hitEntity.addEffect('blindness', 20);
                    return;
                }
                case 'poke:demonic_slasher': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 });
                    data.hitEntity.addEffect('wither', 80, { amplifier: 1 });
                    return;
                }
                case 'poke:gold_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
                    data.attackingEntity.addEffect('haste', 600, { amplifier: 2 });
                    return;
                }
                case 'poke:emerald_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
                    data.attackingEntity.addEffect('village_hero', 2400, { amplifier: 1 });
                    return;
                }
                case 'poke:iron_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
                    return;
                }
                case 'poke:onyx_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 5 });
                    data.attackingEntity.addEffect('jump_boost', 100, { amplifier: 2 });
                    data.hitEntity.addEffect('weakness', 120, { amplifier: 2 });
                    return;
                }
                case 'poke:godly_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.attackingEntity.addEffect('slow_falling', 2400);
                    data.attackingEntity.addEffect('jump_boost', 1200, { amplifier: 3 });
                    return;
                }
                case 'poke:hellish_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 });
                    data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 2400);
                    data.hitEntity.addEffect('mining_fatigue', 400, { amplifier: 1 });
                    return;
                }
                case 'poke:holy_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.attackingEntity.addEffect('slow_falling', 2400, { amplifier: 1 });
                    data.hitEntity.addEffect('darkness', 400);
                    return;
                }
                case 'poke:shade_scythe': {
                    data.attackingEntity.addEffect('absorption', 600, { amplifier: 1 });
                    data.attackingEntity.addEffect('strength', 100, { amplifier: 1 });
                    data.hitEntity.addEffect('slowness', 160, { amplifier: 2 });
                    return;
                }
                case 'poke:diamond_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 });
                    data.hitEntity.addEffect('weakness', 100, { amplifier: 1 });
                    data.hitEntity.addEffect('blindness', 80);
                    return;
                }
                case 'poke:netherite_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 });
                    data.hitEntity.addEffect('hunger', 120, { amplifier: 1 });
                    data.hitEntity.addEffect('slowness', 80, { amplifier: 2 });
                    return;
                }
                case 'poke:radium_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 5 });
                    data.hitEntity.addEffect('nausea', 80, { amplifier: 1 });
                    data.hitEntity.addEffect('fatal_poison', 160, { amplifier: 2 });
                    return;
                }
                case 'poke:medic_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
                    data.attackingEntity.addEffect('health_boost', 2400, { amplifier: 2 });
                    return;
                }
                case 'poke:galactic_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 9 });
                    data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300);
                    data.hitEntity.addEffect('wither', 80, { amplifier: 2 });
                    data.hitEntity.addEffect('weakness', 80, { amplifier: 2 });
                    return;
                }
                case 'poke:astral_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 120, { amplifier: 9 });
                    data.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300);
                    data.hitEntity.addEffect('wither', 120, { amplifier: 2 });
                    data.hitEntity.addEffect('weakness', 120, { amplifier: 3 });
                    return;
                }
                case 'poke:ember_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
                    data.hitEntity.addEffect('nausea', 80, { amplifier: 1 });
                    data.hitEntity.addEffect('blindness', 80);
                    return;
                }
                case 'poke:void_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.hitEntity.runCommand('function poke/pfe/void_scythe');
                    return;
                }
                case 'poke:death_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
                    data.hitEntity.runCommand('function poke/pfe/death_scythe');
                    return;
                }
                case 'poke:nebula_scythe': {
                    data.attackingEntity.runCommand('function poke/pfe/nebula_scythe');
                    data.hitEntity.addEffect('wither', 80, { amplifier: 3 });
                    return;
                }
                case 'poke:cobalt_scythe': {
                    data.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
                    data.hitEntity.addEffect('wither', 40, { amplifier: 1 });
                    return;
                }
                case 'poke:nebula_sword': {
                    data.attackingEntity.addEffect('strength', 40, { amplifier: 4 });
                    data.hitEntity.addEffect('weakness', 20, { amplifier: 2 });
                    return;
                }
                case 'poke:ban_hammer': {
                    data.attackingEntity.addEffect('strength', 40, { amplifier: 4 });
                    data.hitEntity.addEffect('weakness', 20, { amplifier: 2 });
                    return;
                }
                case 'poke:circuit_sword': {
                    data.attackingEntity.runCommand('function poke/pfe/circuit_sword');
                    data.hitEntity.addEffect('blindness', 100);
                    return;
                }
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:consumeEffects", {
        onConsume(data) {
            switch (data.itemStack.typeId) {
                case 'poke:xp_vial':
                    {
                        data.source.runCommandAsync("xp 160 @s");
                        return;
                    }
                    ;
                case 'poke:cobalt_potion': {
                    data.source.addEffect(MinecraftEffectTypes.NightVision, 3600);
                    data.source.addEffect(MinecraftEffectTypes.Regeneration, 2400);
                }
                case 'poke:cobalt_soup':
                    {
                        data.source.addEffect(MinecraftEffectTypes.NightVision, 2400, { showParticles: false });
                        return;
                    }
                    ;
                case 'poke:root_beer':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4, });
                        return;
                    }
                    ;
                case 'poke:pumpkin_spice':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Invisibility, 600);
                        data.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4, });
                        return;
                    }
                    ;
                case 'poke:crimson_sporeshroom_stew':
                    {
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
                        return;
                    }
                    ;
                case 'poke:warped_sporeshroom_stew':
                    {
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
                        return;
                    }
                    ;
                case 'poke:hellish_soup':
                    {
                        data.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
                        return;
                    }
                    ;
                case 'poke:nebula_noodles':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Strength, 600, { amplifier: 7, });
                        return;
                    }
                    ;
                case 'poke:milk_bottle':
                    {
                        data.source.runCommandAsync("effect @s clear");
                        return;
                    }
                    ;
                case 'poke:demonic_potion':
                    {
                        data.source.runCommandAsync("function poke/pfe/demonic_potion");
                        return;
                    }
                    ;
                case 'poke:hellish_potion':
                    {
                        data.source.runCommandAsync("function poke/pfe/hellish_potion");
                        return;
                    }
                    ;
                case 'poke:nebula_potion':
                    {
                        data.source.runCommandAsync("function poke/pfe/nebula_potion");
                        return;
                    }
                    ;
                case 'poke:void_potion':
                    {
                        data.source.runCommandAsync("function poke/pfe/void_potion");
                        return;
                    }
                    ;
                case 'poke:death_potion':
                    {
                        data.source.kill();
                        return;
                    }
                    ;
                case 'poke:rotten_chicken':
                    {
                        data.source.addEffect(MinecraftEffectTypes.Nausea, 400);
                        return;
                    }
                    ;
                case 'poke:golden_chicken':
                    {
                        data.source.addEffect(MinecraftEffectTypes.VillageHero, 400, { amplifier: 1, });
                        return;
                    }
                    ;
                case 'poke:banished_star_x10':
                    {
                        data.source.runCommandAsync("damage @a[r=100] 32767000 entity_attack entity @s");
                        return;
                    }
                    ;
                case 'poke:banished_star_x9':
                    {
                        data.source.runCommandAsync("damage @s 32767000 entity_attack");
                        return;
                    }
                    ;
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:haxelMining", new PFEHaxelMining());
    data.itemComponentRegistry.registerCustomComponent("poke:cc_dodge", {
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
            data.source.playSound('component.jump_to_block');
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
    });
    data.itemComponentRegistry.registerCustomComponent("poke:cc_bowAim", {
        onUse(data) {
            //@ts-ignore
            const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] });
            var cPlayersLength = cPlayers.length;
            for (var i = cPlayersLength; i > 0; i--) {
                //data.source.playAnimation('animation.humanoid.bow_and_arrow',{stopExpression: '!q.is_using_item', players:[cPlayers[i-1].name]})
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:cc_crossbowAim", {
        onUse(data) {
            const cPlayers = data.source.dimension.getPlayers({ excludeNames: ['' + data.source.name] });
            var cPlayersLength = cPlayers.length;
            //data.source.playAnimation('third_person_crossbow_equipped',{stopExpression:'!q.is_using_item',controller:'pfe-controller.animation.poke_pfe.crossbow2'})//Hand charging for everyone else
            //data.source.playAnimation('waffle',{stopExpression:'!q.is_using_item',controller:'pfe-controller.animation.poke_pfe.crossbow2'})
            data.source.playAnimation('animation.player.first_person.crossbow_equipped', { stopExpression: '!q.is_using_item', players: [data.source.name + ''] }); //Hand charging movement
            for (var i = cPlayersLength; i > 0; i--) {
                data.source.playAnimation('third_person_crossbow_equipped', { stopExpression: '!q.is_using_item', players: [cPlayers[i - 1].name] }); //Hand charging for everyone else
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:cc_spawnEgg", {
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
            if (blockFace == Direction.North) {
                var faceLocZ = faceLocZ + 1.5;
            }
            if (blockFace == Direction.South) {
                var faceLocZ = faceLocZ - 1.5;
            }
            if (blockFace == Direction.East) {
                var faceLocX = faceLocX - 1.5;
            }
            if (blockFace == Direction.West) {
                var faceLocX = faceLocX + 1.5;
            }
            if (blockFace == Direction.Up) {
                var faceLocY = faceLocY - 1.5;
            }
            if (blockFace == Direction.Down) {
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
    });
    data.itemComponentRegistry.registerCustomComponent("poke:cas", {
        onUse(data) {
            const id = data.itemStack.typeId;
            const trackId = id.substring(id.lastIndexOf("_")).substring(1);
            if (data.source.isSneaking) {
                data.source.queueMusic(`poke.record.${trackId}`);
                data.source.playSound('poke.cassette_activate');
                data.source.sendMessage({ translate: `translation.poke:trackQueued` });
                return;
            }
            else {
                data.source.playMusic(`poke.record.${trackId}`, { fade: 2.5 });
                data.source.playSound('poke.cassette_activate');
            }
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:cc_on_use", {
        onUse(data) {
            if (data.itemStack === undefined)
                return;
            const ItemTags = data.itemStack.getTags().toString();
            let Command = ItemTags.substring(ItemTags.indexOf('pfe:Command:'), ItemTags.indexOf(':pfeCommandEnd')).substring(12); //Command is in the tag of the item without the '/'
            data.source.runCommand(`${Command}`);
            //@ts-ignore
            const cooldownComp = data.itemStack.getComponent('minecraft:cooldown');
            if (cooldownComp != undefined)
                cooldownComp.startCooldown(data.source);
            if (data.itemStack.isStackable) {
                return;
            }
            PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke:cc_zooka", {
        onUse(data) {
            if (data.itemStack === undefined)
                return;
            const vierDirection = data.source.getViewDirection();
            const location = data.source.getHeadLocation();
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
            PokeDamageItemUB(data.itemStack, undefined, data.source, EquipmentSlot.Mainhand);
            return;
        }
    });
    data.itemComponentRegistry.registerCustomComponent("poke-pfe:upgrader", {
        onUseOn(data) {
            /*
            \"\",

            poke-pfe:UpgraderInfo:{\"canUpgrade\":[\"poke:carved_melon\",\"poke:gilded_carved_melon\",\"minecraft:pumpkin\",\"minecraft:melon_block\",\"poke:gilded_melon\",\"minecraft:brown_mushroom_block",\"minecraft:red_mushroom_block\"]}:poke-pfe:UpgraderInfoEnd
            */
            let tagData = data.itemStack.getTags().toString();
            let componentInfo = JSON.parse(tagData.substring(tagData.indexOf(`poke-pfe:UpgraderInfo:`), tagData.lastIndexOf(`:poke-pfe:UpgraderInfoEnd`)).substring(22));
            console.warn(JSON.stringify(componentInfo));
            let multi = 1;
            if (componentInfo.canUpgrade.includes(data.block.typeId)) {
                const block_location = `${data.block.x} ${data.block.y} ${data.block.z}`;
                const itemIds = data.itemStack.typeId;
                const itemId = itemIds.substring(5);
                data.source.runCommandAsync(`execute positioned ${block_location} run function poke/pfe/${itemId}`);
            }
            else {
                multi = 0;
            }
            PokeDamageItemUB(data.itemStack, multi, data.source, EquipmentSlot.Mainhand);
            return;
        }
    });
    //Block Components
    data.blockComponentRegistry.registerCustomComponent("poke:trapdoor_event", {
        onPlayerInteract(data) {
            const blockLocation = `${data.block.location.x} ${data.block.location.y} ${data.block.location.z}`;
            if (data.block.permutation.hasTag('pfe_trapdoor_open') == true) {
                data.block.setPermutation(data.block.permutation.withState('poke:trapdoor_open', 'no'));
                data.block.dimension.playSound(`open.iron_trapdoor`, data.block.center());
                return;
            }
            else {
                data.block.setPermutation(data.block.permutation.withState('poke:trapdoor_open', 'yes'));
                data.block.dimension.playSound(`close.iron_trapdoor`, data.block.center());
                return;
            }
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:fortune", {
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
            //console.warn(rng)
            const blockLocation = `${data.block.x} ${data.block.y} ${data.block.z}`;
            const blockId = data.destroyedBlockPermutation.type.id.substring(5);
            if (((_d = data.player) === null || _d === void 0 ? void 0 : _d.getGameMode()) == GameMode.survival) {
                if (fortuneLevel == 3) {
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    if (rng == 0)
                        return;
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    return;
                }
                if (fortuneLevel == 2) {
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    if (rng == 0)
                        return;
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    return;
                }
                if (fortuneLevel == 1) {
                    if (rng == 0)
                        return;
                    data.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
                    return;
                }
                return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:slabs", {
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
                if (mainhand.typeId == slabId && ((data.block.permutation.getState('minecraft:vertical_half') == "bottom" && data.face == Direction.Up) || (data.block.permutation.getState('minecraft:vertical_half') == "top" && data.face == Direction.Down)) && data.block.permutation.getState('poke:double') == false) {
                    var itemStackAmount = mainhand.amount - 1;
                    data.block.setPermutation(data.block.permutation.withState('poke:double', true));
                    data.block.dimension.playSound(`use.stone`, data.block.center());
                    if (((_a = data.player) === null || _a === void 0 ? void 0 : _a.getGameMode()) == 'creative')
                        return;
                    if (itemStackAmount <= 0) {
                        equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack('minecraft:air', 1));
                        return;
                    }
                    equippableComponent.setEquipment(EquipmentSlot.Mainhand, new ItemStack(slabId, itemStackAmount));
                    return;
                }
                else
                    return;
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_bulbs", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_phantomic_conduit", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_da_conduit", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_cobble_gen", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_cobbler", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_block_breaker", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_dirter", {
        onTick(data) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
                switch (data.block.typeId) {
                    case 'poke:dirter_east': {
                        if (((_a = data.block.east()) === null || _a === void 0 ? void 0 : _a.typeId) == 'minecraft:cobblestone') {
                            (_b = data.block.east()) === null || _b === void 0 ? void 0 : _b.setType('minecraft:dirt');
                            break;
                        }
                    }
                    case 'poke:dirter_west': {
                        if (((_c = data.block.west()) === null || _c === void 0 ? void 0 : _c.typeId) == 'minecraft:cobblestone') {
                            (_d = data.block.west()) === null || _d === void 0 ? void 0 : _d.setType('minecraft:dirt');
                            break;
                        }
                    }
                    case 'poke:dirter_south': {
                        if (((_e = data.block.south()) === null || _e === void 0 ? void 0 : _e.typeId) == 'minecraft:cobblestone') {
                            (_f = data.block.south()) === null || _f === void 0 ? void 0 : _f.setType('minecraft:dirt');
                            break;
                        }
                    }
                    case 'poke:dirter_north': {
                        if (((_g = data.block.north()) === null || _g === void 0 ? void 0 : _g.typeId) == 'minecraft:cobblestone') {
                            (_h = data.block.north()) === null || _h === void 0 ? void 0 : _h.setType('minecraft:dirt');
                            break;
                        }
                    }
                    case 'poke:dirter_up': {
                        if (((_j = data.block.above()) === null || _j === void 0 ? void 0 : _j.typeId) == 'minecraft:cobblestone') {
                            (_k = data.block.above()) === null || _k === void 0 ? void 0 : _k.setType('minecraft:dirt');
                            break;
                        }
                    }
                    case 'poke:dirter_down': {
                        if (((_l = data.block.below()) === null || _l === void 0 ? void 0 : _l.typeId) == 'minecraft:cobblestone') {
                            (_m = data.block.below()) === null || _m === void 0 ? void 0 : _m.setType('minecraft:dirt');
                            break;
                        }
                    }
                    case 'poke:dirter': {
                        if (((_o = data.block.below()) === null || _o === void 0 ? void 0 : _o.typeId) == 'minecraft:cobblestone') {
                            (_p = data.block.below()) === null || _p === void 0 ? void 0 : _p.setType('minecraft:dirt');
                            return;
                        }
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_duster", {
        onTick(data) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
            if (data.block.getRedstonePower() != 0 && data.block.getRedstonePower() !== undefined) {
                data.block.setPermutation(data.block.permutation.withState('pfe:active', 1));
                switch (data.block.typeId) {
                    case 'poke:duster_east': {
                        if (((_a = data.block.east()) === null || _a === void 0 ? void 0 : _a.typeId) == 'minecraft:dirt') {
                            (_b = data.block.east()) === null || _b === void 0 ? void 0 : _b.setType('minecraft:sand');
                            break;
                        }
                        if (((_c = data.block.east()) === null || _c === void 0 ? void 0 : _c.typeId) == 'minecraft:cobblestone') {
                            (_d = data.block.east()) === null || _d === void 0 ? void 0 : _d.setType('minecraft:gravel');
                            break;
                        }
                    }
                    case 'poke:duster_west': {
                        if (((_e = data.block.west()) === null || _e === void 0 ? void 0 : _e.typeId) == 'minecraft:dirt') {
                            (_f = data.block.west()) === null || _f === void 0 ? void 0 : _f.setType('minecraft:sand');
                            break;
                        }
                        if (((_g = data.block.west()) === null || _g === void 0 ? void 0 : _g.typeId) == 'minecraft:cobblestone') {
                            (_h = data.block.west()) === null || _h === void 0 ? void 0 : _h.setType('minecraft:gravel');
                            break;
                        }
                    }
                    case 'poke:duster_south': {
                        if (((_j = data.block.south()) === null || _j === void 0 ? void 0 : _j.typeId) == 'minecraft:dirt') {
                            (_k = data.block.south()) === null || _k === void 0 ? void 0 : _k.setType('minecraft:sand');
                            break;
                        }
                        if (((_l = data.block.south()) === null || _l === void 0 ? void 0 : _l.typeId) == 'minecraft:cobblestone') {
                            (_m = data.block.south()) === null || _m === void 0 ? void 0 : _m.setType('minecraft:gravel');
                            break;
                        }
                    }
                    case 'poke:duster_north': {
                        if (((_o = data.block.north()) === null || _o === void 0 ? void 0 : _o.typeId) == 'minecraft:dirt') {
                            (_p = data.block.north()) === null || _p === void 0 ? void 0 : _p.setType('minecraft:sand');
                            break;
                        }
                        if (((_q = data.block.north()) === null || _q === void 0 ? void 0 : _q.typeId) == 'minecraft:cobblestone') {
                            (_r = data.block.north()) === null || _r === void 0 ? void 0 : _r.setType('minecraft:gravel');
                            break;
                        }
                    }
                    case 'poke:duster_up': {
                        if (((_s = data.block.above()) === null || _s === void 0 ? void 0 : _s.typeId) == 'minecraft:dirt') {
                            (_t = data.block.above()) === null || _t === void 0 ? void 0 : _t.setType('minecraft:sand');
                            break;
                        }
                        if (((_u = data.block.above()) === null || _u === void 0 ? void 0 : _u.typeId) == 'minecraft:cobblestone') {
                            (_v = data.block.above()) === null || _v === void 0 ? void 0 : _v.setType('minecraft:gravel');
                            break;
                        }
                    }
                    case 'poke:duster_down': {
                        if (((_w = data.block.below()) === null || _w === void 0 ? void 0 : _w.typeId) == 'minecraft:dirt') {
                            (_x = data.block.below()) === null || _x === void 0 ? void 0 : _x.setType('minecraft:sand');
                            break;
                        }
                        if (((_y = data.block.below()) === null || _y === void 0 ? void 0 : _y.typeId) == 'minecraft:cobblestone') {
                            (_z = data.block.below()) === null || _z === void 0 ? void 0 : _z.setType('minecraft:gravel');
                            break;
                        }
                    }
                    case 'poke:duster': {
                        if (((_0 = data.block.below()) === null || _0 === void 0 ? void 0 : _0.typeId) == 'minecraft:dirt') {
                            (_1 = data.block.below()) === null || _1 === void 0 ? void 0 : _1.setType('minecraft:sand');
                            break;
                        }
                        if (((_2 = data.block.below()) === null || _2 === void 0 ? void 0 : _2.typeId) == 'minecraft:cobblestone') {
                            (_3 = data.block.below()) === null || _3 === void 0 ? void 0 : _3.setType('minecraft:gravel');
                            break;
                        }
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_magnet_block", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_calibrate", {
        onPlayerInteract(data) {
            const OldId = ['poke:duster', 'poke:dirter'];
            const bId = data.block.typeId;
            const newBlock = `${bId.substring(0, bId.lastIndexOf("_"))}_${data.face.toLowerCase()}`;
            if (newBlock == bId)
                return;
            if (OldId.includes(bId)) {
                //Converts old Dirter / Duster into the Calibrated ones
                data.block.setType(bId + '_up');
                return;
            }
            data.block.setType(newBlock);
            data.dimension.playSound('poke.calibrate', data.block.center());
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_CaliBlockBreaker", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_CaliCobbleGen", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:crops", {
        onRandomTick(data) {
            //@ts-ignore
            var growth_state = data.block.permutation.getState('poke:growth_stage');
            var growth_stage = growth_state + 1;
            if (growth_state != undefined || 6) {
                data.block.setPermutation(data.block.permutation.withState('poke:growth_stage', growth_stage));
                return;
            }
            return;
        },
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_barometer", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_lava_sponge", {
        onPlace(data) {
            var _a, _b, _c, _d, _e, _f;
            /*
            Drying molten lava sponge to lava sponge
            
            switch(MinecraftBlockTypes.Water||MinecraftBlockTypes.FlowingWater){
                case data.block.north()?.typeId:break;
                case data.block.south()?.typeId:break;
                case data.block.east()?.typeId:break;
                case data.block.west()?.typeId:break;
                case data.block.below()?.typeId:break;
                case data.block.above()?.typeId:break;
                default:return;
            };
            data.block.setType(`poke:lava_sponge`);
            data.dimension.playSound(`random.fizz`,data.block.center());
            data.dimension.spawnParticle(`minecraft:cauldron_explosion_emitter`,data.block.center());
            return
            */
            switch (MinecraftBlockTypes.Lava || MinecraftBlockTypes.FlowingLava) {
                case (_a = data.block.north()) === null || _a === void 0 ? void 0 : _a.typeId: break;
                case (_b = data.block.south()) === null || _b === void 0 ? void 0 : _b.typeId: break;
                case (_c = data.block.east()) === null || _c === void 0 ? void 0 : _c.typeId: break;
                case (_d = data.block.west()) === null || _d === void 0 ? void 0 : _d.typeId: break;
                case (_e = data.block.below()) === null || _e === void 0 ? void 0 : _e.typeId: break;
                case (_f = data.block.above()) === null || _f === void 0 ? void 0 : _f.typeId: break;
                default: return;
            }
            data.dimension.runCommand(`execute positioned ${data.block.x} ${data.block.y} ${data.block.z} run function poke/pfe/lava_sponge_to_molten`);
            return;
        },
        onTick(data) {
            var _a, _b, _c, _d, _e, _f;
            switch (MinecraftBlockTypes.Lava || MinecraftBlockTypes.FlowingLava) {
                case (_a = data.block.north()) === null || _a === void 0 ? void 0 : _a.typeId: break;
                case (_b = data.block.south()) === null || _b === void 0 ? void 0 : _b.typeId: break;
                case (_c = data.block.east()) === null || _c === void 0 ? void 0 : _c.typeId: break;
                case (_d = data.block.west()) === null || _d === void 0 ? void 0 : _d.typeId: break;
                case (_e = data.block.below()) === null || _e === void 0 ? void 0 : _e.typeId: break;
                case (_f = data.block.above()) === null || _f === void 0 ? void 0 : _f.typeId: break;
                default: return;
            }
            data.dimension.runCommand(`execute positioned ${data.block.x} ${data.block.y} ${data.block.z} run function poke/pfe/lava_sponge_to_molten`);
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_block_seat", {
        onPlayerInteract(data) {
            var _a;
            const slabId = data.block.typeId;
            //@ts-ignore
            const mainhand = data.player.getComponent(EntityComponentTypes.Equippable).getEquipment('Mainhand');
            const options = {
                type: 'poke:seat',
                location: data.block.center(),
                maxDistance: 0.24
            };
            if ((mainhand === null || mainhand === void 0 ? void 0 : mainhand.typeId) != slabId && !((_a = data.player) === null || _a === void 0 ? void 0 : _a.isSneaking)) {
                if (data.block.permutation.getState('minecraft:vertical_half') == 'bottom' && data.block.permutation.getState('poke:double') == false) {
                    if (data.dimension.getEntities(options).length > 0) {
                        return;
                    }
                    else {
                        //@ts-ignore
                        data.dimension.spawnEntity('poke:seat', data.block.center()).getComponent('minecraft:rideable').addRider(data.player);
                        return;
                    }
                }
            }
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_slab_loot", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_block_interact", {
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
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_8ball", {
        onPlayerInteract(data) {
            var _a;
            var RNG = Math.floor(Math.random() * 19);
            //console.warn(RNG)
            (_a = data.player) === null || _a === void 0 ? void 0 : _a.sendMessage({ rawtext: [{ translate: `translation.poke:8ball${RNG}` }] });
            return;
        }
    });
    data.blockComponentRegistry.registerCustomComponent("poke:cc_wall", {
        onPlace(data) {
            const pfeWallNoC = ["minecraft:piston_arm_collision", "minecraft:sticky_piston_arm_collision", "minecraft:air", "minecraft:water", "minecraft:lava", "minecraft:waterlily", "minecraft:flowing_water", "minecraft:flowing_lava", "minecraft:short_grass", "minecraft:tall_grass", "minecraft:seagrass", "minecraft:kelp", "minecraft:oak_leaves", "minecraft:acacia_leaves", "minecraft:azalea_leaves", "minecraft:azalea_leaves_flowered", "minecraft:birch_leaves", "minecraft:cherry_leaves", "minecraft:dark_oak_leaves", "minecraft:jungle_leaves", "minecraft:mangrove_leaves", "minecraft:spruce_leaves"];
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
        },
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
    });
    return;
});
//# sourceMappingURL=main.js.map