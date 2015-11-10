/**
 * Created by Ellen on 2015. 11. 6..
 */
// 3.1 리스트 ADT
// 3.2 List 클래스 구현
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 리스트 요소를 저장할 빈 배열 초기화
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
    this.appendIfLargierThanAllElements = appendIfLargierThanAllElements;
}

//3.2.1 Append : 리스트에 요소 추가

function append(element) {
    this.dataStore[this.listSize++] = element;
}

//3.2.2 Find : 리스트의 요소 검색
// 리스트에서 삭제하려는 요소를 찾은 다음 요소를 삭제하고 나머지 배열 요소를 왼쪽으로 이동시켜 삭제된 자리 메우기

// 삭제할 요소를 찾는 헬퍼 함수
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

//3.2.3 Remove: 리스트의 요소 삭제
// find()로 요소가 리스트에 없을 경우 에러를 찾아낼 수 있다
// find() 함수의 반환값을 splice()함수에 넘겨주어 원하는 요소를 삭제한다
// 그런 다음 dataStore배열을 연결한다
// 요소를 삭제하면 true를 삭제하지 못했으면 false를 반환한다

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listsize;
        return true;
    }
    return false;
}

//3.2.4 Length: 리스트의 요소 개수
function length() {
    return this.listSize;
}

//3.2.5 toString: 리스트의 요소 확인
function toString() {
    return this.dataStore;
}

// 중간 TEST

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Ellen");

console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());

//3.2.6 Insert: 리스트에 요소 삽입

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

//3.2.7 Clear: 리스트의 모든 요소 삭제
// delete명령으로 dataStore 배열 삭제하고 빈 배열을 다시 만든다
// listzise와 pos를 0으로 초기화한다
function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}

//3.2.8 Contains: 리스트에 특정 값이 있는지 판단
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

//3.2.9 리스트 탐색
// getElement() 리스트의 현재 요소 출력

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize-1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

// 동작 테스트

var names2 = new List();
names2.append("Ellen");
names2.append("Raymond");
names2.append("Katy");
names2.append("Sophie");

names2.front();
console.log(names2.getElement()); //Ellen

names2.next();

console.log(names2.pos);
console.log(names2.getElement());

names2.next();
names2.next();

console.log(names2.pos);
console.log(names2.getElement());

names2.prev();
console.log(names2.getElement());

// 3.3 리스트와 반복

// 반복자 구현

for(names2.front(); names2.currPos() < names2.length(); names2.next()) {
    console.log(names2.currPos());
    console.log(names2.getElement());
}

var numbers = new List();

numbers.append(3);
numbers.append(4);
numbers.append(5);

console.log(numbers.toString());



