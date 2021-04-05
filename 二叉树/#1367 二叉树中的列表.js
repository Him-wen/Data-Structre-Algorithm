var isSubPath = function(head, root) {
    if(root === null)return false;
    
    let dfs=(head, root)=>{
        if(head === null)return true;
        if(root === null)return false;

        if(head.val == root.val){
            return dfs(head.next, root.left) || dfs(head.next, root.right)
        }
        else{
            return false;
        }
    }

    if(head.val === root.val){
        let tem = dfs(head, root);
        if(tem)return true;
    }

    return isSubPath(head,root.left) || isSubPath(head,root.right)


    

};
