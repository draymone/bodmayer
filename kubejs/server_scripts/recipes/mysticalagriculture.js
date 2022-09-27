onEvent('recipes', event => {

    //Energy acceptor
    event.shaped('mysticalagriculture:supremium_sword', [
      ' G ',
      'ISI',
      ' G '
    ], {
      G: 'mysticalagriculture:supremium_gemstone_block',
      I: 'mysticalagriculture:supremium_ingot_block',
      S: 'mysticalagriculture:imperium_sword'
    }).id('bodmayer:mysticalagriculture/supremium_sword');

    event.remove({ id: 'mysticalagriculture:supremium_sword'});
  })
  