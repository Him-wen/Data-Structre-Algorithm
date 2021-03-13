var getPermutation = function(n, k) {
    let count =0;
    let used =new Set();

    let dfs=(temp)=>{
        if(temp.length == n){
            count++;
            if(count == k){
                return temp.join('');
            }
            return;
        }

        for(let i=1;i<=n;i++){
            if(used.has(i))continue;
            temp.push(i);
            used.add(i)
            let res = dfs(temp);
            used.delete(i);
            temp.pop();
            if(res){
                return res;
            }
        }
    }
    return dfs([]);
};
