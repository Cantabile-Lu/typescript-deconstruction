/**
 * @description hashFunction 将key映射成index的索引
 *
 * 1: 计算hash code
 */
const PRIME_NUMBER  = 31
export function hashFunction(key:string , max: number){
    let hashCode = 0;
    const length = key.length;
    for (let i = 0; i < length; i++) {
        // 霍乱法则计算
        hashCode = PRIME_NUMBER * hashCode + key.charCodeAt(i)
    }
    return hashCode % max
}

// 扩容: 1 / 7
console.log(`🚀🚀🚀🚀🚀->`,hashFunction('cats', 7))
