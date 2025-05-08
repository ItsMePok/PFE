clear @s poke:gps_module 0 1
clear @s poke:craft_quest_6 0 1
give @s poke:gold_token
tellraw @s {"rawtext":[{"translate":"translation.poke:qcomp","with":{"rawtext":[{"text":""}]}}]}
playsound poke_pfe.quest.complete @s