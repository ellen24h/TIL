### Problem
__Throwing Dart__

Description:

You've just recently been hired to calculate scores for a Dart Board game! 

Scoring specifications:
0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5

If all radiuses are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radiuses (can be integers and/or floats), 
and returns a total score using the above specification.
An empty array should return 0.

### Examples:

	scoreThrows( [1, 5, 11] ) => returns 15 
	scoreThrows( [15, 20, 30] ) => returns 0 
	scoreThrows( [1, 2, 3, 4] ) => returns 140

### My Solution

	function scoreThrows(radiuses){
	  var total_point = 0,
	      point10 = 0,
	      point5 = 0,
	      point0 = 0;
	  
	  if (radiuses.length === 0) return 0; 
	  
	  point10 = radiuses.filter(function(radius){return radius < 5}).length;
	  point5 = radiuses.filter(function(radius){return (radius >= 5 && radius <= 10)}).length;
	  
	  total_point =  point10*10 + point5*5 + ((point10 === radiuses.length) ? 100 : 0);
	  
	  return total_point;
	}

### Best Practices

	function scoreThrows(radiuses){

	  if (radiuses.length <= 0) { return 0 }
	  
	  var score = 0
	  var award = true
	  for(var i = 0; i < radiuses.length; i++) {
	    if      (radiuses[i] < 5)   { score += 10 }
	    else if (radiuses[i] <= 10) { score += 5; award = false }
	    else                        { award = false }
	  }
	  
	  if (award) { score += 100 }
	  
	  return score;
	}

### What I learned

filter와 3항연산자를 사용해봐야지, 하고 마음먹었는데
실제로 사용해서 구현할 수 있어서 매우 기쁘고 만족스럽다.
그러나 code가 readable한가? 하는 건 일단 차치했다.
어쨌든 for문을 사용하지 않고 다른 방식으로 코드를 짤 수 있게 되어 기쁘다.
또한 Codewars에서 7kyu로 진화하여 이제 6kyu짜리 문제를 풀게 되었다!
신난다!



