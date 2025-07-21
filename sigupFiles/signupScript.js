function showForm(formId) {
  document.querySelectorAll(".form-box").forEach(form =>
    form.classList.remove("active")
  );
  document.getElementById(formId).classList.add("active");
}

function registerUser(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  const scriptURL = "https://dark-heart-3d47.kanakbpandey2014.workers.dev/";

  const data = {
    name,
    email,
    password
  };

  fetch(scriptURL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(async res => {
      const response = await res.json();
      if (response.message === "Subscribed successfully!") {
        alert("✅ Registration Successful!");
        form.reset();
        showForm("login-form");
      } else {
        alert("⚠️ Something went wrong. Email already Exist.");
      }
    })
    .catch(error => {
      console.error("Fetch error:", error);
      alert("❌ Registration failed: " + error.message);
    });
}
