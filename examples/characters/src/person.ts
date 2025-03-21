import { v4 as id } from 'uuid';

export class Person {
  id: string;
  constructor(
    public firstName: string,
    public lastName: string
  ) {
    if (!firstName || !lastName) {
      throw new Error('First name and last name are required');
    }

    this.id = 'person-' + id();
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
