const localStorageText = () => {
  const localstorageMessage = document.getElementById("localstorageMessage");
  localstorageMessage.innerHTML = `¡Hola <b>${capitalizeFirstLetter(
    loadLocalStorage("bajoPresion").lsuser
  )}</b>! Tú ya has jugado desde este navegador ¿verdad?<br> ¿Quieres cargar la anterior partida o quieres volver a empezar de zero?`;
};

const loadFromLocalStorage = () => {
  Game.user = loadLocalStorage("bajoPresion").lsuser;
  Game.state.placesConquered = loadLocalStorage("bajoPresion").lsplacesConquered;
  Game.state.skillsConquered = loadLocalStorage("bajoPresion").lsskillsConquered;
};

const loadLocalStorageYes = document.getElementById("loadLocalStorageYes");
const loadLocalStorageNo = document.getElementById("loadLocalStorageNo");

loadLocalStorageNo.addEventListener("click", async () => {
  deleteLocalStorage("bajoPresion");
  const localStorageLoadDiv = document.getElementById("localStorageLoadDiv");
  localStorageLoadDiv.style.opacity = "0";
  await sleep(500);
  localStorageLoadDiv.style.display = "none";
});

loadLocalStorageYes.addEventListener("click", async () => {
  const localStorageLoadDiv = document.getElementById("localStorageLoadDiv");
  localStorageLoadDiv.style.opacity = "0";
  await sleep(500);
  localStorageLoadDiv.style.display = "none";
  loadFromLocalStorage();
  putNicknames();
  clearInterval(introLPInterval);
  await skipIntro();
  throw "desde localstorage";
});
