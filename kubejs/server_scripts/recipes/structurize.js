onEvent('recipes', event => {
    event.remove({ id: 'structurize:spectergold' });
    event.remove({ id: 'structurize:spectersteel' });

    event.shaped('structurize:sceptergold', [
        'C  ',
        ' S ',
        '  S'
    ], {
        S: 'minecraft:stick',
        C: '#minecraft:stone_tool_material'
    }).id('bodmayer:structurize/build_tool');

    event.shaped('structurize:sceptersteel', [
        'I  ',
        ' S ',
        '  S'
    ], {
        S: 'minecraft:stick',
        O: 'minecraft:iron_ingot'
    }).id('bodmayer:structurize/scan_tool');
})