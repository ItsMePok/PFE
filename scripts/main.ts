import { system, world, EquipmentSlot, EntityComponentTypes, ItemComponentTypes, Player, RawMessage, CommandPermissionLevel, CustomCommandParamType, CustomCommandStatus, CustomCommandOrigin, CustomCommandResult, ItemLockMode, ItemStack } from "@minecraft/server";
import { MinecraftEnchantmentTypes } from "@minecraft/vanilla-data";
import { PFEBossEventConfig, PFEBossEventConfigName, PFEDefaultBossEventSettings, startBossEvents } from "./bossEvents";
import { PFETimeValidation, PokeBirthdays, PokeTimeGreeting, PokeTimeZoneOffset } from "./time";
import { PFEDisableConfigDefault, PFEDisableConfigName, OpenPFEConfig } from "./config";
import { PFECustomArmorEffectDynamicProperty, PFECustomEffectInfo, startSetEffects } from "./armorEffects";
import { PFECustomCraftQuestsPropertyID, PFECustomFarmQuestsPropertyID, PFECustomKillQuestsPropertyID, PFECustomMineQuestsPropertyID } from "./quests";
import ComputersCompat, { initExampleStickers } from "./addonCompatibility/jigarbov";
import { RegisterItemComponents } from "./custom_components/item_custom_components";
import { RegisterBlockComponents } from "./custom_components/block_custom_components";
const currentVersion = 103001 // PFE Version (ex: 103062 = v1.3.62)

world.afterEvents.playerJoin.subscribe((data => {
    let birthdays: PokeBirthdays[] = JSON.parse(world.getDynamicProperty(`poke_pfe:birthdays`)!.toString())
    //console.warn(JSON.stringify(birthdays))
    system.runTimeout(() => {
        world.getAllPlayers().forEach((player => {
            //console.warn(`Joined Id ${player.id}, your: ${player.id}`)
            if (player.id == data.playerId) {
                let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player))
                birthdays.forEach((birthday => {
                    //console.warn(`${birthday.day == currentTime.getDate() && birthday.month == currentTime.getMonth()} Day ${currentTime.getDate()}, Month: ${currentTime.getMonth()}`)
                    if (birthday.day == currentTime.getDate() && birthday.month == currentTime.getMonth()) {
                        let name: RawMessage = { text: birthday.name }
                        if (birthday.style == "dev") {
                            name.translate = `translation.poke_pfe:birthdayDev`
                        }
                        if (birthday.name == player.name) {
                            name.translate = `translation.poke_pfe:birthdayOwn`
                        }
                        else if (birthday.name?.endsWith(`s`)) {
                            name.text = `${birthday.name}'`
                        }
                        else {
                            name.text = `${birthday.name}'s`
                        }
                        player.sendMessage({ translate: `translation.poke_pfe:birthdayAnnounce`, with: { rawtext: [PokeTimeGreeting(currentTime, player, undefined, true), { text: player.name }, name] } })
                    }
                }))
            }
        }))
    }, 600)
}))

//Custom Component Registry & Initial Setup
system.beforeEvents.startup.subscribe(data => {
    RegisterItemComponents(data)
    RegisterBlockComponents(data)
    // Custom Commands
    data.customCommandRegistry.registerCommand(
        {
            name: "poke_pfe:config",
            description: "Opens PFE's config menu",
            permissionLevel: CommandPermissionLevel.Admin,
            optionalParameters: [{ type: CustomCommandParamType.PlayerSelector, name: "openAs" }],
        }, ConfigCustomCommand)
    data.customCommandRegistry.registerCommand(
        {
            name: "poke_pfe:swap_hat",
            description: "Swaps your helmet for whatever you are holding. some items can lose data if being swapped to the Helmet slot that are not valid helmet items",
            permissionLevel: CommandPermissionLevel.Admin,
            optionalParameters: [{ type: CustomCommandParamType.PlayerSelector, name: "swapAs" }],
        }, SwapHatCommand)
    return;
})
world.afterEvents.worldLoad.subscribe((data) => {
    world.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify([]))
    world.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify([]))
    world.setDynamicProperty(PFECustomFarmQuestsPropertyID, JSON.stringify([]))
    world.setDynamicProperty(PFECustomCraftQuestsPropertyID, JSON.stringify([]))
    world.setDynamicProperty(PFECustomKillQuestsPropertyID, JSON.stringify([]))
    world.setDynamicProperty(PFECustomArmorEffectDynamicProperty, JSON.stringify([]))
    system.runTimeout(() => {
        PFETimeValidation()
    }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20)
    if (typeof world.getDynamicProperty(PFEDisableConfigName) != "string") {
        world.setDynamicProperty(PFEDisableConfigName, JSON.stringify(PFEDisableConfigDefault))
    }
    const birthdayProperty = world.getDynamicProperty(`poke_pfe:birthdays`)
    if (typeof birthdayProperty != "string") world.setDynamicProperty(`poke_pfe:birthdays`, `[]`);
    const CustomEventsDynamicProp = world.getDynamicProperty(`poke_pfe:customEvents`)
    typeof CustomEventsDynamicProp == "string" ?
        JSON.parse(CustomEventsDynamicProp) ?? world.setDynamicProperty(`poke_pfe:customEvents`, `[]`)
        : world.setDynamicProperty(`poke_pfe:customEvents`, `[]`)
    //console.warn(`Custom events were invalid; resetting to default (Ignore if this world was just created) || Poke-Calendar`)
    if (typeof world.getDynamicProperty(PFEBossEventConfigName) == "string") {
        let settings: PFEBossEventConfig = JSON.parse(world.getDynamicProperty(PFEBossEventConfigName)!.toString())
        //To prevent errors it will reset the settings to default if a setting was missing/invalid
        if ((typeof settings.ticks != "number") || (typeof settings.furnaceGolem != "object") || (typeof settings.knightling != "object") || (typeof settings.listener != "object") || (typeof settings.zombken != "object") || (typeof settings.miniDemonicAllay != "object") || (typeof settings.necromancer != "object") || (typeof settings.snowman != "object") || (typeof settings.sparky != "object") || (typeof settings.superStriker != "object") || (typeof settings.theLogger != "object")) {
            //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
            world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
        };
    } else {
        //console.warn(`Some Boss Event Settings were invalid; Resetting settings to default || PFE`)
        world.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings))
    }
    /* Outgoing Addon Compatibility:*/
    initExampleStickers()
    ComputersCompat.init()
    world.setDynamicProperty("poke_pfe:bossEventIntervalId", startBossEvents())
    world.setDynamicProperty("poke_pfe:setEffectIntervalId", startSetEffects())
    system.sendScriptEvent("poke_pfe:dupe_check", `${currentVersion}`)
    //console.warn(`Within PFE: ${JSON.stringify(new ItemStack("poke_pfe:custom_data_storage", 1).getComponent(`poke_pfe:incompatible_addons`))}`)
})
const DataStorageDynamicPropertyId = "registered_data_storage_items"
/*Incoming Addon Compatibility/Integrations*/
system.afterEvents.scriptEventReceive.subscribe((data) => {
    switch (data.id) {
        /**
         This will send true (as a string) to the scriptevent defined in the message part 

        example command: `scriptevent poke_pfe:enabled poke_pfe:receive_test`

        - in this case it will send true to poke_pfe:receive_test
         */
        case `poke_pfe:enabled`: {
            system.sendScriptEvent(data.message, "true")
            break;
        }
        /*
        This will be used to have PFE use the item provided as a form of data storage

        What this means is you can use that item's components to import data that would normally be sent via /scriptevent
        */
        case `poke_custom:register_data_storage`: {
            const dynamicProperty = world.getDynamicProperty(DataStorageDynamicPropertyId)
            const registeredItems: string[] = JSON.parse(typeof dynamicProperty == "string" ? dynamicProperty : "[]") ?? []
            world.setDynamicProperty(DataStorageDynamicPropertyId, JSON.stringify(registeredItems.concat(data.message)))
            break;
        }
        /*
        This can be used to add additional presets to the set effects
        */
        case `poke_pfe:add_set_effect_preset`: {
            const currentPresets: PFECustomEffectInfo[] = JSON.parse(world.getDynamicProperty(PFECustomArmorEffectDynamicProperty)!.toString()) ?? []
            let newPresets = currentPresets.concat(JSON.parse(data.message).value) ?? currentPresets
            world.setDynamicProperty(PFECustomArmorEffectDynamicProperty, JSON.stringify(newPresets))
            break;
        }
        /*
        Theses can be used to add quests into PFE's quest system
        see `scripts\quests.ts` for more info 
        */
        case PFECustomMineQuestsPropertyID: {
            const currentQuests: any[] = JSON.parse(world.getDynamicProperty(PFECustomMineQuestsPropertyID)!.toString()) ?? []
            let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests
            world.setDynamicProperty(PFECustomMineQuestsPropertyID, JSON.stringify(newQuests))
            break;
        }
        case PFECustomKillQuestsPropertyID: {
            const currentQuests: any[] = JSON.parse(world.getDynamicProperty(PFECustomKillQuestsPropertyID)!.toString()) ?? []
            let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests
            world.setDynamicProperty(PFECustomKillQuestsPropertyID, JSON.stringify(newQuests))
            break;
        }
        case PFECustomFarmQuestsPropertyID: {
            const currentQuests: any[] = JSON.parse(world.getDynamicProperty(PFECustomFarmQuestsPropertyID)!.toString()) ?? []
            let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests
            world.setDynamicProperty(PFECustomFarmQuestsPropertyID, JSON.stringify(newQuests))
        }
        case PFECustomCraftQuestsPropertyID: {
            const currentQuests: any[] = JSON.parse(world.getDynamicProperty(PFECustomCraftQuestsPropertyID)!.toString()) ?? []
            let newQuests = currentQuests.concat(JSON.parse(data.message).value) ?? currentQuests
            world.setDynamicProperty(PFECustomCraftQuestsPropertyID, JSON.stringify(newQuests))
        }
        /*case (`poke_pfe:test`): {
            let item = data.sourceEntity?.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Mainhand)
            item?.setDynamicProperty(`poke_pfe:ammo`, JSON.stringify({ v: 2, max: 32, amount: 12, entityId: "poke_pfe:galaxy_arrow", id: "poke_pfe:galaxy_arrow", upgrades: [{ id: "poke_pfe:capacity", level: 1, maxLevel: undefined }, { id: "poke_pfe:flaming", level: 0, maxLevel: 1 }] }))
            data.sourceEntity?.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, item)
        }*/
        // This is to check if there are multiple versions of PFE applied to a world at a time
        case "poke_pfe:dupe_check": {
            const Version = Number(data.message)
            if (Version < currentVersion) {
                world.sendMessage(`§f[§eWARNING§f] Multiple versions PFE are applied to this world, to avoid any issue: please remove any old versions || §eOld version: §fv${data.message.substring(0, 1)}.${Number(data.message.substring(1, 3))}.${Number(`${data.message}`.substring(3, 5))}${Number(`${data.message}`.substring(5)) != 0 ? `${data.message}`.substring(5) : ""}`)
                // console.warn(`Multiple versions PFE found:\n- Old version: ${Version.toString()} (v${data.message.substring(0, 1)}.${Number(data.message.substring(1, 3))}.${Number(`${data.message}`.substring(3, 5))}${Number(data.message.substring(5)) != 0 ? data.message.substring(5) : ""})\n- Current version: ${currentVersion.toString()} (v ${currentVersion.toString().substring(0, 1)}.${Number(`${currentVersion}`.substring(1, 3))}.${Number(`${currentVersion}`.substring(3, 5))}${Number(`${currentVersion}`.substring(5)) != 0 ? `${currentVersion}`.substring(5) : ""})`)
            }
            break;
        }
        // Sends the version number of PFE to the script event id provided in the message
        // PFE Version (ex: 102950 = v1.2.95 || ex2: 112359 = v1.12.359)
        case `poke_pfe:get_version`: {
            system.sendScriptEvent(data.message, currentVersion.toString())
            break;
        }
        default: break;
    }
})

function ConfigCustomCommand(origin: CustomCommandOrigin, openAs?: Player[]): CustomCommandResult {
    system.run(() => {
        const players = openAs ? openAs : <Player[]>[origin.sourceEntity]
        for (const player of players) {
            OpenPFEConfig(player)
        }
    })
    return {
        status: CustomCommandStatus.Success,
        message: "Opened PFE's config menu for the player's provided"
    };
}
function SwapHatCommand(origin: CustomCommandOrigin, swapAs: Player[]): CustomCommandResult {
    let status = {
        status: CustomCommandStatus.Success,
        message: ""
    };
    system.run(() => {
        const players = swapAs ? swapAs : <Player[]>[origin.sourceEntity]
        for (const player of players) {
            const equippableComponent = player.getComponent(EntityComponentTypes.Equippable)
            if (!equippableComponent) {
                status = {
                    status: CustomCommandStatus.Failure,
                    message: "Player cannot equip items"
                };
                console.warn("Player cannot equip items")
                return
            }
            const mainHand = equippableComponent?.getEquipment(EquipmentSlot.Mainhand)
            if (mainHand?.lockMode == ItemLockMode.slot) {
                status = {
                    status: CustomCommandStatus.Failure,
                    message: "Held Item cannot be locked"
                };
                console.warn("Held Item cannot be locked")
                return
            }
            const helmet = equippableComponent?.getEquipment(EquipmentSlot.Head)
            if (helmet?.lockMode == ItemLockMode.slot) {
                status = {
                    status: CustomCommandStatus.Failure,
                    message: "Helmet cannot be locked"
                };
                console.warn("Helmet cannot be locked")
                return
            }
            if (helmet) {
                const helmetEnchantments = helmet.getComponent(ItemComponentTypes.Enchantable)
                if (helmetEnchantments?.hasEnchantment(MinecraftEnchantmentTypes.Binding)) {
                    status = {
                        status: CustomCommandStatus.Failure,
                        message: "Helmet cannot have %enchantment.curse.binding"
                    };
                    console.warn("Helmet cannot have %enchantment.curse.binding")
                    return
                }
            }
            let oldHelmetItem = helmet?.clone()
            let oldMainHandItem = mainHand?.clone()
            console.warn(helmet?.typeId)
            console.warn(mainHand?.typeId)
            equippableComponent.setEquipment(EquipmentSlot.Head, oldMainHandItem)
            // This is a fail-safe since due to limitations; an item that cannot be equipped as a helmet will instead be treated as undefined and the helmet would be set to nothing.
            // As a result of this there seems to be no other way outside of commands to have the item set in that slot
            // ^ Because it is restricted to a command I cannot keep any item data (like durability or dynamic properties) 
            if (oldMainHandItem) {
                if (!equippableComponent?.getEquipment(EquipmentSlot.Head)?.matches(oldMainHandItem.typeId)) {
                    player.runCommand(`replaceitem entity @s slot.armor.head 0 ${oldMainHandItem.typeId} ${oldMainHandItem.amount}`)
                }
            }
            equippableComponent.setEquipment(EquipmentSlot.Mainhand, oldHelmetItem)
            status = {
                status: CustomCommandStatus.Success,
                message: "Swapped Helmet with Held Item"
            };
            console.warn("Swapped Helmet with Held Item")
            return
        }
    })
    return status
}