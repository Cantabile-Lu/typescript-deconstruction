
export interface HeapType<T> {
    insert(value: T): void;
    extract(): T | undefined;
    peek(): T | undefined;
    get size(): number;
    get isEmpty(): boolean;
    buildHeap(arr: T[]):void
}
