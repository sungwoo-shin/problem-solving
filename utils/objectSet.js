import withObjectCopy from "./withObjectCopy";

const objectSet = (object, key, value) => {
  return withObjectCopy(object, (copy) => {
    copy[key] = value;
  });
};

export default objectSet;
