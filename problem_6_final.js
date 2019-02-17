/* The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

  
  // variable declarations
  const limit = 100; // limit of numbers included
  let sumOfSquares = 0;
  let sumOfIntegers = 0;
  let squareOfSum;
  let difference;
  
  // calulate sum of squares and sum of integers
  for (let i = 1; i <= limit; i++) {
    sumOfSquares += i*i;
    sumOfIntegers += i;
  }
  
  // calculate square of sum of integers
  squareOfSum = sumOfIntegers * sumOfIntegers;
  
  // calculate difference
  difference = squareOfSum - sumOfSquares;
  
  // print solution
  console.log('The solution to problem 6 is ' + difference);
  
