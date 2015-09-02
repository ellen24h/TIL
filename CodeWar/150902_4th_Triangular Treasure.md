### preliminary knowledge : Recursion (JavaScript)

Recursion is an important programming technique, in which a function calls itself.
An Example of Recursion
One example is the calculation of factorials. The factorial of a number n is calculated by multiplying 1 * 2 * 3 *... n. The following example shows how to calculate factorials iteratively, that is, by using a while loop in which the result is calculated.

JavaScript

	function factorial(num)
	{
	    // If the number is less than 0, reject it.
	    if (num < 0) {
	        return -1;
	    }
	    // If the number is 0, its factorial is 1.
	    else if (num == 0) {
	        return 1;
	    }
	    var tmp = num;
	    while (num-- > 2) {
	        tmp *= num;
	    }
	    return tmp;
	}

	var result = factorial(8);
	document.write(result);

	// Output: 40320

You can make the example recursive very simply. Instead of using a while loop to calculate the value, you can simply call factorial again, passing in the next lowest value. The recursion stops when the value is 1.

JavaScript

	function factorial(num)
	{
	    // If the number is less than 0, reject it.
	    if (num < 0) {
	        return -1;
	    }
	    // If the number is 0, its factorial is 1.
	    else if (num == 0) {
	        return 1;
	    }
	    // Otherwise, call this recursive procedure again.
	    else {
	        return (num * factorial(num - 1));
	    }
	}

	var result = factorial(8);
	document.write(result);

	// Output: 40320

### Problem

Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

	1st (1)   2nd (3)    3rd (6)
	*          **        ***
	           *         **
	                     *
                     
You need to return the nth triangular number. You should return 0 for out of range values:

	  triangular(0)==0,
	  triangular(2)==3,
	  triangular(3)==6,
	  triangular(-10)==0
	  
### My Solution

	// Return the nth triangular number
	function triangular( n ) {
	  if (n <= 0)
	    return 0;
	  else if (n === 1)
	    return 1;
	  else
	    return (n + triangular(n - 1));
	}
	
### Impressive Solution

	// Return the nth triangular number
	function triangular( n ) {
	  return (n > 0) ? ((n * n) + n) / 2 : 0;
	}
	
? : 이거 쓰는 방법을 잘 모른다.
이거 쓰면 유용한 것 같은데, 한번 찾아봐야겠다.

### Conditional (Ternary) Operator (?:) 3항 연산자(JavaScript)

Returns one of two expressions depending on a condition.

	test ? expression1 : expression2

__Parameters__
- test
	- Any Boolean expression.
- expression1
	- An expression returned if test is true. May be a comma expression.
- expression2
	- An expression returned if test is false. More than one expression may be a linked by a comma expression.

__Remarks__
The ?: operator can be used as a shortcut for an if...else statement. It is typically used as part of a larger expression where an if...else statement would be awkward. 

For example:

JavaScript

	var now = new Date();
	var greeting = "Good" + ((now.getHours() > 17) ? " evening." : " day.");

The example creates a string containing "Good evening." if it is after 6pm. The equivalent code using an if...else statement would look as follows:

JavaScript

	var now = new Date();
	var greeting = "Good";
	if (now.getHours() > 17)
	   greeting += " evening.";
	else
	   greeting += " day.";


