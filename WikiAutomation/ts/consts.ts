import { readFileSync } from "fs"
import { type NoteSound, type MCIndexFile } from "./types.ts";

export {
    LANG_FILE,
    LANG_FILE_ID,
    LANG_FILE_PATH,
    NAMESPACE,
    TEXTURE_INDEX,
    VERSION,
    MINECRAFT_LANG_FILE_PATH,
    MC_INDEX_FILE,
    NOTE_SOUND
}

const VERSION = "1.3.06";
const NAMESPACE = "poke_pfe";
const LANG_FILE_ID = "en_US";
const MINECRAFT_LANG_FILE_PATH = "./WikiAutomation/MCR/en_US.lang";
const LANG_FILE_PATH = `./WikiAutomation/PFE/resource_packs/pfe/texts/${LANG_FILE_ID}.lang`;
const LANG_FILE = readFileSync(`${LANG_FILE_PATH}`, { encoding: "utf8" });
const MC_INDEX_FILE: MCIndexFile = JSON.parse(readFileSync(`${"./WikiAutomation/minecraft_index.json"}`, { encoding: "utf8" }));
const TEXTURE_INDEX = JSON.parse(readFileSync(`${"./WikiAutomation/texture_index.json"}`, { encoding: "utf8" }));
const NOTE_SOUND: NoteSound = {
    "note.none": "None",
    "note.bassattack": "Bass Guitar",
    "note.snare": "Snare Drum",
    "note.hat": "Hi-hat Click",
    "note.bd": "Bass Drum",
    "note.bell": "Bell (Glockenspiel)",
    "note.flute": "Flute",
    "note.chime": "Chime",
    "note.guitar": "Guitar",
    "note.xylophone": "Xylophone",
    "note.iron_xylophone": "Iron Xylophone (Vibraphone)",
    "note.cow_bell": "Cow Bell",
    "note.didgeridoo": "Didgeridoo",
    "note.bit": "Bit (Clarinet/Synthesizer)",
    "note.banjo": "Banjo",
    "note.pling": "Pling (60's E. piano)",
    "note.trumpet": "Trumpet",
    "note.trumpet_exposed": "Weathered Trumpet (Trombone)",
    "note.trumpet_weathered": "Weathered Trumpet (Trombone)",
    "note.trumpet_oxidized": "Oxidized Trumpet (Distorted Trombone)",
    "note.harp": "Harp (Piano)",

}