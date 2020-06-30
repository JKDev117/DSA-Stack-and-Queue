/*
5. Sort stack  
Write a program to sort a stack such that the smallest items are on the tush (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).  
*/

const Stack = require('./Stack')
const { peek, isEmpty, display } = require('./outside-functions')
const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(5)
stack.push(7)
stack.push(6)
display(stack)// => 6, 7, 5, 4, 2, 1

function sortStack(stack){

}





//node 05-sort-stack
