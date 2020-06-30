/*
1. Create a stack class
Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

See Stack.js

*/

const Stack = require('./Stack')
const { peek, isEmpty, display } = require('./outside-functions')


const starTrek = new Stack()


starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

display(starTrek) //=> Scotty, McCoy, Spock, Kirk


//node 01-stack-class



