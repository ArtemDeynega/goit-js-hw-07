const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const ref = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  valueEl: document.querySelector('#value'),
};

ref.incrementBtn.addEventListener('click', () => {
  counterValue.increment();
  ref.valueEl.textContent = counterValue.value;
});
ref.decrementBtn.addEventListener('click', () => {
  counterValue.decrement();
  ref.valueEl.textContent = counterValue.value;
});
