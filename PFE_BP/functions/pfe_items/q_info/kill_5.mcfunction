execute unless entity @s[hasitem=[{item=minecraft:ender_pearl,quantity=16..}]] run playsound poke.quest.info @s
tellraw @s {"rawtext":[{"text":"----------------§6\n§lQuest§r§6§r:\n- Gather §3§l16§r§3§r Ender Pearls\n§l§aReward§r§l§r:\n- §3§l2§r§3§r §7Iron Tokens\n§r----------------"}]}
execute if entity @s[hasitem=[{item=minecraft:ender_pearl,quantity=16..}]] run function poke/quest/kill_5