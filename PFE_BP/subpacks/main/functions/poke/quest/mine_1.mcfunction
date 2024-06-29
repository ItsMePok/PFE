clear @s minecraft:raw_copper 0 4
clear @s minecraft:coal 0 4
clear @s poke:mine_quest_1 0 1
give @s poke:copper_token 2
tellraw @s {"rawtext":[{"text":"§aQuest Complete!§r"}]}
playsound poke.quest.comp @s