let Buckly = 0
input.onButtonPressed(Button.A, function () {
    Buckly = 2
    basic.showNumber(Buckly)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        Buckly += 1
        basic.showNumber(Buckly)
    }
})
basic.forever(function () {
	
})
