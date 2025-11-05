function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}

function operate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: throw new Error("Invalid operator");
    }
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let currentInput = "";

const numbersButton = document.querySelectorAll(".numbers");
const operatorsButton = document.querySelectorAll(".operators");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const displayArea = document.querySelector(".display-area");

numbersButton.forEach((button) => {
    button.addEventListener("click", (b) => {
        currentInput += b.target.textContent;
        console.log(currentInput);
        displayArea.textContent = currentInput;
    });
});

operatorsButton.forEach((opBtn) => {
    opBtn.addEventListener("click", (op) => {
        const selectedOperatorSymbol = op.target.textContent;

        if (firstNumber === "") {
            firstNumber = currentInput;
            operator = selectedOperatorSymbol;
            currentInput = "";
        } else if (operator && currentInput) {
            secondNumber = currentInput;
            const result = operate(firstNumber, secondNumber, operator);
            displayArea.textContent = result;

            firstNumber = result;
            operator = selectedOperatorSymbol;
            currentInput = "";
        } else {
            operator = selectedOperatorSymbol;
        }
    });
});

equalsButton.addEventListener("click", () => {
    secondNumber = currentInput;

    if (firstNumber && secondNumber && operator) {
        const result = operate(firstNumber, secondNumber, operator);
        displayArea.textContent = result;
        firstNumber = result;
        secondNumber = "";
        operator = "";
        currentInput = "";
    }
});

clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    currentInput = "";
    displayArea.textContent = "0";
});
