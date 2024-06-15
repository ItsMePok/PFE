execute unless block ~ ~-1 ~ bedrock unless block ~ ~-1 ~ trial_spawner unless block ~ ~-1 ~ vault unless block ~ ~-1 ~ minecraft:mob_spawner run fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 air destroy
kill @e[type=item,name=bedrock,r=5]
tp @e[type=item,r=5] @s
execute unless block ~ ~-1 ~ bedrock unless block ~ ~-1 ~ trial_spawner unless block ~ ~-1 ~ minecraft:mob_spawner run playsound dig.basalt @a ~~~ 1 0.35
execute if block ~ ~-1 ~ bedrock run playsound random.anvil_land @a ~~~ 0.5 0.65
execute if block ~ ~-1 ~ minecraft:mob_spawner run playsound random.anvil_land @a ~~~ 0.5 0.65
execute if block ~ ~-1 ~ trial_spawner run playsound random.anvil_land @a ~~~ 0.5 0.65
execute if block ~ ~-1 ~ vault run playsound random.anvil_land @a ~~~ 0.5 0.65