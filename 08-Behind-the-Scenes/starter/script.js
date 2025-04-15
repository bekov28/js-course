'use strict';

console.log(me); //undefined
console.log(job); //ReferenceError
console.log(year); //ReferenceError

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions

console.log(addDecl(2, 3)); //5
console.log(addEdExpr(2, 3)); //ReferenceError
console.log(addArrow(2, 3)); //ReferenceError
console.log(addAVarFunction(2, 3)); //TypeError -> undefined cant be function

function addDecl(a, b) {
  return a + b;
}

const addEdExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

var addAVarFunction = (a, b) => a + b; //error

