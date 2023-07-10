const test = false;

const user={
  name:"anonimus",
  get nickName(){
    return "@"+this.name;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////FIRST INTRO
const timeShowIntroElements = 2000;
const logosIntro = document.querySelectorAll(".logos_intro");
const presentanIntro = document.getElementById("presentan_intro");
const introGradient = document.getElementById("intro_gradient");
const introGradientFirst = document.getElementById("intro_gradient_first");
const firstTextIntro = document.getElementById("firts_text_intro");
const introGradientForm = document.getElementById("intro_gradient_form");
const inputElement = document.getElementById("input_form_intro");

const generalIntro = async () => {
  if (!test) {
    for (const logo of logosIntro) {
      await fadeInFadeOut(logo.id, 1, "block");
    }
    await sleep(timeShowIntroElements);
    for (const logo of logosIntro) {
      fadeInFadeOut(logo.id, 0);
    }
    await awaitStylecomplete(logosIntro[1], "display", "none");
    fadeInFadeOut(presentanIntro.id, 1, "block");
    await sleep(timeShowIntroElements);
    fadeInFadeOut(presentanIntro.id, 0);
    await awaitStylecomplete(presentanIntro, "display", "none");
    introGradient.style.clipPath = "circle(100% at 50% 50%)";
    await sleep(timeShowIntroElements);
    firstTextIntro.style.width = "360px";
    await awaitStylecomplete(firstTextIntro, "width", "360px");
    firstTextIntro.style.opacity = "1";
    await sleep(timeShowIntroElements * 3);
    introGradientFirst.style.top = "100%";
    introGradientForm.style.top = "0";
    clearInterval(introLPInterval);
    await awaitStylecomplete(introGradientFirst, "top", "100%");
    introGradientFirst.style.display = "none";
    inputElement.focus();
  } else if (test) {
    introGradient.style.transition = "all 0s";
    introGradient.style.clipPath = "circle(100% at 50% 50%)";
    introGradientFirst.style.transition = "all 0s";
    introGradientForm.style.transition = "all 0s";
    introGradientFirst.style.top = "100%";
    introGradientForm.style.top = "0";
    inputElement.focus();
  }
};
