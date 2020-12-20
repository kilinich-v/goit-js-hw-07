const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

decrement.addEventListener('click', decrementHandler);

increment.addEventListener('click', incrementHandler);

function incrementHandler() {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}
function decrementHandler() {
    counterValue += 1;
    valueRef.textContent = counterValue;
}