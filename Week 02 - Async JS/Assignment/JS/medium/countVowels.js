/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let Vowels = ["a","e","i","o","u","A","E","I","O","U"]
  let count = 0;
  
  for(let i=0; i<str.length;i++){
   if( Vowels.includes(str[i]))
    count++
  }
  console.log(count)
}
 

countVowels("Hello, world!");

module.exports = countVowels;