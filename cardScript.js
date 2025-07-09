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
