let anterior = 0
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(true)
OLED12864_I2C.showString(
1,
0,
"Nivell llum",
1
)
OLED12864_I2C.showString(
2,
2,
"lux:",
1
)
OLED12864_I2C.rect(
0,
12,
63,
28,
1
)
basic.forever(function () {
    if (anterior != input.lightLevel()) {
        anterior = input.lightLevel()
        OLED12864_I2C.showString(
        7,
        2,
        "   ",
        1
        )
        OLED12864_I2C.showNumber(
        7,
        2,
        anterior,
        1
        )
    }
    basic.pause(1000)
})
