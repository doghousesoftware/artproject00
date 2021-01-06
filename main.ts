input.onButtonPressed(Button.A, function () {
    flash()
    servos.P0.setAngle(0)
    servos.P0.stop()
    flash()
})
function flash () {
    for (let index = 0; index < randint(3, 10); index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
input.onButtonPressed(Button.B, function () {
    flash()
    servos.P0.setAngle(180)
    servos.P0.stop()
    flash()
})
