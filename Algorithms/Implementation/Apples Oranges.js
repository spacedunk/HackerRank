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

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);
    
    //Make everything in reference to a
    t = t - a;
    s = s - a;
    b = b - a;
    a = 0;
    
    var arr = {t,s,b,a};
    
    apple = apple.map(function(c){
        return (((c >= this['s']) && (c <= this['t'])) ? 1 : 0);
    },arr);
    
    orange = orange.map(function(c){
        return ((b+c >= this['s']) && (b+c <= this['t']) ? 1 : 0)
    }, arr);
    
    var tot_apples = 0;
    var tot_oranges = 0;
    
    var obj = {tot_apples,tot_oranges};
    apple.forEach(function(c){
        this['tot_apples'] += c;
    },obj);
    
    orange.forEach(function(c){
        this['tot_oranges'] = this['tot_oranges'] + c;
    },obj);
    console.log(obj['tot_apples']);
    console.log(obj['tot_oranges']);

}