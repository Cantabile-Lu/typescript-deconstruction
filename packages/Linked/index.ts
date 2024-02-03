/**
 * @description 链表结构
 */
class Node<T>{
    value: T;
    next: Node<T> | null = null;
    constructor(value: T){
        this.value = value
    }
}

/**
 * @description linked 链表的实现
 */
class Linked<T> {
    private head: Node<T> | null = null;
    private size: number = 0;
    // 获取长度
    get length(): number {
        return this.size
    }
    /**
     * @description 添加节点
     * 1: 链表是否为空
     * 2: 链表不为空
     */
    append(value: T){
        const node = new Node(value);
        if(!this.head) {
            this.head = node
        }else{
            let current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size ++
    }

}

export default Node
