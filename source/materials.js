// Material Forms:
const dust = 'dust', ingot = 'ingot', ore = 'ore'
const liquid = 'liquid', gas = 'gas', plasma = 'plasma'

// Material Textures:
const dull = 'dull', metallic = 'metallic', magnetic = 'magnetic', shiny = 'shiny'
const bright = 'bright', diamond = 'diamond', emerald = 'emerald', horizontal = 'horizontal'
const vertical = 'vertical', ruby = 'ruby', opal = 'opal', glass = 'glass'
const nether_star = 'nether_star', fine = 'fine', sand = 'sand', wood = 'wood'
const rough = 'rough', flint = 'flint', lignite = 'lignite', quartz = 'quartz'
const certus = 'certus', lapis = 'lapis', radioactive = 'radioactive'

// Voltage Tiers:
const ULV = 'ULV', LV = 'LV', MV = 'MV', HV = 'HV', EV = 'EV', IV = 'IV'
const LuV = 'LuV', ZPM = 'ZPM', UV = 'UV', UHV = 'UHV', UEV = 'UEV', UIV = 'UIV'
const UXV = 'UXV', OpV = 'OpV', MAX = 'MAX'

// Material Flags:
const EXT2_METAL = 'EXT2_METAL', GENERATE_GEAR = 'GENERATE_GEAR', GENERATE_SMALL_GEAR = 'GENERATE_SMALL_GEAR'
const GENERATE_RING = 'GENERATE_RING', GENERATE_FRAME = 'GENERATE_FRAME', GENERATE_SPRING = 'GENERATE_SPRING'
const GENERATE_SPRING_SMALL = 'GENERATE_RING', GENERATE_FINE_WIRE = 'GENERATE_FRAME', EXT_METAL = 'EXT_METAL'
const GENERATE_FOIL = 'GENERATE_FOIL', MORTAR_GRINDABLE = 'MORTAR_GRINDABLE', STD_METAL = 'STD_METAL'
const _____________ = '___________', ______________ = '___________', _________ = '__________'
const __________ = '___________', ___________ = '___________', ________ = '__________'

// Hazard Triggers
const INHALATION = 'INHALATION'
// Hazard Types
const ARSENICOSIS = 'ARSENICOSIS'


// Fluid Pipe Properties:
const gas_proof = 'gas_proof'

// Blasting Inert Gases:
const nitrogen = 'nitrogen'

const materials = {}
export default materials

export const elements = {
    actinium: { color: [0xC3D1FF, 0x397090], texture: metallic, element: {symbol: 'Ac', p: 89, n: 136} },
    aluminium: { 
        color: [0x7db9d8, 0x756ac9c],
        forms: [ingot, liquid, ore],
        properties: { temperature: 933 },
        flags: [EXT2_METAL, GENERATE_GEAR, GENERATE_SMALL_GEAR, GENERATE_RING, GENERATE_FRAME, GENERATE_SPRING, GENERATE_SPRING_SMALL, GENERATE_FINE_WIRE],
        element: {symbol: 'Al', p: 13, n: 13},
        tool_stats: { speed: 6, damage: 7.5, durability: 768, level: 2, enchantability: 14 },
        rotor_stats: { power: 100, efficiency: 140, damage: 2, durability: 128 },
        cable_stats: { voltage: EV, amperage: 1, loss: 1 },
        fluid_pipe: { temperature: 1166, throughput: 100, properties: [gas_proof] },
        blasting: { temperature: 1700, inert_gas: nitrogen},
    },
    americium: {
        forms: [ingot, liquid, plasma],
        properties: { harvest_level: 3, temperature: 1449 },
        color: 0x287869, texture: radioactive,
        flags: [EXT_METAL, GENERATE_FOIL, GENERATE_FINE_WIRE],
        element: {symbol: 'Am', p: 95, n: 150},
        item_pipe: { speed: 64, priority: 64 },
    },
    antimony: {
        forms: [ingot, liquid],
        properties: { temperature: 904 },
        color: [0xeaeaff, 0x8181bd], texture: shiny,
        flags: [MORTAR_GRINDABLE],
        element: {symbol: 'Sb', p: 51, n: 70},
    },
    argon: {
        forms: [gas, plasma],
        color: 0x00FF00,
        element: {symbol: 'Ar', p: 18, n: 22},
    },
    arsenic: {
        forms: [dust, gas],
        properties: { fluid_state: gas, temperature: 887},
        color: [0x9c9c8d, 0x676756],
        element: {symbol: 'As', p: 33, n: 42},
        hazard: { trigger: INHALATION, type: ARSENICOSIS}
    },
    astatine: { color: [0x65204f, 0x17212b], element: {symbol: 'At', p: 85, n: 124}},
    barium: {
        forms: [dust],
        color: [0xede192, 0xa7ad4d], texture: metallic,
        element: {symbol: 'Ba', p: 56, n: 81},
    },
    berkelium: { color: 0x645A88, texture: radioactive, element: {symbol: 'Bk', p: 97, n: 152}},
    beryllium: {
        forms: [ingot, liquid, ore],
        properties: { temperature: 1560 },
        color: [0x73d73d, 0x184537], texture: metallic,
        flags: [STD_METAL],
        element: {symbol: 'Be', p: 4, n: 5},
    },
    bismuth: {
        forms: [ingot, liquid],
        properties: {harvest_level: 1, temperature: 545},
        color: [0x5fdddd, 0x517385], texture: metallic,
        element: {symbol: 'Bi', p: 83, n: 125},
    },
    bohrium: {
        color: [0xde67ff, 0xDC57FF], texture: radioactive,
        element: {symbol: 'Bh', p: 107, n: 163},
    },
    boron: {
        forms: [dust],
        color: [0xbffdbf, 0x6d7058],
        element: {symbol: 'B', p: 5, n: 5},
    },

// Sort them once finished
}; Object.assign(materials, elements)