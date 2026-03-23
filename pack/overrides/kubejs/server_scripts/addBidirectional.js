ServerEvents.recipes(event => {
    function addBidirectional(itemA, itemB) {
        event.shapeless(Item.of(itemA, 1), [itemB])
        event.shapeless(Item.of(itemB, 1), [itemA])
    }

    addBidirectional('create:limestone', 'chisel:limestone/raw')
    addBidirectional('immersiveengineering:ingot_nickel', 'oritech:nickel_ingot')
    addBidirectional('immersiveengineering:ingot_electrum','oritech:electrum_ingot')
    addBidirectional('immersiveengineering:ingot_steel', 'oritech:steel_ingot')
})