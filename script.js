//your JS code here. If required.
let inputs = document.querySelectorAll('.code');

document.addEventListener('DOMContentLoaded', () => {
    inputs[0].focus();
});

inputs[0].addEventListener('input', function() {
    if (inputs[0].value !== '') {
        inputs[1].focus();
    }
});

for (let i = 1; i < inputs.length - 1; i++) {
    inputs[i].addEventListener('input', () => {
        if (inputs[i].value !== '') {
            inputs[i + 1].focus();
        } else {
            inputs[i - 1].focus();
        }
    });
}
inputs[inputs.length - 1].addEventListener('input', () => {
    if (inputs[inputs.length - 1].value === '') {
        inputs[inputs.length - 2].focus();
    }
});