var isOneBitCharacter = function(bits) {
    
    let count = 0;
    if(bits[bits.length-2]== 0)return true;
    else {
        for(let i = bits.length-2;i>=0;i--){
            if(bits[i]==1)count++;
            else break;
        }
    }
    return count%2 == 0
};
