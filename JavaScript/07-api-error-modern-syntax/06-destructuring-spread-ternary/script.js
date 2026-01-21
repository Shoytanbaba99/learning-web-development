const user = {
    id: 101,
    username: "CodeMaster",
    email: "code@dev.com",
    details: {
        hobbies: ["coding", "gaming"],
        active: true
    }
};

const { username, email } = user; //Destructing
document.getElementById("display").innerText =
`User: ${username} | Email: ${email}`;


const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Potato"];

document.getElementById("mergeBtn").addEventListener("click", () => {

    const food = [...fruits, ...vegetables, "Bread"]; //Spread

    document.getElementById("result").innerText = food.join(", ");
});


const btn = document.getElementById("toggleBtn");
const text = document.getElementById("statusText");

let isOnline = false;

btn.addEventListener("click", () => {
    isOnline = !isOnline;
    const status = isOnline ? "Online" : "Offline"; //Ternary
    const color = isOnline ? "green" : "red"; //Ternary

    text.innerText = status;
    text.style.color = color;
});
