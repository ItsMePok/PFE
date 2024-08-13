clear @s minecraft:skull 1 1 
clear @s poke:kill_quest_6 0 1
give @s poke:gold_token 1
tellraw @s {"rawtext":[{"translate":"translation.poke:qcomp","with":{"rawtext":[{"text":""}]}}]}
playsound poke.quest.comp @s