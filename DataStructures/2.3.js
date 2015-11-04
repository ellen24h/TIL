/**
 * Created by Ellen on 2015. 11. 3..
 */

// 2.3 접근자 함수
// 접근자 함수란? 배열 요소에 접근할 수 있는 함수. 특정 값을 포함하는 결과 배열을 반환한다.

// 2.3.1 값 검색하기

// indexOf() 함수를 사용하면 인자로 제공된 값이 배열에 존재하는지 알려줌
// 값이 있으면 인덱스 위치를 반환하고 값이 배열에 없으면 -1을 반환함

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
var position = names.indexOf("David");

if (position >= 0) {
    console.log("Found at position " + position);
}

else {
    console.log("not found in array.");
}

// indexOf() 함수로 찾으려는 값이 배열에 여러개 있으면 첫번째로 발견한 인자의 인덱스 반환함
// 마지막 꺼 찾고 싶으면 lastIndexOf() 쓰면 됨

var names2 = ["David", "Cynthia", "Raymond", "David", "Jennifer"];
var firstPosition = names.indexOf("David");
var lastPosition = names.lastIndexOf("David");


console.log("First found at position " + firstPosition);
console.log("Last found at position " + lastPosition);

// 2.3.2 배열을 문자열로 표현하기
// join() 함수와 toString() 함수는 배열을 문자열 형식으로 반환함
// 두 함수 다 배열의 요소를 콤마(,) 로 구분하는 문자열 반환

var names3 = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var namestr = names3.join();
console.log(namestr);
namestr = names3.toString();
console.log(namestr);

// 2.3.3 기존 배열을 이용하여 새 배열 만들기
// concat() 함수, splice() 함수는 기존 배열을 이용해 새 배열을 만드는 함수임
// concat() 함수는 두 개 이상의 배열을 합쳐 새 배열을 만들고
// splice() 함수는 기존 배열의 서브셋으로 새 배열을 만듬

var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv);
itDiv = dmpDept.concat(cisDept);
console.log(itDiv);

// 첫번째 itDiv는 cis배열이 면저고 두번째는 dmp 배열이 먼저임

// splice(사용할 첫 요소의 위치, 기존 배열에서 사용할 요소의 수)
// splice() 예제

itDiv = ["Mike", "Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"];
dmpDept = itDiv.splice(3,3);
cisDept = itDiv;

console.log(dmpDept); // [ 'Raymond', 'Cynthia', 'Danny' ]
console.log(cisDept); // [ 'Mike', 'Clayton', 'Terrill', 'Jennifer' ] splice 하고 남은것들이 들어가있다.



