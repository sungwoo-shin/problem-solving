// import reduce from "./reduce";

const map = (array, f) => {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(f(element));
  });
};

// const map = (array, f) => {
//   return reduce(array, [], (ret, item) => {
//     ret.push(f(item));

//     return ret;
//   });
// };

export default map;
