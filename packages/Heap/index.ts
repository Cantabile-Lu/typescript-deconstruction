import {HeapType} from "./type";


class Heap<T> implements HeapType<T>{
    private data: T[] = [];
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
    insert(value: T){}

    extract(): T | undefined {
        return undefined
    }
    peek(): T | undefined {
        return this.data[0];
    }
    buildHeap(arr: T[]){

    }
}
export default {}
