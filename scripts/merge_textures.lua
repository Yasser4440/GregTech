local function tile(image, sprite, height)
    for offset = 0, height - 1, sprite.height do
        image:drawSprite(sprite, 1, Point(0, offset))
    end
end

local base_sprite = app.open(app.params["base"])
local overlay_sprite = app.open(app.params["overlay"])
local height = math.max(base_sprite.height, overlay_sprite.height)


local sprite = Sprite(base_sprite.width, height, ColorMode.RGB)

local base_image = sprite.cels[1].image
tile(base_image, base_sprite, height)

local overlay_image = sprite:newCel(sprite:newLayer()).image
tile(overlay_image, overlay_sprite, height)

sprite:saveCopyAs(app.params["path"])