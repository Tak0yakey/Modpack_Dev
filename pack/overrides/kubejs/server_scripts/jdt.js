ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "botanypots:crop",
            "input": {
                "item": "justdirethings:time_crystal"
        },
            "soil": {
            "item": "justdirethings:time_crystal_block"
        },
            "grow_time": 1200,
            "display": {
                "type": "botanypots:simple",
                "block_state": {
                    "block": "justdirethings:time_crystal_cluster"
                }
            },
            "drops": [{
            "type": "botanypots:items",
            "items": [{
                "result": {
                    "id": "justdirethings:time_crystal"
                },
                "chance": 1.0
            }]
        }],
            "yield": 2.5,
            "yield_scale": 1.0
        }
    )
    event.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "amount": 1000,
            "fluid": "minecraft:water"
        },
        "fluidOutputs": [{
            "amount": 1000,
            "fluid": "justdirethings:polymorphic_fluid_source"
        }],
        "ingredients": [{
            "item": "justdirethings:polymorphic_catalyst"
        }],
        "results": [],
        "time": 100
    })
    event.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "amount": 1000,
            "fluid": "justdirethings:polymorphic_fluid_source"
        },
        "fluidOutputs": [{
            "amount": 1000,
            "fluid": "justdirethings:unstable_portal_fluid_source"
        }],
        "ingredients": [{
            "item": "justdirethings:portal_fluid_catalyst"
        }],
        "results": [],
        "time": 100
    })
    event.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "amount": 1000,
            "fluid": "justdirethings:unstable_portal_fluid_source"
        },
        "fluidOutputs": [{
            "amount": 1000,
            "fluid": "justdirethings:portal_fluid_source"
        }],
        "ingredients": [{
            "item": "minecraft:sculk"
        }],
        "results": [],
        "time": 100
    })
    event.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "amount": 1000,
            "fluid": "justdirethings:polymorphic_fluid_source"
        },
        "fluidOutputs": [{
            "amount": 1000,
            "fluid": "justdirethings:time_fluid_source"
        }],
        "ingredients": [{
            "item": "justdirethings:time_crystal"
        }],
        "results": [],
        "time": 100
    })
})