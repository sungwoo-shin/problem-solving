import noop from "../helper/noop";

/**
 * @example
 * const calcCartWorker = (cart, done) => {
 *  calcCartTotal(cart, (total) => {
 *    updateTotalDom(total);
 *    done(total);
 *  });
 * };
 *
 * const updateTotalQueue = Queue(calcCartWorker);
 */
const Queue = (worker) => {
  const queueItems = [];
  let working = false;

  const runNext = () => {
    if (working || queueItems.length === 0) {
      return;
    }

    working = true;
    const item = queueItems.shift();
    worker(item.data, (val) => {
      working = false;
      setTimeout(item.callback, 0, val);
      runNext();
    });
  };

  return (data, callback) => {
    queueItems.push({
      data,
      callback: callback || noop,
    });
    setTimeout(runNext, 0);
  };
};

export default Queue;
