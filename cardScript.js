console.log("Card script loaded once");

function increaseQty(btn) {
  const span = btn.parentElement.querySelector('.qty-value');
  let current = parseInt(span.innerText);
  if (current < 30){
    span.innerText = current + 1;
  }
}

function decreaseQty(btn) {
  const span = btn.parentElement.querySelector('.qty-value');
  let current = parseInt(span.innerText);
  if (current > 1) {
    span.innerText = current - 1;
  }
}

document.removeEventListener("click", handleAddToCart); // prevent duplicate
document.addEventListener("click", handleAddToCart);

function handleAddToCart(e) {
  if (e.target.classList.contains("addToCart")) {
    const card = e.target.closest(".itemCard");
    
    // ✅ STEP 1: Get ID from data-id attribute
    const id = card.getAttribute("data-id"); 
    
    const title = card.querySelector("h2").innerText;
    const company = card.querySelectorAll("h4")[0].innerText.split(":")[1].trim();
    const priceText = card.querySelector("h4:nth-of-type(2)").innerText.split(":")[1].trim();
    const price = parseInt(priceText.replace(/[^\d]/g, ''));

    const quantity = parseInt((card.querySelector(".qty-value").innerText))/2;
    const image = card.querySelector("img").src;

    // ✅ STEP 2: Add id to cart item
    const cartItem = { id, title, company, price, quantity, image };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // ✅ STEP 3: Find using id instead of title
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart");
  }
}
