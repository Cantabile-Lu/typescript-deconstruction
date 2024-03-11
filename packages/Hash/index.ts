/**
 * @description hash 表
 * @date: 2024-03-08 to 02:06
 */
import {hashFunction} from "./hashFunction";

class HashTable<T> {
    // 创建数组, 用来存放链地址法中的链 / 数组
    private storage: [string, T][][]  = []
    // 定义数组的长度
    private length = 7;
    // 记录数组已经存放的元素个数
    private count = 0;

    private  getIndex(key: string, max: number){
        let hashCode = 0;
        const length = key.length;
        for (let i = 0; i < length; i++) {
            // 霍乱法则计算
            hashCode = max * hashCode + key.charCodeAt(i)
        }
        return hashCode % max
    }
    /**
     * @description  根据key 查询数据, 如果有数据则是插入操作 ,反之就是修改操作
     */
    put(key: string, value: T){
        //1: 根据key获取数组中的索引值
        const index = this.getIndex(key, this.length)
        console.log(`🚀🚀🚀🚀🚀-> in index.ts on 30`,index,key)
        //2: 取出索引值对应的值
        let bucket = this.storage[index]
        //3: 判断是否有值
        if(!bucket){
            bucket = []
            this.storage[index] = bucket
        }
        let isUpdate = false;
        // 4: 确定已经有一个数组, 但是数组中是否已经存在key?
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i]
            const tupleKey = tuple[0]
            // console.log(`🚀🚀🚀🚀🚀-> in index.ts on 42`,tuple, tupleKey)
            if(tupleKey === key){
                // 覆盖操作
                tuple[1] = value
                isUpdate = true
            }
        }
        // 5: 如果for循环没有覆盖, 那么则代表是添加操作
        if(!isUpdate){
           bucket.push([key, value])
            this.count ++
        }
    }

    /**
     * @description 获取值
     */
    get(key: string): T | undefined {
        // 1: 根据key获取索引值index
        const index = this.getIndex(key, this.length)
        // 2: 获取桶数据
        const bucket = this.storage[index]
        if(!bucket) return undefined;

        // 3: 遍历
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i]
            const tupleKey = tuple[0]
            if(tupleKey === key){
                return tuple[1]
            }
        }
        return undefined
    }
}


const hashTable = new HashTable()
hashTable.put('aaa', 100)
hashTable.put('aaa', 200)
hashTable.put('aba', 300)
const result = hashTable.get('abc')
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 86`,result)
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 45`,hashTable)
export default HashTable
