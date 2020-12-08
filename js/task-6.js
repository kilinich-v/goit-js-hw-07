const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('input', onToggleStyle);

function onToggleStyle() {
    const inputLength = validationInputRef.value.length;
    const currentInputLength = Number(validationInputRef.dataset.length);

    if (inputLength === currentInputLength) {
        validationInputRef.classList.remove('invalid');
        validationInputRef.classList.add('valid');

    }

    if (inputLength !== currentInputLength) {
        validationInputRef.classList.remove('valid');
        validationInputRef.classList.add('invalid');
    }
}