// Javascript JS solution, faster than 100.00% of JavaScript online submissions for Cousins in Binary Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) 
{
    var xParent, yParent, queue=[], resArr=[], xRow, yRow;
    xParent=findParent(root, x)
    yParent=findParent(root, y);
    
    function findParent(root, value)
    {
        var left, right;
        if(!root)
            { return false; }
        if(root.left !== null && root.left.val==value)
            { return root; }
        if(root.right !== null && root.right.val==value)
            { return root; }
         return findParent(root.left, value) || findParent(root.right, value);
    }
    if(xParent==yParent)
        return false;
    
    function findCousin(root)
    {
        if(!root)
            return resArr;
        queue.push(root);
        while(queue.length>0)
        {
            var length=queue.length, tempArr=[];
            for(var i=0; i<length; i++)
            {
                var tempNode=new TreeNode();
                tempNode=queue.shift();
                if(tempNode.left != null)
                    queue.push(tempNode.left);
                if(tempNode.right != null)
                    queue.push(tempNode.right);
                tempArr.push(tempNode.val);
            }
            resArr.push(tempArr);
        }
        console.log(resArr);
        for(var i = 0; i < resArr.length; i++) 
        {
            var col = resArr[i];
            for(var j = 0; j < col.length; j++) 
            {
                if(resArr[i][j]==x)
                    xRow=i;
                if(resArr[i][j]==y)
                    yRow=i;
            }
        }
        if(xRow==yRow)
            return true;
        return false;
    }
    return findCousin(root);
};