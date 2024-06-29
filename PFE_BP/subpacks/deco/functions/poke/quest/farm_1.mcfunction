clear @s minecraft:wheat 0 8
clear @s poke:farm_quest_1 0 1
give @s poke:copper_token 2
tellraw @s {"rawtext":[{"text":"§aQuest Complete!§r"}]}
playsound poke.quest.comp @s