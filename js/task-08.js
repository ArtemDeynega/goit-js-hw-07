const refs = {
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),

  inputEl: document.querySelector('#controls input'),
  boxes: document.getElementById('boxes'),
  basicSize: 30,
};

refs.renderBtn.addEventListener('click', getAmount);
refs.destroyBtn.addEventListener('click', removeBtn);

function getAmount() {
  const amount = refs.inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const creativeDiv = document.createElement('div');
    const randomiser = () => Math.floor(Math.random() * 256);
    creativeDiv.style.width = `${refs.basicSize}px`;
    creativeDiv.style.height = `${refs.basicSize}px`;
    creativeDiv.style.backgroundColor = `rgb(${randomiser()},${randomiser()},${randomiser()})`;

    refs.boxes.append(creativeDiv);
    refs.basicSize += 10;
  }
}

function removeBtn() {
  refs.inputEl.value = '';
  refs.boxes.innerHTML = '';
  refs.basicSize = 30;
}
