var searchMatrix = function(matrix, target) {
    if(matrix.length==0 ||matrix[0].length==0){
        return false;
    }
    let r=matrix.length;//row行
    let c=matrix[0].length;//col列

    let x=r-1;
    let y=0;//左下角
    
    while(x>=0 && y<c)
    {
        if(matrix[x][y] == target)
        {
            return true;
        }
        else if(matrix[x][y]<target)
        {
            y++;
        }
        else
        {
            x--;
        }
    }
    return false;
};
