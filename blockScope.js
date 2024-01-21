//Block => {}
//Blocke Scope => let and Code 
// var = global Scope
//Blocke Scope

// {
//     var a = 10;
//     let b = 5;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

//block scope also follow lexical scope

const a = 20;
{
    const a = 100;{
        const a = 200;
        console.log(a);
    }
    console.log(a);
}
console.log(a);