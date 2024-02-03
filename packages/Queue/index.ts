import {QueueType} from "./type";

/**
 * @description 基于数组的队列
 */
class Queue<T> implements  QueueType<T> {
    private  data: T[] = [];
    enqueue(el: T){
        this.data.push(el);
    }
    dequeue(): T | undefined {
        return this.data.shift()
    }
    peek(): T | undefined {
        return this.data[0]
    }
    get isEmpty(){
        return this.data.length === 0
    }
    get size(){
        return this.data.length
    }
}
export default Queue
