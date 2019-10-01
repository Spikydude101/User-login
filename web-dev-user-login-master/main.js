' use strict' ;
// TITLE

// Event listeners
document.getElementById('pass-worthy').addEventListener('click' , signIn);


function signIn() {

    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    // check what is wrong with us/pw or if they are both correct
    if (user == 'corviknight' && password == 'rolycoly' ) {
        alert('sign-in successful');

    }else if (user !== 'corviknight' && password !== 'rolycoly') {
        alert('sign-in unsuccessful,both were wrong');

    }else if (user == 'corviknight' && password !== 'rolycoly') {
        alert('sign-in unsuccessful,password is incorrect');

    }else if (user!== 'corviknight' && password == 'rolycoly') {
        alert('sign-in unsuccessful,username is incorrect');
    }





}