
// themeChanger //


document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector('.themeChanger input');
  const body = document.body;

  themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
  });
});
