// step 1
document.getElementById('btn-submit').addEventListener('click', function(){
    //step 2
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step 3
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    // console.log(password);
    // step 4
    if(email === 'wpdevsabbir@gmail.com' && password === 'wpdevsabbir'){
        console.log('valid user');
    }
    else(
        console.log('Invalid User')
    )
})