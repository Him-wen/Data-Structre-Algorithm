var postorderTraversal = function(root) {
    if(root === null)return [];
    let stk = [];
    let res = [];
    stk.push(root);
    while(stk.length){
        let p = stk.pop();
        res.push(p.val);
        if(p.left) stk.push(p.left);
        if(p.right) stk.push(p.right);
    }
    return res.reverse();
};
