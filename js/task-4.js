// Знаходимо форму
const form = document.querySelector(".login-form");

// Додаємо слухач події 'submit' на форму
form.addEventListener("submit", (event) => {
  // Запобігаємо перезавантаженню сторінки
  event.preventDefault();

  // Знаходимо елементи форми
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  // Очищаємо значення полів від пробілів
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  // Створюємо об'єкт з даними форми
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виводимо об'єкт з даними в консоль
  console.log(formData);

  // Очищаємо форму
  form.reset();
});
