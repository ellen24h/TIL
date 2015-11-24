151124_13th_Lucas_numbers.md

### Problem
Description:

Lucas numbers are numbers in a sequence defined like this:

    L(n) = 2 if n = 0

    L(n) = 1 if n = 1

otherwise

    L(n) = L(n - 1) + L(n - 2)
Your mission is to define a function lucasnum(n) that returns the nth term of this sequence.

Note: It should work for negative numbers as well (how you do this is you flip the equation around, so for negative numbers: L(n) = L(n + 2) - L(n + 1))

Examples:

    lucasnum(-10) -> 123

    lucasnum(-5) -> -11

    lucasnum(-1) -> -1

    lucasnum(0) -> 2

    lucasnum(1) -> 1

    lucasnum(5) -> 11

    lucasnum(10) -> 123

### My solution

- 처음에는 재귀로 풀었다.

        function lucasnum(n) {
          if (n === 0) {
            return 2;
          }
          if (n === 1) {
            return 1;
          }
          if (n > 0) {
            return lucasnum(n-1) + lucasnum(n-2);
          }
          if (n < 0) {
            return lucasnum(n+2) - lucasnum(n+1);
          }
        }

- 그러나, 재귀가 시간이 많이 걸려서 dynamic programming으로 변경하였지만, 음수를 처리하느라 코드가 readable하지도 않고, 깔끔하지도 않다.

        function lucasnum(n) {
          if (n == -1) {
            return -1;
          }
          if (n < 0) {
            var nn = -n;
          }
          else {
            var nn = n;
          }
          var val = [];
          for (var i = 0; i < nn; i++) {
            val[i] = 0;
          }
          if (nn === 0) {
            return 2;
          }
          else if (nn === 1) {
            return 1;
          }
          else if (nn > 0) {
            val[0] = 2;
            val[1] = 1;
            for (var i = 2; i <= nn; i++) {
              val[i] = val[i-1] + val[i-2];
            }
          }
          if (n < 0 && n % 2 !== 0){
            return -val[nn]
          }
          return val[nn]
        }

### Impressive Solutions
    # 1
    function lucasnum(n){
      var ret = [2,1], pre = 1;
      if (n < 0 && n % 2) pre = -1;
      n = Math.abs(n);
      for (var i = 2; i <=n; i++) ret.push(ret[i-1]+ret[i-2]);
      return pre * ret[n];
    }

    # 2
    function lucasnum(n){
      var luc = Math.pow(((1+Math.sqrt(5))/2),n) + Math.pow(((1-Math.sqrt(5))/2),n);
      return Math.round(luc);
    }

    # 3
    var saida = new Array();
    function lucasnum(n){
      if (n == 0) {
        return 2;
      } else {
        if (n == 1) {
          return 1;
        }
      }

      if (!saida[n]) {
        if (n > 0) {
          saida[n] = lucasnum(n-1) + lucasnum(n-2);
        } else {
          saida[n] = lucasnum(n+2) - lucasnum(n+1);
        }    
      }

      return saida[n];
    }

