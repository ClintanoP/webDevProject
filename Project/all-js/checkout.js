window.onload = cartItems();
window.onload = loggedInStatus();

document.getElementById('checkoutConfirm').addEventListener("click", checkoutValidator);

function cartItems(){
    let mainContainer = document.getElementById('cartList');

    let runningTotal = 0;

    allProducts = JSON.parse(sessionStorage.getItem('products'));

    let checkoutCounter = document.getElementById('innerCartCounter');
    checkoutCounter.innerHTML = sessionStorage.getItem('cartCounter');

    for(let i = 0; i < allProducts.length; i++){
        if (allProducts[i].inCart == true){
            runningTotal = ((parseInt(allProducts[i].price, 10)) * (parseInt(allProducts[i].amountAdded, 10))) + parseInt(runningTotal, 10);
            let productList = document.createElement('li');
            productList.setAttribute('class','list-group-item d-flex justify-content-between lh-condensed');
            
            let productName = document.createElement('h6');
            productName.setAttribute('class','my-0');
            productName.innerHTML = allProducts[i].name + '  x ' + allProducts[i].amountAdded;


            let productPrice = document.createElement('span');
            productPrice.setAttribute('class','text-muted');
            productPrice.innerHTML = "€" + (parseInt(allProducts[i].price, 10)) * (parseInt(allProducts[i].amountAdded, 10));

            productList.appendChild(productName);
            productList.appendChild(productPrice);
            mainContainer.appendChild(productList);
        }
    }

    let priceTotal = document.createElement('li');
    priceTotal.setAttribute('class','list-group-item d-flex justify-content-between');

    let priceTitle = document.createElement('span');
    priceTitle.innerHTML = "Total (EUR)";

    let totalAmnt = document.createElement('strong');
    totalAmnt.innerHTML = "€" + runningTotal;

    let btn = document.createElement('a');
    btn.setAttribute('class','btn btn-primary');
    btn.setAttribute('href','checkout.html');
    btn.innerHTML = 'Clear Cart';
    btn.addEventListener('click', () => {clearCart()});


    priceTotal.appendChild(priceTitle);
    priceTotal.appendChild(totalAmnt);
    mainContainer.appendChild(priceTotal);
    mainContainer.appendChild(btn);
}

function clearCart(){
    allProducts = JSON.parse(sessionStorage.getItem('products'));
    for (let i =0; i < allProducts.length; i++){
        if (allProducts[i].amountAdded > 0){
            allProducts[i].amountAdded = 0;
            allProducts[i].inCart = false;
        }
    }
    sessionStorage.setItem('products', JSON.stringify(allProducts));

    sessionStorage.setItem('cartCounter',0);
    document.querySelector('#cartCounter').innerHTML=total;
    let checkoutCounter = document.getElementById('innerCartCounter');
    checkoutCounter.innerHTML = sessionStorage.getItem('cartCounter');
}

function loggedInStatus(){
    let status = sessionStorage.getItem('loggedIn');
    if (status == 1){
        userDetails=JSON.parse(sessionStorage.getItem('userdetails'));
        document.getElementById("firstName").setAttribute('value',userDetails.firstName);
        document.getElementById("lastName").setAttribute('value',userDetails.lastName);
        document.getElementById("gamertag").setAttribute('value',userDetails.gamertag);
        document.getElementById("email").setAttribute('value',userDetails.email);
        let mySelect = document.getElementById("platform");
        mySelect.selectedIndex = userDetails.platform;
    }
    if (status == null){
        if (sessionStorage.getItem('guestCheckout') == 1){
        }
        else{
            window.location.href="guestCheckout.html";
        }
        
        event.preventDefault();
    }
}

function checkoutValidator(){
    //put more stuff like cc in here later

    //simple for now
    clearCart();
    window.location.href="success.html";
    event.preventDefault();
}



