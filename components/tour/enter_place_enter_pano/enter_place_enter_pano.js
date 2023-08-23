const enterPlace = async (dataValue) => {
  Game.setNowState({
    place: dataValue,
    placeTitle: data[dataValue].title,
    placeIntroVideo: data[dataValue].introVideo,
    placeEndVideo: data[dataValue].finalVideo,
    placePanos: Object.keys(data[dataValue].panos).length,
    panoIndex: 0,
    // panoGoal: data[dataValue].panos[1].points,
    // panoPoints: 0,
    // panoVideo: data[dataValue].panos[1].video ? data[dataValue].panos[1].video : null,
    // panoText: data[dataValue].panos[1].instructions,
    // panoAptitudes: data[dataValue].panos[1].aptitudes,
    // panoskill: data[dataValue].panos[1].skill ? data[dataValue].panos[1].skill : null,
  });

  setPlaceTitle(Game.placeTitle);
  enterPano(Game.panoIndex);

  //   if (!Game.test) {
  fadeinAndPlayNewPlaceVideo(Game.placeIntroVideo);
  await waitForEventToTrigger(document.getElementById("skipVideoButton"), "click");
  //   }
  await hideHome();
  countdown.resume();
};

const enterPano = async (pIndex=null) => {
  if (!pIndex) {
    pIndex = Game.panoIndex + 1;
    console.log('lalalalalalalalalalalalalalalalala',pIndex);
  }
  if (Game.panoIndex === Game.placePanos) {
    return true;
  }
  Game.setNowState({
    panoName: `scene_${data[Game.place].name}_${pIndex}`,
    panoGoal: data[Game.place].panos[pIndex].points,
    panoPoints: 0, //changed in krpano: controler.xml addpanopoint
    panoVideo: data[Game.place].panos[pIndex].video ? data[Game.place].panos[pIndex].video : null,
    panoText: data[Game.place].panos[pIndex].instructions,
    panoAptitudes: data[Game.place].panos[pIndex].aptitudes,
    panoskill: data[Game.place].panos[pIndex].skill ? data[Game.place].panos[pIndex].skill : null,
    panoIndex: pIndex,
    panoExtra: data[Game.place].panos[pIndex].extra ? data[Game.place].panos[pIndex].extra : null,
  });
  await fillPanoText(Game.panoText);
  tourLoadscene(Game.panoName);
  ps.update();
  tourPanoTextContent.scrollTop = 1;
  //HomeState.hidden
  if (Game.panoVideo && !Game.test) {
    await asyncLoopPositive((_) => HomeState.hidden, 10);
    fadeinAndPlayNewPanoVideo(Game.panoVideo);
    await waitForEventToTrigger(document.getElementById("skipVideoButton"), "click");
  }
};

const freeModeEnterPlacePano = async (dataValue) => {
  let place = dataValue.split("_")[0];
  let panoIndex = Number(dataValue.split("_")[1]);

  Game.setNowState({
    place: place,
    placeTitle: data[place].title,
    placeIntroVideo: data[place].introVideo,
    placeEndVideo: data[place].finalVideo,
    placePanos: Object.keys(data[place].panos).length,
    // panoGoal: data[dataValue].panos[1].points,
    // panoPoints: 0,
    // panoVideo: data[dataValue].panos[1].video ? data[dataValue].panos[1].video : null,
    // panoText: data[dataValue].panos[1].instructions,
    // panoAptitudes: data[dataValue].panos[1].aptitudes,
    // panoskill: data[dataValue].panos[1].skill ? data[dataValue].panos[1].skill : null,
  });
  await showTour();
  countdown.resume();
  Game.setNowState({
    panoName: `scene_${data[Game.place].name}_${panoIndex}`,
    panoGoal: data[Game.place].panos[panoIndex].points,
    panoPoints: 0, //changed in krpano: controler.xml addpanopoint
    panoVideo: data[Game.place].panos[panoIndex].video ? data[Game.place].panos[panoIndex].video : null,
    panoText: data[Game.place].panos[panoIndex].instructions,
    panoAptitudes: data[Game.place].panos[panoIndex].aptitudes,
    panoskill: data[Game.place].panos[panoIndex].skill ? data[Game.place].panos[panoIndex].skill : null,
    panoIndex: panoIndex,
    panoExtra: data[Game.place].panos[panoIndex].extra ? data[Game.place].panos[panoIndex].extra : null,
  });
  await fillPanoText(Game.panoText);
  tourLoadscene(Game.panoName);
  ps.update();
  tourPanoTextContent.scrollTop = 1;
  //HomeState.hidden
  if (Game.panoVideo && !Game.test) {
    await asyncLoopPositive((_) => HomeState.hidden, 10);
    fadeinAndPlayNewPanoVideo(Game.panoVideo);
    await waitForEventToTrigger(document.getElementById("skipVideoButton"), "click");
  }
};
