execute unless entity @s[hasitem=[{item=poke:raw_cobalt,quantity=8..}]] run playsound poke.quest.info @s
tellraw @s {"rawtext":[{"text":"----------------\n"},{"translate":"translation.poke:qinfo_quest","with":{"rawtext":[{"text":""}]}},{"text":"§9:§r\n\n"},{"translate":"translation.poke:qinfo_gather","with":{"rawtext":[{"text":""}]}},{"text":" §f8§r§9:§r\n - "},{"translate":"item.poke:raw_cobalt","with":{"rawtext":[{"text":""}]}},{"text":"\n\n"},{"translate":"translation.poke:qinfo_reward","with":{"rawtext":[{"text":""}]}},{"text":"§9:§r\n- "},{"translate":"item.poke:copper_token","with":{"rawtext":[{"text":""}]}},{"text":" x3\n----------------\n"}]}
execute if entity @s[hasitem=[{item=poke:raw_cobalt,quantity=8..}]] run function poke/pfe/mine_2