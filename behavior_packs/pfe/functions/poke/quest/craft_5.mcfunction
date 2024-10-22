clear @s poke:death_ingot 0 1
clear @s poke:craft_quest_5 0 1
give @s poke:gold_token
tellraw @s {"rawtext":[{"translate":"translation.poke:qcomp","with":{"rawtext":[{"text":""}]}}]}
playsound poke.quest.comp @s