import plus from "./plus";

const average = (numbers) => {
  return numbers.reduce(plus, 0) / numbers.length;
};

export default average;
