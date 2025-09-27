function renderUserColumn(containerSelector, user, cartItems) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = ''; // Clear old content, but keep .user-column div itself

    // User Image
    const img = document.createElement('img');
    img.src = user.image || 'assets/images/users-profile/visitor.jpg';
    img.alt = 'User';
    img.className = 'profile-img';
    container.appendChild(img);

    // User Info
    const userInfo = document.createElement('div');
    userInfo.className = 'user-info';

    userInfo.innerHTML = `
    <p><b>Name:</b> ${user.name}</p>
    <p><b>Country:</b> ${user.country}</p>
    <p><b>Role:</b> ${user.role}</p>
  `;
    container.appendChild(userInfo);

    // Cart List
    const cartList = document.createElement('div');
    cartList.className = 'cart-list';

    cartItems.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <p>${item.name}</p>
    `;
        cartList.appendChild(cartItem);
    });

    container.appendChild(cartList);
}
function renderSuggestionList(containerSelector, suggestions) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = ''; // Clear old content

    suggestions.forEach((item) => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'cart-item';

        suggestionItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <p>${item.name}</p>
    `;

        container.appendChild(suggestionItem);
    });
}

const user = {
    name: 'John Doe',
    country: 'USA',
    role: 'Customer',
    image: 'assets/images/users-profile/visitor.jpg',
};

const cartItems = [
    { name: 'Shirt', image: 'assets/prod1.jpg' },
    { name: 'Shoes', image: 'assets/prod2.jpg' },
    { name: 'Watch', image: 'assets/prod3.jpg' },
];

// Render into your existing div.user-column
renderUserColumn('.user-column', user, cartItems);
const suggestions = [
    { name: 'Hat', image: 'assets/prod4.jpg' },
    { name: 'Backpack', image: 'assets/prod5.jpg' },
    { name: 'Glasses', image: 'assets/prod6.jpg' },
];

// Assuming you already have <div class="suggestion-list"></div> in HTML
renderSuggestionList('.suggestion-list', suggestions);
