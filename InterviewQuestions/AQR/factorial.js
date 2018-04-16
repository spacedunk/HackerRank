function factorial(n)
{
    if(n == 0 || n == 1) return 1;
    if(n == 2) return 2;
    
    var i = n;
    var fact = n;
    while(i > 2)
    {
        fact = fact * (i-1);
        i--;
    }
    
    return fact;
}

function main()
{
    console.log(factorial(3));
    console.log(factorial(4));
    console.log(factorial(5));
}

main();