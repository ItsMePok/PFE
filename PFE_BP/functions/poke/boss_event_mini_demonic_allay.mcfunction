execute as @r at @s run summon poke:mini_demonic_allay ~ ~10 ~
tag @e[c=1,type=poke:mini_demonic_allay,tag=!boss_event_tpfin] add pfe_boss_event
execute as @e[type=poke:mini_demonic_allay,tag=pfe_boss_event,tag=!boss_event_tpfin] at @s run spreadplayers ~ ~ 25 50 @s
playsound poke.conduit.deactivate @a ^^^ 4 0.3
execute as @e[type=poke:mini_demonic_allay,tag=pfe_boss_event,tag=!boss_event_tpfin] at @s run tellraw @a {"rawtext":[{"translate":"translation.poke:boss_event_near_mini_demonic_allay","with":{"rawtext":[{"text":""}]}},{"text":" "},{"selector":"@p"}]}
function poke/boss_event_fin