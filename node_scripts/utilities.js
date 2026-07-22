// Stringify objects into neat JSON with support for newlines and comments
export function format_json(json, indent = '') {
    const next_indent = indent + '    '
    // Primitives
    if (json == null || typeof json != 'object') return JSON.stringify(json)
    // Arrays
    if (Array.isArray(json)) {
        // Empty Arrays
        if (json.length == 0) return '[]'
        // Primitive Arrays
        if (json.every(item => item == null || typeof item != 'object')) {
            return `[${json.map(item => JSON.stringify(item)).join(', ')}]`
        }
        // Object Arrays
        const items = json.map(item => `${next_indent}${format_json(item, next_indent)}`)
        return `[\n${items.join(',\n')}\n${indent}]`
    }
    // Objects
    const entries = Object.keys(json).map(key => {
        // New Lines
        if (key.startsWith('_newline')) return null
        // Comments
        else if (key.startsWith('_comment')) return {comment: `${next_indent}// ${json[key]}`}
        // Properties
        else return `${next_indent}"${key}": ${format_json(json[key], next_indent)}`
    })
    return entries.length ? `{\n${entries.reduce((buffer, entry, i) => {
        return `${buffer}${
            typeof entry == 'string' ? (entry + (entries.slice(i + 1).some(e => typeof e == 'string') ? ',' : '')) :
            entry?.comment ? entry.comment : ''
        }\n`
    }, '')}${indent}}` : '{}'
}

let metadata_index = 0
export const add_newline = (json) => json['_newline' + metadata_index++] = null
export const add_comment = (json, comment) => json['_comment' + metadata_index++] = comment

export function make_block(id, block) {
    const json = { format_version: "1.26.30", "minecraft:block": {
        description: { identifier: id }
        // TODO: add states, components, and permutations
    }}
    
    return format_json(json)
}