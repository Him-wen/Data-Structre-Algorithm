var sumOfLeftLeaves = function(root) {
    if(!root)return 0;
    let sum = 0;
    let l=sumOfLeftLeaves(root.left);
    let r=sumOfLeftLeaves(root.right);
    if(root.left && !root.left.left && !root.left.right){
        sum=root.left.val;
    }
    return sum+l+r;
};
