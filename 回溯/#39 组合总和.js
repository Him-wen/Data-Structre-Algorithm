var combinationSum = function(candidates, target) {
    let res =[];
    let link =[];
    let start=0;

    let dfs=(start,target)=>{
        if(target == 0){
            res.push([...link]);
        }

        for(let i=start;i<candidates.length;i++){
            if(target < 0)return;
            link.push(candidates[i]);
            dfs(i,target-candidates[i]);
            link.pop();
        }
    }

    dfs(0,target);
    return res;
};
