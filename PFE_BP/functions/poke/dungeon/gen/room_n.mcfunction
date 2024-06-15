say generating room
scoreboard players random @a poke_dyn_room 1 2
execute if score @p poke_dyn_room matches 1 run structure load "poke:dyn/r_1" ~-5 ~-3~-11
execute if score @p poke_dyn_room matches 2 run structure load "poke:dyn/r_1" ~-5 ~-3~-11
execute if score @p poke_dyn_room matches 3 run structure load "poke:dyn/r_3" ~-5 ~-3~-11
execute if score @p poke_dyn_room matches 4 run structure load "poke:dyn/r_4" ~-5 ~-3~-11
structure load "poke:dyn/dyn_d1_o" ~-1~-1~-1 0_degrees none
structure load "poke:dyn/dyn_d1_o" ~-1~-1~ 0_degrees none layer_by_layer 0.6

