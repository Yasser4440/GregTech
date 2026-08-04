const flipbooks = {}
export default flipbooks

const voltage_casing = {
    "textures/blocks/voltage_casings/uhv_bottom": {
        ticks_per_frame: 20
    },
    "textures/blocks/voltage_casings/uhv_side": {
        ticks_per_frame: 20
    },
    "textures/blocks/voltage_casings/uhv_top": {
        ticks_per_frame: 20
    },
    "textures/blocks/voltage_casings/opv_bottom": {
        ticks_per_frame: 10
    },
    "textures/blocks/voltage_casings/opv_side": {
        ticks_per_frame: 10
    },
    "textures/blocks/voltage_casings/opv_top": {
        ticks_per_frame: 10
    },
    "textures/blocks/voltage_casings/max_side": {
        ticks_per_frame: 2,
        frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 4, 3, 2, 1],
        blend_frames: false,
    },
}; Object.assign(flipbooks, voltage_casing)

const multiblocks = {
    "textures/blocks/multiblock/running/large_chemical_reactor": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/multiblocks/running/vacuum_freezer": {
        ticks_per_frame: 5,
        blend_frames: false,
    },
    "textures/blocks/multiblocks/idle/data_bank": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblocks/running/data_bank": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblocks/idle/high_power_computation_array": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblocks/running/high_power_computation_array": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
}; Object.assign(flipbooks, multiblocks)

const machines = {
    "textures/blocks/machines/running/arc_furnace": {
        ticks_per_frame: 2,
    },
    "textures/blocks/machines/running/assembler": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/running/bender": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/running/brewery": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
}; Object.assign(flipbooks, machines)

const unprocessed = {
    "textures/blocks/casings/battery/uhv_ultimate/side": {
        ticks_per_frame: 5,
        frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    },
    "textures/blocks/casings/battery/uv_lapotronic/side": {
        ticks_per_frame: 4,
    },
    "textures/blocks/casings/firebox/machine_casing_firebox_bloom": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/casings/mechanic/machine_casing_assembly_line_bloom": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/casings/pipe/machine_casing_engine_intake_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/casings/pipe/machine_casing_extreme_engine_intake_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/casings/slicing_blades/top": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/casings/slicing_blades/top_ctm": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/casings/unique/crushing_wheels_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/casings/unique/crushing_wheels_active_ctm": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/casings/unique/electrolytic_cell_active": {
        ticks_per_frame: 20,
    },
    "textures/blocks/casings/unique/heat_vent_bloom": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/casings/unique/slicing_blades_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/casings/unique/slicing_blades_active_ctm": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/cover/cover_interface_proxy_emissive": {
        ticks_per_frame: 4,
        blend_frames: false,
    },
    "textures/blocks/cover/cover_interface_wireless_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/cover/cover_pump_inverted": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_activity_detector_advanced_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_activity_detector_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_arm_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_arm_inverted_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_conveyor_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_conveyor_inverted_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_display_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_ender_fluid_link": {
        ticks_per_frame: 4,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_ender_fluid_link_emissive": {
        ticks_per_frame: 4,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_fluid_voiding": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_fluid_voiding_advanced": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_infinite_water_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_item_voiding": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_item_voiding_advanced": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_pump": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/cover/overlay_pump_inverted": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.biomass": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.blaze": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.cetane_boosted_diesel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.chlorine": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.creosote": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.deuterium": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.diesel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.enriched_naquadah": {
        ticks_per_frame: 2,
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.epichlorohydrin": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.ethanol": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.fluorine": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.fluoroantimonic_acid": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.glass": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.glue": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.glyceryl_trinitrate": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.heavy_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.helium.plasma": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.helium_3": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.honey": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.hydrochloric_acid": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.hydrogen_sulfide": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.ice": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.lead_zinc_solution": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.lightly_hydro_cracked_heavy_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.lightly_hydro_cracked_light_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.lightly_hydro_cracked_naphtha": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.lightly_steam_cracked_heavy_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.lightly_steam_cracked_light_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.lightly_steam_cracked_naphtha": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.light_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.lpg": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.lubricant": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.mc_guffium_239": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.milk": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.naphtha": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.naquadah": {
        ticks_per_frame: 2,
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.naquadria": {
        ticks_per_frame: 2,
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.natural_gas": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.oil": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.oil_heavy": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.oil_light": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.oil_medium": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.potion": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.seed_oil": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.severely_hydro_cracked_heavy_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.severely_hydro_cracked_light_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.severely_hydro_cracked_naphtha": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.severely_steam_cracked_heavy_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.severely_steam_cracked_light_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.severely_steam_cracked_naphtha": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.sodium_persulfate": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.steam": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.sulfuric_acid": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.sulfuric_gas": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.sulfuric_heavy_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.sulfuric_light_fuel": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.sulfuric_naphtha": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.titanium_tetrachloride": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.toluene": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.tritium": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.uuamplifier": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/fluids/fluid.uu_matter": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/generators/boiler/coal/overlay_front_active": {
        ticks_per_frame: 3,
        blend_frames: false,
    },
    "textures/blocks/generators/boiler/coal/overlay_front_active_emissive": {
        ticks_per_frame: 3,
        blend_frames: false,
    },
    "textures/blocks/generators/boiler/lava/overlay_front_active": {
        ticks_per_frame: 3,
        blend_frames: false,
    },
    "textures/blocks/generators/boiler/lava/overlay_front_active_emissive": {
        ticks_per_frame: 3,
        blend_frames: false,
    },
    "textures/blocks/generators/combustion/overlay_top_active": {
        ticks_per_frame: 4,
    },
    "textures/blocks/generators/gas_turbine/overlay_side_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/generators/steam_turbine/overlay_side_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/machines/arc_furnace/overlay_back_active": {
        ticks_per_frame: 2,
    },
    "textures/blocks/machines/arc_furnace/overlay_back_active_emissive": {
        ticks_per_frame: 2,
    },
    "textures/blocks/machines/arc_furnace/overlay_side_active": {
        ticks_per_frame: 2,
    },
    "textures/blocks/machines/arc_furnace/overlay_side_active_emissive": {
        ticks_per_frame: 2,
    },
    "textures/blocks/machines/brewery/overlay_side_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/brewery/overlay_side_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/canner/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/canner/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/centrifuge/overlay_back_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/machines/centrifuge/overlay_front_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/machines/centrifuge/overlay_side_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/machines/centrifuge/overlay_top_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/machines/chemical_bath/overlay_front_active": {
        ticks_per_frame: 4,
        blend_frames: false,
    },
    "textures/blocks/machines/chemical_bath/overlay_front_active_emissive": {
        ticks_per_frame: 4,
        blend_frames: false,
    },
    "textures/blocks/machines/chemical_reactor/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/chemical_reactor/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/circuit_assembler/overlay_front_active": {
        ticks_per_frame: 2,
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 8, 7, 8, 7, 8, 6, 6, 6, 9, 10, 11, 12, 13, 14, 15],
        blend_frames: false,
    },
    "textures/blocks/machines/circuit_assembler/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 8, 7, 8, 7, 8, 6, 6, 6, 9, 10, 11, 12, 13, 14, 15],
        blend_frames: false,
    },
    "textures/blocks/machines/compressor/overlay_front_active": {
        ticks_per_frame: 2,
        frames: [0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7, 8],
        blend_frames: false,
    },
    "textures/blocks/machines/compressor/overlay_side_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/cutter/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/cutter/overlay_side_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/distillery/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/machines/distillery/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/machines/electrolyzer/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/electrolyzer/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/electrolyzer/overlay_side_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/electrolyzer/overlay_side_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/electromagnetic_separator/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/electromagnetic_separator/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/extractor/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/extractor/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/extruder/overlay_front_active": {
        ticks_per_frame: 3,
        blend_frames: false,
    },
    "textures/blocks/machines/extruder/overlay_front_active_emissive": {
        ticks_per_frame: 3,
        blend_frames: false,
    },
    "textures/blocks/machines/fluid_heater/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/fluid_heater/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/fluid_solidifier/overlay_front_active": {
        ticks_per_frame: 4,
        blend_frames: false,
    },
    "textures/blocks/machines/fluid_solidifier/overlay_front_active_emissive": {
        ticks_per_frame: 4,
        blend_frames: false,
    },
    "textures/blocks/machines/forge_hammer/overlay_front_active": {
        ticks_per_frame: 2,
        frames: [0, 0, 0, 1, 2, 3, 4],
        blend_frames: false,
    },
    "textures/blocks/machines/forge_hammer/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        frames: [0, 0, 0, 1, 2, 3, 4],
        blend_frames: false,
    },
    "textures/blocks/machines/high_pressure_steam_miner/overlay_front": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/item_collector/overlay_top_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/machines/kinetic_mixer/overlay_back_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/machines/kinetic_mixer/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/kinetic_mixer/overlay_side_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/kinetic_mixer/overlay_top_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/laser_engraver/overlay_front_active": {
        ticks_per_frame: 1,
        frames: [8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 3, 3, 2, 2, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 5, 5, 6, 6, 7, 7, 15, 15, 15, 15, 14, 14, 14, 14, 13, 13, 13, 13, 12, 12, 12, 12, 11, 11, 11, 11, 10, 10, 10, 10, 2, 2, 1, 1, 0, 0, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 2, 2, 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 0, 0],
        blend_frames: false,
    },
    "textures/blocks/machines/laser_engraver/overlay_front_active_emissive": {
        ticks_per_frame: 1,
        frames: [8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 3, 3, 2, 2, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 5, 5, 6, 6, 7, 7, 15, 15, 15, 15, 14, 14, 14, 14, 13, 13, 13, 13, 12, 12, 12, 12, 11, 11, 11, 11, 10, 10, 10, 10, 2, 2, 1, 1, 0, 0, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 2, 2, 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 0, 0],
        blend_frames: false,
    },
    "textures/blocks/machines/lathe/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/lathe/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/macerator/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/macerator/overlay_top_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/macerator/overlay_top_active_emissive": {
        blend_frames: false,
    },
    "textures/blocks/machines/miner/overlay_front": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/miner/overlay_top_active_emissive": {
        ticks_per_frame: 2,
    },
    "textures/blocks/machines/mixer/overlay_back_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/machines/mixer/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/mixer/overlay_side_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/mixer/overlay_top_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/object_holder/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/object_holder/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/ore_washer/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/ore_washer/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk1/overlay_front": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk1/overlay_front_active": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk1/overlay_front_active_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk1/overlay_front_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk2/overlay_front": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk2/overlay_front_active": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk2/overlay_front_active_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk2/overlay_front_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk3/overlay_front": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk3/overlay_front_active": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk3/overlay_front_active_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk3/overlay_front_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk4/overlay_front": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk4/overlay_front_active": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk4/overlay_front_active_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/parallel_hatch_mk4/overlay_front_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/machines/pulverizer/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/pulverizer/overlay_top_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/recycler/overlay_front_active": {
        ticks_per_frame: 3,
        frames: [0, 1, 2, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/machines/recycler/overlay_front_active_emissive": {
        ticks_per_frame: 3,
        frames: [0, 1, 2, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/machines/replicator/overlay_front_active_emissive": {
        ticks_per_frame: 1,
        frames: [0, 1, 2, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/machines/rock_crusher/overlay_front_active": {
        blend_frames: false,
    },
    "textures/blocks/machines/rock_crusher/overlay_front_active_emissive": {
        blend_frames: false,
    },
    "textures/blocks/machines/scanner/overlay_front_active": {
        ticks_per_frame: 2,
        frames: [0, 1, 2, 3, 4, 5, 4, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/machines/scanner/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        frames: [0, 1, 2, 3, 4, 5, 4, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/machines/sifter/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/sifter/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/slicer/overlay_front_active": {
        ticks_per_frame: 3,
        blend_frames: false,
    },
    "textures/blocks/machines/slicer/overlay_front_active_emissive": {
        ticks_per_frame: 3,
        blend_frames: false,
    },
    "textures/blocks/machines/steam_miner/overlay_front": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/thermal_centrifuge/overlay_front_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/machines/thermal_centrifuge/overlay_front_active_emissive": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/machines/wiremill/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/wiremill/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator/overlay_back_active": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator/overlay_back_active_emissive": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator/overlay_front_active": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator/overlay_front_active_emissive": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator/overlay_side_active": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator/overlay_side_active_emissive": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator_te/overlay_back_active": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator_te/overlay_back_active_emissive": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator_te/overlay_front_active": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator_te/overlay_front_active_emissive": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator_te/overlay_side_active": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/machines/world_accelerator_te/overlay_side_active_emissive": {
        ticks_per_frame: 12,
        blend_frames: false,
    },
    "textures/blocks/material_sets/dull/liquid": {
        ticks_per_frame: 2,
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/material_sets/dull/molten": {
        ticks_per_frame: 2,
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/material_sets/fluid/liquid": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/material_sets/paper/fluid": {
        ticks_per_frame: 2,
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/material_sets/powder/fluid": {
        ticks_per_frame: 2,
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/material_sets/radioactive/block_secondary": {
        blend_frames: false,
    },
    "textures/blocks/material_sets/radioactive/frame_gt_secondary": {
        blend_frames: false,
    },
    "textures/blocks/material_sets/radioactive/raw_ore_block_secondary": {
        blend_frames: false,
    },
    "textures/blocks/multiblock/advanced_processing_array/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/advanced_processing_array/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/assembly_line/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/assembly_line/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/bedrock_ore_miner/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/bedrock_ore_miner/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/charcoal_pile_igniter/overlay_top_active_emissive": {
        ticks_per_frame: 3,
        blend_frames: false,
    },
    "textures/blocks/multiblock/cleanroom/overlay_bottom_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/multiblock/cleanroom/overlay_top_active": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/multiblock/cracking_unit/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/cracking_unit/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/distillation_tower/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/distillation_tower/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/evaporation_plant/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/evaporation_plant/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/fusion_reactor/fusion/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/multiblock/fusion_reactor/fusion/overlay_front_active_emsissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/multiblock/fusion_reactor/overlay_front_active_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/fusion_reactor/overlay_front_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/blast_alloy_smelter/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/blast_alloy_smelter/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_arc_smelter/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_arc_smelter/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_assembler/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_assembler/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_autoclave/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_autoclave/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_brewer/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_brewer/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_centrifuge/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_centrifuge/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_chemical_bath/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_chemical_bath/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_circuit_assembler/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_circuit_assembler/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_cutter/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_cutter/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_distillery/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_distillery/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_electrolyzer/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_electrolyzer/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_engraving_laser/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_engraving_laser/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_extractor/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_extractor/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_extruder/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_extruder/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_maceration_tower/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_maceration_tower/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_material_press/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_material_press/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_mixer/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_mixer/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_packer/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_packer/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_sifting_funnel/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_sifting_funnel/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_solidifier/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_solidifier/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_wiremill/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_wiremill/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_wire_factory/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/large_wire_factory/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/mega_blast_furnace/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/mega_blast_furnace/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/mega_vacuum_freezer/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/gcym/mega_vacuum_freezer/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/extreme_combustion_engine/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/extreme_combustion_engine/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_bronze_boiler/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_bronze_boiler/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_combustion_engine/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_combustion_engine/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_gas_turbine/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_gas_turbine/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_plasma_turbine/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_plasma_turbine/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_steam_turbine/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_steam_turbine/overlay_front_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_tungstensteel_boiler/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/generator/large_tungstensteel_boiler/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_miner/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_miner/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_turbine/blade_active/1": {
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_turbine/blade_active/2": {
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_turbine/blade_active/3": {
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_turbine/blade_active/4": {
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_turbine/blade_active/5": {
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_turbine/blade_active/6": {
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_turbine/blade_active/7": {
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_turbine/blade_active/8": {
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_turbine/blade_active/9": {
        blend_frames: false,
    },
    "textures/blocks/multiblock/large_turbine/rotor_spinning": {
        blend_frames: false,
    },
    "textures/blocks/multiblock/multiblock_workable/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/multiblock_workable/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/network_switch/overlay_front": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/network_switch/overlay_front_active": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/network_switch/overlay_front_active_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/network_switch/overlay_front_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/power_substation/overlay_front_active": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/power_substation/overlay_front_active_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/primitive_blast_furnace/overlay_front_active_emissive": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/multiblock/primitive_pump/overlay_front": {
        ticks_per_frame: 1,
        blend_frames: false,
    },
    "textures/blocks/multiblock/processing_array/overlay_front_active": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/processing_array/overlay_front_active_emissive": {
        ticks_per_frame: 16,
        frames: [0, 1, 2],
        blend_frames: false,
    },
    "textures/blocks/multiblock/research_station/overlay_front": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/research_station/overlay_front_active": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/research_station/overlay_front_active_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/research_station/overlay_front_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/multiblock/steam_grinder/overlay_front_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/multiblock/steam_grinder/overlay_front_active_emissive": {
        blend_frames: false,
    },
    "textures/blocks/overlay/appeng/me_buffer_hatch": {
        ticks_per_frame: 4,
    },
    "textures/blocks/overlay/appeng/me_buffer_hatch_proxy": {
        ticks_per_frame: 6,
    },
    "textures/blocks/overlay/automation/automation_regulator": {
        ticks_per_frame: 1,
        frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14],
        blend_frames: false,
    },
    "textures/blocks/overlay/automation/automation_superbuffer": {
        ticks_per_frame: 6,
        frames: [0, 1, 2, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/hpca/active_cooler_active": {
        ticks_per_frame: 9,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/hpca/active_cooler_active_emissive": {
        ticks_per_frame: 9,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/hpca/advanced_computation_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/hpca/advanced_computation_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/hpca/computation_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/hpca/computation_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/hpca/damaged_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/hpca/damaged_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/hpca/damaged_advanced_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/hpca/damaged_advanced_active_emissive": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_blower_active": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_buffer": {
        ticks_per_frame: 6,
        frames: [0, 1, 2, 3, 2, 1],
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_buffer_emissive": {
        ticks_per_frame: 6,
        frames: [0, 1, 2, 3, 2, 1],
    },
    "textures/blocks/overlay/machine/overlay_creativecontainer_emissive": {
        ticks_per_frame: 4,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_data_hatch_creative_emissive": {
        ticks_per_frame: 10,
    },
    "textures/blocks/overlay/machine/overlay_data_hatch_optical": {
        ticks_per_frame: 4,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_data_hatch_optical_emissive": {
        ticks_per_frame: 4,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_fluid_output": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_item_output": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_maintenance_cleaning_emissive": {
        ticks_per_frame: 10,
    },
    "textures/blocks/overlay/machine/overlay_maintenance_full_auto_emissive": {
        ticks_per_frame: 4,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_pipe_in": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_pipe_in_4x": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_pipe_in_9x": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_pipe_out": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_pipe_out_4x": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_pipe_out_9x": {
        ticks_per_frame: 2,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_qchest_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_qtank_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
    "textures/blocks/overlay/machine/overlay_screen_emissive": {
        ticks_per_frame: 8,
        blend_frames: false,
    },
}
