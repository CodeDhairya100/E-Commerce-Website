document.addEventListener('DOMContentLoaded', () => {
  const savedAddressJSON = localStorage.getItem('savedAddress');
  const locationBtn = document.querySelector('.locationButton');

  if (locationBtn) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('location-tooltip');

    if (savedAddressJSON) {
      const saved = JSON.parse(savedAddressJSON);
      tooltip.innerHTML = `
        <strong>Pincode:</strong> ${saved.pincode}<br>
        <strong>Address:</strong> ${saved.address}<br>
        <strong>State:</strong> ${saved.state}
      `;
    } else {
      tooltip.innerText = "No address saved.";
    }

    locationBtn.appendChild(tooltip);
  }
});
