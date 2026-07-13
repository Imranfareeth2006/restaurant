// Load cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

// Calculate total
for(let i = 0; i < cart.length; i++){
    total += cart[i].cost;
}

// Add item
function addtocart(item, price){

    cart.push({
        name: item,
        cost: price
    });

    total += price;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

// Display cart
function displayCart(){

    let cartItems = document.getElementById("cartItems");

    let totalBill = document.getElementById("totalBill");

    if(cartItems == null || totalBill == null){
        return;
    }

    cartItems.innerHTML = "";

    for(let i = 0; i < cart.length; i++){

        cartItems.innerHTML +=
        "<li>" +
        cart[i].name +
        " - ₹" +
        cart[i].cost +
        "</li>";

    }

    totalBill.innerHTML = "Total Bill : ₹" + total;

}

// Checkout
function checkout(){

    if(cart.length == 0){

        alert("Your cart is empty.");

    }
    else{

        alert("Order Placed Successfully!");

        cart = [];

        total = 0;

        localStorage.removeItem("cart");

        displayCart();

    }

}

// Automatically display cart when page opens
window.onload = function(){

    displayCart();

}
function Ordernow(){
    
}