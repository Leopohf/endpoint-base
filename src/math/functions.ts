
class MathFunctions {

    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }

    static divide(a: number, b: number): number {
        return a / b;
    }

    static modulo(a: number, b: number): number {
        return a % b;
    }

    static power(a: number, b: number): number {
        return a ** b;
    }

    static factorial(a: number): number {
        let result = 1;
        for (let i = 1; i <= a; i++) {
            result *= i;
        }
        return result;
    }

    static fibonacci(a: number): number {
        if (a <= 1) {
            return a;
        }
        return MathFunctions.fibonacci(a - 1) + MathFunctions.fibonacci(a - 2);
    }

}

export {
    MathFunctions
};