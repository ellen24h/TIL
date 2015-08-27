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