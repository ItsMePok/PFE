execute unless entity @s[hasitem=[{item=minecraft:string,quantity=4..},{item=minecraft:rotten_flesh,quantity=4..}]] run playsound poke.quest.info @s
tellraw @s {"rawtext":[{"text":"----------------\n"},{"translate":"translation.poke:qinfo_quest","with":{"rawtext":[{"text":""}]}},{"text":"§9:§r\n\n"},{"translate":"translation.poke:qinfo_gather","with":{"rawtext":[{"text":""}]}},{"text":" §f4§r§9:§r\n - "},{"translate":"item.string.name","with":{"rawtext":[{"text":""}]}},{"text":"\n"},{"translate":"translation.poke:qinfo_gather","with":{"rawtext":[{"text":""}]}},{"text":" §f4§r§9:§r\n - "},{"translate":"item.rotten_flesh.name","with":{"rawtext":[{"text":""}]}},{"text":"\n\n"},{"translate":"translation.poke:qinfo_reward","with":{"rawtext":[{"text":""}]}},{"text":"§9:§r\n- "},{"translate":"item.poke:copper_token","with":{"rawtext":[{"text":""}]}},{"text":" x2\n----------------\n"}]}
execute if entity @s[hasitem=[{item=minecraft:string,quantity=4..},{item=minecraft:rotten_flesh,quantity=4..}]] run function poke/quest/kill_2