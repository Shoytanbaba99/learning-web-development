const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const compDisplay = document.getElementById("compChoice");
const resultDisplay = document.getElementById("result");

function playGame (userMove){
    const randNumber = Math.floor(Math.random()*3);
    let compMove = "";
    if(randNumber === 0) compMove = "Rock";
    else if(randNumber == 1) compMove = "Paper";
    else compMove = "Scissors";
    compDisplay.innerText = compMove;
    if(compMove === userMove){
        resultDisplay.innerText = "It's a Tie";
        resultDisplay.style.color = "grey";
    }
    else if((compMove === "Rock" && userMove ==="Paper") ||(compMove === "Paper" && userMove === "Scissors") || (compMove ==="Scissors" && userMove ==="Rock") ){
        resultDisplay.innerText = "User Won!!";
        resultDisplay.style.color = "green";
    }else{
        resultDisplay.innerText = "Comp Won!";
        resultDisplay.style.color = "red";
    }
}
rockBtn.addEventListener("click", () => playGame("Rock"));
paperBtn.addEventListener("click", ()=>playGame("Paper"));
scissorsBtn.addEventListener("click", () => playGame("Scissors"));
