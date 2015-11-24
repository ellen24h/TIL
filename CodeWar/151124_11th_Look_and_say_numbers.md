151124_11th_Look_and_say_numbers.md

### Problem
__Look and say numbers__

Description:

There exists a sequence of numbers that follows the pattern

          1
         11
         21
        1211
       111221
       312211
      13112221
     1113213211
          .
          .
          .
Starting with "1" the following lines are produced by "saying what you see", so that line two is "one one", line three is "two one(s)", line four is "one two one one".

Write a function that given a starting value as a string, returns the appropriate sequence as a list. The starting value can have any number of digits. The termination condition is a defined by the maximum number of iterations, also supplied as an argument.


### My Solution

    function lookAndSay(data,len){
      var list = [];
      var result = [];
      while(len > 0) {
        for (var i = 0 ; i < data.length ; i++) {
          if (i === 0) {
            list.push(1);
            list.push(data[i]);
          }
          else if (data[i] === list[list.length-1]) {
            list[list.length-2]++;
          }
          else {
            list.push(1);
            list.push(data[i]);
          }
        }  
        result.push(list.join(""));
        console.log(list.join(""));
        data = list.join("");
        list = []; // 이 부분을 생각하지 못해서 생긴 Bug로 오래 시간이 걸렸다.
        len--;
      }
      return result;
    }


