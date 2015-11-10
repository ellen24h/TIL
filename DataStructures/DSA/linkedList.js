/**
 * Created by Ellen on 2015. 11. 8..
 */

// 양방향

function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function Llist() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
    //newNode.next.previous = newNode; 해줘야 하지 않나?
}

function display() {
    var currNode = this.head;
    while(currNode.next != null) {
        console.log(currNode.next.element); //curNode.element 아닌가?
        currNode = currNode.next;
    }
}

function remove(item) {
    var currNode = this.find(item);
    if (currNode != null) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next == null;
        currNode.previous == null;
    }
}


function findLast() {
    var currNode = this.head;
    while (currNode.next != null) {
        currNode = currNode.next;
    }
    return currNode;
}

function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while(currNode.previous != null) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

// test

var cities = new Llist();
cities.insert(1, "head");
cities.insert(2, 1);
cities.insert(3, 2);
cities.insert(4, 3);
cities.display();

console.log();

cities.remove(2);
cities.display();
console.log();
cities.dispReverse();

