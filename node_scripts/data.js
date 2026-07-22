export const blocks = {
}

const item_categories = {
    "gregtech:casings": {
        type: "blocks",
        texture_base: "casings",
        folder: "casings",
        items: {
            'gregtech:coke_oven_bricks': {},
            'gregtech:firebricks': {},
            'gregtech:bricked_bronze_casing': {},
            'gregtech:solid_steel_machine_casing': {},
            'gregtech:clean_stainless_steel_casing': {},
            'gregtech:stable_titanium_machine_casing': {},
            'gregtech:robust_tungstensteel_machine_casing': {},
            'gregtech:heat_proof_invar_machine_casing': {},
            'gregtech:chemically_inert_ptfe_machine_casing': {},
            'gregtech:frost_proof_aluminium_machine_casing': {},
            'gregtech:palladium_substation': {},
            'gregtech:stainless_evaporation_casing': {},
            'gregtech:sturdy_hsse_machine_casing': {},
        }
    }
}

for (const [category_id, category] of Object.entries(item_categories)) {
    if (category.type == "blocks") {
        Object.assign(blocks, category.items)
        for (const [block_id, block] of Object.entries(category.items)) {
            block.shorthand = block_id.split(':').pop()
            block.folder = category.folder
            if (!block.texture) block.texture = `${category.texture_base}/${block.shorthand}`
        }
    }
}