import { expect, it,describe } from 'vitest'
import Linked from "../linked";

describe('linked', () => {
    const linked = new Linked<string>()
    it('should be empty', () => {
        linked.append('1')
    })
    it('should be not empty', () => {
        expect(linked.length === 1)
    });

    it.todo('这里是跳过的条目', () => {
        console.log(`🚀🚀🚀🚀🚀-> in linked.test.ts on 21`,)
    })

})
