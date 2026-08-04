const multiblocks = {
    electric_blast_furnace: {
        overlay: 'electric_blast_furnace',
        casing: 'heat_proof_invar_machine_casing'
    },
    large_chemical_reactor: {
        overlay: 'large_chemical_reactor',
        casing: 'chemically_inert_ptfe_machine_casing'
    },
    vacuum_freezer: {
        overlay: 'vacuum_freezer',
        casing: 'frost_proof_aluminium_machine_casing'
    }
}

const casings = {
    heat_proof_invar_machine_casing: {},
    chemically_inert_ptfe_machine_casing: { name: 'Chemically Inert PTFE Machine Casing'},
    coke_oven_bricks: {},
    firebricks: {},
    bricked_bronze_casing: {},
    solid_steel_machine_casing: {},
    clean_stainless_steel_casing: {},
    stable_titanium_machine_casing: {},
    robust_tungstensteel_machine_casing: {},
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
            states: { 'gregtech:status': ['idle', 'running', 'paused'] },
            permutations: [
                { condition: ['gregtech:status', 'running'], components: {
                    'minecraft:material_instances': {
                        '*': { texture: data.casing, render_method: 'opaque', _inline: true },
                        south: { texture: `${id}_active`, render_method: 'opaque', _inline: true }
                    }
                }},
                { condition: ['gregtech:status', 'paused'], components: {
                    'minecraft:material_instances': {
                        '*': { texture: data.casing, render_method: 'opaque', _inline: true },
                        south: { texture: `${id}_paused`, render_method: 'opaque', _inline: true }
                    }
                }},
            ],
            textures: {
                [id]: `textures/blocks/multiblocks/${id}`,
                [`${id}_active`]: `textures/blocks/multiblocks/running/${id}`,
                [`${id}_paused`]: `textures/blocks/multiblocks/paused/${id}`,
            },
            generated: [
                { action: 'merge',
                    base: `assets/textures/blocks/casings/${data.casing}.png`,
                    overlay: `raw_textures/multiblocks/idle/${id}.png`,
                    path: `textures/blocks/multiblocks/${id}.png`
                },
                { action: 'merge',
                    base: `assets/textures/blocks/casings/${data.casing}.png`,
                    overlay: `raw_textures/multiblocks/running/${id}.png`,
                    path: `textures/blocks/multiblocks/running/${id}.png`
                },
                { action: 'merge',
                    base: `assets/textures/blocks/casings/${data.casing}.png`,
                    overlay: `raw_textures/multiblocks/paused/${id}.png`,
                    path: `textures/blocks/multiblocks/paused/${id}.png`
                },
            ]
        }
        blocks[id] = controller
    }
}

export function make_casings(blocks) {
    for (const [id, data] of Object.entries(casings)) {
        blocks[id] = {
            folder: 'casings',
            name: data.name,
            textures: { [id]: `textures/blocks/casings/${id}` }
        }
    }
}
