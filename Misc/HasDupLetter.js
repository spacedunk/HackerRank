function main()
{
    var arr_str = [
        'Eric',
        'Naava',
        'Temi',
        'Noam',
        'Melissa',
        'Sara Tema'
    ];

    arr_str.forEach(element => {
        console.log(element);
        console.log(hasDupLetters(element));
        console.log(hasDupLettersHash(element));
    });
   
}

function hasDupLetters(data)
{
    var str_arr_sorted = data.split('').sort();
    for(var index = 0 ; index < str_arr_sorted.length - 1; index++)
    {
        const element = str_arr_sorted[index];
        const next_element = str_arr_sorted[index+1];

        if(element == next_element) return true;
    }
    return false;
}

function hasDupLettersHash(data)
{
    var str_hash = new Set();
    var str_arr = data.split('');

    for(var index = 0; index < str_arr.length; index++)
    {
        const element = str_arr[index];
        if(!str_hash.has(element)) str_hash.add(element);
        else return true;
    }

    return false;
}


main();