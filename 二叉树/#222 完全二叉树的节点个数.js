var countNodes = function(root) {
    if(!root)return 0;

    let lefth = countNodes(root.left);
    let righth = countNodes(root.right);

    let sum = lefth + righth + 1;

    return sum;
};
