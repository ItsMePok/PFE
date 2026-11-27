import { GetItemFile } from "../common.ts";
import { type IndexItem } from "../types.ts";
export { MakeStackSize, MakeRarity, MakeAttackDamage };

function MakeAttackDamage(file: string, item: IndexItem) {
  //## <img src="https://minecraft.wiki/images/Strength_JE3_BE2.png?0494e" alt="Strength Effect." data-size="line"> Attack Damage: <mark style="color:yellow;">3</mark> <a href="#attack-damage" id="attack-damage"></a>
  if (!item.components.item_file_path) return file;

  const ITEM_FILE = GetItemFile(item);

  const ATTACK_DAMAGE =
    ITEM_FILE["minecraft:item"].components["minecraft:damage"]?.value;

  if (ATTACK_DAMAGE !== undefined) {
    file = `${file}\n## <img src="https://minecraft.wiki/images/Strength_JE3_BE2.png?0494e" alt="Strength Effect." data-size="line"> Attack Damage: <mark style="color:yellow;">${ATTACK_DAMAGE}</mark> <a href="#attack-damage" id="attack-damage"></a>\n`;
  }

  return file;
}

function MakeStackSize(file: string, item: IndexItem) {
  //## <img src="https://minecraft.wiki/images/Light_Gray_Bundle_JE1_BE1.png?b552e" alt="" data-size="line"> Stack Size: <mark style="color:yellow;">${AMOUNT}</mark> <a href="#stack-size" id="stack-size"></a>
  let amount: number | string = 64;
  if (item.components.item_file_path) {
    const ITEM_FILE = GetItemFile(item);

    amount =
      ITEM_FILE["minecraft:item"].components["minecraft:max_stack_size"] ??
      amount;
  }
  file = `${file}\n## <img src="https://minecraft.wiki/images/Light_Gray_Bundle_JE1_BE1.png?b552e" alt="" data-size="line"> Stack Size: <mark style="color:yellow;">${amount}</mark> <a href="#stack-size" id="stack-size"></a>\n`;
  return file;
}

function MakeRarity(file: string, item: IndexItem) {
  //Default to common if rarity component is non-existent (ex on a block with not block item)
  if (!item.components.item_file_path) {
    file = `${file}\n## <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/MiscIcons/Rarity.png?raw=true" alt="Rarity." data-size="line"> Rarity: <mark style="color:yellow;">Common</mark> <a href="#rarity" id="rarity"></a>\n`;
  } else {
    const ITEM_FILE = GetItemFile(item);
    let rarity =
      ITEM_FILE["minecraft:item"].components["minecraft:rarity"] ?? "Common";
    rarity = `${rarity.slice(0, 1).toUpperCase()}${rarity.slice(1)}`;
    file = `${file}\n## <img src="https://github.com/ItsMePok/PFE/blob/wikiAssets/MiscIcons/Rarity.png?raw=true" alt="Rarity." data-size="line"> Rarity: <mark style="color:yellow;">${rarity}</mark> <a href="#rarity" id="rarity"></a>\n`;
  }
  return file;
}
