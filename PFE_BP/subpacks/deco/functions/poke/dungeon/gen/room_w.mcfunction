say generating room
scoreboard players random @a poke_dyn_room 1 2
execute if score @p poke_dyn_room matches 1 run structure load "poke:dyn/r_1" ~-11 ~-3~-5
execute if score @p poke_dyn_room matches 2 run structure load "poke:dyn/r_1" ~-11 ~-3~-5
execute if score @p poke_dyn_room matches 3 run structure load "poke:dyn/r_3" ~-11 ~-3~-5
execute if score @p poke_dyn_room matches 4 run structure load "poke:dyn/r_4" ~-11 ~-3~-5
structure load "poke:dyn/dyn_d1_o" ~ ~-1~-1 270_degrees none layer_by_layer 0.6
structure load "poke:dyn/dyn_d1_o" ~-1 ~-1~-1 270_degrees none

