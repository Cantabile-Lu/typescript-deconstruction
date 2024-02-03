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

    /**
     * @description 插入节点
     * 1: 插入位置是否合理
     *   合理: 插入节点
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
            let index = 0;
            // 保存当前头部节点
            let current = this.head;
            // 保存上一个节点
            let pre: Node<T> | null = null;
            while(index ++ < position){
                pre = current
                current = current.next
            }
            node.next = current
            pre.next = node;
        }
        this.size ++
        return true
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

}
const lin = new Linked<string>()
lin.append('aaa');
lin.append('bbb');
lin.append('ccc');
lin.insert("abc", 0)
const result1 = lin.tranverse()
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 80`,result1)
lin.insert("111", 1)
const result = lin.tranverse()
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 80`,result)
export default Node
