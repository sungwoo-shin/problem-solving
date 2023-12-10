export const add = (a, b) => a + b;

export const average = (numbers) => numbers.reduce(add, 0) / numbers.length;
