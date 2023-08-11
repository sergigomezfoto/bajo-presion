////////////////////////////////////////////////////
///CONSTS

///////////////////////////////////////////////////////////////////////

//const test = false;

const gameOptions = {
  test: true,
  freeMode: false,
  intro: true,
  user: "anonimus",
};

////////////////////////////////////////////////////////////////////// MAIN GAME OBJ
class GameClass {
  constructor({ user = null, freeMode = false, intro = true, test = false }) {
    this._obj = "Game";
    this.user = user;
    this.freeMode = freeMode;
    this.intro = intro;
    this.test = test;
    this.state = {
      _obj: "Game.state",
      places: ["Casa de Etna", "Polideportivo", "Instituto", "Centro cívico", "Parque"],
      placesConquered: [],
      placesConqueredNum: 1,
      placesConqueredPercentage: "0%",
      aptitudes: [],
      aptitudesConquered: [],
      timerTime: 20 * 60 * 1000, //20 minuts
      timerBonusRecived: 0,
      win: false,
      now: {
        _obj: "Game.state.now",
        place: null,
        placeIntroVideo: null,
        placeEndVideo: null,
        placeGoal: null,
        placePoints: null,
        panoName: null,
        panoIndex: null,
        panoGoal: null,
        panoPoints: null,
        panoVideo: null,
        panoText: null,
        video: {
          _obj: "Game.state.now.video",
          videoId: null,
          state: null,
          visible: false,
        },
      },
    };
  }
  ///////////////////////////////nikname
  get nickName() {
    return "@" + this.user;
  }
  ///////////////////////////////////////videos
  set videoId(id) {
    this.state.now.video.videoId = id;
  }
  get videoId() {
    return this.state.now.video.videoId;
  }
  set videoState(state) {
    this.state.now.video.state = state;
  }
  get videoState() {
    return this.state.now.video.state;
  }
  set videoVisible(isVisible) {
    this.state.now.video.visible = isVisible;
  }
  get videoVisible() {
    return this.state.now.video.visible;
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////places
  conqueredPlace(place, callback) {
    if (!this.state.places.includes(place)) {
      console.log(`El lloc "${place}" no està definit a la llista places.`);
      return;
    }

    if (!this.state.placesConquered.includes(place)) {
      this.state.placesConquered.push(place);
    } else {
      console.log(`El lloc "${place}" ya ha sido conquistado.`);
      return;
    }

    if (callback && typeof callback === "function") {
      this.updateConqueredStats(callback);
    } else {
      this.updateConqueredStats();
    }
  }
  updateConqueredStats(callback) {
    this.state.placesConqueredNum = this.state.placesConquered.length;
    const totalPlaces = 5;
    this.state.placesConqueredPercentage = `${(this.state.placesConqueredNum / totalPlaces) * 100}%`;

    if (callback && typeof callback === "function") {
      callback();
    }
  }
  get conqueredPlacesNum() {
    return this.state.placesConqueredNum;
  }

  get conqueredPlacesPercentage() {
    return this.state.placesConqueredPercentage;
  }
}

// faciilitador d'estats
const vstate = {
  buffering: 3,
  cued: 5,
  ended: 0,
  paused: 2,
  playing: 1,
  unstarted: -1,
};

const videolist = {
  introvideo: "InfEfS2kx5k",
  shortTest: "keyJeG2lMwk",
  smallTest: "RpLm69FLs74",
};

/////////////////////////////////////////////////////////////////////////////////////////GAME FUNCTIONS
// Instanciem la classe
const Game = new GameClass(gameOptions);

const updateGameState = () => {
  updateHome();
};

const updateHome = () => {
  Game.updateConqueredStats(); //percentatge
  const homeCounterPercentage = document.querySelector(".homeCounterPercentage");
  homeCounterPercentage.innerHTML = Game.conqueredPlacesPercentage;

  const homeCounterPortions = document.querySelectorAll(".homeCounterportion");
  homeCounterPortions.forEach((portion, index) => {
    if (index < Game.conqueredPlacesNum) {
      portion.classList.add("highlighted");
    } else {
      portion.classList.remove("highlighted");
    }
  });

  Game.state.placesConquered.forEach((place) => {
    const matchingDiv = [...document.querySelectorAll(".hlp-label")].find((div) => div.innerText === place);
    if (matchingDiv) {
      matchingDiv.classList.remove("home-planet-label-active");
      matchingDiv.classList.add("home-planet-label-disabled");
    }
  });
};

////////////////////////////////////////////////////////////////////////////////////////QUAN EL DOM ESTÀ CARREGAT
// cuan el dom está carregat,poso els noms dels llocs per ordre
document.addEventListener("DOMContentLoaded", () => {
  const labels = document.querySelectorAll(".hlp-label");
  Game.state.places.forEach((place, index) => {
    if (labels[index]) {
      labels[index].innerText = place;
    }
  });
});
