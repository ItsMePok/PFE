say door opened East
scoreboard players random @a poke_dyn_hall 1 2
structure load "poke:dyn/dyn_d1_o" ~ ~-1 ~-1 90_degrees none layer_by_layer 0.6
execute if score @p poke_dyn_hall matches 1 run function poke/dungeon/gen/stair_e
execute if score @p poke_dyn_hall matches 2 run function poke/dungeon/gen/hall_e