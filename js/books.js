document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { 
            title: "Blue Ocean", 
            author: "John Doe", 
            price: "$28.99", 
            old_price: "$38.99", 
            image: "books/images/image.png", 
            id: 1, 
            category: "Fiction",
            description: "A captivating exploration of uncharted waters and the mysteries that lie beneath. This book takes readers on a journey through the depths of the ocean and human courage.",
            isbn: "978-1234567890",
            publisher: "Ocean Press",
            published_date: "June 15, 2023",
            pages: 320,
            language: "English"
        },
        { 
            title: "Red Heart", 
            author: "Aumkerr Helllk", 
            price: "$10.99", 
            old_price: "$30.00", 
            image: "books/images/image_copy_1.png", 
            id: 2, 
            category: "Non-Fiction",
            description: "A heartfelt memoir about love, loss, and finding oneself in the midst of chaos. The author shares personal stories that resonate with universal emotions.",
            isbn: "978-0987654321",
            publisher: "Heart Publications",
            published_date: "February 14, 2024",
            pages: 256,
            language: "English"
        },
        { 
            title: "Serenity", 
            author: "Yarr Deren", 
            price: "$12.99", 
            old_price: "$32.99", 
            image: "books/images/image_copy_2.png", 
            id: 3, 
            category: "Non-Fiction",
            description: "A guide to finding inner peace in a chaotic world. Learn meditation techniques and mindfulness practices that can transform your daily life.",
            isbn: "978-1122334455",
            publisher: "Mindful Books",
            published_date: "March 21, 2023",
            pages: 210,
            language: "English"
        },
        { 
            title: "Charmers", 
            author: "Hadly Chase", 
            price: "$24.99", 
            old_price: "$49.99", 
            image: "books/images/image_copy_3.png", 
            id: 4, 
            category: "Non-Fiction",
            description: "Uncover the science and psychology behind charisma and what makes certain individuals naturally captivating. Learn to develop your own charm.",
            isbn: "978-2233445566",
            publisher: "Psychology Today",
            published_date: "October 5, 2023",
            pages: 288,
            language: "English"
        },
        { 
            title: "Dr. House", 
            author: "John Kerr", 
            price: "$15.99", 
            old_price: "$42.99", 
            image: "books/images/image_copy_4.png", 
            id: 5, 
            category: "Non-Fiction",
            description: "A fascinating look at modern medicine through the lens of complicated medical cases and the brilliant minds that solve them.",
            isbn: "978-3344556677",
            publisher: "Medical Press",
            published_date: "May 12, 2024",
            pages: 342,
            language: "English"
        },
        { 
            title: "Fully Charged", 
            author: "Authur Seth", 
            price: "$30.99", 
            old_price: "$41.00", 
            image: "books/images/image_copy_5.png", 
            id: 6, 
            category: "Non-Fiction",
            description: "Discover how to maximize your energy and productivity through science-backed methods for physical and mental wellness.",
            isbn: "978-4455667788",
            publisher: "Productivity House",
            published_date: "January 3, 2024",
            pages: 264,
            language: "English"
        },
        { 
            title: "Half Sparrow", 
            author: "Declan Rice", 
            price: "$12.99", 
            old_price: "$32.99", 
            image: "books/images/image_copy_6.png", 
            id: 7, 
            category: "Fiction",
            description: "A lyrical novel about identity and belonging, following a protagonist caught between two worlds and searching for home.",
            isbn: "978-5566778899",
            publisher: "Literary Wings",
            published_date: "August 28, 2023",
            pages: 312,
            language: "English"
        },
        { 
            title: "Hold The Door", 
            author: "John Kerr", 
            price: "$64.99", 
            old_price: "$79.99", 
            image: "books/images/image_copy_7.png", 
            id: 8, 
            category: "Fiction",
            description: "A thrilling epic about sacrifice, courage and destiny, set in a world where small actions can have world-changing consequences.",
            isbn: "978-6677889900",
            publisher: "Fantasy Realm Books",
            published_date: "April 17, 2023",
            pages: 540,
            language: "English"
        },
        { 
            title: "Grey Eagle", 
            author: "Arthur Fils", 
            price: "$24.99", 
            old_price: "$42.00", 
            image: "books/images/image_copy_8.png", 
            id: 9, 
            category: "Non-Fiction",
            description: "A biographical account of one of the most distinguished military commanders of our time, exploring leadership during challenging times.",
            isbn: "978-7788990011",
            publisher: "History Press",
            published_date: "November 11, 2023",
            pages: 398,
            language: "English"
        },
        { 
            title: "Train Farm", 
            author: "Sarah Conor", 
            price: "$31.99", 
            old_price: "$59.00", 
            image: "books/images/image_copy_9.png", 
            id: 10, 
            category: "Non-Fiction",
            description: "A comprehensive guide to sustainable farming practices and the future of agriculture in a changing climate.",
            isbn: "978-8899001122",
            publisher: "Earth Publishers",
            published_date: "July 22, 2023",
            pages: 278,
            language: "English"
        },
        { 
            title: "Texas Living", 
            author: "John Kerr", 
            price: "$12.99", 
            old_price: "$32.99", 
            image: "books/images/image_copy_10.png", 
            id: 11, 
            category: "Fiction",
            description: "A collection of interconnected stories about life, love, and community in small-town Texas, spanning generations of families.",
            isbn: "978-9900112233",
            publisher: "Southern Stories",
            published_date: "September 5, 2023",
            pages: 298,
            language: "English"
        }
    ];

    // Get a unique list of authors
    const authors = [...new Set(books.map(book => book.author))];

    // Find the author dropdown menu in the DOM
    const authorDropdown = document.getElementById('author-dropdown');

    // Generate the "All Authors" option
    const allAuthorsLi = document.createElement('li');
    const allAuthorsA = document.createElement('a');
    allAuthorsA.href = "#";
    allAuthorsA.textContent = "All Authors";
    allAuthorsLi.appendChild(allAuthorsA);
    authorDropdown.insertBefore(allAuthorsLi, authorDropdown.firstChild);

    // Generate the list items for the dropdown menu
    authors.forEach(function(author) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = "#";
        a.title = author;
        a.textContent = author;
        li.appendChild(a);
        authorDropdown.appendChild(li);
    });

    // Find the products container
    const productsContainer = document.getElementById('products-container');
    
    // Setup modal elements
    const bookModal = document.getElementById('book-modal');
    const closeModal = document.getElementById('close-modal');
    const modalBookImage = document.getElementById('modal-book-image');
    const modalBookTitle = document.getElementById('modal-book-title');
    const modalBookAuthor = document.getElementById('modal-book-author');
    const modalBookOldPrice = document.getElementById('modal-book-old-price');
    const modalBookPrice = document.getElementById('modal-book-price');
    const modalBookDescription = document.getElementById('modal-book-description');
    const modalBookISBN = document.getElementById('modal-book-isbn');
    const modalBookPublisher = document.getElementById('modal-book-publisher');
    const modalBookPublishedDate = document.getElementById('modal-book-published-date');
    const modalBookPages = document.getElementById('modal-book-pages');
    const modalBookLanguage = document.getElementById('modal-book-language');
    const modalAddToCartBtn = document.getElementById('modal-add-to-cart');

    // Close modal when clicking the X
    closeModal.addEventListener('click', function() {
        bookModal.classList.add('hidden');
    });

    // Close modal when clicking outside the modal
    window.addEventListener('click', function(event) {
        if (event.target == bookModal) {
            bookModal.classList.add('hidden');
        }
    });

    // Function to show notification
    function showNotification() {
        const notification = document.getElementById('cart-notification');
        notification.classList.remove('hidden');
        notification.classList.add('show');
        
        // Hide notification after 2 seconds
        setTimeout(function() {
            notification.classList.remove('show');
            notification.classList.add('hidden');
        }, 2000);
    }

    // Function to show book details in modal
    function showBookDetails(book) {
        modalBookImage.src = book.image;
        modalBookImage.alt = book.title;
        modalBookTitle.textContent = book.title;
        modalBookAuthor.textContent = `by ${book.author}`;
        modalBookOldPrice.textContent = book.old_price;
        modalBookPrice.textContent = book.price;
        modalBookDescription.textContent = book.description;
        modalBookISBN.textContent = book.isbn;
        modalBookPublisher.textContent = book.publisher;
        modalBookPublishedDate.textContent = book.published_date;
        modalBookPages.textContent = `${book.pages} pages`;
        modalBookLanguage.textContent = book.language;
        
        // Set up add to cart button with the book's ID
        modalAddToCartBtn.setAttribute('data-book-id', book.id);
        
        // Add click event to the add to cart button - properly connected to cart functionality
        modalAddToCartBtn.onclick = function(event) {
            event.stopPropagation(); // Stop the click from bubbling up
            
            // Show the "Added to Cart" notification
            const notification = document.getElementById('cart-notification');
            notification.classList.add('show');
            notification.classList.remove('hidden');

            // Hide the notification after 3 seconds
            setTimeout(function () {
                notification.classList.remove('show');
                notification.classList.add('hidden');
            }, 3000);
            
            // Access the cart functionality
            const bookTitle = book.title;
            const bookPrice = book.price;
            const bookImageSrc = book.image;
            
            const cartSlider = document.getElementById('cart-slider');
            const cartContent = cartSlider.querySelector('.slider-content');
            
            // Reference the cart object from script.js
            const cart = window.cart || {};
            
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
            
            // Close modal after adding to cart
            bookModal.classList.add('hidden');
            
            // Open the cart slider to show the updated cart
            openSlider('cart-slider');
        };
        
        bookModal.classList.remove('hidden');
    }

    // Function to create product card
    function createProductCard(book) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.setAttribute('data-author', book.author);
        productDiv.setAttribute('category', book.category);
        productDiv.setAttribute('data-id', book.id);

        const productTileDiv = document.createElement('div');
        productTileDiv.className = 'product-tile';

        const imageContainerDiv = document.createElement('div');
        imageContainerDiv.className = 'image-container';

        const imageContainerInnerDiv = document.createElement('div');
        imageContainerInnerDiv.className = 'image-container-inner';

        const img = document.createElement('img');
        img.className = 'tile-image';
        img.src = book.image;
        img.alt = book.title;
        img.title = book.title;
        
        // Add click event to show book details
        img.addEventListener('click', function() {
            showBookDetails(book);
        });

        const tileBodyDiv = document.createElement('div');
        tileBodyDiv.className = 'tile-body';

        const h3 = document.createElement('h3');
        h3.textContent = book.title;
        
        // Add click event to title to show book details
        h3.addEventListener('click', function() {
            showBookDetails(book);
        });
        h3.style.cursor = 'pointer';

        const authorSpan = document.createElement('span');
        authorSpan.textContent = book.author;

        const priceDiv = document.createElement('div');
        priceDiv.className = 'price';

        const oldPriceSpan = document.createElement('span');
        oldPriceSpan.className = 'old-price';
        oldPriceSpan.textContent = book.old_price;

        const priceValueSpan = document.createElement('span');
        priceValueSpan.className = 'value';
        priceValueSpan.textContent = book.price;

        const button = document.createElement('button');
        button.className = 'add-to-cart-btn';
        button.textContent = 'Add to Cart';
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Stop the click from bubbling up
            showNotification();
            // Here you would add logic to actually add the book to the cart
        });

        // Append elements to build the product card structure
        imageContainerInnerDiv.appendChild(img);
        imageContainerDiv.appendChild(imageContainerInnerDiv);
        productTileDiv.appendChild(imageContainerDiv);

        tileBodyDiv.appendChild(h3);
        tileBodyDiv.appendChild(authorSpan);
        priceDiv.appendChild(oldPriceSpan);
        priceDiv.appendChild(priceValueSpan);
        tileBodyDiv.appendChild(priceDiv);
        tileBodyDiv.appendChild(button);

        productTileDiv.appendChild(tileBodyDiv);
        productDiv.appendChild(productTileDiv);

        return productDiv;
    }

    // Generate and insert all product cards
    books.forEach(function(book) {
        const productCard = createProductCard(book);
        productsContainer.appendChild(productCard);
    });
});