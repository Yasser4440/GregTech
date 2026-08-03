import { recursive_freeze } from "../scripts/utilities.js"
import { fluid_states_array, material_forms, material_shapes_array, recipe_name } from "./data.js"
import materials from "./materials.js"
import recipes from "./recipes/chemical_lines.js"
import {
    booster_gases_array as booster_gases,
    fluid_pipe_properties_array as fluid_pipe_properties,
    recipe_types_array as recipe_types,
    material_textures_array as textures,
    voltage_tiers,
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

const frozen_objects = [...Object.values(voltage_tiers)]
export function recursive_clone(object) {
    if (!object || typeof object != 'object') return object
    if (frozen_objects.includes(object)) return object
    if (Array.isArray(object)) return object.map(recursive_clone)
    const clone_object = {}
    for (const [key, value] of Object.entries(object)) clone_object[key] = recursive_clone(value)
    return clone_object
}

export function validate_materials() {
    // Define Values
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
    
    // Protect the original object
    const materials_clone = recursive_clone(materials); recursive_freeze(materials_clone)
    // Validate each material
    for (const [material_id, material] of Object.entries(materials_clone)) {
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
                // Expect voltage to be a voltage object
                if (!Object.values(voltage_tiers).includes(stats.voltage)) console.warn(`Expected voltage object at ${at}.voltage, Got ${typeof stats.voltage}: ${JSON.stringify(stats.voltage)}`)
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
                // Expect voltage to be a number if it was defined
                if ('voltage' in options) expect_type(options.voltage, 'number', `${at}.voltage`)
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
                // Expect voltage to be a number if it was defined
                if ('voltage' in options) expect_type(options.voltage, 'number', `${at}.voltage`)
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

export function validate_recipes() {
    // Define Values
    const allowed_properties = new Set([
        'machine', 'voltage', 'duration', 'inputs', 'outputs'
    ])
    const item_properties = new Set([
        'item', 'material', 'shape', 'fluid', 'state', 'amount'
    ])
    for (const recipe of recipes) {
        const at = recipe[recipe_name]
        find_unknown_keys(recipe, allowed_properties, at)
        // Check the recipe type
        if ('machine' in recipe) has_value(recipe_types, recipe.machine, `(${at}).machine`)
        // Check the voltage and duration
        if ('voltage' in recipe) expect_type(recipe.voltage, 'number', `(${at}).voltage`)
        if ('duration' in recipe) expect_type(recipe.duration, 'number', `(${at}).duration`)
        // Validate inputs type
        if ('inputs' in recipe) if (expect_type(recipe.inputs, 'array', `(${at}).inputs`)) recipe.inputs.forEach(input => {
            // Expect input to be an object
            if (expect_object(input, `(${at}).inputs`)) {
                // Report unknown properties
                find_unknown_keys(input, item_properties, at, `(${at}).inputs`)
                // Expect the amount to be a number
                if ('amount' in input) expect_type(input.amount, 'number', `(${at}).inputs.amount`)
                // When using a shaped material
                if ('material' in input) {
                    // Check if the material is defined
                    if (input.material in materials) {
                        const material = materials[input.material]
                        const shape = input.shape
                        // Check if this material has no shapes
                        const has_shapes = material.shapes.length || console.warn(`Using a material with no shapes: ${input.material}; at (${at}).inputs.shape`)
                        // Check if the shape is defined
                        const is_defined = has_shapes && 'shape' in input && has_value(material_shapes_array, shape, `(${at}).inputs.shape`)
                        // Check if the material has that shape
                        if (is_defined) if (!material.shapes.includes(shape)) console.warn(`The material ${input.material} missing the shape: ${shape}; at (${at}).inputs.shape`)
                    // Report unknown material 
                    } else console.warn(`Unknown material at (${at}).inputs: ${input.material}`)
                } else if ('fluid' in input) {
                    if (input.fluid in materials) {
                        const fluid = input.fluid, state = input.state, material = materials[fluid]
                        // Check if this material has a fluid form
                        const is_fluid = material.forms.includes(material_forms.fluid) || console.warn(`Material is not a fluid at (${at}).inputs.fluid: ${input.fluid}`)
                        // Check if the fluid state is valid
                        const is_real = is_fluid && 'state' in input && (fluid_states_array.includes(state) || console.warn(`Invalid fluid state at (${at}).inputs.state: ${state}`))
                        // check if the fluid has that fluid state
                        is_real && (material.forms.includes(state) || console.warn(`Fluid ${input.fluid} doesn't have a ${state} at (${at}).inputs.state`))
                    // Report unknown material 
                    } else console.warn(`Unknown material at (${at}).inputs: ${input.fluid}`)
                } else if ('item' in input) {

                } else console.log(`Recipe input missing an item value at (${at}).inputs`)
            }
        })
        // Validate outputs type
        if ('outputs' in recipe) if (expect_type(recipe.outputs, 'array', `(${at}).outputs`)) {
            
        }
    }
}