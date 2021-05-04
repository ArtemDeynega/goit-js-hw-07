const ref = {
  inputEl: document.getElementById('name-input'),
  outputEl: document.getElementById('name-output'),
};
ref.inputEl.addEventListener('input', inputMessage);

function inputMessage(message) {
  ref.outputEl.textContent =
    message.currentTarget.value === ''
      ? 'незнакомец'
      : message.currentTarget.value;
}
