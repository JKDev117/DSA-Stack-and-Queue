/*
3. Check for palindromes using a stack    
A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.  

Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.  

function is_palindrome(s) {  
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");  
    // Your code goes here  
}  

// True, true, true, false  
console.log(is_palindrome("dad"));  
console.log(is_palindrome("A man, a plan, a canal: Panama"));  
console.log(is_palindrome("1001"));  
console.log(is_palindrome("Tauhida"));  
*/

const Stack = require("./Stack");


function is_palindrome(s) {  
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");  
    // Your code goes here  
    const array = s.split('')
    let s_backwards = ''
    const stack = new Stack()
    array.forEach(element => stack.push(element))
    for(let i=0; i < s.length; i++){
        s_backwards += stack.pop()
    }
    return s == s_backwards
}  


console.log(is_palindrome("dad"));  //=> true
console.log(is_palindrome("A man, a plan, a canal: Panama"));  //=> true  
console.log(is_palindrome("1001"));  //=> true  
console.log(is_palindrome("Tauhida"));  //=> false


//node 03-palindrome