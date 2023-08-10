const inputIntroControler = document.getElementById("input_form_intro");

inputIntroControler.addEventListener("input", (event) => {

  const inputValue = event.target.value;
  const sanitizedValue = sanitizeInput(inputValue);
  event.target.value = sanitizedValue;
  nikname.innerHTML = sanitizedValue;
});


const sanitizeInput=(input)=> {
  const sanitizedValue = input.replace(/[^A-Za-z0-9_-]/g, "").toLowerCase();
  return sanitizedValue;
}

//botó
const buttonFormIntro = document.getElementById("button_form_intro");
const inputFormIntro = document.getElementById("input_form_intro");

const sendNickName = () => {
 
  const nikname= document.getElementById("nikname");
  const inputValue = inputFormIntro.value.trim();

  if (inputValue.length < 2) {
    inputFormIntro.classList.add("shake-animation");
    inputFormIntro.value = "";
    inputFormIntro.placeholder = "Introduce un nickname válido";
    inputFormIntro.classList.add("error-placeholder");

    setTimeout(() => {
      inputFormIntro.classList.remove("shake-animation");
      inputFormIntro.placeholder = "Introduce tu nickname";
      inputFormIntro.classList.remove("error-placeholder");
      inputIntroControler.focus();
    }, 1500);
  } else {
    passToVideo = true;
    Game.user = inputValue;
    nikname.innerText = Game.nickName;
    window.removeEventListener("keyup", handleFormKeyUp);
  }
};
const handleFormKeyUp=(event)=> {
  if (document.activeElement === inputFormIntro) {
      if (event.key === "Enter") {
          sendNickName();
      }
  }
}

const addKeyEventToForm = () => {
  window.addEventListener("keyup", handleFormKeyUp);
};

buttonFormIntro.addEventListener("click", sendNickName);
