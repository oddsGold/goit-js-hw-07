const input = document.querySelector('input');
const parentDiv = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener("click", () => {
  const inputValue = Number(input.value);

  if(input.value !== "") {
    parentDiv.innerHTML = '';
  }
  if(inputValue >=  Number(input.min) && inputValue <= Number(input.max)) {
    createBoxes(input.value);
  }
  input.value = "";
});

destroyButton.addEventListener("click", () => {
  parentDiv.innerHTML = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  let width = 20;
  let height = 20;

  let htmlString = '';

  for (let i = 1; i <= amount; i++) {
    htmlString = `${htmlString} <div style="background-color: ${getRandomHexColor()}; width: ${width+=10}px; height: ${height+=10}px"></div>`
  }

  parentDiv.insertAdjacentHTML('beforeend', htmlString);

}

