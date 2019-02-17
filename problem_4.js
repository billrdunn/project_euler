/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// immediately invoked function. variables in this function's scope are automatically deallocated when the function ends (so I can use console in chrome browser)


  // function to test if a number is palindromic
  const isPalindrome = (num) => {
    let stringNum = num.toString(); // convert number to string
    let stringNumLength = stringNum.length; // find length of string
    let iterations = Math.floor((stringNumLength / 2)); // set number of iterations needed to test for palindrome
    for (let i = 0; i < iterations; i++) { // starting from outside test if each pair of numbers match. if not, return false
      if (stringNum[i] !== stringNum[stringNumLength - 1 - i]) {
        return false;
        }
    }
    return true;
  };
  
  // main
  // variable declarations
  let testNum;
  let currentLargest = 0;
  let iValue; // first number
  let jValue; // second number
  let max = 999;
  let min = 100;
  
  // multiply all numbers together. only check for new palindrome if test number is larger than current largest palindrome
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--){
      testNum = i * j;
      if (testNum > currentLargest ) {
        if (isPalindrome(testNum)){
          currentLargest = testNum;
          iValue = i;
          jValue = j;
        }
      }
    }
  }
  
  // print solution
  console.log('The solution to problem 4 is ' + iValue + ' x ' + jValue + ' = ' + currentLargest);

  
