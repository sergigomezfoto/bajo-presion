
const homeCounterPercentage = document.querySelector(".homeCounterPercentage");
const homeCounterPortions = document.querySelectorAll(".homeCounterPortion");


const updateCounterHome=()=>{       
    homeCounterPercentage.innerHTML = Game.conqueredPlacesPercentage;
    if (Game.conqueredPlacesNum > 0) {
      homeCounterPercentage.style.opacity= 1;
    }
    homeCounterPortions.forEach((portion, index) => {
      if (index < Game.conqueredPlacesNum) {
        portion.classList.add("homeCounterHighlighted");
      } else {
        portion.classList.remove("homeCounterHighlighted");
      }
    });

}