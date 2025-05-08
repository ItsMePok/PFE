clear @s minecraft:raw_copper 0 4
clear @s minecraft:coal 0 4
clear @s poke:mine_quest_1 0 1
give @s poke:copper_token 2
tellraw @s {"rawtext":[{"translate":"translation.poke:qcomp","with":{"rawtext":[{"text":""}]}}]}
playsound poke_pfe.quest.complete @s