const scrollable = document.querySelector(".scrollable");
scrollable.addEventListener('scroll', function(e) {
    myScrollEvent();
});

const divGradient = document.querySelector(".div-gradient-1");
divGradient.color1 = "var(--color-blue)";
divGradient.color2 = "var(--color-red)";

const divGradient2 = document.querySelector(".div-gradient-2");
// divGradient2.style.backgroundColor = "var(--color-red)";

const bubble = document.querySelector(".bubble");
bubble.color1 = "var(--color-turquoise)";
bubble.color2 = "var(--color-orange)";


/*
    GRADIENTS
*/
let gradElements = [divGradient, bubble];
gradElements.forEach(elt => {
    elt.style.backgroundImage = '-moz-linear-gradient(top,' + elt.color1 + ' 0%, ' + elt.color2 + '';
})

/*
    une variable counter est incrementée/decrementée par un setInterval
    des fonctions s'executent dans le setInterval
*/
let gradCounter = 1;
let incrementBool = true;

window.setInterval(function() {
    if(gradCounter == 100 || gradCounter == 0) {
        console.log(gradCounter + " inc " + incrementBool);
        incrementBool = !incrementBool;
    }
    if(incrementBool) {
        gradCounter ++;
    }
    else {
        gradCounter --;
    }

    gradElements.forEach(elt => {
        linearGradientAnim(elt);
    })

    console.log(gradCounter);
    divGradient2.style.opacity = gradCounter/100;
    // applyGradient(divGradient2, "var(--color-blue)", "var(--color-turquoise)", gradCounter);


}, 200);

/*
    gradient
*/
function linearGradientAnim(elt) {
    elt.style.backgroundImage = '-moz-linear-gradient(top, ' + elt.color1 + '' + (gradCounter+10) + '%, ' + elt.color2;
}

function applyGradient(elt, color1, color2, value) {
    elt.style.backgroundImage = '-moz-linear-gradient(top, ' + color1 + '' + value + '%, ' + color2;
}

/*
    APPEARS
*/
const bounding = document.querySelector(".bounding");
bounding.style.backgroundColor = "var(--color-orange)";

const rndAppears = document.querySelectorAll(".appear");
/*
    change opacity of an element in fonction of these top position relative to scrollable container
*/
let last_offset = 0;
let ticking = false;

function myScrollEvent() {
    last_offset = scrollable.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            appear(bounding, scrollable);

            rndAppears.forEach(elt => {
                appear(elt, scrollable);
            })

            ticking = false;
        });
        ticking = true;
    }
}

/*
    change opacity of an element in fonction of these top position relative to scrollable container
*/
function appear(elt, container) {
    let containerBottom = container.getBoundingClientRect().bottom;
    let containerTop = container.getBoundingClientRect().top;

    let top = elt.getBoundingClientRect().top;
    let bottom = elt.getBoundingClientRect().bottom;

    // console.log("containerTop: ", containerTop);
    // console.log("containerBottom: ", containerBottom);
    // console.log("top: ", top);
    // console.log("bottom: ", bottom);

    if(top < containerBottom) {
        //l'elt apparait
        let relative = containerBottom - top;
        let opacityValue = (relative/100);
        // console.log("relative: ", relative, ", opacityValue: ", opacityValue);

        elt.style.opacity = opacityValue.toFixed(2);
        elt.style.transition = "all 2s ease";
    }
    
}




