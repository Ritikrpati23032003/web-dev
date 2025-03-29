let namError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let mailError = document.getElementById("mail-error");
let submitError = document.getElementById("Submit-error");
let textError = document.getElementById("text-error");

function validateName() {
    let name = document.getElementById("name").value;

    if (name.length == 0) {
        namError.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)*$/)) {
        namError.innerHTML = 'Enter a valid full name';
        return false;
    }

    namError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validatPhone(){
    let phone = document.getElementById("phone").value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }

    if (phone.length!==10) {
        phoneError.innerHTML = 'Number should be 10 digit';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'only digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validatMail() {
    let mail = document.getElementById("mail").value;
    

    if (mail.length === 0) {
        mailError.innerHTML = 'Email is required';
        return false;
    }

    if (!mail.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        mailError.innerHTML = 'Email Invalid';
        return false;
    }

    mailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateText() {
    let text = document.getElementById('message').value;
    
    let required = 20;
    let left = required - text.length;

    if (left > 0) {
        textError.innerHTML = left + ' more characters required';
        return false;
    }
    textError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateForm() {
    

    if (!validateName() || !validatPhone() || !validatMail() || !validateText()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the errors before submitting';
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }

    submitError.style.display = 'none';
    return true; 
}


