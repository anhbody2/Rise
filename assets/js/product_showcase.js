import products from './product_list.js';

const showcase = document.querySelector('.product-showcase');
const track = document.querySelector('.product-track');

// Clear old stuff
track.innerHTML = '';

// Render product cards twice (for looping)
function renderCards() {
    products.forEach((p) => {
        const card = document.createElement('div');
        card.classList.add('product-card-show');
        card.innerHTML = `<img src="${p.img}" alt="${p.name}">`;
        track.appendChild(card);
    });
}
renderCards();
renderCards();

const halfWidth = track.scrollWidth / 2;
let autoScrollInterval;
let isUserScrolling = false;

// --- Auto scroll function ---
function startAutoScroll() {
    stopAutoScroll(); // prevent multiple intervals
    autoScrollInterval = setInterval(() => {
        showcase.scrollLeft += 1; // speed = 1px per tick
        if (showcase.scrollLeft >= halfWidth) {
            showcase.scrollLeft -= halfWidth; // loop back seamlessly
        }
    }, 20); // every 20ms (~50fps)
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// --- Detect user interaction ---
let scrollTimeout;
showcase.addEventListener('scroll', () => {
    if (!isUserScrolling) {
        stopAutoScroll(); // pause when user starts scrolling
        isUserScrolling = true;
    }
    clearTimeout(scrollTimeout);

    // When user stops scrolling, restart auto-scroll after 1.5s
    scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
        startAutoScroll();
    }, 1);

    // Handle infinite wrap while user scrolls
    if (showcase.scrollLeft >= halfWidth) {
        showcase.scrollLeft -= halfWidth;
    } else if (showcase.scrollLeft <= 0) {
        showcase.scrollLeft += halfWidth;
    }
});

// --- Kick it off ---
startAutoScroll();
