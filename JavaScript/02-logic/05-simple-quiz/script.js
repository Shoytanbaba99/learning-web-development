const q1Inp = document.getElementById("q1");
const q2Inp = document.getElementById("q2");
const q3Inp = document.getElementById("q3");
const btn = document.getElementById("submitBtn");
const result = document.getElementById("scoreDisplay");

btn.addEventListener("click", () => {
    let score = 0;
    if(q1Inp.value === "4"){
        score = score+1;
    }
    if(q2Inp.value.toLowerCase() ==="paris"){
        score = score+1;
    }
    if(q3Inp.value.toLowerCase() ==="blue"){
        score = score+1;
    }
    result.innerText = score;
    result.style.color = "Green";
})
