import {expect, it, describe, vi, test, assert} from 'vitest'
import { sum } from './index'


describe('sum', () => {
    it('调用sum函数参数为2 得到3 ', () => {
        expect(sum(2)).not.toBe(4)
    })
    it('调用sum函数参数为3 得到4 ', () => {
        expect(sum(3)).toBe(4)
    })

    it('调用sum函数参数为undefined 得到undefined ', () => {
        expect(sum()).toBe(undefined)
    })

    it('测试快照', () => {
        let result = sum(5)
        expect(result).toMatchInlineSnapshot(`6`)
    })

    const IntersectionObserverMock = vi.fn(() => ({
        disconnect: vi.fn(),
        observe: vi.fn(),
        takeRecords: vi.fn(),
        unobserve: vi.fn(),
        mock: vi.fn(),
    }))

    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
    it('模拟全局对象', () => {
        const window =   IntersectionObserverMock()
        window.mock()
    })

    it.skip('跳过测试不删代码', () => {
        assert.equal(Math.sqrt(4), 3)
    })

    it('跳过测试不删代码', (context) => {
        assert.equal(Math.sqrt(4), 2)
        context.skip()
        assert.equal(Math.sqrt(4), 3)
    })
    it.only('忽略其他只有这个测试用列能执行', () => {
        assert.equal(Math.sqrt(4), 2)
    })
})

describe('断言失败', () => {
    it.fails('断言失败', () => {
        expect(1).toBe(2)
    })

})
// 测试上下文
const todos:number[] = []
const archive: number[] = []

const myTest = test.extend({
    todos: [1],
    archive,
})
describe('测试上下文', () => {

    myTest('测试上下文', ({todos,archive}) => {
        expect((todos as number[]).length).toBe(1)
    })
})



