clear @s poke:banished_star_x4 0 1
clear @s poke:craft_quest_2 0 1
give @s poke:gold_token
tellraw @s {"rawtext":[{"translate":"translation.poke:qcomp","with":{"rawtext":[{"text":""}]}}]}
playsound poke_pfe.quest.complete @s