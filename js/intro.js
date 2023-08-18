let passToVideo = false; // activat a form
const timeShowIntroElements = 500;
const intro = document.getElementById("intro");
const startcontainer = document.getElementById("startcontainer");
const intro_black = document.getElementById("intro_black");
const logosIntro = document.querySelectorAll(".logos_intro");
const presentanIntro = document.getElementById("presentan_intro");
const introGradient = document.getElementById("intro_gradient");
const introGradientFirst = document.getElementById("intro_gradient_first");
const firstTextIntro = document.getElementById("firts_text_intro");
const introGradientForm = document.getElementById("intro_gradient_form");
const inputElement = document.getElementById("input_form_intro");
const introGradientVideo = document.getElementById("intro_gradient_video");
const homeInterface = document.getElementById("homeInterface");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////FIRST INTRO

const skipIntro = async () => {
  intro.remove();
  startcontainer.classList.add("rainbow_gradient");
  startHome();
};

const generalIntro = async () => {
  if (!Game.test && Game.intro) {
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
    const introLPInterval = setInterval(() => effectShadowDiv("first_little_planet_wrapper", "shadow_lp_intro"), 50); // activa el planeta bottant
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////lp + text
    firstTextIntro.style.width = "360px";
    await awaitStylecomplete(firstTextIntro, "width", "360px");
    firstTextIntro.style.opacity = "1";
    intro_black.style.display = "none";
    await waitForEventToTrigger(document.getElementById("next_to_user_input"), "click");
    introGradientFirst.style.top = "100%";
    introGradientForm.style.top = "0";
    clearInterval(introLPInterval); // mata l'interva que fa botar el lp
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////form
    await awaitStylecomplete(introGradientFirst, "top", `${window.innerHeight}px`);
    introGradientFirst.style.display = "none";
    inputElement.focus();
    addKeyEventToForm();
    await asyncLoopPositive((_) => passToVideo, 10);
    introGradientForm.style.left = "-100%";
    introGradientVideo.style.left = "0";
    startcontainer.classList.add("rainbow_gradient");
    introGradient.classList.remove("rainbow_gradient");
    await sleep(1000);
    homeInterface.style.display = "block";
    await awaitStylecomplete(homeInterface, "display", "block");
    homeInterface.style.opacity = "1";
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////video etna
    fadeinAndPlayNewVideoIntro(videoList.introVideo);
    await awaitStylecomplete(introGradientForm, "left", `${window.innerWidth * -1}px`);
    introGradientForm.style.display = "none";
    await waitForEventToTrigger(document.getElementById("skipVideoButton"), "click");
    //await sleep(1000);
    intro.remove();
    startHome();
  } else if (Game.test) {
    console.log("this is test");
    skipIntro();
     hideHome();
     await enterPlace("centro");
    return true

  } else if (!Game.intro) {
    console.log("this is no intro");
    skipIntro();
    return true;

  }
};
