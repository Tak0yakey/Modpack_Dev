ServerEvents.recipes(event => {
    event.shaped(
        Item.of('createaddition:electric_motor',1),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            A: 'create:brass_sheet',
            B: 'createaddition:capacitor',
            C: 'createaddition:copper_spool',
            D: 'create:andesite_alloy'
        }
    )
    //event.remove({ id: 'createaddition:mechanical_crafting/electric_motor'})
    
    event.shaped(
        Item.of('create:cardboard_package_12x12',1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'create:cardboard',
            B: 'minecraft:paper'
        }
    )

    //trains
    event.remove({ id: 'create:sequenced_assembly/track' })
    event.remove({ id: 'create:crafting/kinetics/track_station' })
    event.remove({ id: 'create:crafting/kinetics/track_signal' })
    event.remove({ id: 'create:crafting/kinetics/track_observer' })
    event.remove({ id: 'create:crafting/kinetics/track_observer_from_other_plates' })
    event.remove({ id: 'create:crafting/kinetics/controls' })
    event.remove({ output: 'create:schedule' })
    const postboxes = Ingredient.of('#create:postboxes').itemIds
    Color.DYE.forEach(color =>{
        event.remove({output : postboxes})
    })

    //postlogistics
    event.remove({ id: 'create:crafting/logistics/stock_ticker'})
    event.remove({ id: 'create:crafting/logistics/stock_link'})
    event.remove({ id: 'create:crafting/logistics/redstone_requester'})
    event.remove({ id: 'create:crafting/logistics/factory_gauge'})
    const tableclothes = Ingredient.of('#create:table_cloths').itemIds
    tableclothes.forEach(tableclothe =>{
        event.remove({ output: tableclothe })
    })
    event.remove({ id: 'create:crafting/logistics/package_frogport'})
    event.remove({ id: 'create:crafting/logistics/package_filter'})
    event.remove({ id: 'create:crafting/logistics/repackager_from_conversion'})
    event.remove({ id: 'create:crafting/logistics/packager'})
})