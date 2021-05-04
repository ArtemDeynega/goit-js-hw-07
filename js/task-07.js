const ref = {
  inputEl: document.getElementById('font-size-control'),
  textEl: document.getElementById('text'),
};

ref.inputEl.addEventListener('input', elem => {
  ref.textEl.style.fontSize = `${elem.currentTarget.value}px`;
});
