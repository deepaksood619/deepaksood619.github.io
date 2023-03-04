# Problems

## Tree Traversals

1. Preorder
2. Inorder
3. Postorder
4. Level order traversals

## Interview Problems

1. Validate BST

    1. Do an inorder traversal of the BST. The output result must be a sorted array

    2. Another classic solution is to keep track of the minimum and maximum values a node can take. And at each node we will check whether its value is between the min and max values it's allowed to take. The root can take any value between negative infinity and positive infinity. At any node, its left child should be smaller than or equal than its own value, and similarly the right child should be larger than or equal to. So during recursion, we send the current value as the new max to our left child and send the min as it is without changing. And to the right child, we send the current value as the new min and send the max without changing.

2. Level Order Traversal

Use queue for pushing items in each level and printing before new items are pushed. Also can have a counter for pushing to queue before the queue had been emptied.

3. Trim a BST

We can do this by performing a post-order traversal of the tree. We first process the left children, then right children, and finally the node itself. So we form the new tree bottom up, starting from the leaves towards the root. As a result while processing the node itself, both its left and right subtrees are valid trimmed binary search trees (may be NULL as well).

At each node we'll return a reference based on its value, which will then be assigned to its parent's left or right child pointer, depending on whether the current node is left or right child of the parent. If current node's value is between min and max (min<=node<=max) then there's no action need to be taken, so we return the reference to the node itself. If current node's value is less than min, then we return the reference to its right subtree, and discard the left subtree. Because if a node's value is less than min, then its left children are definitely less than min since this is a binary search tree. But its right children may or may not be less than min we can't be sure, so we return the reference to it. Since we're performing bottom-up post-order traversal, its right subtree is already a trimmed valid binary search tree (possibly NULL), and left subtree is definitely NULL because those nodes were surely less than min and they were eliminated during the post-order traversal. Remember that in post-order traversal we first process all the children of a node, and then finally the node itself.

Similar situation occurs when node's value is greater than max, we now return the reference to its left subtree. Because if a node's value is greater than max, then its right children are definitely greater than max. But its left children may or may not be greater than max. So we discard the right subtree and return the reference to the already valid left subtree.

```python
def trimBST(tree, minVal, maxVal):

    if not tree:
        return

    tree.left=trimBST(tree.left, minVal, maxVal)
    tree.right=trimBST(tree.right, minVal, maxVal)

    if minVal<=tree.val<=maxVal:
        return tree

    if tree.val<minVal:
        return tree.right

    if tree.val>maxVal:
return tree.left
```
