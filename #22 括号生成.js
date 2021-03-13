var generateParenthesis = function(n) {
    if(n===0)return[];
    let res=[];//每次都是一个新的状态就不需要回溯
    let dfs=(left,right,str)=>{
        if(str.length == 2*n){
            res.push(str);
            return;
        }

        if(left>0){
            dfs(left-1,right,str+'(');
        }

        if(right>left){
            dfs(left,right-1,str+')');
        }
    }


    dfs(n,n,'');
    return res;
};
