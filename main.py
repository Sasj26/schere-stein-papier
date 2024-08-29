def on_button_pressed_a():
    global Hand, Gegner
    Hand = randint(1, 3)
    Gegner = randint(1, 3)
    if Hand == 1:
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.pause(1500)
        if Gegner == 1:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                """)
            basic.pause(1500)
            game.add_score(0)
        elif Gegner == 2:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                """)
            basic.pause(1500)
            game.add_score(-1)
            Punkte - 1
        else:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                """)
            basic.pause(1500)
            game.add_score(1)
            Punkte + 1
    elif Hand == 2:
        basic.show_leds("""
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            """)
        basic.pause(1500)
        if Gegner == 1:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                """)
            basic.pause(1500)
            game.add_score(1)
            Punkte + 1
        elif Gegner == 2:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                """)
            basic.pause(1500)
            game.add_score(0)
        else:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                """)
            basic.pause(1500)
            game.add_score(-1)
            Punkte - 1
    else:
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        basic.pause(1500)
        if Gegner == 1:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                """)
            basic.pause(1500)
            game.add_score(-1)
            Punkte - 1
        elif Gegner == 2:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                """)
            basic.pause(1500)
            game.add_score(1)
            Punkte + 1
        else:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                """)
            basic.pause(1500)
            game.add_score(0)
    basic.pause(2500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_number(game.score())
input.on_button_pressed(Button.B, on_button_pressed_b)

Gegner = 0
Hand = 0
Score = 0
Punkte = 0