const ValueCell = (initialValue) => {
  let currentValue = initialValue;
  const watchers = [];

  return {
    val: () => currentValue,
    update: (f) => {
      const oldValue = currentValue;
      const newValue = f(oldValue);
      if (oldValue !== newValue) {
        currentValue = newValue;
        watchers.forEach((watcher) => watcher(newValue));
      }
    },
    addWatcher: (f) => watchers.push(f),
  };
};

export default ValueCell;
