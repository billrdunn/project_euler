/* The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

  
// function to find length of Collatz sequence
  const collatzLength = (num) => {
    let tempSequence = [];
    tempSequence.push(num);
    do {
      if (num % 2 === 0) {
        num = num / 2;
        tempSequence.push(num);
      }
      else {
        num = 3 * num + 1;
        tempSequence.push(num);
      }
    } while (num != 1);
    return tempSequence.length;
  }
  
// declare variables
let longest = 0; // to store current longest sequence
let start; // starting number
let limit = 1000000;
 
// test sequence lengths starting at limit
 for (let i = limit; i > 0 ; i--) {
   if (collatzLength(i) > longest) {
     longest = collatzLength(i); // set current longest sequence
      start = i; // set starting number which gives longest sequence
   }
 }
 
 // print solution
 console.log('The solution to problem 14 is ' + start + ' which has a sequence length of ' + longest);
  
