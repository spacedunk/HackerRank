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

function roadsAndLibraries(n, c_lib, c_road, cities) {
    // Complete this function
    
    //If the cost of building a library is less than the cost of the road return the cost of the library multiplied by the number of cities
    if(c_lib < c_road) return cities.length * c_road;

    
    
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var c_lib = parseInt(n_temp[2]);
        var c_road = parseInt(n_temp[3]);
        var cities = [];
        for(cities_i = 0; cities_i < m; cities_i++){
           cities[cities_i] = readLine().split(' ');
           cities[cities_i] = cities[cities_i].map(Number);
        }
        var result = roadsAndLibraries(n, c_lib, c_road, cities);
        process.stdout.write("" + result + "\n");
    }

}