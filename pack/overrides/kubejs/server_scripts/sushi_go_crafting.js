ServerEvents.recipes(event => {
    event.custom({
        'type': 'create:pressing',
        'ingredients': [
            {
                'item': 'minecraft:dried_kelp'
            }
        ],
        'results': [
            {
                'id': 'sushigocrafting:nori_sheets'
            }
        ]
    })
})