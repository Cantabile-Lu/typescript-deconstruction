import Linked from "./linked";
import {T} from "vitest/dist/reporters-P7C2ytIv";

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
            this.append(value)
        }else if(position === this.length){
            // 插入尾部
            this.prepend(value)
        }else{
            // 插入中间
            const node = new DoublyNode(value);
            const current = this.getNode(position);
            console.log(`🚀🚀🚀🚀🚀-> in doublyLinked.ts on 78`,current?.value)

        }

        return false
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
p1.traversal()
p1.postTraversal()

export default {}
