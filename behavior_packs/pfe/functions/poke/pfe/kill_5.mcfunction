clear @s minecraft:ender_pearl 0 16
clear @s poke:kill_quest_5 0 1
give @s poke:iron_token 2
tellraw @s {"rawtext":[{"translate":"translation.poke:qcomp","with":{"rawtext":[{"text":""}]}}]}
playsound poke_pfe.quest.complete @s