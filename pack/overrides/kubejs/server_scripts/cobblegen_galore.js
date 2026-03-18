ServerEvents.recipes(event => {
    Ingredient.of('#cobblegengalore:block_generators').itemIds.forEach(gen =>{
        if(gen != 'cobblegengalore:block_gen_stone')
            event.remove({ output: gen })
    })

    event.shaped(
        Item.of('cobblegengalore:block_gen_copper',1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:glass',
            C: 'cobblegengalore:block_gen_stone'
        }
    )
    event.shaped(
        Item.of('cobblegengalore:block_gen_iron',1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:glass',
            C: 'cobblegengalore:block_gen_copper'
        }
    )
    event.shaped(
        Item.of('cobblegengalore:block_gen_gold',1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:glass',
            C: 'cobblegengalore:block_gen_iron'
        }
    )
    event.shaped(
        Item.of('cobblegengalore:block_gen_emerald',1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'minecraft:emerald',
            B: 'minecraft:glass',
            C: 'cobblegengalore:block_gen_gold'
        }
    )
    event.shaped(
        Item.of('cobblegengalore:block_gen_diamond',1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'minecraft:diamond',
            B: 'minecraft:glass',
            C: 'cobblegengalore:block_gen_emerald'
        }
    )
    event.shaped(
        Item.of('cobblegengalore:block_gen_netherite',1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'minecraft:netherite_ingot',
            B: 'minecraft:glass',
            C: 'cobblegengalore:block_gen_diamond'
        }
    )
})