/**
 * ***************************************************************************************************************************
 *                                      LLEGEIXO ELS PARAMETRES DE LA URL
 * ***************************************************************************************************************************
 */

// Definim una variable per fer un seguiment dels elements seleccionats
let easymode = true; // valor per defecte

// Funció per a llegir paràmetres de la URL
const getURLParameter = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

// Comprova si el paràmetre "easymode" està present a la URL
const easymodeParam = getURLParameter("easymode");
if (easymodeParam !== null) {
  if (easymodeParam.toLowerCase() === "true") {
    easymode = true;
  } else if (easymodeParam.toLowerCase() === "false") {
    easymode = false;
  }
}

/**
 * ***************************************************************************************************************************
 *                                        CORS VIDES
 * ***************************************************************************************************************************
 */

const heartContainer = document.querySelector(".heart-container");
const heartCount = 11;

for (let i = 0; i < heartCount; i++) {
  const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  heart.classList.add("heart");
  heart.setAttribute("viewBox", "0 0 24 24");

  const heartPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  heartPath.classList.add("heart-fill");
  heartPath.setAttribute(
    "d",
    "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  );

  heart.appendChild(heartPath);
  heartContainer.appendChild(heart);
}



const applyBlinkClassToHeart=(index)=> {
  const hearts = document.querySelectorAll(".heart-container .heart");
  if (hearts[index]) {
    hearts[index].querySelector(".heart-fill").classList.add("blinkHeart");
  }
}


const replaceClassToHeart=(index, newClass = null)=> {
  const hearts = document.querySelectorAll(".heart-container .heart");
  if (hearts[index]) {
    const heartFill = hearts[index].querySelector(".heart-fill");
    heartFill.classList.remove("blinkHeart");
    if (newClass !== null) {
      heartFill.classList.add(newClass);
    }
  }
}


//applyBlinkClassToHeart(2); // Hace parpadear el tercer corazón
//replaceClassToHeart(2, "conquered");això fará posar el cor vermell  //replaceClass(2); -> això només treurà el pamallugeig

const resetHearts = () => {
  const hearts = document.querySelectorAll(".heart-fill");
  hearts.forEach((heart) => {heart.classList.remove("HeartConquered"); heart.classList.remove("heartGray");});
  currentHeart = 0; // Reset the current heart index
};
/**
 * ***************************************************************************************************************************
 *                                        GAME ENTRANCE
 * ***************************************************************************************************************************
 */

//#gameEntrance asigna evento para que cuando se clique se ponga la opacidad a 0 y finalmente en display none
document.getElementById("gameEntrance").addEventListener("click", () => {
  document.getElementById("gameEntrance").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("gameEntrance").style.display = "none";
  }, 800);
});
