@namespace
class SpriteKind:
    Clothes = SpriteKind.create()
    Air = SpriteKind.create()

def on_overlap_tile(sprite, location):
    game.reset()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    game.reset()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    Dino.set_image(img("""
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
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.floor_light0,
    on_overlap_tile3)

def on_b_pressed():
    animation.run_image_animation(Dino,
        [img("""
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
            """),
            img("""
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
            """)],
        500,
        True)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_overlap_tile4(sprite4, location4):
    game.reset()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile4)

def on_a_pressed():
    Dino.say_text("Weeeeeeee!!!!!!!!", 500, False)
    Dino.ay = -4000
    Dino.set_image(img("""
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
    """))
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile5(sprite5, location5):
    game.reset()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava0,
    on_overlap_tile5)

def on_left_pressed():
    Dino.set_image(img("""
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
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    Dino.set_image(img("""
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
    """))
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    Dino.set_image(img("""
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
    """))
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_countdown_end():
    Dino.ay = 100000
info.on_countdown_end(on_countdown_end)

def on_overlap_tile6(sprite6, location6):
    tiles.set_tile_at(location6, assets.tile("""
        transparency16
    """))
    Dino.say_text("$$$$$")
    info.change_score_by(1)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_blue_crystal,
    on_overlap_tile6)

def on_right_pressed():
    Dino.set_image(img("""
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
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_combos_attach_combo():
    Dino.sx = 5
    Dino.sy = 5
controller.combos.attach_combo("RIGHT LEFT RIGHT LEFT", on_combos_attach_combo)

def on_down_pressed():
    Dino.set_image(img("""
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
    """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_overlap_tile7(sprite7, location7):
    game.reset()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
    """),
    on_overlap_tile7)

def on_combos_attach_combo2():
    Dino.sx = 1
    Dino.sy = 1
controller.combos.attach_combo("LEFT RIGHT LEFT RIGHT", on_combos_attach_combo2)

def on_a_repeated():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        Dino,
        50,
        0)
    projectile.set_bounce_on_wall(True)
controller.A.on_event(ControllerButtonEvent.REPEATED, on_a_repeated)

def on_b_released():
    pause(100)
controller.B.on_event(ControllerButtonEvent.RELEASED, on_b_released)

def on_combos_attach_combo3():
    Dino.sx = 10
    Dino.sy = 10
controller.combos.attach_combo("RIGHT RIGHT RIGHT RIGHT", on_combos_attach_combo3)

def on_overlap_tile8(sprite8, location8):
    tiles.set_tile_at(location8, sprites.dungeon.collectible_red_crystal)
    info.start_countdown(10)
    Dino.set_image(img("""
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
    """))
    tiles.set_wall_at(location8, False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile8)

def on_overlap_tile9(sprite9, location9):
    Dino.set_image(img("""
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
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.floor_dark2,
    on_overlap_tile9)

def on_on_overlap(sprite10, otherSprite):
    animation.run_image_animation(projectile,
        [img("""
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
            """),
            img("""
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
            """)],
        500,
        False)
    sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy, effects.fire, 50000)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

projectile: Sprite = None
Dino: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level1
"""))
Dino = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(Dino, 69, 0)
tiles.place_on_random_tile(Dino, sprites.dungeon.door_open_north)
scene.camera_follow_sprite(Dino)
Dino.set_bounce_on_wall(True)

def on_update_interval():
    Dino.ay = 100
game.on_update_interval(10, on_update_interval)
