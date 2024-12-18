function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = reader.result;
        imagePreview.style.display = 'block';

        document.getElementById('changeImageBtn').style.display = 'block';
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}



function resetImage() {
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.src = "";
    imagePreview.style.display = 'none';
    document.getElementById('fileInput').value = "";
    document.getElementById('changeImageBtn').style.display = 'none';
}

document.querySelectorAll('.editable').forEach(function (element) {
    element.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            saveText(element);
            element.blur();
        }

        if (element.textContent.length > 20) {
            element.textContent = element.textContent.slice(0, 20);
        }
    });
});

function saveText(element) {
    const newText = element.textContent;
    console.log("Gemmer tekst:", newText);
}




document.addEventListener('DOMContentLoaded', function () {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const submitButton = document.querySelector('.submit-button');
    const togglePassword = document.getElementById('toggle-password');
    const toggleConfirmPassword = document.getElementById('toggle-confirm-password');

    function checkPasswordsMatch() {
        if (passwordField.value === confirmPasswordField.value) {
            confirmPasswordField.setCustomValidity('');
        } else {
            confirmPasswordField.setCustomValidity('Adgangskoderne stemmer ikke overens');
        }
    }

    emailField.addEventListener('input', function () {
        if (emailField.value) {
            passwordField.disabled = false;
        } else {
            passwordField.disabled = true;
            confirmPasswordField.disabled = true;
            confirmPasswordField.value = '';
        }
        checkForm();
    });

    passwordField.addEventListener('input', function () {
        if (emailField.value && passwordField.value) {
            confirmPasswordField.disabled = false;
        } else {
            confirmPasswordField.disabled = true;
            confirmPasswordField.value = '';
        }
        checkForm();
    });

    function checkForm() {
        if (emailField.value && passwordField.value && confirmPasswordField.value && passwordField.value === confirmPasswordField.value) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    passwordField.addEventListener('input', checkPasswordsMatch);
    confirmPasswordField.addEventListener('input', checkPasswordsMatch);

    emailField.addEventListener('input', checkForm);
    passwordField.addEventListener('input', checkForm);
    confirmPasswordField.addEventListener('input', checkForm);

    checkForm();

    togglePassword.addEventListener('click', function () {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePassword.textContent = 'visibility';
        } else {
            passwordField.type = 'password';
            togglePassword.textContent = 'visibility_off';
        }
    });

    toggleConfirmPassword.addEventListener('click', function () {
        if (confirmPasswordField.type === 'password') {
            confirmPasswordField.type = 'text';
            toggleConfirmPassword.textContent = 'visibility';
        } else {
            confirmPasswordField.type = 'password';
            toggleConfirmPassword.textContent = 'visibility_off';
        }
    });
});