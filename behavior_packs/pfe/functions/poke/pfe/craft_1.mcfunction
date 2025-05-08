clear @s poke:banished_star_x3 0 1
clear @s poke:craft_quest_1 0 1
give @s poke:iron_token
tellraw @s {"rawtext":[{"translate":"translation.poke:qcomp","with":{"rawtext":[{"text":""}]}}]}
playsound poke_pfe.quest.complete @s