//PostOrderTraversal.js

/* you only have to complete the function given below.  
Node is defined as  

struct node
{
    int data;
    node* left;
    node* right;
};

in out
3
5
1 1
4 4
5



void postOrder(node *root) {
    if(root->left == NULL && root->right == NULL) cout << root->data << ' ';
    if(root->left != NULL) postOrder(root->left);
    if(root->right != NULL) postOrder(root->right);
}

*/

function Node(data) 
{
    this.data = data;
    this.left = null;
    this.right = null;
}

function postOrder(head)
{
    if(!head.left && !head.right) console.log(head.data);
    if(head.left) postOrder(head.left);
    if(head.right) postOrder(head.right);
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

postOrder(json_obj);