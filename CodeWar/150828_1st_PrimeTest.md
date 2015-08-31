##### Ploblem
Create a find function that takes a string and an array. If the string is in the array, return true.

##### Examples:
	find("hello", ["bye bye","hello"]) // return true
	find("anything", ["bye bye","hello"]) // return false

##### My Solution

	var find = function(string, array) {
  		for (var i = 0; i < array.length ; i++) {
    		if (string === array[i]) {
      			return true;
    		}
  		}
  		return false;
	}
  	
  	

  