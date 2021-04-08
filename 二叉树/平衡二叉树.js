var isBalanced = function(root) {
    function dfs(root){
      if(!root)return 0;
      let l = dfs(root.left);
      if(l==-1)return -1;
      let r = dfs(root.right);
      if(r==-1)return -1;

      if(Math.abs(l-r)>1)return -1;
      else return 1+Math.max(l,r);
    }
    return dfs(root)==-1?false:true;
};
