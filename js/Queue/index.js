"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description 基于数组的队列
 */
class Queue {
    data = [];
    enqueue(el) {
        this.data.push(el);
    }
    dequeue() {
        return this.data.shift();
    }
    peek() {
        return this.data[0];
    }
    get isEmpty() {
        return this.data.length === 0;
    }
    get size() {
        return this.data.length;
    }
}
exports.default = Queue;
//# sourceMappingURL=index.js.map