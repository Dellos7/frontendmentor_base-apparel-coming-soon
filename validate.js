const validateForm = (form) => {
    const buttonEl = document.querySelector('form button');
    // Trigger animation
    buttonEl.style.animation = 'goBackwards 1.5s ease-in';
    const emailInputEl = document.querySelector('input[name="email"]');
    const formFeedbackEl = document.querySelector('.form-feedback');
    buttonEl.classList.remove('invalid');
    emailInputEl.classList.remove('invalid');
    formFeedbackEl.classList.add('oculto');
    setTimeout( () => {
        // Test email valid with regexp
        const re = new RegExp(/^[a-zA-Z0-9-._]+@[a-zA-Z0-9-._]+\.[a-zA-Z0-9-._]{2,}$/, 'i');
        let emailVal = emailInputEl.value;
        // If is email, submit form
        if( re.test(emailVal) ){
            form.submit();
        }
        // If is not email, set invalid classes to elements
        else{
            buttonEl.classList.add('invalid');
            emailInputEl.classList.add('invalid');
            formFeedbackEl.classList.remove('oculto');
        }
        // Reset animation on button
        buttonEl.style.animation = 'none';
        setTimeout( () => {
            buttonEl.style.animation = '';
        }, 10 );
    }, 1500);
    return false;
};