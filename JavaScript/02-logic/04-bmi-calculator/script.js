const weight = document.getElementById("weightInput").value;
let height = document.getElementById("heightInput").value;
const calc = document.getElementById("calcBtn");
const bmi = document.getElementById("bmiValue");
const category = document.getElementById("bmiCategory");

calc.addEventListener("click", ()=> {
    height = (height/100).toFixed(2);
    const result = weight/(height*height);
    bmi.innerText = `Your BMI is: ${result}`;
    if(result < 18.5){
        category.innerText = `UnderWeight`;
    }else if(result >= 18.5 && result <= 24.9){
        category.innerText =  `Normal Weight`;
    }else if(result > 25 && result < 29.9){
        category.innerText =  `Overweight`;
    }else{
        category.innerText =   `Obese`
    }

})
