const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('input', () => {
  inputEl.value.length !== +inputEl.getAttribute('data-length')
    ? inputEl.classList.add('invalid')
    : inputEl.classList.remove('invalid');
});

inputEl.addEventListener('input', () => {
  inputEl.value.length === +inputEl.getAttribute('data-length')
    ? inputEl.classList.add('valid')
    : inputEl.classList.remove('valid');
});

inputEl.addEventListener('input', () => {
  if (inputEl.value.length === 0) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
  }
});
