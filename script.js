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
