/**
 * Created by Ellen on 2015. 11. 3..
 */


// 2.2.1 배열 만들기

var numbers = [];
console.log(numbers.length);

var numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.length);

var numbers3 = new Array();
console.log(numbers3.length);

var numbers4 = new Array(1, 2, 3, 4, 5);
console.log(numbers4.length);

// 파라미터가 한개만 들어가면 배열의 길이가 지정됨
var numbers5 = new Array(10);
console.log(numbers5.length);
console.log(numbers5);
console.log(typeof(numbers5[0])); //undefined

// 자바스크립트에서는 한 배열이 다양한 종류의 요소를 포함할 수 있음
var objects = [1, "Joe", true, null];
console.log(objects);

// Array.isArray() 함수를 이용하면 특정 객체가 배열인지 여부를 확인할 수 있음
var number = 3;
var arr = [7, 4, 1776];
console.log(Array.isArray(number));
console.log(Array.isArray(arr));

// new Array()보다 [] 방식을 더 추천함 - 더글라스 크락포드 자바스크립트 핵심 가이드

// 2.2.2 배열 요소 접근하고 값 고치기

var nums = [];

for (var i = 0; i < 100; ++i) {
    nums[i] = i + 1;
}

console.log(nums);

// 전위 증감 연산자와 후위 증감 연산자의 차이를 찾아봤더니, 결과 값이 같다면 전위가 성능이 좋다는 글을 발견
// 왜냐하면, 전위 연산자와 후위 연산자의 로직이 다른데, 후위 연산자는 temp에 값을 저장하고 넣었다 빼는 그런 과정들이 있기 때문(?) 더 복잡함

var numbers = [1,2,3,4,5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];

console.log(sum);

// for문과 array.lenghth를 써보자

var sum2 = 0;

for (var i = 0; i < numbers.length; ++i) {
    sum2 += numbers[i];
}

console.log(sum2);

// 2.2.3 문자열로 배열 만들기

// split() 함수 사용해보기

var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
    console.log("word" + i + ":" + words[i]);
}

// 2.2.4 배열 전체에 적용되는 기능

var nums2 = [];
for (var i = 0; i < 10; ++i) {
    nums2[i] = i+1;
}
var samenums2 = nums2;

console.log(samenums2);
console.log(nums2);

// 배열을 다른 배열로 바꿀 때 실제로는 할당 된 배열의 레퍼런스
// 그래서 원래 배열을 바꾸면 할당된 배열도 바뀐다
// 얕은 복사 = shallow copy


var nums3 = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i+1;
}
var samenums3 = nums3;
nums3[0] = 400;
console.log(samenums3[0]);

// 깊은복사 = deep copy
// call by value

function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
    arr1[0] = 300;
}


var nums4 = [];
for (var i = 0; i < 100; ++i) {
    nums4[i] = i + 1;
}

samenums5 = [];
copy(nums4, samenums5);
console.log(samenums5);
console.log(samenums5[0]);
console.log(nums4[0]);


arr1 = [1,2,3];
arr2 = [4,5,6];

function foo(arr1, arr2) {
    arr1 = [7,8,9];
}

foo(arr1, arr2);

console.log(arr1);

// javascript는 call by reference는 안된다
// array가 parameter로 들어갈 때도 array는 value가 reference이기 때문에 value가 넘어간다

// 이렇게 하면 배열의 내용을 출력할 수 있음
console.log(arr1.toString());
