// CALCULATOR PROGRAM

const display = document.getElementById("display");
const deleteButton = document.getElementById("deleteButton");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

display.value = "";

deleteButton.addEventListener("click", function () {
  display.value = display.value.slice(0, -1);
});
