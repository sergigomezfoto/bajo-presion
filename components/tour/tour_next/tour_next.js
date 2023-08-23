const tourNext = document.getElementById("tourNext");

const hideNextPano = () => {
  const tourNextLayer = krpano.layer.getItem("nextTour");
  tourNextLayer.enabled = false;
  tourNext.style.display = "none";
};

const showNextPano = () => { /// CRIADAT A KRPANO.HOTSPOTS->jscall("Game.checkPanoPointsGoal(showNextPano)");
  const tourNextLayer = krpano.layer.getItem("nextTour");
  if (Game.panoIndex === Game.placePanos) {
    tourNext.innerText = "LO HAS LOGRADO!";
    tourNextLayer.end="true";
  } else {
    tourNext.innerText = "SIGUIENTE ACTIVIDAD";
    tourNextLayer.end="false";
  }
  tourNextLayer.enabled = true;
  tourNext.style.display = "flex";
};

const nextTourClassAdd = () => {// CRIDAT A KRPANO. FAKEBUTTONS AL HOVER OUT
  toggleClass(tourNext, "tourNextHover", "add");
};

const nextTourClassRemove = () => {// CRIDAT A KRPANO. FAKEBUTTONS AL HOVER OUT
  toggleClass(tourNext, "tourNextHover", "remove");
};


const endPlace=async()=>{
  await asyncLoopPositive((_) => HomeState.hidden, 10);
  fadeinAndPlayNewPanoVideo(Game.placeEndVideo);
  await waitForEventToTrigger(document.getElementById("skipVideoButton"), "click");
  console.log('ara he fet click');
  ///MOSTRAR FINAL PLACE
}


const nextTourClick = () => {// CRIDAT A KRPANO. FAKEBUTTONS AL CLCIK
  const tourNextLayer = krpano.layer.getItem("nextTour");
  if (!tourNextLayer.end) {
    enterPano();  
  }else{
    endPlace();
  }
  hideNextPano();
};
