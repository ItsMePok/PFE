clear @s poke:raw_cobalt 0 8
clear @s poke:mine_quest_2 0 1
give @s poke:copper_token 2
tellraw @s {"rawtext":[{"translate":"translation.poke:qcomp","with":{"rawtext":[{"text":""}]}}]}
playsound poke_pfe.quest.complete @s