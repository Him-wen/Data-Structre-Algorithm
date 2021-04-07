var minDepth = function(root) {
    if(!root)return 0;

    let l = minDepth(root.left);
    let r = minDepth(root.right);
    if(!root.left && root.right)return 1+r;
    if(root.left && !root.right)return 1+l;
    return 1+Math.min(l,r);
};
