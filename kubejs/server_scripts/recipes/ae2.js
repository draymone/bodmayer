onEvent('tags.items', event => {

  //Energy acceptor
  event.add('forge:storage_blocks/copper', ['minecraft:exposed_copper', 'minecraft:weathered_copper', 'minecraft:oxidized_copper'])

})


onEvent('recipes', event => {

  //Energy acceptor
  event.shaped('ae2:energy_acceptor', [
    'IGI',
    'GCG',
    'IGI'
  ], {
    I: 'minecraft:iron_block',
    G: 'ae2:quartz_glass',
    C: '#forge:storage_blocks/copper'
  }).id('bodmayer:ae2/energy_acceptor');
  event.shapeless('ae2:cable_energy_acceptor', ['ae2:energy_acceptor']).id('bodmayer:ae2/cable_energy_acceptor');
  event.remove({ id: 'ae2:network/blocks/energy_energy_acceptor'});

  //Energy cell
  event.shaped('ae2:energy_cell', [
    'QFQ',
    'FGF',
    'QFQ'
  ], {
    Q: 'ae2:quartz_block',
    F: 'ae2:fluix_block',
    G: 'ae2:quartz_glass'
  }).id('bodmayer:ae2/energy_cell');
  event.remove({ id: 'ae2:network/blocks/energy_energy_cell'})

  //Server
  event.shaped('ae2:drive', [
    'IPI',
    'C C',
    'IPI'
  ], {
    I: 'minecraft:iron_block',
    P: 'ae2:engineering_processor',
    C: 'ae2:fluix_glass_cable'
  }).id('bodmayer:ae2/drive');
  event.remove({ id: 'ae2:network/blocks/storage_drive'})

  //Security terminal
  event.shaped('ae2:security_station', [
    'ICI',
    'GRG',
    'IPI'
  ], {
    I: 'minecraft:iron_block',
    C: 'ae2:chest',
    G: 'ae2:fluix_glass_cable',
    R: 'ae2:cell_component_64k',
    P: 'ae2:engineering_processor'
  }).id('bodmayer:ae2/security_station');
  event.remove({ id: 'ae2:network/blocks/security_station'})

  //Quantum ring
  event.shaped('ae2:quantum_ring', [
    'ILI',
    'ECM',
    'ILI'
  ], {
    I: 'minecraft:iron_block',
    L: 'ae2:logic_processor',
    E: 'ae2:engineering_processor',
    C: 'ae2:dense_energy_cell',
    M: '#ae2:smart_dense_cable'
  }).id('bodmayer:ae2/quantum_ring');
  event.remove({ id: 'ae2:network/blocks/quantum_ring'})

  //Crafting units
  event.shapeless('ae2:4k_crafting_storage', ['ae2:1k_crafting_storage', 'ae2:cell_component_4k'])
  event.shapeless('ae2:16k_crafting_storage', ['ae2:4k_crafting_storage', 'ae2:cell_component_16k'])
  event.shapeless('ae2:64k_crafting_storage', ['ae2:16k_crafting_storage', 'ae2:cell_component_64k'])
  event.shapeless('ae2:256k_crafting_storage', ['ae2:64k_crafting_storage', 'ae2:cell_component_256k'])

  event.remove({ id: 'ae2:network/crafting/4k_cpu_crafting_storage'});
  event.remove({ id: 'ae2:network/crafting/16k_cpu_crafting_storage'});
  event.remove({ id: 'ae2:network/crafting/64k_cpu_crafting_storage'});
  event.remove({ id: 'ae2:network/crafting/256k_cpu_crafting_storage'});
})
