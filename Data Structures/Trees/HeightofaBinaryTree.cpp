//Tree: Height of a Binary Tree


/*The tree node has data, left child and right child */

class Node {
    int data;
    Node* left;
    Node* right;
};
    
int height(Node* root) {
    int leftRes,rightRes;
    leftRes = rightRes = 0; 
    if(root)
    {
        if(!root->left && !root->right) return 0;
        leftRes = (root->left ? height(root->left):0);
        rightRes = (root->right ? height(root->right):0);
        return (leftRes > rightRes ? leftRes : rightRes) + 1;
    }
    else
    {
        return -1;
    }
}

