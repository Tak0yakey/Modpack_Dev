ServerEvents.recipes(event => {
    function addBidirectional(itemA, itemB) 
    {
        event.shapeless(Item.of(itemA, 1), [itemB])
        event.shapeless(Item.of(itemB, 1), [itemA])
    }

    function addMultiDirectional(items) {
        for (var i = 0; i < items.length; i++) {
            for (var j = i + 1; j < items.length; j++) {
                addBidirectional(items[i], items[j])
            }
        }
    }

    addBidirectional('create:limestone', 'chisel:limestone/raw')
    addBidirectional('natures_spirit:white_chalk','regions_unexplored:chalk')
    addBidirectional('immersiveengineering:ingot_nickel', 'oritech:nickel_ingot')
    addBidirectional('immersiveengineering:ingot_electrum','oritech:electrum_ingot')
    addBidirectional('oritech:biomass','createaddition:biomass')
    addMultiDirectional(['immersiveengineering:ingot_steel', 'oritech:steel_ingot','createdeco:industrial_iron_ingot'])
    addBidirectional('2x regions_unexplored:small_oak_sapling','minecraft:oak_sapling')
})