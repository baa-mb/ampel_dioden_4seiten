function gelb (aNum: number) {
    basic.showString("Y")
    pins.analogWritePin(ampelseite[aNum]+1, dioden_helligkeit)
basic.pause(warte_kurz)
}
function gruen (aNum: number) {
    basic.showString("G")
    pins.analogWritePin(ampelseite[aNum]+0, 0)
pins.analogWritePin(ampelseite[aNum]+1, 0)
pins.analogWritePin(ampelseite[aNum]+2, dioden_helligkeit)
basic.pause(warte_lang)
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(ampelseite[aNum]+2, 0)
basic.pause(warte_blink)
        pins.analogWritePin(ampelseite[aNum]+2, dioden_helligkeit)
basic.pause(warte_blink)
    }
    alle_aus(aNum)
    gelb(aNum)
}
function rot (aNum: number) {
    alle_aus(1)
    basic.showString("R")
    pins.analogWritePin(ampelseite[aNum]+0, dioden_helligkeit)
basic.pause(warte_lang)
}
function alle_aus (aNum: number) {
    pins.analogWritePin(ampelseite[aNum]+0, 0)
pins.analogWritePin(ampelseite[aNum]+1, 0)
pins.analogWritePin(ampelseite[aNum]+2, 0)
}
let warte_blink = 0
let warte_kurz = 0
let warte_lang = 0
let dioden_helligkeit = 0
basic.showIcon(IconNames.Heart)
let ampelseite = [100, 112]
dioden_helligkeit = 512
warte_lang = 5000
warte_kurz = 2000
warte_blink = 500
basic.forever(function () {
    rot(1)
    gelb(1)
    gruen(0)
})
