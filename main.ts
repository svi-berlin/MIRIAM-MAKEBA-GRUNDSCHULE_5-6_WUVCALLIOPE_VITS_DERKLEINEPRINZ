function derKleinePrinz () {
    basic.showString("Alle großen Leute waren einmal Kinder, aber nur wenige erinnern sich daran.\"")
    basic.pause(500)
    basic.showIcon(IconNames.Surprised)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
}
function blinkendesHerz () {
    basic.setLedColor(0xffff00)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.setLedColor(0x00ff00)
}
blinkendesHerz()
derKleinePrinz()
basic.forever(function () {
	
})
