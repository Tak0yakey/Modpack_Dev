ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('etched:portal_radio',1),
        [
            'etched:radio',
            'justdirethings:portal_fluid_catalyst'
        ]
    )
    event.shaped(
        Item.of('etched:blank_music_disc',1),
        [
            ' A ',
            'A A',
            ' A '
        ],
        {
            A: '#c:plates/plastic'
        }
    )
})