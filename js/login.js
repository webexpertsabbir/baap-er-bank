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
    if(email === 'baaper@bank.com' && password === 'bank'){
        window.location.href = 'bank.html'
    }
    else(
        alert('Invalid User, plz input valid user')
    )
})