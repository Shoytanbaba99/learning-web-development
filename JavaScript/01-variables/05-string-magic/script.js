 const input = document.getElementById("wordInput");
 const btn = document.getElementById("magicBtn");
 const result = document.getElementById("output");

 btn.addEventListener("click", ()=>{

     const text = input.value;
     const bigText = text.toUpperCase();
     result.innerText = bigText;

 });
