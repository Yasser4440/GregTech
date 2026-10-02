import {voltage_tiers} from "../data.js"

export function make_casings(blocks) {
    for (const VOLTAGE of Object.keys(voltage_tiers)) {
        const voltage = VOLTAGE.toLowerCase()
        const id = `${voltage}_machine_casing`
        blocks[id] = {
            folder: 'machine_casings',
            name: `${VOLTAGE} Machine Casing`,
            simple_model: {
                up: `${id}_top`,
                side: `${id}_side`,
                down: `${id}_bottom`,
            },
            textures: {
                [`${id}_top`]: `textures/blocks/voltage_casings/${voltage}_top`,
                [`${id}_side`]: `textures/blocks/voltage_casings/${voltage}_side`,
                [`${id}_bottom`]: `textures/blocks/voltage_casings/${voltage}_bottom`,
            }
        }
    }
}

export function make_hulls(blocks) {
    for (const VOLTAGE of Object.keys(voltage_tiers)) {
        const voltage = VOLTAGE.toLowerCase()
        const casing = `${voltage}_machine_casing`
        const hull = `${voltage}_machine_hull`
        blocks[hull] = {
            folder: 'machine_hulls',
            name: `${VOLTAGE} Machine Hull`,
            model: {
                up: `${casing}_top`,
                down: `${casing}_bottom`,
                '*': `${casing}_side`,
                south: hull,
            },
            textures: {
                [hull]: `textures/blocks/machine_hulls/${hull}`,
            },
            generated: [
                { action: 'merge',
                    base: `assets/rp/textures/blocks/voltage_casings/${voltage}_side.png`,
                    overlay: `resources/hatches/energy_hatches/amperage1.png`,
                    path: `textures/blocks/machine_hulls/${hull}.png`
                }
            ]
        }
    }
}