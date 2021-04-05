var exist = function(board, word) {
    let x= board.length;
    let y= board[0].length;

    let dfs=(i,j,index)=>{
        if(i<0 || i>=x ||j<0 ||j>=y || board[i][j] !== word[index])return false;
        if(index == word.length-1)return true;

        let tem = board[i][j];
        board[i][j]='1';
        let res =dfs(i-1,j,index+1) || dfs(i,j-1,index+1) ||dfs(i+1,j,index+1)||dfs(i,j+1,index+1);
        board[i][j]=tem;
        if(res)return true;
    }

    for(let i=0;i<x;i++)
      for(let j=0;j<y;j++)
        if(dfs(i,j,0))return true;
    return false;
};
