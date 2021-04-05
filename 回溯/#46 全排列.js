var permute = function(nums) {
    const res = [];
    const path = [];
    const len =nums.length;
    const used = new Array(len).fill(0);
    const depth=0;
    if(!len)return;
    
    let dfs =(depth)=>{//箭头函数，不需要传很多不会变化的值
    if(depth === len){
        res.push([...path]);
        }
    for(let i=0;i<len;i++){
        if(used[i]===0){
            path.push(nums[i]);
            used[i]=1;
            dfs(depth+1);
            used[i]=0;
            path.pop();
        }
      }
    }

    dfs(0);
    return res;

};
