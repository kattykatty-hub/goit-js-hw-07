// Знаходимо елемент ul#categories
const categories = document.querySelector("#categories");

// Знаходимо всі елементи li з класом item всередині ul#categories
const items = categories.querySelectorAll(".item");

// Виводимо в консоль кількість категорій
console.log("Number of categories:", items.length);

// Проходимо по кожному елементу li.item
items.forEach((item) => {
  // Знаходимо заголовок (елемент h2)
  const title = item.querySelector("h2").textContent;

  // Знаходимо всі елементи li всередині поточного li.item
  const elements = item.querySelectorAll("ul li");

  // Виводимо заголовок і кількість елементів у категорії
  console.log("Category:", title);
  console.log("Elements:", elements.length);
});
