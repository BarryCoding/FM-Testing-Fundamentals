import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {});

  it('should trigger an alert', async () => {
    render(<AlertButton />);
    const input = screen.getByLabelText('Message');
    const button = screen.getByRole('button', { name: 'Trigger Alert' });
    const spyAlert = vi.spyOn(window, 'alert');

    await userEvent.clear(input);
    await userEvent.type(input, 'hello');
    await userEvent.click(button);

    expect(spyAlert).toHaveBeenCalled();
    expect(spyAlert).toHaveBeenCalledWith('hello');
  });
});
