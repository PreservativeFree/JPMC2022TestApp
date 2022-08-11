const cookieArr = document.cookie.split("=")
const userId = cookieArr[1];

const groceryContainer = document.getElementById("grocery-container")
const cartContainer = document.getElementById("special-cart-container")
//const addToCartAnchor = document.querySelector(".add-cart cart1")

const headers = {
    'Content-Type': 'application/json'
}

const baseUrl = 'http://localhost:8080/produce/'

function handleLogout() {
    let c = document.cookie.split(";")
    for(let i in c) {
        document.cookie = /^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
}	

async function getProduce() {
    await fetch(`${baseUrl}all`, {
        method:"GET",
        headers: headers
    }).then(response => response.json())
      .then(data => createGroceryCards(data))
      .catch(err => console.error(err))
}

async function getProduceForCart() {
    await fetch(`${baseUrl}all`, { //This fetch doesn't work
        method:"GET",
        headers: headers
    }).then(response => response.json())
        .then(data => createCartCards(data))
        .catch(err => console.error(err)) //send an array of data
}

addToCartAlert = () => {
     alert("Product added to Cart!")
     document.getElementById("special-cart-container").value = ''
     getProduceForCart().then(value => console.log("Handler 2"));
}
/*This code populates information pictures, price, add to card button to landing page*/
const createGroceryCards = (array) => {
    groceryContainer.innerHTML = ''
    array.forEach(obj => {
        let groceryCard = document.createElement("div")
        groceryCard.classList.add("image")
            groceryCard.innerHTML = `
            	<img src="${obj.imageUrl}">
            	<h3><b>${obj.name}</b></h3>
            	<h3><b>${obj.description}</b></h3>
            	<h3><b>$${obj.price}</b></h3>
            	<a onclick="addToCartAlert()" class="add-cart cart" href="#">Add to Cart</a>
        	</div>
        	<br>
        	<br>
            `

        groceryContainer.append(groceryCard)
	})
    let firstItem = document.getElementsByClassName("add-cart").item(0)
    firstItem.className = 'add-cart cart1'
    let secondItem = document.getElementsByClassName("add-cart").item(1)
    secondItem.className = 'add-cart cart2'
    let thirdItem = document.getElementsByClassName("add-cart").item(2)
    thirdItem.className = 'add-cart cart3'
    let fourthItem = document.getElementsByClassName("add-cart").item(3)
    fourthItem.className = 'add-cart cart4'
    let fifthItem = document.getElementsByClassName("add-cart").item(4)
    fifthItem.className = 'add-cart cart5'

}



/*To Team I was not able to get this to function */
const createCartCards = (array) => {
    cartContainer.innerHTML = ''
        let cartCard = document.createElement("div")
        cartCard.classList.add("image")
        cartCard.innerHTML = `
           <div class = "product">
                <ion-icon name="close-circle"></ion-icon>
                <img src ="ovengold.jpg"> 
                <span>Ovengold Turkey</span>
           </div>

            <div class="price">$11.99</div>
        
            <div class="quantity>
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>2</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            
            <div class="total">
                $35.97
            </div>
            `
            cartContainer.append(cartCard)
        cartContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class ="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal"/>$35.97</h4>
            </div>
        `
}

getProduce().then(value => console.log("Handler 1"))

//	<a onclick="addToCartAlert()" onclick="onLoadCartNumbers()" onclick="displayCart()" class="add-cart cart1" href="#">Add to Cart</a>