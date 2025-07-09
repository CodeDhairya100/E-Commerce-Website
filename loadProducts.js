document.querySelectorAll(".itemsButton").forEach(button => {
    button.addEventListener("click", () => {
        const category = button.textContent
        .trim()                         //this line trims out any white spaces
        .toLowerCase()                  //this line lower case the words to read
        .replace(/[^a-z0-9]/g, '-');    //this line replaces the spaces and & with '-'
        const fileToLoad = `${category}.html`;

        fetch(fileToLoad)
            .then(res => res.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const productCards = doc.querySelector(".itemMenu");

                const displayArea = document.getElementById("productDisplayArea");
                displayArea.innerHTML = ""; // Clear previous
                displayArea.appendChild(productCards);

                // Reload JS for quantity buttons
                const script = document.createElement("script");
                script.src = "cardScript.js";
                document.body.appendChild(script);
            })
            .catch(err => {
                console.error("Could not load products:", err);
            });
    });
});
