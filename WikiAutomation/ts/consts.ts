import { readFileSync } from "fs"
import { type MCIndexFile } from "./types.ts";

export {
    LANG_FILE,
    LANG_FILE_ID,
    LANG_FILE_PATH,
    NAMESPACE,
    TEXTURE_INDEX,
    VERSION,
    MINECRAFT_LANG_FILE_PATH,
    MC_INDEX_FILE
}

const VERSION = "1.3.06";
const NAMESPACE = "poke_pfe";
const LANG_FILE_ID = "en_US";
const MINECRAFT_LANG_FILE_PATH = "./WikiAutomation/MCR/en_US.lang";
const LANG_FILE_PATH = `./WikiAutomation/PFE/resource_packs/pfe/texts/${LANG_FILE_ID}.lang`;
const LANG_FILE = readFileSync(`${LANG_FILE_PATH}`, { encoding: "utf8" });
const MC_INDEX_FILE: MCIndexFile = JSON.parse(readFileSync(`${"./WikiAutomation/minecraft_index.json"}`, { encoding: "utf8" }));
const TEXTURE_INDEX = JSON.parse(readFileSync(`${"./WikiAutomation/texture_index.json"}`, { encoding: "utf8" }));