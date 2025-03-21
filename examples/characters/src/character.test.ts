import { describe, it, expect, beforeEach } from 'vitest';
import { Character } from './character';
import { Person } from './person';

const firstName = 'Grace';
const lastName = 'Hopper';
const role = 'Wizard';

describe('Character', () => {
  let character: Character;
  beforeEach(() => {
    character = new Character(firstName, lastName, role);
  });

  it('should create a character with a first name, last name, and role', () => {
    expect(character).toEqual(expect.objectContaining({ firstName, lastName, role }));
  });

  it('should create a character with all valid properties', () => {
    expect(character).toEqual({
      id: expect.stringContaining('person-'),
      firstName,
      lastName,
      role,
      level: 1,
      createdAt: expect.any(Date),
      lastModified: expect.any(Date),
      strength: expect.any(Number),
      intelligence: expect.any(Number),
      wisdom: expect.any(Number),
      dexterity: expect.any(Number),
      constitution: expect.any(Number),
      charisma: expect.any(Number),
    });
  });

  it('should allow you to increase the level', () => {
    const beforeLevelUp = character.level;

    character.levelUp();

    expect(character.level).toBeGreaterThan(beforeLevelUp);
  });

  it('should update the last modified date when leveling up', async () => {
    const beforeLastModified = character.lastModified;

    character.levelUp();

    expect(character.lastModified).not.toBe(beforeLastModified);
  });

  it('should inherit from Person', () => {
    expect(character).toBeInstanceOf(Person);
  });
});
