input.onPinPressed(TouchPin.P0, function () {
    x = 4
    y = 0
    for (let y = 0; y <= 4; y++) {
        led.plot(x, y)
        x += -1
        basic.pause(100)
    }
})
input.onButtonPressed(Button.A, function () {
    counter = 5
    while (counter >= 0) {
        basic.showNumber(counter)
        counter += -1
    }
    music.playMelody("D F G F G A E D ", 120)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Sad)
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    while (input.lightLevel() >= 128) {
        basic.showIcon(IconNames.Happy)
        music.playTone(294, music.beat(BeatFraction.Double))
    }
    basic.clearScreen()
})
let counter = 0
let y = 0
let x = 0
let sprite = game.createSprite(1, 3)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        sprite.move(2)
        basic.pause(100)
        sprite.turn(Direction.Left, 90)
        basic.pause(100)
    }
})
