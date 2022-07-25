let BACKGROUND = [];
let BACKGROUND_CHANGING = [[
    'img/5.Fondo/Capas/5.cielo_1920-1080px.png',
    'img/5.Fondo/Capas/3.Fondo3/1.png',
    'img/5.Fondo/Capas/2.Fondo2/1.png',
    'img/5.Fondo/Capas/1.suelo-fondo1/1.png'],
[
    'img/5.Fondo/Capas/5.cielo_1920-1080px.png',
    'img/5.Fondo/Capas/3.Fondo3/2.png',
    'img/5.Fondo/Capas/2.Fondo2/2.png',
    'img/5.Fondo/Capas/1.suelo-fondo1/2.png']];

generateBackground(7);
/* hier ist der constructor für das neue Level. Bottles ist ein Parameter, enemies usw. sind Parameter dieses Constructors. new Chicken ==> enemies */
const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Cloud()
    ],
    BACKGROUND,
    [
    new ThrowableObject(),
    new ThrowableObject(),
    new ThrowableObject(),
    new ThrowableObject(),
    new ThrowableObject(),
    new ThrowableObject(),
    new ThrowableObject(),
    new ThrowableObject(),
    new ThrowableObject(),
    new ThrowableObject()
]
);

/* this function is used to generate a background with a certain lenght depending on the i value */

function generateBackground(worldLength) {

    for (let i = -1; i < worldLength; i++) {
        if (isOdd(i) == true) {
            for (let k = 0; k < BACKGROUND_CHANGING[0].length; k++) {
                x = i * 719
                BACKGROUND.push(new StaticObject(`${BACKGROUND_CHANGING[0][k]}`, x))
            }
        }
        else if (isOdd(i) == false) {
            for (let m = 0; m < BACKGROUND_CHANGING[1].length; m++) {
                x = i * 719
                BACKGROUND.push(new StaticObject(`${BACKGROUND_CHANGING[1][m]}`, x))
            }
        }
    };
}

function isOdd(num) { return Math.abs(num % 2) }
/* 
function numberOfObjects(number, newObject) {
    let array = [];
    for (let i = 0; i < number; i++) {
        const element = new newObject;

    }

} */