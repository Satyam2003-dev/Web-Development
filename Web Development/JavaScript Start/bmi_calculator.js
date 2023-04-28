function bmicalculator(weight, height) {
  var bmi = weight / (height * height);
  return Math.round(bmi);
}

var bmi = bmicalculator(60, 1.7);
alert("your bmi is about " + bmi);
