function findMissing(data)
{
    var total = data.length + 2;
    var arr_sorted = data.sort();

    for (let index = 0; index < arr_sorted.length / 2; index++) 
    {
        const element = arr_sorted[index];
        const endElement = arr_sorted[arr_sorted.length - (index + 1)]
        if(element + endElement != total)
        {
            var comp1 = total - element;
            var comp2 = total - endElement;

            return ((arr_sorted.indexOf(comp1) != -1 ) ? comp2 : comp1);
        }
    }
    return undefined;
}

function main()
{
    var arr = [6,4,1,3,2,5];

    console.log(findMissing(arr));

    var arr = [1,2,4,5,6,7];

    console.log(findMissing(arr));
}

main();