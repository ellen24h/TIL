/**
 * Created by Ellen on 2015. 11. 8..
 */

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

// test code

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);

console.log("length: " + s.length());
console.log(s.peek());

var popped = s.pop();
console.log("popped: " + popped);
console.log(s.peek());

s.push(4);
console.log(s.peek());
s.clear();
console.log("length: " + s.length());

