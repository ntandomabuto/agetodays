let ageInput = document.getElementById("age");
let result = document.getElementById("result");

let Btn = document.getElementById("convert");
Btn.addEventListener("click", function() {
  let age = ageInput.value;
  let days = age * 365;
  result.textContent = `${age} year(s) is  ${days} days.`;
});