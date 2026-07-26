import { recursive_freeze } from "../node_scripts/utilities.js";

export const material_textures = {
    dull: 'dull', metallic: 'metallic', shiny: 'shiny', bright: 'bright', fine: 'fine', rough: 'rough',
    horizontal: 'horizontal', vertical: 'vertical', diamond: 'diamond', emerald: 'emerald', ruby: 'ruby', opal: 'opal',
    glass: 'glass', nether_star: 'nether_star', sand: 'sand', wood: 'wood',
    lignite: 'lignite', quartz: 'quartz', certus: 'certus', lapis: 'lapis', flint: 'flint',
    magnetic: 'magnetic', radioactive: 'radioactive'
}; export const material_textures_array = Object.values(material_textures)

export const fluid_pipe_properties = {
    gas_proof: 'gas_proof',
    acid_proof: 'acid_proof',
    cryogenic_proof: 'cryogenic_proof',
    plasma_proof: 'plasma_proof',
}; export const fluid_pipe_properties_array = Object.values(fluid_pipe_properties)

export const booster_gases = {
    nitrogen: { gas: 'nitrogen', amount: 1000 },
    helium: { gas: 'helium', amount: 100 },
    argon: { gas: 'argon', amount: 50 },
    neon: { gas: 'neon', amount: 25 },
    krypton: { gas: 'krypton', amount: 10 },
}; export const booster_gases_array = Object.values(booster_gases).map(gas => gas.gas)

export const voltage_tiers = {
    ULV: 0, LV: 1, MV: 2, HV: 3, EV: 4, IV: 5,
    LuV: 6, ZPM: 7, UV: 8, UHV: 8, UEV: 9, UIV: 10,
    UXV: 11, OpV: 12, MAX: 13,
}; for (const [v, n] of  Object.entries(voltage_tiers)) voltage_tiers[v] = {
    full: 2**(2 * n + 3),
    half: 2**(2 * n + 2),
    adjusted: (2**(2 * n + 3) - 2**(2 * n - 1)) | 0,
    adjusted_half: (2**(2 * n + 2) - 2**(2 * n - 2)) | 0,
}; recursive_freeze(voltage_tiers)
// Example: voltage_tiers.LV = { full: 32, half: 16, adjusted: 30, adjusted_half: 15 }


export const material_shapes = {
    // Dusts
    dust: 'dust',
    small_dust: 'small_dust',
    tiny_dust: 'tiny_dust',
    impure_dust: 'impure_dust',
    pure_dust: 'pure_dust',

    // Ores
    raw_ore: 'raw_ore',
    crushed_ore: 'crushed_ore',
    purified_ore: 'purified_ore',
    refined_ore: 'refined_ore',

    // Gems
    chipped_gem: 'chipped_gem',
    flawed_gem: 'flawed_gem',
    gem: 'gem',
    flawless_gem: 'flawless_gem',
    exquisite_gem: 'exquisite_gem',

    // Ingots, Plates, Rods
    ingot: 'ingot', double_ingot: 'double_ingot',
    hot_ingot: 'hot_ingot',
    plate: 'plate', double_plate: 'double_plate',
    rod: 'rod', long_rod: 'long_rod',

    // Other
    gear: 'gear', small_gear: 'small_gear',
    bolt: 'bolt', screw: 'screw',
    foil: 'foil', fine_wire: 'fine_wire',
    ring: 'ring', rotor: 'rotor',
    nugget: 'nugget', round: 'round',
    spring: 'spring', small_spring: 'small_spring',
    lens: 'lens',
    turbine_blade: 'turbine_blade',

    // Tool heads
    buzz_saw_tool_head: 'buzz_saw_tool_head',
    chainsaw_tool_head: 'chainsaw_tool_head',
    drill_tool_head: 'drill_tool_head',
    screwdriver_tool_head: 'screwdriver_tool_head',
    wirecutter_tool_head: 'wirecutter_tool_head',
    wrench_tool_head: 'wrench_tool_head',
}; export const material_shapes_array = Object.values(material_shapes)

export const material_forms = {
    dust: 'dust', ore: 'ore', gem: 'gem', ingot: 'ingot',
    fluid: 'fluid', liquid: 'liquid', gas: 'gas', plasma: 'plasma',
}; export const material_forms_array = Object.values(material_forms)

export const recipe_types = {
    chemical_reactor: 'chemical_reactor',
    mixer: 'mixer',
    centrifuge: 'centrifuge',
    electrolyzer: 'electrolyzer',
    large_chemical_reactor: 'large_chemical_reactor',
    distillation_tower: 'distillation_tower',
}; export const recipe_types_array = Object.values(recipe_types)

export const enchantments = {
    bane_of_arthropods: 'bane_of_arthropods',
    smite: 'smite',
    efficiency: 'efficiency',
    fortune: 'fortune',
}; export const enchantments_array = Object.values(enchantments)
