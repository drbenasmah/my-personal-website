function calculateBMI() {
  var nameInput = document.getElementById("name");
  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");

  var name = nameInput.value;
  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value);

  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  if (isNaN(weight) || isNaN(height)) {
    alert("Please enter valid weight and height values.");
    return;
  }

  var bmi = weight / (height * height);
  bmi = bmi.toFixed(1);

  var resultElement = document.getElementById("bmi-result");
  resultElement.textContent = "Hello " + name + ", your BMI is " + bmi + ".";

  if (bmi < 18.5) {
    resultElement.textContent +=
      " Consider consulting a healthcare professional for personalized guidance.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultElement.textContent +=
      " Maintain a balanced lifestyle for overall well-being.";
  } else if (bmi > 24.9) {
    resultElement.textContent +=
      " Focus on healthy habits to achieve a healthy weight.";
  }
}





