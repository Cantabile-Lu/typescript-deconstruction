import { expect, it,describe } from 'vitest'
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
})



