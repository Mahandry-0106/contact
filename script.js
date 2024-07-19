document.getElementById('contact-form').addEventListener('submit', event =>{
    event.preventDefault();
    // validation du formulaire//
    let isValid = true;
    // first-name//
    const firstName = document.getElementById('first-name');
    const firstNameError = document.getElementById('first-name-error');
    if (!firstName.value.trim()){
        firstNameError.style.display = 'block';
        isValid = false;
    } else{
        firstNameError.style.display = 'none';
    }
    const lastName = document.getElementById('Last-name');
    const lastNameError = document.getElementById('Last-name error');
    if (!lastName.value.trim()){
        lastNameError.style.display = 'block';
        isValid = false;
    } else{
        lastNameError.style.display = 'none';
    }
    // email//
    const email = document.getElementById('email-address');
    const emailError = document.getElementById('email-address-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value.trim())){
        emailError.style.display = 'block';
        isValid = false;
    } else{
        emailError.style.display ='none';
    }
    // query type//
    const queryType = document.querySelector('input[name="query-type"]:checked')
    const queryTypeError= document.getElementById('query-error')
    if(!queryType){
        queryTypeError.style.display = 'block';
        isValid = false;
    } else{
        queryTypeError.style.display='none'
    }
    //message//
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if(!message.value.trim()){
        messageError.style.display='block';
        isValid = false;
    } else{
        messageError.style.display = 'none';
    }
    const consent = document.getElementById('consent');
    const consentError = document.getElementById('consent-error');
    if(!consent.checked){
        consentError.style.display = 'block';
        isValid = false;
    } else{
        consentError.style.display = 'none;'
    }
    // Success//
    const successMessage = document.getElementById('success-message');
    if (isValid){
        successMessage.style.display = 'block';
        window.onclick = function(event){
            if (event.target == successMessage ){
                successMessage.style.display = 'none'; 
            }
        }
    } else{
        successMessage.style.display ='none';
    }
});
    