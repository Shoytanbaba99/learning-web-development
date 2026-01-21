const input = document.getElementById("usernameInput");
const btn = document.getElementById("searchBtn");
const card = document.getElementById("profileCard");
const errorMsg = document.getElementById("errorMsg");
const avatar = document.getElementById("avatar");
const nameText = document.getElementById("name");
const bioText = document.getElementById("bio");

btn.addEventListener("click", async () =>{
    const username = input.value;
    errorMsg.style.display = "none";
    card.style.display = "none";
    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok){
            throw new Error("User not found");
        }
        const data = await response.json();
        avatar.src = data.avatar_url;
        nameText.innerText = data.name || data.login;
        bioText.innerText = data.bio || "No bio found";
        card.style.display = "block";
    } catch(err){
        console.log("Error caught", err);
        errorMsg.style.display = "block";
    }
});
