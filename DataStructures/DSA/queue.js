/**
 * Created by Ellen on 2015. 11. 8..
 */
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.isEmpty = isEmpty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue(element) {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length-1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function isEmpty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

// test

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue(3);

console.log(q.toString());
var ellen = q.dequeue();
//console.log(ellen);
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());




