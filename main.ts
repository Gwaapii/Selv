let avstand = 0
let retning = 0
bitbot.select_model(BBModel.XL)
bitbot.setLedColor(0x0080FF)
bitbot.buzz(true)
basic.forever(function () {
    retning = randint(0, 1)
    avstand = bitbot.sonar(BBPingUnit.Centimeters)
    if (avstand <= 7) {
        bitbot.setLedColor(0xFF0000)
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.OnceInBackground)
        if (retning == 0) {
            bitbot.rotatems(BBRobotDirection.Left, 20, 1300)
        } else if (retning == 1) {
            bitbot.rotatems(BBRobotDirection.Right, 20, 1300)
        }
    } else if (avstand <= 12) {
        bitbot.setLedColor(0xFFC000)
    } else {
        bitbot.setLedColor(0x0080FF)
        bitbot.go(BBDirection.Forward, 20)
    }
})
