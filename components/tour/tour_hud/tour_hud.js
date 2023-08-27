const hudCounterPercentage = document.querySelector(".hudCounterPercentage");
const hudCounterPortions = document.querySelectorAll(".hudCounterPortion");

const updateCounterHud = () => {
  hudCounterPercentage.innerHTML = Game.conqueredPlacesPercentage;
  if (Game.conqueredPlacesNum > 0) {
    hudCounterPercentage.style.opacity = 1;
  }
  hudCounterPortions.forEach((portion, index) => {
    if (index < Game.conqueredPlacesNum) {
      portion.classList.add("hudCounterHighlighted");
    } else {
      portion.classList.remove("hudCounterHighlighted");
    }
  });
};

const updateSkillsHud = () => {
  const hudSkillsListWrapper = document.getElementById("hudSkillsListWrapper");
  if (hudSkillsListWrapper.children.length === 0) {
    Game.state.skills.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.classList.add("hudSkillLockerWrapper");
      skillItem.dataset.value = skill;
      skillItem.innerHTML = `
      <div class="hudSkillLocker"></div><span class="hudSkillText">${skill}</span>
      `;
      hudSkillsListWrapper.appendChild(skillItem);
    });
  }
  if (Game.conqueredSkillsNum) {
    const divs = document.querySelectorAll(".hudSkillLockerWrapper[data-value]");
    divs.forEach((div) => {
      const dataValue = div.getAttribute("data-value");
      if (Game.skillsConquered.includes(dataValue)) {
        const childDiv = div.querySelector(".hudSkillLocker");
        if (childDiv) {
          childDiv.classList.add("hudSkillConqueredLocker");
        }
        const childSpan = div.querySelector(".hudSkillText");
        if (childSpan) {
          childSpan.classList.add("hudSkillConqueredText");
        }
      }
    });
  }
};

const updatePositiveCard = () => {
  const positiveMessages = [
    "Sigue así, ¡lo estás haciendo genial!",
    "Tu empatía crea conexiones.",
    "Entender a los demás es esencial.",
    "Todos aportamos algo único y valioso.",
    "Reflexionar juntos nos une más.",
    "Ser escuchado es esencial, ofrece lo mismo.",
    "El respeto y la unidad nos fortalecen.",
    "Todas las voces importan.",
    "Comprender es abrir puertas.",
    "Cuidar del bienestar ajeno nos beneficia a todos.",
    "Tus acciones pueden inspirar a otros.",
    "Ser amable transforma entornos.",
    "Tu participación es fundamental.",
    "La escucha activa une y comprende.",
    "Juntos, podemos hacer la diferencia.",
    "Incluir y valorar a todos es esencial.",
    "Recuerda: tu voz tiene poder.",
  ];

  const hudPositiveCardText = document.getElementById("hudPositiveCardText");
  hudPositiveCardText.innerText = getRandomElement(positiveMessages);
};

const updateHudUser = () => {
  const hudUser = document.getElementById("hudUser");
  hudUser.innerText = Game.nickName;
};
const updateHudTime = () => {
  const hudCurrentSpanishDate = document.getElementById("hudCurrentSpanishDate");
  hudCurrentSpanishDate.innerText = getCurrentSpanishDate();
  const hudHourAndIcons = document.getElementById("hudHourAndIcons");
  hudHourAndIcons.innerText = getCurrentTime();
};

const talentCards = async () => {
  const hudTalentWrapper = document.getElementById("hudTalentWrapper");

  if (hudTalentWrapper.children.length === 0) {
    Game.state.places.forEach((place, index) => {
      const talentItem = document.createElement("div");
      const placeId = Game.state.places[index];
      talentItem.classList.add("hudTalentCard");
      talentItem.dataset.value = place;
      talentItem.innerHTML = `
      <span>${data[placeId].title}</span>
      <div class="hudTalentList"></div>
      `;
      hudTalentWrapper.appendChild(talentItem);
    });
    await waitForChildren(hudTalentWrapper, Game.state.places.length);
  }

  const actualPlaceCard = document.querySelector(`.hudTalentCard[data-value="${Game.place}"]`);
  if (actualPlaceCard) {
    actualPlaceCard.classList.add("hudTalentUnlockedCard");
  }

  if (Game.conqueredPlacesNum) {
    const cardsFromPlaces = document.querySelectorAll(".hudTalentCard[data-value]");
    cardsFromPlaces.forEach((card) => {
      const dataValue = card.getAttribute("data-value");
      if (Game.conqueredPlaces.includes(dataValue)) {
        let talentList = card.querySelector(".hudTalentList");
        const currentTalents = Array.from(talentList.children).map((child) => child.textContent);
       
        talentList.querySelectorAll('*').forEach(child => {
          if(child.hasAttribute('data-value')) {
              child.removeAttribute('data-value');
          }
      });
        for (const talent of data[dataValue].talents) {
          if (!currentTalents.includes(talent)) {
            card.classList.add("hudTalentUnlockedCard");
            const talentItem = document.createElement("div");
            talentItem.classList.add("hudTalentItem");
            talentItem.innerHTML = talent;
            talentList.appendChild(talentItem);
          }
        }
      }
    });
  }

};

const hudTimeElapsed = () => {
  const hudPlacePlaceTime = document.getElementById("hudPlacePlaceTime");
  const totalElapsed = countdown.elapsedTime;
  const totalElapsedFormated = formatSecondsToMMSS(totalElapsed);
  const hudTotalPlaceTime = document.getElementById("hudTotalPlaceTime");
  const hudTotalPlaceBorrowedTime = document.getElementById("hudTotalPlaceBorrowedTime");
  hudPlacePlaceTime.innerText = Game.placeTitle;
  hudTotalPlaceTime.innerText = totalElapsedFormated;
  hudTotalPlaceBorrowedTime.innerText = totalElapsed - Game.state.timerTime > 0 ? formatSecondsToMMSS(totalElapsed - Game.state.timerTime) : "00:00";
  // const borrowedTime =
};

const hudPlaceName = () => {
  const hudPlaceName = document.getElementById("hudPlaceName");
  hudPlaceName.innerText = Game.placeTitle;
};

const updateHud = async () => {

  hudPlaceName();
  hudTimeElapsed();
  await talentCards();
  updateHudUser();
  updateHudTime();
  updatePositiveCard();
  updateCounterHud();
  updateSkillsHud();

};

const newSkillConqueredHud = () => {
  const hudPrices = document.getElementById("hudPrices");
  hudPrices.style.display = "block";
  hudPrices.innerText = "¡Nueva aptitud conseguida, felicidades!";
};
const newTalentConqueredHud = () => {
  const hudPrices = document.getElementById("hudPrices");
  hudPrices.style.display = "block";
  hudPrices.innerText = "¡Nueva capacidad desbloqueada, sigue así!";
};

const hidePricesHud = () => {
  const hudPrices = document.getElementById("hudPrices");
  hudPrices.style.display = "none";
};




const talentConquered = (talent) => {
  
  const actualPlaceCard = document.querySelector(`.hudTalentCard[data-value="${Game.place}"]`);
  const acutalTalentList = actualPlaceCard.querySelector(".hudTalentList");
  const talentItem = document.createElement("div");
  talentItem.classList.add("hudTalentItem");
  talentItem.dataset.value = Game.place;
  talentItem.innerHTML = talent;
  acutalTalentList.appendChild(talentItem);
};

const conqueredNowTalent = (talentIndex) => {
  const tourUserTalentIndicator=document.getElementById("tourUserTalentIndicator");
  singleClass(tourUserTalentIndicator,'tourUserTalentIndicatorNotification');
  const talent = data[Game.place].talents[Number(talentIndex)];
  talentConquered(talent);

};

const deleteTalentsOnPrematureExit = () => {
  const itemsToRemove = document.querySelectorAll('.hudTalentItem[data-value]');
  itemsToRemove.forEach(item => {
      item.remove();
  });
}
const showHud = async () => {
  const tourUserTalentIndicator=document.getElementById("tourUserTalentIndicator");
  singleClass(tourUserTalentIndicator,'');
  await fadeInFadeOut("hudWrapper", 1, "flex");
};
const hideHud = async () => {
  hidePricesHud();
  await fadeInFadeOut("hudWrapper", 0, "none");
};
// updateHud();
