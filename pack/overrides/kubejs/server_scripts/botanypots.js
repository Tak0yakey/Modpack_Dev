ServerEvents.tags('item',event =>{
    Ingredient.of(/botanypots:.*bricks.*botany_pot/).itemIds.forEach(pots => {
        event.add('botanypots:botany_pots',pots)
    });
    Ingredient.of(/botanypotstiers:.*elite.*bricks.*botany_pot/).itemIds.forEach(pots => {
        if(pots.includes('hopper')){
            event.add('botanypotstiers:elite_hopper_botany_pots',pots)
        }
        else{
            event.add('botanypotstiers:elite_botany_pots',pots)
        }
    });
    Ingredient.of(/botanypotstiers:.*ultra.*bricks.*botany_pot/).itemIds.forEach(pots => {
        if(pots.includes('hopper')){
            event.add('botanypotstiers:ultra_hopper_botany_pots',pots)
        }
        else{
            event.add('botanypotstiers:ultra_botany_pots',pots)
        }
    });
    Ingredient.of(/botanypotstiers:.*mega.*bricks.*botany_pot/).itemIds.forEach(pots => {
        if(pots.includes('hopper')){
            event.add('botanypotstiers:mega_hopper_botany_pots',pots)
        }
        else{
            event.add('botanypotstiers:mega_botany_pots',pots)
        }
    });
})


ServerEvents.recipes(event => {
    Ingredient.of('#botanypots:botany_pots').itemIds.forEach(pots =>{
        event.remove({ output: pots })
    })
    Ingredient.of('#botanypotstiers:elite_botany_pots').itemIds.forEach(pots =>{
        event.remove({ output: pots })
    })
    Ingredient.of('#botanypotstiers:ultra_botany_pots').itemIds.forEach(pots =>{
        event.remove({ output: pots })
    })
    Ingredient.of('#botanypotstiers:mega_botany_pots').itemIds.forEach(pots =>{
        event.remove({ output: pots })
    })
    Ingredient.of('#botanypotstiers:elite_waxed_botany_pots').itemIds.forEach(pots =>{
        event.remove({ output: pots })
    })
    Ingredient.of('#botanypotstiers:ultra_waxed_botany_pots').itemIds.forEach(pots =>{
        event.remove({ output: pots })
    })
    Ingredient.of('#botanypotstiers:mega_waxed_botany_pots').itemIds.forEach(pots =>{
        event.remove({ output: pots })
    })
    Ingredient.of('#botanypotstiers:elite_hopper_botany_pots').itemIds.forEach(pots =>{
        event.remove({ output: pots })
    })
    Ingredient.of('#botanypotstiers:ultra_hopper_botany_pots').itemIds.forEach(pots =>{
        event.remove({ output: pots })
    })
    Ingredient.of('#botanypotstiers:mega_hopper_botany_pots').itemIds.forEach(pots =>{
        event.remove({ output: pots })
    })
    // Ingredient.of('#dimbotanypots:botany_pots').itemIds.forEach(pots =>{
    //     event.remove({ output: pots })
    // })
    event.remove({ id: 'dimbotanypots:elite_dimensional_botany_pot'})
    event.remove({ id: 'dimbotanypots:ultra_dimensional_botany_pot'})
    event.remove({ id: 'dimbotanypots:mega_dimensional_botany_pot'})
    event.remove({ id: 'botanypotstiers:elite_upgrade'})
    event.remove({ id: 'botanypotstiers:ultra_upgrade'})
    event.remove({ id: 'botanypotstiers:mega_upgrade'})

    event.custom(
        {
            "type": "oritech:particle_collision",
            "fluidInput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "fluidOutputs": [],
            "ingredients": [
                {
                    "item": "immersiveengineering:cloche"
                },
                {
                    "item": "mysticalagriculture:supremium_essence"
                }
            ],
            "results": [
                {
                    "count": 1,
                    "id": "botanypots:terracotta_hopper_botany_pot"
                }
            ],
            "time": 15000
        }
    )
    event.shapeless(
        Item.of('botanypotstiers:elite_terracotta_hopper_botany_pot',1),
        [
            'botanypots:terracotta_hopper_botany_pot',
            'minecraft:nether_star',
            'minecraft:nether_star',
            'minecraft:nether_star',
            'minecraft:nether_star'
        ]
    )
    event.shapeless(
        Item.of('botanypotstiers:ultra_terracotta_hopper_botany_pot',1),
        [
            'botanypotstiers:elite_terracotta_hopper_botany_pot',
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence'
        ]
    )
    event.shapeless(
        Item.of('botanypotstiers:mega_terracotta_hopper_botany_pot',1),
        [
            'botanypotstiers:ultra_terracotta_hopper_botany_pot',
            'oritech:machine_core_7',
            'oritech:machine_core_7'
        ]
    )
    event.shapeless(
        Item.of('dimbotanypots:elite_dimensional_botany_pot',1),
        [
            'dimbotanypots:dimensional_botany_pot',
            'minecraft:nether_star',
            'minecraft:nether_star',
            'minecraft:nether_star',
            'minecraft:nether_star'
        ]
    )
    event.shapeless(
        Item.of('dimbotanypots:ultra_dimensional_botany_pot',1),
        [
            'dimbotanypots:elite_dimensional_botany_pot',
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence'
        ]
    )
    event.shapeless(
        Item.of('dimbotanypots:mega_dimensional_botany_pot',1),
        [
            'dimbotanypots:ultra_dimensional_botany_pot',
            'oritech:machine_core_7',
            'oritech:machine_core_7'
        ]
    )
    event.shapeless(
        Item.of('botanypotstiers:elite_upgrade',1),
        [
            'minecraft:nether_star',
            'minecraft:nether_star',
            'minecraft:nether_star',
            'minecraft:nether_star'
        ]
    )
    event.shapeless(
        Item.of('botanypotstiers:elite_upgrade',1),
        [
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence'
        ]
    )
    event.shapeless(
        Item.of('botanypotstiers:mega_upgrade',1),
        [
            'oritech:machine_core_7',
            'oritech:machine_core_7'
        ]
    )
})