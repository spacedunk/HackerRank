function processData(input) {
    var n = input[0];
    var temp_arr;
    for(var i = 1; i <= n; i++)
    {
        temp_arr = input[i].split(' ');
        temp_arr = temp_arr.map(Number);
        console.log((temp_arr[2] + (temp_arr[2] - temp_arr[0])) + ' ' + (temp_arr[3] + (temp_arr[3] - temp_arr[1])));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split("\n"));
});
