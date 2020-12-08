const inputRef = document.querySelector('#name-input');
const titleNameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onOutputText);

function onOutputText(event) {
    inputRef.value === '' ?
        titleNameRef.textContent = 'незнакомец' : titleNameRef.textContent = inputRef.value;
};