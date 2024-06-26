document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('newsletterForm');
    const signupPage = document.getElementById('signup-form');
    const successMessage = document.getElementById('successMessage');
    const dismissButton = document.getElementById('dismissButton');
    const emailInput = document.getElementById('email');
    const subscribedEmail = document.getElementById('subscribedEmail');
    const errorMessage = document.querySelector('.error-message');

    function showError() {
        emailInput.classList.add('error');
        errorMessage.style.display = 'block'; 
    }

    function hideError(){
        emailInput.classList.remove('error');
        errorMessage.style.display = 'none';
    }

    form.addEventListener('submit', function(event){
        event.preventDefault();

        if (emailInput.validity.valid) {
            const email = emailInput.value;
            signupPage.style.display = 'none';
            successMessage.style.display = 'block';
            subscribedEmail.textContent = email;
            console.log('Form Submitted with email: ', email);
        } else {
            showError();
        }
    });

    dismissButton.addEventListener('click', function(){
        successMessage.style.display = 'none';
        signupPage.style.display = 'flex';
        emailInput.value = '';
        hideError();
    });

    emailInput.addEventListener('input', function() {
        if(emailInput.validity.valid){
            hideError();
        }
    });
    
    emailInput.addEventListener('blur', function() {
        if(!emailInput.validity.valid && emailInput.value !== ''){
            showError();
        }
    });
});