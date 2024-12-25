import { Player, world } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"

interface PFEBirthdays{
  "day":number
  "month":number //Jan = 0
  "name"?:string
  "year"?:number|undefined
  "announce"?:boolean
  "style"?:"dev"|"normal"
}
interface PFEHolidays{
  "name"?: string,
  "days"?:number[],
  "month"?:number[]//Jan = 0
}

const PFEDefaultHolidays:PFEHolidays[] =[
  {
    "name":"XMAS",
    "days":[24,25,26],
    "month":[11]
  },
  {
    "name":"Halloween",
    "days":[31],
    "month":[9]
  },
  {
    "name":"AprilFools",
    "days":[1],
    "month":[3]
  }
]

//let PFEHolidayLTU = new Date(Date.prototype.getUTCFullYear(),12,25)

function PFETimeConfigUIMainMenu(player:Player){
  let currentTime = new Date(Date.now()+PFETimeZoneOffset(player))
  let UI = new ActionFormData().body({translate:`translation.poke:timeUiMainMenuBody`,with:{rawtext:[{text:player.name},{text:`${currentTime.toDateString()}, ${currentTime.toLocaleTimeString()}`},{translate:`${PFETimeGreeting(currentTime)}`}]}})
  if (player.getDynamicProperty(`pfe:timezone`)){
    UI.button({translate:`translation.poke:timeChangeTimezone`},PFETimeIcon(currentTime))
  }else{
    UI.button({translate:`translation.poke:timeSetTimezone`},PFETimeIcon(currentTime))
  }
  if (player.getDynamicProperty(`pfe:birthday`)){
    UI.button({translate:`translation.poke:timeChangeBirthday`},`textures/poke/pfe/birthday_cake`)
  }else{
    UI.button({translate:`translation.poke:timeSetBirthday`},`textures/poke/pfe/birthday_cake`)
  }
  if(PFEDefaultHolidays.at(0)?.days?.includes(currentTime.getDate())&&PFEDefaultHolidays.at(0)?.month?.includes(currentTime.getMonth())&& !player.hasTag(`pfe:${currentTime.getFullYear()}LTU-${PFEDefaultHolidays.at(0)?.name}`)){
    UI.button({translate:`translation.poke:claimGift`},`textures/items/pfe-gift_box`)
  }
  //@ts-ignore
  UI.show(player).then((response => {
    if (response.canceled){
      return
    }
    if (response.selection == 0){
      PFESetTimeZone(player,currentTime)
    }
    if (response.selection == 1){
      PFESetBirthday(player)
    }
    if (response.selection == 2){
      player.runCommand(`give @s poke:red_present 16`)
      player.addTag(`pfe:${currentTime.getFullYear()}LTU-${PFEDefaultHolidays.at(0)?.name}`)
    }
  }))
}
function PFESetBirthday (player:Player){
  let UI = new ModalFormData()
  .dropdown({translate:`translation.poke:setBirthdayDay`},[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`20`,`21`,`22`,`23`,`24`,`25`,`26`,`27`,`28`,`29`,`30`,`31`])
  .dropdown({translate:`translation.poke:setBirthdayDay`},[{translate:`translation.poke:setBirthdayJan`},{translate:`translation.poke:setBirthdayFeb`},{translate:`translation.poke:setBirthdayMar`},{translate:`translation.poke:setBirthdayApr`},{translate:`translation.poke:setBirthdayMay`},{translate:`translation.poke:setBirthdayJun`},{translate:`translation.poke:setBirthdayJul`},{translate:`translation.poke:setBirthdayAug`},{translate:`translation.poke:setBirthdaySep`},{translate:`translation.poke:setBirthdayOct`},{translate:`translation.poke:setBirthdayNov`},{translate:`translation.poke:setBirthdayDec`},])
  .toggle({translate:`translation.poke:setBirthdayGlobalMessage`})
  //@ts-ignore
  UI.show(player).then((response =>{
   // console.warn(response.formValues?.at(1))
    if(response.formValues?.at(2)){
      let birthdays:PFEBirthdays[] = JSON.parse(world.getDynamicProperty(`pfe:birthdays`)!.toString())
      let newBirthday = true
      birthdays.forEach((birthday)=>{
        if (birthday.name==player.name){
          birthday.day = Number(response.formValues?.at(0))+1
          birthday.month = Number(response.formValues?.at(1))
          birthday.announce = Boolean(response.formValues?.at(2))
        }
      })
      if (newBirthday){
        birthdays.concat([{day:Number(response.formValues.at(0))+1,month:Number(response.formValues.at(1)),announce:Boolean(response.formValues?.at(2)),name:player.name,style:"normal",year:undefined}])
      }
      world.setDynamicProperty(`pfe:birthdays`,JSON.stringify(birthdays))
      player.setDynamicProperty(`pfe:birthday`,JSON.stringify({day:Number(response.formValues.at(0))+1,month:Number(response.formValues.at(1)),announce:Boolean(response.formValues?.at(2)),name:player.name,style:"normal",year:undefined}))
    }
  }))
}
function PFETimeIcon(currentTime:Date){
  switch(currentTime.getHours()){
    case 0:{
      return 'textures/poke/pfe/12am'
      break
    }
    case 1:{
      return 'textures/poke/pfe/1am'
      break
    }
    case 2:{
      return 'textures/poke/pfe/2am'
      break
    }
    case 3:{
      return 'textures/poke/pfe/3am'
      break
    }
    case 4:{
      return 'textures/poke/pfe/4am'
      break
    }
    case 5:{
      return 'textures/poke/pfe/5am'
      break
    }
    case 6:{
      return 'textures/poke/pfe/6am'
      break
    }
    case 7:{
      return 'textures/poke/pfe/7am'
      break
    }
    case 8:{
      return 'textures/poke/pfe/8am'
      break
    }
    case 9:{
      return 'textures/poke/pfe/9am'
      break
    }
    case 10:{
      return 'textures/poke/pfe/10am'
      break
    }
    case 11:{
      return 'textures/poke/pfe/11am'
      break
    }
    case 12:{
      return 'textures/poke/pfe/12pm'
      break
    }
    case 13:{
      return 'textures/poke/pfe/1pm'
      break
    }
    case 14:{
      return 'textures/poke/pfe/2pm'
      break
    }
    case 15:{
      return 'textures/poke/pfe/3pm'
      break
    }
    case 16:{
      return 'textures/poke/pfe/4pm'
      break
    }
    case 17:{
      return 'textures/poke/pfe/5pm'
      break
    }
    case 18:{
      return 'textures/poke/pfe/6pm'
      break
    }
    case 19:{
      return 'textures/poke/pfe/7pm'
      break
    }
    case 20:{
      return 'textures/poke/pfe/8pm'
      break
    }
    case 21:{
      return 'textures/poke/pfe/9pm'
      break
    }
    case 22:{
      return 'textures/poke/pfe/10pm'
      break
    }
    case 23:{
      return 'textures/poke/pfe/11pm'
      break
    }
  }
}
function PFETimeZoneOffset(player?:Player){
  let timezone = undefined
  if ((player?.getDynamicProperty(`pfe:timezone`))){
    timezone = Number(player.getDynamicProperty(`pfe:timezone`))
    return timezone
  }
  return 0
}
function PFESetTimeZone(player:Player,currentTime:Date){
  let Ui = new ActionFormData()
  let Timezones = [
    {
      "name":"§uUTC §a+§u14:00§r:\nLINT",
      "offset": 50400000
    },
    {
      "name":"§uUTC §a+§u13:45§r:\nCHADT",
      "offset": 49500000
    },
    {
      "name":"§uUTC §a+§u13:00§r:\nNZDT/PHOT/TKT/TOT",
      "offset": 46800000
    },
    {
      "name":"§uUTC §a+§u12:45§r:\nCHAST",
      "offset": 45900000
    },
    {
      "name":"§uUTC §a+§u12:00§r:\nANAT/FJT/GILT/MAGT/MHT/NZST/PETT/TVT/WAKT",
      "offset": 43200000
    },
    {
      "name":"§uUTC §a+§u11:00§r:\nAEDT/BST/KOST/LHST/MIST/NCT/NFT/PONT/SKAT/SBT/SRET/VUT",
      "offset": 39600000
    },
    {
      "name":"§uUTC §a+§u10:00§r:\nACDT/LHST",
      "offset": 37800000
    },
    {
      "name":"§uUTC §a+§u10:00§r:\nAEST/CHST/CHUT/DDUT/PGT/VLAT",
      "offset": 36000000
    },
    {
      "name":"§uUTC §a+§u09:30§r:\nACST",
      "offset": 34200000
    },
    {
      "name":"§uUTC §a+§u09:00§r:\nCHOST/JST/KST/PWT/TLT/ULAST/WIT/YAKT",
      "offset": 32400000
    },
    {
      "name":"§uUTC §a+§u08:45§r:\nACWST",
      "offset": 31500000
    },
    {
      "name":"§uUTC §a+§u08:00§r:\nAWST/BNT/CHOT/CST/HKT/HOVST/IRKT/MYT/PHT/SGT/TST/ULAT/WITA/WST/ACT",
      "offset": 28800000
    },
    {
      "name":"§uUTC §a+§u07:00§r:\nTHA/WIB/CXT/DAVT/HOVT/ICT/KRAT/NOVT",
      "offset": 25200000
    },
    {
      "name":"§uUTC §a+§u06:30§r:\nCCT/MMT",
      "offset": 23400000
    },
    {
      "name":"§uUTC §a+§u06:00§r:\nBIOT/BST/BTT/IOT/KGT/OMST/VOST/ALMT",
      "offset": 21600000
    },
    {
      "name":"§uUTC §a+§u05:45§r:\nNPT",
      "offset": 20700000
    },
    {
      "name":"§uUTC §a+§u05:30§r:\nIST/SLST",
      "offset": 19800000
    },
    {
      "name":"§uUTC §a+§u05:00§r:\nAQTT/HMT/MAWT/MVT/ORAT/PKT/TFT/TJT/TMT/UZT/YEKT",
      "offset": 18000000
    },
    {
      "name":"§uUTC §a+§u04:30§r:\nAFT/IRDT",
      "offset": 16200000
    },
    {
      "name":"§uUTC §a+§u04:00§r:\nAMT/AZT/GET/GST/MUT/RET/SAMT/SCT",
      "offset": 14400000
    },
    {
      "name":"§uUTC §a+§u03:30§r:\nIRST",
      "offset": 12600000
    },
    {
      "name":"§uUTC §a+§u03:00§r:\nAST/EAT/EEST/FET/IDT/MSK/SYOT/TRT/VOLT",
      "offset": 10800000
    },
    {
      "name":"§uUTC §a+§u02:00§r:\nEET/CAT/SAST/CEST/HAEC/IST/KALT/MEST/WAST",
      "offset": 7200000
    },
    {
      "name":"§uUTC §a+§u01:00§r:\nCET/BST/DFT/IST/MET/WAT",
      "offset": 3600000
    },
    {
      "name":"§uUTC §a+§u00:00§r:\nGMT/UTC/AZOST/EGST/WET",
      "offset": 0
    },
    {
      "name":"§uUTC §c-§u01:00§r:\nAZOT/CVT/EGT",
      "offset": -3600000
    },
    {
      "name":"§uUTC §c-§u02:00§r:\nBRST/FNT/GST/PMDT/UYST/WGST",
      "offset": -7200000
    },
    {
      "name":"§uUTC §c-§u02:30§r:\nNDT",
      "offset": -9000000
    },
    {
      "name":"§uUTC §c-§u03:00§r:\nADT/AMST/ART/BRT/CLST/FKST/GFT/PMST/PYST/ROTT/SRT/UYT",
      "offset": -10800000
    },
    {
      "name":"§uUTC §c-§u03:30§r:\nNST",
      "offset": -12600000
    },
    {
      "name":"§uUTC §c-§u04:00§r:\nAMT/AST/EDT/BOT/CDT/COST/ECT/FKT/GYT/PYT/VET",
      "offset": -14400000
    },
    {
      "name":"§uUTC §c-§u05:00§r:\nEST/CDT/ACT/COT/CST/EASST/ECT/PET",
      "offset": -18000000
    },
    {
      "name":"§uUTC §c-§u06:00§r:\nCST/MDT/EAST/GALT",
      "offset": -21600000
    },
    {
      "name":"§uUTC §c-§u07:00§r:\nMST/PDT",
      "offset": -25200000
    },
    {
      "name":"§uUTC §c-§u08:00§r:\nPST/AKDT/CIST",
      "offset": -28800000
    },
    {
      "name":"§uUTC §c-§u09:00§r:\nAKST/GAMT/GIT/HDT",
      "offset": -32400000
    },
    {
      "name":"§uUTC §c-§u09:30§r:\nMART/MIT",
      "offset": -34200000
    },
    {
      "name":"§uUTC §c-§u10:00§r:\nHST/SDT/TAHT",
      "offset": -36000000
    },
    {
      "name":"§uUTC §c-§u11:00§r:\nNUT/SST",
      "offset": -39600000
    },
    {
      "name":"§uUTC §c-§u12:00§r:\nBIT/IDLW",
      "offset": -43200000
    }
  ]
  Timezones.forEach(timezone => {
    Ui.button(timezone.name,PFETimeIcon(new Date(Date.now()+(timezone.offset))))
  });
  //@ts-ignore
  Ui.show(player).then((response =>{
    if (response.canceled){
      return
    }
    player.setDynamicProperty(`pfe:timezone`,Timezones.at(Number(response.selection))!.offset)
    //console.warn(`saved time as ${Timezones.at(response.selection!)?.name}`)
  }))
}
function PFETimeGreeting(date:Date,generic?:boolean){
  //console.warn(`${date.getDate()} ${date.getMonth()}`)
  if(!generic){
    if ((date.getDate()==24||date.getDate()==25)&&date.getMonth()==11){
      return `translation.poke:timeHolidayGreet`
    }
  }
  let hour = date.getHours()
  switch(hour){
    case 1:{return `translation.poke:timeMorningGreet`;break}
    case 2:{return `translation.poke:timeMorningGreet`;break}
    case 3:{return `translation.poke:timeMorningGreet`;break}
    case 4:{return `translation.poke:timeMorningGreet`;break}
    case 5:{return `translation.poke:timeMorningGreet`;break}
    case 6:{return `translation.poke:timeMorningGreet`;break}
    case 7:{return `translation.poke:timeMorningGreet`;break}
    case 8:{return `translation.poke:timeMorningGreet`;break}
    case 9:{return `translation.poke:timeMorningGreet`;break}
    case 10:{return `translation.poke:timeMorningGreet`;break}
    case 11:{return `translation.poke:timeMorningGreet`;break}
    case 12:{return `translation.poke:timeNoonGreet`;break}
    case 13:{return `translation.poke:timeNoonGreet`;break}
    case 14:{return `translation.poke:timeNoonGreet`;break}
    case 15:{return `translation.poke:timeNoonGreet`;break}
    case 16:{return `translation.poke:timeNoonGreet`;break}
    case 17:{return `translation.poke:timeNightGreet`;break}
    case 18:{return `translation.poke:timeNightGreet`;break}
    case 19:{return `translation.poke:timeNightGreet`;break}
    case 20:{return `translation.poke:timeNightGreet`;break}
    case 21:{return `translation.poke:timeNightGreet`;break}
    case 22:{return `translation.poke:timeNightGreet`;break}
    case 23:{return `translation.poke:timeNightGreet`;break}
  }
}
export{ PFETimeConfigUIMainMenu, PFEBirthdays, PFETimeZoneOffset,PFETimeGreeting}
