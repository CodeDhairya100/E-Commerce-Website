const searchInput = document.querySelector('input.searchBar'); // tumhare input ka class
const productDisplayArea = document.getElementById('productDisplayArea'); // product cards ka display area


const categoryFiles = ["accessories","beauty-products","bestseller","computers",
                       "electronics","fashion---clothing","furniture","gifting",
                       "groceries","kitchen", "books","pharmacy"];

                       
searchInput.addEventListener('input', async function () {
  const query = this.value.trim().toLowerCase();
  if (!query) {
    productDisplayArea.innerHTML = '';
    return;
  }

  productDisplayArea.innerHTML = ''; // Clear display before showing results

  for (const file of categoryFiles) {
    try {
      const res = await fetch(`${file}.html`);
      const html = await res.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const cards = doc.querySelectorAll('.itemCard');

      cards.forEach(card => {
        const name = card.querySelector('h2')?.textContent.toLowerCase() || '';
        const company = card.querySelectorAll('h4')[0]?.textContent.toLowerCase() || '';

        if (name.includes(query) || company.includes(query)) {
          productDisplayArea.appendChild(card.cloneNode(true));
        }
      });

    } catch (err) {
      console.error(`Error fetching ${file}:`, err);
    }
  }
});
