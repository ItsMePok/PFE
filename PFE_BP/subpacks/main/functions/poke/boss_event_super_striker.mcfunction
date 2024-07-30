execute as @r at @s run summon poke:super_striker ~ ~10 ~
tag @e[c=1,type=poke:super_striker,tag=!boss_event_tpfin] add pfe_boss_event
execute as @e[type=poke:super_striker,tag=pfe_boss_event,tag=!boss_event_tpfin] at @s run spreadplayers ~ ~ 25 50 @s
playsound poke.conduit.deactivate @a ^^^ 4 0.3
execute as @e[type=poke:super_striker,tag=pfe_boss_event,tag=!boss_event_tpfin] at @s run tellraw @a {"rawtext":[{"translate":"translation.poke:boss_event_near_super_striker","with":{"rawtext":[{"text":""}]}},{"text":" "},{"selector":"@p"}]}
function poke/boss_event_fin