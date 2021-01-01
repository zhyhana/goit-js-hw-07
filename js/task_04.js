const counterRef = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const decrement = () => {
    counterRef.textContent -= 1;
}

const increment = () => {
    counterRef.textContent = Number(counterRef.textContent) + 1;
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);