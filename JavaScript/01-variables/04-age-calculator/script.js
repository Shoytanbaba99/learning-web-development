const birthYearInput = document.getElementById("birthYear");
const button = document.getElementById("ageBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const date = new Date();
    const currentYear = date.getFullYear();


    const birthYear = Number(birthYearInput.value);

    result.innerText = `You are ${currentYear - birthYear} years old`;
});
