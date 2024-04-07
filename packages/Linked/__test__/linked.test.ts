import { expect, it,describe } from 'vitest'
import Linked from "../linked";

describe('linked', () => {
    const linked = new Linked<string>()
    it('should be empty', () => {
        linked.append('1')
    })


})
