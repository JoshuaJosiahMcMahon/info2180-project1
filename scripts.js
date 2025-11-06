document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.newsletter form');
    if (!form) return;

    const emailInput = form.querySelector('input[type="email"]');
    const submitButton = form.querySelector('[type="submit"]');
    const messageBox = document.querySelector('.message');

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            messageBox.textContent = 'Please enter a valid email.';
        } else {
            messageBox.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
        }
    });

    submitButton?.addEventListener('click', (event) => {
        event.preventDefault();
        form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });
});