export interface LinedType<T> {
    append(value: T): void
    insert(value: T, position: number): void
    removeAt( position: number): T | null
    get(position: number): T | null
    update(value: T, position: number): boolean
    indexOf(value: T): number
    remove(value: T): T | null
    isEmpty(): boolean
    traversal(): void
    get length(): number
}
