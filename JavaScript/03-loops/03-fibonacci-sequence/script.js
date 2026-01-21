const btn = document.getElementById("fiboBtn");
const output = document.getElementById("fiboOutput");

btn.addEventListener("click", () => {
    let a = 0;
    let b = 1;
    let sequence = "";

    for (let i = 1; i <= 10; i++) {
        sequence = sequence + a + ", ";

        const nextNumber = a + b;
        a = b;
        b = nextNumber;
    }

    output.innerText = sequence;
});
