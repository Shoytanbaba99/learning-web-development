const btn = document.getElementById("dogBtn");
const img = document.getElementById("dogImg");


btn.addEventListener("click", async () => {


    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    console.log(data);

    img.src = data["message"];
    img.style.display = "block";

});
