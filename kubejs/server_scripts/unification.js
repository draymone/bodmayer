//Remove tags
onEvent('tags.items', event => {
    //Uranium
    event.removeAllTagsFrom(['immersiveengineering:raw_block_uranium', 'immersiveengineering:storage_uranium', 'immersiveengineering:ingot_uranium', 'immersiveengineering:raw_uranium', 'immersiveengineering:dust_uranium', 'immersiveengineering:nugget_uranium', 'immersiveengineering:ore_uranium', 'immersiveengineering:deepslate_ore_uranium', 'immersiveengineering:slab_storage_uranium']);

    //Lead
    event.removeAllTagsFrom(['immersiveengineering:nugget_lead', 'immersiveengineering:ore_lead', 'immersiveengineering:deepslate_ore_lead', 'immersiveengineering:storage_lead', 'immersiveengineering:raw_block_lead', 'immersiveengineering:raw_lead', 'immersiveengineering:ingot_lead', 'immersiveengineering:plate_lead', 'immersiveengineering:dust_lead', 'mekanism:dirty_dust_lead', 'mekanism:shard_lead', 'mekanism:nugget_lead', 'mekanism:lead_ore', 'mekanism:deepslate_lead_ore', 'mekanism:block_lead', 'mekanism:block_raw_lead', 'mekanism:raw_lead', 'mekanism:ingot_lead', 'mekanism:crystal_lead', 'mekanism:clump_lead', 'mekanism:dust_lead', 'immersiveengineering:wire_lead'])

    //Gears
    event.removeAllTagsFrom(['industrialforegoing:iron_gear', 'industrialforegoing:gold_gear', 'industrialforegoing:diamond_gear']);

    //Tin
    event.removeAllTagsFrom(['mekanism:dust_tin', 'mekanism:ingot_tin', 'mekanism:raw_tin', 'mekanism:nugget_tin', 'mekanism:block_tin', 'mekanism:tin_ore', 'mekanism:deepslate_tin_ore', 'mekanism:block_raw_tin']);

    //Steel
    event.removeAllTagsFrom(['immersiveengineering:storage_steel', 'immersiveengineering:nugget_steel', 'immersiveengineering:ingot_steel', 'immersiveengineering:dust_steel', 'mekanismtools:steel_boots', 'immersiveengineering:armor_steel_chest', 'immersiveengineering:armor_steel_head', 'immersiveengineering:armor_steel_legs', 'immersiveengineering:armor_steel_feet', 'mekanismtools:steel_helmet', 'mekanismtools:steel_chestplate', 'mekanismtools:steel_leggings', 'mekanismtools:steel_paxel', 'mekanismtools:steel_hoe', 'mekanismtools:steel_sword', 'immersiveengineering:sword_steel', 'immersiveengineering:hoe_steel', 'immersiveengineering:shovel_steel', 'mekanismtools:steel_shovel', 'mekanismtools:steel_axe', 'immersiveengineering:axe_steel', 'immersiveengineering:pickaxe_steel', 'mekanismtools:steel_pickaxe'])
})

onEvent('tags.blocks', event => {
    //Steel
    event.removeAllTagsFrom('immersiveengineering:storage_steel')
})

//Remove crafts
onEvent('recipes', event => {
    //Uranium
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium_from_blasting" });
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium" });
    event.remove({ id: "thermal:furnace_1361896371" })
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium_from_blasting2" });
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium2" });
    event.remove({ id: "thermal:furnace_857077419" });
    event.remove({ id: "immersiveengineering:crafting/raw_uranium_to_raw_block_uranium" });
    event.remove({ id: "immersiveengineering:crafting/raw_block_uranium_to_raw_uranium" });
    event.remove({ id: "immersiveengineering:crafting/ingot_uranium_to_storage_uranium" });
    event.remove({ id: "immersiveengineering:crafting/storage_uranium_from_slab" });
    event.remove({ id: "immersiveengineering:crafting/storage_uranium_to_slab" });
    event.remove({ id: "immersiveengineering:crafting/storage_uranium_to_ingot_uranium" });
    event.remove({ id: "immersiveengineering:crafting/ingot_uranium_to_nugget_uranium" });
    event.remove({ id: "immersiveengineering:crafting/nugget_uranium_to_ingot_uranium" });
    event.remove({ id: "create:blasting/ingot_uranium_compat_immersiveengineering" });
    event.remove({ id: "create:smelting/ingot_uranium_compat_immersiveengineering" });
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium_from_blasting3" });
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium_from_blasting" });
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium_from_dust_from_blasting" });
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium3" });
    event.remove({ id: "immersiveengineering:smelting/ingot_uranium_from_dust" });
    event.remove({ id: "create:splashing/immersiveengineering/crushed_uranium_ore" });

    //Lead
    event.remove({ output: ['immersiveengineering:nugget_lead', 'mekanism:ingot_lead', 'immersiveengineering:ingot_lead', 'immersiveengineering:storage_lead', 'immersiveengineering:raw_block_lead', 'immersiveengineering:raw_lead', 'immersiveengineering:ore_lead', 'immersiveengineering:plate_lead', 'immersiveengineering:dust_lead', 'mekanism:lead_ore', 'mekanism:dust_lead', 'mekanism:block_lead', 'immersiveengineering:deepslate_ore_lead', 'mekanism:deepslate_lead_ore', 'mekanism:block_raw_lead', 'mekanism:nugget_lead', 'mekanism:raw_lead', 'mekanism:dirty_dust_lead', 'mekanism:block_raw_tin'] })

    //Gear
    event.remove({ output: ['industrialforegoing:gold_gear', 'industrialforegoing:diamond_gear', 'industrialforegoing:iron_gear'] });

    //Tin
    event.custom({
        "type": "mekanism:combining",
        "mainInput": {
            "amount": 8,
            "ingredient": {
                "tag": "forge:raw_materials/tin"
            }
        },
        "extraInput": {
            "ingredient": {
                "tag": "forge:cobblestone/normal"
            }
        },
        "output": {
            "item": "thermal:tin_ore"
        }
    });
    event.custom({
        "type": "mekanism:combining",
        "mainInput": {
            "amount": 8,
            "ingredient": {
                "tag": "forge:raw_materials/tin"
            }
        },
        "extraInput": {
            "ingredient": {
                "tag": "forge:cobblestone/deepslate"
            }
        },
        "output": {
            "item": "thermal:deepslate_tin_ore"
        }
    });
    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "tag": "forge:ingots/tin"
            }
        },
        "output": {
            "item": "thermal:dust_tin"
        }
    });
    event.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "tag": "forge:ores/tin"
            }
        },
        "output": {
            "item": "thermal:tin_dust",
            "count": 2
        }
    });
    event.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "item": "mekanism:dirty_dust_tin"
            }
        },
        "output": {
            "item": "thermal:tin_dust",
            "count": 1
        }
    });
    event.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "item": "thermal:raw_tin_block"
            }
        },
        "output": {
            "item": "thermal:tin_dust",
            "count": 12
        }
    });
    event.custom({
        "type": "mekanism:enriching",
        "input": {
            "amount": 3,
            "ingredient": {
                "item": "thermal:raw_tin"
            }
        },
        "output": {
            "item": "thermal:tin_dust",
            "count": 4
        }
    });
    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "item": "thermal:tin_ingot"
            }
        },
        "output": {
            "item": "thermal:tin_dust"
        }
    });
    event.remove({ output: ['mekanism:dust_tin', 'mekanism:ingot_tin', 'mekanism:raw_tin', 'mekanism:nugget_tin', 'mekanism:block_tin', 'mekanism:tin_ore', 'mekanism:deepslate_tin_ore', 'mekanism:block_raw_tin'] });
    event.remove({ id: 'thermal:furnace_1686165964' })

    //Steel
    event.remove({ output: ['immersiveengineering:sword_steel', 'immersiveengineering:hoe_steel', 'immersiveengineering:shovel_steel', 'mekanismtools:steel_shovel', 'mekanismtools:steel_axe', 'immersiveengineering:axe_steel', 'immersiveengineering:pickaxe_steel', 'mekanismtools:steel_pickaxe', 'mekanismtools:steel_helmet', 'mekanismtools:steel_chestplate', 'mekanismtools:steel_leggings', 'mekanismtools:steel_boots', 'immersiveengineering:armor_steel_feet', 'immersiveengineering:armor_steel_legs', 'immersiveengineering:armor_steel_chest', 'immersiveengineering:armor_steel_head', 'immersiveengineering:storage_steel', 'immersiveengineering:nugget_steel', 'immersiveengineering:ingot_steel', 'immersiveengineering:dust_steel', 'mekanismtools:steel_hoe', 'mekanismtools:steel_paxel', 'mekanismtools:steel_sword'] });
    event.remove({ id: 'mekanismtools:steel/nugget_from_blasting' });
    event.remove({ id: 'mekanismtools:steel/nugget_from_smelting' });
    event.remove({ id: 'thermalfurnace_1738181022:' });
    event.remove({ id: 'immersiveengineering:crafting/toolupgrade_revolver_bayonet' });
    event.shaped('immersiveengineering:toolupgrade_revolver_bayonet', [
        'WS',
        'IW'
    ], {
        W: 'immersiveengineering:wire_copper',
        I: 'mekanism:ingot_steel',
        S: 'mysticalagriculture:tertium_sword'
    }).id('bodmayer:immersiveengineering/revolver_bayonet');
})