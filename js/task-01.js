const ref = {
  listId: document.querySelector('#categories'),
  listEl: document.querySelectorAll('#categories .item'),
};
console.log(`В списке ${ref.listId.childElementCount} категории.`);

ref.listEl.forEach(elem => {
  console.log(`Категория: ${elem.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${elem.lastChild.previousSibling.childElementCount}`,
  );
});
