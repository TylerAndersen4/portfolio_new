var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  offset: 100, // start scene after scrolling for 100px
  duration: 400 // pin the element for 400px of scrolling
  triggerElement: '#scroll-trigger' // point of execution
})
.setPin('#pinned-element1'); // the element we want to pin

// Add Scene to ScrollMagic Controller
controller.addScene(scene);
