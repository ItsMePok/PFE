execute unless entity @s[hasitem=[{item=poke:cobbled_limestone,quantity=8..}]] run playsound poke.quest.info @s
tellraw @s {"rawtext":[{"text":"----------------§6\n§lQuest§r§6§r:\n- Gather §3§l8§r§3§r Cobbled Limestone\n§l§aReward§r§l§r:\n- §3§l2§r§3§r §6Copper Tokens\n§r----------------"}]}
execute if entity @s[hasitem=[{item=poke:cobbled_limestone,quantity=8..}]] run function poke/quest/mine_3