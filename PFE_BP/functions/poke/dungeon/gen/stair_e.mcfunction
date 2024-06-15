say generating stairs
scoreboard players random @a poke_dyn_stair 1 4
execute if score @p poke_dyn_stair matches 1 run structure load "poke:dyn/st_1" ~1 ~-8~-2 270_degrees none
execute if score @p poke_dyn_stair matches 2 run structure load "poke:dyn/st_2" ~1 ~-8~-2 270_degrees none
execute if score @p poke_dyn_stair matches 3 run structure load "poke:dyn/st_3" ~1 ~-8~-2 270_degrees none
execute if score @p poke_dyn_stair matches 4 run structure load "poke:dyn/st_4" ~1 ~-8~-2 270_degrees none
setblock ~10 ~-9 ~ poke:cut_cobalt
