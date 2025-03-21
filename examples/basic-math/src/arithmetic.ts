export const add = (a: number | string, b: number | string) => {
  const aNum = Number(a);
  const bNum = Number(b);
  if (isNaN(aNum) || isNaN(bNum)) throw new Error('Invalid input');

  return aNum + bNum;
};

export const subtract = (a: number, b: number) => a - b;

export const multiply = (a: number, b: number) => a * b;

export const divide = (a: number, b: number) => {
  if (b === 0) throw new Error('Cannot divide by 0');
  return a / b;
};
