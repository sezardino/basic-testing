import { Action, simpleCalculator } from './index';

const a = 10;
const b = 2;

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a, b, action: Action.Add });
    expect(result).toBe(12);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a, b, action: Action.Subtract });
    expect(result).toBe(8);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a, b, action: Action.Multiply });
    expect(result).toBe(20);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a, b, action: Action.Divide });
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({ a, b, action: Action.Exponentiate });
    expect(result).toBe(100);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a, b, action: '' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const resultAString = simpleCalculator({
      a: a.toString(),
      b,
      action: Action.Divide,
    });
    expect(resultAString).toBeNull();
    const resultANull = simpleCalculator({
      a: null,
      b,
      action: Action.Divide,
    });
    expect(resultANull).toBeNull();
    const resultAUndefined = simpleCalculator({
      a: undefined,
      b,
      action: Action.Divide,
    });
    expect(resultAUndefined).toBeNull();

    const resultBString = simpleCalculator({
      b: b.toString(),
      a,
      action: Action.Divide,
    });
    expect(resultBString).toBeNull();
    const resultBNull = simpleCalculator({
      b: null,
      a,
      action: Action.Divide,
    });
    expect(resultBNull).toBeNull();
    const resultBUndefined = simpleCalculator({
      b: undefined,
      a,
      action: Action.Divide,
    });
    expect(resultBUndefined).toBeNull();
  });
});
