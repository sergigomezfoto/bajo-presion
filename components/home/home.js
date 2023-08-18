const homeLittlePlanet = document.getElementById("homeLittlePlanet");
const pano = document.getElementById("pano");

// planetAnim.pause();
const startHome = async () => {
  pano.style.opacity = "0";
  pano.style.display = "none";
  homeInterface.style.display = "block";
  homeInterface.style.opacity = "1";
  planetAnimation.resume();
  updateGameState();
  homeLittlePlanet.style.top = "0";
};

const fadeOutLittlePlanetHome = () => {
  
  homeLittlePlanet.style.top = "100%";
 
};
const HomState={
  hidden:null,
}
const hideHome = async () => {
  updateGameState();// aqui no caldria
  pano.style.display = "block";
  await awaitStylecomplete(pano, "display", "block");
  pano.style.opacity = "1";
  homeLittlePlanet.style.top = "100%";
  homeInterface.style.opacity = "0";
  await awaitStylecomplete(homeInterface, "opacity", "0");
  planetAnimation.pause();
  homeInterface.style.display = "none";
  HomState.hidden=true;
  tourPanoTextContent.scrollTop = 1;
};
const showHome = async () => {
  updateGameState();
  homeInterface.style.display = "block";
  await awaitStylecomplete(homeInterface, "display", "block");
  homeInterface.style.opacity = "1";
  planetAnimation.resume();
  homeLittlePlanet.style.top = "0";
  pano.style.opacity = "0";
  await awaitStylecomplete(pano, "opacity", "0");
  pano.style.display = "none";
  HomState.hidden=false;
 
};



const updateHome = () => {
  Game.updateConqueredStats(); //percentatge
  updateCounterHome();
  updateCounterTour();
  Game.state.placesConquered.forEach((place) => {
    const matchingDiv = [...document.querySelectorAll(".hlp-label")].find((div) => div.innerText === place);
    if (matchingDiv) {
      matchingDiv.classList.remove("home-planet-label-active");
      matchingDiv.classList.add("home-planet-label-disabled");
    }
  });
};
