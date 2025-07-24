// saveAddress.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const saveBtn = document.querySelector(".save");

  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const formData = {
      firstName: form.querySelector('input[name="First Name"]').value,
      lastName: form.querySelector('input[name="Last Name"]').value,
      phone: form.querySelector('input[name="phone"]').value,
      address: form.querySelector('input[name="address"]').value,
      city: form.querySelector('input[name="city"]').value,
      state: form.querySelector('select[name="state"]').value,
      pincode: form.querySelector('input[name="pincode"]').value,
    };

    localStorage.setItem("savedAddress", JSON.stringify(formData));
    alert("Address saved!");
    form.reset(); // Optional: clear the form
  });
});
