ServerEvents.recipes(event => {
    const spawn_eggs = Ingredient.of('%minecraft:spawn_eggs').itemIds
    spawn_eggs.forEach(spawn_egg => {
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
})