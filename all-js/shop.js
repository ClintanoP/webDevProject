
window.onload = () => {if (sessionStorage.getItem('products') === null){
    addProductToProductList();
    listAllProducts();
    location.reload();
    }if ((window.location.href).includes('index.html')){
        
        let stuff = JSON.parse(sessionStorage.getItem('products'));
        for (let i = 0; i < 4; i++){
            document.getElementById('image'+i).setAttribute('src',stuff[i].image);
            document.getElementById('cardText'+i).innerHTML = stuff[i].desc;
        }
    }else {
        listAllProducts();
    }
}


function addProductToProductList(){
    sessionStorage.clear();
    let products = [
        {"name":"Alpha Boost",
        "price":"100",
        "desc":"Legendary boost with rich history, only reserved for players who participated in the alpha.",
        "image":"https://cdn.shopify.com/s/files/1/0523/6054/4437/products/AlphaBoost4_1024x1024@2x.png?v=1622337865",
        "inCart":false,
        "amountAdded":0
    },{"name":"Titanium White Octane",
        "price":"50",
        "desc":"Coveted and stylish, this is a classic which never seems to lose its value, often the most expensive purchase of an average committed players career.",
        "image":"https://pbs.twimg.com/media/EnW3gGvXEAMD4xv.png",
        "inCart":false,
        "amountAdded":0
    },{
        "name":"Beta Nugget",
        "price":"45",
        "desc":"Although antennas aren't used often by players, this is one to display. Awarded to those who participated in the beta, it's the perfect mix between luxury and economy, and is the least rare of the early access reward.",
        "image":"https://cdn.shopify.com/s/files/1/0523/6054/4437/products/BetaNug3_1024x1024@2x.png?v=1624227541",
        "inCart":false,
        "amountAdded":0
    },{
        "name":"Titanium White Dominus",
        "price":"23",
        "desc":"Along with the white octane and fennec, this car is among the most popular for stylish and sleek designs, while still maintaining that status.",
        "image":"https://i.gyazo.com/104665a661153e8a0fe704c161495970.jpg",
        "inCart":false,
        "amountAdded":0
    },{
        "name":"White Hat",
        "price":"3300",
        "desc":"An item with an unkown amount in existence, but the accounted for amount is 33. Given to players who find game breaking bugs this item is almost priceless, and they often stay within their own communities.",
        "image":"https://i.gyazo.com/4b0bdd3e1dae05ac427e45a590f6fe01.png",
        "inCart":false,
        "amountAdded":0
    },{
        "name":"Alpha Cap",
        "price":"360",
        "desc":"The third item of the alpha reward set, it's often the most overlooked item, as as such loses its value. ",
        "image":"https://i.gyazo.com/8ed94877b1439ed4635bbe6a68ace879.png",
        "inCart":false,
        "amountAdded":0
    },{ 
        "name":"Titanium White Fennec",
        "price":"5",
        "desc":"The third car with a titanium white body, it's usually found alongside white octanes and dominus', the least expensive of the bunch due to the abudence of them in the market.",
        "image":"https://i.gyazo.com/2dca0bf3c69050a5c43786a32858b9db.jpg",
        "inCart":false,
        "amountAdded":0
    },{
        "name":"Goldstones",
        "price":"200",
        "desc":"Along with the Alpha Boost, goldstones are among the pros and highly invested only. A limited number of them makes them extremely saught after",
        "image":"https://i.gyazo.com/600741114e09073025689b739c689272.png",
        "inCart":false,
        "amountAdded":0
    }]
    sessionStorage.setItem('products', JSON.stringify(products));
}





function addToCart(i) {
    //cart counter
    var total=sessionStorage.getItem('cartCounter');
    total++;
    sessionStorage.setItem('cartCounter',total);
    document.querySelector('#cartCounter').innerHTML=total;

    //adding to localStorage - 
    allProducts = JSON.parse(sessionStorage.getItem('products'));

    if (allProducts[i].inCart == false){
        allProducts[i]['inCart'] = true;
        allProducts[i]['amountAdded']++;

        sessionStorage.setItem('products', JSON.stringify(allProducts));
    }
    else{
        allProducts[i]['amountAdded']++;

        sessionStorage.setItem('products', JSON.stringify(allProducts));
    }
}

function listAllProducts(){
    
    allProducts = JSON.parse(sessionStorage.getItem('products'));
    let mainContainer = document.getElementById('productsContainer');
    for(let i = 0; i < allProducts.length; i++){

        let col = document.createElement('div');
        col.setAttribute('class','col');

        let card = document.createElement('div');
        card.setAttribute('class', 'card h-100');

        let productImg = document.createElement('img');
        productImg.setAttribute('class', 'card-img-top');
        productImg.setAttribute('src', allProducts[i].image);

        let cardBody = document.createElement('div');
        cardBody.setAttribute('class','card-body');

        let productName = document.createElement('h5');
        productName.setAttribute('class', 'card-title p-3');
        productName.innerHTML = allProducts[i].name + "       €" + allProducts[i].price;

        let productDesc = document.createElement('p');
        productDesc.setAttribute('class', 'card-text p-3');
        productDesc.innerHTML = allProducts[i].desc;
        
        let cardFooter = document.createElement('div');
        cardFooter.setAttribute('class','card-footer');


        let btn = document.createElement('a');
        btn.setAttribute('class','btn btn-primary w-100');
        btn.innerHTML = 'Add To Cart';

        btn.addEventListener('click', () => {addToCart(i)});

        card.appendChild(productImg);
        cardBody.appendChild(productName);
        cardBody.appendChild(productDesc);
        card.appendChild(cardBody);
        cardFooter.appendChild(btn);
        card.appendChild(cardFooter);
        col.appendChild(card);
        mainContainer.appendChild(col);
    }
}

