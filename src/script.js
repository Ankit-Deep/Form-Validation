
const body = document.querySelector('body');
const form = document.querySelector('form');
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const cancel = document.querySelector('#cancel');
const submit = document.querySelector("#submit");

const nameError = document.querySelector(".nameError");
const dobError = document.querySelector(".dobError");
const phoneNumberError = document.querySelector(".phoneNumberError");
const passwordError = document.querySelector(".passwordError");
const confirmPasswordError = document.querySelector(".confirmPasswordError");

const passwordEye = document.querySelector("#passwordEye");
const confirmPasswordEye = document.querySelector("#confirmPasswordEye");

// Toggle for password & showing it when toggle
let passwordCount = 0;
passwordEye.addEventListener('click', (e) => {
    passwordCount++;

    if (passwordCount % 2 !== 0) {
        password.type = "text";
        passwordEye.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        passwordEye.classList.replace('fa-eye', 'fa-eye-slash');
        password.type = 'password';
    }
});

// Toggle for confirmPassword & showing it when toggle
let confirmPasswordCount = 0;
confirmPasswordEye.addEventListener('click', ()=> {
    confirmPasswordCount++;

    if (confirmPasswordCount % 2 != 0) {
        confirmPasswordEye.classList.replace('fa-eye-slash', 'fa-eye');
        confirmPassword.type = 'text';
    } else {
        confirmPasswordEye.classList.replace('fa-eye', 'fa-eye-slash');
        confirmPassword.type = 'password';
    }
})

// Submitting the form :
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isAlphabet = true;
    const fullNameValue = fullName.value;

    // Checking for Full Name
    if (fullName.value === '') {
        isAlphabet = false;
        nameError.innerHTML = '*Please Enter your name*';
        fullName.style.border = '2px solid white';
        // nameError.style.color = 'red';
    } 

    // Check each character in the input
    for (let i = 0; i < fullNameValue.length; i++) {
      const char = fullNameValue[i];
      
      // Check if character is not an alphabet
      if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && !(char === " ")) {
        isAlphabet = false;
        break;
      }
    } 

    if (fullNameValue) {
        if (isAlphabet) {
            isAlphabet = true;
            nameError.innerHTML = '';
        } else if (isAlphabet === false) {
            nameError.innerHTML = "*Enter your name with aplhabets only*";
            fullName.style.border = '2px solid white';
        } 
    } 

    // Conditional checking for phone number
    const phoneNumberValue = phoneNumber.value;
    let isNumber = true;
    
    if (isNaN(phoneNumber.value)) {
        isNumber = false;
        phoneNumberError.innerHTML = '*Phone Number must be in digits only.*';
        phoneNumber.style.border = '2px solid white';
    } else if (phoneNumberValue.length != 10) {
        isNumber = false;
        phoneNumberError.innerHTML = '*Enter phone number with 10 digits*';
    } else {
        isNumber = true;
        phoneNumberError.innerHTML = "";
        
    }

    // Checking for password :
    const passwordDiv = document.querySelector('#password-div');

    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    let isPasswordSame = false;

    if (passwordValue === '') {
        isPasswordSame = false;
        passwordError.innerHTML = '*Enter Password*';
    } else {
        passwordError.innerHTML = '';
    }
    
    if (confirmPassword.value === '') {
        isPasswordSame = false;
        confirmPasswordError.innerHTML = '*Confirm your password*';
    }

    if (password) {
        if (passwordValue.length < 8 || passwordValue.length > 12 ) {
            isPasswordSame = false;
            passwordError.innerHTML = '*It must have 8-12 charcters only.*';
        } else {
            passwordError.innerHTML = '';
        } 
    }

    if(passwordValue === '' && confirmPassword !== ''){
        isPasswordSame = false;
        passwordError.innerHTML = '*Please enter password first*';
    }

    if (passwordValue !== '' && confirmPasswordValue !== '') {
        if (passwordValue !== confirmPasswordValue) {
            isPasswordSame = false;
            confirmPasswordError.innerHTML = '*Enter the same password*';
            confirmPasswordError.style.color = 'red';
            passwordDiv.style.border = '2px solid white';
        } else {
            isPasswordSame = true;
            confirmPasswordError.innerHTML = '';
        }
    }


    if ((isAlphabet === true && isNumber === true) &&  isPasswordSame === true ) {
        console.log('You have signed in!!');
        setTimeout(() => {
            alert(`Hello ${fullNameValue}, you've succesfully signed in !!`);
            location.reload();             
        }, 1000);
    }

});


cancel.addEventListener('click', ()=> {
    location.reload();
})
