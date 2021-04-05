https://leetcode-cn.com/problems/max-consecutive-ones/submissions/
var findMaxConsecutiveOnes = function(nums) {
    let maxcount = 0,count = 0;
    for(let i =0;i<nums.length;i++){
        if(nums[i]==1){
            count++;
        }else{
        maxcount=Math.max(maxcount,count);
        count=0;
        }
    }
    maxcount=Math.max(maxcount,count);
    return maxcount;

};
