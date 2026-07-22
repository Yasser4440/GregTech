import fs from "node:fs"
import { add_comment, add_newline, format_json, make_block } from "./utilities.js"
import * as data from "./data.js"
import { source_directory } from "./local_settings.js"
console.success = (message) => console.info(`\u001b[32m${message}\u001B[37m`)

// Change the current working directory to the source directory (Where addon, assets, and node_scripts are placed)
process.chdir(source_directory)

// Define the paths
const mc_path = `${process.env.APPDATA}/Minecraft Bedrock/Users/Shared/games/com.mojang`
const bp_destination = `${mc_path}/development_behavior_packs`
const rp_destination = `${mc_path}/development_resource_packs`

const pack_name = "gregtech"
const bp_pack = `${pack_name}_bp`
const rp_pack = `${pack_name}_rp`

const dev_bp = `${bp_destination}/${bp_pack}`
const dev_rp = `${rp_destination}/${rp_pack}`

// Clean up the output directory
const output = '../output'
if (fs.existsSync(output)) fs.rmSync(output, {recursive: true})
fs.mkdirSync(output, {}, () => {})

// Command Table
const subcommands = new Map([
    [undefined, build],
    ['run', deploy],
    ['remove', remove],
    ['delete', remove],
    ['release', release],
])


// For building en_US.json
const translation_keys = []

// Generate the addons locally
function build() {
    generate(`${output}/${bp_pack}`, `${output}/${rp_pack}`)
}

// Generate the addons in Minecraft
function deploy() {
    remove(); console.success("Finished Cleaning")
    generate(dev_bp, dev_rp); console.success("Finished Reloading")
}

// Delete the addons from Minecraft
function remove() {
    if (fs.existsSync(dev_bp)) fs.rmSync(dev_bp, {recursive: true})
    console.success("Deleted the behavior pack")
    if (fs.existsSync(dev_rp)) fs.rmSync(dev_rp, {recursive: true})
    console.success("Deleted the resource pack")
}

// Generate the mcaddon file
function release() {

}

// Construct the behavior pack and resource pack
function generate(bp, rp) {
    fs.mkdirSync(bp); fs.mkdirSync(rp)
    // Build the behavior pack
    fs.copyFileSync('addon/bp_manifest.json', `${bp}/manifest.json`)
    fs.copyFileSync('addon/pack_icon.png', `${bp}/pack_icon.png`)
    fs.cpSync('assets/scripts', `${bp}/scripts`, {recursive: true})
    // Build the resource pack
    fs.copyFileSync('addon/rp_manifest.json', `${rp}/manifest.json`)
    fs.copyFileSync('addon/pack_icon.png', `${rp}/pack_icon.png`)
    fs.cpSync('assets/textures', `${rp}/textures`, {recursive: true})
    // Make the blocks
    make_blocks(bp, rp)
    // Make lang files
    fs.mkdirSync(`${rp}/texts/`, { recursive: true })
    fs.writeFileSync(`${rp}/texts/en_US.lang`, translation_keys.join('\n'))
}

// Process data.blocks into minecraft blocks
function make_blocks(bp, rp) {
    // Build blocks.json file
    const blocks_json = { format_version: [1, 21, 40]}
    add_newline(blocks_json)
    // Build terrain_textures.json
    const terrain_textures = {
        resource_pack_name: "Gregtech UBP",
        texture_name: "atlas.terrain",
        _newline_separator: null,
        texture_data: {}
    }
    // Process every block object
    for (const [id, block] of Object.entries(data.blocks)) {
        // Create the bp/blocks json file
        const directory = `${bp}/blocks/${block.folder ? block.folder + '/' : ''}`
        fs.mkdirSync(directory, { recursive: true })
        fs.writeFileSync(`${directory}${block.shorthand}.json`, make_block(id, block))
        // Process simple textures
        if (block.texture && !block.model) {
            // add the texture to terrain_textures.json
            terrain_textures.texture_data[block.shorthand] = { textures: `textures/blocks/${block.texture}` }
            // add the block to blocks.json
            blocks_json[id] = { textures: block.shorthand}
        }
        // Add the display name
        const english_name = block.shorthand.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        if (!block.name) translation_keys.push(`tile.${id}.name=${english_name}`)
    }
    // Create the resource pack files
    fs.writeFileSync(`${rp}/blocks.json`, format_json(blocks_json))
    fs.writeFileSync(`${rp}/textures/terrain_texture.json`, format_json(terrain_textures))
}

// Run the command
const subcommand = subcommands.get(process.argv[2])
if (typeof subcommand == 'function') subcommand()
else console.error(`Unexpected argument: ${process.argv[2]}`)
