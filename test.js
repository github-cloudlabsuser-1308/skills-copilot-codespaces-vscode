document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = null;
                display.textContent = '0';
                return;
            }

            if (value === '=') {
                if (firstOperand !== null && operator !== '' && currentInput !== '') {
                    const secondOperand = parseFloat(currentInput);
                    let result;
                    switch (operator) {
                        case '+':
                            result = firstOperand + secondOperand;
                            break;
                        case '-':
                            result = firstOperand - secondOperand;
                            break;
                        case '*':
                            result = firstOperand * secondOperand;
                            break;
                        case '/':
                            result = firstOperand / secondOperand;
                            break;
                    }
                    display.textContent = result;
                    currentInput = result.toString();
                    operator = '';
                    firstOperand = null;
                }
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
                return;
            }

            currentInput += value;
            display.textContent = currentInput;
        });
    });
});