const inputRef = document.querySelector('input[type="number"]');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const containerRef = document.querySelector('#boxes');

let count;

inputRef.addEventListener('input', event => count = event.target.value);
renderBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(event) {
    const boxes = document.querySelectorAll('#boxes div');
    boxes.forEach(box => box.remove());

    let boxSize = 30;

    for (let i = 0; i < count; i++) {
        const box = document.createElement('div');

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        box.style.backgroundColor = `rgb(${r} ${g} ${b})`;
        box.style.width += `${boxSize += 10}px`;
        box.style.height += `${boxSize += 10}px`;

        containerRef.append(box);

    }

    inputRef.value = null;
};

function destroyBoxes(event) {
    const boxes = document.querySelectorAll('#boxes div');
    boxes.forEach(box => box.remove());
};