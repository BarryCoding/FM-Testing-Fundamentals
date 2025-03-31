import { test, expect, vi } from 'vitest';

test('a super simple test', () => {
  expect(true).toBe(true);
});

test('a bad example: a empty test should fail, but it will pass', () => {});

// test('a error test', () => {
//   throw new Error('This is a test error');
// });

test('a bad example: a timeout test should fail, but it will pass', () => {
  setTimeout(() => {
    expect(true).toBe(false);
  }, 1000);
});

// Summary: A test that passes does not mean it is a good test.

const logSpy = vi.spyOn(console, 'log');

test('a spy on console log', () => {
  console.log('hello world');

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith('hello world');
  expect(logSpy).toHaveBeenCalledOnce();
  expect(logSpy).toHaveBeenCalledTimes(1);
});

test('a mock function', () => {
  const mockFn = vi.fn();
  mockFn('hello');

  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith('hello');
  expect(mockFn).toHaveBeenCalledOnce();
  expect(mockFn).toHaveBeenCalledTimes(1);
});

// control Math.random()
const spyRandom = vi.spyOn(Math, 'random').mockImplementation(() => 0.5);

test('a spy on Math.random to be 0.5 (always)', () => {
  const rand = Math.random();
  expect(rand).toBe(0.5);
});
