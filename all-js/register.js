document.getElementById('registerSubmit').addEventListener('click',registerInfo);

function registerInfo(){
    let newEmail = document.getElementById('registerEmail').value;
    let newPassword = document.getElementById('registerPassword').value;

    if (newEmail != "" && newPassword != ""){
        let newInfo = {"email":newEmail, "password":newPassword};
        localStorage.setItem('userLogin',JSON.stringify(newInfo));

        let details = JSON.parse(localStorage.getItem('userdetails'));
        
        details.firstName = "Please fill in details";
        details.lastName = "Please fill in details";
        details.email = newEmail;
        details.gamertag = "Please fill in details";
        details.platform = 0;

        localStorage.setItem('userdetails', JSON.stringify(details));
        window.location.href="userDetails.html";
    }
    else {
        alert('Please enter both fully');
    }
    event.preventDefault();
}

