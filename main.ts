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
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.pause(warte_blink)
        pins.analogWritePin(AnalogPin.P2, dioden_helligkeit)
        basic.pause(warte_blink)
    }
    alle_aus(aNum)
    gelb(aNum)
}
function rot (aNum: number) {
    alle_aus(1)
    basic.showString("R")
    pins.analogWritePin(AnalogPin.P0, dioden_helligkeit)
    basic.pause(warte_lang)
}
function alle_aus (aNum: number) {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
let warte_blink = 0
let warte_kurz = 0
let warte_lang = 0
let dioden_helligkeit = 0
basic.showIcon(IconNames.Heart)
dioden_helligkeit = 512
warte_lang = 5000
warte_kurz = 2000
warte_blink = 500
basic.forever(function () {
    rot(0)
    gelb(0)
    gruen(1)
})
