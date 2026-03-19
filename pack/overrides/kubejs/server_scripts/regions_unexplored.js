ServerEvents.recipes(event => {
    event.shaped(
        Item.of('regions_unexplored:peat_dirt',4),
        [
            'AB',
            'BA'
        ],
        {
            A: 'minecraft:dirt',
            B: 'minecraft:mud'
        }
    )
    event.shaped(
        Item.of('regions_unexplored:silt_dirt',4),
        [
            'AB',
            'BA'
        ],
        {
            A: 'minecraft:dirt',
            B: 'minecraft:clay'
        }
    )
    event.shaped(
        Item.of('regions_unexplored:volcanic_ash',2),
        [
            'AB',
            'BA'
        ],
        {
            A: 'regions_unexplored:ash',
            B: 'minecraft:black_dye'
        }
    )
})