/**
 * Created by Ellen on 2015. 11. 4..
 */

function avg() {
    var sum = 0;
    for(var i = 0; i < arguments.length; ++i) {
        if (typeof(arguments[i]) === "string") {
            console.log ("error 입니다.");
            return -1;
        }
        sum += arguments[i];
    }
    console.log(sum/arguments.length);
}

avg(10,20,30,40,100); // 40
avg(10,20); //15
avg(10,20,"30",40); //error입니다

function dummy(arr) {
    return arr.reverse();
}
var arr = [99, 22];
var result = dummy(arr);
console.log(result); //[22, 99]
console.log(arr); //[22, 99]

