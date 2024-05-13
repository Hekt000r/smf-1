basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showIcon(IconNames.No)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.clearScreen()
})
