
import Linked from "./linked";


class CircularLinked<T> extends Linked<T> {
    override append(value: T){
        super.append(value)
        this.tail!.next = this.head
    }
    override insert(value: T, position: number): boolean{
        const isSuccess = super.insert(value, position);
        // 插入成功, 并且插入的位置是最后一个元素
        if(isSuccess && (position === this.length - 1 || position === 0)){
            this.tail!.next = this.head
        }
         return isSuccess
    }

    override removeAt(position: number): T | null{
        const value = super.removeAt(position)
        // 如果删除的是最后一个元素, 并且删除的位置是0
        if(value && this.tail && (position === 0 || position === this.length)){
            this.tail.next = this.head
        }

        return value
    }
 }

 class Person {
    constructor(public name: string,public age: number) {
    }
 }

 const p1 = new Person("张三", 20)
 const p2 = new Person("李四", 18)
 const p3 = new Person("王1", 21)
 const p4 = new Person("王五1", 22)
 const p5 = new Person("王2", 23)


 const circular = new CircularLinked<Person>()
 circular.append(p1)
 circular.append(p2)
 circular.append(p3)
 circular.traversal()
// circular.insert(p4, 0)
circular.insert(p5, 3)
circular.traversal()

circular.removeAt(0)
circular.traversal()
circular.removeAt(2)
circular.traversal()
 export default CircularLinked
