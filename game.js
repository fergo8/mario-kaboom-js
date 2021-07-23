kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1]
})

loadRoot("https://i.imgur.com/")
loadSprite("mario", "p8XLtoA.png")
loadSprite("plataforma", "Rv6JxzG.png")

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
        "                                    ",
        "                                    ",
        "                                    ",
        "                                    ",
        "                                    ",
        "                                    ",
        "                                    ",
        "                                    ",
        "                                    ",
        "===================================="
    ]

    const levelCfg = {
        width: 20,
        height: 29,
        "=": [sprite("plataforma", solid())]
    }

    const gameLevel = addLevel(map, levelCfg)

    const player = add([
        sprite("mario"),
        solid(),
        pos(50, 0),
        body(),
        origin("top"),
    ])
})

start("game")

