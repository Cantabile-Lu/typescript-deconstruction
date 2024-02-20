/**
 * @description 算法复杂度分析
 */

/**
 * @description 顺序查找
 */
const mockArray = Array(1000000).fill(0).map((_, index) => index)
function sequent(array: number[], target: number){
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if(item === target){
            return i
        }
    }
    return -1
}
// const sequentResult = sequent(mockArray, 999)
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 14`,sequentResult)

/**
 * @description 二分查找
 */
function binary(array: number[], target: number){
    let left = 0;
    let right = array.length - 1;
    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        console.count('binary-while')
        const middleTarget = array[middle];
        if(middleTarget === target){
            return middle
        }else if(middleTarget < target){
            left = middle + 1;
        }else{
            right = middle - 1;
        }
    }
    return -1
}
const binaryResult = binary(mockArray, 0)
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 14`,binaryResult)
