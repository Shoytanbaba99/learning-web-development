
const numbers = [10, 55, 2, 80, 5, 99, 30];
document.getElementById("original").innerText = numbers.join(", ");
document.getElementById("mapBtn").addEventListener("click", () => {
    const doubled = numbers.map(n => n * 2);
    document.getElementById("mapResult").innerText = doubled.join(", ");
});
document.getElementById("filterBtn").addEventListener("click", () => {
    const bigOnes = numbers.filter(n => n > 50);
    document.getElementById("filterResult").innerText = bigOnes.join(", ");
});
document.getElementById("reduceBtn").addEventListener("click", () => {
    const sum = numbers.reduce((total, current) => total + current, 0);
    document.getElementById("reduceResult").innerText = sum;
});
