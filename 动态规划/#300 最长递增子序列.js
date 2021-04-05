class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        // if(nums.empty())return 0;
        // int n=nums.size();
        // vector<int> f(n+1);
        // int res=1;
        // for(int i=0;i<n;i++){
        //     f[i]=1;
        //     for(int j=0;j<i;j++){
        //         if(nums[i]>nums[j]){
        //             f[i]=max(f[i],f[j]+1);
        //         }
                
        //         res=max(res,f[i]);
        //     }
        // }
        // return res;直接一轮循环
        int n=nums.size();
        vector<int> f(n);
        for(int i=0;i<n;i++)
        {
            f[i]=1;// 设f[i]默认为1，找不到前面数字小于自己的时候就为1
            for(int j=0;j<i;j++)
            {
                if(nums[i]>nums[j])
                    f[i]=max(f[i],f[j]+1); // 前一个小于自己的数结尾的最大上升子序列加上自己，即+1。j为i当前状态的 倒数第二个数
            }
        }
        int res=0;// 找出所计算的f[i]之中的最大值
        for(int i=0;i<n;i++)res=max(res,f[i]);
        return res;
    }
};
