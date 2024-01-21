// 1. Shortest Program in JS: Empty file. Still, browsers make global EC and global space along with Window object.
// 2. Global Space: Anything that is not in a function, is in the global space.
// 3. Variables present in a global space can be accessed by a "window" object. (like window.a)
// 4. In global space, (this === window) object.

//window
//this
//Global state is nothing but any code you write inside js which is not inside function


// Notes:
// 	• window object is created by the JS engines of the respective browsers when global execution context is created.
// 	• whenever an execution context is created a "this" variable is also created.
// 	• at the global level "this" points to the global object( window object in case of browsers).
// 	• anything that is not inside a function is the "global space".
// 	• whenever we create any variables or functions in the "global space", they get attached to the global object( window object in case of browsers).
	
// 	so to access the variables/function defined in the global space , 
// 	we can use any of the below:
// 		console.log(window.a);
// 		console.log(a);
// 		console.log(this.a)             //at the global space level, where this points to the window object

var a = 10;
function b(){
    var x = 5;
}
console.log(window.a);
console.log(this.a);
console.log(a);