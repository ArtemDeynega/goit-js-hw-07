const ref = {
  listId: document.querySelector('#categories'),
  listEl: document.querySelectorAll('#categories .item'),
};
console.log(`В списке ${ref.listId.childElementCount} категорий`);

ref.listEl.forEach(elem => {
  console.log(`Категория: ${elem.firstElementChild.textContent}`);
  console.log(
    `Количество елементов: ${elem.lastChild.previousSibling.childElementCount}`,
  );
});
