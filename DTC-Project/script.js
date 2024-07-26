// Hamburger mobile menu
document.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.getElementById('hamburger-container');
    let navbar = document.querySelector('.mobile-nav-bar')

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open')

});
});

// Form validation

const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const passwordVisibilty = document.querySelectorAll('.passwords')

passwordVisibilty.forEach((e) => {
    e.addEventListener('click', () => {
        const password = e.parentNode.children[1];
        password.type = password.type === 'password' ? 'text': 'password';
    });
    
    
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    try{
        checkInputs();
        window.location.href = 'loading.html';

    }catch (error){
        console.log(error);
    }
    
});

function checkInputs(){
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    userNameValid(userNameValue);
    passwordChecker(password1Value, password2Value);


}

function setError(element, message){
    const formControl = element.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error';
    small.textContent = message;
}
function setSuccess(element){
    const formControl = element.parentElement;
    formControl.className = 'form-control success';
}

function passwordChecker(p1, p2){
    if (p1.length < 8){
        setError(password1, 'Password must be more than 8 characters');
        throw Error('Something went wrong')
    }else{
        setSuccess(password1);
        if(p1 !== p2){
            setError(password2, 'Password does not match the first password');
            throw Error('Something went wrong')
        }else{
            
            setSuccess(password2); 
        }     
    }
    
}

function userNameValid(input){
    if (input.length < 8){
        setError(userName, 'Enter your surname and name');
        throw Error('Something went wrong')
    }else{
        setSuccess(userName);
        setSuccess(email)
    }
}

// User Login

// const loginForm = document.getElementById('login-form');
// loginForm.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     const userEmail = document.querySelector('#login-email');
//     const userPassword = document.querySelector('#login-password');
//     console.log(userEmail.value);
//     console.log(userPassword.value);
// })
    
