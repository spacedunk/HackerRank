//PreOrderTraversal.js

/*
struct node
{
    int data;
    node* left;
    node* right;
};

void preOrder(node *root) {
    cout << root->data;
    if(root->left != null) preOrder(root->left);
    if(root->right != null) preOrder(root->right);
}

*/


function Node(data) 
{
    this.data = data;
    this.left = null;
    this.right = null;
}

function preOrder(head)
{
    console.log(head.data);
    if(head.left) preOrder(head.left);
    if(head.right) preOrder(head.right);
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

preOrder(json_obj);