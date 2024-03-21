function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if(height === '' || weight === '') {
        alert('Please enter both height and weight.');
        return;
    }

    var bmi = weight / ((height/100) * (height/100));
    var bmiResult = "Your BMI is: " + bmi.toFixed(2) + "<br>";

    if(bmi < 18.5) {
        bmiResult += "You are underweight.";
    } else if(bmi >= 18.5 && bmi < 25) {
        bmiResult += "You have a normal weight.";
    } else if(bmi >= 25 && bmi < 30) {
        bmiResult += "You are overweight.";
    } else {
        bmiResult += "You are obese.";
    }

    document.getElementById('result').innerHTML = bmiResult;
}
