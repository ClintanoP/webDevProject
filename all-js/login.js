if (sessionStorage.getItem('userLogin') == null){
    location.reload();
    //set the login to default
    let userLoginInfo = {"email":"laxydaisy@gmail.com", "password":"pogfrog11"};
    sessionStorage.setItem('userLogin', JSON.stringify(userLoginInfo));

    document.getElementById('attemptedEmail').setAttribute('value',userInfo.email);
    document.getElementById('attemptedPassword').setAttribute('value',userInfo.password);
}
else{
    let userInfo = JSON.parse(sessionStorage.getItem('userLogin'));
    document.getElementById('attemptedEmail').setAttribute('value',userInfo.email);
    document.getElementById('attemptedPassword').setAttribute('value',userInfo.password);
}


//submit/login

document.getElementById('loginSubmit').addEventListener('click',checkLoginInfo);

function checkLoginInfo(){
    let userInfo = JSON.parse(sessionStorage.getItem('userLogin'));
    let triedEmail = document.getElementById('attemptedEmail').value;
    let triedPassword = document.getElementById('attemptedPassword').value;

    if (triedEmail == userInfo.email && triedPassword == userInfo.password){
        sessionStorage.setItem('loggedIn',1);
        window.location.href='storeItems.html';
    }
    else{
        alert('Incorrect email/password, please try again!');
    }
    event.preventDefault();
}

