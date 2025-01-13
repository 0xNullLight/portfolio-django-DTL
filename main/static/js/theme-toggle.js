// theme-toggle.js

const toggleButton = document.getElementById("mode-toggle");
const currentTheme = localStorage.getItem("theme") || "light";
document.body.setAttribute("data-theme", currentTheme);

if (currentTheme === "dark") {
  toggleButton.textContent = "Switch to Light Mode";
}

toggleButton.addEventListener("click", () => {
  const newTheme =
    document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  toggleButton.textContent =
    newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
});
