// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

const compareArrays = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};

var isPalindrome = function (x) {

    // convert the integers to an array
    let palindromeCheckArray = [];

    if (x < 0) {
        return false;
    }

    for (let i = 0; x > 0; i++) {
        palindromeCheckArray[i] = x % 10
        x = Math.floor(x / 10);
    }

    // reverse the palindrome check array
    let reversePalindromeCheckArray = []
    for (let i = 0; i < palindromeCheckArray.length; i++) {
        reversePalindromeCheckArray[i] = palindromeCheckArray[(palindromeCheckArray.length - 1) - i]
    }

    return compareArrays(palindromeCheckArray, reversePalindromeCheckArray);

};

console.log(isPalindrome(121))