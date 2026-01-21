const btn = document.getElementById("showBtn");
const fullDisplay = document.getElementById("fullList");
const firstDisplay = document.getElementById("firstItem");
const lastDisplay = document.getElementById("lastItem");

btn.addEventListener("click", () => {
    const fruits = ["Apple", "Mango", "Banana", "Orange", "Grape", "Dragonfruit", "Tomato", "Pineapple"];

    fullDisplay.innerText = fruits.join(", ");
    firstDisplay.innerText = fruits[0];
    const lastIndex = fruits.length - 1;
    lastDisplay.innerText = fruits[lastIndex];
});
