say generating hall
scoreboard players random @a poke_dyn_stair 1 4
execute if score @p poke_dyn_stair matches 1 run structure load "poke:dyn/h_1" ~-2~-2~1 0_degrees none
execute if score @p poke_dyn_stair matches 2 run structure load "poke:dyn/h_2" ~-2~-2~1 0_degrees none
execute if score @p poke_dyn_stair matches 3 run structure load "poke:dyn/h_3" ~-2~-2~1 0_degrees none
execute if score @p poke_dyn_stair matches 4 run structure load "poke:dyn/h_4" ~-2~-2~1 0_degrees none
setblock ~ ~-3 ~10 poke:cut_holy