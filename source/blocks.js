import fs from "node:fs"
import { add_newline, format_json, snake_to_title } from "../scripts/utilities.js";
import { execFileSync } from "node:child_process";
import { aseprite } from "../scripts/local_settings.js";

import { make_controllers as make_multiblock_controllers, make_casings as make_multiblock_casings } from "./data/multiblocks.js"
import { make_casings as make_voltage_casings } from "./data/machines.js";
import flipbooks from "./data/flipbooks.js";

// Create a container for all the blocks
const blocks = {}

// Populate the blocks object
make_multiblock_casings(blocks)
make_multiblock_controllers(blocks)
make_voltage_casings(blocks)
// make_voltage_machines(blocks)

// Save the ids in the block objects
Object.entries(blocks).forEach(([id, block]) => block.id = id);

// Generate all the block files
export function make_blocks(bp, rp, texts) {
    // Build blocks.json file
    const blocks_json = { format_version: [1, 21, 40] }
    add_newline(blocks_json)
    // Build terrain_textures.json
    const terrain_textures = { resource_pack_name: "GregTech UBP", texture_name: "atlas.terrain" }
    add_newline(terrain_textures); const texture_data = terrain_textures.texture_data = {}
    // Build flipbook_textures.json
    const flipbook_textures = []
    // Build BP/blocks
    for (const block of Object.values(blocks)) {
        // Construct the identifier
        const identifier = `${block.namespace ?? 'gregtech'}:${block.id}`
        // Write the destination folder path
        const location = `${bp}/blocks/${block.folder ? block.folder + '/' : ''}`
        // Create the destination folder if it doesn't exist
        if (!fs.existsSync(location)) fs.mkdirSync(location, { recursive: true })
        // Construct the block file content
        const block_json = make_block(identifier, block)
        // Write the block file
        fs.writeFileSync(`${location}${block.id}.json`, block_json)
        // Add terrain textures and flipbook textures
        if ('textures' in block) Object.entries(block.textures).forEach(([name, texture]) => {
            texture_data[name] = { textures: texture }
            if (texture in flipbooks) {
                flipbook_textures.push(Object.assign({
                    atlas_tile: name,
                    flipbook_texture: texture
                }, flipbooks[texture]))
            }
        })
        // Add to blocks.json
        if (!('model' in block)) {
            if ('simple_model' in block) blocks_json[identifier] = { textures: block.simple_model }
            else blocks_json[identifier] = { textures: block.id, _inline: true }
        }
        // Generate texture files
        if ('generated' in block) block.generated.forEach(command => {
            if (command.action == 'merge') execFileSync(aseprite, [ '--batch',
                '--script-param', `base=${command.base}`,
                '--script-param', `overlay=${command.overlay}`,
                '--script-param', `path=${rp}/${command.path}`,
                '--script', 'scripts/merge_textures.lua',
            ])
        })
        // Add the display name
        texts.push(`tile.${identifier}.name=${block.name ?? snake_to_title(block.id)}`)
    }
    // Write terrain_textures.json if it has any data
    if (Object.keys(texture_data).length) {
        if (!fs.existsSync(`${rp}/textures`)) fs.mkdirSync(`${rp}/textures`, { recursive: true })
        fs.writeFileSync(`${rp}/textures/terrain_texture.json`, format_json(terrain_textures))
    }
    // Write flipbook_textures.json if it has any data
    if (flipbook_textures.length) {
        fs.writeFileSync(`${rp}/textures/flipbook_textures.json`, format_json(flipbook_textures))
    }
    // Write blocks.json if it has any data
    if (Object.keys(blocks_json.length > 1)) {
        fs.writeFileSync(`${rp}/blocks.json`, format_json(blocks_json))
    }
}

// Generate a block json file
function make_block(identifier, block) {
    const states = {}, traits = {}, components = {}, permutations = []
    const menu_category = { category: "items", _inline: true }
    const json = {
        "format_version": "1.26.30",
        "minecraft:block": {
            description: { identifier, menu_category, states, traits },
            components,
            permutations,
        }
    }
    // Enable placement in cardinal directions
    if (block.flags?.includes('face_cardinals')) {
        const placement = traits['minecraft:placement_direction'] = {}
        const cardinal = "minecraft:cardinal_direction"
        if (Array.isArray(placement.enabled_states)) {
            if (!placement.enabled_states.includes(cardinal)) placement.enabled_states.push(cardinal)
        } else placement.enabled_states = [cardinal]
        placement.y_rotation_offset = 180
        permutations.push(
            {
                condition: `q.block_state('${cardinal}') == 'east'`,
                components: {"minecraft:transformation": { "rotation": [0, 90, 0], _inline: true }}
            },
            {
                condition: `q.block_state('${cardinal}') == 'north'`,
                components: {"minecraft:transformation": { "rotation": [0, 180, 0], _inline: true }}
            },
            {
                condition: `q.block_state('${cardinal}') == 'west'`,
                components: {"minecraft:transformation": { "rotation": [0, -90, 0], _inline: true }}
            }
        )
    }
    // Geometry & Material Instances
    if ('model' in block) {
        components["minecraft:geometry"] = block.geometry ?? "minecraft:geometry.full_block"
        const render_method = block.render_method ?? 'opaque'
        const instances = components["minecraft:material_instances"] = {}
        Object.entries(block.model).forEach(([side, texture]) => (instances[side] = { texture, render_method, _inline: true }))
    }

    // Remove empty objects and arrays
    if (!Object.keys(states).length) delete json["minecraft:block"].description.states
    if (!Object.keys(traits).length) delete json["minecraft:block"].description.traits
    if (!Object.keys(components).length) delete json["minecraft:block"].components
    if (!permutations.length) delete json["minecraft:block"].permutations

    return format_json(json)
}