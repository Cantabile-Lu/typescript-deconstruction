import {btPrint} from "hy-algokit";

class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;
    constructor(value: T) {
        this.value = value;
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
    isExist(value:T): boolean{
        let current = this.root
        while(current){
            if(current.value === value ) return  true
            if(current.value > value){
                current = current.left
            }else{
                current = current.right
            }
        }
        return false
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
            console.log(`🚀🚀🚀🚀🚀-> in BinarySearchTree.ts on 69`,node.value)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
    /**
     * @description 删除
     */

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
bst.insert(25);

bst.print()
// console.log(`🚀🚀🚀🚀🚀-> in BinarySearchTree.ts on 140`,bst.getMin())
// console.log(`🚀🚀🚀🚀🚀-> in BinarySearchTree.ts on 163`,bst.getMax())
// console.log(`🚀🚀🚀🚀🚀-> in BinarySearchTree.ts on 164`,bst.isExist(25))
// bst.preorderTraversal()
// bst.inorderTraversal()
// bst.postorderTraversal()
// bst.sequenceTraversal()
export default  BinarySearchTree;
