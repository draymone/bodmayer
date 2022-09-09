//Remove tags
onEvent('tags.items', event => {
    //Uranium
    event.removeAllTagsFrom(['immersiveengineering:raw_block_uranium', 'immersiveengineering:storage_uranium', 'immersiveengineering:ingot_uranium', 'immersiveengineering:raw_uranium', 'immersiveengineering:dust_uranium', 'immersiveengineering:nugget_uranium', 'immersiveengineering:ore_uranium', 'immersiveengineering:deepslate_ore_uranium', 'immersiveengineering:slab_storage_uranium']);
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
})