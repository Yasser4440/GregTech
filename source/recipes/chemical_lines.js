import { material_shapes, recipe_types, voltage_tiers } from "../data";
import { ores, chemicals, intermediaries, elements } from "../materials";

const {LV, MV, HV, EV, IV} = voltage_tiers

const { chemical_reactor, mixer, centrifuge, electrolyzer, large_chemical_reactor, distillation_tower } = recipe_types

const { dust, purified_ore} = material_shapes

const { chalcopyrite, chalcocite, bornite, tetrahedrite, pentlandite, sheldonite } = ores
const {
    hydrogen, oxygen, chlorine, carbon,
    platinum, palladium, rhodium, ruthenium, iridium, osmium,
} = elements
const {
    sulfuric_acid, hydrochloric_acid, nitric_acid, aqua_regia,
    ammonium_chloride, sulfur_trioxide, carbon_dioxide, water
} = chemicals
const {
    platinum_group_sludge, sulfuric_copper_solution, sulfuric_nickel_solution,
    raw_platinum, raw_palladium, inert_metal_mixture, rarest_metal_mixture, platinum_sludge_residue,
    ruthenium_tetroxide, rhodium_sulfate, iridium_metal_residue, acidic_osmium_solution, iridium_chloride, osmium_tetroxide,
} = intermediaries


export const recipes = []

const platline = [
    { // Platinum Sludge from Chalcopyrite
        machine: chemical_reactor,
        duration: 50, voltage: LV,
        inputs: [
            { shape: purified_ore, material: chalcopyrite },
            { fluid: nitric_acid, amount: 100 },
        ],
        output: [
            { shape: dust, material: platinum_group_sludge, amount: 2},
            { fluid: sulfuric_copper_solution },
        ]
    },
    { // Platinum Sludge from Chalcocite
        machine: chemical_reactor,
        duration: 50, voltage: LV,
        inputs: [
            { shape: purified_ore, material: chalcocite },
            { fluid: nitric_acid, amount: 100 },
        ],
        output: [
            { shape: dust, material: platinum_group_sludge, amount: 2},
            { fluid: sulfuric_copper_solution },
        ]
    },
    { // Platinum Sludge from Bornite
        machine: chemical_reactor,
        duration: 50, voltage: LV,
        inputs: [
            { shape: purified_ore, material: bornite },
            { fluid: nitric_acid, amount: 100 },
        ],
        output: [
            { shape: dust, material: platinum_group_sludge, amount: 2},
            { fluid: sulfuric_copper_solution },
        ]
    },
    { // Platinum Sludge from Tetrahedrite
        machine: chemical_reactor,
        duration: 50, voltage: LV,
        inputs: [
            { shape: purified_ore, material: tetrahedrite },
            { fluid: nitric_acid, amount: 100 },
        ],
        output: [
            { shape: dust, material: platinum_group_sludge, amount: 2},
            { fluid: sulfuric_copper_solution },
        ]
    },
    { // Platinum Sludge from Pentlandite
        machine: chemical_reactor,
        duration: 50, voltage: LV,
        inputs: [
            { shape: purified_ore, material: pentlandite },
            { fluid: nitric_acid, amount: 100 },
        ],
        output: [
            { shape: dust, material: platinum_group_sludge, amount: 2},
            { fluid: sulfuric_nickel_solution },
        ]
    },
    { // Platinum Sludge from Sheldonite
        machine: chemical_reactor,
        duration: 50, voltage: LV,
        inputs: [
            { shape: purified_ore, material: sheldonite },
            { fluid: nitric_acid, amount: 100 },
        ],
        output: [
            { shape: dust, material: platinum_group_sludge, amount: 4},
            { fluid: sulfuric_nickel_solution },
        ]
    },
    { // Aqua Regia
        machine: mixer,
        duration: 30, voltage: LV,
        inputs: [
            { fluid: nitric_acid },
            { fluid: hydrochloric_acid, amount: 2000 },
        ],
        outputs: [{ fluid: aqua_regia, amount: 3000 }],
    },
    { // Process Platinum Group Sludge
        machine: centrifuge,
        duration: 500, voltage: HV,
        inputs: [
            { shape: dust, material: platinum_group_sludge, amount: 6},
            { fluid: aqua_regia, amount: 1200 }
        ],
        outputs: [
            { shape: dust, material: raw_platinum, amount: 3 },
            { shape: dust, material: raw_palladium, amount: 3 },
            { shape: dust, material: inert_metal_mixture, amount: 2 },
            { shape: dust, material: rarest_metal_mixture},
            { shape: dust, material: platinum_sludge_residue, amount: 2 },
        ]
    },
    { // Process Raw Platinum Powder
        machine: electrolyzer,
        duration: 100, voltage: MV,
        inputs: [{ shape: dust, material: raw_platinum, amount: 3 }],
        outputs: [
            { shape: dust, material: platinum },
            { fluid: chlorine, amount: 800 },
        ]
    },
    { // Process Raw Palladium Powder
        machine: chemical_reactor,
        duration: 200, voltage: MV,
        inputs: [
            { shape: dust, material: raw_palladium, amount: 5 },
            { fluid: hydrochloric_acid },
        ],
        outputs: [
            { shape: dust, material: palladium },
            { shape: dust, material: ammonium_chloride, amount: 2 },
        ]
    },
    { // Process Inert Metal Mixture
        machine: chemical_reactor,
        duration: 450, voltage: EV,
        inputs: [
            { shape: dust, material: inert_metal_mixture, amount: 6 },
            { fluid: sulfuric_acid, amount: 1500 },
        ],
        outputs: [
            { shape: dust, material: ruthenium_tetroxide, amount: 5 },
            { fluid: rhodium_sulfate, amount: 500 },
            { fluid: hydrogen, amount: 3000 },
        ]
    },
    { // Process Rhodium Sulfate
        machine: electrolyzer,
        duration: 100, voltage: MV,
        inputs: [{ fluid: rhodium_sulfate }],
        outputs: [
            { shape: dust, material: rhodium, amount: 2 },
            { fluid: sulfur_trioxide, amount: 3000 },
            { fluid: oxygen, amount: 3000 },
        ]
    },
    { // Process Ruthenium Tetroxide
        machine: chemical_reactor,
        duration: 200, voltage: MV,
        inputs: [
            { shape: dust, material: ruthenium_tetroxide, amount: 5 },
            { shape: dust, material: carbon, amount: 5 },
        ],
        outputs: [
            { shape: dust, material: ruthenium },
            { fluid: carbon_dioxide, amount: 3000 },
        ]
    },
    { // Process Rarest Metal Mixture
        machine: large_chemical_reactor,
        duration: 400, voltage: IV,
        inputs: [
            { shape: dust, material: rarest_metal_mixture, amount: 7 },
            { fluid: hydrochloric_acid, amount: 4000 },
        ],
        outputs: [
            { shape: dust, material: iridium_metal_residue, amount: 5 },
            { fluid: acidic_osmium_solution, amount: 2000 },
            { fluid: hydrogen, amount: 3000 },
        ]
    },
    { // Process Iridium Metal Residue
        machine: centrifuge,
        duration: 200, voltage: MV,
        inputs: [{ shape: dust, material: iridium_metal_residue, amount: 5 }],
        outputs: [
            { shape: dust, material: iridium_chloride, amount: 4 },
            { shape: dust, material: platinum_sludge_residue },
        ]
    },
    { // Process Iridium Chloride
        machine: chemical_reactor,
        duration: 100, voltage: LV,
        inputs: [
            { shape: dust, material: iridium_chloride, amount: 4 },
            { fluid: hydrogen, amount: 3000 },
        ],
        outputs: [
            { shape: dust, material: iridium },
            { fluid: hydrochloric_acid, amount: 3000 },
        ],
    },
    { // Process Acidic Osmium Solution
        machine: distillation_tower,
        duration: 400, voltage: MV,
        inputs: [{ fluid: acidic_osmium_solution, amount: 2000 }],
        outputs: [
            { shape: dust, material: osmium_tetroxide, amount: 5 },
            { fluid: hydrochloric_acid },
            { fluid: water },
        ]
    },
    { // Process Osmium Tetroxide
        machine: chemical_reactor,
        duration: 200, voltage: LV,
        inputs: [
            { shape: dust, material: osmium_tetroxide, amount: 5 },
            { fluid: hydrogen, amount: 8000 },
        ],
        outputs: [
            { shape: dust, material: osmium },
            { fluid: water, amount: 4000 },
        ]
    },
]; recipes.push(...platline)
