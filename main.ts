radio.onReceivedNumber(function (receivedNumber) {
    I = receivedNumber
})
let V = 0
let I = 0
radio.setGroup(0)
I = 99
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
basic.forever(function () {
    if (I == 1) {
        if (V < 90) {
            V = V + 2
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, V)
        }
    } else if (I == 2) {
        if (V > 0) {
            V = V - 2
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, V)
        }
    }
})
