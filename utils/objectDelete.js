import withObjectCopy from "./withObjectCopy";

const objectDelete = (object, key) => {
  return withObjectCopy(object, (copy) => {
    delete copy[key];
  });
};

export default objectDelete;
