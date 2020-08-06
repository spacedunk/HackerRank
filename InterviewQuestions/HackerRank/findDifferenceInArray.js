function findDifferenceInArray(arr,k)
{
    var res = [];
    var comps = [];

    for(var i = 0;i < arr.length; i++)
    {
        if(comps.includes(arr[i] + k))
        {
            res.push([arr[i]+k,arr[i]]);
        }
        else if(comps.includes(arr[i]-k))
        {
            res.push([arr[i],arr[i]-k]);
        }
        else
        {
            comps.push(arr[i]);
        }
    }

    return res;
    
}


console.log(findDifferenceInArray([4,1],3));
/*

arr = 3 4 5 7 8 2 10 
k = 3

comp = 6 7 8 



*/
