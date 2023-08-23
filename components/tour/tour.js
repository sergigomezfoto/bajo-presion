const showTour = async () => {
  countdown.resume();
  const homeLittlePlanet = document.getElementById("homeLittlePlanet");
  const pano = document.getElementById("pano");
  updateGameState();
  pano.style.display = "block";
  await awaitStylecomplete(pano, "display", "block");
  pano.style.opacity = "1";
  homeLittlePlanet.style.top = "100%";
  homeInterface.style.opacity = "0";
  await awaitStylecomplete(homeInterface, "opacity", "0");
  planetAnimation.pause();
  homeInterface.style.display = "none";
  HomeState.hidden = true;
  tourPanoTextContent.scrollTop = 1;
};
