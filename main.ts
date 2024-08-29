input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Hand = randint(1, 3)
    Gegner = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(1500)
        if (Gegner == 1) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.pause(1500)
            game.addScore(0)
        } else if (Gegner == 2) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.pause(1500)
            game.addScore(-1)
            Punkte - 1
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(1500)
            game.addScore(1)
            Punkte + 1
        }
        
    } else if (Hand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        basic.pause(1500)
        if (Gegner == 1) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(1500)
            game.addScore(1)
            Punkte + 1
        } else if (Gegner == 2) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.pause(1500)
            game.addScore(0)
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.pause(1500)
            game.addScore(-1)
            Punkte - 1
        }
        
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(1500)
        if (Gegner == 1) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.pause(1500)
            game.addScore(-1)
            Punkte - 1
        } else if (Gegner == 2) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(1500)
            game.addScore(1)
            Punkte + 1
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.pause(1500)
            game.addScore(0)
        }
        
    }
    
    basic.pause(2500)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showNumber(game.score())
})
let Gegner = 0
let Hand = 0
let Score = 0
let Punkte = 0
