import { act, render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  it('renders with an initial count of 0', () => {
    render(<Counter initialCount={0} />);

    expect(screen.getByTestId('counter-count')).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    render(<Counter initialCount={0} />);

    expect(screen.getByRole('button', { name: 'Decrement' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    render(<Counter initialCount={0} />);

    expect(screen.getByTestId('counter-count')).toHaveTextContent('0');
    expect(screen.getByTestId('counter-unit')).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    render(<Counter initialCount={0} />);
    const user = userEvent.setup();
    // act is used to wait for the next tick of the event loop
    await act(async () => {
      await user.click(screen.getByRole('button', { name: 'Increment' }));
    });

    expect(screen.getByTestId('counter-count')).toHaveTextContent('1');
  });

  it('displays "day" when the count is 1', async () => {
    render(<Counter initialCount={0} />);
    const user = userEvent.setup();
    await act(async () => {
      await user.click(screen.getByRole('button', { name: 'Increment' }));
    });

    expect(screen.getByTestId('counter-count')).toHaveTextContent('1');
    expect(screen.getByTestId('counter-unit')).toHaveTextContent('day');
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    render(<Counter initialCount={5} />);
    const user = userEvent.setup();
    await act(async () => {
      await user.click(screen.getByRole('button', { name: 'Decrement' }));
    });

    expect(screen.getByTestId('counter-count')).toHaveTextContent('4');
  });

  it('does not allow decrementing below 0', async () => {
    render(<Counter initialCount={0} />);
    const user = userEvent.setup();
    await act(async () => {
      await user.click(screen.getByRole('button', { name: 'Decrement' }));
    });

    expect(screen.getByTestId('counter-count')).toHaveTextContent('0');
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    render(<Counter initialCount={5} />);
    const user = userEvent.setup();
    await act(async () => {
      await user.click(screen.getByRole('button', { name: 'Reset' }));
    });

    expect(screen.getByTestId('counter-count')).toHaveTextContent('0');
  });

  it('updates the document title based on the count', async () => {
    // REFACTOR: scope the test to the Counter component
    const { getByRole } = render(<Counter initialCount={1} />);
    const user = userEvent.setup();
    await act(async () => {
      await user.click(getByRole('button', { name: 'Increment' }));
    });

    expect(document.title).toContain('2');
  });
});

// be specific about each test
// do not try to be clever about using beforeEach
