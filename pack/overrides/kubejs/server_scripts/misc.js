ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:ochre_froglight',8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:shroomlight',
            B: 'minecraft:yellow_dye'
        }
    )
    event.shaped(
        Item.of('minecraft:verdant_froglight',8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:shroomlight',
            B: 'minecraft:lime_dye'
        }
    )
    event.shaped(
        Item.of('minecraft:pearlescent_froglight',8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:shroomlight',
            B: 'minecraft:magenta_dye'
        }
    )
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
                    "item": "minecraft:egg"
                },
                {
                    "item": "minecraft:dragon_breath"
                }
            ],
            "results": [
                {
                    "count": 1,
                    "id": "minecraft:dragon_egg"
                }
            ],
            "time": 15000
        }
    )
})