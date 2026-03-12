ServerEvents.recipes(event => {
    event.custom({
        "type": "oritech:grinder",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "ae2:fluix_crystal"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "ae2:fluix_dust"
            }
        ],
        "time": 60
    })
    event.custom({
        "type": "oritech:grinder",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "extendedae:entro_crystal"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "extendedae:entro_dust"
            }
        ],
        "time": 60
    })
    event.custom(
        {
            "type": "botanypots:crop",
            "input": {
                "item": "extendedae:entro_crystal"
        },
            "soil": {
            "item": "extendedae:entro_block"
        },
            "grow_time": 1200,
            "display": {
                "type": "botanypots:simple",
                "block_state": {
                    "block": "extendedae:entro_cluster"
                }
            },
            "drops": [{
            "type": "botanypots:items",
            "items": [{
                "result": {
                    "id": "extendedae:entro_crystal"
                },
                "chance": 1.0
            }]
        }],
            "yield": 2.5,
            "yield_scale": 1.0
        }
    )
})