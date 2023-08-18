////////////////////////////////////////////////////
///CONSTS

///////////////////////////////////////////////////////////////////////

//const test = false;

const gameOptions = {
  test: true,
  freeMode: false,
  intro: false,
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
      places: [],
      placesConquered: [],
      placesConqueredNum: 0,
      placesConqueredPercentage: "0%",
      aptitudes: [],
      aptitudesConquered: [],
      timerTime: 20 * 60 * 1000, //20 minuts
      timerBonusRecived: 0,
      win: false,
      now: {
        _obj: "Game.state.now",
        place: null,
        placeTitle: null,
        placeIntroVideo: null,
        placeEndVideo: null,
        placePanos: 0,
        panoName: null,
        panoIndex: 0,
        panoGoal: 0,
        panoPoints: 0,
        panoVideo: null,
        panoText: null,
        panoAptitudes: [],
        panoskill: null,
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

  ////////////////////////////////////////////////////////now

  // Getter and Setter for 'place'
  get place() {
    return this.state.now.place;
  }

  set place(value) {
    this.state.now.place = value;
  }
  get placeTitle() {
    return this.state.now.placeTitle;
  }

  set placeTitle(value) {
    this.state.now.placeTitle = value;
  }

  // Getter and Setter for 'placeIntroVideo'
  get placeIntroVideo() {
    return this.state.now.placeIntroVideo;
  }

  set placeIntroVideo(value) {
    this.state.now.placeIntroVideo = value;
  }

  // Getter and Setter for 'placeEndVideo'
  get placeEndVideo() {
    return this.state.now.placeEndVideo;
  }

  set placeEndVideo(value) {
    this.state.now.placeEndVideo = value;
  }

  // Getter and Setter for 'placePanos'
  get placePanos() {
    return this.state.now.placePanos;
  }

  set placePanos(value) {
    this.state.now.placePanos = value;
  }

  // Getter and Setter for 'panoName'
  get panoIndex() {
    return this.state.now.panoIndex;
  }

  set panoIndex(value) {
    this.state.now.panoIndex = value;
  }
  // Getter and Setter for 'panoName'
  get panoName() {
    return this.state.now.panoName;
  }

  set panoName(value) {
    this.state.now.panoName = value;
  }

  // Getter and Setter for 'panoGoal'
  get panoGoal() {
    return this.state.now.panoGoal;
  }

  set panoGoal(value) {
    this.state.now.panoGoal = value;
  }

  // Getter and Setter for 'panoPoints'
  get panoPoints() {
    return this.state.now.panoPoints;
  }

  set panoPoints(value) {
    this.state.now.panoPoints = value;
  }

  // Getter and Setter for 'panoVideo'
  get panoVideo() {
    return this.state.now.panoVideo;
  }

  set panoVideo(value) {
    this.state.now.panoVideo = value;
  }

  // Getter and Setter for 'panoText'
  get panoText() {
    return this.state.now.panoText;
  }

  set panoText(value) {
    this.state.now.panoText = value;
  }

  // Getter and Setter for 'panoAptitudes'
  get panoAptitudes() {
    return this.state.now.panoAptitudes;
  }

  set panoAptitudes(value) {
    this.state.now.panoAptitudes = value;
  }

  // Getter and Setter for 'panoskill'
  get panoskill() {
    return this.state.now.panoskill;
  }

  set panoskill(value) {
    this.state.now.panoskill = value;
  }

  setNowState(properties) {
    Object.keys(properties).forEach((key) => {
      if (this.state.now.hasOwnProperty(key)) {
        this.state.now[key] = properties[key];
      }
    });
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

  addPlace(place) {
    if (!this.state.places.includes(place)) {
      this.state.places.push(place);
    }
  }

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

//debug

document.addEventListener("keydown", function (event) {
  if (event.key === "n" || event.key === "N") {
    console.log(Game.state.now);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////GAME FUNCTIONS
// Instanciem la classe
const Game = new GameClass(gameOptions);

const updateGameState = () => {
  updateHome();
};

// document.addEventListener("DOMContentLoaded", function () {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////perfect scrollbar


// });
// document.addEventListener("DOMContentLoaded", () => {

// });
