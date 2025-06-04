const assert = require('assert');
const Calculator = require('../../src/calculator');

describe('Calculator - Positive Tests', function () {
    it('should return 12 for 4 + 8',
        function () {
            assert.equal(Calculator.calculate(4, 8, 'add'), 12);
        })

    it('should return 10 for 12 - 2',
        function () {
            assert.equal(Calculator.calculate(12, 2, 'subtract'), 10);
        })

    it('should return 25 for 5 * 5',
        function () {
            assert.equal(Calculator.calculate(5, 5, 'multiply'), 25);
        })

    it('should return 11 for 55 / 5',
        function () {
            assert.equal(Calculator.calculate(55, 5, 'divide'), 11);
        })

    it('should return 7 for 15 % 8',
        function () {
            assert.equal(Calculator.calculate(15, 8, 'modulo'), 7);
        })

    it('should return 64 for 8 ** 2',
        function () {
            assert.equal(Calculator.calculate(8, 2, 'power'), 64);
        })
})