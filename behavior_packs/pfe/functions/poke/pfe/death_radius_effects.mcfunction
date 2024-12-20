execute at @s run particle poke:death_r10 ~ ~-1 ~ 
execute at @s as @e[rm=0.2,r=10,type=!painting,type=!item] run damage @s 15 wither
effect @s health_boost 60 4 true
effect @s resistance 30 2 true
effect @s regeneration 30 2 true
effect @s fire_resistance 30 0 true