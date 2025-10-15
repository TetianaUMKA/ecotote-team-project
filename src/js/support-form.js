const form = document.querySelector('.support-form');
const requiredInputs = form.querySelectorAll('[required]');
const submitButton = form.querySelector('.support-button');

function checkFormValidity() {
  const allValid = Array.from(requiredInputs).every(input =>
    input.checkValidity()
  );
  submitButton.disabled = !allValid;
}

requiredInputs.forEach(input => {
  input.addEventListener('input', checkFormValidity);
});

checkFormValidity();
