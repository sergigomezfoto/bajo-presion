const test = false;

////////////////////////////////////////////////////////////////FIRST INTRO
const timeShowIntroElements = 2000;
const logosIntro = document.querySelectorAll(".logos_intro");
const presentanIntro = document.getElementById("presentan_intro");
const introGradientFirst = document.getElementById("intro_gradient_first");
const firstTextIntro = document.getElementById("firts_text_intro");
const introGradientForm = document.getElementById("intro_gradient_form");

const generalIntro = async () => {
  if (!test) {
    for (const logo of logosIntro) {
      await fadeInFadeOut(logo.id, 1, "block");
    }
    await sleep(timeShowIntroElements);
    for (const logo of logosIntro) {
      fadeInFadeOut(logo.id, 0);
    }
    await asyncLoopPositive((_) => logosIntro[1].computedStyleMap().get("display").toString() === "none", 10);
    fadeInFadeOut(presentanIntro.id, 1, "block");
    await sleep(timeShowIntroElements);
    fadeInFadeOut(presentanIntro.id, 0);
    await asyncLoopPositive((_) => presentanIntro.computedStyleMap().get("display").toString() === "none", 10);
    document.getElementById("intro_gradient").style.clipPath = "circle(100% at 50% 50%)";
    await sleep(2000);
    firstTextIntro.style.width = "360px";
    await asyncLoopPositive((_) => firstTextIntro.computedStyleMap().get("width").toString() === "360px", 10);
    firstTextIntro.style.opacity = "1";
    await sleep(6000);
    introGradientFirst.style.top = "100%";
    introGradientForm.style.top = "0";
    clearInterval(introLPInterval);
    await asyncLoopPositive((_) => introGradientFirst.computedStyleMap().get("top").toString() === "100%", 10);
    introGradientFirst.style.display = "none";

  } else if (test) {
    document.getElementById("intro_gradient").style.transition = "all 0s";
    document.getElementById("intro_gradient").style.clipPath = "circle(100% at 50% 50%)";
  }
};
