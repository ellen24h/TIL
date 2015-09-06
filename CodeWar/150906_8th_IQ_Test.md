### problem
__Description:__

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

### Examples

	iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

	iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

### My Solution

	function iqTest(numbers){
	  var arr = numbers.split(" "),
	      count = 0,
	      count_even = 0,
	      count_odd = 0,
	      pos_of_even = 0,
	      pos_of_odd = 0;
	  
	  for (var i = 0; i < arr.length ; i++) {
	    count += 1;
	    if (parseInt(arr[i]) % 2 === 0) {
	      count_even += 1;
	      pos_of_even = count;
	     }
	    else {
	      count_odd += 1;
	      pos_of_odd = count;
	    }
	  }

	  if (count_even === count_odd)
	    return -1;
	  else if (count_even > count_odd) 
	    return pos_of_odd;
	  else
	    return pos_of_even;
	}

### Impressive Solutions

	function iqTest(numbers){
	  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
	  
	  var odd = numbers.filter(function(el){ return el % 2 === 1});
	  var even = numbers.filter(function(el){ return el % 2 === 0});
	  
	  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
	}

### What I Learned
	
다음번에는 나도 numbers.filter도 써보고, 3항연산자도 써보자.
그리고 .map도 한번 써보자!

