const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const addIngradientItem = ingredients => ingredients.map(ingredient => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    return ingredientItem;
});

const newIngradients = addIngradientItem(ingredients);

ingredientsRef.append(...newIngradients);