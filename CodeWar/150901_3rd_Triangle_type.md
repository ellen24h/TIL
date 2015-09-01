##### Problem
In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).


##### Examples:

	triangleType(2, 4, 6); // return 0 (Not triangle)
	triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
	triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
	triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
	
If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.

There is very small chance of random test to fail due to round-off error, in such case resubmit your solution.

##### My solution
    function triangleType(a, b, c){
      var x, y, z = 0;
      
      if (a <= b) {
        if (b <= c) {
          z = c;
          x = a;
          y = b;
        }
        else {
          z = b;
          x = a;
          y = c;
        }  
      }
      else {
        if (a <= c) {
          z = c;
          x = a;
          y = b;
        }
        else {
          z = a;
          x = b;
          y = c;
        }
      } 

      if (x + y <= z || x*y*z === 0){
        return 0;
      }
      if ((x*x) + (y*y) > z*z){
        return 1;  
      }
      if ((x*x) + (y*y) === z*z){
        return 2;
      }  
      if ((x*x) + (y*y) < z*z){
        return 3;
      }
    }
    
##### Impressive code

    function triangleType(a, b, c){
      var result = triangleType.ACUTE, 
          sides = [a,b,c].sort(function(a,b){return a-b}); 
      
      a = sides[0], b = sides[1], c = sides[2];
      
      if(a <= c - b) {
        result = triangleType.INVALID;
        
      } else if(c*c === a*a + b*b) {
        result = triangleType.RIGHT;
        
      } else if(c*c > a*a + b*b) {
        result = triangleType.OBTUSE;
      }
      
      return result;
    }

    triangleType.INVALID = 0;
    triangleType.ACUTE = 1;
    triangleType.RIGHT = 2;
    triangleType.OBTUSE = 3;  
    
 컨벤션도 readable하게 잘 만들어서 지킨 코드. return 한 다음에 함수 바깥에서 return값을 숫자로 변환할 생각은 하지 못했는데, 그렇게 하니까 정말 readable하구나.
 세번째 줄에 
`sides = [a,b,c].sort(function(a,b){return a-b});`
는 어떻게 이해해야 하는 지 모르겠다. 소팅을 저런식으로 할 수 있나? 그런데 일단, 배열을 만들어서 기본으로 내장된 소트메서드를 쓴다는 생각 자체를 못했던 사람으로서, 되게 우아한 코딩 방식이라는 생각이 든다.

##### 새로 알게 된 것
 컨벤션도 readable하게 잘 만들어서 지킨 코드. return 한 다음에 함수 바깥에서 return값을 숫자로 변환할 생각은 하지 못했는데, 그렇게 하니까 정말 readable하구나.

 세번째 줄에 
`sides = [a,b,c].sort(function(a,b){return a-b});`
는 어떻게 이해해야 하는 지 모르겠다. 소팅을 저런식으로 할 수 있나? 그런데 일단, 배열을 만들어서 기본으로 내장된 소트메서드를 쓴다는 생각 자체를 못했던 사람으로서, 되게 우아한 코딩 방식이라는 생각이 든다.

* 컨벤션을 만들어서 쓰면 좋다.
* Javascript에 기본적으로 있는 sort를 사용할 수 있다.
* String같은 경우, array.sort()를 하면 알파벳 순서대로 sorting된다.
* Number는 parameter로 `function(a, b){return a-b}`을 넣어주면 오름차순, `a-b`대신 `b-a`를 넣으면 내림차순으로 sorting된다.

예를 들어,

Sort numbers in an array in ascending order:

	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a, b){return a-b});

The result of points will be:

	1,5,10,25,40,100


Sort numbers in an array in descending order:

	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a, b){return b-a});

The result of points will be:

	100,40,25,10,5,1


  