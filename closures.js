//Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, 
// even if its vanished in execution context but still it remembers the reference it was pointing to. 
// Its not just that function alone it returns but the entire closure and that's where it becomes int eresting 

// uses of closure
//   .Module Design Pattern
//   .Currying
//   .Function like once
//   .Memorize
//   .Maintaining state in async world
//   .Iterators
//   .and many more.....

// function x(){
//     var a =7;
// function y(){
//     console.log(a);
// }
// y();//return y;
// }
// x();

// function x(){
//     var a =7;
//     function y() {
//         console.log(a);
//     }
//     //a =100;
//     return y;
// }
// var z = x();
// console.log(z);
// z();


function z(){
    var b =900;
    function x() {
        var a = 7;
        function y() {
            console.log(a,b);
        }
        y();
    }
    x();
}
z();