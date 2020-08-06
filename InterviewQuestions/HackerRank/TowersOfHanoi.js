function hanoi(n)
{
    var towers = [];

    for(var i =0;i < 3; i++)
    {
        towers.push([]);
    }

    for(var i = n; i > 0; i--)
    {
        towers[0].push(i);
    }

    console.log(towers);
}

hanoi(3);