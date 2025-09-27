export function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        size: product.selectedSize,
        color: product.selectedColor,
        img: product.images ? product.images[0] : null,
        quantity: product.quantity,
    };
    const existing = cart.find(
        (item) =>
            item.id === cartItem.id &&
            item.size === cartItem.selectedSize &&
            item.color === cartItem.selectedColor,
    );

    if (existing) {
        existing.quantity += product.quantity; // increase quantity
    } else {
        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}
