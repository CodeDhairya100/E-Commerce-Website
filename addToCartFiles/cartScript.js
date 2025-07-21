document.addEventListener("DOMContentLoaded", () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const cartContainer = document.getElementById("cartItems");
  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p style="color:grey; font-weight: bold; font-size: 80px; opacity: 0.3;">Your cart is empty.</p>';
    return;
  }

  cartItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "cartCard";
    div.setAttribute("data-id", item.id);

    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div>
        <h2>${item.title}</h2>
        <p><strong>Company:</strong> ${item.company}</p>
        <p><strong>Price:</strong> ₹${item.price}</p>
        <p><strong>Quantity:</strong> ${item.quantity}</p>
        <button style="width:83px;border-radius:25px; color:black; background-color:lightgrey;font-weight:bold" class="removeItem">
          Remove
        </button>
      </div>
    `;
    cartContainer.appendChild(div);
  });
});
