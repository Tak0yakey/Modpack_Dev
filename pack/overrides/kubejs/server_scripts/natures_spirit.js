ServerEvents.recipes(event => {
    event.custom({
        "type": "cobblegengalore:blockgen",
        "result": {
            "id": "natures_spirit:white_chalk",
            "count": 1
        },
        "speed": 2,
        "left": {
            "Name": "minecraft:water"
        },
        "right": {
            "Name": "minecraft:lava"
        },
        "modifier": {
            "Name": "natures_spirit:white_chalk"
        }
    })

    event.custom({
        "type": "cobblegengalore:blockgen",
        "result": {
            "id": "natures_spirit:chert",
            "count": 1
        },
        "speed": 2,
        "left": {
            "Name": "minecraft:water"
        },
        "right": {
            "Name": "minecraft:lava"
        },
        "modifier": {
            "Name": "natures_spirit:chert"
        }
    })

    event.shapeless(
        Item.of('natures_spirit:pink_sand',2),
        [
            'minecraft:sand',
            'minecraft:red_sand'
        ]
    )

    event.shapeless(
        Item.of('natures_spirit:cheese_bucket',1),
        [
            'refurbished_furniture:cheese',
            'refurbished_furniture:cheese',
            'minecraft:bucket'
        ]
    )
})