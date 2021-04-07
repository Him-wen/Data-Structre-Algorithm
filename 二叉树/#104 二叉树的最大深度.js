var maxDepth = function(root) {
    if(!root)return 0;
    let l = maxDepth(root.left);
    let r = maxDepth(root.right);
    return Math.max(l,r)+1;
};
