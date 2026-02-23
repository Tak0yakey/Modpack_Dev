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
})