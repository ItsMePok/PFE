execute unless entity @s[hasitem=[{item=poke:gps_module,quantity=1..}]] run playsound poke.quest.info @s
tellraw @s {"rawtext":[{"text":"----------------\n"},{"translate":"translation.poke:qinfo_quest","with":{"rawtext":[{"text":""}]}},{"text":"§9:§r\n\n"},{"translate":"translation.poke:qinfo_gather","with":{"rawtext":[{"text":""}]}},{"text":" §f1§r§9:§r\n - "},{"translate":"item.poke:gps_module","with":{"rawtext":[{"text":""}]}},{"text":"\n\n"},{"translate":"translation.poke:qinfo_reward","with":{"rawtext":[{"text":""}]}},{"text":"§9:§r\n- "},{"translate":"item.poke:gold_token","with":{"rawtext":[{"text":""}]}},{"text":"\n\n----------------\n"}]}
execute if entity @s[hasitem=[{item=poke:gps_module,quantity=1..}]] run function poke/pfe/craft_6