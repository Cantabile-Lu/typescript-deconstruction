/**
 * @description 公共类
 */

const names = ['a','b', 'c', 'd', 'e'] as const

type nameType = typeof  names[number]
