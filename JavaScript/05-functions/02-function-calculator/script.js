const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const result = document.getElementById("result");

function add(x, y) {
    return x + y;
}
function sub (x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return x/y;
}
document.getElementById("addBtn").addEventListener("click", () => {
    const val1 = Number(n1.value);
    const val2 = Number(n2.value);
    const answer = add(val1, val2);
    result.innerText = answer;
});
document.getElementById("subBtn").addEventListener("click", () => {
    const val1 = Number(n1.value);
    const val2 = Number(n2.value);
    const answer = sub(val1, val2);
    result.innerText = answer;
});
document.getElementById("mulBtn").addEventListener("click", () => {
    const val1 = Number(n1.value);
    const val2 = Number(n2.value);
    const answer = mul(val1, val2);
    result.innerText = answer;
});
document.getElementById("divBtn").addEventListener("click", () => {
    const val1 = Number(n1.value);
    const val2 = Number(n2.value);l
    const answer = div(val1, val2);
    result.innerText = answer;
});

