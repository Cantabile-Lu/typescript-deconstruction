"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description 栈  --- 基于数组的栈结构
 * 先进先出
 */
class Stack {
    data = [];
    // 入栈 添加新元素到栈顶
    push(el) {
        this.data.push(el);
    }
    // 出栈 - 移除栈顶元素, 同时返回当前元素
    pop() {
        return this.data.pop();
    }
    // 返回栈顶元素, 不对栈进行修改
    peek() {
        return this.data[this.data.length - 1];
    }
    // 是否为空,  返回布尔值
    isEmpty() {
        return this.data.length === 0;
    }
    // 返回栈的长度
    size() {
        return this.data.length;
    }
}
const stack = new Stack();
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 34`, stack);
exports.default = Stack;
//# sourceMappingURL=index.js.map