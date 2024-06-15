clear @s minecraft:rotten_flesh 0 4
clear @s minecraft:string 0 4
clear @s poke:kill_quest_2 0 1
give @s poke:copper_token 2
tellraw @s {"rawtext":[{"text":"§aQuest Complete!§r"}]}
playsound poke.quest.comp @s