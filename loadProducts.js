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
        displayArea.innerHTML = ""; // Clear previous
        displayArea.appendChild(productCards);

        // ✅ Reload script only once using ID check
        if (!document.getElementById("cardScriptLoaded")) {
          const script = document.createElement("script");
          script.src = "cardScript.js";
          script.id = "cardScriptLoaded"; // Set unique ID
          document.body.appendChild(script);
        }
      })
      .catch(err => {
        console.error("Could not load products:", err);
      });
  });
});
