let weight = 90;
let height = 1.75;

let bmi = weight / (height * height);

console.log("BMI is:", bmi);

if (bmi < 18.5) {
    console.log("You are underweight");
}
else if (bmi >= 18.5 && bmi <= 24.9){
    console.log("You are Normal");
}
else if (bmi >= 18.5 && bmi <= 29.9){
    console.log("You are overweight");
}
else{
    console.log("You are obese")
}