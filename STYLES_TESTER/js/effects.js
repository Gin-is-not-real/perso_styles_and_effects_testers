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

function upAndDownCounter(counter) {
    if(counter == 100 || counter == 0) {
        incrementBool = !incrementBool;
    }
    if(incrementBool) {
        counter ++;
    }
    else {
        counter --;
    }
    return counter;
}

window.setInterval(function() {
    gradCounter = upAndDownCounter(gradCounter);
    // console.log(gradCounter);

    gradElements.forEach(elt => {
         linearGradientAnim(elt);
    })

    // console.log(gradCounter);
    // divGradient2.style.opacity = gradCounter/100;
    applyGradient(divGradient2, "var(--color-orange)", "var(--color-turquoise)", gradCounter);

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
const appearDiv = document.querySelector(".div-appear");
appearDiv.style.backgroundColor = "var(--color-orange)";

const appearsElts = document.querySelectorAll(".appear");
/*
    myScrollEvent run events on .scrollable scroll
*/
let last_offset = 0;
let ticking = false;

function myScrollEvent() {
    last_offset = scrollable.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(function() {
            appearsElts.forEach(elt => {
                makeElementAppears(elt, scrollable);
            })

            ticking = false;
        });
        ticking = true;
    }
}

/*
    change opacity of an element in fonction of these top position relative to scrollable container
*/
function makeElementAppears(elt, container) {
    let isVisible = getPixelsAboveBottomLimit(elt, container);
    if(isVisible) {
        let visiblePercents = (isVisible / getEltHeight(elt)) * 100;
        changeOpacity(elt, visiblePercents/100);
    }
}

function changeOpacity(elt, value) {
    elt.style.opacity = value.toFixed(2);
    elt.style.transition = "all 2s ease";        
}

function getPixelsAboveBottomLimit(elt, container) {
    let pixels = container.getBoundingClientRect().bottom - elt.getBoundingClientRect().top;
    if(pixels > 0) {
        return pixels;
    }
    else {
        return false;
    }
}
function getEltHeight(elt) {
    return elt.getBoundingClientRect().bottom - elt.getBoundingClientRect().top;
}

/*
    make element surge to left
*/
let surgeLeft = document.querySelector(".surge-left");
surgeLeft.addEventListener("click", function() {
    surge(surgeLeft);
    retract(surgeLeft);
});

function surge(elt) {
    let style = window.getComputedStyle(elt);
    elt.style.paddingRight = "100px";
    elt.style.transition = "all 0.5s ease";
}
function retract(elt) {
    elt.style.paddingRight = "0px";

    window.setTimeout(function() {
        elt.style.paddingRight = "30px";
    }, 300);

    window.setTimeout(function() {
        elt.style.paddingRight = "0px";
    }, 500);

    window.setTimeout(function() {
        elt.style.paddingRight = "10px";
    }, 700);

    window.setTimeout(function() {
        elt.style.paddingRight = "0px";
    }, 1000);
}
// surge(surgeLeft);


/*
    moving a background
*/
let fig = document.querySelectorAll(".fig-window");
let fig0 = fig[0];
let img1 = document.querySelector("#img-moving-1");
img1.addEventListener("transitionend", updateTransition, true);
console.log(img1);

function updateTransition() {
    console.log(this, this.style.marginLeft);
    if(this.style.marginLeft == "100%") {
        marginElt(this, "0%", 0);
    }
    else {
         marginElt(elt, "100%", 3);
    }
}
function moveBackgroundImage(elt) {
    elt.style.marginLeft = "0%";
    let style = window.getComputedStyle(elt);
    console.log(elt.style.marginLeft);

    marginElt(elt, "100%", 3);
}
function marginElt(elt, value, time) {
    elt.style.marginLeft = value;
    elt.style.transition = "all " + time + "s ease";
}
// moveBackgroundImage(img1);