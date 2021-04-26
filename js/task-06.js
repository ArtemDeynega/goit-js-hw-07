// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// function onTargerBtnClick() {
//   console.log('Клик по целевой кнопке');
// }

// addListenerBtn.addEventListener('click', () => {
//   console.log('Вешаю слушателя события на целевую кнопку');
//   targetBtn.addEventListener('click', onTargerBtnClick);
// });

// removeListenerBtn.addEventListener('click', () => {
//   console.log('Снимаю слушателя события с целевой кнопки');
//   targetBtn.removeEventListener('click', onTargerBtnClick);
// });

// const form = document.querySelector('.js-register-form');
// form.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event) {
//   event.preventDefault();
//   // const formElements = event.currentTarget.elements;
//   // console.log('ето сабмит формы');
//   // console.log(formElements);
//   // const mail = formElements.email.value;
//   // console.log(mail);
//   // const password = formElements.password.value;
//   // console.log(password);
//   // const subscription = formElements.subscription.value;
//   // console.log(subscription);
//   // const formData = {
//   //   mail,
//   //   password,
//   //   subscription,
//   // };
//   // console.log(formData);

//   //лучший вариант
//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     console.log('Eto name:', name);
//     console.log('Eto value:', value);
//   });
// }

/////////// 2
// const refs = {
//   input: document.querySelector('.js-input'),
//   nameLabel: document.querySelector('.js-button > span'),
//   licenseChacknox: document.querySelector('.js-license'),
//   btn: document.querySelector('.js-button'),
// };

// // refs.input.addEventListener('focus', onInputFocus);
// // refs.input.addEventListener('blur', onInputBlur);

// // refs.input.addEventListener('change', onInputChange);

// refs.input.addEventListener('input', onInputChange);
// refs.licenseChacknox.addEventListener('change', onLicenseChange);

// function onInputFocus() {
//   console.log('Инпут получил фокус - событие focus');
// }

// function onInputBlur() {
//   console.log('Инпут потерял фокус - событие blur');
// }

// function onInputChange(event) {
//   refs.nameLabel.textContent = event.currentTarget.value;
// }
// function onLicenseChange(event) {
//   // console.log(event.currentTarget.checked);
//   // console.log(refs.btn.disabled);
//   refs.btn.disabled = !event.currentTarget.checked;
// }

//////////// 3
// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeypress);
// refs.clearBtn.addEventListener('click', onClearOutput);

// function onKeypress(event) {
//   console.log(event.key);
//   refs.output.textContent += event.key;
// }
// function onClearOutput() {
//   refs.output.textContent = '';
// }

//////////4 Модалка
const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
