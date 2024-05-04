import {HeapType} from "./type";


class Heap<T> implements HeapType<T>{
    data: T[] = [];
    protected length: number = 0;

    private  swap(i: number, j: number){
        // 1
        // [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
        // 2:
        const temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    }
    get size(): number{
        return  this.length;
    }

    get isEmpty(): boolean{
        return this.length === 0;
    }

    /**
     * @description 插入元素, 实现最大堆
     */
    insert(value: T){
        // 1: 将新元素添加到数组末尾
        this.data.push(value);
        this.length++;

        // 2: 将插入的新元素进行上滤操作
      this.heapify_up()
    }

    /**
     * @description 上滤操作
     */
    heapify_up(){
        let index = this.length - 1;
        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2);
            if(this.data[index] <= this.data[parentIndex]){
                break;
            }
            // 交换
            this.swap(index, parentIndex)
            // 索引切换
            index = parentIndex
        }
    }

    /**
     * @description 删除
     */
    extract(): T | undefined {
        // 如果元素只有一个或者0个
        if(this.length === 0){
            return undefined;
        }
        if(this.length === 1){
            this.length --
            return this.data.pop();
        }

        // 1: 提取需要返回的最大值
        const maxValue = this.data[0];
        const minValue = this.data.pop()!;
        this.data[0] = minValue;
        this.length --;
        // 2: 获取左右子节点
        let index = 0;
        while(2 * index + 1 <= this.length - 1){
            let leftChildrenIndex = 2 * index + 1;
            let rightChildrenIndex = 2 * index + 2; // 可能为空
            // 3: 获取节点中较大的值
            let largesIndex = leftChildrenIndex;
            if(rightChildrenIndex < this.length && this.data[rightChildrenIndex] > this.data[leftChildrenIndex]){
                largesIndex = rightChildrenIndex;
            }
            // 4: 比较较大的值和index比较
            if(this.data[index] >= this.data[largesIndex]){
                return maxValue;
            }
            //5: 交互位置
            this.swap(index, largesIndex);
            index = largesIndex;
        }
        return maxValue;
    }
    peek(): T | undefined {
        return this.data[0];
    }
    buildHeap(arr: T[]){

    }
}

const heap = new Heap<number>();
const arr = [19,100,36,17,3,25,1,2,7]
arr.forEach(item => {
    heap.insert(item);
})

console.log(`🚀🚀🚀🚀🚀-> in index.ts on 66`,heap.data)
heap.extract()
heap.extract()
heap.extract()
heap.extract()
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 66`,heap.data)

export default {}
