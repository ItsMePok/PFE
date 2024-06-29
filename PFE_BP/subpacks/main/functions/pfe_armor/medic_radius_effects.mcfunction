execute at @s run particle poke:medic_r10 ~ ~-1 ~ 
execute at @s as @a[r=10] run effect @s regeneration 20 5 true
execute at @s as @a[r=10] run effect @s absorption 60 5 true
effect @s health_boost 60 5 true
effect @s resistance 30 1 true
effect @s speed 30 1 true