const body = document.body;
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        btn.innerText = "☀️ Light Mode";
    } else {
        btn.innerText = "🌙 Dark Mode";
    }
});
