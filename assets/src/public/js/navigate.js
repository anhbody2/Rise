import { addToCart } from './cart.js';
// Mock DB

// Get product id
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id') || 1;
const product = products[productId];
// ----- State (always updated when user chooses) -----
let selectedColor = null;
let selectedSize = null;
let selectedQuantity = 1;
if (product) {
    // Basic Info
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-stock').textContent = product.stock;
    document.getElementById('product-story').textContent = product.story;

    // Colors
    const colorContainer = document.getElementById('color-options');
    colorContainer.innerHTML = '';
    product.colors.forEach((color) => {
        const btn = document.createElement('button');
        btn.className = `color-btn ${color}`;
        btn.dataset.color = color;

        btn.addEventListener('click', () => {
            selectedColor = color;
            document
                .querySelectorAll('.color-btn')
                .forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
        });

        colorContainer.appendChild(btn);
    });
    colorContainer.querySelector('button').classList.add('active');

    // Accordion
    const accordion = document.getElementById('accordion');
    accordion.innerHTML = '';
    Object.entries(product.details).forEach(([title, content]) => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
      <button class="accordion-header">${title}</button>
      <div class="accordion-content"><p>${content}</p></div>
    `;
        accordion.appendChild(item);
    });

    document.querySelectorAll('.accordion-header').forEach((header) => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display =
                content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Carousel
    const track = document.getElementById('carousel-track');
    track.innerHTML = '';
    product.images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        track.appendChild(img);
    });

    let index = 0;
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    updateCarousel();
    // Sizes
    const sizeContainer = document.getElementById('size-options');
    if (sizeContainer && product.sizes) {
        sizeContainer.innerHTML = '';
        product.sizes.forEach((size) => {
            const sbtn = document.createElement('button');
            sbtn.textContent = size;
            sbtn.className = 'size-btn';
            sbtn.dataset.size = size;

            sbtn.addEventListener('click', () => {
                selectedSize = size;
                document
                    .querySelectorAll('.size-btn')
                    .forEach((b) => b.classList.remove('active'));
                sbtn.classList.add('active');
            });

            sizeContainer.appendChild(sbtn);
        });
        sizeContainer.querySelector('button').classList.add('active');
    }
    // Quantity
    const qtyInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');

    qtyInput.value = selectedQuantity;

    decreaseBtn.addEventListener('click', () => {
        if (selectedQuantity > 1) {
            selectedQuantity--;
            qtyInput.value = selectedQuantity;
            saveSelections();
        }
    });

    increaseBtn.addEventListener('click', () => {
        selectedQuantity++;
        qtyInput.value = selectedQuantity;
        saveSelections();
    });
    // Add to cart
    const addBtn = document.getElementById('add-to-cart');
    addBtn.addEventListener('click', () => {
        const productToCart = {
            ...product,
            selectedColor,
            selectedSize,
            quantity: selectedQuantity,
        };

        addToCart(productToCart);

        alert(`${product.name} added to cart!`);
    });
} else {
    document.querySelector('.product-container').innerHTML =
        '<h2>Product not found</h2>';
}

// Save current selections (for persistence)
function saveSelections() {
    localStorage.setItem(
        'productSelections',
        JSON.stringify({
            productId: product.id,
            color: selectedColor,
            size: selectedSize,
            quantity: selectedQuantity,
        }),
    );
}
