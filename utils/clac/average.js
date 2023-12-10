import { plus } from "./plus";

export const average = (numbers) => numbers.reduce(plus, 0) / numbers.length;
