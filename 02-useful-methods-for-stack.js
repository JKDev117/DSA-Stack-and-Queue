/*
2. Useful methods for a stack  
Using the Stack class above, implement the following helper functions outside of the class:

peek(): allows you to look at the top of the stack without removing it  

isEmpty(): allows you to check if the stack is empty or not  

display(): to display the stack - what is the 1st item in your stack?  

Remove McCoy from your stack and display the stack  


see outside-functions.js
*/

const Stack = require('./Stack')
const { peek, isEmpty, display } = require('./outside-functions')

const starTrek = new Stack()


starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

/* ---------------------------------------------- */


console.log(peek(starTrek)) //=> Scotty
console.log()

console.log(isEmpty(starTrek)) //=> false
console.log()

display(starTrek) //=> Scotty, McCoy, Spock, Kirk
console.log()

starTrek.pop()
starTrek.pop()
display(starTrek) //=> Spock, Kirk


//node 02-useful-methods-for-stack