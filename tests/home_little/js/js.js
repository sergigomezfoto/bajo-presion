const rotateOptions = {
    containerId:"home-planet-wrapper",
    labelsClass: "home-planet-label",
    littleplanetId: "home-littleplanet",
    speed: 0.03,
    initialAngles: [0, 1.26, 2.51, 3.77, 5.03],
    initialRadius: [300, 280, 290, 310, 270],
    breakpoint: 1365,
    reductionFactor: 0.65,
};
  
planetAnimation(rotateOptions);

// let tiltActive=true;
// const tiltoptions = {
//     elementId:"home-planet-wrapper",
//     triggerId:"home_planet_spreader",
//     effect:30,
//     tiltActive,
// }

// addTiltShift(tiltoptions);

//   addTiltEffect({
//     divId: 'home-planet-wrapper',
//     marginOfActuation: 50,
//     effectStrength: 20
//   });