onEvent('recipes', event => {

    event.remove({ id: 'torcherino:torcherino' })
    event.remove({ id: 'torcherino:compressed_torcherino' })
    event.remove({ id: 'torcherino:double_compressed_torcherino' })

    event.remove({ id: 'torcherino:compressed_torcherino_to_single' })
    event.remove({ id: 'torcherino:double_compressed_torcherino_to_compressed' })

    event.shaped('torcherino:torcherino', [
        'CSC',
        'MTM',
        'CSC'
    ], {
        C: 'ae2:cell_component_16k',
        S: 'mysticalagriculture:supremium_ingot_block',
        M: 'botania:manasteel_block',
        T: 'minecraft:torch',
    }).id('bodmayer:torcherino/torcherino');

    event.shaped('torcherino:compressed_torcherino', [
        'CIC',
        'STS',
        'CIC'
    ], {
        C: 'mekanism:ultimate_control_circuit',
        I: 'mysticalagradditions:insanium_ingot_block',
        S: 'botania:terrasteel_block',
        T: 'torcherino:torcherino',
    }).id('bodmayer:torcherino/compressed_torcherino');

})