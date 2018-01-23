function crush(data)
{
    var data_ll = ConvertArrayToLinkedList(data.split(''));
    if(typeof data_ll != 'undefined')
    {
        var prev = data_ll;
        var curr = data_ll;
        var root = data_ll;
        var count = 0;
        while(curr != null && curr.next != null)
        {
            if(curr.data != curr.next.data)
            {
                prev = curr;
                curr = curr.next;
            }
            else
            {
                count++;
                var temp = curr.next;
                while(temp.data == curr.data)
                {
                    if(temp.next)
                    {
                        curr = temp;
                        temp = temp.next;
                        count++;
                    } 
                    else break;
                    
                }

                
                if(count >= 3)
                {
                    prev.next = temp;
                    curr = prev;
                }
                else
                {
                    prev = curr;
                    curr = temp;

                }
                count = 0;
            }
        }

        return ConvertLLtoString(root);
    }
}

function main()
{
    console.log(crush("ABAACCCDDDCC"));
    console.log(crush("ABBBBA"));
}

function Node(data)
{
    this.data = data;
    this.next = null;
}

function ConvertArrayToLinkedList(data)
{
    if(data)
    {
        var temp_root = new Node(data[0]);
        var temp = temp_root;
        for (let index = 1; index < data.length; index++) {
            const element = data[index];
            temp.next = new Node(element);
            temp = temp.next;
        }
        return temp_root;
    }
    else
    {
        return undefined;
    }
}

function ConvertLLtoString(root)
{
    var temp = root;
    var result = "";
    while(temp != null)
    {
        result = result.concat(temp.data);
        temp = temp.next;
    }
    return result;
}

main();