class Queue {
  constructor() {
    this.items = {};
    this.headIdx = 0;
    this.tailIdx = 0;
  }

  enqueue(item) {
    this.items[this.tailIdx] = item;
    this.tailIdx += 1;
  }

  dequeue() {
    const headItem = this.items[this.headIdx];
    delete this.items[this.headIdx];
    this.headIdx += 1;

    return headItem;
  }

  peek() {
    return this.items[this.headIdx];
  }

  getLength() {
    return this.tailIdx - this.headIdx;
  }
}

module.exports = Queue;
