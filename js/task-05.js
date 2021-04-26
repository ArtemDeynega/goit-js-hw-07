const refEl = {
  inputEl: document.querySelector('#name-input'),
  spanEl: document.querySelector('#name-output'),
};

refEl.inputEl.addEventListener('input', handleInputMessage);

function handleInputMessage(message) {
  refEl.spanEl.textContent =
    message.currentTarget.value === ''
      ? 'незнакомец'
      : message.currentTarget.value;
}
