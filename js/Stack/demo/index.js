"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
/**
 * @description 十进制转二进制
 */
function decimalToBinary(decimal) {
    const stack = new index_1.default();
    let binary = '';
    while (decimal > 0) {
        const el = decimal % 2;
        stack.push(el);
        decimal = Math.floor(decimal / 2);
    }
    while (!stack.isEmpty()) {
        binary += stack.pop();
    }
    return binary;
}
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 19`, decimalToBinary(35));
/**
 * @description 给定一个括号() [] {} 的字符串, 判断字符是否有效. 力扣 - 20
 */
function isValid(str) {
    const stack = new index_1.default();
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case '(':
                stack.push(')');
                break;
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            default:
                let c = str[i];
                console.log(`🚀🚀🚀🚀🚀-> in index.ts on 39`, c);
                if (str[i] !== stack.pop())
                    return false;
        }
    }
    return stack.isEmpty();
}
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 44`,isValid('{}'))
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 44`, isValid('([({})])'));
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 44`,isValid('(}'))
//# sourceMappingURL=index.js.map