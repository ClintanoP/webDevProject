
if (sessionStorage.getItem('cartCounter') == null){
    sessionStorage.setItem('cartCounter',0);
}
var total = sessionStorage.getItem('cartCounter');
document.querySelector('#cartCounter').innerHTML=total;


var logout = document.getElementById('loginlogout');
// add a listener for add to cart if such a button id is pressed
logout.addEventListener("click", Logout);

function Logout() {
    // if user is logged in them log them out and redirect to home page
    var loggedin=sessionStorage.getItem('loggedIn'); 
    if (loggedin==1) {
        sessionStorage.setItem('loggedIn',0);
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
}

checkLoginStatus()

function checkLoginStatus() {
    
    var loggedin=sessionStorage.getItem('loggedIn'); 
    var element = document.getElementById("userdetails");
    if (loggedin==1) {
        // change the text from Login to Logout
        document.querySelector('#loginlogout').innerHTML="Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
    } else{
        // use add to hide the display of User Details
        element.classList.add("d-none");        
        element.classList.remove("d-show");
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
    } 

}
