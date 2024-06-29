execute unless entity @s[hasitem=[{item=minecraft:rotten_flesh,quantity=64..}]] run playsound poke.quest.info @s
tellraw @s {"rawtext":[{"text":"----------------§6\n§lQuest§r§6§r:\n- Gather §3§l64§r§3§r Rotten Flesh\n§l§aReward§r§l§r:\n- §3§l2§r§3§r §7Iron Tokens\n§r----------------"}]}
execute if entity @s[hasitem=[{item=minecraft:rotten_flesh,quantity=64..}]] run function poke/quest/kill_7