const btn = document.getElementById("genBtn");
const img = document.getElementById("userImg");
const nameText = document.getElementById("userName");
const emailText = document.getElementById("userEmail");

btn.addEventListener("click", async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    const user = data.results[0];

    img.src = user.picture.large;
    nameText.innerText = `${user.name.first} ${user.name.last}`;
    emailText.innerText = user.email;
});
