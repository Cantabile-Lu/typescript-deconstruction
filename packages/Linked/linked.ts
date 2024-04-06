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
    private getNode(position: number): Node<T> | null {
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
            // let index = 0;
            // // 保存当前头部节点
            // let current = this.head;
            // // 保存上一个节点
            // let pre: Node<T> | null = null;
            // while(index ++ < position){
            //     pre = current
            //     current = current.next
            // }
            // node.next = current
            // pre.next = node;

            let pre = this.getNode(position - 1)
            if(pre){
                node.next = pre.next
                pre.next = node
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
            if(current){
                this.head  = current.next
            }
        }else{
            // let index = 0;
            // let pre : Node<T> | null = null;
            // while(index++ < position){
            //     pre = current
            //     current = current.next
            // }
            let pre = this.getNode(position - 1)
            // 从新赋值
            current = pre!.next
            if(pre && pre.next){
                pre.next = pre.next.next
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
            current = current.next
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
    tranverse(){
        let current = this.head
        const values: T[]= []
        while(current){
            values.push(current.value)
            current = current.next
        }
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
}
const lin = new Linked<string>()
lin.append('aaa');
lin.append('bbb');
lin.append('ccc');
// lin.insert("abc", 3)
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 80`,lin.tranverse())
// lin.insert("111", 1)
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 115`,lin.removeAt(0))
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 80`, lin.tranverse())
//
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 174`,lin.update('张三', 1))
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 174`,lin.remove('abc'))
//
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 115`,lin.tranverse())
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 176`,lin.indexOf('c2321cc'))
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 176`,lin.reverse())
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 115`,lin.tranverse())
export default Linked


