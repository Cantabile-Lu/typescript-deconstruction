"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const names = ['1', '2', '3', '4', '5', '6', '7'];
function hotPotato(names, num) {
    const queue = new index_1.default();
    for (const name of names) {
        console.log(`🚀🚀🚀🚀🚀-> in index.ts on 8`, name);
        queue.enqueue(name);
    }
    while (queue.size > 1) {
        for (let i = 0; i < num; i++) {
            const name = queue.dequeue();
        }
    }
}
hotPotato(names, 4);
//# sourceMappingURL=index.js.map