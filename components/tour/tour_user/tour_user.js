////////////////////////////////////////////////////////////////////////////////////////user

const tourCounterPortions = document.querySelectorAll(".tourCounterPortion");
const updateCounterTour = () => {
  tourCounterPortions.forEach((portion, index) => {
    if (index < Game.conqueredPlacesNum) {
      portion.classList.add("tourHighlighted");
    } else {
      portion.classList.remove("tourHighlighted");
    }
  });
};

const tourUser = document.getElementById("tourUser");
const niknameTour = document.getElementById("niknameTour");

/////////////////////////////////////////////hover out krpano

const niknameTourClassAdd = () => {
  toggleClass(niknameTour, "niknameTourHover", "add");
};

const niknameTourClassRemove = () => {
  toggleClass(niknameTour, "niknameTourHover", "remove");
};

const nicknameTourClick = async () => {
  await updateGameState();
  singleClass(finalPlacePicture, `hudImagenone`);
  showHud();
};
// tourUser.addEventListener('mousedown', function (event) {
//   console.log(event);
//     // Use elementFromPoint to determine which element is below the cursor

// });

// document.addEventListener('click', function(e) {
//   const rect = tourUser.getBoundingClientRect();

//   if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
//      console.log('he claickat');
//   }
// });

// Capture and propagate 'dragstart' event for div1

// Usage:
