import { readFileSync } from "fs"

export {
    LANG_FILE,
    LANG_FILE_ID,
    LANG_FILE_PATH,
    NAMESPACE,
    TEXTURE_INDEX,
    VERSION
}

const VERSION = "1.3.05"
const NAMESPACE = "poke_pfe"
const LANG_FILE_ID = "en_US"
const LANG_FILE_PATH = `./WikiAutomation/PFE/resource_packs/pfe/texts/${LANG_FILE_ID}.lang`
const LANG_FILE = readFileSync(`${LANG_FILE_PATH}`, { encoding: "utf8" })
const TEXTURE_INDEX = JSON.parse(readFileSync(`${"./WikiAutomation/texture_index.json"}`, { encoding: "utf8" }))