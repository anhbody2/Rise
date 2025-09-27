// Checkout button logic
const checkoutBtn = document.querySelector('.checkout');
const cartSummary = document.getElementById('cartSummary');

checkoutBtn.addEventListener('click', () => {
    cartSummary.innerHTML = `
    <form class="payment-form">
      <h2>Payment Details</h2>
      <label>
        Name on Card
        <input type="text" placeholder="John Doe" required>
      </label>
      <label>
        Card Number
        <input type="text" placeholder="1234 5678 9012 3456" required>
      </label>
      <label>
        Expiry Date
        <input type="text" placeholder="MM/YY" required>
      </label>
      <label>
        CVV
        <input type="password" placeholder="123" required>
      </label>
      <button type="submit" class="pay-btn">Pay Now</button>
    </form>
  `;
});
//Handle navigation to tracking page after payment
document.addEventListener('submit', (e) => {
    if (!e.target.matches('.payment-form')) return;

    e.preventDefault(); // Stop form submission

    // Simulate payment processing...
    setTimeout(() => {
        // Redirect to tracking page
        window.location.href = 'tracking.html';
    }, 1000);
});
