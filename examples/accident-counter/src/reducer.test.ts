import { reducer } from './reducer';
import { describe, it, expect } from 'vitest';

describe('reducer', () => {
  it('should return the initial state', () => {
    const initialState = { count: 0 };

    expect(reducer(initialState, { type: 'init' })).toEqual(initialState);
  });

  it('should handle decrement action', () => {
    const initialState = { count: 0 };
    const action = { type: 'increment' } as const;
    const expectedState = { count: 1 };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle increment action', () => {
    const initialState = { count: 1 };
    const action = { type: 'decrement' } as const;
    const expectedState = { count: 0 };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle unknown action', () => {
    const initialState = { count: 0 };
    const action = { type: 'UNKNOWN' } as const;

    expect(reducer(initialState, action)).toEqual(initialState);
  });
});
