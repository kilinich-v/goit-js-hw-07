const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onToggleStyle);

function onToggleStyle() {
    const inputLength = validationInputRef.value.length;
    const currentInputLength = Number(validationInputRef.dataset.length);

    validationInputRef.classList.remove('valid');
    validationInputRef.classList.add('invalid');

    if (inputLength === currentInputLength) {
        validationInputRef.classList.remove('invalid');
        validationInputRef.classList.add('valid');
    }
}