const input = document.getElementById("primeInput");
const btn = document.getElementById("checkBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    const number = Number(input.value);
    let isPrime = true;

    if (number <= 1) isPrime = false;

    for(let i = 2; i <= number/2; i++){
        if(number%i === 0){
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.innerText = number + " is a Prime Number!";
        result.style.color = "green";
    } else {
        result.innerText = number + " is NOT Prime.";
        result.style.color = "red";
    }
});
