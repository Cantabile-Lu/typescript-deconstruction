import {LinedType} from "./type";

/**
 * @description 链表结构  2.02
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
class Linked<T> implements LinedType<T> {
    // 链表的头部节点
    protected head: Node<T> | null = null;
    // 链表的尾部节点
    protected tail: Node<T> | null = null;
    protected size: number = 0;
    // 获取长度
    get length(): number {
        return this.size
    }
    /**
     * @description 根据position 获取到节点
     */
     getNode(position: number): Node<T> | null {
        let index = 0;
        let current = this.head
        while(index++ < position){
            if(current !== null){
                current = current.next
            }
        }
        return current
    }
    /**
     * @description 添加节点
     * 1: 链表是否为空
     * 2: 链表不为空
     */
    append(value: T){
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
        }else{
            this.tail!.next = node
        }
        this.tail = node;
        this.size ++;
    }

    /**
     * @description 插入节点
     * 1: 插入位置是否合理
     *   合理: 插入节点
     *   8
     *   不合理: 返回false
     * 2: 插入位置
     */

    insert(value: T, position: number){
        if(position < 0 || position > this.size) return false;

        const node = new Node(value);
        if(position  === 0 ){
            // 先将当前节的next指向当前头部节点
            node.next = this.head;
            // 更改头部节点
            this.head = node;
        }else{
            let pre = this.getNode(position - 1)
            node.next = pre!.next
            pre!.next = node
            // 插入的节点是最后一个节点
            if(position === this.length){
                this.tail = node
            }
        }
        this.size ++
        return true
    }

    /**
     * @description 删除方法, 根据位置移除对应的数据
     * 1: 位置是否合理
     *   合理: 移除节点并返回
     *   不合理: 返回null
     */
    removeAt(position: number): T | null{
        if(position < 0 || position >= this.size) return null;
        let current =  this.head;
        if(position === 0){
            this.head  = current?.next ?? null;
            // 如果只有一个节点, 后尾部节点置为null
            if(this.length === 1){
                this.tail = null
            }
        }else{
            let prev = this.getNode(position - 1)
            // 从新赋值
            current = prev!.next
            prev!.next = prev?.next?.next ?? null

            // 如果删除最后一个节点, tail 指向上一个节点
            if(position === this.length - 1){
                this.tail = prev
            }
        }
        this.size -- ;
        return  current?.value ?? null
    }

    /**
     * @description 根据位置获取元素
     */
    get(position: number): T | null {
        if(position < 0 || position >= this.size)return null
        // index === position
        return this.getNode(position)?.value || null
    }

    /**
     * @description 更新
     */
    update(value: T, position: number){
        if(position < 0 || position >= this.size) return false
        const node = this.getNode(position)
        if(node){
            node.value = value
        }
        return true
    }

    /**
     * @description 更具值返回索引
     */
    indexOf(value: T): number {
        let current = this.head;
        let index = 0;
        while(current){
            if(current.value === value){
                return index
            }
            if(this.isTail(current)){
                current =  null
            }else{
                current = current.next
            }
            index ++
        }
        return -1
    }

    /**
     * @description 根据元素删除
     */
    remove(value: T): T | null {
        const index = this.indexOf(value)
        return this.removeAt(index)
    }

    /**
     * @description 是否为空
     */
    isEmpty(){
        return this.size === 0
    }
    /**
     * @description 遍历链表
     */
    traversal(){
        let current = this.head
        const values: T[]= []
        while(current){
            values.push(current.value)
            if(this.isTail(current)){
                current = null
            }else{
                current = current.next
            }
        }
        if(this.tail !== null && this.head){
            values.push(this.head.value)
        }
        console.log(`🚀🚀🚀🚀🚀-> in linked.ts on 182`,values)
        return values
    }

    /**
     * @description 非递归反转链表
     */
    reverse() {
        let current = this.head;
        let pre: Node<T> | null = null;
        while (current) {
            let next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
        this.head = pre
    }

    /**
     * @description 是否是最后一个节点
     */
    private isTail(node: Node<T>){
        return  node === this.tail
    }
}
export default Linked


