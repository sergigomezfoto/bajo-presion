let passToUserInput = false;
let passToVideo = false;
const timeShowIntroElements = 500;
const startcontainer = document.getElementById("startcontainer");
const intro_black= document.getElementById("intro_black");
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

const skipIntro = () => {
  startcontainer.classList.add("rainbow_gradient");
  introGradient.style.transition = "all 0s";
  introGradient.style.clipPath = "circle(100% at 50% 50%)";
  introGradientFirst.style.transition = "all 0s";
  introGradientForm.style.transition = "all 0s";
  introGradientFirst.style.top = "100%";
  introGradientFirst.style.display = "none";
  introGradientForm.style.top = "0";
  introGradientForm.style.left = "-100%";
  introGradientForm.style.display = "none";
  introGradientVideo.style.left = "0";
  introGradientForm.style.display = "none";
  intro_black.style.display = "none";
  startcontainer.classList.add("rainbow_gradient");
  introGradient.classList.remove("rainbow_gradient");

  // video.muted = false;
  // video.play();
};

const generalIntro = async () => {
  if (!Game.test) {
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
    ///////////////////////////////////////////////////////////////////////////////////////lp + text
    firstTextIntro.style.width = "360px";
    await awaitStylecomplete(firstTextIntro, "width", "360px");
    firstTextIntro.style.opacity = "1";
    //await sleep(timeShowIntroElements * 3);
    intro_black.style.display = "none";
    await asyncLoopPositiveSafe((_) => passToUserInput, 10);
    introGradientFirst.style.top = "100%";
    introGradientForm.style.top = "0";
    clearInterval(introLPInterval); // mata l'interva que fa botar el lp
    ///////////////////////////////////////////////////////////////////////////////////////form
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
    //////////////////////////////////////////////////////////////////video etna
    fadeinAndPlayNewVideo(videolist.smallTest);
    await awaitStylecomplete(introGradientForm, "left", `${window.innerWidth * -1}px`);
    introGradientForm.style.display = "none";
    //await asyncLoopPositive((_) => Game.videoState === vstate.playing, 10);
    waitForEventToTrigger(document.getElementById("skipVideoButton"), "click",()=>{
     

    })
    // waitForVideoTime(6, ()=>{fadeinSoundVideo(0.1)});
  } else if (Game.test) {
    skipIntro();
    introGradientForm.style.display = "none";
    await asyncLoopPositive((_) => !isFirstClick, 10);
    
    fadeinAndPlayNewVideo(videolist.smallTest);
    // await awaitStylecomplete(introGradientForm, "left", `${window.innerWidth * -1}px`); 
    await asyncLoopPositive((_) => Game.videoState === vstate.playing, 10);

    // waitForVideoTime(3,enterInstructions);
    
  }
};
// const enterInstructions = () => {
//   const videoplayerCanvas = document.getElementById("videoplayerCanvas");
//   videoplayerCanvas.style.transition = "transform 1s";
//   videoplayerCanvas.style.transform = "translateX(50%)";
// }

if (Game.test) {
 detectFirstClick();
}
