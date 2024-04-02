class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }
}

class BinarySearchTree<T> {
     root: TreeNode<T> | null = null
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

    /**
     * @description 查找最大值
     */

    /**
     * @description 查找最小值
     */

    /**
     * @description 遍历 - 中序 | 先序 | 后序 |
     */

    /**
     * @description 删除
     */
}

const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(9);
bst.insert(20);
bst.insert(30);
console.log(`🚀🚀🚀🚀🚀-> in BinarySearchTree.ts on 66`,bst.root)
export default  BinarySearchTree;
