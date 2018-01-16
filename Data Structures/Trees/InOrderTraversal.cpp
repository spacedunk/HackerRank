//InOrderTraversal.cpp

/* you only have to complete the function given below.  
Node is defined as  

struct node
{
    int data;
    node* left;
    node* right;
};

1 2 3 4 5 6 

*/

struct node
{
    int data;
    node* left;
    node* right;
};

void inOrder(node *root) {
    if(root->left) inOrder(root->left);
    cout << root->data << ' ';
    if(root->right) inOrder(root->right);
}
