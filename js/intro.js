/////////////////////////////////////////////////////////////////////////////////////////////////////////////////FIRST INTRO



const skipIntro = () => {
  introGradient.style.transition = "all 0s";
  introGradient.style.clipPath = "circle(100% at 50% 50%)";
  introGradientFirst.style.transition = "all 0s";
  introGradientForm.style.transition = "all 0s";
  introGradientFirst.style.top = "100%";
  introGradientFirst.style.display = "none";
  introGradientForm.style.top = "0";
  introGradientForm.style.left = "-100%";
  introGradientForm.style.display = "none";
  introGradientVideo.style.left="0";
  video.muted = false; 
  video.play(); 
 
};

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
    // await sleep(timeShowIntroElements * 3);
    await asyncLoopPositive((_)=>passToUserInput, 10);
    introGradientFirst.style.top = "100%";
    introGradientForm.style.top = "0";
    clearInterval(introLPInterval);
    await awaitStylecomplete(introGradientFirst, "top", "100%");
    introGradientFirst.style.display = "none";
    inputElement.focus();
    await asyncLoopPositive((_)=>passToVideo, 10);
    introGradientForm.style.left = "-100%";
    introGradientVideo.style.left="0";
    await awaitStylecomplete(introGradientForm, "left", "-100%");
    introGradientForm.style.display = "none";
    video.muted = false; 
    video.play(); 
  } else if (test) {
    skipIntro();
  }
};

