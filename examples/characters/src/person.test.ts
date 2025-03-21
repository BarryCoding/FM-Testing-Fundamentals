import { describe, it, expect } from 'vitest';
import { Person } from './person';

describe('Person', () => {
  it('should create a person with a first name and last name', () => {
    // the id of the person is a random string that starts with 'person-'
    const person = new Person('Grace', 'Hopper');

    expect(person).toEqual({
      id: expect.stringContaining('person-'), // ignore the random part of the id
      firstName: 'Grace',
      lastName: 'Hopper',
    });
  });
});
