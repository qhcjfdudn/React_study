// arrow function

function add(first, second) { // add라는 이름을 갖는 함수
  return first + second;
}

let add = function(first, second) { // 익명 함수
  return first + second;
}

let add2 = (first, second) => { // 화살표 함수
  return first + second;
}

class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function(first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
  }
}