function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // Очистити попередню колекцію
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "5px";
    fragment.appendChild(box);
    size += 10;
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
