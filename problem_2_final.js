/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/


  // variable declarations
  const limit = 4000000; // limit of sequence
  let penultimate = 1; // starting number
  let ultimate = 2; // second number
  let temp;
  let evenNumbers = [];
  
  // main
  // deal with first two numbers separately
  for (i = penultimate; i <= ultimate; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  
  // continue with sequence and push to array if even
  while (ultimate < limit) {
  
    // shift sum forward by one
    temp = ultimate;
    ultimate = penultimate + ultimate;
    penultimate = temp;
    
    if (ultimate > limit) {
      break; // quit loop when limit is reached
    }
    
    if (ultimate % 2 === 0) {
      evenNumbers.push(ultimate); // push to array if even
    }
  }
  
  // calculate sum of elements in array
  let sum = evenNumbers.reduce((a, b) => a + b, 0);
  
  // print solution
  console.log('The solution to problem 2 is ' + sum);
  