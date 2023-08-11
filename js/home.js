const homeLittlePlanet= document.getElementById('homeLittlePlanet');
const planetAnimation = new PlanetAnimation(rotateOptions);
planetAnimation.pause();
document.addEventListener("DOMContentLoaded", function() {
    // Create the PlanetAnimation object here
});
// planetAnim.pause();
const startHome=()=>{
    planetAnimation.resume();
    updateGameState();
    homeLittlePlanet.style.top='0';
}