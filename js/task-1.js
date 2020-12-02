const categoriesRef = document.querySelector('#categories');

const allItems = categoriesRef.querySelectorAll('.item');

const categoriesInfo = list => list.forEach((item) => {
    const title = item.querySelector('h2');
    const liQuantity = item.querySelectorAll('li');

    console.log(`Категория: ${title.textContent}`);
    console.log(`Количество элементов: ${liQuantity.length}`);
});

console.log(`В списке ${allItems.length} категории.`);
categoriesInfo(allItems);