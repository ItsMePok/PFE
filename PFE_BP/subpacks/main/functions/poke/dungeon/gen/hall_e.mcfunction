say generating hall
scoreboard players random @a poke_dyn_stair 1 4
execute if score @p poke_dyn_stair matches 1 run structure load "poke:dyn/h_1" ~1 ~-2~-2 270_degrees none
execute if score @p poke_dyn_stair matches 2 run structure load "poke:dyn/h_2" ~1 ~-2~-2 270_degrees none
execute if score @p poke_dyn_stair matches 3 run structure load "poke:dyn/h_3" ~1 ~-2~-2 270_degrees none
execute if score @p poke_dyn_stair matches 4 run structure load "poke:dyn/h_4" ~1 ~-2~-2 270_degrees none
setblock ~10 ~-3 ~ poke:cut_cobalt
