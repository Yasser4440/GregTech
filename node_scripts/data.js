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
            'gregtech:sturdy_hsse_machine_casing': {},
            // 'gregtech:stainless_evaporation_casing': {},
        }
    },
    "gregtech_voltage_casings": {
        type: "blocks",
        folder: "machine_casings",
        texture: {
            up: (shorthand) => ({
                shorthand: `${shorthand}_top`,
                path: `voltage_casings/${shorthand.split('_')[0]}_top`
            }),
            side: (shorthand) => ({
                shorthand: `${shorthand}_side`,
                path: `voltage_casings/${shorthand.split('_')[0]}_side`
            }),
            down: (shorthand) => ({
                shorthand: `${shorthand}_bottom`,
                path: `voltage_casings/${shorthand.split('_')[0]}_bottom`
            }),
        },
        items: {
            'gregtech:ulv_machine_casing': { name: 'ULV Machine Casing' },
            'gregtech:lv_machine_casing': { name: 'LV Machine Casing' },
            'gregtech:mv_machine_casing': { name: 'MV Machine Casing' },
            'gregtech:hv_machine_casing': { name: 'HV Machine Casing' },
            'gregtech:ev_machine_casing': { name: 'EV Machine Casing' },
            'gregtech:iv_machine_casing': { name: 'IV Machine Casing' },
            'gregtech:luv_machine_casing': { name: 'LuV Machine Casing' },
            'gregtech:zpm_machine_casing': { name: 'ZPM Machine Casing' },
            'gregtech:uv_machine_casing': { name: 'UV Machine Casing' },
            'gregtech:uhv_machine_casing': { name: 'UHV Machine Casing' },
            'gregtech:uev_machine_casing': { name: 'UEV Machine Casing' },
            'gregtech:uiv_machine_casing': { name: 'UIV Machine Casing' },
            'gregtech:uxv_machine_casing': { name: 'UXV Machine Casing' },
            'gregtech:opv_machine_casing': { name: 'OpV Machine Casing' },
            'gregtech:max_machine_casing': { name: 'MAX Machine Casing' },
        }
    }
}

export const flipbooks = {
    "textures/blocks/voltage_casings/uhv_bottom": {
        ticks_per_frame: 20
    },
    "textures/blocks/voltage_casings/uhv_side": {
        ticks_per_frame: 20
    },
    "textures/blocks/voltage_casings/uhv_top": {
        ticks_per_frame: 20
    },
    "textures/blocks/voltage_casings/opv_bottom": {
        ticks_per_frame: 10
    },
    "textures/blocks/voltage_casings/opv_side": {
        ticks_per_frame: 10
    },
    "textures/blocks/voltage_casings/opv_top": {
        ticks_per_frame: 10
    },
    "textures/blocks/voltage_casings/max_side": {
        ticks_per_frame: 2,
        frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 4, 3, 2, 1]
    }
}

for (const [category_id, category] of Object.entries(item_categories)) {
    if (category.type == "blocks") {
        // Copy each item from this category to blocks
        Object.assign(blocks, category.items)
        // Set the shared properties of each block in the category
        for (const [block_id, block] of Object.entries(category.items)) {
            // Get the block shorthand
            block.shorthand = block_id.split(':').pop()
            // Set the blocks/folder name
            block.folder = category.folder
            // Set the shared geometry and material instances
            if (!block.model && category.model) {
                // Use the block geometry, otherwise the category geometry, otherwise full_block geometry
                if (!block.geometry) block.geometry = category.geometry ?? "minecraft:geometry.full_block"
                // Process the category model for each item
                block.model = Object.fromEntries(Object.entries(category.model).map(([side, value]) => {
                    const shorthand = typeof value == 'function' ? value(block.shorthand) : value
                    return [side, {_inline: true, texture: shorthand, render_method: category.render_method ?? "opaque"}]
                }))
            }
            else if (!block.texture) {
                // Process complex textures
                if (typeof category.texture == 'object') {
                    const textures = block.texture = {}
                    for (const [key, fun] of Object.entries(category.texture)) {
                        const instance = typeof fun == 'function' ? fun(block.shorthand) : block.shorthand
                        textures[key] = {shorthand: instance.shorthand, path: `textures/blocks/${instance.path}`}
                    }
                }
                // Process simple textures
                else block.texture = `textures/blocks/${category.texture_base}/${block.shorthand}`
            }
        }
    }
}