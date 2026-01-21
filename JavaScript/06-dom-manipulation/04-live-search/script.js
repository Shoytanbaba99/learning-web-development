const input = document.getElementById("searchInput");
const items = document.querySelectorAll(".item");

input.addEventListener("input", () => {
    const filter = input.value.toLowerCase();

    items.forEach((item) => {
        const text = item.innerText.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
});
