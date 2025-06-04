const assert = require('assert');
const Calculator = require('../../src/calculator');

describe('Calculator - Negative Tests', function () {
    it('should throw an error on division by zero',
        function () {
            assert.throws(() => {
                Calculator.calculate(10, 0, 'divide');
            }, /Division by zero/);
        });

    it('should throw an error on unsupported operation',
        function () {
            assert.throws(() => {
                Calculator.calculate(14, 3, 'qwerty');
            }, /Unsupported operation/);
        });

    it('should throw an error when operation is missing',
        function () {
            assert.throws(() => {
                Calculator.calculate(23, 5);
            }, /Unsupported operation/);
        });

    it('should throw an error when only one argument is passed',
        function () {
            assert.throws(() => {
                Calculator.calculate(4);
            });
        });

    it('should throw an error when arguments are not numbers',
        function () {
            assert.throws(() => {
                Calculator.calculate(q, w, 'subtract')
            });
        });
})