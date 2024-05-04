import {HeapType} from "./type";


class Heap<T> implements HeapType<T>{
    data: T[] = [];
    protected isMaxHeap: boolean = true;
    protected length: number = 0;

    constructor({data = [], isMaxHeap = true}: {data?: T[], isMaxHeap?: boolean} = {}){
        this.isMaxHeap = isMaxHeap;
        if(data.length){
         this.buildHeap(data);
        }
    }
    private compare(i: number, j: number): boolean{
        if(this.isMaxHeap){
            return this.data[i] >= this.data[j]
        }else{
            return this.data[i] <= this.data[j];
        }
    }
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
     * @description 上滤操作 - 最大堆
     */
    private heapify_up(){
        let index = this.length - 1;
        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2);
            if(this.compare(parentIndex, index)){
                break;
            }
            // 交换
            this.swap(index, parentIndex)
            // 索引切换
            index = parentIndex
        }
    }

    /**
     * @description 最小堆
     */
    private heapify_down(start: number = 0){
        let index = start;
        while(2 * index + 1 <= this.length - 1){
            let leftChildrenIndex = 2 * index + 1;
            let rightChildrenIndex = 2 * index + 2; // 可能为空
            // 3: 获取节点中较大的值
            let largesIndex = leftChildrenIndex;
            if(rightChildrenIndex < this.length && this.compare(rightChildrenIndex, leftChildrenIndex)){
                largesIndex = rightChildrenIndex;
            }
            // 4: 比较较大的值和index比较
            if(this.compare(index, largesIndex)){
                break;
            }
            //5: 交互位置
            this.swap(index, largesIndex);
            index = largesIndex;
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
        this.heapify_down()
        return maxValue;
    }
    peek(): T | undefined {
        return this.data[0];
    }

    /**
     * @description 数组 -> 堆数据
     * 在原有数组上进行操作, 不占用额外空间
     */
    buildHeap(arr: T[]){
        this.data = arr;
        this.length = arr.length;
        // 1: 从非叶子节点开始下滤操作
        const start = Math.floor((this.length - 1) / 2);
        for(let i = start; i >= 0; i--){
            this.heapify_down(i);
        }
    }
}

const arr = [19,100,36,17,3,25,1,2,7]
const heap = new Heap<number>({isMaxHeap: false});

heap.buildHeap(arr)
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 119`,heap.data, arr)
// arr.forEach(item => {
//     heap.insert(item);
// })
//
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 66`,heap.data)
heap.extract()
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 66`,heap.data)

export default {}
