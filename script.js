const weightInput=document.getElementById("weight")
const heightInput=document.getElementById('height')
const result=document.getElementById("result")

// bmi calculation function   //

const calculateBMI=()=>{
    let weight=weightInput.value;
    let height=heightInput.value;
   

    // calculation 
    if(!weight|| !height){
        result.innerHTML='please enter values';
        result.classList.add('Error')
        return
    }
    if (weight == 0 || weight < 0 || height == 0 || height < 0) {
        result.innerText = "Negative or 0 values not allowed!";
        result.classList.add("error");
        return;
      }
    
      // height CM to Meter convertion
      height = height / 100;
    
      let bmi = weight / (height * height); //BMI calculation formula
      bmi = bmi.toFixed(1); //fixing value 1 digit after decimal
    
      if (bmi <= 18.4) {
        result.innerText = `Your BMI is ${bmi}, you are underweight!...`;
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerText = `Your BMI is ${bmi}, you have normal weight`;
      } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerText = `Your BMI is ${bmi}, you are overweight.`;
      } else if (bmi >= 30) {
        result.innerText = `Your BMI is ${bmi}, you have obesity.`;
      }
    
      result.classList.remove("error");
}