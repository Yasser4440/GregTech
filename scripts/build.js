import fs from "node:fs"
import { copyExisting } from "./utilities.js"
import { source_directory } from "./local_settings.js"
import { make_blocks } from "../source/blocks.js"
console.success = (message) => console.info(`\u001b[32m${message}\u001B[37m`)

// Change the current working directory to the source directory (Where addon, assets, and scripts are placed)
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

// RP/texts/en_US.json
const texts = []

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
    // Build the behavior pack and resource pack
    fs.mkdirSync(bp); fs.mkdirSync(rp)
    fs.copyFileSync('addon/bp_manifest.json', `${bp}/manifest.json`)
    fs.copyFileSync('addon/pack_icon.png', `${bp}/pack_icon.png`)
    fs.copyFileSync('addon/rp_manifest.json', `${rp}/manifest.json`)
    fs.copyFileSync('addon/pack_icon.png', `${rp}/pack_icon.png`)

    // Copy BP folders from assets
    copyExisting(fs, 'assets/blocks', `${bp}/blocks`)
    copyExisting(fs, 'assets/scripts', `${bp}/scripts`)
    // Copy RP folders from assets
    copyExisting(fs, 'assets/textures', `${rp}/textures`)

    // DEBUG // this is for adding temporary files to BP and RP for testing and debugging
    // fs.cpSync('debug/blocks', `${bp}/blocks`, {recursive: true})

    // Generate the block files
    make_blocks(bp, rp, texts)
    // Generate the lang files
    fs.mkdirSync(`${rp}/texts/`, { recursive: true })
    fs.writeFileSync(`${rp}/texts/en_US.lang`, texts.join('\n'))
}

// Run the command
const subcommand = new Map([
    [undefined, build],
    ['run', deploy],
    ['remove', remove],
    ['delete', remove],
    ['release', release],
]).get(process.argv[2])

if (typeof subcommand == 'function') subcommand()
else console.error(`Unexpected argument: ${process.argv[2]}`)
