clear @s poke:cobbled_limestone 0 8
clear @s poke:mine_quest_3 0 1
give @s poke:copper_token 3
tellraw @s {"rawtext":[{"translate":"translation.poke:qcomp","with":{"rawtext":[{"text":""}]}}]}
playsound poke.quest.comp @s