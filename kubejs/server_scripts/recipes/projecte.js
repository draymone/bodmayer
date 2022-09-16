onEvent('recipes', event => {
    event.shaped('projecte:philosophers_stone', [
        'ITI',
        'CSC',
        'FTF'
    ], {
        I: 'mysticalagradditions:insanium_ingot_block',
        T: 'botania:terrasteel_block',
        C: 'mekanism:ultimate_induction_cell',
        S: 'ae2:cell_component_256k',
        F: 'elementalcraft:fireite_block'
    }).id('bodmayer:projecte/philosophers_stone');

    event.remove({ id: 'projecte:philosophers_stone' });
    event.remove({ id: 'projecte:philosophers_stone_alt' });
})