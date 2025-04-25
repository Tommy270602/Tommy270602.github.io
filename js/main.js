/* 
    Button to toggle between light and dark mode
*/ 
const button = document.getElementById("themeToggle");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  button.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

