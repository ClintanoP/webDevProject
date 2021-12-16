let userInfo = JSON.parse(localStorage.getItem('userLogin'));
document.getElementById('attemptedEmail').setAttribute('value',userInfo.email);

//submit/login

document.getElementById('passwordChangeSubmit').addEventListener('click',checkChangedInfo);

function checkChangedInfo(){
    let userInfo = JSON.parse(localStorage.getItem('userLogin'));
    let triedEmail = document.getElementById('attemptedEmail').value;
    let firstPassword = document.getElementById('firstPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (triedEmail == userInfo.email){
        if (firstPassword == confirmPassword && firstPassword != ""){
            let newDetails = {"email":"laxydaisy@gmail.com", "password":confirmPassword};
            localStorage.setItem('userLogin', JSON.stringify(newDetails));
            alert('Password changed successfully!');
            window.location.href="userDetails.html";
        }
        else{
            alert("Passwords do not match, please submit matching passwords to continue!");
        }
        
    }
    else {
       alert('Invalid email!');
    }
    event.preventDefault();
    
    
}

