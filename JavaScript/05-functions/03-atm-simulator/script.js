const balanceDisplay = document.getElementById("balanceDisplay");
const amountInput = document.getElementById("amountInput");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const message = document.getElementById("message");

let balance = 1000;

function showBalance(){
    balanceDisplay.innerText = `${balance}`;
}
const withdraw = (x) => {
    if(balance >= x){
        balance -= x;
        return balance;
    }else{
        return -1;
    }
};
const deposit = (x) => {
    balance += x;
    return balance;
};
depositBtn.addEventListener("click", ()=>{
    const value = Number(amountInput.value);
    deposit(value);
    message.innerText="Successfully deposited: "+value;
    message.style.color = "green";
    showBalance();
    amountInput.value = "";
})
withdrawBtn.addEventListener("click", ()=>{
    const value = Number(amountInput.value);
    const result = withdraw(value);
    if(result !== -1){
        message.innerText = "Successfully Withdrew";
        message.style.color = "green";
        showBalance();
    } else {
        message.innerText = "Insufficient Funds!";
        message.style.color = "red";
    }
    amountInput.value = "";
});
