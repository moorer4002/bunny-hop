controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Bunny.y == 95) {
        Bunny.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let speed = 0
let Bunny: Sprite = null
scene.setBackgroundColor(13)
Bunny = sprites.create(img`
    . . . . . . . . . f f f f f . . 
    . . . . . . . . f 1 1 1 1 1 f . 
    . . . . . . . . f 1 1 1 1 1 f . 
    . . . . . . . f 1 1 1 1 1 1 f . 
    . . . . . . . f 1 1 f 1 1 1 f . 
    . . . . f f f f 1 1 f 1 1 1 f . 
    . . . f 1 1 d f 1 1 f f f f . . 
    . . f 1 1 1 d f 1 1 f 1 f . . . 
    . f f 1 1 1 d f 1 1 f 1 f . . . 
    f 1 1 1 1 1 1 d f f 1 1 f . . . 
    f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
    . f f 1 1 1 1 1 1 1 1 1 f . . . 
    . . f d 1 1 1 1 1 1 1 1 f . . . 
    . . f d 1 1 1 1 1 1 1 d f . . . 
    . . . f d d d d d d d f . . . . 
    . . . . f f f f f f f . . . . . 
    `, SpriteKind.Player)
Bunny.setPosition(10, 95)
game.onUpdate(function () {
    if (Bunny.y < 95) {
        Bunny.ay = 500
    } else {
        Bunny.ay = 0
        Bunny.vy = 0
    }
})
game.onUpdateInterval(2000, function () {
    speed = -100 - game.runtime() / 250
    projectile = sprites.createProjectileFromSide(img`
        ........................
        ..........bbbb..........
        ........bbddddbb........
        .......bddbbbbddb.......
        ......bdbbddddbbdb......
        .....bdbbdbbbbdbbdb.....
        .....bdbdbddddbdbdb.....
        .....cdbbdbbbbdbbdc.....
        .....cbdbbddddbbdbc.....
        .....efbddbbbbddbce.....
        .....eeffbddddbccee.....
        .....eeeeffcccceee......
        .....ceeeeeeeeeeee......
        .....ceeeeeeeeeeee......
        .....feeeeeeeeeeee......
        .....cceeeeeeeeeee......
        ......feeeeeeeeeee......
        .....6fceeeeeeeeee6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6666776...
        ..67768e67766777667776..
        ...668ee7768867788666...
        ......ee77eeee77ecee....
        ......ee6eeeeee6eef.....
        `, speed, 0)
    projectile.y = 95
    info.changeScoreBy(1)
})
