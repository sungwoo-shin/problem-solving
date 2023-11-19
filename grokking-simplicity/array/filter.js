// import reduce from "./reduce";

const filter = (array, f) => {
  const newArray = [];
  array.forEach((element) => {
    if (f(element)) {
      newArray.push(element);
    }
  });

  return newArray;
};

// const filter = (array, f) => {
//   return reduce(array, [], (ret, item) => {
//     if (f(item)) {
//       ret.push(item);
//     }

//     return ret;
//   });
// };

export default filter;
