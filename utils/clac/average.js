import { add } from "./add.js";

export const average = (numbers) => numbers.reduce(add, 0) / numbers.length;
