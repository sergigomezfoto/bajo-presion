const inputIntroControler = document.getElementById("input_form_intro");



inputIntroControler.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const sanitizedValue = sanitizeInput(inputValue);
  event.target.value = sanitizedValue;
});

function sanitizeInput(input) {
  const sanitizedValue = input.replace(/[^A-Za-z0-9_-]/g, "").toLowerCase();
  return sanitizedValue;
}

//botó
const buttonFormIntro = document.getElementById("button_form_intro");
const inputFormIntro = document.getElementById("input_form_intro");

buttonFormIntro.addEventListener("click", () => {
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
    passToVideo=true;

    user.name = inputValue;

  }
});
