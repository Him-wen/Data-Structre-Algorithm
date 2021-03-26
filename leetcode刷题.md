## 递归知识
最简单的中序遍历
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2932826/1609556376838-a08af7a0-e176-42f8-8edd-c8fbdca7d1a5.png#align=left&display=inline&height=400&margin=%5Bobject%20Object%5D&name=image.png&originHeight=551&originWidth=1028&size=110231&status=done&style=none&width=746)
**如果需要搜索整颗二叉树，那么递归函数就不要返回值，如果要搜索其中一条符合条件的路径，递归函数就需要返回值，因为遇到符合条件的路径了就要及时返回**
## 数组相关的知识
### 初始化
```javascript
 // 初始化二维 dp 数组
  const dp = new Array(m)
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0)
  }

  let res = new Array(m).fill(undefined).map(()=>new Array(n));//二位数组的建立
```
## 二叉树
[代码随想录](https://leetcode-cn.com/circle/article/C6wMrD/)
### 二叉树的前序遍历
**C++**
```cpp
 vector<int> preorderTraversal(TreeNode* root) {
       stack<TreeNode*> stk;
       vector<int> res;
       stk.push(root);
       while(!stk.empty()){
           auto p=stk.top();
           stk.pop();
           if(p)res.push_back(p->val);
           else continue;
           stk.push(p->right);
           stk.push(p->left);
       }
       return res;
    }
```
**JS**
```javascript
 if(root===null)return [];
    let stk=[];//js没有站结构只能数组模拟
    let res=[];
    stk.push(root);
    while(stk.length){
        let root =stk.pop();
        res.push(root.val);
        if(root.right!== null){
            stk.push(root.right);
        }
        if(root.left!== null){
            stk.push(root.left);
        }
    }
    return res;

利用p变量来实现
if(root===null)return [];
    let stk=[];
    let res=[];
    stk.push(root);
    while(stk.length){
        let p =stk.pop();
        res.push(p.val);
        if(p.right!== null){
            stk.push(p.right);
        }
        if(p.left!== null){
            stk.push(p.left);
        }
    }
    return res;//中左右
```
### 二叉树的中序遍历
**C++**
```cpp
vector<int> res;
    vector<int> inorderTraversal(TreeNode* root) {
        dfs(root);//递归版中序遍历
        return res;
    }

    void dfs(TreeNode* root){
        if(!root)return;
        dfs(root->left);
        res.push_back(root->val);
        dfs(root->right);
    }
```
**JS**
```javascript
递归操作
var inorderTraversal = function(root) {
    let res =[];

    let dfs= (root)=>{//递归的相关方法
        if(!root)return;
        dfs(root.left);
        res.push(root.val);
        dfs(root.right);
    }
    dfs(root);//调用递归方法
    return res;
};
最好不要使用全局变量

提取方法的操作
var inorderTraversal = function(root) {
    var res =[];
    dfs(root,res);
    return res;
};

var dfs=function(root,res){
    if(root=== null)return;
    dfs(root.left,res);
    res.push(root.val);
    dfs(root.right,res);
}
非递归
if(!root)return [];
		const res = [];
		const stk = [];
		let p = root;
		while(p!=null || stk.length){
			while(p!=null){
				stk.push(p);
				p=p.left;
			}
			p = stk.pop();
			res.push(p.val);
			p=p.right;
		}
		return res;
```


### 二叉树的后序遍历
**C++**


**JS**
```javascript
if(root === null)return [];
    let stk = [];
    let res = [];
    stk.push(root);
    while(stk.length){
        let p = stk.pop();
        res.push(p.val);
        if(p.left) stk.push(p.left);
        if(p.right) stk.push(p.right);//非递归 先执行右边,在执行左边
    }
    return res.reverse();//中右左顺序 再反转数组就是左右中
```


### 二叉树的层次遍历
相关例题：

- 102.二叉树的层序遍历
- 107.二叉树的层次遍历II
- 199.二叉树的右视图
- 637.二叉树的层平均值
- 589.N叉树的前序遍历
#### N叉树的层次遍历
```javascript
429.N叉树的层次遍历
var preorderTraversal = function(root) {
			if(!root)return [];
			let res= [];
			let qu= [];
			qu.push(root);
			while(qu.length){
				let len = qu.length;
				let link = [];
				for(let i=0;i<len;i++){
					let p = qu.shift();
					link.push(p.val);
					// if(p.left)qu.push(p.left);
					// if(p.right)qu.push(p.right);
					//N叉树与二叉树的区别
					for(let i=0;i<p.children.length;i++){
						if(p.children[i])qu.push(p.children[i])
					}
				}
				res.push([...link]);
			}
			return res;
	    };
```
**C++**
```cpp
if(root==NULL)return {};
        queue<TreeNode*> qu;
        vector<vector<int>> res;//设置二维数组
        qu.push(root);
        while(!qu.empty()){
            int len=qu.size();
            vector<int> link;
            for(int i=0;i<len;i++){
                auto p = qu.front();
                qu.pop();
                link.push_back(p->val);//先插入里面的数组
                if(p->left)qu.push(p->left);
                if(p->right)qu.push(p->right);
            }
            res.push_back(link);
        }
        return res;
    }
```
**JS**
```javascript
let res = new Array(m).fill(undefined).map(()=>new Array(n));//二位数组的建立

var levelOrder = function(root) {
    if(root === null)return [];
    let res = [];
    let qu =[];
    qu.push(root);
    while(qu.length!== 0){
        let len = qu.length;
        // res.push([]);//对你新加进去的这个[] 进行push res[[],]
        let link =[];
        for(let i=0;i<len;i++){
            let p = qu.shift();
            link.push(p.val);
            // res[res.length-1].push(p.val);//就是总是取外面一维数组里面的最后一个空[][[1,2],[*就是往这里面插入数值]]
            if(p.left)qu.push(p.left);
            if(p.right)qu.push(p.right);
        }
        res.push([...link]);//将一维数组导入到二维数组的写法，大致写法一致和C++
    }
    return res;
};
```
### 二叉树相关题目
#### 翻转二叉树
```javascript
var invertTree = function(root) {
    if(!root)return null;
    let temp = root.left;
    root.left=root.right;
    root.right=temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
```
#### 二叉树最大深度
**确定递归函数的参数和返回值**：参数就是传入树的根节点，返回就返回**这棵树的深度（先只看局部结构，至下而上去考虑）**
**js**
```javascript
//递归的相关方法
var maxDepth = function(root) {
     if(root === null)return 0;//递归的返回条件
     let lefth = maxDepth(root.left);//单层递归的逻辑
     let righth = maxDepth(root.right);
     return Math.max(lefth,righth)+1;//至下而上去考虑
};
//迭代的相关方法(利用层序遍历，在每层遍历完，建立一个变量++，返回变量即可了)
//代码参考层序遍历
```
#### N叉树最大深度
**确定递归函数的参数和返回值**：参数就是传入树的根节点，返回就返回**这棵树的深度（先只看局部结构，至下而上去考虑）**
**js**
```javascript
var maxDepth = function(root) {
    if(root === null)return 0;
    let depth =0;
    for(let i in root.children){//遍历每一个孩子节点
       depth = Math.max(depth,maxDepth(root.children[i]));  
    }
    // for(let i=0;i<root.children.length;i++){//第二种遍历方法。两种遍历都可以
    //     depth = Math.max(depth,maxDepth(root.children[i]));
    // }
    return depth+1;
};
```
#### 最小深度
与最大深度有区别：主要是在于对于root的左右子树的判断，**求二叉树的最小深度和求二叉树的最大深度的差别主要在于处理左右孩子不为空的逻辑**
```javascript
var minDepth = function(root) {
    if(root === null)return 0;
    let lefth = minDepth(root.left);
    let righth = minDepth(root.right);
    let depth =Infinity;
    if(root.left && root.right){
        depth = Math.min(lefth,righth)+1;
    }else{//只要有一边为空 就必须考虑另外一边
        depth = lefth+righth+1;
    }
    return depth;
};
```
#### 是否对称
#### [对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)
返回true/fasle
用二个指针分别从左右一起遍历，比较内外两侧
```javascript
var isSymmetric = function(root) {
    if(root === null) return true;
    return dfs(root.left,root.right);

};

let dfs = function(p,q){
    if(!q && !p)return true;
    if(!q || !p || p.val !== q.val)return false;
    // if(dfs(p.left,q.right) && dfs(q.left,p.right))return true;
    // return false;
    return dfs(p.left,q.right) && dfs(q.left,p.right);
}
```
#### 二叉树所有路径
例题
回溯+递归
代码
```javascript
var binaryTreePaths = function(root) {
    
    let res = [];一维数组的路径
    let link = [];
    
    let dfs=(root,link)=>{//直接用箭头函数 即时执行 与c++区别就是不需要传很多参数函数
      if(root === null)return [];
      if(root.left == null && root.right == null){//到了叶子节点 终止的相关条件
        link+=root.val;//把当前节点插入进去
       res.push(link);//把每条路径添加
    }
    link+=root.val+'->';//递归遍历每一条路径添加的每个节点
    dfs(root.left,link);//递归遍历
    dfs(root.right,link);
}

    dfs(root,link);
    return res;
};
```
#### 路径总和
例题
#### [路径总和](https://leetcode-cn.com/problems/path-sum/)
判断需要考虑到全部的相关情况
代码
```javascript
var hasPathSum = function(root, sum) {
    if(!root)return false;
    if(!root.left && !root.right)return sum == root.val;
    
    // if(hasPathSum(root.left,sum-root.val)|| hasPathSum(root.right,sum-root.val))return true;
    // return false;

    return hasPathSum(root.left,sum-root.val)|| hasPathSum(root.right,sum-root.val)//两种代码都可以
};
```


#### 做叶子节点
例题


代码
```javascript
var sumOfLeftLeaves = function(root) {
    if(!root)return 0;

    let depth=0;//这题递归使用后序遍历

    let lefth = sumOfLeftLeaves(root.left);
    let righth = sumOfLeftLeaves(root.right);

    if(root.left != null && root.left.left == null &&root.left.right ==null){这里是操作逻辑
        depth = root.left.val;
    }//当遇到左叶子节点的时候，记录数值，然后通过递归求取左子树左叶子之和，和 右子树左叶子之和，相加便是整个树的左叶子之和

    return depth + lefth +righth;//递归函数的返回值为数值之和

};
```
#### 例题
例题


代码
## DFS
### 全排列
**C++**
```javascript
 vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> res;//二维数组
        vector<int> link;//一维数组
        vector<int> used(nums.size(),0);//标记数组，初试化为0
        int depth;//数值与数字对比 排列完了就回溯
        int len = nums.size();
        if(!len)return res;

        dfs(res,nums,link,used,0,len);//递归相关的操作
        return res;
    }

    void dfs(vector<vector<int>>& res,vector<int>& nums,vector<int>& link,vector<int>& used,int depth,int len){
        if(depth == len){//相等就完成排列
            res.push_back(link);
            
        }

        for(int i=0;i<len;i++){
            if(used[i]==0){
                link.push_back(nums[i]);//插入使用的数值
                used[i]=1;//标记已经使用了
                dfs(res,nums,link,used,depth+1,len);//递归
                used[i]=0;//恢复现场的状态
                link.pop_back();
            }
        }
       
    }
```
**JS**
```javascript
var permute = function(nums) {
    const res = [];//二维数组
    const path = [];//一维数组
    const len =nums.length;
    const used = new Array(len).fill(0);//数组大小为len，初始值为0
    const depth=0;
    if(!len)return;

    dfs(nums,res,path,used,0,len);
    return res;
};

var dfs = function(nums,res,path,used,depth,len){
    if(depth === len){
        res.push([...path]);//直接把一维数组插入到res二维数组里面
    }
    for(let i=0;i<len;i++){
        if(used[i]===0){
            path.push(nums[i]);//这里和C++代码一样
            used[i]=1;
            dfs(nums,res,path,used,depth+1,len);
            used[i]=0;
            path.pop();
        }
    }
}

//箭头函数版本
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
```


### 组合总数
**C++**


**JS**
```javascript
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
```
### 组合
[组合](https://leetcode-cn.com/problems/combinations/)
```javascript
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
```
### 组合总和
### 排列序列
#### [排列序列](https://leetcode-cn.com/problems/permutation-sequence/)


## DP
### 最长公共子序列
**C++**
acwing解析：[题解](https://www.acwing.com/solution/content/8111/)
```cpp
int m=text1.size(),n=text2.size();
        int dp[m+1][n+1];
        memset(dp,0,sizeof(dp));

        for(int i=1;i<=m;i++){
            for(int j=1;j<=n;j++){
                    dp[i][j] = max(dp[i-1][j],dp[i][j-1]);
                 if(text1[i-1]==text2[j-1]){
                    dp[i][j] = dp[i-1][j-1]+1;
                }
            }
        }
        return dp[m][n];
    }
```
**JS**
```javascript
var longestCommonSubsequence = function(text1, text2) {
    let m=text1.length;
    let n=text2.length;
    let dp = Array.from(new Array(m+1),() => new Array(n+1).fill(0));//二维数组初始值
    for(let i =1;i<=m;i++){
        for(let j =1;j<=n;j++){
            if(text1[i-1] == text2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1;
            }else{
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j]);
            }
        }
    }
    return dp[m][n];
};
```


### 最长上升子序列
**C++**


**JS**
```javascript
var lengthOfLIS = function(nums) {
    let n=nums.length;
    let dp =new Array(n).fill(1);//初始值为1至少有一个子序列

    for(let i=1;i<n;i++){
        // dp[i]=1;
        for(let j=0;j<i;j++){//leetcode的输入输出写好了，默认是从0开始
            if(nums[i]>nums[j]){
                dp[i]=Math.max(dp[j]+1,dp[i]);
            }
        }
    }
    return Math.max(...dp);
};

var lengthOfLIS = function(nums) {
    let n=nums.length;
    let dp =new Array(n).fill(1);
    let res=0;//这里需要赋初值-Infinity这里是负无穷的意思
    for(let i=1;i<n;i++){
        dp[i]=1;
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i]=Math.max(dp[j]+1,dp[i]);
            }
            res =Math.max(res,dp[i]);//比较
        }
    }
    return res;//返回值
};
```


### 完全二叉树个数
**题目**
#### [完全二叉树的节点个数](https://leetcode-cn.com/problems/count-complete-tree-nodes/)


**JS**
```javascript
var countNodes = function(root) {
    if(!root)return 0;

    let lefth = countNodes(root.left);
    let righth = countNodes(root.right);

    let sum = lefth + righth + 1;//还是采用后序遍历

    return sum;//做这种题目把递归部分看成局部 
};
```
### 三级标题
**C++**


**JS**
**
### 三级标题
**C++**


**JS**
**
### 三级标题
**C++**


**JS**


## 链表

#### [删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)
**C++**
```cpp
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        auto temp=new ListNode(-1);//加入一个头节点便于进行操作
        temp->next=head;
        auto fast = temp;
        auto slow = temp;
        while(n--){
            fast=fast->next;
        }
        while(fast->next){
            fast=fast->next;
            slow=slow->next;            
        }
        slow->next=slow->next->next;
        return temp->next;
    }
};
```
**JS**
```javascript
var removeNthFromEnd = function(head, n) {
    let p = new ListNode(-1);//同C++
    p.next=head;
    let fast = p;
    let slow = p;

    while(n--){
        fast=fast.next;
    }
    while(fast && fast.next){
        fast=fast.next;
        slow=slow.next;
    }
        slow.next=slow.next.next;
        return  p.next;   
};
```


#### [反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)
**C++**


**JS**
```javascript
//非递归
var reverseList = function(head) {
    if(!head)return null;
    let a = head;
    let b= head.next;
    head.next=null;
    while(b){
        let c = b.next;
        b.next =a;
        a=b;
        b=c;
    }
    return a;
};

//递归
var reverseList = function(head) {
    if(!head || !head.next)return head;
    let p = reverseList(head.next);
    head.next.next=head;
    head.next=null;
    return p;
};
```


### 三级标题
**C++**


**JS**
fd
