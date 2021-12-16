if (localStorage.getItem('userdetails') == null) {  
    var userDetails = {firstName:"Alexa", lastName:"Bezos", email:"aBezos@amazon.com" ,gamertag:"TheRealAlexa", platform:1};
    localStorage.setItem('userdetails',JSON.stringify(userDetails));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("gamertag").setAttribute('value',userDetails.gamertag);
    document.getElementById("email").setAttribute('value',userDetails.email);
    let mySelect = document.getElementById("platform");
    mySelect.selectedIndex = userDetails.platform;
} else {
    userDetails=JSON.parse(localStorage.getItem('userdetails'));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("gamertag").setAttribute('value',userDetails.gamertag);
    document.getElementById("email").setAttribute('value',userDetails.email);
    let mySelect = document.getElementById("platform");
    mySelect.selectedIndex = userDetails.platform;
}

document.getElementById('submitUpdatedDetails').addEventListener('click', updateUserDetails);

function updateUserDetails(){
    let details = JSON.parse(localStorage.getItem('userdetails'));
    
    details.firstName = document.getElementById("firstNameID").value;
    details.lastName = document.getElementById("lastNameID").value;
    details.emailName = document.getElementById("email").value;
    details.gamertag = document.getElementById("gamertag").value;
    details.platform = document.getElementById('platform').selectedIndex;

    localStorage.setItem('userdetails', JSON.stringify(details));
    event.preventDefault();
}

document.getElementById('clearLocalStorage').addEventListener('click', () =>{
    localStorage.clear();
    window.location.href='userDetails.html';
})