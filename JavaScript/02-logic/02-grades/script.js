const input = document.getElementById("scoreInput");
const btn = document.getElementById("gradeBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    const score = Number(input.value);
    if(score >= 90) result.innerText = "A";
    else if(score >= 80) result.innerText = "B";
    else if(score >= 70) result.innerText = "C";
    else result.innerText = "F";
});


