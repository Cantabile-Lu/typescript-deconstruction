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
class Linked<T> {
    private head: Node<T> | null = null;
    private size: number = 0;
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
            current = current.next
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
            node.next = pre.next
            pre.next = node
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
            this.head  = current.next
        }else{
            // let index = 0;
            // let pre : Node<T> | null = null;
            // while(index++ < position){
            //     pre = current
            //     current = current.next
            // }
            let pre = this.getNode(position - 1)

            pre.next = pre.next.next
        }
        this.size -- ;
        return current.value
    }

    /**
     * @description 根据位置获取元素
     */
    get(position: number): T | null {
        if(position < 0 || position >= this.size)return null
        // index === position
        return this.getNode(position).value
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
lin.insert("abc", 3)
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 80`,lin.tranverse())
lin.insert("111", 1)
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 115`,lin.removeAt(0))
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 80`, lin.tranverse())
export default {}
