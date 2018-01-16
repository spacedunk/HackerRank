//Cycle Detection

/*
    Detect a cycle in a Linked List.
    Note that the head may be 'null' if the list is empty.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

var Node = function(data) {
    this.data = data;
    this.next = null;
}

var temp = new Node(0);

var head = temp;
/*
for(var i = 1 ; i < 6; i++)
{

    temp.next = new Node(i);
    temp = temp.next; 
}

temp.next = head.next;

*/
temp = head;

for(var i = 0 ; i < 1; i++)
{
    console.log(temp.data);
    temp = temp.next; 
}

console.log((hasCycle(head)) ? "Yes" : "No");


function hasCycle(head) {
    if(!head || !head.next) return false;
    var nextArr = [];
    var temp = head;
    var index = 0;
    while(temp.next != null)
    {
        index = nextArr.indexOf(temp.next);
        
        if( index < 0) nextArr.push(temp.next);
        else return true;

        temp = temp.next;
    }
    return false;
}