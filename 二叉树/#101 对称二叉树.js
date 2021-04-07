var isSymmetric = function(root) {
    if(root === null) return true;
    return dfs(root.left,root.right);

};

let dfs = function(p,q){
    if(!q && !p)return true;
    if(!q || !p || p.val !== q.val)return false;
    return dfs(p.left,q.right) && dfs(q.left,p.right);
}
