/**
 * Created by Ellen on 2015. 11. 8..
 */
function pow(num, exp) {
    debugger;
    if (exp === 0)
        return 1;
    else
        return num * pow(num, exp-1);
}

console.log(pow(2,4));

var aData= [0, false, -1, 1, null, "", "  ", undefined, NaN];

for (var i = 0 ; i < aData.length ; i++) {
    if(aData[i]) {
        console.log(aData[i] + " is ture ");
    }
}

var a = null;
a = 0 + null;
var myValue = a || "default value";

console.log(myValue);

function addNumber (num, func) {
    value = func(num);
    return value;
}

var newfun = function(arg) {
    return ++arg;
};

console.log(addNumber(2, newfun));

function addNumber2 (num, func) {
    var value = func(num);
    return function(){
        return ++value
    };
}

var newfun2 = function(arg) {
    return ++arg;
};
console.log(addNumber2(2, newfun2))
