function setupQuantityAndCartButtons() {
  // ✅ Quantity Increase
  document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', () => {
      const span = button.parentElement.querySelector('.qty-value');
      let current = parseInt(span.innerText);
      if (current < 30) {
        span.innerText = current + 1;
      }
    });
  });

  // ✅ Quantity Decrease
  document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', () => {
      const span = button.parentElement.querySelector('.qty-value');
      let current = parseInt(span.innerText);
      if (current > 1) {
        span.innerText = current - 1;
      }
    });
  });

  // ✅ Add to Cart
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const image = button.dataset.image;
      const quantity = parseInt(button.parentElement.querySelector('.qty-value').innerText);

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existing = cart.find(item => item.name === name);

      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({ name, price, image, quantity });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${quantity} x ${name} added to cart!`);
    });
  });
}

// ✅ Required to expose this function to be called later
window.setupQuantityAndCartButtons = setupQuantityAndCartButtons;

function increaseQty(button) {
  const qtyValue = button.parentElement.querySelector(".qty-value");
  let currentQty = parseInt(qtyValue.textContent);
  qtyValue.textContent = currentQty + 1;
}

function decreaseQty(button) {
  const qtyValue = button.parentElement.querySelector(".qty-value");
  let currentQty = parseInt(qtyValue.textContent);
  if (currentQty > 1) {
    qtyValue.textContent = currentQty - 1;
  }
}

// Make sure these are available globally
window.increaseQty = increaseQty;
window.decreaseQty = decreaseQty;
