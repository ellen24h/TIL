/**
 * Created by Ellen on 2015. 11. 6..
 */
// 2.5 반복자 함수
// 반복자 함수는 배열의 각 요소에 함수를 적용한 다음 그 결과 값 또는 값의 집합 또는 새로운 배열을 반환한다.

// 2.5.1 배열을 만들지 않는 반복자 함수

// forEach() : 배열의 모든 요소에 인자로 받은 함수를 호출

function square(num) {
    console.log(num, num * num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

// every() : boolean 함수를 배열에 적용해 배열의 모든 요소가 참이면 true를 반환

function isEven(num) {
    return num % 2 == 0;
}

var nums2 = [2, 4, 6, 8, 10];
var even = nums2.every(isEven);
if (even) {
    console.log("all numbers are even");
}
else {
    console.log("not all numbers are even");
}

// some() : 배열 요소 중 한 요소라도 인자로 받은 불린 요소의 기준을 만족하면 true 반환

function isOdd(num) {
    return num % 2 == 1;
}

var nums3 = [1,2,3,4,5,6,7,8,9,10];
var someOdd = nums3.some(isOdd);
if(someOdd) {
    console.log("some numbers are odd");
}
else {
    console.log("no numbers are odd");
}

// reduce() : 누적자 함수를 인자로 받은 다음 배열의 모든 요소를 누적자 함수에 적용

function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}

var nums4 = [1,2,3,4,5,6,7,8,9,10];
var sum = nums4.reduce(add);
console.log(sum);

var words = ["hello ", "world "];
var sentence = words.reduce(add);
console.log(sentence);
console.log(sentence.length);

// reduceRight() : reduce()와 같ㅇ지만 배열의 오른쪽 요소에서 왼쪽 요소로 처리

var sentence2 = words.reduceRight(add);
console.log(sentence2);

var stc = "I love you!";



// 문자열 반대로 뒤집기

var name = "I love you!";
var nameReverse = name.split("").reverse().join("");


console.log(nameReverse);

var lengthOfName = name.length;
var namearr = [];

for (var i = 0; i < lengthOfName; i++) {
    namearr[i] = name[i];
}

console.log(namearr);

// 2.5.2 새 배열을 반환하는 반복자 함수

// map() : 배열의 각 요소에 함수를 적용하는 결과를 포함하는 새 배열을 반환, forEach()와 비슷
// filter() : 배열의 모든 요소가 불린 함수를 만족하는 요소를 포함하는 새 배열을 반환 every()와 비슷

function curve(grade) {
    return grade += 5;
}

var grades = [70, 60, 80, 90, 95];
var newgrades = grades.map(curve);

function passing(num) {
    return num >= 60;
}

var grades2 = [];
for (var i = 0; i < 20; ++i) {
    grades2[i] = Math.floor(Math.random() * 101);
}

var passGrades = grades2.filter(passing);
console.log("All grades: ");
console.log(grades2);
console.log("Passing grades: ");
console.log(passGrades);


