// planetAnim.pause();
const startHome = async () => {
  const homeLittlePlanet = document.getElementById("homeLittlePlanet");
  const pano = document.getElementById("pano");
  updateGameState();
  pano.style.opacity = "0";
  pano.style.display = "none";
  homeInterface.style.display = "block";
  homeInterface.style.opacity = "1";
  planetAnimation.resume();
  homeLittlePlanet.style.top = "0";
};

const fadeOutLittlePlanetHome = () => {
  const homeLittlePlanet = document.getElementById("homeLittlePlanet");
  homeLittlePlanet.style.top = "100%";
};
const HomeState = {
  hidden: null,
};

const showHome = async () => {
  countdown.stopAndReset();
  const homeLittlePlanet = document.getElementById("homeLittlePlanet");
  const pano = document.getElementById("pano");
  updateGameState();
  homeInterface.style.display = "block";
  await awaitStylecomplete(homeInterface, "display", "block");
  homeInterface.style.opacity = "1";
  planetAnimation.resume();
  homeLittlePlanet.style.top = "0";
  pano.style.opacity = "0";
  await awaitStylecomplete(pano, "opacity", "0");
  pano.style.display = "none";
  HomeState.hidden = false;
};

const updateHome = () => {
  // Game.updateConqueredPlacesStats(); //percentatge
  // updateCounterHome();
  // updateCounterTour();
  updateCounterHome();
  Game.conqueredPlaces.forEach((place) => {
    const matchingDiv = [...document.querySelectorAll(".hlp-label")].find((div) => div.innerText === place);
    if (matchingDiv) {
      matchingDiv.classList.remove("home-planet-label-active");
      matchingDiv.classList.add("home-planet-label-disabled");
    }
  });
};
