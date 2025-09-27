let selectedIndex = null;
// CART STORAGE
window.addEventListener('DOMContentLoaded', renderCart);

// Add product to cart
import { addToCart } from './cart.js';
addToCart;
// Render cart list
// function renderCart() {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const cartContainer = document.getElementById("product-cart-list");
//   const detailsContainer = document.getElementById("cartSummary");

//   cartContainer.innerHTML = cart.length ? "" : "<p>Your cart is empty.</p>";

// cart.forEach((item, index) => {
//     const div = document.createElement("div");
//     div.classList.add("product-card");

//     // restore highlight if user already clicked before
//     if (div.classList.contains("selected")) {
//       div.classList.add("selected");
//     }

//     div.innerHTML = `
//       <img src="${item.img}" alt="${item.name}">
//       <h3>${item.name}</h3>
//     `;

//     let clickTimer;

//     // 👆 Single click → toggle multi highlight
//     div.addEventListener("click", () => {
//       if (clickTimer) return;
//       clickTimer = setTimeout(() => {
//         div.classList.toggle("selected");
//         console.log("Highlight toggled:", item.name, div.classList.contains("selected"));
//         clickTimer = null;
//       },250);
//     });

//     // 👆👆 Double click → show details + set selectedIndex
//     div.addEventListener("dblclick", () => {
//       clearTimeout(clickTimer);
//       selectedIndex = index; // keep global index
//       div.classList.add("selected"); // ensure it's highlighted
//       console.log("Details opened for index:", selectedIndex, "→", item.name);
//       showProductDetails(item, index); // load detail panel
//     });

//     cartContainer.appendChild(div);
//   });
//   // auto-show currently selected if valid
//   // reset details every render
//   detailsContainer.innerHTML = "<p>Double-click a product to view details.</p>";
//   selectedIndex = null;
// }
// function renderCart() {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const cartContainer = document.getElementById("product-cart-list");
//   const detailsContainer = document.getElementById("cartSummary");

//   cartContainer.innerHTML = cart.length ? "" : "<p>Your cart is empty.</p>";

//   cart.forEach((item, index) => {
//     const div = document.createElement("div");
//     div.classList.add("product-card");
//     div.dataset.id = item.id;

//     div.innerHTML = `
//       <img src="${item.img}" alt="${item.name}">
//       <h3>${item.name}</h3>
//     `;

//     let clickTimer;

//     div.addEventListener("click", () => {
//       if (clickTimer) return; // avoid duplicate
//       clickTimer = setTimeout(() => {
//         // Single click → toggle highlight
//         div.classList.toggle("selected");
//         console.log("Single click → toggled:", item.name, div.classList.contains("selected"));
//         clickTimer = null;
//       }, 200); // wait to see if dblclick happens
//     });

//     // 👆👆 Double click → toggle highlight + open details
//     div.addEventListener("dblclick", () => {
//       if (clickTimer) {
//         clearTimeout(clickTimer); // cancel single action
//         clickTimer = null;
//       }

//       div.classList.toggle("selected");
//       console.log("Double click → toggled & details opened:", item.name);

//       if (div.classList.contains("selected")) {
//         selectedIndex = index;
//         showProductDetails(item, index);
//       } else {
//         // Deselected with double click → clear details
//         detailsContainer.innerHTML = "<p>Double-click a product to view details.</p>";
//         selectedIndex = null;
//         renderCart();
//       }
//     });

//     cartContainer.appendChild(div);
//   });

//   // reset details every render
//   detailsContainer.innerHTML = "<p>Double-click a product to view details.</p>";
//   selectedIndex = null;
// }
let selectedIds = []; // store multiple selected card ids

function renderCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('product-cart-list');
    const detailsContainer = document.getElementById('cartSummary');

    cartContainer.innerHTML = cart.length ? '' : '<p>Your cart is empty.</p>';

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('product-card');
        div.dataset.id = item.id;

        // restore highlight if in selectedIds
        if (selectedIds.includes(item.id)) {
            div.classList.add('selected');
        }

        div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
    `;

        // 🔹 Single click → toggle + details
        div.addEventListener('click', () => {
            if (selectedIds.includes(item.id)) {
                // remove from selection
                selectedIds = selectedIds.filter((id) => id !== item.id);
                console.log('Deselected:', item.name);

                // clear details if this card was being shown
                if (selectedIndex === index) {
                    selectedIndex = null;
                    detailsContainer.innerHTML =
                        '<p>Select a product to view details.</p>';
                }
            } else {
                // add to selection
                selectedIds.push(item.id);
                selectedIndex = index;
                console.log('Selected:', item.name);

                // show details
                showProductDetails(item, index);
            }

            renderCart(); // 🔄 refresh UI
        });

        cartContainer.appendChild(div);
    });

    // default details panel state
    if (selectedIndex === null) {
        detailsContainer.innerHTML = '<p>Select a product to view details.</p>';
    }
}

// Show product details in the right section
function showProductDetails(item, index) {
    const detailsContainer = document.getElementById('cartSummary');
    detailsContainer.innerHTML = `
    <h2>${item.name}</h2>
    <img src="${item.img}" alt="${item.name}" width="150">
    <p><strong>Price:</strong> ${item.price}</p>
    <p><strong>Size:</strong> ${item.size}</p>
    <p><strong>Color:</strong> ${item.color}</p>
    <p><strong>Quantity:</strong> ${item.quantity}</p>
    <button class="btn-remove" data-index="${index}">Remove 1</button>
  `;
}

// Handle remove clicks from details section
document.addEventListener('click', (e) => {
    if (!e.target.matches('.btn-remove')) return;
    const index = Number(e.target.dataset.index);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart[index]) {
        cart[index].quantity -= 1;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
            if (cart.length === 0) {
                // cart empty -> reset
                selectedIndex = null;
            } else if (index > 0) {
                selectedIndex = index - 1; // move to previous item
            } else {
                selectedIndex = 0; // fallback to first if available
            }
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
});

// Optional remove function (same behavior)
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart[index]) {
        cart[index].quantity -= 1;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
            if (cart.length === 0) {
                // cart empty -> reset
                selectedIndex = null;
            } else if (index > 0) {
                selectedIndex = index - 1; // move to previous item
            } else {
                selectedIndex = 0; // fallback to first if available
            }
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}
//handle select product card
function selectProductCard() {
    productCards.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('selected');
        });
    });
}
// Handle select all products
function selectAllProducts() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (selectedIds.length === cart.length) {
        // all selected, so deselect all
        selectedIds = [];
        selectedIndex = null; // clear details
    } else {
        selectedIds = cart.map((item) => item.id); // select every product id
        selectedIndex = null; // reset details (optional)
    }
    renderCart();
}

// Hook button
document
    .getElementById('selectAll')
    .addEventListener('click', selectAllProducts);
