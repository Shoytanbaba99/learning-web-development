const btn = document.getElementById("loadBtn");
const container = document.getElementById("feedContainer");

btn.addEventListener("click", async ()=> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    container.innerHTML = "";
    const top5 = data.slice(0,5);

    top5.forEach(post =>{
        const card = document.createElement("div");
        card.style.border = "1px solid #333";
        card.style.margin = "10px";
        card.style.padding = "10px";
        card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        container.appendChild(card);
    });
});
