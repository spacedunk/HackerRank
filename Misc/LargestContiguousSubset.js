function main()
{
    var arr = [];
    arr.push(-1)
    arr.push(0);
    arr.push(100);
    arr.push(5);
    arr.push(-20);

    console.log(contSum(arr));

    var arr = [-1,-2,-3,-4];

    console.log(contSum(arr));

}

function contSum(data)
{
    if(!data) return undefined;

    var sum = data[0];
    var res = [];
    res.push(data[0]);
    for (let index = 0; index < data.length; index++) 
    {
        const element = data[index];
        const potentialSum = element + sum;
        
        if (potentialSum < sum) continue;
        
        if(element > potentialSum)
        {
            sum = element;
            res = [];
            res.push(element);
        }
        else if(potentialSum > sum)
        {
            res.push(element);
            sum = potentialSum;
        }
    }

    return res;
}

main();