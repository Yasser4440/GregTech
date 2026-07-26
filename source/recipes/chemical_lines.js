import { material_shapes, recipe_types, voltage_tiers } from "../data.js";

const {LV, MV, HV, EV, IV} = voltage_tiers

const { chemical_reactor, mixer, centrifuge, electrolyzer, large_chemical_reactor, distillation_tower } = recipe_types

const { purified_ore } = material_shapes

const recipes = []; export default recipes

const platline = [
    { // Platinum Sludge from Chalcopyrite
        machine: chemical_reactor,
        duration: 50, voltage: LV.adjusted,
        inputs: [
            { material: 'chalcopyrite', shape: purified_ore },
            { fluid: 'nitric_acid', amount: 100 },
        ],
        outputs: [
            { material: 'platinum_group_sludge', amount: 2},
            { fluid: 'sulfuric_copper_solution' },
        ]
    },
    { // Platinum Sludge from Chalcocite
        machine: chemical_reactor,
        duration: 50, voltage: LV.adjusted,
        inputs: [
            { material: 'chalcocite', shape: purified_ore },
            { fluid: 'nitric_acid', amount: 100 },
        ],
        outputs: [
            { material: 'platinum_group_sludge', amount: 2},
            { fluid: 'sulfuric_copper_solution' },
        ]
    },
    { // Platinum Sludge from Bornite
        machine: chemical_reactor,
        duration: 50, voltage: LV.adjusted,
        inputs: [
            { material: 'bornite', shape: purified_ore },
            { fluid: 'nitric_acid', amount: 100 },
        ],
        outputs: [
            { material: 'platinum_group_sludge', amount: 2},
            { fluid: 'sulfuric_copper_solution' },
        ]
    },
    { // Platinum Sludge from Tetrahedrite
        machine: chemical_reactor,
        duration: 50, voltage: LV.adjusted,
        inputs: [
            { material: 'tetrahedrite', shape: purified_ore },
            { fluid: 'nitric_acid', amount: 100 },
        ],
        outputs: [
            { material: 'platinum_group_sludge', amount: 2},
            { fluid: 'sulfuric_copper_solution' },
        ]
    },
    { // Platinum Sludge from Pentlandite
        machine: chemical_reactor,
        duration: 50, voltage: LV.adjusted,
        inputs: [
            { material: 'pentlandite', shape: purified_ore },
            { fluid: 'nitric_acid', amount: 100 },
        ],
        outputs: [
            { material: 'platinum_group_sludge', amount: 2},
            { fluid: 'sulfuric_nickel_solution' },
        ]
    },
    { // Platinum Sludge from Sheldonite
        machine: chemical_reactor,
        duration: 50, voltage: LV.adjusted,
        inputs: [
            { material: 'sheldonite', shape: purified_ore },
            { fluid: 'nitric_acid', amount: 100 },
        ],
        outputs: [
            { material: 'platinum_group_sludge', amount: 4},
            { fluid: 'sulfuric_nickel_solution' },
        ]
    },
    { // Aqua Regia
        machine: mixer,
        duration: 30, voltage: LV.adjusted,
        inputs: [
            { fluid: 'nitric_acid' },
            { fluid: 'hydrochloric_acid', amount: 2000 },
        ],
        outputs: [{ fluid: 'aqua_regia', amount: 3000 }],
    },
    { // Process Platinum Group Sludge
        machine: centrifuge,
        duration: 500, voltage: HV.adjusted,
        inputs: [
            { material: 'platinum_group_sludge', amount: 6},
            { fluid: 'aqua_regia', amount: 1200 }
        ],
        outputs: [
            { material: 'raw_platinum', amount: 3 },
            { material: 'raw_palladium', amount: 3 },
            { material: 'inert_metal_mixture', amount: 2 },
            { material: 'rarest_metal_mixture'},
            { material: 'platinum_sludge_residue', amount: 2 },
        ]
    },
    { // Process Raw Platinum Powder
        machine: electrolyzer,
        duration: 100, voltage: MV.adjusted,
        inputs: [{ material: 'raw_platinum', amount: 3 }],
        outputs: [
            { material: 'platinum' },
            { fluid: 'chlorine', amount: 800 },
        ]
    },
    { // Process Raw Palladium Powder
        machine: chemical_reactor,
        duration: 200, voltage: MV.adjusted,
        inputs: [
            { material: 'raw_palladium', amount: 5 },
            { fluid: 'hydrochloric_acid' },
        ],
        outputs: [
            { material: 'palladium' },
            { material: 'ammonium_chloride', amount: 2 },
        ]
    },
    { // Process Inert Metal Mixture
        machine: chemical_reactor,
        duration: 450, voltage: EV.adjusted,
        inputs: [
            { material: 'inert_metal_mixture', amount: 6 },
            { fluid: 'sulfuric_acid', amount: 1500 },
        ],
        outputs: [
            { material: 'ruthenium_tetroxide', amount: 5 },
            { fluid: 'rhodium_sulfate', amount: 500 },
            { fluid: 'hydrogen', amount: 3000 },
        ]
    },
    { // Process Rhodium Sulfate
        machine: electrolyzer,
        duration: 100, voltage: MV.adjusted,
        inputs: [{ fluid: 'rhodium_sulfate' }],
        outputs: [
            { material: 'rhodium', amount: 2 },
            { fluid: 'sulfur_trioxide', amount: 3000 },
            { fluid: 'oxygen', amount: 3000 },
        ]
    },
    { // Process Ruthenium Tetroxide
        machine: chemical_reactor,
        duration: 200, voltage: MV.adjusted,
        inputs: [
            { material: 'ruthenium_tetroxide', amount: 5 },
            { material: 'carbon', amount: 5 },
        ],
        outputs: [
            { material: 'ruthenium' },
            { fluid: 'carbon_dioxide', amount: 3000 },
        ]
    },
    { // Process Rarest Metal Mixture
        machine: large_chemical_reactor,
        duration: 400, voltage: IV.adjusted,
        inputs: [
            { material: 'rarest_metal_mixture', amount: 7 },
            { fluid: 'hydrochloric_acid', amount: 4000 },
        ],
        outputs: [
            { material: 'iridium_metal_residue', amount: 5 },
            { fluid: 'acidic_osmium_solution', amount: 2000 },
            { fluid: 'hydrogen', amount: 3000 },
        ]
    },
    { // Process Iridium Metal Residue
        machine: centrifuge,
        duration: 200, voltage: MV.adjusted,
        inputs: [{ material: 'iridium_metal_residue', amount: 5 }],
        outputs: [
            { material: 'iridium_chloride', amount: 4 },
            { material: 'platinum_sludge_residue' },
        ]
    },
    { // Process Iridium Chloride
        machine: chemical_reactor,
        duration: 100, voltage: LV.adjusted,
        inputs: [
            { material: 'iridium_chloride', amount: 4 },
            { fluid: 'hydrogen', amount: 3000 },
        ],
        outputs: [
            { material: 'iridium' },
            { fluid: 'hydrochloric_acid', amount: 3000 },
        ],
    },
    { // Process Acidic Osmium Solution
        machine: distillation_tower,
        duration: 400, voltage: MV.adjusted,
        inputs: [{ fluid: 'acidic_osmium_solution', amount: 2000 }],
        outputs: [
            { material: 'osmium_tetroxide', amount: 5 },
            { fluid: 'hydrochloric_acid' },
            { fluid: 'water' },
        ]
    },
    { // Process Osmium Tetroxide
        machine: chemical_reactor,
        duration: 200, voltage: LV.adjusted,
        inputs: [
            { material: 'osmium_tetroxide', amount: 5 },
            { fluid: 'hydrogen', amount: 8000 },
        ],
        outputs: [
            { material: 'osmium' },
            { fluid: 'water', amount: 4000 },
        ]
    },
]; recipes.push(...platline)
