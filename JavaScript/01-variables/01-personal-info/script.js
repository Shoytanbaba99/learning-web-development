const nameInput = document.getElementById("myInput");
const myButton = document.getElementById("myBtn");
const resultBox = document.getElementById("output");

myButton.addEventListener("click", () => {
    const age = 20;
    const name = "Murighonta";
    const city = "Dhaka";
    const goal = "FullStack";
    const finalSentence = `I am ${name}, i live in ${city}, i am currently ${age} years old, and my goal is to be ${goal}`;
    resultBox.innerText = finalSentence;
})

