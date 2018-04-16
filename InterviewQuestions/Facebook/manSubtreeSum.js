function Node(value)
{
    this.value = value;
    this.left = null;
    this.right = null;
}

function maxSubTreeSum(root)
{
    var max = Number.MIN_VALUE;
    return maxSubTreeSum(root, max);
}

function maxSubTreeSum(root, max)
{
    if(!root) console.log('Please provide root');

    if(!root.left && !root.right) return root.value;
    
    if(root.left)
    {
        var lval = getSubTreeSum(root.left);
    } 
    
    if(root.right)
    {
        var rval = getSubTreeSum(root.right);
    }

    var sum = rval + lval + root.value;

    console.log(rval,lval,sum);
    return Math.max(rval, lval, sum);
}

function getSubTreeSum(root)
{
    if(!root.left && !root.right) return root.value;
    
    if(root.left)
    {
        var lval = getSubTreeSum(root.left);
    } 
    
    if(root.right)
    {
        var rval = getSubTreeSum(root.right);
    }

    var sum = rval + lval + root.value;

    
    console.log(rval,lval,sum);
    return sum;
}

function main()
{
    var treeObj = 
    {
        value : -5,
        left : 
        {
            value : 2,
            left : {
                value : 6
            },
            right: {
                value : -2
            }

        },
        right : 
        {
            value : 3,
            left : {
                value : -3
            }
        }
    }

    var root = getTree(treeObj);

    console.log(root);
    console.log(maxSubTreeSum(root));
}

function getTree(treeObj)
{
    if(!treeObj) console.log('Where is my tree object');

    var root = new Node(treeObj.value);
    if(treeObj.left) root.left = getTree(treeObj.left);
    if(treeObj.right) root.right = getTree(treeObj.right);

    return root;
}

main();