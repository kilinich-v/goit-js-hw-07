const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

decrement.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});

increment.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});