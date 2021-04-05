链接：https://leetcode-cn.com/problems/merge-two-binary-trees/
```
var mergeTrees = function(root1, root2) {
    if(!root1 && !root2)return null;
    if(!root1)return root2;
    if(!root2)return root1;
    root2.val += root1.val;
    root2.left = mergeTrees(root1.left,root2.left)
    root2.right = mergeTrees(root1.right,root2.right)
    return root2;
};
