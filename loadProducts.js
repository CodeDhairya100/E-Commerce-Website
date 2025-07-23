// Load single category on category button click
document.querySelectorAll(".itemsButton").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.textContent
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-');

    const fileToLoad = `categoryFiles/${category}.html`;

    fetch(fileToLoad)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const productCards = doc.querySelector(".itemMenu");

        const displayArea = document.getElementById("productDisplayArea");
        displayArea.innerHTML = ""; // clear previous
        if (productCards) displayArea.appendChild(productCards);

        loadCardScriptOnce();
      })
      .catch(err => {
        console.error("Could not load category:", err);
      });
  });
});

// Load ALL categories when SHOP is clicked
document.querySelector(".shop").addEventListener("click", () => {
  const displayArea = document.getElementById("productDisplayArea");
  displayArea.innerHTML = ""; // clear previous

  const categories = [
    "paintings",
    "painting-tools",
    "3-d-models",
    "clay-crafts",
    "stickers",
    "posters",
    "papers",
    "markers---outliners",
    "crayon---pencils",
    "gifting",
    "crafts---decorations"
  ];

  Promise.all(
    categories.map(category =>
      fetch(`categoryFiles/${category}.html`)
        .then(res => res.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          return doc.querySelector(".itemMenu");
        })
    )
  ).then(allCards => {
    // Create one unified container
    const unifiedContainer = document.createElement("div");
    unifiedContainer.classList.add("itemMenu"); // Use the same class for layout

    allCards.forEach(card => {
      if (card) {
        Array.from(card.children).forEach(child => {
          unifiedContainer.appendChild(child);
        });
      }
    });

    displayArea.appendChild(unifiedContainer);


    loadCardScriptOnce();
  }).catch(err => {
    console.error("Could not load all categories:", err);
  });
});

// Reusable function to load script once
function loadCardScriptOnce() {
  if (!document.getElementById("cardScriptLoaded")) {
    const script = document.createElement("script");
    script.src = "cardScript.js";
    script.id = "cardScriptLoaded";
    document.body.appendChild(script);
  }
}
