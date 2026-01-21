 const input = document.getElementById("ageInput");
 const btn = document.getElementById("checkBtn");
 const result = document.getElementById("resultText");

 btn.addEventListener("click", ()=>{

     const age = input.value;
     const elig = 18;
     if(age >= 18){
         result.innerText = "Eligible";
         result.style.color = "green";
     }else{
         result.innerText="Not Eligible";
         result.style.color= "red";

     }

 });
