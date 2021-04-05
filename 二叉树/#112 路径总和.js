var hasPathSum = function(root, sum) {
    if(!root)return false;
    if(!root.left && !root.right)return sum == root.val;
    
    // if(hasPathSum(root.left,sum-root.val)|| hasPathSum(root.right,sum-root.val))return true;
    // return false;

    return hasPathSum(root.left,sum-root.val)|| hasPathSum(root.right,sum-root.val)
};
