/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 Find the sum of all the multiples of 3 or 5 below 1000.
 */

  

// function to find if a number is a factor of another number
const factorOf = (num1, num2) => {
  if (num2 % num1 === 0){
    return true;
  }
};

// variable declarations
const limit = 1000;
let sum = 0;

// main
// add integer to sum if it is a multiple of 3 or 5
for (let i = 1; i < limit; i++) {
  if (factorOf(3,i) || factorOf(5,i)) {
    sum += i;
  }
}

// print solution
console.log('The solution to problem 1 is ' + sum);

