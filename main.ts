radio.onReceivedNumber(function (receivedNumber) {
    I = receivedNumber
})
let V = 0
let I = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
radio.setGroup(0)
I = 99
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
basic.forever(function () {
    if (I == 2) {
        if (V < 90) {
            V = V + 2
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, V)
            strip.showRainbow(1, 360)
        }
    } else if (I == 1) {
        if (V > 0) {
            V = V - 2
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, V)
            strip.showRainbow(1, 360)
        }
    }
    if (I == 3) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 15)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (I == 4) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -20)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (I == 5) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -80)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (I == 6) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 80)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (I == 0) {
        wuKong.stopAllMotor()
        strip.clear()
    }
})
