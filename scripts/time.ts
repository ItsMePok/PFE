import { GameMode, Player, RawMessage, world } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"
import { PokeErrorScreen, PokeGetObjectById } from "./commonFunctions"
const PokeCalendarVersion = 1
const PokeCustomEventId = `poke:customEvents`
interface PokeBirthdays {
  "day": number
  "month": number //Jan = 0
  "id"?: string//Id could be undefined if upgrading from PFE v1.2.5
  "name"?: string
  "year"?: number | undefined
  "announce"?: boolean
  "style"?: "dev" | "normal"
}

interface PokeEventConfig {
  "name": RawMessage,
  "id": string,
  "icon": string | undefined // Texture path (ex: `textures/poke/common/calendar`)
  "dates": PokeDateConfig[]
  "repeat"?: boolean// Will this event repeat each year?
  "fixedTime"?: boolean // Will this ignore timezones? (UTC only)
  "gift"?: string // Minecraft command
  "greeting": RawMessage | undefined | "generic" | string,
  "nonModifiable"?: boolean,
  "v": number
}
interface PokeDateConfig {
  "years"?: number[],
  "month": number // Jan = 0
  "days"?: number[]
  "timeStart"?: {
    "hour": number,
    "minute"?: number
  }
  "timeEnd"?: {
    "hour": number,
    "minute"?: number
  },
  "weekday"?: number //Sunday = 0
}
/**
 * For now we only have major US holidays
 * 
 * its planned in the future to have toggles to enable Holidays form other regions
 */
const PFEDefaultHolidays: PokeEventConfig[] = [
  {
    name: { text: `New Years Day` },
    id: "poke-pfe:NewYear",
    dates: [{ month: 0, days: [1] }],
    repeat: true,
    gift: `give @s poke:red_present 8`,
    icon: "textures/poke/common/new_year",
    greeting: { translate: `translation.poke:timeNewYearGreet` },
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  /*{
    name:{text:`Martin Luther King Jr. Day`},
    id:"poke-pfe:MLKJr",
    dates:[{month:0,days:[15,16,17,18,19,20,21],weekday:1}],//Monday between Jan 15 - 21
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/mlk",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  {
    name: { text: `Valentine's Day` },
    id: "poke-pfe:ValentinesDay",
    dates: [{ month: 1, days: [14] }],
    repeat: true,
    gift: `give @s poke:red_present 8`,
    icon: "textures/poke/common/valentine",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `St. Patrick's Day` },
    id: "poke-pfe:StPatrickDay",
    dates: [{ month: 2, days: [17] }],
    repeat: true,
    gift: `give @s poke:red_present 8`,
    icon: "textures/poke/common/st_patrick",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `April Fools` },
    id: "poke-pfe:AprilFools",
    dates: [{ month: 3, days: [1] }],
    repeat: true,
    gift: `give @s poke:splash_death_potion`,
    icon: "textures/poke/common/april_fools",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  /*{
    name:{text:`Cinco de Mayo`},
    id:"poke-pfe:CincoDeMayo",
    dates:[{month:4,days:[5]}],
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/cinco_de_mayo",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  /*{
    name:{text:`Memorial Day`},
    id:"poke-pfe:MemorialDay",
    dates:[{month:4,days:[25,26,27,28,29,30,31],weekday:1}],
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/cinco_de_mayo",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  /*{
    name:{text:`Juneteenth`},
    id:"poke-pfe:Juneteenth",
    dates:[{month:5,days:[19]}],
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/juneteenth",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  {
    name: { text: `Independence Day` },
    id: "poke-pfe:IndependenceDay",
    dates: [{ month: 6, days: [4] }],
    repeat: true,
    gift: `structure load poke:4JulyGift ~~~`,
    icon: "textures/poke/common/july_4th",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  /*{
    name:{text:`Labor Day`},
    id:"poke-pfe:LaborDay",
    dates:[{month:8,days:[1,2,3,4,5,6,7],weekday:1}],//First Monday of September
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/labor_day",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  {
    name: { text: `Halloween` },
    id: "poke-pfe:Halloween",
    dates: [{ month: 9, days: [31], }],
    repeat: true,
    gift: `give @s poke:charred_poppy 16`,
    icon: "textures/poke/common/halloween",
    greeting: { translate: `translation.poke:timeHalloweenGreet` },
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `Thanksgiving` },
    id: "poke-pfe:thanksgiving",
    dates: [{ month: 10, days: [23, 24, 25, 26, 27, 28], weekday: 4 }],//This will only trigger on Thursday even though other days are listed
    repeat: true,
    gift: `give @s poke:red_present 8`,
    icon: "textures/poke/common/thanksgiving",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `Easter` },
    id: "just:Easter",
    dates: [{ month: 11, days: [24, 25] }],
    repeat: true,
    gift: `give @s poke:red_present 16`,
    icon: "textures/poke/common/xmas",
    greeting: { translate: `translation.poke:timeHolidayGreet` },
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  }
]

function PokeTimeCheck(event: PokeEventConfig, player: Player, claimCheck?: boolean) {
  if (event == null || event.dates == undefined) {
    PokeErrorScreen(player, undefined, world.setDynamicProperty(PokeCustomEventId, JSON.stringify([])))
    return
  }
  let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player))
  if (event.fixedTime === true) currentTime = new Date(Date.now());
  for (let i = event.dates.length; i > -1; i--) {
    let date = event.dates.at(i);
    if (!date) continue;
    if (!date.days?.includes(currentTime.getUTCDate())) continue;
    if (!(date.month == currentTime.getUTCMonth())) continue;
    if (date.weekday) {
      if (date.weekday == currentTime.getDay()) continue;
    }
    if (date.timeStart) {
      if (!((date.timeStart.hour <= currentTime.getUTCHours()) && ((date.timeStart.minute == undefined) || (date.timeStart.minute <= currentTime.getUTCMinutes())))) continue
    }
    if (date.timeEnd) {
      if (!((date.timeEnd.hour >= currentTime.getUTCHours()) && ((date.timeEnd.minute == undefined) || (date.timeEnd.minute >= currentTime.getUTCMinutes())))) continue
    }
    if ((event.repeat === false && !(date.years?.includes(currentTime.getUTCFullYear())))) continue;
    if (claimCheck) {
      if (!event.gift) continue;
      if (player.hasTag(`poke:${currentTime.getFullYear()}E-${event.id}`)) continue;
    }
    return true
  }
  return false
}

function PokeTimeDebug(player: Player) {
  let UI = new ActionFormData()

  UI.button(`Delete Custom Events`)
  UI.button(`Create 10 Events`)
  UI.button(`Reset Birthday`)
  UI.button(`Add 10 Fake Birthdays`)

  UI.show(player).then((response => {
    if (response.canceled) {
      PokeTimeConfigUIMainMenu(player)
      return
    }
    let selection = 0
    if (response.selection == selection) {
      world.setDynamicProperty(PokeCustomEventId, JSON.stringify([]))
      return
    } else selection++
    if (response.selection == selection) {
      let newEvents: PokeEventConfig[] = [
        { id: `custom:1`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 1` }, icon: `textures/poke/common/event_default`, repeat: true, gift: undefined, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:2`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 2` }, icon: `textures/poke/common/event_default`, repeat: true, gift: undefined, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:3`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 3` }, icon: `textures/poke/common/event_default`, repeat: true, gift: undefined, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:4`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 4` }, icon: `textures/poke/common/event_default`, repeat: true, gift: undefined, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:5`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 5` }, icon: `textures/poke/common/event_default`, repeat: true, gift: undefined, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:6`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 6` }, icon: `textures/poke/common/event_default`, repeat: true, gift: undefined, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:7`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 7` }, icon: `textures/poke/common/event_default`, repeat: true, gift: undefined, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:8`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 8` }, icon: `textures/poke/common/event_default`, repeat: true, gift: undefined, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:9`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 9` }, icon: `textures/poke/common/event_default`, repeat: true, gift: undefined, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:10`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 10` }, icon: `textures/poke/common/event_default`, repeat: true, gift: undefined, fixedTime: false, v: PokeCalendarVersion }
      ]
      let customEvents = world.getDynamicProperty(PokeCustomEventId)
      if (typeof customEvents != "string") {
        world.setDynamicProperty(PokeCustomEventId, JSON.stringify(newEvents))
        return
      }
      customEvents = JSON.parse(customEvents).concat(newEvents)
      world.setDynamicProperty(PokeCustomEventId, JSON.stringify(customEvents))
      return
    } else selection++
    if (response.selection == selection) {
      player.setDynamicProperty(`poke:birthday`, JSON.stringify({ day: 1, month: 0, id: player.id, announce: false, name: player.name, style: "normal", year: undefined }))
      return
    } else selection++
    if (response.selection == selection) {
      let time = new Date(Date.now())
      let newBirthdays: PokeBirthdays[] = [
        { id: `10`, day: time.getDate(), announce: true, month: time.getMonth(), style: "normal", name: `Custom 1` },
        { id: `2`, day: time.getDate(), announce: true, month: time.getMonth(), style: "dev", name: `Custom 2` },
        { id: `3`, day: time.getDate(), announce: false, month: time.getMonth(), style: "normal", name: `Custom 3` },
        { id: `4`, day: time.getDate(), announce: false, month: time.getMonth(), style: "dev", name: `Custom 4` },
        { id: `5`, day: time.getDate() + 1, announce: true, month: time.getMonth(), style: "normal", name: `Custom 5` },
        { id: `6`, day: time.getDate() + 1, announce: true, month: time.getMonth(), style: "dev", name: `Custom 6` },
        { id: `7`, day: time.getDate() + 1, announce: false, month: time.getMonth(), style: "normal", name: `Custom 7` },
        { id: `8`, day: time.getDate() + 1, announce: false, month: time.getMonth(), style: "dev", name: `Custom 8` },
        { id: `9`, day: time.getDate() - 1, announce: true, month: time.getMonth(), style: "normal", name: `Custom 9` },
        { id: `10`, day: time.getDate() - 1, announce: true, month: time.getMonth(), style: "dev", name: `Custom 10` },
      ]
      let birthdays = world.getDynamicProperty(PokeCustomEventId)
      if (typeof birthdays != "string") {
        world.setDynamicProperty(PokeCustomEventId, JSON.stringify(newBirthdays))
        return
      }
      birthdays = JSON.parse(birthdays).concat(newBirthdays)
      world.setDynamicProperty(`poke:birthdays`, JSON.stringify(birthdays))
      return
    } else selection++
  }))
}

/**
 * UI - Main Menu
 *
 * Options:
 * - Debug Menu (if user has ```debug``` tag)
 * - Set Timezone (if player has not set)
 * - Set Birthday (if player has not set)
 * - Upcoming Events
 * - More Options
 * - Claim Gift (if available)
 */
function PokeTimeConfigUIMainMenu(player: Player) {
  let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player))
  let UI = new ActionFormData()
  UI.body(
    {
      translate: `translation.poke:timeUiMainMenuBody`, with: {
        rawtext: [
          PokeTimeGreeting(currentTime, player),
          { text: player.name },
          { text: `${currentTime.toDateString()}, ${currentTime.toLocaleTimeString()}` }
        ]
      }
    })
  if (player.hasTag(`debug`)) {
    UI.button(`Debug Menu`)
  }
  if (!player.getDynamicProperty(`poke:timezone`)) {
    UI.button({ translate: `translation.poke:timeSetTimezone` }, PokeTimeIcon(currentTime))
  }
  if (!player.getDynamicProperty(`poke:birthday`)) {
    UI.button({ translate: `translation.poke:timeSetBirthday` }, `textures/poke/common/birthday_cake`)
  }
  UI.button({ translate: `translation.poke:timeUpcomingEvents` }, `textures/poke/common/upcoming_events`)
  UI.button({ translate: `translation.poke:additionalOptions` }, `textures/poke/common/more_options`)
  let events = PokeTimeGetAllEvents()
  let gifts: PokeEventConfig[] = []
  for (let i = events.length - 1; i > -1; i--) {
    let event = events.at(i)
    if (!event) continue;
    if (PokeTimeCheck(event, player, true)) {
      UI.button({ translate: `translation.poke:claimGift`, with: { rawtext: [event.name] } }, `textures/poke/common/gift`)
      gifts = gifts.concat(event)
    }
  }
  UI.show(player).then((response => {
    if (response.canceled) {
      return
    }
    let selection = 0
    if (player.hasTag(`debug`)) {
      if (response.selection == selection) {
        PokeTimeDebug(player)
        return
      } else selection++
    }
    if (!player.getDynamicProperty(`poke:timezone`)) {
      if (response.selection == selection) {
        PokeSetTimeZone(player)
        return
      } else selection++
    }
    if (!player.getDynamicProperty(`poke:birthday`)) {
      if (response.selection == selection) {
        PokeSetBirthday(player)
        return
      } else selection++
    }
    if (response.selection == selection) {
      PokeTimeUpcomingEventList(player, 0)
      return
    } else selection++
    if (response.selection == selection) {
      PokeTimeAdditionalOptions(player)
      return
    } else selection++
    for (let i = gifts.length - 1; i > -1; i--) {
      if (response.selection == selection) {
        let claimingGift = gifts.reverse().at(i)?.gift
        if (!claimingGift) {
          //console.warn(`No gift found`)
        }
        //console.warn(`Claiming: ${claimingGift}`)
        player.runCommand(`${claimingGift}`)
        player.addTag(`poke:${currentTime.getFullYear()}E-${gifts.at(i)?.id}`)
        return
      } else selection++
    }
  }))
}
function PokeSetBirthday(player: Player) {
  let UI = new ModalFormData()
  let currentBirthday: PokeBirthdays = { day: 1, month: 0, id: player.id, announce: false, name: player.name, style: "normal", year: undefined }
  if (player.getDynamicProperty(`poke:birthday`)) {
    UI.title({ translate: `translation.poke:timeChangeBirthday` })
    currentBirthday = JSON.parse(player.getDynamicProperty(`poke:birthday`)!.toString())
  } else {
    UI.title({ translate: `translation.poke:timeSetBirthday` })
  }

  UI.dropdown({ translate: `translation.poke:setBirthdayDay` }, [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`, `30`, `31`], { defaultValueIndex: currentBirthday.day - 1 })
  UI.dropdown({ translate: `translation.poke:setBirthdayMonth` }, [{ translate: `translation.poke:setBirthdayJan` }, { translate: `translation.poke:setBirthdayFeb` }, { translate: `translation.poke:setBirthdayMar` }, { translate: `translation.poke:setBirthdayApr` }, { translate: `translation.poke:setBirthdayMay` }, { translate: `translation.poke:setBirthdayJun` }, { translate: `translation.poke:setBirthdayJul` }, { translate: `translation.poke:setBirthdayAug` }, { translate: `translation.poke:setBirthdaySep` }, { translate: `translation.poke:setBirthdayOct` }, { translate: `translation.poke:setBirthdayNov` }, { translate: `translation.poke:setBirthdayDec` }], { defaultValueIndex: currentBirthday.month })
  UI.toggle({ translate: `translation.poke:setBirthdayGlobalMessage` }, { defaultValue: currentBirthday.announce })
  UI.show(player).then((response => {
    if (response.canceled) {
      if (player.getDynamicProperty(`poke:birthday`)) {
        PokeTimeAdditionalOptions(player)
      } else {
        PokeTimeConfigUIMainMenu(player)
      }
      return
    }
    let newBirthday = {
      day: Number(response.formValues?.at(0)) + 1,
      month: Number(response.formValues?.at(1)),
      announce: Boolean(response.formValues?.at(2)),
      name: player.name,
      style: "normal",
      year: undefined,
      id: player.id
    }
    if (response.formValues?.at(2)) {
      let birthdays: PokeBirthdays[] = JSON.parse(world.getDynamicProperty(`poke:birthdays`)!.toString())
      for (let i = birthdays.length - 1; i > -1; i--) {
        let birthday = birthdays.at(i)
        if (birthday && ((birthday.id == player.id) || (!birthday.id && (birthday.name == player.name)))) {
          birthday.day = Number(response.formValues?.at(0)) + 1
          birthday.month = Number(response.formValues?.at(1))
          birthday.announce = Boolean(response.formValues?.at(2))
        }
        continue
      }
      world.setDynamicProperty(`poke:birthdays`, JSON.stringify(birthdays))
      player.setDynamicProperty(`poke:birthday`, JSON.stringify(newBirthday))
    } else {
      let birthdays: PokeBirthdays[] = JSON.parse(world.getDynamicProperty(`poke:birthdays`)!.toString())
      let replaceBirthday = PokeGetObjectById(birthdays, player.id)
      if (replaceBirthday) {
        birthdays = birthdays.slice(replaceBirthday.position, replaceBirthday.position)
        world.setDynamicProperty(`poke:birthdays`, JSON.stringify(birthdays))
      }
      player.setDynamicProperty(`poke:birthday`, JSON.stringify(newBirthday))
    }
  }))
}
function PokeTimeIcon(currentTime: Date) {
  switch (currentTime.getHours()) {
    case 0: {
      return `textures/poke/common/12am`
      break
    }
    case 1: {
      return `textures/poke/common/1am`
      break
    }
    case 2: {
      return `textures/poke/common/2am`
      break
    }
    case 3: {
      return `textures/poke/common/3am`
      break
    }
    case 4: {
      return `textures/poke/common/4am`
      break
    }
    case 5: {
      return `textures/poke/common/5am`
      break
    }
    case 6: {
      return `textures/poke/common/6am`
      break
    }
    case 7: {
      return `textures/poke/common/7am`
      break
    }
    case 8: {
      return `textures/poke/common/8am`
      break
    }
    case 9: {
      return `textures/poke/common/9am`
      break
    }
    case 10: {
      return `textures/poke/common/10am`
      break
    }
    case 11: {
      return `textures/poke/common/11am`
      break
    }
    case 12: {
      return `textures/poke/common/12pm`
      break
    }
    case 13: {
      return `textures/poke/common/1pm`
      break
    }
    case 14: {
      return `textures/poke/common/2pm`
      break
    }
    case 15: {
      return `textures/poke/common/3pm`
      break
    }
    case 16: {
      return `textures/poke/common/4pm`
      break
    }
    case 17: {
      return `textures/poke/common/5pm`
      break
    }
    case 18: {
      return `textures/poke/common/6pm`
      break
    }
    case 19: {
      return `textures/poke/common/7pm`
      break
    }
    case 20: {
      return `textures/poke/common/8pm`
      break
    }
    case 21: {
      return `textures/poke/common/9pm`
      break
    }
    case 22: {
      return `textures/poke/common/10pm`
      break
    }
    case 23: {
      return `textures/poke/common/11pm`
      break
    }
  }
}
function PokeTimeZoneOffset(player?: Player) {
  let timezone = undefined
  if ((player?.getDynamicProperty(`poke:timezone`))) {
    timezone = Number(player.getDynamicProperty(`poke:timezone`))
    return timezone
  }
  return 0
}
function PokeSetTimeZone(player: Player) {
  let Ui = new ActionFormData()
  let Timezones = [
    {
      "name": "§uUTC §a+§u14:00§r:\nLINT",
      "offset": 50400000
    },
    {
      "name": "§uUTC §a+§u13:45§r:\nCHADT",
      "offset": 49500000
    },
    {
      "name": "§uUTC §a+§u13:00§r:\nNZDT/PHOT/TKT/TOT",
      "offset": 46800000
    },
    {
      "name": "§uUTC §a+§u12:45§r:\nCHAST",
      "offset": 45900000
    },
    {
      "name": "§uUTC §a+§u12:00§r:\nANAT/FJT/GILT/MAGT/MHT/NZST/PETT/TVT/WAKT",
      "offset": 43200000
    },
    {
      "name": "§uUTC §a+§u11:00§r:\nAEDT/BST/KOST/LHST/MIST/NCT/NFT/PONT/SKAT/SBT/SRET/VUT",
      "offset": 39600000
    },
    {
      "name": "§uUTC §a+§u10:00§r:\nACDT/LHST",
      "offset": 37800000
    },
    {
      "name": "§uUTC §a+§u10:00§r:\nAEST/CHST/CHUT/DDUT/PGT/VLAT",
      "offset": 36000000
    },
    {
      "name": "§uUTC §a+§u09:30§r:\nACST",
      "offset": 34200000
    },
    {
      "name": "§uUTC §a+§u09:00§r:\nCHOST/JST/KST/PWT/TLT/ULAST/WIT/YAKT",
      "offset": 32400000
    },
    {
      "name": "§uUTC §a+§u08:45§r:\nACWST",
      "offset": 31500000
    },
    {
      "name": "§uUTC §a+§u08:00§r:\nAWST/BNT/CHOT/CST/HKT/HOVST/IRKT/MYT/PHT/SGT/TST/ULAT/WITA/WST/ACT",
      "offset": 28800000
    },
    {
      "name": "§uUTC §a+§u07:00§r:\nTHA/WIB/CXT/DAVT/HOVT/ICT/KRAT/NOVT",
      "offset": 25200000
    },
    {
      "name": "§uUTC §a+§u06:30§r:\nCCT/MMT",
      "offset": 23400000
    },
    {
      "name": "§uUTC §a+§u06:00§r:\nBIOT/BST/BTT/IOT/KGT/OMST/VOST/ALMT",
      "offset": 21600000
    },
    {
      "name": "§uUTC §a+§u05:45§r:\nNPT",
      "offset": 20700000
    },
    {
      "name": "§uUTC §a+§u05:30§r:\nIST/SLST",
      "offset": 19800000
    },
    {
      "name": "§uUTC §a+§u05:00§r:\nAQTT/HMT/MAWT/MVT/ORAT/PKT/TFT/TJT/TMT/UZT/YEKT",
      "offset": 18000000
    },
    {
      "name": "§uUTC §a+§u04:30§r:\nAFT/IRDT",
      "offset": 16200000
    },
    {
      "name": "§uUTC §a+§u04:00§r:\nAMT/AZT/GET/GST/MUT/RET/SAMT/SCT",
      "offset": 14400000
    },
    {
      "name": "§uUTC §a+§u03:30§r:\nIRST",
      "offset": 12600000
    },
    {
      "name": "§uUTC §a+§u03:00§r:\nAST/EAT/EEST/FET/IDT/MSK/SYOT/TRT/VOLT",
      "offset": 10800000
    },
    {
      "name": "§uUTC §a+§u02:00§r:\nEET/CAT/SAST/CEST/HAEC/IST/KALT/MEST/WAST",
      "offset": 7200000
    },
    {
      "name": "§uUTC §a+§u01:00§r:\nCET/BST/DFT/IST/MET/WAT",
      "offset": 3600000
    },
    {
      "name": "§uUTC §a+§u00:00§r:\nGMT/UTC/AZOST/EGST/WET",
      "offset": 0
    },
    {
      "name": "§uUTC §c-§u01:00§r:\nAZOT/CVT/EGT",
      "offset": -3600000
    },
    {
      "name": "§uUTC §c-§u02:00§r:\nBRST/FNT/GST/PMDT/UYST/WGST",
      "offset": -7200000
    },
    {
      "name": "§uUTC §c-§u02:30§r:\nNDT",
      "offset": -9000000
    },
    {
      "name": "§uUTC §c-§u03:00§r:\nADT/AMST/ART/BRT/CLST/FKST/GFT/PMST/PYST/ROTT/SRT/UYT",
      "offset": -10800000
    },
    {
      "name": "§uUTC §c-§u03:30§r:\nNST",
      "offset": -12600000
    },
    {
      "name": "§uUTC §c-§u04:00§r:\nAMT/AST/EDT/BOT/CDT/COST/ECT/FKT/GYT/PYT/VET",
      "offset": -14400000
    },
    {
      "name": "§uUTC §c-§u05:00§r:\nEST/CDT/ACT/COT/CST/EASST/ECT/PET",
      "offset": -18000000
    },
    {
      "name": "§uUTC §c-§u06:00§r:\nCST/MDT/EAST/GALT",
      "offset": -21600000
    },
    {
      "name": "§uUTC §c-§u07:00§r:\nMST/PDT",
      "offset": -25200000
    },
    {
      "name": "§uUTC §c-§u08:00§r:\nPST/AKDT/CIST",
      "offset": -28800000
    },
    {
      "name": "§uUTC §c-§u09:00§r:\nAKST/GAMT/GIT/HDT",
      "offset": -32400000
    },
    {
      "name": "§uUTC §c-§u09:30§r:\nMART/MIT",
      "offset": -34200000
    },
    {
      "name": "§uUTC §c-§u10:00§r:\nHST/SDT/TAHT",
      "offset": -36000000
    },
    {
      "name": "§uUTC §c-§u11:00§r:\nNUT/SST",
      "offset": -39600000
    },
    {
      "name": "§uUTC §c-§u12:00§r:\nBIT/IDLW",
      "offset": -43200000
    }
  ]
  Timezones.forEach(timezone => {
    Ui.button(timezone.name, PokeTimeIcon(new Date(Date.now() + (timezone.offset))))
  });

  Ui.show(player).then((response => {
    if (response.canceled) {
      return
    }
    player.setDynamicProperty(`poke:timezone`, Timezones.at(Number(response.selection))!.offset)
    //console.warn(`saved time as ${Timezones.at(response.selection!)?.name}`)
  }))
}
function PokeTimeGreeting(date: Date, player: Player, event?: PokeEventConfig, generic?: boolean) {
  if (!generic) {
    if (event) {
      if ((!event.greeting) || (typeof event.greeting == "string")) { }
      else return event.greeting
    } else {
      //console.warn(`Checking for active event's with a greeting`)
      let activeEventGreetings: RawMessage[] = []
      let allEvents = PokeTimeGetAllEvents()
      for (let i = allEvents.length - 1; i > -1; i--) {
        let event = allEvents.at(i)
        if (!event) continue;
        //console.warn(`Checking: ${event.id}`)
        if (PokeTimeCheck(event, player, false)) {
          if (typeof event.greeting != "string") {
            //console.warn(`Adding: ${event.id}, Greeting: ${event.greeting}`)
            activeEventGreetings = activeEventGreetings.concat(event.greeting ?? [])
          }
        }
      }
      if (activeEventGreetings.length > 0) {
        let returnGreeting = activeEventGreetings.at(Math.max(Math.round(Math.random() * activeEventGreetings.length) - 1, 0))
        if (returnGreeting) return returnGreeting
      }
    }
  }
  let hour = date.getHours()
  let morningGreeting: RawMessage = { translate: `translation.poke:timeMorningGreet` }
  let noonGreeting: RawMessage = { translate: `translation.poke:timeNoonGreet` }
  let nightGreeting: RawMessage = { translate: `translation.poke:timeNightGreet` }
  switch (hour) {
    case 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11: { return morningGreeting; break }
    case 12 | 13 | 14 | 15 | 16: { return noonGreeting; break }
    case 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24: { return nightGreeting; break }
  }
  return morningGreeting
}

function PokeTimeEventInfoMenu(event: PokeEventConfig, player: Player) {
  let timeLeft = ``
  let UI = new ActionFormData()
  /*
  Event name: -
  Time until event starts: -
  Event Dates: -
  */
  let giftString: RawMessage = { translate: `translation.poke:timeEventGift` }
  if (!event.gift) {
    giftString = { text: `` }
  }
  UI.body(
    { rawtext: [{ translate: `translation.poke:timeEventName` }, event.name, { text: `\n\n` }, { translate: `translation.poke:timeEventDates` }].concat(PokeTimeDateString(event).concat([{ text: `\n` }, giftString])) }
  )
  if ((!event.nonModifiable) && ((player.getGameMode() == GameMode.Creative) || (player.hasTag(`poke-event_manager`)))) {
    UI.button({ translate: `translation.poke:timeEditEvent` }, `textures/poke/common/edit`)
  }
  UI.button({ translate: `translation.poke:goBack` }, `textures/poke/common/left_arrow`)
  UI.show(player).then((response => {
    let selection = 0
    if ((!event.nonModifiable) && ((player.getGameMode() == GameMode.Creative) || (player.hasTag(`poke-event_manager`)))) {
      if (response.selection == selection) {
        PokeEventOptions(player, event)
        return
      } else selection++
    }
    if (response.canceled || response.selection == selection) {
      PokeTimeUpcomingEventList(player, 0)
      return
    }
  }))
}

function PokeTimeUpcomingEventList(player: Player, page: number) {

  let UI = new ActionFormData()
  let events = PokeTimeGetAllEvents()
  let maxPerPage = 10
  let startPage = page * maxPerPage
  let buttonCount = 0
  let totalEvents = events.length
  for (let i = startPage + maxPerPage - 1; i > startPage - 1; i--) {
    //console.warn(`checking: ${i}, before total buttons: ${buttonCount}`)
    if ((buttonCount + 1 > maxPerPage) || (i < startPage)) {
      //console.warn(`exceeded max per page`)
      break
    }
    if (events.at(i)) {
      let event = events.at(i)
      UI.button(event!.name, event?.icon)
      buttonCount += 1
      //console.warn(`${i} was valid adding button`)
    } else {
      //console.warn(`id for ${i} undefined`)
      continue
    }
  }
  //console.warn(`done adding buttons, total: ${buttonCount}`)
  let nextPage = false
  if (totalEvents > (startPage + maxPerPage)) {
    UI.button({ translate: `translation.poke:timeNextPage` }, `textures/poke/common/right_arrow`)
    nextPage = true
  }
  let prevPage = false
  if (page > 0) {
    UI.button({ translate: `translation.poke:timePrevPage` }, `textures/poke/common/left_arrow`)
    prevPage = true
  } else UI.button({ translate: 'translation.poke:goBack' }, `textures/poke/common/left_arrow`)

  UI.show(player).then((response => {
    let selection = 0
    for (let i = buttonCount - 1; i > -1; i--) {
      if (events.at(i)) {
        if (response.selection == selection) {
          //console.warn(`Going to Event: ${i+startPage}`)
          PokeTimeEventInfoMenu(events.at(i + startPage)!, player)
          return
        } else selection++
      }
    }
    if (nextPage) {
      if (response.selection == selection) {
        PokeTimeUpcomingEventList(player, page + 1)
        return
      } else selection++
    }
    if (prevPage) {
      if (response.selection == selection) {
        PokeTimeUpcomingEventList(player, page - 1)
        return
      } else selection++
    }
    if (response.canceled || response.selection == selection) {//Go Back
      PokeTimeConfigUIMainMenu(player)
      return;
    }
  }))
}

/**
 * UI -> Main Menu -> Additional Options
 */
function PokeTimeAdditionalOptions(player: Player) {
  let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player))
  let UI = new ActionFormData()
  if (player.getDynamicProperty(`poke:timezone`)) {
    UI.button({ translate: `translation.poke:timeChangeTimezone` }, PokeTimeIcon(currentTime))
  }
  if (player.getDynamicProperty(`poke:birthday`)) {
    UI.button({ translate: `translation.poke:timeChangeBirthday` }, `textures/poke/common/birthday_cake`)
  }
  if ((player.getGameMode() == GameMode.Creative) || (player.hasTag(`poke-event_manager`))) {
    UI.button({ translate: `translation.poke:timeCreateEvent` }, `textures/poke/common/create_event`)
  }
  UI.button({ translate: 'translation.poke:goBack' }, `textures/poke/common/left_arrow`)
  UI.show(player).then((response => {

    let selection = 0
    if (player.getDynamicProperty(`poke:timezone`)) {
      if (response.selection == selection) {
        PokeSetTimeZone(player)
        return
      } else selection++
    }
    if (player.getDynamicProperty(`poke:birthday`)) {
      if (response.selection == selection) {
        PokeSetBirthday(player)
        return
      } else selection++
    }
    if ((player.getGameMode() == GameMode.Creative) || (player.hasTag(`poke-event_manager`))) {
      if (response.selection == selection) {
        PokeTimeCreateEvent(player)
        return
      } else selection++
    }
    if (response.canceled || response.selection == selection) {
      PokeTimeConfigUIMainMenu(player)
      return
    }
  }))
}

function PokeTimeGetAllEvents() {
  return PFEDefaultHolidays.concat(JSON.parse(world.getDynamicProperty(PokeCustomEventId)!.toString()))
}

function PokeTimeGetNextTime(event: PokeEventConfig, player: Player) {
  let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player))
  if (event.fixedTime) currentTime = new Date(Date.now())
  let closestMonth = 0
  /*event.months.forEach((month =>{
    
  }))

  let time = Date.parse(`${currentTime.getMonth()+1}/${currentTime.getDate()}/${currentTime.getUTCFullYear()}`)
  let eventThisYear = Date.parse(`${event.months.at(0)!+1}/${event.days?.at(0)}/${currentTime.getUTCFullYear()}`)
  let eventNextYear = Date.parse(`${event.months.at(0)!+1}/${event.days?.at(0)}/${currentTime.getUTCFullYear()+1}`)*/

}

function PokeTimeDateString(event: PokeEventConfig, player?: Player) {
  let returnString: RawMessage[] = []
  let monthStrings: RawMessage[] = [
    { translate: `translation.poke:setBirthdayJan` },
    { translate: `translation.poke:setBirthdayFeb` },
    { translate: `translation.poke:setBirthdayMar` },
    { translate: `translation.poke:setBirthdayApr` },
    { translate: `translation.poke:setBirthdayMay` },
    { translate: `translation.poke:setBirthdayJun` },
    { translate: `translation.poke:setBirthdayJul` },
    { translate: `translation.poke:setBirthdayAug` },
    { translate: `translation.poke:setBirthdaySep` },
    { translate: `translation.poke:setBirthdayOct` },
    { translate: `translation.poke:setBirthdayNov` },
    { translate: `translation.poke:setBirthdayDec` }
  ]
  for (let i = event.dates.length - 1; i > -1; i--) {
    //console.warn(i)
    let date = event.dates.at(i)
    returnString = returnString.concat([{ text: ` - ` }, monthStrings.at(date!.month)!, { text: ` ${JSON.stringify(date?.days).replace(`[`, ``).replace(`]`, ``).replace(/,/g, ', ')}` }, { text: `\n` },])
  }
  return returnString
}

/**
 * UI -> Main Menu -> Additional Options
 * **User must be in creative or have tag ```poke-event_manager```**
 * 
 * Planned: Allow if player is OP; replacing creative (waiting for isOp to be moved to stable)
 */
function PokeTimeCreateEvent(player: Player, event?: PokeEventConfig) {
  let UI = new ModalFormData()
  let eventName = ``
  let providedEvent = false
  if (!event) {
    event = {
      id: ``,
      name: { text: `` },
      dates: [{ month: 0, days: [1] }],
      repeat: true,
      icon: `textures/poke/common/event_default`,
      fixedTime: false,
      gift: undefined,
      greeting: "generic",
      v: PokeCalendarVersion
    }
    UI.title({ translate: `translation.poke:timeCreateEventTitle` })
  } else {
    providedEvent = true
    UI.title({ translate: `translation.poke:timeEditEventTitle` })
    if (event.name.text) {
      eventName = event.name.text
    } else {
      eventName = `%${event.name.translate}`
    }
  }
  UI.textField({ translate: `translation.poke:timeEventId`, with: [``] }, ``, { defaultValue: event.id })
  UI.textField({ translate: `translation.poke:timeEventName`, with: [``] }, ``, { defaultValue: eventName })
  UI.dropdown({ translate: `translation.poke:setBirthdayDay` }, [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`, `30`, `31`], { defaultValueIndex: Number(event.dates.at(0)?.days?.at(0)) - 1 })
  UI.dropdown({ translate: `translation.poke:setBirthdayMonth` }, [{ translate: `translation.poke:setBirthdayJan` }, { translate: `translation.poke:setBirthdayFeb` }, { translate: `translation.poke:setBirthdayMar` }, { translate: `translation.poke:setBirthdayApr` }, { translate: `translation.poke:setBirthdayMay` }, { translate: `translation.poke:setBirthdayJun` }, { translate: `translation.poke:setBirthdayJul` }, { translate: `translation.poke:setBirthdayAug` }, { translate: `translation.poke:setBirthdaySep` }, { translate: `translation.poke:setBirthdayOct` }, { translate: `translation.poke:setBirthdayNov` }, { translate: `translation.poke:setBirthdayDec` }], { defaultValueIndex: event.dates.at(0)?.month })
  UI.toggle({ translate: `translation.poke:timeLoopEvent` }, { defaultValue: event.repeat })

  UI.show(player).then((response => {
    if (response.canceled && event.id == ``) {
      PokeTimeAdditionalOptions(player)
      return
    } else if (response.canceled) {
      PokeTimeEventInfoMenu(event, player)
      return
    } else {
      if (!providedEvent) {
        let id = response.formValues?.at(0)?.toString().replace(`custom:`, '').replace(' ', '')
        let name: RawMessage = { text: response.formValues?.at(1)?.toString() }
        if (response.formValues?.at(0)?.toString().startsWith(`%`)) {
          name = { translate: response.formValues.at(1)?.toString().substring(1) }
        }
        let newEventList = <undefined | string | PokeEventConfig[]>world.getDynamicProperty(PokeCustomEventId)
        let replaceEvent = undefined
        if (typeof newEventList == "string") {
          //console.warn(`a event already exists:: ${newEventList}`)
          newEventList = <PokeEventConfig[]>JSON.parse(newEventList) ?? []
          replaceEvent = PokeGetObjectById(newEventList, `custom:${id}`)
        } else {
          newEventList = [{ id: `placeholder`, dates: [{ month: 0, days: [0] }], greeting: "generic", name: { text: `placeholder` }, icon: undefined, v: PokeCalendarVersion }]
          //console.warn(`A temp placeholder event was added`)
        }
        if ((!newEventList) || (typeof newEventList == "string")) {
          //console.warn(`Unable to get custom events; undefined`)
          return
        }
        if (world.getDynamicProperty(PokeCustomEventId) != undefined || world.getDynamicProperty(PokeCustomEventId) != `[]`) {

        }
        let event: PokeEventConfig = replaceEvent?.value
        if (replaceEvent) {
          let newEvent: PokeEventConfig = {
            id: event.id,
            name: name,
            dates: event.dates,
            fixedTime: event.fixedTime,
            gift: event.gift,
            icon: event.icon,
            repeat: event.repeat,
            greeting: event.greeting,
            v: PokeCalendarVersion
          }
          //console.warn(`Replacing Old event with: ${JSON.stringify(newEvent)}`)
          let otherEvents = newEventList.splice(replaceEvent.value, 1, newEvent)
          newEventList = otherEvents
        } else {
          event = {
            id: `custom:${id}`,
            name: name,
            dates: [{
              days: [Number(response.formValues?.at(2)?.valueOf()) + 1],
              month: Number(response.formValues?.at(3)?.valueOf())
            }],
            gift: undefined,
            icon: `textures/poke/common/event_default`,
            repeat: Boolean(response.formValues?.at(4)),
            greeting: "generic",
            fixedTime: false,
            v: PokeCalendarVersion
          }
          //console.warn(`This Event: ${JSON.stringify(event)}`)
          newEventList = newEventList.concat([event])
        }
        if (newEventList?.at(0))
          //console.warn(`Other Events: ${JSON.stringify(newEventList)}`)
          world.setDynamicProperty(PokeCustomEventId, JSON.stringify(newEventList))
      } else {
        let id = response.formValues?.at(0)?.toString().replace(`custom:`, '').replace(' ', '')
        if (!id) {
          id = event.id
        } else {
          id = `custom:${id}`
        }
        let name: RawMessage = { text: response.formValues?.at(1)?.toString() }
        if (response.formValues?.at(0)?.toString().startsWith(`%`)) {
          name = { translate: response.formValues.at(1)?.toString().substring(1) }
        }
        let newEvent: PokeEventConfig = {
          id: id,
          name: name,
          dates: event.dates,
          fixedTime: event.fixedTime,
          gift: event.gift,
          icon: event.icon,
          repeat: event.repeat,
          greeting: event.greeting,
          v: PokeCalendarVersion
        }
        let customEvents = world.getDynamicProperty(PokeCustomEventId)?.toString().replace(JSON.stringify(event), JSON.stringify(newEvent))
        world.setDynamicProperty(PokeCustomEventId, customEvents)
      }
      PokeEventOptions(player, event)
      return
    }
  }))
}
/**
 * Add/Change Gift
 * Add/Change Greeting
 * Edit Name & Time
 * Delete Event
 */
function PokeEventOptions(player: Player, event: PokeEventConfig) {
  let UI = new ActionFormData()
  UI.title({ translate: `translation.poke:timeEventOptionsTitle` })
  if (event.gift) {
    UI.button({ translate: `translation.poke:timeEditEventGift` }, 'textures/poke/common/edit_gift')
  } else {
    UI.button({ translate: `translation.poke:timeAddEventGift` }, 'textures/poke/common/add_gift')
  }
  if (event.greeting) {
    UI.button({ translate: `translation.poke:timeEditGreeting` }, 'textures/poke/common/edit_greeting')
  } else {
    UI.button({ translate: `translation.poke:timeAddGreeting` }, 'textures/poke/common/add_greeting')
  }
  UI.button({ translate: `translation.poke:timeEventOptionsEditTime` }, `textures/poke/common/edit`)
  UI.button({ translate: `translation.poke:timeDeleteEvent` }, `textures/poke/common/trash`)
  UI.button({ translate: `translation.poke:goBack` }, `textures/poke/common/left_arrow`)

  UI.show(player).then((response => {
    let selection = 0
    if (response.selection == selection) {// Add/Edit Gift
      PokeTimeEditGift(player, event)
      return
    } else selection++
    if (response.selection == selection) {// Add/Change Greeting
      PokeTimeEditGreeting(player, event)
      return
    } else selection++
    if (response.selection == selection) {// Edit Name & Time
      PokeTimeCreateEvent(player, event)
      return
    } else selection++
    if (response.selection == selection) { // Delete Event
      PokeTimeDeleteEvent(player, event)
      return
    } else selection++
    if (response.canceled || response.selection == selection) { // Go Back
      PokeTimeUpcomingEventList(player, 0) // Return Page should always be 0 in case events past whatever page they are on gets deleted
      return
    }
  }))
}

function PokeTimeEditGift(player: Player, event: PokeEventConfig) {
  let UI = new ModalFormData()
  UI.title({ translate: `translation.poke:timeEditGiftTitle` })
  let currentGift = event.gift
  if (!currentGift) currentGift = ``;
  UI.textField({ translate: `translation.poke:timeEditGiftTextFieldLabel` }, ``, { defaultValue: currentGift })

  UI.show(player).then((response => {
    if (response.canceled) {
      PokeEventOptions(player, event)
      return
    }
    let textField = response.formValues?.at(0)
    let newGift = textField
    if ((!textField) || (textField == `/`) || (textField == ` `) || (textField == ``) || (typeof newGift != "string")) {
      newGift = undefined
    }
    if (newGift?.startsWith(`/`)) {
      newGift = newGift.substring(1)
      //console.warn(newGift)
    }
    let newEvent: PokeEventConfig = {
      id: event.id,
      name: event.name,
      dates: event.dates,
      fixedTime: event.fixedTime,
      gift: newGift,
      icon: event.icon,
      repeat: event.repeat,
      greeting: event.greeting,
      nonModifiable: event.nonModifiable,
      v: PokeCalendarVersion
    }
    let customEvents = world.getDynamicProperty(PokeCustomEventId)?.toString().replace(JSON.stringify(event), JSON.stringify(newEvent))
    world.setDynamicProperty(PokeCustomEventId, customEvents)
    PokeEventOptions(player, newEvent)
  }))
}

function PokeTimeEditGreeting(player: Player, event: PokeEventConfig) {
  let UI = new ModalFormData()
  UI.title({ translate: `translation.poke:timeEditGreetingTitle` })
  let greeting = `generic`
  if ((typeof event.greeting != "string") && (typeof event.greeting != "undefined")) {
    if (event.greeting.text) {
      greeting = event.greeting.text
    } else {
      greeting = `%${event.greeting.translate}`
    }
  }
  UI.textField({ translate: `translation.poke:timeEditGreetingTextFieldLabel` }, ``, { defaultValue: greeting })
  UI.show(player).then((response => {
    if (response.canceled) {
      PokeEventOptions(player, event)
      return
    }
    let newGreeting: string | boolean | number | undefined | RawMessage = response.formValues?.at(0)
    if ((typeof newGreeting != "string") || (newGreeting == '') || (newGreeting == ' ') || (newGreeting == 'generic')) {
      //console.warn(`Greeting is Generic`)
      newGreeting = "generic"
    } else if (newGreeting.startsWith(`%`)) {
      //console.warn(`Greeting is translation string`)
      newGreeting = { translate: newGreeting.replace(`%`, ``) }
    } else {
      //console.warn(`Greeting is normal string`)
      newGreeting = { text: newGreeting }
    }
    let newEvent: PokeEventConfig = {
      id: event.id,
      name: event.name,
      dates: event.dates,
      fixedTime: event.fixedTime,
      gift: event.gift,
      icon: event.icon,
      repeat: event.repeat,
      // String will only be "generic" otherwise its RawMessage
      greeting: newGreeting,
      nonModifiable: event.nonModifiable,
      v: PokeCalendarVersion
    }
    //console.warn(`New Event: ${JSON.stringify(newEvent)}`)
    let customEvents = world.getDynamicProperty(PokeCustomEventId)?.toString().replace(JSON.stringify(event), JSON.stringify(newEvent))
    //console.warn(`Custom Events: ${customEvents}`)
    world.setDynamicProperty(PokeCustomEventId, customEvents)
    PokeEventOptions(player, newEvent)
    return
  }))
}

function PokeTimeDeleteEvent(player: Player, event: PokeEventConfig) {
  let UI = new ModalFormData()
  UI.title({ translate: `translation.poke:timeDeleteEventTitle`, with: [event.id] })
  UI.textField({ translate: `translation.poke:timeDeleteEventConfirmField` }, ``)
  UI.show(player).then((response => {
    if (response.canceled) {
      PokeEventOptions(player, event)
      return
    } else {
      if (response.formValues?.at(0)?.toString().toLowerCase() != event.id.toLowerCase()) {
        PokeErrorScreen(player, { translate: `translation.poke:timeErrorIncorrectDeleteId` }, PokeEventOptions(player, event))
        return
      }
      //console.warn(`Deleting: ${event.id}`)
      //console.warn(`${world.getDynamicProperty(PokeCustomEventId)}`)
      let customEvents: PokeEventConfig[] = JSON.parse(world.getDynamicProperty(PokeCustomEventId)!.toString() ?? "[]")
      let replacedEvent = PokeGetObjectById(customEvents, event.id)
      if (!replacedEvent) {
        //console.warn(`Invalid Event ID`)
        return
      }
      let newEvents = JSON.stringify(customEvents)
      newEvents = newEvents.replace(JSON.stringify(replacedEvent.value), ``).replace(`,,`, `,`).replace(`,]`, `]`).replace(`[,`, `[`)
      world.setDynamicProperty(PokeCustomEventId, newEvents)
      //console.info(JSON.stringify(newEvents))
    }
  }))
}


export { PokeTimeConfigUIMainMenu, PokeBirthdays, PokeTimeZoneOffset, PokeTimeGreeting }

