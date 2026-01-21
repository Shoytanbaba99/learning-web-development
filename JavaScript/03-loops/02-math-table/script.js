const tableInput = document.getElementById("tableInput");
const tableBtn = document.getElementById("tableBtn");
const tableOutput = document.getElementById("tableOutput");

tableBtn.addEventListener("click", () => {
    let table = "";
    const number = Number(tableInput.value);

for(let i = 1; i <= 10; i++){
    const math = number * i;
    table = `${table}\n ${number} * ${i} = ${math}`;
}

tableOutput.innerText = table;
});
