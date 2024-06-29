execute unless entity @s[hasitem=[{item=minecraft:cod,quantity=16..}]] run playsound poke.quest.info @s
tellraw @s {"rawtext":[{"text":"----------------§6\n§lQuest§r§6§r:\n- Gather §3§l16§r§3§r Raw Cod\n§l§aReward§r§l§r:\n- §3§l1§r§3§r §fIron Token\n§r----------------"}]}
execute if entity @s[hasitem=[{item=minecraft:cod,quantity=16..}]] run function poke/quest/farm_6