const inputRef = document.getElementById('name-input');
const spanRef = document.getElementById('name-output');

inputRef.addEventListener('input', event => {
    const text = event.target.value;

    if (text.length > 0 && text.trim() !== '') {
        spanRef.textContent = text.trim()
    }
    else spanRef.textContent = 'незнакомец'
});