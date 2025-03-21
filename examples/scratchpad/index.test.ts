import { test, expect } from 'vitest';

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
