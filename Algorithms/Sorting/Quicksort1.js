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

function quickSort(arr) {
    var joinedArray = [];
    var left = [];
    var right = [];
    var equals = [];
    var pivot = arr[0];

    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] == pivot) equals.push(arr[i]);
        else if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    joinedArray = joinedArray.concat(left,equals,right);
    return joinedArray;
}

function main() {
    var arr = [-1,2,-100,50,30,-7];
    var result = quickSort(arr);
    console.log(result.join(" "));
}

main();