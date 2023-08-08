////////////////////////////////////////////////////



let passToUserInput=false;
let passToVideo=false;
const timeShowIntroElements = 2000;
const logosIntro = document.querySelectorAll(".logos_intro");
const presentanIntro = document.getElementById("presentan_intro");
const introGradient = document.getElementById("intro_gradient");
const introGradientFirst = document.getElementById("intro_gradient_first");
const firstTextIntro = document.getElementById("firts_text_intro");
const introGradientForm = document.getElementById("intro_gradient_form");
const inputElement = document.getElementById("input_form_intro");
const introGradientVideo = document.getElementById("intro_gradient_video");
const video = document.getElementById("home-video");

///////////////////////////////////////////////////////////////////////


const test =  false;

const user = {
  name: "anonimus",
  get nickName() {
    return "@" + this.name;
  },
};
