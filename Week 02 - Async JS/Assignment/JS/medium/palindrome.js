/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// A palindrome is a word, phrase, number, or sequence that reads the same forward and backward, such as "racecar" or "121".


function isPalindrome(str){
  const lowercaseStr = str.toLowerCase();
  const filteredStr = lowercaseStr.split("").filter((char) => (
    char !== "?"&& 
    char !== " " &&  
    char !== "!" && 
    char !== "." &&
    char !== ",")).join("")
    

    const reversedStr = filteredStr.split("").reverse().join("")

    return filteredStr === reversedStr;
}

console.log(isPalindrome('A man, a plan, a canal. Panama'))
module.exports = isPalindrome;
