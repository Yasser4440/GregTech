// Material Forms:
const dust = 'dust', ingot = 'ingot', ore = 'ore'
const liquid = 'liquid', gas = 'gas', plasma = 'plasma'

// Material Attributes:
const acidic = 'acidic'
const CUSTOM_STILL_TEXTURE = 'CUSTOM_STILL_TEXTURE'

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
const GENERATE_ROTOR = 'GENERATE_ROTOR', EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES = 'EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES', _________ = '__________'
const __________ = '___________', ___________ = '___________', ________ = '__________'

// Hazard Triggers
const INHALATION = 'INHALATION', ANY = 'ANY', SKIN_CONTACT = 'SKIN_CONTACT'
// Hazard Types
const ARSENICOSIS = 'ARSENICOSIS', POISON = 'POISON', CARCINOGEN = 'CARCINOGEN'


// Fluid Pipe Properties:
const gas_proof = 'gas_proof', acid_proof = 'acid_proof'
const cryogenic_proof = 'cryogenic_proof', plasma_proof = 'plasma_proof'

// Blasting Inert Gases:
const nitrogen = 'nitrogen', helium = 'helium'

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
    bromine: {
        forms: [liquid],
        attributes: [acidic],
        color: [0x912200, 0x080101], texture: shiny,
        element: {symbol: 'Br', p: 35, n: 45},
    },
    caesium: {
        forms: [dust],
        color: [0xd1821c, 0x231f14], texture: shiny,
        element: {symbol: 'Cs', p: 55, n: 77},
    },
    calcium: {
        forms: [dust],
        color: [0xFFF5DE, 0xa4a4a4], texture: metallic,
        element: {symbol: '', p: 20, n: 20},
    },
    californium: {
        color: 0xA85A12, texture: radioactive,
        element: {symbol: '', p: 98, n: 153},
    },
    carbon: {
        forms: [dust, liquid],
        properties: { temperature: 4600 },
        element: {symbol: '', p: 6, n: 6},
        color: [0x333030, 0x221c1c],
    },
    cadmium: {
        forms: [dust],
        color: [0x636377, 0x431a34], texture: shiny,
        element: {symbol: 'Cd', p: 48, n: 64},
        hazard: {trigger: ANY, type: POISON},
    },
    cerium: {
        forms: [dust, liquid],
        properties: { temperature: 1068 },
        color: [0x87917D, 0x5e6458], texture: metallic,
        element: {symbol: 'Ce', p: 58, n: 82},
    },
    chlorine: {
        forms: [gas],
        properties: { fluid_state: gas },
        attributes: [CUSTOM_STILL_TEXTURE],
        element: {symbol: 'Cl', p: 17, n: 18},
        hazard: TODO,
    },
    chromium: {
        forms: [ingot, liquid],
        properties: { harvest_level: 3, temperature: 2180},
        color: [0xf3e0ea, 0x441f2e], texture: shiny,
        flags: [EXT_METAL, GENERATE_ROTOR],
        rotor_stats: { power: 130, efficiency: 155, damage: 3, durability: 512 },
        fluid_pipe: { temperature: 2180, throughput: 35, properties: [gas_proof, acid_proof] },
        blasting: { temperature: 1700, inert_gas: nitrogen},
        element: {symbol: 'Cr', p: 24, n: 28},
        hazard: { trigger: SKIN_CONTACT, type: CARCINOGEN},
    },
    cobalt: {
        forms: [ingot, liquid, ore/*leave for TiCon ore processing*/],
        properties: { temperature: 1768 },
        color: [0x5050FA, 0x2d2d7a], texture: metallic,
        flags: [EXT_METAL, GENERATE_FINE_WIRE],
        cable_stats: { voltage: LV, amperage: 2, loss: 2 },
        item_pipe: { speed: 2, priority: 2560 },
        element: {symbol: 'Co', p: 27, n: 32},
    },
    copernicium: {
        color: [0x565c5d, 0xffd34b], texture: radioactive,
        element: {symbol: 'Cn', p: 112, n: 173},
    },
    copper: {
        forms: [ingot, liquid, ore],
        properties: { harvest_level: 1, temperature: 1358 },
        color: [0xe77c56, 0xe4673e], texture: bright,
        flags: [EXT_METAL, MORTAR_GRINDABLE, GENERATE_SPRING, GENERATE_SPRING_SMALL, GENERATE_RING, GENERATE_FINE_WIRE, GENERATE_ROTOR],
        cable_stats: { voltage: MV, amperage: 1, loss: 2 },
        fluid_pipe: { temperature: 1696, throughput: 6, properties: [gas_proof] },
        element: {symbol: 'Cu', p: 29, n: 34},
    },
    curium: {
        color: 0x7B544E, texture: radioactive,
        element: {symbol: 'Cm', p: 96, n: 153},
    },
    darmstadtium: {
        forms: [ingot, fluid],
        color: 0x578062, texture: radioactive,
        flags: [EXT2_METAL, GENERATE_ROTOR, GENERATE_DENSE, GENERATE_SMALL_GEAR],
        element: {symbol: 'Ds', p: 110, n: 171},
    },
    deuterium: {
        forms: [gas],
        properties: { fluid_state: gas },
        attributes: [CUSTOM_STILL_TEXTURE],
        element: {symbol: 'D', p: 1, n: 1},
    },
    dubnium: {
        color: [0xc7ddde, 0x00f3ff], texture: radioactive,
        element: {symbol: 'Db', p: 105, n: 163},
    },
    dysprosium: {
        color: [0x6a664b, 0x423307], textures: metallic,
        element: {symbol: 'Dy', p: 66, n: 96},
    },
    einsteinium: {
        color: 0xCE9F00, texture: radioactive,
        element: {symbol: 'Es', p: 99, n: 153},
    },
    erbium: {
        color: [0xeccbdb, 0x5d625a], texture: metallic,
        element: {symbol: 'Er', p: 68, n: 99},
    },
    europium: {
        forms: [ingot, liquid],
        properties: { temperature: 1099 },
        color: [0x20FFFF, 0x429393], texture: metallic,
        flags: [STD_METAL, GENERATE_LONG_ROD, GENERATE_FINE_WIRE, GENERATE_SPRING, GENERATE_SPRING_SMALL, GENERATE_FOIL, GENERATE_FRAME],
        element: {symbol: 'Eu', p: 63, n: 88},
        cable_stats: { voltage: UHV, amperage: 2, loss: 32 },
        fluid_pipe: { temperature: 7750, throughput: 300, properties: [gas_proof]},
        blasting: { temperature: 6000, voltage: IV, duration: 180, inert_gas: helium },
        cooling: { voltage: HV },
    },
    fermium: {
        color: [0xc99fe7, 0x890085], texture: metallic,
        element: {symbol: 'Fm', p: 100, n: 157},
        // hazard: { radioactive: 1 },
    },
    flerovium: {
        color: [0x2a384e, 0xd2ff00], texture: radioactive,
        element: {symbol: 'Fl', p: 114, n: 175},
    },
    fluorine: {
        forms: [gas],
        properties: { fluid_state: gas },
        attributes: [CUSTOM_STILL_TEXTURE, HAZARD_NOT_APPLIED_TO_DERIVATIVES],
        element: GTElements.F,
        hazard: { trigger: SKIN_CONTACT, type: CHEMICAL_BURNS },
    },
    francium: {
        color: [0xAAAAAA, 0x0000ff], texture: radioactive,
        element: {symbol: 'Fr', p: 87, n: 134},
    },
    gadolinium: {
        color: [0x828a7a, 0x363420], texture: metallic,
        element: {symbol: 'Gd', p: 64, n: 93},
    },
    gallium: {
        forms: [ingot, liquid],
        properties: { temperature: 303 },
        color: [0x7a84ca, 0x13132e], texture: shiny,
        flags: [STD_METAL, GENERATE_FOIL],
        element: {symbol: 'Ga', p: 31, n: 39},
    },
    germanium: {
        color: [0x4a4a4a, 0x2d2612], texture: shiny,
        element: {symbol: 'Ge', p: 32, n: 40},
    },
    gold: {
        forms: [ingot, liquid, ore],
        properties: { temperature: 1337 },
        color: [0xfdf55f, 0xf25833], texture: shiny,
        flags: [EXT2_METAL, GENERATE_RING, MORTAR_GRINDABLE, EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, GENERATE_SPRING, GENERATE_SPRING_SMALL, GENERATE_FINE_WIRE, GENERATE_FOIL],
        cable_stats: { voltage: HV, amperage: 3, loss: 2 },
        fluid_pipe: { temperature: 1671, throughput: 25, properties: [gas_proof, acid_proof] },
        element: {symbol: 'Au', p: 79, n: 117},
    },
    hafnium: {
        color: [0x99999A, 0x2b4a3a], texture: shiny,
        element: {symbol: 'Hf', p: 72, n: 106},
    },
    hassium: {
        color: [0x738786, 0x62ffd5], texture: radioactive,
        element: {symbol: 'Hs', p: 108, n: 169},
    },
    holmium: {
        color: [0xf6fc9c, 0xa3a3a3], texture: metallic,
        element: {symbol: 'Ho', p: 67, n: 97},
    },
    hydrogen: {
        forms: [gas],
        color: 0x0000B5,
        element: {symbol: 'H', p: 1, n: 0},
    },
// Sort them once finished
}; Object.assign(materials, elements)