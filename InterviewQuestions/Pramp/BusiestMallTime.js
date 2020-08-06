function findBusiestPeriod(data) 
{
// your code goes here

/*
[425,8]
[378,10]
[478,0]
[013,-1]
[211,0]
*/

if(!data || data.length < 1) return -1;

var max_change = Number.MIN_SAFE_INTEGER;
var max_ts = Number.MIN_SAFE_INTEGER; 

var changes = {};

for(let i = 0; i < data.length; i++)  
{ 
    let temp = new DataPoint(data[i]);

    if(!changes.hasOwnProperty(temp.ts))
    {
        changes[temp.ts] = temp;
        if(!temp.goingIn) changes[temp.ts].ppl *= -1;
    }
    else
    {
        changes[temp.ts].ppl = ((temp.goingIn)? changes[temp.ts].ppl + temp.ppl : changes[temp.ts].ppl - temp.ppl);
    }
}

console.log(changes);
return findMaxTS(changes);
}

function DataPoint(dp)
{
    this.ts = dp[0];
    this.ppl = dp[1];
    this.goingIn = (dp[2] == 1);
}

function findMaxTS(changes)
{
    var max = Number.MIN_VALUE;
    var sum = 0;
    var ts = Number.MIN_VALUE;
    
    for(var val in changes)
    {
        if(!changes.hasOwnProperty(val)) continue;
        
    sum += changes[val].ppl;

        if(sum > max)
        {
        max = sum;
        ts = val;
        }
    }

    return ts;
}

function main()
{
var data =  
 
[[1487799425,14,1],[1487799425,4,0],[1487799425,2,0],[1487800378,10,1],[1487801478,18,0],[1487801478,18,1],[1487901013,1,0],[1487901211,7,1],[1487901211,7,0]];

console.log(findBusiestPeriod(data));
}

main();