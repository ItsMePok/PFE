clear @s minecraft:blaze_rod 0 64
clear @s poke:kill_quest_4 0 1
give @s poke:gold_token 2
tellraw @s {"rawtext":[{"translate":"translation.poke:qcomp","with":{"rawtext":[{"text":""}]}}]}
playsound poke_pfe.quest.complete @s