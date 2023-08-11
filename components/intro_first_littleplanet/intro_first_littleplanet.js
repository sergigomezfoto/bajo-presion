// const nextToUserInput = document.getElementById("next_to_user_input");
// nextToUserInput.addEventListener("click", () => {
//   passToUserInput = true;
//   console.log(passToUserInput);
// });
// const planetAnimation = (options) => {
//   if (!options || !options.containerId || !options.littleplanetId || !options.speed) {
//     console.log("Error: No s'han definit totes les opcions necessàries. Son: containerId, littleplanetId, speed");
//   }

//   const littleplanet = document.getElementById(options.littleplanetId);

//   const speed = options.speed || 0.025;
//   let startTime;

//   const updateLittlePlanetRotation = (timestamp) => {
//     if (!startTime) {
//       startTime = timestamp;
//     }
//     const elapsed = timestamp - startTime;
//     const angle = (speed * elapsed) / 1000;
//     littleplanet.style.transform = `rotate(${angle * -1}deg)`;
//     requestAnimationFrame(updateLittlePlanetRotation);
//   };

//   requestAnimationFrame(updateLittlePlanetRotation);
// };

// const small_lp = {
//   containerId: "intro_gradient_first",
//   littleplanetId: "first_little_planet",
//   speed: 0.2,
// };

// planetAnimation(small_lp);
const effectShadowDiv = (divId, shadowDiv) => {
  const shDiv = document.getElementById(shadowDiv);
  const div = document.getElementById(divId);
  const maxDivWidth = 300;
  const minDivWidth = 100;
  const maxOpacity = 0.6;
  const minOpacity = 0.1;
  const divTop = div.getBoundingClientRect().top;

  const changeFactorWidth = 5;
  const width = maxDivWidth - (divTop + 60) * changeFactorWidth + minDivWidth;

  const changeFactorOpacity = (maxOpacity - minOpacity) / (maxDivWidth - minDivWidth);
  const opacity = (maxDivWidth - width) * changeFactorOpacity + minOpacity;

  // Assegurem que l'amplada del shadowDiv mai sigui més gran que 'maxDivWidth' i mai sigui més petita que 'minDivWidth'
  if (width < minDivWidth) {
    shDiv.style.width = `${minDivWidth}px`;
  } else if (width > maxDivWidth) {
    shDiv.style.width = `${maxDivWidth}px`;
  } else {
    shDiv.style.width = `${width}px`;
  }

  // Assegurem que l'opacitat del shadowDiv mai sigui més gran que 'maxOpacity' i mai sigui més petita que 'minOpacity'
  if (opacity < minOpacity) {
    shDiv.style.opacity = minOpacity;
  } else if (opacity > maxOpacity) {
    shDiv.style.opacity = maxOpacity;
  } else {
    shDiv.style.opacity = opacity;
  }
};

