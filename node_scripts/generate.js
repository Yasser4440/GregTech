import fs from "node:fs"
import node_path from "node:path"
import { texture_mappings, mod_assets } from "./local_settings.js"

const output = "output"


function make_textures() {
    // Generate the texture files
    for (const [key, value] of Object.entries(texture_mappings)) {
        const texture = `${mod_assets}/gtceu/textures/${key}.png`
        const connected = `${mod_assets}/gtceu/textures/${key}_ctm.png`
        // Copy the texture files
        if (!fs.existsSync(texture)) { console.error(`File Not Found: ${texture}`); continue }
        fs.cpSync(texture, `${output}/textures/${value}.png`)
        // Copy the connected textures
        if (!fs.existsSync(connected)) continue
        const base = node_path.dirname(value), name = node_path.basename(value)
        fs.cpSync(connected, `${output}/textures/${base}/connected/${name}.png`)
    }
}


// Clean up the output directory
if (fs.existsSync(output)) {
    if (fs.lstatSync(output).isDirectory()) fs.rmSync(output, {recursive: true})
    else {console.error(`"${output}" is not a directory, please delete it.`); process.exit(1)}
}; fs.mkdirSync(output, {}, () => {})

// Process the command arguments
switch (process.argv[2]) {
    case 'textures': { make_textures() } break
    case 'debug': { debug() } break
    
    default: console.error(`Unexpected argument: ${process.argv[2]}`)
}

// For printing to the terminal
function debug() {
    // for (const file of Object.values(texture_mappings)) console.log(`    'gregtech:${node_path.basename(file)}': {},`)
    // console.log(fs.readdirSync('mod_assets/gtceu/textures/block/casings/solid').filter(file => !file.endsWith('.mcmeta') && !file.endsWith('_ctm.png')))
}