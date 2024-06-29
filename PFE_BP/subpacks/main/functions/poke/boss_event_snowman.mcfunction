execute as @r at @s run summon poke:snowman ~ ~10 ~
tag @e[c=1,type=poke:snowman,tag=!boss_event_tpfin] add pfe_boss_event
execute as @e[type=poke:snowman,tag=pfe_boss_event,tag=!boss_event_tpfin] at @s run spreadplayers ~ ~ 25 50 @s
playsound mob.shulker.shoot @a ~~~ 4 0.275
execute as @e[type=poke:snowman,tag=pfe_boss_event,tag=!boss_event_tpfin] at @s run tellraw @a {"rawtext": [{"text": "§bBoss is nearest to: §f"}, {"selector": "@p"}]}
function poke/boss_event_fin