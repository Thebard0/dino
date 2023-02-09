namespace SpriteKind {
    export const Clothes = SpriteKind.create()
    export const Air = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    Dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e 7 . . . . 
        . . . . . . . . 7 e e 7 . . . . 
        . . . . . . . e 7 7 7 7 7 . . . 
        . . . . . e 7 e 7 7 f 7 7 . . . 
        . . . . 7 e 7 7 7 7 7 7 7 . . . 
        . . . e 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 e 7 7 7 7 7 7 7 . . . . . 
        . e 7 . 7 . 7 . 7 . 7 . . . . . 
        . . . . f . f . f . f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.combos.attachCombo("RIGHT RIGHT RIGHT RIGHT", function () {
    Dino.sx = 10
    Dino.sy = 10
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.hazardLava0, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.reset()
})
controller.combos.attachCombo("LEFT RIGHT LEFT RIGHT", function () {
    Dino.sx = 1
    Dino.sy = 1
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e 7 . . . . 
        . . . . . . . . 7 e e 7 . . . . 
        . . . . . . . e 7 7 7 7 7 . . . 
        . . . . . e 7 e 7 7 f 7 7 . . . 
        . . . . 7 e 7 7 7 7 7 7 7 . . . 
        . . . e 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 e 7 7 7 7 7 7 7 7 f . . . 
        . e 7 7 7 7 7 7 7 7 7 7 . . . . 
        7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 . 7 7 . 7 . . . . 
        . . . . . f f . f f . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Dino, 50, 0)
    projectile.setBounceOnWall(true)
})
controller.combos.attachCombo("RIGHT LEFT RIGHT LEFT", function () {
    Dino.sx = 5
    Dino.sy = 5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.placeOnRandomTile(Dino, sprites.dungeon.collectibleRedCrystal)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Dino.sayText("$$$$$")
    info.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    Dino.ay = 10000000000
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Dino.sayText("Weeeeeeee!!!!!!!!", 500, false)
    Dino.ay = -4000
    Dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e 7 . . . . 
        . . . . . . . 2 f e e 7 . . . . 
        . . . . . . 2 2 f 7 7 7 7 . . . 
        . . . . . 2 2 2 2 7 f 7 7 . . . 
        . . . . 7 2 2 5 f 7 7 7 7 . . . 
        . . . 2 2 5 5 5 2 7 7 7 7 . . . 
        . . 2 2 5 5 2 2 5 7 7 . . . . . 
        . 5 2 5 5 2 5 5 7 . 7 . . . . . 
        . 5 5 5 2 5 5 . f . f . . . . . 
        . 5 5 2 5 5 . . . . . . . . . . 
        . . 5 5 5 2 . . . . . . . . . . 
        . . . 5 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . e 7 . . . 
        . . . . . . e 7 e 7 7 f 7 7 . . 
        . . . 7 e 7 7 7 7 7 7 7 7 f . . 
        . . . . . . 7 7 . 7 7 . 7 . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    Dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e 7 . . . . 
        . . . . . . . . 7 e e 7 . . . . 
        . . . . . . . e 7 7 7 7 7 . . . 
        . . . . . e 7 e 7 7 f 7 7 . . . 
        . . . . 7 e 7 7 7 7 7 7 7 . . . 
        . . . e 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 e 7 7 7 7 7 7 7 7 f . . . 
        . e 7 7 7 7 7 7 7 7 7 7 . . . . 
        7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 . 7 7 . 7 . . . . 
        . . . . . f f . f f . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    Dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e 7 . . . . 
        . . . . . . . . 7 e e 7 . . . . 
        . . . . . . . e 7 7 7 7 7 . . . 
        . . . . . e 7 e 7 7 f 7 7 . . . 
        . . . . 7 e 7 7 7 7 7 7 7 . . . 
        . . . e 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 e 7 7 7 7 7 7 7 7 f . . . 
        . e 7 7 7 7 7 7 7 7 7 7 . . . . 
        7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 . 7 7 . 7 . . . . 
        . . . . . f f . f f . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e 7 . . . . 
        . . . . . . . . 7 e e 7 . . . . 
        . . . . . . . e 7 7 7 7 7 . . . 
        . . . . . e 7 e 7 7 f 7 7 . . . 
        . . . . 7 e 7 7 7 7 7 7 7 . . . 
        . . . e 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 e 7 7 7 7 7 7 7 . . . . . 
        . e 7 . 7 . 7 . 7 . 7 . . . . . 
        . . . . f . f . f . f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
function On_start () {
    tiles.setCurrentTilemap(tilemap`level1`)
    Dino = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e 7 . . . . 
        . . . . . . . . 7 e e 7 . . . . 
        . . . . . . . e 7 7 7 7 7 . . . 
        . . . . . e 7 e 7 7 f 7 7 . . . 
        . . . . 7 e 7 7 7 7 7 7 7 . . . 
        . . . e 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 e 7 7 7 7 7 7 7 . . . . . 
        . e 7 . 7 . 7 . 7 . 7 . . . . . 
        . . . . f . f . f . f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Dino, 69, 0)
    tiles.placeOnRandomTile(Dino, sprites.dungeon.doorOpenNorth)
    scene.cameraFollowSprite(Dino)
    Dino.setBounceOnWall(true)
    Dino.ay += -1000
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.reset()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 e . . . . . . . . . . 
        . . . . 7 e e 7 . . . . . . . . 
        . . . 7 7 7 7 7 e . . . . . . . 
        . . . 7 7 f 7 7 e 7 e . . . . . 
        . . . 7 7 7 7 7 7 7 e 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 7 e . . . 
        . . . . . 7 7 7 7 7 7 7 e 7 . . 
        . . . . . 7 . 7 . 7 . 7 . 7 e . 
        . . . . . f . f . f . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.collectibleRedCrystal)
    info.startCountdown(10)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 4 4 4 4 4 4 4 2 2 . . 
        . . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
        . . 2 2 4 4 5 5 5 5 5 4 4 2 2 . 
        . . 2 2 4 4 5 5 5 5 5 4 4 2 2 . 
        . . 2 2 4 4 5 5 5 5 5 4 4 2 2 . 
        . . 2 2 4 4 5 5 5 5 5 4 4 2 2 . 
        . . 2 2 4 4 5 5 5 5 5 4 4 2 2 . 
        . . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
        . . . 2 2 4 4 4 4 4 4 4 2 2 . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 4 4 4 4 4 2 . . . . 
        . . . . 2 4 4 4 4 4 4 2 2 . . . 
        . . . . 2 4 4 5 5 5 4 2 2 . . . 
        . . . . 2 4 4 5 5 5 4 2 2 . . . 
        . . . . 2 4 4 5 5 5 4 2 2 . . . 
        . . . . 2 4 4 4 4 4 4 2 2 . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 50000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark2, function (sprite, location) {
    Dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e 7 . . . . 
        . . . . . . . . 7 e e 7 . . . . 
        . . . . . . . e 7 7 7 7 7 . . . 
        . . . . . e 7 e 7 7 f 7 7 . . . 
        . . . . 7 e 7 7 7 7 7 7 7 . . . 
        . . . e 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 e 7 7 7 7 7 7 7 . . . . . 
        . e 7 . 7 . 7 . 7 . 7 . . . . . 
        . . . . f . f . f . f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Dino.setImage(img`
        ........................................ff..................
        ........................................ff..................
        ........................................ff..................
        ........................................fff..fffff..........
        ........................................fff..fffff..........
        ........................................ffffffffff..........
        ........................................ffffffffff..........
        ........................................ffffffffff..........
        ........................................ffffffffffe77777....
        ........................................ffffffffffe77777....
        ...............................fff......fffffffeffe77777....
        ...............................fff......fffffffeffe77777....
        ...............................fff......fffffffeffe77777....
        .......................fff.....fffff7777eefffeeeeee77777....
        .......................fff.....fffff7777eefffeeeeee77777....
        ......................ffff.....fff..7777eeeeeeeeeee77777....
        ......................ffff.....fff..7777eeeeeeeeeee77777....
        .......................fff.....fff..7777eeeeeeeeeee77777....
        .......................fff.....fff..7777eeeeeeeeeee77777....
        .......................fff.....eefee777777777777777777777777
        .......................fff.....eeeee777777777777777777777777
        .......................fff.....eeeee777777777777777777777777
        ...........f..........effe77777eeeee77777777777ffff777777777
        ...........f..........effe77777eeeee77777777777ffff777777777
        ...........f..ff......eeee77777eeeee77777777777ffff777777777
        ...........f..ff......eeee77777eeeee77777777777ffff777777777
        ...........fffff......eeee77777eeeffffffff77777fff2777777777
        ...........fffff777777eeee7777777f77777777f7777777fffffff777
        ...........fffff777777eeee7777777f77777777f7777777fffffff777
        ...........fffff777777eeee7777777f77777777f77777ff7777777ff7
        ...........fffff777777eeee7777777f77777777f77777ff7777777ff7
        ..fff.......ffff777777eeee7777777f77777777f77777ff7777777ff7
        ..fff.......ffff777777eeee7777777f77777777f77777ff7777777ff7
        ..fff......effee7fffffffffff77777f77777777f77777ff7777777ff7
        ..fff......eeeeef77777777777f7777f77777777f77777ff7777777ff7
        ..fff......eeeeef77777777777f7777f77777777f77777ff7777777ff7
        ..fff......eeeeef77777777777f77777ffffffff777777ff7777777ff7
        ..fff......eeeeef77777777777f77777ffffffff777777ff7777777ff7
        ..fff.77777eeeeef77777777777f777777777777777777777ffffffffff
        ..fff.77777eeeeef77777777777f777777777777777777777ffffffffff
        ..ffff77777eeeeef77777777777f777777777777777777777777777fff2
        ..feee7777777777f77777777777f77777777777ffffffff777777772..2
        ..feee7777777777f77777777777f77777777777ffffffff777777772..2
        ..eeee7777777777f77777777777f77777777777ff77777f77777777....
        ..eeee7777777777f77777777777f77777777777ff77777f77777777....
        ..eeee7777777777f77777777777f77777777777ff77777f77777777....
        ..eeee7777777777f77777777777f77777777777ff77777f77777777....
        77777777777777777fffffffffff777777777777ff77777f77777777....
        7777777777777777777777777777777777777777ffffffff77777777....
        7777777777777777777777777777777777777777ffffffff77777777....
        77777777777777777777777777777777777777777777777777777777....
        77777777777777777777777777777777777777777777777777777777....
        ......................777777777.....77777777777....77777....
        ......................777777777.....77777777777....77777....
        ......................777777777.....77777777777....77777....
        ......................777777777.....77777777777....77777....
        ......................777777777.....77777777777....77777....
        ......................fffffffff.....fffffffffff....fffff....
        ......................fffffffff.....fffffffffff....fffff....
        ......................fffffffff.....fffffffffff....fffff....
        `)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Dino,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 2 . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 2 4 4 2 2 . . . . 
        . . . . 2 2 2 4 4 4 2 2 . . . . 
        . . . . . 2 2 4 4 2 2 2 2 . . . 
        . . . . . 2 2 4 4 2 2 2 2 . . . 
        . . . . 2 2 2 4 4 2 2 2 . . . . 
        . . . . 2 2 4 4 4 2 2 2 . . . . 
        . . . 2 2 2 4 4 4 4 2 . . . . . 
        . . . 2 2 2 4 4 4 4 4 2 . . . . 
        . . . 2 2 4 4 4 5 5 4 2 2 . . . 
        . . . 2 2 4 4 5 5 5 4 4 2 2 2 . 
        . . . 2 2 2 4 5 5 5 4 4 2 2 2 . 
        . . 2 2 2 4 4 4 5 5 4 4 4 2 2 . 
        . . 2 2 2 4 4 5 5 5 5 4 4 2 2 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . 2 . 2 . 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 4 2 4 2 2 2 2 2 . . 
        . . 2 2 2 4 4 4 4 4 2 2 2 2 . . 
        . . 2 2 2 4 4 4 4 4 2 2 2 2 . . 
        . . 2 2 4 4 4 4 4 4 2 2 2 2 2 . 
        . . 2 2 4 4 4 4 4 4 4 2 2 2 2 . 
        . 2 2 2 4 4 5 5 4 4 4 2 2 2 2 2 
        . 2 2 2 4 4 5 5 4 4 4 4 2 2 2 2 
        `],
    500,
    true
    )
})
let projectile: Sprite = null
let Dino: Sprite = null
On_start()
game.onUpdateInterval(10, function () {
    Dino.ay = 100
})
game.onUpdateInterval(20000, function () {
    info.startCountdown(5)
})
forever(function () {
    music.playMelody("B B A A G G F F ", 10000)
})
