const validationInputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

validationInputRef.addEventListener('input', onChangeFontSize);

function onChangeFontSize() {
    const currentFontSize = validationInputRef.value;

    textRef.style.fontSize = `${currentFontSize}px`;
}
