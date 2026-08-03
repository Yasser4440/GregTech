local sprite = Sprite(16, 16, ColorMode.RGB)

local base_image = sprite.cels[1].image
local base_sprite = app.open(app.params["base"])
base_image:drawSprite(base_sprite)

local overlay_image = sprite:newCel(sprite:newLayer()).image
local overlay_sprite = app.open(app.params["overlay"])
overlay_image:drawSprite(overlay_sprite)

sprite:saveCopyAs(app.params["path"])