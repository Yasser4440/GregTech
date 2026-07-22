import fs from "node:fs"; import node_path from "node:path"
import { texture_mappings, mod_assets, textures_path, flipbooks } from "./local_settings.js"
import { format_json } from "./utilities.js"

function make_textures() {
    // Generate the texture files
    for (const [key, value] of Object.entries(texture_mappings)) {
        const texture = `${mod_assets}/${textures_path}/${key}.png`
        const connected = `${mod_assets}/${textures_path}/${key}_ctm.png`
        // Copy the texture files
        if (!fs.existsSync(texture)) { console.error(`File Not Found: ${texture}`); continue }
        fs.cpSync(texture, `${output}/textures/${value}.png`)
        // Copy the connected textures
        if (!fs.existsSync(connected)) continue
        const base = node_path.dirname(value), name = node_path.basename(value)
        fs.cpSync(connected, `${output}/textures/${base}/connected/${name}.png`)
    }
}

function make_flipbooks() {
    const json = {}

    for (const [key, value] of Object.entries(flipbooks)) {
        const file_text = fs.readFileSync(`${mod_assets}/${textures_path}/${value}`, {encoding: 'utf-8'})
        const file_json = JSON.parse(file_text).animation
        let frames = undefined
        if (file_json.frames) {
            frames = []
            for (const frame of file_json.frames) {
                if (typeof frame == 'number') frames.push(frame); else {
                    const {index, time} = frame
                    for (let t = 0; t < time; t += file_json.frametime) frames.push(index)
                }
            }
        }
        const flipbook = json[`textures/${key}`] = {}
        flipbook.ticks_per_frame = file_json.frametime
        if (frames) flipbook.frames = frames
    }

    fs.writeFileSync(`${output}/flipbook_textures.json`, format_json(json))
}


// Clean up the output directory
const output = "output"
if (fs.existsSync(output)) {
    if (fs.lstatSync(output).isDirectory()) fs.rmSync(output, {recursive: true})
    else {console.error(`"${output}" is not a directory, please delete it.`); process.exit(1)}
}; fs.mkdirSync(output, {}, () => {})

// Process the command arguments
switch (process.argv[2]) {
    case 'textures': { make_textures() } break
    case 'flipbooks': { make_flipbooks() } break
    case 'debug': { debug() } break
    
    default: console.error(`Unexpected argument: ${process.argv[2]}`)
}

// For printing to the terminal
function debug() {
    // // Print the texture mappings for voltage casing
    // const meta_data = []
    // const tiers = `${mod_assets}/${textures_path}/block/casings/voltage`
    // for (const tier of fs.readdirSync(tiers)) for (const file of fs.readdirSync(`${tiers}/${tier}`)) {
    //     const name = file.replace('.png', '').replace('.mcmeta', '')
    //     const texture = `blocks/voltage_casings/${tier}_${name}`
    //     if (file.endsWith('.mcmeta')) {
    //         meta_data.push(`    '${texture}': "block/casings/voltage/${tier}/${file}",`)
    //     }
    //     else console.log(`    'block/casings/voltage/${tier}/${name}': "${texture}",`)
    // }
    // for (const item of meta_data) console.log(item)
    
    // // Print the keys of texture_mappings
    // for (const file of Object.values(texture_mappings)) console.log(`    'gregtech:${node_path.basename(file)}': {},`)
    
    // // Print the machine casing block ids
    // for (const file of Object.values(texture_mappings)) {
    //     if (node_path.dirname(file) != 'blocks/voltage_casings') continue
    //     const name = node_path.basename(file)
    //     if (!name.endsWith('_side')) continue
    //     console.log(`    'gregtech:${name.replace('_side', '')}_machine_casing': {},`)
    // }
    
    // // Skip _ctm.png files
    // .filter(file => !file.endsWith('.mcmeta') && !file.endsWith('_ctm.png'))
}