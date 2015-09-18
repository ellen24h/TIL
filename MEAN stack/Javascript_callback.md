# callback function

### callback function의 기원과 정의 

- 함수형 프로그래밍에서부터 발생한 패러다임
	- 함수형 프로그래밍이란, 함수를 인자처럼	사용하는 프로그래밍
- callback function : 함수를 인자로 넘겨서 사용하겠다.

### What is callback or higher-order function? 

- 파라미터로 함수를 전달한다.
- 전달받은 함수를 그 함수의 내부에서 실행시킨다.
- 콜백함수는 즉 콜백패턴

example 1:

		//Note that the item in the click method's parameter is a function, not a variable.
		//The item is a callback function

		$("#btn_1").click(function() {
		  alert("Btn 1 Clicked");
		});

example 2:
		
		//forEach라는 함수안에 익명의 함수를 넣어서 forEach 구문이 동작을 하게 하고 있습니다.

		var friends = ["Mike", "Stacy", "Andy", "Rick"];
		 
		friends.forEach(function (eachName, index){
		console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
		});

### How callback functions work? 

### Why user `var self = this;`?

- self is being used to maintain a reference to the original this even as the context is changing. 
- It's a technique often used in event handlers (especially in closures).

### reference

- http://alistapart.com/article/getoutbindingsituations

