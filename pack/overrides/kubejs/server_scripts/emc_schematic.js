ServerEvents.recipes(event => {
    event.shaped(
        Item.of('emcschematicannon:emc_schematic_cannon', 1),
        [
            ' G ',
            'GCG',
            ' G '
        ],
        {
            G: 'minecraft:glowstone',
            C: 'create:schematicannon'
        }
    )
})