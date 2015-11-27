### Problem
Description:

Description:

Vasya wants to climb up a stair of certain amount of steps (Input parameter 1). There are 2 simple rules that he has to stick to.

Vasya can climb 1 or 2 steps at each move.
Vasya wants the number of moves to be a multiple of a certain integer. (Input parameter 2).
Task:

What is the MINIMAL number of moves making him climb to the top of the stairs that satisfies his conditions?

Input

Number of stairs: 0 < N ≤ 10000 ;
Integer to be multiplied : 1 < M ≤ 10;
Output

Return a single integer - the minimal number of moves being a multiple of M;
If there is no way he can climb satisfying condition return - 1 instead.

Examples

    numberOfSteps(10, 2) => 6  // Sequence of steps : {2, 2, 2, 2, 1, 1}

    numberOfSteps(3, 5) => -1 // !Possible sequences of steps : {2, 1}, {1, 2}, {1, 1, 1}

### My solution
    function numberOfSteps(steps, m){
      if(m > steps) {
        return -1;
      }
      if(m === 1) {
        return steps/2
      }
      if(steps % 2 === 0) {
        for (var i = steps/2 ; i <= steps ; i++) {
          if (i % m === 0) {
            return i;
          }
        }
      }
      else {
        for (var i = steps/2 + 0.5 ; i <= steps ; i++) {
          if (i % m === 0) {
            return i;
          }
        }
      }
      return -1;
    }

### Impressive Solutions
    function numberOfSteps(steps, m){
      if (steps < m) {
        return -1;
      }

      if (steps % 2 == 0 && (steps / 2) % m == 0) {
          return (steps / 2);
      }

      return (steps / 2) + m - ((steps / 2) % m);
    }

### What I Learned
    규칙을 찾아서 수식화 하면 for문을 쓰지 않아도 되었을 테다.
    다시 구현해봐야겠다.