function validateEmail(){
    let emailInput = document.getElementById('email')
    let email = emailInput.value
    let pattern = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
    let errorMessage = document.querySelector('.email-error')

    if ((!pattern.test(email) || email === '')){
        errorMessage.textContent = "*Please enter a valid email address"
        return false
    }
    else {
        errorMessage.textContent = ''        
        return true
    }
}

function validatePhone(){
    let phoneInput = document.getElementById('ph')
    let phone = phoneInput.value
    let pattern = /^\+?[1-9]\d{1,14}$/
    let errorMessage = document.querySelector('.ph-error')

    if (!pattern.test(phone) || phone === ""){
        errorMessage.textContent = "*Please enter a valid phone number"
        return false
    }
    else {
        errorMessage.textContent = ""
        return true
    }
}

function validatePass(){
    let passInput = document.getElementById('pass')
    let pass = passInput.value
    let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`]).{8,}$/
    let errorMessage = document.querySelector('.pass-error')

    if (!pattern.test(pass) || pass === ''){
        errorMessage.textContent = "*Please enter a valid password"
        return false
    }
    else {
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
    
    if (confirmPass === pass){
        errorMessage.textContent = ""
        return true
    }
    else {
        errorMessage.textContent = "*The passwords do not match"
        return false
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

function validateForm() {
    if ((validateEmail() && validatePhone()) && (validatePass() && confirmPass())){
        return true
    }
    else return false
}



