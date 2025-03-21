import { describe, it, expect, beforeEach } from 'vitest';
import { createButton } from './button';

describe('createButton', () => {
  let button: HTMLButtonElement;

  beforeEach(() => {
    button = createButton();
  });

  it('should create a button element', () => {
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  it('should have the text "Click Me"', () => {
    expect(button.textContent).toBe('Click Me');
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    button.click();
    expect(button.textContent).toBe('Clicked!');
  });
});
