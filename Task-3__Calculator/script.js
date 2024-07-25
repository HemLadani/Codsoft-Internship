const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operation = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentNumber = '';
      previousNumber = '';
      operation = '';
      display.value = '';
    } else if (value === '&lt;') {
      currentNumber = currentNumber.slice(0, -1);
      display.value = currentNumber;
    } else if (value === '=') {
      calculate();
    } else if (['+', '-', '*', '/'].includes(value)) {
      operation = value;
      previousNumber = currentNumber;
      currentNumber = '';
      display.value = '';
    } else {
      currentNumber += value;
      display.value = currentNumber;
    }
  });
});

function calculate() {
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  let result;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 0;
  }

  display.value = result.toString();
  currentNumber = result.toString();
  previousNumber = '';
  operation = '';
}