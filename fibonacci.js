function fibs(n) {
    let fibsArray = [0, 1];
    for (let i = 2; i < n; i++) {
      fibsArray[i] = fibsArray[i - 1] + fibsArray[i - 2];
    }
    return fibsArray;
  }
  
  console.log(fibs(40));
  
  function factorial(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  function fibs(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibs(n - 1) + fibs(n - 2);
    }
  }
  
  console.log(fibs(5));