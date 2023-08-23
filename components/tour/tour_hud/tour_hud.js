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
        const currentTalentCount = talentList.children.length;
        const missingTalentCount = 4 - currentTalentCount;

        if (missingTalentCount > 0) {
          card.classList.add("hudTalentUnlockedCard");
          for (let i = currentTalentCount; i < currentTalentCount + missingTalentCount; i++) {
            const talentItem = document.createElement("div");
            talentItem.classList.add("hudTalentItem");
            talentItem.innerHTML = data[dataValue].talents[i];
            talentList.appendChild(talentItem);
          }
        }
      }
    });
  }
};

const updateHud = () => {
  talentCards();
  updateHudUser();
  updateHudTime();
  updatePositiveCard();
  updateCounterHud();
  updateSkillsHud();
};

const actualPlaceTalentConquered = (talent) => {
  const actualPlaceCard = document.querySelector(`.hudTalentCard[data-value="${Game.place}"]`);
  const acutalTalentList = actualPlaceCard.querySelector(".hudTalentList");
  const talentItem = document.createElement("div");
  talentItem.classList.add("hudTalentItem");
  talentItem.innerHTML = talent;
  acutalTalentList.appendChild(talentItem);
};

// updateHud();
