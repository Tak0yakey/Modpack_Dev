ServerEvents.recipes(event => {
    event.remove({ id: 'rftoolsutility:matter_transmitter' })
    event.remove({ id: 'rftoolsutility:matter_receiver' })
    event.remove({ id: 'rftoolsutility:advanced_charged_porter' })
    event.remove({ id: 'rftoolsutility:charged_porter' })
})