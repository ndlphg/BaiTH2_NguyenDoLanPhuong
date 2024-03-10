const passwordInput = document.getElementById('password');
const messageElement = document.getElementById('message');
const showPasswordButton = document.getElementById('show-password');

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length > 0) {
        messageElement.classList.add('shown');
    } else {
        messageElement.classList.remove('shown');
    }
});

showPasswordButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordButton.textContent = 'Ẩn';
    } else {
        passwordInput.type = 'password';
        showPasswordButton.textContent = 'Hiện';
    }
});
