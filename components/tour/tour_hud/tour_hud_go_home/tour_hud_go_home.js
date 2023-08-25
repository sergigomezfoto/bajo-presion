const hudGoHomeButton = document.getElementById("hudGoHomeButton");

const hudGohomeAdvisorWrapper = document.getElementById("hudGohomeAdvisorWrapper");
const hudGoHomeYes = document.getElementById("hudGoHomeYes");
const hudGoHomeNo = document.getElementById("hudGoHomeNo");

const showHudGoHomeAdvisor = () => {
  if (Game.conqueredPlaces.includes(Game.place)) {
    hudReturnHome();
  } else {
    hudGohomeAdvisorWrapper.style.display = "flex";
  }
};

const hideHudGoHomeAdvisor = () => {
  hudGohomeAdvisorWrapper.style.display = "none";
};

const hudReturnHome = async () => {
  deleteTalentsOnPrematureExit();
  hudGohomeAdvisorWrapper.style.display = "none";
  await hideHud();
  await showHome();
  if (Game.places.length === Game.conqueredPlaces.length) {
    console.log("win game");
    await winGame();
  }
};

hudGoHomeButton.addEventListener("click", showHudGoHomeAdvisor);
hudGoHomeNo.addEventListener("click", hideHudGoHomeAdvisor);
hudGoHomeYes.addEventListener("click", hudReturnHome);
