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
*/


void postOrder(node *root) {
    if(root->left) postOrder(root->left);
    if(root->right) postOrder(root->right);
    cout << root->data << ' ';
}
