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
  Game.resetNowState();
  countdown.stopAndReset();
  const homeLittlePlanet = document.getElementById("homeLittlePlanet");
  const pano = document.getElementById("pano");
  updateGameState();
  homeInterface.style.display = "block";
  await awaitStylecomplete(homeInterface, "display", "block",500,()=>{throw `máxims intents showhome1`},'showhome1');
  homeInterface.style.opacity = "1";
  planetAnimation.resume();
  homeLittlePlanet.style.top = "0";
  pano.style.opacity = "0";
  await awaitStylecomplete(pano, "opacity", "0",500,()=>{throw `máxims intents showhome2`},'showhome2');
  pano.style.display = "none";
  HomeState.hidden = false;
};

const updateHome = () => {
  updateCounterHome();
  Game.conqueredPlaces.forEach((place) => {
    const matchingDiv = document.querySelector(`.hlp-label[data-value="${place}"]`);
    if (matchingDiv) {
      matchingDiv.classList.remove("home-planet-label-active");
      matchingDiv.classList.add("home-planet-label-disabled");
    }
  });
};
