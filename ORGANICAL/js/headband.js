const sec_headbands = document.querySelector("#sec-headbands");

const div_headbands = document.querySelector("#sec-headbands>div");
// div_headbands.style.backgroundColor = "blue";

const svg_headbands = document.querySelector("#svg-headband");

const band_1 = document.querySelector("#band1");
const band_2 = document.querySelector("#band2");
const band_3 = document.querySelector("#band3");
const band_4 = document.querySelector("#band4");
const bands = [ band_1, band_2, band_3, band_4 ]; 

/*
    make the header's elements appear gradually on load
*/
function upHeaderOpacity() {
    upOpacity(sec_headbands, 1, "2");
    upOpacity(band_2, 0.7, "8");
    upOpacity(band_3, 0.6, "14");
    upOpacity(band_4, 0.5, "16");
}
function upOpacity(elt, value, time) {
        elt.style.opacity = value;
        elt.style.transition = "all " + time + "s ease";
}
upHeaderOpacity();


const listElts = document.querySelectorAll("nav li");

let liCount = 1;
let incrementBool = true;

window.setInterval(function() {
    if(liCount == 100 || liCount == 0) {
        incrementBool = !incrementBool;
    }
    if(incrementBool) {
        liCount ++;
    }
    else {
        liCount --;
    }

    listElts.forEach(elt => {
    aleatoryMargin(elt, liCount);
    })
}, 500);

/*
    generate a random number between 0 and 4 and return a direction
*/
function randomDirection() {
    let rand = Math.floor(Math.random() * 4);
    let dir;
    switch (rand) {
        case 0:
            dir = "top";
            break;

        case 1:
            dir = "bottom";
            break;

        case 2:
            dir = "left";
            break;

        case 3:
            dir = "right";
            break;
    }
    return dir;
}

function aleatoryMargin(elt, value) {
    let direction = randomDirection();
    let marg = "margin" + direction.replace(direction[0], direction[0].toUpperCase());

    let val = elt.style[marg].replace("px", "");
    if(parseFloat(val) > 10) {
        elt.style[marg] = 0 + "px";
    }

    elt.style[marg] = value/5 + "px";
}