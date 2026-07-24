import { material_textures, voltage_tiers,  } from "./data"

const {ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX} = voltage_tiers

const {
    dull, metallic, magnetic, shiny,
    bright, diamond, emerald, horizontal,
    vertical, ruby, opal, glass,
    nether_star, fine, sand, wood,
    rough, flint, lignite, quartz,
    certus, lapis, radioactive
} = material_textures

// Material Forms:
const dust = 'dust', ingot = 'ingot', ore = 'ore'
const liquid = 'liquid', gas = 'gas', plasma = 'plasma', fluid = 'fluid'

// Material Attributes:
const acidic = 'acidic', emissive_ore = 'emissive_ore'
const CUSTOM_STILL_TEXTURE = 'CUSTOM_STILL_TEXTURE'


// Material Flags:
const EXT2_METAL = 'EXT2_METAL', GENERATE_GEAR = 'GENERATE_GEAR', GENERATE_SMALL_GEAR = 'GENERATE_SMALL_GEAR'
const GENERATE_RING = 'GENERATE_RING', GENERATE_FRAME = 'GENERATE_FRAME', GENERATE_SPRING = 'GENERATE_SPRING'
const GENERATE_SPRING_SMALL = 'GENERATE_RING', GENERATE_FINE_WIRE = 'GENERATE_FRAME', EXT_METAL = 'EXT_METAL'
const GENERATE_FOIL = 'GENERATE_FOIL', MORTAR_GRINDABLE = 'MORTAR_GRINDABLE', STD_METAL = 'STD_METAL'
const GENERATE_ROTOR = 'GENERATE_ROTOR', EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES = 'EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES'
const GENERATE_BOLT_SCREW = 'GENERATE_BOLT_SCREW', GENERATE_ROD = 'GENERATE_ROD', GENERATE_LONG_ROD = 'GENERATE_LONG_ROD'
const GENERATE_ROUND = 'GENERATE_ROUND', ____________ = '___________', _________ = '__________'
const ______________ = '___________', _____________ = '___________', __________ = '__________'

// Hazard Triggers
const INHALATION = 'INHALATION', ANY = 'ANY', SKIN_CONTACT = 'SKIN_CONTACT'
// Hazard Types
const ARSENICOSIS = 'ARSENICOSIS', POISON = 'POISON', CARCINOGEN = 'CARCINOGEN', WEAK_POISON = 'WEAK_POISON'

// Tool Properties
const unbreakable = 'unbreakable', magnetic_tool = 'magnetic'

// Fluid Pipe Properties:
const gas_proof = 'gas_proof', acid_proof = 'acid_proof'
const cryogenic_proof = 'cryogenic_proof', plasma_proof = 'plasma_proof'

// Blasting Inert Gases:
const nitrogen = 'nitrogen', helium = 'helium', argon = 'argon'

// Localization Keys
const FLUID_GENERIC = 'FLUID_GENERIC', LIQUID_GENERIC = 'LIQUID_GENERIC'

const materials = {}
export default materials

export const elements = {
    actinium: {
        color: [0xC3D1FF, 0x397090], texture: metallic,
        element: {symbol: 'Ac', p: 89, n: 136},
    },
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
        element: {symbol: 'F', p: 9, n: 9},
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
    helium: {
        forms: [gas, liquid, plasma],
        properties: { fluid_state: gas },
        attributes: [CUSTOM_STILL_TEXTURE],
        liquid_stats: { temperature: 4, color: 0xFCFF90, name: 'liquid_helium', localization: LIQUID_GENERIC },
        element: {symbol: 'He', p: 2, n: 2},
    },

    helium_3: {
        forms: [gas],
        attributes: [CUSTOM_STILL_TEXTURE],
        liquid_stats: { localization: LIQUID_GENERIC },
        element: {symbol: 'He-3', p: 2, n: 1},
    },
    indium: {
        forms: [ingot, liquid],
        properties: { temperature: 430 },
        color: [0x5c3588, 0x2b0b4a], texture: shiny,
        element: {symbol: 'In', p: 49, n: 65},
    },
    iodine: {
        forms: [dust],
        color: [0x3e4467, 0x021e40], texture: shiny,
        element: {symbol: 'I', p: 53, n: 74},
    },
    iridium: {
        forms: [ingot, liquid],
        properties: { harvest_level: 3, temperature: 2719 },
        color: [0x99fede, 0x6cd1cf], texture: metallic,
        flags: [EXT2_METAL, GENERATE_FINE_WIRE, GENERATE_GEAR, GENERATE_FRAME],
        element: {symbol: 'Ir', p: 77, n: 115},
        rotor_stats: { power: 130, efficiency: 115, damage: 3, durability: 2560 },
        fluid_pipe: { temperature: 3398, throughput: 250, properties: [gas_proof, cryogenic_proof]},
        blasting: { temperature: 4500, voltage: IV, duration: 1100, inert_gas: argon },
        cooling: { voltage: EV, duration: 250 },
    },
    iron: {
        forms: [ingot, liquid, plasma, ore],
        properties: { temperature: 1811 },
        color: [0xeeeeee, 0x979797], texture: metallic,
        flags: [EXT2_METAL, MORTAR_GRINDABLE, GENERATE_ROTOR, GENERATE_SMALL_GEAR, GENERATE_GEAR, GENERATE_SPRING_SMALL, GENERATE_SPRING, GENERATE_ROUND, EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, BLAST_FURNACE_CALCITE_TRIPLE],
        element: {symbol: 'Fe', p: 26, n: 30},
        tool_stats: { speed: 2, damage: 2, durability: 256, level: 2, enchantability: 14 },
        attributes: [MORTAR_MATERIAL],
        rotor_stats: { power: 115, efficiency: 115, damage: 2.5, durability: 256 },
        cable_stats: { voltage: MV, amperage: 2, loss: 3 },
    },
    krypton: {
        forms: [gas],
        attributes: [CUSTOM_STILL_TEXTURE],
        liquid_stats: { localization: FLUID_GENERIC },
        color: 0x80FF80,
        element: {symbol: 'Kr', p: 36, n: 48},
    },
    lanthanum: {
        forms: [dust, liquid],
        properties: { temperature: 1193 },
        color: [0xd17d50, 0x4a3560], texture: metallic,
        element: {symbol: 'La', p: 57, n: 81},
    },
    lawrencium: {
        color: [0x5D7575], texture: radioactive,
        element: {symbol: 'Lr', p: 103, n: 159},
    },
    lead: {
        forms: [ingot, liquid, ore],
        properties: { harvest_level: 1, temperature: 600 },
        color: [0x7e6f82, 0x290633],
        flags: [EXT2_METAL, MORTAR_GRINDABLE, GENERATE_ROTOR, GENERATE_SPRING, GENERATE_SPRING_SMALL, GENERATE_FINE_WIRE],
        element: {symbol: 'Pb', p: 82, n: 125},
        cable_stats: { voltage: ULV, amperage: 2, loss: 2 },
        fluid_pipe: { temperature: 1200, throughput: 32, properties: [gas_proof] },
        hazard: { trigger: INHALATION, type: WEAK_POISON },
    },
    lithium: {
        forms: [dust, liquid, ore],
        properties: { temperature: 454 },
        color: [0xd7e7ee, 0xBDC7DB],
        element: {symbol: 'Li', p: 3, n: 4},
    },
    livermorium: {
        color: [0x939393, 0xff5e5e], texture: radioactive,
        element: {symbol: 'Lv', p: 116, n: 177},
    },
    lutetium: {
        forms: [dust, liquid],
        properties: { temperature: 1925 },
        color: [0x00ccff, 0x4c687a], texture: metallic,
        element: {symbol: 'Lu', p: 71, n: 103},
    },
    magnesium: {
        forms: [dust, liquid],
        properties: { temperature: 923 },
        color: [0xd6e3ff, 0x594d19], texture: fine,
        element: {symbol: 'Mg', p: 12, n: 12},
    },
    mendelevium: {
        color: 0x1D4ACF, texture: radioactive,
        element: {symbol: 'Md', p: 101, n: 157},
    },
    manganese: {
        forms: [ingot, liquid],
        properties: { temperature: 1519 },
        color: [0x88a669, 0xCDE1B9],
        flags: [STD_METAL, GENERATE_FOIL, GENERATE_BOLT_SCREW],
        element: {symbol: 'Mn', p: 25, n: 30},
        rotor_stats: { power: 100, efficiency: 115, damage: 2, durability: 512 },
    },
    meitnerium: {
        color: [0x4f3c82, 0x6e90ff], texture: radioactive,
        element: {symbol: 'Mt', p: 109, n: 167},
    },
    mercury: {
        forms: [fluid],
        color: 0xE6DCDC, texture: dull,
        element: {symbol: 'Hg', p: 80, n: 120},
        hazard: { trigger: ANY, type: WEAK_POISON },
    },
    molybdenum: {
        forms: [ingot, liquid, ore],
        properties: { temperature: 2896 },
        color: [0xc1c1ce, 0x404068], texture: shiny,
        element: {symbol: 'Mo', p: 42, n: 53},
        flags: [GENERATE_FOIL, GENERATE_BOLT_SCREW],
        rotor_stats: { power: 100, efficiency: 115, damage: 2, durability: 512 },
    },
    moscovium: {
        color: [0x2a1b40, 0xbd91ff], texture: radioactive,
        element: {symbol: 'Mc', p: 115, n: 173},
    },
    neodymium: {
        forms: [ingot, fluid, ore],
        color: [0x6c5863, 0x2c1919], texture: metallic,
        flags: [STD_METAL, GENERATE_ROD, GENERATE_BOLT_SCREW],
        element: {symbol: 'Nd', p: 60, n: 84},
        rotor_stats: { power: 100, efficiency: 115, damage: 2, durability: 512 },
        blasting: { temperature: 1297, inert_gas: helium },
    },
    neon: {
        forms: [gas],
        color: 0xFAB4B4,
        element: {symbol: 'Ne', p: 10, n: 10},
    },
    neptunium: {
        color: 0x284D7B, texture: radioactive,
        element: {symbol: 'Np', p: 93, n: 144},
        // hazard: { radioactive: 1 },
    },
    nickel: {
        forms: [ingot, liquid, plasma, ore],
        properties: { temperature: 1728 },
        color: [0xccdff5, 0x59563a], texture: metallic,
        flags: [STD_METAL, MORTAR_GRINDABLE],
        element: {symbol: 'Ni', p: 28, n: 30},
        cable_stats: { voltage: LV, amperage: 3, loss: 3 },
        item_pipe: { priority: 2048, speed: 1 },
    },
    nihonium: {
        color: [0x323957, 0xbfabff], texture: radioactive,
        element: {symbol: 'Nh', p: 113, n: 171},
    },
    niobium: {
        forms: [ingot, fluid],
        color: [0xb494b4, 0x4b3f4d], texture: bright,
        element: {symbol: 'Nb', p: 41, n: 53},
        blasting: { temperature: 2750, voltage: HV, duration: 900, inert_gas: helium },
    },
    nitrogen: {
        forms: [gas, plasma],
        color: 0x00BFC1,
        element: {symbol: 'N', p: 7, n: 7},
    },
    nobelium: {
        color: [0x3e4758, 0x43deff], texture: radioactive,
        element: {symbol: 'No', p: 102, n: 157},
    },
    oganesson: {
        color: [0x443936, 0xff1dbd], texture: radioactive,
        element: {symbol: 'Og', p: 118, n: 176},
    },
    osmium: {
        forms: [ingot, liquid],
        properties: { harvest_level: 4, temperature: 3306 },
        color: [0x54afff, 0x6e6eff], texture: metallic,
        flags: [EXT2_METAL, GENERATE_FOIL],
        element: {symbol: 'Os', p: 76, n: 114},
        rotor_stats: { power: 160, efficiency: 185, damage: 4, durability: 1280 },
        cable_stats: { voltage: LuV, amperage: 4, loss: 2 },
        item_pipe: { speed: 8, priority: 256 },
        blasting: { temperature: 4500, voltage: LuV, duration: 1000, inert_gas: argon },
        cooling: { voltage: EV, duration: 300 },
    },
    oxygen: {
        forms: [gas, liquid, plasma],
        properties: { temperature: 85, fluid: gas },
        color: { gas: 0x6688DD, liquid: 0x4CC3FF},
        liquid_stats: { name: "liquid_oxygen", localization: LIQUID_GENERIC},
        element: {symbol: 'O', p: 8, n: 8},
    },
    palladium: {
        forms: [ingot, fluid, ore],
        color: [0xbd92b5, 0x535b14], texture: shiny,
        flags: [EXT_METAL, GENERATE_FOIL, GENERATE_FINE_WIRE],
        element: {symbol: 'Pd', p: 46, n: 60},
        blasting: { temperature: 1828, voltage: HV, duration: 900, inert_gas: nitrogen },
        cooling: { voltage: HV, duration: 150 },
    },
    phosphorus: {
        forms: [dust],
        color: [0x77332c, 0x220202],
        element: {symbol: 'P', p: 15, n: 15},
    },

    polonium: {
        color: [0x163b27, 0x00ff78], texture: radioactive,
        element: {symbol: 'Po', p: 84, n: 124},
        // hazard: { radioactive: 1 },
    },

    platinum: {
        forms: [ingot, liquid, ore],
        properties: { temperature: 2041 },
        color: [0xfff4ba, 0x8d8d71], texture: shiny,
        flags: [EXT2_METAL, GENERATE_FOIL, GENERATE_FINE_WIRE, GENERATE_RING, GENERATE_SPRING_SMALL, GENERATE_SPRING],
        element: {symbol: 'Pt', p: 78, n: 117},
        cable_stats: { voltage: IV, amperage: 2, loss: 1 },
        itemPipeProperties: { speed: 4, priority: 512 },
    },

    plutonium: {
        forms: [ingot, liquid, ore],
        properties: { harvest_level: 3, temperature: 913 },
        attributes: [emissive_ore],
        color: [0xba2727, 0x222730], texture: radioactive,
        element: {symbol: 'Pu-239', p: 94, n: 145},
        hazard: { radioactive: 1.5 },
    },
    plutonium_241: {
        forms: [ingot, liquid],
        properties: { harvest_level: 3, temperature: 913 },
        color: [0xff4c4c, 0x222730], texture: radioactive,
        flags: [EXT_METAL],
        element: {symbol: 'Pu-241', p: 94, n: 149},
        hazard: { radioactive: 1.5 },
    },
    potassium: {
        forms: [dust, liquid],
        properties: { harvest_level: 1, temperature: 337 },
        color: [0xd2e1f2, 0x6189b8], texture: metallic,
        element: {symbol: 'K', p: 19, n: 20},
    },
    praseodymium: {
        color: [0x718060, 0x3f3447], texture: metallic,
        element: {symbol: 'Pr', p: 59, n: 81},
    },
    promethium: {
        color: [0x814947, 0xd0ff71], texture: radioactive,
        element: {symbol: 'Pm', p: 61, n: 83},
        // hazard: { radioactive: 1 },
    },
    protactinium: {
        color: 0xA78B6D, texture: radioactive,
        element: {symbol: 'Pa', p: 91, n: 138},
        // hazard: { radioactive: 1 },
    },
    radon: {
        forms: [gas],
        color: 0xFF39FF,
        element: {symbol: 'Rn', p: 86, n: 134},
        hazard: { radioactive: 1 },
    },
    radium: {
        color: [0x838361, 0x89ff21], texture: radioactive,
        element: {symbol: 'Ra', p: 88, n: 136},
        // hazard: { radioactive: 1 },
    },
    rhenium: {
        color: [0xcbcfd7, 0x37393d], texture: shiny,
        element: {symbol: 'Re', p: 75, n: 111},
    },
    rhodium: {
        forms: [ingot, fluid],
        color: [0xfd46b1, 0xDC0C58], texture: bright,
        flags: [EXT2_METAL, GENERATE_GEAR, GENERATE_FINE_WIRE],
        element: {symbol: 'Rh', p: 45, n: 58},
        blasting: { temperature: 2237, voltage: EV, duration: 1200, inert_gas: helium },
        cooling: { voltage: HV },
    },
    roentgenium: {
        color: [0x388c48, 0x198a92], texture: radioactive,
        element: {symbol: 'Rg', p: 111, n: 169},
    },
    rubidium: {
        color: [0xde0f0f, 0x3a1f1f], texture: shiny,
        element: {symbol: 'Rb', p: 37, n: 48},
    },
    ruthenium: {
        forms: [ingot, fluid],
        color: [0xa2cde0, 0x3c7285], texture: shiny,
        flags: [GENERATE_FOIL, GENERATE_GEAR],
        element: {symbol: 'Ru', p: 44, n: 57},
        blasting: { temperature: 2607, voltage: EV, duration: 900, inert_gas: helium },
        cooling: { voltage: HV, duration: 200 },
    },
    rutherfordium: {
        color: [0x6b6157, 0xFFF6A1], texture: radioactive,
        element: {symbol: 'Rf', p: 104, n: 161},
    },
    samarium: {
        forms: [ingot, liquid],
        properties: { temperature: 1345 },
        color: [0xc2c289, 0x235254], texture: metallic,
        flags: [GENERATE_LONG_ROD],
        element: {symbol: 'Sm', p: 62, n: 88},
        blasting: { temperature: 5400, voltage: EV, duration: 1500, inert_gas: argon },
        cooling: { voltage: HV, duration: 200 },
    },
    scandium: {
        color: [0xb1b2ac, 0x1c3433], texture: metallic,
        element: {symbol: 'Sc', p: 21, n: 24},
    },
    seaborgium: {
        color: [0x19C5FF, 0xff19b2], texture: radioactive,
        element: {symbol: 'Sg', p: 106, n: 165},
    },
    selenium: {
        color: [0xffdf77, 0x055d28], texture: shiny,
        element: {symbol: 'Se', p: 34, n: 45},
    },

    silicon: {
        forms: [ingot, fluid],
        color: [0x707078, 0x10293b], texture: metallic,
        flags: [GENERATE_FOIL],
        element: {symbol: 'Si', p: 14, n: 14},
        blasting: { temperature: 2273 },
    },

    silver: {
        forms: [ingot, liquid, ore],
        properties: { temperature: 1235 },
        color: [0xDCDCFF, 0x5a4705], texture: shiny,
        flags: [EXT2_METAL, MORTAR_GRINDABLE, GENERATE_FINE_WIRE, GENERATE_RING],
        element: {symbol: 'Ag', p: 47, n: 60},
        cable_stats: { voltage: HV, amperage: 1, loss: 1 },
    },
    sodium: {
        forms: [dust],
        color: [0x7c80ff, 0x2b30a3], texture: metallic,
        element: {symbol: 'Na', p: 11, n: 11},
    },
    strontium: {
        color: [0x7a7953, 0x4c0b06], texture: metallic,
        element: {symbol: 'Sr', p: 38, n: 49},
    },
    sulfur: {
        forms: [dust, ore],
        color: [0xfdff31, 0xffb400],
        flags: [FLAMMABLE],
        element: {symbol: 'S', p: 16, n: 16},
    },
    tantalum: {
        forms: [ingot, liquid],
        properties: { temperature: 3290 },
        color: [0xa8a7c6, 0x1f2b20], texture: metallic,
        flags: [STD_METAL, GENERATE_FOIL, GENERATE_FINE_WIRE],
        element: {symbol: 'Ta', p: 73, n: 107},
    },
    technetium: {
        color: [0x7430e1, 0x7430e1], texture: radioactive,
        element: {symbol: 'Tc', p: 43, n: 55},
        // hazard: { radioactive: 1 },
    },
    tellurium: {
        color: [0x8fea66, 0x00bfff], texture: radioactive,
        element: {symbol: 'Te', p: 52, n: 75},
    },
    tennessine: {
        color: [0x785cc4, 0x7959d4], texture: radioactive,
        element: {symbol: 'Ts', p: 117, n: 177},
    },
    terbium: {
        color: [0xcedab4, 0x263640], texture: metallic,
        element: {symbol: 'Tb', p: 65, n: 93},
    },
    thorium: {
        forms: [ingot, liquid, ore],
        properties: { temperature: 2023 },
        color: [0x25411b, 0x051E05], texture: shiny,
        flags: [STD_METAL, GENERATE_ROD],
        element: {symbol: 'Th', p: 90, n: 140},
    },
    thallium: {
        color: [0x5d6b8e, 0x815b63], texture: shiny,
        element: {symbol: 'Tl', p: 81, n: 123},
        // hazard: { trigger: SKIN_CONTACT, type: POISON },
    },
    thulium: {
        color: [0x467681, 0x682c2c], texture: metallic,
        element: {symbol: 'Tm', p: 69, n: 99},
    },
    tin: {
        forms: [ingot, liquid, plasma, ore],
        properties: { harvest_level: 1, temperature: 505 },
        color: [0xfafeff, 0x4e676c],
        flags: [EXT2_METAL, MORTAR_GRINDABLE, GENERATE_ROTOR, GENERATE_SPRING, GENERATE_SPRING_SMALL, GENERATE_FINE_WIRE],
        element: {symbol: 'Sn', p: 50, n: 68},
        cable_stats: { voltage: LV, amperage: 1, loss: 1 },
        item_pipe: { priority: 4096, speed: 0.5 },
    },
    titanium: {
        forms: [ingot, fluid],
        properties: { harvest_level: 3 },
        color: [0xed8eea, 0xff64bc], texture: metallic,
        flags: [EXT2_METAL, GENERATE_ROTOR, GENERATE_SMALL_GEAR, GENERATE_GEAR, GENERATE_FRAME],
        element: {symbol: 'Ti', p: 22, n: 26},
        tool_stats: { speed: 8, damage: 6, level: 3, durability: 1536, enchantability: 14 },
        armor_stats: { protection: [4, 9, 7, 4], toughness: 5, knockback_resistance: 0.4, durability_multiplier: 48, enchantability: 18 },
        rotor_stats: { power: 130, efficiency: 115, damage: 3, durability: 1600 },
        fluid_pipe: { temperature: 2426, throughput: 150, properties: [gas_proof] },
        blasting: { temperature: 1941, voltage: HV, duration: 1500, inert_gas: helium },
        cooling: { voltage: HV },
    },
    tritium: {
        forms: [gas],
        properties: { fluid_state: gas },
        attributes: [CUSTOM_STILL_TEXTURE],
        color: [0xff316b, 0xd00000], texture: metallic,
        element: {symbol: 'T', p: 1, n: 2},
        hazard: { radioactive: 1 },
    },
    tungsten: {
        forms: [ingot, liquid],
        properties: { harvest_level: 3, temperature: 3695 },
        color: [0x3b3a32, 0x2a2800], texture: metallic,
        flags: [EXT2_METAL, GENERATE_SPRING, GENERATE_SPRING_SMALL, GENERATE_FOIL, GENERATE_GEAR, GENERATE_FRAME],
        element: {symbol: 'W', p: 74, n: 109},
        rotor_stats: { power: 130, efficiency: 115, damage: 3, durability: 2560 },
        cable_stats: { voltage: IV, amperage: 2, loss: 2 },
        fluid_pipe: { temperature: 4618, throughput: 50, properties: [gas_proof, acid_proof, plasma_proof] },
        blasting: { temperature: 3600, voltage: EV, duration: 1800, inert_gas: helium },
        cooling: { voltage: HV, duration: 300 },
    },
    uranium: {
        forms: [ingot, liquid],
        properties: { harvest_level: 3, temperature: 1405 },
        color: [0x1d891d, 0x33342c], texture: radioactive,
        flags: [EXT_METAL],
        element: {symbol: 'U-238', p: 92, n: 146},
        hazard: { radioactive: 1 },
    },
    uranium_235: {
        forms: [ingot, liquid],
        properties: { harvest_level: 3, temperature: 1405 },
        color: [0x46FA46, 0x33342c], texture: radioactive,
        flags: [EXT_METAL],
        element: {symbol: 'U-235', p: 92, n: 143},
        hazard: { radioactive: 1 },
    },
    vanadium: {
        forms: [ingot, fluid],
        color: [0x696d76, 0x240808], texture: metallic,
        element: {symbol: 'V', p: 23, n: 28},
        blasting: { temperature: 2183, inert_gas: helium },
    },
    xenon: {
        forms: [gas],
        color: 0x00FFFF,
        element: {symbol: 'Xe', p: 54, n: 77},
    },
    ytterbium: {
        color: 0xA7A7A7, texture: metallic,
        element: {symbol: 'Yb', p: 70, n: 103},
    },
    yttrium: {
        forms: [ingot, fluid],
        color: [0x7d8072, 0x15161a], texture: metallic,
        element: {symbol: 'Y', p: 39, n: 50},
        blasting: { temperature: 1799 },
    },
    zinc: {
        forms: [ingot, liquid],
        properties: { harvest_level: 1 , temperature: 693 },
        color: [0xEBEBFA, 0x232c30], texture: metallic,
        flags: [STD_METAL, MORTAR_GRINDABLE, GENERATE_FOIL, GENERATE_RING, GENERATE_FINE_WIRE],
        element: {symbol: 'Zn', p: 30, n: 35},
    },
    zirconium: {
        color: [0xb99b7e, 0x271813], texture: metallic,
        element: {symbol: 'Zr', p: 40, n: 51},
    },
    naquadah: {
        forms: [ingot, liquid, ore],
        properties: { harvest_level: 4 },
        attributes: [CUSTOM_STILL_TEXTURE],
        color: [0x323232, false, 0x1e251b], texture: metallic,
        flags: [EXT_METAL, GENERATE_FOIL, GENERATE_SPRING, GENERATE_FINE_WIRE, GENERATE_BOLT_SCREW],
        element: {symbol: 'Nq', p: 174, n: 352},
        rotor_stats: { power: 160, efficiency: 105, damage: 4, durability: 1280 },
        cable_stats: { voltage: ZPM, amperage: 2, loss: 2 },
        fluid_pipe: { temperature: 3776, throughput: 200, properties: [gas_proof, cryogenic_proof, plasma_proof] },
        blasting: { temperature: 5000, voltage: IV, duration: 600, inert_gas: argon },
        cooling: { voltage: EV, duration: 150 },
    },
    enriched_naquadah: {
        forms: [ingot, liquid],
        properties: { harvest_level: 4 },
        attributes: [CUSTOM_STILL_TEXTURE, NO_FLUID_COLOR],
        color: [0x3C3C3C, 0x122f06], texture: metallic,
        flags: [EXT_METAL, GENERATE_FOIL],
        element: {symbol: 'Nq+', p: 174, n: 354},
        blasting: { temperature: 7000, voltage: IV, duration: 1000, inert_gas: argon },
        cooling: { voltage: EV, duration: 150 },
    },
    naquadria: {
        forms: [ingot, liquid],
        properties: { harvest_level: 3 },
        attributes: [CUSTOM_STILL_TEXTURE],
        color: [0x1E1E1E, false, 0x59b3ff], texture: radioactive,
        flags: [EXT_METAL, GENERATE_FOIL, GENERATE_GEAR, GENERATE_FINE_WIRE, GENERATE_BOLT_SCREW],
        element: {symbol: '*Nq*', p: 174, n: 348},
        blasting: { temperature: 9000, voltage: ZPM, duration: 1200, inert_gas: argon },
        cooling: { voltage: LuV, duration: 200 },
        hazard: { radioactive: 3 },
    },
    neutronium: {
        forms: [ingot, liquid],
        properties: { harvest_level: 6, temperature: 100000 },
        color: [0xFFFFFF, 0x000000],
        flags: [EXT_METAL, GENERATE_BOLT_SCREW, GENERATE_FRAME, GENERATE_GEAR, GENERATE_LONG_ROD],
        element: {symbol: 'Nt', p: 0, n: 1000},
        tool_stats: { speed: 180, damage: 100, attack_speed: 0.5, level: 6, durability: 65535, enchantability: 33, properties: [
            unbreakable, magnetic_tool
        ]},
        rotor_stats: { power: 400, efficiency: 250, damage: 12, durability: 655360 },
        fluid_pipe: { temperature: 100000, throughput: 5000, properties: [gas_proof, acid_proof, cryogenic_proof, plasma_proof] },
        hazard: { radioactive: 10 },
    },

    tritanium: {
        forms: [ingot, liquid],
        properties: { harvest_level: 6, temperature: 25000 },
        color: [0xc35769, 0x210840], texture: metallic,
        flags: [EXT2_METAL, GENERATE_FRAME, GENERATE_RING, GENERATE_SMALL_GEAR, GENERATE_ROUND, GENERATE_FOIL, GENERATE_FINE_WIRE, GENERATE_GEAR],
        element: {symbol: 'Tr', p: 119, n: 178},
        cable_stats: { voltage: UV, amperage: 1, loss: 8 },
        rotor_stats: { power: 220, efficiency: 220, damage: 6, durability: 10240 },
    },
    duranium: {
        forms: [ingot, liquid],
        properties: { harvest_level: 5, temperature: 7500 },
        color: [0xf3e7a9, 0x9c9487], texture: bright,
        flags: [EXT_METAL, GENERATE_FOIL, GENERATE_GEAR, GENERATE_BOLT_SCREW, GENERATE_LONG_ROD],
        element: {symbol: 'Dr', p: 120, n: 180},
        tool_stats: {
            speed: 14, damage: 12, attack_speed: 0.3, level: 5,
            durability: 8192, enchantability: 33, properties: [magnetic_tool]
        },
        fluid_pipe: { temperature: 9625, throughput: 500, properties: [gas_proof, acid_proof, cryogenic_proof, plasma_proof] },
    },
    trinium: {
        forms: [ingot, fluid],
        properties: { harvest_level: 7 },
        color: [0x81808a, 0x351d4b], texture: shiny,
        flags: [GENERATE_FOIL, GENERATE_BOLT_SCREW, GENERATE_GEAR, GENERATE_SPRING],
        element: {symbol: 'Ke', p: 125, n: 198},
        cable_stats: { voltage: ZPM, amperage: 6, loss: 4 },
        blasting: { temperature: 7200, voltage: LuV, duration: 1500, inert_gas: argon },
        cooling: { voltage: IV, duration: 300 },
    },

// Sort them once finished
}; Object.assign(materials, elements)

export const ores = {
    chalcopyrite: {
        forms: [dust, ore],
        color: [0x96c185, 0xe3af1a],
        compound: ['copper', 'iron', ['sulfur', 2]],
    }
}; Object.assign(materials, ores)

export const chemicals = {

}; Object.assign(materials, chemicals)

export const intermediaries = {
    // Platline
    // Other
}; Object.assign(materials, intermediaries)