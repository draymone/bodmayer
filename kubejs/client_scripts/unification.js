onEvent('jei.hide.items', event => {
    //Uranium
    event.hide(['immersiveengineering:raw_block_uranium', 'immersiveengineering:storage_uranium', 'immersiveengineering:ingot_uranium', 'immersiveengineering:raw_uranium', 'immersiveengineering:dust_uranium', 'immersiveengineering:nugget_uranium', 'immersiveengineering:ore_uranium', 'immersiveengineering:deepslate_ore_uranium', 'immersiveengineering:slab_storage_uranium']);

    //Lead
    event.hide(['immersiveengineering:nugget_lead', 'immersiveengineering:ore_lead', 'immersiveengineering:deepslate_ore_lead', 'immersiveengineering:storage_lead', 'immersiveengineering:raw_block_lead', 'immersiveengineering:raw_lead', 'immersiveengineering:ingot_lead', 'immersiveengineering:plate_lead', 'immersiveengineering:dust_lead', 'mekanism:dirty_dust_lead', 'mekanism:shard_lead', 'mekanism:nugget_lead', 'mekanism:lead_ore', 'mekanism:deepslate_lead_ore', 'mekanism:block_lead', 'mekanism:block_raw_lead', 'mekanism:raw_lead', 'mekanism:ingot_lead', 'mekanism:crystal_lead', 'mekanism:clump_lead', 'mekanism:dust_lead', 'immersiveengineering:wire_lead'])

    //Gears
    event.hide(['industrialforegoing:iron_gear', 'industrialforegoing:gold_gear', 'industrialforegoing:diamond_gear']);

    //Tin
    event.hide(['mekanism:dust_tin', 'mekanism:ingot_tin', 'mekanism:raw_tin', 'mekanism:nugget_tin', 'mekanism:block_tin', 'mekanism:tin_ore', 'mekanism:deepslate_tin_ore', 'mekanism:block_raw_tin']);
    
    //Steel
    event.hide(['immersiveengineering:storage_steel', 'immersiveengineering:nugget_steel', 'immersiveengineering:ingot_steel', 'immersiveengineering:dust_steel', 'mekanismtools:steel_boots', 'immersiveengineering:armor_steel_chest', 'immersiveengineering:armor_steel_head', 'immersiveengineering:armor_steel_legs', 'immersiveengineering:armor_steel_feet', 'mekanismtools:steel_helmet', 'mekanismtools:steel_chestplate', 'mekanismtools:steel_leggings', 'mekanismtools:steel_paxel', 'mekanismtools:steel_hoe', 'mekanismtools:steel_sword', 'immersiveengineering:sword_steel', 'immersiveengineering:hoe_steel', 'immersiveengineering:shovel_steel', 'mekanismtools:steel_shovel', 'mekanismtools:steel_axe', 'immersiveengineering:axe_steel', 'immersiveengineering:pickaxe_steel', 'mekanismtools:steel_pickaxe'])

    //Netherite nugget
    event.hide(['cyclic:netherite_nugget', 'tconstruct:netherite_nugget']);

    //Diamond dust
    event.hide('thermal:diamond_dust');

    //Iron dust
    event.hide(['immersiveengineering:dust_iron', 'thermal:iron_dust', 'occultism:iron_dust']);

    //Nickel
    event.hide(['immersiveengineering:ore_nickel', 'immersiveengineering:deepslate_ore_nickel', 'immersiveengineering:raw_nickel', 'immersiveengineering:raw_block_nickel', 'immersiveengineering:ingot_nickel', 'immersiveengineering:storage_nickel', 'immersiveengineering:slab_storage_nickel', 'immersiveengineering:dust_nickel', 'immersiveengineering:nugget_nickel', 'immersiveengineering:plate_nickel']);

})