// Definim una variable per fer un seguiment dels elements seleccionats
let easymode = true;  // valor per defecte

// Funció per a llegir paràmetres de la URL
const getURLParameter = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Comprova si el paràmetre "easymode" està present a la URL
const easymodeParam = getURLParameter('easymode');
if (easymodeParam !== null) {
    if (easymodeParam.toLowerCase() === 'true') {
        easymode = true;
    } else if (easymodeParam.toLowerCase() === 'false') {
        easymode = false;
    }
}

let selectedElements = [];
let successfulUses = {};
const WIN_DELAY_TIME = 4000;
const LOOSE_DELAY_TIME = 3000;
let unlockedEmotions = [];
const totalEmotions = document.querySelectorAll(".emotion").length;

document.addEventListener("DOMContentLoaded", () => {
  // Afegim un esdeveniment d'escolta per a cada element al "blackboard"
  let blackboardElements = document.querySelectorAll(".blackboardElement");
  blackboardElements.forEach((element) => {
    element.addEventListener("click", (e) => {
      handleBlackboardElementClick(e.target);
    });
  });
});

const handleBlackboardElementClick = (element) => {
  // Afegim la classe "chosen" a l'element seleccionat
  element.classList.add("chosen");

  // Afegim l'ID de l'element al nostre array d'elements seleccionats
  selectedElements.push(element.id);

  // Si hem seleccionat dos elements
  if (selectedElements.length === 2) {
    checkEmotionMatch();
  }
};

const allEmotionsUnlocked = () => {
  return unlockedEmotions.length === totalEmotions;
};
let timeoutId;

const checkEmotionMatch = () => {
  let matchingEmotion = null;
  let timeoutDelay = LOOSE_DELAY_TIME;

  // Busquem a cada "emotion" si hi ha una coincidència
  let emotions = document.querySelectorAll(".emotion");
  emotions.forEach((emotion) => {
    let emotion1 = emotion.getAttribute("data-emotion1");
    let emotion2 = emotion.getAttribute("data-emotion2");

    if ((selectedElements[0] === emotion1 && selectedElements[1] === emotion2) || (selectedElements[1] === emotion1 && selectedElements[0] === emotion2)) {
      matchingEmotion = emotion;
    }
  });

  if (matchingEmotion) {
    if (matchingEmotion.classList.contains(matchingEmotion.id)) {
      // Combinació repetida
      document.getElementById("blackboardIncorrect").innerHTML =
        '¡combinación repetida!<br><span><span class="' +
        selectedElements[0] +
        '">' +
        selectedElements[0] +
        '</span> + <span class="' +
        selectedElements[1] +
        '">' +
        selectedElements[1] +
        '</span> = <span style="padding: 6px 22px;border-radius: 20px;text-transform:uppercase;" class="' +
        matchingEmotion.id +
        '">' +
        matchingEmotion.id +
        "</span></span>";
      document.getElementById("blackboardIncorrect").style.display = "flex";
      document.getElementById("blackboardcorrect").style.display = "none";
    } else {
      // Combinació correcte
      matchingEmotion.classList.add(matchingEmotion.id);
      unlockedEmotions.push(
        '<span ><span class="' +
          selectedElements[0] +
          '">' +
          selectedElements[0] +
          '</span> + <span class="' +
          selectedElements[1] +
          '">' +
          selectedElements[1] +
          '</span> = <span style="padding: 6px 22px;border-radius: 20px;text-transform:uppercase;" class="' +
          matchingEmotion.id +
          '">' +
          matchingEmotion.id +
          "</span></span>"
      );
      // Incrementem el recompte d'ús amb èxit per a cada element seleccionat
      if (easymode) {
        selectedElements.forEach((id) => {
          successfulUses[id] = (successfulUses[id] || 0) + 1;
          if (successfulUses[id] === 2) {
            document.getElementById(id).classList.add("inactive");
          }
        });
      }

      // Verifica si totes les emocions han estat desbloquejades
      if (allEmotionsUnlocked()) {
        document.getElementById("win").innerHTML = '<span id="winTitle">¡bien jugado!</span><br>' + unlockedEmotions.join("<br>");
        document.getElementById("win").style.display = "flex";
        document.getElementById("emotionsWrapper").style.opacity = "0";
      } else {
        document.getElementById("blackboardcorrect").innerHTML =
          '¡correcto!<br><span><span class="' +
          selectedElements[0] +
          '">' +
          selectedElements[0] +
          '</span> + <span class="' +
          selectedElements[1] +
          '">' +
          selectedElements[1] +
          '</span> = <span style="padding: 6px 22px;border-radius: 20px;text-transform:uppercase;" class="' +
          matchingEmotion.id +
          '">' +
          matchingEmotion.id +
          "</span></span>";
        document.getElementById("blackboardcorrect").style.display = "flex";
        document.getElementById("blackboardIncorrect").style.display = "none";
        timeoutDelay = WIN_DELAY_TIME;
      }
    }
  } else {
    // Combinació incorrecta
    document.getElementById("blackboardIncorrect").innerHTML =
      '¡incorrecto!<br><span><span class="' +
      selectedElements[0] +
      '">' +
      selectedElements[0] +
      '</span> y <span class="' +
      selectedElements[1] +
      '">' +
      selectedElements[1] +
      "</span> no combinan</span>";
    document.getElementById("blackboardIncorrect").style.display = "flex";
    document.getElementById("blackboardcorrect").style.display = "none";
  }

  timeoutId = setTimeout(() => {
    if (document.getElementById("win").style.display !== "flex") {
      //si no estan en none
      document.getElementById("blackboardcorrect").style.display = "none";
      document.getElementById("blackboardIncorrect").style.display = "none";
    }
  }, timeoutDelay);
  // netejo els elements seleccionats i trec chosen com a classe
  console.log(successfulUses);
  console.log(selectedElements, "--->", matchingEmotion ? matchingEmotion.id : "No match");
  resetSelection();
};
const resetSelection = () => {
  selectedElements = [];

  let blackboardElements = document.querySelectorAll(".blackboardElement.chosen");
  blackboardElements.forEach((element) => {
    element.classList.remove("chosen");
  });
};

//#gameEntrance asigna evento para que cuando se clique se ponga la opacidad a 0 y finalmente en display none


const blackboardCorrect = document.getElementById("blackboardcorrect");
const blackboardIncorrect = document.getElementById("blackboardIncorrect");

const cancelTimeoutAndHide = (element) => {
    element.addEventListener('click', () => {
        element.style.display = "none";
        clearTimeout(timeoutId);
    });
};

cancelTimeoutAndHide(blackboardCorrect);
cancelTimeoutAndHide(blackboardIncorrect);