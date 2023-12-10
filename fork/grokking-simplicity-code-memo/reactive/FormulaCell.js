import ValueCell from "./ValueCell";

const FormulaCell = (upstreamCell, f) => {
  const myCell = ValueCell(f(upstreamCell.val()));
  upstreamCell.addWatcher((newUpstreamValue) => {
    myCell.update(() => f(newUpstreamValue));
  });

  return {
    val: myCell.val,
    addWatcher: myCell.addWatcher,
  };
};

export default FormulaCell;
