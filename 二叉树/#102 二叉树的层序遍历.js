var levelOrder = function(root) {
    if(root === null)return [];
    let res = [];
    let qu =[];
    qu.push(root);
    while(qu.length!== 0){
        let len = qu.length;
        // res.push([]);
        let link =[];
        for(let i=0;i<len;i++){
            let p = qu.shift();
            link.push(p.val);
            // res[res.length-1].push(p.val);
            if(p.left)qu.push(p.left);
            if(p.right)qu.push(p.right);
        }
        res.push([...link]);
    }
    return res;
};
