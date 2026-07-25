import {
    booster_gases_array as booster_gases,
    fluid_pipe_properties_array as fluid_pipe_properties,
    material_textures_array as textures,
    voltage_tiers_array as voltage_tiers
} from "./data.js"

function expect_type(value, type, at) {
    if (type == 'array') {if (Array.isArray(value)) return true}
    else if (typeof value == type) return true
    console.warn(`Expected ${type} at ${at}, Got ${typeof value}: ${value}`)
}
function expect_object(value, at) {
    if (value && typeof value == 'object') return true
    else console.warn(`Expected an object at ${at}, Got ${typeof value}: ${value}`)
} 
function find_unknown_keys(object, set, at) {
    Object.keys(object).forEach(key => {
        if (!set.has(key)) console.warn(`Unknown property at ${at}: ${key}`)
    })
}
function has_value(array, value, at, type = 'string') {
    if (!expect_type(value, type, at)) return
    if (array.includes(value)) return true
    console.warn(`Unknown value at ${at}: ${value}`)
}

// Validate all the materials
const allowed_properties = new Set([
    'color', 'texture', // Appearance
    'element', 'compound', 'formula', // Chemistry
    'tool_stats', 'armor_stats', 'rotor_stats', // Equipment
    'cable_stats', 'fluid_pipe', 'item_pipe', // Blocks
    'blasting', 'cooling', // Recipes
    'name', 'forms', 'hazard', // Other
    // Work in Progress
    'flags',
    'liquid_stats',
    'properties',
    'attributes',
])
const element_structure = new Set(['symbol', 'p', 'n'])
const cable_stats = new Set(['voltage', 'amperage', 'loss', 'critical_temperature'])
const item_pipe_stats = new Set(['priority', 'speed'])
const fluid_pipe_stats = new Set(['temperature', 'throughput', 'properties'])
const rotor_stats = new Set(['power', 'efficiency', 'damage', 'durability'])
const blasting_options = new Set(['temperature', 'voltage', 'duration', 'booster_gas'])
const cooling_options = new Set(['voltage', 'duration'])

export function validate_materials(materials) {
    // Protect the original object
    materials = structuredClone(materials); freeze(materials)
    // Validate each material
    for (const [material_id, material] of Object.entries(materials)) {
        // Validate the material properties
        find_unknown_keys(material, allowed_properties, material_id)
        // Expect name to be a string
        if ('name' in material) expect_type(material.name, 'string', `${material_id}.name`)
        // Expect formula to be a string
        if ('formula' in material) expect_type(material.formula, 'string', `${material_id}.formula`)
        // Expect texture to be a string defined in textures
        if ('texture' in material) has_value(textures, material.texture, `${material_id}.texture`)
        
        if ('element' in material) {
            const name = 'element', element = material[name], at = `${material_id}.${name}`
            if (expect_object(element, at)) {
                // Report unknown properties
                find_unknown_keys(element, element_structure, at)
                // Expect to symbol be a string
                if ('symbol' in element) expect_type(element.symbol, 'string', `${at}.symbol`)
                // Report missing symbol
                else console.warn(`Property ${at}.symbol is missing`)
                // Expect p to be a number
                if ('p' in element) expect_type(element.p, 'number', `${at}.p`)
                // Expect n to be a number
                if ('n' in element) expect_type(element.n, 'number', `${at}.n`)
            }
        }
        if ('rotor_stats' in material) {
            const name = 'rotor_stats', stats = material[name], at = `${material_id}.${name}`
            if (expect_object(stats, at)) {
                // Report unknown properties
                find_unknown_keys(stats, rotor_stats, at)
                // Expect all rotor stats to be numbers
                rotor_stats.forEach(stat => {
                    // Expect every stat to be a number
                    if (stat in stats) expect_type(stats[stat], 'number', `${at}.${stat}`)
                })
            }
        }
        if ('cable_stats' in material) {
            const name = 'cable_stats', stats = material[name], at = `${material_id}.${name}`
            if (expect_object(stats, at)) {
                // Report unknown properties
                find_unknown_keys(stats, cable_stats, at)
                // Search for voltage in voltage_tiers
                has_value(voltage_tiers, stats.voltage, `${at}.voltage`)
                // Expect amperage to be a number
                expect_type(stats.amperage, 'number', `${at}.amperage`)
                // Expect loss to be a number
                if ('loss' in stats) expect_type(stats.loss, 'number', `${at}.loss`)
                // Expect critical temperature to be a number if it exists
                if ('critical_temperature' in stats) expect_type(
                    stats.critical_temperature, 'number',
                    `${at}.critical_temperature`
                )
            }
        }
        if ('item_pipe' in material) {
            const name = 'item_pipe', stats = material[name], at = `${material_id}.${name}`
            if (expect_object(stats, at)) {
                // Report unknown properties
                find_unknown_keys(stats, item_pipe_stats, at)
                // Expect each property to be a number
                item_pipe_stats.forEach(stat => expect_type(stats[stat], 'number', `${at}.${stat}`))
            }
        }
        if ('fluid_pipe' in material) {
            const name = 'fluid_pipe', stats = material[name], at = `${material_id}.${name}`
            if (expect_object(stats, at)) {
                // Report unknown properties
                find_unknown_keys(stats, fluid_pipe_stats, at)
                // Expect temperature to be a number
                expect_type(stats.temperature, 'number', `${at}.temperature`)
                // Expect throughput to be a number
                expect_type(stats.throughput, 'number', `${at}.throughput`)
                // Validate properties
                if ('properties' in stats) {
                    const properties = stats.properties
                    // Expect properties to be an array
                    if (expect_type(properties, 'array', `${at}.properties`)) {
                        // Search for each item in fluid_pipe_properties_array
                        properties.forEach(item => has_value(fluid_pipe_properties, item, `${at}.properties`))
                    }
                }
            }
        }
        if ('blasting' in material) {
            const name = 'blasting', options = material[name], at = `${material_id}.${name}`
            if (expect_object(options, at)) {
                // Report unknown properties
                find_unknown_keys(options, blasting_options, at)
                // Expect temperature to be a number
                expect_type(options.temperature, 'number', `${at}.temperature`)
                // Search for voltage in voltage_tiers if it was defined
                if ('voltage' in options) has_value(voltage_tiers, options.voltage, `${at}.voltage`)
                // Expect duration to be a number if it was defined
                if ('duration' in options) expect_type(options.duration, 'number', `${at}.duration`)
                // Search for the booster_gas in booster_gases_array if it was defined
                if ('booster_gas' in options) has_value(booster_gases, options.booster_gas, `${at}.booster_gas`)
            }
        }
        if ('cooling' in material) {
            const name = 'cooling', options = material[name], at = `${material_id}.${name}`
            if (expect_object(options, at)) {
                // Report unknown properties
                find_unknown_keys(options, cooling_options, at)
                // Search for voltage in voltage_tiers if it was defined
                if ('voltage' in options) has_value(voltage_tiers, options.voltage, `${at}.voltage`)
                // Expect duration to be a number if it was defined
                if ('duration' in options) expect_type(options.duration, 'number', `${at}.duration`)
            }
        }
        if ('color' in material) {
            const name = 'color', value = material[name], at = `${material_id}.${name}`
            const type = "a number, an array of 2 numbers, or a {liquid: number, gas: number} object"
            // Is it a number?
            if (typeof value == 'number') {/* All good! */}
            // Is it an array?
            else if (Array.isArray(value)) {
                // Check the length
                if (value.length == 2) {
                    // Check the first value
                    expect_type(value[0], 'number', `${at}[0]`)
                    // Check the second value
                    expect_type(value[1], 'number', `${at}[1]`)
                // Report invalid length
                } else console.warn(`Incorrect number of items at ${at}: ${value.length}; Expected 2`)
            // is it an object?
            } else if (value && typeof value == 'object') {
                // Report unknown properties
                find_unknown_keys(value, new Set(['liquid', 'gas']), at)
                // Check color.liquid
                expect_type(value.liquid, 'number', `${at}.liquid`)
                // Check color.gas
                expect_type(value.gas, 'number', `${at}.gas`)
            // otherwise, it's a wrong type.
            } else console.warn(`Expected ${type} at ${at}, Got ${typeof value}: ${JSON.stringify(value)}`)
        }
    }
}

export function freeze(object) {
    for (const value of Object.values(object)) if (value && typeof value == 'object') freeze(value)
    Object.freeze(object)
}