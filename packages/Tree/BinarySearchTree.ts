import {btPrint} from "hy-algokit";

class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;
    // 父节点
    parent: TreeNode<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }

    /**
     * @description 是否是左节点
     */
    get isLeft():boolean{
        return !!(this.parent && this.parent.left === this);
    }

    /**
     * @description 是否是右节点
     */
    get isRight():boolean{
        return !!(this.parent && this.parent.right === this);
    }
}

class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null

    print(){
      btPrint(this.root)
    }

    /**
     * @description 插入
     */
    insert(value: T){
        // 创建节点
        const node = new TreeNode<T>(value);
        if(!this.root){
            this.root = node;
        }else{
            // 有根节点
            this.insertNode(this.root, node);
        }
    }
    insertNode(root: TreeNode<T>, node: TreeNode<T>){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node;
            }else{
                this.insertNode(root.left, node);
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right, node);
            }
        }
    }
    /**
     * @description 查找
     */
    private indexOf(value: T):TreeNode<T> | null{
        let current = this.root;
        let parent: TreeNode<T> | null = null
        while(current){
            if(current.value === value){
                return current;
            }
            parent = current;
            if(current.value > value){
                current = current.left;
            }else{
                current = current.right;
            }
            if(current) current.parent = parent;
        }
        return null
    }
    isExist(value:T): boolean{
        return !!this.indexOf(value)
    }
    /**
     * @description 查找最大值
     */
    getMax():T | null{
        let current = this.root;
        if(!current) return null
        while (current.right){
            current = current.right;
        }
        return current.value;
    }
    /**
     * @description 查找最小值
     */
    getMin():T | null{
        let current = this.root;
        if(!current) return null
        while (current.left){
            current = current.left;
        }
        return current.value;
    }
    /**
     * @description 遍历 - 中序 | 先序遍历 | 后序 | 层序
     */
    // 先序
    preorderTraversal(){
        this.preorderTraverseNode(this.root);
    }

    private preorderTraverseNode(node: TreeNode<T> | null){
        if(node){
            console.log(`🚀🚀🚀🚀🚀-> in BinarySearchTree.ts on 69`,node.value)
            this.preorderTraverseNode(node.left)
            this.preorderTraverseNode(node.right)
        }
    }

    inorderTraversal(){
        this.inorderTraverseNode(this.root);
    }
    private  inorderTraverseNode(node: TreeNode<T> | null){
        if(node){
            this.inorderTraverseNode(node.left)
            console.log(`🚀🚀🚀🚀🚀-> in BinarySearchTree.ts on 81`,node.value)
            this.inorderTraverseNode(node.right)
        }
    }

    postorderTraversal(){
        this.postorderTraverseNode(this.root);
    }

    private postorderTraverseNode(node: TreeNode<T> | null){
        if(node){
            this.postorderTraverseNode(node.right)
            this.postorderTraverseNode(node.left)
            console.log(`🚀🚀🚀🚀🚀-> in BinarySearchTree.ts on 69`,node.value)
        }
    }

    sequenceTraversal(){
        const queue: TreeNode<T>[] = []
        if(this.root){
            queue.push(this.root)
        }
        while (queue.length){
            const node = queue.shift()
            if(!node) return
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
    /**
     * @description 删除后继
     */
    private getSuccessorNode(node: TreeNode<T>): TreeNode<T>{
        // 1.获取右子树
        let current = node.right;
        let successor:TreeNode<T> | null = null;

        while(current){
            successor = current;
            current = current.left
            if(current){
                current.parent = successor;
            }
        }

        if(successor !== node.right){
            successor!.parent!.left = successor!.right;
            successor!.right = node.right;
        }

        successor!.left = node.left;
        return successor!
    }
    remove(value: T){
        //1. 搜索当前是否有这个节点
        let current = this.indexOf(value);
        if(!current) return false
        // 2. 如果是叶子节点
        if (current.left === null && current.right === null) {
            if (current === this.root) { // 根节点
                this.root = null
            } else if (current.isLeft) { // 父节点的左子节点
                current.parent!.left = null
            } else {
                current.parent!.right = null
            }
        } else if(current.right === null){
            // 3.只有一个子节点, 只有左子节点
            if(current === this.root){
                this.root = current.left
            }else if(current.isLeft){
                current.parent!.left = current.left
            }else{
                current.parent!.right = current.left
            }
        }else if(current.left === null){
            // 4. 只有一个节点, 只有右节点
            if(current === this.root){
                this.root = current.right
            }else if(current.isRight){
                current.parent!.right = current.right
            }else{
                current.parent!.left = current.right
            }
        }else{
            // 5. 有两个子节点
            const successor = this.getSuccessorNode(current)
            if(current === this.root){
                this.root = successor
            }else if(current.isLeft){
                current.parent!.left = successor
            }else{
                current.parent!.right = successor
            }
        }

        return false
    }

}

const bst = new BinarySearchTree<number>();
bst.insert(11);
bst.insert(7);
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(15);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(19);
bst.insert(25);
bst.print()
// bst.remove(3);
// bst.remove(8);
// bst.remove(15);
// bst.remove(11);
bst.remove(9);


bst.print()
// console.log(`🚀🚀🚀🚀🚀-> in BinarySearchTree.ts on 140`,bst.getMin())
// console.log(`🚀🚀🚀🚀🚀-> in BinarySearchTree.ts on 163`,bst.getMax())
// console.log(`🚀🚀🚀🚀🚀-> in BinarySearchTree.ts on 164`,bst.isExist(25))
// bst.preorderTraversal()
// bst.inorderTraversal()
// bst.postorderTraversal()
// bst.sequenceTraversal()
export default  BinarySearchTree;
