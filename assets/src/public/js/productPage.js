


// // Colors
// const colorContainer = document.getElementById('color-options');
// colorContainer.innerHTML = '';
// colorContainer.forEach((color) => {
//     const btn = document.createElement('button');
//     btn.addEventListener('click', () => {
//         selectedColor = color;
//         document
//             .querySelectorAll('.color-btn')
//             .forEach((b) => b.classList.remove('active'));
//         btn.classList.add('active');
//     });

//     colorContainer.appendChild(btn);


// });
// colorContainer.querySelector('button').classList.add('active');

// Accordion
const accordion = document.getElementById('accordion');


document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display =
            content.style.display === 'block' ? 'none' : 'block';
    });
});


// // Sizes
// const sizeContainer = document.getElementById('size-options');
// if (sizeContainer && product.sizes) {
//     sizeContainer.innerHTML = '';
//     product.sizes.forEach((size) => {
//         const sbtn = document.createElement('button');
//         sbtn.textContent = size;
//         sbtn.className = 'size-btn';
//         sbtn.dataset.size = size;

//         sbtn.addEventListener('click', () => {
//             selectedSize = size;
//             document
//                 .querySelectorAll('.size-btn')
//                 .forEach((b) => b.classList.remove('active'));
//             sbtn.classList.add('active');
//         });

//         sizeContainer.appendChild(sbtn);
//     });
//     sizeContainer.querySelector('button').classList.add('active');
// }
// // Quantity
// const qtyInput = document.getElementById('quantity');
// const decreaseBtn = document.getElementById('decrease-qty');
// const increaseBtn = document.getElementById('increase-qty');

// qtyInput.value = selectedQuantity;

// decreaseBtn.addEventListener('click', () => {
//     if (selectedQuantity > 1) {
//         selectedQuantity--;
//         qtyInput.value = selectedQuantity;
//         saveSelections();
//     }
// });

// increaseBtn.addEventListener('click', () => {
//     selectedQuantity++;
//     qtyInput.value = selectedQuantity;
//     saveSelections();
// });
// // Add to cart
// const addBtn = document.getElementById('add-to-cart');
// addBtn.addEventListener('click', () => {
//     const productToCart = {
//         ...product,
//         selectedColor,
//         selectedSize,
//         quantity: selectedQuantity,
//     };

//     addToCart(productToCart);

//     alert(`${product.name} added to cart!`);
// });
// // Save current selections (for persistence)
// function saveSelections() {
//     localStorage.setItem(
//         'productSelections',
//         JSON.stringify({
//             productId: product.id,
//             color: selectedColor,
//             size: selectedSize,
//             quantity: selectedQuantity,
//         }),
//     );
// }
