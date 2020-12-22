const inputRef = document.querySelector('input[type="number"]');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const containerRef = document.querySelector('#boxes');

let count;

inputRef.addEventListener('input', event => count = event.target.value);
renderBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(event) {
    destroyBoxes(event);

    let boxWidth = 20;
    let boxHight = 20;
    let boxes = [];

    for (let i = 0; i < count; i++) {
        const box = document.createElement('div');

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        box.style.backgroundColor = `rgb(${r} ${g} ${b})`;
        box.style.width += `${boxWidth += 10}px`;
        box.style.height += `${boxHight += 10}px`;

        boxes.push(box);
    }

    containerRef.append(...boxes);
    inputRef.value = null;
};

function destroyBoxes(event) {
    boxes.innerHTML = '';
};