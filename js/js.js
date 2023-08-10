////////////////////////////////////////////////////
///CONSTS

///////////////////////////////////////////////////////////////////////

const test = false;

////////////////////////////////////////////////////////////////////// MAIN GAME OBJ
class GameClass {
  constructor(user = null, freeMode = false, intro = true) {
    this._obj = "Game";
    this.user = user;
    this.freeMode = freeMode;
    this.intro = intro;
    this.state = {
      _obj: "Game.state",
      places: [],
      placesConquered: [],
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

  // Funció per establir visiblilitat de video
  setVideoVisibility(isVisible) {
    this.state.now.video.visible = isVisible;
}

  // Funció per obtenir l'estat actual de visible
  isVideoVisible() {
    return this.state.now.video.visible;
  }

  get nickName() {
    return "@" + this.user;
  }
}

// Instanciem la classe
const Game = new GameClass("anonimus", true, false);




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