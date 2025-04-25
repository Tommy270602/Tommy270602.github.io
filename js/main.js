/* 
    Button to toggle between light and dark mode
*/ 
const button = document.getElementById("themeToggle");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  // Switch emoji based on the current mode
  const isDark = document.body.classList.contains("dark-mode");
  button.textContent = isDark ? "☀️" : "🌙";
});
