var numIslands = function(grid) {
    let dx = [0,-1,0,1];
    let dy = [-1,0,1,0];
    
    let dfs =(x,y)=>{
        grid[x][y]=0;

        for(let i=0;i<4;i++){
            let a=dx[i]+x,b=dy[i]+y;
            //if(a<0 || a>=res.size() ||b<0 ||b>=res[a].size() ||res[a][b]=='0')continue;
            //if()continue;
            if (a >= 0 && a < grid.length && b >= 0 && b < grid[a].length && grid[a][b] == '1')
            dfs(a,b);
        }
    }

    let cnt=0;
        for(let i=0;i<grid.length;i++)
            for(let j=0;j<grid[i].length;j++)
                if(grid[i][j]=='1'){
                    dfs(i,j);
                    cnt++;
                }
       return cnt;


    

};
