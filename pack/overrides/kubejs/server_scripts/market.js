ServerEvents.recipes(event => {
    Ingredient.of('%minecraft:spawn_eggs').itemIds.forEach(spawn_egg => {
        if(spawn_egg != 'minecraft:spawner' && spawn_egg != 'minecraft:trial_spawner'){
            event.custom({
                "type": "farmingforblockheads:market",
                "category": "farmingforblockheads:other",
                "preset": "minecraft:bone_meal",
                "result": {
                    "count": 1,
                    "item": spawn_egg
                }
            })
        }
    })
    Ingredient.of('#supplementaries:flower_box_plantable').itemIds.forEach(plant => {
        if(!Ingredient.of(/minecraft.*sapling/).test(plant) && plant != 'supplementaries:flax_seeds' && plant != 'culturaldelights:avocado_sapling'){
            event.custom({
                "type": "farmingforblockheads:market",
                "category": "farmingforblockheads:saplings",
                "preset": "minecraft:saplings",
                "result": {
                    "count": 1,
                    "item": plant
                }
            })
        }
    })
    event.remove({ id: 'farmingforblockheads:market' })
    event.shaped(
        Item.of('farmingforblockheads:market',1),
        [
            'ABA',
            'CDC',
            'CCC'
        ],
        {
            A: '#minecraft:planks',
            B: 'minecraft:red_wool',
            C: '#minecraft:logs',
            D: 'minecraft:dragon_egg'
        }
    )
})