import Linked from "./linked";

class DoublyNode<T>{
    value: T;
    next: DoublyNode<T> | null = null;
    prev: DoublyNode<T> | null = null;
    constructor(value: T){
        this.value = value
    }
}
class doublyLinked<T> extends Linked<T>{
    protected override  head: DoublyNode<T> | null = null;
    protected override  tail: DoublyNode<T> | null  = null;

    /**
     * @description 重写父类添加方法
     */
    override append(value: T) {
        const node = new DoublyNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }else{
            this.tail!.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size ++
    }

    /**
     * @description 尾部添加节点
     */
    prepend(value: T){
        const node = new DoublyNode(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head!.prev = node;
            this.head = node;
        }
        this.size ++
    }

    /**
     * @description 反向遍历
     */
    postTraversal(){
        const values: T[] = [];
        let current = this.tail;
        while (current){
            values.push(current.value);
            current = current.prev;
        }
        console.log(`🚀🚀🚀🚀🚀-> in doublyLinked.ts on 59`,values)
        return values
    }

    /**
     * @description 根据索引插入节点
     */
    override insert(value: T, position: number): boolean {
        if(position < 0 && position > this.length) return false;
        // 插入头部
        if(position === 0){
            this.prepend(value)
        }else if(position === this.length){
            // 插入尾部
            this.append(value)
        }else{
            // 插入中间
            const node = new DoublyNode(value);
            const current = this.getNode(position) as DoublyNode<T>;
            console.log(`🚀🚀🚀🚀🚀-> in doublyLinked.ts on 78`,current?.value)
            // 当前节点的上一个节点的next 指向 新节点
            current.prev!.next = node;

            node.next = current;
            node.prev = current.prev;
            current.prev = node;
            this.size ++
        }

        return false
    }

    /**
     * @description 根据索引删除节点
     */
    override removeAt(position: number): T | null {
        console.log(`🚀🚀🚀🚀🚀-> in doublyLinked.ts on 93`,this.length, this.size, position)
        // 如果 小于 0 或者 大于length 则越界 返回null
        if(position < 0 || position >= this.length) return  null;
        let current = this.head;

        if(position === 0){
            if(this.length === 1){
                this.head = null;
                this.tail = null;
            } else{
                this.head = this.head!.next;
                this.head!.prev = null;
            }
            // todo 为什么只能比较 this.length - 1 ? 而不是this.length?
        } else if(position === this.length - 1){
            current = this.tail;
            this.tail = this.tail!.prev;
            this.tail!.next = null;
        }else{
            current = this.getNode(position) as DoublyNode<T>;
            current.prev!.next = current.next;
            current.next!.prev = current.prev;
        }
        this.size -- ;

        return current?.value ?? null;
    }
}
const p1 = new doublyLinked<string>();
p1.append("a");
p1.append("b");
p1.append("c");
p1.append("d");
p1.prepend("abc")
p1.prepend("cba")
p1.insert("cba", 2)
// p1.traversal()
p1.postTraversal()

p1.insert('add', 1)
p1.insert('add0', 0)
p1.traversal()
p1.removeAt(8)
p1.removeAt(0)
p1.traversal()
export default DoublyNode
