

export interface QueueType<T> {
    enqueue(element: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    get isEmpty(): boolean;
    get size(): number
}
