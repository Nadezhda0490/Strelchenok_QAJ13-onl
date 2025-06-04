class Calculator {
    static operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => {
            if (b === 0) throw new Error('Division by zero');
            return a / b;
        },
        modulo: (a, b) => a % b,
        power: (a, b) => a ** b
    };

    static calculate(a, b, operation) {
        const opFunc = this.operations[operation];
        if (!opFunc) throw new Error('Unsupported operation');
        return opFunc(a, b);
    }
}
console.log(Calculator.calculate(4, 8, 'add'));
console.log(Calculator.calculate(12, 2, 'subtract'));
console.log(Calculator.calculate(5, 5, 'multiply'));
console.log(Calculator.calculate(55, 5, 'divide'));
console.log(Calculator.calculate(15, 8, 'modulo'));
console.log(Calculator.calculate(8, 2, 'power'));

module.exports = Calculator;