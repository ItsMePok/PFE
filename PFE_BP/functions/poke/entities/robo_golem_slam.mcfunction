playanimation @s animation.robo_golem.smash
camerashake add @a[r=20] 0.5 0.1 positional
effect @e[r=10,rm=0.1,type=!wither_skeleton,type=!poke:demonic_allay,type=!fireball] levitation 1 10 true
damage @a[r=10] 40 entity_attack entity @e[type=poke:robo_golem,c=1]
weather clear
execute as @a[r=10] at @s run summon poke:demonic_allay ~~~ ~~ attacked "Furnace Golem Balancing :3"