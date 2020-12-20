const categoriesRef = document.querySelector('#categories');

const allItems = categoriesRef.querySelectorAll('.item');

const categoriesInfo = list => list.forEach((item, index) => {
    const title = item.querySelector('h2');
    const liQuantity = item.children[1].children.length;

    console.log(`Категория: ${title.textContent}`);
    console.log(`Количество элементов: ${liQuantity}`);
});

console.log(`В списке ${allItems.length} категории.`);
categoriesInfo(allItems);