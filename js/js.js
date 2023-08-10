////////////////////////////////////////////////////
///CONSTS

///////////////////////////////////////////////////////////////////////

//const test = false;

const gameOptions={
  test:false,
  freeMode:false,
  intro:true,
  user:'anonimus'
}



////////////////////////////////////////////////////////////////////// MAIN GAME OBJ
class GameClass {
  constructor({user = null, freeMode = false, intro = true, test = false}) {
    this._obj = "Game";
    this.user = user;
    this.freeMode = freeMode;
    this.intro = intro;
    this.test = test;
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
}

// Instanciem la classe
const Game = new GameClass(gameOptions);

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
