execute as @r at @s run summon poke:knightling ~ ~10 ~
tag @e[c=1,type=poke:knightling,tag=!boss_event_tpfin] add pfe_boss_event_k
execute as @e[type=poke:knightling,tag=pfe_boss_event_k,tag=!boss_event_tpfin] at @s run spreadplayers ~ ~ 25 50 @s
playsound poke.block.false_permissions @a ^^^ 4 0.4
execute as @e[type=poke:knightling,tag=pfe_boss_event_k,tag=!boss_event_tpfin] at @s run tellraw @a {"rawtext":[{"translate":"translation.poke:boss_event_near_knightling","with":{"rawtext":[{"text":""}]}},{"text":" "},{"selector":"@p"}]}
function poke/boss_event_fin