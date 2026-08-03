// This File serves as a schema for how to configure your local settings file
// Rename to local_settings.js
// Remove the ts type annotations, they are just here to help you configure this file

// The path to your source folder relative to the current working directory
// Your source folder is the one cloned from source control (where addon/assets/scripts are located)
// It generally goes inside your project folder
// If your source folder is setting in the root of the project and is named "source", initialize this constant with "source"
export const source_directory: string

// This is for the generate.js script
// Set the path to the assets folder of the java mod relative to your local machine
export const mod_assets: string

// The path to the textures folder inside the mod assets folder
// In gtceu it is: "gtceu/textures"
export const textures_path: string

// Keys are the mod's block and item ids
// Values are the addon's block and item ids
// eg: "gtceu.heatproof_machine_casing": "gregtech:heat_proof_invar_machine_casing"
export const mod_mappings: Record<string, string>

// Keys are the mod's texture paths
// Values are the addon's texture paths
// eg: "block/casings/solid/machine_casing_heatproof": "blocks/casings/heat_proof_invar_machine_casing",
export const texture_mappings: Record<string, string>

// The location to your local aseprite executable
// eg: D:/Programs/Aseprite/build/bin/aseprite.exe
export const aseprite: string
