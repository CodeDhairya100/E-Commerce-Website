// jsfiles/loadProducts.js

// Handle category button clicks
document.querySelectorAll(".itemsButton").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    const fileToLoad = `categoryFiles/${category}.html`;

    fetch(fileToLoad)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch file");
        return res.text();
      })
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const productCards = doc.querySelector(".itemMenu");

        const displayArea = document.getElementById("productDisplayArea");
        displayArea.innerHTML = "";

        if (productCards) {
          displayArea.appendChild(productCards);
        } else {
          displayArea.innerHTML = "<p>No products found in this category.</p>";
        }

        // Remove old script if present
        const oldScript = document.getElementById("card-script");
        if (oldScript) {
          oldScript.remove();
        }

        // Re-attach cardScript.js
        const script = document.createElement("script");
        script.src = "jsfiles/cardScript.js";
        script.id = "card-script";
        script.onload = () => {
          if (window.setupQuantityAndCartButtons) {
            window.setupQuantityAndCartButtons();  // ✅ Re-bind events
          }
        };
        document.body.appendChild(script);
      }) // ✅ this was missing!
      .catch(err => {
        console.error("Could not load products:", err);
        const displayArea = document.getElementById("productDisplayArea");
        displayArea.innerHTML = "<p style='color:red'>Error loading category.</p>";
      });
  });
});

// Load default category on page load
window.addEventListener("DOMContentLoaded", () => {
  const defaultCategory = "paintings";
  const fileToLoad = `categoryFiles/${defaultCategory}.html`;

  fetch(fileToLoad)
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch default file");
      return res.text();
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const productCards = doc.querySelector(".itemMenu");

      const displayArea = document.getElementById("productDisplayArea");
      displayArea.innerHTML = "";

      if (productCards) {
        displayArea.appendChild(productCards);
      } else {
        displayArea.innerHTML = "<p>No products found in default category.</p>";
      }

      const script = document.createElement("script");
      script.src = "jsfiles/cardScript.js";
      script.id = "card-script";
      script.onload = () => {
        if (window.setupQuantityAndCartButtons) {
          window.setupQuantityAndCartButtons();
        }
      };
      document.body.appendChild(script);
    })
    .catch(err => {
      console.error("Could not load default products:", err);
      document.getElementById("productDisplayArea").innerHTML = "<p style='color:red'>Error loading default category.</p>";
    });
});