tellraw @p {"rawtext":[{"text":"§eWelcome to the Dungeon§r!\n§aHere are a few things to keep in mind§r:\n§c-§r This Structure can overwrite existing things when making new rooms\n§c-§r This Structure has blocks that look like keys. to make a new room interact with them."}]}
structure load "poke:dyn/start_room" ~-5 ~-11 ~-5
scoreboard objectives add poke_dyn_room dummy poke_dyn_room
scoreboard objectives add poke_dyn_stair dummy poke_dyn_stair
scoreboard objectives add poke_dyn_hall dummy poke_dyn_hall
scoreboard players random @a poke_dyn_room 0 10
scoreboard players random @a poke_dyn_stair 1 4
scoreboard players random @a poke_dyn_hall 0 10
gamerule commandblockoutput false