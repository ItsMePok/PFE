export { MakeIdentifierSection };
import index from "../../index.json" with { type: "json" };
import { GetBlockFile, GetItemFile } from "../common.ts";
import { type IndexItem } from "../types.ts";

function MakeIdentifierSection(file: string, item: IndexItem) {
  if (item.components.type == "block") {
    const BLOCK_FILE = GetBlockFile(item);

    file = `${file}\n## <img src="https://minecraft.wiki/images/Name_Tag_JE3_BE2.png?cbdc1&#x26;format=original" alt="" data-size="line"> Identifier: <mark style="color:yellow;">**${BLOCK_FILE["minecraft:block"].description.identifier.replace(/_/g, "\\_")}**</mark> <a href="#identifier" id="identifier"></a>\n`;
  }
  if (item.components.type == "item") {
    const ITEM_FILE = GetItemFile(item);

    file = `${file}\n## <img src="https://minecraft.wiki/images/Name_Tag_JE3_BE2.png?cbdc1&#x26;format=original" alt="" data-size="line"> Identifier: <mark style="color:yellow;">**${ITEM_FILE["minecraft:item"].description.identifier.replace(/_/g, "\\_")}**</mark> <a href="#identifier" id="identifier"></a>\n`;
  }
  return file;
}
