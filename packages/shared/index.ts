/**
 * @description 是否是质数
 * 只能被1和num整除
 */
export function isPrime(num: number): boolean{
    const sqrt = Math.sqrt(num) // 使用平方根进行优化
    // for (let i = 2; i < num; i++) {
    for (let i = 2; i <= sqrt; i++) {
        if(num % i === 0){
            return false
        }
    }
    return true
}

