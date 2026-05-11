function addToCart(name, price) {
   
    let cart = JSON.parse(localStorage.getItem('birdieCart')) || [];
    
    
    cart.push({ name: name, price: price });
    

    localStorage.setItem('birdieCart', JSON.stringify(cart));
    
    alert(name + " has been added to your cart!");
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('birdieCart')) || [];
    let cartTable = document.getElementById('cart-items');
    let totalElement = document.getElementById('total-price');
    let total = 0;

    if (!cartTable) return; 

    cartTable.innerHTML = ""; 

    if (cart.length === 0) {
        cartTable.innerHTML = "<tr><td colspan='2'>Your cart is currently empty.</td></tr>";
    } else {
        cart.forEach((item) => {
            total += item.price;
            let row = `<tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
            </tr>`;
            cartTable.innerHTML += row;
        });
    }

    totalElement.innerText = total.toFixed(2);
}

function clearCart() {
    localStorage.removeItem('birdieCart');
    displayCart();
}

if (document.getElementById('cart-items')) {
    displayCart();
}
// Add this to the bottom of your existing script.js
function validateCheckout(event) {
    event.preventDefault(); // Prevents the form from refreshing the page
    
    const name = document.getElementById('fname').value;
    const email = document.getElementById('email').value;

    // Simple validation logic
    if (name.length < 3) {
        alert("Please enter a valid full name.");
        return false;
    }

    // "Processing" the data
    alert("Order submitted! Thank you " + name + ". A confirmation was sent to " + email);
    
    // Optional: Clears the cart display after the "order" is placed
    if (typeof clearCart === "function") {
        clearCart();
    }
    
    return true;
}
