say generating stairs
scoreboard players random @a poke_dyn_stair 1 4
execute if score @p poke_dyn_stair matches 1 run structure load "poke:dyn/st_1" ~-2~-8~-10 180_degrees none
execute if score @p poke_dyn_stair matches 2 run structure load "poke:dyn/st_2" ~-2~-8~-10 180_degrees none
execute if score @p poke_dyn_stair matches 3 run structure load "poke:dyn/st_3" ~-2~-8~-10 180_degrees none
execute if score @p poke_dyn_stair matches 4 run structure load "poke:dyn/st_4" ~-2~-8~-10 180_degrees none
setblock ~ ~-9 ~-10 poke:cut_radium