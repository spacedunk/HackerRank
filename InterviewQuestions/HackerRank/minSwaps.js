function minSwaps(arr)
{
    var array_indexes = [];
    var visited = [];
    var number_of_swaps = 0;
    
    for(var i = 0;i < arr.length;i++)
    {
        array_indexes.push([arr[i],i]);
        visited[i] = false;

    }

    array_indexes = array_indexes.sort((a,b) => {
        return a[0] >= b[0];
    });

    for(var x = 0; x < arr.length; x++)
    {

        if(visited[x] || array_indexes[x][1] == x)
            continue;

        var j = x, cycles = 0;
        while(!visited[j])
        {
            visited[j] = true;
            j = array_indexes[j][1];
            ++cycles;
        }

        number_of_swaps += (cycles-1);
    }

    return number_of_swaps;
}

console.log(minSwaps([5,3,8,6,10,21,2,4]));
