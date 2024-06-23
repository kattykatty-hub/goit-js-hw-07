// Знаходимо елементи input і span
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Додаємо слухач події 'input' до input#name-input
nameInput.addEventListener("input", (event) => {
  // Отримуємо значення інпуту та очищаємо його від пробілів по краях
  const inputValue = event.target.value.trim();

  // Якщо значення інпуту порожнє або містить лише пробіли, встановлюємо 'Anonymous'
  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    // В іншому випадку підставляємо значення інпуту
    nameOutput.textContent = inputValue;
  }
});
