function validateEmail(){
    let emailInput = document.getElementById('email')
    let email = emailInput.value
    let pattern = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
    let errorMessage = document.querySelector('.email-error')

    if (email === ''){
        errorMessage.textContent = "*This field cannot be empty"
        emailInput.classList.add('error')
        return false
    }

    if ((!pattern.test(email) || email === '')){
        emailInput.classList.add('error')
        errorMessage.textContent = "*Please enter a valid email address"
        return false
    }
    else {
        emailInput.classList.remove('error')
        errorMessage.textContent = ''        
        return true
    }
}

function validatePhone(){
    let phoneInput = document.getElementById('ph')
    let phone = phoneInput.value
    let pattern = /^\+?[1-9]\d{1,14}$/
    let errorMessage = document.querySelector('.ph-error')

    if (phone === ''){
        errorMessage.textContent = "*This field cannot be empty"
        phoneInput.classList.add('error')
        return false
    }

    else if (!pattern.test(phone) || phone === ""){
        phoneInput.classList.add('error')
        errorMessage.textContent = "*Please enter a valid phone number"
        return false
    }
    else {
        phoneInput.classList.remove('error')
        errorMessage.textContent = ""
        return true
    }
}

function validatePass(){
    let passInput = document.getElementById('pass')
    let pass = passInput.value
    let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`]).{8,}$/
    let errorMessage = document.querySelector('.pass-error')

    
    if (pass === ''){
        errorMessage.textContent = "*This field cannot be empty"
        passInput.classList.add('error')
        return false
    }

    else if (!pattern.test(pass)){
        errorMessage.textContent = "*Please enter a valid password"
        passInput.classList.add('error')
        return false
    }
    else {
        passInput.classList.remove('error')
        errorMessage.textContent = ""
        return true
    }
}

function confirmPass(){
    let passInput = document.getElementById('pass')
    let pass = passInput.value
    let confirmPassInput = document.getElementById('confirm-pass')
    let confirmPass = confirmPassInput.value
    let errorMessage = document.querySelector('.confirm-error')
    
    if (confirmPass === ''){
        errorMessage.textContent = "*This field cannot be empty"
        confirmPassInput.classList.add('error')
        return false
    }

    else if (confirmPass === pass && !(confirmPass === '')){
        confirmPassInput.classList.remove('error')
        errorMessage.textContent = ""
        return true
    }
    else {
        errorMessage.textContent = "*The passwords do not match"
        confirmPassInput.classList.add('error')
        return false
    }
}

function validateFirstName(){
    let firstNameInput = document.getElementById('first-name')
    let firstName = firstNameInput.value
    let firstErrorMessage = document.querySelector('.first-name-error')

    if (firstName === ''){
        firstErrorMessage.textContent = "*This field cannot be empty"
        firstNameInput.classList.add('error')
        return false
    }
    else {
        firstErrorMessage.textContent = ""
        firstNameInput.classList.remove('error')
        return true
    }
}


function validateLastName(){
    let lastNameInput = document.getElementById('last-name')
    let lastName = lastNameInput.value 
    let lastErrorMessage = document.querySelector('.last-name-error')

    if(lastName === ''){
        lastErrorMessage.textContent = "*This field cannot be empty"
        lastNameInput.classList.add('error')
        return false
    }

    else {
        lastErrorMessage.textContent = ""
        lastNameInput.classList.remove('error')
        return true
    }      
}

let emailInput = document.getElementById('email')
emailInput.addEventListener('input', validateEmail)

let phoneInput = document.getElementById('ph')
phoneInput.addEventListener('input', validatePhone)

let passInput = document.getElementById('pass')
passInput.addEventListener('input', validatePass)

let confirmPassInput =  document.getElementById('confirm-pass')
confirmPassInput.addEventListener('input', confirmPass)

let firstNameInput = document.getElementById('first-name')
firstNameInput.addEventListener('input', validateFirstName)

let lastNameInput = document.getElementById('last-name')
lastNameInput.addEventListener('input', validateLastName)

function validateForm() {
    validateFirstName()
    validateLastName()
    validateEmail()
    validatePhone()
    validatePass()
    confirmPass()
    
    if(validateEmail() && validateFirstName() && validateLastName() && validatePhone() && validatePass() && confirmPass()){
        return true
    }

    else return false
}



