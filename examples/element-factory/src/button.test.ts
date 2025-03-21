import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createButton } from './button';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

describe('createButton', () => {
  let button: HTMLButtonElement;

  beforeEach(() => {
    button = createButton();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should create a button element', () => {
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  it('should create a button on the screen', () => {
    document.body.appendChild(button);
    const buttonInScreen = screen.getByRole('button', { name: 'Click Me' });
    expect(buttonInScreen).toBeTruthy();
  });

  it('should have the text "Click Me"', () => {
    expect(button.textContent).toBe('Click Me');
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    button.click();
    expect(button.textContent).toBe('Clicked!');
  });

  it('should change the text to "Clicked!" when a user clicked', async () => {
    document.body.appendChild(button);
    const buttonInScreen = screen.getByRole('button', { name: 'Click Me' });
    await userEvent.click(buttonInScreen);
    expect(button.textContent).toBe('Clicked!');
  });
});
