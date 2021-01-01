const inputRef = document.getElementById('validation-input');
const inputLength = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener("input", event => {
  inputRef.value = event.target.value.trim();
});

inputRef.addEventListener('change', event => {
    const text = event.target.value;

    if (text.length === 0) {
        inputRef.classList.remove('invalid');
        inputRef.classList.remove('valid');
    }
    else if (text.length === Number(inputLength)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
    else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid')
    }
});