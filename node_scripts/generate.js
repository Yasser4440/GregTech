import fs from "node:fs"; import node_path from "node:path"
import { texture_mappings, mod_assets, textures_path, flipbooks } from "./local_settings.js"
import { format_json } from "./utilities.js"
import materials from '../source/materials.js'

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

function rename_items(folder) {
    if (!folder) return
    const files = fs.readdirSync(folder)
    if (!fs.existsSync(`${folder}/overlay`)) fs.mkdirSync(`${folder}/overlay`)
    if (!fs.existsSync(`${folder}/secondary`)) fs.mkdirSync(`${folder}/secondary`)
    files.forEach(file => {
        if (!file.endsWith('.png')) return
        const file_path = `${folder}/${file}`
        file = file.replace('ingot_hot', 'hot_ingot')
        file = file.replace('rod_long', 'long_rod')
        file = file.replace('dust_tiny', 'tiny_dust')
        file = file.replace('dust_small', 'small_dust')
        file = file.replace('dust_small', 'small_dust')
        file = file.replace('crushed_refined', 'refined_ore')
        file = file.replace('crushed_purified', 'purified_ore')
        file = file.replace('dust_impure', 'impure_dust')
        file = file.replace('dust_pure', 'pure_dust')
        file = file.replace('wire_fine', 'fine_wire')
        file = file.replace('ingot_double', 'double_ingot')
        file = file.replace('plate_double', 'double_plate')
        file = file.replace('plate_dense', 'dense_plate')
        file = file.replace('spring_small', 'small_spring')
        file = file.replace('gem_chipped', 'chipped_gem')
        file = file.replace('gem_flawed', 'flawed_gem')
        file = file.replace('gem_flawless', 'flawless_gem')
        file = file.replace('gem_exquisite', 'exquisite_gem')
        if (file.includes('tool_head_')) {
            file = file.replace('tool_head_', '').replace('.png', '_tool_head.png')
        }
        const sections = file.split('_')
        const last = sections.length - 1
        let subfolder = '', prefix = sections[0] == folder ? '' : `${folder}_`
        sections[last] = sections[last].replace('.png', '')
        if (sections[last] == 'overlay') {
            sections.pop()
            subfolder = 'overlay/'
        }
        else if (sections[last] == 'secondary') {
            sections.pop()
            subfolder = 'secondary/'
        }
    fs.renameSync(file_path, `${folder}/${subfolder}${prefix}${sections.join('_')}.png`)
    })
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
    case 'rename': { rename_items(process.argv[3]) } break
    
    default: console.error(`Unexpected argument: ${process.argv[2]}`)
}
// For printing to the terminal
function debug() {
    const used_values = new Map
    for (const material of Object.values(materials)) {
        Object.keys(material).forEach(field => {
            const values = used_values.get(field) ?? new Set
            if (!used_values.has(field)) used_values.set(field, values)
            const value = material[field]
            if (typeof value == 'string') values.add(value)
            else if (Array.isArray(value)) value.forEach(item => values.add(item))
            else if (value && typeof value == 'object') Object.keys(value).forEach(item => values.add(item))
        })
    }
    used_values.delete('name')
    used_values.delete('formula')
    used_values.delete('texture')
    used_values.delete('element')
    used_values.delete('rotor_stats')
    used_values.delete('cable_stats')
    used_values.delete('item_pipe')
    used_values.delete('fluid_pipe')
    used_values.delete('blasting')
    used_values.delete('color')
    console.log(used_values)



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