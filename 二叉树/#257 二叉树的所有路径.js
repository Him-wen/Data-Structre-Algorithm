var binaryTreePaths = function(root) {
    
    let res = [];
    let link = [];
    
    let dfs=(root,link)=>{
      if(root === null)return [];
      if(root.left == null && root.right == null){
        link+=root.val;
       res.push(link);
    }
    link+=root.val+'->';
    dfs(root.left,link);
    dfs(root.right,link);
}

    dfs(root,link);
    return res;
};
