import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

// todo will not trigger test
describe.todo('multiply', () => {});

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('should add two strings number', () => {
    expect(add('1', '2')).toBe(3);
  });
  it('should throw an error if the input is not a number', () => {
    expect(() => add('1', 'whatever')).toThrow('Invalid input');
    expect(() => add('what', 0)).toThrow('Invalid input');
  });
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(1, 2)).toBe(-1);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(1, 2)).toBe(2);
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(1, 2)).toBe(0.5);
  });

  it('should throw an error if the denominator is 0', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by 0');
  });
});
