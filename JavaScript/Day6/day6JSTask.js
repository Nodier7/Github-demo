const expression = document.getElementById("expression");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const value = e.target.innerText;

    if (value === "C") {
      expression.value = "";
    } else if (value === "=") {
      expression.value = eval(expression.value);
    } else {
      expression.value += value;
    }
  });
});