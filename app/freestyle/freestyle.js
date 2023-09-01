const generateHtmlFreestyle = () => {
  let resultArray = [];

  for (const key in data) {
    let buttons = Object.keys(data[key].panos)
      .map((panoKey) => {
        return `<div class="freestyleButton" onclick="freeModeEnterPlacePano('${key}_${panoKey}')">
                <img src="tour/panos/${key}_${panoKey}.tiles/thumb.jpg" alt="Imagen ${panoKey}">
                <span>${panoKey}</span>
            </div>`;
      })
      .join("");

    let fragment = `<div class="categoryContainer">	
        <div class="freestyleSection">${data[key].title}</div>
        <div class="buttonsContainer">
            ${buttons}
        </div>
        </div>`;

    resultArray.push(fragment);
  }

  return resultArray.join("");
};

const fillHtmlFreestyle = () => {
  const freestyleContainer = document.getElementById("freestyleContainer");
  freestyleContainer.innerHTML = generateHtmlFreestyle();
};

const freeModeEnterPlacePano = async (dataValue) => {
  const freestyleWrapper = document.getElementById("freestyleWrapper");
  freestyleWrapper.style.opacity = 0;
  await sleep(1000);
  freestyleWrapper.style.display = "none";
  let place = dataValue.split("_")[0];
  let panoIndex = Number(dataValue.split("_")[1]);
  const tourUiPlace = document.getElementById("tourUiPlace");
  tourUiPlace.innerHTML = data[place].title;
  await asyncLoopPositive((_) => krpano.layer.getItem("niknameTour"), 10);
  if (!Game.test) {
      const tourUserKrpano = krpano.layer.getItem("niknameTour");
      tourUserKrpano.enabled = false;
      const freestyleKrpano = krpano.layer.getItem("freestyle");
      freestyleKrpano.enabled = true;
    
  }

  Game.setNowState({
    place: place,
    placeTitle: data[place].title,
    placeIntroVideo: data[place].introVideo,
    placeEndVideo: data[place].finalVideo,
    placePanos: Object.keys(data[place].panos).length,
  });
  await showTour();
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
  if (Game.panoVideo &&  !Game.directPano) {
    await asyncLoopPositive((_) => HomeState.hidden, 10);
    fadeinAndPlayNewPanoVideo(Game.panoVideo);
    await waitForEventToTrigger(document.getElementById("skipVideoButton"), "click");
  }
};

// <div class="categoryContainer">
// <div class="freestyleSection">Categoría 1</div>
// <div class="buttonsContainer">
//     <div class="freestyleButton" onclick="">
//         <img src="https://via.placeholder.com/150x100" alt="Imagen 1">
//         <span>Texto del Botón 1</span>
//     </div>
// </div>
// </div>

const goToFreestyleList=document.getElementById("goToFreestyleList");
const freestyleClassAdd = () => {
  // CRIDAT A KRPANO. FAKEBUTTONS AL HOVER OUT
  toggleClass(goToFreestyleList, "goToFreestyleListHover", "add");
};

const freestyleClassRemove = () => {
  // CRIDAT A KRPANO. FAKEBUTTONS AL HOVER OUT
  toggleClass(goToFreestyleList, "goToFreestyleListHover", "remove");
};

const freestyleClick = async() => {
const freestyleWrapper = document.getElementById("freestyleWrapper");
freestyleWrapper.style.display = 'flex';
await sleep(200);
freestyleWrapper.style.opacity = 1;
  };
  
