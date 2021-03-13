var combine = function(n, k) {
    let res =[];
    let link =[];
    if(n<=0 || k<=0)return res;
    let start;

    let dfs=(start)=>{
        if(link.length == k){
            res.push([...link]);
            return;
        }

        for(let i=start;i<=n;i++){
            link.push(i);
            dfs(i+1);
            link.pop();
        }
    }

    dfs(1);
    return res;

};
