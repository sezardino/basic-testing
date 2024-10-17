// Uncomment the code below and write your tests
import { Action, simpleCalculator } from './index';

const a = 10;
const b = 2;

describe('simpleCalculator tests', () => {
  const testCases = [
    {
      a,
      b,
      action: Action.Add,
      expected: 12,
      description: 'should add two numbers',
    },
    {
      a,
      b,
      action: Action.Subtract,
      expected: 8,
      description: 'should subtract two numbers',
    },
    {
      a,
      b,
      action: Action.Multiply,
      expected: 20,
      description: 'should multiply two numbers',
    },
    {
      a,
      b,
      action: Action.Divide,
      expected: 5,
      description: 'should divide two numbers',
    },
    {
      a,
      b,
      action: Action.Exponentiate,
      expected: 100,
      description: 'should exponentiate two numbers',
    },
    {
      a,
      b,
      action: '',
      expected: null,
      description: 'should return null for invalid action',
    },
    {
      a: '10',
      b,
      action: Action.Divide,
      expected: null,
      description: 'should return null for invalid argument (a is string)',
    },
    {
      a: null,
      b,
      action: Action.Divide,
      expected: null,
      description: 'should return null for invalid argument (a is null)',
    },
    {
      a: undefined,
      b,
      action: Action.Divide,
      expected: null,
      description: 'should return null for invalid argument (a is undefined)',
    },
    {
      a,
      b: '2',
      action: Action.Divide,
      expected: null,
      description: 'should return null for invalid argument (b is string)',
    },
    {
      a,
      b: null,
      action: Action.Divide,
      expected: null,
      description: 'should return null for invalid argument (b is null)',
    },
    {
      a,
      b: undefined,
      action: Action.Divide,
      expected: null,
      description: 'should return null for invalid argument (b is undefined)',
    },
  ];

  test.each(testCases)('$description', ({ a, b, action, expected }) => {
    const result = simpleCalculator({ a, b, action });
    expect(result).toBe(expected);
  });
});
