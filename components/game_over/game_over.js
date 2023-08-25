const winGame = async () => {
  fadeinAndPlayNewVideoIntro(videoList.endVideo);
  await waitForEventToTrigger(document.getElementById("skipVideoButton"), "click");
  const gameOver = document.getElementById("gameOver");
  const homeInterface = document.getElementById("homeInterface");
  homeInterface.style.opacity = "0";
  gameOver.style.display = "flex";
  await awaitStylecomplete(
    gameOver,
    "display",
    "flex",
    500,
    () => {
      throw `máxims intents showwhin`;
    },
    "showWin"
  );
    gameOver.style.opacity = "1";
};

const gameOverButton = document.getElementById("gameOverButton");

gameOverButton.addEventListener("click", () => {
  deleteLocalStorage("bajoPresion");
  location.reload();
});
