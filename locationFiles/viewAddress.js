// viewAddress.js
document.addEventListener("DOMContentLoaded", () => {
  const viewBtn = document.getElementById("viewAddress");

  viewBtn.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("savedAddress"));

    if (!data) {
      alert("No address saved yet!");
      return;
    }

    alert(`
Saved Address:
------------------------
Name: ${data.firstName} ${data.lastName}
Phone: ${data.phone}
Address: ${data.address}, ${data.city}, ${data.state} - ${data.pincode}
    `);
  });
});
