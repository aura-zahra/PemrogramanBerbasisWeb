const calculator = (...args) => {
    const [num1, num2, operator] = args;

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return 'Operator tidak valid';
    }
};

const calculate = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    const result = calculator(num1, num2, operator);
    document.getElementById('result').innerText = result;
};