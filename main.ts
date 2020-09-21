radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(29)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.SmallDiamond)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showString("Movement")
        radio.sendString("~~~~~~~~~")
    } else {
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showString("Still")
        radio.sendString(" - - - - - ")
    }
    basic.pause(100)
})
