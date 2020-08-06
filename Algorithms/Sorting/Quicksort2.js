//Quicksort1.js

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function quickSort(arr,left,right) {
    //Partition
    var pivotVal = arr[parseInt((left + right) / 2)];
    arr = partition(arr,left,right,pivotVal);
    console.log(pivotVal);
    console.log(arr);
    //Quicksort Left
    //QuickSort Right
}

function partition(arr, left, right,pivotVal)
{
    var tempArray = arr;
    while (left <= right)
    {
        while(pivotVal < tempArray[left])
        {
            left++;
        }

        while(pivotVal > tempArray[right])
        {
            right--;
        }

        if(left <= right)
        {
            var tempVal = tempArray[left];
            tempArray[left] = tempArray[right];
            tempArray[right] = tempVal;
            left++;
            right--
        }
    }
    tempArray.index = left;
    return tempArray;
    
}



function main() {
    var arr = [-1,2,-100,50,30,-7,0,45,-1000];
    var result = quickSort(arr,0,arr.length-1);
    //console.log(result.join(" "));
    console.log(result);
}

main();