import withObjectCopy from "./withObjectCopy";

const objectDelete = (object, key) =>
  withObjectCopy(object, (copy) => {
    delete copy[key];
  });

export default objectDelete;
