function peek(stack){
    return stack.top.data
}

function isEmpty(stack){
    return stack.top == null
}

function display(stack){
    let curr = stack.top
    while(curr !== null){
        console.log(curr.data)
        curr = curr.next
    }
}

module.exports = { peek, isEmpty, display }

