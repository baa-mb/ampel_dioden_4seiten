function gelb (aNum: number) {
    basic.showString("Y")
    pins.analogWritePin(AnalogPin.P1, dioden_helligkeit)
    basic.pause(warte_kurz)
}
function gruen (aNum: number) {
    basic.showString("G")
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, dioden_helligkeit)
    basic.pause(warte_lang)
}
function rot (aNum: number) {
    basic.showString("R")
    pins.analogWritePin(AnalogPin.P0, dioden_helligkeit)
    basic.pause(warte_lang)
}
let warte_kurz = 0
let warte_lang = 0
let dioden_helligkeit = 0
basic.showIcon(IconNames.Heart)
dioden_helligkeit = 512
warte_lang = 5000
warte_kurz = 1000
basic.forever(function () {
    rot(0)
    gelb(0)
    gruen(1)
})
