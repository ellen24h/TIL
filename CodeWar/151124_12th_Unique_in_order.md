151124_12th_Unique_in_order.md

### Problem

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

	uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
	uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
	uniqueInOrder([1,2,2,3,3])       == [1,2,3]

### My Solution


	var uniqueInOrder=function(iterable){
	  var result = [];
	  for (var i = 0; i < iterable.length; i++) {
	    if(i === 0) {
	      result.push(iterable[i]);
	    }
	    else if(iterable[i] === iterable[i-1]) {
	      continue;    
	    }
	    else {
	      result.push(iterable[i]);
	    }
	  }
	  return result;
	}

### Impressive Solutions

- readable and clean	

		function uniqueInOrder(it) {
		  var result = []
		  var last
		  
		  for (var i = 0; i < it.length; i++) {
		    if (it[i] !== last) {
		      result.push(last = it[i])
		    }
		  }
		  
		  return result
		}

- clever

		var uniqueInOrder = function (iterable)
		{
		  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
		}