/*20. Write a JavaScript program to implement a stack that checks if
a given element is present or not in the stack.*/
class Stack {
    constructor() {
        this.items = [];
    }

    // Method to push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Method to pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to check if an element is present in the stack
    contains(element) {
        return this.items.includes(element);
    }

    // Method to get the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in the stack";
        }
        return this.items[this.items.length - 1];
    }
}

// Example usage:
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);

console.log("Is 10 present in the stack?", stack.contains(10)); // Output: true
console.log("Is 20 present in the stack?", stack.contains(20)); // Output: false