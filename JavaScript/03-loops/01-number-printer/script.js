
const btn = document.getElementById("printBtn");
const resultBox = document.getElementById("result");

btn.addEventListener("click", () => {

    let allNumbers = "";
    for (let i = 1; i <= 500; i++) {
        allNumbers = allNumbers + i + " ";
    }
    resultBox.innerText = allNumbers;
});
