const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const craeteListItem = ingredients.map(elem => {
  const itemEl = document.createElement('li');
  itemEl.textContent = elem;
  return itemEl;
});

ingredientsEl.append(...craeteListItem);
