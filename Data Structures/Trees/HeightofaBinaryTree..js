//Tree: Height of a Binary Tree


/*The tree node has data, left child and right child 

class Node {
    int data;
    Node* left;
    Node* right;
};
    
int height(Node* root) {
    if(root->left) return 1 + height(root->left);
    if(root->right) return 1 + height(root->right);
    return 1;
}
*/
function Node(data) 
{
    this.data = data;
    this.left = null;
    this.right = null;
}

function height(head)
{
    var leftRes =0;
    var rightRes = 0;
    if(head )
    {
        if(!head.left && !head.right) return 0;
        else
        {
            leftRes = (head.left ? height(head.left) : 0);
            rightRes = (head.right ? height(head.right) : 0);
            return (leftRes > rightRes ? leftRes : rightRes) + 1;
        }
    }
    else return undefined;
}


var json_obj =
    {
        "data": 1,
        "right":null,
        "left":
        {
            "data": 2,
            "right": null,
            "left": 
            {
                "data":5,
                "right":
                {
                    "data":3,
                    "right":null,
                    "left":
                    {
                        "data":4,
                        "right":null,
                        "left":null
                    }
                },
                "left":{
                    "data":6,
                    "right":null,
                    "left":null
                }
            }
        }
    };

console.log(height(json_obj));
console.log(height(
    {
        "data": 3,
        "right": null,
        "left": null
    }
));
console.log(height(null));