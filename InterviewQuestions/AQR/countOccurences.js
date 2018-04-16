function countOccurences(input,teststring)
{
    let j = 0;
    let i = 0;

    var occurences = 0;
    var isOccurence = false;

    while(i < input.length && j < teststring.length)
    {
        while(input.charAt(i) == teststring.charAt(j))
        {
            isOccurence = true;
            if(j == teststring.length - 1) break;
            else if(i == input.length -1)
            {   
                isOccurence = false;
                break;
            }
            else
            {
                i++;
                j++;
            }
        }

        if(isOccurence) ++occurences;

        i++;
        j = 0;
        isOccurence = false;
    }

    return occurences;
}

function main()
{
    console.log(countOccurences("ERICERICERIC","ERIC"));
    console.log(countOccurences("AAB","A"));
    console.log(countOccurences("A","AAB"));
}

main();