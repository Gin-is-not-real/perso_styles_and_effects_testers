var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger', // starting scene, when reaching this element
    duration: 100 // pin the element for a total of 400px
    .setPin( "#pinned" )
    .addIndicators( { name: "test" } )
    .setPin('#pinned') // the element we want to pin
    .on("start", test())
})


// Add Scene to ScrollMagic Controller
controller.addScene(scene);

function test() {
    scene.style.backgroundColor = "red";
    console.log("ok");
} 

