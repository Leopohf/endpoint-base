import { MathFunctions } from '../../src/math/functions';

describe('MathFunctions', () => {

    it('should add two numbers', () => {
        expect(MathFunctions.add(1, 2)).toBe(3);
    });

    it('should subtract two numbers', () => {
        expect(MathFunctions.subtract(2, 1)).toBe(1);
    });

    it('should multiply two numbers', () => {
        expect(MathFunctions.multiply(2, 1)).toBe(2);
    });

    it('should divide two numbers', () => {
        expect(MathFunctions.divide(2, 1)).toBe(2);
    });

    it('should return the remainder of two numbers', () => {
        expect(MathFunctions.remainder(2, 1)).toBe(0);
    });

});