/**
 * Created by Ellen on 2015. 11. 3..
 */

// 2.4 변형자 함수

// 개별적으로 요소를 건드리지 않고 배열 전체 내용을 고치는 함수다.

// 2.4.1 배열에 요소 추가하기
// push() 함수, unshift() 함수는 각각 배열에 요소를 추가하고 배열의 요소를 제거하는 함수
// push() : 배열의 끝에 요소를 추가한다.

var nums = [1,2,3,4,5];
console.log(nums);
nums.push(6);
console.log(nums);

// length 이용하는것보다 훨씬 직관적임

nums[nums.length] = 7;
console.log(nums);

// 배열의 처음에 요소를 추가하는 귀찮은 방법

var nums2 = [2,3,4,5];
var newnum = 1;
var N = nums2.length;
for (var i = N ; i >= 0; --i) {
    nums2[i] = nums2[i-1];
}
nums2[0] = newnum;
console.log(nums2);

// 위 방법은 배열에 저장된 요소의 수가 많을수록 효율성이 떨어짐
// 왜냐하면 for문을 돌면서 하나씩 하나씩 다 옮겨야 하기 때문
// 얼만큼 들까?
// TODO: N만큼 드나? 물어보기

// 그러나 unshift() 함수가 이러한 귀찮은 일들을 해결해준다.
// unshift() : 배열의 맨 앞에, 한개 혹은 다수의 요소를 추가할 수 있다.

var zero = 0;
nums2.unshift(zero);
console.log(nums2);
nums2.unshift(zero, 5, 4);
console.log(nums2);

// 2.4.2 배열의 요소 삭제하기

// pop() : 배열의 마지막 요소 제거
var nums3 = [1, 2, 3, 4, 5, 9];
nums3.pop();
console.log(nums3); // [1, 2, 3, 4, 5]

// shift() : 배열의 첫번째 요소 제거
var nums4 = [3, 4, 5, 6, 7];
nums4.shift();
console.log(nums4); // [4, 5, 6, 7]

// pop(), shift() 함수는 제거된 요소를 반환하므로 핑료하다면 반환된 요소를 변수에 저장할 수 있음

var nums5 = [0, 1, 2, 3, 4, 5];
var last = nums5.pop();
var first = nums5.shift();

console.log(last); // 5
console.log(first); // 0
console.log(nums5); // [1, 2, 3, 4]

// 2.4.3 배열 중간에 요소를 추가하거나 배열의 중간에 있는 요소 삭제하기








