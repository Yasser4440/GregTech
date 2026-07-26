import { validate_recipes } from "./validators.js";
import { recipe_name } from "./data.js";
import chemical_lines from "./recipes/chemical_lines.js"

const recipes = []; export default recipes

// Append the all recipe files
recipes.push(...chemical_lines)

// Name each recipe
recipes.forEach(recipe => {
    const { machine, circuit, catalyst } = recipe
    const inputs = Array.isArray(recipe.inputs) ? recipe.inputs.map(input => {
        const { material, shape, fluid, state } = input
        if (material) return `${material ?? ''}${shape ? `_${shape}` : ''}`
        if (fluid) return `${fluid ?? ''}${state ? `_${state}` : ''}`
    }) : null
    recipe[recipe_name] = `${machine ?? ''}${circuit ? `_${circuit}` : ''}${catalyst ? `_${catalyst}` : ''}: (${inputs ? inputs.join(', ') : 'NoInput'})`
})

// Validate, Sanitize, and Freeze
validate_recipes()