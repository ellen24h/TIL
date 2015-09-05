### problem 
__Number Of Occurrences__

__Description:__

YThe numberOfOccurrences function must return the number of occurrences of an element in an array.

### Examples

	var arr = [0,1,2,2,3];
	arr.numberOfOccurrences(0) === 1;
	arr.numberOfOccurrences(4) === 0;
	arr.numberOfOccurrences(2) === 2;
	arr.numberOfOccurrences("a") === 0;

### My Solution

	Array.prototype.numberOfOccurrences = function(key) {
	  var count = 0;
	  for (var i = 0 ; i < this.length ; i++) {
	    if (this[i] === key)
	      count += 1;
	  } 
	  return count;
	}

### Impressive Solution

	Array.prototype.numberOfOccurrences = function(search) {
	  return this.filter( function(num){ return search === num } ).length;
	}

Array.filter라는 함수가 있나? 한번 찾아봐야겠다. 그리고 파라미터로 함수 들어가면 return을 잘 살펴봐라. 

### filter 메서드(Array)(JavaScript)__

콜백 함수에 지정된 조건을 충족하는 배열의 요소를 반환합니다.

	array1.filter(callbackfn[, thisArg])

__매개 변수__

정의
array1
필수 요소. Array 개체입니다.

callbackfn
필수 요소. 최대 3개까지 인수를 허용하는 함수입니다. filter 메서드는 배열에 있는 각 요소마다 한 번씩 callbackfn 함수를 호출합니다.

thisArg
선택 사항입니다. this 키워드가 callbackfn 함수에서 참조할 수 있는 개체입니다. thisArg가 생략되면 undefined가 this로 사용됩니다.

__예제__
다음 예제에서는 filter 메서드의 사용법을 보여 줍니다.

JavaScript

	// Define a callback function.
	function CheckIfPrime(value, index, ar) {
	    high = Math.floor(Math.sqrt(value)) + 1;
	    
	    for (var div = 2; div <= high; div++) {
	        if (value % div == 0) {
	            return false;
	        }
	    } 
	    return true;
	}

	// Create the original array.
	var numbers = [31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53];

	// Get the prime numbers that are in the original array. 
	var primes = numbers.filter(CheckIfPrime);

	document.write(primes);
	// Output: 31,37,41,43,47,53

다음 예제에서는 callbackfn 인수에 콜백 함수의 코드가 포함되어 있습니다.

JavaScript

	// Create the original array.
	var arr = [5, "element", 10, "the", true];

	// Create an array that contains the string
	// values that are in the original array.
	var result = arr.filter(
	    function (value) {
	        return (typeof value === 'string');
	    }
	);

	document.write(result);
	// Output: element, the

다음 예제에서는 window DOM 개체의 "css" 문자로 시작되는 속성 이름을 표시합니다.

JavaScript

var filteredNames = Object.getOwnPropertyNames(window).filter(IsC);

    for (i in filteredNames)
        document.write(filteredNames[i] + "<br/>");

	// Check whether the string starts with "css".
	function IsC(value) {
	    var firstChar = value.substr(0, 3);
	    if (firstChar.toLowerCase() == "css")
	        return true;
	    else
	        return false;
	    }

	// Output:
	// CSSRule
	// CSSFontFaceRule
	// CSSImportRule
	// CSSMediaRule
	// CSSNamespaceRule
	// CSSPageRule
	// CSSRuleList
	// CSSStyleDeclaration
	// CSSStyleRule
	// CSSStyleSheet

다음 예제에서는 this 키워드가 참조할 수 있는 개체를 지정하는 thisArg 인수를 사용하는 방법을 보여 줍니다.

JavaScript

	var checkNumericRange = function(value) {
	    if (typeof value !== 'number')
	        return false;
	    else 
	        return value >= this.minimum && value <= this.maximum;
	}

	var numbers = [6, 12, "15", 16, "the", -12];

	// The obj argument enables use of the this value
	// within the callback function.
	var obj = { minimum: 10, maximum: 20 }

	var result = numbers.filter(checkNumericRange, obj);

	document.write(result);
	// Output: 12,16

filter 메서드는 배열 대신 문자열에 적용할 수 있습니다. 다음 예제에서는 이 작업을 수행하는 방법을 보여 줍니다.

JavaScript

	// Define a callback function that returns true
	// if the current array element follows a space
	// or is the first character.
	function CheckValue(value, index, ar) {
	    if (index == 0)
	        return true;
	    else
	        return ar[index - 1] === " ";
	}

	// Create a string.
	var sentence = "The quick brown fox jumps over the lazy dog."; 

	// Create an array that contains all characters that follow a space.
	var subset = [].filter.call(sentence, CheckValue); 

	// You can use this alternative syntax.
	//var subset = Array.prototype.filter.call(sentence, CheckValue);

	document.write(subset);
	// Output: T,q,b,f,j,o,t,l,d

### What I learned

	Object.prototype.numberOfOccurrences = function() {

	}

prototype을 구현할 때, `this`는 `Object`를 지칭하는 것이다.

array의 length를 구할 때는 array.length 를 사용한다.


