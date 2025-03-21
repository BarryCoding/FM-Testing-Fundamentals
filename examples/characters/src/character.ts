import { Person } from './person';
import { rollDice } from './roll-dice';

export class Character extends Person {
  level = 1; // starts at level 1

  createdAt: Date;
  lastModified: Date;

  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  constitution: number;
  constructor(
    public firstName: string,
    public lastName: string,
    public role: string
  ) {
    super(firstName, lastName);

    this.role = role;

    this.createdAt = new Date();
    this.lastModified = this.createdAt;

    this.strength = rollDice(4, 6);
    this.dexterity = rollDice(4, 6);
    this.intelligence = rollDice(4, 6);
    this.wisdom = rollDice(4, 6);
    this.charisma = rollDice(4, 6);
    this.constitution = rollDice(4, 6);
  }

  levelUp() {
    this.level++;
    this.lastModified = new Date();
  }
}
