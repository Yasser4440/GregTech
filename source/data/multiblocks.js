const multiblocks = { // exported at the end 
    electric_blast_furnace: {
        overlay: 'electric_blast_furnace',
        casing: 'heat_proof_invar_machine_casing'
    }
}

const casings = {
    coke_oven_bricks: {},
    firebricks: {},
    bricked_bronze_casing: {},
    solid_steel_machine_casing: {},
    clean_stainless_steel_casing: {},
    stable_titanium_machine_casing: {},
    robust_tungstensteel_machine_casing: {},
    heat_proof_invar_machine_casing: {},
    chemically_inert_ptfe_machine_casing: {},
    frost_proof_aluminium_machine_casing: {},
    palladium_substation: {},
    sturdy_hsse_machine_casing: {},
    // stainless_evaporation_casing: {},
}

export function make_controllers(blocks) {
    for (const [id, data] of Object.entries(multiblocks)) {
        const controller = {
            folder: 'multiblocks',
            flags: ['face_cardinals'],
            model: {
                '*': data.casing,
                south: id
            },
            textures: { [id]: `textures/blocks/multiblocks/${id}` },
            generated: [
                { action: 'merge',
                    base: `assets/textures/blocks/casings/${data.casing}.png`,
                    overlay: `raw_textures/multiblocks/overlay/${id}.png`,
                    path: `textures/blocks/multiblocks/${id}.png`
                }
            ]
        }
        blocks[id] = controller
    }
}

export function make_casings(blocks) {
    for (const [id, data] of Object.entries(casings)) {
        blocks[id] = {
            folder: 'casings',
            textures: { [id]: `textures/blocks/casings/${id}` }
        }
    }
}
