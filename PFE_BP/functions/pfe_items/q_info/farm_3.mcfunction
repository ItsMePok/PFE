execute unless entity @s[hasitem=[{item=minecraft:carrot,quantity=8..}]] run playsound poke.quest.info @s
tellraw @s {"rawtext":[{"text":"----------------§6\n§lQuest§r§6§r:\n- Gather §3§l8§r§3§r Carrots\n§l§aReward§r§l§r:\n- §3§l2§r§3§r §6Copper Tokens\n§r----------------"}]}
execute if entity @s[hasitem=[{item=minecraft:carrot,quantity=8..}]] run function poke/quest/farm_3