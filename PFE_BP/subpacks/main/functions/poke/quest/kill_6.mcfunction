clear @s minecraft:skull 1 1 
clear @s poke:kill_quest_6 0 1
give @s poke:gold_token 1
tellraw @s {"rawtext":[{"text":"§aQuest Complete!§r"}]}
playsound poke.quest.comp @s