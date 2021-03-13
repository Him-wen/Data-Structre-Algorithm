#94 二叉树的中序遍历
var inorderTraversal = function(root) {
    var res =[];
    dfs(root,res);
    return res;
};

var dfs=function(root,res){
    if(root=== null)return;
    dfs(root.left,res);
    res.push(root.val);
    dfs(root.right,res);
}
