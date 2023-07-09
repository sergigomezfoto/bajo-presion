
const inputIntroControler = document.getElementById('input_form_intro');

inputIntroControler.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  const sanitizedValue = sanitizeInput(inputValue);
  event.target.value = sanitizedValue;
});

function sanitizeInput(input) {
  const sanitizedValue = input.replace(/[^A-Za-z0-9_-]/g, '').toLowerCase();
  return sanitizedValue;
}

//botó
