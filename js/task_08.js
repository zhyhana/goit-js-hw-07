const inputRef = document.querySelector('#controls > input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.getElementById('boxes');
let accumDivs;

destroyBtnRef.addEventListener('click', destroyBoxes);
renderBtnRef.addEventListener('click', createBoxes);

function createDivs(amount) {
    accumDivs = [];
    boxesRef.innerHTML = '';
    let size = 20;
    for (let i = 0; i < amount; i++) {
        size += 10;
        const createDiv = document.createElement('div');
        createDiv.style.width = `${size}px`;
        createDiv.style.height = `${size}px`;
        createDiv.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        accumDivs.push(createDiv);
    }
    boxesRef.append(...accumDivs);
};
function createBoxes() {
    createDivs(Number(inputRef.value));
};
function destroyBoxes() {
    accumDivs = [];
    boxesRef.innerHTML = '';
    inputRef.value = '';
};