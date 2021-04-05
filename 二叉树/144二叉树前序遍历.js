var preorderTraversal = function(root) {
    if(root===null)return [];
    let stk=[];
    let res=[];
    stk.push(root);
    while(stk.length){
        let p =stk.pop();
        res.push(p.val);
        if(p.right!== null){
            stk.push(p.right);
        }
        if(p.left!== null){
            stk.push(p.left);
        }
    }
    return res;
    
};
