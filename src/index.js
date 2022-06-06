
const colorBlock = document.querySelectorAll('.color-block');
const randBtn = document.querySelector('.randomBtn');
let randomRGB = [];
let x;



function randomize() {
    randomRGB = [];
    for (let i = 1; i <= 3; i++) {
        x = Math.floor(Math.random() * 255);
        randomRGB.push(x);
    }
    return randomRGB;
}

function randomizeRGB() {
    let hex = [];
    let text;
    for (let i = 0; i < colorBlock.length; i++) {
        let color = randomize().toString();
        text = color.split(',');
        if ((text[0] < 120) || (text[1] < 120) || (text[2] < 120)) {
            colorBlock[i].setAttribute('style', "color:#FFFFFF;" + " background-color: rgb(" + color + ")");
            colorBlock[i].innerHTML = rgbToHex(color);
        } else {
            colorBlock[i].setAttribute('style', "background-color: rgb(" + color + ")");
            colorBlock[i].innerHTML = rgbToHex(color);
        }
    }
}

function rgbToHex(color) {
    color = color.replace(/[^\d,]/g, "").split(",");
    return "#" + ((1 << 24) + (+color[0] << 16) + (+color[1] << 8) + +color[2]).toString(16).slice(1).toUpperCase();
}

console.log(randomize().toString());
console.log(randomize());
console.log(randomize());


randBtn.addEventListener('click', randomizeRGB);

let meep = randomize().toString();
console.log(rgbToHex(meep));