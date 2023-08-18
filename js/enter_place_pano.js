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

const enterPano = async () => {
  let pIndex = Game.panoIndex + 1;
  if (Game.panoIndex === Game.placePanos) {
    return true;
  }
  Game.setNowState({
    panoName: `scene_${data[Game.place].name}_${pIndex}`,
    panoGoal: data[Game.place].panos[pIndex].points,
    panoPoints: 0,
    panoVideo: data[Game.place].panos[pIndex].video ? data[Game.place].panos[pIndex].video : null,
    panoText: data[Game.place].panos[pIndex].instructions,
    panoAptitudes: data[Game.place].panos[pIndex].aptitudes,
    panoskill: data[Game.place].panos[pIndex].skill ? data[Game.place].panos[pIndex].skill : null,
    panoIndex: pIndex,
  });
  await fillPanoText(Game.panoText);
  tourLoadscene(Game.panoName);
  ps.update();
  tourPanoTextContent.scrollTop = 1;
  //HomState.hidden
  if (Game.panoVideo) {
    await asyncLoopPositive((_) => HomState.hidden, 10);
    console.log("si que te video");
    fadeinAndPlayNewPanoVideo(Game.panoVideo);
    await waitForEventToTrigger(document.getElementById("skipVideoButton"), "click");
  }

  console.log("final video");

};
