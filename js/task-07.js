const refs = {
  inputEl: document.getElementById('font-size-control'),
  spanEl: document.getElementById('text'),
};

refs.inputEl.addEventListener('input', size => {
  refs.spanEl.style.fontSize = `${size.currentTarget.value}px`;
});
