document.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeItem")) {
    const card = e.target.closest(".cartCard");
    const itemId = card.getAttribute("data-id");

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems = cartItems.filter(item => item.id !== itemId);

    localStorage.setItem("cart", JSON.stringify(cartItems));
    card.remove();

    // Optional: Show empty message if cart is now empty
    if (cartItems.length === 0) {
      document.getElementById("cartItems").innerHTML = "<p>Your cart is empty.</p>";
    }
  }
});
