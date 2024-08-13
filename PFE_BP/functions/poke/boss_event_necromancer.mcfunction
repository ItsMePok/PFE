execute as @r at @s run summon poke:necromancer ~ ~10 ~
tag @e[c=1,type=poke:necromancer,tag=!boss_event_tpfin] add pfe_boss_event_n
execute as @e[type=poke:necromancer,tag=pfe_boss_event_n,tag=!boss_event_tpfin] at @s run spreadplayers ~~ 25 50 @s
playsound poke.block.bell.hit @a ^^^ 4 0.225
execute as @e[type=poke:necromancer,tag=pfe_boss_event_n,tag=!boss_event_tpfin] at @s run tellraw @a {"rawtext":[{"translate":"translation.poke:boss_event_near_necromancer","with":{"rawtext":[{"text":""}]}},{"text":" "},{"selector":"@p"}]}
function poke/boss_event_fin