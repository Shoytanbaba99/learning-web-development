const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const myModal = document.getElementById("myModal");

openBtn.addEventListener("click", ()=>{
    myModal.style.display = "block";
});
closeBtn.addEventListener("click", () =>{
    myModal.style.display = "none";
});
