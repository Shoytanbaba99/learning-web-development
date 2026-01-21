const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const add = document.getElementById("btn-add");
const sub = document.getElementById("btn-sub");
const mul = document.getElementById("btn-mul");
const div = document.getElementById("btn-div");
const result = document.getElementById("result");

add.addEventListener("click", () => {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    const finalResult = `Addition of ${(num1)} and ${(num2)} is: ${num1+num2}`;
    result.innerText = finalResult;
})
sub.addEventListener("click", () => {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    const finalResult = `Subtraction of ${(num1)} and ${(num2)} is: ${num1-num2}`;
    result.innerText = finalResult;
})
mul.addEventListener("click", () => {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    const finalResult = `Multiplication of ${(num1)} and ${(num2)} is: ${num1*num2}`;
    result.innerText = finalResult;
})
div.addEventListener("click", () => {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    const finalResult = `Division of ${(num1)} and ${(num2)} is: ${num1/num2}`;
    result.innerText = finalResult;
})
