
const homeCounterPercentage = document.querySelector(".homeCounterPercentage");
const homeCounterPortions = document.querySelectorAll(".homeCounterPortion");


const updateCounterHome=()=>{       
    homeCounterPercentage.innerHTML = Game.conqueredPlacesPercentage;
    homeCounterPortions.forEach((portion, index) => {
      if (index < Game.conqueredPlacesNum) {
        portion.classList.add("highlighted");
      } else {
        portion.classList.remove("highlighted");
      }
    });

}