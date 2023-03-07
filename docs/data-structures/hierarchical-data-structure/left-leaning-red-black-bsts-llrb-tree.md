# Left Leaning Red-Black BSTs (LLRB tree)

## Red-Black Tree

- Represent 2-3 tree as a BST
- Use internal left-leaning links as glue for 3-nodes

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image1.jpg)

## Properties

- No node has two red links connected to it
- Every path from root to null link has the same number of black links
- Red links lean left

## Operations

### Search

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image2.jpg)

### Implementation

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image3.jpg)

### Left rotation - Orient a (temporarily) right-leaning red link to lean left

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image4.jpg)

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image5.jpg)

### Right rotation - Orient a left-leaning red link to (temporarily) lean right

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image6.jpg)

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image7.jpg)

### Color flip - Recolor to split a (temporary) 4-node

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image8.jpg)

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image9.jpg)

### Insertion in a LLRB tree

#### Basic Strategy

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image10.jpg)

#### Insert into a tree with exactly 1 node

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image11.jpg)

- Insert into a 2-node at the bottom
  - Do standard BST insert; color new link red
  - If new red link is a right link, rotate left

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image12.jpg)

#### Insert into a tree with exactly 2 nodes

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image13.jpg)

- Insert into a 3-node at the bottom
  - Do standard BST insert; color new link red
  - Rotate to balance the 4-node
  - Flip colors to pass red link up one level
  - Rotate to make lean left
  - Repeat case 1 or case 2 up the tree

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image14.jpg)

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image15.jpg)

### Insertion Code

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image16.jpg)

If implemented properly, the height of a red-black BST with N keys is at most 2 lg N

![image](../../media/Left-Leaning-Red-Black-BSTs-(LLRB-tree)-image17.jpg)

## Applications

### Red-black trees are widely used as system symbol tables

- Java: Java.util.TreeMap, java.util.TreeSet
- C++ STL: map, multimap, multiset
- Linux kernel: completely fair scheduler, linux/rbtree.h
- Emacs: conservative stack scanning
