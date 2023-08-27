////////////////////////////////////////////////////
///CONSTS

///////////////////////////////////////////////////////////////////////

//const test = false;

const gameOptions = {
  test: false,
  intro: true,
  user: "anonimus",
  places: ["casa", "polideportivo", "instituto", "centro", "parque"],
  // placesConquered: ["casa", "polideportivo", "instituto", "centro", ],
  // skillsConquered: ["autoconocimiento", "gestión emocional", "empatía", "sociabilidad"],
  skills: ["autoconocimiento", "gestión emocional", "empatía", "sociabilidad", "criterio própio"],
  timerTime: 60 * 20, //20 minuts
};

////////////////////////////////////////////////////////////////////// MAIN GAME OBJ
class GameClass {
  constructor({
    user = null,

    intro = true,
    test = false,
    places = [],
    skills = [],
    timerTime = 20 * 60 * 1000,
    placesConquered = [], // Valor por defecto: array vacío
    skillsConquered = [], // Valor por defecto: array vacío
  }) {
    this._obj = "Game";
    this.user = user;

    this.intro = intro;
    this.test = test;
    (this.state = {
      _obj: "Game.state",
      places: places,
      placesConquered: placesConquered,
      placesConqueredNum: 0,
      placesConqueredPercentage: "0%",
      skills: skills,
      skillsConquered: skillsConquered,
      skillsConqueredNum: 0,
      skillsConqueredPercentage: "0%",
      timerTime: timerTime, //20 minuts
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
        panoExtra: null,
        video: {
          _obj: "Game.state.now.video",
          videoId: null,
          state: null,
          visible: false,
        },
      },
    }),
      (this._initialNowState = { ...this.state.now });
  }
  resetNowState() {
    this.state.now = { ...this._initialNowState };
  }
  ///////////////////////////////nikname
  get nickName() {
    return "@" + this.user;
  }

  get places() {
    return this.state.places;
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
  // Getter and Setter for 'panoPoints'
  get panoExtra() {
    return this.state.now.panoExtra;
  }

  set panoExtra(value) {
    this.state.now.panoExtra = value;
  }

  resetPanoPoints() {
    this.panoPoints = 0;
  }

  incPanoPoints() {
    this.panoPoints += 1;
  }
  checkPanoPointsGoal(callback) {
    if (this.panoPoints === this.panoGoal) {
      console.log("panoPoints: ", this.panoPoints, "panoGoal: ", this.panoGoal);
      if (callback && typeof callback === "function") {
        callback();
      }
    }
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

  //getters and setters for conqueredPlaces
  get conqueredPlaces() {
    return this.state.placesConquered;
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
      this.updateConqueredPlacesStats(callback);
    } else {
      this.updateConqueredPlacesStats();
    }
  }
  updateConqueredPlacesStats(callback) {
    this.state.placesConqueredNum = this.state.placesConquered.length;
    const totalPlaces = this.state.places.length;
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

  checkPlacesMatch() {
    const matchedPlaces = [];

    this.state.placesConquered.forEach((place) => {
      if (this.state.places.includes(place)) {
        matchedPlaces.push(place);
      }
    });

    return matchedPlaces;
  }
  // Getter y Setter para 'skillsConquered'
  get skillsConquered() {
    return this.state.skillsConquered;
  }

  conqueredSkill(skill, callback) {
    if (!this.state.skills.includes(skill)) {
      console.log(`The skill "${skill}" is not defined in the skills list.`);
      return;
    }

    if (!this.state.skillsConquered.includes(skill)) {
      this.state.skillsConquered.push(skill);
    } else {
      console.log(`The skill "${skill}" has already been conquered.`);
      return;
    }

    if (callback && typeof callback === "function") {
      this.updateConqueredSkillsStats(callback);
    } else {
      this.updateConqueredSkillsStats();
    }
  }
  updateConqueredSkillsStats(callback) {
    this.state.skillsConqueredNum = this.state.skillsConquered.length;
    const totalSkills = this.state.skills.length;
    this.state.skillsConqueredPercentage = `${(this.state.skillsConqueredNum / totalSkills) * 100}%`;

    if (callback && typeof callback === "function") {
      callback();
    }
  }

  get conqueredSkillsNum() {
    return this.state.skillsConqueredNum;
  }

  get conqueredSkillsPercentage() {
    return this.state.skillsConqueredPercentage;
  }

  checkSkillsMatch() {
    const matchedSkills = [];

    this.state.skillsConquered.forEach((skill) => {
      if (this.state.skills.includes(skill)) {
        matchedSkills.push(skill);
      }
    });

    return matchedSkills;
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

const updateGameState = async () => {
  Game.updateConqueredPlacesStats();
  Game.updateConqueredSkillsStats();
  updateCounterTour();
  updateHome();
  await updateHud();
};


// document.addEventListener("DOMContentLoaded", async () => {
//   updateGameState();
// });
