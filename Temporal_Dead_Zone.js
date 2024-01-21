// 1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
// 2. Temporal Dead Zone exists until variable is declared and assigned a value.
// 3. window.variable OR this.variable will not give value of variable defined using let or const.
// 4. We cannot redeclare the same variable with let/const(even with using var the second time).
// 5. const variable declaration and initialisation must be done on the same line.
// 6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
// 7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
// 8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.

//referenceError
// console.log(x);
// let a = 10;
// var b = 100;

//syntaxError
// let a = 10;
// let a = 100;
//not allowed

// let a = 10;
// var a = 100;
//not allowed

// var a = 10;
// var a = 100;
//allowed

// let a;
// const b = 100;
// a = 10;
//allowed

// const b ;
// b = 100;
// console.log(b);
//not allowed

// typeError
// const b = 1000;
// b = 100;
//not allowed