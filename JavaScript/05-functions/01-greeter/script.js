const input = document.getElementById("nameInput");
const btn = document.getElementById("greetBtn");
const output = document.getElementById("output");

function createGreeting(userName) {
    return "Welcome to the system, " + userName + "!";
}

btn.addEventListener("click", () => {
    const name = input.value;
    const message = createGreeting(name);

    output.innerText = message;
});
