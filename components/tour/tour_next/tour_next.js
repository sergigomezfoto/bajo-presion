
const tourNext= document.getElementById("tourNext");

const nextTourClassAdd = () => {
    toggleClass(tourNext, "tourNextHover", "add");
  };
  
  const nextTourClassRemove = () => {
    toggleClass(tourNext, "tourNextHover", "remove");
  };

const nextTourClick = () => {

  enterPano();

}