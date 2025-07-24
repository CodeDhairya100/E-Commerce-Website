// deleteAddress.js
document.addEventListener("DOMContentLoaded", () => {
  const deleteBtn = document.getElementById("deleteAddress");

  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete the saved address?")) {
      localStorage.removeItem("savedAddress");
      alert("Saved address deleted!");
    }
  });
});
