const tourNext = document.getElementById("tourNext");

const hideNextPano = () => {
  const tourNextLayer = krpano.layer.getItem("nextTour");
  tourNextLayer.enabled = false;
  tourNext.style.display = "none";
  toggleClass(tourNext, "tourNextHover", "remove");
};

/// CRIADAT A KRPANO.HOTSPOTS->jscall("Game.checkPanoPointsGoal(showNextPano)");
const showNextPano = () => {
  if (!freestyle) {
    const tourNextLayer = krpano.layer.getItem("nextTour");
    if (Game.panoIndex === Game.placePanos) {
      tourNext.innerText = "LO HAS LOGRADO!";
      tourNextLayer.end = "true";
    } else {
      tourNext.innerText = "SIGUIENTE ACTIVIDAD";
      tourNextLayer.end = "false";
    }
    tourNextLayer.enabled = true;
    tourNext.style.display = "flex";
  }
};

const nextTourClassAdd = () => {
  // CRIDAT A KRPANO. FAKEBUTTONS AL HOVER OUT
  toggleClass(tourNext, "tourNextHover", "add");
};

const nextTourClassRemove = () => {
  // CRIDAT A KRPANO. FAKEBUTTONS AL HOVER OUT
  toggleClass(tourNext, "tourNextHover", "remove");
};

const endPlace = async () => {
  ///////////////////////////////////////////hud conquer place
  const hudContiueButton = document.getElementById("hudContiueButton");
  singleClass(hudContiueButton, "hudContinueButtonUnactive");
  const hudPrices = document.getElementById("hudPrices");
  singleClass(hudPrices, "hudPricesActive");
  const finalPlacePicture = document.getElementById("finalPlacePicture");
  singleClass(finalPlacePicture, `hudImage${Game.place}`);

  ///////////////////////////////////////////hud conquer place

  Game.conqueredPlace(Game.place, () => {
    Game.conqueredSkill(Game.panoskill);
    saveLocalStorage("bajoPresion", {
      lsuser: Game.user,
      lsplacesConquered: Game.conqueredPlaces,
      lsskillsConquered: Game.skillsConquered,
    });
    updateGameState();
  });
  await asyncLoopPositive((_) => HomeState.hidden, 10);
  fadeinAndPlayNewPanoVideo(Game.placeEndVideo);
  await waitForEventToTrigger(document.getElementById("skipVideoButton"), "click");
  showHud();
};

const nextTourClick = () => {
  // CRIDAT A KRPANO. FAKEBUTTONS AL CLCIK
  const tourNextLayer = krpano.layer.getItem("nextTour");
  if (tourNextLayer.end !== "true") {
    enterPano();
  } else {
    endPlace();
  }
  hideNextPano();
};
