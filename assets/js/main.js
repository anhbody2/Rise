import products from './product_list.js';

const productList = document.getElementById('product-list');
if (productList) {
    products.forEach((p) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.setAttribute('data-id', p.id); // store id

        card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <div class="product-actions">
        <div class="sizes">
          ${p.sizes.map((size) => `<span>${size}</span>`).join('')}
        </div>
      </div>
    `;

        // when card clicked → go to product detail
        card.addEventListener('click', () => {
            window.location.href = `product_page.html?id=${p.id}`;
        });

        productList.appendChild(card);
    });
}
