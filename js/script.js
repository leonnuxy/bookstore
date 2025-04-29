const cart = {}; // Object to hold cart items

// Slider Functions
function openSlider(sliderId) {
    document.getElementById(sliderId).classList.add('active');
}

function closeSlider(sliderId) {
    document.getElementById(sliderId).classList.remove('active');
}

// Define removeCartItem outside of DOMContentLoaded
function removeCartItem(button) {
    const cartItem = button.closest('.cart-item');
    const bookTitle = cartItem.getAttribute('data-title');

    if (cart[bookTitle].quantity > 1) {
        cart[bookTitle].quantity -= 1;
        cartItem.querySelector('.item-quantity').textContent = `Qty: ${cart[bookTitle].quantity}`;
    } else {
        cartItem.remove();
        delete cart[bookTitle];
    }

    // Check if the cart is empty
    const cartContent = document.querySelector('#cart-slider .slider-content');
    if (Object.keys(cart).length === 0) { // If no items left in cart
        const emptyCartText = document.createElement('h2');
        emptyCartText.textContent = "Your Cart is Empty";
        cartContent.appendChild(emptyCartText);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {

            // Show the "Added to Cart" notification
            const notification = document.getElementById('cart-notification');
            notification.classList.add('show');
            notification.classList.remove('hidden');

            // Hide the notification after 3 seconds
            setTimeout(function () {
                notification.classList.remove('show');
                notification.classList.add('hidden');
            }, 3000);

            // Add the item to the cart slider
            const productTile = this.closest('.product-tile');
            const bookTitle = productTile.querySelector('h3').textContent;
            const bookPrice = productTile.querySelector('.value').textContent;
            const bookImageSrc = productTile.querySelector('.tile-image').src;

            const cartSlider = document.getElementById('cart-slider');
            const cartContent = cartSlider.querySelector('.slider-content');

            // If the book is already in the cart, increase its quantity
            if (cart[bookTitle]) {
                cart[bookTitle].quantity += 1;
                const existingItem = cartContent.querySelector(`[data-title="${bookTitle}"]`);
                existingItem.querySelector('.item-quantity').textContent = `Qty: ${cart[bookTitle].quantity}`;
            } else {
                // Add a new book to the cart
                cart[bookTitle] = {
                    title: bookTitle,
                    price: bookPrice,
                    imageSrc: bookImageSrc,
                    quantity: 1
                };

                let emptyCartText = cartContent.querySelector('h2');
                if (emptyCartText) {
                    emptyCartText.remove();
                }

                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.setAttribute('data-title', bookTitle);
                cartItem.innerHTML = `
            <img src="${bookImageSrc}" alt="${bookTitle}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-info">
                    <h4>${bookTitle}</h4>
                    <div class="item-quantity">Qty: 1</div>
                    <div class="item-price">${bookPrice}</div>
                </div>
                <button class="remove-item" onclick="removeCartItem(this)">Remove</button>
            </div>
        `;

                cartContent.appendChild(cartItem);
            }

            // Open the cart slider
            openSlider('cart-slider');
        });
    });

    // Home link functionality
    const homeLink = document.querySelector('.home-link');
    const mainMenu = document.querySelector('.main-menu'); // Get mainMenu here

    if (homeLink && mainMenu) { // Check if both elements exist
        const homeNavItem = homeLink.parentNode;

        homeLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            homeNavItem.style.display = 'none';
            mainMenu.classList.remove('open'); // Close menu on home click
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('open');
        });
    }
});