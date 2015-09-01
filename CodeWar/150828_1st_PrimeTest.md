##### Ploblem
Write a function that checks whether a number is prime or not (should return true or false). A prime number is any natural number that is greater than 1 and is divisible only by itself and 1.

##### Examples:

	PrimeTest(13);  //should return true. 
	PrimeTest(18);  //should return false (18 can be devided by 2;9).
	PrimeTest(-7);  //should return false (-7 can be devided by -1).

##### My Solution

	function PrimeTest(a){
    if (a <= 1) {
      return false;
    }
    var n = 2;
    while (n < a/2) {
      if (a % n === 0) {
        return false;
      }
      n += 1;
    }
    return true;
  	};
  	
  	
  