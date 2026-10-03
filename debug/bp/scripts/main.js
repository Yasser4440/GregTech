import { world, system } from "@minecraft/server"

system.beforeEvents.startup.subscribe(event => {
    event.blockComponentRegistry.registerCustomComponent("gregtech:machine", {
        onTick({ block, dimension }, { params: { type, tier } }) {
            const dynamics = block.getComponent("dynamic_properties")
            
        },
        onPlace({ block, dimension }, { params: { type, tier } }) {
            const dynamics = block.getComponent("dynamic_properties")
            dynamics.set("a", 1)
            const inventory = block.getComponent("inventory")
            console.log(dynamics, inventory.container.size)
        }
    })
})