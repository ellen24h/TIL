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

// reduce() :

